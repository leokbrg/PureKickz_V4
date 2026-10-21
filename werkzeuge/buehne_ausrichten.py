import sys
sys.path.insert(0, '/home/user/material/werkzeuge')
import numpy as np
import studio_stage as st
S = sys.argv[1] if len(sys.argv) > 1 else '.'  # Ordner mit cut/src_N.png und cut/cut_N.png (Freisteller per rembg)
# Griffmitte (x) und Geräteoberkante (y) im 1536×1024-Foto
LM = {12: (686, 200), 6: (712, 77), 7: (754, 147)}
NAMES = {12: 'weich', 6: 'hart', 7: 'schwamm'}
a6, _, b6 = st.load(f'{S}/cut/src_6.png', f'{S}/cut/cut_6.png')
target = a6[b6].mean()

def place(a, fg, bgm, cw, ch, hx, top, n, anchor, out_w, out):
    ox = hx - LM[n][0]; oy = top - LM[n][1]
    # Foto zuschneiden, wo es über die Leinwand hinausragt (negativer Versatz links, unten)
    x0 = max(0, -ox); a, fg, bgm = a[:, x0:], fg[:, x0:], bgm[:, x0:]; ox = max(ox, 0)
    h = min(a.shape[0], ch - oy); a, fg, bgm = a[:h], fg[:h], bgm[:h]
    return st.build(a, fg, bgm, cw, ch, ox, oy, anchor, out_w, out)

for n in (12, 6, 7):
    a, fg, bgm = st.load(f'{S}/cut/src_{n}.png', f'{S}/cut/cut_{n}.png', target)
    # Desktop: 3000×1150, Griff bei x 420, Gerät oben bei y 326
    print(n, 'D', place(a, fg, bgm, 3000, 1150, 420, 326, n, ('left', 'bottom'), 2400, f'{S}/buehne-{NAMES[n]}.jpg'))
    # Handy: 1800×1300, Griff bei x 770, Gerät oben bei y 476
    print(n, 'M', place(a, fg, bgm, 1800, 1300, 770, 476, n, ('bottom',), 1200, f'{S}/buehne-{NAMES[n]}-hoch.jpg'))
