"""Studiofoto nahtlos in eine größere Fläche setzen – Variante für Fotos, bei denen Arm/Hand aus dem Bildrand laufen.
Das Foto liegt an den angegebenen Leinwandkanten an (dort kein Ausblenden), der Hintergrund wird per Diffusion
aus allen Hintergrundpixeln des Fotos fortgesetzt. Optional Helligkeit an einen Zielwert angleichen."""
import os
import numpy as np
from PIL import Image, ImageFilter

def load(src_path, cut_path, bg_target=None):
    a = np.asarray(Image.open(src_path).convert('RGB')).astype(np.float32)
    A = Image.open(cut_path).getchannel('A')
    fg = np.asarray(A).astype(np.float32) / 255
    bgm = np.asarray(A.filter(ImageFilter.MaxFilter(31))).astype(np.float32) / 255 < 0.02
    mean = a[bgm].mean(0)
    a = a * (mean.mean() / mean)                                   # Weißabgleich
    if bg_target is not None:
        a = a * (bg_target / a[bgm].mean())                        # gleiche Hintergrundhelligkeit
    return np.clip(a, 0, 255), fg, bgm

def build(a, fg, bgm, canvas_w, canvas_h, ox, oy, anchor, out_w, out_path, q=84, seed=3):
    H, W, _ = a.shape
    G = 12; gw, gh = canvas_w // G, canvas_h // G
    val = np.zeros((gh, gw, 3)); known = np.zeros((gh, gw), bool)
    for gy in range(gh):
        for gx in range(gw):
            x0, y0 = gx * G - ox, gy * G - oy
            if 0 <= x0 <= W - G and 0 <= y0 <= H - G:
                m = bgm[y0:y0 + G, x0:x0 + G]
                if m.sum() > G * G * 0.5:
                    val[gy, gx] = a[y0:y0 + G, x0:x0 + G][m].mean(0); known[gy, gx] = True
    f = val.copy(); f[~known] = val[known].mean(0)
    for _ in range(6000):
        p = np.pad(f, ((1, 1), (1, 1), (0, 0)), mode='edge')
        f = np.where(known[..., None], val, (p[:-2, 1:-1] + p[2:, 1:-1] + p[1:-1, :-2] + p[1:-1, 2:]) / 4)
    field = np.asarray(Image.fromarray(np.clip(f, 0, 255).astype('uint8')).resize((canvas_w, canvas_h), Image.BICUBIC)
                       .filter(ImageFilter.GaussianBlur(10))).astype(np.float32)
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    r = min(W, H) * 0.18
    big = 1e9
    dl = xx if 'left' not in anchor else big
    dr = (W - 1 - xx) if 'right' not in anchor else big
    dt = yy if 'top' not in anchor else big
    db = (H - 1 - yy) if 'bottom' not in anchor else big
    e = np.clip(np.minimum.reduce([dl + 0 * xx, dr + 0 * xx, dt + 0 * xx, db + 0 * xx]) / r, 0, 1)
    e = e * e * (3 - 2 * e)
    fgs = np.asarray(Image.fromarray((fg * 255).astype('uint8')).filter(ImageFilter.GaussianBlur(4))).astype(np.float32) / 255
    w = np.maximum(e, fgs)[..., None]
    out = field.copy()
    reg = out[oy:oy + H, ox:ox + W]
    out[oy:oy + H, ox:ox + W] = a * w + reg * (1 - w)
    out += np.random.default_rng(seed).normal(0, 0.9, out.shape)
    im = Image.fromarray(np.clip(out, 0, 255).astype('uint8'))
    im = im.resize((out_w, round(out_w * canvas_h / canvas_w)), Image.LANCZOS)
    im.save(out_path, 'JPEG', quality=q, optimize=True, progressive=True)
    return im.size, os.path.getsize(out_path) // 1024
