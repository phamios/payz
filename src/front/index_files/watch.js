﻿(function(g, k, N) {
    function lb(a, b, c, d) {
        function e(a) {
            var b = (new Date).getTime();
            a && b < a && (Oa += a - b + 20);
            f.setTimeout(function() {
                e(b)
            }, 20, "timeCorrector")
        }

        function n() {
            var a = (new Date).getTime() + Oa;
            a < Fa && (a = Fa + 10);
            return Fa = a
        }

        function q() {
            return Math.round((n() - na) / 50)
        }

        function W(a, b) {
            b = Math.max(0, Math.min(b, 65535));
            f.mergeArrays(a, [b >> 8, b & 255])
        }

        function p(a, b) {
            f.mergeArrays(a, [b & 255])
        }

        function l(a, b) {
            for (b = Math.max(0, b | 0); 127 < b;) f.mergeArrays(a, [b & 127 | 128]), b >>= 7;
            f.mergeArrays(a, [b])
        }

        function t(a, b) {
            255 <
                b.length && (b = b.substr(0, 255));
            f.mergeArrays(a, [b.length]);
            for (var c = 0; c < b.length; c++) W(a, b.charCodeAt(c))
        }

        function Ga(a, b) {
            l(a, b.length);
            for (var c = 0; c < b.length; c++) l(a, b.charCodeAt(c))
        }

        function A(a, b, c, d, e, f) {
            for (var G; c && (G = m.getElementSize(c)) && (!G[0] || !G[1]);) c = m.getElementParent(c);
            if (!c) return null;
            G = c[D];
            if (!G || 0 > G) return null;
            var n = {
                mousemove: 2,
                click: 32,
                dblclick: 33,
                mousedown: 4,
                mouseup: 30,
                touch: 12
            }[b];
            if (!n) return null;
            var g = m.getElementXY(c);
            c = [];
            p(c, n);
            l(c, a);
            l(c, G);
            l(c, Math.max(0, d[0] - g[0]));
            l(c, Math.max(0, d[1] - g[1]));
            /^mouse(up|down)|click$/.test(b) && (a = e || f, p(c, 2 > a ? 1 : a == (e ? 2 : 4) ? 4 : 2));
            return c
        }

        function F(a, b, c, d) {
            b = b[D];
            if (!b || 0 > b) return null;
            var e = [];
            p(e, 31);
            l(e, a);
            l(e, b);
            l(e, c[0]);
            l(e, c[1]);
            p(e, 0);
            p(e, 0);
            p(e, d);
            return e
        }

        function w(a, b) {
            var c = [];
            p(c, 3);
            l(c, a);
            l(c, b[0]);
            l(c, b[1]);
            return c
        }

        function K(a, b, c) {
            var d = [];
            c = c[D];
            if (!c || 0 > c) return null;
            p(d, 16);
            l(d, a);
            l(d, b[0]);
            l(d, b[1]);
            l(d, c);
            return d
        }

        function I(a, b, c) {
            var d = [];
            p(d, 28);
            l(d, a);
            l(d, b[0]);
            l(d, b[1]);
            l(d, c[0]);
            l(d, c[1]);
            return d
        }

        function M(a, b, c, d) {
            var e = [];
            p(e, 5);
            l(e, a);
            W(e, b);
            p(e, c);
            a = d[D];
            if (!a || 0 > a) a = 0;
            l(e, a);
            return e
        }

        function N(a, b) {
            var c;
            if (0 == b.length) var d = c = "";
            else 100 >= b.length ? (c = b, d = "") : 200 >= b.length ? (c = b.substr(0, 100), d = b.substr(100)) : (c = b.substr(0, 97), d = b.substr(b.length - 97));
            var e = [];
            p(e, 29);
            l(e, a);
            Ga(e, c);
            Ga(e, d);
            return e
        }

        function y(a) {
            var b = [];
            p(b, 27);
            l(b, a);
            return b
        }

        function nb(a) {
            var b = [];
            p(b, 14);
            l(b, a);
            return b
        }

        function ob(a) {
            var b = [];
            p(b, 15);
            l(b, a);
            return b
        }

        function pb(a, b) {
            var c = [];
            p(c, 17);
            l(c, a);
            l(c,
                b[D]);
            return c
        }

        function ka(a, b) {
            var c = [];
            p(c, 18);
            l(c, a);
            l(c, b[D]);
            return c
        }

        function la(a, b, c) {
            var d = [];
            p(d, 19);
            l(d, a);
            l(d, b[D]);
            t(d, String(c));
            return d
        }

        function fa(a) {
            var b = a[D];
            if (!b || 0 > b || !/^INPUT|SELECT|TEXTAREA$/.test(a.nodeName) || !a.form || oa(a.form)) return null;
            var c = m.getFormNumber(a.form);
            if (0 > c) return null;
            var d = "INPUT" == a.nodeName ? {
                text: 0,
                color: 0,
                date: 0,
                datetime: 0,
                "datetime-local": 0,
                email: 0,
                number: 0,
                range: 0,
                search: 0,
                tel: 0,
                time: 0,
                url: 0,
                month: 0,
                week: 0,
                password: 2,
                radio: 3,
                checkbox: 4,
                file: 6,
                image: 7
            }[a.type] : {
                SELECT: 1,
                TEXTAREA: 5
            }[a.nodeName];
            if ("number" != typeof d) return null;
            for (var e = -1, f = a.form.elements, G = f.length, n = 0, g = 0; n < G; n++)
                if (f[n].name == a.name) {
                    if (f[n] == a) {
                        e = g;
                        break
                    }
                    g++
                }
            if (0 > e) return null;
            f = [];
            p(f, 7);
            l(f, b);
            l(f, c);
            l(f, d);
            Ga(f, a.name || "");
            l(f, e);
            return f
        }

        function P(a, b) {
            var c = m.getFormNumber(b);
            if (0 > c) return null;
            for (var d = b.elements, e = d.length, G = [], n = 0; n < e; n++)
                if (!m.isEmptyField(d[n])) {
                    var g = d[n][D];
                    g && 0 < g && f.mergeArrays(G, [g])
                }
            d = [];
            p(d, 11);
            l(d, a);
            l(d, c);
            l(d, G.length);
            for (c = 0; c < G.length; c++) l(d,
                G[c]);
            return d
        }

        function xa() {
            var a = [];
            p(a, 13);
            return a
        }

        function v(a, b, c) {
            a = a.apply(g, b);
            ma.append(a, c)
        }

        function H(a) {
            if (a[D]) a: {
                var b = q(),
                    c = a[D];
                if (0 < c) {
                    var d = [];
                    a = m.getElementRegion(a);
                    var e = da[c],
                        f = a[0] + "x" + a[1],
                        n = a[2] + "x" + a[3];
                    f != e.pos && (e.pos = f, p(d, 9), l(d, b), l(d, c), l(d, a[0]), l(d, a[1]));
                    n != e.size && (e.size = n, p(d, 10), l(d, b), l(d, c), l(d, a[2]), l(d, a[3]));
                    if (d.length) {
                        a = d;
                        break a
                    }
                }
                a = null
            }
            else {
                (c = m.getElementParent(a)) && H(c);
                a[D] = S;
                da[S] = {};
                S++;
                if (a.nodeName)
                    if (c = +a[D], !isFinite(c) || 0 >= c) b = null;
                    else {
                        var d =
                            64,
                            e = 0,
                            g = m.getElementParent(a),
                            f = g && g[D] ? g[D] : 0;
                        0 > f && (f = 0);
                        var n = a.nodeName.toUpperCase(),
                            G = qb[n];
                        G || (d |= 2);
                        var k = m.getElementNeighborPosition(a);
                        k || (d |= 4);
                        var u = m.getElementRegion(a);
                        (g = g ? m.getElementRegion(g) : null) && u[0] == g[0] && u[1] == g[1] && u[2] == g[2] && u[3] == g[3] && (d |= 8);
                        da[c].pos = u[0] + "x" + u[1];
                        da[c].size = u[2] + "x" + u[3];
                        a.id && "string" == typeof a.id && (d |= 32);
                        (g = m.calcTextChecksum(a)) && (d |= 16);
                        var B = m.calcAttribChecksum(a);
                        B && (e |= 2);
                        b: {
                            var h = m.getElementChildren(m.getElementParent(a), a.tagName);
                            for (var J =
                                    0; J < h.length; J++)
                                if ((!h[J].id || "string" != typeof h[J].id) && m.calcAttribChecksum(h[J]) == B && m.calcTextChecksum(h[J]) == g) {
                                    h = !0;
                                    break b
                                }
                            h = !1
                        }
                        h && (d |= 1, b = m.calcChildrenChecksum(a));
                        h = [];
                        p(h, 1);
                        l(h, c);
                        p(h, d);
                        l(h, f);
                        G ? p(h, G) : t(h, n);
                        k && l(h, k);
                        d & 8 || (l(h, u[0]), l(h, u[1]), l(h, u[2]), l(h, u[3]));
                        d & 32 && t(h, a.id);
                        g && W(h, g);
                        d & 1 && W(h, b);
                        p(h, e);
                        B && W(h, B);
                        b = h
                    }
                else a[D] = -1, b = null;
                ma.append(b, void 0);
                a = fa(a)
            }
            ma.append(a, void 0)
        }

        function Z(a, b) {
            var c = a && m.classNameExists(a, "(ym-disable-keys|-metrika-nokeys)");
            b && a && (c = c ||
                !!m.getElementsByClassName("(ym-disable-keys|-metrika-nokeys)", a).length);
            return c
        }

        function oa(a) {
            return a && m.classNameExists(a, "(ym-disable-submit|-metrika-noform)")
        }

        function Q(a) {
            var b = z.getTarget(a);
            if (b && "SCROLLBAR" != b.nodeName) {
                if (/^INPUT|SELECT|TEXTAREA|BUTTON$/.test(b.tagName))
                    if (b[D]) H(b);
                    else {
                        var c = b.form;
                        if (c)
                            for (var c = c.elements, d = c.length, e = 0; e < d; e++) /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(c[e].tagName) && !c[e][D] && H(c[e]);
                        else H(b)
                    }
                else H(b);
                v(A, [q(), a.type, b, z.getPos(a), a.which, a.button])
            }
        }

        function X(a) {
            Q(a);
            a: {
                if (g.getSelection) {
                    try {
                        var b = g.getSelection()
                    } catch (mb) {
                        break a
                    }
                    var c = b.toString();
                    var d = b.anchorNode
                } else k.selection && k.selection.createRange && (a = k.selection.createRange(), c = a.text, d = a.parentElement());
                if ("string" == typeof c) {
                    try {
                        for (; d && 1 != d.nodeType;) d = d.parentNode
                    } catch (mb) {
                        break a
                    }
                    d && L(d) || Z(d, !0) || c == V || (V = c, v(N, [q(), c]))
                }
            }
        }

        function ca(a) {
            var b = n(),
                c = b - U;
            if (!(10 > c)) {
                var d = z.getPos(a),
                    e = aa[0] - d[0],
                    f = aa[1] - d[1],
                    e = e * e + f * f;
                0 >= e || 16 > e && 100 > c || 20 > c && 256 > e || (U = b, aa = d, Q(a))
            }
        }

        function ha() {
            var a =
                m.getDocumentScroll(),
                b = n();
            10 > b - Y || 10 > Math.abs(a[0] - ba[0]) && 10 > Math.abs(a[1] - ba[1]) || (Y = b, ba = a, v(w, [q(), a]))
        }

        function B(a) {
            if (a = z.getTarget(a)) {
                var b = Math.random(),
                    c = [a.scrollLeft, a.scrollTop];
                if (a.localId) {
                    if (b = ea[a.localId], !b || 10 > Math.abs(c[0] - b[0]) && 10 > Math.abs(c[1] - b[1])) return
                } else {
                    for (; ea[b];) b = Math.random();
                    a.localId = b
                }
                ea[a.localId] = c;
                a !== k && (H(a), v(K, [q(), c, a]))
            }
        }

        function u() {
            v(I, [q(), m.getViewportSize(), m.getDocumentSize()])
        }

        function J() {
            v(xa, [], !0)
        }

        function E(a) {
            return (a.shiftKey ? 2 : 0) |
                (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
        }

        function L(a) {
            return "INPUT" == a.tagName ? "password" == a.type || a.name && ia.test(a.name) || a.id && ia.test(a.id) : !1
        }

        function ya(a, b, c) {
            !(a = z.getTarget(a)) || L(a) || Z(a) || (H(a), v(M, [q(), b, c, a]))
        }

        function Pa(a) {
            var b = a.keyCode,
                c = E(a);
            if ({
                    3: 1,
                    8: 1,
                    9: 1,
                    13: 1,
                    16: 1,
                    17: 1,
                    18: 1,
                    19: 1,
                    20: 1,
                    27: 1,
                    33: 1,
                    34: 1,
                    35: 1,
                    36: 1,
                    37: 1,
                    38: 1,
                    39: 1,
                    40: 1,
                    45: 1,
                    46: 1,
                    91: 1,
                    92: 1,
                    93: 1,
                    106: 1,
                    110: 1,
                    111: 1,
                    144: 1,
                    145: 1
                }[b] || 112 <= b && 123 >= b || 96 <= b && 105 >= b || c & 16) 19 == b && 4 == (c & -17) &&
                (b = 144), ya(a, b, c | 16), T = !1, f.setTimeout(function() {
                    T = !0
                }, 1), !(67 == b && c & 4) || c & 1 || c & 2 || Ha()
        }

        function Qa(a) {
            T && !R && 0 !== a.which && (ya(a, a.charCode || a.keyCode, E(a)), R = !0, f.setTimeout(function() {
                R = !1
            }, 1))
        }

        function Ha() {
            ga || (ga = !0, V && v(y, [q()]), f.setTimeout(function() {
                ga = !1
            }, 1))
        }

        function Ia() {
            pa || (pa = !0, v(nb, [q()]))
        }

        function qa() {
            pa && (pa = !1, v(ob, [q()]))
        }

        function Ra(a) {
            (!pa || a && !a.fromElement) && Ia()
        }

        function Sa(a) {
            a && !a.toElement && qa()
        }

        function za(a) {
            if ((a = z.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName)) {
                if (a[D]) H(a);
                else {
                    var b = a.form;
                    if (b)
                        for (var b = b.elements, c = b.length, d = 0; d < c; d++) /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(b[d].tagName) && !b[d][D] && H(b[d]);
                    else H(a)
                }
                v(pb, [q(), a])
            }
        }

        function Aa(a) {
            (a = z.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName) && (H(a), v(ka, [q(), a]))
        }

        function Ba(a) {
            if ((a = z.getTarget(a)) && !L(a) && !Z(a) && /^INPUT|SELECT|TEXTAREA$/.test(a.tagName)) {
                var b = /^(checkbox|radio)$/.test(a.type) ? a.checked : a.value;
                H(a);
                v(la, [q(), a, b])
            }
        }

        function ra(a) {
            if ((a = z.getTarget(a)) && !oa(a) && "FORM" == a.nodeName) {
                for (var b =
                        a.elements, c = 0; c < b.length; c++) m.isEmptyField(b[c]) || H(b[c]);
                v(P, [q(), a], !0)
            }
        }

        function Ja(a) {
            ha();
            if (a.touches && a.touches.length) {
                var b = z.getTarget(a);
                if (b && b != k) {
                    H(b);
                    for (var c = 0; c < a.touches.length; c++) v(A, [q(), "touch", b, [a.touches[c].pageX, a.touches[c].pageY], 0, 0])
                }
            }
        }

        function Ca(a) {
            var b = z.getTarget(a);
            if (b) {
                var c;
                "wheel" == a.type ? c = 0 < a.deltaY ? 1 : 0 > a.deltaY ? 2 : 0 : "mousewheel" == a.type && (c = 0 < a.wheelDelta ? 2 : 0 > a.wheelDelta ? 1 : 0);
                c && (H(b), v(F, [q(), b, z.getPos(a), c]))
            }
        }

        function O(a) {
            (a = z.getTarget(a)) && "BODY" ==
            a.tagName && ma.append([], !0)
        }
        var ma = new Da({
                protocol: a,
                counterId: b,
                counterType: c,
                meta: {
                    url: x().href,
                    hitId: d,
                    timezone: sa,
                    timestamp: ta
                }
            }),
            qb = {
                A: 1,
                ABBR: 2,
                ACRONYM: 3,
                ADDRESS: 4,
                APPLET: 5,
                AREA: 6,
                B: 7,
                BASE: 8,
                BASEFONT: 9,
                BDO: 10,
                BIG: 11,
                BLOCKQUOTE: 12,
                BODY: 13,
                BR: 14,
                BUTTON: 15,
                CAPTION: 16,
                CENTER: 17,
                CITE: 18,
                CODE: 19,
                COL: 20,
                COLGROUP: 21,
                DD: 22,
                DEL: 23,
                DFN: 24,
                DIR: 25,
                DIV: 26,
                DL: 27,
                DT: 28,
                EM: 29,
                FIELDSET: 30,
                FONT: 31,
                FORM: 32,
                FRAME: 33,
                FRAMESET: 34,
                H1: 35,
                H2: 36,
                H3: 37,
                H4: 38,
                H5: 39,
                H6: 40,
                HEAD: 41,
                HR: 42,
                HTML: 43,
                I: 44,
                IFRAME: 45,
                IMG: 46,
                INPUT: 47,
                INS: 48,
                ISINDEX: 49,
                KBD: 50,
                LABEL: 51,
                LEGEND: 52,
                LI: 53,
                LINK: 54,
                MAP: 55,
                MENU: 56,
                META: 57,
                NOFRAMES: 58,
                NOSCRIPT: 59,
                OBJECT: 60,
                OL: 61,
                OPTGROUP: 62,
                OPTION: 63,
                P: 64,
                PARAM: 65,
                PRE: 66,
                Q: 67,
                S: 68,
                SAMP: 69,
                SCRIPT: 70,
                SELECT: 71,
                SMALL: 72,
                SPAN: 73,
                STRIKE: 74,
                STRONG: 75,
                STYLE: 76,
                SUB: 77,
                SUP: 78,
                TABLE: 79,
                TBODY: 80,
                TD: 81,
                TEXTAREA: 82,
                TFOOT: 83,
                TH: 84,
                THEAD: 85,
                TITLE: 86,
                TR: 87,
                TT: 88,
                U: 89,
                UL: 90,
                VAR: 91,
                NOINDEX: 100
            },
            Oa = 0,
            Fa = 0;
        e(0);
        var S = 1,
            U = 0,
            aa = [0, 0],
            Y = 0,
            ba = [0, 0],
            ea = {},
            ia = /^(password|passwd|pswd)$/,
            T = !0,
            R = !1,
            V = "",
            ga = !1,
            pa = !0,
            na = n(),
            D = "metrikaId_" +
            Math.random(),
            da = {},
            Ea = ":submit" + Math.random();
        if (!f.isMetrikaPlayer()) {
            h.on(k, "mousemove", ca);
            h.on(k, "click,dblclick,mousedown", Q);
            h.on(k, "mouseup", X);
            h.on(g, "scroll", ha);
            if ("onmousewheel" in k) h.on(k, "mousewheel", Ca);
            else h.on(k, "wheel", Ca);
            h.on(g, "beforeunload", J);
            if (!rb) h.on(g, "unload", J);
            h.on(g, "resize", u);
            h.on(k, "keydown", Pa);
            h.on(k, "keypress", Qa);
            h.on(k, "copy", Ha);
            h.on(k, "touchmove,touchstart", Ja);
            if (k.body) h.on(k, "mouseleave", O);
            k.attachEvent && !g.opera ? (h.on(k, "focusin", Ra), h.on(k, "focusout",
                Sa)) : (h.on(g, "focus", Ia), h.on(g, "blur", qa), h.on(k, "blur", qa));
            k.addEventListener ? (h.on(k, "scroll", B), h.on(k, "focus", za), h.on(k, "blur", Aa), h.on(k, "change", Ba), h.on(k, "submit", ra)) : k.attachEvent && (h.on(k, "focusin", za), h.on(k, "focusout", Aa), function() {
                for (var a = k.getElementsByTagName("form"), b = 0; b < a.length; b++) {
                    for (var c = a[b].getElementsByTagName("*"), d = 0; d < c.length; d++)
                        if (/^INPUT|SELECT|TEXTAREA$/.test(c[d].tagName)) h.on(c[d], "change", Ba);
                    h.on(a[b], "submit", ra)
                }
            }());
            (function() {
                var a = k.getElementsByTagName("form");
                if (a.length)
                    for (var b = 0; b < a.length; b++) {
                        var c = a[b].submit;
                        if ("function" == typeof c || "object" == typeof c && /^\s*function submit\(\)/.test(String(c))) a[b][Ea] = c, a[b].submit = function() {
                            ra({
                                target: this
                            });
                            return this[Ea]()
                        }
                    }
            })();
            "0:0" != m.getDocumentScroll().join(":") && ha();
            u()
        }
        return {
            start: function() {
                ma.activate()
            },
            stop: function() {
                ma.clear();
                h.un(k, "mousemove", ca);
                h.un(k, "click,dblclick,mousedown", Q);
                h.un(k, "mouseup", X);
                h.un(k, "mousewheel", Ca);
                h.un(k, "wheel", Ca);
                h.un(g, "scroll", ha);
                h.un(g, "beforeunload",
                    J);
                h.un(g, "unload", J);
                h.un(g, "resize", u);
                h.un(k, "keydown", Pa);
                h.un(k, "keypress", Qa);
                h.un(k, "copy", Ha);
                h.un(k, "touchmove", Ja);
                h.un(k, "touchstart", Ja);
                k.body && h.un(k, "mouseleave", O);
                h.un(k, "focusin", Ra);
                h.un(k, "focusout", Sa);
                h.un(g, "focus", Ia);
                h.un(g, "blur", qa);
                h.un(k, "blur", qa);
                k.removeEventListener ? (h.un(k, "scroll", B), h.un(k, "focus", za), h.un(k, "blur", Aa), h.un(k, "change", Ba), h.un(k, "submit", ra)) : k.detachEvent && (h.un(k, "focusin", za), h.un(k, "focusout", Aa), function() {
                    for (var a = k.getElementsByTagName("form"),
                            b = 0; b < a.length; b++) {
                        for (var c = a[b].getElementsByTagName("*"), d = 0; d < c.length; d++) /^INPUT|SELECT|TEXTAREA$/.test(c[d].tagName) && h.un(c[d], "change", Ba);
                        h.un(a[b], "submit", ra)
                    }
                }());
                (function() {
                    for (var a = k.getElementsByTagName("form"), b = 0; b < a.length; b++) a[b][Ea] && (a[b].submit = a[b][Ea])
                })()
            },
            uploadPages: function(a, b) {
                function c() {
                    var e;
                    h.un(k, "DOMContentLoaded", c);
                    h.un(g, "load", c);
                    for (var f = a.split(/\n/), n = x().href, q = /regexp:/, l = 0; l < f.length; l++)
                        if (e = f[l])
                            if (q.test(e)) {
                                e = Ta(e.replace(q, ""));
                                try {
                                    var u = new RegExp(e)
                                } catch (Ob) {}
                                if (u &&
                                    u.test(n)) {
                                    d.uploadPage(b);
                                    break
                                }
                            } else if (-1 !== n.indexOf(e)) {
                        d.uploadPage(b);
                        break
                    }
                }
                var d = this;
                "complete" == k.readyState ? c() : (h.on(k, "DOMContentLoaded", c), h.on(g, "load", c))
            },
            uploadPage: r(function(e) {
                if ("function" == typeof g.toStaticHTML && -1 < g.toStaticHTML.toString().indexOf("NoScript")) return !1;
                var f = k.documentElement;
                if (f && 19E4 < ("" + f.innerHTML).length) return !1;
                var n = g.XMLHttpRequest ? new g.XMLHttpRequest : new ActiveXObject("Msxml2.XMLHTTP"),
                    q = m.getDocumentCharset(),
                    l = "text/html" + (q ? ";charset\x3d" + q :
                        ""),
                    u = new sb({
                        protocol: a,
                        counterId: b,
                        counterType: c
                    });
                if ("html" == e) return e = new RegExp("\x3cscript [^\x3e]*?//" + C.host.replace(/\./g, "\\\\.") + "/watch/.*?\x3c/script\x3e", "gi"), u.sendContent(m.getDocumentHTML().replace(e, ""), l, d, sa, ta), !0;
                n && (n.open("get", x().href, !0), n.onreadystatechange = r(function() {
                        if (4 == n.readyState) {
                            var a = n.getResponseHeader("content-type") || "";
                            q && -1 === a.indexOf("charset\x3d") && (a = l);
                            u.sendContent(n.responseText, a, d, sa, ta)
                        }
                    }, "updatePage.1"), n.overrideMimeType && q && n.overrideMimeType(l),
                    n.send(null));
                return !0
            }, "uploadPage")
        }
    }

    function r(a, b, c) {
        return function() {
            try {
                return a.apply(this, arguments)
            } catch (d) {
                c || Ua(d, b)
            }
        }
    }

    function Ua(a, b) {
        var c;
        if (.01 > Math.random()) try {
            var d = a && a.message || "";
            (c = -1 < d.indexOf("network error occurred") || -1 < d.indexOf("send beacon") && -1 < d.indexOf("Content Security Policy")) || (new ia).log("jserrs", T, a.message, b, A.href, "", "string" === typeof a.stack && a.stack.replace(/\n/g, "\\n"))
        } catch (e) {}
    }

    function Ka(a, b, c, d) {
        return g.setTimeout(r(a, c || "setTimeout", d), b)
    }

    function x() {
        for (var a = {}, b = "hash host hostname href pathname port protocol search".split(" "), c = b.length, d = c, e, f; d--;) a[b[d]] = "";
        try {
            for (e = g.location, d = c; d--;) f = b[d], a[f] = "" + e[f]
        } catch (q) {
            A && (a = A)
        }
        return a
    }

    function Ta(a) {
        return a ? ("" + a).replace(/^\s+/, "").replace(/\s+$/, "") : ""
    }

    function Va() {
        return -1 != x().hostname.search(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com\.\w+)$/)
    }

    function ua(a) {
        return -1 !== ("" + g.navigator.userAgent).toLowerCase().search(a)
    }

    function Wa(a) {
        return Ta(a && a.innerHTML && a.innerHTML.replace(/<\/?[^>]+>/gi, ""))
    }

    function Xa(a, b) {
        var c;
        if (!a || !b) return !1;
        var d = [];
        for (c = 0; c < b.length; c++) d.push(b[c].replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\./g, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}"));
        return (new RegExp("\\.(" + d.join("|") + ")$", "i")).test(a)
    }

    function tb(a) {
        a = a.target || a.srcElement;
        var b;
        if (!a) return !1;
        3 == a.nodeType && (a = a.parentNode);
        for (b = a && a.nodeName && a.nodeName.toString().toLowerCase(); a && a.parentNode && a.parentNode.nodeName && ("a" != b && "area" != b || !a.href);) b = (a = a.parentNode) && a.nodeName && a.nodeName.toString().toLowerCase();
        return a.href ? a : !1
    }

    function ub(a, b) {
        return (a ? a.replace(/^www\./, "") : "").toLowerCase() == (b ? b.replace(/^www\./, "") : "").toLowerCase()
    }

    function vb(a, b) {
        function c(a) {
            a = a.split(":");
            a = a[1] || "";
            a = a.replace(/^\/*/, "").replace(/^www\./, "");
            return a.split("/")[0]
        }
        return a && b ? c(a) == c(b) : a || b ? !1 : !0
    }

    function Za() {
        var a =
            g.performance || g.webkitPerformance,
            b = a && a.timing,
            c, d = [];
        if (b && (c = b.navigationStart))
            for (d = [b.domainLookupEnd - b.domainLookupStart, b.connectEnd - b.connectStart, b.responseStart - b.requestStart, b.responseEnd - b.responseStart, b.fetchStart - c, b.redirectEnd - b.redirectStart, b.redirectCount || a.navigation && a.navigation.redirectCount], d.push(b.domInteractive && b.domLoading ? b.domInteractive - b.domLoading : null), d.push(b.domContentLoadedEventStart && b.domContentLoadedEventEnd ? b.domContentLoadedEventEnd - b.domContentLoadedEventStart :
                    null), d.push(b.domComplete ? b.domComplete - c : null), d.push(b.loadEventStart ? b.loadEventStart - c : null), d.push(b.loadEventStart && b.loadEventEnd ? b.loadEventEnd - b.loadEventStart : null), d.push(b.domContentLoadedEventStart ? b.domContentLoadedEventStart - c : null), a = 0; a < d.length; a++) b = d[a], null !== b && (0 > b || 36E5 < b) && (d[a] = null);
        return d
    }

    function wb(a) {
        var b = [],
            c = a._lastPerformanceTiming,
            d = Za(),
            e;
        if (c) {
            var f = 0;
            for (e = c.length; f < e; f++) null === d[f] ? b.push(d[f]) : b.push(c[f] === d[f] ? "" : d[f])
        } else b = d;
        a._lastPerformanceTiming =
            d;
        return b.join(",")
    }

    function xb() {
        if ("object" == typeof g.chrome && g.chrome.loadTimes) {
            var a = g.chrome.loadTimes();
            if (a.requestTime && a.firstPaintTime && g.performance && g.performance.timing) return Math.round(1E3 * a.firstPaintTime - g.performance.timing.navigationStart)
        } else if (g.performance && g.performance.timing && (a = g.performance.timing, a.navigationStart && a.msFirstPaint)) return a.msFirstPaint - a.navigationStart;
        return null
    }

    function yb(a) {
        var b = k.referrer || "",
            c, d;
        if ((new RegExp("^https?://" + A.host + "/")).test(b)) return !1;
        var e = a.patterns;
        for (c = 0; c < e.length; c++) {
            var n = new RegExp(e[c], "i");
            if (b.match(n))
                if (n = a.params || [], n.length) {
                    var g = f.safeDecodeURIComponent((RegExp.$1 || "").replace(/\+/g, "%20"));
                    for (d = 0; d < n.length; d++)
                        if (g == f.safeDecodeURIComponent(n[d])) return !0
                } else return !0
        }
        return !1
    }

    function $a(a, b) {
        var c = !1,
            d;
        if (a && "string" != typeof a && a.length)
            for (d = 0; d < a.length; d++) {
                var e = a[d].selector;
                var f = a[d].text;
                var g = e.charAt(0);
                e = e.slice(1);
                if ("#" == g) {
                    if (g = k.getElementById(e)) c = !0, b && O.unshift([g, g.innerHTML]), g.innerHTML =
                        f
                } else if ("." == g)
                    for (g = m.getElementsByClassName(e), e = 0; e < g.length; e++) {
                        var c = !0,
                            h = g[e],
                            p = f;
                        b && O.unshift([h, h.innerHTML]);
                        h.innerHTML = p
                    }
            }
        return c
    }

    function ab() {
        var a;
        for (a = 0; a < O.length; a++) O[a][0].innerHTML = O[a][1]
    }

    function zb(a, b) {
        var c, d = "";
        a = a && a.replace(/^\?/, "");
        b = b && b.replace(/^#/, "") || "";
        if (a) {
            var e = a.split("\x26");
            for (c = 0; c < e.length; c++) {
                var g = e[c].split("\x3d");
                "_openstat" === g[0] && (d = g[1])
            }
        }
        var q = b.split("?");
        for (c = 0; c < q.length; c++) {
            var h = q[c].split("\x26");
            for (e = 0; e < h.length; e++) g = h[e].split("\x3d"),
                "_openstat" === g[0] && (d = g[1])
        }
        d && (d = -1 < d.indexOf(";") ? f.safeDecodeURIComponent(d) : R.decode(I.decode(d.replace(/[-*_]/g, function(a) {
            return {
                "*": "+",
                "-": "/",
                _: "\x3d"
            }[a] || a
        }))));
        return d && (c = d.split(";"), 4 == c.length) ? {
            service: c[0],
            campaign: c[1],
            ad: c[2],
            source: c[3]
        } : null
    }
    var C = {
        protocol: "https:",
        baseUrl: "mc.yandex.",
        yandexWhiteListTld: "ru ua by kz az kg lv md tj tm uz ee fr co.il com.ge com.am com.tr".split(" ")
    };
    C.host = C.baseUrl + "ru";
    var f = {
            mixin: function(a) {
                var b, c;
                for (b = 1; b < arguments.length; b++)
                    if (arguments[b]) {
                        for (c in arguments[b]) arguments[b].hasOwnProperty(c) &&
                            (a[c] = arguments[b][c]);
                        arguments[b].hasOwnProperty("toString") && (a.toString = arguments[b].toString)
                    }
                return a
            }
        },
        F = function(a) {
            a = a || {};
            f.mixin(this, a);
            this._initComponent()
        };
    F.prototype._initComponent = function() {};
    F.inherit = function(a) {
        a = a || {};
        var b = "function" == typeof this ? this : Object;
        a.hasOwnProperty("constructor") || (a.constructor = function() {
            b.apply(this, arguments)
        });
        var c = function() {};
        c.prototype = b.prototype;
        a.constructor.prototype = new c;
        f.mixin(a.constructor.prototype, a);
        a.constructor.prototype.constructor =
            a.constructor;
        a.constructor.superclass = b.prototype;
        a.constructor.inherit = F.inherit;
        return a.constructor
    };
    f.isArray = function(a) {
        return "function" == typeof Array.isArray ? Array.isArray(a) : "[object Array]" == Object.prototype.toString.call(a)
    };
    f.mergeArrays = function(a) {
        var b, c, d = arguments.length;
        for (b = 1; b < d; b++) {
            var e = arguments[b];
            if (f.isArray(e) || e && "[object Arguments]" === e.toString())
                for (c = 0; c < e.length; c++) a[a.length] = e[c]
        }
        return a
    };
    f.getNativeFunction = function(a, b) {
        var c;
        b = b || g;
        return (c = b.constructor &&
            b.constructor.prototype && b.constructor.prototype[a] || b[a]) && "apply" in c ? function() {
            return c.apply(b, arguments)
        } : function() {}
    };
    f.setTimeout = function(a, b, c) {
        return f.getNativeFunction("setTimeout")(r(a, c || "setTimeout"), b)
    };
    f.defer = function(a, b, c, d, e) {
        return f.setTimeout(function() {
            a.apply(c, d || [])
        }, b, e)
    };
    f.throttle = function(a, b, c, d) {
        var e, g, q;
        return function() {
            g = arguments;
            q = this;
            e || function() {
                e = null;
                g && (a.apply(c || q, g), g = null, e = f.setTimeout(arguments.callee, b, d))
            }()
        }
    };
    var bb = F.inherit({
            storage: null,
            storageKey: "dataBuffer",
            maxBufferSize: 255,
            flushTimeout: 1E4,
            startBufferTime: 0,
            active: !0,
            meta: null,
            onFlush: function() {},
            onFlushCtx: null,
            bufferExpireTime: 864E5,
            _initComponent: function() {
                var a;
                bb.superclass._initComponent.apply(this, arguments);
                this._data = [];
                this._packetNumber = 0;
                this._flushTID = null;
                this._saveToStorageThrottled = f.throttle(this._saveToStorage, 300, this, "DataBuffer._saveToStorage");
                this.storage && ((a = this.storage.get(this.storageKey)) && a.data && a.meta && a.time && a.time + this.bufferExpireTime > +new Date &&
                    this.onFlush.call(this.onFlushCtx || this, a.data, a.meta, a.pnum), this.clear())
            },
            getFlushSize: function() {
                return this._data.length
            },
            append: function(a, b) {
                f.mergeArrays(this._data, a);
                this._saveToStorageThrottled();
                this.active && ((b || this.getFlushSize() >= this.maxBufferSize) && this._flush(), this._flushTID || (this._flushTID = f.defer(this._flush, this.flushTimeout, this, [], "DataBuffer._flush")))
            },
            activate: function() {
                this.active || (this.active = !0, this.append([]))
            },
            clear: function() {
                this._data.length = 0;
                this._flushTID =
                    null;
                this.storage && this.storage.remove(this.storageKey)
            },
            _flush: function() {
                if (!this._data.length) return !1;
                this.onFlush.call(this.onFlushCtx || this, this._data, this.meta, this._packetNumber);
                this._packetNumber++;
                this.clear()
            },
            _saveToStorage: function() {
                this.storage && this._data.length && this.storage.set(this.storageKey, {
                    data: this._data,
                    meta: this.meta,
                    pnum: this._packetNumber,
                    time: +new Date
                })
            }
        }),
        va = F.inherit({
            transports: [],
            postParams: [],
            dontSendRequests: !1,
            send: function(a, b, c, d) {
                c = c || function() {};
                this.dontSendRequests ?
                    c.call(d) : function n(f) {
                        if (f < this.transports.length) try {
                            var g = new this.transports[f]({
                                postParams: this.postParams,
                                queryStringParams: this.queryStringParams
                            });
                            b["browser-info"] = "ti:" + g.index + ":" + b["browser-info"];
                            g.request(a, b, function(a, b, g) {
                                a ? c.call(d, b, g) : n.call(this, f + 1)
                            }, this)
                        } catch (p) {
                            Ua(p, "send by " + (g && g.id)), n.call(this, f + 1)
                        }
                    }.call(this, 0)
            }
        }),
        X = {};
    f.keys = function(a) {
        var b, c = [];
        for (b in a) a.hasOwnProperty(b) && c.push(b);
        return c
    };
    f.map = function(a, b) {
        var c, d = [];
        for (c = 0; c < b.length; c++) d.push(a(b[c]));
        return d
    };
    X.stringify = function(a, b) {
        var c = [],
            d = b || {},
            e = {},
            g = f.keys(a).length,
            q, h;
        if (d.lastOrdering !== N)
            for (h = 1; h <= b.lastOrdering.length; h++) e[b.lastOrdering[h - 1]] = g + h;
        if (d.firstOrdering !== N)
            for (h = 0; h < b.firstOrdering.length; h++) e[b.firstOrdering[h]] = h;
        for (q in a)
            if (a.hasOwnProperty(q))
                if (d = a[q], f.isArray(d))
                    for (h = 0; h < d.length; h++) c.push({
                        key: q,
                        value: encodeURIComponent(q) + "\x3d" + encodeURIComponent(String(d[h]))
                    });
                else c.push({
                    key: q,
                    value: encodeURIComponent(q) + "\x3d" + encodeURIComponent(String(d))
                });
        c.sort(function(a, b) {
            var c = e[a.key],
                d = e[b.key];
            "undefined" === typeof c && (c = g);
            "undefined" === typeof d && (d = g);
            return c - d
        });
        return f.map(function(a) {
            return a.value
        }, c).join("\x26")
    };
    f.forEachKey = function(a, b, c) {
        for (var d in a) a.hasOwnProperty(d) && b.call(c, d, a[d], a)
    };
    f.inArray = function(a, b) {
        var c;
        for (c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    };
    var S = F.inherit({
            postParams: [],
            index: 0,
            _buildUrl: function(a, b) {
                var c = X.stringify(b, this.queryStringParams);
                return a + (-1 < a.indexOf("?") ? "\x26" : c ? "?" : "") + c
            },
            _splitParams: function(a) {
                var b = {},
                    c = {};
                f.forEachKey(a, function(a, e) {
                    f.inArray(this.postParams, a) ? c[a] = e : b[a] = e
                }, this);
                return {
                    get: b,
                    post: c
                }
            }
        }),
        ja = S.inherit({
            id: "XHR",
            index: 7,
            method: "POST",
            withCredentials: !0,
            request: function(a, b, c, d) {
                if (/[^a-z0-9.:-]/.test(A.host) && g.opera && "function" == typeof g.opera.version) {
                    var e = g.opera.version();
                    if ("string" == typeof e && "12" == e.split(".")[0]) return c.call(d, !1)
                }
                if (g.XMLHttpRequest) {
                    var f = new XMLHttpRequest;
                    if ("withCredentials" in f) {
                        b = this._splitParams(b);
                        a = this._buildUrl(a,
                            b.get);
                        try {
                            f.open(this.method, a, !0)
                        } catch (q) {
                            return c.call(d, !1)
                        }
                        f.withCredentials = this.withCredentials;
                        this._setHeaders(f);
                        f.send(this._preparePostParams(b));
                        f.onreadystatechange = function() {
                            4 == f.readyState && c.call(d, 200 == f.status, f.responseText)
                        };
                        return
                    }
                }
                c.call(d, !1)
            },
            setMethod: function(a) {
                this.method = a
            },
            _preparePostParams: function(a) {
                return X.stringify(a.post)
            },
            _setHeaders: function(a) {
                a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
            }
        }),
        Ab = S.inherit({
            id: "beacon",
            index: 1,
            request: function(a,
                b, c, d) {
                "function" == typeof navigator.sendBeacon && navigator.onLine ? (b = this._splitParams(b), b.get["force-urlencoded"] = 1, c.call(d, navigator.sendBeacon(this._buildUrl(a, b.get), X.stringify(b.post)))) : c.call(d, !1)
            }
        });
    f.random = function(a, b) {
        2 > arguments.length && (b = a, a = 0);
        1 > arguments.length && (b = 1073741824);
        return Math.floor(Math.random() * (b - a)) + a
    };
    var U = S.inherit({
            id: "form",
            index: 2,
            enctype: "application/x-www-form-urlencoded",
            htmlfileOnly: !1,
            _initComponent: function() {
                U.superclass._initComponent.apply(this, arguments);
                "_htmlfile" in U.prototype || (U.prototype._htmlfile = this._createHtmlfile());
                this._doc = this._htmlfile || (this.htmlfileOnly ? null : k)
            },
            request: function(a, b, c, d) {
                var e = this._doc;
                if (!e) return c.call(d, !1);
                b = this._splitParams(b);
                var g = "ifr" + f.random();
                var h = e.createElement("div");
                h.style.position = "absolute";
                h.style.left = "-99999px";
                h.style.top = "-99999px";
                var k = ['\x3ciframe name\x3d"', g, '"\x3e\x3c/iframe\x3e', '\x3cform action\x3d"', this._buildUrl(a, b.get), '" method\x3d"post" target\x3d"', g, '" enctype\x3d"', this.enctype,
                    '"\x3e'
                ];
                f.forEachKey(b.post, function(a) {
                    f.mergeArrays(k, ['\x3cinput type\x3d"hidden" autocomplete\x3d"off" autocorrect\x3d"off"', ' autocapitalize\x3d"off" spellcheck\x3d"false" name\x3d"', a, '"/\x3e'])
                });
                f.mergeArrays(k, ["\x3c/form\x3e"]);
                h.innerHTML = k.join("");
                e.body.appendChild(h);
                var p = h.getElementsByTagName("form")[0];
                f.forEachKey(b.post, function(a, b) {
                    p[a].value = b
                });
                p.submit();
                f.setTimeout(function() {
                    e.body.removeChild(h)
                }, 1E4, "TransportForm.request.2");
                return c.call(d, !0)
            },
            _createHtmlfile: function() {
                try {
                    if (g.ActiveXObject) {
                        var a =
                            new ActiveXObject("htmlfile");
                        a.open();
                        a.write("\x3chtml\x3e\x3cbody\x3e\x3c/body\x3e\x3c/html\x3e");
                        a.close();
                        return a
                    }
                } catch (b) {}
                return null
            }
        }),
        Bb = U.inherit({
            id: "htmlfile",
            index: 3,
            htmlfileOnly: !0
        }),
        V = S.inherit({
            id: "img",
            index: 4,
            request: function(a, b, c, d) {
                a = this._buildUrl(a, b);
                b = k.createElement("img");
                c = c || function() {};
                b.onload = r(function() {
                    c.call(d, !0)
                }, "TransportImage.request");
                b.onerror = r(function() {
                    c.call(d, !1)
                }, "TransportImage.request");
                b.src = a
            }
        }),
        ga = {
            stringify: function(a) {
                try {
                    return JSON.stringify(a)
                } catch (b) {
                    return "null"
                }
            }
        };
    f.toJSON = function(a) {
        var b;
        if (a === N) return "";
        if (null === a) return "null";
        switch (a.constructor) {
            case Boolean:
                return a.toString();
            case Number:
                return isFinite(a) ? a.toString() : "null";
            case String:
                return '"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"';
            case Array:
                var c = [];
                var d = 0;
                for (b = a.length; d < b; d++) c[c.length] = f.toJSON(a[d]);
                return "[" + c.join(",") + "]";
            case Object:
                c = [];
                for (d in a) a.hasOwnProperty(d) && a[d] !== N && (c[c.length] = f.toJSON(d) + ":" + f.toJSON(a[d]));
                return "{" +
                    c.join(",") + "}";
            default:
                return ga.stringify(a)
        }
    };
    var P = F.inherit({
            counterId: "",
            _initComponent: function() {
                P.superclass._initComponent.apply(this, arguments);
                this._ls = null;
                try {
                    this._ls = g.localStorage
                } catch (a) {}
            },
            set: function(a, b) {
                if (this.isEnabled()) try {
                    !b || b && f.isArray(b) && !b.length ? this.remove(a) : this._ls.setItem(this._getLsKey(a), f.toJSON(b))
                } catch (c) {}
            },
            get: function(a) {
                if (this.isEnabled()) try {
                    return JSON.parse(this._ls.getItem(this._getLsKey(a)))
                } catch (b) {}
                return null
            },
            remove: function(a) {
                if (this.isEnabled()) try {
                    this._ls.removeItem(this._getLsKey(a))
                } catch (b) {}
            },
            isEnabled: function() {
                return this._ls && g.JSON && "object" == typeof this._ls && "object" == typeof g.JSON
            },
            getStorageId: function() {
                var a = this.get("lsid");
                a || (a = Math.round(Math.random() * new Date), this.set("lsid", a));
                return a
            },
            clearStorageId: function() {
                this.remove("lsid")
            },
            _getLsKey: function(a) {
                return "_ym" + this.counterId + "_" + a
            }
        }),
        M = F.inherit({
            counterId: "",
            onlyCurrentDomain: !1,
            skipPrefix: !1,
            _initComponent: function() {
                var a;
                M.superclass._initComponent.apply(this, arguments);
                this._domain = null;
                if (!this.onlyCurrentDomain) {
                    var b =
                        A.host.split(".");
                    for (a = 2;;)
                        if (a <= b.length) {
                            if (this._domain = "." + b.slice(-a).join("."), a++, this.isEnabled()) break
                        } else {
                            this._domain = null;
                            break
                        }
                }
            },
            create: function(a, b, c) {
                a = [this._prepareName(a) + "\x3d" + encodeURIComponent(b)];
                c && (b = new Date, b.setTime(b.getTime() + 6E4 * c), a.push("expires\x3d" + b.toGMTString()));
                this._domain && a.push("domain\x3d" + this._domain);
                a.push("path\x3d/");
                try {
                    k.cookie = a.join(";")
                } catch (d) {}
            },
            read: function(a) {
                try {
                    var b = k.cookie
                } catch (c) {}
                return b && b.match(new RegExp("(?:^|;\\s*)" + this._prepareName(a) +
                    "\x3d([^;]*)")) ? decodeURIComponent(RegExp.$1) : null
            },
            erase: function(a) {
                this.create(a, "", -1)
            },
            isEnabled: function() {
                this.create("metrika_enabled", "1", 60);
                var a = !!this.read("metrika_enabled");
                this.erase("metrika_enabled");
                return a
            },
            _prepareName: function(a) {
                return (this.skipPrefix ? "" : "_ym_") + a + (this.counterId ? "_" + this.counterId : "")
            }
        });
    M.isEnabled = function() {
        return (new M({
            onlyCurrentDomain: !0
        })).isEnabled()
    };
    var w = {
            getSeconds: function() {
                return Math.round(+new Date / 1E3)
            }
        },
        K = va.inherit({
            protocol: "",
            host: C.host,
            queryStringParams: {
                firstOrdering: ["wmode", "callback", "cnt-class"],
                lastOrdering: ["browser-info"]
            },
            resource: "",
            counterId: "",
            counterType: 0,
            retry: !1,
            transports: [Ab, ja, V, Bb],
            _initComponent: function() {
                K.superclass._initComponent.apply(this, arguments);
                this.retry && (this._storage = new P)
            },
            send: function(a, b, c, d) {
                var e = this._registerRequest(a, b);
                this._sendSavedRequest(e, a, b, c, d)
            },
            _sendSavedRequest: function(a, b, c, d, e) {
                var n = g.Ya._metrika.firstReqStatus;
                if ("process" == n) g.Ya._metrika.firstReqCallbacks = f.mergeArrays(g.Ya._metrika.firstReqCallbacks || [], [
                    [this, arguments]
                ]);
                else {
                    n || (g.Ya._metrika.firstReqStatus = "process");
                    this.counterType && (b["cnt-class"] = this.counterType);
                    c.st = w.getSeconds();
                    c.u = K._userID;
                    n = [this.protocol, "//", this.host, "/" + this.resource + "/" + this.counterId].join("");
                    var h = [];
                    c && (f.forEachKey(c, function(a, b) {
                        "t" != a && f.mergeArrays(h, [a, b])
                    }), c.t && f.mergeArrays(h, ["t", c.t]));
                    h.length && (b["browser-info"] = h.join(":"));
                    return K.superclass.send.call(this, n, b, function() {
                        var b;
                        g.Ya._metrika.firstReqStatus = "complete";
                        this._unregisterRequest(a);
                        var c = g.Ya._metrika.firstReqCallbacks;
                        g.Ya._metrika.firstReqCallbacks = null;
                        if (c)
                            for (b = 0; b < c.length; b++) c[b][0]._sendSavedRequest.apply(c[b][0], c[b][1]);
                        d && d.apply(e, arguments)
                    }, this)
                }
            },
            _isRetryEnabled: function() {
                return this.retry && this._storage && this._storage.isEnabled()
            },
            _registerRequest: function(a, b) {
                var c;
                if (this._isRetryEnabled()) {
                    b.rqnl = b.rqnl || 0;
                    b.rqnl++;
                    var d = this._storage.get("retryReqs") || {};
                    for (c = 1; d[c];) c++;
                    d[c] = {
                        protocol: this.protocol,
                        host: this.host,
                        resource: this.resource,
                        counterId: this.counterId,
                        counterType: this.counterType,
                        postParams: this.postParams,
                        params: a,
                        browserInfo: b,
                        ghid: Ya._globalMetrikaHitId,
                        time: +new Date
                    };
                    this._storage.set("retryReqs", d);
                    return c
                }
            },
            _unregisterRequest: function(a) {
                if (a && this._isRetryEnabled()) {
                    var b = this._storage.get("retryReqs") || {};
                    b[a] && (delete b[a], this._storage.set("retryReqs", b))
                }
            },
            _getVersion: r(function() {
                return T
            }, "", !0)
        });
    K.initCookie = function() {
        var a = new M,
            b = a.read("uid");
        b || (b = w.getSeconds(), b = b + "" + f.random(), a.create("uid", b, 1036800));
        K._userID = b
    };
    K.retransmit =
        function() {
            var a = new P,
                b = a.get("retryReqs") || {},
                c;
            a.remove("retryReqs");
            f.forEachKey(b, function(a, b) {
                g.Ya._metrika.firstReqStatus || (g.Ya._metrika.firstReqStatus = "complete");
                b.ghid && b.ghid != Ya._globalMetrikaHitId && b.time && b.time + 864E5 > +new Date && 2 >= b.browserInfo.rqnl && (c = new K({
                    protocol: b.protocol,
                    host: b.host,
                    resource: b.resource,
                    counterId: b.counterId,
                    counterType: b.counterType,
                    postParams: b.postParams || [],
                    retry: !0
                }), c.send(b.params, b.browserInfo))
            })
        };
    f.fletcher = function(a) {
        for (var b = a.length, c = 0, d = 255,
                e = 255, f, g, h; b;) {
            f = 21 < b ? 21 : b;
            b -= f;
            do g = "string" == typeof a ? a.charCodeAt(c) : a[c], c++, 255 < g && (h = g >> 8, g &= 255, g ^= h), d += g, e += d; while (--f);
            d = (d & 255) + (d >> 8);
            e = (e & 255) + (e >> 8)
        }
        a = (d & 255) + (d >> 8) << 8 | (e & 255) + (e >> 8);
        return 65535 == a ? 0 : a
    };
    var I = {
        abc: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        tail: "+/\x3d",
        tailSafe: "*-_",
        encode: function(a, b) {
            var c = (I.abc + (b ? I.tailSafe : I.tail)).split(""),
                d = a.length,
                e = [],
                g = d - d % 3,
                h;
            for (h = 0; h < g; h += 3) {
                var k = (a[h] << 16) + (a[h + 1] << 8) + a[h + 2];
                f.mergeArrays(e, [c[k >> 18 & 63],
                    c[k >> 12 & 63], c[k >> 6 & 63], c[k & 63]
                ])
            }
            switch (d - g) {
                case 1:
                    k = a[g] << 4;
                    f.mergeArrays(e, [c[k >> 6 & 63], c[k & 63], c[64], c[64]]);
                    break;
                case 2:
                    k = (a[g] << 10) + (a[g + 1] << 2), f.mergeArrays(e, [c[k >> 12 & 63], c[k >> 6 & 63], c[k & 63], c[64]])
            }
            return e.join("")
        }
    };
    f.warning = function() {
        g.console && "function" == typeof console.warn && console.warn.apply(console, arguments)
    };
    f.trim = function(a, b) {
        a = String(a).replace(/^\s+|\s+$/g, "");
        b && a.length > b && (a = a.substr(0, b));
        return a
    };
    f.isFunction = function(a) {
        return "function" === typeof a
    };
    f.isNumber = function(a) {
        return isFinite(a) &&
            !isNaN(a) && "[object Number]" == Object.prototype.toString.call(a)
    };
    f.isString = function(a) {
        return "[object String]" == Object.prototype.toString.call(a)
    };
    f.arrayIndexOf = function(a, b) {
        var c;
        for (c = 0; c < a.length; c++)
            if (a[c] === b) return c;
        return -1
    };
    f._playerRegexp = /^.+\.mtproxy\.yandex\.net$/;
    f.isMetrikaPlayer = function() {
        return "MetrikaPlayer" == g.name || this._playerRegexp.test(g.location.hostname)
    };
    var m = {
            getDocumentCharset: function() {
                return ("" + (k.characterSet || k.charset || "")).toLowerCase()
            },
            getRootElement: function() {
                var a =
                    k.documentElement;
                return "CSS1Compat" == k.compatMode ? a : k.body || a
            },
            getViewportSize: function() {
                var a = m.getRootElement();
                return [a.clientWidth || g.innerWidth, a.clientHeight || g.innerHeight]
            },
            getDocumentTitle: function() {
                var a = k.title;
                "string" != typeof a && (a = (a = k.getElementsByTagName("title")) && a.length ? a[0].innerHTML : "");
                return a
            }
        },
        t = {
            _silverlightVersion: "",
            getSilverlightVersion: function() {
                if (!t._silverlightVersion)
                    if (g.ActiveXObject) try {
                        var a = new ActiveXObject("AgControl.AgControl");
                        var b = function(a, b, d, f) {
                            for (; c(a,
                                    b);) b[d] += f;
                            b[d] -= f
                        };
                        var c = function(a, b) {
                            return a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3])
                        };
                        var d = [1, 0, 0, 0];
                        b(a, d, 0, 1);
                        b(a, d, 1, 1);
                        b(a, d, 2, 1E4);
                        b(a, d, 2, 1E3);
                        b(a, d, 2, 100);
                        b(a, d, 2, 10);
                        b(a, d, 2, 1);
                        b(a, d, 3, 1);
                        t._silverlightVersion = d.join(".")
                    } catch (e) {} else if (b = g.navigator, b = b.plugins && b.plugins["Silverlight Plug-In"]) t._silverlightVersion = b.description;
                return t._silverlightVersion || ""
            },
            _flashVersion: 0,
            getFlashVersion: function() {
                if (!t._flashVersion) {
                    var a = g.navigator;
                    if ("undefined" != typeof a.plugins &&
                        "object" == typeof a.plugins["Shockwave Flash"]) {
                        var b = a.plugins["Shockwave Flash"];
                        var c = b.version;
                        if ((b = b.description) || c)
                            if (a = a.mimeTypes, "undefined" == typeof a || !a["application/x-shockwave-flash"] || a["application/x-shockwave-flash"].enabledPlugin) c ? t._flashVersion = c : b && (t._flashVersion = b.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, "."))
                    } else if ("undefined" != typeof g.ActiveXObject) try {
                        if (c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = c.GetVariable("$version")) t._flashVersion =
                            b.split(" ")[1].replace(/,/g, ".").replace(/[^.\d]/g, "")
                    } catch (d) {}
                }
                return t._flashVersion
            },
            getLanguage: function() {
                return (g.navigator ? navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage : "").toLowerCase()
            },
            getJavaEnabled: function() {
                try {
                    return navigator.javaEnabled()
                } catch (a) {
                    return !1
                }
            }
        };
    f.fnv32a = function(a) {
        var b = 2166136261,
            c;
        var d = 0;
        for (c = a.length; d < c; ++d) b ^= a.charCodeAt(d), b += (b << 1) + (b << 4) + (b << 7) + (b << 8) + (b << 24);
        return b >>> 0
    };
    t.getFingerPrint = function() {
        var a = [],
            b;
        if (navigator.plugins && navigator.plugins.length)
            for (b = 0; b < navigator.plugins.length; b++) {
                var c = navigator.plugins[b];
                f.mergeArrays(a, [c.name, c.version, c.description, c.filename])
            }
        if (navigator.mimeTypes && navigator.mimeTypes.length)
            for (b = 0; b < navigator.mimeTypes.length; b++) c = navigator.mimeTypes[b], f.mergeArrays(a, [c.type, c.description, c.suffixes]);
        return f.fnv32a(a.join(";")) + "01"
    };
    t.getPlatform = function() {
        var a = "";
        try {
            a = "" + navigator.platform
        } catch (b) {}
        return a
    };
    t.getNotificationPermission = function() {
        try {
            var a =
                Notification.permission
        } catch (b) {}
        switch (a) {
            case "denied":
                return 1;
            case "granted":
                return 2
        }
    };
    t.isIframe = function() {
        try {
            return g.top != g.self
        } catch (a) {
            return !1
        }
    };
    t._nMap = {
        other: "0",
        none: "1",
        unknown: "2",
        wifi: "3",
        ethernet: "4",
        bluetooth: "5",
        cellular: "6",
        wimax: "7",
        mixed: "8"
    };
    t.netType = function() {
        var a = (navigator.connection || {
            type: ""
        }).type;
        return t._nMap[a] || a
    };
    t.isSafari = function() {
        try {
            return navigator.vendor && -1 < navigator.vendor.indexOf("Apple") && navigator.userAgent && !navigator.userAgent.match("CriOS")
        } catch (a) {}
        return !1
    };
    m.removeNode = function(a) {
        var b = a && a.parentNode;
        b && b.removeChild(a)
    };
    f.isEqual = function(a, b) {
        var c = !0;
        f.forEachKey(a, function(a, e) {
            b.hasOwnProperty(a) && b[a] === e || (c = !1)
        });
        if (!c) return c;
        f.forEachKey(b, function(b, e) {
            a.hasOwnProperty(b) && a[b] === e || (c = !1)
        });
        return c
    };
    var h = F.inherit({
        _initComponent: function() {
            h.superclass._initComponent.apply(this, arguments);
            this._listeners = []
        },
        on: function(a, b, c, d, e) {
            e = h._getOpts(e);
            b = b.split(",");
            var f = b.length,
                k = this._listeners,
                m;
            for (m = 0; m < f; m++) {
                var p = b[m];
                var l = r(function(a) {
                    c.call(d ||
                        this, a || g.event)
                }, "on" + p);
                k[k.length] = [a, p, c, d, e, l];
                a.addEventListener ? a.addEventListener(p, l, h._prepOpts(e)) : a.attachEvent && a.attachEvent("on" + p, l)
            }
        },
        un: function(a, b, c, d, e) {
            e = h._getOpts(e);
            var g = this._listeners,
                k = g.length,
                m;
            for (m = 0; m < k; m++) {
                var p = g[m];
                if (p[0] == a && p[1] == b && p[2] == c && p[3] == d && f.isEqual(p[4], e)) {
                    g.splice(m, 1);
                    this._removeListener(a, b, p[5], e);
                    break
                }
            }
        },
        unAll: function() {
            var a = this._listeners,
                b = a.length,
                c;
            for (c = 0; c < b; c++) {
                var d = a[c];
                this._removeListener(d[0], d[1], d[5], d[4])
            }
            a.length = 0
        },
        _removeListener: function(a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, h._prepOpts(d)) : a.detachEvent && a.detachEvent("on" + b, c)
        }
    });
    h.supportsPassive = function() {
        if (h._supportsPassive !== N) return h._supportsPassive;
        h._supportsPassive = !1;
        try {
            var a = Object.defineProperty({}, "passive", {
                get: function() {
                    h._supportsPassive = !0
                }
            });
            g.addEventListener("test", null, a)
        } catch (b) {}
        return h._supportsPassive
    };
    h._getOpts = function(a) {
        return f.mixin({
            capture: !0,
            passive: !0
        }, a || {})
    };
    h._prepOpts = function(a) {
        return h.supportsPassive() ?
            a : !!a.capture
    };
    h.ready = function(a) {
        var b = k.readyState;
        if ("interactive" === b || "complete" === b) Ka(a, 0, "evt::ready");
        else {
            var c = function() {
                h.un(k, "DOMContentLoaded", c);
                h.un(g, "load", c);
                a()
            };
            h.on(k, "DOMContentLoaded", c);
            h.on(g, "load", c)
        }
    };
    var cb = {
            url: C.protocol + "//" + C.host + "/metrika/",
            _value: null,
            init: function() {
                var a = this._getLs().read("isad");
                a ? this._set(a) : this._getReqStatus() || this._send()
            },
            getVal: function() {
                return this._value
            },
            _set: function(a) {
                this._value = "1" == a || "2" == a ? a : null
            },
            _send: function() {
                var a =
                    this;
                this._setReqStatus("process");
                h.ready(function() {
                    var b = k.createElement("img");
                    b.onload = function() {
                        a._saveReq(!1);
                        m.removeNode(this)
                    };
                    b.onerror = function() {
                        a._saveReq(!0);
                        m.removeNode(this)
                    };
                    b.src = a.url + String.fromCharCode(97, 100, 118, 101, 114, 116, 46, 103, 105, 102);
                    t.isSafari() && (b.style.position = "absolute", b.style.visibility = "hidden", b.style.width = "0px", b.style.height = "0px", m.getRootElement().appendChild(b))
                })
            },
            _saveReq: function(a) {
                this._value = a = a ? "1" : "2";
                this._setReqStatus("complete");
                this._getLs().create("isad",
                    a, 1200)
            },
            _setReqStatus: function(a) {
                try {
                    g.Ya._metrika.adStatus = a
                } catch (b) {}
            },
            _getReqStatus: function() {
                try {
                    return g.Ya._metrika.adStatus
                } catch (a) {
                    return "complete"
                }
            },
            _getLs: function() {
                this._ls || (this._ls = new M);
                return this._ls
            }
        },
        R = {
            encode: function(a) {
                var b = [],
                    c;
                var d = 0;
                for (c = a.length; d < c; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? b.push(e) : (127 < e && 2048 > e ? b.push(e >> 6 | 192) : (b.push(e >> 12 | 224), b.push(e >> 6 & 63 | 128)), b.push(e & 63 | 128))
                }
                return b
            },
            decode: function(a) {
                for (var b = "", c = 0, d, e, f; c < a.length;) d = a.charCodeAt(c),
                    128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (e = a.charCodeAt(c + 1), b += String.fromCharCode((d & 31) << 6 | e & 63), c += 2) : (e = a.charCodeAt(c + 1), f = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | f & 63), c += 3);
                return b
            }
        };
    I.decode = function(a, b) {
        for (var c = I.abc + (b ? I.tailSafe : I.tail), d = 0, e = "", f, g, h, k, l; a.length % 4;) a += "\x3d";
        do {
            f = c.indexOf(a.charAt(d++));
            g = c.indexOf(a.charAt(d++));
            k = c.indexOf(a.charAt(d++));
            l = c.indexOf(a.charAt(d++));
            if (0 > f || 0 > g || 0 > k || 0 > l) return null;
            h = f << 18 | g << 12 | k << 6 | l;
            f = h >> 16 &
                255;
            g = h >> 8 & 255;
            h &= 255;
            e = 64 == k ? e + String.fromCharCode(f) : 64 == l ? e + String.fromCharCode(f, g) : e + String.fromCharCode(f, g, h)
        } while (d < a.length);
        return e
    };
    var aa = K.inherit({
        hitId: 0,
        trackHash: !1,
        trimParams: !1,
        webvisor: !1,
        counter: null,
        counterNum: 0,
        resource: "watch",
        retry: !0,
        postParams: ["site-info"],
        countersNoTitle: "22836271 1143050 29626870 9928105 26128362 29850769".split(" "),
        fake: !1,
        sendTitle: !0,
        _initComponent: function() {
            aa.superclass._initComponent.apply(this, arguments);
            this._trackHash = this.trackHash;
            "0" ===
            "" + this.counterType && (this.sendTitle = -1 === f.arrayIndexOf(this.countersNoTitle, "" + this.counterId))
        },
        setTrackHash: function(a) {
            this._trackHash = a
        },
        sendHit: function(a) {
            this._hitExt({
                url: a.url,
                title: a.title,
                referrer: a.referrer,
                vParams: a.vParams,
                modes: {
                    ar: !0,
                    saveRef: !0,
                    pv: !0
                },
                callback: a.callback,
                ctx: a.ctx
            })
        },
        sendExperiments: function(a) {
            this._hitExt({
                url: x().href,
                title: "",
                referrer: "",
                modes: {
                    ex: !0,
                    ar: !0
                },
                experiments: a.experiments,
                callback: a.callback,
                ctx: a.ctx
            })
        },
        sendPrerenderHit: function(a) {
            this._hitExt({
                url: a.url,
                title: a.title,
                referrer: a.referrer,
                modes: {
                    ar: !0,
                    pq: !0
                }
            })
        },
        sendAjaxHit: function(a) {
            this._hitExt({
                url: a.url,
                title: a.title,
                referrer: a.referrer,
                modes: a.modes
            })
        },
        sendParams: function(a, b, c) {
            this._hitExt({
                url: x().href,
                title: "",
                referrer: "",
                vParams: a,
                modes: {
                    ar: !0,
                    pa: !0,
                    onlyData: !0
                },
                callback: b,
                ctx: c
            })
        },
        sendGoal: function(a, b) {
            if (/[\/&=?#]/.test(a)) f.warning("Incorrect goal");
            else if (a) {
                var c = x();
                this._hitExt({
                    url: "goal://" + c.hostname + "/" + encodeURIComponent(a),
                    title: m.getDocumentTitle(),
                    referrer: c.href,
                    vParams: b.vParams,
                    modes: {
                        ar: !0
                    },
                    callback: b.callback,
                    ctx: b.ctx
                })
            } else f.warning("Empty goal")
        },
        sendClickLink: function(a) {
            this._hitExt({
                url: a.url,
                title: a.title,
                referrer: x().href,
                modes: a.modes
            })
        },
        sendExtLink: function(a) {
            this._hitExt({
                url: a.url,
                title: a.title || "",
                referrer: x().href,
                vParams: a.vParams,
                modes: {
                    ar: !0,
                    ln: !0,
                    ut: La
                },
                callback: a.callback,
                ctx: a.ctx
            })
        },
        sendFileUpload: function(a) {
            this._hitExt({
                url: a.url,
                title: a.title || "",
                referrer: x().href,
                vParams: a.vParams,
                modes: {
                    ar: !0,
                    ln: !0,
                    dl: !0
                },
                callback: a.callback,
                ctx: a.ctx
            })
        },
        sendNotBounce: function(a,
            b) {
            this._hitExt({
                url: x().href,
                title: "",
                referrer: "",
                modes: {
                    cl: a,
                    ar: !0,
                    nb: !0,
                    onlyData: !0
                },
                callback: b.callback,
                ctx: b.ctx
            })
        },
        sendDevice: function(a) {
            this._hitExt({
                browserInfo: {
                    di: a.data,
                    dip: a.port
                },
                callback: a.callback,
                ctx: a.ctx
            })
        },
        _hitExt: function(a) {
            function b(a, b) {
                b && (t[a] = b)
            }
            var c, d, e, g = {};
            if (!f.isMetrikaPlayer()) {
                var h = a.modes || {};
                var k = a.browserInfo || {};
                var m = "undefined" != typeof a.referrer ? a.referrer : na.lastReferrer;
                var l = a.url || "";
                var t = {};
                h.ar && !h.onlyData && (m = null === m || "" === m ? "" : this._prepareHitUrl(m),
                    l = this._prepareHitUrl(a.url));
                b("page-ref", f.trim(m, wa));
                b("page-url", f.trim(l, wa));
                Va() ? b("ut", La) : "undefined" != typeof h.ut && b("ut", f.trim(h.ut, Cb));
                b("exp", a.experiments);
                if (d = a.vParams) d.__ym && f.isNumber(d.__ym.turbo_page) && (g.tp = d.__ym.turbo_page), l = f.toJSON(d), this.trimParams && l.length > Db ? e = !0 : b("site-info", l);
                h.saveRef && (na.lastReferrer = m);
                this.fake || (c = this._getTechInfo(a.title, h, this.counterId, a.ts, a.tz, this._trackHash, this.hitId, this.webvisor, this.counter));
                f.mixin(k, c, g);
                this.send(t, k, function() {
                    e &&
                        this.counter.params(d);
                    a.userParams && this.counter.userParams(a.userParams);
                    f.isFunction(a.callback) && a.callback.apply(a.ctx, arguments)
                }, this)
            }
        },
        _prepareHitUrl: function(a) {
            var b = x(),
                c = b.host,
                b = b.href;
            if (!f.isString(a)) return b;
            if (-1 != a.search(/^\w+:\/\//)) return a;
            var d = a.charAt(0);
            if ("?" == d) return d = b.search(/\?/), -1 == d ? b + a : b.substr(0, d) + a;
            if ("#" == d) return d = b.search(/#/), -1 == d ? b + a : b.substr(0, d) + a;
            if ("/" == d) {
                if (d = b.search(c), -1 != d) return b.substr(0, d + c.length) + a
            } else return c = b.split("/"), c[c.length -
                1] = a, c.join("/");
            return a
        },
        _getTechInfo: function(a, b, c, d, e, h, k, W, p) {
            function l(a, b) {
                a && b && (q[a] = b)
            }

            function n(a) {
                b[a] && l(a, "1")
            }
            var q = {};
            b = b || {};
            d = d || w.getTimestamp();
            e = e || w.getTimezone();
            l("j", t.getJavaEnabled() ? "1" : "");
            l("nt", t.netType());
            Y && l("s", Y.width + "x" + Y.height + "x" + (Y.colorDepth || Y.pixelDepth));
            g.devicePixelRatio && l("sk", g.devicePixelRatio);
            t.isIframe() && l("ifr", "1");
            l("adb", cb.getVal());
            l("f", t.getFlashVersion());
            l("l", t.getSilverlightVersion());
            l("fpr", t.getFingerPrint());
            l("cn", this.counterNum);
            if (!b.pa) {
                var r = m.getViewportSize();
                l("w", r[0] + "x" + r[1])
            }
            l("z", e);
            l("i", d);
            l("et", w.getSeconds());
            l("en", m.getDocumentCharset());
            l("v", T);
            l("c", navigator.cookieEnabled ? "1" : "");
            l("la", t.getLanguage());
            l("ntf", t.getNotificationPermission());
            f.random(100) || l("np", I.encode(R.encode(f.trim(t.getPlatform(), 100))));
            h && l("wh", "1");
            e = "ar ln dl ad nb pa pq pv ex".split(" ");
            for (d = 0; d < e.length; d++) n(e[d]);
            e = ["va", "vt", "sn", "sa", "he"];
            b.nb && e.push("cl");
            for (d = 0; d < e.length; d++) h = e[d], l(h, b[h]);
            e = new P({
                counterId: c
            });
            e.isEnabled() && (c = e.getStorageId(), (d = e.get("reqNum")) ? d++ : d = 1, e.set("reqNum", d), e.get("reqNum") == d ? (l("ls", c), l("rqn", d)) : (e.remove("reqNum"), e.clearStorageId(), 1 < d && (l("ls", c), l("rqn", 0))));
            l("rn", f.random());
            l("hid", k);
            l("ds", wb(p));
            p._firstPaint || (p._firstPaint = xb(), l("fp", p._firstPaint));
            if (W) {
                g.name || (g.name = Math.round(65535 * Math.random()));
                if (k = +g.name) 0 > k && (k *= -1), k %= 65535;
                l("wn", k || f.fletcher(g.name));
                try {
                    g.history && l("hl", String(g.history.length))
                } catch (Nb) {}
            }
            k = "";
            this.sendTitle && (k = this._getTitle(a));
            l("t", k);
            return q
        },
        _getTitle: function(a) {
            a = "undefined" == typeof a ? (a = m.getDocumentTitle()) ? f.trim(a, db) : "" : f.trim(a, db);
            return a
        }
    });
    f.array2Props = function(a) {
        var b = a.length,
            c = {},
            d = c,
            e;
        for (e = 0; e < b - 1; e++) {
            var f = a[e];
            d[f] = {};
            e < b - 2 && (d = d[f])
        }
        d[f] = a[b - 1];
        return c
    };
    var ia = F.inherit({
            sampling: 1,
            counterId: 26302566,
            _initComponent: function() {
                ia.superclass._initComponent.apply(this, arguments);
                this._sender = new aa({
                    protocol: "https:",
                    counterId: this.counterId,
                    retry: !1,
                    counter: {}
                })
            },
            log: function() {
                this.logParams(f.array2Props(arguments))
            },
            logParams: function(a) {
                Math.random() < this.sampling && this._sender.sendHit({
                    url: A.href,
                    title: "",
                    referrer: "",
                    vParams: a
                })
            }
        }),
        Eb = K.inherit({
            resource: "webvisor",
            retry: !0,
            postParams: ["wv-data"],
            sendPacket: function(a, b, c, d, e, h, k, m) {
                if (!a || !a.length) return !1;
                var n = I.encode(a, !0);
                if (0 == n.indexOf("AAAAAAAAADw") && g.Error) {
                    var l = Error();
                    "string" == typeof l.stack && (new ia({
                        sampling: .1
                    })).log("bad visor packet 5", 1)
                }
                a = {
                    rn: f.random(),
                    "page-url": b,
                    wmode: 0,
                    "wv-type": 0,
                    "wv-hit": c,
                    "wv-part": d + 1,
                    "wv-check": f.fletcher(a),
                    "wv-data": n
                };
                e = {
                    v: this._getVersion(),
                    z: e,
                    i: h
                };
                return this.send(a, e, k, m)
            }
        }),
        Da = bb.inherit({
            protocol: "",
            counterId: "",
            counterType: "",
            meta: null,
            maxBufferSize: 7500,
            flushTimeout: 3E4,
            storageKey: "visorbuff",
            active: !1,
            _initComponent: function() {
                this.storage = new P({
                    counterId: this.counterId
                });
                this._sender = new Eb({
                    protocol: this.protocol,
                    counterId: this.counterId,
                    counterType: this.counterType
                });
                Da.superclass._initComponent.apply(this, arguments)
            },
            onFlush: function(a, b, c) {
                this._sender.sendPacket(a, b.url, b.hitId, c, b.timezone,
                    b.timestamp)
            }
        }),
        sb = K.inherit({
            resource: "webvisor",
            transports: [ja, U],
            postParams: ["wv-data"],
            sendContent: function(a, b, c, d, e, f, g) {
                if (!a) return !1; - 1 < a.indexOf("\r") && (a = a.replace(/\r\n/g, "\n"));
                a = {
                    "wv-type": 1,
                    "page-url": x().href,
                    "wv-hit": c,
                    "wv-data": I.encode(R.encode(a))
                };
                return 245E3 < a["wv-data"].length ? !1 : this.send(a, {
                    z: d,
                    i: e,
                    pct: b || ""
                }, f, g)
            }
        });
    h.on = function() {
        h._instance || (h._instance = new h);
        h._instance.on.apply(h._instance, arguments)
    };
    h.un = function() {
        h._instance && h._instance.un.apply(h._instance,
            arguments)
    };
    m.getDocumentHTML = function() {
        var a = "";
        var b = k.documentElement;
        var c = b.outerHTML,
            d, e;
        if (c) b = c;
        else {
            c = b.attributes;
            var f = "";
            for (d = 0; d < c.length; d++)(e = c[d]) && (f += " " + e.name + '\x3d"' + (e.value || "") + '"');
            b = "\x3chtml" + f + "\x3e" + b.innerHTML + "\x3c/html\x3e"
        }
        if (c = k.doctype) a = c.publicId ? ' PUBLIC "' + c.publicId + '"' : "", f = c.systemId ? ' "' + c.systemId + '"' : "", a = "\x3c!DOCTYPE " + c.name + a + f + "\x3e\n";
        return a + b
    };
    m.getDocumentScroll = function() {
        return [g.pageXOffset || k.documentElement && k.documentElement.scrollLeft ||
            k.body && k.body.scrollLeft || 0, g.pageYOffset || k.documentElement && k.documentElement.scrollTop || k.body && k.body.scrollTop || 0
        ]
    };
    m.getElementParent = function(a) {
        if (!a || a == k.documentElement) return null;
        if (a == k.body) return k.documentElement;
        var b = null;
        try {
            b = a.parentNode
        } catch (c) {}
        return b
    };
    m.getElementChildren = function(a, b) {
        var c = [],
            d, e, g;
        if (a && (d = a.childNodes)) {
            var h = 0;
            for (g = d.length; h < g; h++) {
                var k = d[h];
                (e = "INPUT" == k.nodeName && k.type && "hidden" == k.type.toLocaleLowerCase()) || b && k.nodeName != b || f.mergeArrays(c, [k])
            }
        }
        return c
    };
    m.getElementNeighborPosition = function(a) {
        var b = m.getElementParent(a),
            c;
        if (b) {
            var d = 0;
            b = b.childNodes;
            var e = a && a.nodeName;
            for (c = 0; c < b.length; c++) {
                var f = b[c] && b[c].nodeName;
                if (e == f) {
                    if (a == b[c]) return d;
                    d++
                }
            }
        }
        return 0
    };
    m.getElementXY = function(a) {
        var b;
        if (!a || !a.ownerDocument || "PARAM" == a.tagName || a == k.body || a == k.documentElement) return [0, 0];
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            var c = m.getDocumentScroll();
            return [Math.round(a.left + c[0]), Math.round(a.top + c[1])]
        }
        for (b = c = 0; a;) c +=
            a.offsetLeft, b += a.offsetTop, a = a.offsetParent;
        return [c, b]
    };
    m.getDocumentSize = function() {
        var a = m.getRootElement(),
            b = m.getViewportSize();
        return [Math.max(a.scrollWidth, b[0]), Math.max(a.scrollHeight, b[1])]
    };
    m.getElementSize = function(a) {
        var b;
        return a == k.body || a == k.documentElement ? m.getDocumentSize() : (b = a.getBoundingClientRect && a.getBoundingClientRect()) ? [b.width, b.height] : [a.offsetWidth, a.offsetHeight]
    };
    m.getElementRegion = function(a) {
        var b = m.getElementXY(a);
        a = m.getElementSize(a);
        return [b[0], b[1], a[0],
            a[1]
        ]
    };
    m.calcChildrenChecksum = function(a) {
        var b = r(function() {
            return a.innerHTML
        }, "", !0)() || "";
        return f.fletcher(b.replace(/(<[^>]*>|[\u0000-\u0020])/g, ""))
    };
    m.getFormNumber = function(a) {
        var b = k.getElementsByTagName("form"),
            c;
        var d = 0;
        for (c = b.length; d < c; d++)
            if (b[d] == a) return d;
        return -1
    };
    m.isEmptyField = function(a) {
        return "INPUT" == a.nodeName && "submit" != a.type && "image" != a.type && "hidden" != a.type ? "radio" == a.type || "checkbox" == a.type ? !a.checked : !a.value : "TEXTAREA" == a.nodeName ? !a.value : "SELECT" == a.nodeName ? 0 >
            a.selectedIndex : !0
    };
    m.calcTextChecksum = function(a) {
        var b = "";
        a = a.childNodes;
        var c;
        var d = 0;
        for (c = a.length; d < c; d++) a[d] && 3 == a[d].nodeType && (b += a[d].nodeValue);
        return f.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
    };
    m.calcAttribChecksum = function(a) {
        var b = "",
            c = "width height align title alt name".split(" "),
            d;
        "IMG" == a.tagName && (b += a.src.toLowerCase());
        "A" == a.tagName && (b += a.href.toLowerCase());
        b += String(a.className || "").toLowerCase();
        for (d = 0; d < c.length; d++) a.getAttribute && (b += String(a.getAttribute(c[d]) ||
            "").toLowerCase());
        return f.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
    };
    m.classNameExists = function(a, b) {
        try {
            return (new RegExp("(?:^|\\s)" + b + "(?:\\s|$)")).test(a.className)
        } catch (c) {
            return !1
        }
    };
    m.getElementsByClassName = function(a, b) {
        var c;
        b = b || k;
        var d = b.getElementsByTagName("*");
        var e = [];
        for (c = 0; c < d.length; c++) m.classNameExists(d[c], a) && e.push(d[c]);
        return e
    };
    C = {
        protocol: "https:",
        baseUrl: "mc.yandex.",
        yandexWhiteListTld: "ru ua by kz az kg lv md tj tm uz ee fr co.il com.ge com.am com.tr".split(" ")
    };
    C.host = C.baseUrl + "ru";
    f.isObject = function(a) {
        try {
            return a && null !== a && "[object Object]" == Object.prototype.toString.call(a)
        } catch (b) {
            return !1
        }
    };
    f.arrayEvery = function(a, b, c) {
        var d;
        for (d = 0; d < a.length; d++)
            if (!b.call(c, a[d], d, a)) return !1;
        return !0
    };
    f.arrayFilter = function(a, b, c) {
        var d = [],
            e;
        for (e = 0; e < a.length; e++) b.call(c, a[e], e, a) && d.push(a[e]);
        return d
    };
    f.arrDiff = function(a, b) {
        return f.arrayFilter(a, function(a) {
            return -1 === f.arrayIndexOf(b, a)
        })
    };
    f.encodeURIComponent = function(a, b) {
        a = String(a);
        b && a.length >
            b && (a = a.substr(0, b));
        return (g.encodeURIComponent || g.escape)(a).replace(/\+/g, "%2B")
    };
    f.bind = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 2);
        return function() {
            return a.apply(b || this, c.concat(Array.prototype.slice.call(arguments, 0)))
        }
    };
    f.pad = function(a) {
        return (10 > a ? "0" : "") + a
    };
    f.clearTimeout = function(a) {
        return f.getNativeFunction("clearTimeout")(a)
    };
    f._urlParser = null;
    f.parseUrl = function(a) {
        if (!this._urlParser) try {
            this._urlParser = k.createElement("a")
        } catch (b) {}
        return this._urlParser ? (this._urlParser.href =
            a, {
                protocol: this._urlParser.protocol,
                host: this._urlParser.host,
                port: this._urlParser.port,
                hostname: this._urlParser.hostname,
                hash: this._urlParser.hash,
                search: this._urlParser.search,
                query: this._urlParser.search.replace(/^\?/, ""),
                pathname: this._urlParser.pathname || "/",
                path: (this._urlParser.pathname || "/") + this._urlParser.search,
                href: this._urlParser.href
            }) : {}
    };
    f.safeDecodeURIComponent = function(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
            return ""
        }
    };
    f.getTld = function() {
        if (!this._tld) {
            var a = A.hostname.split(".");
            this._tld = a[a.length - 1]
        }
        return this._tld
    };
    f.reduce = function(a, b, c) {
        var d = 0;
        b == N && (b = c[0], d++);
        for (; d < c.length;) b = a(b, c[d]), d++;
        return b
    };
    f.filter = function(a, b) {
        var c, d = [];
        for (c = 0; c < b.length; c++) a(b[c]) && d.push(b[c]);
        return d
    };
    f.isDev = function() {
        if (f._isDevSetted) return f._isDev;
        try {
            f._isDevSetted = !0;
            var a = new Image;
            Object.defineProperty(a, "id", {
                get: function() {
                    f._isDev = !0
                }
            })
        } catch (b) {}
    };
    var rb = !ua(/webkit/) && ua(/gecko/),
        eb = F.inherit({
            hid: 0,
            tz: 0,
            ts: 0,
            counterId: 0,
            counterType: 0,
            url: "",
            protocol: "",
            enabled: !1,
            _initComponent: function() {
                if (this.isEnabled()) {
                    var a = this._getStorage();
                    var b = a.read("visorc");
                    "b" != b && "w" != b && (b = "");
                    if (!a.isEnabled() || ua("opera mini")) b = "b";
                    this._vc = b;
                    "b" != b && (this._recorder = new lb(this.protocol, this.counterId, this.counterType, this.hid, this.counter));
                    eb.superclass._initComponent.apply(this, arguments)
                }
            },
            start: function(a) {
                if (this.isEnabled() && this._recorder) {
                    a = a || {};
                    var b = +a.recp;
                    if (!isFinite(b) || 0 > b || 1 < b) var c = "w";
                    c || (c = this.hid % 1E4 / 1E4 < b ? "w" : "b");
                    this._getStorage().create("visorc",
                        c, 30);
                    "w" == c ? (this._recorder.start(), b = a.arch_type, (a = a.urls) && b && "none" != b && this._recorder.uploadPages(a, b)) : this._recorder.stop()
                }
            },
            isEnabled: function() {
                return this.enabled
            },
            getVc: function() {
                return this._vc
            },
            _getStorage: function() {
                this._storage || (this._storage = new M({
                    counterId: this.counterId
                }));
                return this._storage
            }
        }),
        Fb = ja.inherit({
            id: "RawBodyXHR",
            index: 9,
            postParams: ["body"],
            _setHeaders: function() {},
            _preparePostParams: function(a) {
                return a.post.body || ""
            }
        });
    ga.parse = function(a) {
        try {
            return JSON.parse(a)
        } catch (b) {
            return null
        }
    };
    w.getMinutes = function() {
        return Math.floor(+new Date / 1E3 / 60)
    };
    var va = S.inherit({
            id: "script",
            index: 6,
            request: function(a, b, c, d) {
                var e = f.getNativeFunction("createElement", k)("script");
                if (!e) return c.call(d, !1), !1;
                var h = "_ymjsp" + f.random();
                g[h] = r(function() {
                    try {
                        delete g[h]
                    } catch (q) {
                        g[h] = N
                    }
                    c.apply(d, f.mergeArrays([!0], arguments));
                    e.parentNode && e.parentNode.removeChild(e)
                }, "transport.script");
                e.type = "text/javascript";
                e.async = "async";
                e.src = this._buildUrl(a, f.mixin({
                    wmode: 5,
                    callback: h
                }, b));
                a = k.getElementsByTagName("head")[0];
                a || (a = k.createElement("head"), k.documentElement.appendChild(a));
                a.insertBefore(e, a.firstChild);
                return !0
            }
        }),
        Ma = aa.inherit({
            transports: [va],
            trimParams: !0,
            _initComponent: function() {
                Ma.superclass._initComponent.apply(this, arguments);
                this._ilStorage = new P({
                    counterId: this.counterId
                })
            },
            checkYandexHost: function(a) {
                if (a) {
                    a: {
                        if (a = f.parseUrl(a).host.match(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/))
                            if (a = a[0].split("yandex").reverse()[0].substring(1), -1 != f.arrayIndexOf(C.yandexWhiteListTld, a)) break a;a = !1
                    }
                    a &&
                    (this.host = C.baseUrl + a)
                }
            },
            sendHit: function(a) {
                var b = {},
                    c = this._ilStorage.get("il");
                a.visitColor && (b.vc = a.visitColor);
                a.hasPrerender && (b.pr = 1);
                c && (this._ilStorage.remove("il"), b.ilt = I.encode(R.encode(f.trim(c, fb))));
                this.checkYandexHost(a.referrer);
                this._hitExt({
                    url: a.url,
                    title: a.title,
                    referrer: a.referrer,
                    vParams: a.vParams,
                    userParams: a.userParams,
                    experiments: a.experiments,
                    modes: a.modes,
                    browserInfo: b,
                    ts: a.ts,
                    tz: a.tz,
                    callback: a.callback,
                    ctx: a.ctx
                })
            }
        }),
        Gb = F.inherit({
            cid: 3,
            cnt: 0,
            _initComponent: function() {
                this._storage =
                    new P
            },
            hit: function(a) {
                var b = this,
                    c = this._storage.get("wasSynced");
                c && c.time + 864E5 > +new Date || g.Ya._metrika.fakeHit ? a() : (g.Ya._metrika.fakeHit = !0, this._getSender().sendHit({
                    callback: function() {
                        b._storage.set("wasSynced", {
                            time: +new Date
                        });
                        a()
                    }
                }))
            },
            _getSender: function() {
                this._sender || (this._sender = new Ma({
                    protocol: "https:",
                    counterType: this.cnt,
                    counterId: this.cid,
                    sendTitle: !1,
                    dontSendRequests: this.dontSendRequests,
                    fake: !0
                }));
                return this._sender
            }
        }),
        gb = F.inherit({
            baseUrl: C.baseUrl,
            baseTld: "ru",
            _initComponent: function() {
                var a =
                    this;
                gb.superclass._initComponent.apply(this, arguments);
                this.syncTlds = f.reduce(function(a, c) {
                    return c(a)
                }, C.yandexWhiteListTld, [f.bind(f.filter, null, function(b) {
                    return b !== a.baseTld
                }), f.bind(f.reduce, null, function(a, c) {
                    a[c] = [c];
                    return a
                }, {})])
            },
            langToDomain: {
                ka: "ge",
                ro: "md",
                tg: "tj",
                tk: "tm",
                et: "ee",
                hy: "com.am",
                he: "co.li",
                ky: "kg",
                uk: "ua",
                be: "by",
                tr: "com.tr",
                kk: "kz"
            },
            sync: function(a) {
                var b = this,
                    c = this._need(),
                    d = Va();
                !this._is() && c ? (this._setStatus(!0), d ? this._getCn().hit(function() {
                        b._sync(c, a)
                    }) : a(function() {})) :
                    a();
                d && this._addMda()
            },
            _addMda: function() {
                var a = new M({
                        skipPrefix: !0
                    }),
                    b = new M;
                "0" !== a.read("mda") && a.create("mda", "0", 1036800);
                b.read("mda") && b.erase("mda")
            },
            _is: function() {
                try {
                    return !!g.Ya._metrika.startSync
                } catch (a) {
                    return !1
                }
            },
            _setStatus: function(a) {
                try {
                    g.Ya._metrika.startSync = a
                } catch (b) {}
            },
            _need: function() {
                var a = this._getDomainByLang(),
                    b = this._getTld(),
                    c = [],
                    d;
                (d = this.syncTlds[b]) && c.push.apply(c, d);
                d = this.syncTlds[a];
                a !== b && d && c.push.apply(c, d);
                var e = this._getLs().get("synced") || {};
                c = f.arrayFilter(c,
                    function(a) {
                        return (e[a] || 1) + 1440 < w.getMinutes()
                    });
                return c.length && c || !1
            },
            _sync: function(a, b) {
                var c, d = 0,
                    e = C.protocol + "//",
                    f = a.length,
                    g = this;
                if (0 < f) {
                    b = b || function() {};
                    var h = function() {
                        d++;
                        f === d && b()
                    };
                    var k = g._getLs();
                    var l = new V;
                    for (c = 0; c < f; c++)(function(a) {
                        l.request(e + (g.baseUrl + a) + "/sync_cookie_image_check", {}, function(b) {
                            h();
                            var c = w.getMinutes();
                            b || (c -= 1435);
                            b = k.get("synced") || {};
                            b[a] = c;
                            k.set("synced", b)
                        })
                    })(a[c])
                } else b()
            },
            _getCn: function() {
                this._cn || (this._cn = new Gb({
                    fake: !0,
                    dontSendRequests: this.dontSendRequests
                }));
                return this._cn
            },
            _getLs: function() {
                this._ls || (this._ls = new P);
                return this._ls
            },
            _getTld: function() {
                var a = f.getTld();
                return {
                    am: "com.am",
                    tr: "com.tr",
                    ge: "com.ge",
                    il: "co.il",
                    "\u0440\u0444": "ru",
                    "xn--p1ai": "ru",
                    "\u0443\u043a\u0440": "ua",
                    "xn--j1amh": "ua",
                    "\u0431\u0435\u043b": "by",
                    "xn--90ais": "by"
                }[a] || a
            },
            _getDomainByLang: function() {
                if (!g.navigator) return "ru";
                try {
                    var a = navigator.languages ? navigator.languages[0] : t.getLanguage()
                } catch (b) {}
                a = (a || "").toLowerCase().split("-")[0];
                return this.langToDomain[a] || "ru"
            }
        });
    t.isAndroid = r(function() {
        var a = navigator.userAgent.toLowerCase();
        return -1 < a.indexOf("android") && -1 < a.indexOf("mobile") && navigator.platform.match(/^android|linux armv/i)
    }, "", !0);
    var ba = {
            _url: C.protocol + "//" + C.host + "/user_storage_set?",
            _params: {},
            init: function(a) {
                this._params = a || {}
            },
            save: function(a, b) {
                this._getReq().request(this._url + X.stringify({
                    key: a,
                    value: f.toJSON(b)
                }));
                this._getLs().set(a, b)
            },
            get: function(a) {
                return {
                    remote: this._params[a],
                    local: this._getLs().get(a)
                }
            },
            getNum: function(a) {
                a = this.get(a);
                return Math.max(+a.remote || 0, +a.local || 0)
            },
            _getLs: function() {
                this._ls || (this._ls = new P);
                return this._ls
            },
            _getReq: function() {
                this._req || (this._req = new V);
                return this._req
            }
        },
        Hb = {
            sync: r(function(a, b) {
                var c = ["30102", "29009"],
                    d = {
                        t: 'UV|L7,!"T[rwe\x26D_\x3eZIb\\aW#98Y.PC6k'
                    };
                if (this._enabled(a, b)) {
                    this._setStatus(!0);
                    var e = new Fb({
                        method: "GET",
                        withCredentials: !1
                    });
                    var f = c.length;
                    (function W(a) {
                        var b = c[a];
                        a < f ? e.request("http://127.0.0.1:" + b + "/p", d, function(c, d) {
                                c ? this._save(c, d, b) : W.call(this, a + 1)
                            }, this) :
                            this._save(!1)
                    }).call(this, 0)
                }
            }, "ds"),
            _save: function(a, b, c) {
                var d = w.getMinutes();
                a ? (new aa({
                    protocol: "https:",
                    counterType: 0,
                    counterId: 42822899,
                    sendTitle: !1,
                    fake: !0
                })).sendDevice({
                    data: f.trim(b),
                    port: c
                }) : d -= 45;
                ba.save("ds", d)
            },
            _is: function() {
                try {
                    return !!g.Ya._metrika.dSync
                } catch (a) {
                    return !1
                }
            },
            _enabled: function(a, b) {
                var c = 60 < w.getMinutes() - ba.getNum("ds"),
                    d = 0 == x().hostname.search(/^(.*\.)?((ya|yandex(\-team)?)\.(com\.)?\w+|(auto|kinopoisk)\.ru|yadi\.sk|yastatic\.net)$/),
                    e = 0 === b && 0 <= f.arrayIndexOf([39370095,
                        1282253, 29302335, 43653484, 41734944, 31048081, 16443139, 27737346, 41870499, 33911514, 30744873, 5564395, 2580487
                    ], a);
                return !c || this._is() || !t.isAndroid() || f.isDev() ? !1 : d || .1 >= Math.random() && e
            },
            _setStatus: function(a) {
                try {
                    g.Ya._metrika.dSync = a
                } catch (b) {}
            }
        },
        z = {
            getPos: function(a) {
                var b = m.getRootElement(),
                    c = m.getDocumentScroll();
                return [a.pageX || a.clientX + c[0] - (b.clientLeft || 0) || 0, a.pageY || a.clientY + c[1] - (b.clientTop || 0) || 0]
            },
            getTarget: function(a) {
                var b = null;
                try {
                    (b = a.target || a.srcElement) && !b.ownerDocument && b.documentElement &&
                        (b = b.documentElement)
                } catch (c) {}
                return b
            },
            getMouseButton: function(a) {
                return a.which || a.button == N ? a.which : a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0
            },
            prevent: function(a) {
                a = a || g.event;
                a.preventDefault ? a.preventDefault() : a.returnValue = !1
            }
        };
    z.dispatchCustomEvent = r(function(a, b) {
        var c;
        b = b || k;
        if (c = f.getNativeFunction("createEvent", k)("Event")) c.initEvent(a, !1, !1), f.getNativeFunction("dispatchEvent", b)(c)
    }, "evt.dispatch");
    var na = {
        lastReferrer: null
    };
    t.isIE = function() {
        return k && !k.addEventListener || !1
    };
    var ca = {};
    ca._cookie = new M({
        onlyCurrentDomain: !0
    });
    ca.log = r(function() {
        var a = -1 < A.href.indexOf("_ym_debug\x3d1") || g._ym_debug;
        a && this._cookie.create("debug", "1");
        g.console && console.log && (a || "1" === this._cookie.read("debug")) && console.log.apply(console, arguments)
    }, "DebugConsole.log");
    var Ib = K.inherit({
            resource: "clmap",
            retry: !0,
            transports: [V],
            sendClick: function(a, b, c, d) {
                this.send({
                    "page-url": a,
                    "pointer-click": b
                }, {}, c, d)
            }
        }),
        Jb = F.inherit({
            filter: null,
            ignoreTags: [],
            quota: 0,
            isTrackHash: !1,
            protocol: "",
            counterId: 0,
            counterType: 0,
            startTime: 0,
            dontSendRequests: !1,
            MAX_LEN_PATH: 128,
            TIMEOUT_CLICK: 50,
            TIMEOUT_SAME_CLICKS: 1E3,
            DELTA_SAME_CLICKS: 2,
            tags: "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN".split(" "),
            _initComponent: function() {
                var a, b;
                this._lastClick = null;
                this.hasQuota = !!this.quota;
                this._quota = this.quota;
                this._ignoreTags = [];
                if (this.ignoreTags)
                    for (a = 0; a < this.ignoreTags.length; a++) this.ignoreTags[a] && f.mergeArrays(this._ignoreTags, [String(this.ignoreTags[a]).toUpperCase()]);
                this._cacheTags = {};
                a = 59;
                var c = String.fromCharCode;
                for (b = 0; b < this.tags.length; b++) this._cacheTags[this.tags[b]] = c(a), c(a), a++;
                this._sender = new Ib({
                    dontSendRequests: this.dontSendRequests,
                    protocol: this.protocol,
                    counterId: this.counterId,
                    counterType: this.counterType
                });
                this._start = !1;
                this.start()
            },
            destroy: function() {
                this.stop()
            },
            start: function() {
                if (!this._start) h.on(k, "click", this._handler, this);
                this._start = !0
            },
            stop: function() {
                this._start && h.un(k, "click", this._handler, this);
                this._start = !1
            },
            setTrackHash: function(a) {
                this.isTrackHash = a
            },
            _isIgnore: function(a) {
                return m.classNameExists(a, "(ym-disable-clickmap|ym-clickmap-ignore)")
            },
            _handler: function(a) {
                a = {
                    el: z.getTarget(a),
                    pos: z.getPos(a),
                    button: z.getMouseButton(a),
                    time: +new Date
                };
                if (this._isTrackingClick(a)) {
                    var b =
                        m.getElementSize(a.el);
                    var c = m.getElementXY(a.el);
                    b = ["rn", f.random(), "x", Math.floor(65535 * (a.pos[0] - c[0]) / (b[0] || 1)), "y", Math.floor(65535 * (a.pos[1] - c[1]) / (b[1] || 1)), "t", Math.floor((a.time - this.startTime) / 100), "p", this._getElPath(a.el)];
                    c = x().href;
                    this.isTrackHash ? f.mergeArrays(b, ["wh", "1"]) : c = c.split("#")[0];
                    this._sender.sendClick(f.trim(c, wa), b.join(":"));
                    this._lastClick = a
                }
            },
            _isTrackingClick: function(a) {
                var b;
                if (g.ymDisabledClickmap || f.isMetrikaPlayer() || !a.el) return !1;
                var c = a.el.tagName;
                if ((2 ==
                        a.button || 3 == a.button) && "A" != c || this.filter && !this.filter(a.el, c)) return !1;
                for (b = 0; b < this._ignoreTags.length; b++)
                    if (this._ignoreTags[b] == c) return !1;
                for (c = a.el; c;) {
                    if (this._isIgnore(c)) return !1;
                    c = c.parentNode
                }
                if (this._lastClick) {
                    if (a.time - this._lastClick.time < this.TIMEOUT_CLICK) return !1;
                    c = Math.abs(this._lastClick.pos[0] - a.pos[0]);
                    b = Math.abs(this._lastClick.pos[1] - a.pos[1]);
                    var d = a.time - this._lastClick.time;
                    if (this._lastClick.el == a.el && c < this.DELTA_SAME_CLICKS && b < this.DELTA_SAME_CLICKS && d < this.TIMEOUT_SAME_CLICKS) return !1
                }
                if (this.hasQuota) {
                    if (!this._quota) return !1;
                    this._quota--
                }
                return !0
            },
            _getElPath: function(a) {
                for (var b = ""; a && a.parentNode && "BODY" != a.tagName && "HTML" != a.tagName;) b += this._cacheTags[a.tagName] || "*", b += m.getElementNeighborPosition(a) || "", a = a.parentNode;
                return f.trim(b, this.MAX_LEN_PATH)
            }
        });
    m.loadScript = function(a, b) {
        b = b || g;
        var c = f.mixin({
                type: "text/javascript",
                charset: "utf-8",
                async: !0
            }, a),
            d = b.document,
            e = f.getNativeFunction("createElement", d),
            h = e("script");
        if (h) {
            h.type = c.type;
            h.charset = c.charset;
            h.src = c.src;
            c.async && (h.async = !0);
            try {
                var k = d.getElementsByTagName("head")[0];
                if (!k) {
                    var m = d.getElementsByTagName("html")[0];
                    k = e("head");
                    m && m.appendChild(k)
                }
                k.insertBefore(h, k.firstChild);
                return h
            } catch (p) {}
        }
    };
    var hb = F.inherit({
        _initComponent: function() {
            hb.superclass._initComponent.apply(this, arguments);
            this._executedMsgs = {};
            h.on(g, "message", this._onMessage, this)
        },
        _buildRemoteIframe: function(a) {
            var b = f.getNativeFunction("createElement", k)("div"),
                c = k.body || k.documentElement;
            if (c) {
                b.innerHTML = '\x3ciframe name\x3d"RemoteIframe" allowtransparency\x3d"true" style\x3d"position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"\x3e\x3c/iframe\x3e';
                var d = b.firstChild;
                d.onload = function() {
                    m.loadScript({
                        src: a
                    }, d.contentWindow)
                };
                g._ym__remoteIframeEl = d;
                b.createShadowRoot || b.webkitCreateShadowRoot ? (c.appendChild(b), b.removeChild(d), (c = b.createShadowRoot ? b.createShadowRoot() : b.webkitCreateShadowRoot()) && c.appendChild(d), g._ym__remoteIframeContainer = b) : (c.appendChild(d), g._ym__remoteIframeContainer = d)
            }
        },
        _isAllowedLang: function(a) {
            return -1 !== f.arrayIndexOf(["ru", "uk", "en", "tr"], a)
        },
        _isAllowedOrigin: function(a) {
            return /^http:\/\/(.+\.)?webvisor\.com\/?$/.test(a)
        },
        _isAllowedStatic: function(a) {
            return /^https?:\/\/(((.+\.)?dev\.webvisor\.com)|(yastatic\.net))(\/.*)?$/.test(a)
        },
        _onMessage: function(a) {
            try {
                var b = a.origin
            } catch (c) {}
            b && this._isAllowedOrigin(b) && (b = ga.parse(a.data)) && "appendremote" === b.action && this._isAllowedStatic(b.domain) && this._isAllowedLang(b.lang) && !this._executedMsgs[b.id] && (this._executedMsgs[b.id] = !0, g._ym__postMessageEvent = a, g._ym__inpageMode = b.inpageMode, g._ym__initMessage = b.initMessage, this._buildRemoteIframe(b.domain + "/cdn/inpage-remote/inpage-remote." +
                b.lang + ".js"))
        }
    });
    w.getTimestamp = function() {
        var a = new Date,
            a = [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()],
            b = "",
            c;
        for (c = 0; c < a.length; c++) b += f.pad(a[c]);
        return b
    };
    w.getTimezone = function() {
        return -(new Date).getTimezoneOffset()
    };
    var ib = F.inherit({
            counter: null,
            prefsEcommerce: null,
            dataLayerName: "dataLayer",
            allowedEvents: ["add", "delete", "remove", "purchase", "detail"],
            _initComponent: function() {
                var a = "customArr";
                ib.superclass._initComponent.apply(this, arguments);
                this._overridePush(this.prefsEcommerce) ||
                    (f.isString(this.prefsEcommerce) && (this.dataLayerName = this.prefsEcommerce), a = this.dataLayerName, this._tryTimeout = f.bind(this._tryTimeout, this), this._tryTimeout());
                this.counter._ecommerce = a
            },
            _overridePush: function(a) {
                if (a && "function" == typeof a.push) {
                    var b = this;
                    b._send(a);
                    var c = a.push;
                    a.push = function() {
                        b._send([].slice.call(arguments, 0));
                        c.apply(this, arguments)
                    };
                    return !0
                }
                return !1
            },
            _tryTimeout: function() {
                this._overridePush(g[this.dataLayerName]) || f.setTimeout(this._tryTimeout, 1E3, "dlObserver")
            },
            _send: function(a) {
                var b = [],
                    c = this.allowedEvents,
                    d, e;
                var g = 0;
                for (e = a.length; g < e; g++)
                    if ((d = a[g]) && d.ecommerce) {
                        var h = {};
                        var k = !1;
                        f.forEachKey(d.ecommerce, function(a, b) {
                            0 <= f.arrayIndexOf(c, a) && (k = !0, h[a] = b)
                        });
                        k && b.push(h)
                    }
                b.length && this.counter.params({
                    __ym: {
                        ecommerce: b
                    }
                })
            }
        }),
        Kb = {
            match: function() {
                this.enabled() && h.ready(function() {
                    var a = f.getNativeFunction("createElement", k)("iframe");
                    a.onload = function() {
                        ba.save("cm", w.getMinutes());
                        m.removeNode(a)
                    };
                    a.style.display = "none";
                    a.src = C.protocol + "//" + C.host + "/metrika/watch_match.html";
                    k.documentElement.appendChild(a)
                })
            },
            enabled: function() {
                return 1440 < w.getMinutes() - ba.getNum("cm") && "tr" === f.getTld()
            }
        },
        jb = {
            set: function(a, b) {
                r(function() {
                    g.Ya._metrika[a] = b
                }, "", !0)()
            },
            get: function(a) {
                return r(function() {
                    return g.Ya._metrika[a]
                }, "", !0)()
            }
        };
    r(function() {
        (function(a) {
            function b(d) {
                if (c[d]) return c[d].exports;
                var e = c[d] = {
                    i: d,
                    l: !1,
                    exports: {}
                };
                a[d].call(e.exports, e, e.exports, b);
                e.l = !0;
                return e.exports
            }
            var c = {};
            b.m = a;
            b.c = c;
            b.d = function(a, c, f) {
                b.o(a, c) || Object.defineProperty(a, c, {
                    configurable: !1,
                    enumerable: !0,
                    get: f
                })
            };
            b.n = function(a) {
                var c = a && a.__esModule ? function() {
                    return a["default"]
                } : function() {
                    return a
                };
                b.d(c, "a", c);
                return c
            };
            b.o = function(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            };
            b.p = "";
            return b(b.s = 2)
        })([function(a, b, c) {
            b.__esModule = !0;
            b.listToArray = function(a) {
                return a ? [].slice.call(a) : []
            }
        }, , function(a, b, c) {
            b.__esModule = !0;
            a = {
                detectAd: c(3).detectAd
            };
            g.Ya ? g.Ya.AdDetector ? a = g.Ya.AdDetector : g.Ya.AdDetector = a : g.Ya = {
                AdDetector: a
            };
            b.AdDetector = a
        }, function(a, b, c) {
            b.__esModule = !0;
            var d = c(0),
                e = c(4),
                f = c(6),
                h = k.body,
                m = k.documentElement;
            b.detectAd = function() {
                function a(a, b) {
                    function c(a, c) {
                        x.push({
                            provider: a,
                            element: b || c
                        })
                    }

                    function e(a, b) {
                        b.forEach(function(b) {
                            c(a, b)
                        })
                    }
                    var g = a.document.body,
                        h = d.listToArray(g.querySelectorAll("img")),
                        k = d.listToArray(g.querySelectorAll("iframe")),
                        l = d.listToArray(g.querySelectorAll("script")),
                        m = d.listToArray(g.querySelectorAll("div")),
                        n = d.listToArray(g.querySelectorAll("yatag")),
                        q = d.listToArray(g.querySelectorAll("yatag yatag"));
                    e("yandex", n.filter(function(a) {
                        return -1 ===
                            q.indexOf(a)
                    }));
                    e("adriver", k.filter(function(a) {
                        return (a = a.src) && -1 < a.indexOf(".adriver.ru/")
                    }));
                    e("adfox", k.filter(function(a) {
                        return (a = a.id) && -1 < a.toLowerCase().indexOf("adfox")
                    }));
                    e("adfox", h.filter(function(a) {
                        return (a = a.src) && -1 < a.indexOf("/banners.adfox.ru/")
                    }));
                    e("adfox", m.filter(function(a) {
                        return -1 < a.id.indexOf("AdFox_banner_")
                    }));
                    b && h.filter(function(a) {
                        return (a = a.src) && -1 < a.indexOf(".adfox.ru/")
                    }).length && c("adfox", b);
                    k.filter(function(a) {
                        return f.isGoogleSrc(a.src)
                    }).forEach(function(a) {
                        c("google",
                            a)
                    });
                    b && l.filter(function(a) {
                        return f.isGoogleSrc(a.src)
                    }).length && c("google", b);
                    e("awaps", k.filter(function(a) {
                        return (a = a.src) && -1 < a.indexOf("awaps.yandex.net/")
                    }));
                    e("criteo", k.filter(function(a) {
                        return (a = a.src) && -1 < a.indexOf(".criteo.com/")
                    }))
                }

                function b(a, c) {
                    e.getFriendlyIFramesWithContent(a).forEach(function(a) {
                        var d = c || a;
                        A.push({
                            targetElement: d,
                            iframe: a
                        });
                        b(a.contentWindow, d)
                    })
                }
                var c = g.pageYOffset || m.scrollTop || h.scrollTop,
                    k = g.pageXOffset || m.scrollLeft || h.scrollLeft,
                    n = m.clientTop || h.clientTop ||
                    0,
                    q = m.clientLeft || h.clientLeft || 0,
                    t = m.scrollWidth || m.offsetWidth || g.innerWidth,
                    r = m.scrollHeight || m.offsetHeight || g.innerHeight,
                    x = [];
                a(g);
                var A = [];
                b(g);
                A.forEach(function(b) {
                    a(b.iframe.contentWindow, b.targetElement)
                });
                var z = [];
                x.forEach(function(a) {
                    var b = a.element;
                    var d = b.getBoundingClientRect();
                    var e = d.top + c - n;
                    d = d.left + k - q;
                    var f = b.clientWidth;
                    b = b.clientHeight;
                    var g = d + f,
                        h = e + b,
                        l = 0 > d ? 0 : d < t ? d : t,
                        m = 0 > e ? 0 : e < r ? e : r;
                    100 <= ((g > t ? t : g > l ? g : l) - l) * ((h > r ? r : h > m ? h : m) - m) && z.push({
                        top: e,
                        left: d,
                        width: f,
                        height: b,
                        provider: a.provider
                    })
                });
                return {
                    page: {
                        width: t,
                        height: r
                    },
                    window: {
                        top: c,
                        left: k,
                        width: g.innerWidth,
                        height: g.innerHeight
                    },
                    ads: z
                }
            }
        }, function(a, b, c) {
            b.__esModule = !0;
            var d = c(0),
                e = c(5);
            b.getFriendlyIFramesWithContent = function(a) {
                a = a.document;
                return !e.isSafari && a && a.body ? d.listToArray(a.body.querySelectorAll("iframe")).filter(function(a) {
                    try {
                        return !(!a.contentWindow || !a.contentWindow.document.body)
                    } catch (W) {
                        return !1
                    }
                }) : []
            }
        }, function(a, b, c) {
            b.__esModule = !0;
            a = navigator.userAgent.toLowerCase();
            b.isSafari = -1 !== a.indexOf("safari") && -1 ===
                a.indexOf("chrome")
        }, function(a, b, c) {
            b.__esModule = !0;
            var d = [".googlesyndication.com/", "/googleads"];
            b.isGoogleSrc = function(a) {
                return !(!a || !d.filter(function(b) {
                    return 0 < a.indexOf(b)
                }).length)
            }
        }])
    }, "", !0)();
    var Lb = {
        init: function(a, b) {
            if (Math.random() < (b || .005) && !jb.get("adDetect")) {
                jb.set("adDetect", !0);
                var c = function(b) {
                    var c = g.Ya.AdDetector.detectAd();
                    var d = c.window;
                    var e = c.page;
                    a.sendParams({
                        __ym: {
                            ads: {
                                w: {
                                    t: d.top,
                                    l: d.left,
                                    w: d.width,
                                    h: d.height
                                },
                                p: {
                                    w: e.width,
                                    h: e.height
                                },
                                a: f.map(function(a) {
                                    return {
                                        t: a.top,
                                        l: a.left,
                                        w: a.width,
                                        h: a.height,
                                        p: a.provider
                                    }
                                }, c.ads),
                                full: b ? 1 : 0
                            }
                        }
                    })
                };
                var d = r(function() {
                    h.un(g, "load", d);
                    c(!0)
                }, "", !0);
                h.on(g, "load", d);
                Ka(c, 1E4, "", !0)
            }
        }
    };
    X.parse = function(a, b) {
        var c = {},
            d;
        a = a && a.replace(/^\?/, "") || "";
        if (a.length) {
            var e = a.split("\x26");
            for (d = 0; d < e.length; d++)
                if (e[d]) {
                    var g = e[d].split("\x3d");
                    if (g[0]) {
                        var h = f.safeDecodeURIComponent(g[0]);
                        g = f.safeDecodeURIComponent((g[1] || "").replace(/\+/g, "%20"));
                        b && h in c ? f.isArray(c[h]) ? c[h].push(g) : c[h] = [c[h], g] : c[h] = g
                    }
                }
        }
        return c
    };
    var O = [],
        A = x(),
        sa = w.getTimezone(),
        ta = w.getTimestamp(),
        T = "875",
        Y = g.screen,
        Cb = 64,
        wa = t.isIE() ? 512 : 2048,
        Db = t.isIE() ? 512 : 2048,
        db = t.isIE() ? 100 : 400,
        fb = 100,
        La = "noindex",
        kb = /\.(3gp|7z|aac|ac3|acs|ai|avi|ape|apk|asf|bmp|bz2|cab|cdr|crc32|css|csv|cue|divx|dmg|djvu?|doc(x|m|b)?|emf|eps|exe|flac?|flv|iso|swf|gif|t?gz|jpe?g?|js|m3u8?|m4a|mp(3|4|e?g?)|m4v|md5|mkv|mov|msi|ods|og(g|m|v)|psd|rar|rss|rtf|sea|sfv|sit|sha1|svg|tar|tif?f|torrent|ts|txt|vob|wave?|wma|wmv|wmf|webm|ppt(x|m|b)?|xls(x|m|b)?|pdf|phps|png|xpi|g?zip)$/i,
        Mb = +new Date,
        Na, da;
    g.Ya = g.Ya || {};
    Ya._metrika = Ya._metrika || {};
    Ya._metrika.counters = Ya._metrika.counters || {};
    Ya._metrika.hitParam = Ya._metrika.hitParam || {};
    Ya._metrika.counterNum = Ya._metrika.counterNum || 0;
    Ya._metrika.hitId = Ya._metrika.hitId || f.random(1, 1073741824);
    Ya._globalMetrikaHitId = f.random();
    Ya._metrika.v = T;
    var ea = !!Ya._metrika.oo;
    g.Ya.Metrika = function(a, b, c, d) {
        var e = this;
        return r(function() {
                function n(B) {
                    var u = !1;
                    if (Ya._metrika.hitParam[fa]) {
                        if (1 != c || Ya._metrika.counters[fa]) return !1;
                        u = !0
                    }
                    Ya._metrika.counters[fa] =
                        e;
                    Ya._metrika.hitParam[fa] = 1;
                    e._webvisor = !d && !ea && (y && y.webvisor || !1);
                    e._directCampaign = y && y.directCampaign;
                    y && y.trackHash && S(!0);
                    if (!d && !u) {
                        var J = new eb({
                            protocol: "https:",
                            counterId: a,
                            counterType: c,
                            hid: ja,
                            tz: sa,
                            ts: ta,
                            url: A.href,
                            enabled: e._webvisor
                        });
                        e.replacePhones();
                        u = new gb({
                            dontSendRequests: ea
                        });
                        var n = function(d) {
                            var u = new Ma({
                                    protocol: "https:",
                                    counterType: c,
                                    counterId: a,
                                    trackHash: Q,
                                    hitId: ja,
                                    webvisor: e._webvisor,
                                    counter: e,
                                    dontSendRequests: ea,
                                    counterNum: xa
                                }),
                                l = {
                                    ut: R,
                                    he: y ? ~~y.httpError : 0,
                                    ad: 1 == c &&
                                        g.Ya && g.Ya.Direct,
                                    pv: !0,
                                    saveRef: !0
                                };
                            Na = +new Date;
                            u.sendHit({
                                url: ka,
                                referrer: la,
                                title: m.getDocumentTitle(),
                                vParams: b,
                                userParams: Y,
                                experiments: ua,
                                modes: l,
                                visitColor: J.getVc(),
                                hasPrerender: B,
                                ts: ta,
                                tz: sa,
                                callback: function(u, l) {
                                    ba.init(l);
                                    Kb.match();
                                    Hb.sync(a, c);
                                    ca.log("PageView. Counter ", a, ". URL: ", A.href, ". Referrer: " + k.referrer, ". Params: ", b);
                                    da || (da = +new Date);
                                    u = u || {};
                                    J.start(u.webvisor);
                                    var B = u.mp2;
                                    var m = new M({
                                        counterId: a
                                    });
                                    m.erase("mp2_substs");
                                    if (B) {
                                        b: {
                                            var n = B.conditions;
                                            var q;
                                            if (n && n.length)
                                                for (q =
                                                    0; q < n.length; q++) {
                                                    var p = n[q];
                                                    if ("ref" == p.type) p = yb(p);
                                                    else if ("adv" == p.type) {
                                                        var E;
                                                        var t = p;
                                                        var r = Ya._metrika.counter._directCampaign;
                                                        var L = t.ServiceNamePattern;
                                                        var v = t.RefererPattern;
                                                        p = r ? t.direct_orders : t.direct_camp;
                                                        var ya = k.referrer,
                                                            y = X.parse(A.search),
                                                            x = zb(A.search, A.hash),
                                                            z = {};
                                                        var w = ["source", "medium", "campaign", "term", "content"];
                                                        for (E = 0; E < w.length; E++) y["utm_" + w[E]] && (z[w[E]] = y["utm_" + w[E]]);
                                                        var C = r ? "direct.yandex.ru" : x && x.service || z.source;
                                                        E = !1;
                                                        if (!E && L && L.length)
                                                            for (w = 0; w < L.length; w++)
                                                                if ((new RegExp(L[w],
                                                                        "i")).test(C)) {
                                                                    E = !0;
                                                                    break
                                                                }
                                                        if (!E && !t.yandex_direct && v && v.length)
                                                            for (L = 0; L < v.length; L++)
                                                                if ((new RegExp(v[L], "i")).test(ya)) {
                                                                    E = !0;
                                                                    break
                                                                }!E && t.google_adwords && y.gclid && (E = !0);
                                                        if (E && p && p.length && (E = !1, r = r || x && x.campaign || z && z.campaign))
                                                            for (t = 0; t < p.length; t++)
                                                                if (p[t] == r) {
                                                                    E = !0;
                                                                    break
                                                                }
                                                        p = E
                                                    } else p = !1;
                                                    if (p) {
                                                        n[q].track_id && m.create("mp2_track", n[q].track_id, 43200);
                                                        break b
                                                    }
                                                }
                                        }
                                        n = m.read("mp2_track");B = B.substs && B.substs[n];n && B ? (m.create("mp2_substs", f.toJSON(B)), m = $a(B), e.params("__ym", m ? "mp_trackid" : "mp_trackid_bad",
                                            n)) : ab()
                                    }
                                    else ab();
                                    h.on(g, "load", e.replacePhones, e);
                                    e._inited = !0;
                                    d && d()
                                }
                            })
                        };
                        u.sync(n)
                    }
                    C();
                    y && (y.enableAll ? (q(!0), l(!0), w()) : (y.clickmap && l(y.clickmap), y.trackLinks && q(y.trackLinks), y.accurateTrackBounce && w(y.accurateTrackBounce)), (y.ecommerce || y.useDataLayer) && new ib({
                        counter: e,
                        prefsEcommerce: y.ecommerce
                    }), y.triggerEvent && Ka(function() {
                        z.dispatchCustomEvent("yacounter" + a + "inited")
                    }, 0))
                }

                function q(a) {
                    var b = {};
                    switch (typeof a) {
                        case "string":
                            b.on = !0;
                            break;
                        case "object":
                            b.on = !0;
                            break;
                        case "boolean":
                            b.on =
                                a;
                            break;
                        default:
                            return
                    }
                    e._trackLinks = b
                }

                function C() {
                    q(!1);
                    h.on(k, "click", function(a) {
                        e._trackLinks && e._trackLinks.on && p(a)
                    })
                }

                function p(a) {
                    var b = tb(a),
                        c;
                    if (b) {
                        a = !1;
                        var d = (c = "" + b.href) ? c.split(/\?/)[0] : "";
                        var e = function(a) {
                            var d = Wa(b);
                            v.sendClickLink({
                                url: c,
                                title: c == d ? "" : d,
                                modes: a
                            })
                        };
                        if (kb.test(d) || kb.test(c) || Xa(c, Z) || Xa(d, Z)) a = !0;
                        var g = m.classNameExists(b, "ym-disable-tracklink");
                        d = m.classNameExists(b, "ym-external-link");
                        g || (g = {
                            ln: !0,
                            dl: a
                        }, d ? e(g) : (d = b.hostname || f.parseUrl(b.href).hostname || "", ub(x().hostname,
                            d) ? a ? (g.ln = !1, e(g)) : (a = Wa(b)) && a != c && H.set("il", f.trim(a, fb)) : c && -1 != c.search(/^ *(data|javascript):/i) || (g.ut = La, e(g))))
                    }
                }

                function l(b) {
                    "undefined" == typeof b && (b = !0);
                    !0 === b && (b = {});
                    e._clickmap && e._clickmap.destroy();
                    b && (e._clickmap = new Jb({
                        dontSendRequests: ea,
                        filter: b.filter,
                        ignoreTags: b.ignoreTags,
                        quota: b.quota,
                        isTrackHash: b.isTrackHash,
                        protocol: "https:",
                        counterId: a,
                        counterType: c,
                        startTime: Mb
                    }))
                }

                function F(a, b) {
                    function c() {
                        if (!q) {
                            p && f.clearTimeout(p);
                            var c = m ? B : B + +new Date - n;
                            c = b - c;
                            0 > c && (c = 0);
                            p =
                                f.setTimeout(function() {
                                    q = !0;
                                    e(!1);
                                    a()
                                }, c, "trackUserTime")
                        }
                    }

                    function d() {
                        u || (l = !0, m = !1, u = !0, c())
                    }

                    function e(a) {
                        var b;
                        for (b = 0; b < r.length; b += 3)
                            if (a) h.on(r[b], r[b + 1], r[b + 2]);
                            else h.un(r[b], r[b + 1], r[b + 2])
                    }
                    var l = !1,
                        u = !1,
                        m = !0,
                        B = 0,
                        n = +new Date,
                        p = null,
                        q = !1;
                    if (t.isIE()) f.setTimeout(a, b, "trackUserTime");
                    else {
                        var r = [g, "blur", function() {
                            m = l = u = !0;
                            B += +new Date - n;
                            n = +new Date;
                            c()
                        }, g, "focus", function() {
                            l || u || (B = 0);
                            n = +new Date;
                            l = u = !0;
                            m = !1;
                            c()
                        }, k, "click", d, k, "mousemove", d, k, "keydown", d, k, "scroll", d];
                        e(!0);
                        c()
                    }
                }

                function w(b) {
                    "number" !=
                    typeof b && (b = 15E3);
                    if (!e._isAccurateTrackBounce) {
                        e._isAccurateTrackBounce = !0;
                        var c = new P({
                            counterId: a
                        });
                        var d = c.get("lastHit");
                        c.set("lastHit", +new Date);
                        ((c = c.get("lastHit")) && (!d || d < c - 18E5) || !vb(k.referrer, x().href) || .1 > Math.random()) && F(function() {
                            e.notBounce()
                        }, b)
                    }
                }

                function I(a) {
                    var b = function() {
                        var a = x().hash.split("#")[1];
                        if ("undefined" == typeof a) return !1;
                        var b = a.indexOf("?");
                        0 < b && (a = a.substring(0, b));
                        return a
                    };
                    var c = b();
                    (function L() {
                        var d = b();
                        d !== c && (a(), c = d);
                        oa = f.setTimeout(L, 200, "trackHash")
                    })()
                }

                function S(a) {
                    if (!1 === a) Q && ("onhashchange" in g ? h.un(g, "hashchange", T) : f.clearTimeout(oa), Q = !1);
                    else if (a = T, !Q) {
                        if ("onhashchange" in g) h.on(g, "hashchange", a);
                        else I(a);
                        Q = !0
                    }
                    v.setTrackHash(Q);
                    e._trackHash = Q
                }

                function T() {
                    var a = {
                        ut: R,
                        ad: 1 == c && g.Ya && g.Ya.Direct,
                        wh: !0,
                        saveRef: !0,
                        pv: !0
                    };
                    U = na.lastReferrer = V;
                    v.sendAjaxHit({
                        url: x().href,
                        title: m.getDocumentTitle(),
                        referrer: U,
                        modes: a
                    });
                    V = x().href
                }

                function O(a, b, c) {
                    a = wa.parseValidate(a, b);
                    b = [];
                    a && (b.push(a), c = c || {}, f.isFunction(c.callback) && (b.push(c.callback),
                        c.ctx && b.push(c.ctx)));
                    b.length && e.params.apply(e, b)
                }
                var R = "",
                    U = "",
                    V = na.lastReferrer = A.href;
                Ya._metrika.counter || (Ya._metrika.counter = e);
                if ("object" == typeof a) {
                    var y = a;
                    d = a.defer;
                    R = a.ut;
                    c = a.type;
                    b = a.params;
                    var Y = a.userParams;
                    var ua = y.experiments;
                    var va = y.nck;
                    var ka = a.url;
                    var la = a.referrer;
                    a = a.id
                }(function(a) {
                    if (g.performance && "function" === typeof performance.getEntries && (a === N && (a = 1), !(Math.random() >= a))) {
                        a = {
                            339366994: 1,
                            2890452365: 1,
                            849340123: 1,
                            173872646: 1,
                            2343947156: 1,
                            655012937: 1,
                            1996539654: 1,
                            2065498185: 1,
                            823651274: 1,
                            12282461: 1,
                            1555719328: 1,
                            1417229093: 1,
                            138396985: 1
                        };
                        var b = performance.getEntries(),
                            c = {},
                            d;
                        for (d = 0; d < b.length; d++) {
                            var e = b[d];
                            var h = e.name.replace(/^https?:\/\//, "").split("?")[0];
                            var k = f.fnv32a(h);
                            a[k] && !c[h] && (c[h] = {
                                dns: Math.round(e.domainLookupEnd - e.domainLookupStart),
                                tcp: Math.round(e.connectEnd - e.connectStart),
                                duration: Math.round(e.duration),
                                response: Math.round(e.responseEnd - e.requestStart),
                                pages: A.href
                            })
                        }
                        f.keys(c).length && (new ia).logParams({
                            timings8: c
                        })
                    }
                })(24226447 == a ? 1 : .002);
                ka = ka ?
                    ka : A.href;
                la = la ? la : k.referrer;
                a = a || 0;
                /^\d+$/.test(a) || (a = 0);
                c = c || 0;
                var fa = a + ":" + c;
                if (Ya._metrika.counters[fa]) return Ya._metrika.counters[fa];
                var ja = Ya._metrika.hitId;
                Ya._metrika.counterNum++;
                var xa = Ya._metrika.counterNum;
                va || (K.initCookie(), cb.init());
                K.retransmit();
                var v = new aa({
                    protocol: "https:",
                    counterType: c,
                    counterId: a,
                    hitId: ja,
                    counter: e,
                    dontSendRequests: ea,
                    counterNum: xa
                });
                e.replacePhones = r(function() {
                        var b, c;
                        try {
                            (b = (new M({
                                counterId: a
                            })).read("mp2_substs")) && (c = ga.parse(b)) && $a(c, !0)
                        } catch (J) {}
                        return e
                    },
                    "counter.replacePhones");
                e.reachGoal = r(function(b, c, d, f) {
                    2 <= arguments.length && "function" === typeof c && (f = d, d = c, c = N);
                    ca.log("Reach goal. Counter: " + a + ". Goal id: " + b + ". Params: ", c);
                    v.sendGoal(b, {
                        vParams: c,
                        callback: d,
                        ctx: f
                    });
                    return e
                }, "counter.reachGoal");
                e.trackLinks = r(function(a) {
                    q(a);
                    return e
                }, "counter.trackLinks");
                var H = new P({
                    counterId: a
                });
                e.hit = r(function(b, c, d, g, h, k) {
                    b ? (f.isObject(c) && (d = c.referer, g = c.params, h = c.callback, k = c.ctx, c = c.title), ca.log("PageView. Counter " + a, ". URL: " + b, ". Referrer: " +
                        d, ". Params: ", g), v.sendHit({
                        url: b,
                        title: c,
                        referrer: d,
                        vParams: g,
                        callback: h,
                        ctx: k
                    })) : f.warning("Empty hit url");
                    return e
                }, "counter.hit");
                e.params = r(function(b) {
                    var c = arguments.length,
                        d = c,
                        g = [].slice.call(arguments, 0);
                    if (b) {
                        if (1 < arguments.length) {
                            if (f.isFunction(arguments[c - 1])) {
                                var h = arguments[c - 1];
                                d = c - 1
                            } else if (f.isFunction(arguments[c - 2])) {
                                h = arguments[c - 2];
                                var k = arguments[c - 1];
                                d = c - 2
                            }
                            g = [].slice.call(g, 0, d);
                            1 < g.length && (g = [f.array2Props(g)])
                        }
                        ca.log("User params. Counter " + a + ". Params: ", g[0]);
                        v.sendParams(g[0],
                            h, k)
                    } else f.warning("Wrong params");
                    return e
                }, "counter.params");
                e.file = r(function(a, b) {
                    a ? (b = b || {}, v.sendFileUpload({
                        url: a,
                        title: b.title,
                        vParams: b.params,
                        callback: b.callback,
                        ctx: b.ctx
                    })) : f.warning("Empty file url");
                    return e
                }, "counter.file");
                e.extLink = r(function(a, b) {
                    a ? (b = b || {}, v.sendExtLink({
                        url: a,
                        title: b.title,
                        vParams: b.params,
                        callback: b.callback,
                        ctx: b.ctx
                    })) : f.warning("Empty link");
                    return e
                }, "counter.extLink");
                e.notBounce = r(function(a) {
                    var b = 0;
                    a = a || {};
                    Na && da && (b = da - Na);
                    v.sendNotBounce(b, {
                        callback: a.callback,
                        ctx: a.ctx
                    });
                    return e
                }, "counter.notBounce");
                var Z = [];
                e.addFileExtension = function(a) {
                    if (!a) return f.warning("Empty extension"), e;
                    "string" == typeof a ? Z.push(a) : Z = Z.concat(a);
                    return e
                };
                e.clickmap = function(a) {
                    l(a);
                    return e
                };
                e.accurateTrackBounce = function(a) {
                    w(a);
                    return e
                };
                var oa = null;
                var Q = !1;
                e.trackHash = function(a) {
                    S(a);
                    return e
                };
                var wa = {
                    requiredEcommerceFields: ["currency", "goods"],
                    parseValidate: function(a, b) {
                        var c = this.validate(a, b),
                            d;
                        if (!c.isValid) return console && console.log(c.message), !1;
                        c = {};
                        c[a] = {};
                        b.currency && (c.currencyCode = b.currency);
                        b.goods && (c[a].products = b.goods);
                        for (d in b) b.hasOwnProperty(d) && -1 === f.arrayIndexOf(this.requiredEcommerceFields, d) && (c[a].actionField || (c[a].actionField = {}), c[a].actionField[d] = b[d]);
                        return {
                            __ym: {
                                ecommerce: [c]
                            }
                        }
                    },
                    validate: function(a, b) {
                        var c = !1,
                            d = "";
                        if (f.isObject(b)) switch (a) {
                            case "detail":
                            case "add":
                            case "remove":
                                f.isArray(b.goods) && b.goods.length ? (c = f.arrayEvery(b.goods, function(a) {
                                    return f.isObject(a) && (f.isString(a.id) || f.isNumber(a.id) || f.isString(a.name) ||
                                        f.isString(a.name))
                                })) || (d = "All items in 'goods' should be objects and contain 'id' or 'name' field") : d = "Ecommerce data should contain 'goods' non-empty array";
                                break;
                            case "purchase":
                                f.isNumber(b.id) || f.isString(b.id) ? c = !0 : d = "Purchase object should contain string or number 'id' field"
                        } else d = "Ecommerce data should be an object";
                        return {
                            isValid: c,
                            message: d
                        }
                    }
                };
                e.ecommerceDetail = r(function(a, b) {
                    O("detail", a, b);
                    return e
                }, "ecommerce.detail");
                e.ecommerceAdd = r(function(a, b) {
                    O("add", a, b);
                    return e
                }, "ecommerce.add");
                e.ecommerceRemove = r(function(a, b) {
                    O("remove", a, b);
                    return e
                }, "ecommerce.remove");
                e.ecommercePurchase = r(function(a, b) {
                    O("purchase", a, b);
                    return e
                }, "ecommerce.purchase");
                e.userParams = r(function(a, b, c) {
                    f.isObject(a) ? e.params({
                        __ymu: a
                    }, b || function() {}, c) : f.warning("Wrong user params");
                    return e
                }, "uparams");
                e.experiments = r(function(a, b, c) {
                    v.sendExperiments({
                        callback: b,
                        ctx: c,
                        experiments: a
                    });
                    return e
                }, "exps");
                e.id = e.setUserID = r(function(a, b, c) {
                    f.isString(a) || f.isNumber(a) ? e.params({
                            __ym: {
                                user_id: a
                            }
                        }, b || function() {},
                        c) : f.warning("Incorrect user ID");
                    return e
                }, "id");
                var Da = new M;
                e.getClientID = r(function() {
                    return Da.read("uid")
                }, "guid");
                e.enableAll = function() {
                    q(!0);
                    l(!0);
                    w();
                    return e
                };
                e.uploadPage = function() {};
                Lb.init(v);
                e._performanceTiming = Za;
                if (a)
                    if ("prerender" == k.webkitVisibilityState) {
                        v.sendPrerenderHit({
                            url: A.href,
                            title: m.getDocumentTitle(),
                            referrer: k.referrer
                        });
                        var ha = function() {
                            "prerender" != k.webkitVisibilityState && (h.un(k, "webkitvisibilitychange", ha), n(!0))
                        };
                        h.on(k, "webkitvisibilitychange", ha)
                    } else n(!1)
            },
            "init")()
    };
    g.Ya._metrika.remoteCtrlInited || (g.Ya._metrika.remoteCtrlInited = !0, new hb);
    g.Ya.Metrika.counters = function() {
        var a = [];
        f.forEachKey(g.Ya._metrika.counters, function(b, c) {
            var d = b.split(":");
            a.push({
                id: +d[0],
                type: +d[1],
                accurateTrackBounce: c._isAccurateTrackBounce,
                clickmap: c._clickmap && c._clickmap._start,
                oldCode: !!g.ya_cid,
                trackHash: !!c._trackHash,
                trackLinks: c._trackLinks && c._trackLinks.on,
                webvisor: !!c._webvisor
            })
        });
        return a
    };
    g.ya_cid && Ya.Metrika && new Ya.Metrika(g.ya_cid, g.ya_params, g.ya_class);
    g.ya_cid && !g.ya_hit && (g.ya_hit = function(a, b) {
        Ya._metrika.counter && Ya._metrika.counter.reachGoal(a, b)
    });
    (function() {
        function a(a) {
            try {
                delete g[a]
            } catch (n) {
                g[a] = N
            }
        }
        var b = g.yandex_metrika_callback,
            c = g.yandex_metrika_callbacks,
            d;
        "function" == typeof b && b();
        if ("object" == typeof c)
            for (b = 0; b < c.length; b++)
                if (d = c[b]) c[b] = null, d();
        a("yandex_metrika_callback");
        a("yandex_metrika_callbacks")
    })();
    g.Ya.Metrika.informer = function(a) {
        var b = !!Ya.Metrika._informer;
        Ya.Metrika._informer = a;
        b || m.loadScript({
            src: "https://informer.yandex.ru/metrika/informer.js"
        })
    };
    h.on(k, "click", r(function(a) {
        var b = z.getTarget(a);
        if (b && "ym-advanced-informer" == b.className) {
            var c = b.getAttribute("data-lang");
            var d = b.getAttribute("data-cid");
            Ya.Metrika.informer({
                i: b,
                id: +d,
                lang: c
            });
            z.prevent(a)
        }
    }, "adv-inf"), null, {
        passive: !1
    })
})(this, this.document);