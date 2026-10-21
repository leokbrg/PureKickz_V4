"""Setzt ein Studiofoto nahtlos in eine größere Leinwand: Hintergrund als weiche Fläche (Diffusion) aus den
echten Hintergrundpixeln der Bildmitte, Foto mit weichem Rand darüber, Produkt bleibt unangetastet."""
import sys, os
import numpy as np
from PIL import Image, ImageFilter

def build(src_path, cut_path, canvas_w, canvas_h, ox, oy, out_w, out_path, q=84):
    src = Image.open(src_path).convert('RGB'); cut = Image.open(cut_path)
    a = np.asarray(src).astype(np.float32); H, W, _ = a.shape
    fg = np.asarray(cut.getchannel('A')).astype(np.float32) / 255
    bgm = np.asarray(cut.getchannel('A').filter(ImageFilter.MaxFilter(41))).astype(np.float32) / 255 < 0.02
    mean = a[bgm].mean(0); a = np.clip(a * (mean.mean() / mean), 0, 255)          # Weißabgleich
    # Bedingungen nur aus der hellen, gleichmäßigen Bildmitte (Ecken-Vignette ignorieren)
    cons = bgm.copy(); cons[:, : int(W * 0.18)] = False; cons[:, int(W * 0.82):] = False; cons[: int(H * 0.06)] = False
    G = 16; gw, gh = canvas_w // G, canvas_h // G
    val = np.zeros((gh, gw, 3)); known = np.zeros((gh, gw), bool)
    for gy in range(gh):
        for gx in range(gw):
            x0, y0 = gx * G - ox, gy * G - oy
            if 0 <= x0 < W - G and 0 <= y0 < H - G:
                m = cons[y0:y0 + G, x0:x0 + G]
                if m.sum() > G * G * 0.6:
                    val[gy, gx] = a[y0:y0 + G, x0:x0 + G][m].mean(0); known[gy, gx] = True
    f = val.copy(); f[~known] = val[known].mean(0)
    for _ in range(4000):                                                           # Diffusion (Laplace)
        p = np.pad(f, ((1, 1), (1, 1), (0, 0)), mode='edge')
        avg = (p[:-2, 1:-1] + p[2:, 1:-1] + p[1:-1, :-2] + p[1:-1, 2:]) / 4
        f = np.where(known[..., None], val, avg)
    field = np.asarray(Image.fromarray(np.clip(f, 0, 255).astype('uint8')).resize((canvas_w, canvas_h), Image.BICUBIC)).astype(np.float32)
    field = np.asarray(Image.fromarray(field.astype('uint8')).filter(ImageFilter.GaussianBlur(24))).astype(np.float32)
    # Foto weich einblenden: Rand 22 % ausblenden, Produkt immer voll
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    def ramp(d, r): return np.clip(d / r, 0, 1)
    r = min(W, H) * 0.22
    edge = np.minimum.reduce([ramp(xx, r), ramp(W - 1 - xx, r), ramp(yy, r), ramp(H - 1 - yy, r)])
    edge = edge * edge * (3 - 2 * edge)
    w = np.maximum(edge, np.asarray(Image.fromarray((fg * 255).astype('uint8')).filter(ImageFilter.GaussianBlur(6))).astype(np.float32) / 255)
    out = field.copy()
    reg = out[oy:oy + H, ox:ox + W]
    out[oy:oy + H, ox:ox + W] = a * w[..., None] + reg * (1 - w[..., None])
    out += np.random.default_rng(3).normal(0, 0.9, out.shape)
    im = Image.fromarray(np.clip(out, 0, 255).astype('uint8'))
    im = im.resize((out_w, round(out_w * canvas_h / canvas_w)), Image.LANCZOS); im.save(out_path, 'JPEG', quality=q, optimize=True, progressive=True)
    return im.size, os.path.getsize(out_path) // 1024

if __name__ == '__main__':
    S = sys.argv[1]
    print('Tablet', build(f'{S}/cut/src_1.png', f'{S}/cut/cut_1.png', 3072, 2600, 768, 260, 2200, f'{S}/hero-tablet.jpg'))
