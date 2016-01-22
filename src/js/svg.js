/*!
 * VERSION: 0.8.1
 * DATE: 2015-12-18
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * This is a special version of the plugin that is only to be used on certain sites like codepen.io. It will redirect to a page on GreenSock.com if you try using it on a different domain. Please sign up for Club GreenSock to get the fully-functional version at http://greensock.com/club/
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * MorphSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * For licensing details, see http://greensock.com/licensing/
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var a = Math.PI / 180,
        b = 180 / Math.PI,
        c = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        d = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        e = /[achlmqstvz]/gi,
        f = _gsScope.TweenLite,
        g = "codepen",
        h = "MorphSVGPlugin",
        i = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
        j = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47),
        k = function(a) {
            if (true) return 1;
            return b && window && window.console && console.log(), b
        }(window ? window.location.host : ""),
        l = function(a) {
            window.console && console.log(a)
        },
        m = function(b, c) {
            var g, h, i, j, k, l, d = Math.ceil(Math.abs(c) / 90),
                e = 0,
                f = [];
            for (b *= a, c *= a, g = c / d, h = 4 / 3 * Math.sin(g / 2) / (1 + Math.cos(g / 2)), l = 0; d > l; l++) i = b + l * g, j = Math.cos(i), k = Math.sin(i), f[e++] = j - h * k, f[e++] = k + h * j, i += g, j = Math.cos(i), k = Math.sin(i), f[e++] = j + h * k, f[e++] = k - h * j, f[e++] = j, f[e++] = k;
            return f
        },
        n = function(c, d, e, f, g, h, i, j, k) {
            if (c !== j || d !== k) {
                e = Math.abs(e), f = Math.abs(f);
                var l = g % 360 * a,
                    n = Math.cos(l),
                    o = Math.sin(l),
                    p = (c - j) / 2,
                    q = (d - k) / 2,
                    r = n * p + o * q,
                    s = -o * p + n * q,
                    t = e * e,
                    u = f * f,
                    v = r * r,
                    w = s * s,
                    x = v / t + w / u;
                x > 1 && (e = Math.sqrt(x) * e, f = Math.sqrt(x) * f, t = e * e, u = f * f);
                var y = h === i ? -1 : 1,
                    z = (t * u - t * w - u * v) / (t * w + u * v);
                0 > z && (z = 0);
                var A = y * Math.sqrt(z),
                    B = A * (e * s / f),
                    C = A * -(f * r / e),
                    D = (c + j) / 2,
                    E = (d + k) / 2,
                    F = D + (n * B - o * C),
                    G = E + (o * B + n * C),
                    H = (r - B) / e,
                    I = (s - C) / f,
                    J = (-r - B) / e,
                    K = (-s - C) / f,
                    L = Math.sqrt(H * H + I * I),
                    M = H;
                y = 0 > I ? -1 : 1;
                var N = y * Math.acos(M / L) * b;
                L = Math.sqrt((H * H + I * I) * (J * J + K * K)), M = H * J + I * K, y = 0 > H * K - I * J ? -1 : 1;
                var O = y * Math.acos(M / L) * b;
                !i && O > 0 ? O -= 360 : i && 0 > O && (O += 360), O %= 360, N %= 360;
                var V, W, X, P = m(N, O),
                    Q = n * e,
                    R = o * e,
                    S = o * -f,
                    T = n * f,
                    U = P.length - 2;
                for (V = 0; U > V; V += 2) W = P[V], X = P[V + 1], P[V] = W * Q + X * S + F, P[V + 1] = W * R + X * T + G;
                return P[P.length - 2] = j, P[P.length - 1] = k, P
            }
        },
        o = function(a) {
            var j, k, m, o, p, q, r, s, t, u, v, w, x, b = (a + "").match(c) || [],
                d = [],
                e = 0,
                f = 0,
                g = b.length,
                h = 2,
                i = 0;
            if (!a || !isNaN(b[0]) || isNaN(b[1])) return l("ERROR: malformed path data: " + a), d;
            for (j = 0; g > j; j++)
                if (x = p, isNaN(b[j]) ? (p = b[j].toUpperCase(), q = p !== b[j]) : j--, m = +b[j + 1], o = +b[j + 2], q && (m += e, o += f), 0 === j && (s = m, t = o), "M" === p) r && r.length < 8 && (d.length -= 1, h = 0), e = s = m, f = t = o, r = [m, o], i += h, h = 2, d.push(r), j += 2, p = "L";
                else if ("C" === p) r || (r = [0, 0]), r[h++] = m, r[h++] = o, q || (e = f = 0), r[h++] = e + 1 * b[j + 3], r[h++] = f + 1 * b[j + 4], r[h++] = e += 1 * b[j + 5], r[h++] = f += 1 * b[j + 6], j += 6;
            else if ("S" === p) "C" === x || "S" === x ? (u = e - r[h - 4], v = f - r[h - 3], r[h++] = e + u, r[h++] = f + v) : (r[h++] = e, r[h++] = f), r[h++] = m, r[h++] = o, q || (e = f = 0), r[h++] = e += 1 * b[j + 3], r[h++] = f += 1 * b[j + 4], j += 4;
            else if ("Q" === p) u = m - e, v = o - f, r[h++] = e + 2 * u / 3, r[h++] = f + 2 * v / 3, q || (e = f = 0), e += 1 * b[j + 3], f += 1 * b[j + 4], u = m - e, v = o - f, r[h++] = e + 2 * u / 3, r[h++] = f + 2 * v / 3, r[h++] = e, r[h++] = f, j += 4;
            else if ("T" === p) u = e - r[h - 4], v = f - r[h - 3], r[h++] = e + u, r[h++] = f + v, u = e + 1.5 * u - m, v = f + 1.5 * v - o, r[h++] = m + 2 * u / 3, r[h++] = o + 2 * v / 3, r[h++] = e = m, r[h++] = f = o, j += 2;
            else if ("H" === p) o = f, r[h++] = e + (m - e) / 3, r[h++] = f + (o - f) / 3, r[h++] = e + 2 * (m - e) / 3, r[h++] = f + 2 * (o - f) / 3, r[h++] = e = m, r[h++] = o, j += 1;
            else if ("V" === p) o = m, m = e, q && (o += f - e), r[h++] = m, r[h++] = f + (o - f) / 3, r[h++] = m, r[h++] = f + 2 * (o - f) / 3, r[h++] = m, r[h++] = f = o, j += 1;
            else if ("L" === p || "Z" === p) "Z" === p && (m = s, o = t, r.closed = !0), ("L" === p || Math.abs(e - m) > .5 || Math.abs(f - o) > .5) && (r[h++] = e + (m - e) / 3, r[h++] = f + (o - f) / 3, r[h++] = e + 2 * (m - e) / 3, r[h++] = f + 2 * (o - f) / 3, r[h++] = m, r[h++] = o, "L" === p && (j += 2)), e = m, f = o;
            else if ("A" === p) {
                for (w = n(e, f, 1 * b[j + 1], 1 * b[j + 2], 1 * b[j + 3], 1 * b[j + 4], 1 * b[j + 5], (q ? e : 0) + 1 * b[j + 6], (q ? f : 0) + 1 * b[j + 7]), k = 0; k < w.length; k++) r[h++] = w[k];
                e = r[h - 2], f = r[h - 1], j += 7
            } else l("Error: malformed path data: " + a);
            return d.totalPoints = i + h, d
        },
        p = function(a, b) {
            var g, h, i, j, k, l, m, n, o, p, q, r, s, t, c = 0,
                d = .999999,
                e = a.length,
                f = b / ((e - 2) / 6);
            for (s = 2; e > s; s += 6)
                for (c += f; c > d;) g = a[s - 2], h = a[s - 1], i = a[s], j = a[s + 1], k = a[s + 2], l = a[s + 3], m = a[s + 4], n = a[s + 5], t = 1 / (Math.floor(c) + 1), o = g + (i - g) * t, q = i + (k - i) * t, o += (q - o) * t, q += (k + (m - k) * t - q) * t, p = h + (j - h) * t, r = j + (l - j) * t, p += (r - p) * t, r += (l + (n - l) * t - r) * t, a.splice(s, 4, g + (i - g) * t, h + (j - h) * t, o, p, o + (q - o) * t, p + (r - p) * t, q, r, k + (m - k) * t, l + (n - l) * t), s += 6, e += 6, c--;
            return a
        },
        q = function(a) {
            var e, f, g, h, b = "",
                c = a.length,
                d = 100;
            for (f = 0; c > f; f++) {
                for (h = a[f], b += "M" + h[0] + "," + h[1] + " C", e = h.length, g = 2; e > g; g++) b += (h[g++] * d | 0) / d + "," + (h[g++] * d | 0) / d + " " + (h[g++] * d | 0) / d + "," + (h[g++] * d | 0) / d + " " + (h[g++] * d | 0) / d + "," + (h[g] * d | 0) / d + " ";
                h.closed && (b += "z")
            }
            return b
        },
        r = function(a) {
            for (var b = [], c = a.length - 1, d = 0; --c > -1;) b[d++] = a[c], b[d++] = a[c + 1], c--;
            for (c = 0; d > c; c++) a[c] = b[c];
            a.reversed = a.reversed ? !1 : !0
        },
        s = function(a) {
            var e, b = a.length,
                c = 0,
                d = 0;
            for (e = 0; b > e; e++) c += a[e++], d += a[e];
            return [c / (b / 2), d / (b / 2)]
        },
        t = function(a) {
            var g, h, i, b = a.length,
                c = a[0],
                d = c,
                e = a[1],
                f = e;
            for (i = 6; b > i; i += 6) g = a[i], h = a[i + 1], g > c ? c = g : d > g && (d = g), h > e ? e = h : f > h && (f = h);
            return a.centerX = (c + d) / 2, a.centerY = (e + f) / 2, a.size = (c - d) * (e - f)
        },
        u = function(a) {
            for (var g, h, i, j, k, b = a.length, c = a[0][0], d = c, e = a[0][1], f = e; --b > -1;)
                for (k = a[b], g = k.length, j = 6; g > j; j += 6) h = k[j], i = k[j + 1], h > c ? c = h : d > h && (d = h), i > e ? e = i : f > i && (f = i);
            return a.centerX = (c + d) / 2, a.centerY = (e + f) / 2, a.size = (c - d) * (e - f)
        },
        v = function(a, b) {
            return b.length - a.length
        },
        w = function(a, b) {
            var c = a.size || t(a),
                d = b.size || t(b);
            return Math.abs(d - c) < (c + d) / 20 ? b.centerX - a.centerX || b.centerY - a.centerY : d - c
        },
        x = function(a, b) {
            var f, g, c = a.slice(0),
                d = a.length,
                e = d - 2;
            for (b = 0 | b, f = 0; d > f; f++) g = (f + b) % e, a[f++] = c[g], a[f] = c[g + 1]
        },
        y = function(a, b, c, d, e) {
            var i, j, k, l, f = a.length,
                g = 0,
                h = f - 2;
            for (c *= 6, j = 0; f > j; j += 6) i = (j + c) % h, l = a[i] - (b[j] - d), k = a[i + 1] - (b[j + 1] - e), g += Math.sqrt(k * k + l * l);
            return g
        },
        z = function(a, b, c) {
            var k, l, m, d = a.length,
                e = s(a),
                f = s(b),
                g = f[0] - e[0],
                h = f[1] - e[1],
                i = y(a, b, 0, g, h),
                j = 0;
            for (m = 6; d > m; m += 6) l = y(a, b, m / 6, g, h), i > l && (i = l, j = m);
            if (c)
                for (k = a.slice(0), r(k), m = 6; d > m; m += 6) l = y(k, b, m / 6, g, h), i > l && (i = l, j = -m);
            return j / 6
        },
        A = function(a, b, c) {
            for (var h, i, j, k, l, m, d = a.length, e = 99999999999, f = 0, g = 0; --d > -1;)
                for (h = a[d], m = h.length, l = 0; m > l; l += 6) i = h[l] - b, j = h[l + 1] - c, k = Math.sqrt(i * i + j * j), e > k && (e = k, f = h[l], g = h[l + 1]);
            return [f, g]
        },
        B = function(a, b, c, d, e, f) {
            var m, n, o, p, q, g = b.length,
                h = 0,
                i = Math.min(a.size || t(a), b[c].size || t(b[c])) * d,
                j = 999999999999,
                k = a.centerX + e,
                l = a.centerY + f;
            for (n = c; g > n && (m = b[n].size || t(b[n]), !(i > m)); n++) o = b[n].centerX - k, p = b[n].centerY - l, q = Math.sqrt(o * o + p * p), j > q && (h = n, j = q);
            return q = b[h], b.splice(h, 1), q
        },
        C = function(a, b, c, d) {
            var q, s, y, C, D, E, F, e = b.length - a.length,
                f = e > 0 ? b : a,
                g = e > 0 ? a : b,
                h = 0,
                i = "complexity" === d ? v : w,
                j = "position" === d ? 0 : "number" == typeof d ? d : .8,
                k = g.length,
                m = "object" == typeof c && c.push ? c.slice(0) : [c],
                n = "reverse" === m[0] || m[0] < 0,
                o = "log" === c;
            if (g[0]) {
                if (f.length > 1 && (a.sort(i), b.sort(i), E = f.size || u(f), E = g.size || u(g), E = f.centerX - g.centerX, F = f.centerY - g.centerY, i === w))
                    for (k = 0; k < g.length; k++) f.splice(k, 0, B(g[k], f, k, j, E, F));
                if (e)
                    for (0 > e && (e = -e), f[0].length > g[0].length && p(g[0], (f[0].length - g[0].length) / 6 | 0), k = g.length; e > h;) C = f[k].size || t(f[k]), y = A(g, f[k].centerX, f[k].centerY), C = y[0], D = y[1], g[k++] = [C, D, C, D, C, D, C, D], g.totalPoints += 8, h++;
                for (k = 0; k < a.length; k++) q = b[k], s = a[k], e = q.length - s.length, 0 > e ? p(q, -e / 6 | 0) : e > 0 && p(s, e / 6 | 0), n && !s.reversed && r(s), c = m[k] || 0 === m[k] ? m[k] : "auto", c && (s.closed || Math.abs(s[0] - s[s.length - 2]) < .5 && Math.abs(s[1] - s[s.length - 1]) < .5 ? "auto" === c || "log" === c ? (m[k] = c = z(s, q, 0 === k), 0 > c && (n = !0, r(s), c = -c), x(s, 6 * c)) : "reverse" !== c && (k && 0 > c && r(s), x(s, 6 * (0 > c ? -c : c))) : !n && ("auto" === c && Math.abs(q[0] - s[0]) + Math.abs(q[1] - s[1]) + Math.abs(q[q.length - 2] - s[s.length - 2]) + Math.abs(q[q.length - 1] - s[s.length - 1]) > Math.abs(q[0] - s[s.length - 2]) + Math.abs(q[1] - s[s.length - 1]) + Math.abs(q[q.length - 2] - s[0]) + Math.abs(q[q.length - 1] - s[1]) || c % 2) ? (r(s), m[k] = -1, n = !0) : "auto" === c ? m[k] = 0 : "reverse" === c && (m[k] = -1), s.closed !== q.closed && (s.closed = q.closed = !1));
                return o && l("shapeIndex: " + m), m
            }
        },
        D = function(a, b, c, d) {
            var e = o(a[0]),
                f = o(a[1]);
            C(e, f, b || 0 === b ? b : "auto", c) && (a[0] = q(e), a[1] = q(f), ("log" === d || d === !0) && l('precompile:["' + a[0] + '","' + a[1] + '"]'))
        },
        E = function(a, b, c) {
            return b || c || a || 0 === a ? function(d) {
                D(d, a, b, c)
            } : D
        },
        F = function(a, b) {
            if (!b) return a;
            var g, h, i, c = a.match(d) || [],
                e = c.length,
                f = "";
            for ("reverse" === b ? (h = e - 1, g = -2) : (h = (2 * (parseInt(b, 10) || 0) + 1 + 100 * e) % e, g = 2), i = 0; e > i; i += 2) f += c[h - 1] + "," + c[h] + " ", h = (h + g) % e;
            return f
        },
        G = function(a, b) {
            var h, i, j, k, l, m, n, c = 0,
                d = parseFloat(a[0]),
                e = parseFloat(a[1]),
                f = d + "," + e + " ",
                g = .999999;
            for (j = a.length, h = .5 * b / (.5 * j - 1), i = 0; j - 2 > i; i += 2) {
                if (c += h, m = parseFloat(a[i + 2]), n = parseFloat(a[i + 3]), c > g)
                    for (l = 1 / (Math.floor(c) + 1), k = 1; c > g;) f += (d + (m - d) * l * k).toFixed(2) + "," + (e + (n - e) * l * k).toFixed(2) + " ", c--, k++;
                f += m + "," + n + " ", d = m, e = n
            }
            return f
        },
        H = function(a) {
            var b = a[0].match(d) || [],
                c = a[1].match(d) || [],
                e = c.length - b.length;
            e > 0 ? a[0] = G(b, e) : a[1] = G(c, -e)
        },
        I = function(a) {
            return isNaN(a) ? H : function(b) {
                H(b), b[1] = F(b[1], parseInt(a, 10))
            }
        },
        J = function(a, b) {
            var c = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                d = Array.prototype.slice.call(a.attributes),
                e = d.length;
            for (b = "," + b + ","; --e > -1;) - 1 === b.indexOf("," + d[e].nodeName + ",") && c.setAttributeNS(null, d[e].nodeName, d[e].nodeValue);
            return c
        },
        K = function(a, b) {
            var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, c = a.tagName.toLowerCase(),
                e = .552284749831;
            return "path" !== c && a.getBBox ? (k = J(a, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), "rect" === c ? (i = +a.getAttribute("rx") || 0, j = +a.getAttribute("ry") || 0, g = +a.getAttribute("x") || 0, h = +a.getAttribute("y") || 0, o = (+a.getAttribute("width") || 0) - 2 * i, p = (+a.getAttribute("height") || 0) - 2 * j, i || j ? (q = g + i * (1 - e), r = g + i, s = r + o, t = s + i * e, u = s + i, v = h + j * (1 - e), w = h + j, x = w + p, y = x + j * e, z = x + j, f = "M" + u + "," + w + " V" + x + " C" + [u, y, t, z, s, z, s - (s - r) / 3, z, r + (s - r) / 3, z, r, z, q, z, g, y, g, x, g, x - (x - w) / 3, g, w + (x - w) / 3, g, w, g, v, q, h, r, h, r + (s - r) / 3, h, s - (s - r) / 3, h, s, h, t, h, u, v, u, w].join(",") + "z") : f = "M" + (g + o) + "," + h + " v" + p + " h" + -o + " v" + -p + " h" + o + "z") : "circle" === c || "ellipse" === c ? ("circle" === c ? (i = j = +a.getAttribute("r") || 0, m = i * e) : (i = +a.getAttribute("rx") || 0, j = +a.getAttribute("ry") || 0, m = j * e), g = +a.getAttribute("cx") || 0, h = +a.getAttribute("cy") || 0, l = i * e, f = "M" + (g + i) + "," + h + " C" + [g + i, h + m, g + l, h + j, g, h + j, g - l, h + j, g - i, h + m, g - i, h, g - i, h - m, g - l, h - j, g, h - j, g + l, h - j, g + i, h - m, g + i, h].join(",") + "z") : "line" === c ? f = "M" + a.getAttribute("x1") + "," + a.getAttribute("y1") + " L" + a.getAttribute("x2") + "," + a.getAttribute("y2") : ("polyline" === c || "polygon" === c) && (n = (a.getAttribute("points") + "").match(d) || [], g = n.shift(), h = n.shift(), f = "M" + g + "," + h + " L" + n.join(","), "polygon" === c && (f += "," + g + "," + h + "z")), k.setAttribute("d", f), b && a.parentNode && (a.parentNode.insertBefore(k, a), a.parentNode.removeChild(a)), k) : a
        },
        L = function(a, b, c) {
            var g, h, e = "string" == typeof a;
            return (!e || (a.match(d) || []).length < 3) && (g = e ? f.selector(a) : [a], g && g[0] ? (g = g[0], h = g.nodeName.toUpperCase(), b && "PATH" !== h && (g = K(g, !1), h = "PATH"), a = g.getAttribute("PATH" === h ? "d" : "points") || "", g === c && (a = g.getAttributeNS(null, "data-original") || a)) : (l("WARNING: invalid morph to: " + a), a = !1)), a
        },
        M = "Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",
        N = _gsScope._gsDefine.plugin({
            propName: "morphSVG",
            API: 2,
            global: !0,
            version: "0.8.1",
            init: function(a, b, c) {
                var d, f, m, n, o;
                return "function" != typeof a.setAttribute ? !1 : k ? (d = a.nodeName.toUpperCase(), o = "POLYLINE" === d || "POLYGON" === d, "PATH" === d || o ? (f = "PATH" === d ? "d" : "points", ("string" == typeof b || b.getBBox || b[0]) && (b = {
                    shape: b
                }), n = L(b.shape || b.d || b.points || "", "d" === f, a), o && e.test(n) ? (l("WARNING: a <" + d + "> cannot accept path data. " + M), !1) : (n && (this._target = a, a.getAttributeNS(null, "data-original") || a.setAttributeNS(null, "data-original", a.getAttribute(f)), m = this._addTween(a, "setAttribute", a.getAttribute(f) + "", n + "", "morphSVG", !1, f, "object" == typeof b.precompile ? function(a) {
                    a[0] = b.precompile[0], a[1] = b.precompile[1]
                } : "d" === f ? E(b.shapeIndex, b.map || N.defaultMap, b.precompile) : I(b.shapeIndex)), m && (this._overwriteProps.push("morphSVG"), m.end = n, m.endProp = f)), k)) : (l("WARNING: cannot morph a <" + d + "> SVG element. " + M), !1)) : (window.location.href = "http://" + i + j + "?plugin=" + h + "&source=" + g, !1)
            },
            set: function(a) {
                var b;
                if (this._super.setRatio.call(this, a), 1 === a)
                    for (b = this._firstPT; b;) b.end && this._target.setAttribute(b.endProp, b.end), b = b._next
            }
        });
    N.pathFilter = D, N.pointsFilter = H, N.subdivideRawBezier = p, N.defaultMap = "size", N.pathDataToRawBezier = function(a) {
        return o(L(a, !0))
    }, N.equalizeSegmentQuantity = C, N.convertToPath = function(a, b) {
        "string" == typeof a && (a = f.selector(a));
        for (var c = a && 0 !== a.length ? a.length && a[0] && a[0].nodeType ? Array.prototype.slice.call(a, 0) : [a] : [], d = c.length; --d > -1;) c[d] = K(c[d], b !== !1);
        return c
    }, N.pathDataToBezier = function(a, b) {
        var e, g, h, i, j, k, l, m, c = o(L(a, !0))[0] || [],
            d = 0;
        if (b = b || {}, m = b.align || b.relative, i = b.matrix || [1, 0, 0, 1, 0, 0], j = b.offsetX || 0, k = b.offsetY || 0, "relative" === m || m === !0 ? (j -= c[0] * i[0] + c[1] * i[2], k -= c[0] * i[1] + c[1] * i[3], d = "+=") : (j += i[4], k += i[5], m && (m = "string" == typeof m ? f.selector(m) : [m], m && m[0] && (l = m[0].getBBox() || {
                x: 0,
                y: 0
            }, j -= l.x, k -= l.y))), e = [], h = c.length, i)
            for (g = 0; h > g; g += 2) e.push({
                x: d + (c[g] * i[0] + c[g + 1] * i[2] + j),
                y: d + (c[g] * i[1] + c[g + 1] * i[3] + k)
            });
        else
            for (g = 0; h > g; g += 2) e.push({
                x: d + (c[g] + j),
                y: d + (c[g + 1] + k)
            });
        return e
    }
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();