function distance(r, e) {
    var t, n, a = 0;
    if (0 === r.length || 0 === e.length) return 0;
    if ((r = r.toUpperCase()) === (e = e.toUpperCase())) return 1;
    var h = Math.floor(Math.max(r.length, e.length) / 2) - 1, f = new Array(r.length), l = new Array(e.length);
    for (t = 0; t < r.length; t++) {
        var g = t >= h ? t - h : 0, o = t + h <= e.length - 1 ? t + h : e.length - 1;
        for (n = g; n <= o; n++) if (!0 !== f[t] && !0 !== l[n] && r[t] === e[n]) {
            ++a, f[t] = l[n] = !0;
            break
        }
    }
    if (0 === a) return 0;
    var i = 0, u = 0;
    for (t = 0; t < r.length; t++) if (!0 === f[t]) {
        for (n = i; n < e.length; n++) if (!0 === l[n]) {
            i = n + 1;
            break
        }
        r[t] !== e[n] && ++u
    }
    var v = (a / r.length + a / e.length + (a - u / 2) / a) / 3, p = 0;
    if (v > .7) {
        for (; r[p] === e[p] && p < 4;) ++p;
        v += .1 * p * (1 - v)
    }
    return v
}