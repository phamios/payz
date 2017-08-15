(function(b, d) {
    "object" === typeof module && "object" === typeof module.exports ? module.exports = b.document ? d(b, !0) : function(b) {
        if (!b.document) throw Error("jQuery requires a window with a document");
        return d(b)
    } : d(b)
})("undefined" !== typeof window ? window : this, function(b, d) {
    function g(a) {
        var b = "length" in a && a.length,
            c = l.type(a);
        return "function" === c || l.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" === typeof b && 0 < b && b - 1 in a
    }

    function c(a, b, c) {
        if (l.isFunction(b)) return l.grep(a, function(a, B) {
            return !!b.call(a,
                B, a) !== c
        });
        if (b.nodeType) return l.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" === typeof b) {
            if (Kb.test(b)) return l.filter(b, a, c);
            b = l.filter(b, a)
        }
        return l.grep(a, function(a) {
            return 0 <= U.call(b, a) !== c
        })
    }

    function a(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function f(a) {
        var b = bb[a] = {};
        l.each(a.match(ka) || [], function(a, B) {
            b[B] = !0
        });
        return b
    }

    function e() {
        R.removeEventListener("DOMContentLoaded", e, !1);
        b.removeEventListener("load", e, !1);
        l.ready()
    }

    function p() {
        Object.defineProperty(this.cache = {},
            0, {
                get: function() {
                    return {}
                }
            });
        this.expando = l.expando + p.uid++
    }

    function h(a, b, c) {
        if (void 0 === c && 1 === a.nodeType)
            if (c = "data-" + b.replace(pb, "-$1").toLowerCase(), c = a.getAttribute(c), "string" === typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : Ka.test(c) ? l.parseJSON(c) : c
                } catch (e) {}
                T.set(a, b, c)
            } else c = void 0;
        return c
    }

    function k() {
        return !0
    }

    function q() {
        return !1
    }

    function m() {
        try {
            return R.activeElement
        } catch (a) {}
    }

    function t(a, b) {
        return l.nodeName(a, "table") && l.nodeName(11 !== b.nodeType ?
            b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function w(a) {
        a.type = (null !== a.getAttribute("type")) + "/" + a.type;
        return a
    }

    function v(a) {
        var b = Zb.exec(a.type);
        b ? a.type = b[1] : a.removeAttribute("type");
        return a
    }

    function u(a, b) {
        for (var c = 0, e = a.length; c < e; c++) M.set(a[c], "globalEval", !b || M.get(b[c], "globalEval"))
    }

    function x(a, b) {
        var c, e, d, f;
        if (1 === b.nodeType) {
            if (M.hasData(a) && (f = M.access(a), c = M.set(b, f), f = f.events))
                for (d in delete c.handle,
                    c.events = {}, f)
                    for (c = 0, e = f[d].length; c < e; c++) l.event.add(b, d, f[d][c]);
            T.hasData(a) && (d = T.access(a), d = l.extend({}, d), T.set(b, d))
        }
    }

    function n(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && l.nodeName(a, b) ? l.merge([a], c) : c
    }

    function D(a, c) {
        var e, d = l(c.createElement(a)).appendTo(c.body),
            f = b.getDefaultComputedStyle && (e = b.getDefaultComputedStyle(d[0])) ? e.display : l.css(d[0], "display");
        d.detach();
        return f
    }

    function s(a) {
        var b =
            R,
            c = $b[a];
        c || (c = D(a, b), "none" !== c && c || (yb = (yb || l("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = yb[0].contentDocument, b.write(), b.close(), c = D(a, b), yb.detach()), $b[a] = c);
        return c
    }

    function r(a, b, c) {
        var e, d, f = a.style;
        (c = c || fb(a)) && (d = c.getPropertyValue(b) || c[b]);
        c && ("" !== d || l.contains(a.ownerDocument, a) || (d = l.style(a, b)), zb.test(d) && cb.test(b) && (a = f.width, b = f.minWidth, e = f.maxWidth, f.minWidth = f.maxWidth = f.width = d, d = c.width, f.width = a, f.minWidth = b, f.maxWidth = e));
        return void 0 !==
            d ? d + "" : d
    }

    function y(a, b) {
        return {
            get: function() {
                if (a()) delete this.get;
                else return (this.get = b).apply(this, arguments)
            }
        }
    }

    function E(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), e = b, d = Bc.length; d--;)
            if (b = Bc[d] + c, b in a) return b;
        return e
    }

    function K(a, b, c) {
        return (a = Cc.exec(b)) ? Math.max(0, a[1] - (c || 0)) + (a[2] || "px") : b
    }

    function z(a, b, c, e, d) {
        b = c === (e ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        for (var f = 0; 4 > b; b += 2) "margin" === c && (f += l.css(a, c + Q[b], !0, d)), e ? ("content" === c && (f -= l.css(a, "padding" + Q[b], !0, d)), "margin" !== c && (f -= l.css(a, "border" + Q[b] + "Width", !0, d))) : (f += l.css(a, "padding" + Q[b], !0, d), "padding" !== c && (f += l.css(a, "border" + Q[b] + "Width", !0, d)));
        return f
    }

    function C(a, b, c) {
        var e = !0,
            d = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = fb(a),
            h = "border-box" === l.css(a, "boxSizing", !1, f);
        if (0 >= d || null == d) {
            d = r(a, b, f);
            if (0 > d || null == d) d = a.style[b];
            if (zb.test(d)) return d;
            e = h && (X.boxSizingReliable() || d === a.style[b]);
            d = parseFloat(d) || 0
        }
        return d + z(a, b, c || (h ? "border" : "content"), e, f) + "px"
    }

    function da(a, b) {
        for (var c,
                e, d, f = [], h = 0, k = a.length; h < k; h++) e = a[h], e.style && (f[h] = M.get(e, "olddisplay"), c = e.style.display, b ? (f[h] || "none" !== c || (e.style.display = ""), "" === e.style.display && ia(e) && (f[h] = M.access(e, "olddisplay", s(e.nodeName)))) : (d = ia(e), "none" === c && d || M.set(e, "olddisplay", d ? c : l.css(e, "display"))));
        for (h = 0; h < k; h++) e = a[h], !e.style || b && "none" !== e.style.display && "" !== e.style.display || (e.style.display = b ? f[h] || "" : "none");
        return a
    }

    function F(a, b, c, e, d) {
        return new F.prototype.init(a, b, c, e, d)
    }

    function A() {
        setTimeout(function() {
            Ba =
                void 0
        });
        return Ba = l.now()
    }

    function G(a, b) {
        var c, e = 0,
            d = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = Q[e], d["margin" + c] = d["padding" + c] = a;
        b && (d.opacity = d.width = a);
        return d
    }

    function N(a, b, c) {
        for (var e, d = (Ua[b] || []).concat(Ua["*"]), f = 0, h = d.length; f < h; f++)
            if (e = d[f].call(c, b, a)) return e
    }

    function H(a, b) {
        var c, e, d, f, h;
        for (c in a)
            if (e = l.camelCase(c), d = b[e], f = a[c], l.isArray(f) && (d = f[1], f = a[c] = f[0]), c !== e && (a[e] = f, delete a[c]), (h = l.cssHooks[e]) && "expand" in h)
                for (c in f = h.expand(f), delete a[e], f) c in a || (a[c] = f[c], b[c] =
                    d);
            else b[e] = d
    }

    function V(a, b, c) {
        var e, d = 0,
            f = Na.length,
            h = l.Deferred().always(function() {
                delete k.elem
            }),
            k = function() {
                if (e) return !1;
                for (var b = Ba || A(), b = Math.max(0, m.startTime + m.duration - b), c = 1 - (b / m.duration || 0), d = 0, f = m.tweens.length; d < f; d++) m.tweens[d].run(c);
                h.notifyWith(a, [m, c, b]);
                if (1 > c && f) return b;
                h.resolveWith(a, [m]);
                return !1
            },
            m = h.promise({
                elem: a,
                props: l.extend({}, b),
                opts: l.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Ba || A(),
                duration: c.duration,
                tweens: [],
                createTween: function(b,
                    c) {
                    var e = l.Tween(a, m.opts, b, c, m.opts.specialEasing[b] || m.opts.easing);
                    m.tweens.push(e);
                    return e
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? m.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) m.tweens[c].run(1);
                    b ? h.resolveWith(a, [m, b]) : h.rejectWith(a, [m, b]);
                    return this
                }
            });
        c = m.props;
        for (H(c, m.opts.specialEasing); d < f; d++)
            if (b = Na[d].call(m, a, c, m.opts)) return b;
        l.map(c, N, m);
        l.isFunction(m.opts.start) && m.opts.start.call(a, m);
        l.fx.timer(l.extend(k, {
            elem: a,
            anim: m,
            queue: m.opts.queue
        }));
        return m.progress(m.opts.progress).done(m.opts.done,
            m.opts.complete).fail(m.opts.fail).always(m.opts.always)
    }

    function ga(a) {
        return function(b, c) {
            "string" !== typeof b && (c = b, b = "*");
            var e, d = 0,
                f = b.toLowerCase().match(ka) || [];
            if (l.isFunction(c))
                for (; e = f[d++];) "+" === e[0] ? (e = e.slice(1) || "*", (a[e] = a[e] || []).unshift(c)) : (a[e] = a[e] || []).push(c)
        }
    }

    function Z(a, b, c, e) {
        function d(k) {
            var m;
            f[k] = !0;
            l.each(a[k] || [], function(a, B) {
                var k = B(b, c, e);
                if ("string" === typeof k && !h && !f[k]) return b.dataTypes.unshift(k), d(k), !1;
                if (h) return !(m = k)
            });
            return m
        }
        var f = {},
            h = a === Ca;
        return d(b.dataTypes[0]) ||
            !f["*"] && d("*")
    }

    function ya(a, b) {
        var c, e, d = l.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((d[c] ? a : e || (e = {}))[c] = b[c]);
        e && l.extend(!0, a, e);
        return a
    }

    function ua(a, b, c, e) {
        var d;
        if (l.isArray(b)) l.each(b, function(b, d) {
            c || gb.test(a) ? e(a, d) : ua(a + "[" + ("object" === typeof d ? b : "") + "]", d, c, e)
        });
        else if (c || "object" !== l.type(b)) e(a, b);
        else
            for (d in b) ua(a + "[" + d + "]", b[d], c, e)
    }

    function ta(a) {
        return l.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var P = [],
        J = P.slice,
        aa = P.concat,
        S = P.push,
        U = P.indexOf,
        Da = {},
        qb =
        Da.toString,
        Oa = Da.hasOwnProperty,
        X = {},
        R = b.document,
        l = function(a, b) {
            return new l.fn.init(a, b)
        },
        hb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ib = /^-ms-/,
        la = /-([\da-z])/gi,
        La = function(a, b) {
            return b.toUpperCase()
        };
    l.fn = l.prototype = {
        jquery: "2.1.4",
        constructor: l,
        selector: "",
        length: 0,
        toArray: function() {
            return J.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : J.call(this)
        },
        pushStack: function(a) {
            a = l.merge(this.constructor(), a);
            a.prevObject = this;
            a.context = this.context;
            return a
        },
        each: function(a,
            b) {
            return l.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(l.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(J.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length;
            a = +a + (0 > a ? b : 0);
            return this.pushStack(0 <= a && a < b ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: S,
        sort: P.sort,
        splice: P.splice
    };
    l.extend = l.fn.extend = function() {
        var a, b, c, e, d, f = arguments[0] || {},
            h = 1,
            k = arguments.length,
            m = !1;
        "boolean" === typeof f && (m = f, f = arguments[h] || {}, h++);
        "object" === typeof f || l.isFunction(f) || (f = {});
        h === k && (f = this, h--);
        for (; h < k; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = f[b], e = a[b], f !== e && (m && e && (l.isPlainObject(e) || (d = l.isArray(e))) ? (d ? (d = !1, c = c && l.isArray(c) ? c : []) : c = c && l.isPlainObject(c) ? c : {}, f[b] = l.extend(m, c, e)) : void 0 !== e && (f[b] = e));
        return f
    };
    l.extend({
        expando: "jQuery" + ("2.1.4" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === l.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !l.isArray(a) && 0 <= a - parseFloat(a) + 1
        },
        isPlainObject: function(a) {
            return "object" !== l.type(a) || a.nodeType || l.isWindow(a) || a.constructor && !Oa.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            for (var b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" === typeof a || "function" === typeof a ? Da[qb.call(a)] || "object" :
                typeof a
        },
        globalEval: function(a) {
            var b;
            b = eval;
            if (a = l.trim(a)) 1 === a.indexOf("use strict") ? (b = R.createElement("script"), b.text = a, R.head.appendChild(b).parentNode.removeChild(b)) : b(a)
        },
        camelCase: function(a) {
            return a.replace(ib, "ms-").replace(la, La)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var e, d = 0,
                f = a.length;
            e = g(a);
            if (c)
                if (e)
                    for (; d < f && (e = b.apply(a[d], c), !1 !== e); d++);
                else
                    for (d in a) {
                        if (e = b.apply(a[d], c), !1 === e) break
                    } else if (e)
                        for (; d <
                            f && (e = b.call(a[d], d, a[d]), !1 !== e); d++);
                    else
                        for (d in a)
                            if (e = b.call(a[d], d, a[d]), !1 === e) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(hb, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            null != a && (g(Object(a)) ? l.merge(c, "string" === typeof a ? [a] : a) : S.call(c, a));
            return c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, e = 0, d = a.length; e < c; e++) a[d++] = b[e];
            a.length = d;
            return a
        },
        grep: function(a, b, c) {
            for (var e = [], d = 0, f = a.length, h = !c; d < f; d++) c = !b(a[d],
                d), c !== h && e.push(a[d]);
            return e
        },
        map: function(a, b, c) {
            var e, d = 0,
                f = a.length,
                h = [];
            if (g(a))
                for (; d < f; d++) e = b(a[d], d, c), null != e && h.push(e);
            else
                for (d in a) e = b(a[d], d, c), null != e && h.push(e);
            return aa.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e;
            "string" === typeof b && (c = a[b], b = a, a = c);
            if (l.isFunction(a)) return e = J.call(arguments, 2), c = function() {
                return a.apply(b || this, e.concat(J.call(arguments)))
            }, c.guid = a.guid = a.guid || l.guid++, c
        },
        now: Date.now,
        support: X
    });
    l.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
        function(a, b) {
            Da["[object " + b + "]"] = b.toLowerCase()
        });
    var Ia = function(a) {
        function b(a, c, e, d) {
            var f, B, h, k, m;
            (c ? c.ownerDocument || c : sa) !== S && ia(c);
            c = c || S;
            e = e || [];
            k = c.nodeType;
            if ("string" !== typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return e;
            if (!d && D) {
                if (11 !== k && (f = za.exec(a)))
                    if (h = f[1])
                        if (9 === k)
                            if ((B = c.getElementById(h)) && B.parentNode) {
                                if (B.id === h) return e.push(B), e
                            } else return e;
                else {
                    if (c.ownerDocument && (B = c.ownerDocument.getElementById(h)) && Da(c, B) && B.id === h) return e.push(B), e
                } else {
                    if (f[2]) return oa.apply(e,
                        c.getElementsByTagName(a)), e;
                    if ((h = f[3]) && y.getElementsByClassName) return oa.apply(e, c.getElementsByClassName(h)), e
                }
                if (y.qsa && (!z || !z.test(a))) {
                    B = f = ca;
                    h = c;
                    m = 1 !== k && a;
                    if (1 === k && "object" !== c.nodeName.toLowerCase()) {
                        k = na(a);
                        (f = c.getAttribute("id")) ? B = f.replace(Qc, "\\$&"): c.setAttribute("id", B);
                        B = "[id='" + B + "'] ";
                        for (h = k.length; h--;) k[h] = B + g(k[h]);
                        h = kc.test(a) && q(c.parentNode) || c;
                        m = k.join(",")
                    }
                    if (m) try {
                        return oa.apply(e, h.querySelectorAll(m)), e
                    } catch (p) {} finally {
                        f || c.removeAttribute("id")
                    }
                }
            }
            return aa(a.replace(da,
                "$1"), c, e, d)
        }

        function c() {
            function a(c, e) {
                b.push(c + " ") > v.cacheLength && delete a[b.shift()];
                return a[c + " "] = e
            }
            var b = [];
            return a
        }

        function e(a) {
            a[ca] = !0;
            return a
        }

        function d(a) {
            var b = S.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b)
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), e = a.length; e--;) v.attrHandle[c[e]] = b
        }

        function h(a, b) {
            var c = b && a,
                e = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
            if (e) return e;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function k(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function m(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function p(a) {
            return e(function(b) {
                b = +b;
                return e(function(c, e) {
                    for (var d, f = a([], c.length, b), B = f.length; B--;) c[d = f[B]] && (c[d] = !(e[d] = c[d]))
                })
            })
        }

        function q(a) {
            return a && "undefined" !== typeof a.getElementsByTagName && a
        }

        function l() {}

        function g(a) {
            for (var b =
                    0, c = a.length, e = ""; b < c; b++) e += a[b].value;
            return e
        }

        function t(a, b, c) {
            var e = b.dir,
                d = c && "parentNode" === e,
                f = Ja++;
            return b.first ? function(b, c, f) {
                for (; b = b[e];)
                    if (1 === b.nodeType || d) return a(b, c, f)
            } : function(b, c, B) {
                var h, k, m = [C, f];
                if (B)
                    for (; b = b[e];) {
                        if ((1 === b.nodeType || d) && a(b, c, B)) return !0
                    } else
                        for (; b = b[e];)
                            if (1 === b.nodeType || d) {
                                k = b[ca] || (b[ca] = {});
                                if ((h = k[e]) && h[0] === C && h[1] === f) return m[2] = h[2];
                                k[e] = m;
                                if (m[2] = a(b, c, B)) return !0
                            }
            }
        }

        function r(a) {
            return 1 < a.length ? function(b, c, e) {
                for (var d = a.length; d--;)
                    if (!a[d](b,
                            c, e)) return !1;
                return !0
            } : a[0]
        }

        function w(a, b, c, e, d) {
            for (var f, B = [], h = 0, k = a.length, m = null != b; h < k; h++)
                if (f = a[h])
                    if (!c || c(f, e, d)) B.push(f), m && b.push(h);
            return B
        }

        function n(a, c, d, f, B, h) {
            f && !f[ca] && (f = n(f));
            B && !B[ca] && (B = n(B, h));
            return e(function(e, h, k, m) {
                var p, q, g = [],
                    l = [],
                    t = h.length,
                    r;
                if (!(r = e)) {
                    r = c || "*";
                    for (var n = k.nodeType ? [k] : k, s = [], Aa = 0, u = n.length; Aa < u; Aa++) b(r, n[Aa], s);
                    r = s
                }
                r = !a || !e && c ? r : w(r, g, a, k, m);
                n = d ? B || (e ? a : t || f) ? [] : h : r;
                d && d(r, n, k, m);
                if (f)
                    for (p = w(n, l), f(p, [], k, m), k = p.length; k--;)
                        if (q = p[k]) n[l[k]] = !(r[l[k]] = q);
                if (e) {
                    if (B || a) {
                        if (B) {
                            p = [];
                            for (k = n.length; k--;)(q = n[k]) && p.push(r[k] = q);
                            B(null, n = [], p, m)
                        }
                        for (k = n.length; k--;)(q = n[k]) && -1 < (p = B ? cb(e, q) : g[k]) && (e[p] = !(h[p] = q))
                    }
                } else n = w(n === h ? n.splice(t, n.length) : n), B ? B(null, h, n, m) : oa.apply(h, n)
            })
        }

        function s(a) {
            var b, c, e, d = a.length,
                f = v.relative[a[0].type];
            c = f || v.relative[" "];
            for (var B = f ? 1 : 0, h = t(function(a) {
                    return a === b
                }, c, !0), k = t(function(a) {
                    return -1 < cb(b, a)
                }, c, !0), m = [function(a, c, e) {
                    a = !f && (e || c !== ha) || ((b = c).nodeType ? h(a, c, e) : k(a, c, e));
                    b = null;
                    return a
                }]; B <
                d; B++)
                if (c = v.relative[a[B].type]) m = [t(r(m), c)];
                else {
                    c = v.filter[a[B].type].apply(null, a[B].matches);
                    if (c[ca]) {
                        for (e = ++B; e < d && !v.relative[a[e].type]; e++);
                        return n(1 < B && r(m), 1 < B && g(a.slice(0, B - 1).concat({
                            value: " " === a[B - 2].type ? "*" : ""
                        })).replace(da, "$1"), c, B < e && s(a.slice(B, e)), e < d && s(a = a.slice(e)), e < d && g(a))
                    }
                    m.push(c)
                }
            return r(m)
        }

        function u(a, c) {
            var d = 0 < c.length,
                f = 0 < a.length,
                B = function(e, B, h, k, m) {
                    var p, q, g, l = 0,
                        t = "0",
                        r = e && [],
                        n = [],
                        Aa = ha,
                        s = e || f && v.find.TAG("*", m),
                        u = C += null == Aa ? 1 : Math.random() || .1,
                        P = s.length;
                    for (m && (ha = B !== S && B); t !== P && null != (p = s[t]); t++) {
                        if (f && p) {
                            for (q = 0; g = a[q++];)
                                if (g(p, B, h)) {
                                    k.push(p);
                                    break
                                }
                            m && (C = u)
                        }
                        d && ((p = !g && p) && l--, e && r.push(p))
                    }
                    l += t;
                    if (d && t !== l) {
                        for (q = 0; g = c[q++];) g(r, n, B, h);
                        if (e) {
                            if (0 < l)
                                for (; t--;) r[t] || n[t] || (n[t] = H.call(k));
                            n = w(n)
                        }
                        oa.apply(k, n);
                        m && !e && 0 < n.length && 1 < l + c.length && b.uniqueSort(k)
                    }
                    m && (C = u, ha = Aa);
                    return r
                };
            return d ? e(B) : B
        }
        var P, y, v, J, x, na, E, aa, ha, Q, ea, ia, S, U, D, z, K, Qa, Da, ca = "sizzle" + 1 * new Date,
            sa = a.document,
            C = 0,
            Ja = 0,
            yb = c(),
            Zb = c(),
            A = c(),
            Xb = function(a, b) {
                a === b && (ea = !0);
                return 0
            },
            G = {}.hasOwnProperty,
            nb = [],
            H = nb.pop,
            $b = nb.push,
            oa = nb.push,
            F = nb.slice,
            cb = function(a, b) {
                for (var c = 0, e = a.length; c < e; c++)
                    if (a[c] === b) return c;
                return -1
            },
            Ba = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
            qb = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Ba + "))|)[\\x20\\t\\r\\n\\f]*\\]",
            zb = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            qb + ")*)|.*)\\)|)",
            Za = /[\x20\t\r\n\f]+/g,
            da = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
            xc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            wc = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            Na = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
            lb = new RegExp(zb),
            Nb = new RegExp("^" + Ba + "$"),
            fb = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + qb),
                PSEUDO: new RegExp("^" + zb),
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            },
            fc = /^(?:input|select|textarea|button)$/i,
            Oa = /^h\d$/i,
            R = /^[^{]+\{\s*\[native \w/,
            za = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            kc = /[+~]/,
            Qc = /'|\\/g,
            kb = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
            N = function(a, b, c) {
                a = "0x" + b - 65536;
                return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
            },
            M = function() {
                ia()
            };
        try {
            oa.apply(nb = F.call(sa.childNodes), sa.childNodes), nb[sa.childNodes.length].nodeType
        } catch (Cc) {
            oa = {
                apply: nb.length ? function(a, b) {
                    $b.apply(a, F.call(b))
                } : function(a, b) {
                    for (var c = a.length, e = 0; a[c++] = b[e++];);
                    a.length = c - 1
                }
            }
        }
        y = b.support = {};
        x = b.isXML = function(a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        };
        ia = b.setDocument = function(a) {
            var b = a ? a.ownerDocument || a : sa;
            if (b === S || 9 !== b.nodeType || !b.documentElement) return S;
            S = b;
            U = b.documentElement;
            (a = b.defaultView) && a !== a.top && (a.addEventListener ? a.addEventListener("unload", M, !1) : a.attachEvent && a.attachEvent("onunload", M));
            D = !x(b);
            y.attributes = d(function(a) {
                a.className = "i";
                return !a.getAttribute("className")
            });
            y.getElementsByTagName = d(function(a) {
                a.appendChild(b.createComment(""));
                return !a.getElementsByTagName("*").length
            });
            y.getElementsByClassName = R.test(b.getElementsByClassName);
            y.getById = d(function(a) {
                U.appendChild(a).id = ca;
                return !b.getElementsByName || !b.getElementsByName(ca).length
            });
            y.getById ? (v.find.ID = function(a, b) {
                if ("undefined" !== typeof b.getElementById && D) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, v.filter.ID = function(a) {
                var b = a.replace(kb, N);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete v.find.ID, v.filter.ID = function(a) {
                var b = a.replace(kb,
                    N);
                return function(a) {
                    return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                }
            });
            v.find.TAG = y.getElementsByTagName ? function(a, b) {
                if ("undefined" !== typeof b.getElementsByTagName) return b.getElementsByTagName(a);
                if (y.qsa) return b.querySelectorAll(a)
            } : function(a, b) {
                var c, e = [],
                    d = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[d++];) 1 === c.nodeType && e.push(c);
                    return e
                }
                return f
            };
            v.find.CLASS = y.getElementsByClassName && function(a, b) {
                if (D) return b.getElementsByClassName(a)
            };
            K = [];
            z = [];
            if (y.qsa = R.test(b.querySelectorAll)) d(function(a) {
                U.appendChild(a).innerHTML = "<a id='" + ca + "'></a><select id='" + ca + "-\f]' msallowcapture=''><option selected=''></option></select>";
                a.querySelectorAll("[msallowcapture^='']").length && z.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                a.querySelectorAll("[selected]").length || z.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                a.querySelectorAll("[id~=" +
                    ca + "-]").length || z.push("~=");
                a.querySelectorAll(":checked").length || z.push(":checked");
                a.querySelectorAll("a#" + ca + "+*").length || z.push(".#.+[+~]")
            }), d(function(a) {
                var c = b.createElement("input");
                c.setAttribute("type", "hidden");
                a.appendChild(c).setAttribute("name", "D");
                a.querySelectorAll("[name=d]").length && z.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                a.querySelectorAll(":enabled").length || z.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                z.push(",.*:")
            });
            (y.matchesSelector = R.test(Qa = U.matches ||
                U.webkitMatchesSelector || U.mozMatchesSelector || U.oMatchesSelector || U.msMatchesSelector)) && d(function(a) {
                y.disconnectedMatch = Qa.call(a, "div");
                Qa.call(a, "[s!='']:x");
                K.push("!=", zb)
            });
            z = z.length && new RegExp(z.join("|"));
            K = K.length && new RegExp(K.join("|"));
            Da = (a = R.test(U.compareDocumentPosition)) || R.test(U.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    e = b && b.parentNode;
                return a === e || !!(e && 1 === e.nodeType && (c.contains ? c.contains(e) : a.compareDocumentPosition && a.compareDocumentPosition(e) &
                    16))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            };
            Xb = a ? function(a, c) {
                if (a === c) return ea = !0, 0;
                var e = !a.compareDocumentPosition - !c.compareDocumentPosition;
                if (e) return e;
                e = (a.ownerDocument || a) === (c.ownerDocument || c) ? a.compareDocumentPosition(c) : 1;
                return e & 1 || !y.sortDetached && c.compareDocumentPosition(a) === e ? a === b || a.ownerDocument === sa && Da(sa, a) ? -1 : c === b || c.ownerDocument === sa && Da(sa, c) ? 1 : Q ? cb(Q, a) - cb(Q, c) : 0 : e & 4 ? -1 : 1
            } : function(a, c) {
                if (a === c) return ea = !0, 0;
                var e, d = 0;
                e = a.parentNode;
                var f = c.parentNode,
                    B = [a],
                    k = [c];
                if (!e || !f) return a === b ? -1 : c === b ? 1 : e ? -1 : f ? 1 : Q ? cb(Q, a) - cb(Q, c) : 0;
                if (e === f) return h(a, c);
                for (e = a; e = e.parentNode;) B.unshift(e);
                for (e = c; e = e.parentNode;) k.unshift(e);
                for (; B[d] === k[d];) d++;
                return d ? h(B[d], k[d]) : B[d] === sa ? -1 : k[d] === sa ? 1 : 0
            };
            return b
        };
        b.matches = function(a, c) {
            return b(a, null, null, c)
        };
        b.matchesSelector = function(a, c) {
            (a.ownerDocument || a) !== S && ia(a);
            c = c.replace(Na, "='$1']");
            if (!(!y.matchesSelector || !D || K && K.test(c) || z && z.test(c))) try {
                var e = Qa.call(a, c);
                if (e || y.disconnectedMatch ||
                    a.document && 11 !== a.document.nodeType) return e
            } catch (d) {}
            return 0 < b(c, S, null, [a]).length
        };
        b.contains = function(a, b) {
            (a.ownerDocument || a) !== S && ia(a);
            return Da(a, b)
        };
        b.attr = function(a, b) {
            (a.ownerDocument || a) !== S && ia(a);
            var c = v.attrHandle[b.toLowerCase()],
                c = c && G.call(v.attrHandle, b.toLowerCase()) ? c(a, b, !D) : void 0;
            return void 0 !== c ? c : y.attributes || !D ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
        };
        b.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        b.uniqueSort =
            function(a) {
                var b, c = [],
                    e = 0,
                    d = 0;
                ea = !y.detectDuplicates;
                Q = !y.sortStable && a.slice(0);
                a.sort(Xb);
                if (ea) {
                    for (; b = a[d++];) b === a[d] && (e = c.push(d));
                    for (; e--;) a.splice(c[e], 1)
                }
                Q = null;
                return a
            };
        J = b.getText = function(a) {
            var b, c = "",
                e = 0;
            b = a.nodeType;
            if (!b)
                for (; b = a[e++];) c += J(b);
            else if (1 === b || 9 === b || 11 === b) {
                if ("string" === typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += J(a)
            } else if (3 === b || 4 === b) return a.nodeValue;
            return c
        };
        v = b.selectors = {
            cacheLength: 50,
            createPseudo: e,
            match: fb,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    a[1] = a[1].replace(kb, N);
                    a[3] = (a[3] || a[4] || a[5] || "").replace(kb, N);
                    "~=" === a[2] && (a[3] = " " + a[3] + " ");
                    return a.slice(0, 4)
                },
                CHILD: function(a) {
                    a[1] = a[1].toLowerCase();
                    "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]);
                    return a
                },
                PSEUDO: function(a) {
                    var b,
                        c = !a[6] && a[2];
                    if (fb.CHILD.test(a[0])) return null;
                    a[3] ? a[2] = a[4] || a[5] || "" : c && lb.test(c) && (b = na(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b));
                    return a.slice(0, 3)
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(kb, N).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = yb[a + " "];
                    return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && yb(a, function(a) {
                        return b.test("string" ===
                            typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, e) {
                    return function(d) {
                        d = b.attr(d, a);
                        if (null == d) return "!=" === c;
                        if (!c) return !0;
                        d += "";
                        return "=" === c ? d === e : "!=" === c ? d !== e : "^=" === c ? e && 0 === d.indexOf(e) : "*=" === c ? e && -1 < d.indexOf(e) : "$=" === c ? e && d.slice(-e.length) === e : "~=" === c ? -1 < (" " + d.replace(Za, " ") + " ").indexOf(e) : "|=" === c ? d === e || d.slice(0, e.length + 1) === e + "-" : !1
                    }
                },
                CHILD: function(a, b, c, e, d) {
                    var f = "nth" !== a.slice(0, 3),
                        B = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === e && 0 === d ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, k) {
                        var m, p, q, t, l;
                        c = f !== B ? "nextSibling" : "previousSibling";
                        var g = b.parentNode,
                            r = h && b.nodeName.toLowerCase();
                        k = !k && !h;
                        if (g) {
                            if (f) {
                                for (; c;) {
                                    for (p = b; p = p[c];)
                                        if (h ? p.nodeName.toLowerCase() === r : 1 === p.nodeType) return !1;
                                    l = c = "only" === a && !l && "nextSibling"
                                }
                                return !0
                            }
                            l = [B ? g.firstChild : g.lastChild];
                            if (B && k)
                                for (k = g[ca] || (g[ca] = {}), m = k[a] || [], t = m[0] === C && m[1], q = m[0] === C && m[2], p = t && g.childNodes[t]; p = ++t && p && p[c] || (q = t = 0) || l.pop();) {
                                    if (1 ===
                                        p.nodeType && ++q && p === b) {
                                        k[a] = [C, t, q];
                                        break
                                    }
                                } else if (k && (m = (b[ca] || (b[ca] = {}))[a]) && m[0] === C) q = m[1];
                                else
                                    for (;
                                        (p = ++t && p && p[c] || (q = t = 0) || l.pop()) && ((h ? p.nodeName.toLowerCase() !== r : 1 !== p.nodeType) || !++q || (k && ((p[ca] || (p[ca] = {}))[a] = [C, q]), p !== b)););
                            q -= d;
                            return q === e || 0 === q % e && 0 <= q / e
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var d, f = v.pseudos[a] || v.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[ca] ? f(c) : 1 < f.length ? (d = [a, a, "", c], v.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, b) {
                        for (var e,
                                d = f(a, c), B = d.length; B--;) e = cb(a, d[B]), a[e] = !(b[e] = d[B])
                    }) : function(a) {
                        return f(a, 0, d)
                    }) : f
                }
            },
            pseudos: {
                not: e(function(a) {
                    var b = [],
                        c = [],
                        d = E(a.replace(da, "$1"));
                    return d[ca] ? e(function(a, b, c, e) {
                        e = d(a, null, e, []);
                        for (var f = a.length; f--;)
                            if (c = e[f]) a[f] = !(b[f] = c)
                    }) : function(a, e, f) {
                        b[0] = a;
                        d(b, null, f, c);
                        b[0] = null;
                        return !c.pop()
                    }
                }),
                has: e(function(a) {
                    return function(c) {
                        return 0 < b(a, c).length
                    }
                }),
                contains: e(function(a) {
                    a = a.replace(kb, N);
                    return function(b) {
                        return -1 < (b.textContent || b.innerText || J(b)).indexOf(a)
                    }
                }),
                lang: e(function(a) {
                    Nb.test(a || "") || b.error("unsupported lang: " + a);
                    a = a.replace(kb, N).toLowerCase();
                    return function(b) {
                        var c;
                        do
                            if (c = D ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === U
                },
                focus: function(a) {
                    return a === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(a.type || a.href ||
                        ~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 === a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (6 > a.nodeType) return !1;
                    return !0
                },
                parent: function(a) {
                    return !v.pseudos.empty(a)
                },
                header: function(a) {
                    return Oa.test(a.nodeName)
                },
                input: function(a) {
                    return fc.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: p(function() {
                    return [0]
                }),
                last: p(function(a, b) {
                    return [b - 1]
                }),
                eq: p(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: p(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: p(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: p(function(a, b, c) {
                    for (b =
                        0 > c ? c + b : c; 0 <= --b;) a.push(b);
                    return a
                }),
                gt: p(function(a, b, c) {
                    for (c = 0 > c ? c + b : c; ++c < b;) a.push(c);
                    return a
                })
            }
        };
        v.pseudos.nth = v.pseudos.eq;
        for (P in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) v.pseudos[P] = k(P);
        for (P in {
                submit: !0,
                reset: !0
            }) v.pseudos[P] = m(P);
        l.prototype = v.filters = v.pseudos;
        v.setFilters = new l;
        na = b.tokenize = function(a, c) {
            var e, d, f, B, h, k, m;
            if (h = Zb[a + " "]) return c ? 0 : h.slice(0);
            h = a;
            k = [];
            for (m = v.preFilter; h;) {
                if (!e || (d = xc.exec(h))) d && (h = h.slice(d[0].length) || h), k.push(f = []);
                e = !1;
                if (d = wc.exec(h)) e =
                    d.shift(), f.push({
                        value: e,
                        type: d[0].replace(da, " ")
                    }), h = h.slice(e.length);
                for (B in v.filter) !(d = fb[B].exec(h)) || m[B] && !(d = m[B](d)) || (e = d.shift(), f.push({
                    value: e,
                    type: B,
                    matches: d
                }), h = h.slice(e.length));
                if (!e) break
            }
            return c ? h.length : h ? b.error(a) : Zb(a, k).slice(0)
        };
        E = b.compile = function(a, b) {
            var c, e = [],
                d = [],
                f = A[a + " "];
            if (!f) {
                b || (b = na(a));
                for (c = b.length; c--;) f = s(b[c]), f[ca] ? e.push(f) : d.push(f);
                f = A(a, u(d, e));
                f.selector = a
            }
            return f
        };
        aa = b.select = function(a, b, c, e) {
            var d, f, B, h, k = "function" === typeof a && a,
                m = !e &&
                na(a = k.selector || a);
            c = c || [];
            if (1 === m.length) {
                f = m[0] = m[0].slice(0);
                if (2 < f.length && "ID" === (B = f[0]).type && y.getById && 9 === b.nodeType && D && v.relative[f[1].type]) {
                    b = (v.find.ID(B.matches[0].replace(kb, N), b) || [])[0];
                    if (!b) return c;
                    k && (b = b.parentNode);
                    a = a.slice(f.shift().value.length)
                }
                for (d = fb.needsContext.test(a) ? 0 : f.length; d--;) {
                    B = f[d];
                    if (v.relative[h = B.type]) break;
                    if (h = v.find[h])
                        if (e = h(B.matches[0].replace(kb, N), kc.test(f[0].type) && q(b.parentNode) || b)) {
                            f.splice(d, 1);
                            a = e.length && g(f);
                            if (!a) return oa.apply(c,
                                e), c;
                            break
                        }
                }
            }(k || E(a, m))(e, b, !D, c, kc.test(a) && q(b.parentNode) || b);
            return c
        };
        y.sortStable = ca.split("").sort(Xb).join("") === ca;
        y.detectDuplicates = !!ea;
        ia();
        y.sortDetached = d(function(a) {
            return a.compareDocumentPosition(S.createElement("div")) & 1
        });
        d(function(a) {
            a.innerHTML = "<a href='#'></a>";
            return "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        });
        y.attributes && d(function(a) {
            a.innerHTML = "<input/>";
            a.firstChild.setAttribute("value",
                "");
            return "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        });
        d(function(a) {
            return null == a.getAttribute("disabled")
        }) || f("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(a, b, c) {
            var e;
            if (!c) return !0 === a[b] ? b.toLowerCase() : (e = a.getAttributeNode(b)) && e.specified ? e.value : null
        });
        return b
    }(b);
    l.find = Ia;
    l.expr = Ia.selectors;
    l.expr[":"] = l.expr.pseudos;
    l.unique = Ia.uniqueSort;
    l.text = Ia.getText;
    l.isXMLDoc = Ia.isXML;
    l.contains = Ia.contains;
    var Db = l.expr.match.needsContext,
        wa = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Kb = /^.[^:#\[\.,]*$/;
    l.filter = function(a, b, c) {
        var e = b[0];
        c && (a = ":not(" + a + ")");
        return 1 === b.length && 1 === e.nodeType ? l.find.matchesSelector(e, a) ? [e] : [] : l.find.matches(a, l.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    };
    l.fn.extend({
        find: function(a) {
            var b, c = this.length,
                e = [],
                d = this;
            if ("string" !== typeof a) return this.pushStack(l(a).filter(function() {
                for (b = 0; b <
                    c; b++)
                    if (l.contains(d[b], this)) return !0
            }));
            for (b = 0; b < c; b++) l.find(a, d[b], e);
            e = this.pushStack(1 < c ? l.unique(e) : e);
            e.selector = this.selector ? this.selector + " " + a : a;
            return e
        },
        filter: function(a) {
            return this.pushStack(c(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(c(this, a || [], !0))
        },
        is: function(a) {
            return !!c(this, "string" === typeof a && Db.test(a) ? l(a) : a || [], !1).length
        }
    });
    var Ma, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (l.fn.init = function(a, b) {
        var c;
        if (!a) return this;
        if ("string" === typeof a) {
            c = "<" ===
                a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : O.exec(a);
            if (!c || !c[1] && b) return !b || b.jquery ? (b || Ma).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof l ? b[0] : b, l.merge(this, l.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : R, !0)), wa.test(c[1]) && l.isPlainObject(b))
                    for (c in b)
                        if (l.isFunction(this[c])) this[c](b[c]);
                        else this.attr(c, b[c])
            } else(c = R.getElementById(c[2])) && c.parentNode && (this.length = 1, this[0] = c), this.context = R, this.selector = a;
            return this
        }
        if (a.nodeType) return this.context =
            this[0] = a, this.length = 1, this;
        if (l.isFunction(a)) return "undefined" !== typeof Ma.ready ? Ma.ready(a) : a(l);
        void 0 !== a.selector && (this.selector = a.selector, this.context = a.context);
        return l.makeArray(a, this)
    }).prototype = l.fn;
    Ma = l(R);
    var ra = /^(?:parents|prev(?:Until|All))/,
        fa = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    l.extend({
        dir: function(a, b, c) {
            for (var e = [], d = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (d && l(a).is(c)) break;
                    e.push(a)
                }
            return e
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 ===
                a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    l.fn.extend({
        has: function(a) {
            var b = l(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (l.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, e = 0, d = this.length, f = [], h = Db.test(a) || "string" !== typeof a ? l(a, b || this.context) : 0; e < d; e++)
                for (c = this[e]; c && c !== b; c = c.parentNode)
                    if (11 > c.nodeType && (h ? -1 < h.index(c) : 1 === c.nodeType && l.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(1 < f.length ? l.unique(f) : f)
        },
        index: function(a) {
            return a ?
                "string" === typeof a ? U.call(l(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(l.unique(l.merge(this.get(), l(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    l.each({
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return l.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return l.dir(a, "parentNode", c)
        },
        next: function(b) {
            return a(b,
                "nextSibling")
        },
        prev: function(b) {
            return a(b, "previousSibling")
        },
        nextAll: function(a) {
            return l.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return l.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return l.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return l.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return l.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return l.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || l.merge([], a.childNodes)
        }
    }, function(a,
        b) {
        l.fn[a] = function(c, e) {
            var d = l.map(this, b, c);
            "Until" !== a.slice(-5) && (e = c);
            e && "string" === typeof e && (d = l.filter(e, d));
            1 < this.length && (fa[a] || l.unique(d), ra.test(a) && d.reverse());
            return this.pushStack(d)
        }
    });
    var ka = /\S+/g,
        bb = {};
    l.Callbacks = function(a) {
        a = "string" === typeof a ? bb[a] || f(a) : l.extend({}, a);
        var b, c, e, d, h, k, m = [],
            p = !a.once && [],
            q = function(f) {
                b = a.memory && f;
                c = !0;
                k = d || 0;
                d = 0;
                h = m.length;
                for (e = !0; m && k < h; k++)
                    if (!1 === m[k].apply(f[0], f[1]) && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                e = !1;
                m && (p ? p.length && q(p.shift()) : b ?
                    m = [] : t.disable())
            },
            t = {
                add: function() {
                    if (m) {
                        var c = m.length;
                        (function Wa(b) {
                            l.each(b, function(b, c) {
                                var e = l.type(c);
                                "function" === e ? a.unique && t.has(c) || m.push(c) : c && c.length && "string" !== e && Wa(c)
                            })
                        })(arguments);
                        e ? h = m.length : b && (d = c, q(b))
                    }
                    return this
                },
                remove: function() {
                    m && l.each(arguments, function(a, b) {
                        for (var c; - 1 < (c = l.inArray(b, m, c));) m.splice(c, 1), e && (c <= h && h--, c <= k && k--)
                    });
                    return this
                },
                has: function(a) {
                    return a ? -1 < l.inArray(a, m) : !(!m || !m.length)
                },
                empty: function() {
                    m = [];
                    h = 0;
                    return this
                },
                disable: function() {
                    m =
                        p = b = void 0;
                    return this
                },
                disabled: function() {
                    return !m
                },
                lock: function() {
                    p = void 0;
                    b || t.disable();
                    return this
                },
                locked: function() {
                    return !p
                },
                fireWith: function(a, b) {
                    !m || c && !p || (b = b || [], b = [a, b.slice ? b.slice() : b], e ? p.push(b) : q(b));
                    return this
                },
                fire: function() {
                    t.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!c
                }
            };
        return t
    };
    l.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", l.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", l.Callbacks("once memory"), "rejected"],
                    ["notify", "progress",
                        l.Callbacks("memory")
                    ]
                ],
                c = "pending",
                e = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        d.done(arguments).fail(arguments);
                        return this
                    },
                    then: function() {
                        var a = arguments;
                        return l.Deferred(function(c) {
                            l.each(b, function(b, f) {
                                var h = l.isFunction(a[b]) && a[b];
                                d[f[1]](function() {
                                    var a = h && h.apply(this, arguments);
                                    if (a && l.isFunction(a.promise)) a.promise().done(c.resolve).fail(c.reject).progress(c.notify);
                                    else c[f[0] + "With"](this === e ? c.promise() : this, h ? [a] : arguments)
                                })
                            });
                            a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null !=
                            a ? l.extend(a, e) : e
                    }
                },
                d = {};
            e.pipe = e.then;
            l.each(b, function(a, f) {
                var h = f[2],
                    B = f[3];
                e[f[1]] = h.add;
                B && h.add(function() {
                    c = B
                }, b[a ^ 1][2].disable, b[2][2].lock);
                d[f[0]] = function() {
                    d[f[0] + "With"](this === d ? e : this, arguments);
                    return this
                };
                d[f[0] + "With"] = h.fireWith
            });
            e.promise(d);
            a && a.call(d, d);
            return d
        },
        when: function(a) {
            var b = 0,
                c = J.call(arguments),
                e = c.length,
                d = 1 !== e || a && l.isFunction(a.promise) ? e : 0,
                f = 1 === d ? a : l.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this;
                        c[a] = 1 < arguments.length ? J.call(arguments) : e;
                        c === k ? f.notifyWith(b, c) : --d || f.resolveWith(b, c)
                    }
                },
                k, m, p;
            if (1 < e)
                for (k = Array(e), m = Array(e), p = Array(e); b < e; b++) c[b] && l.isFunction(c[b].promise) ? c[b].promise().done(h(b, p, c)).fail(f.reject).progress(h(b, m, k)) : --d;
            d || f.resolveWith(p, c);
            return f.promise()
        }
    });
    var Ya;
    l.fn.ready = function(a) {
        l.ready.promise().done(a);
        return this
    };
    l.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? l.readyWait++ : l.ready(!0)
        },
        ready: function(a) {
            (!0 === a ? --l.readyWait : l.isReady) || (l.isReady = !0, !0 !== a && 0 < --l.readyWait || (Ya.resolveWith(R, [l]), l.fn.triggerHandler && (l(R).triggerHandler("ready"), l(R).off("ready"))))
        }
    });
    l.ready.promise = function(a) {
        Ya || (Ya = l.Deferred(), "complete" === R.readyState ? setTimeout(l.ready) : (R.addEventListener("DOMContentLoaded", e, !1), b.addEventListener("load", e, !1)));
        return Ya.promise(a)
    };
    l.ready.promise();
    var xa = l.access = function(a, b, c, e, d, f, h) {
        var k = 0,
            m = a.length,
            p = null == c;
        if ("object" === l.type(c))
            for (k in d = !0, c) l.access(a, b, k, c[k], !0, f, h);
        else if (void 0 !== e && (d = !0, l.isFunction(e) || (h = !0), p && (h ? (b.call(a, e), b =
                null) : (p = b, b = function(a, b, c) {
                return p.call(l(a), c)
            })), b))
            for (; k < m; k++) b(a[k], c, h ? e : e.call(a[k], k, b(a[k], c)));
        return d ? a : p ? b.call(a) : m ? b(a[0], c) : f
    };
    l.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    p.uid = 1;
    p.accepts = l.acceptData;
    p.prototype = {
        key: function(a) {
            if (!p.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = p.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (e) {
                    b[this.expando] = c, l.extend(a, b)
                }
            }
            this.cache[c] || (this.cache[c] = {});
            return c
        },
        set: function(a,
            b, c) {
            var e;
            a = this.key(a);
            var d = this.cache[a];
            if ("string" === typeof b) d[b] = c;
            else if (l.isEmptyObject(d)) l.extend(this.cache[a], b);
            else
                for (e in b) d[e] = b[e];
            return d
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            if (void 0 === b || b && "string" === typeof b && void 0 === c) return c = this.get(a, b), void 0 !== c ? c : this.get(a, l.camelCase(b));
            this.set(a, b, c);
            return void 0 !== c ? c : b
        },
        remove: function(a, b) {
            var c, e;
            c = this.key(a);
            var d = this.cache[c];
            if (void 0 === b) this.cache[c] = {};
            else
                for (l.isArray(b) ? e = b.concat(b.map(l.camelCase)) : (c = l.camelCase(b), b in d ? e = [b, c] : (e = c, e = e in d ? [e] : e.match(ka) || [])), c = e.length; c--;) delete d[e[c]]
        },
        hasData: function(a) {
            return !l.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var M = new p,
        T = new p,
        Ka = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        pb = /([A-Z])/g;
    l.extend({
        hasData: function(a) {
            return T.hasData(a) || M.hasData(a)
        },
        data: function(a, b, c) {
            return T.access(a, b, c)
        },
        removeData: function(a,
            b) {
            T.remove(a, b)
        },
        _data: function(a, b, c) {
            return M.access(a, b, c)
        },
        _removeData: function(a, b) {
            M.remove(a, b)
        }
    });
    l.fn.extend({
        data: function(a, b) {
            var c, e, d, f = this[0],
                k = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (d = T.get(f), 1 === f.nodeType && !M.get(f, "hasDataAttrs"))) {
                    for (c = k.length; c--;) k[c] && (e = k[c].name, 0 === e.indexOf("data-") && (e = l.camelCase(e.slice(5)), h(f, e, d[e])));
                    M.set(f, "hasDataAttrs", !0)
                }
                return d
            }
            return "object" === typeof a ? this.each(function() {
                T.set(this, a)
            }) : xa(this, function(b) {
                var c, e = l.camelCase(a);
                if (f && void 0 === b) {
                    c = T.get(f, a);
                    if (void 0 !== c) return c;
                    c = T.get(f, e);
                    if (void 0 !== c) return c;
                    c = h(f, e, void 0);
                    if (void 0 !== c) return c
                } else this.each(function() {
                    var c = T.get(this, e);
                    T.set(this, e, b); - 1 !== a.indexOf("-") && void 0 !== c && T.set(this, a, b)
                })
            }, null, b, 1 < arguments.length, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                T.remove(this, a)
            })
        }
    });
    l.extend({
        queue: function(a, b, c) {
            var e;
            if (a) return b = (b || "fx") + "queue", e = M.get(a, b), c && (!e || l.isArray(c) ? e = M.access(a, b, l.makeArray(c)) : e.push(c)), e || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = l.queue(a, b),
                e = c.length,
                d = c.shift(),
                f = l._queueHooks(a, b),
                h = function() {
                    l.dequeue(a, b)
                };
            "inprogress" === d && (d = c.shift(), e--);
            d && ("fx" === b && c.unshift("inprogress"), delete f.stop, d.call(a, h, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return M.get(a, c) || M.access(a, c, {
                empty: l.Callbacks("once memory").add(function() {
                    M.remove(a, [b + "queue", c])
                })
            })
        }
    });
    l.fn.extend({
        queue: function(a, b) {
            var c = 2;
            "string" !== typeof a && (b = a, a = "fx", c--);
            return arguments.length <
                c ? l.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = l.queue(this, a, b);
                    l._queueHooks(this, a);
                    "fx" === a && "inprogress" !== c[0] && l.dequeue(this, a)
                })
        },
        dequeue: function(a) {
            return this.each(function() {
                l.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, e = 1,
                d = l.Deferred(),
                f = this,
                h = this.length,
                k = function() {
                    --e || d.resolveWith(f, [f])
                };
            "string" !== typeof a && (b = a, a = void 0);
            for (a = a || "fx"; h--;)(c = M.get(f[h], a + "queueHooks")) && c.empty && (e++, c.empty.add(k));
            k();
            return d.promise(b)
        }
    });
    var ha = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Q = ["Top", "Right", "Bottom", "Left"],
        ia = function(a, b) {
            a = b || a;
            return "none" === l.css(a, "display") || !l.contains(a.ownerDocument, a)
        },
        Qa = /^(?:checkbox|radio)$/i;
    (function() {
        var a = R.createDocumentFragment().appendChild(R.createElement("div")),
            b = R.createElement("input");
        b.setAttribute("type", "radio");
        b.setAttribute("checked", "checked");
        b.setAttribute("name", "t");
        a.appendChild(b);
        X.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
        a.innerHTML = "<textarea>x</textarea>";
        X.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue
    })();
    X.focusinBubbles = "onfocusin" in b;
    var ca = /^key/,
        oa = /^(?:mouse|pointer|contextmenu)|click/,
        lb = /^(?:focusinfocus|focusoutblur)$/,
        Nb = /^([^.]*)(?:\.(.+)|)$/;
    l.event = {
        global: {},
        add: function(a, b, c, e, d) {
            var f, h, k, m, p, q, t, g, r;
            if (p = M.get(a))
                for (c.handler && (f = c, c = f.handler, d = f.selector), c.guid || (c.guid = l.guid++), (m = p.events) || (m = p.events = {}), (h = p.handle) || (h = p.handle = function(b) {
                        return "undefined" !== typeof l && l.event.triggered !==
                            b.type ? l.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(ka) || [""], p = b.length; p--;) k = Nb.exec(b[p]) || [], g = q = k[1], r = (k[2] || "").split(".").sort(), g && (k = l.event.special[g] || {}, g = (d ? k.delegateType : k.bindType) || g, k = l.event.special[g] || {}, q = l.extend({
                    type: g,
                    origType: q,
                    data: e,
                    handler: c,
                    guid: c.guid,
                    selector: d,
                    needsContext: d && l.expr.match.needsContext.test(d),
                    namespace: r.join(".")
                }, f), (t = m[g]) || (t = m[g] = [], t.delegateCount = 0, k.setup && !1 !== k.setup.call(a, e, r, h) || a.addEventListener && a.addEventListener(g,
                    h, !1)), k.add && (k.add.call(a, q), q.handler.guid || (q.handler.guid = c.guid)), d ? t.splice(t.delegateCount++, 0, q) : t.push(q), l.event.global[g] = !0)
        },
        remove: function(a, b, c, e, d) {
            var f, h, k, m, p, q, t, g, r, w, n, s = M.hasData(a) && M.get(a);
            if (s && (m = s.events)) {
                b = (b || "").match(ka) || [""];
                for (p = b.length; p--;)
                    if (k = Nb.exec(b[p]) || [], r = n = k[1], w = (k[2] || "").split(".").sort(), r) {
                        t = l.event.special[r] || {};
                        r = (e ? t.delegateType : t.bindType) || r;
                        g = m[r] || [];
                        k = k[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (h = f = g.length; f--;) q =
                            g[f], !d && n !== q.origType || c && c.guid !== q.guid || k && !k.test(q.namespace) || e && e !== q.selector && ("**" !== e || !q.selector) || (g.splice(f, 1), q.selector && g.delegateCount--, t.remove && t.remove.call(a, q));
                        h && !g.length && (t.teardown && !1 !== t.teardown.call(a, w, s.handle) || l.removeEvent(a, r, s.handle), delete m[r])
                    } else
                        for (r in m) l.event.remove(a, r + b[p], c, e, !0);
                l.isEmptyObject(m) && (delete s.handle, M.remove(a, "events"))
            }
        },
        trigger: function(a, c, e, d) {
            var f, h, k, m, p, q, t = [e || R],
                g = Oa.call(a, "type") ? a.type : a;
            q = Oa.call(a, "namespace") ?
                a.namespace.split(".") : [];
            h = f = e = e || R;
            if (3 !== e.nodeType && 8 !== e.nodeType && !lb.test(g + l.event.triggered) && (0 <= g.indexOf(".") && (q = g.split("."), g = q.shift(), q.sort()), m = 0 > g.indexOf(":") && "on" + g, a = a[l.expando] ? a : new l.Event(g, "object" === typeof a && a), a.isTrigger = d ? 2 : 3, a.namespace = q.join("."), a.namespace_re = a.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = e), c = null == c ? [a] : l.makeArray(c, [a]), q = l.event.special[g] || {}, d || !q.trigger || !1 !== q.trigger.apply(e,
                    c))) {
                if (!d && !q.noBubble && !l.isWindow(e)) {
                    k = q.delegateType || g;
                    lb.test(k + g) || (h = h.parentNode);
                    for (; h; h = h.parentNode) t.push(h), f = h;
                    f === (e.ownerDocument || R) && t.push(f.defaultView || f.parentWindow || b)
                }
                for (f = 0;
                    (h = t[f++]) && !a.isPropagationStopped();) a.type = 1 < f ? k : q.bindType || g, (p = (M.get(h, "events") || {})[a.type] && M.get(h, "handle")) && p.apply(h, c), (p = m && h[m]) && p.apply && l.acceptData(h) && (a.result = p.apply(h, c), !1 === a.result && a.preventDefault());
                a.type = g;
                d || a.isDefaultPrevented() || q._default && !1 !== q._default.apply(t.pop(),
                    c) || !l.acceptData(e) || !m || !l.isFunction(e[g]) || l.isWindow(e) || ((f = e[m]) && (e[m] = null), l.event.triggered = g, e[g](), l.event.triggered = void 0, f && (e[m] = f));
                return a.result
            }
        },
        dispatch: function(a) {
            a = l.event.fix(a);
            var b, c, e, d, f = [],
                h = J.call(arguments);
            b = (M.get(this, "events") || {})[a.type] || [];
            var k = l.event.special[a.type] || {};
            h[0] = a;
            a.delegateTarget = this;
            if (!k.preDispatch || !1 !== k.preDispatch.call(this, a)) {
                f = l.event.handlers.call(this, a, b);
                for (b = 0;
                    (d = f[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = d.elem,
                        c = 0;
                        (e = d.handlers[c++]) && !a.isImmediatePropagationStopped();)
                        if (!a.namespace_re || a.namespace_re.test(e.namespace)) a.handleObj = e, a.data = e.data, e = ((l.event.special[e.origType] || {}).handle || e.handler).apply(d.elem, h), void 0 !== e && !1 === (a.result = e) && (a.preventDefault(), a.stopPropagation());
                k.postDispatch && k.postDispatch.call(this, a);
                return a.result
            }
        },
        handlers: function(a, b) {
            var c, e, d, f, h = [],
                k = b.delegateCount,
                m = a.target;
            if (k && m.nodeType && (!a.button || "click" !== a.type))
                for (; m !== this; m = m.parentNode || this)
                    if (!0 !==
                        m.disabled || "click" !== a.type) {
                        e = [];
                        for (c = 0; c < k; c++) f = b[c], d = f.selector + " ", void 0 === e[d] && (e[d] = f.needsContext ? 0 <= l(d, this).index(m) : l.find(d, this, null, [m]).length), e[d] && e.push(f);
                        e.length && h.push({
                            elem: m,
                            handlers: e
                        })
                    }
            k < b.length && h.push({
                elem: this,
                handlers: b.slice(k)
            });
            return h
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(a, b) {
                null ==
                    a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, d = b.button;
                null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || R, e = c.documentElement, c = c.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0));
                a.which ||
                    void 0 === d || (a.which = d & 1 ? 1 : d & 2 ? 3 : d & 4 ? 2 : 0);
                return a
            }
        },
        fix: function(a) {
            if (a[l.expando]) return a;
            var b, c, e;
            b = a.type;
            var d = a,
                f = this.fixHooks[b];
            f || (this.fixHooks[b] = f = oa.test(b) ? this.mouseHooks : ca.test(b) ? this.keyHooks : {});
            e = f.props ? this.props.concat(f.props) : this.props;
            a = new l.Event(d);
            for (b = e.length; b--;) c = e[b], a[c] = d[c];
            a.target || (a.target = R);
            3 === a.target.nodeType && (a.target = a.target.parentNode);
            return f.filter ? f.filter(a, d) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== m() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === m() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && l.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(a) {
                    return l.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, e) {
            a = l.extend(new l.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            e ? l.event.trigger(a, null, b) : l.event.dispatch.call(b, a);
            a.isDefaultPrevented() && c.preventDefault()
        }
    };
    l.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    };
    l.Event = function(a, b) {
        if (!(this instanceof l.Event)) return new l.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? k : q) : this.type = a;
        b && l.extend(this, b);
        this.timeStamp = a && a.timeStamp || l.now();
        this[l.expando] = !0
    };
    l.Event.prototype = {
        isDefaultPrevented: q,
        isPropagationStopped: q,
        isImmediatePropagationStopped: q,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = k;
            a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = k;
            a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = k;
            a && a.stopImmediatePropagation && a.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    l.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        l.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, e = a.relatedTarget,
                    d = a.handleObj;
                if (!e || e !== this && !l.contains(this, e)) a.type = d.origType, c = d.handler.apply(this, arguments), a.type = b;
                return c
            }
        }
    });
    X.focusinBubbles || l.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            l.event.simulate(b, a.target, l.event.fix(a), !0)
        };
        l.event.special[b] = {
            setup: function() {
                var e =
                    this.ownerDocument || this,
                    d = M.access(e, b);
                d || e.addEventListener(a, c, !0);
                M.access(e, b, (d || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    d = M.access(e, b) - 1;
                d ? M.access(e, b, d) : (e.removeEventListener(a, c, !0), M.remove(e, b))
            }
        }
    });
    l.fn.extend({
        on: function(a, b, c, e, d) {
            var f, h;
            if ("object" === typeof a) {
                "string" !== typeof b && (c = c || b, b = void 0);
                for (h in a) this.on(h, b, c, a[h], d);
                return this
            }
            null == c && null == e ? (e = b, c = b = void 0) : null == e && ("string" === typeof b ? (e = c, c = void 0) : (e = c, c = b, b = void 0));
            if (!1 === e) e = q;
            else if (!e) return this;
            1 === d && (f = e, e = function(a) {
                l().off(a);
                return f.apply(this, arguments)
            }, e.guid = f.guid || (f.guid = l.guid++));
            return this.each(function() {
                l.event.add(this, a, e, c, b)
            })
        },
        one: function(a, b, c, e) {
            return this.on(a, b, c, e, 1)
        },
        off: function(a, b, c) {
            var e;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, l(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" === typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            if (!1 === b || "function" === typeof b) c = b, b = void 0;
            !1 === c && (c = q);
            return this.each(function() {
                l.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                l.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return l.event.trigger(a, b, c, !0)
        }
    });
    var Za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        mb = /<([\w:]+)/,
        tb = /<|&#?\w+;/,
        Eb = /<(?:script|style|link)/i,
        ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
        na = /^$|\/(?:java|ecma)script/i,
        Zb = /^true\/(.*)/,
        nb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ja = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ja.optgroup = Ja.option;
    Ja.tbody = Ja.tfoot = Ja.colgroup = Ja.caption = Ja.thead;
    Ja.th = Ja.td;
    l.extend({
        clone: function(a, b, c) {
            var e, d, f, h, k = a.cloneNode(!0),
                m = l.contains(a.ownerDocument, a);
            if (!(X.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || l.isXMLDoc(a)))
                for (h =
                    n(k), f = n(a), e = 0, d = f.length; e < d; e++) {
                    var p = f[e],
                        q = h[e],
                        g = q.nodeName.toLowerCase();
                    if ("input" === g && Qa.test(p.type)) q.checked = p.checked;
                    else if ("input" === g || "textarea" === g) q.defaultValue = p.defaultValue
                }
            if (b)
                if (c)
                    for (f = f || n(a), h = h || n(k), e = 0, d = f.length; e < d; e++) x(f[e], h[e]);
                else x(a, k);
            h = n(k, "script");
            0 < h.length && u(h, !m && n(a, "script"));
            return k
        },
        buildFragment: function(a, b, c, e) {
            for (var d, f, h, k = b.createDocumentFragment(), m = [], p = 0, q = a.length; p < q; p++)
                if ((d = a[p]) || 0 === d)
                    if ("object" === l.type(d)) l.merge(m, d.nodeType ? [d] : d);
                    else if (tb.test(d)) {
                f = f || k.appendChild(b.createElement("div"));
                h = (mb.exec(d) || ["", ""])[1].toLowerCase();
                h = Ja[h] || Ja._default;
                f.innerHTML = h[1] + d.replace(Za, "<$1></$2>") + h[2];
                for (h = h[0]; h--;) f = f.lastChild;
                l.merge(m, f.childNodes);
                f = k.firstChild;
                f.textContent = ""
            } else m.push(b.createTextNode(d));
            k.textContent = "";
            for (p = 0; d = m[p++];)
                if (!e || -1 === l.inArray(d, e))
                    if (a = l.contains(d.ownerDocument, d), f = n(k.appendChild(d), "script"), a && u(f), c)
                        for (h = 0; d = f[h++];) na.test(d.type || "") && c.push(d);
            return k
        },
        cleanData: function(a) {
            for (var b,
                    c, e, d, f = l.event.special, h = 0; void 0 !== (c = a[h]); h++) {
                if (l.acceptData(c) && (d = c[M.expando]) && (b = M.cache[d])) {
                    if (b.events)
                        for (e in b.events) f[e] ? l.event.remove(c, e) : l.removeEvent(c, e, b.handle);
                    M.cache[d] && delete M.cache[d]
                }
                delete T.cache[c[T.expando]]
            }
        }
    });
    l.fn.extend({
        text: function(a) {
            return xa(this, function(a) {
                return void 0 === a ? l.text(this) : this.empty().each(function() {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) this.textContent = a
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
                function(a) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || t(this, a).appendChild(a)
                })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = t(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, e = a ? l.filter(a, this) : this, d = 0; null != (c = e[d]); d++) b || 1 !== c.nodeType || l.cleanData(n(c)), c.parentNode && (b && l.contains(c.ownerDocument, c) && u(n(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (l.cleanData(n(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            a = null == a ? !1 : a;
            b = null == b ? a : b;
            return this.map(function() {
                return l.clone(this, a, b)
            })
        },
        html: function(a) {
            return xa(this, function(a) {
                var b =
                    this[0] || {},
                    c = 0,
                    e = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" === typeof a && !Eb.test(a) && !Ja[(mb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Za, "<$1></$2>");
                    try {
                        for (; c < e; c++) b = this[c] || {}, 1 === b.nodeType && (l.cleanData(n(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (d) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            this.domManip(arguments, function(b) {
                a = this.parentNode;
                l.cleanData(n(this));
                a && a.replaceChild(b, this)
            });
            return a && (a.length ||
                a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = aa.apply([], a);
            var c, e, d, f, h = 0,
                k = this.length,
                m = this,
                p = k - 1,
                q = a[0],
                g = l.isFunction(q);
            if (g || 1 < k && "string" === typeof q && !X.checkClone && ea.test(q)) return this.each(function(c) {
                var e = m.eq(c);
                g && (a[0] = q.call(this, c, e.html()));
                e.domManip(a, b)
            });
            if (k && (c = l.buildFragment(a, this[0].ownerDocument, !1, this), e = c.firstChild, 1 === c.childNodes.length && (c = e), e)) {
                e = l.map(n(c, "script"), w);
                for (d = e.length; h < k; h++) f = c, h !==
                    p && (f = l.clone(f, !0, !0), d && l.merge(e, n(f, "script"))), b.call(this[h], f, h);
                if (d)
                    for (c = e[e.length - 1].ownerDocument, l.map(e, v), h = 0; h < d; h++) f = e[h], na.test(f.type || "") && !M.access(f, "globalEval") && l.contains(c, f) && (f.src ? l._evalUrl && l._evalUrl(f.src) : l.globalEval(f.textContent.replace(nb, "")))
            }
            return this
        }
    });
    l.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        l.fn[a] = function(a) {
            for (var c = [], e = l(a), d = e.length - 1, f = 0; f <= d; f++) a = f ===
                d ? this : this.clone(!0), l(e[f])[b](a), S.apply(c, a.get());
            return this.pushStack(c)
        }
    });
    var yb, $b = {},
        cb = /^margin/,
        zb = new RegExp("^(" + ha + ")(?!px)[a-z%]+$", "i"),
        fb = function(a) {
            return a.ownerDocument.defaultView.opener ? a.ownerDocument.defaultView.getComputedStyle(a, null) : b.getComputedStyle(a, null)
        };
    (function() {
        function a() {
            h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
            h.innerHTML =
                "";
            d.appendChild(f);
            var k = b.getComputedStyle(h, null);
            c = "1%" !== k.top;
            e = "4px" === k.width;
            d.removeChild(f)
        }
        var c, e, d = R.documentElement,
            f = R.createElement("div"),
            h = R.createElement("div");
        h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", X.clearCloneStyle = "content-box" === h.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(h), b.getComputedStyle && l.extend(X, {
            pixelPosition: function() {
                a();
                return c
            },
            boxSizingReliable: function() {
                null == e && a();
                return e
            },
            reliableMarginRight: function() {
                var a, c = h.appendChild(R.createElement("div"));
                c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                c.style.marginRight = c.style.width = "0";
                h.style.width = "1px";
                d.appendChild(f);
                a = !parseFloat(b.getComputedStyle(c, null).marginRight);
                d.removeChild(f);
                h.removeChild(c);
                return a
            }
        }))
    })();
    l.swap = function(a, b, c, e) {
        var d, f = {};
        for (d in b) f[d] = a.style[d], a.style[d] = b[d];
        c = c.apply(a, e || []);
        for (d in b) a.style[d] = f[d];
        return c
    };
    var wc = /^(none|table(?!-c[ea]).+)/,
        Cc = new RegExp("^(" + ha + ")(.*)$", "i"),
        Wc = new RegExp("^([+-])=(" + ha + ")", "i"),
        Xc = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Pc = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Bc = ["Webkit", "O", "Moz", "ms"];
    l.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = r(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var d, f, h, k = l.camelCase(b),
                    m = a.style;
                b = l.cssProps[k] || (l.cssProps[k] = E(m, k));
                h = l.cssHooks[b] || l.cssHooks[k];
                if (void 0 !== c) f = typeof c, "string" === f && (d = Wc.exec(c)) && (c = (d[1] + 1) * d[2] + parseFloat(l.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || l.cssNumber[k] || (c += "px"), X.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") ||
                    (m[b] = "inherit"), h && "set" in h && void 0 === (c = h.set(a, c, e)) || (m[b] = c));
                else return h && "get" in h && void 0 !== (d = h.get(a, !1, e)) ? d : m[b]
            }
        },
        css: function(a, b, c, e) {
            var d, f;
            f = l.camelCase(b);
            b = l.cssProps[f] || (l.cssProps[f] = E(a.style, f));
            (f = l.cssHooks[b] || l.cssHooks[f]) && "get" in f && (d = f.get(a, !0, c));
            void 0 === d && (d = r(a, b, e));
            "normal" === d && b in Pc && (d = Pc[b]);
            return "" === c || c ? (a = parseFloat(d), !0 === c || l.isNumeric(a) ? a || 0 : d) : d
        }
    });
    l.each(["height", "width"], function(a, b) {
        l.cssHooks[b] = {
            get: function(a, c, e) {
                if (c) return wc.test(l.css(a,
                    "display")) && 0 === a.offsetWidth ? l.swap(a, Xc, function() {
                    return C(a, b, e)
                }) : C(a, b, e)
            },
            set: function(a, c, e) {
                var d = e && fb(a);
                return K(a, c, e ? z(a, b, e, "border-box" === l.css(a, "boxSizing", !1, d), d) : 0)
            }
        }
    });
    l.cssHooks.marginRight = y(X.reliableMarginRight, function(a, b) {
        if (b) return l.swap(a, {
            display: "inline-block"
        }, r, [a, "marginRight"])
    });
    l.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        l.cssHooks[a + b] = {
            expand: function(c) {
                var e = 0,
                    d = {};
                for (c = "string" === typeof c ? c.split(" ") : [c]; 4 > e; e++) d[a + Q[e] + b] = c[e] || c[e -
                    2] || c[0];
                return d
            }
        };
        cb.test(a) || (l.cssHooks[a + b].set = K)
    });
    l.fn.extend({
        css: function(a, b) {
            return xa(this, function(a, b, c) {
                var e, d = {},
                    f = 0;
                if (l.isArray(b)) {
                    c = fb(a);
                    for (e = b.length; f < e; f++) d[b[f]] = l.css(a, b[f], !1, c);
                    return d
                }
                return void 0 !== c ? l.style(a, b, c) : l.css(a, b)
            }, a, b, 1 < arguments.length)
        },
        show: function() {
            return da(this, !0)
        },
        hide: function() {
            return da(this)
        },
        toggle: function(a) {
            return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function() {
                ia(this) ? l(this).show() : l(this).hide()
            })
        }
    });
    l.Tween =
        F;
    F.prototype = {
        constructor: F,
        init: function(a, b, c, e, d, f) {
            this.elem = a;
            this.prop = c;
            this.easing = d || "swing";
            this.options = b;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = f || (l.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = F.propHooks[this.prop];
            return a && a.get ? a.get(this) : F.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = F.propHooks[this.prop];
            this.pos = this.options.duration ? b = l.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : b = a;
            this.now = (this.end - this.start) * b + this.start;
            this.options.step && this.options.step.call(this.elem, this.now, this);
            c && c.set ? c.set(this) : F.propHooks._default.set(this);
            return this
        }
    };
    F.prototype.init.prototype = F.prototype;
    F.propHooks = {
        _default: {
            get: function(a) {
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (a = l.css(a.elem, a.prop, "")) && "auto" !== a ? a : 0 : a.elem[a.prop]
            },
            set: function(a) {
                if (l.fx.step[a.prop]) l.fx.step[a.prop](a);
                else a.elem.style && (null != a.elem.style[l.cssProps[a.prop]] || l.cssHooks[a.prop]) ? l.style(a.elem, a.prop,
                    a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    };
    F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    l.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    };
    l.fx = F.prototype.init;
    l.fx.step = {};
    var Ba, sa, Xb = /^(?:toggle|show|hide)$/,
        fc = new RegExp("^(?:([+-])=|)(" + ha + ")([a-z%]*)$", "i"),
        xc = /queueHooks$/,
        Na = [function(a, b, c) {
            var e, d, f, h, k, m, p = this,
                q = {},
                g = a.style,
                t = a.nodeType && ia(a),
                r = M.get(a, "fxshow");
            c.queue ||
                (h = l._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, k = h.empty.fire, h.empty.fire = function() {
                    h.unqueued || k()
                }), h.unqueued++, p.always(function() {
                    p.always(function() {
                        h.unqueued--;
                        l.queue(a, "fx").length || h.empty.fire()
                    })
                }));
            1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [g.overflow, g.overflowX, g.overflowY], m = l.css(a, "display"), d = "none" === m ? M.get(a, "olddisplay") || s(a.nodeName) : m, "inline" === d && "none" === l.css(a, "float") && (g.display = "inline-block"));
            c.overflow && (g.overflow = "hidden", p.always(function() {
                g.overflow =
                    c.overflow[0];
                g.overflowX = c.overflow[1];
                g.overflowY = c.overflow[2]
            }));
            for (e in b)
                if (d = b[e], Xb.exec(d)) {
                    delete b[e];
                    f = f || "toggle" === d;
                    if (d === (t ? "hide" : "show"))
                        if ("show" === d && r && void 0 !== r[e]) t = !0;
                        else continue;
                    q[e] = r && r[e] || l.style(a, e)
                } else m = void 0;
            if (l.isEmptyObject(q)) "inline" === ("none" === m ? s(a.nodeName) : m) && (g.display = m);
            else
                for (e in r ? "hidden" in r && (t = r.hidden) : r = M.access(a, "fxshow", {}), f && (r.hidden = !t), t ? l(a).show() : p.done(function() {
                        l(a).hide()
                    }), p.done(function() {
                        var b;
                        M.remove(a, "fxshow");
                        for (b in q) l.style(a, b, q[b])
                    }), q) b = N(t ? r[e] : 0, e, p), e in r || (r[e] = b.start, t && (b.end = b.start, b.start = "width" === e || "height" === e ? 1 : 0))
        }],
        Ua = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    e = c.cur(),
                    d = fc.exec(b),
                    f = d && d[3] || (l.cssNumber[a] ? "" : "px"),
                    h = (l.cssNumber[a] || "px" !== f && +e) && fc.exec(l.css(c.elem, a)),
                    k = 1,
                    m = 20;
                if (h && h[3] !== f) {
                    f = f || h[3];
                    d = d || [];
                    h = +e || 1;
                    do k = k || ".5", h /= k, l.style(c.elem, a, h + f); while (k !== (k = c.cur() / e) && 1 !== k && --m)
                }
                d && (h = c.start = +h || +e || 0, c.unit = f, c.end = d[1] ? h + (d[1] + 1) * d[2] : +d[2]);
                return c
            }]
        };
    l.Animation = l.extend(V, {
        tweener: function(a, b) {
            l.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, e = 0, d = a.length; e < d; e++) c = a[e], Ua[c] = Ua[c] || [], Ua[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? Na.unshift(a) : Na.push(a)
        }
    });
    l.speed = function(a, b, c) {
        var e = a && "object" === typeof a ? l.extend({}, a) : {
            complete: c || !c && b || l.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !l.isFunction(b) && b
        };
        e.duration = l.fx.off ? 0 : "number" === typeof e.duration ? e.duration : e.duration in l.fx.speeds ? l.fx.speeds[e.duration] : l.fx.speeds._default;
        if (null == e.queue || !0 === e.queue) e.queue = "fx";
        e.old = e.complete;
        e.complete = function() {
            l.isFunction(e.old) && e.old.call(this);
            e.queue && l.dequeue(this, e.queue)
        };
        return e
    };
    l.fn.extend({
        fadeTo: function(a, b, c, e) {
            return this.filter(ia).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, e)
        },
        animate: function(a, b, c, e) {
            var d = l.isEmptyObject(a),
                f = l.speed(b, c, e);
            b = function() {
                var b = V(this, l.extend({}, a), f);
                (d || M.get(this, "finish")) && b.stop(!0)
            };
            b.finish = b;
            return d || !1 === f.queue ? this.each(b) : this.queue(f.queue,
                b)
        },
        stop: function(a, b, c) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop;
                b(c)
            };
            "string" !== typeof a && (c = b, b = a, a = void 0);
            b && !1 !== a && this.queue(a || "fx", []);
            return this.each(function() {
                var b = !0,
                    d = null != a && a + "queueHooks",
                    f = l.timers,
                    h = M.get(this);
                if (d) h[d] && h[d].stop && e(h[d]);
                else
                    for (d in h) h[d] && h[d].stop && xc.test(d) && e(h[d]);
                for (d = f.length; d--;) f[d].elem !== this || null != a && f[d].queue !== a || (f[d].anim.stop(c), b = !1, f.splice(d, 1));
                !b && c || l.dequeue(this, a)
            })
        },
        finish: function(a) {
            !1 !== a && (a = a || "fx");
            return this.each(function() {
                var b,
                    c = M.get(this),
                    e = c[a + "queue"];
                b = c[a + "queueHooks"];
                var d = l.timers,
                    f = e ? e.length : 0;
                c.finish = !0;
                l.queue(this, a, []);
                b && b.stop && b.stop.call(this, !0);
                for (b = d.length; b--;) d[b].elem === this && d[b].queue === a && (d[b].anim.stop(!0), d.splice(b, 1));
                for (b = 0; b < f; b++) e[b] && e[b].finish && e[b].finish.call(this);
                delete c.finish
            })
        }
    });
    l.each(["toggle", "show", "hide"], function(a, b) {
        var c = l.fn[b];
        l.fn[b] = function(a, e, d) {
            return null == a || "boolean" === typeof a ? c.apply(this, arguments) : this.animate(G(b, !0), a, e, d)
        }
    });
    l.each({
        slideDown: G("show"),
        slideUp: G("hide"),
        slideToggle: G("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        l.fn[a] = function(a, c, e) {
            return this.animate(b, a, c, e)
        }
    });
    l.timers = [];
    l.fx.tick = function() {
        var a, b = 0,
            c = l.timers;
        for (Ba = l.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || l.fx.stop();
        Ba = void 0
    };
    l.fx.timer = function(a) {
        l.timers.push(a);
        a() ? l.fx.start() : l.timers.pop()
    };
    l.fx.interval = 13;
    l.fx.start = function() {
        sa || (sa = setInterval(l.fx.tick, l.fx.interval))
    };
    l.fx.stop = function() {
        clearInterval(sa);
        sa = null
    };
    l.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    l.fn.delay = function(a, b) {
        a = l.fx ? l.fx.speeds[a] || a : a;
        return this.queue(b || "fx", function(b, c) {
            var e = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(e)
            }
        })
    };
    (function() {
        var a = R.createElement("input"),
            b = R.createElement("select"),
            c = b.appendChild(R.createElement("option"));
        a.type = "checkbox";
        X.checkOn = "" !== a.value;
        X.optSelected = c.selected;
        b.disabled = !0;
        X.optDisabled = !c.disabled;
        a = R.createElement("input");
        a.value = "t";
        a.type = "radio";
        X.radioValue = "t" === a.value
    })();
    var ub, vb = l.expr.attrHandle;
    l.fn.extend({
        attr: function(a, b) {
            return xa(this, l.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                l.removeAttr(this, a)
            })
        }
    });
    l.extend({
        attr: function(a, b, c) {
            var e, d, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) {
                if ("undefined" === typeof a.getAttribute) return l.prop(a, b, c);
                1 === f && l.isXMLDoc(a) || (b = b.toLowerCase(), e = l.attrHooks[b] || (l.expr.match.bool.test(b) ? ub : void 0));
                if (void 0 !== c)
                    if (null === c) l.removeAttr(a,
                        b);
                    else {
                        if (e && "set" in e && void 0 !== (d = e.set(a, c, b))) return d;
                        a.setAttribute(b, c + "");
                        return c
                    }
                else {
                    if (e && "get" in e && null !== (d = e.get(a, b))) return d;
                    d = l.find.attr(a, b);
                    return null == d ? void 0 : d
                }
            }
        },
        removeAttr: function(a, b) {
            var c, e, d = 0,
                f = b && b.match(ka);
            if (f && 1 === a.nodeType)
                for (; c = f[d++];) e = l.propFix[c] || c, l.expr.match.bool.test(c) && (a[e] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!X.radioValue && "radio" === b && l.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b);
                        c && (a.value = c);
                        return b
                    }
                }
            }
        }
    });
    ub = {
        set: function(a, b, c) {
            !1 === b ? l.removeAttr(a, c) : a.setAttribute(c, c);
            return c
        }
    };
    l.each(l.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = vb[b] || l.find.attr;
        vb[b] = function(a, b, e) {
            var d, f;
            e || (f = vb[b], vb[b] = d, d = null != c(a, b, e) ? b.toLowerCase() : null, vb[b] = f);
            return d
        }
    });
    var Yc = /^(?:input|select|textarea|button)$/i;
    l.fn.extend({
        prop: function(a, b) {
            return xa(this, l.prop, a, b, 1 < arguments.length)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[l.propFix[a] || a]
            })
        }
    });
    l.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var e, d, f;
            f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) {
                if (f = 1 !== f || !l.isXMLDoc(a)) b = l.propFix[b] || b, d = l.propHooks[b];
                return void 0 !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : a[b] = c : d && "get" in d && null !== (e = d.get(a, b)) ? e : a[b]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || Yc.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    });
    X.optSelected || (l.propHooks.selected = {
        get: function(a) {
            (a = a.parentNode) && a.parentNode && a.parentNode.selectedIndex;
            return null
        }
    });
    l.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        l.propFix[this.toLowerCase()] = this
    });
    var yc = /[\t\r\n\f]/g;
    l.fn.extend({
        addClass: function(a) {
            var b, c, e, d, f;
            b = "string" === typeof a && a;
            var h = 0,
                k = this.length;
            if (l.isFunction(a)) return this.each(function(b) {
                l(this).addClass(a.call(this, b, this.className))
            });
            if (b)
                for (b = (a || "").match(ka) || []; h < k; h++)
                    if (c = this[h], e = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(yc,
                            " ") : " ")) {
                        for (f = 0; d = b[f++];) 0 > e.indexOf(" " + d + " ") && (e += d + " ");
                        e = l.trim(e);
                        c.className !== e && (c.className = e)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, e, d, f;
            b = 0 === arguments.length || "string" === typeof a && a;
            var h = 0,
                k = this.length;
            if (l.isFunction(a)) return this.each(function(b) {
                l(this).removeClass(a.call(this, b, this.className))
            });
            if (b)
                for (b = (a || "").match(ka) || []; h < k; h++)
                    if (c = this[h], e = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(yc, " ") : "")) {
                        for (f = 0; d = b[f++];)
                            for (; 0 <= e.indexOf(" " + d + " ");) e =
                                e.replace(" " + d + " ", " ");
                        e = a ? l.trim(e) : "";
                        c.className !== e && (c.className = e)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" === typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : l.isFunction(a) ? this.each(function(c) {
                l(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if ("string" === c)
                    for (var b, e = 0, d = l(this), f = a.match(ka) || []; b = f[e++];) d.hasClass(b) ? d.removeClass(b) : d.addClass(b);
                else if ("undefined" === c || "boolean" === c) this.className && M.set(this,
                    "__className__", this.className), this.className = this.className || !1 === a ? "" : M.get(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            a = " " + a + " ";
            for (var b = 0, c = this.length; b < c; b++)
                if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(yc, " ").indexOf(a)) return !0;
            return !1
        }
    });
    var Zc = /\r/g;
    l.fn.extend({
        val: function(a) {
            var b, c, e, d = this[0];
            if (arguments.length) return e = l.isFunction(a), this.each(function(c) {
                1 === this.nodeType && (c = e ? a.call(this, c, l(this).val()) : a, null == c ? c = "" : "number" === typeof c ? c += "" :
                    l.isArray(c) && (c = l.map(c, function(a) {
                        return null == a ? "" : a + ""
                    })), b = l.valHooks[this.type] || l.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, c, "value") || (this.value = c))
            });
            if (d) {
                if ((b = l.valHooks[d.type] || l.valHooks[d.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(d, "value"))) return c;
                c = d.value;
                return "string" === typeof c ? c.replace(Zc, "") : null == c ? "" : c
            }
        }
    });
    l.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = l.find.attr(a, "value");
                    return null != b ? b : l.trim(l.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b,
                            c = a.options, e = a.selectedIndex, d = (a = "select-one" === a.type || 0 > e) ? null : [], f = a ? e + 1 : c.length, h = 0 > e ? f : a ? e : 0; h < f; h++)
                        if (b = c[h], !(!b.selected && h !== e || (X.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && l.nodeName(b.parentNode, "optgroup"))) {
                            b = l(b).val();
                            if (a) return b;
                            d.push(b)
                        }
                    return d
                },
                set: function(a, b) {
                    for (var c, e, d = a.options, f = l.makeArray(b), h = d.length; h--;)
                        if (e = d[h], e.selected = 0 <= l.inArray(e.value, f)) c = !0;
                    c || (a.selectedIndex = -1);
                    return f
                }
            }
        }
    });
    l.each(["radio", "checkbox"],
        function() {
            l.valHooks[this] = {
                set: function(a, b) {
                    if (l.isArray(b)) return a.checked = 0 <= l.inArray(l(a).val(), b)
                }
            };
            X.checkOn || (l.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
    l.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        l.fn[b] = function(a, c) {
            return 0 < arguments.length ? this.on(b,
                null, a, c) : this.trigger(b)
        }
    });
    l.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, e) {
            return this.on(b, a, c, e)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var Ra = l.now(),
        Ob = /\?/;
    l.parseJSON = function(a) {
        return JSON.parse(a + "")
    };
    l.parseXML = function(a) {
        var b, c;
        if (!a || "string" !== typeof a) return null;
        try {
            c = new DOMParser,
                b = c.parseFromString(a, "text/xml")
        } catch (e) {
            b = void 0
        }
        b && !b.getElementsByTagName("parsererror").length || l.error("Invalid XML: " + a);
        return b
    };
    var $c = /#.*$/,
        Fb = /([?&])_=[^&]*/,
        ad = /^(.*?):[ \t]*([^\r\n]*)$/mg,
        Sa = /^(?:GET|HEAD)$/,
        Gb = /^\/\//,
        db = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hb = {},
        Ca = {},
        Yb = "*/".concat("*"),
        eb = b.location.href,
        Ea = db.exec(eb.toLowerCase()) || [];
    l.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: eb,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ea[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Yb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": l.parseJSON,
                "text xml": l.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? ya(ya(a,
                l.ajaxSettings), b) : ya(l.ajaxSettings, a)
        },
        ajaxPrefilter: ga(Hb),
        ajaxTransport: ga(Ca),
        ajax: function(a, b) {
            function c(a, b, h, m) {
                var q, u, P, y;
                y = b;
                if (2 !== v) {
                    v = 2;
                    k && clearTimeout(k);
                    e = void 0;
                    f = m || "";
                    J.readyState = 0 < a ? 4 : 0;
                    m = 200 <= a && 300 > a || 304 === a;
                    if (h) {
                        P = g;
                        for (var x = J, na, E, ha, aa, Q = P.contents, B = P.dataTypes;
                            "*" === B[0];) B.shift(), void 0 === na && (na = P.mimeType || x.getResponseHeader("Content-Type"));
                        if (na)
                            for (E in Q)
                                if (Q[E] && Q[E].test(na)) {
                                    B.unshift(E);
                                    break
                                }
                        if (B[0] in h) ha = B[0];
                        else {
                            for (E in h) {
                                if (!B[0] || P.converters[E +
                                        " " + B[0]]) {
                                    ha = E;
                                    break
                                }
                                aa || (aa = E)
                            }
                            ha = ha || aa
                        }
                        ha ? (ha !== B[0] && B.unshift(ha), P = h[ha]) : P = void 0
                    }
                    a: {
                        h = g;na = P;E = J;ha = m;
                        var ea, S, U, x = {},
                            Q = h.dataTypes.slice();
                        if (Q[1])
                            for (S in h.converters) x[S.toLowerCase()] = h.converters[S];
                        for (aa = Q.shift(); aa;)
                            if (h.responseFields[aa] && (E[h.responseFields[aa]] = na), !U && ha && h.dataFilter && (na = h.dataFilter(na, h.dataType)), U = aa, aa = Q.shift())
                                if ("*" === aa) aa = U;
                                else if ("*" !== U && U !== aa) {
                            S = x[U + " " + aa] || x["* " + aa];
                            if (!S)
                                for (ea in x)
                                    if (P = ea.split(" "), P[1] === aa && (S = x[U + " " + P[0]] || x["* " +
                                            P[0]])) {
                                        !0 === S ? S = x[ea] : !0 !== x[ea] && (aa = P[0], Q.unshift(P[1]));
                                        break
                                    }
                            if (!0 !== S)
                                if (S && h["throws"]) na = S(na);
                                else try {
                                    na = S(na)
                                } catch (ia) {
                                    P = {
                                        state: "parsererror",
                                        error: S ? ia : "No conversion from " + U + " to " + aa
                                    };
                                    break a
                                }
                        }
                        P = {
                            state: "success",
                            data: na
                        }
                    }
                    if (m) g.ifModified && ((y = J.getResponseHeader("Last-Modified")) && (l.lastModified[d] = y), (y = J.getResponseHeader("etag")) && (l.etag[d] = y)), 204 === a || "HEAD" === g.type ? y = "nocontent" : 304 === a ? y = "notmodified" : (y = P.state, q = P.data, u = P.error, m = !u);
                    else if (u = y, a || !y) y = "error", 0 > a &&
                        (a = 0);
                    J.status = a;
                    J.statusText = (b || y) + "";
                    m ? w.resolveWith(t, [q, y, J]) : w.rejectWith(t, [J, y, u]);
                    J.statusCode(s);
                    s = void 0;
                    p && r.trigger(m ? "ajaxSuccess" : "ajaxError", [J, g, m ? q : u]);
                    n.fireWith(t, [J, y]);
                    p && (r.trigger("ajaxComplete", [J, g]), --l.active || l.event.trigger("ajaxStop"))
                }
            }
            "object" === typeof a && (b = a, a = void 0);
            b = b || {};
            var e, d, f, h, k, m, p, q, g = l.ajaxSetup({}, b),
                t = g.context || g,
                r = g.context && (t.nodeType || t.jquery) ? l(t) : l.event,
                w = l.Deferred(),
                n = l.Callbacks("once memory"),
                s = g.statusCode || {},
                u = {},
                P = {},
                v = 0,
                y = "canceled",
                J = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === v) {
                            if (!h)
                                for (h = {}; b = ad.exec(f);) h[b[1].toLowerCase()] = b[2];
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === v ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        v || (a = P[c] = P[c] || a, u[a] = b);
                        return this
                    },
                    overrideMimeType: function(a) {
                        v || (g.mimeType = a);
                        return this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > v)
                                for (b in a) s[b] = [s[b], a[b]];
                            else J.always(a[J.status]);
                        return this
                    },
                    abort: function(a) {
                        a = a ||
                            y;
                        e && e.abort(a);
                        c(0, a);
                        return this
                    }
                };
            w.promise(J).complete = n.add;
            J.success = J.done;
            J.error = J.fail;
            g.url = ((a || g.url || eb) + "").replace($c, "").replace(Gb, Ea[1] + "//");
            g.type = b.method || b.type || g.method || g.type;
            g.dataTypes = l.trim(g.dataType || "*").toLowerCase().match(ka) || [""];
            null == g.crossDomain && (m = db.exec(g.url.toLowerCase()), g.crossDomain = !(!m || m[1] === Ea[1] && m[2] === Ea[2] && (m[3] || ("http:" === m[1] ? "80" : "443")) === (Ea[3] || ("http:" === Ea[1] ? "80" : "443"))));
            g.data && g.processData && "string" !== typeof g.data && (g.data =
                l.param(g.data, g.traditional));
            Z(Hb, g, b, J);
            if (2 === v) return J;
            (p = l.event && g.global) && 0 === l.active++ && l.event.trigger("ajaxStart");
            g.type = g.type.toUpperCase();
            g.hasContent = !Sa.test(g.type);
            d = g.url;
            g.hasContent || (g.data && (d = g.url += (Ob.test(d) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = Fb.test(d) ? d.replace(Fb, "$1_=" + Ra++) : d + (Ob.test(d) ? "&" : "?") + "_=" + Ra++));
            g.ifModified && (l.lastModified[d] && J.setRequestHeader("If-Modified-Since", l.lastModified[d]), l.etag[d] && J.setRequestHeader("If-None-Match",
                l.etag[d]));
            (g.data && g.hasContent && !1 !== g.contentType || b.contentType) && J.setRequestHeader("Content-Type", g.contentType);
            J.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Yb + "; q=0.01" : "") : g.accepts["*"]);
            for (q in g.headers) J.setRequestHeader(q, g.headers[q]);
            if (g.beforeSend && (!1 === g.beforeSend.call(t, J, g) || 2 === v)) return J.abort();
            y = "abort";
            for (q in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) J[q](g[q]);
            if (e = Z(Ca, g, b, J)) {
                J.readyState = 1;
                p && r.trigger("ajaxSend", [J, g]);
                g.async && 0 < g.timeout && (k = setTimeout(function() {
                    J.abort("timeout")
                }, g.timeout));
                try {
                    v = 1, e.send(u, c)
                } catch (x) {
                    if (2 > v) c(-1, x);
                    else throw x;
                }
            } else c(-1, "No Transport");
            return J
        },
        getJSON: function(a, b, c) {
            return l.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return l.get(a, void 0, b, "script")
        }
    });
    l.each(["get", "post"], function(a, b) {
        l[b] = function(a, c, e, d) {
            l.isFunction(c) && (d = d || e, e = c, c = void 0);
            return l.ajax({
                url: a,
                type: b,
                dataType: d,
                data: c,
                success: e
            })
        }
    });
    l._evalUrl = function(a) {
        return l.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    l.fn.extend({
        wrapAll: function(a) {
            var b;
            if (l.isFunction(a)) return this.each(function(b) {
                l(this).wrapAll(a.call(this, b))
            });
            this[0] && (b = l(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this));
            return this
        },
        wrapInner: function(a) {
            return l.isFunction(a) ? this.each(function(b) {
                l(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b =
                    l(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = l.isFunction(a);
            return this.each(function(c) {
                l(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                l.nodeName(this, "body") || l(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    l.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight
    };
    l.expr.filters.visible = function(a) {
        return !l.expr.filters.hidden(a)
    };
    var wb = /%20/g,
        gb = /\[\]$/,
        Ib = /\r?\n/g,
        bd = /^(?:submit|button|image|reset|file)$/i,
        gc = /^(?:input|select|textarea|keygen)/i;
    l.param = function(a, b) {
        var c, e = [],
            d = function(a, b) {
                b = l.isFunction(b) ? b() : null == b ? "" : b;
                e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        void 0 === b && (b = l.ajaxSettings && l.ajaxSettings.traditional);
        if (l.isArray(a) || a.jquery && !l.isPlainObject(a)) l.each(a, function() {
            d(this.name, this.value)
        });
        else
            for (c in a) ua(c, a[c], b, d);
        return e.join("&").replace(wb, "+")
    };
    l.fn.extend({
        serialize: function() {
            return l.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a =
                    l.prop(this, "elements");
                return a ? l.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !l(this).is(":disabled") && gc.test(this.nodeName) && !bd.test(a) && (this.checked || !Qa.test(a))
            }).map(function(a, b) {
                var c = l(this).val();
                return null == c ? null : l.isArray(c) ? l.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Ib, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Ib, "\r\n")
                }
            }).get()
        }
    });
    l.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var $a = 0,
        xb = {},
        Pb = {
            0: 200,
            1223: 204
        },
        Y =
        l.ajaxSettings.xhr();
    b.attachEvent && b.attachEvent("onunload", function() {
        for (var a in xb) xb[a]()
    });
    X.cors = !!Y && "withCredentials" in Y;
    X.ajax = Y = !!Y;
    l.ajaxTransport(function(a) {
        var b;
        if (X.cors || Y && !a.crossDomain) return {
            send: function(c, e) {
                var d, f = a.xhr(),
                    h = ++$a;
                f.open(a.type, a.url, a.async, a.username, a.password);
                if (a.xhrFields)
                    for (d in a.xhrFields) f[d] = a.xhrFields[d];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType);
                a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (d in c) f.setRequestHeader(d, c[d]);
                b = function(a) {
                    return function() {
                        b && (delete xb[h], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? e(f.status, f.statusText) : e(Pb[f.status] || f.status, f.statusText, "string" === typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                };
                f.onload = b();
                f.onerror = b("error");
                b = xb[h] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (k) {
                    if (b) throw k;
                }
            },
            abort: function() {
                b && b()
            }
        }
    });
    l.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                l.globalEval(a);
                return a
            }
        }
    });
    l.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET")
    });
    l.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, d) {
                    b = l("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove();
                        c = null;
                        a && d("error" === a.type ? 404 : 200, a.type)
                    });
                    R.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var ja = [],
        Jb = /(=)\?(?=&|$)|\?\?/;
    l.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = ja.pop() || l.expando + "_" + Ra++;
            this[a] = !0;
            return a
        }
    });
    l.ajaxPrefilter("json jsonp", function(a, c, e) {
        var d, f, h, k = !1 !== a.jsonp && (Jb.test(a.url) ? "url" : "string" === typeof a.data && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && Jb.test(a.data) && "data");
        if (k || "jsonp" === a.dataTypes[0]) return d = a.jsonpCallback = l.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, k ? a[k] = a[k].replace(Jb, "$1" +
            d) : !1 !== a.jsonp && (a.url += (Ob.test(a.url) ? "&" : "?") + a.jsonp + "=" + d), a.converters["script json"] = function() {
            h || l.error(d + " was not called");
            return h[0]
        }, a.dataTypes[0] = "json", f = b[d], b[d] = function() {
            h = arguments
        }, e.always(function() {
            b[d] = f;
            a[d] && (a.jsonpCallback = c.jsonpCallback, ja.push(d));
            h && l.isFunction(f) && f(h[0]);
            h = f = void 0
        }), "script"
    });
    l.parseHTML = function(a, b, c) {
        if (!a || "string" !== typeof a) return null;
        "boolean" === typeof b && (c = b, b = !1);
        b = b || R;
        var e = wa.exec(a);
        c = !c && [];
        if (e) return [b.createElement(e[1])];
        e = l.buildFragment([a], b, c);
        c && c.length && l(c).remove();
        return l.merge([], e.childNodes)
    };
    var ob = l.fn.load;
    l.fn.load = function(a, b, c) {
        if ("string" !== typeof a && ob) return ob.apply(this, arguments);
        var e, d, f, h = this,
            k = a.indexOf(" ");
        0 <= k && (e = l.trim(a.slice(k)), a = a.slice(0, k));
        l.isFunction(b) ? (c = b, b = void 0) : b && "object" === typeof b && (d = "POST");
        0 < h.length && l.ajax({
            url: a,
            type: d,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments;
            h.html(e ? l("<div>").append(l.parseHTML(a)).find(e) : a)
        }).complete(c && function(a, b) {
            h.each(c,
                f || [a.responseText, b, a])
        });
        return this
    };
    l.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        l.fn[b] = function(a) {
            return this.on(b, a)
        }
    });
    l.expr.filters.animated = function(a) {
        return l.grep(l.timers, function(b) {
            return a === b.elem
        }).length
    };
    var pa = b.document.documentElement;
    l.offset = {
        setOffset: function(a, b, c) {
            var e, d, f, h = l.css(a, "position"),
                k = l(a),
                m = {};
            "static" === h && (a.style.position = "relative");
            f = k.offset();
            d = l.css(a, "top");
            e = l.css(a, "left");
            ("absolute" === h ||
                "fixed" === h) && -1 < (d + e).indexOf("auto") ? (e = k.position(), d = e.top, e = e.left) : (d = parseFloat(d) || 0, e = parseFloat(e) || 0);
            l.isFunction(b) && (b = b.call(a, c, f));
            null != b.top && (m.top = b.top - f.top + d);
            null != b.left && (m.left = b.left - f.left + e);
            "using" in b ? b.using.call(a, m) : k.css(m)
        }
    };
    l.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                l.offset.setOffset(this, a, b)
            });
            var b, c;
            c = this[0];
            var e = {
                    top: 0,
                    left: 0
                },
                d = c && c.ownerDocument;
            if (d) {
                b = d.documentElement;
                if (!l.contains(b, c)) return e;
                "undefined" !== typeof c.getBoundingClientRect && (e = c.getBoundingClientRect());
                c = ta(d);
                return {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    e = {
                        top: 0,
                        left: 0
                    };
                "fixed" === l.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), l.nodeName(a[0], "html") || (e = a.offset()), e.top += l.css(a[0], "borderTopWidth", !0), e.left += l.css(a[0], "borderLeftWidth", !0));
                return {
                    top: b.top - e.top - l.css(c, "marginTop", !0),
                    left: b.left - e.left - l.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || pa; a && !l.nodeName(a, "html") && "static" === l.css(a, "position");) a = a.offsetParent;
                return a || pa
            })
        }
    });
    l.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var e = "pageYOffset" === c;
        l.fn[a] = function(d) {
            return xa(this, function(a, d, f) {
                var h = ta(a);
                if (void 0 === f) return h ? h[c] : a[d];
                h ? h.scrollTo(e ? b.pageXOffset : f, e ? f : b.pageYOffset) : a[d] = f
            }, a, d, arguments.length, null)
        }
    });
    l.each(["top", "left"], function(a, b) {
        l.cssHooks[b] = y(X.pixelPosition, function(a, c) {
            if (c) return c = r(a, b), zb.test(c) ? l(a).position()[b] + "px" : c
        })
    });
    l.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        l.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, e) {
            l.fn[e] = function(e, d) {
                var f = arguments.length && (c || "boolean" !== typeof e),
                    h = c || (!0 === e || !0 === d ? "margin" : "border");
                return xa(this, function(b, c, e) {
                    return l.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (c = b.documentElement, Math.max(b.body["scroll" +
                        a], c["scroll" + a], b.body["offset" + a], c["offset" + a], c["client" + a])) : void 0 === e ? l.css(b, c, h) : l.style(b, c, e, h)
                }, b, f ? e : void 0, f, null)
            }
        })
    });
    l.fn.size = function() {
        return this.length
    };
    l.fn.andSelf = l.fn.addBack;
    "function" === typeof define && define.amd && define("jquery", [], function() {
        return l
    });
    var Fa = b.jQuery,
        ab = b.$;
    l.noConflict = function(a) {
        b.$ === l && (b.$ = ab);
        a && b.jQuery === l && (b.jQuery = Fa);
        return l
    };
    "undefined" === typeof d && (b.jQuery = b.$ = l);
    return l
});
(function(b, d) {
    b.rails !== d && b.error("jquery-ujs has already been loaded!");
    var g, c = b(document);
    b.rails = g = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return b("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return b("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(a) {
            var b = g.csrfToken();
            b && a.setRequestHeader("X-CSRF-Token", b)
        },
        refreshCSRFTokens: function() {
            b('form input[name="' + g.csrfParam() +
                '"]').val(g.csrfToken())
        },
        fire: function(a, c, e) {
            c = b.Event(c);
            a.trigger(c, e);
            return !1 !== c.result
        },
        confirm: function(a) {
            return confirm(a)
        },
        ajax: function(a) {
            return b.ajax(a)
        },
        href: function(a) {
            return a[0].href
        },
        isRemote: function(a) {
            return a.data("remote") !== d && !1 !== a.data("remote")
        },
        handleRemote: function(a) {
            var c, e, p, h, k;
            if (g.fire(a, "ajax:before")) {
                h = a.data("with-credentials") || null;
                k = a.data("type") || b.ajaxSettings && b.ajaxSettings.dataType;
                if (a.is("form")) {
                    c = a.attr("method");
                    e = a.attr("action");
                    p = a.serializeArray();
                    var q = a.data("ujs:submit-button");
                    q && (p.push(q), a.data("ujs:submit-button", null))
                } else a.is(g.inputChangeSelector) ? (c = a.data("method"), e = a.data("url"), p = a.serialize(), a.data("params") && (p = p + "&" + a.data("params"))) : a.is(g.buttonClickSelector) ? (c = a.data("method") || "get", e = a.data("url"), p = a.serialize(), a.data("params") && (p = p + "&" + a.data("params"))) : (c = a.data("method"), e = g.href(a), p = a.data("params") || null);
                c = {
                    type: c || "GET",
                    data: p,
                    dataType: k,
                    beforeSend: function(b, c) {
                        c.dataType === d && b.setRequestHeader("accept",
                            "*/*;q=0.5, " + c.accepts.script);
                        if (g.fire(a, "ajax:beforeSend", [b, c])) a.trigger("ajax:send", b);
                        else return !1
                    },
                    success: function(b, c, e) {
                        a.trigger("ajax:success", [b, c, e])
                    },
                    complete: function(b, c) {
                        a.trigger("ajax:complete", [b, c])
                    },
                    error: function(b, c, e) {
                        a.trigger("ajax:error", [b, c, e])
                    },
                    crossDomain: g.isCrossDomain(e)
                };
                h && (c.xhrFields = {
                    withCredentials: h
                });
                e && (c.url = e);
                return g.ajax(c)
            }
            return !1
        },
        isCrossDomain: function(a) {
            var b = document.createElement("a");
            b.href = location.href;
            var c = document.createElement("a");
            try {
                return c.href = a, c.href = c.href, !(!(c.protocol && ":" !== c.protocol || c.host) || b.protocol + "//" + b.host === c.protocol + "//" + c.host)
            } catch (d) {
                return !0
            }
        },
        handleMethod: function(a) {
            var c = g.href(a),
                e = a.data("method");
            a = a.attr("target");
            var p = g.csrfToken(),
                h = g.csrfParam(),
                k = b('<form method="post" action="' + c + '"></form>'),
                e = '<input name="_method" value="' + e + '" type="hidden" />';
            h === d || p === d || g.isCrossDomain(c) || (e += '<input name="' + h + '" value="' + p + '" type="hidden" />');
            a && k.attr("target", a);
            k.hide().append(e).appendTo("body");
            k.submit()
        },
        formElements: function(a, c) {
            return a.is("form") ? b(a[0].elements).filter(c) : a.find(c)
        },
        disableFormElements: function(a) {
            g.formElements(a, g.disableSelector).each(function() {
                g.disableFormElement(b(this))
            })
        },
        disableFormElement: function(a) {
            var b, c;
            b = a.is("button") ? "html" : "val";
            c = a.data("disable-with");
            a.data("ujs:enable-with", a[b]());
            if (c !== d) a[b](c);
            a.prop("disabled", !0)
        },
        enableFormElements: function(a) {
            g.formElements(a, g.enableSelector).each(function() {
                g.enableFormElement(b(this))
            })
        },
        enableFormElement: function(a) {
            var b =
                a.is("button") ? "html" : "val";
            if ("undefined" !== typeof a.data("ujs:enable-with")) a[b](a.data("ujs:enable-with"));
            a.prop("disabled", !1)
        },
        allowAction: function(a) {
            var b = a.data("confirm"),
                c = !1,
                d;
            if (!b) return !0;
            if (g.fire(a, "confirm")) {
                try {
                    c = g.confirm(b)
                } catch (h) {
                    (console.error || console.log).call(console, h.stack || h)
                }
                d = g.fire(a, "confirm:complete", [c])
            }
            return c && d
        },
        blankInputs: function(a, c, e) {
            var d = b(),
                h, k, g = a.find(c || "input,textarea");
            g.each(function() {
                h = b(this);
                k = h.is("input[type=checkbox],input[type=radio]") ?
                    h.is(":checked") : !!h.val();
                if (k === e) {
                    if (h.is("input[type=radio]") && g.filter('input[type=radio]:checked[name="' + h.attr("name") + '"]').length) return !0;
                    d = d.add(h)
                }
            });
            return d.length ? d : !1
        },
        nonBlankInputs: function(a, b) {
            return g.blankInputs(a, b, !0)
        },
        stopEverything: function(a) {
            b(a.target).trigger("ujs:everythingStopped");
            a.stopImmediatePropagation();
            return !1
        },
        disableElement: function(a) {
            var b = a.data("disable-with");
            a.data("ujs:enable-with", a.html());
            b !== d && a.html(b);
            a.bind("click.railsDisable", function(a) {
                return g.stopEverything(a)
            })
        },
        enableElement: function(a) {
            a.data("ujs:enable-with") !== d && (a.html(a.data("ujs:enable-with")), a.removeData("ujs:enable-with"));
            a.unbind("click.railsDisable")
        }
    };
    g.fire(c, "rails:attachBindings") && (b.ajaxPrefilter(function(a, b, c) {
        a.crossDomain || g.CSRFProtection(c)
    }), b(window).on("pageshow.rails", function() {
        b(b.rails.enableSelector).each(function() {
            var a = b(this);
            a.data("ujs:enable-with") && b.rails.enableFormElement(a)
        });
        b(b.rails.linkDisableSelector).each(function() {
            var a = b(this);
            a.data("ujs:enable-with") &&
                b.rails.enableElement(a)
        })
    }), c.delegate(g.linkDisableSelector, "ajax:complete", function() {
        g.enableElement(b(this))
    }), c.delegate(g.buttonDisableSelector, "ajax:complete", function() {
        g.enableFormElement(b(this))
    }), c.delegate(g.linkClickSelector, "click.rails", function(a) {
        var c = b(this),
            e = c.data("method"),
            d = c.data("params"),
            h = a.metaKey || a.ctrlKey;
        if (!g.allowAction(c)) return g.stopEverything(a);
        !h && c.is(g.linkDisableSelector) && g.disableElement(c);
        if (g.isRemote(c)) {
            if (h && (!e || "GET" === e) && !d) return !0;
            a = g.handleRemote(c);
            !1 === a ? g.enableElement(c) : a.fail(function() {
                g.enableElement(c)
            });
            return !1
        }
        if (e) return g.handleMethod(c), !1
    }), c.delegate(g.buttonClickSelector, "click.rails", function(a) {
        var c = b(this);
        if (!g.allowAction(c) || !g.isRemote(c)) return g.stopEverything(a);
        c.is(g.buttonDisableSelector) && g.disableFormElement(c);
        a = g.handleRemote(c);
        !1 === a ? g.enableFormElement(c) : a.fail(function() {
            g.enableFormElement(c)
        });
        return !1
    }), c.delegate(g.inputChangeSelector, "change.rails", function(a) {
        var c = b(this);
        if (!g.allowAction(c) ||
            !g.isRemote(c)) return g.stopEverything(a);
        g.handleRemote(c);
        return !1
    }), c.delegate(g.formSubmitSelector, "submit.rails", function(a) {
        var c = b(this),
            e = g.isRemote(c),
            p;
        if (!g.allowAction(c) || c.attr("novalidate") === d && (p = g.blankInputs(c, g.requiredInputSelector, !1)) && g.fire(c, "ajax:aborted:required", [p])) return g.stopEverything(a);
        if (e) {
            if (a = g.nonBlankInputs(c, g.fileInputSelector)) return setTimeout(function() {
                g.disableFormElements(c)
            }, 13), (a = g.fire(c, "ajax:aborted:file", [a])) || setTimeout(function() {
                    g.enableFormElements(c)
                },
                13), a;
            g.handleRemote(c);
            return !1
        }
        setTimeout(function() {
            g.disableFormElements(c)
        }, 13)
    }), c.delegate(g.formInputClickSelector, "click.rails", function(a) {
        var c = b(this);
        if (!g.allowAction(c)) return g.stopEverything(a);
        a = (a = c.attr("name")) ? {
            name: a,
            value: c.val()
        } : null;
        c.closest("form").data("ujs:submit-button", a)
    }), c.delegate(g.formSubmitSelector, "ajax:send.rails", function(a) {
        this === a.target && g.disableFormElements(b(this))
    }), c.delegate(g.formSubmitSelector, "ajax:complete.rails", function(a) {
        this === a.target &&
            g.enableFormElements(b(this))
    }), b(function() {
        g.refreshCSRFTokens()
    }))
})(jQuery);
(function(b, d, g) {
    function c(a) {
        return a
    }

    function a(a) {
        a = decodeURIComponent(a.replace(e, " "));
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        return a
    }

    function f(a) {
        return p.json ? JSON.parse(a) : a
    }
    var e = /\+/g,
        p = b.cookie = function(e, k, q) {
            if (k !== g) {
                q = b.extend({}, p.defaults, q);
                null === k && (q.expires = -1);
                if ("number" === typeof q.expires) {
                    var m = q.expires,
                        t = q.expires = new Date;
                    t.setDate(t.getDate() + m)
                }
                k = p.json ? JSON.stringify(k) : String(k);
                return d.cookie = [encodeURIComponent(e), "=",
                    p.raw ? k : encodeURIComponent(k), q.expires ? "; expires=" + q.expires.toUTCString() : "", q.path ? "; path=" + q.path : "", q.domain ? "; domain=" + q.domain : "", q.secure ? "; secure" : ""
                ].join("")
            }
            k = p.raw ? c : a;
            q = d.cookie.split("; ");
            for (var m = e ? null : {}, t = 0, w = q.length; t < w; t++) {
                var v = q[t].split("="),
                    u = k(v.shift()),
                    v = k(v.join("="));
                if (e && e === u) {
                    m = f(v);
                    break
                }
                e || (m[u] = f(v))
            }
            return m
        };
    p.defaults = {};
    b.removeCookie = function(a, c) {
        return null !== b.cookie(a) ? (b.cookie(a, null, c), !0) : !1
    }
})(jQuery, document);
(function() {
    function b(a) {
        return function(b, c, e, d) {
            c = D(c, d, 4);
            var f = !C(b) && n.keys(b),
                h = (f || b).length,
                k = 0 < a ? 0 : h - 1;
            3 > arguments.length && (e = b[f ? f[k] : k], k += a);
            for (var m = c, p = e; 0 <= k && k < h; k += a) var g = f ? f[k] : k,
                p = m(p, b[g], g, b);
            return p
        }
    }

    function d(a) {
        return function(b, c, e) {
            c = s(c, e);
            e = z(b);
            for (var d = 0 < a ? 0 : e - 1; 0 <= d && d < e; d += a)
                if (c(b[d], d, b)) return d;
            return -1
        }
    }

    function g(a, b, c) {
        return function(e, d, f) {
            var h = 0,
                m = z(e);
            if ("number" == typeof f) 0 < a ? h = 0 <= f ? f : Math.max(f + m, h) : m = 0 <= f ? Math.min(f + 1, m) : f + m + 1;
            else if (c && f && m) return f =
                c(e, d), e[f] === d ? f : -1;
            if (d !== d) return f = b(k.call(e, h, m), n.isNaN), 0 <= f ? f + h : -1;
            for (f = 0 < a ? h : m - 1; 0 <= f && f < m; f += a)
                if (e[f] === d) return f;
            return -1
        }
    }

    function c(a, b) {
        var c = N.length,
            e = a.constructor,
            e = n.isFunction(e) && e.prototype || p,
            d = "constructor";
        for (n.has(a, d) && !n.contains(b, d) && b.push(d); c--;) d = N[c], d in a && a[d] !== e[d] && !n.contains(b, d) && b.push(d)
    }
    var a = this,
        f = a._,
        e = Array.prototype,
        p = Object.prototype,
        h = e.push,
        k = e.slice,
        q = p.toString,
        m = p.hasOwnProperty,
        t = Array.isArray,
        w = Object.keys,
        v = Function.prototype.bind,
        u = Object.create,
        x = function() {},
        n = function(a) {
            if (a instanceof n) return a;
            if (!(this instanceof n)) return new n(a);
            this._wrapped = a
        };
    "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports = n), exports._ = n) : a._ = n;
    n.VERSION = "1.8.3";
    var D = function(a, b, c) {
            if (void 0 === b) return a;
            switch (null == c ? 3 : c) {
                case 1:
                    return function(c) {
                        return a.call(b, c)
                    };
                case 2:
                    return function(c, e) {
                        return a.call(b, c, e)
                    };
                case 3:
                    return function(c, e, d) {
                        return a.call(b, c, e, d)
                    };
                case 4:
                    return function(c,
                        e, d, f) {
                        return a.call(b, c, e, d, f)
                    }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        s = function(a, b, c) {
            return null == a ? n.identity : n.isFunction(a) ? D(a, b, c) : n.isObject(a) ? n.matcher(a) : n.property(a)
        };
    n.iteratee = function(a, b) {
        return s(a, b, Infinity)
    };
    var r = function(a, b) {
            return function(c) {
                var e = arguments.length;
                if (2 > e || null == c) return c;
                for (var d = 1; d < e; d++)
                    for (var f = arguments[d], h = a(f), k = h.length, m = 0; m < k; m++) {
                        var p = h[m];
                        b && void 0 !== c[p] || (c[p] = f[p])
                    }
                return c
            }
        },
        y = function(a) {
            if (!n.isObject(a)) return {};
            if (u) return u(a);
            x.prototype = a;
            a = new x;
            x.prototype = null;
            return a
        },
        E = function(a) {
            return function(b) {
                return null == b ? void 0 : b[a]
            }
        },
        K = Math.pow(2, 53) - 1,
        z = E("length"),
        C = function(a) {
            a = z(a);
            return "number" == typeof a && 0 <= a && a <= K
        };
    n.each = n.forEach = function(a, b, c) {
        b = D(b, c);
        var e;
        if (C(a))
            for (c = 0, e = a.length; c < e; c++) b(a[c], c, a);
        else {
            var d = n.keys(a);
            c = 0;
            for (e = d.length; c < e; c++) b(a[d[c]], d[c], a)
        }
        return a
    };
    n.map = n.collect = function(a, b, c) {
        b = s(b, c);
        c = !C(a) && n.keys(a);
        for (var e = (c || a).length, d = Array(e), f = 0; f < e; f++) {
            var h = c ? c[f] : f;
            d[f] =
                b(a[h], h, a)
        }
        return d
    };
    n.reduce = n.foldl = n.inject = b(1);
    n.reduceRight = n.foldr = b(-1);
    n.find = n.detect = function(a, b, c) {
        b = C(a) ? n.findIndex(a, b, c) : n.findKey(a, b, c);
        if (void 0 !== b && -1 !== b) return a[b]
    };
    n.filter = n.select = function(a, b, c) {
        var e = [];
        b = s(b, c);
        n.each(a, function(a, c, d) {
            b(a, c, d) && e.push(a)
        });
        return e
    };
    n.reject = function(a, b, c) {
        return n.filter(a, n.negate(s(b)), c)
    };
    n.every = n.all = function(a, b, c) {
        b = s(b, c);
        c = !C(a) && n.keys(a);
        for (var e = (c || a).length, d = 0; d < e; d++) {
            var f = c ? c[d] : d;
            if (!b(a[f], f, a)) return !1
        }
        return !0
    };
    n.some = n.any = function(a, b, c) {
        b = s(b, c);
        c = !C(a) && n.keys(a);
        for (var e = (c || a).length, d = 0; d < e; d++) {
            var f = c ? c[d] : d;
            if (b(a[f], f, a)) return !0
        }
        return !1
    };
    n.contains = n.includes = n.include = function(a, b, c, e) {
        C(a) || (a = n.values(a));
        if ("number" != typeof c || e) c = 0;
        return 0 <= n.indexOf(a, b, c)
    };
    n.invoke = function(a, b) {
        var c = k.call(arguments, 2),
            e = n.isFunction(b);
        return n.map(a, function(a) {
            var d = e ? b : a[b];
            return null == d ? d : d.apply(a, c)
        })
    };
    n.pluck = function(a, b) {
        return n.map(a, n.property(b))
    };
    n.where = function(a, b) {
        return n.filter(a,
            n.matcher(b))
    };
    n.findWhere = function(a, b) {
        return n.find(a, n.matcher(b))
    };
    n.max = function(a, b, c) {
        var e = -Infinity,
            d = -Infinity,
            f;
        if (null == b && null != a) {
            a = C(a) ? a : n.values(a);
            for (var h = 0, k = a.length; h < k; h++) c = a[h], c > e && (e = c)
        } else b = s(b, c), n.each(a, function(a, c, h) {
            f = b(a, c, h);
            if (f > d || -Infinity === f && -Infinity === e) e = a, d = f
        });
        return e
    };
    n.min = function(a, b, c) {
        var e = Infinity,
            d = Infinity,
            f;
        if (null == b && null != a) {
            a = C(a) ? a : n.values(a);
            for (var h = 0, k = a.length; h < k; h++) c = a[h], c < e && (e = c)
        } else b = s(b, c), n.each(a, function(a, c, h) {
            f =
                b(a, c, h);
            if (f < d || Infinity === f && Infinity === e) e = a, d = f
        });
        return e
    };
    n.shuffle = function(a) {
        a = C(a) ? a : n.values(a);
        for (var b = a.length, c = Array(b), e = 0, d; e < b; e++) d = n.random(0, e), d !== e && (c[e] = c[d]), c[d] = a[e];
        return c
    };
    n.sample = function(a, b, c) {
        return null == b || c ? (C(a) || (a = n.values(a)), a[n.random(a.length - 1)]) : n.shuffle(a).slice(0, Math.max(0, b))
    };
    n.sortBy = function(a, b, c) {
        b = s(b, c);
        return n.pluck(n.map(a, function(a, c, e) {
            return {
                value: a,
                index: c,
                criteria: b(a, c, e)
            }
        }).sort(function(a, b) {
            var c = a.criteria,
                e = b.criteria;
            if (c !==
                e) {
                if (c > e || void 0 === c) return 1;
                if (c < e || void 0 === e) return -1
            }
            return a.index - b.index
        }), "value")
    };
    var da = function(a) {
        return function(b, c, e) {
            var d = {};
            c = s(c, e);
            n.each(b, function(e, f) {
                var h = c(e, f, b);
                a(d, e, h)
            });
            return d
        }
    };
    n.groupBy = da(function(a, b, c) {
        n.has(a, c) ? a[c].push(b) : a[c] = [b]
    });
    n.indexBy = da(function(a, b, c) {
        a[c] = b
    });
    n.countBy = da(function(a, b, c) {
        n.has(a, c) ? a[c]++ : a[c] = 1
    });
    n.toArray = function(a) {
        return a ? n.isArray(a) ? k.call(a) : C(a) ? n.map(a, n.identity) : n.values(a) : []
    };
    n.size = function(a) {
        return null == a ?
            0 : C(a) ? a.length : n.keys(a).length
    };
    n.partition = function(a, b, c) {
        b = s(b, c);
        var e = [],
            d = [];
        n.each(a, function(a, c, f) {
            (b(a, c, f) ? e : d).push(a)
        });
        return [e, d]
    };
    n.first = n.head = n.take = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : n.initial(a, a.length - b)
    };
    n.initial = function(a, b, c) {
        return k.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)))
    };
    n.last = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : n.rest(a, Math.max(0, a.length - b))
    };
    n.rest = n.tail = n.drop = function(a, b, c) {
        return k.call(a, null == b || c ?
            1 : b)
    };
    n.compact = function(a) {
        return n.filter(a, n.identity)
    };
    var F = function(a, b, c, e) {
        var d = [],
            f = 0;
        e = e || 0;
        for (var h = z(a); e < h; e++) {
            var k = a[e];
            if (C(k) && (n.isArray(k) || n.isArguments(k))) {
                b || (k = F(k, b, c));
                var m = 0,
                    p = k.length;
                for (d.length += p; m < p;) d[f++] = k[m++]
            } else c || (d[f++] = k)
        }
        return d
    };
    n.flatten = function(a, b) {
        return F(a, b, !1)
    };
    n.without = function(a) {
        return n.difference(a, k.call(arguments, 1))
    };
    n.uniq = n.unique = function(a, b, c, e) {
        n.isBoolean(b) || (e = c, c = b, b = !1);
        null != c && (c = s(c, e));
        e = [];
        for (var d = [], f = 0, h = z(a); f <
            h; f++) {
            var k = a[f],
                m = c ? c(k, f, a) : k;
            b ? (f && d === m || e.push(k), d = m) : c ? n.contains(d, m) || (d.push(m), e.push(k)) : n.contains(e, k) || e.push(k)
        }
        return e
    };
    n.union = function() {
        return n.uniq(F(arguments, !0, !0))
    };
    n.intersection = function(a) {
        for (var b = [], c = arguments.length, e = 0, d = z(a); e < d; e++) {
            var f = a[e];
            if (!n.contains(b, f)) {
                for (var h = 1; h < c && n.contains(arguments[h], f); h++);
                h === c && b.push(f)
            }
        }
        return b
    };
    n.difference = function(a) {
        var b = F(arguments, !0, !0, 1);
        return n.filter(a, function(a) {
            return !n.contains(b, a)
        })
    };
    n.zip = function() {
        return n.unzip(arguments)
    };
    n.unzip = function(a) {
        for (var b = a && n.max(a, z).length || 0, c = Array(b), e = 0; e < b; e++) c[e] = n.pluck(a, e);
        return c
    };
    n.object = function(a, b) {
        for (var c = {}, e = 0, d = z(a); e < d; e++) b ? c[a[e]] = b[e] : c[a[e][0]] = a[e][1];
        return c
    };
    n.findIndex = d(1);
    n.findLastIndex = d(-1);
    n.sortedIndex = function(a, b, c, e) {
        c = s(c, e, 1);
        b = c(b);
        e = 0;
        for (var d = z(a); e < d;) {
            var f = Math.floor((e + d) / 2);
            c(a[f]) < b ? e = f + 1 : d = f
        }
        return e
    };
    n.indexOf = g(1, n.findIndex, n.sortedIndex);
    n.lastIndexOf = g(-1, n.findLastIndex);
    n.range = function(a, b, c) {
        null == b && (b = a || 0, a = 0);
        c = c ||
            1;
        b = Math.max(Math.ceil((b - a) / c), 0);
        for (var e = Array(b), d = 0; d < b; d++, a += c) e[d] = a;
        return e
    };
    var A = function(a, b, c, e, d) {
        if (!(e instanceof b)) return a.apply(c, d);
        b = y(a.prototype);
        a = a.apply(b, d);
        return n.isObject(a) ? a : b
    };
    n.bind = function(a, b) {
        if (v && a.bind === v) return v.apply(a, k.call(arguments, 1));
        if (!n.isFunction(a)) throw new TypeError("Bind must be called on a function");
        var c = k.call(arguments, 2),
            e = function() {
                return A(a, e, b, this, c.concat(k.call(arguments)))
            };
        return e
    };
    n.partial = function(a) {
        var b = k.call(arguments,
                1),
            c = function() {
                for (var e = 0, d = b.length, f = Array(d), h = 0; h < d; h++) f[h] = b[h] === n ? arguments[e++] : b[h];
                for (; e < arguments.length;) f.push(arguments[e++]);
                return A(a, c, this, this, f)
            };
        return c
    };
    n.bindAll = function(a) {
        var b, c = arguments.length,
            e;
        if (1 >= c) throw Error("bindAll must be passed function names");
        for (b = 1; b < c; b++) e = arguments[b], a[e] = n.bind(a[e], a);
        return a
    };
    n.memoize = function(a, b) {
        var c = function(e) {
            var d = c.cache,
                f = "" + (b ? b.apply(this, arguments) : e);
            n.has(d, f) || (d[f] = a.apply(this, arguments));
            return d[f]
        };
        c.cache = {};
        return c
    };
    n.delay = function(a, b) {
        var c = k.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c)
        }, b)
    };
    n.defer = n.partial(n.delay, n, 1);
    n.throttle = function(a, b, c) {
        var e, d, f, h = null,
            k = 0;
        c || (c = {});
        var m = function() {
            k = !1 === c.leading ? 0 : n.now();
            h = null;
            f = a.apply(e, d);
            h || (e = d = null)
        };
        return function() {
            var p = n.now();
            k || !1 !== c.leading || (k = p);
            var g = b - (p - k);
            e = this;
            d = arguments;
            0 >= g || g > b ? (h && (clearTimeout(h), h = null), k = p, f = a.apply(e, d), h || (e = d = null)) : h || !1 === c.trailing || (h = setTimeout(m, g));
            return f
        }
    };
    n.debounce = function(a, b, c) {
        var e, d, f, h, k, m = function() {
            var p = n.now() - h;
            p < b && 0 <= p ? e = setTimeout(m, b - p) : (e = null, c || (k = a.apply(f, d), e || (f = d = null)))
        };
        return function() {
            f = this;
            d = arguments;
            h = n.now();
            var p = c && !e;
            e || (e = setTimeout(m, b));
            p && (k = a.apply(f, d), f = d = null);
            return k
        }
    };
    n.wrap = function(a, b) {
        return n.partial(b, a)
    };
    n.negate = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    };
    n.compose = function() {
        var a = arguments,
            b = a.length - 1;
        return function() {
            for (var c = b, e = a[b].apply(this, arguments); c--;) e = a[c].call(this,
                e);
            return e
        }
    };
    n.after = function(a, b) {
        return function() {
            if (1 > --a) return b.apply(this, arguments)
        }
    };
    n.before = function(a, b) {
        var c;
        return function() {
            0 < --a && (c = b.apply(this, arguments));
            1 >= a && (b = null);
            return c
        }
    };
    n.once = n.partial(n.before, 2);
    var G = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        N = "valueOf isPrototypeOf toString propertyIsEnumerable hasOwnProperty toLocaleString".split(" ");
    n.keys = function(a) {
        if (!n.isObject(a)) return [];
        if (w) return w(a);
        var b = [],
            e;
        for (e in a) n.has(a, e) && b.push(e);
        G && c(a, b);
        return b
    };
    n.allKeys = function(a) {
        if (!n.isObject(a)) return [];
        var b = [],
            e;
        for (e in a) b.push(e);
        G && c(a, b);
        return b
    };
    n.values = function(a) {
        for (var b = n.keys(a), c = b.length, e = Array(c), d = 0; d < c; d++) e[d] = a[b[d]];
        return e
    };
    n.mapObject = function(a, b, c) {
        b = s(b, c);
        c = n.keys(a);
        for (var e = c.length, d = {}, f, h = 0; h < e; h++) f = c[h], d[f] = b(a[f], f, a);
        return d
    };
    n.pairs = function(a) {
        for (var b = n.keys(a), c = b.length, e = Array(c), d = 0; d < c; d++) e[d] = [b[d], a[b[d]]];
        return e
    };
    n.invert = function(a) {
        for (var b = {}, c = n.keys(a), e = 0, d = c.length; e < d; e++) b[a[c[e]]] =
            c[e];
        return b
    };
    n.functions = n.methods = function(a) {
        var b = [],
            c;
        for (c in a) n.isFunction(a[c]) && b.push(c);
        return b.sort()
    };
    n.extend = r(n.allKeys);
    n.extendOwn = n.assign = r(n.keys);
    n.findKey = function(a, b, c) {
        b = s(b, c);
        c = n.keys(a);
        for (var e, d = 0, f = c.length; d < f; d++)
            if (e = c[d], b(a[e], e, a)) return e
    };
    n.pick = function(a, b, c) {
        var e = {},
            d = a,
            f, h;
        if (null == d) return e;
        n.isFunction(b) ? (h = n.allKeys(d), f = D(b, c)) : (h = F(arguments, !1, !1, 1), f = function(a, b, c) {
            return b in c
        }, d = Object(d));
        for (var k = 0, m = h.length; k < m; k++) {
            var p = h[k],
                g = d[p];
            f(g, p, d) && (e[p] = g)
        }
        return e
    };
    n.omit = function(a, b, c) {
        if (n.isFunction(b)) b = n.negate(b);
        else {
            var e = n.map(F(arguments, !1, !1, 1), String);
            b = function(a, b) {
                return !n.contains(e, b)
            }
        }
        return n.pick(a, b, c)
    };
    n.defaults = r(n.allKeys, !0);
    n.create = function(a, b) {
        var c = y(a);
        b && n.extendOwn(c, b);
        return c
    };
    n.clone = function(a) {
        return n.isObject(a) ? n.isArray(a) ? a.slice() : n.extend({}, a) : a
    };
    n.tap = function(a, b) {
        b(a);
        return a
    };
    n.isMatch = function(a, b) {
        var c = n.keys(b),
            e = c.length;
        if (null == a) return !e;
        for (var d = Object(a), f = 0; f < e; f++) {
            var h =
                c[f];
            if (b[h] !== d[h] || !(h in d)) return !1
        }
        return !0
    };
    var H = function(a, b, c, e) {
        if (a === b) return 0 !== a || 1 / a === 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof n && (a = a._wrapped);
        b instanceof n && (b = b._wrapped);
        var d = q.call(a);
        if (d !== q.call(b)) return !1;
        switch (d) {
            case "[object RegExp]":
            case "[object String]":
                return "" + a === "" + b;
            case "[object Number]":
                return +a !== +a ? +b !== +b : 0 === +a ? 1 / +a === 1 / b : +a === +b;
            case "[object Date]":
            case "[object Boolean]":
                return +a === +b
        }
        d = "[object Array]" === d;
        if (!d) {
            if ("object" != typeof a ||
                "object" != typeof b) return !1;
            var f = a.constructor,
                h = b.constructor;
            if (f !== h && !(n.isFunction(f) && f instanceof f && n.isFunction(h) && h instanceof h) && "constructor" in a && "constructor" in b) return !1
        }
        c = c || [];
        e = e || [];
        for (f = c.length; f--;)
            if (c[f] === a) return e[f] === b;
        c.push(a);
        e.push(b);
        if (d) {
            f = a.length;
            if (f !== b.length) return !1;
            for (; f--;)
                if (!H(a[f], b[f], c, e)) return !1
        } else {
            d = n.keys(a);
            f = d.length;
            if (n.keys(b).length !== f) return !1;
            for (; f--;)
                if (h = d[f], !n.has(b, h) || !H(a[h], b[h], c, e)) return !1
        }
        c.pop();
        e.pop();
        return !0
    };
    n.isEqual = function(a, b) {
        return H(a, b)
    };
    n.isEmpty = function(a) {
        return null == a ? !0 : C(a) && (n.isArray(a) || n.isString(a) || n.isArguments(a)) ? 0 === a.length : 0 === n.keys(a).length
    };
    n.isElement = function(a) {
        return !(!a || 1 !== a.nodeType)
    };
    n.isArray = t || function(a) {
        return "[object Array]" === q.call(a)
    };
    n.isObject = function(a) {
        var b = typeof a;
        return "function" === b || "object" === b && !!a
    };
    n.each("Arguments Function String Number Date RegExp Error".split(" "), function(a) {
        n["is" + a] = function(b) {
            return q.call(b) === "[object " + a + "]"
        }
    });
    n.isArguments(arguments) || (n.isArguments = function(a) {
        return n.has(a, "callee")
    });
    "function" != typeof /./ && "object" != typeof Int8Array && (n.isFunction = function(a) {
        return "function" == typeof a || !1
    });
    n.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    };
    n.isNaN = function(a) {
        return n.isNumber(a) && a !== +a
    };
    n.isBoolean = function(a) {
        return !0 === a || !1 === a || "[object Boolean]" === q.call(a)
    };
    n.isNull = function(a) {
        return null === a
    };
    n.isUndefined = function(a) {
        return void 0 === a
    };
    n.has = function(a, b) {
        return null != a &&
            m.call(a, b)
    };
    n.noConflict = function() {
        a._ = f;
        return this
    };
    n.identity = function(a) {
        return a
    };
    n.constant = function(a) {
        return function() {
            return a
        }
    };
    n.noop = function() {};
    n.property = E;
    n.propertyOf = function(a) {
        return null == a ? function() {} : function(b) {
            return a[b]
        }
    };
    n.matcher = n.matches = function(a) {
        a = n.extendOwn({}, a);
        return function(b) {
            return n.isMatch(b, a)
        }
    };
    n.times = function(a, b, c) {
        var e = Array(Math.max(0, a));
        b = D(b, c, 1);
        for (c = 0; c < a; c++) e[c] = b(c);
        return e
    };
    n.random = function(a, b) {
        null == b && (b = a, a = 0);
        return a + Math.floor(Math.random() *
            (b - a + 1))
    };
    n.now = Date.now || function() {
        return (new Date).getTime()
    };
    t = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    };
    r = n.invert(t);
    E = function(a) {
        var b = function(b) {
                return a[b]
            },
            c = "(?:" + n.keys(a).join("|") + ")",
            e = RegExp(c),
            d = RegExp(c, "g");
        return function(a) {
            a = null == a ? "" : "" + a;
            return e.test(a) ? a.replace(d, b) : a
        }
    };
    n.escape = E(t);
    n.unescape = E(r);
    n.result = function(a, b, c) {
        b = null == a ? void 0 : a[b];
        void 0 === b && (b = c);
        return n.isFunction(b) ? b.call(a) : b
    };
    var V = 0;
    n.uniqueId = function(a) {
        var b =
            ++V + "";
        return a ? a + b : b
    };
    n.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var ga = /(.)^/,
        Z = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        ya = /\\|'|\r|\n|\u2028|\u2029/g,
        ua = function(a) {
            return "\\" + Z[a]
        };
    n.template = function(a, b, c) {
        !b && c && (b = c);
        b = n.defaults({}, b, n.templateSettings);
        c = RegExp([(b.escape || ga).source, (b.interpolate || ga).source, (b.evaluate || ga).source].join("|") + "|$", "g");
        var e = 0,
            d = "__p+='";
        a.replace(c, function(b,
            c, f, h, k) {
            d += a.slice(e, k).replace(ya, ua);
            e = k + b.length;
            c ? d += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : f ? d += "'+\n((__t=(" + f + "))==null?'':__t)+\n'" : h && (d += "';\n" + h + "\n__p+='");
            return b
        });
        d += "';\n";
        b.variable || (d = "with(obj||{}){\n" + d + "}\n");
        d = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + d + "return __p;\n";
        try {
            var f = new Function(b.variable || "obj", "_", d)
        } catch (h) {
            throw h.source = d, h;
        }
        c = function(a) {
            return f.call(this, a, n)
        };
        c.source = "function(" + (b.variable ||
            "obj") + "){\n" + d + "}";
        return c
    };
    n.chain = function(a) {
        a = n(a);
        a._chain = !0;
        return a
    };
    var ta = function(a, b) {
        return a._chain ? n(b).chain() : b
    };
    n.mixin = function(a) {
        n.each(n.functions(a), function(b) {
            var c = n[b] = a[b];
            n.prototype[b] = function() {
                var a = [this._wrapped];
                h.apply(a, arguments);
                return ta(this, c.apply(n, a))
            }
        })
    };
    n.mixin(n);
    n.each("pop push reverse shift sort splice unshift".split(" "), function(a) {
        var b = e[a];
        n.prototype[a] = function() {
            var c = this._wrapped;
            b.apply(c, arguments);
            "shift" !== a && "splice" !== a || 0 !== c.length ||
                delete c[0];
            return ta(this, c)
        }
    });
    n.each(["concat", "join", "slice"], function(a) {
        var b = e[a];
        n.prototype[a] = function() {
            return ta(this, b.apply(this._wrapped, arguments))
        }
    });
    n.prototype.value = function() {
        return this._wrapped
    };
    n.prototype.valueOf = n.prototype.toJSON = n.prototype.value;
    n.prototype.toString = function() {
        return "" + this._wrapped
    };
    "function" === typeof define && define.amd && define("underscore", [], function() {
        return n
    })
}).call(this);
! function(b, d) {
    function g(a, b) {
        var c;
        a && (c = a.prototype[b]) && (a.prototype[b] = function() {
            arguments[0] = arguments[0].replace(/@([\w\u00c0-\uFFFF\-]+)/g, '[role~="$1"]');
            return c.apply(this, arguments)
        })
    }

    function c(a) {
        for (var b = 0; b < d.length; b++) g(a, d[b])
    }
    c(b.Element);
    c(b.Document)
}(this, "querySelector querySelectorAll webkitMatchesSelector mozMatchesSelector oMatchesSelector matchesSelector".split(" "));
! function(b) {
    function d(c, a, d) {
        var e = c[a];
        e && (c[a] = function() {
            arguments[d] = arguments[d].replace(/@([\w\u00c0-\uFFFF\-]+)/g, '[role~="$1"]');
            return e.apply(c, arguments)
        }, b.extend(c[a], e))
    }

    function g(c, a) {
        for (var d, e = [], p = b.trim(c).split(/\s+/), h = 0; h < p.length; h++) d = p[h], ~b.inArray(d, e) || a && ~b.inArray(d, a) || e.push(d);
        return e
    }
    d(b, "find", 0);
    d(b, "multiFilter", 0);
    d(b.find, "matchesSelector", 1);
    d(b.find, "matches", 0);
    b.extend(b.fn, {
        roles: function() {
            return g(this.attr("role"))
        },
        hasRole: function(b) {
            b = g(b);
            for (var a =
                    0; a < b.length; a++)
                if (!this.is("@" + b[a])) return !1;
            return !0
        },
        addRole: function(c) {
            return this.hasRole(c) ? this : this.each(function(a, d) {
                var e = b(d);
                e.attr("role", g(e.attr("role") + " " + c).join(" "))
            })
        },
        removeRole: function(c) {
            return this.hasRole(c) ? this.each(function(a, d) {
                var e = b(d);
                e.attr("role", g(e.attr("role"), g(c)).join(" "))
            }) : this
        },
        toggleRole: function(b) {
            b = g(b);
            for (var a = 0; a < b.length; a++) this[this.hasRole(b[a]) ? "removeRole" : "addRole"].call(this, b[a]);
            return this
        }
    })
}(jQuery);
"use strict";

function _typeof(b) {
    return b && "undefined" !== typeof Symbol && b.constructor === Symbol ? "symbol" : typeof b
}
var windowIsDefined = "object" === ("undefined" === typeof window ? "undefined" : _typeof(window));
(function(b) {
    if ("function" === typeof define && define.amd) define(["jquery"], b);
    else if ("object" === ("undefined" === typeof module ? "undefined" : _typeof(module)) && module.exports) {
        var d;
        try {
            d = require("jquery")
        } catch (g) {
            d = null
        }
        module.exports = b(d)
    } else window && (window.Slider = b(window.jQuery))
})(function(b) {
    windowIsDefined && !window.console && (window.console = {});
    windowIsDefined && !window.console.log && (window.console.log = function() {});
    windowIsDefined && !window.console.warn && (window.console.warn = function() {});
    var d;
    (function(b) {
        function c() {}
        var a = Array.prototype.slice;
        (function(b) {
            function e(a) {
                a.prototype.option || (a.prototype.option = function(a) {
                    b.isPlainObject(a) && (this.options = b.extend(!0, this.options, a))
                })
            }

            function d(c, e) {
                b.fn[c] = function(d) {
                    if ("string" === typeof d) {
                        for (var p = a.call(arguments, 1), g = 0, v = this.length; g < v; g++) {
                            var u = b.data(this[g], c);
                            if (u)
                                if (b.isFunction(u[d]) && "_" !== d.charAt(0)) {
                                    var x = u[d].apply(u, p);
                                    if (void 0 !== x && x !== u) return x
                                } else h("no such method '" + d + "' for " + c + " instance");
                            else h("cannot call methods on " +
                                c + " prior to initialization; attempted to call '" + d + "'")
                        }
                        return this
                    }
                    p = this.map(function() {
                        var a = b.data(this, c);
                        a ? (a.option(d), a._init()) : (a = new e(this, d), b.data(this, c, a));
                        return b(this)
                    });
                    return !p || 1 < p.length ? p : p[0]
                }
            }
            if (b) {
                var h = "undefined" === typeof console ? c : function(a) {
                    console.error(a)
                };
                b.bridget = function(a, b) {
                    e(b);
                    d(a, b)
                };
                return b.bridget
            }
        })(b)
    })(b);
    (function(b) {
        function c(a, c) {
            function d(a, b) {
                var c = "data-slider-" + b.replace(/_/g, "-"),
                    c = a.getAttribute(c);
                try {
                    return JSON.parse(c)
                } catch (e) {
                    return c
                }
            }
            this._state = {
                value: null,
                enabled: null,
                offset: null,
                size: null,
                percentage: null,
                inDrag: !1,
                over: !1
            };
            "string" === typeof a ? this.element = document.querySelector(a) : a instanceof HTMLElement && (this.element = a);
            c = c ? c : {};
            for (var k = Object.keys(this.defaultOptions), q = 0; q < k.length; q++) {
                var m = k[q],
                    t = c[m],
                    t = "undefined" !== typeof t ? t : d(this.element, m),
                    t = null !== t ? t : this.defaultOptions[m];
                this.options || (this.options = {});
                this.options[m] = t
            }
            "vertical" !== this.options.orientation || "top" !== this.options.tooltip_position && "bottom" !==
                this.options.tooltip_position ? "horizontal" !== this.options.orientation || "left" !== this.options.tooltip_position && "right" !== this.options.tooltip_position || (this.options.tooltip_position = "top") : this.options.tooltip_position = "right";
            var k = this.element.style.width,
                m = !1,
                t = this.element.parentNode,
                w, v, u, x, n;
            if (this.sliderElem) m = !0;
            else {
                this.sliderElem = document.createElement("div");
                this.sliderElem.className = "slider";
                var D = document.createElement("div");
                D.className = "slider-track";
                v = document.createElement("div");
                v.className = "slider-track-low";
                w = document.createElement("div");
                w.className = "slider-selection";
                u = document.createElement("div");
                u.className = "slider-track-high";
                x = document.createElement("div");
                x.className = "slider-handle min-slider-handle";
                x.setAttribute("role", "slider");
                x.setAttribute("aria-valuemin", this.options.min);
                x.setAttribute("aria-valuemax", this.options.max);
                n = document.createElement("div");
                n.className = "slider-handle max-slider-handle";
                n.setAttribute("role", "slider");
                n.setAttribute("aria-valuemin",
                    this.options.min);
                n.setAttribute("aria-valuemax", this.options.max);
                D.appendChild(v);
                D.appendChild(w);
                D.appendChild(u);
                this.rangeHighlightElements = [];
                if (Array.isArray(this.options.rangeHighlights) && 0 < this.options.rangeHighlights.length)
                    for (q = 0; q < this.options.rangeHighlights.length; q++) {
                        var s = document.createElement("div");
                        s.className = "slider-rangeHighlight slider-selection";
                        this.rangeHighlightElements.push(s);
                        D.appendChild(s)
                    }(q = Array.isArray(this.options.labelledby)) && this.options.labelledby[0] && x.setAttribute("aria-labelledby",
                        this.options.labelledby[0]);
                q && this.options.labelledby[1] && n.setAttribute("aria-labelledby", this.options.labelledby[1]);
                !q && this.options.labelledby && (x.setAttribute("aria-labelledby", this.options.labelledby), n.setAttribute("aria-labelledby", this.options.labelledby));
                this.ticks = [];
                if (Array.isArray(this.options.ticks) && 0 < this.options.ticks.length) {
                    this.ticksContainer = document.createElement("div");
                    this.ticksContainer.className = "slider-tick-container";
                    for (q = 0; q < this.options.ticks.length; q++) s = document.createElement("div"),
                        s.className = "slider-tick", this.ticks.push(s), this.ticksContainer.appendChild(s);
                    w.className += " tick-slider-selection"
                }
                this.tickLabels = [];
                if (Array.isArray(this.options.ticks_labels) && 0 < this.options.ticks_labels.length)
                    for (this.tickLabelContainer = document.createElement("div"), this.tickLabelContainer.className = "slider-tick-label-container", q = 0; q < this.options.ticks_labels.length; q++) {
                        var s = document.createElement("div"),
                            r = 0 === this.options.ticks_positions.length,
                            r = this.options.reversed && r ? this.options.ticks_labels.length -
                            (q + 1) : q;
                        s.className = "slider-tick-label";
                        s.innerHTML = this.options.ticks_labels[r];
                        this.tickLabels.push(s);
                        this.tickLabelContainer.appendChild(s)
                    }
                q = function(a) {
                    var b = document.createElement("div");
                    b.className = "tooltip-arrow";
                    var c = document.createElement("div");
                    c.className = "tooltip-inner";
                    a.appendChild(b);
                    a.appendChild(c)
                };
                s = document.createElement("div");
                s.className = "tooltip tooltip-main";
                s.setAttribute("role", "presentation");
                q(s);
                r = document.createElement("div");
                r.className = "tooltip tooltip-min";
                r.setAttribute("role",
                    "presentation");
                q(r);
                var y = document.createElement("div");
                y.className = "tooltip tooltip-max";
                y.setAttribute("role", "presentation");
                q(y);
                this.sliderElem.appendChild(D);
                this.sliderElem.appendChild(s);
                this.sliderElem.appendChild(r);
                this.sliderElem.appendChild(y);
                this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer);
                this.ticksContainer && this.sliderElem.appendChild(this.ticksContainer);
                this.sliderElem.appendChild(x);
                this.sliderElem.appendChild(n);
                t.insertBefore(this.sliderElem, this.element);
                this.element.style.display = "none"
            }
            b && (this.$element = b(this.element), this.$sliderElem = b(this.sliderElem));
            this.eventToCallbackMap = {};
            this.sliderElem.id = this.options.id;
            this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
            this.touchY = this.touchX = 0;
            this.tooltip = this.sliderElem.querySelector(".tooltip-main");
            this.tooltipInner = this.tooltip.querySelector(".tooltip-inner");
            this.tooltip_min = this.sliderElem.querySelector(".tooltip-min");
            this.tooltipInner_min =
                this.tooltip_min.querySelector(".tooltip-inner");
            this.tooltip_max = this.sliderElem.querySelector(".tooltip-max");
            this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner");
            f[this.options.scale] && (this.options.scale = f[this.options.scale]);
            !0 === m && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "top",
                "width", "height"
            ].forEach(function(a) {
                this._removeProperty(this.trackLow, a);
                this._removeProperty(this.trackSelection, a);
                this._removeProperty(this.trackHigh, a)
            }, this), [this.handle1, this.handle2].forEach(function(a) {
                this._removeProperty(a, "left");
                this._removeProperty(a, "top")
            }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function(a) {
                this._removeProperty(a, "left");
                this._removeProperty(a, "top");
                this._removeProperty(a, "margin-left");
                this._removeProperty(a, "margin-top");
                this._removeClass(a,
                    "right");
                this._removeClass(a, "top")
            }, this));
            "vertical" === this.options.orientation ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = k, this.options.orientation = "horizontal", this.stylePos = "left", this.mousePos = "pageX", this.sizePos = "offsetWidth");
            this._setTooltipPosition();
            Array.isArray(this.options.ticks) && 0 < this.options.ticks.length && (this.options.max =
                Math.max.apply(Math, this.options.ticks), this.options.min = Math.min.apply(Math, this.options.ticks));
            Array.isArray(this.options.value) ? (this.options.range = !0, this._state.value = this.options.value) : this._state.value = this.options.range ? [this.options.value, this.options.max] : this.options.value;
            this.trackLow = v || this.trackLow;
            this.trackSelection = w || this.trackSelection;
            this.trackHigh = u || this.trackHigh;
            "none" === this.options.selection && (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"),
                this._addClass(this.trackHigh, "hide"));
            this.handle1 = x || this.handle1;
            this.handle2 = n || this.handle2;
            if (!0 === m)
                for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), q = 0; q < this.ticks.length; q++) this._removeClass(this.ticks[q], "round triangle hide");
            if (-1 !== ["round", "triangle", "custom"].indexOf(this.options.handle))
                for (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle), q = 0; q < this.ticks.length; q++) this._addClass(this.ticks[q],
                    this.options.handle);
            this._state.offset = this._offset(this.sliderElem);
            this._state.size = this.sliderElem[this.sizePos];
            this.setValue(this._state.value);
            this.handle1Keydown = this._keydown.bind(this, 0);
            this.handle1.addEventListener("keydown", this.handle1Keydown, !1);
            this.handle2Keydown = this._keydown.bind(this, 1);
            this.handle2.addEventListener("keydown", this.handle2Keydown, !1);
            this.mousedown = this._mousedown.bind(this);
            this.touchstart = this._touchstart.bind(this);
            this.touchmove = this._touchmove.bind(this);
            this.touchCapable &&
                (this.sliderElem.addEventListener("touchstart", this.touchstart, !1), this.sliderElem.addEventListener("touchmove", this.touchmove, !1));
            this.sliderElem.addEventListener("mousedown", this.mousedown, !1);
            this.resize = this._resize.bind(this);
            window.addEventListener("resize", this.resize, !1);
            "hide" === this.options.tooltip ? (this._addClass(this.tooltip, "hide"), this._addClass(this.tooltip_min, "hide"), this._addClass(this.tooltip_max, "hide")) : "always" === this.options.tooltip ? (this._showTooltip(), this._alwaysShowTooltip = !0) : (this.showTooltip = this._showTooltip.bind(this), this.hideTooltip = this._hideTooltip.bind(this), this.sliderElem.addEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.addEventListener("mouseleave", this.hideTooltip, !1), this.handle1.addEventListener("focus", this.showTooltip, !1), this.handle1.addEventListener("blur", this.hideTooltip, !1), this.handle2.addEventListener("focus", this.showTooltip, !1), this.handle2.addEventListener("blur", this.hideTooltip, !1));
            this.options.enabled ? this.enable() :
                this.disable()
        }
        var a = {
                formatInvalidInputErrorMsg: function(a) {
                    return "Invalid input value '" + a + "' passed in"
                },
                callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
            },
            f = {
                linear: {
                    toValue: function(a) {
                        var b = a / 100 * (this.options.max - this.options.min),
                            c = !0;
                        if (0 < this.options.ticks_positions.length) {
                            for (var d, f, m, b = 0, c = 1; c < this.options.ticks_positions.length; c++)
                                if (a <=
                                    this.options.ticks_positions[c]) {
                                    d = this.options.ticks[c - 1];
                                    m = this.options.ticks_positions[c - 1];
                                    f = this.options.ticks[c];
                                    b = this.options.ticks_positions[c];
                                    break
                                }
                            b = d + (a - m) / (b - m) * (f - d);
                            c = !1
                        }
                        a = (c ? this.options.min : 0) + Math.round(b / this.options.step) * this.options.step;
                        return a < this.options.min ? this.options.min : a > this.options.max ? this.options.max : a
                    },
                    toPercentage: function(a) {
                        if (this.options.max === this.options.min) return 0;
                        if (0 < this.options.ticks_positions.length) {
                            for (var b, c, d, f = 0, m = 0; m < this.options.ticks.length; m++)
                                if (a <=
                                    this.options.ticks[m]) {
                                    b = 0 < m ? this.options.ticks[m - 1] : 0;
                                    d = 0 < m ? this.options.ticks_positions[m - 1] : 0;
                                    c = this.options.ticks[m];
                                    f = this.options.ticks_positions[m];
                                    break
                                }
                            if (0 < m) return d + (a - b) / (c - b) * (f - d)
                        }
                        return 100 * (a - this.options.min) / (this.options.max - this.options.min)
                    }
                },
                logarithmic: {
                    toValue: function(a) {
                        var b = 0 === this.options.min ? 0 : Math.log(this.options.min),
                            c = Math.log(this.options.max);
                        a = Math.exp(b + (c - b) * a / 100);
                        a = this.options.min + Math.round((a - this.options.min) / this.options.step) * this.options.step;
                        return a <
                            this.options.min ? this.options.min : a > this.options.max ? this.options.max : a
                    },
                    toPercentage: function(a) {
                        if (this.options.max === this.options.min) return 0;
                        var b = Math.log(this.options.max),
                            c = 0 === this.options.min ? 0 : Math.log(this.options.min);
                        return 100 * ((0 === a ? 0 : Math.log(a)) - c) / (b - c)
                    }
                }
            };
        d = function(a, b) {
            c.call(this, a, b);
            return this
        };
        d.prototype = {
            _init: function() {},
            constructor: d,
            defaultOptions: {
                id: "",
                min: 0,
                max: 10,
                step: 1,
                precision: 0,
                orientation: "horizontal",
                value: 5,
                range: !1,
                selection: "before",
                tooltip: "show",
                tooltip_split: !1,
                handle: "round",
                reversed: !1,
                enabled: !0,
                formatter: function(a) {
                    return Array.isArray(a) ? a[0] + " : " + a[1] : a
                },
                natural_arrow_keys: !1,
                ticks: [],
                ticks_positions: [],
                ticks_labels: [],
                ticks_snap_bounds: 0,
                scale: "linear",
                focus: !1,
                tooltip_position: null,
                labelledby: null,
                rangeHighlights: []
            },
            getElement: function() {
                return this.sliderElem
            },
            getValue: function() {
                return this.options.range ? this._state.value : this._state.value[0]
            },
            setValue: function(a, b, c) {
                a || (a = 0);
                var d = this.getValue();
                this._state.value = this._validateInputValue(a);
                a = this._applyPrecision.bind(this);
                this.options.range ? (this._state.value[0] = a(this._state.value[0]), this._state.value[1] = a(this._state.value[1]), this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0])), this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]))) : (this._state.value = a(this._state.value), this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))], this._addClass(this.handle2, "hide"),
                    this._state.value[1] = "after" === this.options.selection ? this.options.max : this.options.min);
                this._state.percentage = this.options.max > this.options.min ? [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), 100 * this.options.step / (this.options.max - this.options.min)] : [0, 0, 100];
                this._layout();
                a = this.options.range ? this._state.value : this._state.value[0];
                this._setDataVal(a);
                !0 === b && this._trigger("slide", a);
                d !== a && !0 === c && this._trigger("change", {
                    oldValue: d,
                    newValue: a
                });
                return this
            },
            destroy: function() {
                this._removeSliderEventHandlers();
                this.sliderElem.parentNode.removeChild(this.sliderElem);
                this.element.style.display = "";
                this._cleanUpEventCallbacksMap();
                this.element.removeAttribute("data");
                b && (this._unbindJQueryEventHandlers(), this.$element.removeData("slider"))
            },
            disable: function() {
                this._state.enabled = !1;
                this.handle1.removeAttribute("tabindex");
                this.handle2.removeAttribute("tabindex");
                this._addClass(this.sliderElem, "slider-disabled");
                this._trigger("slideDisabled");
                return this
            },
            enable: function() {
                this._state.enabled = !0;
                this.handle1.setAttribute("tabindex", 0);
                this.handle2.setAttribute("tabindex", 0);
                this._removeClass(this.sliderElem, "slider-disabled");
                this._trigger("slideEnabled");
                return this
            },
            toggle: function() {
                this._state.enabled ? this.disable() : this.enable();
                return this
            },
            isEnabled: function() {
                return this._state.enabled
            },
            on: function(a, b) {
                this._bindNonQueryEventHandler(a, b);
                return this
            },
            off: function(a, c) {
                b ? (this.$element.off(a, c), this.$sliderElem.off(a, c)) : this._unbindNonQueryEventHandler(a,
                    c)
            },
            getAttribute: function(a) {
                return a ? this.options[a] : this.options
            },
            setAttribute: function(a, b) {
                this.options[a] = b;
                return this
            },
            refresh: function() {
                this._removeSliderEventHandlers();
                c.call(this, this.element, this.options);
                b && b.data(this.element, "slider", this);
                return this
            },
            relayout: function() {
                this._resize();
                this._layout();
                return this
            },
            _removeSliderEventHandlers: function() {
                this.handle1.removeEventListener("keydown", this.handle1Keydown, !1);
                this.handle2.removeEventListener("keydown", this.handle2Keydown, !1);
                this.showTooltip && (this.handle1.removeEventListener("focus", this.showTooltip, !1), this.handle2.removeEventListener("focus", this.showTooltip, !1));
                this.hideTooltip && (this.handle1.removeEventListener("blur", this.hideTooltip, !1), this.handle2.removeEventListener("blur", this.hideTooltip, !1));
                this.showTooltip && this.sliderElem.removeEventListener("mouseenter", this.showTooltip, !1);
                this.hideTooltip && this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, !1);
                this.sliderElem.removeEventListener("touchstart",
                    this.touchstart, !1);
                this.sliderElem.removeEventListener("touchmove", this.touchmove, !1);
                this.sliderElem.removeEventListener("mousedown", this.mousedown, !1);
                window.removeEventListener("resize", this.resize, !1)
            },
            _bindNonQueryEventHandler: function(a, b) {
                void 0 === this.eventToCallbackMap[a] && (this.eventToCallbackMap[a] = []);
                this.eventToCallbackMap[a].push(b)
            },
            _unbindNonQueryEventHandler: function(a, b) {
                var c = this.eventToCallbackMap[a];
                if (void 0 !== c)
                    for (var d = 0; d < c.length; d++)
                        if (c[d] === b) {
                            c.splice(d, 1);
                            break
                        }
            },
            _cleanUpEventCallbacksMap: function() {
                for (var a = Object.keys(this.eventToCallbackMap), b = 0; b < a.length; b++) this.eventToCallbackMap[a[b]] = null
            },
            _showTooltip: function() {
                !1 === this.options.tooltip_split ? (this._addClass(this.tooltip, "in"), this.tooltip_min.style.display = "none", this.tooltip_max.style.display = "none") : (this._addClass(this.tooltip_min, "in"), this._addClass(this.tooltip_max, "in"), this.tooltip.style.display = "none");
                this._state.over = !0
            },
            _hideTooltip: function() {
                !1 === this._state.inDrag && !0 !== this.alwaysShowTooltip &&
                    (this._removeClass(this.tooltip, "in"), this._removeClass(this.tooltip_min, "in"), this._removeClass(this.tooltip_max, "in"));
                this._state.over = !1
            },
            _layout: function() {
                var a;
                a = this.options.reversed ? [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]] : [this._state.percentage[0], this._state.percentage[1]];
                this.handle1.style[this.stylePos] = a[0] + "%";
                this.handle1.setAttribute("aria-valuenow", this._state.value[0]);
                this.handle2.style[this.stylePos] = a[1] + "%";
                this.handle2.setAttribute("aria-valuenow", this._state.value[1]);
                if (0 < this.rangeHighlightElements.length && Array.isArray(this.options.rangeHighlights) && 0 < this.options.rangeHighlights.length)
                    for (var b = 0; b < this.options.rangeHighlights.length; b++) {
                        var c = this._toPercentage(this.options.rangeHighlights[b].start),
                            d = this._toPercentage(this.options.rangeHighlights[b].end);
                        (c = this._createHighlightRange(c, d)) ? "vertical" === this.options.orientation ? (this.rangeHighlightElements[b].style.top = c.start + "%", this.rangeHighlightElements[b].style.height =
                            c.size + "%") : (this.rangeHighlightElements[b].style.left = c.start + "%", this.rangeHighlightElements[b].style.width = c.size + "%"): this.rangeHighlightElements[b].style.display = "none"
                    }
                if (Array.isArray(this.options.ticks) && 0 < this.options.ticks.length) {
                    b = "vertical" === this.options.orientation ? "height" : "width";
                    c = "vertical" === this.options.orientation ? "marginTop" : "marginLeft";
                    d = this._state.size / (this.options.ticks.length - 1);
                    if (this.tickLabelContainer) {
                        var f = 0;
                        if (0 === this.options.ticks_positions.length) "vertical" !==
                            this.options.orientation && (this.tickLabelContainer.style[c] = -d / 2 + "px"), f = this.tickLabelContainer.offsetHeight;
                        else
                            for (m = 0; m < this.tickLabelContainer.childNodes.length; m++) this.tickLabelContainer.childNodes[m].offsetHeight > f && (f = this.tickLabelContainer.childNodes[m].offsetHeight);
                        "horizontal" === this.options.orientation && (this.sliderElem.style.marginBottom = f + "px")
                    }
                    for (var m = 0; m < this.options.ticks.length; m++) f = this.options.ticks_positions[m] || this._toPercentage(this.options.ticks[m]), this.options.reversed &&
                        (f = 100 - f), this.ticks[m].style[this.stylePos] = f + "%", this._removeClass(this.ticks[m], "in-selection"), this.options.range ? f >= a[0] && f <= a[1] && this._addClass(this.ticks[m], "in-selection") : "after" === this.options.selection && f >= a[0] ? this._addClass(this.ticks[m], "in-selection") : "before" === this.options.selection && f <= a[0] && this._addClass(this.ticks[m], "in-selection"), this.tickLabels[m] && (this.tickLabels[m].style[b] = d + "px", "vertical" !== this.options.orientation && void 0 !== this.options.ticks_positions[m] ? (this.tickLabels[m].style.position =
                            "absolute", this.tickLabels[m].style[this.stylePos] = f + "%", this.tickLabels[m].style[c] = -d / 2 + "px") : "vertical" === this.options.orientation && (this.tickLabels[m].style.marginLeft = this.sliderElem.offsetWidth + "px", this.tickLabelContainer.style.marginTop = this.sliderElem.offsetWidth / 2 * -1 + "px"))
                }
                this.options.range ? (b = this.options.formatter(this._state.value), this._setText(this.tooltipInner, b), this.tooltip.style[this.stylePos] = (a[1] + a[0]) / 2 + "%", "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px"), "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px"), b = this.options.formatter(this._state.value[0]), this._setText(this.tooltipInner_min, b), b = this.options.formatter(this._state.value[1]), this._setText(this.tooltipInner_max, b), this.tooltip_min.style[this.stylePos] = a[0] +
                    "%", "vertical" === this.options.orientation ? this._css(this.tooltip_min, "margin-top", -this.tooltip_min.offsetHeight / 2 + "px") : this._css(this.tooltip_min, "margin-left", -this.tooltip_min.offsetWidth / 2 + "px"), this.tooltip_max.style[this.stylePos] = a[1] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip_max, "margin-top", -this.tooltip_max.offsetHeight / 2 + "px") : this._css(this.tooltip_max, "margin-left", -this.tooltip_max.offsetWidth / 2 + "px")) : (b = this.options.formatter(this._state.value[0]), this._setText(this.tooltipInner,
                    b), this.tooltip.style[this.stylePos] = a[0] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px"));
                "vertical" === this.options.orientation ? (this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(a[0], a[1]) + "%", this.trackSelection.style.top = Math.min(a[0], a[1]) + "%", this.trackSelection.style.height = Math.abs(a[0] - a[1]) + "%", this.trackHigh.style.bottom = "0", this.trackHigh.style.height =
                    100 - Math.min(a[0], a[1]) - Math.abs(a[0] - a[1]) + "%") : (this.trackLow.style.left = "0", this.trackLow.style.width = Math.min(a[0], a[1]) + "%", this.trackSelection.style.left = Math.min(a[0], a[1]) + "%", this.trackSelection.style.width = Math.abs(a[0] - a[1]) + "%", this.trackHigh.style.right = "0", this.trackHigh.style.width = 100 - Math.min(a[0], a[1]) - Math.abs(a[0] - a[1]) + "%", a = this.tooltip_min.getBoundingClientRect(), b = this.tooltip_max.getBoundingClientRect(), "bottom" === this.options.tooltip_position ? a.right > b.left ? (this._removeClass(this.tooltip_max,
                    "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = "", this.tooltip_max.style.bottom = "22px") : (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = this.tooltip_min.style.top, this.tooltip_max.style.bottom = "") : a.right > b.left ? (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max,
                    "top"), this.tooltip_max.style.top = this.tooltip_min.style.top))
            },
            _createHighlightRange: function(a, b) {
                return this._isHighlightRange(a, b) ? a > b ? {
                    start: b,
                    size: a - b
                } : {
                    start: a,
                    size: b - a
                } : null
            },
            _isHighlightRange: function(a, b) {
                return 0 <= a && 100 >= a && 0 <= b && 100 >= b ? !0 : !1
            },
            _resize: function(a) {
                this._state.offset = this._offset(this.sliderElem);
                this._state.size = this.sliderElem[this.sizePos];
                this._layout()
            },
            _removeProperty: function(a, b) {
                a.style.removeProperty ? a.style.removeProperty(b) : a.style.removeAttribute(b)
            },
            _mousedown: function(a) {
                if (!this._state.enabled) return !1;
                this._state.offset = this._offset(this.sliderElem);
                this._state.size = this.sliderElem[this.sizePos];
                var b = this._getPercentage(a);
                if (this.options.range) {
                    var c = Math.abs(this._state.percentage[0] - b),
                        d = Math.abs(this._state.percentage[1] - b);
                    this._state.dragged = c < d ? 0 : 1;
                    this._adjustPercentageForRangeSliders(b)
                } else this._state.dragged = 0;
                this._state.percentage[this._state.dragged] = b;
                this._layout();
                this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend",
                    this.mouseup, !1));
                this.mousemove && document.removeEventListener("mousemove", this.mousemove, !1);
                this.mouseup && document.removeEventListener("mouseup", this.mouseup, !1);
                this.mousemove = this._mousemove.bind(this);
                this.mouseup = this._mouseup.bind(this);
                this.touchCapable && (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1));
                document.addEventListener("mousemove", this.mousemove, !1);
                document.addEventListener("mouseup", this.mouseup, !1);
                this._state.inDrag = !0;
                b = this._calculateValue();
                this._trigger("slideStart", b);
                this._setDataVal(b);
                this.setValue(b, !1, !0);
                this._pauseEvent(a);
                this.options.focus && this._triggerFocusOnHandle(this._state.dragged);
                return !0
            },
            _touchstart: function(a) {
                void 0 === a.changedTouches ? this._mousedown(a) : (a = a.changedTouches[0], this.touchX = a.pageX, this.touchY = a.pageY)
            },
            _triggerFocusOnHandle: function(a) {
                0 === a && this.handle1.focus();
                1 === a && this.handle2.focus()
            },
            _keydown: function(a, b) {
                if (!this._state.enabled) return !1;
                var c;
                switch (b.keyCode) {
                    case 37:
                    case 40:
                        c = -1;
                        break;
                    case 39:
                    case 38:
                        c = 1
                }
                if (c) {
                    if (this.options.natural_arrow_keys) {
                        var d = "horizontal" === this.options.orientation && this.options.reversed;
                        if ("vertical" === this.options.orientation && !this.options.reversed || d) c = -c
                    }
                    c = this._state.value[a] + c * this.options.step;
                    this.options.range && (c = [a ? this._state.value[0] : c, a ? c : this._state.value[1]]);
                    this._trigger("slideStart", c);
                    this._setDataVal(c);
                    this.setValue(c, !0, !0);
                    this._setDataVal(c);
                    this._trigger("slideStop", c);
                    this._layout();
                    this._pauseEvent(b);
                    return !1
                }
            },
            _pauseEvent: function(a) {
                a.stopPropagation &&
                    a.stopPropagation();
                a.preventDefault && a.preventDefault();
                a.cancelBubble = !0;
                a.returnValue = !1
            },
            _mousemove: function(a) {
                if (!this._state.enabled) return !1;
                a = this._getPercentage(a);
                this._adjustPercentageForRangeSliders(a);
                this._state.percentage[this._state.dragged] = a;
                this._layout();
                a = this._calculateValue(!0);
                this.setValue(a, !0, !0);
                return !1
            },
            _touchmove: function(a) {
                if (void 0 !== a.changedTouches) {
                    var b = a.changedTouches[0],
                        c = b.pageX - this.touchX,
                        b = b.pageY - this.touchY;
                    this._state.inDrag || ("vertical" === this.options.orientation &&
                        5 >= c && -5 <= c && (15 <= b || -15 >= b) ? this._mousedown(a) : 5 >= b && -5 <= b && (15 <= c || -15 >= c) && this._mousedown(a))
                }
            },
            _adjustPercentageForRangeSliders: function(a) {
                if (this.options.range) {
                    var b = this._getNumDigitsAfterDecimalPlace(a),
                        b = b ? b - 1 : 0;
                    a = this._applyToFixedAndParseFloat(a, b);
                    0 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[1], b) < a ? (this._state.percentage[0] = this._state.percentage[1], this._state.dragged = 1) : 1 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[0],
                        b) > a && (this._state.percentage[1] = this._state.percentage[0], this._state.dragged = 0)
                }
            },
            _mouseup: function() {
                if (!this._state.enabled) return !1;
                this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1));
                document.removeEventListener("mousemove", this.mousemove, !1);
                document.removeEventListener("mouseup", this.mouseup, !1);
                this._state.inDrag = !1;
                !1 === this._state.over && this._hideTooltip();
                var a = this._calculateValue(!0);
                this._layout();
                this._setDataVal(a);
                this._trigger("slideStop", a);
                return !1
            },
            _calculateValue: function(a) {
                var b;
                this.options.range ? (b = [this.options.min, this.options.max], 0 !== this._state.percentage[0] && (b[0] = this._toValue(this._state.percentage[0]), b[0] = this._applyPrecision(b[0])), 100 !== this._state.percentage[1] && (b[1] = this._toValue(this._state.percentage[1]), b[1] = this._applyPrecision(b[1]))) : (b = this._toValue(this._state.percentage[0]), b = parseFloat(b), b = this._applyPrecision(b));
                if (a) {
                    a = [b, Infinity];
                    for (var c = 0; c < this.options.ticks.length; c++) {
                        var d =
                            Math.abs(this.options.ticks[c] - b);
                        d <= a[1] && (a = [this.options.ticks[c], d])
                    }
                    if (a[1] <= this.options.ticks_snap_bounds) return a[0]
                }
                return b
            },
            _applyPrecision: function(a) {
                var b = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
                return this._applyToFixedAndParseFloat(a, b)
            },
            _getNumDigitsAfterDecimalPlace: function(a) {
                return (a = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)) ? Math.max(0, (a[1] ? a[1].length : 0) - (a[2] ? +a[2] : 0)) : 0
            },
            _applyToFixedAndParseFloat: function(a, b) {
                var c = a.toFixed(b);
                return parseFloat(c)
            },
            _getPercentage: function(a) {
                !this.touchCapable || "touchstart" !== a.type && "touchmove" !== a.type || (a = a.touches[0]);
                a = (a[this.mousePos] - this._state.offset[this.stylePos]) / this._state.size * 100;
                a = Math.round(a / this._state.percentage[2]) * this._state.percentage[2];
                this.options.reversed && (a = 100 - a);
                return Math.max(0, Math.min(100, a))
            },
            _validateInputValue: function(b) {
                if ("number" === typeof b) return b;
                if (Array.isArray(b)) return this._validateArray(b), b;
                throw Error(a.formatInvalidInputErrorMsg(b));
            },
            _validateArray: function(b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    if ("number" !== typeof d) throw Error(a.formatInvalidInputErrorMsg(d));
                }
            },
            _setDataVal: function(a) {
                this.element.setAttribute("data-value", a);
                this.element.setAttribute("value", a);
                this.element.value = a
            },
            _trigger: function(a, c) {
                c = c || 0 === c ? c : void 0;
                var d = this.eventToCallbackMap[a];
                if (d && d.length)
                    for (var f = 0; f < d.length; f++)(0, d[f])(c);
                b && this._triggerJQueryEvent(a, c)
            },
            _triggerJQueryEvent: function(a, b) {
                var c = {
                    type: a,
                    value: b
                };
                this.$element.trigger(c);
                this.$sliderElem.trigger(c)
            },
            _unbindJQueryEventHandlers: function() {
                this.$element.off();
                this.$sliderElem.off()
            },
            _setText: function(a, b) {
                "undefined" !== typeof a.textContent ? a.textContent = b : "undefined" !== typeof a.innerText && (a.innerText = b)
            },
            _removeClass: function(a, b) {
                for (var c = b.split(" "), d = a.className, f = 0; f < c.length; f++) d = d.replace(new RegExp("(?:\\s|^)" + c[f] + "(?:\\s|$)"), " ");
                a.className = d.trim()
            },
            _addClass: function(a, b) {
                for (var c = b.split(" "), d = a.className, f = 0; f < c.length; f++) {
                    var m = c[f];
                    (new RegExp("(?:\\s|^)" +
                        m + "(?:\\s|$)")).test(d) || (d += " " + m)
                }
                a.className = d.trim()
            },
            _offsetLeft: function(a) {
                return a.getBoundingClientRect().left
            },
            _offsetTop: function(a) {
                for (var b = a.offsetTop;
                    (a = a.offsetParent) && !isNaN(a.offsetTop);) b += a.offsetTop, "BODY" !== a.tagName && (b -= a.scrollTop);
                return b
            },
            _offset: function(a) {
                return {
                    left: this._offsetLeft(a),
                    top: this._offsetTop(a)
                }
            },
            _css: function(a, c, d) {
                b ? b.style(a, c, d) : (c = c.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(a, b) {
                    return b.toUpperCase()
                }), a.style[c] = d)
            },
            _toValue: function(a) {
                return this.options.scale.toValue.apply(this, [a])
            },
            _toPercentage: function(a) {
                return this.options.scale.toPercentage.apply(this, [a])
            },
            _setTooltipPosition: function() {
                var a = [this.tooltip, this.tooltip_min, this.tooltip_max];
                if ("vertical" === this.options.orientation) {
                    var b = this.options.tooltip_position || "right",
                        c = "left" === b ? "right" : "left";
                    a.forEach(function(a) {
                        this._addClass(a, b);
                        a.style[c] = "100%"
                    }.bind(this))
                } else "bottom" === this.options.tooltip_position ? a.forEach(function(a) {
                    this._addClass(a, "bottom");
                    a.style.top = "22px"
                }.bind(this)) : a.forEach(function(a) {
                    this._addClass(a,
                        "top");
                    a.style.top = -this.tooltip.outerHeight - 14 + "px"
                }.bind(this))
            }
        };
        b && function() {
            var a = void 0;
            b.fn.slider ? (windowIsDefined && window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."), a = "bootstrapSlider") : (b.bridget("slider", d), a = "slider");
            b.bridget("bootstrapSlider", d);
            b(function() {
                b("input[data-provide=slider]")[a]()
            })
        }()
    })(b);
    return d
});
! function(b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(function(b) {
    function d(a) {
        var b = document.createElement("input");
        a = "on" + a;
        var c = a in b;
        return c || (b.setAttribute(a, "return;"), c = "function" == typeof b[a]), c
    }

    function g(a) {
        var b = "text" == a || "tel" == a || "password" == a;
        b || (b = document.createElement("input"), b.setAttribute("type", a), b = "text" === b.type);
        return b
    }

    function c(a, d, e) {
        return (a = e.aliases[a]) ? (a.alias && c(a.alias,
            void 0, e), b.extend(!0, e, a), b.extend(!0, e, d), !0) : !1
    }

    function a(a, c) {
        function d(c) {
            function e(a, b, c, d) {
                this.matches = [];
                this.isGroup = a || !1;
                this.isOptional = b || !1;
                this.isQuantifier = c || !1;
                this.isAlternator = d || !1;
                this.quantifier = {
                    min: 1,
                    max: 1
                }
            }

            function f(c, d, e) {
                var h = a.definitions[d],
                    k = 0 == c.matches.length;
                if (e = void 0 != e ? e : c.matches.length, h && !w) {
                    h.placeholder = b.isFunction(h.placeholder) ? h.placeholder.call(this, a) : h.placeholder;
                    for (var g = h.prevalidator, q = g ? g.length : 0, t = 1; t < h.cardinality; t++) {
                        var r = q >= t ? g[t -
                                1] : [],
                            p = r.validator,
                            r = r.cardinality;
                        c.matches.splice(e++, 0, {
                            fn: p ? "string" == typeof p ? new RegExp(p) : new function() {
                                this.test = p
                            } : /./,
                            cardinality: r ? r : 1,
                            optionality: c.isOptional,
                            newBlockMarker: k,
                            casing: h.casing,
                            def: h.definitionSymbol || d,
                            placeholder: h.placeholder,
                            mask: d
                        })
                    }
                    c.matches.splice(e++, 0, {
                        fn: h.validator ? "string" == typeof h.validator ? new RegExp(h.validator) : new function() {
                            this.test = h.validator
                        } : /./,
                        cardinality: h.cardinality,
                        optionality: c.isOptional,
                        newBlockMarker: k,
                        casing: h.casing,
                        def: h.definitionSymbol ||
                            d,
                        placeholder: h.placeholder,
                        mask: d
                    })
                } else c.matches.splice(e++, 0, {
                    fn: null,
                    cardinality: 0,
                    optionality: c.isOptional,
                    newBlockMarker: k,
                    casing: null,
                    def: d,
                    placeholder: void 0,
                    mask: d
                }), w = !1
            }
            for (var h, k, g, q, t, p = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g, w = !1, n = new e, u = [], v = []; h = p.exec(c);) switch (k = h[0], k.charAt(0)) {
                case a.optionalmarker.end:
                case a.groupmarker.end:
                    if (h = u.pop(), 0 < u.length) {
                        if (g = u[u.length - 1], g.matches.push(h), g.isAlternator) {
                            q = u.pop();
                            for (h = 0; h < q.matches.length; h++) q.matches[h].isGroup = !1;
                            0 < u.length ? (g = u[u.length - 1], g.matches.push(q)) : n.matches.push(q)
                        }
                    } else n.matches.push(h);
                    break;
                case a.optionalmarker.start:
                    u.push(new e(!1, !0));
                    break;
                case a.groupmarker.start:
                    u.push(new e(!0));
                    break;
                case a.quantifiermarker.start:
                    var x = new e(!1, !1, !0);
                    k = k.replace(/[{}]/g, "");
                    var V = k.split(","),
                        ga = isNaN(V[0]) ? V[0] : parseInt(V[0]),
                        V = 1 == V.length ? ga : isNaN(V[1]) ? V[1] : parseInt(V[1]);
                    (("*" == V || "+" == V) && (ga = "*" == V ? 0 : 1), x.quantifier = {
                        min: ga,
                        max: V
                    }, 0 < u.length) ? (ga = u[u.length - 1].matches, (h = ga.pop(), h.isGroup) ||
                        (V = new e(!0), V.matches.push(h), h = V), ga.push(h), ga.push(x)) : ((h = n.matches.pop(), h.isGroup) || (V = new e(!0), V.matches.push(h), h = V), n.matches.push(h), n.matches.push(x));
                    break;
                case a.escapeChar:
                    w = !0;
                    break;
                case a.alternatormarker:
                    0 < u.length ? (g = u[u.length - 1], t = g.matches.pop()) : t = n.matches.pop();
                    t.isAlternator ? u.push(t) : (q = new e(!1, !1, !1, !0), q.matches.push(t), u.push(q));
                    break;
                default:
                    if (0 < u.length) {
                        if (g = u[u.length - 1], 0 < g.matches.length && !g.isAlternator && (t = g.matches[g.matches.length - 1], t.isGroup && (t.isGroup = !1, f(t, a.groupmarker.start, 0), f(t, a.groupmarker.end))), f(g, k), g.isAlternator) {
                            q = u.pop();
                            for (h = 0; h < q.matches.length; h++) q.matches[h].isGroup = !1;
                            0 < u.length ? (g = u[u.length - 1], g.matches.push(q)) : n.matches.push(q)
                        }
                    } else 0 < n.matches.length && (t = n.matches[n.matches.length - 1], t.isGroup && (t.isGroup = !1, f(t, a.groupmarker.start, 0), f(t, a.groupmarker.end))), f(n, k)
            }
            return 0 < n.matches.length && (t = n.matches[n.matches.length - 1], t.isGroup && (t.isGroup = !1, f(t, a.groupmarker.start, 0), f(t, a.groupmarker.end)), v.push(n)), v
        }

        function e(f,
            h) {
            if (void 0 != f && "" != f) {
                if (1 == f.length && 0 == a.greedy && 0 != a.repeat && (a.placeholder = ""), 0 < a.repeat || "*" == a.repeat || "+" == a.repeat) f = a.groupmarker.start + f + a.groupmarker.end + a.quantifiermarker.start + ("*" == a.repeat ? 0 : "+" == a.repeat ? 1 : a.repeat) + "," + a.repeat + a.quantifiermarker.end;
                var k;
                return void 0 == b.inputmask.masksCache[f] || !0 === c ? (k = {
                        mask: f,
                        maskToken: d(f),
                        validPositions: {},
                        _buffer: void 0,
                        buffer: void 0,
                        tests: {},
                        metadata: h
                    }, !0 !== c && (b.inputmask.masksCache[f] = k)) : k = b.extend(!0, {}, b.inputmask.masksCache[f]),
                    k
            }
        }

        function f(b) {
            if (b = b.toString(), a.numericInput) {
                b = b.split("").reverse();
                for (var c = 0; c < b.length; c++) b[c] == a.optionalmarker.start ? b[c] = a.optionalmarker.end : b[c] == a.optionalmarker.end ? b[c] = a.optionalmarker.start : b[c] == a.groupmarker.start ? b[c] = a.groupmarker.end : b[c] == a.groupmarker.end && (b[c] = a.groupmarker.start);
                b = b.join("")
            }
            return b
        }
        var h = void 0;
        if (b.isFunction(a.mask) && (a.mask = a.mask.call(this, a)), b.isArray(a.mask)) {
            if (1 < a.mask.length) {
                a.keepStatic = void 0 == a.keepStatic ? !0 : a.keepStatic;
                var k = "(";
                return b.each(a.mask, function(a, c) {
                    1 < k.length && (k += ")|(");
                    k += f(void 0 == c.mask || b.isFunction(c.mask) ? c : c.mask)
                }), k += ")", e(k, a.mask)
            }
            a.mask = a.mask.pop()
        }
        return a.mask && (h = void 0 == a.mask.mask || b.isFunction(a.mask.mask) ? e(f(a.mask), a.mask) : e(f(a.mask.mask), a.mask)), h
    }

    function f(a, c, e) {
        function f(a, b, e) {
            b = b || 0;
            var d, h, k = [],
                m = 0;
            do {
                if (!0 === a && c.validPositions[m]) {
                    var g = c.validPositions[m];
                    h = g.match;
                    d = g.locator.slice();
                    k.push(!0 === e ? g.input : ya(m, h))
                } else d = s(m, d, m - 1), h = d.match, d = d.locator.slice(), k.push(ya(m,
                    h));
                m++
            } while ((void 0 == ra || ra > m - 1) && null != h.fn || null == h.fn && "" != h.def || b >= m);
            return k.pop(), k
        }

        function u(a) {
            var b = c;
            b.buffer = void 0;
            b.tests = {};
            !0 !== a && (b._buffer = void 0, b.validPositions = {}, b.p = 0)
        }

        function x(a, b) {
            var e = c.validPositions;
            void 0 == a && (a = -1);
            var d = -1,
                f = -1,
                h;
            for (h in e) {
                var k = parseInt(h);
                e[k] && (b || null != e[k].match.fn) && (a >= k && (d = k), k >= a && (f = k))
            }
            return -1 != d && 1 < a - d || a > f ? d : f
        }

        function n(a, d, f) {
            if (e.insertMode && void 0 != c.validPositions[a] && void 0 == f) {
                var h = b.extend(!0, {}, c.validPositions),
                    k =
                    x();
                for (f = a; k >= f; f++) delete c.validPositions[f];
                c.validPositions[a] = d;
                d = !0;
                var m = c.validPositions;
                for (f = a; k >= f; f++) {
                    var g = h[f];
                    if (void 0 != g)
                        for (var q = a, p = -1; q < N() && (null == g.match.fn && m[f] && (!0 === m[f].match.optionalQuantifier || !0 === m[f].match.optionality) || null != g.match.fn);) {
                            if (null == g.match.fn || !e.keepStatic && m[f] && (void 0 != m[f + 1] && 1 < E(f + 1, m[f].locator.slice(), f).length || void 0 != m[f].alternation) ? q++ : q = H(a), y(q, g.match.def)) {
                                d = !1 !== A(q, g.input, !0, !0);
                                a = q;
                                break
                            }
                            if (d = null == g.match.fn, p == q) break;
                            p =
                                q
                        }
                    if (!d) break
                }
                if (!d) return c.validPositions = b.extend(!0, {}, h), !1
            } else c.validPositions[a] = d;
            return !0
        }

        function D(a, b, d, f) {
            var h, k = a;
            c.p = a;
            void 0 != c.validPositions[a] && c.validPositions[a].input == e.radixPoint && (b++, k++);
            for (h = k; b > h; h++) void 0 == c.validPositions[h] || !0 !== d && 0 == e.canClearPosition(c, h, x(), f, e) || delete c.validPositions[h];
            u(!0);
            for (h = k + 1; h <= x();) {
                for (; void 0 != c.validPositions[k];) k++;
                b = c.validPositions[k];
                k > h && (h = k + 1);
                d = c.validPositions[h];
                void 0 != d && void 0 == b ? (y(k, d.match.def) && !1 !== A(k,
                    d.input, !0) && (delete c.validPositions[h], h++), k++) : h++
            }
            h = x();
            k = N();
            h >= a && void 0 != c.validPositions[h] && c.validPositions[h].input == e.radixPoint && delete c.validPositions[h];
            for (h += 1; k >= h; h++) c.validPositions[h] && delete c.validPositions[h];
            u(!0)
        }

        function s(a, b, d) {
            var f = c.validPositions[a];
            if (void 0 == f) {
                a = E(a, b, d);
                b = x();
                b = c.validPositions[b] || E(0)[0];
                d = void 0 != b.alternation ? b.locator[b.alternation].toString().split(",") : [];
                for (var h = 0; h < a.length && (f = a[h], !(f.match && (e.greedy && !0 !== f.match.optionalQuantifier ||
                        (!1 === f.match.optionality || !1 === f.match.newBlockMarker) && !0 !== f.match.optionalQuantifier) && (void 0 == b.alternation || b.alternation != f.alternation || void 0 != f.locator[b.alternation] && F(f.locator[b.alternation].toString().split(","), d)))); h++);
            }
            return f
        }

        function r(a) {
            return c.validPositions[a] ? c.validPositions[a].match : E(a)[0].match
        }

        function y(a, b) {
            for (var c = !1, e = E(a), d = 0; d < e.length; d++)
                if (e[d].match && e[d].match.def == b) {
                    c = !0;
                    break
                }
            return c
        }

        function E(a, e, d, f) {
            function h(e, d, f, k) {
                function p(f, k, l) {
                    if (1E4 <
                        m) return alert("jquery.inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + c.mask), !0;
                    if (m == a && void 0 == f.matches) return g.push({
                        match: f,
                        locator: k.reverse()
                    }), !0;
                    if (void 0 != f.matches)
                        if (f.isGroup && !0 !== l) {
                            if (f = p(e.matches[r + 1], k)) return !0
                        } else if (f.isOptional) {
                        var n = f;
                        if (f = h(f, d, k, l)) {
                            f = g[g.length - 1].match;
                            f = 0 == b.inArray(f, n.matches);
                            if (!f) return !0;
                            q = !0;
                            m = a
                        }
                    } else if (f.isAlternator) {
                        var s, n = f,
                            u = [],
                            w = g.slice(),
                            v = k.length,
                            y = 0 < d.length ? d.shift() : -1;
                        if (-1 == y || "string" == typeof y) {
                            var x = m,
                                E = d.slice(),
                                ea = [];
                            "string" == typeof y && (ea = y.split(","));
                            for (var Q = 0; Q < n.matches.length; Q++) {
                                if (g = [], f = p(n.matches[Q], [Q].concat(k), l) || f, !0 !== f && void 0 != f && ea[ea.length - 1] < n.matches.length) s = e.matches.indexOf(f) + 1, e.matches.length > s && (f = p(e.matches[s], [s].concat(k.slice(1, k.length)), l), f && (ea.push(s.toString()), b.each(g, function(a, b) {
                                    b.alternation = k.length - 1
                                })));
                                s = g.slice();
                                m = x;
                                g = [];
                                for (var D = 0; D < E.length; D++) d[D] = E[D];
                                for (D =
                                    0; D < s.length; D++) {
                                    var z = s[D];
                                    z.alternation = z.alternation || v;
                                    for (var ia = 0; ia < u.length; ia++) {
                                        var K = u[ia];
                                        if (z.match.mask == K.match.mask && ("string" != typeof y || -1 != b.inArray(z.locator[z.alternation].toString(), ea))) {
                                            s.splice(D, 1);
                                            D--;
                                            K.locator[z.alternation] = K.locator[z.alternation] + "," + z.locator[z.alternation];
                                            K.alternation = z.alternation;
                                            break
                                        }
                                    }
                                }
                                u = u.concat(s)
                            }
                            "string" == typeof y && (u = b.map(u, function(a, c) {
                                if (isFinite(c)) {
                                    var e, d = a.alternation,
                                        f = a.locator[d].toString().split(",");
                                    a.locator[d] = void 0;
                                    a.alternation =
                                        void 0;
                                    for (var h = 0; h < f.length; h++)(e = -1 != b.inArray(f[h], ea)) && (void 0 != a.locator[d] ? (a.locator[d] += ",", a.locator[d] += f[h]) : a.locator[d] = parseInt(f[h]), a.alternation = d);
                                    if (void 0 != a.locator[d]) return a
                                }
                            }));
                            g = w.concat(u);
                            m = a;
                            q = 0 < g.length
                        } else f = n.matches[y] ? p(n.matches[y], [y].concat(k), l) : !1;
                        if (f) return !0
                    } else if (f.isQuantifier && !0 !== l)
                        for (n = f, l = 0 < d.length && !0 !== l ? d.shift() : 0; l < (isNaN(n.quantifier.max) ? l + 1 : n.quantifier.max) && a >= m; l++) {
                            if (u = e.matches[b.inArray(n, e.matches) - 1], f = p(u, [l].concat(k), !0)) {
                                f =
                                    g[g.length - 1].match;
                                f.optionalQuantifier = l > n.quantifier.min - 1;
                                if ((f = 0 == b.inArray(f, u.matches)) && l > n.quantifier.min - 1) {
                                    q = !0;
                                    m = a;
                                    break
                                }
                                return !0
                            }
                        } else {
                            if (f = h(f, d, k, l)) return !0
                        } else m++
                }
                for (var r = 0 < d.length ? d.shift() : 0; r < e.matches.length; r++)
                    if (!0 !== e.matches[r].isQuantifier) {
                        var l = p(e.matches[r], [r].concat(f), k);
                        if (l && m == a) return l;
                        if (m > a) break
                    }
            }
            var k = c.maskToken,
                m = e ? d : 0;
            d = e || [0];
            var g = [],
                q = !1;
            if (!0 === f && c.tests[a]) return c.tests[a];
            if (void 0 == e) {
                for (f = a - 1; void 0 == (e = c.validPositions[f]) && -1 < f && (!c.tests[f] ||
                        void 0 == (e = c.tests[f][0]));) f--;
                void 0 != e && -1 < f && (m = f, d = e.locator.slice())
            }
            for (e = d.shift(); e < k.length && !(h(k[e], d, [e]) && m == a || m > a); e++);
            return (0 == g.length || q) && g.push({
                match: {
                    fn: null,
                    cardinality: 0,
                    optionality: !0,
                    casing: null,
                    def: ""
                },
                locator: []
            }), c.tests[a] = b.extend(!0, [], g), c.tests[a]
        }

        function K() {
            return void 0 == c._buffer && (c._buffer = f(!1, 1)), c._buffer
        }

        function z() {
            return void 0 == c.buffer && (c.buffer = f(!0, x(), !0)), c.buffer
        }

        function C(a, b, d) {
            if (d = d || z().slice(), !0 === a) u(), a = 0, b = d.length;
            else
                for (var f =
                        a; b > f; f++) delete c.validPositions[f], delete c.tests[f];
            for (f = a; b > f; f++) d[f] != e.skipOptionalPartCharacter && A(f, d[f], !0, !0)
        }

        function da(a, b) {
            switch (b.casing) {
                case "upper":
                    a = a.toUpperCase();
                    break;
                case "lower":
                    a = a.toLowerCase()
            }
            return a
        }

        function F(a, c) {
            for (var d = e.greedy ? c : c.slice(0, 1), f = !1, h = 0; h < a.length; h++)
                if (-1 != b.inArray(a[h], d)) {
                    f = !0;
                    break
                }
            return f
        }

        function A(a, d, f, h) {
            function k(a, d, f, h) {
                var m = !1;
                return b.each(E(a), function(k, g) {
                    for (var q = g.match, p = d ? 1 : 0, r = "", l = (z(), q.cardinality); l > p; l--) r += ga(a -
                        (l - 1));
                    if (d && (r += d), m = null != q.fn ? q.fn.test(r, c, a, f, e) : d != q.def && d != e.skipOptionalPartCharacter || "" == q.def ? !1 : {
                            c: q.def,
                            pos: a
                        }, !1 !== m) {
                        p = void 0 != m.c ? m.c : d;
                        p = p == e.skipOptionalPartCharacter && null === q.fn ? q.def : p;
                        r = a;
                        l = z();
                        if (void 0 != m.remove && (b.isArray(m.remove) || (m.remove = [m.remove]), b.each(m.remove.sort(function(a, b) {
                                return b - a
                            }), function(a, b) {
                                D(b, b + 1, !0)
                            })), void 0 != m.insert && (b.isArray(m.insert) || (m.insert = [m.insert]), b.each(m.insert.sort(function(a, b) {
                                return a - b
                            }), function(a, b) {
                                A(b.pos, b.c, !0)
                            })),
                            m.refreshFromBuffer) {
                            var s = m.refreshFromBuffer;
                            if (f = !0, C(!0 === s ? s : s.start, s.end, l), void 0 == m.pos && void 0 == m.c) return m.pos = x(), !1;
                            if (r = void 0 != m.pos ? m.pos : a, r != a) return m = b.extend(m, A(r, p, !0)), !1
                        } else if (!0 !== m && void 0 != m.pos && m.pos != a && (r = m.pos, C(a, r), r != a)) return m = b.extend(m, A(r, p, !0)), !1;
                        return 1 != m && void 0 == m.pos && void 0 == m.c ? !1 : (0 < k && u(!0), n(r, b.extend({}, g, {
                            input: da(p, q)
                        }), h) || (m = !1), !1)
                    }
                }), m
            }

            function m(a, d, f, h) {
                for (var k, g, q, p, r = b.extend(!0, {}, c.validPositions), l = x(); 0 <= l && (p = c.validPositions[l], !p || void 0 == p.alternation || (k = l, g = c.validPositions[k].alternation, s(k).locator[p.alternation] == p.locator[p.alternation])); l--);
                if (void 0 != g)
                    for (var n in c.validPositions)
                        if (p = c.validPositions[n], parseInt(n) > parseInt(k) && void 0 != p.alternation) {
                            k = c.validPositions[k].locator[g].toString().split(",");
                            p = p.locator[g] || k[0];
                            0 < p.length && (p = p.split(",")[0]);
                            for (l = 0; l < k.length; l++)
                                if (p < k[l]) {
                                    for (var v, y, E = n - 1; 0 <= E; E--)
                                        if (v = c.validPositions[E], void 0 != v) {
                                            y = v.locator[g];
                                            v.locator[g] = parseInt(k[l]);
                                            break
                                        }
                                    if (p !=
                                        v.locator[g]) {
                                        E = [];
                                        for (q = n; q < x() + 1; q++) {
                                            var ea = c.validPositions[q];
                                            ea && null != ea.match.fn && E.push(ea.input);
                                            delete c.validPositions[q];
                                            delete c.tests[q]
                                        }
                                        u(!0);
                                        e.keepStatic = !e.keepStatic;
                                        for (q = !0; 0 < E.length && (ea = E.shift(), ea == e.skipOptionalPartCharacter || (q = A(x() + 1, ea, !1, !0))););
                                        if (v.alternation = g, v.locator[g] = y, q) E = x(a) + 1, q = A(a > E ? E : a, d, f, h);
                                        if (e.keepStatic = !e.keepStatic, q) return q;
                                        u();
                                        c.validPositions = b.extend(!0, {}, r)
                                    }
                                }
                            break
                        }
                return !1
            }

            function g(a, d) {
                for (var e = c.validPositions[d].locator, f = e.length,
                        h = a; d > h; h++)
                    if (!G(h)) {
                        var k = E(h),
                            m = k[0],
                            q = -1;
                        b.each(k, function(a, b) {
                            for (var c = 0; f > c; c++) b.locator[c] && F(b.locator[c].toString().split(","), e[c].toString().split(",")) && c > q && (q = c, m = b)
                        });
                        n(h, b.extend({}, m, {
                            input: m.match.def
                        }), !0)
                    }
            }
            f = !0 === f;
            for (var q = z(), p = a - 1; - 1 < p && !c.validPositions[p]; p--);
            for (p++; a > p; p++) void 0 == c.validPositions[p] && ((!G(p) || q[p] != ya(p)) && 1 < E(p).length || q[p] == e.radixPoint || "0" == q[p] && b.inArray(e.radixPoint, q) < p) && k(p, q[p], !0);
            var p = a,
                r = !1,
                l = b.extend(!0, {}, c.validPositions);
            if (p < N() &&
                (r = k(p, d, f, h), (!f || h) && !1 === r)) {
                var v = c.validPositions[p];
                if (!v || null != v.match.fn || v.match.def != d && d != e.skipOptionalPartCharacter) {
                    if ((e.insertMode || void 0 == c.validPositions[H(p)]) && !G(p))
                        for (var v = p + 1, y = H(p); y >= v; v++)
                            if (r = k(v, d, f, h), !1 !== r) {
                                g(p, v);
                                p = v;
                                break
                            }
                } else r = {
                    caret: H(p)
                }
            }
            if (!1 === r && e.keepStatic && U(q) && (r = m(a, d, f, h)), !0 === r && (r = {
                    pos: p
                }), b.isFunction(e.postValidation) && 0 != r && !f)
                if (u(!0), !e.postValidation(z(), e)) return u(!0), c.validPositions = b.extend(!0, {}, l), !1;
            return r
        }

        function G(a) {
            var b =
                r(a);
            if (null != b.fn) return b.fn;
            if (!e.keepStatic && void 0 == c.validPositions[a]) {
                a = E(a);
                for (var b = !0, d = 0; d < a.length; d++)
                    if ("" != a[d].match.def && (void 0 == a[d].alternation || 1 < a[d].locator[a[d].alternation].length)) {
                        b = !1;
                        break
                    }
                return b
            }
            return !1
        }

        function N() {
            var a;
            ra = O.prop("maxLength"); - 1 == ra && (ra = void 0);
            var b;
            b = x();
            var d = c.validPositions[b],
                e = void 0 != d ? d.locator.slice() : void 0;
            for (b += 1; void 0 == d || null != d.match.fn || null == d.match.fn && "" != d.match.def; b++) d = s(b, e, b - 1), e = d.locator.slice();
            return a = "" != r(b -
                1).def ? b : b - 1, void 0 == ra || ra > a ? a : ra
        }

        function H(a) {
            var b = N();
            if (a >= b) return b;
            for (; ++a < b && !G(a) && (!0 !== e.nojumps || e.nojumpsThreshold > a););
            return a
        }

        function V(a) {
            if (0 >= a) return 0;
            for (; 0 < --a && !G(a););
            return a
        }

        function ga(a) {
            return void 0 == c.validPositions[a] ? ya(a) : c.validPositions[a].input
        }

        function Z(a, c, d, f, h) {
            f && b.isFunction(e.onBeforeWrite) && (f = e.onBeforeWrite.call(a, f, c, d, e)) && (f.refreshFromBuffer && (c = f.refreshFromBuffer, C(!0 === c ? c : c.start, c.end, f.buffer), u(!0), c = z()), d = f.caret || d);
            a._valueSet(c.join(""));
            void 0 != d && J(a, d);
            !0 === h && (bb = !0, b(a).trigger("input"))
        }

        function ya(a, b) {
            if (b = b || r(a), void 0 != b.placeholder) return b.placeholder;
            if (null == b.fn) {
                if (!e.keepStatic && void 0 == c.validPositions[a]) {
                    for (var d = E(a), f = !0, h = 0; h < d.length; h++)
                        if ("" != d[h].match.def && (null !== d[h].match.fn || void 0 == d[h].alternation || 1 < d[h].locator[d[h].alternation].length)) {
                            f = !1;
                            break
                        }
                    if (f) return e.placeholder.charAt(a % e.placeholder.length)
                }
                return b.def
            }
            return e.placeholder.charAt(a % e.placeholder.length)
        }

        function ua(a, d, e, f) {
            f = void 0 !=
                f ? f.slice() : a._valueGet().split("");
            var h = "",
                k = 0;
            if (u(), c.p = H(-1), d && a._valueSet(""), !e) {
                var m = K().slice(0, H(-1)).join(""),
                    g = f.join("").match(new RegExp("^" + b.inputmask.escapeRegex(m), "g"));
                g && 0 < g.length && (f.splice(0, g.length * m.length), k = H(k))
            }
            b.each(f, function(d, f) {
                var m = b.Event("keypress");
                m.which = f.charCodeAt(0);
                h += f;
                var g = x(void 0, !0),
                    q = c.validPositions[g],
                    q = s(g + 1, q ? q.locator.slice() : void 0, g),
                    p = !1,
                    r = K().slice(k, H(k)).join("").indexOf(h);
                if (-1 != r && !G(k))
                    for (var p = !0, r = K().slice(k, k + r), n = 0; n < r.length; n++)
                        if (" " !=
                            r[n]) {
                            p = !1;
                            break
                        }!p || e ? (g = e ? d : null == q.match.fn && q.match.optionality && g + 1 < c.p ? g + 1 : c.p, l.call(a, m, !0, !1, e, g), k = g + 1, h = "") : l.call(a, m, !0, !1, !0, g + 1)
            });
            d && Z(a, z(), b(a).is(":focus") ? H(x(0)) : void 0, b.Event("checkval"))
        }

        function ta(a) {
            if (a.data("_inputmask") && !a.hasClass("hasDatepicker")) {
                var d = [],
                    f = c.validPositions,
                    h;
                for (h in f) f[h].match && null != f[h].match.fn && d.push(f[h].input);
                d = (fa ? d.reverse() : d).join("");
                f = (fa ? z().slice().reverse() : z()).join("");
                return b.isFunction(e.onUnMask) && (d = e.onUnMask.call(a, f,
                    d, e) || d), d
            }
            return a[0]._valueGet()
        }

        function P(a) {
            !fa || "number" != typeof a || e.greedy && "" == e.placeholder || (a = z().length - a);
            return a
        }

        function J(a, c, d) {
            var f;
            a = a.jquery && 0 < a.length ? a[0] : a;
            if ("number" != typeof c) return a.setSelectionRange ? (c = a.selectionStart, d = a.selectionEnd) : window.getSelection ? (f = window.getSelection().getRangeAt(0), (f.commonAncestorContainer.parentNode == a || f.commonAncestorContainer == a) && (c = f.startOffset, d = f.endOffset)) : document.selection && document.selection.createRange && (f = document.selection.createRange(),
                c = 0 - f.duplicate().moveStart("character", -1E5), d = c + f.text.length), {
                begin: P(c),
                end: P(d)
            };
            if (c = P(c), d = P(d), d = "number" == typeof d ? d : c, b(a).is(":visible")) {
                var k = b(a).css("font-size").replace("px", "") * d;
                if (a.scrollLeft = k > a.scrollWidth ? k : 0, h || 0 != e.insertMode || c != d || d++, a.setSelectionRange) a.selectionStart = c, a.selectionEnd = d;
                else if (window.getSelection) {
                    if (f = document.createRange(), void 0 == a.firstChild) k = document.createTextNode(""), a.appendChild(k);
                    f.setStart(a.firstChild, c < a._valueGet().length ? c : a._valueGet().length);
                    f.setEnd(a.firstChild, d < a._valueGet().length ? d : a._valueGet().length);
                    f.collapse(!0);
                    c = window.getSelection();
                    c.removeAllRanges();
                    c.addRange(f)
                } else a.createTextRange && (f = a.createTextRange(), f.collapse(!0), f.moveEnd("character", d), f.moveStart("character", c), f.select())
            }
        }

        function aa(a) {
            var d, e, f = z(),
                h = f.length,
                k = x(),
                m = {},
                g = c.validPositions[k],
                q = void 0 != g ? g.locator.slice() : void 0;
            for (d = k + 1; d < f.length; d++) e = s(d, q, d - 1), q = e.locator.slice(), m[d] = b.extend(!0, {}, e);
            q = g && void 0 != g.alternation ? g.locator[g.alternation] :
                void 0;
            for (d = h - 1; d > k && (e = m[d], (e.match.optionality || e.match.optionalQuantifier || q && (q != m[d].locator[g.alternation] && null != e.match.fn || null == e.match.fn && e.locator[g.alternation] && F(e.locator[g.alternation].toString().split(","), q.split(",")) && "" != E(d)[0].def)) && f[d] == ya(d, e.match)); d--) h--;
            return a ? {
                l: h,
                def: m[h] ? m[h].match : void 0
            } : h
        }

        function S(a) {
            for (var b = aa(), c = a.length - 1; c > b && !G(c); c--);
            return a.splice(b, c + 1 - b), a
        }

        function U(a) {
            if (b.isFunction(e.isComplete)) return e.isComplete.call(O, a, e);
            if ("*" !=
                e.repeat) {
                var d = !1,
                    f = aa(!0),
                    h = V(f.l);
                x();
                if (void 0 == f.def || f.def.newBlockMarker || f.def.optionality || f.def.optionalQuantifier)
                    for (d = !0, f = 0; h >= f; f++) {
                        var k = s(f).match;
                        if (null != k.fn && void 0 == c.validPositions[f] && !0 !== k.optionality && !0 !== k.optionalQuantifier || null == k.fn && a[f] != ya(f, k)) {
                            d = !1;
                            break
                        }
                    }
                return d
            }
        }

        function Da(a, b) {
            return fa ? 1 < a - b || 1 == a - b && e.insertMode : 1 < b - a || 1 == b - a && e.insertMode
        }

        function qb(a) {
            a = b._data(a).events;
            var c = !1;
            b.each(a, function(a, d) {
                b.each(d, function(a, d) {
                    if ("inputmask" == d.namespace &&
                        "setvalue" != d.type) {
                        var e = d.handler;
                        d.handler = function(a) {
                            if (!this.disabled && (!this.readOnly || "keydown" == a.type && a.ctrlKey && 67 == a.keyCode || a.keyCode == b.inputmask.keyCode.TAB)) {
                                switch (a.type) {
                                    case "input":
                                        if (!0 === bb || !0 === c) return bb = !1, a.preventDefault();
                                        break;
                                    case "keydown":
                                        c = ka = !1;
                                        break;
                                    case "keypress":
                                        if (!0 === ka) return a.preventDefault();
                                        ka = !0;
                                        break;
                                    case "compositionstart":
                                        c = !0;
                                        break;
                                    case "compositionupdate":
                                        bb = !0;
                                        break;
                                    case "compositionend":
                                        c = !1
                                }
                                return e.apply(this, arguments)
                            }
                            a.preventDefault()
                        }
                    }
                })
            })
        }

        function Oa(a) {
            function c(a) {
                if (void 0 == b.valHooks[a] || 1 != b.valHooks[a].inputmaskpatch) {
                    var d = b.valHooks[a] && b.valHooks[a].get ? b.valHooks[a].get : function(a) {
                            return a.value
                        },
                        e = b.valHooks[a] && b.valHooks[a].set ? b.valHooks[a].set : function(a, b) {
                            return a.value = b, a
                        };
                    b.valHooks[a] = {
                        get: function(a) {
                            var c = b(a);
                            if (c.data("_inputmask")) {
                                if (c.data("_inputmask").opts.autoUnmask) return c.inputmask("unmaskedvalue");
                                a = d(a);
                                c = c.data("_inputmask").maskset._buffer;
                                return c = c ? c.join("") : "", a != c ? a : ""
                            }
                            return d(a)
                        },
                        set: function(a,
                            c) {
                            var d, f = b(a),
                                h = f.data("_inputmask");
                            return d = e(a, c), h && f.triggerHandler("setvalue.inputmask"), d
                        },
                        inputmaskpatch: !0
                    }
                }
            }

            function d() {
                var a = b(this),
                    c = b(this).data("_inputmask");
                return c ? c.opts.autoUnmask ? a.inputmask("unmaskedvalue") : h.call(this) != K().join("") ? h.call(this) : "" : h.call(this)
            }

            function e(a) {
                var c = b(this).data("_inputmask");
                k.call(this, a);
                c && b(this).triggerHandler("setvalue.inputmask")
            }

            function f(a) {
                b(a).bind("mouseenter.inputmask", function(a) {
                    a = b(this);
                    var c = this._valueGet();
                    "" != c && c != z().join("") &&
                        a.triggerHandler("setvalue.inputmask")
                });
                if (a = b._data(a).events.mouseover) {
                    for (var c = a[a.length - 1], d = a.length - 1; 0 < d; d--) a[d] = a[d - 1];
                    a[0] = c
                }
            }
            var h, k;
            if (!a._valueGet) {
                var m;
                Object.getOwnPropertyDescriptor && void 0 == a.value ? (h = function() {
                    return this.textContent
                }, k = function(a) {
                    this.textContent = a
                }, Object.defineProperty(a, "value", {
                    get: d,
                    set: e
                })) : ((m = Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(a, "value")) && m.configurable, document.__lookupGetter__ && a.__lookupGetter__("value") ? (h = a.__lookupGetter__("value"),
                    k = a.__lookupSetter__("value"), a.__defineGetter__("value", d), a.__defineSetter__("value", e)) : (h = function() {
                    return a.value
                }, k = function(b) {
                    a.value = b
                }, c(a.type), f(a)));
                a._valueGet = function(a) {
                    return fa && !0 !== a ? h.call(this).split("").reverse().join("") : h.call(this)
                };
                a._valueSet = function(a) {
                    k.call(this, fa ? a.split("").reverse().join("") : a)
                }
            }
        }

        function X(a, d, f, h) {
            if ((e.numericInput || fa) && (d == b.inputmask.keyCode.BACKSPACE ? d = b.inputmask.keyCode.DELETE : d == b.inputmask.keyCode.DELETE && (d = b.inputmask.keyCode.BACKSPACE),
                    fa)) {
                var k = f.end;
                f.end = f.begin;
                f.begin = k
            }
            if (d == b.inputmask.keyCode.BACKSPACE && (1 > f.end - f.begin || 0 == e.insertMode) ? f.begin = V(f.begin) : d == b.inputmask.keyCode.DELETE && f.begin == f.end && (f.end = G(f.end) ? f.end + 1 : H(f.end) + 1), D(f.begin, f.end, !1, h), !0 !== h) {
                if (e.keepStatic) {
                    u(!0);
                    d = [];
                    k = b.extend(!0, {}, c.validPositions);
                    for (h = x(); 0 <= h; h--) {
                        var m = c.validPositions[h];
                        if (m) {
                            if (void 0 != m.alternation && m.locator[m.alternation] == s(h).locator[m.alternation]) break;
                            null != m.match.fn && d.push(m.input);
                            delete c.validPositions[h]
                        }
                    }
                    if (0 <
                        h)
                        for (; 0 < d.length;) c.p = H(x()), h = b.Event("keypress"), h.which = d.pop().charCodeAt(0), l.call(a, h, !0, !1, !1, c.p);
                    else c.validPositions = b.extend(!0, {}, k)
                }
                a = x(f.begin);
                a < f.begin ? (-1 == a && u(), c.p = H(a)) : c.p = f.begin
            }
        }

        function R(a) {
            var f = this,
                h = b(f),
                k = a.keyCode,
                m = J(f);
            k == b.inputmask.keyCode.BACKSPACE || k == b.inputmask.keyCode.DELETE || p && 127 == k || a.ctrlKey && 88 == k && !d("cut") ? (a.preventDefault(), 88 == k && (wa = z().join("")), X(f, k, m), Z(f, z(), c.p, a, wa != z().join("")), f._valueGet() == K().join("") ? h.trigger("cleared") : !0 === U(z()) &&
                    h.trigger("complete"), e.showTooltip && h.prop("title", c.mask)) : k == b.inputmask.keyCode.END || k == b.inputmask.keyCode.PAGE_DOWN ? setTimeout(function() {
                    var b = H(x());
                    e.insertMode || b != N() || a.shiftKey || b--;
                    J(f, a.shiftKey ? m.begin : b, b)
                }, 0) : k == b.inputmask.keyCode.HOME && !a.shiftKey || k == b.inputmask.keyCode.PAGE_UP ? J(f, 0, a.shiftKey ? m.begin : 0) : (e.undoOnEscape && k == b.inputmask.keyCode.ESCAPE || 90 == k && a.ctrlKey) && !0 !== a.altKey ? (ua(f, !0, !1, wa.split("")), h.click()) : k != b.inputmask.keyCode.INSERT || a.shiftKey || a.ctrlKey ? 0 !=
                e.insertMode || a.shiftKey || (k == b.inputmask.keyCode.RIGHT ? setTimeout(function() {
                    var a = J(f);
                    J(f, a.begin)
                }, 0) : k == b.inputmask.keyCode.LEFT && setTimeout(function() {
                    var a = J(f);
                    J(f, fa ? a.begin + 1 : a.begin - 1)
                }, 0)) : (e.insertMode = !e.insertMode, J(f, e.insertMode || m.begin != N() ? m.begin : m.begin - 1));
            e.onKeyDown.call(this, a, z(), J(f).begin, e);
            Ya = -1 != b.inArray(k, e.ignorables)
        }

        function l(a, d, f, h, k) {
            var m = b(this),
                g = a.which || a.charCode || a.keyCode;
            if (!(!0 === d || a.ctrlKey && a.altKey) && (a.ctrlKey || a.metaKey || Ya)) return !0;
            if (g) {
                46 ==
                    g && 0 == a.shiftKey && "," == e.radixPoint && (g = 44);
                var q;
                k = d ? {
                    begin: k,
                    end: k
                } : J(this);
                var p = String.fromCharCode(g);
                (g = Da(k.begin, k.end)) && (c.undoPositions = b.extend(!0, {}, c.validPositions), X(this, b.inputmask.keyCode.DELETE, k, !0), k.begin = c.p, e.insertMode || (e.insertMode = !e.insertMode, n(k.begin, h), e.insertMode = !e.insertMode), g = !e.multi);
                c.writeOutBuffer = !0;
                k = fa && !g ? k.end : k.begin;
                var r = A(k, p, h);
                !1 !== r && ((!0 !== r && (k = void 0 != r.pos ? r.pos : k, p = void 0 != r.c ? r.c : p), u(!0), void 0 != r.caret) ? q = r.caret : (h = c.validPositions,
                    q = !e.keepStatic && (void 0 != h[k + 1] && 1 < E(k + 1, h[k].locator.slice(), k).length || void 0 != h[k].alternation) ? k + 1 : H(k)), c.p = q);
                if (!1 !== f) {
                    var l = this;
                    if (setTimeout(function() {
                            e.onKeyValidation.call(l, r, e)
                        }, 0), c.writeOutBuffer && !1 !== r) {
                        var s = z();
                        Z(this, s, d ? void 0 : e.numericInput ? V(q) : q, a, !0 !== d);
                        !0 !== d && setTimeout(function() {
                            !0 === U(s) && m.trigger("complete")
                        }, 0)
                    } else g && (c.buffer = void 0, c.validPositions = c.undoPositions)
                } else g && (c.buffer = void 0, c.validPositions = c.undoPositions);
                (e.showTooltip && m.prop("title", c.mask),
                    d && b.isFunction(e.onBeforeWrite)) && (d = e.onBeforeWrite.call(this, a, z(), q, e)) && d.refreshFromBuffer && (f = d.refreshFromBuffer, C(!0 === f ? f : f.start, f.end, d.buffer), u(!0), d.caret && (c.p = d.caret));
                a.preventDefault()
            }
        }

        function hb(a) {
            var c = b(this),
                d = this._valueGet(!0),
                f = J(this);
            if ("propertychange" == a.type && this._valueGet().length <= N()) return !0;
            if ("paste" == a.type) {
                var h = d.substr(0, f.begin),
                    k = d.substr(f.end, d.length);
                h == K().slice(0, f.begin).join("") && (h = "");
                k == K().slice(f.end).join("") && (k = "");
                window.clipboardData &&
                    window.clipboardData.getData ? d = h + window.clipboardData.getData("Text") + k : a.originalEvent && a.originalEvent.clipboardData && a.originalEvent.clipboardData.getData && (d = h + a.originalEvent.clipboardData.getData("text/plain") + k)
            }
            f = d;
            if (b.isFunction(e.onBeforePaste)) {
                if (f = e.onBeforePaste.call(this, d, e), !1 === f) return a.preventDefault(), !1;
                f || (f = d)
            }
            return ua(this, !0, !1, fa ? f.split("").reverse() : f.split("")), c.click(), !0 === U(z()) && c.trigger("complete"), !1
        }

        function ib(a) {
            ua(this, !0, !1);
            !0 === U(z()) && b(this).trigger("complete");
            a.preventDefault()
        }

        function la(a) {
            wa = z().join("");
            "" != Ma && 0 == a.originalEvent.data.indexOf(Ma) || (Kb = J(this))
        }

        function La(a) {
            var d = this,
                f = Kb || J(d);
            0 == a.originalEvent.data.indexOf(Ma) && (u(), f = {
                begin: 0,
                end: 0
            });
            var h = a.originalEvent.data;
            J(d, f.begin, f.end);
            for (f = 0; f < h.length; f++) {
                var k = b.Event("keypress");
                k.which = h.charCodeAt(f);
                Ya = ka = !1;
                l.call(d, k)
            }
            setTimeout(function() {
                var a = c.p;
                Z(d, z(), e.numericInput ? V(a) : a)
            }, 0);
            Ma = a.originalEvent.data
        }

        function Ia(a) {}

        function Db(a) {
            if (O = b(a), O.data("_inputmask", {
                    maskset: c,
                    opts: e,
                    isRTL: !1
                }), e.showTooltip && O.prop("title", c.mask), ("rtl" == a.dir || e.rightAlign) && O.css("text-align", "right"), "rtl" == a.dir || e.numericInput) {
                a.dir = "ltr";
                O.removeAttr("dir");
                var d = O.data("_inputmask");
                d.isRTL = !0;
                O.data("_inputmask", d);
                fa = !0
            }
            O.unbind(".inputmask");
            (O.is(":input") && g(O.attr("type")) || a.isContentEditable) && (O.closest("form").bind("submit", function(a) {
                wa != z().join("") && O.change();
                O[0]._valueGet && O[0]._valueGet() == K().join("") && O[0]._valueSet("");
                e.removeMaskOnSubmit && O.inputmask("remove")
            }).bind("reset",
                function() {
                    setTimeout(function() {
                        O.triggerHandler("setvalue.inputmask")
                    }, 0)
                }), O.bind("mouseenter.inputmask", function() {
                !b(this).is(":focus") && e.showMaskOnHover && this._valueGet() != z().join("") && Z(this, z())
            }).bind("blur.inputmask", function(a) {
                var c = b(this);
                if (c.data("_inputmask")) {
                    var d = this._valueGet(),
                        f = z().slice();
                    xa = !0;
                    wa != f.join("") && setTimeout(function() {
                        c.change();
                        wa = f.join("")
                    }, 0);
                    "" != d && (e.clearMaskOnLostFocus && (d == K().join("") ? f = [] : S(f)), !1 === U(f) && (c.trigger("incomplete"), e.clearIncomplete &&
                        (u(), f = e.clearMaskOnLostFocus ? [] : K().slice())), Z(this, f, void 0, a))
                }
            }).bind("focus.inputmask", function(a) {
                a = (b(this), this);
                var c = a._valueGet();
                e.showMaskOnFocus && (!e.showMaskOnHover || e.showMaskOnHover && "" == c) && a._valueGet() != z().join("") && Z(a, z(), H(x()));
                wa = z().join("")
            }).bind("mouseleave.inputmask", function() {
                var a = b(this);
                if (e.clearMaskOnLostFocus) {
                    var c = z().slice(),
                        d = this._valueGet();
                    a.is(":focus") || d == a.attr("placeholder") || "" == d || (d == K().join("") ? c = [] : S(c), Z(this, c))
                }
            }).bind("click.inputmask",
                function() {
                    if (b(this).is(":focus")) {
                        var a = J(this);
                        if (a.begin == a.end)
                            if (e.radixFocus && "" != e.radixPoint && -1 != b.inArray(e.radixPoint, z()) && (xa || z().join("") == K().join(""))) J(this, b.inArray(e.radixPoint, z())), xa = !1;
                            else {
                                var a = P(a.begin),
                                    c = H(x(a));
                                c > a ? J(this, G(a) ? a : H(a)) : J(this, c)
                            }
                    }
                }).bind("dblclick.inputmask", function() {
                var a = this;
                setTimeout(function() {
                    J(a, 0, H(x()))
                }, 0)
            }).bind(q + ".inputmask dragdrop.inputmask drop.inputmask", hb).bind("cut.inputmask", function(a) {
                bb = !0;
                var d = b(this),
                    f = J(this);
                X(this, b.inputmask.keyCode.DELETE,
                    f);
                Z(this, z(), c.p, a, wa != z().join(""));
                this._valueGet() == K().join("") && d.trigger("cleared");
                e.showTooltip && d.prop("title", c.mask)
            }).bind("complete.inputmask", e.oncomplete).bind("incomplete.inputmask", e.onincomplete).bind("cleared.inputmask", e.oncleared), O.bind("keydown.inputmask", R).bind("keypress.inputmask", l), k || O.bind("compositionstart.inputmask", la).bind("compositionupdate.inputmask", La).bind("compositionend.inputmask", Ia), "paste" === q && O.bind("input.inputmask", ib));
            O.bind("setvalue.inputmask",
                function() {
                    var a = this._valueGet();
                    this._valueSet(b.isFunction(e.onBeforeMask) ? e.onBeforeMask.call(this, a, e) || a : a);
                    ua(this, !0, !1);
                    wa = z().join("");
                    (e.clearMaskOnLostFocus || e.clearIncomplete) && this._valueGet() == K().join("") && this._valueSet("")
                });
            Oa(a);
            d = b.isFunction(e.onBeforeMask) ? e.onBeforeMask.call(a, a._valueGet(), e) || a._valueGet() : a._valueGet();
            ua(a, !0, !1, d.split(""));
            d = z().slice();
            wa = d.join("");
            var f;
            try {
                f = document.activeElement
            } catch (h) {}!1 === U(d) && e.clearIncomplete && u();
            e.clearMaskOnLostFocus &&
                (d.join("") == K().join("") ? d = [] : S(d));
            Z(a, d);
            f === a && J(a, H(x()));
            qb(a)
        }
        var wa, Kb, Ma, O, ra, fa = !1,
            ka = !1,
            bb = !1,
            Ya = !1,
            xa = !0;
        if (void 0 != a) switch (a.action) {
            case "isComplete":
                return O = b(a.el), c = O.data("_inputmask").maskset, e = O.data("_inputmask").opts, U(a.buffer);
            case "unmaskedvalue":
                return O = a.$input, c = O.data("_inputmask").maskset, e = O.data("_inputmask").opts, fa = a.$input.data("_inputmask").isRTL, ta(a.$input);
            case "mask":
                wa = z().join("");
                Db(a.el);
                break;
            case "format":
                O = b({});
                O.data("_inputmask", {
                    maskset: c,
                    opts: e,
                    isRTL: e.numericInput
                });
                e.numericInput && (fa = !0);
                var M = (b.isFunction(e.onBeforeMask) ? e.onBeforeMask.call(O, a.value, e) || a.value : a.value).split("");
                return ua(O, !1, !1, fa ? M.reverse() : M), b.isFunction(e.onBeforeWrite) && e.onBeforeWrite.call(this, void 0, z(), 0, e), a.metadata ? {
                    value: fa ? z().slice().reverse().join("") : z().join(""),
                    metadata: O.inputmask("getmetadata")
                } : fa ? z().slice().reverse().join("") : z().join("");
            case "isValid":
                O = b({});
                O.data("_inputmask", {
                    maskset: c,
                    opts: e,
                    isRTL: e.numericInput
                });
                e.numericInput &&
                    (fa = !0);
                M = a.value.split("");
                ua(O, !1, !0, fa ? M.reverse() : M);
                for (var M = z(), T = aa(), Ka = M.length - 1; Ka > T && !G(Ka); Ka--);
                return M.splice(T, Ka + 1 - T), U(M) && a.value == M.join("");
            case "getemptymask":
                return O = b(a.el), c = O.data("_inputmask").maskset, e = O.data("_inputmask").opts, K();
            case "remove":
                a = a.el;
                O = b(a);
                c = O.data("_inputmask").maskset;
                e = O.data("_inputmask").opts;
                a._valueSet(ta(O));
                O.unbind(".inputmask");
                O.removeData("_inputmask");
                Object.getOwnPropertyDescriptor && (T = Object.getOwnPropertyDescriptor(a, "value"));
                T &&
                    T.get ? a._valueGet && Object.defineProperty(a, "value", {
                        get: a._valueGet,
                        set: a._valueSet
                    }) : document.__lookupGetter__ && a.__lookupGetter__("value") && a._valueGet && (a.__defineGetter__("value", a._valueGet), a.__defineSetter__("value", a._valueSet));
                try {
                    delete a._valueGet, delete a._valueSet
                } catch (pb) {
                    a._valueGet = void 0, a._valueSet = void 0
                }
                break;
            case "getmetadata":
                if (O = b(a.el), c = O.data("_inputmask").maskset, e = O.data("_inputmask").opts, b.isArray(c.metadata)) {
                    for (T = a = x(); 0 <= T; T--)
                        if (c.validPositions[T] && void 0 != c.validPositions[T].alternation) {
                            M =
                                c.validPositions[T].alternation;
                            break
                        }
                    return void 0 != M ? c.metadata[c.validPositions[a].locator[M]] : c.metadata[0]
                }
                return c.metadata
        }
    }
    if (void 0 === b.fn.inputmask) {
        var e = navigator.userAgent,
            p = null !== e.match(/iphone/i),
            h = (null !== e.match(/android.*safari.*/i), null !== e.match(/android.*chrome.*/i)),
            k = null !== e.match(/android.*firefox.*/i),
            q = (/Kindle/i.test(e) || /Silk/i.test(e) || /KFTT/i.test(e) || /KFOT/i.test(e) || /KFJWA/i.test(e) || /KFJWI/i.test(e) || /KFSOWI/i.test(e) || /KFTHWA/i.test(e) || /KFTHWI/i.test(e) || /KFAPWA/i.test(e) ||
                /KFAPWI/i.test(e), d("paste") ? "paste" : d("input") ? "input" : "propertychange");
        b.inputmask = {
            defaults: {
                placeholder: "_",
                optionalmarker: {
                    start: "[",
                    end: "]"
                },
                quantifiermarker: {
                    start: "{",
                    end: "}"
                },
                groupmarker: {
                    start: "(",
                    end: ")"
                },
                alternatormarker: "|",
                escapeChar: "\\",
                mask: null,
                oncomplete: b.noop,
                onincomplete: b.noop,
                oncleared: b.noop,
                repeat: 0,
                greedy: !0,
                autoUnmask: !1,
                removeMaskOnSubmit: !1,
                clearMaskOnLostFocus: !0,
                insertMode: !0,
                clearIncomplete: !1,
                aliases: {},
                alias: null,
                onKeyDown: b.noop,
                onBeforeMask: void 0,
                onBeforePaste: void 0,
                onBeforeWrite: void 0,
                onUnMask: void 0,
                showMaskOnFocus: !0,
                showMaskOnHover: !0,
                onKeyValidation: b.noop,
                skipOptionalPartCharacter: " ",
                showTooltip: !1,
                numericInput: !1,
                rightAlign: !1,
                undoOnEscape: !0,
                radixPoint: "",
                radixFocus: !1,
                nojumps: !1,
                nojumpsThreshold: 0,
                keepStatic: void 0,
                definitions: {
                    9: {
                        validator: "[0-9]",
                        cardinality: 1,
                        definitionSymbol: "*"
                    },
                    a: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\u00c0-\u00ff\u00b5]",
                        cardinality: 1,
                        definitionSymbol: "*"
                    },
                    "*": {
                        validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\u00c0-\u00ff\u00b5]",
                        cardinality: 1
                    }
                },
                ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123],
                isComplete: void 0,
                canClearPosition: b.noop,
                postValidation: void 0
            },
            keyCode: {
                ALT: 18,
                BACKSPACE: 8,
                CAPS_LOCK: 20,
                COMMA: 188,
                COMMAND: 91,
                COMMAND_LEFT: 91,
                COMMAND_RIGHT: 93,
                CONTROL: 17,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                INSERT: 45,
                LEFT: 37,
                MENU: 93,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SHIFT: 16,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                WINDOWS: 91
            },
            masksCache: {},
            escapeRegex: function(a) {
                return a.replace(/(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\|\$|\^)/gim, "\\$1")
            },
            format: function(d, e, h) {
                var k = b.extend(!0, {}, b.inputmask.defaults, e);
                return c(k.alias, e, k), f({
                    action: "format",
                    value: d,
                    metadata: h
                }, a(k, e && void 0 !== e.definitions), k)
            },
            isValid: function(d, e) {
                var h = b.extend(!0, {}, b.inputmask.defaults, e);
                return c(h.alias, e, h), f({
                    action: "isValid",
                    value: d
                }, a(h, e && void 0 !== e.definitions), h)
            }
        };
        b.fn.inputmask =
            function(d, e) {
                function h(a, d, e) {
                    a = b(a);
                    a.data("inputmask-alias") && c(a.data("inputmask-alias"), b.extend(!0, {}, d), d);
                    for (var f in d) {
                        var k = a.data("inputmask-" + f.toLowerCase());
                        void 0 != k && (k = "boolean" == typeof k ? k : k.toString(), "mask" == f && 0 == k.indexOf("[") ? (d[f] = k.replace(/[\s[\]]/g, "").split("','"), d[f][0] = d[f][0].replace("'", ""), d[f][d[f].length - 1] = d[f][d[f].length - 1].replace("'", "")) : d[f] = k, e && (e[f] = d[f]))
                    }
                    return d
                }
                var k, g = b.extend(!0, {}, b.inputmask.defaults, e);
                if ("string" == typeof d) switch (d) {
                    case "mask":
                        return c(g.alias,
                            e, g), this.each(function() {
                            return h(this, g), k = a(g, e && void 0 !== e.definitions), void 0 == k ? this : void f({
                                action: "mask",
                                el: this
                            }, k, g)
                        });
                    case "unmaskedvalue":
                        var q = b(this);
                        return q.data("_inputmask") ? f({
                            action: "unmaskedvalue",
                            $input: q
                        }) : q.val();
                    case "remove":
                        return this.each(function() {
                            b(this).data("_inputmask") && f({
                                action: "remove",
                                el: this
                            })
                        });
                    case "getemptymask":
                        return this.data("_inputmask") ? f({
                            action: "getemptymask",
                            el: this
                        }) : "";
                    case "hasMaskedValue":
                        return this.data("_inputmask") ? !this.data("_inputmask").opts.autoUnmask :
                            !1;
                    case "isComplete":
                        return this.data("_inputmask") ? f({
                            action: "isComplete",
                            buffer: this[0]._valueGet().split(""),
                            el: this
                        }) : !0;
                    case "getmetadata":
                        return this.data("_inputmask") ? f({
                            action: "getmetadata",
                            el: this
                        }) : void 0;
                    default:
                        return c(g.alias, e, g), c(d, e, g) || (g.mask = d), this.each(function() {
                            return h(this, g), k = a(g, e && void 0 !== e.definitions), void 0 == k ? this : void f({
                                action: "mask",
                                el: this
                            }, k, g)
                        })
                } else {
                    if ("object" == typeof d) return g = b.extend(!0, {}, b.inputmask.defaults, d), c(g.alias, d, g), this.each(function() {
                        return h(this,
                            g), k = a(g, d && void 0 !== d.definitions), void 0 == k ? this : void f({
                            action: "mask",
                            el: this
                        }, k, g)
                    });
                    if (void 0 == d) return this.each(function() {
                        var a = b(this).attr("data-inputmask");
                        if (a && "" != a) try {
                            var a = a.replace(/'/g, '"'),
                                d = b.parseJSON("{" + a + "}");
                            b.extend(!0, d, e);
                            g = b.extend(!0, {}, b.inputmask.defaults, d);
                            g = h(this, g);
                            c(g.alias, d, g);
                            g.alias = void 0;
                            b(this).inputmask("mask", g)
                        } catch (f) {}
                        if (b(this).attr("data-inputmask-mask") || b(this).attr("data-inputmask-alias")) g = b.extend(!0, {}, b.inputmask.defaults, {}), a = {}, g = h(this,
                            g, a), c(g.alias, a, g), g.alias = void 0, b(this).inputmask("mask", g)
                    })
                }
            }
    }
    return b.fn.inputmask
});
(function(b) {
    "function" === typeof define && define.amd ? define(["jquery"], b) : b(jQuery)
})(function(b) {
    b.extend(b.fn, {
        validate: function(c) {
            if (this.length) {
                var a = b.data(this[0], "validator");
                if (a) return a;
                this.attr("novalidate", "novalidate");
                a = new b.validator(c, this[0]);
                b.data(this[0], "validator", a);
                a.settings.onsubmit && (this.on("click.validate", ":submit", function(c) {
                    a.settings.submitHandler && (a.submitButton = c.target);
                    b(this).hasClass("cancel") && (a.cancelSubmit = !0);
                    void 0 !== b(this).attr("formnovalidate") &&
                        (a.cancelSubmit = !0)
                }), this.on("submit.validate", function(c) {
                    function d() {
                        var e, h;
                        return a.settings.submitHandler ? (a.submitButton && (e = b("<input type='hidden'/>").attr("name", a.submitButton.name).val(b(a.submitButton).val()).appendTo(a.currentForm)), h = a.settings.submitHandler.call(a, a.currentForm, c), a.submitButton && e.remove(), void 0 !== h ? h : !1) : !0
                    }
                    a.settings.debug && c.preventDefault();
                    if (a.cancelSubmit) return a.cancelSubmit = !1, d();
                    if (a.form()) return a.pendingRequest ? (a.formSubmitted = !0, !1) : d();
                    a.focusInvalid();
                    return !1
                }));
                return a
            }
            c && c.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            var c, a, d;
            b(this[0]).is("form") ? c = this.validate().form() : (d = [], c = !0, a = b(this[0].form).validate(), this.each(function() {
                c = a.element(this) && c;
                d = d.concat(a.errorList)
            }), a.errorList = d);
            return c
        },
        rules: function(c, a) {
            var d = this[0],
                e, g, h, k;
            if (c) switch (e = b.data(d.form, "validator").settings, g = e.rules, h = b.validator.staticRules(d), c) {
                case "add":
                    b.extend(h, b.validator.normalizeRule(a));
                    delete h.messages;
                    g[d.name] = h;
                    a.messages && (e.messages[d.name] = b.extend(e.messages[d.name], a.messages));
                    break;
                case "remove":
                    if (!a) return delete g[d.name], h;
                    k = {};
                    b.each(a.split(/\s/), function(a, c) {
                        k[c] = h[c];
                        delete h[c];
                        "required" === c && b(d).removeAttr("aria-required")
                    });
                    return k
            }
            e = b.validator.normalizeRules(b.extend({}, b.validator.classRules(d), b.validator.attributeRules(d), b.validator.dataRules(d), b.validator.staticRules(d)), d);
            e.required && (g = e.required, delete e.required, e = b.extend({
                    required: g
                }, e),
                b(d).attr("aria-required", "true"));
            e.remote && (g = e.remote, delete e.remote, e = b.extend(e, {
                remote: g
            }));
            return e
        }
    });
    b.extend(b.expr[":"], {
        blank: function(c) {
            return !b.trim("" + b(c).val())
        },
        filled: function(c) {
            return !!b.trim("" + b(c).val())
        },
        unchecked: function(c) {
            return !b(c).prop("checked")
        }
    });
    b.validator = function(c, a) {
        this.settings = b.extend(!0, {}, b.validator.defaults, c);
        this.currentForm = a;
        this.init()
    };
    b.validator.format = function(c, a) {
        if (1 === arguments.length) return function() {
            var a = b.makeArray(arguments);
            a.unshift(c);
            return b.validator.format.apply(this, a)
        };
        2 < arguments.length && a.constructor !== Array && (a = b.makeArray(arguments).slice(1));
        a.constructor !== Array && (a = [a]);
        b.each(a, function(a, b) {
            c = c.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
                return b
            })
        });
        return c
    };
    b.extend(b.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: b([]),
            errorLabelContainer: b([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(b) {
                this.lastActive =
                    b;
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, b, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(b)))
            },
            onfocusout: function(b) {
                this.checkable(b) || !(b.name in this.submitted) && this.optional(b) || this.element(b)
            },
            onkeyup: function(c, a) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === a.which && "" === this.elementValue(c) || -1 !== b.inArray(a.keyCode, d) || (c.name in this.submitted || c === this.lastElement) && this.element(c)
            },
            onclick: function(b) {
                b.name in
                    this.submitted ? this.element(b) : b.parentNode.name in this.submitted && this.element(b.parentNode)
            },
            highlight: function(c, a, d) {
                "radio" === c.type ? this.findByName(c.name).addClass(a).removeClass(d) : b(c).addClass(a).removeClass(d)
            },
            unhighlight: function(c, a, d) {
                "radio" === c.type ? this.findByName(c.name).removeClass(a).addClass(d) : b(c).removeClass(a).addClass(d)
            }
        },
        setDefaults: function(c) {
            b.extend(b.validator.defaults, c)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: b.validator.format("Please enter no more than {0} characters."),
            minlength: b.validator.format("Please enter at least {0} characters."),
            rangelength: b.validator.format("Please enter a value between {0} and {1} characters long."),
            range: b.validator.format("Please enter a value between {0} and {1}."),
            max: b.validator.format("Please enter a value less than or equal to {0}."),
            min: b.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function c(a) {
                    var c = b.data(this.form, "validator"),
                        d = "on" + a.type.replace(/^validate/, ""),
                        f = c.settings;
                    f[d] && !b(this).is(f.ignore) && f[d].call(c, this, a)
                }
                this.labelContainer = b(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length &&
                    this.labelContainer || b(this.currentForm);
                this.containers = b(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var a = this.groups = {},
                    d;
                b.each(this.settings.groups, function(c, d) {
                    "string" === typeof d && (d = d.split(/\s/));
                    b.each(d, function(b, d) {
                        a[d] = c
                    })
                });
                d = this.settings.rules;
                b.each(d, function(a, c) {
                    d[a] = b.validator.normalizeRule(c)
                });
                b(this.currentForm).on("focusin.validate focusout.validate keyup.validate",
                    ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", c).on("click.validate", "select, option, [type='radio'], [type='checkbox']", c);
                if (this.settings.invalidHandler) b(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                b(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required",
                    "true")
            },
            form: function() {
                this.checkForm();
                b.extend(this.submitted, this.errorMap);
                this.invalid = b.extend({}, this.errorMap);
                this.valid() || b(this.currentForm).triggerHandler("invalid-form", [this]);
                this.showErrors();
                return this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var b = 0, a = this.currentElements = this.elements(); a[b]; b++) this.check(a[b]);
                return this.valid()
            },
            element: function(c) {
                var a = this.clean(c),
                    d = this.validationTargetFor(a),
                    e = !0;
                this.lastElement = d;
                void 0 === d ? delete this.invalid[a.name] :
                    (this.prepareElement(d), this.currentElements = b(d), (e = !1 !== this.check(d)) ? delete this.invalid[d.name] : this.invalid[d.name] = !0);
                b(c).attr("aria-invalid", !e);
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers));
                this.showErrors();
                return e
            },
            showErrors: function(c) {
                if (c) {
                    b.extend(this.errorMap, c);
                    this.errorList = [];
                    for (var a in c) this.errorList.push({
                        message: c[a],
                        element: this.findByName(a)[0]
                    });
                    this.successList = b.grep(this.successList, function(a) {
                        return !(a.name in c)
                    })
                }
                this.settings.showErrors ?
                    this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                b.fn.resetForm && b(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                var c, a = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                if (this.settings.unhighlight)
                    for (c = 0; a[c]; c++) this.settings.unhighlight.call(this, a[c], this.settings.errorClass, "");
                else a.removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(b) {
                var a = 0,
                    d;
                for (d in b) a++;
                return a
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(b) {
                b.not(this.containers).text("");
                this.addWrapper(b).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    b(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (c) {}
            },
            findLastActive: function() {
                var c =
                    this.lastActive;
                return c && 1 === b.grep(this.errorList, function(a) {
                    return a.element.name === c.name
                }).length && c
            },
            elements: function() {
                var c = this,
                    a = {};
                return b(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    !this.name && c.settings.debug && window.console && console.error("%o has no name assigned", this);
                    return this.name in a || !c.objectLength(b(this).rules()) ? !1 : a[this.name] = !0
                })
            },
            clean: function(c) {
                return b(c)[0]
            },
            errors: function() {
                var c =
                    this.settings.errorClass.split(" ").join(".");
                return b(this.settings.errorElement + "." + c, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = b([]);
                this.toHide = b([]);
                this.currentElements = b([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(b) {
                this.reset();
                this.toHide = this.errorsFor(b)
            },
            elementValue: function(c) {
                var a = b(c),
                    d = c.type;
                if ("radio" === d || "checkbox" === d) return this.findByName(c.name).filter(":checked").val();
                if ("number" === d && "undefined" !== typeof c.validity) return c.validity.badInput ? !1 : a.val();
                c = a.val();
                return "string" === typeof c ? c.replace(/\r/g, "") : c
            },
            check: function(c) {
                c = this.validationTargetFor(this.clean(c));
                var a = b(c).rules(),
                    d = b.map(a, function(a, b) {
                        return b
                    }).length,
                    e = !1,
                    g = this.elementValue(c),
                    h, k, q;
                for (k in a) {
                    q = {
                        method: k,
                        parameters: a[k]
                    };
                    try {
                        if (h = b.validator.methods[k].call(this, g, c, q.parameters), "dependency-mismatch" === h && 1 === d) e = !0;
                        else {
                            e = !1;
                            if ("pending" === h) {
                                this.toHide = this.toHide.not(this.errorsFor(c));
                                return
                            }
                            if (!h) return this.formatAndAdd(c, q), !1
                        }
                    } catch (m) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + c.id + ", check the '" + q.method + "' method.", m), m instanceof TypeError && (m.message += ".  Exception occurred when checking element " + c.id + ", check the '" + q.method + "' method."), m;
                    }
                }
                if (!e) return this.objectLength(a) && this.successList.push(c), !0
            },
            customDataMessage: function(c, a) {
                return b(c).data("msg" + a.charAt(0).toUpperCase() + a.substring(1).toLowerCase()) ||
                    b(c).data("msg")
            },
            customMessage: function(b, a) {
                var d = this.settings.messages[b];
                return d && (d.constructor === String ? d : d[a])
            },
            findDefined: function() {
                for (var b = 0; b < arguments.length; b++)
                    if (void 0 !== arguments[b]) return arguments[b]
            },
            defaultMessage: function(c, a) {
                return this.findDefined(this.customMessage(c.name, a), this.customDataMessage(c, a), !this.settings.ignoreTitle && c.title || void 0, b.validator.messages[a], "<strong>Warning: No message defined for " + c.name + "</strong>")
            },
            formatAndAdd: function(c, a) {
                var d = this.defaultMessage(c,
                        a.method),
                    e = /\$?\{(\d+)\}/g;
                "function" === typeof d ? d = d.call(this, a.parameters, c) : e.test(d) && (d = b.validator.format(d.replace(e, "{$1}"), a.parameters));
                this.errorList.push({
                    message: d,
                    element: c,
                    method: a.method
                });
                this.errorMap[c.name] = d;
                this.submitted[c.name] = d
            },
            addWrapper: function(b) {
                this.settings.wrapper && (b = b.add(b.parent(this.settings.wrapper)));
                return b
            },
            defaultShowErrors: function() {
                var b, a;
                for (b = 0; this.errorList[b]; b++) a = this.errorList[b], this.settings.highlight && this.settings.highlight.call(this,
                    a.element, this.settings.errorClass, this.settings.validClass), this.showLabel(a.element, a.message);
                this.errorList.length && (this.toShow = this.toShow.add(this.containers));
                if (this.settings.success)
                    for (b = 0; this.successList[b]; b++) this.showLabel(this.successList[b]);
                if (this.settings.unhighlight)
                    for (b = 0, a = this.validElements(); a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return b(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(c, a) {
                var d, e, g = this.errorsFor(c),
                    h = this.idOrName(c),
                    k = b(c).attr("aria-describedby");
                g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(a)) : (d = g = b("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(a || ""), this.settings.wrapper &&
                    (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, b(c)) : d.insertAfter(c), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (d = g.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), k ? k.match(new RegExp("\\b" + d + "\\b")) || (k += " " + d) : k = d, b(c).attr("aria-describedby", k), (e = this.groups[c.name]) && b.each(this.groups, function(a, c) {
                        c === e && b("[name='" + a + "']", this.currentForm).attr("aria-describedby",
                            g.attr("id"))
                    })));
                !a && this.settings.success && (g.text(""), "string" === typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, c));
                this.toShow = this.toShow.add(g)
            },
            errorsFor: function(c) {
                var a = this.idOrName(c);
                c = b(c).attr("aria-describedby");
                a = "label[for='" + a + "'], label[for='" + a + "'] *";
                c && (a = a + ", #" + c.replace(/\s+/g, ", #"));
                return this.errors().filter(a)
            },
            idOrName: function(b) {
                return this.groups[b.name] || (this.checkable(b) ? b.name : b.id || b.name)
            },
            validationTargetFor: function(c) {
                this.checkable(c) &&
                    (c = this.findByName(c.name));
                return b(c).not(this.settings.ignore)[0]
            },
            checkable: function(b) {
                return /radio|checkbox/i.test(b.type)
            },
            findByName: function(c) {
                return b(this.currentForm).find("[name='" + c + "']")
            },
            getLength: function(c, a) {
                switch (a.nodeName.toLowerCase()) {
                    case "select":
                        return b("option:selected", a).length;
                    case "input":
                        if (this.checkable(a)) return this.findByName(a.name).filter(":checked").length
                }
                return c.length
            },
            depend: function(b, a) {
                return this.dependTypes[typeof b] ? this.dependTypes[typeof b](b,
                    a) : !0
            },
            dependTypes: {
                "boolean": function(b) {
                    return b
                },
                string: function(c, a) {
                    return !!b(c, a.form).length
                },
                "function": function(b, a) {
                    return b(a)
                }
            },
            optional: function(c) {
                var a = this.elementValue(c);
                return !b.validator.methods.required.call(this, a, c) && "dependency-mismatch"
            },
            startRequest: function(b) {
                this.pending[b.name] || (this.pendingRequest++, this.pending[b.name] = !0)
            },
            stopRequest: function(c, a) {
                this.pendingRequest--;
                0 > this.pendingRequest && (this.pendingRequest = 0);
                delete this.pending[c.name];
                a && 0 === this.pendingRequest &&
                    this.formSubmitted && this.form() ? (b(this.currentForm).submit(), this.formSubmitted = !1) : !a && 0 === this.pendingRequest && this.formSubmitted && (b(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(c) {
                return b.data(c, "previousValue") || b.data(c, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(c, "remote")
                })
            },
            destroy: function() {
                this.resetForm();
                b(this.currentForm).off(".validate").removeData("validator")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(c, a) {
            c.constructor === String ? this.classRuleSettings[c] = a : b.extend(this.classRuleSettings, c)
        },
        classRules: function(c) {
            var a = {};
            (c = b(c).attr("class")) && b.each(c.split(" "), function() {
                this in b.validator.classRuleSettings && b.extend(a, b.validator.classRuleSettings[this])
            });
            return a
        },
        normalizeAttributeRule: function(b, a, d, e) {
            /min|max/.test(d) && (null ===
                a || /number|range|text/.test(a)) && (e = Number(e), isNaN(e) && (e = void 0));
            e || 0 === e ? b[d] = e : a === d && "range" !== a && (b[d] = !0)
        },
        attributeRules: function(c) {
            var a = {},
                d = b(c),
                e = c.getAttribute("type"),
                g, h;
            for (g in b.validator.methods) "required" === g ? (h = c.getAttribute(g), "" === h && (h = !0), h = !!h) : h = d.attr(g), this.normalizeAttributeRule(a, e, g, h);
            a.maxlength && /-1|2147483647|524288/.test(a.maxlength) && delete a.maxlength;
            return a
        },
        dataRules: function(c) {
            var a = {},
                d = b(c);
            c = c.getAttribute("type");
            var e, g;
            for (e in b.validator.methods) g =
                d.data("rule" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()), this.normalizeAttributeRule(a, c, e, g);
            return a
        },
        staticRules: function(c) {
            var a = {},
                d = b.data(c.form, "validator");
            d.settings.rules && (a = b.validator.normalizeRule(d.settings.rules[c.name]) || {});
            return a
        },
        normalizeRules: function(c, a) {
            b.each(c, function(d, e) {
                if (!1 === e) delete c[d];
                else if (e.param || e.depends) {
                    var g = !0;
                    switch (typeof e.depends) {
                        case "string":
                            g = !!b(e.depends, a.form).length;
                            break;
                        case "function":
                            g = e.depends.call(a, a)
                    }
                    g ? c[d] = void 0 !==
                        e.param ? e.param : !0 : delete c[d]
                }
            });
            b.each(c, function(d, e) {
                c[d] = b.isFunction(e) ? e(a) : e
            });
            b.each(["minlength", "maxlength"], function() {
                c[this] && (c[this] = Number(c[this]))
            });
            b.each(["rangelength", "range"], function() {
                var a;
                c[this] && (b.isArray(c[this]) ? c[this] = [Number(c[this][0]), Number(c[this][1])] : "string" === typeof c[this] && (a = c[this].replace(/[\[\]]/g, "").split(/[\s,]+/), c[this] = [Number(a[0]), Number(a[1])]))
            });
            b.validator.autoCreateRanges && (null != c.min && null != c.max && (c.range = [c.min, c.max], delete c.min,
                delete c.max), null != c.minlength && null != c.maxlength && (c.rangelength = [c.minlength, c.maxlength], delete c.minlength, delete c.maxlength));
            return c
        },
        normalizeRule: function(c) {
            if ("string" === typeof c) {
                var a = {};
                b.each(c.split(/\s/), function() {
                    a[this] = !0
                });
                c = a
            }
            return c
        },
        addMethod: function(c, a, d) {
            b.validator.methods[c] = a;
            b.validator.messages[c] = void 0 !== d ? d : b.validator.messages[c];
            3 > a.length && b.validator.addClassRules(c, b.validator.normalizeRule(c))
        },
        methods: {
            required: function(c, a, d) {
                return this.depend(d, a) ?
                    "select" === a.nodeName.toLowerCase() ? (c = b(a).val()) && 0 < c.length : this.checkable(a) ? 0 < this.getLength(c, a) : 0 < c.length : "dependency-mismatch"
            },
            email: function(b, a) {
                return this.optional(a) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(b)
            },
            url: function(b, a) {
                return this.optional(a) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(b)
            },
            date: function(b, a) {
                return this.optional(a) || !/Invalid|NaN/.test((new Date(b)).toString())
            },
            dateISO: function(b, a) {
                return this.optional(a) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(b)
            },
            number: function(b, a) {
                return this.optional(a) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(b)
            },
            digits: function(b, a) {
                return this.optional(a) || /^\d+$/.test(b)
            },
            creditcard: function(b, a) {
                if (this.optional(a)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(b)) return !1;
                var d = 0,
                    e = 0,
                    g = !1,
                    h;
                b =
                    b.replace(/\D/g, "");
                if (13 > b.length || 19 < b.length) return !1;
                for (h = b.length - 1; 0 <= h; h--) e = b.charAt(h), e = parseInt(e, 10), g && 9 < (e *= 2) && (e -= 9), d += e, g = !g;
                return 0 === d % 10
            },
            minlength: function(c, a, d) {
                c = b.isArray(c) ? c.length : this.getLength(c, a);
                return this.optional(a) || c >= d
            },
            maxlength: function(c, a, d) {
                c = b.isArray(c) ? c.length : this.getLength(c, a);
                return this.optional(a) || c <= d
            },
            rangelength: function(c, a, d) {
                c = b.isArray(c) ? c.length : this.getLength(c, a);
                return this.optional(a) || c >= d[0] && c <= d[1]
            },
            min: function(b, a, d) {
                return this.optional(a) ||
                    b >= d
            },
            max: function(b, a, d) {
                return this.optional(a) || b <= d
            },
            range: function(b, a, d) {
                return this.optional(a) || b >= d[0] && b <= d[1]
            },
            equalTo: function(c, a, d) {
                d = b(d);
                if (this.settings.onfocusout) d.off(".validate-equalTo").on("blur.validate-equalTo", function() {
                    b(a).valid()
                });
                return c === d.val()
            },
            remote: function(c, a, d) {
                if (this.optional(a)) return "dependency-mismatch";
                var e = this.previousValue(a),
                    g, h;
                this.settings.messages[a.name] || (this.settings.messages[a.name] = {});
                e.originalMessage = this.settings.messages[a.name].remote;
                this.settings.messages[a.name].remote = e.message;
                d = "string" === typeof d && {
                    url: d
                } || d;
                if (e.old === c) return e.valid;
                e.old = c;
                g = this;
                this.startRequest(a);
                h = {};
                h[a.name] = c;
                b.ajax(b.extend(!0, {
                    mode: "abort",
                    port: "validate" + a.name,
                    dataType: "json",
                    data: h,
                    context: g.currentForm,
                    success: function(d) {
                        var f = !0 === d || "true" === d,
                            h;
                        g.settings.messages[a.name].remote = e.originalMessage;
                        f ? (h = g.formSubmitted, g.prepareElement(a), g.formSubmitted = h, g.successList.push(a), delete g.invalid[a.name], g.showErrors()) : (h = {}, d = d || g.defaultMessage(a,
                            "remote"), h[a.name] = e.message = b.isFunction(d) ? d(c) : d, g.invalid[a.name] = !0, g.showErrors(h));
                        e.valid = f;
                        g.stopRequest(a, f)
                    }
                }, d));
                return "pending"
            }
        }
    });
    var d = {},
        g;
    b.ajaxPrefilter ? b.ajaxPrefilter(function(b, a, f) {
        a = b.port;
        "abort" === b.mode && (d[a] && d[a].abort(), d[a] = f)
    }) : (g = b.ajax, b.ajax = function(c) {
        var a = ("port" in c ? c : b.ajaxSettings).port;
        return "abort" === ("mode" in c ? c : b.ajaxSettings).mode ? (d[a] && d[a].abort(), d[a] = g.apply(this, arguments), d[a]) : g.apply(this, arguments)
    })
});
(function(b) {
    "function" === typeof define && define.amd ? define(["jquery", "./jquery.validate"], b) : b(jQuery)
})(function(b) {
    (function() {
        function d(b) {
            return b.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/[.(),;:!?%#$'\"_+=\/\-\u201c\u201d\u2019]*/g, "")
        }
        b.validator.addMethod("maxWords", function(b, c, a) {
            return this.optional(c) || d(b).match(/\b\w+\b/g).length <= a
        }, b.validator.format("Please enter {0} words or less."));
        b.validator.addMethod("minWords", function(b, c, a) {
            return this.optional(c) ||
                d(b).match(/\b\w+\b/g).length >= a
        }, b.validator.format("Please enter at least {0} words."));
        b.validator.addMethod("rangeWords", function(b, c, a) {
            b = d(b);
            var f = /\b\w+\b/g;
            return this.optional(c) || b.match(f).length >= a[0] && b.match(f).length <= a[1]
        }, b.validator.format("Please enter between {0} and {1} words."))
    })();
    b.validator.addMethod("accept", function(d, g, c) {
        d = "string" === typeof c ? c.replace(/\s/g, "").replace(/,/g, "|") : "image/*";
        c = this.optional(g);
        var a;
        if (c) return c;
        if ("file" === b(g).attr("type") && (d = d.replace(/\*/g,
                ".*"), g.files && g.files.length))
            for (c = 0; c < g.files.length; c++)
                if (a = g.files[c], !a.type.match(new RegExp("\\.?(" + d + ")$", "i"))) return !1;
        return !0
    }, b.validator.format("Please enter a value with a valid mimetype."));
    b.validator.addMethod("alphanumeric", function(b, g) {
        return this.optional(g) || /^\w+$/i.test(b)
    }, "Letters, numbers, and underscores only please");
    b.validator.addMethod("bankaccountNL", function(b, g) {
        if (this.optional(g)) return !0;
        if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(b)) return !1;
        var c = b.replace(/ /g,
                ""),
            a = 0,
            f = c.length,
            e, p, h;
        for (e = 0; e < f; e++) p = f - e, h = c.substring(e, e + 1), a += p * h;
        return 0 === a % 11
    }, "Please specify a valid bank account number");
    b.validator.addMethod("bankorgiroaccountNL", function(d, g) {
        return this.optional(g) || b.validator.methods.bankaccountNL.call(this, d, g) || b.validator.methods.giroaccountNL.call(this, d, g)
    }, "Please specify a valid bank or giro account number");
    b.validator.addMethod("bic", function(b, g) {
            return this.optional(g) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-2])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(b)
        },
        "Please specify a valid BIC code");
    b.validator.addMethod("cifES", function(b) {
        var g = [],
            c, a, f, e;
        b = b.toUpperCase();
        if (!b.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)")) return !1;
        for (c = 0; 9 > c; c++) g[c] = parseInt(b.charAt(c), 10);
        c = g[2] + g[4] + g[6];
        for (a = 1; 8 > a; a += 2) f = (2 * g[a]).toString(), e = f.charAt(1), c += parseInt(f.charAt(0), 10) + ("" === e ? 0 : parseInt(e, 10));
        return /^[ABCDEFGHJNPQRSUVW]{1}/.test(b) ? (c += "", c = 10 - parseInt(c.charAt(c.length - 1), 10), b += c, g[8].toString() === String.fromCharCode(64 +
            c) || g[8].toString() === b.charAt(b.length - 1)) : !1
    }, "Please specify a valid CIF number.");
    b.validator.addMethod("cpfBR", function(b) {
        b = b.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "");
        if (11 !== b.length) return !1;
        var g = 0,
            c, a, f, e;
        c = parseInt(b.substring(9, 10), 10);
        a = parseInt(b.substring(10, 11), 10);
        f = function(a, b) {
            var c = 10 * a % 11;
            if (10 === c || 11 === c) c = 0;
            return c === b
        };
        if ("" === b || "00000000000" === b || "11111111111" === b || "22222222222" === b || "33333333333" === b || "44444444444" === b || "55555555555" === b || "66666666666" ===
            b || "77777777777" === b || "88888888888" === b || "99999999999" === b) return !1;
        for (e = 1; 9 >= e; e++) g += parseInt(b.substring(e - 1, e), 10) * (11 - e);
        if (f(g, c)) {
            g = 0;
            for (e = 1; 10 >= e; e++) g += parseInt(b.substring(e - 1, e), 10) * (12 - e);
            return f(g, a)
        }
        return !1
    }, "Please specify a valid CPF number");
    b.validator.addMethod("creditcardtypes", function(b, g, c) {
        if (/[^0-9\-]+/.test(b)) return !1;
        b = b.replace(/\D/g, "");
        g = 0;
        c.mastercard && (g |= 1);
        c.visa && (g |= 2);
        c.amex && (g |= 4);
        c.dinersclub && (g |= 8);
        c.enroute && (g |= 16);
        c.discover && (g |= 32);
        c.jcb && (g |= 64);
        c.unknown && (g |= 128);
        c.all && (g = 255);
        return g & 1 && /^(5[12345])/.test(b) || g & 2 && /^(4)/.test(b) ? 16 === b.length : g & 4 && /^(3[47])/.test(b) ? 15 === b.length : g & 8 && /^(3(0[012345]|[68]))/.test(b) ? 14 === b.length : g & 16 && /^(2(014|149))/.test(b) ? 15 === b.length : g & 32 && /^(6011)/.test(b) || g & 64 && /^(3)/.test(b) ? 16 === b.length : g & 64 && /^(2131|1800)/.test(b) ? 15 === b.length : g & 128 ? !0 : !1
    }, "Please enter a valid credit card number.");
    b.validator.addMethod("currency", function(b, g, c) {
        var a = "string" === typeof c,
            f = a ? c : c[0];
        c = a ? !0 : c[1];
        f = f.replace(/,/g,
            "");
        f = "^[" + (c ? f + "]" : f + "]?") + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$";
        f = new RegExp(f);
        return this.optional(g) || f.test(b)
    }, "Please specify a valid currency");
    b.validator.addMethod("dateFA", function(b, g) {
        return this.optional(g) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(b)
    }, b.validator.messages.date);
    b.validator.addMethod("dateITA", function(b, g) {
        var c = !1,
            a, f, e;
        /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(b) ? (a = b.split("/"), c = parseInt(a[0], 10), f = parseInt(a[1], 10), a = parseInt(a[2], 10), e = new Date(Date.UTC(a, f - 1, c, 12, 0, 0, 0)), c = e.getUTCFullYear() === a && e.getUTCMonth() === f - 1 && e.getUTCDate() === c ? !0 : !1) : c = !1;
        return this.optional(g) || c
    }, b.validator.messages.date);
    b.validator.addMethod("dateNL", function(b, g) {
        return this.optional(g) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(b)
    }, b.validator.messages.date);
    b.validator.addMethod("extension",
        function(b, g, c) {
            c = "string" === typeof c ? c.replace(/,/g, "|") : "png|jpe?g|gif";
            return this.optional(g) || b.match(new RegExp("\\.(" + c + ")$", "i"))
        }, b.validator.format("Please enter a value with a valid extension."));
    b.validator.addMethod("giroaccountNL", function(b, g) {
        return this.optional(g) || /^[0-9]{1,7}$/.test(b)
    }, "Please specify a valid giro account number");
    b.validator.addMethod("iban", function(b, g) {
        if (this.optional(g)) return !0;
        var c = b.replace(/ /g, "").toUpperCase(),
            a = "",
            f = !0,
            e = "",
            p = "",
            h, p = {
                AL: "\\d{8}[\\dA-Z]{16}",
                AD: "\\d{8}[\\dA-Z]{12}",
                AT: "\\d{16}",
                AZ: "[\\dA-Z]{4}\\d{20}",
                BE: "\\d{12}",
                BH: "[A-Z]{4}[\\dA-Z]{14}",
                BA: "\\d{16}",
                BR: "\\d{23}[A-Z][\\dA-Z]",
                BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
                CR: "\\d{17}",
                HR: "\\d{17}",
                CY: "\\d{8}[\\dA-Z]{16}",
                CZ: "\\d{20}",
                DK: "\\d{14}",
                DO: "[A-Z]{4}\\d{20}",
                EE: "\\d{16}",
                FO: "\\d{14}",
                FI: "\\d{14}",
                FR: "\\d{10}[\\dA-Z]{11}\\d{2}",
                GE: "[\\dA-Z]{2}\\d{16}",
                DE: "\\d{18}",
                GI: "[A-Z]{4}[\\dA-Z]{15}",
                GR: "\\d{7}[\\dA-Z]{16}",
                GL: "\\d{14}",
                GT: "[\\dA-Z]{4}[\\dA-Z]{20}",
                HU: "\\d{24}",
                IS: "\\d{22}",
                IE: "[\\dA-Z]{4}\\d{14}",
                IL: "\\d{19}",
                IT: "[A-Z]\\d{10}[\\dA-Z]{12}",
                KZ: "\\d{3}[\\dA-Z]{13}",
                KW: "[A-Z]{4}[\\dA-Z]{22}",
                LV: "[A-Z]{4}[\\dA-Z]{13}",
                LB: "\\d{4}[\\dA-Z]{20}",
                LI: "\\d{5}[\\dA-Z]{12}",
                LT: "\\d{16}",
                LU: "\\d{3}[\\dA-Z]{13}",
                MK: "\\d{3}[\\dA-Z]{10}\\d{2}",
                MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
                MR: "\\d{23}",
                MU: "[A-Z]{4}\\d{19}[A-Z]{3}",
                MC: "\\d{10}[\\dA-Z]{11}\\d{2}",
                MD: "[\\dA-Z]{2}\\d{18}",
                ME: "\\d{18}",
                NL: "[A-Z]{4}\\d{10}",
                NO: "\\d{11}",
                PK: "[\\dA-Z]{4}\\d{16}",
                PS: "[\\dA-Z]{4}\\d{21}",
                PL: "\\d{24}",
                PT: "\\d{21}",
                RO: "[A-Z]{4}[\\dA-Z]{16}",
                SM: "[A-Z]\\d{10}[\\dA-Z]{12}",
                SA: "\\d{2}[\\dA-Z]{18}",
                RS: "\\d{18}",
                SK: "\\d{20}",
                SI: "\\d{15}",
                ES: "\\d{20}",
                SE: "\\d{20}",
                CH: "\\d{5}[\\dA-Z]{12}",
                TN: "\\d{20}",
                TR: "\\d{5}[\\dA-Z]{17}",
                AE: "\\d{3}\\d{16}",
                GB: "[A-Z]{4}\\d{14}",
                VG: "[\\dA-Z]{4}\\d{16}"
            }[c.substring(0, 2)];
        if ("undefined" !== typeof p && (p = new RegExp("^[A-Z]{2}\\d{2}" + p + "$", ""), !p.test(c))) return !1;
        c = c.substring(4, c.length) + c.substring(0, 4);
        for (h = 0; h < c.length; h++) p = c.charAt(h), "0" !== p && (f = !1), f || (a += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(p));
        for (f = 0; f < a.length; f++) c = a.charAt(f), p = "" + e + "" + c, e = p % 97;
        return 1 === e
    }, "Please specify a valid IBAN");
    b.validator.addMethod("integer", function(b, g) {
        return this.optional(g) || /^-?\d+$/.test(b)
    }, "A positive or negative non-decimal number please");
    b.validator.addMethod("ipv4", function(b, g) {
        return this.optional(g) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(b)
    }, "Please enter a valid IP v4 address.");
    b.validator.addMethod("ipv6",
        function(b, g) {
            return this.optional(g) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(b)
        },
        "Please enter a valid IP v6 address.");
    b.validator.addMethod("lettersonly", function(b, g) {
        return this.optional(g) || /^[a-z]+$/i.test(b)
    }, "Letters only please");
    b.validator.addMethod("letterswithbasicpunc", function(b, g) {
        return this.optional(g) || /^[a-z\-.,()'"\s]+$/i.test(b)
    }, "Letters or punctuation only please");
    b.validator.addMethod("mobileNL", function(b, g) {
        return this.optional(g) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(b)
    }, "Please specify a valid mobile number");
    b.validator.addMethod("mobileUK", function(b, g) {
        b = b.replace(/\(|\)|\s+|-/g, "");
        return this.optional(g) || 9 < b.length && b.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/)
    }, "Please specify a valid mobile number");
    b.validator.addMethod("nieES", function(b) {
        b = b.toUpperCase();
        return b.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") ? /^[T]{1}/.test(b) ? b[8] === /^[T]{1}[A-Z0-9]{8}$/.test(b) : /^[XYZ]{1}/.test(b) ? b[8] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt(b.replace("X",
            "0").replace("Y", "1").replace("Z", "2").substring(0, 8) % 23) : !1 : !1
    }, "Please specify a valid NIE number.");
    b.validator.addMethod("nifES", function(b) {
        b = b.toUpperCase();
        return b.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") ? /^[0-9]{8}[A-Z]{1}$/.test(b) ? "TRWAGMYFPDXBNJZSQVHLCKE".charAt(b.substring(8, 0) % 23) === b.charAt(8) : /^[KLM]{1}/.test(b) ? b[8] === String.fromCharCode(64) : !1 : !1
    }, "Please specify a valid NIF number.");
    jQuery.validator.addMethod("notEqualTo", function(d, g, c) {
        return this.optional(g) ||
            !b.validator.methods.equalTo.call(this, d, g, c)
    }, "Please enter a different value, values must not be the same.");
    b.validator.addMethod("nowhitespace", function(b, g) {
        return this.optional(g) || /^\S+$/i.test(b)
    }, "No white space please");
    b.validator.addMethod("pattern", function(b, g, c) {
        if (this.optional(g)) return !0;
        "string" === typeof c && (c = new RegExp("^(?:" + c + ")$"));
        return c.test(b)
    }, "Invalid format.");
    b.validator.addMethod("phoneNL", function(b, g) {
            return this.optional(g) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(b)
        },
        "Please specify a valid phone number.");
    b.validator.addMethod("phoneUK", function(b, g) {
        b = b.replace(/\(|\)|\s+|-/g, "");
        return this.optional(g) || 9 < b.length && b.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)
    }, "Please specify a valid phone number");
    b.validator.addMethod("phoneUS", function(b, g) {
            b = b.replace(/\s+/g, "");
            return this.optional(g) || 9 < b.length && b.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/)
        },
        "Please specify a valid phone number");
    b.validator.addMethod("phonesUK", function(b, g) {
        b = b.replace(/\(|\)|\s+|-/g, "");
        return this.optional(g) || 9 < b.length && b.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/)
    }, "Please specify a valid uk phone number");
    b.validator.addMethod("postalCodeCA", function(b, g) {
        return this.optional(g) || /^[ABCEGHJKLMNPRSTVXY]\d[A-Z] \d[A-Z]\d$/.test(b)
    }, "Please specify a valid postal code");
    b.validator.addMethod("postalcodeBR", function(b,
        g) {
        return this.optional(g) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(b)
    }, "Informe um CEP v\u00e1lido.");
    b.validator.addMethod("postalcodeIT", function(b, g) {
        return this.optional(g) || /^\d{5}$/.test(b)
    }, "Please specify a valid postal code");
    b.validator.addMethod("postalcodeNL", function(b, g) {
        return this.optional(g) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(b)
    }, "Please specify a valid postal code");
    b.validator.addMethod("postcodeUK", function(b, g) {
            return this.optional(g) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(b)
        },
        "Please specify a valid UK postcode");
    b.validator.addMethod("require_from_group", function(d, g, c) {
        d = b(c[1], g.form);
        var a = d.eq(0),
            f = a.data("valid_req_grp") ? a.data("valid_req_grp") : b.extend({}, this);
        c = d.filter(function() {
            return f.elementValue(this)
        }).length >= c[0];
        a.data("valid_req_grp", f);
        b(g).data("being_validated") || (d.data("being_validated", !0), d.each(function() {
            f.element(this)
        }), d.data("being_validated", !1));
        return c
    }, b.validator.format("Please fill at least {0} of these fields."));
    b.validator.addMethod("skip_or_fill_minimum",
        function(d, g, c) {
            d = b(c[1], g.form);
            var a = d.eq(0),
                f = a.data("valid_skip") ? a.data("valid_skip") : b.extend({}, this),
                e = d.filter(function() {
                    return f.elementValue(this)
                }).length;
            c = 0 === e || e >= c[0];
            a.data("valid_skip", f);
            b(g).data("being_validated") || (d.data("being_validated", !0), d.each(function() {
                f.element(this)
            }), d.data("being_validated", !1));
            return c
        }, b.validator.format("Please either skip these fields or fill at least {0} of them."));
    b.validator.addMethod("stateUS", function(b, g, c) {
        var a = "undefined" === typeof c,
            f = a || "undefined" === typeof c.caseSensitive ? !1 : c.caseSensitive,
            e = a || "undefined" === typeof c.includeTerritories ? !1 : c.includeTerritories;
        c = a || "undefined" === typeof c.includeMilitary ? !1 : c.includeMilitary;
        e = e || c ? e && c ? "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : e ? "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$" :
            "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
        e = f ? new RegExp(e) : new RegExp(e, "i");
        return this.optional(g) || e.test(b)
    }, "Please specify a valid state");
    b.validator.addMethod("strippedminlength", function(d, g, c) {
        return b(d).text().length >= c
    }, b.validator.format("Please enter at least {0} characters"));
    b.validator.addMethod("time", function(b, g) {
        return this.optional(g) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(b)
    }, "Please enter a valid time, between 00:00 and 23:59");
    b.validator.addMethod("time12h", function(b, g) {
        return this.optional(g) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(b)
    }, "Please enter a valid time in 12-hour am/pm format");
    b.validator.addMethod("url2", function(b, g) {
            return this.optional(g) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(b)
        },
        b.validator.messages.url);
    b.validator.addMethod("vinUS", function(b) {
        if (17 !== b.length) return !1;
        var g = "ABCDEFGHJKLMNPRSTUVWXYZ".split(""),
            c = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9],
            a = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
            f = 0,
            e, p, h, k, q;
        for (e = 0; 17 > e; e++) {
            k = a[e];
            h = b.slice(e, e + 1);
            8 === e && (q = h);
            if (isNaN(h))
                for (p = 0; p < g.length; p++) {
                    if (h.toUpperCase() === g[p]) {
                        h = c[p];
                        h *= k;
                        isNaN(q) && 8 === p && (q = g[p]);
                        break
                    }
                } else h *= k;
            f += h
        }
        b = f % 11;
        10 === b && (b = "X");
        return b === q ? !0 : !1
    }, "The specified vehicle identification number (VIN) is invalid.");
    b.validator.addMethod("zipcodeUS", function(b, g) {
        return this.optional(g) || /^\d{5}(-\d{4})?$/.test(b)
    }, "The specified US ZIP Code is invalid");
    b.validator.addMethod("ziprange", function(b, g) {
        return this.optional(g) || /^90[2-5]\d\{2\}-\d{4}$/.test(b)
    }, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx")
});
"use strict";
(function(b, d, g) {
    "function" === typeof define && define.amd ? define(["jquery"], b) : "object" === typeof exports ? module.exports = b(require("jquery")) : b(d || g)
})(function(b) {
    var d = function(a, c, d) {
        var h = {
            invalid: [],
            getCaret: function() {
                try {
                    var b, c = 0,
                        d = a.get(0),
                        e = document.selection,
                        k = d.selectionStart;
                    if (e && -1 === navigator.appVersion.indexOf("MSIE 10")) b = e.createRange(), b.moveStart("character", -h.val().length), c = b.text.length;
                    else if (k || "0" === k) c = k;
                    return c
                } catch (g) {}
            },
            setCaret: function(b) {
                try {
                    if (a.is(":focus")) {
                        var c,
                            d = a.get(0);
                        d.setSelectionRange ? d.setSelectionRange(b, b) : (c = d.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", b), c.select())
                    }
                } catch (e) {}
            },
            events: function() {
                a.on("keydown.mask", function(b) {
                    a.data("mask-keycode", b.keyCode || b.which);
                    a.data("mask-previus-value", a.val())
                }).on(b.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", h.behaviour).on("paste.mask drop.mask", function() {
                    setTimeout(function() {
                        a.keydown().keyup()
                    }, 100)
                }).on("change.mask", function() {
                    a.data("changed", !0)
                }).on("blur.mask",
                    function() {
                        g === h.val() || a.data("changed") || a.trigger("change");
                        a.data("changed", !1)
                    }).on("blur.mask", function() {
                    g = h.val()
                }).on("focus.mask", function(a) {
                    !0 === d.selectOnFocus && b(a.target).select()
                }).on("focusout.mask", function() {
                    d.clearIfNotMatch && !m.test(h.val()) && h.val("")
                })
            },
            getRegexMask: function() {
                for (var a = [], b, d, f, h, g = 0; g < c.length; g++)(b = k.translation[c.charAt(g)]) ? (d = b.pattern.toString().replace(/.{1}$|^.{1}/g, ""), f = b.optional, (b = b.recursive) ? (a.push(c.charAt(g)), h = {
                        digit: c.charAt(g),
                        pattern: d
                    }) :
                    a.push(f || b ? d + "?" : d)) : a.push(c.charAt(g).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                a = a.join("");
                h && (a = a.replace(new RegExp("(" + h.digit + "(.*" + h.digit + ")?)"), "($1)?").replace(new RegExp(h.digit, "g"), h.pattern));
                return new RegExp(a)
            },
            destroyEvents: function() {
                a.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
            },
            val: function(b) {
                var c = a.is("input") ? "val" : "text";
                if (0 < arguments.length) {
                    if (a[c]() !== b) a[c](b);
                    c = a
                } else c = a[c]();
                return c
            },
            calculateCaretPosition: function(b, c) {
                var d =
                    c.length,
                    e = a.data("mask-previus-value") || "",
                    h = e.length;
                8 === a.data("mask-keycode") && e !== c ? b -= c.slice(0, b).length - e.slice(0, b).length : e !== c && (b = b >= h ? d : b + (c.slice(0, b).length - e.slice(0, b).length));
                return b
            },
            behaviour: function(c) {
                c = c || window.event;
                h.invalid = [];
                var d = a.data("mask-keycode");
                if (-1 === b.inArray(d, k.byPassKeys)) {
                    var d = h.getMasked(),
                        e = h.getCaret();
                    setTimeout(function(a, b) {
                        h.setCaret(h.calculateCaretPosition(a, b))
                    }, 10, e, d);
                    h.val(d);
                    h.setCaret(e);
                    return h.callbacks(c)
                }
            },
            getMasked: function(a, b) {
                var f = [],
                    g = void 0 === b ? h.val() : b + "",
                    m = 0,
                    q = c.length,
                    D = 0,
                    s = g.length,
                    r = 1,
                    y = "push",
                    E = -1,
                    K, z;
                d.reverse ? (y = "unshift", r = -1, K = 0, m = q - 1, D = s - 1, z = function() {
                    return -1 < m && -1 < D
                }) : (K = q - 1, z = function() {
                    return m < q && D < s
                });
                for (var C; z();) {
                    var da = c.charAt(m),
                        F = g.charAt(D),
                        A = k.translation[da];
                    if (A) F.match(A.pattern) ? (f[y](F), A.recursive && (-1 === E ? E = m : m === K && (m = E - r), K === E && (m -= r)), m += r) : F === C ? C = void 0 : A.optional ? (m += r, D -= r) : A.fallback ? (f[y](A.fallback), m += r, D -= r) : h.invalid.push({
                        p: D,
                        v: F,
                        e: A.pattern
                    }), D += r;
                    else {
                        if (!a) f[y](da);
                        F ===
                            da ? D += r : C = da;
                        m += r
                    }
                }
                g = c.charAt(K);
                q !== s + 1 || k.translation[g] || f.push(g);
                return f.join("")
            },
            callbacks: function(b) {
                var k = h.val(),
                    m = k !== g,
                    u = [k, b, a, d],
                    x = function(a, b, c) {
                        "function" === typeof d[a] && b && d[a].apply(this, c)
                    };
                x("onChange", !0 === m, u);
                x("onKeyPress", !0 === m, u);
                x("onComplete", k.length === c.length, u);
                x("onInvalid", 0 < h.invalid.length, [k, b, a, h.invalid, d])
            }
        };
        a = b(a);
        var k = this,
            g = h.val(),
            m;
        c = "function" === typeof c ? c(h.val(), void 0, a, d) : c;
        k.mask = c;
        k.options = d;
        k.remove = function() {
            var b = h.getCaret();
            h.destroyEvents();
            h.val(k.getCleanVal());
            h.setCaret(b);
            return a
        };
        k.getCleanVal = function() {
            return h.getMasked(!0)
        };
        k.getMaskedVal = function(a) {
            return h.getMasked(!1, a)
        };
        k.init = function(g) {
            g = g || !1;
            d = d || {};
            k.clearIfNotMatch = b.jMaskGlobals.clearIfNotMatch;
            k.byPassKeys = b.jMaskGlobals.byPassKeys;
            k.translation = b.extend({}, b.jMaskGlobals.translation, d.translation);
            k = b.extend(!0, {}, k, d);
            m = h.getRegexMask();
            if (g) h.events(), h.val(h.getMasked());
            else {
                d.placeholder && a.attr("placeholder", d.placeholder);
                a.data("mask") && a.attr("autocomplete",
                    "off");
                g = 0;
                for (var q = !0; g < c.length; g++) {
                    var v = k.translation[c.charAt(g)];
                    if (v && v.recursive) {
                        q = !1;
                        break
                    }
                }
                q && a.attr("maxlength", c.length);
                h.destroyEvents();
                h.events();
                g = h.getCaret();
                h.val(h.getMasked());
                h.setCaret(g)
            }
        };
        k.init(!a.is("input"))
    };
    b.maskWatchers = {};
    var g = function() {
            var a = b(this),
                e = {},
                g = a.attr("data-mask");
            a.attr("data-mask-reverse") && (e.reverse = !0);
            a.attr("data-mask-clearifnotmatch") && (e.clearIfNotMatch = !0);
            "true" === a.attr("data-mask-selectonfocus") && (e.selectOnFocus = !0);
            if (c(a, g, e)) return a.data("mask",
                new d(this, g, e))
        },
        c = function(a, c, d) {
            d = d || {};
            var h = b(a).data("mask"),
                k = JSON.stringify;
            a = b(a).val() || b(a).text();
            try {
                return "function" === typeof c && (c = c(a)), "object" !== typeof h || k(h.options) !== k(d) || h.mask !== c
            } catch (g) {}
        },
        a = function(a) {
            var b = document.createElement("div"),
                c;
            a = "on" + a;
            c = a in b;
            c || (b.setAttribute(a, "return;"), c = "function" === typeof b[a]);
            return c
        };
    b.fn.mask = function(a, e) {
        e = e || {};
        var g = this.selector,
            h = b.jMaskGlobals,
            k = h.watchInterval,
            h = e.watchInputs || h.watchInputs,
            q = function() {
                if (c(this, a,
                        e)) return b(this).data("mask", new d(this, a, e))
            };
        b(this).each(q);
        g && "" !== g && h && (clearInterval(b.maskWatchers[g]), b.maskWatchers[g] = setInterval(function() {
            b(document).find(g).each(q)
        }, k));
        return this
    };
    b.fn.masked = function(a) {
        return this.data("mask").getMaskedVal(a)
    };
    b.fn.unmask = function() {
        clearInterval(b.maskWatchers[this.selector]);
        delete b.maskWatchers[this.selector];
        return this.each(function() {
            var a = b(this).data("mask");
            a && a.remove().removeData("mask")
        })
    };
    b.fn.cleanVal = function() {
        return this.data("mask").getCleanVal()
    };
    b.applyDataMask = function(a) {
        a = a || b.jMaskGlobals.maskElements;
        (a instanceof b ? a : b(a)).filter(b.jMaskGlobals.dataMaskAttr).each(g)
    };
    a = {
        maskElements: "input,td,span,div",
        dataMaskAttr: "*[data-mask]",
        dataMask: !0,
        watchInterval: 300,
        watchInputs: !0,
        useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && a("input"),
        watchDataMask: !1,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            0: {
                pattern: /\d/
            },
            9: {
                pattern: /\d/,
                optional: !0
            },
            "#": {
                pattern: /\d/,
                recursive: !0
            },
            A: {
                pattern: /[a-zA-Z0-9]/
            },
            S: {
                pattern: /[a-zA-Z]/
            }
        }
    };
    b.jMaskGlobals = b.jMaskGlobals || {};
    a = b.jMaskGlobals = b.extend(!0, {}, a, b.jMaskGlobals);
    a.dataMask && b.applyDataMask();
    setInterval(function() {
        b.jMaskGlobals.watchDataMask && b.applyDataMask()
    }, a.watchInterval)
}, window.jQuery, window.Zepto);
(function() {
    var b, d, g, c, a, f = {}.hasOwnProperty;
    a = "undefined" !== typeof exports && null !== exports ? exports : this;
    b = function(a) {
        this.message = a
    };
    b.prototype = Error();
    c = {
        prefix: "",
        default_url_options: {}
    };
    d = {
        default_serializer: function(a, b) {
            var c, d, g, m;
            null == b && (b = null);
            if (null == a) return "";
            if (!b && "object" !== this.get_object_type(a)) throw Error("Url parameters should be a javascript hash");
            m = [];
            switch (this.get_object_type(a)) {
                case "array":
                    c = d = 0;
                    for (g = a.length; d < g; c = ++d) c = a[c], m.push(this.default_serializer(c, b +
                        "[]"));
                    break;
                case "object":
                    for (d in a) f.call(a, d) && (g = a[d], null == g && null != b && (g = ""), null != g && (null != b && (d = b + "[" + d + "]"), m.push(this.default_serializer(g, d))));
                    break;
                default:
                    null != a && m.push(encodeURIComponent(b.toString()) + "=" + encodeURIComponent(a.toString()))
            }
            return m.length ? m.join("&") : ""
        },
        custom_serializer: null,
        serialize: function(a) {
            return null != this.custom_serializer && "function" === this.get_object_type(this.custom_serializer) ? this.custom_serializer(a) : this.default_serializer(a)
        },
        clean_path: function(a) {
            var b;
            a = a.split("://");
            b = a.length - 1;
            a[b] = a[b].replace(/\/+/g, "/");
            return a.join("://")
        },
        set_default_url_options: function(a, b) {
            var d, f, g, m;
            m = [];
            d = f = 0;
            for (g = a.length; f < g; d = ++f) d = a[d], !b.hasOwnProperty(d) && c.default_url_options.hasOwnProperty(d) && m.push(b[d] = c.default_url_options[d]);
            return m
        },
        extract_anchor: function(a) {
            var b;
            b = "";
            a.hasOwnProperty("anchor") && (b = "#" + a.anchor, delete a.anchor);
            return b
        },
        extract_trailing_slash: function(a) {
            var b;
            b = !1;
            c.default_url_options.hasOwnProperty("trailing_slash") && (b = c.default_url_options.trailing_slash);
            a.hasOwnProperty("trailing_slash") && (b = a.trailing_slash, delete a.trailing_slash);
            return b
        },
        extract_options: function(a, b) {
            var c;
            c = b[b.length - 1];
            return b.length > a || null != c && "object" === this.get_object_type(c) && !this.look_like_serialized_model(c) ? b.pop() : {}
        },
        look_like_serialized_model: function(a) {
            return "id" in a || "to_param" in a
        },
        path_identifier: function(a) {
            var b;
            if (0 === a) return "0";
            if (!a) return "";
            b = a;
            "object" === this.get_object_type(a) && (b = "to_param" in a ? a.to_param : "id" in a ? a.id : a, "function" === this.get_object_type(b) &&
                (b = b.call(a)));
            return b.toString()
        },
        clone: function(a) {
            var b, c, d;
            if (null == a || "object" !== this.get_object_type(a)) return a;
            c = a.constructor();
            for (d in a) f.call(a, d) && (b = a[d], c[d] = b);
            return c
        },
        prepare_parameters: function(a, b, c) {
            var d, f, g, t;
            g = this.clone(c) || {};
            c = d = 0;
            for (f = a.length; d < f; c = ++d) t = a[c], c < b.length && (g[t] = b[c]);
            return g
        },
        build_path: function(a, b, c, f) {
            var g, m;
            f = Array.prototype.slice.call(f);
            g = this.extract_options(a.length, f);
            if (f.length > a.length) throw Error("Too many parameters provided for path");
            a = this.prepare_parameters(a, f, g);
            this.set_default_url_options(b, a);
            b = this.extract_anchor(a);
            f = this.extract_trailing_slash(a);
            c = "" + this.get_prefix() + this.visit(c, a);
            c = d.clean_path("" + c);
            !0 === f && (c = c.replace(/(.*?)[\/]?$/, "$1/"));
            (m = this.serialize(a)).length && (c += "?" + m);
            return c + b
        },
        visit: function(a, c, d) {
            var f, g;
            null == d && (d = !1);
            g = a[0];
            f = a[1];
            a = a[2];
            switch (g) {
                case 1:
                    return this.visit(f, c, !0);
                case 5:
                    return this.visit_globbing(f, c, !0);
                case 6:
                case 7:
                case 8:
                    return f;
                case 2:
                    return g = this.visit(f, c, d), c = this.visit(a,
                        c, d), !d || (3 !== f[0] && 2 !== f[0] || g) && (3 !== a[0] && 2 !== a[0] || c) ? "" + g + c : "";
                case 3:
                    a = c[f];
                    if (null != a) return delete c[f], this.path_identifier(a);
                    if (d) return "";
                    throw new b("Route parameter missing: " + f);
                default:
                    throw Error("Unknown Rails node type");
            }
        },
        build_path_spec: function(a, b) {
            var c, d, f;
            null == b && (b = !1);
            f = a[0];
            c = a[1];
            d = a[2];
            switch (f) {
                case 1:
                    return "(" + this.build_path_spec(c) + ")";
                case 2:
                    return "" + this.build_path_spec(c) + this.build_path_spec(d);
                case 5:
                    return this.build_path_spec(c, !0);
                case 3:
                    return !0 === b ? "" +
                        ("*" === c[0] ? "" : "*") + c : ":" + c;
                case 7:
                case 8:
                case 6:
                    return c;
                default:
                    throw Error("Unknown Rails node type");
            }
        },
        visit_globbing: function(a, b, c) {
            var d, f;
            d = a[1];
            d.replace(/^\*/i, "") !== d && (a[1] = d = d.replace(/^\*/i, ""));
            f = b[d];
            if (null == f) return this.visit(a, b, c);
            a: switch (this.get_object_type(f)) {
                case "array":
                    f = f.join("/");
                    break a
            }
            b[d] = f;
            return this.visit(a, b, c)
        },
        get_prefix: function() {
            var a;
            a = c.prefix;
            "" !== a && (a = a.match("/$") ? a : a + "/");
            return a
        },
        route: function(a, b, c) {
            var f;
            f = function() {
                return d.build_path(a,
                    b, c, arguments)
            };
            f.required_params = a;
            f.toString = function() {
                return d.build_path_spec(c)
            };
            return f
        },
        _classToTypeCache: null,
        _classToType: function() {
            var a, b, c, d;
            if (null != this._classToTypeCache) return this._classToTypeCache;
            this._classToTypeCache = {};
            d = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
            a = 0;
            for (b = d.length; a < b; a++) c = d[a], this._classToTypeCache["[object " + c + "]"] = c.toLowerCase();
            return this._classToTypeCache
        },
        get_object_type: function(b) {
            return a.jQuery && null != a.jQuery.type ?
                a.jQuery.type(b) : null == b ? "" + b : "object" === typeof b || "function" === typeof b ? this._classToType()[Object.prototype.toString.call(b)] || "object" : typeof b
        }
    };
    g = function() {
        var b;
        b = function(a, c) {
            var d, f;
            f = c ? c.split(".") : [];
            if (f.length) return d = f.shift(), a[d] = a[d] || {}, b(a[d], f.join("."))
        };
        b(a, "Routes");
        a.Routes = {
            TCgeneral_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "TCgeneral", !1],
                    [1, [2, [8, ".", !1],
                        [3, "format", !1]
                    ], !1]
                ]
            ], arguments),
            additional_information_success_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "additional-information-success", !1],
                    [1, [2, [8, ".", !1],
                        [3, "format", !1]
                    ], !1]
                ]
            ], arguments),
            admin_application_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "applications", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_application_sms_path: d.route(["application_id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "applications", !1],
                            [2, [7, "/", !1],
                                [2, [3, "application_id", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "sms", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_applications_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "applications", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            admin_applications_social_status_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "applications", !1],
                            [2, [7, "/", !1],
                                [2, [6, "social_statuses", !1],
                                    [2, [7, "/", !1],
                                        [2, [3, "id", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_applications_social_statuses_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "applications", !1],
                            [2, [7, "/", !1],
                                [2, [6, "social_statuses", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_applications_working_industries_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "applications", !1],
                            [2, [7, "/", !1],
                                [2, [6, "working_industries", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_applications_working_industry_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6,
                        "admin", !1
                    ],
                    [2, [7, "/", !1],
                        [2, [6, "applications", !1],
                            [2, [7, "/", !1],
                                [2, [6, "working_industries", !1],
                                    [2, [7, "/", !1],
                                        [2, [3, "id", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_calc_amount_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "calc", !1],
                            [2, [7, "/", !1],
                                [2, [6, "amounts", !1],
                                    [2, [7, "/", !1],
                                        [2, [3, "id", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_calc_amounts_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "calc", !1],
                            [2, [7, "/", !1],
                                [2, [6, "amounts", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_calc_commission_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "calc", !1],
                            [2, [7, "/", !1],
                                [2, [6, "commissions", !1],
                                    [2, [7, "/", !1],
                                        [2, [3, "id", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_calc_commissions_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "calc", !1],
                            [2, [7, "/", !1],
                                [2, [6, "commissions", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_calc_term_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "calc", !1],
                            [2, [7, "/", !1],
                                [2, [6, "terms", !1],
                                    [2, [7, "/", !1],
                                        [2, [3, "id", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_calc_terms_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "calc", !1],
                            [2, [7, "/", !1],
                                [2, [6, "terms", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_cities_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "cities", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            admin_city_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "cities", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_client_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                    [2, [6, "admin", !1],
                        [2, [7, "/", !1],
                            [2, [6, "clients", !1],
                                [2, [7, "/", !1],
                                    [2, [3, "id", !1],
                                        [1, [2, [8, ".", !1],
                                            [3, "format", !1]
                                        ], !1]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ],
                arguments),
            admin_clients_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "clients", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            admin_customer_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "customers", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_customers_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "customers", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            admin_district_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "districts", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_districts_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "districts", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            admin_export_request_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "export_requests", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_export_requests_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "export_requests", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            admin_faq_answer_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "faq", !1],
                            [2, [7, "/", !1],
                                [2, [6, "answers", !1],
                                    [2, [7, "/", !1],
                                        [2, [3, "id", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_faq_answers_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "faq", !1],
                            [2, [7, "/", !1],
                                [2, [6, "answers", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_faq_categories_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "faq", !1],
                            [2, [7, "/", !1],
                                [2, [6, "categories", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_faq_category_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "faq", !1],
                            [2, [7, "/", !1],
                                [2, [6, "categories", !1],
                                    [2, [7, "/", !1],
                                        [2, [3, "id", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_faq_question_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "faq", !1],
                            [2, [7, "/", !1],
                                [2, [6, "questions", !1],
                                    [2, [7, "/", !1],
                                        [2, [3, "id", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_faq_questions_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "faq", !1],
                            [2, [7, "/", !1],
                                [2, [6, "questions", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_iovation_black_list_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "iovation_black_lists", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_iovation_black_lists_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "iovation_black_lists", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            admin_loan_value_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "loan_values", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_loan_values_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "loan_values", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            admin_location_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "location", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            admin_partner_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "partners", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_partner_link_path: d.route(["partner_id", "id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "partners", !1],
                            [2, [7, "/", !1],
                                [2, [3, "partner_id", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "links", !1],
                                            [2, [7, "/", !1],
                                                [2, [3, "id", !1],
                                                    [1, [2, [8, ".", !1],
                                                        [3, "format", !1]
                                                    ], !1]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_partner_links_path: d.route(["partner_id"], ["format"], [2, [7,
                    "/", !1
                ],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "partners", !1],
                            [2, [7, "/", !1],
                                [2, [3, "partner_id", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "links", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_partners_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "partners", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            admin_questionnaire_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "questionnaires", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_questionnaires_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "questionnaires", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            admin_reports_report1_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "reports", !1],
                            [2, [7, "/", !1],
                                [2, [6, "report1", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_reports_report2_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6,
                        "admin", !1
                    ],
                    [2, [7, "/", !1],
                        [2, [6, "reports", !1],
                            [2, [7, "/", !1],
                                [2, [6, "report2", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_reports_report3_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "reports", !1],
                            [2, [7, "/", !1],
                                [2, [6, "report3", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_reports_report4_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "reports", !1],
                            [2, [7, "/", !1],
                                [2, [6, "report4", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_reports_report5_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "reports", !1],
                            [2, [7, "/", !1],
                                [2, [6, "report5", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_root_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [1, [2, [8, ".", !1],
                        [3, "format", !1]
                    ], !1]
                ]
            ], arguments),
            admin_scb_cities_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "scb_cities", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            admin_scb_province_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "scb_provinces", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_scb_provinces_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "scb_provinces", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            admin_scorings456_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6,
                                "scorings456", !1
                            ],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_scorings456_index_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "scorings456", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            admin_setting_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "settings", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_settings_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "settings", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            admin_static_page_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "static_pages", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_static_pages_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "static_pages", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            admin_translations_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "translations", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            admin_user_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "users", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_user_custom_exports_edit_path: d.route(["user_id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "users", !1],
                            [2, [7, "/", !1],
                                [2, [3, "user_id", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "custom_exports", !1],
                                            [2, [7, "/", !1],
                                                [2, [6, "edit", !1],
                                                    [1, [2, [8, ".", !1],
                                                        [3, "format", !1]
                                                    ], !1]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_user_custom_exports_update_path: d.route(["user_id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "users", !1],
                            [2, [7, "/", !1],
                                [2, [3, "user_id", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "custom_exports", !1],
                                            [2, [7, "/", !1],
                                                [2, [6, "update", !1],
                                                    [1, [2, [8, ".", !1],
                                                        [3, "format", !1]
                                                    ], !1]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_users_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "users", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            admin_village_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "villages", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            admin_villages_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "villages", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            agreements_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "agreements", !1],
                    [1, [2, [8, ".", !1],
                        [3, "format", !1]
                    ], !1]
                ]
            ], arguments),
            api_path: d.route([], [], [7, "/", !1], arguments),
            application_iovation_update_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "application", !1],
                    [2, [7, "/", !1],
                        [2, [6, "iovation", !1],
                            [2, [7, "/", !1],
                                [2, [6, "update", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            application_sms_check_status_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "application", !1],
                    [2, [7, "/", !1],
                        [2, [6, "sms", !1],
                            [2, [7, "/", !1],
                                [2, [6, "check_status", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            application_sms_update_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "application", !1],
                    [2, [7, "/", !1],
                        [2, [6, "sms", !1],
                            [2, [7, "/", !1],
                                [2, [6, "update", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            application_step_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "application", !1],
                    [2, [7, "/", !1],
                        [2, [6, "steps", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            application_success_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "application", !1],
                    [2, [7, "/", !1],
                        [2, [6, "success", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            application_unsuccess_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "application", !1],
                    [2, [7, "/", !1],
                        [2, [6, "unsuccess", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            applications_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "applications", !1],
                    [1, [2, [8, ".", !1],
                        [3, "format", !1]
                    ], !1]
                ]
            ], arguments),
            assign_crm_unfinished_applications_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "crm", !1],
                    [2, [7, "/", !1],
                        [2, [6, "unfinished", !1],
                            [2, [7, "/", !1],
                                [2, [6, "applications", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "assign", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            auth_path: d.route(["provider"], ["format"], [2, [7, "/", !1],
                [2, [6, "auth", !1],
                    [2, [7, "/", !1],
                        [2, [3, "provider", !1],
                            [2, [7, "/", !1],
                                [2, [6, "callback", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            auth_password_path: d.route(["token"], ["format"], [2, [7, "/", !1],
                [2, [6, "auth", !1],
                    [2, [7, "/", !1],
                        [2, [6, "password", !1],
                            [2, [7, "/", !1],
                                [2, [3, "token", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            auth_password_restore_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "auth", !1],
                    [2, [7, "/", !1],
                        [2, [6, "password", !1],
                            [2, [7, "/", !1],
                                [2, [6, "restore", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            auth_sign_in_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "auth", !1],
                    [2, [7, "/", !1],
                        [2, [6, "sign_in", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            auth_sign_out_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "auth", !1],
                    [2, [7, "/", !1],
                        [2, [6, "sign_out", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            autocomplete_admin_tags_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "tags", !1],
                            [2, [7, "/", !1],
                                [2, [6, "autocomplete", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            autocomplete_bank_branch_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "bank", !1],
                    [2, [7, "/", !1],
                        [2, [6, "branch", !1],
                            [2, [7, "/", !1],
                                [2, [6, "autocomplete", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            autocomplete_districts_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "districts", !1],
                    [2, [7, "/", !1],
                        [2, [6, "autocomplete", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            autocomplete_scb_cities_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "scb_cities", !1],
                    [2, [7, "/", !1],
                        [2, [6, "autocomplete", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            autocomplete_villages_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "villages", !1],
                    [2, [7, "/", !1],
                        [2, [6, "autocomplete", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            clients_application_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "clients", !1],
                    [2, [7, "/", !1],
                        [2, [6, "application", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            clients_application_disbursement_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "clients", !1],
                    [2, [7, "/", !1],
                        [2, [6, "application", !1],
                            [2, [7, "/", !1],
                                [2, [6, "disbursement", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            clients_application_sms_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "clients", !1],
                    [2, [7, "/", !1],
                        [2, [6, "application", !1],
                            [2, [7, "/", !1],
                                [2, [6, "sms", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            clients_applications_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "clients", !1],
                    [2, [7, "/", !1],
                        [2, [6, "applications", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            clients_auth_sms_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "clients", !1],
                    [2, [7, "/", !1],
                        [2, [6, "auth", !1],
                            [2, [7, "/", !1],
                                [2, [6, "sms", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            clients_unsuccess_index_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "clients", !1],
                    [2, [7, "/", !1],
                        [2, [6, "unsuccess", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            confirmation_clients_application_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "clients", !1],
                    [2, [7, "/", !1],
                        [2, [6, "application", !1],
                            [2, [7, "/", !1],
                                [2, [6, "confirmation", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            contact_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "contact", !1],
                    [1, [2, [8, ".", !1],
                        [3, "format", !1]
                    ], !1]
                ]
            ], arguments),
            crm_application_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "crm", !1],
                    [2, [7, "/", !1],
                        [2, [6, "applications", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            crm_application_sms_path: d.route(["application_id"], ["format"], [2, [7, "/", !1],
                [2, [6, "crm", !1],
                    [2, [7, "/", !1],
                        [2, [6, "applications", !1],
                            [2, [7, "/", !1],
                                [2, [3, "application_id", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "sms", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            crm_application_step_path: d.route(["application_id",
                "id"
            ], ["format"], [2, [7, "/", !1],
                [2, [6, "crm", !1],
                    [2, [7, "/", !1],
                        [2, [6, "applications", !1],
                            [2, [7, "/", !1],
                                [2, [3, "application_id", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "steps", !1],
                                            [2, [7, "/", !1],
                                                [2, [3, "id", !1],
                                                    [1, [2, [8, ".", !1],
                                                        [3, "format", !1]
                                                    ], !1]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            crm_applications_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "crm", !1],
                    [2, [7, "/", !1],
                        [2, [6, "applications", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            crm_export_requests_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "crm", !1],
                    [2, [7, "/", !1],
                        [2, [6, "export_requests", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            crm_reports_report1_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "crm", !1],
                    [2, [7, "/", !1],
                        [2, [6, "reports", !1],
                            [2, [7, "/", !1],
                                [2, [6, "report1", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            crm_root_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "crm", !1],
                    [1, [2, [8, ".", !1],
                        [3, "format", !1]
                    ], !1]
                ]
            ], arguments),
            crm_unfinished_application_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "crm", !1],
                    [2, [7, "/", !1],
                        [2, [6, "unfinished", !1],
                            [2, [7, "/", !1],
                                [2, [6, "applications", !1],
                                    [2, [7, "/", !1],
                                        [2, [3, "id", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            crm_unfinished_applications_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "crm", !1],
                    [2, [7, "/", !1],
                        [2, [6, "unfinished", !1],
                            [2, [7, "/", !1],
                                [2, [6, "applications", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_admin_applications_social_status_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "applications", !1],
                            [2, [7, "/", !1],
                                [2, [6, "social_statuses", !1],
                                    [2, [7, "/", !1],
                                        [2, [3, "id", !1],
                                            [2, [7, "/", !1],
                                                [2, [6, "edit", !1],
                                                    [1, [2, [8, ".", !1],
                                                        [3, "format", !1]
                                                    ], !1]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_admin_applications_working_industry_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "applications", !1],
                            [2, [7, "/", !1],
                                [2, [6, "working_industries", !1],
                                    [2, [7, "/", !1],
                                        [2, [3, "id", !1],
                                            [2, [7, "/", !1],
                                                [2, [6, "edit", !1],
                                                    [1, [2, [8, ".", !1],
                                                        [3, "format", !1]
                                                    ], !1]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_admin_calc_amount_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "calc", !1],
                            [2, [7, "/", !1],
                                [2, [6, "amounts", !1],
                                    [2, [7, "/", !1],
                                        [2, [3, "id", !1],
                                            [2, [7, "/", !1],
                                                [2, [6, "edit", !1],
                                                    [1, [2, [8, ".", !1],
                                                        [3, "format", !1]
                                                    ], !1]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_admin_calc_commission_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "calc", !1],
                            [2, [7, "/", !1],
                                [2, [6, "commissions", !1],
                                    [2, [7, "/", !1],
                                        [2, [3, "id", !1],
                                            [2, [7, "/", !1],
                                                [2, [6, "edit", !1],
                                                    [1, [2, [8, ".", !1],
                                                        [3, "format", !1]
                                                    ], !1]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_admin_calc_term_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "calc", !1],
                            [2, [7, "/", !1],
                                [2, [6, "terms", !1],
                                    [2, [7, "/", !1],
                                        [2, [3, "id", !1],
                                            [2, [7, "/", !1],
                                                [2, [6, "edit", !1],
                                                    [1, [2, [8, ".", !1],
                                                        [3, "format", !1]
                                                    ], !1]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_admin_city_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "cities", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "edit", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_admin_customer_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "customers", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "edit", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_admin_district_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "districts", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "edit", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_admin_faq_answer_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "faq", !1],
                            [2, [7, "/", !1],
                                [2, [6, "answers", !1],
                                    [2, [7, "/", !1],
                                        [2, [3, "id", !1],
                                            [2, [7, "/", !1],
                                                [2, [6, "edit", !1],
                                                    [1, [2, [8, ".", !1],
                                                        [3, "format", !1]
                                                    ], !1]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_admin_faq_category_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "faq", !1],
                            [2, [7, "/", !1],
                                [2, [6, "categories", !1],
                                    [2, [7, "/", !1],
                                        [2, [3, "id", !1],
                                            [2, [7, "/", !1],
                                                [2, [6, "edit", !1],
                                                    [1, [2, [8, ".", !1],
                                                        [3, "format", !1]
                                                    ], !1]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_admin_faq_question_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "faq", !1],
                            [2, [7, "/", !1],
                                [2, [6, "questions", !1],
                                    [2, [7, "/", !1],
                                        [2, [3, "id", !1],
                                            [2, [7, "/", !1],
                                                [2, [6, "edit", !1],
                                                    [1, [2, [8, ".", !1],
                                                        [3, "format", !1]
                                                    ], !1]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_admin_iovation_black_list_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "iovation_black_lists", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "edit", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_admin_loan_value_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "loan_values", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "edit", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_admin_partner_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "partners", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "edit", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_admin_partner_link_path: d.route(["partner_id", "id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "partners", !1],
                            [2, [7, "/", !1],
                                [2, [3, "partner_id", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "links", !1],
                                            [2, [7, "/", !1],
                                                [2, [3, "id", !1],
                                                    [2, [7, "/", !1],
                                                        [2, [6, "edit", !1],
                                                            [1, [2, [8, ".", !1],
                                                                [3, "format", !1]
                                                            ], !1]
                                                        ]
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_admin_questionnaire_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "questionnaires", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "edit", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_admin_scb_province_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "scb_provinces", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "edit", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_admin_scorings456_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "scorings456", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "edit", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_admin_static_page_path: d.route(["id"], ["format"], [2, [7,
                    "/", !1
                ],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "static_pages", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "edit", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_admin_user_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "users", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "edit", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_admin_village_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "villages", !1],
                            [2, [7, "/", !1],
                                [2, [3, "id", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "edit", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_clients_application_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "clients", !1],
                    [2, [7, "/", !1],
                        [2, [6, "application", !1],
                            [2, [7, "/", !1],
                                [2, [6, "edit", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_clients_application_disbursement_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "clients", !1],
                    [2, [7, "/", !1],
                        [2, [6, "application", !1],
                            [2, [7, "/", !1],
                                [2, [6, "disbursement", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "edit", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            edit_crm_unfinished_application_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "crm", !1],
                    [2, [7, "/", !1],
                        [2, [6, "unfinished", !1],
                            [2, [7, "/", !1],
                                [2, [6, "applications", !1],
                                    [2, [7, "/", !1],
                                        [2, [3, "id", !1],
                                            [2, [7, "/", !1],
                                                [2, [6, "edit", !1],
                                                    [1, [2, [8, ".", !1],
                                                        [3, "format", !1]
                                                    ], !1]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            faq_path: d.route([], ["format"], [2, [7, "/", !1],
                    [2, [6, "faq", !1],
                        [1, [2, [8, ".", !1],
                            [3, "format", !1]
                        ], !1]
                    ]
                ],
                arguments),
            grape_swagger_rails_root_path: d.route([], [], [2, [2, [7, "/", !1],
                    [6, "swagger", !1]
                ],
                [7, "/", !1]
            ], arguments),
            howtorepay_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "howtorepay", !1],
                    [1, [2, [8, ".", !1],
                        [3, "format", !1]
                    ], !1]
                ]
            ], arguments),
            howtowork_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "howtowork", !1],
                    [1, [2, [8, ".", !1],
                        [3, "format", !1]
                    ], !1]
                ]
            ], arguments),
            iovation_update_clients_application_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "clients", !1],
                    [2, [7, "/", !1],
                        [2, [6, "application", !1],
                            [2, [7, "/", !1],
                                [2, [6, "iovation", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "update", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            lang_index_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "lang", !1],
                    [1, [2, [8, ".", !1],
                        [3, "format", !1]
                    ], !1]
                ]
            ], arguments),
            mapp_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "mapp", !1],
                    [1, [2, [8, ".", !1],
                        [3, "format", !1]
                    ], !1]
                ]
            ], arguments),
            mess_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "mess", !1],
                    [1, [2, [8, ".", !1],
                        [3, "format", !1]
                    ], !1]
                ]
            ], arguments),
            mobile_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "mobile", !1],
                    [1, [2, [8, ".", !1],
                        [3, "format", !1]
                    ], !1]
                ]
            ], arguments),
            monitoring_sidekiq_stats_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "monitoring", !1],
                    [2, [7, "/", !1],
                        [2, [6, "sidekiq", !1],
                            [2, [7, "/", !1],
                                [2, [6, "stats", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            monitoring_sidekiq_workers_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "monitoring", !1],
                    [2, [7, "/", !1],
                        [2, [6, "sidekiq", !1],
                            [2, [7, "/", !1],
                                [2, [6, "workers", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            new_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "new", !1],
                    [1, [2, [8, ".", !1],
                        [3, "format", !1]
                    ], !1]
                ]
            ], arguments),
            new_admin_application_sm_path: d.route(["application_id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "applications", !1],
                            [2, [7, "/", !1],
                                [2, [3, "application_id", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "sms", !1],
                                            [2, [7, "/", !1],
                                                [2, [6, "new", !1],
                                                    [1, [2, [8, ".", !1],
                                                        [3, "format", !1]
                                                    ], !1]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            new_admin_applications_social_status_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "applications", !1],
                            [2, [7, "/", !1],
                                [2, [6, "social_statuses", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "new", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            new_admin_applications_working_industry_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "applications", !1],
                            [2, [7, "/", !1],
                                [2, [6, "working_industries", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "new", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            new_admin_calc_amount_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "calc", !1],
                            [2, [7, "/", !1],
                                [2, [6, "amounts", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "new", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            new_admin_calc_commission_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "calc", !1],
                            [2, [7, "/", !1],
                                [2, [6, "commissions", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "new", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            new_admin_calc_term_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "calc", !1],
                            [2, [7, "/", !1],
                                [2, [6, "terms", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "new", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            new_admin_city_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "cities", !1],
                            [2, [7, "/", !1],
                                [2, [6, "new", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            new_admin_customer_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "customers", !1],
                            [2, [7, "/", !1],
                                [2, [6, "new", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            new_admin_district_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "districts", !1],
                            [2, [7, "/", !1],
                                [2, [6, "new", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            new_admin_export_request_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "export_requests", !1],
                            [2, [7, "/", !1],
                                [2, [6, "new", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            new_admin_faq_answer_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "faq", !1],
                            [2, [7, "/", !1],
                                [2, [6, "answers", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "new", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            new_admin_faq_category_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "faq", !1],
                            [2, [7, "/", !1],
                                [2, [6, "categories", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "new", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            new_admin_faq_question_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "faq", !1],
                            [2, [7, "/", !1],
                                [2, [6, "questions", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "new", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            new_admin_iovation_black_list_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "iovation_black_lists", !1],
                            [2, [7, "/", !1],
                                [2, [6, "new", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            new_admin_partner_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "partners", !1],
                            [2, [7, "/", !1],
                                [2, [6, "new", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            new_admin_partner_link_path: d.route(["partner_id"], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "partners", !1],
                            [2, [7, "/", !1],
                                [2, [3, "partner_id", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "links", !1],
                                            [2, [7, "/", !1],
                                                [2, [6, "new", !1],
                                                    [1, [2, [8, ".", !1],
                                                        [3, "format", !1]
                                                    ], !1]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            new_admin_scorings456_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "scorings456", !1],
                            [2, [7, "/", !1],
                                [2, [6, "new", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            new_admin_static_page_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "static_pages", !1],
                            [2, [7, "/", !1],
                                [2, [6, "new", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            new_admin_user_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "users", !1],
                            [2, [7, "/", !1],
                                [2, [6, "new", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            new_admin_village_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6,
                        "admin", !1
                    ],
                    [2, [7, "/", !1],
                        [2, [6, "villages", !1],
                            [2, [7, "/", !1],
                                [2, [6, "new", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            new_crm_application_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "crm", !1],
                    [2, [7, "/", !1],
                        [2, [6, "applications", !1],
                            [2, [7, "/", !1],
                                [2, [6, "new", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            new_crm_export_request_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "crm", !1],
                    [2, [7, "/", !1],
                        [2, [6, "export_requests", !1],
                            [2, [7, "/", !1],
                                [2, [6, "new", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            next_applications_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "applications", !1],
                    [2, [7, "/", !1],
                        [2, [6, "next", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            noti_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "noti", !1],
                    [1, [2, [8, ".", !1],
                        [3, "format", !1]
                    ], !1]
                ]
            ], arguments),
            page_path: d.route(["path"], ["format"], [2, [7, "/", !1],
                [2, [5, [3, "*path", !1], !1],
                    [1, [2, [8, ".", !1],
                        [3, "format", !1]
                    ], !1]
                ]
            ], arguments),
            resend_clients_auth_sms_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "clients", !1],
                    [2, [7, "/", !1],
                        [2, [6, "auth", !1],
                            [2, [7, "/", !1],
                                [2, [6, "sms", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "resend", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            root_path: d.route([], [], [7, "/", !1], arguments),
            shop_application_step_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "shop", !1],
                    [2, [7, "/", !1],
                        [2, [6, "application", !1],
                            [2, [7, "/", !1],
                                [2, [6, "steps", !1],
                                    [2, [7, "/", !1],
                                        [2, [3, "id", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            shop_application_success_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "shop", !1],
                    [2, [7, "/", !1],
                        [2, [6, "application", !1],
                            [2, [7, "/", !1],
                                [2, [6, "success", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            shop_application_unsuccess_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "shop", !1],
                    [2, [7, "/", !1],
                        [2, [6, "application", !1],
                            [2, [7, "/", !1],
                                [2, [6, "unsuccess", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            shop_applications_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "shop", !1],
                    [2, [7, "/", !1],
                        [2, [6, "applications", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            shop_root_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "shop", !1],
                    [1, [2, [8, ".", !1],
                        [3, "format", !1]
                    ], !1]
                ]
            ], arguments),
            sidekiq_web_path: d.route([], [], [2, [7, "/", !1],
                [6, "sidekiq", !1]
            ], arguments),
            sign_in_clients_auth_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "clients", !1],
                    [2, [7, "/", !1],
                        [2, [6, "auth", !1],
                            [2, [7, "/", !1],
                                [2, [6, "sign_in", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            sign_out_clients_auth_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "clients", !1],
                    [2, [7, "/", !1],
                        [2, [6, "auth", !1],
                            [2, [7, "/", !1],
                                [2, [6, "sign_out", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            sms_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "sms", !1],
                    [1, [2, [8, ".", !1],
                        [3, "format", !1]
                    ], !1]
                ]
            ], arguments),
            sms_resend_clients_application_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "clients", !1],
                    [2, [7, "/", !1],
                        [2, [6, "application", !1],
                            [2, [7, "/", !1],
                                [2, [6, "sms", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "resend", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            success_clients_application_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "clients", !1],
                    [2, [7, "/", !1],
                        [2, [6, "application", !1],
                            [2, [7, "/", !1],
                                [2, [6, "success", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            terms_and_conditions_0_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "terms-and-conditions-0", !1],
                    [1, [2, [8, ".", !1],
                        [3, "format", !1]
                    ], !1]
                ]
            ], arguments),
            unsuccess_clients_application_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "clients", !1],
                    [2, [7, "/", !1],
                        [2, [6, "application", !1],
                            [2, [7,
                                    "/", !1
                                ],
                                [2, [6, "unsuccess", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            valid_admin_cities_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "admin", !1],
                    [2, [7, "/", !1],
                        [2, [6, "cities", !1],
                            [2, [7, "/", !1],
                                [2, [6, "valid", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            vay01_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "vay01", !1],
                    [1, [2, [8, ".", !1],
                        [3, "format", !1]
                    ], !1]
                ]
            ], arguments),
            vay02_path: d.route([], ["format"], [2, [7, "/", !1],
                    [2, [6, "vay02", !1],
                        [1, [2, [8, ".", !1],
                            [3, "format", !1]
                        ], !1]
                    ]
                ],
                arguments),
            vsale_application_sms_check_status_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "vsale", !1],
                    [2, [7, "/", !1],
                        [2, [6, "application", !1],
                            [2, [7, "/", !1],
                                [2, [6, "sms", !1],
                                    [2, [7, "/", !1],
                                        [2, [6, "check_status", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            vsale_application_sms_update_path: d.route([], ["format"], [2, [7, "/", !1],
                    [2, [6, "vsale", !1],
                        [2, [7, "/", !1],
                            [2, [6, "application", !1],
                                [2, [7, "/", !1],
                                    [2, [6, "sms", !1],
                                        [2, [7, "/", !1],
                                            [2, [6, "update", !1],
                                                [1, [2, [8, ".", !1],
                                                    [3, "format", !1]
                                                ], !1]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ],
                arguments),
            vsale_application_step_path: d.route(["id"], ["format"], [2, [7, "/", !1],
                [2, [6, "vsale", !1],
                    [2, [7, "/", !1],
                        [2, [6, "application", !1],
                            [2, [7, "/", !1],
                                [2, [6, "steps", !1],
                                    [2, [7, "/", !1],
                                        [2, [3, "id", !1],
                                            [1, [2, [8, ".", !1],
                                                [3, "format", !1]
                                            ], !1]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            vsale_application_success_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "vsale", !1],
                    [2, [7, "/", !1],
                        [2, [6, "application", !1],
                            [2, [7, "/", !1],
                                [2, [6, "success", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            vsale_application_unsuccess_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "vsale", !1],
                    [2, [7, "/", !1],
                        [2, [6, "application", !1],
                            [2, [7, "/", !1],
                                [2, [6, "unsuccess", !1],
                                    [1, [2, [8, ".", !1],
                                        [3, "format", !1]
                                    ], !1]
                                ]
                            ]
                        ]
                    ]
                ]
            ], arguments),
            vsale_applications_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "vsale", !1],
                    [2, [7, "/", !1],
                        [2, [6, "applications", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            vsale_contact_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "vsale", !1],
                    [2, [7, "/", !1],
                        [2, [6, "contact", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            vsale_howtorepay_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "vsale", !1],
                    [2, [7, "/", !1],
                        [2, [6, "howtorepay", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            vsale_howtowork_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "vsale", !1],
                    [2, [7, "/", !1],
                        [2, [6, "howtowork", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            vsale_mapp_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "vsale", !1],
                    [2, [7, "/", !1],
                        [2, [6, "mapp", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            vsale_page_path: d.route(["path"], ["format"], [2, [7, "/", !1],
                [2, [6, "vsale", !1],
                    [2, [7, "/", !1],
                        [2, [5, [3, "*path", !1], !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            vsale_root_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "vsale", !1],
                    [1, [2, [8, ".", !1],
                        [3, "format", !1]
                    ], !1]
                ]
            ], arguments),
            vsale_whyus_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "vsale", !1],
                    [2, [7, "/", !1],
                        [2, [6, "whyus", !1],
                            [1, [2, [8, ".", !1],
                                [3, "format", !1]
                            ], !1]
                        ]
                    ]
                ]
            ], arguments),
            whyus_path: d.route([], ["format"], [2, [7, "/", !1],
                [2, [6, "whyus", !1],
                    [1, [2, [8, ".", !1],
                        [3, "format", !1]
                    ], !1]
                ]
            ], arguments)
        };
        a.Routes.options = c;
        a.Routes.default_serializer = function(a, b) {
            return d.default_serializer(a, b)
        };
        return a.Routes
    };
    "function" === typeof define && define.amd ? define([], function() {
        return g()
    }) : g()
}).call(this);
(function(b) {
    var d = 0;
    b(document).on("click", ".add_fields", function(g) {
        g.preventDefault();
        g = b(this);
        var c = g.data("association"),
            a = g.data("associations"),
            f = g.data("association-insertion-template"),
            e = g.data("association-insertion-method") || g.data("association-insertion-position") || "before",
            p = g.data("association-insertion-node"),
            h = g.data("association-insertion-traversal"),
            k = parseInt(g.data("count"), 10),
            q = new RegExp("\\[new_" + c + "\\](.*?\\s)", "g"),
            c = new RegExp("_new_" + c + "_(\\w*)", "g"),
            m = (new Date).getTime() +
            d++,
            t = f.replace(q, "[" + m + "]$1"),
            w = [];
        t == f && (q = new RegExp("\\[new_" + a + "\\](.*?\\s)", "g"), c = new RegExp("_new_" + a + "_(\\w*)", "g"), t = f.replace(q, "[" + m + "]$1"));
        t = t.replace(c, "_" + m + "_$1");
        w = [t];
        k = isNaN(k) ? 1 : Math.max(k, 1);
        for (k -= 1; k;) m = (new Date).getTime() + d++, t = f.replace(q, "[" + m + "]$1"), t = t.replace(c, "_" + m + "_$1"), w.push(t), k -= 1;
        p = p ? h ? g[h](p) : "this" == p ? g : b(p) : g.parent();
        b.each(w, function(a, c) {
            var d = b(c);
            p.trigger("cocoon:before-insert", [d]);
            p[e](d);
            p.trigger("cocoon:after-insert", [d])
        })
    });
    b(document).on("click",
        ".remove_fields.dynamic, .remove_fields.existing",
        function(d) {
            var c = b(this),
                a = c.data("wrapper-class") || "nested-fields",
                f = c.closest("." + a),
                e = f.parent();
            d.preventDefault();
            e.trigger("cocoon:before-remove", [f]);
            d = e.data("remove-timeout") || 0;
            setTimeout(function() {
                c.hasClass("dynamic") ? f.remove() : (c.prev("input[type=hidden]").val("1"), f.hide());
                e.trigger("cocoon:after-remove", [f])
            }, d)
        });
    b(".remove_fields.existing.destroyed").each(function(d, c) {
        var a = b(this),
            f = a.data("wrapper-class") || "nested-fields";
        a.closest("." +
            f).hide()
    })
})(jQuery);
(function(b) {
    function d(a, b, c) {
        void 0 === a.selectionStart ? (a.focus(), a = a.createTextRange(), a.collapse(!0), a.moveEnd("character", c), a.moveStart("character", b), a.select()) : (a.selectionStart = b, a.selectionEnd = c)
    }

    function g(a, c) {
        b.each(c, function(b, d) {
            "function" === typeof d ? c[b] = d(a, c, b) : "function" === typeof a.autoNumeric[d] && (c[b] = a.autoNumeric[d](a, c, b))
        })
    }

    function c(a, b) {
        "string" === typeof a[b] && (a[b] *= 1)
    }

    function a(a, b) {
        g(a, b);
        b.tagList = "b caption cite code dd del div dfn dt em h1 h2 h3 h4 h5 h6 ins kdb label li output p q s sample span strong td th u var".split(" ");
        var d =
            b.vMax.toString().split("."),
            e = b.vMin || 0 === b.vMin ? b.vMin.toString().split(".") : [];
        c(b, "vMax");
        c(b, "vMin");
        c(b, "mDec");
        b.mDec = "CHF" === b.mRound ? "2" : b.mDec;
        b.allowLeading = !0;
        b.aNeg = 0 > b.vMin ? "-" : "";
        d[0] = d[0].replace("-", "");
        e[0] = e[0].replace("-", "");
        b.mInt = Math.max(d[0].length, e[0].length, 1);
        if (null === b.mDec) {
            var f = 0,
                h = 0;
            d[1] && (f = d[1].length);
            e[1] && (h = e[1].length);
            b.mDec = Math.max(f, h)
        }
        null === b.altDec && 0 < b.mDec && ("." === b.aDec && "," !== b.aSep ? b.altDec = "," : "," === b.aDec && "." !== b.aSep && (b.altDec = "."));
        d = b.aNeg ?
            "([-\\" + b.aNeg + "]?)" : "(-?)";
        b.aNegRegAutoStrip = d;
        b.skipFirstAutoStrip = new RegExp(d + "[^-" + (b.aNeg ? "\\" + b.aNeg : "") + "\\" + b.aDec + "\\d].*?(\\d|\\" + b.aDec + "\\d)");
        b.skipLastAutoStrip = new RegExp("(\\d\\" + b.aDec + "?)[^\\" + b.aDec + "\\d]\\D*$");
        b.allowedAutoStrip = new RegExp("[^" + ("-" + b.aNum + "\\" + b.aDec) + "]", "gi");
        b.numRegAutoStrip = new RegExp(d + "(?:\\" + b.aDec + "?(\\d+\\" + b.aDec + "\\d+)|(\\d*(?:\\" + b.aDec + "\\d*)?))");
        return b
    }

    function f(a, b, c) {
        if (b.aSign)
            for (; - 1 < a.indexOf(b.aSign);) a = a.replace(b.aSign, "");
        a = a.replace(b.skipFirstAutoStrip,
            "$1$2");
        a = a.replace(b.skipLastAutoStrip, "$1");
        a = a.replace(b.allowedAutoStrip, "");
        b.altDec && (a = a.replace(b.altDec, b.aDec));
        a = (a = a.match(b.numRegAutoStrip)) ? [a[1], a[2], a[3]].join("") : "";
        if (("allow" === b.lZero || "keep" === b.lZero) && "strip" !== c) {
            var d = [],
                e = "",
                d = a.split(b.aDec); - 1 !== d[0].indexOf("-") && (e = "-", d[0] = d[0].replace("-", ""));
            d[0].length > b.mInt && "0" === d[0].charAt(0) && (d[0] = d[0].slice(1));
            a = e + d.join(b.aDec)
        }
        if (c && "deny" === b.lZero || c && "allow" === b.lZero && !1 === b.allowLeading) b = "^" + b.aNegRegAutoStrip +
            "0*(\\d" + ("leading" === c ? ")" : "|$)"), b = new RegExp(b), a = a.replace(b, "$1$2");
        return a
    }

    function e(a, b) {
        if ("p" === b.pSign) {
            var c = b.nBracket.split(",");
            if (!b.hasFocus && !b.removeBrackets) a = a.replace(b.aNeg, ""), a = c[0] + a + c[1];
            else if (b.hasFocus && a.charAt(0) === c[0] || b.removeBrackets && a.charAt(0) === c[0]) a = a.replace(c[0], b.aNeg), a = a.replace(c[1], "")
        }
        return a
    }

    function p(a, b) {
        if (a) {
            var c = +a;
            1E-6 > c && -1 < c ? (a = +a, 1E-6 > a && 0 < a && (a = (a + 10).toString(), a = a.substring(1)), 0 > a && -1 < a && (a = (a - 10).toString(), a = "-" + a.substring(2)),
                a = a.toString()) : (c = a.split("."), void 0 !== c[1] && (0 === +c[1] ? a = c[0] : (c[1] = c[1].replace(/0*$/, ""), a = c.join("."))))
        }
        return "keep" === b.lZero ? a : a.replace(/^0*(\d)/, "$1")
    }

    function h(a, b, c) {
        b && "." !== b && (a = a.replace(b, "."));
        c && "-" !== c && (a = a.replace(c, "-"));
        a.match(/\d/) || (a += "0");
        return a
    }

    function k(a, b, c) {
        c && "-" !== c && (a = a.replace("-", c));
        b && "." !== b && (a = a.replace(".", b));
        return a
    }

    function q(a, b, c) {
        return "" === a || a === b.aNeg ? "zero" === b.wEmpty ? a + "0" : "sign" === b.wEmpty || c ? a + b.aSign : a : null
    }

    function m(a, b) {
        if (NaN !==
            Number(a) && "." === b.aDec || NaN !== Number(a) && "," === b.aDec) a = f(a, b);
        var c = a.replace(",", "."),
            d = q(a, b, !0);
        if (null !== d) return d;
        var d = "",
            d = 2 === b.dGroup ? /(\d)((\d)(\d{2}?)+)$/ : 4 === b.dGroup ? /(\d)((\d{4}?)+)$/ : /(\d)((\d{3}?)+)$/,
            h = a.split(b.aDec);
        b.altDec && 1 === h.length && (h = a.split(b.altDec));
        var k = h[0];
        if (b.aSep)
            for (; d.test(k);) k = k.replace(d, "$1" + b.aSep + "$2");
        0 !== b.mDec && 1 < h.length ? (h[1].length > b.mDec && (h[1] = h[1].substring(0, b.mDec)), a = k + b.aDec + h[1]) : a = k;
        b.aSign && (d = -1 !== a.indexOf(b.aNeg), a = a.replace(b.aNeg,
            ""), a = "p" === b.pSign ? b.aSign + a : a + b.aSign, d && (a = b.aNeg + a));
        0 > c && null !== b.nBracket && (a = e(a, b));
        return a
    }

    function t(a, b) {
        a = "" === a ? "0" : a.toString();
        c(b, "mDec");
        "CHF" === b.mRound && (a = (Math.round(20 * a) / 20).toString());
        var d = "",
            e = 0,
            f = "",
            h = "boolean" === typeof b.aPad || null === b.aPad ? b.aPad ? b.mDec : 0 : +b.aPad,
            k = function(a) {
                a = a.replace(0 === h ? /(\.(?:\d*[1-9])?)0*$/ : 1 === h ? /(\.\d(?:\d*[1-9])?)0*$/ : new RegExp("(\\.\\d{" + h + "}(?:\\d*[1-9])?)0*$"), "$1");
                0 === h && (a = a.replace(/\.$/, ""));
                return a
            };
        "-" === a.charAt(0) && (f = "-",
            a = a.replace("-", ""));
        a.match(/^\d/) || (a = "0" + a);
        "-" === f && 0 === +a && (f = "");
        if (0 < +a && "keep" !== b.lZero || 0 < a.length && "allow" === b.lZero) a = a.replace(/^0*(\d)/, "$1");
        var g = a.lastIndexOf("."),
            m = a.length - 1 - (-1 === g ? a.length - 1 : g);
        if (m <= b.mDec) {
            d = a;
            if (m < h)
                for (-1 === g && (d += "."), e = "000000"; m < h;) e = e.substring(0, h - m), d += e, m += e.length;
            else m > h ? d = k(d) : 0 === m && 0 === h && (d = d.replace(/\.$/, ""));
            if ("CHF" !== b.mRound) return 0 === +d ? d : f + d;
            "CHF" === b.mRound && (g = d.lastIndexOf("."), a = d)
        }
        var d = g + b.mDec,
            e = +a.charAt(d + 1),
            g = a.substring(0,
                d + 1).split(""),
            q = "." === a.charAt(d) ? a.charAt(d - 1) % 2 : a.charAt(d) % 2,
            m = !0;
        1 !== q && (q = 0 === q && 0 < a.substring(d + 2, a.length) ? 1 : 0);
        if (4 < e && "S" === b.mRound || 4 < e && "A" === b.mRound && "" === f || 5 < e && "A" === b.mRound && "-" === f || 5 < e && "s" === b.mRound || 5 < e && "a" === b.mRound && "" === f || 4 < e && "a" === b.mRound && "-" === f || 5 < e && "B" === b.mRound || 5 === e && "B" === b.mRound && 1 === q || 0 < e && "C" === b.mRound && "" === f || 0 < e && "F" === b.mRound && "-" === f || 0 < e && "U" === b.mRound || "CHF" === b.mRound)
            for (e = g.length - 1; 0 <= e; e -= 1)
                if ("." !== g[e]) {
                    if ("CHF" === b.mRound && 2 >= g[e] &&
                        m) {
                        g[e] = 0;
                        m = !1;
                        break
                    }
                    if ("CHF" === b.mRound && 7 >= g[e] && m) {
                        g[e] = 5;
                        m = !1;
                        break
                    }
                    "CHF" === b.mRound && m ? (g[e] = 10, m = !1) : g[e] = +g[e] + 1;
                    if (10 > g[e]) break;
                    0 < e && (g[e] = "0")
                }
        g = g.slice(0, d + 1);
        d = k(g.join(""));
        return 0 === +d ? d : f + d
    }

    function w(a, b, c) {
        var d = b.aDec,
            e = b.mDec;
        a = "paste" === c ? t(a, b) : a;
        d && e && (b = a.split(d), b[1] && b[1].length > e && (0 < e ? (b[1] = b[1].substring(0, e), a = b.join(d)) : a = b[0]));
        return a
    }

    function v(a, b) {
        a = f(a, b);
        a = w(a, b);
        a = h(a, b.aDec, b.aNeg);
        var c = +a;
        return c >= b.vMin && c <= b.vMax
    }

    function u(c, d) {
        this.settings = d;
        this.that =
            c;
        this.$that = b(c);
        this.formatted = !1;
        this.settingsClone = a(this.$that, this.settings);
        this.value = c.value
    }

    function x(a) {
        "string" === typeof a && (a = a.replace(/\[/g, "\\[").replace(/\]/g, "\\]"), a = "#" + a.replace(/(:|\.)/g, "\\$1"));
        return b(a)
    }

    function n(a, b, c) {
        var d = a.data("autoNumeric");
        d || (d = {}, a.data("autoNumeric", d));
        var e = d.holder;
        if (void 0 === e && b || c) e = new u(a.get(0), b), d.holder = e;
        return e
    }
    u.prototype = {
        init: function(b) {
            this.value = this.that.value;
            this.settingsClone = a(this.$that, this.settings);
            this.ctrlKey =
                b.ctrlKey;
            this.cmdKey = b.metaKey;
            this.shiftKey = b.shiftKey;
            var c = this.that,
                d = {};
            if (void 0 === c.selectionStart) {
                c.focus();
                var e = document.selection.createRange();
                d.length = e.text.length;
                e.moveStart("character", -c.value.length);
                d.end = e.text.length;
                d.start = d.end - d.length
            } else d.start = c.selectionStart, d.end = c.selectionEnd, d.length = d.end - d.start;
            this.selection = d;
            if ("keydown" === b.type || "keyup" === b.type) this.kdCode = b.keyCode;
            this.which = b.which;
            this.formatted = this.processed = !1
        },
        setSelection: function(a, b, c) {
            a =
                Math.max(a, 0);
            b = Math.min(b, this.that.value.length);
            this.selection = {
                start: a,
                end: b,
                length: b - a
            };
            (void 0 === c || c) && d(this.that, a, b)
        },
        setPosition: function(a, b) {
            this.setSelection(a, a, b)
        },
        getBeforeAfter: function() {
            var a = this.value,
                b = a.substring(0, this.selection.start),
                a = a.substring(this.selection.end, a.length);
            return [b, a]
        },
        getBeforeAfterStriped: function() {
            var a = this.getBeforeAfter();
            a[0] = f(a[0], this.settingsClone);
            a[1] = f(a[1], this.settingsClone);
            return a
        },
        normalizeParts: function(a, b) {
            var c = this.settingsClone;
            b = f(b, c);
            var d = b.match(/^\d/) ? !0 : "leading";
            a = f(a, c, d);
            "" !== a && a !== c.aNeg || "deny" !== c.lZero || "" < b && (b = b.replace(/^0*(\d)/, "$1"));
            d = a + b;
            if (c.aDec) {
                var e = d.match(new RegExp("^" + c.aNegRegAutoStrip + "\\" + c.aDec));
                e && (a = a.replace(e[1], e[1] + "0"), d = a + b)
            }
            "zero" !== c.wEmpty || d !== c.aNeg && "" !== d || (a += "0");
            return [a, b]
        },
        setValueParts: function(a, b, c) {
            var d = this.settingsClone;
            b = this.normalizeParts(a, b);
            a = b.join("");
            b = b[0].length;
            return v(a, d) ? (a = w(a, d, c), b > a.length && (b = a.length), this.value = a, this.setPosition(b, !1), !0) : !1
        },
        signPosition: function() {
            var a = this.settingsClone,
                b = a.aSign,
                c = this.that;
            if (b) {
                b = b.length;
                if ("p" === a.pSign) return a.aNeg && c.value && c.value.charAt(0) === a.aNeg ? [1, b + 1] : [0, b];
                a = c.value.length;
                return [a - b, a]
            }
            return [1E3, -1]
        },
        expandSelectionOnSign: function(a) {
            var b = this.signPosition(),
                c = this.selection;
            c.start < b[1] && c.end > b[0] && ((c.start < b[0] || c.end > b[1]) && this.value.substring(Math.max(c.start, b[0]), Math.min(c.end, b[1])).match(/^\s*$/) ? c.start < b[0] ? this.setSelection(c.start, b[0], a) : this.setSelection(b[1],
                c.end, a) : this.setSelection(Math.min(c.start, b[0]), Math.max(c.end, b[1]), a))
        },
        checkPaste: function() {
            if (void 0 !== this.valuePartsBeforePaste) {
                var a = this.getBeforeAfter(),
                    b = this.valuePartsBeforePaste;
                delete this.valuePartsBeforePaste;
                a[0] = a[0].substr(0, b[0].length) + f(a[0].substr(b[0].length), this.settingsClone);
                this.setValueParts(a[0], a[1], "paste") || (this.value = b.join(""), this.setPosition(b[0].length, !1))
            }
        },
        skipAllways: function(a) {
            var b = this.kdCode,
                c = this.which,
                d = this.ctrlKey,
                e = this.cmdKey,
                f = this.shiftKey;
            if ((d || e) && "keyup" === a.type && void 0 !== this.valuePartsBeforePaste || f && 45 === b) return this.checkPaste(), !1;
            if (112 <= b && 123 >= b || 91 <= b && 93 >= b || 9 <= b && 31 >= b || 8 > b && (0 === c || c === b) || 144 === b || 145 === b || 45 === b || 224 === b) return !0;
            if ((d || e) && 65 === b) return !0;
            if ((d || e) && (67 === b || 86 === b || 88 === b)) {
                "keydown" === a.type && this.expandSelectionOnSign();
                if (86 === b || 45 === b) "keydown" === a.type || "keypress" === a.type ? void 0 === this.valuePartsBeforePaste && (this.valuePartsBeforePaste = this.getBeforeAfter()) : this.checkPaste();
                return "keydown" ===
                    a.type || "keypress" === a.type || 67 === b
            }
            return d || e ? !0 : 37 === b || 39 === b ? (c = this.settingsClone.aSep, d = this.selection.start, e = this.that.value, "keydown" === a.type && c && !this.shiftKey && (37 === b && e.charAt(d - 2) === c ? this.setPosition(d - 1) : 39 === b && e.charAt(d + 1) === c && this.setPosition(d + 1)), !0) : 34 <= b && 40 >= b ? !0 : !1
        },
        processAllways: function() {
            var a;
            return 8 === this.kdCode || 46 === this.kdCode ? (this.selection.length ? (this.expandSelectionOnSign(!1), a = this.getBeforeAfterStriped()) : (a = this.getBeforeAfterStriped(), 8 === this.kdCode ?
                a[0] = a[0].substring(0, a[0].length - 1) : a[1] = a[1].substring(1, a[1].length)), this.setValueParts(a[0], a[1]), !0) : !1
        },
        processKeypress: function() {
            var a = this.settingsClone,
                b = String.fromCharCode(this.which),
                c = this.getBeforeAfterStriped(),
                d = c[0],
                c = c[1];
            if (b === a.aDec || a.altDec && b === a.altDec || ("." === b || "," === b) && 110 === this.kdCode) {
                if (!a.mDec || !a.aDec || a.aNeg && -1 < c.indexOf(a.aNeg) || -1 < d.indexOf(a.aDec) || 0 < c.indexOf(a.aDec)) return !0;
                0 === c.indexOf(a.aDec) && (c = c.substr(1));
                this.setValueParts(d + a.aDec, c);
                return !0
            }
            if ("-" ===
                b || "+" === b) {
                if (!a.aNeg) return !0;
                "" === d && -1 < c.indexOf(a.aNeg) && (d = a.aNeg, c = c.substring(1, c.length));
                d = d.charAt(0) === a.aNeg ? d.substring(1, d.length) : "-" === b ? a.aNeg + d : d;
                this.setValueParts(d, c);
                return !0
            }
            "0" <= b && "9" >= b && (a.aNeg && "" === d && -1 < c.indexOf(a.aNeg) && (d = a.aNeg, c = c.substring(1, c.length)), 0 >= a.vMax && a.vMin < a.vMax && -1 === this.value.indexOf(a.aNeg) && "0" !== b && (d = a.aNeg + d), this.setValueParts(d + b, c));
            return !0
        },
        formatQuick: function() {
            var a = this.settingsClone,
                b = this.getBeforeAfterStriped(),
                c = this.value;
            if (("" ===
                    a.aSep || "" !== a.aSep && -1 === c.indexOf(a.aSep)) && ("" === a.aSign || "" !== a.aSign && -1 === c.indexOf(a.aSign))) {
                var d = [],
                    e = "",
                    d = c.split(a.aDec); - 1 < d[0].indexOf("-") && (e = "-", d[0] = d[0].replace("-", ""), b[0] = b[0].replace("-", ""));
                d[0].length > a.mInt && "0" === b[0].charAt(0) && (b[0] = b[0].slice(1));
                b[0] = e + b[0]
            }
            c = m(this.value, this.settingsClone);
            d = c.length;
            if (c) {
                b = b[0].split("");
                e = 0;
                for (e; e < b.length; e += 1) b[e].match("\\d") || (b[e] = "\\" + b[e]);
                b = new RegExp("^.*?" + b.join(".*?"));
                (b = c.match(b)) ? (d = b[0].length, (0 === d && c.charAt(0) !==
                    a.aNeg || 1 === d && c.charAt(0) === a.aNeg) && a.aSign && "p" === a.pSign && (d = this.settingsClone.aSign.length + ("-" === c.charAt(0) ? 1 : 0))) : a.aSign && "s" === a.pSign && (d -= a.aSign.length)
            }
            this.that.value = c;
            this.setPosition(d);
            this.formatted = !0
        }
    };
    var D = {
        init: function(a) {
            return this.each(function() {
                var c = b(this),
                    g = c.data("autoNumeric"),
                    p = c.data(),
                    u = c.is("input[type=text], input[type=hidden], input[type=tel], input:not([type])");
                if ("object" !== typeof g) g = b.extend({}, b.fn.autoNumeric.defaults, p, a, {
                    aNum: "0123456789",
                    hasFocus: !1,
                    removeBrackets: !1,
                    runOnce: !1,
                    tagList: "b caption cite code dd del div dfn dt em h1 h2 h3 h4 h5 h6 ins kdb label li output p q s sample span strong td th u var".split(" ")
                }), g.aDec === g.aSep && b.error("autoNumeric will not function properly when the decimal character aDec: '" + g.aDec + "' and thousand separator aSep: '" + g.aSep + "' are the same character"), c.data("autoNumeric", g);
                else return this;
                var w = n(c, g);
                u || "input" !== c.prop("tagName").toLowerCase() || b.error('The input type "' + c.prop("type") + '" is not supported by autoNumeric()'); -
                1 === b.inArray(c.prop("tagName").toLowerCase(), g.tagList) && "input" !== c.prop("tagName").toLowerCase() && b.error("The <" + c.prop("tagName").toLowerCase() + "> is not supported by autoNumeric()");
                !1 === g.runOnce && g.aForm && (u && (p = !0, "" === c[0].value && "empty" === g.wEmpty && (c[0].value = "", p = !1), "" === c[0].value && "sign" === g.wEmpty && (c[0].value = g.aSign, p = !1), p && "" !== c.val() && (null === g.anDefault && c[0].value === c.prop("defaultValue") || null !== g.anDefault && g.anDefault.toString() === c.val()) && c.autoNumeric("set", c.val())), -1 !== b.inArray(c.prop("tagName").toLowerCase(), g.tagList) && "" !== c.text() && c.autoNumeric("set", c.text()));
                g.runOnce = !0;
                c.is("input[type=text], input[type=hidden], input[type=tel], input:not([type])") && (c.on("keydown.autoNumeric", function(a) {
                    w = n(c);
                    w.settings.aDec === w.settings.aSep && b.error("autoNumeric will not function properly when the decimal character aDec: '" + w.settings.aDec + "' and thousand separator aSep: '" + w.settings.aSep + "' are the same character");
                    if (w.that.readOnly) return w.processed = !0;
                    w.init(a);
                    if (w.skipAllways(a)) return w.processed = !0;
                    if (w.processAllways()) return w.processed = !0, w.formatQuick(), a.preventDefault(), !1;
                    w.formatted = !1;
                    return !0
                }), c.on("keypress.autoNumeric", function(a) {
                    w = n(c);
                    var b = w.processed;
                    w.init(a);
                    if (w.skipAllways(a)) return !0;
                    if (b) return a.preventDefault(), !1;
                    if (w.processAllways() || w.processKeypress()) return w.formatQuick(), a.preventDefault(), !1;
                    w.formatted = !1
                }), c.on("keyup.autoNumeric", function(a) {
                    w = n(c);
                    w.init(a);
                    a = w.skipAllways(a);
                    w.kdCode = 0;
                    delete w.valuePartsBeforePaste;
                    c[0].value === w.settings.aSign && ("s" === w.settings.pSign ? d(this, 0, 0) : d(this, w.settings.aSign.length, w.settings.aSign.length));
                    if (a || "" === this.value) return !0;
                    w.formatted || w.formatQuick()
                }), c.on("focusin.autoNumeric", function() {
                    w = n(c);
                    var a = w.settingsClone;
                    a.hasFocus = !0;
                    if (null !== a.nBracket) {
                        var b = c.val();
                        c.val(e(b, a))
                    }
                    w.inVal = c.val();
                    a = q(w.inVal, a, !0);
                    null !== a && "" !== a && c.val(a)
                }), c.on("focusout.autoNumeric", function() {
                    w = n(c);
                    var a = w.settingsClone,
                        b = c.val(),
                        d = b;
                    a.hasFocus = !1;
                    var e = "";
                    "allow" === a.lZero &&
                        (a.allowLeading = !1, e = "leading");
                    "" !== b && (b = f(b, a, e), null === q(b, a) && v(b, a, c[0]) ? (b = h(b, a.aDec, a.aNeg), b = t(b, a), b = k(b, a.aDec, a.aNeg)) : b = "");
                    e = q(b, a, !1);
                    null === e && (e = m(b, a));
                    if (e !== w.inVal || e !== d) c.val(e), c.change(), delete w.inVal
                }))
            })
        },
        destroy: function() {
            return b(this).each(function() {
                var a = b(this);
                a.off(".autoNumeric");
                a.removeData("autoNumeric")
            })
        },
        update: function(a) {
            return b(this).each(function() {
                var c = x(b(this)),
                    d = c.data("autoNumeric");
                "object" !== typeof d && b.error("You must initialize autoNumeric('init', {options}) prior to calling the 'update' method");
                var e = c.autoNumeric("get"),
                    d = b.extend(d, a);
                n(c, d, !0);
                d.aDec === d.aSep && b.error("autoNumeric will not function properly when the decimal character aDec: '" + d.aDec + "' and thousand separator aSep: '" + d.aSep + "' are the same character");
                c.data("autoNumeric", d);
                if ("" !== c.val() || "" !== c.text()) return c.autoNumeric("set", e)
            })
        },
        set: function(a) {
            if (null !== a) return b(this).each(function() {
                var c = x(b(this)),
                    d = c.data("autoNumeric"),
                    e = a.toString(),
                    f = a.toString(),
                    h = c.is("input[type=text], input[type=hidden], input[type=tel], input:not([type])");
                "object" !== typeof d && b.error("You must initialize autoNumeric('init', {options}) prior to calling the 'set' method");
                f !== c.attr("value") && f !== c.text() || !1 !== d.runOnce || (e = e.replace(",", "."));
                b.isNumeric(+e) || b.error("The value (" + e + ") being 'set' is not numeric and has caused a error to be thrown");
                e = p(e, d);
                d.setEvent = !0;
                e.toString();
                "" !== e && (e = t(e, d));
                e = k(e, d.aDec, d.aNeg);
                v(e, d) || (e = t("", d));
                e = m(e, d);
                return h ? c.val(e) : -1 !== b.inArray(c.prop("tagName").toLowerCase(), d.tagList) ? c.text(e) : !1
            })
        },
        get: function() {
            var a =
                x(b(this)),
                c = a.data("autoNumeric");
            "object" !== typeof c && b.error("You must initialize autoNumeric('init', {options}) prior to calling the 'get' method");
            var d = "";
            a.is("input[type=text], input[type=hidden], input[type=tel], input:not([type])") ? d = a.eq(0).val() : -1 !== b.inArray(a.prop("tagName").toLowerCase(), c.tagList) ? d = a.eq(0).text() : b.error("The <" + a.prop("tagName").toLowerCase() + "> is not supported by autoNumeric()");
            if ("" === d && "empty" === c.wEmpty || d === c.aSign && ("sign" === c.wEmpty || "empty" === c.wEmpty)) return "";
            "" !== d && null !== c.nBracket && (c.removeBrackets = !0, d = e(d, c), c.removeBrackets = !1);
            if (c.runOnce || !1 === c.aForm) d = f(d, c);
            d = h(d, c.aDec, c.aNeg);
            0 === +d && "keep" !== c.lZero && (d = "0");
            return "keep" === c.lZero ? d : d = p(d, c)
        },
        getString: function() {
            var a = !1,
                c = x(b(this)),
                d = c.serialize().split("&"),
                e = b("form").index(c),
                c = b("form:eq(" + e + ")"),
                f = [],
                h = [],
                k = /^(?:submit|button|image|reset|file)$/i,
                g = /^(?:input|select|textarea|keygen)/i,
                m = /^(?:checkbox|radio)$/i,
                q = /^(?:button|checkbox|color|date|datetime|datetime-local|email|file|image|month|number|password|radio|range|reset|search|submit|time|url|week)/i,
                n = 0;
            b.each(c[0], function(a, b) {
                "" === b.name || !g.test(b.localName) || k.test(b.type) || b.disabled || !b.checked && m.test(b.type) ? h.push(-1) : (h.push(n), n += 1)
            });
            n = 0;
            b.each(c[0], function(a, b) {
                "input" !== b.localName || "" !== b.type && "text" !== b.type && "hidden" !== b.type && "tel" !== b.type ? (f.push(-1), "input" === b.localName && q.test(b.type) && (n += 1)) : (f.push(n), n += 1)
            });
            b.each(d, function(c, k) {
                k = d[c].split("=");
                var g = b.inArray(c, h); - 1 < g && -1 < f[g] && "object" === typeof b("form:eq(" + e + ") input:eq(" + f[g] + ")").data("autoNumeric") && null !==
                    k[1] && (k[1] = b("form:eq(" + e + ") input:eq(" + f[g] + ")").autoNumeric("get").toString(), d[c] = k.join("="), a = !0)
            });
            a || b.error("You must initialize autoNumeric('init', {options}) prior to calling the 'getString' method");
            return d.join("&")
        },
        getArray: function() {
            var a = !1,
                c = x(b(this)),
                d = c.serializeArray(),
                e = b("form").index(c),
                c = b("form:eq(" + e + ")"),
                f = [],
                h = [],
                k = /^(?:submit|button|image|reset|file)$/i,
                g = /^(?:input|select|textarea|keygen)/i,
                m = /^(?:checkbox|radio)$/i,
                q = /^(?:button|checkbox|color|date|datetime|datetime-local|email|file|image|month|number|password|radio|range|reset|search|submit|time|url|week)/i,
                n = 0;
            b.each(c[0], function(a, b) {
                "" === b.name || !g.test(b.localName) || k.test(b.type) || b.disabled || !b.checked && m.test(b.type) ? h.push(-1) : (h.push(n), n += 1)
            });
            n = 0;
            b.each(c[0], function(a, b) {
                "input" !== b.localName || "" !== b.type && "text" !== b.type && "hidden" !== b.type && "tel" !== b.type ? (f.push(-1), "input" === b.localName && q.test(b.type) && (n += 1)) : (f.push(n), n += 1)
            });
            b.each(d, function(c, d) {
                var k = b.inArray(c, h); - 1 < k && -1 < f[k] && "object" === typeof b("form:eq(" + e + ") input:eq(" + f[k] + ")").data("autoNumeric") && (d.value = b("form:eq(" +
                    e + ") input:eq(" + f[k] + ")").autoNumeric("get").toString(), a = !0)
            });
            a || b.error("None of the successful form inputs are initialized by autoNumeric.");
            return d
        },
        getSettings: function() {
            return x(b(this)).eq(0).data("autoNumeric")
        }
    };
    b.fn.autoNumeric = function(a) {
        if (D[a]) return D[a].apply(this, Array.prototype.slice.call(arguments, 1));
        if ("object" === typeof a || !a) return D.init.apply(this, arguments);
        b.error('Method "' + a + '" is not supported by autoNumeric()')
    };
    b.fn.autoNumeric.defaults = {
        aSep: ",",
        dGroup: "3",
        aDec: ".",
        altDec: null,
        aSign: "",
        pSign: "p",
        vMax: "9999999999999.99",
        vMin: "-9999999999999.99",
        mDec: null,
        mRound: "S",
        aPad: !0,
        nBracket: null,
        wEmpty: "empty",
        lZero: "allow",
        sNumber: !0,
        aForm: !0,
        anDefault: null
    }
})(jQuery);
if ("undefined" === typeof jQuery) throw Error("Bootstrap's JavaScript requires jQuery"); + function(b) {
    b = b.fn.jquery.split(" ")[0].split(".");
    if (2 > b[0] && 9 > b[1] || 1 == b[0] && 9 == b[1] && 1 > b[2]) throw Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
}(jQuery); +
function(b) {
    function d() {
        var b = document.createElement("bootstrap"),
            c = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            },
            a;
        for (a in c)
            if (void 0 !== b.style[a]) return {
                end: c[a]
            };
        return !1
    }
    b.fn.emulateTransitionEnd = function(d) {
        var c = !1,
            a = this;
        b(this).one("bsTransitionEnd", function() {
            c = !0
        });
        setTimeout(function() {
            c || b(a).trigger(b.support.transition.end)
        }, d);
        return this
    };
    b(function() {
        b.support.transition = d();
        b.support.transition &&
            (b.event.special.bsTransitionEnd = {
                bindType: b.support.transition.end,
                delegateType: b.support.transition.end,
                handle: function(d) {
                    if (b(d.target).is(this)) return d.handleObj.handler.apply(this, arguments)
                }
            })
    })
}(jQuery); +
function(b) {
    var d = function(c) {
        b(c).on("click", '[data-dismiss="alert"]', this.close)
    };
    d.VERSION = "3.3.5";
    d.TRANSITION_DURATION = 150;
    d.prototype.close = function(c) {
        function a() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var f = b(this),
            e = f.attr("data-target");
        e || (e = (e = f.attr("href")) && e.replace(/.*(?=#[^\s]*$)/, ""));
        var g = b(e);
        c && c.preventDefault();
        g.length || (g = f.closest(".alert"));
        g.trigger(c = b.Event("close.bs.alert"));
        c.isDefaultPrevented() || (g.removeClass("in"), b.support.transition && g.hasClass("fade") ?
            g.one("bsTransitionEnd", a).emulateTransitionEnd(d.TRANSITION_DURATION) : a())
    };
    var g = b.fn.alert;
    b.fn.alert = function(c) {
        return this.each(function() {
            var a = b(this),
                f = a.data("bs.alert");
            f || a.data("bs.alert", f = new d(this));
            "string" == typeof c && f[c].call(a)
        })
    };
    b.fn.alert.Constructor = d;
    b.fn.alert.noConflict = function() {
        b.fn.alert = g;
        return this
    };
    b(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', d.prototype.close)
}(jQuery); +
function(b) {
    function d(a) {
        return this.each(function() {
            var c = b(this),
                d = c.data("bs.button"),
                p = "object" == typeof a && a;
            d || c.data("bs.button", d = new g(this, p));
            "toggle" == a ? d.toggle() : a && d.setState(a)
        })
    }
    var g = function(a, c) {
        this.$element = b(a);
        this.options = b.extend({}, g.DEFAULTS, c);
        this.isLoading = !1
    };
    g.VERSION = "3.3.5";
    g.DEFAULTS = {
        loadingText: "loading..."
    };
    g.prototype.setState = function(a) {
        var c = this.$element,
            d = c.is("input") ? "val" : "html",
            g = c.data();
        a += "Text";
        null == g.resetText && c.data("resetText", c[d]());
        setTimeout(b.proxy(function() {
            c[d](null ==
                g[a] ? this.options[a] : g[a]);
            "loadingText" == a ? (this.isLoading = !0, c.addClass("disabled").attr("disabled", "disabled")) : this.isLoading && (this.isLoading = !1, c.removeClass("disabled").removeAttr("disabled"))
        }, this), 0)
    };
    g.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") &&
                (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active"));
            c.prop("checked", this.$element.hasClass("active"));
            a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var c = b.fn.button;
    b.fn.button = d;
    b.fn.button.Constructor = g;
    b.fn.button.noConflict = function() {
        b.fn.button = c;
        return this
    };
    b(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(a) {
        var c = b(a.target);
        c.hasClass("btn") || (c = c.closest(".btn"));
        d.call(c, "toggle");
        b(a.target).is('input[type="radio"]') || b(a.target).is('input[type="checkbox"]') || a.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(a) {
        b(a.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(a.type))
    })
}(jQuery); +
function(b) {
    function d(a) {
        return this.each(function() {
            var c = b(this),
                d = c.data("bs.carousel"),
                h = b.extend({}, g.DEFAULTS, c.data(), "object" == typeof a && a),
                k = "string" == typeof a ? a : h.slide;
            d || c.data("bs.carousel", d = new g(this, h));
            if ("number" == typeof a) d.to(a);
            else if (k) d[k]();
            else h.interval && d.pause().cycle()
        })
    }
    var g = function(a, c) {
        this.$element = b(a);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = c;
        this.$items = this.$active = this.interval = this.sliding = this.paused = null;
        this.options.keyboard &&
            this.$element.on("keydown.bs.carousel", b.proxy(this.keydown, this));
        "hover" != this.options.pause || "ontouchstart" in document.documentElement || this.$element.on("mouseenter.bs.carousel", b.proxy(this.pause, this)).on("mouseleave.bs.carousel", b.proxy(this.cycle, this))
    };
    g.VERSION = "3.3.5";
    g.TRANSITION_DURATION = 600;
    g.DEFAULTS = {
        interval: 5E3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    };
    g.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    };
    g.prototype.cycle = function(a) {
        a || (this.paused = !1);
        this.interval && clearInterval(this.interval);
        this.options.interval && !this.paused && (this.interval = setInterval(b.proxy(this.next, this), this.options.interval));
        return this
    };
    g.prototype.getItemIndex = function(a) {
        this.$items = a.parent().children(".item");
        return this.$items.index(a || this.$active)
    };
    g.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b);
        return ("prev" == a && 0 === c || "next" == a && c == this.$items.length -
            1) && !this.options.wrap ? b : this.$items.eq((c + ("prev" == a ? -1 : 1)) % this.$items.length)
    };
    g.prototype.to = function(a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(a > this.$items.length - 1 || 0 > a)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    };
    g.prototype.pause = function(a) {
        a || (this.paused = !0);
        this.$element.find(".next, .prev").length && b.support.transition && (this.$element.trigger(b.support.transition.end),
            this.cycle(!0));
        this.interval = clearInterval(this.interval);
        return this
    };
    g.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    };
    g.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    };
    g.prototype.slide = function(a, c) {
        var d = this.$element.find(".item.active"),
            h = c || this.getItemForDirection(a, d),
            k = this.interval,
            q = "next" == a ? "left" : "right",
            m = this;
        if (h.hasClass("active")) return this.sliding = !1;
        var t = h[0],
            w = b.Event("slide.bs.carousel", {
                relatedTarget: t,
                direction: q
            });
        this.$element.trigger(w);
        if (!w.isDefaultPrevented()) {
            this.sliding = !0;
            k && this.pause();
            this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), (w = b(this.$indicators.children()[this.getItemIndex(h)])) && w.addClass("active"));
            var v = b.Event("slid.bs.carousel", {
                relatedTarget: t,
                direction: q
            });
            b.support.transition && this.$element.hasClass("slide") ? (h.addClass(a), h[0].offsetWidth, d.addClass(q), h.addClass(q), d.one("bsTransitionEnd", function() {
                h.removeClass([a, q].join(" ")).addClass("active");
                d.removeClass(["active",
                    q
                ].join(" "));
                m.sliding = !1;
                setTimeout(function() {
                    m.$element.trigger(v)
                }, 0)
            }).emulateTransitionEnd(g.TRANSITION_DURATION)) : (d.removeClass("active"), h.addClass("active"), this.sliding = !1, this.$element.trigger(v));
            k && this.cycle();
            return this
        }
    };
    var c = b.fn.carousel;
    b.fn.carousel = d;
    b.fn.carousel.Constructor = g;
    b.fn.carousel.noConflict = function() {
        b.fn.carousel = c;
        return this
    };
    var a = function(a) {
        var c, g = b(this),
            h = b(g.attr("data-target") || (c = g.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
        if (h.hasClass("carousel")) {
            c =
                b.extend({}, h.data(), g.data());
            if (g = g.attr("data-slide-to")) c.interval = !1;
            d.call(h, c);
            g && h.data("bs.carousel").to(g);
            a.preventDefault()
        }
    };
    b(document).on("click.bs.carousel.data-api", "[data-slide]", a).on("click.bs.carousel.data-api", "[data-slide-to]", a);
    b(window).on("load", function() {
        b('[data-ride="carousel"]').each(function() {
            var a = b(this);
            d.call(a, a.data())
        })
    })
}(jQuery); +
function(b) {
    function d(a) {
        var c;
        a = a.attr("data-target") || (c = a.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return b(a)
    }

    function g(a) {
        return this.each(function() {
            var d = b(this),
                g = d.data("bs.collapse"),
                h = b.extend({}, c.DEFAULTS, d.data(), "object" == typeof a && a);
            !g && h.toggle && /show|hide/.test(a) && (h.toggle = !1);
            g || d.data("bs.collapse", g = new c(this, h));
            if ("string" == typeof a) g[a]()
        })
    }
    var c = function(a, d) {
        this.$element = b(a);
        this.options = b.extend({}, c.DEFAULTS, d);
        this.$trigger = b('[data-toggle="collapse"][href="#' +
            a.id + '"],[data-toggle="collapse"][data-target="#' + a.id + '"]');
        this.transitioning = null;
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        this.options.toggle && this.toggle()
    };
    c.VERSION = "3.3.5";
    c.TRANSITION_DURATION = 350;
    c.DEFAULTS = {
        toggle: !0
    };
    c.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    };
    c.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var a, d = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (d && d.length && (a = d.data("bs.collapse")) && a.transitioning) return;
            var p = b.Event("show.bs.collapse");
            this.$element.trigger(p);
            if (!p.isDefaultPrevented()) {
                d && d.length && (g.call(d, "hide"), a || d.data("bs.collapse", null));
                var h = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[h](0).attr("aria-expanded", !0);
                this.$trigger.removeClass("collapsed").attr("aria-expanded", !0);
                this.transitioning = 1;
                a = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[h]("");
                    this.transitioning =
                        0;
                    this.$element.trigger("shown.bs.collapse")
                };
                if (!b.support.transition) return a.call(this);
                d = b.camelCase(["scroll", h].join("-"));
                this.$element.one("bsTransitionEnd", b.proxy(a, this)).emulateTransitionEnd(c.TRANSITION_DURATION)[h](this.$element[0][d])
            }
        }
    };
    c.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var a = b.Event("hide.bs.collapse");
            this.$element.trigger(a);
            if (!a.isDefaultPrevented()) {
                a = this.dimension();
                this.$element[a](this.$element[a]())[0].offsetHeight;
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1);
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1);
                this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0;
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!b.support.transition) return d.call(this);
                this.$element[a](0).one("bsTransitionEnd", b.proxy(d, this)).emulateTransitionEnd(c.TRANSITION_DURATION)
            }
        }
    };
    c.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    c.prototype.getParent = function() {
        return b(this.options.parent).find('[data-toggle="collapse"][data-parent="' +
            this.options.parent + '"]').each(b.proxy(function(a, c) {
            var g = b(c);
            this.addAriaAndCollapsedClass(d(g), g)
        }, this)).end()
    };
    c.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c);
        b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var a = b.fn.collapse;
    b.fn.collapse = g;
    b.fn.collapse.Constructor = c;
    b.fn.collapse.noConflict = function() {
        b.fn.collapse = a;
        return this
    };
    b(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(a) {
        var c = b(this);
        c.attr("data-target") ||
            a.preventDefault();
        a = d(c);
        c = a.data("bs.collapse") ? "toggle" : c.data();
        g.call(a, c)
    })
}(jQuery); +
function(b) {
    function d(a) {
        var c = a.attr("data-target");
        c || (c = (c = a.attr("href")) && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        return (c = c && b(c)) && c.length ? c : a.parent()
    }

    function g(a) {
        a && 3 === a.which || (b(".dropdown-backdrop").remove(), b('[data-toggle="dropdown"]').each(function() {
            var c = b(this),
                g = d(c),
                h = {
                    relatedTarget: this
                };
            !g.hasClass("open") || a && "click" == a.type && /input|textarea/i.test(a.target.tagName) && b.contains(g[0], a.target) || (g.trigger(a = b.Event("hide.bs.dropdown", h)), a.isDefaultPrevented() ||
                (c.attr("aria-expanded", "false"), g.removeClass("open").trigger("hidden.bs.dropdown", h)))
        }))
    }
    var c = function(a) {
        b(a).on("click.bs.dropdown", this.toggle)
    };
    c.VERSION = "3.3.5";
    c.prototype.toggle = function(a) {
        var c = b(this);
        if (!c.is(".disabled, :disabled")) {
            var p = d(c);
            a = p.hasClass("open");
            g();
            if (!a) {
                if ("ontouchstart" in document.documentElement && !p.closest(".navbar-nav").length) b(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(b(this)).on("click", g);
                var h = {
                    relatedTarget: this
                };
                p.trigger(a =
                    b.Event("show.bs.dropdown", h));
                if (a.isDefaultPrevented()) return;
                c.trigger("focus").attr("aria-expanded", "true");
                p.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    };
    c.prototype.keydown = function(a) {
        if (/(38|40|27|32)/.test(a.which) && !/input|textarea/i.test(a.target.tagName)) {
            var c = b(this);
            a.preventDefault();
            a.stopPropagation();
            if (!c.is(".disabled, :disabled")) {
                var g = d(c),
                    h = g.hasClass("open");
                if (!h && 27 != a.which || h && 27 == a.which) return 27 == a.which && g.find('[data-toggle="dropdown"]').trigger("focus"),
                    c.trigger("click");
                c = g.find(".dropdown-menu li:not(.disabled):visible a");
                c.length && (g = c.index(a.target), 38 == a.which && 0 < g && g--, 40 == a.which && g < c.length - 1 && g++, ~g || (g = 0), c.eq(g).trigger("focus"))
            }
        }
    };
    var a = b.fn.dropdown;
    b.fn.dropdown = function(a) {
        return this.each(function() {
            var d = b(this),
                g = d.data("bs.dropdown");
            g || d.data("bs.dropdown", g = new c(this));
            "string" == typeof a && g[a].call(d)
        })
    };
    b.fn.dropdown.Constructor = c;
    b.fn.dropdown.noConflict = function() {
        b.fn.dropdown = a;
        return this
    };
    b(document).on("click.bs.dropdown.data-api",
        g).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', c.prototype.toggle).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', c.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", c.prototype.keydown)
}(jQuery); +
function(b) {
    function d(a, c) {
        return this.each(function() {
            var d = b(this),
                p = d.data("bs.modal"),
                h = b.extend({}, g.DEFAULTS, d.data(), "object" == typeof a && a);
            p || d.data("bs.modal", p = new g(this, h));
            if ("string" == typeof a) p[a](c);
            else h.show && p.show(c)
        })
    }
    var g = function(a, c) {
        this.options = c;
        this.$body = b(document.body);
        this.$element = b(a);
        this.$dialog = this.$element.find(".modal-dialog");
        this.originalBodyPad = this.isShown = this.$backdrop = null;
        this.scrollbarWidth = 0;
        this.ignoreBackdropClick = !1;
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote,
            b.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
    };
    g.VERSION = "3.3.5";
    g.TRANSITION_DURATION = 300;
    g.BACKDROP_TRANSITION_DURATION = 150;
    g.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    };
    g.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    };
    g.prototype.show = function(a) {
        var c = this,
            d = b.Event("show.bs.modal", {
                relatedTarget: a
            });
        this.$element.trigger(d);
        this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"),
            this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', b.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                c.$element.one("mouseup.dismiss.bs.modal", function(a) {
                    b(a.target).is(c.$element) && (c.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function() {
                var d = b.support.transition && c.$element.hasClass("fade");
                c.$element.parent().length || c.$element.appendTo(c.$body);
                c.$element.show().scrollTop(0);
                c.adjustDialog();
                d && c.$element[0].offsetWidth;
                c.$element.addClass("in");
                c.enforceFocus();
                var e = b.Event("shown.bs.modal", {
                    relatedTarget: a
                });
                d ? c.$dialog.one("bsTransitionEnd", function() {
                    c.$element.trigger("focus").trigger(e)
                }).emulateTransitionEnd(g.TRANSITION_DURATION) : c.$element.trigger("focus").trigger(e)
            }))
    };
    g.prototype.hide = function(a) {
        a && a.preventDefault();
        a = b.Event("hide.bs.modal");
        this.$element.trigger(a);
        this.isShown && !a.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), b(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"), b.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", b.proxy(this.hideModal, this)).emulateTransitionEnd(g.TRANSITION_DURATION) : this.hideModal())
    };
    g.prototype.enforceFocus = function() {
        b(document).off("focusin.bs.modal").on("focusin.bs.modal", b.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    };
    g.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) this.$element.on("keydown.dismiss.bs.modal",
            b.proxy(function(a) {
                27 == a.which && this.hide()
            }, this));
        else this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    };
    g.prototype.resize = function() {
        if (this.isShown) b(window).on("resize.bs.modal", b.proxy(this.handleUpdate, this));
        else b(window).off("resize.bs.modal")
    };
    g.prototype.hideModal = function() {
        var a = this;
        this.$element.hide();
        this.backdrop(function() {
            a.$body.removeClass("modal-open");
            a.resetAdjustments();
            a.resetScrollbar();
            a.$element.trigger("hidden.bs.modal")
        })
    };
    g.prototype.removeBackdrop = function() {
        this.$backdrop &&
            this.$backdrop.remove();
        this.$backdrop = null
    };
    g.prototype.backdrop = function(a) {
        var c = this,
            d = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var p = b.support.transition && d;
            this.$backdrop = b(document.createElement("div")).addClass("modal-backdrop " + d).appendTo(this.$body);
            this.$element.on("click.dismiss.bs.modal", b.proxy(function(a) {
                this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() :
                    this.hide())
            }, this));
            p && this.$backdrop[0].offsetWidth;
            this.$backdrop.addClass("in");
            a && (p ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(g.BACKDROP_TRANSITION_DURATION) : a())
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), d = function() {
            c.removeBackdrop();
            a && a()
        }, b.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", d).emulateTransitionEnd(g.BACKDROP_TRANSITION_DURATION) : d()) : a && a()
    };
    g.prototype.handleUpdate = function() {
        this.adjustDialog()
    };
    g.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    };
    g.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    };
    g.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        a || (a = document.documentElement.getBoundingClientRect(), a = a.right - Math.abs(a.left));
        this.bodyIsOverflowing =
            document.body.clientWidth < a;
        this.scrollbarWidth = this.measureScrollbar()
    };
    g.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    };
    g.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    };
    g.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure";
        this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        this.$body[0].removeChild(a);
        return b
    };
    var c = b.fn.modal;
    b.fn.modal = d;
    b.fn.modal.Constructor = g;
    b.fn.modal.noConflict = function() {
        b.fn.modal = c;
        return this
    };
    b(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(a) {
        var c = b(this),
            e = c.attr("href"),
            g = b(c.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            e = g.data("bs.modal") ? "toggle" : b.extend({
                remote: !/#/.test(e) && e
            }, g.data(), c.data());
        c.is("a") && a.preventDefault();
        g.one("show.bs.modal",
            function(a) {
                if (!a.isDefaultPrevented()) g.one("hidden.bs.modal", function() {
                    c.is(":visible") && c.trigger("focus")
                })
            });
        d.call(g, e, this)
    })
}(jQuery); +
function(b) {
    var d = function(b, a) {
        this.inState = this.$element = this.hoverState = this.timeout = this.enabled = this.options = this.type = null;
        this.init("tooltip", b, a)
    };
    d.VERSION = "3.3.5";
    d.TRANSITION_DURATION = 150;
    d.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    d.prototype.init = function(c, a,
        d) {
        this.enabled = !0;
        this.type = c;
        this.$element = b(a);
        this.options = this.getOptions(d);
        this.$viewport = this.options.viewport && b(b.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport);
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        };
        if (this.$element[0] instanceof document.constructor && !this.options.selector) throw Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        c = this.options.trigger.split(" ");
        for (a = c.length; a--;)
            if (d = c[a], "click" == d) this.$element.on("click." + this.type, this.options.selector, b.proxy(this.toggle, this));
            else if ("manual" != d) {
            var e = "hover" == d ? "mouseleave" : "focusout";
            this.$element.on(("hover" == d ? "mouseenter" : "focusin") + "." + this.type, this.options.selector, b.proxy(this.enter, this));
            this.$element.on(e + "." + this.type, this.options.selector, b.proxy(this.leave, this))
        }
        this.options.selector ? this._options = b.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    };
    d.prototype.getDefaults =
        function() {
            return d.DEFAULTS
        };
    d.prototype.getOptions = function(c) {
        c = b.extend({}, this.getDefaults(), this.$element.data(), c);
        c.delay && "number" == typeof c.delay && (c.delay = {
            show: c.delay,
            hide: c.delay
        });
        return c
    };
    d.prototype.getDelegateOptions = function() {
        var c = {},
            a = this.getDefaults();
        this._options && b.each(this._options, function(b, d) {
            a[b] != d && (c[b] = d)
        });
        return c
    };
    d.prototype.enter = function(c) {
        var a = c instanceof this.constructor ? c : b(c.currentTarget).data("bs." + this.type);
        a || (a = new this.constructor(c.currentTarget,
            this.getDelegateOptions()), b(c.currentTarget).data("bs." + this.type, a));
        c instanceof b.Event && (a.inState["focusin" == c.type ? "focus" : "hover"] = !0);
        if (a.tip().hasClass("in") || "in" == a.hoverState) a.hoverState = "in";
        else {
            clearTimeout(a.timeout);
            a.hoverState = "in";
            if (!a.options.delay || !a.options.delay.show) return a.show();
            a.timeout = setTimeout(function() {
                "in" == a.hoverState && a.show()
            }, a.options.delay.show)
        }
    };
    d.prototype.isInStateTrue = function() {
        for (var b in this.inState)
            if (this.inState[b]) return !0;
        return !1
    };
    d.prototype.leave =
        function(c) {
            var a = c instanceof this.constructor ? c : b(c.currentTarget).data("bs." + this.type);
            a || (a = new this.constructor(c.currentTarget, this.getDelegateOptions()), b(c.currentTarget).data("bs." + this.type, a));
            c instanceof b.Event && (a.inState["focusout" == c.type ? "focus" : "hover"] = !1);
            if (!a.isInStateTrue()) {
                clearTimeout(a.timeout);
                a.hoverState = "out";
                if (!a.options.delay || !a.options.delay.hide) return a.hide();
                a.timeout = setTimeout(function() {
                    "out" == a.hoverState && a.hide()
                }, a.options.delay.hide)
            }
        };
    d.prototype.show =
        function() {
            var c = b.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(c);
                var a = b.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (!c.isDefaultPrevented() && a) {
                    var f = this,
                        c = this.tip(),
                        a = this.getUID(this.type);
                    this.setContent();
                    c.attr("id", a);
                    this.$element.attr("aria-describedby", a);
                    this.options.animation && c.addClass("fade");
                    var a = "function" == typeof this.options.placement ? this.options.placement.call(this, c[0], this.$element[0]) : this.options.placement,
                        e = /\s?auto?\s?/i,
                        g = e.test(a);
                    g && (a = a.replace(e, "") || "top");
                    c.detach().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }).addClass(a).data("bs." + this.type, this);
                    this.options.container ? c.appendTo(this.options.container) : c.insertAfter(this.$element);
                    this.$element.trigger("inserted.bs." + this.type);
                    var e = this.getPosition(),
                        h = c[0].offsetWidth,
                        k = c[0].offsetHeight;
                    if (g) {
                        var g = a,
                            q = this.getPosition(this.$viewport),
                            a = "bottom" == a && e.bottom + k > q.bottom ? "top" : "top" == a && e.top - k < q.top ? "bottom" : "right" == a && e.right + h > q.width ? "left" :
                            "left" == a && e.left - h < q.left ? "right" : a;
                        c.removeClass(g).addClass(a)
                    }
                    e = this.getCalculatedOffset(a, e, h, k);
                    this.applyPlacement(e, a);
                    a = function() {
                        var a = f.hoverState;
                        f.$element.trigger("shown.bs." + f.type);
                        f.hoverState = null;
                        "out" == a && f.leave(f)
                    };
                    b.support.transition && this.$tip.hasClass("fade") ? c.one("bsTransitionEnd", a).emulateTransitionEnd(d.TRANSITION_DURATION) : a()
                }
            }
        };
    d.prototype.applyPlacement = function(c, a) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            g = d[0].offsetHeight,
            h = parseInt(d.css("margin-top"), 10),
            k = parseInt(d.css("margin-left"),
                10);
        isNaN(h) && (h = 0);
        isNaN(k) && (k = 0);
        c.top += h;
        c.left += k;
        b.offset.setOffset(d[0], b.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, c), 0);
        d.addClass("in");
        var k = d[0].offsetWidth,
            q = d[0].offsetHeight;
        "top" == a && q != g && (c.top = c.top + g - q);
        var m = this.getViewportAdjustedDelta(a, c, k, q);
        m.left ? c.left += m.left : c.top += m.top;
        e = (h = /top|bottom/.test(a)) ? 2 * m.left - e + k : 2 * m.top - g + q;
        g = h ? "offsetWidth" : "offsetHeight";
        d.offset(c);
        this.replaceArrow(e, d[0][g], h)
    };
    d.prototype.replaceArrow = function(b,
        a, d) {
        this.arrow().css(d ? "left" : "top", 50 * (1 - b / a) + "%").css(d ? "top" : "left", "")
    };
    d.prototype.setContent = function() {
        var b = this.tip(),
            a = this.getTitle();
        b.find(".tooltip-inner")[this.options.html ? "html" : "text"](a);
        b.removeClass("fade in top bottom left right")
    };
    d.prototype.hide = function(c) {
        function a() {
            "in" != f.hoverState && e.detach();
            f.$element.removeAttr("aria-describedby").trigger("hidden.bs." + f.type);
            c && c()
        }
        var f = this,
            e = b(this.$tip),
            g = b.Event("hide.bs." + this.type);
        this.$element.trigger(g);
        if (!g.isDefaultPrevented()) return e.removeClass("in"),
            b.support.transition && e.hasClass("fade") ? e.one("bsTransitionEnd", a).emulateTransitionEnd(d.TRANSITION_DURATION) : a(), this.hoverState = null, this
    };
    d.prototype.fixTitle = function() {
        var b = this.$element;
        (b.attr("title") || "string" != typeof b.attr("data-original-title")) && b.attr("data-original-title", b.attr("title") || "").attr("title", "")
    };
    d.prototype.hasContent = function() {
        return this.getTitle()
    };
    d.prototype.getPosition = function(c) {
        c = c || this.$element;
        var a = c[0],
            d = "BODY" == a.tagName,
            a = a.getBoundingClientRect();
        null == a.width && (a = b.extend({}, a, {
            width: a.right - a.left,
            height: a.bottom - a.top
        }));
        var e = d ? {
            top: 0,
            left: 0
        } : c.offset();
        c = {
            scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : c.scrollTop()
        };
        d = d ? {
            width: b(window).width(),
            height: b(window).height()
        } : null;
        return b.extend({}, a, c, d, e)
    };
    d.prototype.getCalculatedOffset = function(b, a, d, e) {
        return "bottom" == b ? {
            top: a.top + a.height,
            left: a.left + a.width / 2 - d / 2
        } : "top" == b ? {
            top: a.top - e,
            left: a.left + a.width / 2 - d / 2
        } : "left" == b ? {
            top: a.top + a.height / 2 - e / 2,
            left: a.left -
                d
        } : {
            top: a.top + a.height / 2 - e / 2,
            left: a.left + a.width
        }
    };
    d.prototype.getViewportAdjustedDelta = function(b, a, d, e) {
        var g = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return g;
        var h = this.options.viewport && this.options.viewport.padding || 0,
            k = this.getPosition(this.$viewport);
        /right|left/.test(b) ? (d = a.top - h - k.scroll, a = a.top + h - k.scroll + e, d < k.top ? g.top = k.top - d : a > k.top + k.height && (g.top = k.top + k.height - a)) : (e = a.left - h, a = a.left + h + d, e < k.left ? g.left = k.left - e : a > k.right && (g.left = k.left + k.width - a));
        return g
    };
    d.prototype.getTitle = function() {
        var b =
            this.$element,
            a = this.options;
        return b.attr("data-original-title") || ("function" == typeof a.title ? a.title.call(b[0]) : a.title)
    };
    d.prototype.getUID = function(b) {
        do b += ~~(1E6 * Math.random()); while (document.getElementById(b));
        return b
    };
    d.prototype.tip = function() {
        if (!this.$tip && (this.$tip = b(this.options.template), 1 != this.$tip.length)) throw Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    };
    d.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    };
    d.prototype.enable = function() {
        this.enabled = !0
    };
    d.prototype.disable = function() {
        this.enabled = !1
    };
    d.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    };
    d.prototype.toggle = function(c) {
        var a = this;
        c && (a = b(c.currentTarget).data("bs." + this.type), a || (a = new this.constructor(c.currentTarget, this.getDelegateOptions()), b(c.currentTarget).data("bs." + this.type, a)));
        c ? (a.inState.click = !a.inState.click, a.isInStateTrue() ? a.enter(a) : a.leave(a)) : a.tip().hasClass("in") ? a.leave(a) : a.enter(a)
    };
    d.prototype.destroy =
        function() {
            var b = this;
            clearTimeout(this.timeout);
            this.hide(function() {
                b.$element.off("." + b.type).removeData("bs." + b.type);
                b.$tip && b.$tip.detach();
                b.$tip = null;
                b.$arrow = null;
                b.$viewport = null
            })
        };
    var g = b.fn.tooltip;
    b.fn.tooltip = function(c) {
        return this.each(function() {
            var a = b(this),
                f = a.data("bs.tooltip"),
                e = "object" == typeof c && c;
            if (f || !/destroy|hide/.test(c))
                if (f || a.data("bs.tooltip", f = new d(this, e)), "string" == typeof c) f[c]()
        })
    };
    b.fn.tooltip.Constructor = d;
    b.fn.tooltip.noConflict = function() {
        b.fn.tooltip =
            g;
        return this
    }
}(jQuery); +
function(b) {
    var d = function(b, a) {
        this.init("popover", b, a)
    };
    if (!b.fn.tooltip) throw Error("Popover requires tooltip.js");
    d.VERSION = "3.3.5";
    d.DEFAULTS = b.extend({}, b.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });
    d.prototype = b.extend({}, b.fn.tooltip.Constructor.prototype);
    d.prototype.constructor = d;
    d.prototype.getDefaults = function() {
        return d.DEFAULTS
    };
    d.prototype.setContent = function() {
        var b = this.tip(),
            a = this.getTitle(),
            d = this.getContent();
        b.find(".popover-title")[this.options.html ? "html" : "text"](a);
        b.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof d ? "html" : "append" : "text"](d);
        b.removeClass("fade top bottom left right in");
        b.find(".popover-title").html() || b.find(".popover-title").hide()
    };
    d.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    };
    d.prototype.getContent = function() {
        var b = this.$element,
            a = this.options;
        return b.attr("data-content") || ("function" == typeof a.content ? a.content.call(b[0]) : a.content)
    };
    d.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var g = b.fn.popover;
    b.fn.popover = function(c) {
        return this.each(function() {
            var a = b(this),
                f = a.data("bs.popover"),
                e = "object" == typeof c && c;
            if (f || !/destroy|hide/.test(c))
                if (f || a.data("bs.popover", f = new d(this, e)), "string" == typeof c) f[c]()
        })
    };
    b.fn.popover.Constructor = d;
    b.fn.popover.noConflict = function() {
        b.fn.popover =
            g;
        return this
    }
}(jQuery); +
function(b) {
    function d(a, c) {
        this.$body = b(document.body);
        this.$scrollElement = b(a).is(document.body) ? b(window) : b(a);
        this.options = b.extend({}, d.DEFAULTS, c);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", b.proxy(this.process, this));
        this.refresh();
        this.process()
    }

    function g(a) {
        return this.each(function() {
            var c = b(this),
                e = c.data("bs.scrollspy"),
                g = "object" == typeof a && a;
            e || c.data("bs.scrollspy",
                e = new d(this, g));
            if ("string" == typeof a) e[a]()
        })
    }
    d.VERSION = "3.3.5";
    d.DEFAULTS = {
        offset: 10
    };
    d.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    };
    d.prototype.refresh = function() {
        var a = this,
            c = "offset",
            d = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        b.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop());
        this.$body.find(this.selector).map(function() {
            var a =
                b(this),
                a = a.data("target") || a.attr("href"),
                h = /^#./.test(a) && b(a);
            return h && h.length && h.is(":visible") && [
                [h[c]().top + d, a]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            a.offsets.push(this[0]);
            a.targets.push(this[1])
        })
    };
    d.prototype.process = function() {
        var a = this.$scrollElement.scrollTop() + this.options.offset,
            b = this.getScrollHeight(),
            c = this.options.offset + b - this.$scrollElement.height(),
            d = this.offsets,
            h = this.targets,
            g = this.activeTarget,
            q;
        this.scrollHeight != b && this.refresh();
        if (a >= c) return g !=
            (q = h[h.length - 1]) && this.activate(q);
        if (g && a < d[0]) return this.activeTarget = null, this.clear();
        for (q = d.length; q--;) g != h[q] && a >= d[q] && (void 0 === d[q + 1] || a < d[q + 1]) && this.activate(h[q])
    };
    d.prototype.activate = function(a) {
        this.activeTarget = a;
        this.clear();
        a = b(this.selector + '[data-target="' + a + '"],' + this.selector + '[href="' + a + '"]').parents("li").addClass("active");
        a.parent(".dropdown-menu").length && (a = a.closest("li.dropdown").addClass("active"));
        a.trigger("activate.bs.scrollspy")
    };
    d.prototype.clear = function() {
        b(this.selector).parentsUntil(this.options.target,
            ".active").removeClass("active")
    };
    var c = b.fn.scrollspy;
    b.fn.scrollspy = g;
    b.fn.scrollspy.Constructor = d;
    b.fn.scrollspy.noConflict = function() {
        b.fn.scrollspy = c;
        return this
    };
    b(window).on("load.bs.scrollspy.data-api", function() {
        b('[data-spy="scroll"]').each(function() {
            var a = b(this);
            g.call(a, a.data())
        })
    })
}(jQuery); +
function(b) {
    function d(a) {
        return this.each(function() {
            var c = b(this),
                d = c.data("bs.tab");
            d || c.data("bs.tab", d = new g(this));
            if ("string" == typeof a) d[a]()
        })
    }
    var g = function(a) {
        this.element = b(a)
    };
    g.VERSION = "3.3.5";
    g.TRANSITION_DURATION = 150;
    g.prototype.show = function() {
        var a = this.element,
            c = a.closest("ul:not(.dropdown-menu)"),
            d = a.data("target");
        d || (d = (d = a.attr("href")) && d.replace(/.*(?=#[^\s]*$)/, ""));
        if (!a.parent("li").hasClass("active")) {
            var h = c.find(".active:last a"),
                g = b.Event("hide.bs.tab", {
                    relatedTarget: a[0]
                }),
                q = b.Event("show.bs.tab", {
                    relatedTarget: h[0]
                });
            h.trigger(g);
            a.trigger(q);
            q.isDefaultPrevented() || g.isDefaultPrevented() || (d = b(d), this.activate(a.closest("li"), c), this.activate(d, d.parent(), function() {
                h.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: a[0]
                });
                a.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: h[0]
                })
            }))
        }
    };
    g.prototype.activate = function(a, c, d) {
        function h() {
            k.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
            a.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
            q ? (a[0].offsetWidth, a.addClass("in")) : a.removeClass("fade");
            a.parent(".dropdown-menu").length && a.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            d && d()
        }
        var k = c.find("> .active"),
            q = d && b.support.transition && (k.length && k.hasClass("fade") || !!c.find("> .fade").length);
        k.length && q ? k.one("bsTransitionEnd", h).emulateTransitionEnd(g.TRANSITION_DURATION) : h();
        k.removeClass("in")
    };
    var c = b.fn.tab;
    b.fn.tab = d;
    b.fn.tab.Constructor = g;
    b.fn.tab.noConflict = function() {
        b.fn.tab =
            c;
        return this
    };
    var a = function(a) {
        a.preventDefault();
        d.call(b(this), "show")
    };
    b(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', a).on("click.bs.tab.data-api", '[data-toggle="pill"]', a)
}(jQuery); +
function(b) {
    function d(a) {
        return this.each(function() {
            var c = b(this),
                d = c.data("bs.affix"),
                p = "object" == typeof a && a;
            d || c.data("bs.affix", d = new g(this, p));
            if ("string" == typeof a) d[a]()
        })
    }
    var g = function(a, c) {
        this.options = b.extend({}, g.DEFAULTS, c);
        this.$target = b(this.options.target).on("scroll.bs.affix.data-api", b.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", b.proxy(this.checkPositionWithEventLoop, this));
        this.$element = b(a);
        this.pinnedOffset = this.unpin = this.affixed = null;
        this.checkPosition()
    };
    g.VERSION = "3.3.5";
    g.RESET = "affix affix-top affix-bottom";
    g.DEFAULTS = {
        offset: 0,
        target: window
    };
    g.prototype.getState = function(a, b, c, d) {
        var h = this.$target.scrollTop(),
            g = this.$element.offset(),
            q = this.$target.height();
        if (null != c && "top" == this.affixed) return h < c ? "top" : !1;
        if ("bottom" == this.affixed) return null != c ? h + this.unpin <= g.top ? !1 : "bottom" : h + q <= a - d ? !1 : "bottom";
        var m = null == this.affixed,
            g = m ? h : g.top;
        return null != c && h <= c ? "top" : null != d && g + (m ? q : b) >= a - d ? "bottom" : !1
    };
    g.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(g.RESET).addClass("affix");
        var a = this.$target.scrollTop();
        return this.pinnedOffset = this.$element.offset().top - a
    };
    g.prototype.checkPositionWithEventLoop = function() {
        setTimeout(b.proxy(this.checkPosition, this), 1)
    };
    g.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var a = this.$element.height(),
                c = this.options.offset,
                d = c.top,
                p = c.bottom,
                h = Math.max(b(document).height(), b(document.body).height());
            "object" != typeof c && (p = d = c);
            "function" == typeof d && (d = c.top(this.$element));
            "function" == typeof p && (p = c.bottom(this.$element));
            c = this.getState(h, a, d, p);
            if (this.affixed != c) {
                null != this.unpin && this.$element.css("top", "");
                var d = "affix" + (c ? "-" + c : ""),
                    k = b.Event(d + ".bs.affix");
                this.$element.trigger(k);
                if (k.isDefaultPrevented()) return;
                this.affixed = c;
                this.unpin = "bottom" == c ? this.getPinnedOffset() : null;
                this.$element.removeClass(g.RESET).addClass(d).trigger(d.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == c && this.$element.offset({
                top: h - a - p
            })
        }
    };
    var c = b.fn.affix;
    b.fn.affix = d;
    b.fn.affix.Constructor =
        g;
    b.fn.affix.noConflict = function() {
        b.fn.affix = c;
        return this
    };
    b(window).on("load", function() {
        b('[data-spy="affix"]').each(function() {
            var a = b(this),
                c = a.data();
            c.offset = c.offset || {};
            null != c.offsetBottom && (c.offset.bottom = c.offsetBottom);
            null != c.offsetTop && (c.offset.top = c.offsetTop);
            d.call(a, c)
        })
    })
}(jQuery);
fotoramaVersion = "4.6.4";
(function(b, d, g, c, a) {
    function f() {}

    function e(a, b, c) {
        return Math.max(isNaN(b) ? -1 / 0 : b, Math.min(isNaN(c) ? 1 / 0 : c, a))
    }

    function p(a) {
        var b = {};
        return ka ? b.transform = "translate3d(" + a + "px,0,0)" : b.left = a, b
    }

    function h(a) {
        return {
            "transition-duration": a + "ms"
        }
    }

    function k(a, b) {
        var c = +String(a).replace(b || "px", "");
        return isNaN(c) ? void 0 : c
    }

    function q(b, c) {
        var d = (/%$/.test(b) ? k(b, "%") : a) / 100 * c,
            e = k(b);
        return isNaN(d) ? e : d
    }

    function m(a) {
        return (!isNaN(k(a)) || !isNaN(k(a, "%"))) && a
    }

    function t(a) {
        var b = a.data();
        b.tEnd || (Z(a[0], {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            msTransition: "MSTransitionEnd",
            transition: "transitionend"
        }[ib.prefixed("transition")], function(a) {
            b.tProp && a.propertyName.match(b.tProp) && b.onEndFn()
        }), b.tEnd = !0)
    }

    function w(a, b, c, d) {
        var e, f = a.data();
        f && (f.onEndFn = function() {
            e || (e = !0, clearTimeout(f.tT), c())
        }, f.tProp = b, clearTimeout(f.tT), f.tT = setTimeout(function() {
            f.onEndFn()
        }, 1.5 * d), t(a))
    }

    function v(a, b) {
        if (a.length) {
            var c = a.data();
            ka ?
                (a.css(h(0)), c.onEndFn = f, clearTimeout(c.tT)) : a.stop();
            c = u(b, function() {
                var b;
                ka ? (b = a.css("transform"), b = +(b.match(/ma/) && b.match(/-?\d+(?!d)/g)[b.match(/3d/) ? 12 : 4])) : b = +a.css("left").replace("px", "");
                return b
            });
            return a.css(p(c)), c
        }
    }

    function u() {
        for (var a, b = 0, c = arguments.length; c > b && (a = b ? arguments[b]() : arguments[b], "number" != typeof a); b++);
        return a
    }

    function x() {
        return x.p = x.p || ("https:" === g.protocol ? "https://" : "http://"), x.p
    }

    function n(a, b) {
        if ("string" != typeof a) return a;
        var c = a,
            e = d.createElement("a");
        a = (e.href = c, e);
        var f, h;
        if (a.host.match(/youtube\.com/) && a.search) {
            if (f = a.search.split("v=")[1]) c = f.indexOf("&"), -1 !== c && (f = f.substring(0, c)), h = "youtube"
        } else a.host.match(/youtube\.com|youtu\.be/) ? (f = a.pathname.replace(/^\/(embed\/|v\/)?/, "").replace(/\/.*/, ""), h = "youtube") : a.host.match(/vimeo\.com/) && (h = "vimeo", f = a.pathname.replace(/^\/(video\/)?/, "").replace(/\/.*/, ""));
        return f && h || !b || (f = a.href, h = "custom"), f ? {
            id: f,
            type: h,
            s: a.search.replace(/^\?/, ""),
            p: x()
        } : !1
    }

    function D(a, b, d) {
        var e, f, h = a.video;
        return "youtube" === h.type ? (f = x() + "img.youtube.com/vi/" + h.id + "/default.jpg", e = f.replace(/\/default.jpg$/, "/hqdefault.jpg"), a.thumbsReady = !0) : "vimeo" === h.type ? c.ajax({
            url: x() + "vimeo.com/api/v2/video/" + h.id + ".json",
            dataType: "jsonp",
            success: function(c) {
                a.thumbsReady = !0;
                s(b, {
                    img: c[0].thumbnail_large,
                    thumb: c[0].thumbnail_small
                }, a.i, d)
            }
        }) : a.thumbsReady = !0, {
            img: e,
            thumb: f
        }
    }

    function s(a, b, d, e) {
        for (var f = 0, h = a.length; h > f; f++) {
            var g = a[f];
            if (g.i === d && g.thumbsReady) {
                a = {
                    videoReady: !0
                };
                a[Q] = a[Qa] = a[ia] = !1;
                e.splice(f,
                    1, c.extend({}, g, a, b));
                break
            }
        }
    }

    function r(a) {
        function b(a, d, e) {
            var f = e.thumb && e.img !== e.thumb,
                h = k(e.width || a.attr("width"));
            a = k(e.height || a.attr("height"));
            c.extend(e, {
                width: h,
                height: a,
                thumbratio: ga(e.thumbratio || k(e.thumbwidth || d && d.attr("width") || f || h) / k(e.thumbheight || d && d.attr("height") || f || a))
            })
        }
        var d = [];
        return a.children().each(function() {
            var a = c(this),
                e = V(c.extend(a.data(), {
                    id: a.attr("id")
                }));
            if (a.is("a, img")) {
                var f = a.children("img").eq(0),
                    h = a.attr("href"),
                    g = a.attr("src"),
                    k = f.attr("src"),
                    m =
                    e.video,
                    q = n(h, !0 === m);
                q ? h = !1 : q = m;
                b(a, f, c.extend(e, {
                    video: q,
                    img: e.img || h || g || k,
                    thumb: e.thumb || k || g || h
                }))
            } else {
                if (a.is(":empty")) return;
                b(a, null, c.extend(e, {
                    html: this,
                    _html: a.html()
                }))
            }
            d.push(e)
        }), d
    }

    function y(a, b, c, d) {
        return y.i || (y.i = 1, y.ii = [!0]), d = d || y.i, "undefined" == typeof y.ii[d] && (y.ii[d] = !0), a() ? b() : y.ii[d] && setTimeout(function() {
            y.ii[d] && y(a, b, c, d)
        }, c || 100), y.i++
    }

    function E(a) {
        g.replace(g.protocol + "//" + g.host + g.pathname.replace(/^\/?/, "/") + g.search + "#" + a)
    }

    function K(a, b, c, d) {
        var f = a.data(),
            h = f.measures;
        if (h && (!f.l || f.l.W !== h.width || f.l.H !== h.height || f.l.r !== h.ratio || f.l.w !== b.w || f.l.h !== b.h || f.l.m !== c || f.l.p !== d)) {
            var g = h.width,
                k = h.height,
                l = h.ratio >= b.w / b.h,
                n = "scaledown" === c,
                u = "contain" === c,
                t = "cover" === c,
                w, v = d;
            w = (v = (v + "").split(/\s+/), {
                x: m(v[0]) || oa,
                y: m(v[1]) || oa
            });
            l && (n || u) || !l && t ? (g = e(b.w, 0, n ? g : 1 / 0), k = g / h.ratio) : (l && t || !l && (n || u)) && (k = e(b.h, 0, n ? k : 1 / 0), g = k * h.ratio);
            a.css({
                width: g,
                height: k,
                left: q(w.x, b.w - g),
                top: q(w.y, b.h - k)
            });
            f.l = {
                W: h.width,
                H: h.height,
                r: h.ratio,
                w: b.w,
                h: b.h,
                m: c,
                p: d
            }
        }
        return !0
    }

    function z(a, b) {
        var c = a[0];
        c.styleSheet ? c.styleSheet.cssText = b : a.html(b)
    }

    function C(a, b, c) {
        return b === c ? !1 : b >= a ? "left" : a >= c ? "right" : "left right"
    }

    function da(a, b, c, d) {
        if (!c) return !1;
        if (!isNaN(a)) return a - (d ? 0 : 1);
        var e;
        c = 0;
        for (d = b.length; d > c; c++)
            if (b[c].id === a) {
                e = c;
                break
            }
        return e
    }

    function F(a, b, d) {
        d = d || {};
        a.each(function() {
            var a, e = c(this),
                h = e.data();
            h.clickOn || (h.clickOn = !0, c.extend(S(e, {
                onStart: function(b) {
                    a = b;
                    (d.onStart || f).call(this, b)
                },
                onMove: d.onMove || f,
                onTouchEnd: d.onTouchEnd || f,
                onEnd: function(c) {
                    c.moved ||
                        b.call(this, a)
                }
            }), {
                noMove: !0
            }))
        })
    }

    function A(a, b) {
        return '<div class="' + a + '">' + (b || "") + "</div>"
    }

    function G(a) {
        for (var b = a.length; b;) {
            var c = Math.floor(Math.random() * b--),
                d = a[b];
            a[b] = a[c];
            a[c] = d
        }
        return a
    }

    function N(a) {
        return "[object Array]" == Object.prototype.toString.call(a) && c.map(a, function(a) {
            return c.extend({}, a)
        })
    }

    function H(a, b, c) {
        a.scrollLeft(b || 0).scrollTop(c || 0)
    }

    function V(a) {
        if (a) {
            var b = {};
            return c.each(a, function(a, c) {
                b[a.toLowerCase()] = c
            }), b
        }
    }

    function ga(b) {
        if (b) {
            var c = +b;
            return isNaN(c) ?
                (c = b.split("/"), +c[0] / +c[1] || a) : c
        }
    }

    function Z(a, b, c, d) {
        b && (a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent("on" + b, c))
    }

    function ya(a, b) {
        Z(a, "keyup", function(c) {
            a.getAttribute("disabled") || 13 == c.keyCode && b.call(a, c)
        })
    }

    function ua(a, b) {
        Z(a, "focus", a.onfocusin = function(c) {
            b.call(a, c)
        }, !0)
    }

    function ta(a, b) {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1;
        b && a.stopPropagation && a.stopPropagation()
    }

    function P(a, b) {
        var d = a.data(),
            e = Math.round(b.pos),
            g = function() {
                d.sliding = !1;
                (b.onEnd || f)()
            };
        "undefined" != typeof b.overPos && b.overPos !== b.pos && (e = b.overPos, g = function() {
            P(a, c.extend({}, b, {
                overPos: b.pos,
                time: Math.max(pb, b.time / 2)
            }))
        });
        e = c.extend(p(e), b.width && {
            width: b.width
        });
        d.sliding = !0;
        ka ? (a.css(c.extend(h(b.time), e)), 10 < b.time ? w(a, "transform", g, b.time) : g()) : a.stop().animate(e, b.time, ca, g)
    }

    function J(a, b, d, e, h, g) {
        var k = "undefined" != typeof g;
        if (k || (h.push(arguments), Array.prototype.push.call(arguments, h.length), !(1 < h.length))) {
            a = a || c(a);
            b = b || c(b);
            var m = a[0],
                q = b[0],
                l = "crossfade" === e.method,
                n = function() {
                    if (!n.done) {
                        n.done = !0;
                        var a = (k || h.shift()) && h.shift();
                        a && J.apply(this, a);
                        (e.onEnd || f)(!!a)
                    }
                },
                u = e.time / (g || 1);
            d.removeClass(X + " " + Oa);
            a.stop().addClass(X);
            b.stop().addClass(Oa);
            l && q && a.fadeTo(0, 0);
            a.fadeTo(l ? u : 0, 1, l && n);
            b.fadeTo(u, 0, n);
            m && l || q || n()
        }
    }

    function aa(a) {
        var b = (a.touches || [])[0] || a;
        a._x = b.pageX;
        a._y = b.clientY;
        a._now = c.now()
    }

    function S(a, b) {
        function e(a) {
            return n = c(a.target), s.checked = w = v = r = !1, q || s.flow || a.touches && 1 < a.touches.length || 1 < a.which || Za && Za.type !== a.type && tb || (w = b.select &&
                n.is(b.select, x)) ? w : (t = "touchstart" === a.type, v = n.is("a, a *", x), u = s.control, p = s.noMove || s.noSwipe || u ? 16 : s.snap ? 0 : 4, aa(a), l = Za = a, mb = a.type.replace(/down|start/, "move").replace(/Down/, "Move"), (b.onStart || f).call(x, a, {
                control: u,
                $target: n
            }), q = s.flow = !0, void((!t || s.go) && ta(a)))
        }

        function h(a) {
            if (a.touches && 1 < a.touches.length || M && !a.isPrimary || mb !== a.type || !q) return q && g(), void(b.onTouchEnd || f)();
            aa(a);
            var c = Math.abs(a._x - l._x),
                d = Math.abs(a._y - l._y),
                e = c - d,
                k = (s.go || s.x || 0 <= e) && !s.noSwipe,
                e = 0 > e;
            t && !s.checked ?
                (q = k) && ta(a) : (ta(a), (b.onMove || f).call(x, a, {
                    touch: t
                }));
            !r && Math.sqrt(Math.pow(c, 2) + Math.pow(d, 2)) > p && (r = !0);
            s.checked = s.checked || k || e
        }

        function g(a) {
            (b.onTouchEnd || f)();
            var c = q;
            s.control = q = !1;
            c && (s.flow = !1);
            !c || v && !s.checked || (a && ta(a), tb = !0, clearTimeout(Eb), Eb = setTimeout(function() {
                tb = !1
            }, 1E3), (b.onEnd || f).call(x, {
                moved: r,
                $target: n,
                control: u,
                touch: t,
                startEvent: l,
                aborted: !a || "MSPointerCancel" === a.type
            }))
        }

        function k() {
            s.flow || setTimeout(function() {
                s.flow = !0
            }, 10)
        }

        function m() {
            s.flow && setTimeout(function() {
                s.flow = !1
            }, Ka)
        }
        var q, l, n, u, t, w, v, p, r, x = a[0],
            s = {};
        return M ? (Z(x, "MSPointerDown", e), Z(d, "MSPointerMove", h), Z(d, "MSPointerCancel", g), Z(d, "MSPointerUp", g)) : (Z(x, "touchstart", e), Z(x, "touchmove", h), Z(x, "touchend", g), Z(d, "touchstart", k), Z(d, "touchend", m), Z(d, "touchcancel", m), ra.on("scroll", m), a.on("mousedown", e), fa.on("mousemove", h).on("mouseup", g)), a.on("click", "a", function(a) {
            s.checked && ta(a)
        }), s
    }

    function U(a, b) {
        function d(c, e) {
            D = !0;
            h = g = c._x;
            n = c._now;
            l = [
                [n, h]
            ];
            k = m = A.noMove || e ? 0 : v(a, (b.getPos || f)());
            (b.onStart ||
                f).call(z, c)
        }
        var h, g, k, m, q, l, n, u, t, w, r, x, s, y, D, z = a[0],
            E = a.data(),
            A = {};
        return A = c.extend(S(b.$wrap, c.extend({}, b, {
            onStart: function(a, b) {
                t = A.min;
                w = A.max;
                r = A.snap;
                x = a.altKey;
                D = y = !1;
                (s = b.control) || E.sliding || d(a)
            },
            onMove: function(c, e) {
                A.noSwipe || (D || d(c), g = c._x, l.push([c._now, g]), m = k - (h - g), q = C(m, t, w), t >= m ? m = Math.round(m + (t - m) / 1.5) : m >= w && (m = Math.round(m + (w - m) / 1.5)), A.noMove || (a.css(p(m)), y || (y = !0, e.touch || M || a.addClass(R)), (b.onMove || f).call(z, c, {
                    pos: m,
                    edge: q
                })))
            },
            onEnd: function(h) {
                if (!A.noSwipe || !h.moved) {
                    D ||
                        d(h.startEvent, !0);
                    h.touch || M || a.removeClass(R);
                    u = c.now();
                    for (var q, n, v, p, s, y, E, C, K = u - Ka, F = null, G = pb, Ba = b.friction, H = l.length - 1; 0 <= H; H--) {
                        if (q = l[H][0], n = Math.abs(q - K), null === F || v > n) F = q, p = l[H][1];
                        else if (F === K || n > v) break;
                        v = n
                    }
                    q = e(m, t, w);
                    p -= g;
                    n = 0 <= p;
                    F = u - F;
                    v = F > Ka;
                    K = !v && m !== k && q === m;
                    r && (q = e(Math[K ? n ? "floor" : "ceil" : "round"](m / r) * r, t, w), t = w = q);
                    K && (r || q === m) && (C = -(p / F), G *= e(Math.abs(C), b.timeLow, b.timeHigh), s = Math.round(m + C * G / Ba), r || (q = s), (!n && s > w || n && t > s) && (y = n ? t : w, E = s - y, r || (q = y), E = e(q + .03 * E, y - 50, y + 50),
                        G = Math.abs((m - E) / (C / Ba))));
                    G *= x ? 10 : 1;
                    (b.onEnd || f).call(z, c.extend(h, {
                        moved: h.moved || v && r,
                        pos: m,
                        newPos: q,
                        overPos: E,
                        time: G
                    }))
                }
            }
        })), A)
    }

    function Da(a, b) {
        var d, e, h, g = {
            prevent: {}
        };
        return Z(a[0], T, function(a) {
            var k = a.wheelDeltaY || -1 * a.deltaY || 0,
                m = a.wheelDeltaX || -1 * a.deltaX || 0,
                k = Math.abs(m) && !Math.abs(k),
                q = 0 > m ? ">" : "<",
                l = e === q,
                n = c.now(),
                u = Ka > n - h;
            e = q;
            h = n;
            k && g.ok && (!g.prevent[q] || d) && (ta(a, !0), d && l && u || (b.shift && (d = !0, clearTimeout(g.t), g.t = setTimeout(function() {
                d = !1
            }, ha)), (b.onEnd || f)(a, b.shift ? q : m)))
        }), g
    }

    function qb() {
        c.each(c.Fotorama.instances,
            function(a, b) {
                b.index = a
            })
    }
    var Oa = "fotorama__fade-front",
        X = "fotorama__fade-rear",
        R = "fotorama__grabbing",
        l = c && c.fn.jquery.split(".");
    if (!l || 1 > l[0] || 1 == l[0] && 8 > l[1]) throw "Fotorama requires jQuery 1.8 or later and will not run without it.";
    var hb = {},
        ib = function(a, b, c) {
            function d(a, b) {
                for (var e in a) {
                    var f = a[e];
                    if (!~("" + f).indexOf("-") && q[f] !== c) return "pfx" == b ? f : !0
                }
                return !1
            }

            function e(a, b, f) {
                var h = a.charAt(0).toUpperCase() + a.slice(1),
                    g = (a + " " + l.join(h + " ") + h).split(" ");
                if ("string" === typeof b || "undefined" ===
                    typeof b) b = d(g, b);
                else a: {
                    g = (a + " " + n.join(h + " ") + h).split(" "),
                    a = g;
                    for (var k in a)
                        if (h = b[a[k]], h !== c) {
                            b = !1 === f ? a[k] : "function" === typeof h ? h.bind(f || b) : h;
                            break a
                        }
                    b = !1
                }
                return b
            }
            var f, h, g = {},
                k = b.documentElement,
                m = b.createElement("modernizr"),
                q = m.style;
            a = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" "));
            var l = ["Webkit", "Moz", "O", "ms"],
                n = ["webkit", "moz", "o", "ms"],
                m = {},
                u = [],
                t = u.slice,
                w = {}.hasOwnProperty;
            h = "undefined" === typeof w || "undefined" === typeof w.call ? function(a, b) {
                return b in a && "undefined" ===
                    typeof a.constructor.prototype[b]
            } : function(a, b) {
                return w.call(a, b)
            };
            Function.prototype.bind || (Function.prototype.bind = function(a) {
                var b = this;
                if ("function" != typeof b) throw new TypeError;
                var c = t.call(arguments, 1),
                    d = function() {
                        if (this instanceof d) {
                            var e = function() {};
                            e.prototype = b.prototype;
                            var e = new e,
                                f = b.apply(e, c.concat(t.call(arguments)));
                            return Object(f) === f ? f : e
                        }
                        return b.apply(a, c.concat(t.call(arguments)))
                    };
                return d
            });
            m.csstransforms3d = function() {
                return !!e("perspective")
            };
            for (var v in m) h(m, v) &&
                (f = v.toLowerCase(), g[f] = m[v](), u.push((g[f] ? "" : "no-") + f));
            g.addTest = function(a, b) {
                if ("object" == typeof a)
                    for (var d in a) h(a, d) && g.addTest(d, a[d]);
                else {
                    if (a = a.toLowerCase(), g[a] !== c) return g;
                    b = "function" == typeof b ? b() : b;
                    "undefined" != typeof enableClasses && enableClasses && (k.className += " " + (b ? "" : "no-") + a);
                    g[a] = b
                }
                return g
            };
            q.cssText = "";
            return m = null, g._version = "2.6.2", g._prefixes = a, g._domPrefixes = n, g._cssomPrefixes = l, g.testProp = function(a) {
                    return d([a])
                }, g.testAllProps = e, g.testStyles = function(a, c, d, e) {
                    var f,
                        h, g, m, q = b.createElement("div"),
                        l = b.body,
                        n = l || b.createElement("body");
                    if (parseInt(d, 10))
                        for (; d--;) g = b.createElement("div"), g.id = e ? e[d] : "modernizr" + (d + 1), q.appendChild(g);
                    return f = ['&#173;<style id="smodernizr">', a, "</style>"].join(""), q.id = "modernizr", (l ? q : n).innerHTML += f, n.appendChild(q), l || (n.style.background = "", n.style.overflow = "hidden", m = k.style.overflow, k.style.overflow = "hidden", k.appendChild(n)), h = c(q, a), l ? q.parentNode.removeChild(q) : (n.parentNode.removeChild(n), k.style.overflow = m), !!h
                }, g.prefixed =
                function(a, b, c) {
                    return b ? e(a, b, c) : e(a, "pfx")
                }, g
        }(b, d),
        la = {
            ok: !1,
            is: function() {
                return !1
            },
            request: function() {},
            cancel: function() {},
            event: "",
            prefix: ""
        },
        l = ["webkit", "moz", "o", "ms", "khtml"];
    if ("undefined" != typeof d.cancelFullScreen) la.ok = !0;
    else
        for (var La = 0, Ia = l.length; Ia > La; La++)
            if (la.prefix = l[La], "undefined" != typeof d[la.prefix + "CancelFullScreen"]) {
                la.ok = !0;
                break
            }
    la.ok && (la.event = la.prefix + "fullscreenchange", la.is = function() {
        switch (this.prefix) {
            case "":
                return d.fullScreen;
            case "webkit":
                return d.webkitIsFullScreen;
            default:
                return d[this.prefix + "FullScreen"]
        }
    }, la.request = function(a) {
        return "" === this.prefix ? a.requestFullScreen() : a[this.prefix + "RequestFullScreen"]()
    }, la.cancel = function() {
        return "" === this.prefix ? d.cancelFullScreen() : d[this.prefix + "CancelFullScreen"]()
    });
    var Db, wa = {
            lines: 12,
            length: 5,
            width: 2,
            radius: 7,
            corners: 1,
            rotate: 15,
            color: "rgba(128, 128, 128, .75)",
            hwaccel: !0
        },
        Kb = {
            top: "auto",
            left: "auto",
            className: ""
        };
    ! function(a, b) {
        Db = b()
    }(this, function() {
        function b(a, c) {
            var e, f = d.createElement(a || "div");
            for (e in c) f[e] =
                c[e];
            return f
        }

        function c(a) {
            for (var b = 1, d = arguments.length; d > b; b++) a.appendChild(arguments[b]);
            return a
        }

        function e(a, b, c, d) {
            var f = ["opacity", b, ~~(100 * a), c, d].join("-");
            c = .01 + c / d * 100;
            d = Math.max(1 - (1 - a) / b * (100 - c), a);
            var h = n.substring(0, n.indexOf("Animation")).toLowerCase();
            return t[f] || (w.insertRule("@" + (h && "-" + h + "-" || "") + "keyframes " + f + "{0%{opacity:" + d + "}" + c + "%{opacity:" + a + "}" + (c + .01) + "%{opacity:1}" + (c + b) % 100 + "%{opacity:" + a + "}100%{opacity:" + d + "}}", w.cssRules.length), t[f] = 1), f
        }

        function f(b, c) {
            var d,
                e, h = b.style;
            c = c.charAt(0).toUpperCase() + c.slice(1);
            for (e = 0; e < u.length; e++)
                if (d = u[e] + c, h[d] !== a) return d;
            return h[c] !== a ? c : void 0
        }

        function h(a, b) {
            for (var c in b) a.style[f(a, c) || c] = b[c];
            return a
        }

        function g(b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c],
                    e;
                for (e in d) b[e] === a && (b[e] = d[e])
            }
            return b
        }

        function k(a) {
            for (var b = {
                    x: a.offsetLeft,
                    y: a.offsetTop
                }; a = a.offsetParent;) b.x += a.offsetLeft, b.y += a.offsetTop;
            return b
        }

        function m(a, b) {
            return "string" == typeof a ? a : a[b % a.length]
        }

        function q(a) {
            return "undefined" ==
                typeof this ? new q(a) : void(this.opts = g(a || {}, q.defaults, v))
        }

        function l() {
            function a(c, d) {
                return b("<" + c + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', d)
            }
            w.addRule(".spin-vml", "behavior:url(#default#VML)");
            q.prototype.lines = function(b, d) {
                function e() {
                    return h(a("group", {
                        coordsize: q + " " + q,
                        coordorigin: -k + " " + -k
                    }), {
                        width: q,
                        height: q
                    })
                }

                function f(b, g, q) {
                    c(l, c(h(e(), {
                        rotation: 360 / d.lines * b + "deg",
                        left: ~~g
                    }), c(h(a("roundrect", {
                        arcsize: d.corners
                    }), {
                        width: k,
                        height: d.width,
                        left: d.radius,
                        top: -d.width >>
                            1,
                        filter: q
                    }), a("fill", {
                        color: m(d.color, b),
                        opacity: d.opacity
                    }), a("stroke", {
                        opacity: 0
                    }))))
                }
                var g, k = d.length + d.width,
                    q = 2 * k;
                g = 2 * -(d.width + d.length) + "px";
                var l = h(e(), {
                    position: "absolute",
                    top: g,
                    left: g
                });
                if (d.shadow)
                    for (g = 1; g <= d.lines; g++) f(g, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                for (g = 1; g <= d.lines; g++) f(g);
                return c(b, l)
            };
            q.prototype.opacity = function(a, b, c, d) {
                a = a.firstChild;
                d = d.shadow && d.lines || 0;
                a && b + d < a.childNodes.length && (a = a.childNodes[b + d], a = a && a.firstChild,
                    a = a && a.firstChild, a && (a.opacity = c))
            }
        }
        var n, u = ["webkit", "Moz", "ms", "O"],
            t = {},
            w = function() {
                var a = b("style", {
                    type: "text/css"
                });
                return c(d.getElementsByTagName("head")[0], a), a.sheet || a.styleSheet
            }(),
            v = {
                lines: 12,
                length: 7,
                width: 5,
                radius: 10,
                rotate: 0,
                corners: 1,
                color: "#000",
                direction: 1,
                speed: 1,
                trail: 100,
                opacity: .25,
                fps: 20,
                zIndex: 2E9,
                className: "spinner",
                top: "auto",
                left: "auto",
                position: "relative"
            };
        q.defaults = {};
        g(q.prototype, {
            spin: function(a) {
                this.stop();
                var c, d, e = this,
                    f = e.opts,
                    g = e.el = h(b(0, {
                        className: f.className
                    }), {
                        position: f.position,
                        width: 0,
                        zIndex: f.zIndex
                    }),
                    m = f.radius + f.length + f.width;
                if (a && (a.insertBefore(g, a.firstChild || null), d = k(a), c = k(g), h(g, {
                        left: ("auto" == f.left ? d.x - c.x + (a.offsetWidth >> 1) : parseInt(f.left, 10) + m) + "px",
                        top: ("auto" == f.top ? d.y - c.y + (a.offsetHeight >> 1) : parseInt(f.top, 10) + m) + "px"
                    })), g.setAttribute("role", "progressbar"), e.lines(g, e.opts), !n) {
                    var q, l = 0,
                        u = (f.lines - 1) * (1 - f.direction) / 2,
                        t = f.fps,
                        w = t / f.speed,
                        v = (1 - f.opacity) / (w * f.trail / 100),
                        p = w / f.lines;
                    ! function Fb() {
                        l++;
                        for (var a = 0; a < f.lines; a++) q =
                            Math.max(1 - (l + (f.lines - a) * p) % w * v, f.opacity), e.opacity(g, a * f.direction + u, q, f);
                        e.timeout = e.el && setTimeout(Fb, ~~(1E3 / t))
                    }()
                }
                return e
            },
            stop: function() {
                var b = this.el;
                return b && (clearTimeout(this.timeout), b.parentNode && b.parentNode.removeChild(b), this.el = a), this
            },
            lines: function(a, d) {
                function f(a, c) {
                    return h(b(), {
                        position: "absolute",
                        width: d.length + d.width + "px",
                        height: d.width + "px",
                        background: a,
                        boxShadow: c,
                        transformOrigin: "left",
                        transform: "rotate(" + ~~(360 / d.lines * k + d.rotate) + "deg) translate(" + d.radius + "px,0)",
                        borderRadius: (d.corners * d.width >> 1) + "px"
                    })
                }
                for (var g, k = 0, q = (d.lines - 1) * (1 - d.direction) / 2; k < d.lines; k++) g = h(b(), {
                    position: "absolute",
                    top: 1 + ~(d.width / 2) + "px",
                    transform: d.hwaccel ? "translate3d(0,0,0)" : "",
                    opacity: d.opacity,
                    animation: n && e(d.opacity, d.trail, q + k * d.direction, d.lines) + " " + 1 / d.speed + "s linear infinite"
                }), d.shadow && c(g, h(f("#000", "0 0 4px #000"), {
                    top: "2px"
                })), c(a, c(g, f(m(d.color, k), "0 0 1px rgba(0,0,0,.1)")));
                return a
            },
            opacity: function(a, b, c) {
                b < a.childNodes.length && (a.childNodes[b].style.opacity =
                    c)
            }
        });
        var p = h(b("group"), {
            behavior: "url(#default#VML)"
        });
        return !f(p, "transform") && p.adj ? l() : n = f(p, "animation"), q
    });
    var Ma, O, ra = c(b),
        fa = c(d),
        l = "quirks" === g.hash.replace("#", ""),
        ka = (La = ib.csstransforms3d) && !l,
        bb = La || "CSS1Compat" === d.compatMode,
        Ya = la.ok,
        l = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),
        xa = !ka || l,
        M = navigator.msPointerEnabled,
        T = "onwheel" in d.createElement("div") ? "wheel" : d.onmousewheel !== a ? "mousewheel" : "DOMMouseScroll",
        Ka = 250,
        pb = 300,
        ha = 1400,
        Q = "$stageFrame",
        ia = "$navDotFrame",
        Qa = "$navThumbFrame",
        ca = function(a) {
            var b = "bez_" + c.makeArray(arguments).join("_").replace(".", "p");
            if ("function" != typeof c.easing[b]) {
                var d = function(a, b) {
                    var c = [null, null],
                        d = [null, null],
                        e = [null, null],
                        f = function(f, h) {
                            return e[h] = 3 * a[h], d[h] = 3 * (b[h] - a[h]) - e[h], c[h] = 1 - e[h] - d[h], f * (e[h] + f * (d[h] + f * c[h]))
                        };
                    return function(a) {
                        for (var b, h = a, g = 0; 14 > ++g && (b = f(h, 0) - a, !(.001 > Math.abs(b)));) h -= b / (e[0] + h * (2 * d[0] + 3 * c[0] * h));
                        return f(h, 1)
                    }
                };
                c.easing[b] = function(b, c, e, f, h) {
                    return f * d([a[0], a[1]], [a[2], a[3]])(c / h) + e
                }
            }
            return b
        }([.1, 0, .25, 1]),
        oa = "50%",
        lb = {
            width: null,
            minwidth: null,
            maxwidth: "100%",
            height: null,
            minheight: null,
            maxheight: null,
            ratio: null,
            margin: 2,
            glimpse: 0,
            fit: "contain",
            position: oa,
            thumbposition: oa,
            nav: "dots",
            navposition: "bottom",
            navwidth: null,
            thumbwidth: 64,
            thumbheight: 64,
            thumbmargin: 2,
            thumbborderwidth: 2,
            thumbfit: "cover",
            allowfullscreen: !1,
            transition: "slide",
            clicktransition: null,
            transitionduration: pb,
            captions: !0,
            hash: !1,
            startindex: 0,
            loop: !1,
            autoplay: !1,
            stopautoplayontouch: !0,
            keyboard: !1,
            arrows: !0,
            click: !0,
            swipe: !0,
            trackpad: !1,
            enableifsingleframe: !1,
            controlsonstart: !0,
            shuffle: !1,
            direction: "ltr",
            shadows: !0,
            spinner: null
        },
        Nb = {
            left: !0,
            right: !0,
            down: !1,
            up: !1,
            space: !1,
            home: !1,
            end: !1
        };
    y.stop = function(a) {
        y.ii[a] = !1
    };
    var Za, mb, tb, Eb;
    jQuery.Fotorama = function(a, b) {
        function f() {
            c.each(Y, function(a, b) {
                if (!b.i) {
                    b.i = Sc++;
                    var c = n(b.video, !0);
                    if (c) {
                        var d = {};
                        b.video = c;
                        b.img || b.thumb ? b.thumbsReady = !0 : d = D(b, Y, L);
                        s(Y, {
                            img: d.img,
                            thumb: d.thumb
                        }, b.i, L)
                    }
                }
            })
        }

        function l(a) {
            return Fc[a] || L.fullScreen
        }

        function t(a) {
            var c =
                "fotorama" + oc,
                d = "keydown." + c,
                c = "resize." + c + " orientationchange." + c;
            a ? (fa.on(d, function(a) {
                var c, d;
                pa && 27 === a.keyCode ? (c = !0, Ea(pa, !0, !0)) : (L.fullScreen || b.keyboard && !L.index) && (27 === a.keyCode ? (c = !0, L.cancelFullScreen()) : a.shiftKey && 32 === a.keyCode && l("space") || 37 === a.keyCode && l("left") || 38 === a.keyCode && l("up") ? d = "<" : 32 === a.keyCode && l("space") || 39 === a.keyCode && l("right") || 40 === a.keyCode && l("down") ? d = ">" : 36 === a.keyCode && l("home") ? d = "<<" : 35 === a.keyCode && l("end") && (d = ">>"));
                (c || d) && ta(a);
                d && L.show({
                    index: d,
                    slow: a.altKey,
                    user: !0
                })
            }), L.index || fa.off("keydown.fotorama").on("keydown.fotorama", "textarea, input, select", function(a) {
                !O.hasClass("fullscreen") && a.stopPropagation()
            }), ra.on(c, L.resize)) : (fa.off(d), ra.off(c))
        }

        function w(b) {
            b !== w.f && (b ? (a.html("").addClass("fotorama " + Ec).append(qa).before(ic).before(jc), c.Fotorama.instances.push(L)) : (qa.detach(), ic.detach(), jc.detach(), a.html(Lc.urtext).removeClass(Ec), c.Fotorama.instances.splice(L.index, 1)), qb(), t(b), w.f = b)
        }

        function x() {
            var a = 2 > ja && !b.enableifsingleframe ||
                pa;
            Pa.noMove = a || Wa;
            Pa.noSwipe = a || !b.swipe;
            !sb && Ab.toggleClass("fotorama__grab", !b.click && !Pa.noMove && !Pa.noSwipe);
            M && qa.toggleClass("fotorama__wrap--pan-y", !Pa.noSwipe)
        }

        function R(a) {
            !0 === a && (a = "");
            b.autoplay = Math.max(+a || 5E3, 1.5 * Lb)
        }

        function S() {
            function a(b, c) {
                d[b ? "add" : "remove"].push(c)
            }
            L.options = b = V(b);
            Wa = "crossfade" === b.transition || "dissolve" === b.transition;
            Ta = b.loop && (2 < ja || Wa && (!sb || "slide" !== sb));
            Lb = +b.transitionduration || pb;
            Bb = "rtl" === b.direction;
            Fc = c.extend({}, b.keyboard && Nb, b.keyboard);
            var d = {
                add: [],
                remove: []
            };
            1 < ja || b.enableifsingleframe ? (Va = b.nav, Dc = "top" === b.navposition, d.remove.push("fotorama__select"), Cb.toggle(!!b.arrows)) : (Va = !1, Cb.hide());
            tc.detach();
            ob && ob.stop();
            ob = new Db(c.extend(wa, b.spinner, Kb, {
                direction: Bb ? -1 : 1
            }));
            vb();
            hb();
            b.autoplay && R(b.autoplay);
            nc = k(b.thumbwidth) || 64;
            bc = k(b.thumbheight) || 64;
            ec.ok = Wb.ok = b.trackpad && !xa;
            x();
            tb(b, [W]);
            (Sb = "thumbs" === Va) ? (Ia(ja, "navThumb"), Jb = ac, rb = Qa, z(ic, c.Fotorama.jst.style({
                    w: nc,
                    h: bc,
                    b: b.thumbborderwidth,
                    m: b.thumbmargin,
                    s: oc,
                    q: !bb
                })),
                Ha.addClass("fotorama__nav--thumbs").removeClass("fotorama__nav--dots")) : "dots" === Va ? (Ia(ja, "navDot"), Jb = rc, rb = ia, Ha.addClass("fotorama__nav--dots").removeClass("fotorama__nav--thumbs")) : (Va = !1, Ha.removeClass("fotorama__nav--thumbs fotorama__nav--dots"));
            Va && (Dc ? qc.insertBefore(va) : qc.insertAfter(va), Ua.nav = !1, Ua(Jb, Xa, "nav"));
            (hc = b.allowfullscreen) ? (cc.prependTo(va), Tb = Ya && "native" === hc) : (cc.detach(), Tb = !1);
            a(Wa, "fotorama__wrap--fade");
            a(!Wa, "fotorama__wrap--slide");
            a(!b.captions, "fotorama__wrap--no-captions");
            a(Bb, "fotorama__wrap--rtl");
            a("always" !== b.arrows, "fotorama__wrap--toggle-arrows");
            Ub = b.shadows && !xa;
            a(!Ub, "fotorama__wrap--no-shadows");
            qa.addClass(d.add.join(" ")).removeClass(d.remove.join(" "));
            c.extend({}, b)
        }

        function T(a) {
            return 0 > a ? (ja + a % ja) % ja : a >= ja ? a % ja : a
        }

        function X(a) {
            return e(a, 0, ja - 1)
        }

        function aa(a) {
            return Ta ? T(a) : X(a)
        }

        function ca(a, b, d) {
            if ("number" == typeof a) {
                a = Array(a);
                var e = !0
            }
            return c.each(a, function(a, c) {
                if (e && (c = a), "number" == typeof c) {
                    var f = Y[T(c)];
                    if (f) {
                        var h = "$" + b + "Frame",
                            g = f[h];
                        d.call(this, a, c, f, g, h, g && g.data())
                    }
                }
            })
        }

        function ha(a, c, d, e) {
            (!mc || "*" === mc && e === Rb) && (a = m(b.width) || m(a) || 500, c = m(b.height) || m(c) || 333, L.resize({
                width: a,
                ratio: b.ratio || d || a / c
            }, 0, e !== Rb && "*"))
        }

        function oa(a, d, e, f, h, g) {
            ca(a, d, function(a, k, m, q, l, n) {
                function u(a) {
                    var b = T(k);
                    Sa(a, {
                        index: b,
                        src: za,
                        frame: Y[b]
                    })
                }

                function t() {
                    x.remove();
                    c.Fotorama.cache[za] = "error";
                    m.html && "stage" === d || !E || E === za ? (!za || m.html || p ? "stage" === d && (q.trigger("f:load").removeClass("fotorama__loading fotorama__error").addClass("fotorama__loaded"),
                        u("load"), ha()) : (q.trigger("f:error").removeClass("fotorama__loading").addClass("fotorama__error"), u("error")), n.state = "error", !(1 < ja && Y[k] === m) || m.html || m.deleted || m.video || p || (m.deleted = !0, L.splice(k, 1))) : (m[D] = za = E, oa([k], d, e, f, h, !0))
                }

                function w() {
                    c.Fotorama.measures[za] = s.measures = c.Fotorama.measures[za] || {
                        width: r.width,
                        height: r.height,
                        ratio: r.width / r.height
                    };
                    ha(s.measures.width, s.measures.height, s.measures.ratio, k);
                    x.off("load error").addClass("fotorama__img" + (p ? " fotorama__img--full" : "")).prependTo(q);
                    K(x, (c.isFunction(e) ? e() : e) || W, f || m.fit || b.fit, h || m.position || b.position);
                    c.Fotorama.cache[za] = n.state = "loaded";
                    setTimeout(function() {
                        q.trigger("f:load").removeClass("fotorama__loading fotorama__error").addClass("fotorama__loaded " + (p ? "fotorama__loaded--full" : "fotorama__loaded--img"));
                        "stage" === d ? u("load") : ("auto" === m.thumbratio || !m.thumbratio && "auto" === b.thumbratio) && (m.thumbratio = s.measures.ratio, $a())
                    }, 0)
                }

                function v() {
                    var a = 10;
                    y(function() {
                        return !Vb || !a-- && !xa
                    }, function() {
                        w()
                    })
                }
                if (q) {
                    var p = L.fullScreen &&
                        m.full && m.full !== m.img && !n.$full && "stage" === d;
                    if (!n.$img || g || p) {
                        var r = new Image,
                            x = c(r),
                            s = x.data();
                        n[p ? "$full" : "$img"] = x;
                        var D = "stage" === d ? p ? "full" : "img" : "thumb",
                            za = m[D],
                            E = p ? null : m["stage" === d ? "thumb" : "img"];
                        if ("navThumb" === d && (q = n.$wrap), !za) return void t();
                        c.Fotorama.cache[za] ? ! function Rc() {
                            "error" === c.Fotorama.cache[za] ? t() : "loaded" === c.Fotorama.cache[za] ? setTimeout(v, 0) : setTimeout(Rc, 100)
                        }() : (c.Fotorama.cache[za] = "*", x.on("load", v).on("error", t));
                        n.state = "";
                        r.src = za
                    }
                }
            })
        }

        function Oa(a) {
            tc.append(ob.spin().el).appendTo(a)
        }

        function Ba() {
            var a = Fa[Q];
            a && !a.data().state && (Oa(a), a.on("f:load f:error", function() {
                a.off("f:load f:error");
                tc.detach();
                ob && ob.stop()
            }))
        }

        function sa(a) {
            ya(a, Eb);
            ua(a, function() {
                setTimeout(function() {
                    H(Ha)
                }, 0);
                Ra({
                    time: Lb,
                    guessIndex: c(this).data().eq,
                    minMax: ma
                })
            })
        }

        function Ia(a, b) {
            ca(a, b, function(a, d, e, f, h, g) {
                f || (f = e[h] = qa[h].clone(), g = f.data(), g.data = e, a = f[0], "stage" === b ? (e.html && c('<div class="fotorama__html"></div>').append(e._html ? c(e.html).removeAttr("id").html(e._html) : e.html).appendTo(f),
                    e.caption && c(A("fotorama__caption", A("fotorama__caption__wrap", e.caption))).appendTo(f), e.video && f.addClass("fotorama__stage__frame--video").append(Oc.clone()), ua(a, function() {
                        setTimeout(function() {
                            H(va)
                        }, 0);
                        gb({
                            index: g.eq,
                            user: !0
                        })
                    }), pc = pc.add(f)) : "navDot" === b ? (sa(a), rc = rc.add(f)) : "navThumb" === b && (sa(a), g.$wrap = f.children(":first"), ac = ac.add(f), e.video && g.$wrap.append(Oc.clone())))
            })
        }

        function La(a, b, c, d) {
            return a && a.length && K(a, b, c, d)
        }

        function Za(a) {
            ca(a, "stage", function(a, e, f, g, k, m) {
                if (g) {
                    a = T(e);
                    k = f.fit || b.fit;
                    var q = f.position || b.position;
                    m.eq = a;
                    uc[Q][a] = g.css(c.extend({
                        left: Wa ? 0 : (e - (B || 0)) * (W.w + (b.margin || 0))
                    }, Wa && h(0)));
                    !c.contains(d.documentElement, g[0]) && (g.appendTo(Ab), Ea(f.$video));
                    La(m.$img, W, k, q);
                    La(m.$full, W, k, q)
                }
            })
        }

        function Na(a, d) {
            if ("thumbs" === Va && !isNaN(a)) {
                var e = -a,
                    f = -a + W.nw;
                ac.each(function() {
                    var a = c(this).data(),
                        h = a.eq,
                        g = function() {
                            return {
                                h: bc,
                                w: a.w
                            }
                        },
                        k = g(),
                        m = Y[h] || {},
                        q = m.thumbfit || b.thumbfit,
                        m = m.thumbposition || b.thumbposition;
                    k.w = a.w;
                    a.l + a.w < e || a.l > f || La(a.$img, k, q, m) || d &&
                        oa([h], "navThumb", g, q, m)
                })
            }
        }

        function Ua(a, d, e) {
            if (!Ua[e]) {
                var f = "nav" === e && Sb,
                    h = 0;
                d.append(a.filter(function() {
                    for (var a, b = c(this), d = b.data(), e = 0, f = Y.length; f > e; e++)
                        if (d.data === Y[e]) {
                            a = !0;
                            d.eq = e;
                            break
                        }
                    return a || b.remove() && !1
                }).sort(function(a, b) {
                    return c(a).data().eq - c(b).data().eq
                }).each(function() {
                    if (f) {
                        var a = c(this),
                            d = a.data(),
                            e = Math.round(bc * d.data.thumbratio) || nc;
                        d.l = h;
                        d.w = e;
                        a.css({
                            width: e
                        });
                        h += e + b.thumbmargin
                    }
                }));
                Ua[e] = !0
            }
        }

        function ub(a) {
            return !(Ta || ba + a && ba - ja + a || pa)
        }

        function vb() {
            var a = ub(0),
                b = ub(1);
            Mc.toggleClass("fotorama__arr--disabled", a).attr({
                tabindex: -1 * a + "",
                disabled: a
            });
            Nc.toggleClass("fotorama__arr--disabled", b).attr({
                tabindex: -1 * b + "",
                disabled: b
            })
        }

        function hb() {
            ec.ok && (ec.prevent = {
                "<": ub(0),
                ">": ub(1)
            })
        }

        function ib(a) {
            var c, d, e = a.data();
            return Sb ? (c = e.l, d = e.w) : (c = a.position().left, d = a.width()), {
                c: c + d / 2,
                min: -c + 10 * b.thumbmargin,
                max: -c + W.w - d - 10 * b.thumbmargin
            }
        }

        function lb(a) {
            var c = Fa[rb].data();
            P(Tc, {
                time: 1.2 * a,
                pos: c.l,
                width: c.w - 2 * b.thumbborderwidth
            })
        }

        function Ra(a) {
            var b = Y[a.guessIndex][rb];
            if (b) {
                var c = ma.min !== ma.max,
                    d = a.minMax || c && ib(Fa[rb]),
                    b = c && (a.keep && Ra.l ? Ra.l : e((a.coo || W.nw / 2) - ib(b).c, d.min, d.max)),
                    f = c && e(b, ma.min, ma.max);
                P(Xa, {
                    time: 1.1 * a.time,
                    pos: f || 0,
                    onEnd: function() {
                        Na(f, !0)
                    }
                });
                eb(Ha, C(f, ma.min, ma.max));
                Ra.l = b
            }
        }

        function Ob(a) {
            for (a = Mb[a]; a.length;) a.shift().removeClass("fotorama__active")
        }

        function mb(a) {
            var b = uc[a];
            c.each(ab, function(a, c) {
                delete b[T(c)]
            });
            c.each(b, function(a, c) {
                delete b[a];
                c.detach()
            })
        }

        function Fb(a) {
            B = Ga = ba;
            var c = Fa[Q];
            c && (Ob(Q), Mb[Q].push(c.addClass("fotorama__active")),
                a || L.show.onEnd(!0), v(Ab, 0, !0), mb(Q), Za(ab), Pa.min = Ta ? -1 / 0 : -((ja - 1 - (B || 0)) * (W.w + (b.margin || 0))), Pa.max = Ta ? 1 / 0 : -((0 - (B || 0)) * (W.w + (b.margin || 0))), Pa.snap = W.w + b.margin, ma.min = Math.min(0, W.nw - Xa.width()), ma.max = 0, Xa.toggleClass("fotorama__grab", !(ma.noMove = ma.min === ma.max)))
        }

        function tb(a, b) {
            a && c.each(b, function(b, d) {
                d && c.extend(d, {
                    width: a.width || d.width,
                    height: a.height,
                    minwidth: a.minwidth,
                    maxwidth: a.maxwidth,
                    minheight: a.minheight,
                    maxheight: a.maxheight,
                    ratio: ga(a.ratio)
                })
            })
        }

        function Sa(b, c) {
            a.trigger("fotorama:" +
                b, [L, c])
        }

        function Gb() {
            clearTimeout(db.t);
            Vb = 1;
            b.stopautoplayontouch ? L.stopAutoplay() : jb = !0
        }

        function db() {
            Vb && (b.stopautoplayontouch || (Hb(), Ca()), db.t = setTimeout(function() {
                Vb = 0
            }, pb + Ka))
        }

        function Hb() {
            jb = !(!pa && !lc)
        }

        function Ca() {
            if (clearTimeout(Ca.t), y.stop(Ca.w), !b.autoplay || jb) return void(L.autoplay && (L.autoplay = !1, Sa("stopautoplay")));
            L.autoplay || (L.autoplay = !0, Sa("startautoplay"));
            var a = ba,
                c = Fa[Q].data();
            Ca.w = y(function() {
                return c.state || a !== ba
            }, function() {
                Ca.t = setTimeout(function() {
                    if (!jb &&
                        a === ba) {
                        var b = Qb,
                            c = Y[b][Q].data();
                        Ca.w = y(function() {
                            return c.state || b !== Qb
                        }, function() {
                            jb || b !== Qb || L.show(Ta ? Bb ? "<" : ">" : Qb)
                        })
                    }
                }, b.autoplay)
            })
        }

        function Yb() {
            L.fullScreen && (L.fullScreen = !1, Ya && la.cancel(Gc), O.removeClass("fullscreen"), Ma.removeClass("fullscreen"), a.removeClass("fotorama--fullscreen").insertAfter(jc), W = c.extend({}, Ic), Ea(pa, !0, !0), Ib("x", !1), L.resize(), oa(ab, "stage"), H(ra, Kc, Jc), Sa("fullscreenexit"))
        }

        function eb(a, b) {
            Ub && (a.removeClass("fotorama__shadows--left fotorama__shadows--right"),
                b && !pa && a.addClass(b.replace(/^|\s/g, " fotorama__shadows--")))
        }

        function Ea(a, b, c) {
            b && (qa.removeClass("fotorama__wrap--video"), pa = !1, x());
            a && a !== pa && (a.remove(), Sa("unloadvideo"));
            c && (Hb(), Ca())
        }

        function wb(a) {
            if (!Pa.flow) {
                var c = (a = a ? a.pageX : wb.x) && !ub(a - vc > W.w / 3) && b.click;
                wb.p !== c && va.toggleClass("fotorama__pointer", c) && (wb.p = c, wb.x = a)
            }
        }

        function gb(a) {
            clearTimeout(gb.t);
            b.clicktransition && b.clicktransition !== b.transition ? setTimeout(function() {
                var c = b.transition;
                L.setOptions({
                    transition: b.clicktransition
                });
                sb = c;
                gb.t = setTimeout(function() {
                    L.show(a)
                }, 10)
            }, 0) : L.show(a)
        }

        function Ib(a, b) {
            Pa[a] = ma[a] = b
        }

        function Eb(a) {
            var b = c(this).data().eq;
            gb({
                index: b,
                slow: a.altKey,
                user: !0,
                coo: a._x - Ha.offset().left
            })
        }

        function gc(a) {
            ua(a, function() {
                setTimeout(function() {
                    H(va)
                }, 0);
                qa.toggleClass("fotorama__wrap--no-controls", !1)
            })
        }

        function $a() {
            Y = L.data = Y || N(b.data) || r(a);
            ja = L.size = Y.length;
            !Pb.ok && b.shuffle && G(Y);
            f();
            ba = X(ba);
            ja && w(!0);
            if (S(), !$a.i) {
                $a.i = !0;
                var c = b.startindex;
                (c || b.hash && g.hash) && (Rb = da(c || g.hash.replace(/^#/,
                    ""), Y, 0 === L.index || c, c));
                ba = B = Ga = Aa = Rb = aa(Rb) || 0
            }
            ja ? xb() || (pa && Ea(pa, !0), ab = [], mb(Q), $a.ok = !0, L.show({
                index: ba,
                time: 0
            }), L.resize()) : L.destroy()
        }

        function xb() {
            return !xb.f === Bb ? (xb.f = Bb, ba = ja - 1 - ba, L.reverse(), !0) : void 0
        }

        function Pb() {
            Pb.ok || (Pb.ok = !0, Sa("ready"))
        }
        Ma = c("html");
        O = c("body");
        var Y, ja, Jb, ob, pa, Fa, ab, B, Ga, Aa, zc, Ac, Qb, Rb, Ta, Va, Sb, Dc, hc, Tb, Wa, nc, bc, Lb, sb, Ub, Bb, Fc, mc, Jc, Kc, Hc, jb, lc, Ic, Vb, dc, rb, L = this,
            oc = c.now(),
            Ec = "fotorama" + oc,
            Gc = a[0],
            Sc = 1,
            Lc = a.data(),
            ic = c("<style></style>"),
            jc = c(A("fotorama--hidden")),
            qa = c(A("fotorama__wrap")),
            va = c(A("fotorama__stage")).appendTo(qa),
            Ab = (va[0], c(A("fotorama__stage__shaft")).appendTo(va)),
            pc = c(),
            Mc = c(A('fotorama__arr fotorama__arr--prev" tabindex="0" role="button')),
            Nc = c(A('fotorama__arr fotorama__arr--next" tabindex="0" role="button')),
            Cb = Mc.add(Nc).appendTo(va),
            qc = c(A("fotorama__nav-wrap")),
            Ha = c(A("fotorama__nav")).appendTo(qc),
            Xa = c(A("fotorama__nav__shaft")).appendTo(Ha),
            rc = c(),
            ac = c(),
            Tc = (Ab.data(), Xa.data(), c(A("fotorama__thumb-border")).appendTo(Xa)),
            cc = c(A('fotorama__fullscreen-icon" tabindex="0" role="button')),
            sc = cc[0],
            Oc = c(A("fotorama__video-play")),
            Uc = c(A("fotorama__video-close")).appendTo(va)[0],
            tc = c(A("fotorama__spinner")),
            ba = !1,
            W = {},
            Pa = {},
            ec = {},
            ma = {},
            Wb = {},
            Mb = {},
            uc = {},
            vc = 0,
            Vc = [];
        qa[Q] = c(A("fotorama__stage__frame"));
        qa[Qa] = c(A('fotorama__nav__frame fotorama__nav__frame--thumb" tabindex="0" role="button', A("fotorama__thumb")));
        qa[ia] = c(A('fotorama__nav__frame fotorama__nav__frame--dot" tabindex="0" role="button', A("fotorama__dot")));
        Mb[Q] = [];
        Mb[Qa] = [];
        Mb[ia] = [];
        uc[Q] = {};
        qa.addClass(ka ? "fotorama__wrap--css3" :
            "fotorama__wrap--css2").toggleClass("fotorama__wrap--no-controls", !b.controlsonstart);
        Lc.fotorama = this;
        L.startAutoplay = function(a) {
            return L.autoplay ? this : (jb = lc = !1, R(a || b.autoplay), Ca(), this)
        };
        L.stopAutoplay = function() {
            return L.autoplay && (jb = lc = !0, Ca()), this
        };
        L.show = function(a) {
            var c;
            "object" != typeof a ? (c = a, a = {}) : c = a.index;
            c = ">" === c ? Ga + 1 : "<" === c ? Ga - 1 : "<<" === c ? 0 : ">>" === c ? ja - 1 : c;
            c = isNaN(c) ? da(c, Y, !0) : c;
            c = "undefined" == typeof c ? ba || 0 : c;
            L.activeIndex = ba = aa(c);
            zc = 0 < ba || Ta ? ba - 1 : !1;
            Ac = ja - 1 > ba || Ta ? ba + 1 : !1;
            Qb = T(ba + (Bb ? -1 : 1));
            ab = [ba, zc, Ac];
            Ga = Ta ? c : ba;
            var d = Math.abs(Aa - Ga);
            c = u(a.time, function() {
                return Math.min(Lb * (1 + (d - 1) / 12), 2 * Lb)
            });
            var f = a.overPos;
            a.slow && (c *= 10);
            var h = Fa;
            L.activeFrame = Fa = Y[ba];
            var g = h === Fa && !a.user;
            Ea(pa, Fa.i !== Y[T(B)].i);
            Ia(ab, "stage");
            Za(xa ? [Ga] : [Ga, 0 < Ga || Ta ? Ga - 1 : !1, ja - 1 > Ga || Ta ? Ga + 1 : !1]);
            Ib("go", !0);
            g || Sa("show", {
                user: a.user,
                time: c
            });
            jb = !0;
            var k = L.show.onEnd = function(c) {
                if (!k.ok) {
                    if (k.ok = !0, c || Fb(!0), g || Sa("showend", {
                            user: a.user
                        }), !c && sb && sb !== b.transition) return L.setOptions({
                            transition: sb
                        }),
                        void(sb = !1);
                    Ba();
                    oa(ab, "stage");
                    Ib("go", !1);
                    hb();
                    wb();
                    Hb();
                    Ca()
                }
            };
            Wa ? J(Fa[Q], ba !== Aa ? Y[Aa][Q] : null, pc, {
                time: c,
                method: b.transition,
                onEnd: k
            }, Vc) : P(Ab, {
                pos: -((Ga - (B || 0)) * (W.w + (b.margin || 0))),
                overPos: f,
                time: c,
                onEnd: k
            });
            if (vb(), Va) Ob(rb), Mb[rb].push(Fa[rb].addClass("fotorama__active")), f = X(ba + e(Ga - Aa, -1, 1)), Ra({
                time: c,
                coo: f !== ba && a.coo,
                guessIndex: "undefined" != typeof a.coo ? f : ba,
                keep: g
            }), Sb && lb(c);
            return Hc = "undefined" != typeof Aa && Aa !== ba, Aa = ba, b.hash && Hc && !L.eq && E(Fa.id || ba + 1), this
        };
        L.requestFullScreen =
            function() {
                return hc && !L.fullScreen && (Jc = ra.scrollTop(), Kc = ra.scrollLeft(), H(ra), Ib("x", !0), Ic = c.extend({}, W), a.addClass("fotorama--fullscreen").appendTo(O.addClass("fullscreen")), Ma.addClass("fullscreen"), Ea(pa, !0, !0), L.fullScreen = !0, Tb && la.request(Gc), L.resize(), oa(ab, "stage"), Ba(), Sa("fullscreenenter")), this
            };
        L.cancelFullScreen = function() {
            return Tb && la.is() ? la.cancel(d) : Yb(), this
        };
        L.toggleFullScreen = function() {
            return L[(L.fullScreen ? "cancel" : "request") + "FullScreen"]()
        };
        Z(d, la.event, function() {
            !Y ||
                la.is() || pa || Yb()
        });
        L.resize = function(a, c, d) {
            if (!Y) return this;
            c = c || 0;
            tb(L.fullScreen ? {
                width: "100%",
                maxwidth: null,
                minwidth: null,
                height: "100%",
                maxheight: null,
                minheight: null
            } : V(a), [W, d || L.fullScreen || b]);
            a = W.width;
            var f = W.height,
                h = W.ratio,
                g = ra.height() - (Va ? Ha.height() : 0);
            return m(a) && (qa.addClass("fotorama__wrap--only-active").css({
                width: a,
                minWidth: W.minwidth || 0,
                maxWidth: W.maxwidth || 99999
            }), a = W.W = W.w = qa.width(), W.nw = Va && q(b.navwidth, a) || a, b.glimpse && (W.w -= Math.round(2 * (q(b.glimpse, a) || 0))), Ab.css({
                width: W.w,
                marginLeft: (W.W - W.w) / 2
            }), f = q(f, g), f = f || h && a / h, f && (a = Math.round(a), f = W.h = Math.round(e(f, q(W.minheight, g), q(W.maxheight, g))), va.stop().animate({
                width: a,
                height: f
            }, c, function() {
                qa.removeClass("fotorama__wrap--only-active")
            }), Fb(), Va && (Ha.stop().animate({
                width: W.nw
            }, c), Ra({
                guessIndex: ba,
                time: c,
                keep: !0
            }), Sb && Ua.nav && lb(c)), mc = d || !0, Pb())), vc = va.offset().left, this
        };
        L.setOptions = function(a) {
            return c.extend(b, a), $a(), this
        };
        L.shuffle = function() {
            return Y && G(Y) && $a(), this
        };
        L.destroy = function() {
            return L.cancelFullScreen(),
                L.stopAutoplay(), Y = L.data = null, w(), ab = [], mb(Q), $a.ok = !1, this
        };
        L.playVideo = function() {
            var a = Fa,
                b = a.video,
                d = ba;
            return "object" == typeof b && a.videoReady && (Tb && L.fullScreen && L.cancelFullScreen(), y(function() {
                return !la.is() || d !== ba
            }, function() {
                d === ba && (a.$video = a.$video || c(c.Fotorama.jst.video(b)), a.$video.appendTo(a[Q]), qa.addClass("fotorama__wrap--video"), pa = a.$video, x(), Cb.blur(), cc.blur(), Sa("loadvideo"))
            })), this
        };
        L.stopVideo = function() {
            return Ea(pa, !0, !0), this
        };
        va.on("mousemove", wb);
        Pa = U(Ab, {
            onStart: Gb,
            onMove: function(a, b) {
                eb(va, b.edge)
            },
            onTouchEnd: db,
            onEnd: function(a) {
                eb(va);
                var d = (M && !dc || a.touch) && b.arrows && "always" !== b.arrows;
                if (a.moved || d && a.pos !== a.newPos && !a.control) d = -Math.round(a.newPos / (W.w + (b.margin || 0)) - (B || 0)), L.show({
                    index: d,
                    time: Wa ? Lb : a.time,
                    overPos: a.overPos,
                    user: !0
                });
                else if (!a.aborted && !a.control) {
                    a = a.startEvent;
                    var e = a.target;
                    c(e).hasClass("fotorama__video-play") ? L.playVideo() : e === sc ? L.toggleFullScreen() : pa ? e === Uc && Ea(pa, !0, !0) : d ? qa.toggleClass("fotorama__wrap--no-controls", void 0) :
                        b.click && (d = gb, (e = a.shiftKey) || (e = a._x - vc > W.w / 3 ? ">" : "<"), d({
                            index: e,
                            slow: a.altKey,
                            user: !0
                        }))
                }
            },
            timeLow: 1,
            timeHigh: 1,
            friction: 2,
            select: ".fotorama__select, .fotorama__select *",
            $wrap: va
        });
        ma = U(Xa, {
            onStart: Gb,
            onMove: function(a, b) {
                eb(Ha, b.edge)
            },
            onTouchEnd: db,
            onEnd: function(a) {
                function b() {
                    Ra.l = a.newPos;
                    Hb();
                    Ca();
                    Na(a.newPos, !0)
                }
                if (a.moved) a.pos !== a.newPos ? (jb = !0, P(Xa, {
                    time: a.time,
                    pos: a.newPos,
                    overPos: a.overPos,
                    onEnd: b
                }), Na(a.newPos), Ub && eb(Ha, C(a.newPos, ma.min, ma.max))) : b();
                else {
                    var c = a.$target.closest(".fotorama__nav__frame",
                        Xa)[0];
                    c && Eb.call(c, a.startEvent)
                }
            },
            timeLow: .5,
            timeHigh: 2,
            friction: 5,
            $wrap: Ha
        });
        ec = Da(va, {
            shift: !0,
            onEnd: function(a, b) {
                Gb();
                db();
                L.show({
                    index: b,
                    slow: a.altKey
                })
            }
        });
        Wb = Da(Ha, {
            onEnd: function(a, b) {
                Gb();
                db();
                var c = v(Xa) + .25 * b;
                Xa.css(p(e(c, ma.min, ma.max)));
                Ub && eb(Ha, C(c, ma.min, ma.max));
                Wb.prevent = {
                    "<": c >= ma.max,
                    ">": c <= ma.min
                };
                clearTimeout(Wb.t);
                Wb.t = setTimeout(function() {
                    Ra.l = c;
                    Na(c, !0)
                }, Ka);
                Na(c)
            }
        });
        qa.hover(function() {
            setTimeout(function() {
                if (!Vb) {
                    var a = !(dc = !0);
                    qa.toggleClass("fotorama__wrap--no-controls",
                        a)
                }
            }, 0)
        }, function() {
            if (dc) {
                var a = !(dc = !1);
                qa.toggleClass("fotorama__wrap--no-controls", a)
            }
        });
        F(Cb, function(a) {
            ta(a);
            gb({
                index: Cb.index(this) ? ">" : "<",
                slow: a.altKey,
                user: !0
            })
        }, {
            onStart: function() {
                Gb();
                Pa.control = !0
            },
            onTouchEnd: db
        });
        Cb.each(function() {
            ya(this, function(a) {
                gb({
                    index: Cb.index(this) ? ">" : "<",
                    slow: a.altKey,
                    user: !0
                })
            });
            gc(this)
        });
        ya(sc, L.toggleFullScreen);
        gc(sc);
        c.each("load push pop shift unshift reverse sort splice".split(" "), function(a, b) {
            L[b] = function() {
                return Y = Y || [], "load" !== b ? Array.prototype[b].apply(Y,
                    arguments) : arguments[0] && "object" == typeof arguments[0] && arguments[0].length && (Y = N(arguments[0])), $a(), L
            }
        });
        $a()
    };
    c.fn.fotorama = function(a) {
        return this.each(function() {
            var d = this,
                e = c(this),
                f = e.data(),
                h = f.fotorama;
            h ? h.setOptions(a, !0) : y(function() {
                return !(0 === d.offsetWidth && 0 === d.offsetHeight)
            }, function() {
                f.urtext = e.html();
                new c.Fotorama(e, c.extend({}, lb, b.fotoramaDefaults, a, f))
            })
        })
    };
    c.Fotorama.instances = [];
    c.Fotorama.cache = {};
    c.Fotorama.measures = {};
    c = c || {};
    c.Fotorama = c.Fotorama || {};
    c.Fotorama.jst =
        c.Fotorama.jst || {};
    c.Fotorama.jst.style = function(a) {
        var b;
        hb.escape;
        return "" + (".fotorama" + (null == (b = a.s) ? "" : b) + " .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:" + (null == (b = a.m) ? "" : b) + "px;\nheight:" + (null == (b = a.h) ? "" : b) + "px}\n.fotorama" + (null == (b = a.s) ? "" : b) + " .fotorama__thumb-border{\nheight:" + (null == (b = a.h - a.b * (a.q ? 0 : 2)) ? "" : b) + "px;\nborder-width:" + (null == (b = a.b) ? "" : b) + "px;\nmargin-top:" + (null == (b = a.m) ? "" : b) + "px}")
    };
    c.Fotorama.jst.video = function(a) {
        var b = "",
            c = (hb.escape, Array.prototype.join);
        return b += '<div class="fotorama__video"><iframe src="',
            function() {
                b += c.call(arguments, "")
            }(("youtube" == a.type ? a.p + "youtube.com/embed/" + a.id + "?autoplay=1" : "vimeo" == a.type ? a.p + "player.vimeo.com/video/" + a.id + "?autoplay=1&badge=0" : a.id) + (a.s && "custom" != a.type ? "&" + a.s : "")), b += '" frameborder="0" allowfullscreen></iframe></div>\n'
    };
    c(function() {
        c('.fotorama:not([data-auto="false"])').fotorama()
    })
})(window, document, location, "undefined" != typeof jQuery && jQuery);
(function(b, d) {
    "function" === typeof define && define.amd ? define("bloodhound", ["jquery"], function(g) {
        return b.Bloodhound = d(g)
    }) : "object" === typeof exports ? module.exports = d(require("jquery")) : b.Bloodhound = d(jQuery)
})(this, function(b) {
    var d = function() {
            return {
                isMsie: function() {
                    return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1
                },
                isBlankString: function(a) {
                    return !a || /^\s*$/.test(a)
                },
                escapeRegExChars: function(a) {
                    return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
                        "\\$&")
                },
                isString: function(a) {
                    return "string" === typeof a
                },
                isNumber: function(a) {
                    return "number" === typeof a
                },
                isArray: b.isArray,
                isFunction: b.isFunction,
                isObject: b.isPlainObject,
                isUndefined: function(a) {
                    return "undefined" === typeof a
                },
                isElement: function(a) {
                    return !(!a || 1 !== a.nodeType)
                },
                isJQuery: function(a) {
                    return a instanceof b
                },
                toStr: function(a) {
                    return d.isUndefined(a) || null === a ? "" : a + ""
                },
                bind: b.proxy,
                each: function(a, c) {
                    b.each(a, function(a, b) {
                        return c(b, a)
                    })
                },
                map: b.map,
                filter: b.grep,
                every: function(a, c) {
                    var d = !0;
                    if (!a) return d;
                    b.each(a, function(b, e) {
                        if (!(d = c.call(null, e, b, a))) return !1
                    });
                    return !!d
                },
                some: function(a, c) {
                    var d = !1;
                    if (!a) return d;
                    b.each(a, function(b, e) {
                        if (d = c.call(null, e, b, a)) return !1
                    });
                    return !!d
                },
                mixin: b.extend,
                identity: function(a) {
                    return a
                },
                clone: function(a) {
                    return b.extend(!0, {}, a)
                },
                getIdGenerator: function() {
                    var a = 0;
                    return function() {
                        return a++
                    }
                },
                templatify: function(a) {
                    function c() {
                        return String(a)
                    }
                    return b.isFunction(a) ? a : c
                },
                defer: function(a) {
                    setTimeout(a, 0)
                },
                debounce: function(a, b, c) {
                    var d,
                        e;
                    return function() {
                        var f = this,
                            h = arguments,
                            g;
                        g = c && !d;
                        clearTimeout(d);
                        d = setTimeout(function() {
                            d = null;
                            c || (e = a.apply(f, h))
                        }, b);
                        g && (e = a.apply(f, h));
                        return e
                    }
                },
                throttle: function(a, b) {
                    var c, d, e, f, h, g;
                    h = 0;
                    g = function() {
                        h = new Date;
                        e = null;
                        f = a.apply(c, d)
                    };
                    return function() {
                        var k = new Date,
                            p = b - (k - h);
                        c = this;
                        d = arguments;
                        0 >= p ? (clearTimeout(e), e = null, h = k, f = a.apply(c, d)) : e || (e = setTimeout(g, p));
                        return f
                    }
                },
                stringify: function(a) {
                    return d.isString(a) ? a : JSON.stringify(a)
                },
                noop: function() {}
            }
        }(),
        g = function() {
            function a(b) {
                return (b =
                    d.toStr(b)) ? b.split(/\s+/) : []
            }

            function b(a) {
                return (a = d.toStr(a)) ? a.split(/\W+/) : []
            }

            function c(a) {
                return function(b) {
                    b = d.isArray(b) ? b : [].slice.call(arguments, 0);
                    return function(c) {
                        var e = [];
                        d.each(b, function(b) {
                            e = e.concat(a(d.toStr(c[b])))
                        });
                        return e
                    }
                }
            }
            return {
                nonword: b,
                whitespace: a,
                obj: {
                    nonword: c(b),
                    whitespace: c(a)
                }
            }
        }(),
        c = function() {
            function a(c) {
                this.maxSize = d.isNumber(c) ? c : 100;
                this.reset();
                0 >= this.maxSize && (this.set = this.get = b.noop)
            }

            function c() {
                this.head = this.tail = null
            }

            function e(a, b) {
                this.key = a;
                this.val = b;
                this.prev = this.next = null
            }
            d.mixin(a.prototype, {
                set: function(a, b) {
                    var c = this.list.tail;
                    this.size >= this.maxSize && (this.list.remove(c), delete this.hash[c.key], this.size--);
                    (c = this.hash[a]) ? (c.val = b, this.list.moveToFront(c)) : (c = new e(a, b), this.list.add(c), this.hash[a] = c, this.size++)
                },
                get: function(a) {
                    if (a = this.hash[a]) return this.list.moveToFront(a), a.val
                },
                reset: function() {
                    this.size = 0;
                    this.hash = {};
                    this.list = new c
                }
            });
            d.mixin(c.prototype, {
                add: function(a) {
                    this.head && (a.next = this.head, this.head.prev =
                        a);
                    this.head = a;
                    this.tail = this.tail || a
                },
                remove: function(a) {
                    a.prev ? a.prev.next = a.next : this.head = a.next;
                    a.next ? a.next.prev = a.prev : this.tail = a.prev
                },
                moveToFront: function(a) {
                    this.remove(a);
                    this.add(a)
                }
            });
            return a
        }(),
        a = function() {
            function a(b, c) {
                this.prefix = ["__", b, "__"].join("");
                this.ttlKey = "__ttl__";
                this.keyMatcher = new RegExp("^" + d.escapeRegExChars(this.prefix));
                this.ls = c || e;
                !this.ls && this._noop()
            }

            function c(a) {
                return JSON.stringify(d.isUndefined(a) ? null : a)
            }
            var e;
            try {
                e = window.localStorage, e.setItem("~~~",
                    "!"), e.removeItem("~~~")
            } catch (f) {
                e = null
            }
            d.mixin(a.prototype, {
                _prefix: function(a) {
                    return this.prefix + a
                },
                _ttlKey: function(a) {
                    return this._prefix(a) + this.ttlKey
                },
                _noop: function() {
                    this.get = this.set = this.remove = this.clear = this.isExpired = d.noop
                },
                _safeSet: function(a, b) {
                    try {
                        this.ls.setItem(a, b)
                    } catch (c) {
                        "QuotaExceededError" === c.name && (this.clear(), this._noop())
                    }
                },
                get: function(a) {
                    this.isExpired(a) && this.remove(a);
                    a = this.ls.getItem(this._prefix(a));
                    return b.parseJSON(a)
                },
                set: function(a, b, e) {
                    d.isNumber(e) ?
                        this._safeSet(this._ttlKey(a), c((new Date).getTime() + e)) : this.ls.removeItem(this._ttlKey(a));
                    return this._safeSet(this._prefix(a), c(b))
                },
                remove: function(a) {
                    this.ls.removeItem(this._ttlKey(a));
                    this.ls.removeItem(this._prefix(a));
                    return this
                },
                clear: function() {
                    var a;
                    a = this.keyMatcher;
                    var b, c, d = [],
                        f = e.length;
                    for (b = 0; b < f; b++)(c = e.key(b)).match(a) && d.push(c.replace(a, ""));
                    for (a = d.length; a--;) this.remove(d[a]);
                    return this
                },
                isExpired: function(a) {
                    a = this.ls.getItem(this._ttlKey(a));
                    a = b.parseJSON(a);
                    return d.isNumber(a) &&
                        (new Date).getTime() > a ? !0 : !1
                }
            });
            return a
        }(),
        f = function() {
            function a(b) {
                b = b || {};
                this.cancelled = !1;
                this.lastReq = null;
                this._send = b.transport;
                this._get = b.limiter ? b.limiter(this._get) : this._get;
                this._cache = !1 === b.cache ? new c(0) : g
            }
            var e = 0,
                f = {},
                h = 6,
                g = new c(10);
            a.setMaxPendingRequests = function(a) {
                h = a
            };
            a.resetCache = function() {
                g.reset()
            };
            d.mixin(a.prototype, {
                _fingerprint: function(a) {
                    a = a || {};
                    return a.url + a.type + b.param(a.data || {})
                },
                _get: function(a, b) {
                    function c(a) {
                        b(null, a);
                        k._cache.set(q, a)
                    }

                    function d() {
                        b(!0)
                    }

                    function g() {
                        e--;
                        delete f[q];
                        k.onDeckRequestArgs && (k._get.apply(k, k.onDeckRequestArgs), k.onDeckRequestArgs = null)
                    }
                    var k = this,
                        q, p;
                    q = this._fingerprint(a);
                    this.cancelled || q !== this.lastReq || ((p = f[q]) ? p.done(c).fail(d) : e < h ? (e++, f[q] = this._send(a).done(c).fail(d).always(g)) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
                },
                get: function(a, c) {
                    var e, f;
                    c = c || b.noop;
                    a = d.isString(a) ? {
                        url: a
                    } : a || {};
                    f = this._fingerprint(a);
                    this.cancelled = !1;
                    this.lastReq = f;
                    (e = this._cache.get(f)) ? c(null, e): this._get(a, c)
                },
                cancel: function() {
                    this.cancelled = !0
                }
            });
            return a
        }(),
        e = window.SearchIndex = function() {
            function a(c) {
                c = c || {};
                c.datumTokenizer && c.queryTokenizer || b.error("datumTokenizer and queryTokenizer are both required");
                this.identify = c.identify || d.stringify;
                this.datumTokenizer = c.datumTokenizer;
                this.queryTokenizer = c.queryTokenizer;
                this.reset()
            }

            function c(a) {
                a = d.filter(a, function(a) {
                    return !!a
                });
                return a = d.map(a, function(a) {
                    return a.toLowerCase()
                })
            }

            function e(a) {
                for (var b = {}, c = [], d = 0, f = a.length; d < f; d++) b[a[d]] || (b[a[d]] = !0, c.push(a[d]));
                return c
            }
            d.mixin(a.prototype, {
                bootstrap: function(a) {
                    this.datums = a.datums;
                    this.trie = a.trie
                },
                add: function(a) {
                    var b = this;
                    a = d.isArray(a) ? a : [a];
                    d.each(a, function(a) {
                        var e;
                        b.datums[e = b.identify(a)] = a;
                        a = c(b.datumTokenizer(a));
                        d.each(a, function(a) {
                            var c, d;
                            c = b.trie;
                            for (a = a.split(""); d = a.shift();) c = c.c[d] || (c.c[d] = {
                                i: [],
                                c: {}
                            }), c.i.push(e)
                        })
                    })
                },
                get: function(a) {
                    var b = this;
                    return d.map(a, function(a) {
                        return b.datums[a]
                    })
                },
                search: function(a) {
                    var b = this,
                        f;
                    a = c(this.queryTokenizer(a));
                    d.each(a, function(a) {
                        var c, d;
                        if (f && 0 === f.length) return !1;
                        c =
                            b.trie;
                        for (a = a.split(""); c && (d = a.shift());) c = c.c[d];
                        if (c && 0 === a.length) {
                            d = c.i.slice(0);
                            if (f) {
                                c = f;
                                var e = a = 0,
                                    h = [];
                                c = c.sort();
                                d = d.sort();
                                for (var g = c.length, k = d.length; a < g && e < k;) c[a] < d[e] ? a++ : (c[a] > d[e] || (h.push(c[a]), a++), e++);
                                c = h
                            } else c = d;
                            f = c
                        } else return f = [], !1
                    });
                    return f ? d.map(e(f), function(a) {
                        return b.datums[a]
                    }) : []
                },
                all: function() {
                    var a = [],
                        b;
                    for (b in this.datums) a.push(this.datums[b]);
                    return a
                },
                reset: function() {
                    this.datums = {};
                    this.trie = {
                        i: [],
                        c: {}
                    }
                },
                serialize: function() {
                    return {
                        datums: this.datums,
                        trie: this.trie
                    }
                }
            });
            return a
        }(),
        p = function() {
            function b(c) {
                this.url = c.url;
                this.ttl = c.ttl;
                this.cache = c.cache;
                this.prepare = c.prepare;
                this.transform = c.transform;
                this.transport = c.transport;
                this.thumbprint = c.thumbprint;
                this.storage = new a(c.cacheKey)
            }
            d.mixin(b.prototype, {
                _settings: function() {
                    return {
                        url: this.url,
                        type: "GET",
                        dataType: "json"
                    }
                },
                store: function(a) {
                    this.cache && (this.storage.set("data", a, this.ttl), this.storage.set("protocol", location.protocol, this.ttl), this.storage.set("thumbprint", this.thumbprint,
                        this.ttl))
                },
                fromCache: function() {
                    var a, b;
                    if (!this.cache) return null;
                    a = this.storage.get("data");
                    b = this.storage.get("protocol");
                    b = this.storage.get("thumbprint") !== this.thumbprint || b !== location.protocol;
                    return a && !b ? a : null
                },
                fromNetwork: function(a) {
                    function b() {
                        a(!0)
                    }

                    function c(b) {
                        a(null, d.transform(b))
                    }
                    var d = this,
                        e;
                    a && (e = this.prepare(this._settings()), this.transport(e).fail(b).done(c))
                },
                clear: function() {
                    this.storage.clear();
                    return this
                }
            });
            return b
        }(),
        h = function() {
            function a(b) {
                this.url = b.url;
                this.prepare =
                    b.prepare;
                this.transform = b.transform;
                this.transport = new f({
                    cache: b.cache,
                    limiter: b.limiter,
                    transport: b.transport
                })
            }
            d.mixin(a.prototype, {
                _settings: function() {
                    return {
                        url: this.url,
                        type: "GET",
                        dataType: "json"
                    }
                },
                get: function(a, b) {
                    function c(a, e) {
                        a ? b([]) : b(d.transform(e))
                    }
                    var d = this,
                        e;
                    if (b) return e = this.prepare(a || "", this._settings()), this.transport.get(e, c)
                },
                cancelLastRequest: function() {
                    this.transport.cancel()
                }
            });
            return a
        }(),
        k = function() {
            function a(c) {
                var e;
                if (!c) return null;
                e = {
                    url: null,
                    ttl: 864E5,
                    cache: !0,
                    cacheKey: null,
                    thumbprint: "",
                    prepare: d.identity,
                    transform: d.identity,
                    transport: null
                };
                c = d.isString(c) ? {
                    url: c
                } : c;
                c = d.mixin(e, c);
                !c.url && b.error("prefetch requires url to be set");
                c.transform = c.filter || c.transform;
                c.cacheKey = c.cacheKey || c.url;
                c.thumbprint = "0.11.1" + c.thumbprint;
                c.transport = c.transport ? h(c.transport) : b.ajax;
                return c
            }

            function c(a) {
                var g;
                if (a) return g = {
                        url: null,
                        cache: !0,
                        prepare: null,
                        replace: null,
                        wildcard: null,
                        limiter: null,
                        rateLimitBy: "debounce",
                        rateLimitWait: 300,
                        transform: d.identity,
                        transport: null
                    },
                    a = d.isString(a) ? {
                        url: a
                    } : a, a = d.mixin(g, a), !a.url && b.error("remote requires url to be set"), a.transform = a.filter || a.transform, a.prepare = e(a), a.limiter = f(a), a.transport = a.transport ? h(a.transport) : b.ajax, delete a.replace, delete a.wildcard, delete a.rateLimitBy, delete a.rateLimitWait, a
            }

            function e(a) {
                function b(a, c) {
                    c.url = h(c.url, a);
                    return c
                }

                function c(a, b) {
                    b.url = b.url.replace(g, encodeURIComponent(a));
                    return b
                }

                function d(a, b) {
                    return b
                }
                var f, h, g;
                f = a.prepare;
                h = a.replace;
                g = a.wildcard;
                return f ? f : f = h ? b : a.wildcard ?
                    c : d
            }

            function f(a) {
                function b(a) {
                    return function(b) {
                        return d.debounce(b, a)
                    }
                }

                function c(a) {
                    return function(b) {
                        return d.throttle(b, a)
                    }
                }
                var e, h;
                e = a.limiter;
                h = a.rateLimitBy;
                a = a.rateLimitWait;
                e || (e = /^throttle$/i.test(h) ? c(a) : b(a));
                return e
            }

            function h(a) {
                return function(c) {
                    var e = b.Deferred();
                    a(c, function(a) {
                        d.defer(function() {
                            e.resolve(a)
                        })
                    }, function(a) {
                        d.defer(function() {
                            e.reject(a)
                        })
                    });
                    return e
                }
            }
            return function(e) {
                var f;
                e = d.mixin({
                    initialize: !0,
                    identify: d.stringify,
                    datumTokenizer: null,
                    queryTokenizer: null,
                    sufficient: 5,
                    sorter: null,
                    local: [],
                    prefetch: null,
                    remote: null
                }, e || {});
                !e.datumTokenizer && b.error("datumTokenizer is required");
                !e.queryTokenizer && b.error("queryTokenizer is required");
                f = e.sorter;
                e.sorter = f ? function(a) {
                    return a.sort(f)
                } : d.identity;
                e.local = d.isFunction(e.local) ? e.local() : e.local;
                e.prefetch = a(e.prefetch);
                e.remote = c(e.remote);
                return e
            }
        }();
    return function() {
        function a(b) {
            b = k(b);
            this.sorter = b.sorter;
            this.identify = b.identify;
            this.sufficient = b.sufficient;
            this.local = b.local;
            this.remote = b.remote ?
                new h(b.remote) : null;
            this.prefetch = b.prefetch ? new p(b.prefetch) : null;
            this.index = new e({
                identify: this.identify,
                datumTokenizer: b.datumTokenizer,
                queryTokenizer: b.queryTokenizer
            });
            !1 !== b.initialize && this.initialize()
        }
        var c;
        c = window && window.Bloodhound;
        a.noConflict = function() {
            window && (window.Bloodhound = c);
            return a
        };
        a.tokenizers = g;
        d.mixin(a.prototype, {
            __ttAdapter: function() {
                function a(b, d, e) {
                    return c.search(b, d, e)
                }

                function b(a, d) {
                    return c.search(a, d)
                }
                var c = this;
                return this.remote ? a : b
            },
            _loadPrefetch: function() {
                function a(b,
                    e) {
                    if (b) return d.reject();
                    c.add(e);
                    c.prefetch.store(c.index.serialize());
                    d.resolve()
                }
                var c = this,
                    d, e;
                d = b.Deferred();
                this.prefetch ? (e = this.prefetch.fromCache()) ? (this.index.bootstrap(e), d.resolve()) : this.prefetch.fromNetwork(a) : d.resolve();
                return d.promise()
            },
            _initialize: function() {
                var a = this;
                this.clear();
                (this.initPromise = this._loadPrefetch()).done(function() {
                    a.add(a.local)
                });
                return this.initPromise
            },
            initialize: function(a) {
                return !this.initPromise || a ? this._initialize() : this.initPromise
            },
            add: function(a) {
                this.index.add(a);
                return this
            },
            get: function(a) {
                a = d.isArray(a) ? a : [].slice.call(arguments);
                return this.index.get(a)
            },
            search: function(a, b, c) {
                function e(a) {
                    var b = [];
                    d.each(a, function(a) {
                        !d.some(h, function(b) {
                            return f.identify(a) === f.identify(b)
                        }) && b.push(a)
                    });
                    c && c(b)
                }
                var f = this,
                    h;
                h = this.sorter(this.index.search(a));
                b(this.remote ? h.slice() : h);
                this.remote && h.length < this.sufficient ? this.remote.get(a, e) : this.remote && this.remote.cancelLastRequest();
                return this
            },
            all: function() {
                return this.index.all()
            },
            clear: function() {
                this.index.reset();
                return this
            },
            clearPrefetchCache: function() {
                this.prefetch && this.prefetch.clear();
                return this
            },
            clearRemoteCache: function() {
                f.resetCache();
                return this
            },
            ttAdapter: function() {
                return this.__ttAdapter()
            }
        });
        return a
    }()
});
(function(b, d) {
    "function" === typeof define && define.amd ? define("typeahead.js", ["jquery"], function(b) {
        return d(b)
    }) : "object" === typeof exports ? module.exports = d(require("jquery")) : d(jQuery)
})(this, function(b) {
    var d = function() {
            return {
                isMsie: function() {
                    return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1
                },
                isBlankString: function(a) {
                    return !a || /^\s*$/.test(a)
                },
                escapeRegExChars: function(a) {
                    return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                },
                isString: function(a) {
                    return "string" === typeof a
                },
                isNumber: function(a) {
                    return "number" === typeof a
                },
                isArray: b.isArray,
                isFunction: b.isFunction,
                isObject: b.isPlainObject,
                isUndefined: function(a) {
                    return "undefined" === typeof a
                },
                isElement: function(a) {
                    return !(!a || 1 !== a.nodeType)
                },
                isJQuery: function(a) {
                    return a instanceof b
                },
                toStr: function(a) {
                    return d.isUndefined(a) || null === a ? "" : a + ""
                },
                bind: b.proxy,
                each: function(a, c) {
                    b.each(a, function(a, b) {
                        return c(b, a)
                    })
                },
                map: b.map,
                filter: b.grep,
                every: function(a, c) {
                    var d = !0;
                    if (!a) return d;
                    b.each(a, function(b, e) {
                        if (!(d = c.call(null, e, b, a))) return !1
                    });
                    return !!d
                },
                some: function(a, c) {
                    var d = !1;
                    if (!a) return d;
                    b.each(a, function(b, e) {
                        if (d = c.call(null, e, b, a)) return !1
                    });
                    return !!d
                },
                mixin: b.extend,
                identity: function(a) {
                    return a
                },
                clone: function(a) {
                    return b.extend(!0, {}, a)
                },
                getIdGenerator: function() {
                    var a = 0;
                    return function() {
                        return a++
                    }
                },
                templatify: function(a) {
                    function c() {
                        return String(a)
                    }
                    return b.isFunction(a) ? a : c
                },
                defer: function(a) {
                    setTimeout(a, 0)
                },
                debounce: function(a, b, c) {
                    var d, e;
                    return function() {
                        var f =
                            this,
                            h = arguments,
                            g;
                        g = c && !d;
                        clearTimeout(d);
                        d = setTimeout(function() {
                            d = null;
                            c || (e = a.apply(f, h))
                        }, b);
                        g && (e = a.apply(f, h));
                        return e
                    }
                },
                throttle: function(a, b) {
                    var c, d, e, f, h, g;
                    h = 0;
                    g = function() {
                        h = new Date;
                        e = null;
                        f = a.apply(c, d)
                    };
                    return function() {
                        var k = new Date,
                            q = b - (k - h);
                        c = this;
                        d = arguments;
                        0 >= q ? (clearTimeout(e), e = null, h = k, f = a.apply(c, d)) : e || (e = setTimeout(g, q));
                        return f
                    }
                },
                stringify: function(a) {
                    return d.isString(a) ? a : JSON.stringify(a)
                },
                noop: function() {}
            }
        }(),
        g = function() {
            function a(b) {
                var c = {};
                d.each(b, function(a,
                    b) {
                    c[b] = "." + a
                });
                return c
            }

            function b() {
                var a = {
                    wrapper: {
                        position: "relative",
                        display: "inline-block"
                    },
                    hint: {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        borderColor: "transparent",
                        boxShadow: "none",
                        opacity: "1"
                    },
                    input: {
                        position: "relative",
                        verticalAlign: "top",
                        backgroundColor: "transparent"
                    },
                    inputWithNoHint: {
                        position: "relative",
                        verticalAlign: "top"
                    },
                    menu: {
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        zIndex: "100",
                        display: "none"
                    },
                    ltr: {
                        left: "0",
                        right: "auto"
                    },
                    rtl: {
                        left: "auto",
                        right: " 0"
                    }
                };
                d.isMsie() && d.mixin(a.input, {
                    backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
                });
                return a
            }
            var c = {
                wrapper: "twitter-typeahead",
                input: "tt-input",
                hint: "tt-hint",
                menu: "tt-menu",
                dataset: "tt-dataset",
                suggestion: "tt-suggestion",
                selectable: "tt-selectable",
                empty: "tt-empty",
                open: "tt-open",
                cursor: "tt-cursor",
                highlight: "tt-highlight"
            };
            return function(e) {
                var f;
                e = d.mixin({}, c, e);
                f = {
                    css: b(),
                    classes: e,
                    html: {
                        wrapper: '<span class="' + e.wrapper + '"></span>',
                        menu: '<div class="' + e.menu + '"></div>'
                    },
                    selectors: a(e)
                };
                return {
                    css: f.css,
                    html: f.html,
                    classes: f.classes,
                    selectors: f.selectors,
                    mixin: function(a) {
                        d.mixin(a,
                            f)
                    }
                }
            }
        }(),
        c = function() {
            function a(c) {
                c && c.el || b.error("EventBus initialized without el");
                this.$el = b(c.el)
            }
            var c;
            c = {
                render: "rendered",
                cursorchange: "cursorchanged",
                select: "selected",
                autocomplete: "autocompleted"
            };
            d.mixin(a.prototype, {
                _trigger: function(a, c) {
                    var d;
                    d = b.Event("typeahead:" + a);
                    (c = c || []).unshift(d);
                    this.$el.trigger.apply(this.$el, c);
                    return d
                },
                before: function(a) {
                    var b;
                    b = [].slice.call(arguments, 1);
                    return this._trigger("before" + a, b).isDefaultPrevented()
                },
                trigger: function(a) {
                    var b;
                    this._trigger(a, [].slice.call(arguments, 1));
                    (b = c[a]) && this._trigger(b, [].slice.call(arguments, 1))
                }
            });
            return a
        }(),
        a = function() {
            function a(b, e, f, h) {
                if (!f) return this;
                e = e.split(d);
                f = h ? c(f, h) : f;
                for (this._callbacks = this._callbacks || {}; h = e.shift();) this._callbacks[h] = this._callbacks[h] || {
                    sync: [],
                    async: []
                }, this._callbacks[h][b].push(f);
                return this
            }

            function b(a, c, d) {
                return function() {
                    for (var b, e = 0, f = a.length; !b && e < f; e += 1) b = !1 === a[e].apply(c, d);
                    return !b
                }
            }

            function c(a, b) {
                return a.bind ? a.bind(b) : function() {
                    a.apply(b, [].slice.call(arguments,
                        0))
                }
            }
            var d = /\s+/,
                e = function() {
                    return window.setImmediate ? function(a) {
                        setImmediate(function() {
                            a()
                        })
                    } : function(a) {
                        setTimeout(function() {
                            a()
                        }, 0)
                    }
                }();
            return {
                onSync: function(b, c, d) {
                    return a.call(this, "sync", b, c, d)
                },
                onAsync: function(b, c, d) {
                    return a.call(this, "async", b, c, d)
                },
                off: function(a) {
                    var b;
                    if (!this._callbacks) return this;
                    for (a = a.split(d); b = a.shift();) delete this._callbacks[b];
                    return this
                },
                trigger: function(a) {
                    var c, f, h, g, k;
                    if (!this._callbacks) return this;
                    a = a.split(d);
                    for (h = [].slice.call(arguments,
                            1);
                        (c = a.shift()) && (f = this._callbacks[c]);) g = b(f.sync, this, [c].concat(h)), k = b(f.async, this, [c].concat(h)), g() && e(k);
                    return this
                }
            }
        }(),
        f = function(a) {
            function b(a, c, e) {
                for (var f = [], h = 0, g = a.length; h < g; h++) f.push(d.escapeRegExChars(a[h]));
                a = e ? "\\b(" + f.join("|") + ")\\b" : "(" + f.join("|") + ")";
                return c ? new RegExp(a) : new RegExp(a, "i")
            }
            var c = {
                node: null,
                pattern: null,
                tagName: "strong",
                className: null,
                wordsOnly: !1,
                caseSensitive: !1
            };
            return function(e) {
                function f(b) {
                    var c, d, h;
                    if (c = g.exec(b.data)) h = a.createElement(e.tagName),
                        e.className && (h.className = e.className), d = b.splitText(c.index), d.splitText(c[0].length), h.appendChild(d.cloneNode(!0)), b.parentNode.replaceChild(h, d);
                    return !!c
                }

                function h(a, b) {
                    for (var c, d = 0; d < a.childNodes.length; d++) c = a.childNodes[d], 3 === c.nodeType ? d += b(c) ? 1 : 0 : h(c, b)
                }
                var g;
                e = d.mixin({}, c, e);
                e.node && e.pattern && (e.pattern = d.isArray(e.pattern) ? e.pattern : [e.pattern], g = b(e.pattern, e.caseSensitive, e.wordsOnly), h(e.node, f))
            }
        }(window.document),
        e = function() {
            function c(a, e) {
                a = a || {};
                a.input || b.error("input is missing");
                e.mixin(this);
                this.$hint = b(a.hint);
                this.$input = b(a.input);
                this.query = this.$input.val();
                this.queryWhenFocused = this.hasFocus() ? this.query : null;
                var f = this.$input;
                this.$overflowHelper = b('<pre aria-hidden="true"></pre>').css({
                    position: "absolute",
                    visibility: "hidden",
                    whiteSpace: "pre",
                    fontFamily: f.css("font-family"),
                    fontSize: f.css("font-size"),
                    fontStyle: f.css("font-style"),
                    fontVariant: f.css("font-variant"),
                    fontWeight: f.css("font-weight"),
                    wordSpacing: f.css("word-spacing"),
                    letterSpacing: f.css("letter-spacing"),
                    textIndent: f.css("text-indent"),
                    textRendering: f.css("text-rendering"),
                    textTransform: f.css("text-transform")
                }).insertAfter(f);
                this._checkLanguageDirection();
                0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = d.noop)
            }
            var e;
            e = {
                9: "tab",
                27: "esc",
                37: "left",
                39: "right",
                13: "enter",
                38: "up",
                40: "down"
            };
            c.normalizeQuery = function(a) {
                return d.toStr(a).replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
            };
            d.mixin(c.prototype, a, {
                _onBlur: function() {
                    this.resetInputValue();
                    this.trigger("blurred")
                },
                _onFocus: function() {
                    this.queryWhenFocused = this.query;
                    this.trigger("focused")
                },
                _onKeydown: function(a) {
                    var b = e[a.which || a.keyCode];
                    this._managePreventDefault(b, a);
                    b && this._shouldTrigger(b, a) && this.trigger(b + "Keyed", a)
                },
                _onInput: function() {
                    this._setQuery(this.getInputValue());
                    this.clearHintIfInvalid();
                    this._checkLanguageDirection()
                },
                _managePreventDefault: function(a, b) {
                    var c;
                    switch (a) {
                        case "up":
                        case "down":
                            c = !(b.altKey || b.ctrlKey || b.metaKey || b.shiftKey);
                            break;
                        default:
                            c = !1
                    }
                    c && b.preventDefault()
                },
                _shouldTrigger: function(a,
                    b) {
                    var c;
                    switch (a) {
                        case "tab":
                            c = !(b.altKey || b.ctrlKey || b.metaKey || b.shiftKey);
                            break;
                        default:
                            c = !0
                    }
                    return c
                },
                _checkLanguageDirection: function() {
                    var a = (this.$input.css("direction") || "ltr").toLowerCase();
                    this.dir !== a && (this.dir = a, this.$hint.attr("dir", a), this.trigger("langDirChanged", a))
                },
                _setQuery: function(a, b) {
                    var d, e;
                    d = this.query;
                    e = (d = c.normalizeQuery(a) === c.normalizeQuery(d)) ? this.query.length !== a.length : !1;
                    this.query = a;
                    b || d ? !b && e && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged",
                        this.query)
                },
                bind: function() {
                    var a = this,
                        b, c, f, h;
                    b = d.bind(this._onBlur, this);
                    c = d.bind(this._onFocus, this);
                    f = d.bind(this._onKeydown, this);
                    h = d.bind(this._onInput, this);
                    this.$input.on("blur.tt", b).on("focus.tt", c).on("keydown.tt", f);
                    if (!d.isMsie() || 9 < d.isMsie()) this.$input.on("input.tt", h);
                    else this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function(b) {
                        e[b.which || b.keyCode] || d.defer(d.bind(a._onInput, a, b))
                    });
                    return this
                },
                focus: function() {
                    this.$input.focus()
                },
                blur: function() {
                    this.$input.blur()
                },
                getLangDir: function() {
                    return this.dir
                },
                getQuery: function() {
                    return this.query || ""
                },
                setQuery: function(a, b) {
                    this.setInputValue(a);
                    this._setQuery(a, b)
                },
                hasQueryChangedSinceLastFocus: function() {
                    return this.query !== this.queryWhenFocused
                },
                getInputValue: function() {
                    return this.$input.val()
                },
                setInputValue: function(a) {
                    this.$input.val(a);
                    this.clearHintIfInvalid();
                    this._checkLanguageDirection()
                },
                resetInputValue: function() {
                    this.setInputValue(this.query)
                },
                getHint: function() {
                    return this.$hint.val()
                },
                setHint: function(a) {
                    this.$hint.val(a)
                },
                clearHint: function() {
                    this.setHint("")
                },
                clearHintIfInvalid: function() {
                    var a, b;
                    a = this.getInputValue();
                    b = this.getHint();
                    b = a !== b && 0 === b.indexOf(a);
                    "" !== a && b && !this.hasOverflow() || this.clearHint()
                },
                hasFocus: function() {
                    return this.$input.is(":focus")
                },
                hasOverflow: function() {
                    var a = this.$input.width() - 2;
                    this.$overflowHelper.text(this.getInputValue());
                    return this.$overflowHelper.width() >= a
                },
                isCursorAtEnd: function() {
                    var a, b;
                    a = this.$input.val().length;
                    b = this.$input[0].selectionStart;
                    return d.isNumber(b) ? b ===
                        a : document.selection ? (b = document.selection.createRange(), b.moveStart("character", -a), a === b.text.length) : !0
                },
                destroy: function() {
                    this.$hint.off(".tt");
                    this.$input.off(".tt");
                    this.$overflowHelper.remove();
                    this.$hint = this.$input = this.$overflowHelper = b("<div>")
                }
            });
            return c
        }(),
        p = function() {
            function c(a, f) {
                a = a || {};
                a.templates = a.templates || {};
                a.templates.notFound = a.templates.notFound || a.templates.empty;
                a.source || b.error("missing source");
                a.node || b.error("missing node");
                a.name && !/^[_a-zA-Z0-9-]+$/.test(a.name) &&
                    b.error("invalid dataset name: " + a.name);
                f.mixin(this);
                this.highlight = !!a.highlight;
                this.name = a.name || g();
                this.limit = a.limit || 5;
                this.displayFn = e(a.display || a.displayKey);
                this.templates = h(a.templates, this.displayFn);
                this.source = a.source.__ttAdapter ? a.source.__ttAdapter() : a.source;
                this.async = d.isUndefined(a.async) ? 2 < this.source.length : !!a.async;
                this._resetLastSuggestion();
                this.$el = b(a.node).addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name)
            }

            function e(a) {
                function b(c) {
                    return c[a]
                }
                a = a || d.stringify;
                return d.isFunction(a) ? a : b
            }

            function h(a, c) {
                function e(a) {
                    return b("<div>").text(c(a))
                }
                return {
                    notFound: a.notFound && d.templatify(a.notFound),
                    pending: a.pending && d.templatify(a.pending),
                    header: a.header && d.templatify(a.header),
                    footer: a.footer && d.templatify(a.footer),
                    suggestion: a.suggestion || e
                }
            }
            var g;
            g = d.getIdGenerator();
            c.extractData = function(a) {
                a = b(a);
                return a.data("tt-selectable-object") ? {
                    val: a.data("tt-selectable-display") || "",
                    obj: a.data("tt-selectable-object") || null
                } : null
            };
            d.mixin(c.prototype,
                a, {
                    _overwrite: function(a, b) {
                        b = b || [];
                        b.length ? this._renderSuggestions(a, b) : this.async && this.templates.pending ? this._renderPending(a) : !this.async && this.templates.notFound ? this._renderNotFound(a) : this._empty();
                        this.trigger("rendered", this.name, b, !1)
                    },
                    _append: function(a, b) {
                        b = b || [];
                        b.length && this.$lastSuggestion.length ? this._appendSuggestions(a, b) : b.length ? this._renderSuggestions(a, b) : !this.$lastSuggestion.length && this.templates.notFound && this._renderNotFound(a);
                        this.trigger("rendered", this.name, b, !0)
                    },
                    _renderSuggestions: function(a, b) {
                        var c;
                        c = this._getSuggestionsFragment(a, b);
                        this.$lastSuggestion = c.children().last();
                        this.$el.html(c).prepend(this._getHeader(a, b)).append(this._getFooter(a, b))
                    },
                    _appendSuggestions: function(a, b) {
                        var c, d;
                        c = this._getSuggestionsFragment(a, b);
                        d = c.children().last();
                        this.$lastSuggestion.after(c);
                        this.$lastSuggestion = d
                    },
                    _renderPending: function(a) {
                        var b = this.templates.pending;
                        this._resetLastSuggestion();
                        b && this.$el.html(b({
                            query: a,
                            dataset: this.name
                        }))
                    },
                    _renderNotFound: function(a) {
                        var b =
                            this.templates.notFound;
                        this._resetLastSuggestion();
                        b && this.$el.html(b({
                            query: a,
                            dataset: this.name
                        }))
                    },
                    _empty: function() {
                        this.$el.empty();
                        this._resetLastSuggestion()
                    },
                    _getSuggestionsFragment: function(a, c) {
                        var e = this,
                            h;
                        h = document.createDocumentFragment();
                        d.each(c, function(c) {
                            var d;
                            d = e._injectQuery(a, c);
                            c = b(e.templates.suggestion(d)).data("tt-selectable-object", c).data("tt-selectable-display", e.displayFn(c)).addClass(e.classes.suggestion + " " + e.classes.selectable);
                            h.appendChild(c[0])
                        });
                        this.highlight &&
                            f({
                                className: this.classes.highlight,
                                node: h,
                                pattern: a
                            });
                        return b(h)
                    },
                    _getFooter: function(a, b) {
                        return this.templates.footer ? this.templates.footer({
                            query: a,
                            suggestions: b,
                            dataset: this.name
                        }) : null
                    },
                    _getHeader: function(a, b) {
                        return this.templates.header ? this.templates.header({
                            query: a,
                            suggestions: b,
                            dataset: this.name
                        }) : null
                    },
                    _resetLastSuggestion: function() {
                        this.$lastSuggestion = b()
                    },
                    _injectQuery: function(a, b) {
                        return d.isObject(b) ? d.mixin({
                            _query: a
                        }, b) : b
                    },
                    update: function(a) {
                        function c(b) {
                            f || (f = !0, b = (b || []).slice(0,
                                d.limit), h = b.length, d._overwrite(a, b), h < d.limit && d.async && d.trigger("asyncRequested", a))
                        }
                        var d = this,
                            e = !1,
                            f = !1,
                            h = 0;
                        this.cancel();
                        this.cancel = function() {
                            e = !0;
                            d.cancel = b.noop;
                            d.async && d.trigger("asyncCanceled", a)
                        };
                        this.source(a, c, function(c) {
                            c = c || [];
                            !e && h < d.limit && (d.cancel = b.noop, h += c.length, d._append(a, c.slice(0, d.limit - h)), d.async && d.trigger("asyncReceived", a))
                        });
                        !f && c([])
                    },
                    cancel: b.noop,
                    clear: function() {
                        this._empty();
                        this.cancel();
                        this.trigger("cleared")
                    },
                    isEmpty: function() {
                        return this.$el.is(":empty")
                    },
                    destroy: function() {
                        this.$el = b("<div>")
                    }
                });
            return c
        }(),
        h = function() {
            function c(a, e) {
                var f = this;
                a = a || {};
                a.node || b.error("node is required");
                e.mixin(this);
                this.$node = b(a.node);
                this.query = null;
                this.datasets = d.map(a.datasets, function(a) {
                    var c = f.$node.find(a.node).first();
                    a.node = c.length ? c : b("<div>").appendTo(f.$node);
                    return new p(a, e)
                })
            }
            d.mixin(c.prototype, a, {
                _onSelectableClick: function(a) {
                    this.trigger("selectableClicked", b(a.currentTarget))
                },
                _onRendered: function(a, b, c, d) {
                    this.$node.toggleClass(this.classes.empty,
                        this._allDatasetsEmpty());
                    this.trigger("datasetRendered", b, c, d)
                },
                _onCleared: function() {
                    this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                    this.trigger("datasetCleared")
                },
                _propagate: function() {
                    this.trigger.apply(this, arguments)
                },
                _allDatasetsEmpty: function() {
                    return d.every(this.datasets, function(a) {
                        return a.isEmpty()
                    })
                },
                _getSelectables: function() {
                    return this.$node.find(this.selectors.selectable)
                },
                _removeCursor: function() {
                    var a = this.getActiveSelectable();
                    a && a.removeClass(this.classes.cursor)
                },
                _ensureVisible: function(a) {
                    var b, c, d;
                    b = a.position().top;
                    a = b + a.outerHeight(!0);
                    c = this.$node.scrollTop();
                    d = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10);
                    0 > b ? this.$node.scrollTop(c + b) : d < a && this.$node.scrollTop(c + (a - d))
                },
                bind: function() {
                    var a = this,
                        b;
                    b = d.bind(this._onSelectableClick, this);
                    this.$node.on("click.tt", this.selectors.selectable, b);
                    d.each(this.datasets, function(b) {
                        b.onSync("asyncRequested", a._propagate, a).onSync("asyncCanceled", a._propagate,
                            a).onSync("asyncReceived", a._propagate, a).onSync("rendered", a._onRendered, a).onSync("cleared", a._onCleared, a)
                    });
                    return this
                },
                isOpen: function() {
                    return this.$node.hasClass(this.classes.open)
                },
                open: function() {
                    this.$node.addClass(this.classes.open)
                },
                close: function() {
                    this.$node.removeClass(this.classes.open);
                    this._removeCursor()
                },
                setLanguageDirection: function(a) {
                    this.$node.attr("dir", a)
                },
                selectableRelativeToCursor: function(a) {
                    var b, c;
                    c = this.getActiveSelectable();
                    b = this._getSelectables();
                    a = (c ? b.index(c) :
                        -1) + a;
                    a = (a + 1) % (b.length + 1) - 1;
                    a = -1 > a ? b.length - 1 : a;
                    return -1 === a ? null : b.eq(a)
                },
                setCursor: function(a) {
                    this._removeCursor();
                    if (a = a && a.first()) a.addClass(this.classes.cursor), this._ensureVisible(a)
                },
                getSelectableData: function(a) {
                    return a && a.length ? p.extractData(a) : null
                },
                getActiveSelectable: function() {
                    var a = this._getSelectables().filter(this.selectors.cursor).first();
                    return a.length ? a : null
                },
                getTopSelectable: function() {
                    var a = this._getSelectables().first();
                    return a.length ? a : null
                },
                update: function(a) {
                    function b(c) {
                        c.update(a)
                    }
                    var c = a !== this.query;
                    c && (this.query = a, d.each(this.datasets, b));
                    return c
                },
                empty: function() {
                    d.each(this.datasets, function(a) {
                        a.clear()
                    });
                    this.query = null;
                    this.$node.addClass(this.classes.empty)
                },
                destroy: function() {
                    this.$node.off(".tt");
                    this.$node = b("<div>");
                    d.each(this.datasets, function(a) {
                        a.destroy()
                    })
                }
            });
            return c
        }(),
        k = function() {
            function a() {
                h.apply(this, [].slice.call(arguments, 0))
            }
            var b = h.prototype;
            d.mixin(a.prototype, h.prototype, {
                open: function() {
                    !this._allDatasetsEmpty() && this._show();
                    return b.open.apply(this, [].slice.call(arguments, 0))
                },
                close: function() {
                    this._hide();
                    return b.close.apply(this, [].slice.call(arguments, 0))
                },
                _onRendered: function() {
                    this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show();
                    return b._onRendered.apply(this, [].slice.call(arguments, 0))
                },
                _onCleared: function() {
                    this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show();
                    return b._onCleared.apply(this, [].slice.call(arguments, 0))
                },
                setLanguageDirection: function(a) {
                    this.$node.css("ltr" === a ? this.css.ltr : this.css.rtl);
                    return b.setLanguageDirection.apply(this, [].slice.call(arguments, 0))
                },
                _hide: function() {
                    this.$node.hide()
                },
                _show: function() {
                    this.$node.css("display", "block")
                }
            });
            return a
        }(),
        q = function() {
            function a(e, f) {
                var h, g, k, m, q, p, y, E, K, z, C;
                e = e || {};
                e.input || b.error("missing input");
                e.menu || b.error("missing menu");
                e.eventBus || b.error("missing event bus");
                f.mixin(this);
                this.eventBus = e.eventBus;
                this.minLength = d.isNumber(e.minLength) ? e.minLength : 1;
                this.input = e.input;
                this.menu = e.menu;
                this.enabled = !0;
                this.active = !1;
                this.input.hasFocus() && this.activate();
                this.dir =
                    this.input.getLangDir();
                this._hacks();
                this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this);
                h = c(this, "activate", "open", "_onFocused");
                g = c(this, "deactivate", "_onBlurred");
                k = c(this, "isActive", "isOpen", "_onEnterKeyed");
                m =
                    c(this, "isActive", "isOpen", "_onTabKeyed");
                q = c(this, "isActive", "_onEscKeyed");
                p = c(this, "isActive", "open", "_onUpKeyed");
                y = c(this, "isActive", "open", "_onDownKeyed");
                E = c(this, "isActive", "isOpen", "_onLeftKeyed");
                K = c(this, "isActive", "isOpen", "_onRightKeyed");
                z = c(this, "_openIfActive", "_onQueryChanged");
                C = c(this, "_openIfActive", "_onWhitespaceChanged");
                this.input.bind().onSync("focused", h, this).onSync("blurred", g, this).onSync("enterKeyed", k, this).onSync("tabKeyed", m, this).onSync("escKeyed", q, this).onSync("upKeyed",
                    p, this).onSync("downKeyed", y, this).onSync("leftKeyed", E, this).onSync("rightKeyed", K, this).onSync("queryChanged", z, this).onSync("whitespaceChanged", C, this).onSync("langDirChanged", this._onLangDirChanged, this)
            }

            function c(a) {
                var b = [].slice.call(arguments, 1);
                return function() {
                    var c = [].slice.call(arguments);
                    d.each(b, function(b) {
                        return a[b].apply(a, c)
                    })
                }
            }
            d.mixin(a.prototype, {
                _hacks: function() {
                    var a, c;
                    a = this.input.$input || b("<div>");
                    c = this.menu.$node || b("<div>");
                    a.on("blur.tt", function(b) {
                        var e, f;
                        e = document.activeElement;
                        f = c.is(e);
                        e = 0 < c.has(e).length;
                        d.isMsie() && (f || e) && (b.preventDefault(), b.stopImmediatePropagation(), d.defer(function() {
                            a.focus()
                        }))
                    });
                    c.on("mousedown.tt", function(a) {
                        a.preventDefault()
                    })
                },
                _onSelectableClicked: function(a, b) {
                    this.select(b)
                },
                _onDatasetCleared: function() {
                    this._updateHint()
                },
                _onDatasetRendered: function(a, b, c, d) {
                    this._updateHint();
                    this.eventBus.trigger("render", c, d, b)
                },
                _onAsyncRequested: function(a, b, c) {
                    this.eventBus.trigger("asyncrequest", c, b)
                },
                _onAsyncCanceled: function(a, b, c) {
                    this.eventBus.trigger("asynccancel",
                        c, b)
                },
                _onAsyncReceived: function(a, b, c) {
                    this.eventBus.trigger("asyncreceive", c, b)
                },
                _onFocused: function() {
                    this._minLengthMet() && this.menu.update(this.input.getQuery())
                },
                _onBlurred: function() {
                    this.input.hasQueryChangedSinceLastFocus() && this.eventBus.trigger("change", this.input.getQuery())
                },
                _onEnterKeyed: function(a, b) {
                    var c;
                    (c = this.menu.getActiveSelectable()) && this.select(c) && b.preventDefault()
                },
                _onTabKeyed: function(a, b) {
                    var c;
                    (c = this.menu.getActiveSelectable()) ? this.select(c) && b.preventDefault(): (c =
                        this.menu.getTopSelectable()) && this.autocomplete(c) && b.preventDefault()
                },
                _onEscKeyed: function() {
                    this.close()
                },
                _onUpKeyed: function() {
                    this.moveCursor(-1)
                },
                _onDownKeyed: function() {
                    this.moveCursor(1)
                },
                _onLeftKeyed: function() {
                    "rtl" === this.dir && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getTopSelectable())
                },
                _onRightKeyed: function() {
                    "ltr" === this.dir && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getTopSelectable())
                },
                _onQueryChanged: function(a, b) {
                    this._minLengthMet(b) ? this.menu.update(b) :
                        this.menu.empty()
                },
                _onWhitespaceChanged: function() {
                    this._updateHint()
                },
                _onLangDirChanged: function(a, b) {
                    this.dir !== b && (this.dir = b, this.menu.setLanguageDirection(b))
                },
                _openIfActive: function() {
                    this.isActive() && this.open()
                },
                _minLengthMet: function(a) {
                    a = d.isString(a) ? a : this.input.getQuery() || "";
                    return a.length >= this.minLength
                },
                _updateHint: function() {
                    var a, b, c;
                    a = this.menu.getTopSelectable();
                    b = this.menu.getSelectableData(a);
                    a = this.input.getInputValue();
                    !b || d.isBlankString(a) || this.input.hasOverflow() ? this.input.clearHint() :
                        (c = e.normalizeQuery(a), c = d.escapeRegExChars(c), c = new RegExp("^(?:" + c + ")(.+$)", "i"), (b = c.exec(b.val)) && this.input.setHint(a + b[1]))
                },
                isEnabled: function() {
                    return this.enabled
                },
                enable: function() {
                    this.enabled = !0
                },
                disable: function() {
                    this.enabled = !1
                },
                isActive: function() {
                    return this.active
                },
                activate: function() {
                    if (this.isActive()) return !0;
                    if (!this.isEnabled() || this.eventBus.before("active")) return !1;
                    this.active = !0;
                    this.eventBus.trigger("active");
                    return !0
                },
                deactivate: function() {
                    if (this.isActive()) {
                        if (this.eventBus.before("idle")) return !1;
                        this.active = !1;
                        this.close();
                        this.eventBus.trigger("idle")
                    }
                    return !0
                },
                isOpen: function() {
                    return this.menu.isOpen()
                },
                open: function() {
                    this.isOpen() || this.eventBus.before("open") || (this.menu.open(), this._updateHint(), this.eventBus.trigger("open"));
                    return this.isOpen()
                },
                close: function() {
                    this.isOpen() && !this.eventBus.before("close") && (this.menu.close(), this.input.clearHint(), this.input.resetInputValue(), this.eventBus.trigger("close"));
                    return !this.isOpen()
                },
                setVal: function(a) {
                    this.input.setQuery(d.toStr(a))
                },
                getVal: function() {
                    return this.input.getQuery()
                },
                select: function(a) {
                    return (a = this.menu.getSelectableData(a)) && !this.eventBus.before("select", a.obj) ? (this.input.setQuery(a.val, !0), this.eventBus.trigger("select", a.obj), this.close(), !0) : !1
                },
                autocomplete: function(a) {
                    var b;
                    b = this.input.getQuery();
                    return (a = this.menu.getSelectableData(a)) && b !== a.val && !this.eventBus.before("autocomplete", a.obj) ? (this.input.setQuery(a.val), this.eventBus.trigger("autocomplete", a.obj), !0) : !1
                },
                moveCursor: function(a) {
                    var b, c, d;
                    b = this.input.getQuery();
                    a = this.menu.selectableRelativeToCursor(a);
                    d = (c = this.menu.getSelectableData(a)) ? c.obj : null;
                    return this._minLengthMet() && this.menu.update(b) || this.eventBus.before("cursorchange", d) ? !1 : (this.menu.setCursor(a), c ? this.input.setInputValue(c.val) : (this.input.resetInputValue(), this._updateHint()), this.eventBus.trigger("cursorchange", d), !0)
                },
                destroy: function() {
                    this.input.destroy();
                    this.menu.destroy()
                }
            });
            return a
        }();
    (function() {
        function a(c, d) {
            c.each(function() {
                var a = b(this),
                    c;
                (c = a.data(D.typeahead)) &&
                d(c, a)
            })
        }

        function f(a, b) {
            return a.clone().addClass(b.classes.hint).removeData().css(b.css.hint).css(v(a)).prop("readonly", !0).removeAttr("id name placeholder required").attr({
                autocomplete: "off",
                spellcheck: "false",
                tabindex: -1
            })
        }

        function p(a, b) {
            a.data(D.attrs, {
                dir: a.attr("dir"),
                autocomplete: a.attr("autocomplete"),
                spellcheck: a.attr("spellcheck"),
                style: a.attr("style")
            });
            a.addClass(b.classes.input).attr({
                autocomplete: "off",
                spellcheck: !1
            });
            try {
                !a.attr("dir") && a.attr("dir", "auto")
            } catch (c) {}
            return a
        }

        function v(a) {
            return {
                backgroundAttachment: a.css("background-attachment"),
                backgroundClip: a.css("background-clip"),
                backgroundColor: a.css("background-color"),
                backgroundImage: a.css("background-image"),
                backgroundOrigin: a.css("background-origin"),
                backgroundPosition: a.css("background-position"),
                backgroundRepeat: a.css("background-repeat"),
                backgroundSize: a.css("background-size")
            }
        }

        function u(a) {
            var b, c;
            b = a.data(D.www);
            c = a.parent().filter(b.selectors.wrapper);
            d.each(a.data(D.attrs), function(b, c) {
                d.isUndefined(b) ? a.removeAttr(c) : a.attr(c, b)
            });
            a.removeData(D.typeahead).removeData(D.www).removeData(D.attr).removeClass(b.classes.input);
            c.length && (a.detach().insertAfter(c), c.remove())
        }

        function x(a) {
            a = d.isJQuery(a) || d.isElement(a) ? b(a).first() : [];
            return a.length ? a : null
        }
        var n, D, s;
        n = b.fn.typeahead;
        D = {
            www: "tt-www",
            attrs: "tt-attrs",
            typeahead: "tt-typeahead"
        };
        s = {
            initialize: function(a, m) {
                var n;
                m = d.isArray(m) ? m : [].slice.call(arguments, 1);
                a = a || {};
                n = g(a.classNames);
                return this.each(function() {
                    var g, v, s, u, F, A;
                    d.each(m, function(b) {
                        b.highlight = !!a.highlight
                    });
                    g = b(this);
                    v = b(n.html.wrapper);
                    s = x(a.hint);
                    u = x(a.menu);
                    F = !1 !== a.hint && !s;
                    A = !1 !== a.menu &&
                        !u;
                    F && (s = f(g, n));
                    A && (u = b(n.html.menu).css(n.css.menu));
                    s && s.val("");
                    g = p(g, n);
                    if (F || A) v.css(n.css.wrapper), g.css(F ? n.css.input : n.css.inputWithNoHint), g.wrap(v).parent().prepend(F ? s : null).append(A ? u : null);
                    F = A ? k : h;
                    v = new c({
                        el: g
                    });
                    s = new e({
                        hint: s,
                        input: g
                    }, n);
                    u = new F({
                        node: u,
                        datasets: m
                    }, n);
                    u = new q({
                        input: s,
                        menu: u,
                        eventBus: v,
                        minLength: a.minLength
                    }, n);
                    g.data(D.www, n);
                    g.data(D.typeahead, u)
                })
            },
            isEnabled: function() {
                var b;
                a(this.first(), function(a) {
                    b = a.isEnabled()
                });
                return b
            },
            enable: function() {
                a(this, function(a) {
                    a.enable()
                });
                return this
            },
            disable: function() {
                a(this, function(a) {
                    a.disable()
                });
                return this
            },
            isActive: function() {
                var b;
                a(this.first(), function(a) {
                    b = a.isActive()
                });
                return b
            },
            activate: function() {
                a(this, function(a) {
                    a.activate()
                });
                return this
            },
            deactivate: function() {
                a(this, function(a) {
                    a.deactivate()
                });
                return this
            },
            isOpen: function() {
                var b;
                a(this.first(), function(a) {
                    b = a.isOpen()
                });
                return b
            },
            open: function() {
                a(this, function(a) {
                    a.open()
                });
                return this
            },
            close: function() {
                a(this, function(a) {
                    a.close()
                });
                return this
            },
            select: function(c) {
                var d = !1,
                    e = b(c);
                a(this.first(), function(a) {
                    d = a.select(e)
                });
                return d
            },
            autocomplete: function(c) {
                var d = !1,
                    e = b(c);
                a(this.first(), function(a) {
                    d = a.autocomplete(e)
                });
                return d
            },
            moveCursor: function(b) {
                var c = !1;
                a(this.first(), function(a) {
                    c = a.moveCursor(b)
                });
                return c
            },
            val: function(b) {
                var c;
                if (arguments.length) return a(this, function(a) {
                    a.setVal(b)
                }), this;
                a(this.first(), function(a) {
                    c = a.getVal()
                });
                return c
            },
            destroy: function() {
                a(this, function(a, b) {
                    u(b);
                    a.destroy()
                });
                return this
            }
        };
        b.fn.typeahead = function(a) {
            return s[a] ?
                s[a].apply(this, [].slice.call(arguments, 1)) : s.initialize.apply(this, arguments)
        };
        b.fn.typeahead.noConflict = function() {
            b.fn.typeahead = n;
            return this
        }
    })()
});
(function() {
    var b = [].slice;
    window.namespace = function(d, g, c) {
        var a, f, e, p, h;
        3 > arguments.length && (a = ["undefined" !== typeof exports ? exports : window].concat(b.call(arguments)), d = a[0], g = a[1], c = a[2]);
        h = d;
        p = g.split(".");
        f = 0;
        for (e = p.length; f < e; f++) a = p[f], d = d[a] || (d[a] = {});
        if (null != c) return c(d, h)
    };
    window.extend = function(b, g) {
        for (var c in g) b.prototype[c] = g[c];
        return b
    };
    window.include = function(b, g) {
        return extend(b.prototype, g)
    };
    window.merge = function() {
        var d;
        d = 1 <= arguments.length ? b.call(arguments, 0) : [];
        if (0 < (null !=
                d ? d.length : void 0)) return tap({}, function(b) {
            var c, a, f, e, p, h;
            e = [];
            c = 0;
            for (f = d.length; c < f; c++) h = d[c], e.push(function() {
                var c;
                c = [];
                for (a in h) p = h[a], c.push(b[a] = p);
                return c
            }());
            return e
        })
    };
    window.tap = function(b, g) {
        g(b);
        return b
    };
    window.intersect = function(b, g) {
        var c;
        c = void 0;
        g.length > b.length && (c = g, g = b, b = c);
        return b.filter(function(a) {
            if (-1 !== g.indexOf(a)) return !0
        })
    };
    Array.prototype.includes = function(b) {
        for (var g in this)
            if (this[g] === b) return !0;
        return !1
    };
    String.random = function(b) {
        var g, c;
        null == b && (b =
            8);
        g = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");
        c = new String;
        b.times(function(a) {
            return c += g[Math.floor(Math.random() * g.length)]
        });
        return c
    };
    String.prototype.isBlank = function() {
        return 0 === this.length || !this.trim()
    };
    Number.prototype.times = function(b) {
        var g, c, a;
        c = [];
        for (a = g = 1; 1 <= this ? g <= this : g >= this; a = 1 <= this ? ++g : --g) c.push(b(a));
        return c
    };
    Number.prototype.to = function(b) {
        var g, c, a, f;
        g = [];
        for (c = a = f = parseInt(this); f <= b ? a <= b : a >= b; c = f <= b ? ++a : --a) g.push(c);
        return g
    };
    Number.prototype.format =
        function(b, g, c) {
            var a, f;
            a = (this + "").replace(/[^0-9+\-Ee.]/g, "");
            a = isFinite(+a) ? +a : 0;
            b = isFinite(+b) ? Math.abs(b) : 0;
            c = "undefined" === typeof c ? "," : c;
            g = "undefined" === typeof g ? "." : g;
            f = "";
            f = function(a, b) {
                var c;
                c = Math.pow(10, b);
                return "" + (Math.round(a * c) / c).toFixed(b)
            };
            f = (b ? f(a, b) : "" + Math.round(a)).split(".");
            3 < f[0].length && (f[0] = f[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, c));
            (f[1] || "").length < b && (f[1] = f[1] || "", f[1] += Array(b - f[1].length + 1).join("0"));
            return f.join(g)
        };
    Number.prototype.padLeft = function(b, g) {
        var c;
        c = String(b || 10).length - String(this).length + 1;
        return 0 < c ? Array(c).join(g || "0") + this : this
    };
    Date.prototype.addDays = function(b) {
        this.setDate(this.getDate() + parseInt(b));
        return this
    }
}).call(this);
"undefined" === typeof Lib && (Lib = {});
(function() {
    var b = [].slice,
        d = /\s+/,
        g = function(a, b, c, g) {
            if (!c) return !0;
            if ("object" === typeof c)
                for (var h in c) a[b].apply(a, [h, c[h]].concat(g));
            else if (d.test(c)) {
                c = c.split(d);
                h = 0;
                for (var k = c.length; h < k; h++) a[b].apply(a, [c[h]].concat(g))
            } else return !0
        },
        c = function(a, b) {
            var c, d = -1,
                h = a.length,
                g = b[0],
                q = b[1],
                m = b[2];
            switch (b.length) {
                case 0:
                    for (; ++d < h;)(c = a[d]).callback.call(c.ctx);
                    break;
                case 1:
                    for (; ++d < h;)(c = a[d]).callback.call(c.ctx, g);
                    break;
                case 2:
                    for (; ++d < h;)(c = a[d]).callback.call(c.ctx, g, q);
                    break;
                case 3:
                    for (; ++d <
                        h;)(c = a[d]).callback.call(c.ctx, g, q, m);
                    break;
                default:
                    for (; ++d < h;)(c = a[d]).callback.apply(c.ctx, b)
            }
        };
    Lib.Events = {
        on: function(a, b, c) {
            if (!g(this, "on", a, [b, c]) || !b) return this;
            this._events || (this._events = {});
            (this._events[a] || (this._events[a] = [])).push({
                callback: b,
                context: c,
                ctx: c || this
            });
            return this
        },
        once: function(a, b, c) {
            if (!g(this, "once", a, [b, c]) || !b) return this;
            var d = this,
                h = _.once(function() {
                    d.off(a, h);
                    b.apply(this, arguments)
                });
            h._callback = b;
            return this.on(a, h, c)
        },
        off: function(a, b, c) {
            var d, h, k, q, m,
                t, w, v;
            if (!this._events || !g(this, "off", a, [b, c])) return this;
            if (!a && !b && !c) return this._events = {}, this;
            q = a ? [a] : _.keys(this._events);
            m = 0;
            for (t = q.length; m < t; m++)
                if (a = q[m], k = this._events[a]) {
                    this._events[a] = d = [];
                    if (b || c)
                        for (w = 0, v = k.length; w < v; w++) h = k[w], (b && b !== h.callback && b !== h.callback._callback || c && c !== h.context) && d.push(h);
                    d.length || delete this._events[a]
                }
            return this
        },
        trigger: function(a) {
            if (!this._events) return this;
            var d = b.call(arguments, 1);
            if (!g(this, "trigger", a, d)) return this;
            var e = this._events[a],
                p = this._events.all;
            e && c(e, d);
            p && c(p, arguments);
            return this
        },
        stopListening: function(a, b, c) {
            var d = this._listeners;
            if (!d) return this;
            var h = !b && !c;
            "object" === typeof b && (c = this);
            a && ((d = {})[a._listenerId] = a);
            for (var g in d) d[g].off(b, c, this), h && delete this._listeners[g];
            return this
        }
    }
}).call(this);
(function() {
    namespace("Lib");
    Lib.BankSelection = function() {
        return function(b) {
            this.$container = b;
            this.$bankPersonalInfo = this.$container.find("@bankPersonalInfo");
            this.$operatorHelp = this.$container.find("@operatorHelp");
            this.$bankFields = this.$container.find("@bankPersonalInfoFields");
            this.$bankBranch = this.$container.find("@bankBranch");
            this.$operatorHelp.on("change", function(b) {
                return function(g) {
                    if ("1" === b.$container.find("@operatorHelp:checked").val()) return b.$bankFields.hide(), g = b.$bankFields.offset().top -
                        250, $("html, body").animate({
                            scrollTop: g
                        }, 400);
                    b.$bankFields.removeClass("hide");
                    return b.$bankFields.show()
                }
            }(this));
            b = new Bloodhound({
                datumTokenizer: function(b) {
                    return Bloodhound.tokenizers.whitespace(b.value)
                },
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                remote: {
                    url: Routes.autocomplete_bank_branch_path(),
                    prepare: function(b, g) {
                        g.url += "?q=" + b;
                        return g
                    },
                    wildcard: "%QUERY"
                }
            });
            b.initialize();
            this.$bankBranch.typeahead(null, {
                name: "branches",
                displayKey: "title",
                source: b.ttAdapter()
            }).off("typeahead:selected").on("typeahead:selected",
                function(b) {
                    return function(g, c) {
                        return b.$bankBranch.typeahead("val", c.title)
                    }
                }(this))
        }
    }()
}).call(this);
(function() {
    namespace("Lib");
    Lib.Calculator = function() {
        function b(a) {
            var b;
            this.$container = a;
            b = this;
            this.$amountSlider = this.$container.find("@amountSlider");
            this.$amountSliderMove = this.$container.find("@amountSliderMove");
            this.$amountSliderMoveToRepeat = this.$container.find("@amountSliderMoveToRepeat");
            this.$termSlider = this.$container.find("@termSlider");
            this.$termSliderMove = this.$container.find("@termSliderMove");
            this.$creditLimitation = this.$container.find("@creditLimitation");
            this.$totalValue = this.$container.find("@totalValue");
            this.$sliderCollapse = this.$container.find("@sliderCollapse");
            this.$calcWidgetButton = this.$container.find("@calcWidgetButton");
            this.$needAmount = this.$container.find("@needAmount");
            this.$needAmountMobile = this.$container.find("@needAmountMobile");
            this.$forTerms = this.$container.find("@forTerms");
            this.$calcAmount = this.$container.find("@calcAmount");
            this.$calcInterest = this.$container.find("@calcInterest");
            this.$calcTotal = this.$container.find("@calcTotal");
            this.$paymentDueDateLabel = this.$container.find("@paymentDueDateLabel");
            this.$minusAmountBtn = this.$container.find("@sliderAmountMinus");
            this.$plusAmountBtn = this.$container.find("@sliderAmountPlus");
            this.$minusAmountBtn.off("click").on("click", function(a) {
                b.amountMinus();
                return a.preventDefault()
            });
            this.$plusAmountBtn.off("click").on("click", function(a) {
                b.amountPlus();
                return a.preventDefault()
            });
            this.$minusTermBtn = this.$container.find("@sliderTermMinus");
            this.$plusTermBtn = this.$container.find("@sliderTermPlus");
            this.$minusTermBtn.click(function() {
                b.termMinus();
                return event.preventDefault()
            });
            this.$plusTermBtn.click(function() {
                b.termPlus();
                return event.preventDefault()
            });
            0 <= $(location).attr("href").indexOf("steps/4") && (this.current_step = 4);
            b._setLaonLimitation();
            b._initializeSliders();
            this._countCalcValues();
            this.$container.off("click", "@sliderCollapseLink").on("click", "@sliderCollapseLink", function(a) {
                return function(b) {
                    a.$amountSlider.slider("relayout");
                    a.$termSlider.slider("relayout");
                    return $(a).text(function(a, b) {
                        return b === $(this).data("original") ? $(this).data("replace") : $(this).data("original")
                    })
                }
            }(this));
            this.$container.find("@calcWidgetButton").on("click", function(a) {
                var c, d;
                a.preventDefault();
                a = $(this);
                b.$sliderCollapse.toggleClass("collapse");
                b.$amountSlider.slider("relayout");
                b.$termSlider.slider("relayout");
                a.toggleClass("in");
                c = a.data("original");
                d = a.data("replace");
                if (a.hasClass("in")) return a.html(d), b.$calcWidgetButton.removeClass("calc_widget__button-show"), b.$calcWidgetButton.addClass("calc_widget__button-hide");
                a.html(c);
                b.$calcWidgetButton.removeClass("calc_widget__button-hide");
                return b.$calcWidgetButton.addClass("calc_widget__button-show")
            })
        }
        var d, g, c, a, f, e, p, h;
        h = gon.calculator.term;
        p = h[0];
        e = _.last(h);
        f = gon.calculator.amount;
        a = f[0];
        c = _.last(f);
        g = gon.calculator.amountLimitation;
        d = gon.calculator.commissions;
        b.prototype.amountPlus = function() {
            var a, b;
            a = parseFloat(this.$amountSlider.val());
            b = f[($.inArray(a, f) + 1) % f.length];
            if (a < f[f.length - 1]) return this.$amountSlider.val(b), this.$amountSlider.slider("setValue", b, !1, !0)
        };
        b.prototype.amountMinus = function() {
            var a, b;
            a = parseFloat(this.$amountSlider.val());
            b = f[($.inArray(a, f) - 1 + f.length) % f.length];
            if (a > f[0]) return this.$amountSlider.val(b), this.$amountSlider.slider("setValue", b, !1, !0)
        };
        b.prototype.termPlus = function() {
            var a, b;
            a = parseFloat(this.$termSlider.val());
            b = h[($.inArray(a, h) + 1) % h.length];
            if (a < h[h.length - 1]) return this.$termSlider.val(b), this.$termSlider.slider("setValue", b, !1, !0)
        };
        b.prototype.termMinus = function() {
            var a, b;
            a = parseFloat(this.$termSlider.val());
            b = h[($.inArray(a, h) - 1 + h.length) % h.length];
            if (a > h[0]) return this.$termSlider.val(b), this.$termSlider.slider("setValue", b, !1, !0)
        };
        b.prototype._setLaonLimitation = function() {
            if (this.current_step) return f = _.partition(gon.calculator.amount, function(a) {
                return a <= g
            })[0], a = f[0], c = _.last(f)
        };
        b.prototype._initializeSliders = function() {
            0 < this.$amountSlider.length && (this._calculatePaymentDueDate(), this.$amountSlider.slider({
                min: a,
                max: c,
                ticks: f,
                ticks_positions: this._calcPosition(f),
                ticks_labels: this._makeLabels(f),
                tooltip: "hide",
                formatter: function(a) {
                    var b;
                    b = a > g ? " " : "";
                    return a.format(0, ".", ".") + "\u00a0VND \n " + b
                }
            }).on("change", function(a) {
                return function(b) {
                    b =
                        a._amountScale(f, b.value.newValue);
                    a.$totalValue.addClass("green");
                    a._timeout(a.$totalValue);
                    b > g ? (a.$creditLimitation.addClass("active"), a.$creditLimitation.text("" + gon.translations["js.slider.tip"]), a._amount_slider_move_to_repeat()) : (a.$creditLimitation.removeClass("active"), a.$creditLimitation.text(""));
                    a.$amountSlider.slider("setValue", b);
                    a.$needAmount.text(b.format(0, ".", ".") + " ");
                    a.$needAmountMobile.text(b / 1E6 + " ");
                    a._calculatePaymentDueDate();
                    a._countCalcValues();
                    return a._amount_slider_move()
                }
            }(this)));
            if (0 < this.$termSlider.length) return this.$termSlider.slider({
                min: p,
                max: e,
                ticks: h,
                ticks_positions: this._calcPosition(h),
                ticks_labels: this._makeTicks(h),
                tooltip: "hide",
                formatter: function(a) {
                    return a + " days"
                }
            }).on("change", function(a) {
                return function(b) {
                    b = a._termScale(h, b.value.newValue);
                    a.$termSlider.slider("setValue", b);
                    a._countCalcValues();
                    a._calculatePaymentDueDate();
                    a.$totalValue.addClass("green");
                    a._timeout(a.$totalValue);
                    return a._term_slider_move()
                }
            }(this))
        };
        b.prototype._amount_slider_move = function() {
            return this.$amountSliderMove.val(1)
        };
        b.prototype._term_slider_move = function() {
            return this.$termSliderMove.val(1)
        };
        b.prototype._amount_slider_move_to_repeat = function() {
            return this.$amountSliderMoveToRepeat.val(1)
        };
        b.prototype._timeout = function(a) {
            return setTimeout(function() {
                return $(a).removeClass("green")
            }, 500)
        };
        b.prototype._calculatePaymentDueDate = function() {
            var a;
            a = parseFloat(this.$termSlider.val());
            a = (new Date).addDays(a);
            return this.$paymentDueDateLabel.text(a.getDate().padLeft() + "." + (a.getMonth() + 1).padLeft() + "." + a.getFullYear())
        };
        b.prototype._makeLabels = function(a) {
            return _.map(a, function(b) {
                return b === _.first(a) || b === _.last(a) ? b.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1.") : ""
            })
        };
        b.prototype._makeTicks = function(a) {
            return _.map(a, function(b) {
                return b === _.first(a) || b === _.last(a) ? b.toString() : ""
            })
        };
        b.prototype._calcPosition = function(a) {
            var b, c;
            c = 100 / (a.length - 1);
            b = [0];
            for (a = 0; 100 > a;) a += c, b.push(parseInt(a));
            b.push(100);
            return b
        };
        b.prototype._countCalcValues = function() {
            var a, b, c, e;
            a = parseFloat(this.$amountSlider.val());
            c = parseFloat(this.$termSlider.val());
            parseFloat(this.$termSlider.val());
            b = parseFloat(d[a][parseFloat(c)]);
            e = parseFloat(a + b);
            this.$calcAmount.text(a.format(0, ".", ".") + " ");
            this.$calcInterest.text(b.format(0, ".", ".") + " ");
            this.$calcTotal.text(e.format(0, ".", ".") + " ");
            return this.$forTerms.text(c)
        };
        b.prototype._amountScale = function(a, b) {
            return _.reduce(a, function(a, c) {
                return Math.abs(c - b) < Math.abs(a - b) ? c : a
            })
        };
        b.prototype._termScale = function(a, b) {
            return _.reduce(a, function(a, c) {
                return Math.abs(c - b) < Math.abs(a -
                    b) ? c : a
            })
        };
        return b
    }()
}).call(this);
(function() {
    namespace("Lib.Clients");
    Lib.Clients.PhoneConfirmation = function() {
        function b(b, g) {
            var c;
            this.$container = b;
            c = this;
            this.$path = g || Routes.sms_resend_clients_application_path();
            this.$resendSmsLink = this.$container.find("@resendSmsLink");
            this.$resendSmsTimer = this.$container.find("@resendSmsTimer");
            this.$refresh = this.$container.find("@refresh");
            this.$phoneAcc = this.$container.find("@phoneAcc");
            0 < Cookies.get("smsTimerInterval") && c.startTimer(Cookies.get("smsTimerInterval"));
            this.$resendSmsLink.on("click",
                function() {
                    $.ajax({
                        type: "PATCH",
                        url: c.$path,
                        data: {
                            phone_number: c.$phoneAcc.val()
                        },
                        success: function(a) {
                            return c.startTimer(60)
                        },
                        error: function(a) {}
                    });
                    return !1
                })
        }
        b.prototype.startTimer = function(b) {
            var g, c, a, f, e;
            f = this;
            g = new Date((new Date).getTime() + 6E4);
            c = b;
            a = this.$resendSmsTimer.data("sec");
            this.$resendSmsTimer.text(c + " " + a);
            this.$resendSmsTimer.show();
            this.$resendSmsLink.hide();
            this.$phoneAcc.prop("readonly", !0);
            this.$refresh.addClass("fa-spin");
            return e = setInterval(function() {
                c -= 1;
                f.$resendSmsTimer.text(c +
                    " " + a);
                Cookies.set("smsTimerInterval", c, {
                    expires: g
                });
                0 === c && (clearInterval(e), f.$resendSmsTimer.hide(), f.$resendSmsTimer.empty(), f.$resendSmsLink.show(), f.$phoneAcc.prop("readonly", !1), f.$refresh.removeClass("fa-spin"))
            }, 1E3)
        };
        return b
    }()
}).call(this);
(function() {
    namespace("Lib.Clients");
    Lib.Clients.RepeatCalculator = function() {
        function b(a) {
            var b;
            this.$container = a;
            b = this;
            this.$amountSlider = this.$container.find("@amountSlider");
            this.$termSlider = this.$container.find("@termSlider");
            this.$creditLimitation = this.$container.find("@creditLimitation");
            this.$totalValue = this.$container.find("@totalValue");
            this.$needAmount = this.$container.find("@needAmount");
            this.$forTerms = this.$container.find("@forTerms");
            this.$calcAmount = this.$container.find("@calcAmount");
            this.$calcInterest = this.$container.find("@calcInterest");
            this.$calcTotal = this.$container.find("@calcTotal");
            this.$paymentDueDateLabel = this.$container.find("@paymentDueDateLabel");
            this.$minusAmountBtn = this.$container.find("@sliderAmountMinus");
            this.$plusAmountBtn = this.$container.find("@sliderAmountPlus");
            this.$minusAmountBtn.off("click").on("click", function(a) {
                b.amountMinus();
                return a.preventDefault()
            });
            this.$plusAmountBtn.off("click").on("click", function(a) {
                b.amountPlus();
                return a.preventDefault()
            });
            this.$minusTermBtn = this.$container.find("@sliderTermMinus");
            this.$plusTermBtn = this.$container.find("@sliderTermPlus");
            this.$minusTermBtn.off("click").on("click", function(a) {
                b.termMinus();
                return a.preventDefault()
            });
            this.$plusTermBtn.off("click").on("click", function(a) {
                b.termPlus();
                return a.preventDefault()
            });
            0 <= $(location).attr("href").indexOf("steps/4") && (this.current_step = 4);
            b._setLaonLimitation();
            b._initializeSliders();
            this._countCalcValues();
            this.$container.off("click", "@sliderCollapseLink").on("click",
                "@sliderCollapseLink",
                function(a) {
                    return function(b) {
                        a.$amountSlider.slider("relayout");
                        a.$termSlider.slider("relayout");
                        return $(a).text(function(a, b) {
                            return b === $(this).data("original") ? $(this).data("replace") : $(this).data("original")
                        })
                    }
                }(this))
        }
        var d, g, c, a, f, e, p, h;
        h = gon.calculator.term;
        p = h[0];
        e = _.last(h);
        f = gon.calculator.amount;
        a = f[0];
        c = _.last(f);
        g = gon.calculator.amountLimitation;
        d = gon.calculator.commissions;
        b.prototype.amountPlus = function() {
            var a, b;
            a = parseFloat(this.$amountSlider.val());
            b = f[($.inArray(a,
                f) + 1) % f.length];
            if (a < f[f.length - 1]) return this.$amountSlider.val(b), this.$amountSlider.slider("setValue", b, !1, !0)
        };
        b.prototype.amountMinus = function() {
            var a, b;
            a = parseFloat(this.$amountSlider.val());
            b = f[($.inArray(a, f) - 1 + f.length) % f.length];
            if (a > f[0]) return this.$amountSlider.val(b), this.$amountSlider.slider("setValue", b, !1, !0)
        };
        b.prototype.termPlus = function() {
            var a, b;
            a = parseFloat(this.$termSlider.val());
            b = h[($.inArray(a, h) + 1) % h.length];
            if (a < h[h.length - 1]) return this.$termSlider.val(b), this.$termSlider.slider("setValue",
                b, !1, !0)
        };
        b.prototype.termMinus = function() {
            var a, b;
            a = parseFloat(this.$termSlider.val());
            b = h[($.inArray(a, h) - 1 + h.length) % h.length];
            if (a > h[0]) return this.$termSlider.val(b), this.$termSlider.slider("setValue", b, !1, !0)
        };
        b.prototype._setLaonLimitation = function() {
            if (this.current_step) return f = _.partition(gon.calculator.amount, function(a) {
                return a <= g
            })[0], a = f[0], c = _.last(f)
        };
        b.prototype._initializeSliders = function() {
            0 < this.$amountSlider.length && (this._calculatePaymentDueDate(), this.$amountSlider.slider({
                min: a,
                max: c,
                ticks: f,
                ticks_positions: this._calcPosition(f),
                ticks_labels: this._makeLabels(f),
                tooltip: "hide",
                rangeHighlights: [{
                    start: g,
                    end: c
                }],
                formatter: function(a) {
                    var b;
                    b = a > g ? " " : "";
                    return a.format(0, ".", ".") + "\u00a0VN\u0110 \n " + b
                }
            }).on("change", function(a) {
                return function(b) {
                    b = a._amountScale(f, b.value.newValue);
                    a.$totalValue.addClass("green");
                    a._timeout(a.$totalValue);
                    b > g ? (a.$creditLimitation.addClass("active"), a.$creditLimitation.text("" + gon.translations["js.slider.tip"])) : (a.$creditLimitation.removeClass("active"),
                        a.$creditLimitation.text(""));
                    a.$amountSlider.slider("setValue", b);
                    a.$needAmount.text(b.format(0, ".", ".") + " ");
                    a._calculatePaymentDueDate();
                    return a._countCalcValues()
                }
            }(this)));
            if (0 < this.$termSlider.length) return this.$termSlider.slider({
                min: p,
                max: e,
                ticks: h,
                ticks_positions: this._calcPosition(h),
                ticks_labels: this._makeTicks(h),
                tooltip: "hide",
                formatter: function(a) {
                    return a + " days"
                }
            }).on("change", function(a) {
                return function(b) {
                    b = a._termScale(h, b.value.newValue);
                    a.$termSlider.slider("setValue", b);
                    a._countCalcValues();
                    a._calculatePaymentDueDate();
                    a.$totalValue.addClass("green");
                    return a._timeout(a.$totalValue)
                }
            }(this))
        };
        b.prototype._timeout = function(a) {
            return setTimeout(function() {
                return $(a).removeClass("green")
            }, 500)
        };
        b.prototype._calculatePaymentDueDate = function() {
            var a;
            a = parseFloat(this.$termSlider.val());
            a = (new Date).addDays(a);
            return this.$paymentDueDateLabel.text(a.getDate().padLeft() + "." + (a.getMonth() + 1).padLeft() + "." + a.getFullYear())
        };
        b.prototype._makeLabels = function(a) {
            return _.map(a, function(b) {
                return b ===
                    _.first(a) || b === _.last(a) ? b.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1.") : ""
            })
        };
        b.prototype._makeTicks = function(a) {
            return _.map(a, function(b) {
                return b === _.first(a) || b === _.last(a) ? b.toString() : ""
            })
        };
        b.prototype._calcPosition = function(a) {
            var b, c;
            c = 100 / (a.length - 1);
            b = [0];
            for (a = 0; 100 > a;) a += c, b.push(parseInt(a));
            b.push(100);
            return b
        };
        b.prototype._countCalcValues = function() {
            var a, b, c, e;
            a = parseFloat(this.$amountSlider.val());
            c = parseFloat(this.$termSlider.val());
            parseFloat(this.$termSlider.val());
            b = parseFloat(d[a][parseFloat(c)]);
            e = parseFloat(a + b);
            this.$calcAmount.text(a.format(0, ".", ".") + " ");
            this.$calcInterest.text(b.format(0, ".", ".") + " ");
            this.$calcTotal.text(e.format(0, ".", ".") + " ");
            return this.$forTerms.text(c)
        };
        b.prototype._amountScale = function(a, b) {
            return _.reduce(a, function(a, c) {
                return Math.abs(c - b) < Math.abs(a - b) ? c : a
            })
        };
        b.prototype._termScale = function(a, b) {
            return _.reduce(a, function(a, c) {
                return Math.abs(c - b) < Math.abs(a - b) ? c : a
            })
        };
        return b
    }()
}).call(this);
(function() {
    namespace("Lib");
    Lib.DatePicker = function() {
        return function(b) {
            var d, g, c;
            this.$container = b;
            c = this.$container.find("@datePicker");
            b = 0;
            for (g = c.length; b < g; b++) d = c[b], $(d), $(d).inputmask("99.99.9999")
        }
    }()
}).call(this);
(function() {
    var b = function(b, g) {
        return function() {
            return b.apply(g, arguments)
        }
    };
    namespace("Lib");
    Lib.FloatLabel = function() {
        return function(b) {
            var g, c, a;
            this.$container = b;
            a = this.$container.find("@floatInput");
            g = 0;
            for (c = a.length; g < c; g++) b = a[g], new Lib.FloatLabelInput($(b))
        }
    }();
    Lib.FloatLabelInput = function() {
        function d(d) {
            var c;
            this.$group = d;
            this._activate = b(this._activate, this);
            c = this;
            this.$input = this.$group.find("input, select");
            0 < this.$input.length && (this._activate(this.$input), this.$input.off("focus").on("focus",
                function() {
                    c.$group.addClass("form_hero__group-focused");
                    return c._activate($(this))
                }), this.$input.off("blur").on("blur", function() {
                c.$group.removeClass("form_hero__group-focused");
                return c._activate($(this))
            }))
        }
        d.prototype._activate = function(b) {
            return 0 < b.val().length ? this.$group.addClass("form_hero__group-active") : this.$group.removeClass("form_hero__group-active")
        };
        return d
    }()
}).call(this);
(function() {
    namespace("Lib");
    Lib.ImageUploader = function() {
        function b(b) {
            var g;
            this.options = null != b ? b : {};
            console.log("imu");
            g = this;
            this.files = [];
            this.processed = [];
            this.getInput().addEventListener("change", function(b) {
                "undefined" !== typeof NProgress && null !== NProgress && NProgress.start();
                g.files = _.filter(this.files, function(a) {
                    return !!a.type.match(/image.*/)
                });
                return g.process(this.files)
            })
        }
        b.upload = function(b) {
            null == b && (b = {});
            return $.ajax({
                type: b.type || "POST",
                dataType: b.dataType || "html",
                url: b.url,
                contentType: !1,
                processData: !1,
                cache: !1,
                data: b.data
            })
        };
        b.filenameForBlob = function(b) {
            return String.random() + "." + b.type.split("/")[1]
        };
        b.prototype.process = function(b) {
            var g;
            g = this;
            return _.map(b, function(b) {
                var a;
                return window.FileReader ? (a = new FileReader, a.onload = function(d) {
                    var e;
                    e = new Image;
                    e.src = a.result;
                    return e.onload = function(a) {
                        var d, f, q;
                        q = e.width;
                        a = e.height;
                        2880 < q && (a *= 2880 / q, q = 2880, d = document.createElement("canvas"), d.width = q, d.height = a, f = d.getContext("2d"), f.clearRect(0, 0, d.width, d.height), f.drawImage(e,
                            0, 0, d.width, d.height), d = d.toDataURL(b.type), b = g.convertToBlob(d));
                        return g.addProcessed(b, d || e.src, q, a)
                    }
                }, a.readAsDataURL(b)) : g.addProcessed(b)
            })
        };
        b.prototype.addProcessed = function(b, g, c, a) {
            this.processed.push(b);
            this.trigger("processed", b, g, c, a);
            if (this.processed.length === this.files.length) return this.trigger("processDone", this.processed)
        };
        b.prototype.start = function() {
            return this.getInput().setAttribute("value", null)
        };
        b.prototype.convertToBlob = function(b) {
            var g, c, a;
            g = 0 <= b.split(",")[0].indexOf("base64") ?
                atob(b.split(",")[1]) : unescape(b.split(",")[1]);
            a = b.split(",")[0].split(":")[1].split(";")[0];
            c = new Uint8Array(g.length);
            for (b = 0; b < g.length;) c[b] = g.charCodeAt(b), b++;
            return new Blob([c], {
                type: a
            })
        };
        b.prototype.getInput = function() {
            var b;
            return null != this.input ? this.input : this.input = null != this.options.input ? this.options.input.get(0) : (b = document.createElement("input"), b.setAttribute("type", "file"), b.setAttribute("accept", "image/jpeg,image/png,image/gif"), !0 === this.options.multiple ? b.setAttribute("multiple", !0) : void 0, b)
        };
        return b
    }();
    extend(Lib.ImageUploader, Lib.Events)
}).call(this);
(function() {
    namespace("Lib");
    Lib.Iovation = function() {
        function b(b) {
            this.$path = b || "/application/iovation/update";
            this.blackbox_third = this.blackbox_first = ""
        }
        b.prototype.send_bb = function() {
            try {
                return this.blackbox_third = ioGetBlackbox().blackbox
            } catch (b) {
                return !1
            }
        };
        b.prototype.send_bb_fp = function() {
            try {
                return this.blackbox_first = fpGetBlackbox().blackbox
            } catch (b) {
                return !1
            }
        };
        b.prototype.get_begin_black_box = function() {
            this.send_bb();
            this.send_bb_fp();
            return $.ajax({
                type: "PATCH",
                url: this.$path,
                data: {
                    start_firt_bb: this.blackbox_first,
                    start_third_bb: this.blackbox_third
                }
            })
        };
        return b
    }()
}).call(this);
(function() {
    namespace("Lib");
    Lib.JqueryValidation = function() {
        return function(b) {
            this.$container = b;
            "vi" === gon.locale && $.extend($.validator.messages, {
                required: "H\u00e3y nh\u1eadp",
                remote: "H\u00e3y s\u1eeda cho \u0111\u00fang",
                email: "H\u00e3y nh\u1eadp email",
                url: "H\u00e3y nh\u1eadp URL",
                date: "H\u00e3y nh\u1eadp ng\u00e0y",
                dateISO: "H\u00e3y nh\u1eadp ng\u00e0y (ISO)",
                number: "H\u00e3y nh\u1eadp s\u1ed1",
                digits: "H\u00e3y nh\u1eadp ch\u1eef s\u1ed1",
                integer: "H\u00e3y nh\u1eadp ch\u1eef s\u1ed1",
                creditcard: "H\u00e3y nh\u1eadp s\u1ed1 th\u1ebb t\u00edn d\u1ee5ng",
                equalTo: "H\u00e3y nh\u1eadp th\u00eam l\u1ea7n n\u1eefa",
                extension: "Ph\u1ea7n m\u1edf r\u1ed9ng kh\u00f4ng \u0111\u00fang",
                maxlength: $.validator.format("H\u00e3y nh\u1eadp t\u1eeb {0} k\u00ed t\u1ef1 tr\u1edf xu\u1ed1ng"),
                minlength: $.validator.format("H\u00e3y nh\u1eadp t\u1eeb {0} k\u00ed t\u1ef1 tr\u1edf l\u00ean"),
                rangelength: $.validator.format("H\u00e3y nh\u1eadp t\u1eeb {0} \u0111\u1ebfn {1} k\u00ed t\u1ef1"),
                range: $.validator.format("H\u00e3y nh\u1eadp t\u1eeb {0} \u0111\u1ebfn {1}"),
                max: $.validator.format("H\u00e3y nh\u1eadp t\u1eeb {0} tr\u1edf xu\u1ed1ng"),
                min: $.validator.format("H\u00e3y nh\u1eadp t\u1eeb {1} tr\u1edf l\u00ean"),
                lettersonly: "B\u1eaft bu\u1ed9c ph\u1ea3i nh\u1eadp",
                vidate: "Th\u00f4ng tin nh\u1eadp kh\u00f4ng h\u1ee3p l\u1ec7",
                minWords: "B\u1eaft bu\u1ed9c ph\u1ea3i nh\u1eadp",
                exactlength: "Ph\u1ea3i c\u00f3 {0} ho\u1eb7c {1} s\u1ed1",
                min_length_salary: "Please enter at least 7 characters."
            });
            "en" === gon.locale && $.extend($.validator.messages, {
                vidate: "Please specify the date in DD.MM.YYYY format",
                lettersonly: "Letters only please",
                minWords: $.validator.format("Please enter at least {0} words"),
                exactlength: $.validator.format("Should contain {0} or {1} numbers"),
                min_length_salary: "Please enter at least 7 characters."
            });
            jQuery.validator.setDefaults({
                errorClass: "form__error",
                errorElement: "span",
                errorPlacement: function(b, g) {
                    $(g);
                    return "radio" === $(g).attr("type") ? b.appendTo(g.closest(".radio").parent()) : b.appendTo(g.parent())
                },
                highlight: function(b, g, c) {
                    $(b).closest(".form__group").addClass("form__group-errored");
                    return $(b).siblings(".form__error").remove()
                },
                unhighlight: function(b, g, c) {
                    $(b).closest(".form__group").removeClass("form__group-errored");
                    return $(b).siblings(".form__error").remove()
                }
            });
            $.validator.addMethod("phone", function(b, g) {
                b = b.replace(/\s+|_+|\+/g, "");
                return this.optional(g) || 9 < b.length
            });
            $.validator.addMethod("lettersonly", function(b, g) {
                return this.optional(g) || /^[a-zA-Z\u00c0\u00c1\u00c2\u00c3\u00c8\u00c9\u00ca\u00cc\u00cd\u00d2\u00d3\u00d4\u00d5\u00d9\u00da\u0102\u0110\u0128\u0168\u01a0\u00e0\u00e1\u00e2\u00e3\u00e8\u00e9\u00eae\u0323\u0302\u1ebf\u00ec\u00ed\u00f2\u00f3\u00f4\u00f5\u00f9\u00fa\u0103\u0111\u0129\u0169\u01a1\u01af\u0102\u1ea0\u1ea2\u1ea4\u1ea6\u1ea8\u1eaa\u1eac\u1eae\u1eb0\u1eb2\u1eb4\u1eb6\u1eb8\u1eba\u1ebc\u1ec0\u1ec0\u1ec2\u1ebe\u01b0\u0103\u1ea1a\u0302\u0300\u1ea3\u1ea5\u1ea7\u1ea9\u1eab\u1ead\u1eaf\u1eb1\u1eb3\u1eb5\u1eb7\u1eb9\u1ebb\u1ebd\u1ec1\u1ec1\u1ec3\u1ec4\u1ec6\u1ec8\u1eca\u1ecc\u1ece\u1ed0\u1ed2\u1ed4\u1ed6\u1ed8\u1eda\u1edc\u1ede\u1ee0\u1ee2\u1ee4\u1ee6\u1ee8\u1eea\u1ec5\u1ec7\u1ec9\u1ecb\u1ecd\u1ecf\u1ed1\u1ed3\u1ed5\u1ed7\u1ed9\u1edb\u1edd\u1edf\u1ee1\u1ee3\u1ee5\u1ee7\u1ee9\u1eeb\u1eec\u1eee\u1ef0\u1ef2\u1ef4\u00dd\u1ef6\u1ef8\u1eed\u1eef\u1ef1y\u0301\u00fd\u1ef3\u1ef5\u1ef7\u1ef9AA\u0301A\u0309A\u0300A\u0303A\u0323\u00c2\u00c2\u0301\u00c2\u0309\u00c2\u0300\u00c2\u0303\u00c2\u0323\u0102\u0102\u0301\u0102\u0309\u0102\u0300\u0102\u0303\u0102\u0323OO\u0301O\u0309O\u0300O\u0303O\u0323\u00d4\u00d4\u0301\u00d4\u0309\u00d4\u0300\u00d4\u0303\u00d4\u0323\u01a0\u01a0\u0301\u01a0\u0309\u01a0\u0300\u01a0\u0303\u01a0\u0323EE\u0301E\u0309E\u0300E\u0303E\u0323\u00ca\u00ca\u0301\u00ca\u0309\u00ca\u0300\u00ca\u0303\u00ca\u0323UU\u0301U\u0309U\u0300U\u0303U\u0323\u01af\u01af\u0301\u01af\u0309\u01af\u0300\u01af\u0303\u01af\u0323II\u0301I\u0309I\u0300I\u0303I\u0323\u0110aa\u0301a\u0309a\u0300a\u0303a\u0323\u00e2\u00e2\u0301\u00e2\u0309\u00e2\u0300\u00e2\u0303\u00e2\u0323\u0103\u0103\u0301\u0103\u0309\u0103\u0300\u0103\u0303\u0103\u0323oo\u0301o\u0309o\u0300o\u0303o\u0323\u00f4\u00f4\u0301\u00f4\u0309\u00f4\u0300\u00f4\u0303\u00f4\u0323\u01a1\u01a1\u0301\u01a1\u0309\u01a1\u0300\u01a1\u0303\u01a1\u0323ee\u0301e\u0309e\u0300e\u0303e\u0323\u00ea\u00ea\u0301\u00ea\u0309\u00ea\u0300\u00ea\u0303\u00ea\u0323uu\u0301u\u0309u\u0300u\u0303u\u0323\u01b0\u01b0\u0301\u01b0\u0309\u01b0\u0300\u01b0\u0303\u01b0\u0323iii\u0309i\u0300i\u0303i\u0323\u0111\s]*$/.test(b)
            });
            $.validator.addMethod("minWords", function(b, g, c) {
                return this.optional(g) || b.split(/[\s\.\?]+/).length >= c
            });
            $.validator.addMethod("vidate", function(b, g) {
                return this.optional(g) || b.match(/^(0[1-9]|[12][0-9]|3[01])[\/|.](0[1-9]|1[012])[\/|.](19\d\d|2\d\d\d)$/)
            });
            $.validator.addMethod("exactlength", function(b, g, c) {
                return this.optional(g) || /^[01223456789\s]*$/.test(b) && c.includes(b.replace(/\D+/g, "").length)
            });
            $.validator.addMethod("min_length_salary", function(b, g, c) {
                return 7 <= b.replace(/\D/g, "").length
            });
            $.validator.addMethod("sameNumbers", function(b, g) {
                var c, a, f, e, p;
                e = b.replace(/\D+/g, "");
                f = !0;
                a = c = 0;
                for (p = e.length - 4; 0 <= p ? c <= p : c >= p; a = 0 <= p ? ++c : --c) e[a] === e[a + 1] && e[a] === e[a + 2] && e[a] === e[a + 3] && e[a] === e[a + 4] && (f = !1);
                return f
            }, gon.translations["errors.messages.phoneShouldByValid"]);
            $.validator.addMethod("dontNumbersConsecutive", function(b, g) {
                var c, a, f, e, p;
                e = b.replace(/\D+/g, "");
                f = !0;
                if (6 <= e)
                    for (a = c = 0, p = e.length - 5; 0 <= p ? c <= p : c >= p; a = 0 <= p ? ++c : --c) "123456" === e.substr(a, 6) && (f = !1);
                return f
            }, gon.translations["errors.messages.phoneShouldByValid"]);
            $.validator.methods.email = function(b, g) {
                return this.optional(g) || /^[^@]+@[^@.]+\.[^@]+$/.test(b)
            }
        }
    }()
}).call(this);
(function(b) {
    var d = !1;
    "function" === typeof define && define.amd && (define(b), d = !0);
    "object" === typeof exports && (module.exports = b(), d = !0);
    if (!d) {
        var g = window.Cookies,
            c = window.Cookies = b();
        c.noConflict = function() {
            window.Cookies = g;
            return c
        }
    }
})(function() {
    function b() {
        for (var b = 0, c = {}; b < arguments.length; b++) {
            var a = arguments[b],
                d;
            for (d in a) c[d] = a[d]
        }
        return c
    }

    function d(g) {
        function c(a, d, e) {
            var p;
            if ("undefined" !== typeof document) {
                if (1 < arguments.length) {
                    e = b({
                        path: "/"
                    }, c.defaults, e);
                    if ("number" === typeof e.expires) {
                        var h =
                            new Date;
                        h.setMilliseconds(h.getMilliseconds() + 864E5 * e.expires);
                        e.expires = h
                    }
                    try {
                        p = JSON.stringify(d), /^[\{\[]/.test(p) && (d = p)
                    } catch (k) {}
                    d = g.write ? g.write(d, a) : encodeURIComponent(String(d)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                    a = encodeURIComponent(String(a));
                    a = a.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                    a = a.replace(/[\(\)]/g, escape);
                    return document.cookie = [a, "=", d, e.expires ? "; expires=" + e.expires.toUTCString() : "", e.path ? "; path=" + e.path :
                        "", e.domain ? "; domain=" + e.domain : "", e.secure ? "; secure" : ""
                    ].join("")
                }
                a || (p = {});
                for (var h = document.cookie ? document.cookie.split("; ") : [], q = /(%[0-9A-Z]{2})+/g, m = 0; m < h.length; m++) {
                    var t = h[m].split("="),
                        w = t.slice(1).join("=");
                    '"' === w.charAt(0) && (w = w.slice(1, -1));
                    try {
                        var v = t[0].replace(q, decodeURIComponent),
                            w = g.read ? g.read(w, v) : g(w, v) || w.replace(q, decodeURIComponent);
                        if (this.json) try {
                            w = JSON.parse(w)
                        } catch (u) {}
                        if (a === v) {
                            p = w;
                            break
                        }
                        a || (p[v] = w)
                    } catch (x) {}
                }
                return p
            }
        }
        c.set = c;
        c.get = function(a) {
            return c.call(c,
                a)
        };
        c.getJSON = function() {
            return c.apply({
                json: !0
            }, [].slice.call(arguments))
        };
        c.defaults = {};
        c.remove = function(a, d) {
            c(a, "", b(d, {
                expires: -1
            }))
        };
        c.withConverter = d;
        return c
    }
    return d(function() {})
});
(function() {
    namespace("Lib");
    Lib.OptionalFields = function() {
        return function(b) {
            var d;
            this.$container = b;
            d = this;
            $.each(this.$container.find("[data-if]"), function(b, c) {
                var a, f;
                a = $(c);
                f = d.$container.find(a.data("if"));
                f.on("change.dataIf", function(b) {
                    b = $(this);
                    b = b.is("[type=checkbox]") || b.is("[type=radio]") ? b.is(":checked") ? b.val() : "" : b.val();
                    return 0 !== intersect([String(b)], String(a.data("if-value")).split("|")).length ? (a.show(), a.find("input[data-disabled!=true], select[data-disabled!=true]").attr("disabled", !1)) : a.hide().find("input, select").attr("disabled", !0)
                });
                return f.is("[type=radio]") && 0 < f.filter(":checked").length ? f.filter(":checked").trigger("change.dataIf") : f.trigger("change.dataIf")
            })
        }
    }()
}).call(this);
(function() {
    namespace("Lib");
    Lib.PersonalAccountGA = function() {
        return function() {
            this.$lkMain = $("html").find("@lkMain");
            this.$bannerMain = $("html").find("@bannerMain");
            this.$takeMoneyMain = $("html").find("@takeMoneyMain");
            this.$loginMobileButton = $("html").find("@loginMobileButton");
            this.$lkMain.click(function() {
                "undefined" !== typeof dataLayer && null !== dataLayer && dataLayer.push({
                    event: "event",
                    eventCategory: "Login",
                    eventAction: "lk_main"
                })
            });
            this.$bannerMain.click(function() {
                "undefined" !== typeof dataLayer &&
                    null !== dataLayer && dataLayer.push({
                        event: "event",
                        eventCategory: "Login",
                        eventAction: "banner_main"
                    })
            });
            this.$takeMoneyMain.click(function() {
                "undefined" !== typeof dataLayer && null !== dataLayer && dataLayer.push({
                    event: "event",
                    eventCategory: "Login",
                    eventAction: "take_money_main"
                })
            });
            this.$loginMobileButton.click(function() {
                "undefined" !== typeof dataLayer && null !== dataLayer && dataLayer.push({
                    event: "event",
                    eventCategory: "mobile",
                    eventAction: "login_mobile_button"
                })
            })
        }
    }()
}).call(this);
(function() {
    namespace("Lib");
    Lib.PhoneConfirmation = function() {
        function b(b, g) {
            var c, a;
            this.$container = b;
            this.$containerSmsResult = g;
            a = this;
            this.$resendSmsLink = this.$container.find("@resendSmsLink");
            this.$resendSmsTimer = this.$container.find("@resendSmsTimer");
            this.$changePhone = $(document).find("@minshiOk");
            this.$phoneMobile = this.$containerSmsResult.find("@phoneMobile");
            c = 0 < Cookies.get("smsTimerInterval");
            0 < this.$container.find("@mobilePhoneConfirmationCode").length && !c || a.startTimer(Cookies.get("smsTimerInterval"));
            a.$resendSmsLink.on("click", function(b) {
                b.preventDefault();
                return $.ajax({
                    type: "PATCH",
                    url: Routes.application_sms_update_path()
                }).done(function(b) {
                    a.$resendSmsTimer.focus();
                    a.getSmsStatus(a);
                    return a.startTimer(150)
                }).error(function(a) {})
            })
        }
        b.prototype.startTimer = function(b) {
            var g, c, a;
            c = this;
            g = b;
            b = Math.floor(g / 60);
            this.$resendSmsTimer.text(gon.translations.resendCode + " " + b + " : " + (g - 60 * b));
            this.$resendSmsTimer.show();
            this.$resendSmsLink.hide();
            this.$changePhone.addClass("hidden");
            return a = setInterval(function() {
                var b;
                g -= 1;
                b = Math.floor(g / 60);
                c.$resendSmsTimer.text(gon.translations.resendCode + " " + b + " : " + (g - 60 * b));
                Cookies.set("smsTimerInterval", g);
                0 === g && (clearInterval(a), c.$resendSmsTimer.hide(), c.$resendSmsTimer.empty(), c.$resendSmsLink.show(), c.$changePhone.removeClass("hidden"))
            }, 1E3)
        };
        b.prototype.getSmsStatus = function(b) {
            return setInterval(function() {
                $.ajax({
                    url: Routes.application_sms_check_status_path(),
                    type: "POST"
                }).done(function(g) {
                    return b.setSmsStatus(b, g.success)
                }).error(function(b) {})
            }, 1E4)
        };
        b.prototype.setSmsStatus =
            function(b, g) {
                if (b.$containerSmsResult && (b.$containerSmsResult.removeClass("error").find(".form-group").removeClass("has-error has-feedback"), !g)) return b.$containerSmsResult.addClass("error").find(".form-group").addClass("has-error has-feedback")
            };
        return b
    }()
}).call(this);
(function I() {
    (function() {
        String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        })
    })();
    var d = window || this,
        g = d.io_global_object_name || "IGLOO",
        c = d[g] = d[g] || {},
        a = c.fp = c.fp || {};
    a.staticMain = I;
    a.wa = (new Date).getTime();
    a.xa = 0;
    var f = document,
        e = navigator;
    a.I = "4.1.6";
    a.c = void 0;
    a.s = -1;
    a.last_error = d.fp_last_error = "";
    a.l = {
        ea: !1,
        v: "",
        da: !0,
        ca: !0,
        M: [""],
        N: [""],
        ga: "",
        fa: "",
        ha: "",
        ja: "",
        ia: "",
        J: "/stm3.swf"
    };
    a.ea = "boolean" !== typeof d.io_install_flash ?
        a.l.ea : d.io_install_flash;
    a.da = "boolean" !== typeof d.io_enable_rip ? a.l.da : d.io_enable_rip;
    a.ca = "boolean" !== typeof d.io_enable_ftoken ? a.l.ca : d.io_enable_ftoken;
    a.v = d.io_flash_needs_update_handler || a.l.v;
    a.M = d.io_flash_blacklist || a.l.M;
    a.N = d.io_flash_whitelist || a.l.N;
    a.ga = d.io_min_flash_in_firefox_version || a.l.ga;
    a.fa = d.io_min_flash_in_firefox_linux_version || a.l.fa;
    a.ha = parseFloat(d.io_min_flash_version || a.l.ha);
    a.ja = d.io_submit_form_id || a.l.ja;
    a.ia = d.io_submit_element_id || a.l.ia;
    a.J = d.fp_flnm || a.l.J;
    "/" !== a.J[0] && (a.J = "/" + a.J);
    a.Xa = void 0;
    a.g = {
        o: function(a, c) {
            var d = "",
                e;
            a = a.toString();
            for (e = c - a.length; d.length < e;) d += "0";
            return d + a
        },
        Ka: function(c) {
            return c.getUTCFullYear() + "/" + a.g.o((c.getUTCMonth() + 1).toString(), 2) + "/" + a.g.o(c.getUTCDate().toString(), 2) + " " + a.g.o(c.getUTCHours().toString(), 2) + ":" + a.g.o(c.getUTCMinutes().toString(), 2) + ":" + a.g.o(c.getUTCSeconds().toString(), 2)
        },
        W: function(c, d) {
            var e = c.toString(16);
            return d ? a.g.o(e, d) : e
        },
        Sa: function(a) {
            var c = "",
                d, e, f, g = a.length;
            for (d = 0; d < g; d++)
                if (e =
                    a.charCodeAt(d), !(56320 <= e && 57344 > e)) {
                    if (55296 <= e && 56320 > e) {
                        if (d + 1 >= g) continue;
                        f = a.charCodeAt(++d);
                        if (56320 > f || 56832 <= e) continue;
                        e = (e - 55296 << 10) + (e - 56320) + 65536
                    }
                    c = 128 > e ? c + String.fromCharCode(e) : 2048 > e ? c + String.fromCharCode(192 + (e >> 6), 128 + (e & 63)) : 65536 > e ? c + String.fromCharCode(224 + (e >> 12), 128 + (e >> 6 & 63), 128 + (e & 63)) : c + String.fromCharCode(240 + (e >> 18), 128 + (e >> 12 & 63), 128 + (e >> 6 & 63), 128 + (e & 63))
                }
            return c
        },
        Ya: function(c) {
            var e = "",
                f, g, p, w;
            if ("function" === typeof d.encodeURIComponent) e = encodeURIComponent(c);
            else {
                c =
                    a.g.Sa(c);
                e = c.length;
                w = "";
                p = new RegExp(/[a-zA-Z0-9-_.!~*'()]/);
                for (f = 0; f < e; f++) g = c.charAt(f), w += -1 === p.test(g) ? "%" + a.g.W(g.charCodeAt(0)) : g;
                e = w
            }
            return e
        }
    };
    a.f = function(c, e, f) {
        var g = "",
            p = "",
            w = "",
            v = "",
            u = "",
            x = "",
            n = "";
        c = c ? c.toString() + " " : "";
        e && (g = e.name ? "[ name: " + e.name + " ] " : "", p = e.Fa ? "[ errorObj: " + e.Fa + " ] " : "", w = e.description ? "[ description: " + e.description + " ] " : "", v = e.message ? "[ message: " + e.message + " ] " : "", u = e.lineNumber ? "[ line: " + e.lineNumber + " ] " : "", x = e.fileName ? "[ file: " + e.fileName + " ] " :
            "");
        n = "fp " + c + g + p + w + v + u + x;
        a.last_error = d.fp_last_error = n;
        f && a.trace(n.toString());
        return n.toString().slice(0, 400)
    };
    a.b = {
        w: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(c) {
            var e, f, g, p, w, v, u, x, n = "";
            if (d.btoa) n = btoa(c);
            else
                for (x = c.length, e = 0; e < x; e += 3) f = c.charCodeAt(e), g = c.charCodeAt(e + 1), p = c.charCodeAt(e + 2), w = f >> 2, f = (f & 3) << 4 | g >> 4, v = (g & 15) << 2 | p >> 6, u = p & 63, isNaN(g) ? v = u = 64 : isNaN(p) && (u = 64), n += a.b.w.charAt(w) + a.b.w.charAt(f) + a.b.w.charAt(v) + a.b.w.charAt(u);
            return n
        },
        __if_dec: function(c) {
            var e = "",
                f = /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/,
                g = 0,
                p, w, v, u, x, n, D, s;
            if (d.atob && f.test(c)) e = d.atob(c);
            else try {
                for (n = D = s = w = v = u = x = e = "", p = c.length; g < p;) w = a.b.w.indexOf(c.charAt(g++)), v = a.b.w.indexOf(c.charAt(g++)), u = a.b.w.indexOf(c.charAt(g++)), x = a.b.w.indexOf(c.charAt(g++)), n = w << 2 | v >> 4, D = (v & 15) << 4 | u >> 2, s = (u & 3) << 6 | x, e += String.fromCharCode(n), 64 !== u && (e += String.fromCharCode(D)), 64 !== x && (e += String.fromCharCode(s)), w = v = u = x = n = D = s = ""
            } catch (r) {
                a.f("", r, !0), e = ""
            }
            return e
        }
    };
    a.trace = function(c) {
        if ("function" === typeof d.io_trace_handler) try {
            var e = new Date;
            d.io_trace_handler(a.g.o(e.getHours(), 2) + ":" + a.g.o(e.getMinutes(), 2) + ":" + a.g.o(e.getSeconds(), 2) + "." + a.g.o(e.getMilliseconds(), 3) + " fp_" + c)
        } catch (f) {
            a.f("trace: ", f, !1)
        }
    };
    "function" === typeof d.io_trace_handler && a.trace(a.b.__if_dec("KioqOiBCZWdpbm5pbmcgZXhlY3V0aW9u"));
    a.U = function() {
        if (a.wa) return a.xa = parseInt((new Date).getTime() - a.wa), a.a.add("JIFFY", a.xa.toString()), !0
    };
    a.T = {
        getElementById: function(a) {
            var c,
                d, e, g;
            if (f.getElementById) c = f.getElementById(a);
            else if (f.all && f.getElementsByName)
                for (d = f.getElementsByName(a), e = d.length, g = 0; g < e; g++) d[g].id && d[g].id === a && (c = d[g]);
            else a ? "object" === typeof a && a.tagName && (c = a) : c = void 0;
            return c
        }
    };
    (function() {
        try {
            var c = a.T.getElementById(d.fp_bbout_element_id),
                e = a.T.getElementById(a.ja),
                f = a.T.getElementById(a.ia),
                g = c && c.form || e || f && f.form;
            g && (g.addEventListener ? g.addEventListener("submit", a.U, !1) : g.attachEvent && g.attachEvent("onsubmit", a.U))
        } catch (p) {
            a.f("", p, !0)
        }
    })();
    a.X = function(a) {
        var c = Object.prototype.toString.call(a),
            d = /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/,
            e = !0;
        !a || 32 > a.length ? e = !1 : "[object String]" !== c ? e = !1 : d.test(a) || (e = !1);
        return e
    };
    a.aa = function() {
        var c;
        a.c && (c = a.c._token());
        return c
    };
    a.Ta = function(c) {
        d.fp_bbout_element_id ? a.T.getElementById(d.fp_bbout_element_id).value = c : a.f("fp_bbout_element_id is not defined", !0)
    };
    a.H = {
        ma: function(a) {
            if (!a) return "";
            a += "";
            var c = a.length,
                d = "",
                e = 0,
                f = 0,
                g, p, u;
            for (g = 0; g < c; g++) p = a.charCodeAt(g),
                128 > p ? f++ : u = 127 < p && 2048 > p ? String.fromCharCode(p >> 6 | 192) + String.fromCharCode(p & 63 | 128) : String.fromCharCode(p >> 12 | 224) + String.fromCharCode(p >> 6 & 63 | 128) + String.fromCharCode(p & 63 | 128), u && (f > e && (d += a.slice(e, f)), d += u, e = f = g + 1);
            f > e && (d += a.slice(e, c));
            return d
        },
        Ra: function(c) {
            function d(a) {
                var c = "",
                    e, f;
                for (e = 7; 0 <= e; e--) f = a >>> 4 * e & 15, c += f.toString(16);
                return c
            }

            function e(a, c) {
                return a << c | a >>> 32 - c
            }
            c = a.H.ma(c);
            var f, g, p = Array(80),
                v = 1732584193,
                u = 4023233417,
                x = 2562383102,
                n = 271733878,
                D = 3285377520,
                s, r, y, E, K;
            s = c.length;
            var z = [],
                C;
            for (f = 0; f < s - 3; f += 4) g = c.charCodeAt(f) << 24 | c.charCodeAt(f + 1) << 16 | c.charCodeAt(f + 2) << 8 | c.charCodeAt(f + 3), z.push(g);
            switch (s % 4) {
                case 0:
                    f = 2147483648;
                    break;
                case 1:
                    f = c.charCodeAt(s - 1) << 24 | 8388608;
                    break;
                case 2:
                    f = c.charCodeAt(s - 2) << 24 | c.charCodeAt(s - 1) << 16 | 32768;
                    break;
                case 3:
                    f = c.charCodeAt(s - 3) << 24 | c.charCodeAt(s - 2) << 16 | c.charCodeAt(s - 1) << 8 | 128
            }
            for (z.push(f); 14 !== z.length % 16;) z.push(0);
            z.push(s >>> 29);
            z.push(s << 3 & 4294967295);
            C = z.length;
            for (c = 0; c < C; c += 16) {
                for (f = 0; 16 > f; f++) p[f] = z[c + f];
                for (f = 16; 79 >=
                    f; f++) p[f] = e(p[f - 3] ^ p[f - 8] ^ p[f - 14] ^ p[f - 16], 1);
                g = v;
                s = u;
                r = x;
                y = n;
                E = D;
                for (f = 0; 19 >= f; f++) K = e(g, 5) + (s & r | ~s & y) + E + p[f] + 1518500249 & 4294967295, E = y, y = r, r = e(s, 30), s = g, g = K;
                for (f = 20; 39 >= f; f++) K = e(g, 5) + (s ^ r ^ y) + E + p[f] + 1859775393 & 4294967295, E = y, y = r, r = e(s, 30), s = g, g = K;
                for (f = 40; 59 >= f; f++) K = e(g, 5) + (s & r | s & y | r & y) + E + p[f] + 2400959708 & 4294967295, E = y, y = r, r = e(s, 30), s = g, g = K;
                for (f = 60; 79 >= f; f++) K = e(g, 5) + (s ^ r ^ y) + E + p[f] + 3395469782 & 4294967295, E = y, y = r, r = e(s, 30), s = g, g = K;
                v = v + g & 4294967295;
                u = u + s & 4294967295;
                x = x + r & 4294967295;
                n = n + y & 4294967295;
                D = D + E & 4294967295
            }
            K = d(v) + d(u) + d(x) + d(n) + d(D);
            return K.toLowerCase()
        },
        Ca: function(c, d) {
            a.trace(a.b.__if_dec("aW9jOiBiZWdpbm5pbmcgZW5jcnlwdGlvbg=="));
            var e = [16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752,
                    16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756
                ],
                f = [-2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32,
                    32768, -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344
                ],
                g = [520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240,
                    134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584
                ],
                p = [8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608,
                    8396801, 128, 8388608, 8192, 8396928
                ],
                v = [256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256,
                    1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080
                ],
                u = [536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216,
                    4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312
                ],
                x = [2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866,
                    69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154
                ],
                n = [268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600,
                    268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696
                ],
                D = a.H.Ba(c),
                s = 0,
                r = d.length,
                y = 0,
                E = [0, 32, 2],
                K, z, C, da, F, A, G, N, H, V = "",
                ga = "";
            try {
                for (d += "\x00\x00\x00\x00\x00\x00\x00\x00"; s < r;) {
                    A = d.charCodeAt(s++) << 24 ^ d.charCodeAt(s++) << 16 ^ d.charCodeAt(s++) << 8 ^ d.charCodeAt(s++);
                    G = d.charCodeAt(s++) << 24 ^ d.charCodeAt(s++) << 16 ^ d.charCodeAt(s++) << 8 ^ d.charCodeAt(s++);
                    C = (A >>> 4 ^ G) & 252645135;
                    G ^= C;
                    A ^= C << 4;
                    C = (A >>> 16 ^ G) & 65535;
                    G ^= C;
                    A ^= C << 16;
                    C = (G >>> 2 ^ A) & 858993459;
                    A ^= C;
                    G ^= C << 2;
                    C = (G >>> 8 ^ A) & 16711935;
                    A ^= C;
                    G ^= C << 8;
                    C = (A >>> 1 ^ G) & 1431655765;
                    G ^= C;
                    A ^= C << 1;
                    A = A << 1 | A >>> 31;
                    G = G << 1 | G >>> 31;
                    for (z = 0; 3 > z; z += 3) {
                        N = E[z + 1];
                        H = E[z + 2];
                        for (K = E[z]; K !== N; K += H) da = G ^ D[K], F = (G >>> 4 | G << 28) ^ D[K + 1], C = A, A = G, G = C ^ (f[da >>> 24 & 63] | p[da >>> 16 & 63] | u[da >>> 8 & 63] | n[da & 63] | e[F >>> 24 & 63] | g[F >>> 16 & 63] | v[F >>> 8 & 63] | x[F & 63]);
                        C = A;
                        A = G;
                        G = C
                    }
                    A = A >>> 1 | A << 31;
                    G = G >>> 1 | G << 31;
                    C = (A >>> 1 ^ G) & 1431655765;
                    G ^= C;
                    A ^= C << 1;
                    C = (G >>> 8 ^ A) & 16711935;
                    A ^= C;
                    G ^= C << 8;
                    C = (G >>> 2 ^ A) & 858993459;
                    A ^= C;
                    G ^= C << 2;
                    C = (A >>> 16 ^ G) & 65535;
                    G ^= C;
                    A ^= C << 16;
                    C = (A >>> 4 ^ G) & 252645135;
                    G ^= C;
                    A ^= C << 4;
                    ga += String.fromCharCode(A >>>
                        24, A >>> 16 & 255, A >>> 8 & 255, A & 255, G >>> 24, G >>> 16 & 255, G >>> 8 & 255, G & 255);
                    y += 8;
                    512 === y && (V += ga, ga = "", y = 0)
                }
            } catch (Z) {
                a.f("ioc: error while to encrypting", Z, !0)
            }
            a.trace(a.b.__if_dec("aW9jOiBlbmNyeXB0aW9uIGNvbXBsZXRl"));
            return V + ga
        },
        Ba: function(a) {
            var c = [0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960, 536936964],
                d = [0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697],
                e = [0, 8, 2048, 2056, 16777216,
                    16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272
                ],
                f = [0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992, 136454144],
                g = [0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256],
                p = [0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488],
                u = [0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744,
                    2, 268435458, 524290, 268959746
                ],
                x = [0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520, 537004032, 537069568],
                n = [0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434, 33816578],
                D = [0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488],
                s = [0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800],
                r = [0, 16777216, 512,
                    16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528, 85983744
                ],
                y = [0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128],
                E = [0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261],
                K = [32],
                z = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
                C, da, F, A = C = 0,
                G, N = a.charCodeAt(C++) << 24 | a.charCodeAt(C++) << 16 | a.charCodeAt(C++) << 8 | a.charCodeAt(C++),
                H = a.charCodeAt(C++) << 24 | a.charCodeAt(C++) << 16 | a.charCodeAt(C++) <<
                8 | a.charCodeAt(C++);
            F = (N >>> 4 ^ H) & 252645135;
            H ^= F;
            N ^= F << 4;
            F = (H >>> -16 ^ N) & 65535;
            N ^= F;
            H ^= F << -16;
            F = (N >>> 2 ^ H) & 858993459;
            H ^= F;
            N ^= F << 2;
            F = (H >>> -16 ^ N) & 65535;
            N ^= F;
            H ^= F << -16;
            F = (N >>> 1 ^ H) & 1431655765;
            H ^= F;
            N ^= F << 1;
            F = (H >>> 8 ^ N) & 16711935;
            N ^= F;
            H ^= F << 8;
            F = (N >>> 1 ^ H) & 1431655765;
            H ^= F;
            F = (N ^ F << 1) << 8 | H >>> 20 & 240;
            N = H << 24 | H << 8 & 16711680 | H >>> 8 & 65280 | H >>> 24 & 240;
            H = F;
            a = z.length;
            for (G = 0; G < a; G++) z[G] ? (N = N << 2 | N >>> 26, H = H << 2 | H >>> 26) : (N = N << 1 | N >>> 27, H = H << 1 | H >>> 27), N &= -15, H &= -15, C = c[N >>> 28] | d[N >>> 24 & 15] | e[N >>> 20 & 15] | f[N >>> 16 & 15] | g[N >>> 12 & 15] |
                p[N >>> 8 & 15] | u[N >>> 4 & 15], da = x[H >>> 28] | n[H >>> 24 & 15] | D[H >>> 20 & 15] | s[H >>> 16 & 15] | r[H >>> 12 & 15] | y[H >>> 8 & 15] | E[H >>> 4 & 15], F = (da >>> 16 ^ C) & 65535, K[A++] = C ^ F, K[A++] = da ^ F << 16;
            return K
        }
    };
    a.Y = function() {
        var c, d, e = a.G.length;
        for (c = 0; c < e; c++)
            if (d = a.F[a.G[c]], "object" === typeof d && !d.i) return !1;
        return !0
    };
    d.fpGetBlackbox = function() {
        a.a.D = "function";
        a.a.add("JINT", a.a.D);
        try {
            a.U()
        } catch (c) {
            a.f("", c, !0)
        }
        return {
            blackbox: a.a.la(),
            finished: a.Y()
        }
    };
    a.a = {
        ka: !1,
        sa: "",
        D: "",
        ba: "",
        C: {},
        R: 4E3,
        toString: function() {
            var c = 0,
                d = "",
                e;
            4E3 >
                a.a.R && (a.a.C.FFONTS = void 0);
            for (e in a.a.C) "string" === typeof a.a.C[e] && (0 >= a.a.R || d.length + e.length + a.a.C[e].length + 8 < 3 * a.a.R / 4 - 8) && (c++, d += a.g.W(e.length, 4) + e.toUpperCase() + a.g.W(a.a.C[e].length, 4) + a.a.C[e]);
            return a.g.W(c, 4) + d
        },
        la: function() {
            try {
                var c = "",
                    d, e;
                d = a.H.Ca(String.fromCharCode(124, 76, 69, 0, 99, 2, 200, 163), a.a.toString());
                e = "0400" + a.b.encode(d);
                0 >= a.a.R || e.length <= a.a.R ? (c = e, a.a.sa = e) : c = a.a.sa;
                return c
            } catch (f) {
                a.f("", f, !0)
            }
        },
        ra: function(a) {
            return a && "string" === typeof a && 0 < a.length
        },
        add: function(c,
            d) {
            a.a.ra(c) && a.a.ra(d) && (a.a.C[c] = a.H.ma(d))
        },
        append: function(c) {
            if ("string" === typeof c) {
                var d = 4,
                    e = 0,
                    f = Array(2),
                    g, p;
                for (p = c.length; d < p;) {
                    g = parseInt(c.substr(d, 4), 16);
                    if (isNaN(g) || 0 > g) break;
                    d += 4;
                    e++;
                    0 < g && (f[(e - 1) % 2] = c.substr(d, g), d += g);
                    0 === e % 2 && (a.a.add(f[0], f[1]), f[0] = f[1] = "")
                }
                a.a.update(!0)
            }
        },
        update: function(c) {
            var e = "",
                f = "";
            try {
                if (c || a.Y()) a.U(), "submitlogin" !== a.a.D && ("function" === typeof d.fp_bb_callback ? (a.a.D = "callback", e = a.a.la(), f = a.Y(), a.a.ba = d.fp_bb_callback) : (a.a.D = "form", e = a.a.la(), a.a.ba =
                    a.Ta)), a.a.add("JINT", a.a.D), a.a.ba(e, f), a.a.ka = !0;
                return !0
            } catch (g) {
                return a.f("io_bb.update", g, !0), !1
            }
        }
    };
    a.Oa = function(a) {
        this.i = this.j = this.m = !1;
        this.h = "";
        this.name = a;
        this.label = "io_webdb:" + a
    };
    a.Oa.prototype = {
        L: function() {
            a.trace(a.b.__if_dec("d2RwOiBXZWJEQiBjb2xsZWN0aW9uIHN0YXJ0aW5n"));
            var e = this.h,
                f;
            this.j = !0;
            try {
                d.openDatabase && !c.WDBLock && (c.WDBLock = !0, f = d.openDatabase(this.name, "1.0", "temp", 1024), f.transaction(function(c) {
                    a.A.create(c, e)
                }), f.transaction(function(c) {
                    a.A.Ma(c, e)
                }, a.A.$, function() {
                    a.trace(a.b.__if_dec("d2RwOiBXZWJEQiBkb25l"));
                    a.a.update(!0);
                    c.WDBLock = !1
                }))
            } catch (g) {
                f = void 0, a.a.add("WDBERROR", a.f("", g, !0)), a.trace(a.b.__if_dec("d2RwOiBXZWJEQiBjb2xsZWN0aW9uIGZhaWxlZA=="))
            }
            this.i = !0;
            this.h && (this.m = !0);
            a.a.update(!0);
            a.trace(a.b.__if_dec("d2RwOiBXZWJEQiBjb2xsZWN0aW9uIGNvbXBsZXRl"))
        }
    };
    a.A = {
        $: function(c, d) {
            try {
                var e = d ? d : c;
                a.a.add("WDBERROR", e.message ? e.message : e.toString() + e.code)
            } catch (f) {
                a.a.add("WDBERROR", a.f("MetaError: ", f, !0))
            }
        },
        va: function(c, d, e) {
            a.X(e) && c.executeSql("INSERT INTO tokens ( token ) VALUES ( ? )", [e],
                void 0, a.A.$)
        },
        Ma: function(c, d) {
            c.executeSql("SELECT * FROM tokens", [], function(c, e) {
                1 === a.s && (e.rows && 0 < e.rows.length ? a.a.add("WDBTOKEN", e.rows.item(0).token) : a.X(d) && a.A.va(c, e, d))
            }, a.A.$)
        },
        create: function(c, d) {
            c.executeSql("CREATE TABLE tokens ( token )", [], function(c, e) {
                a.A.va(c, e, d)
            })
        }
    };
    a.qa = function(a) {
        this.i = this.j = this.m = !1;
        this.name = a;
        this.h = "";
        this.label = "io_ls:" + a
    };
    a.qa.prototype = {
        L: function() {
            a.trace(a.b.__if_dec("bHNwOiBMb2NhbFN0b3JhZ2UgY29sbGVjdGlvbiBzdGFydGluZy4uLg=="));
            this.j = !0;
            try {
                if (d.localStorage) {
                    var c =
                        d.localStorage.getItem(this.name);
                    c ? a.s && (a.a.add("LSTOKEN", c), this.h = c) : a.X(this.h) && 1 === a.s && (d.localStorage.setItem(this.name, this.h), a.a.add("LSTOKEN", d.localStorage.getItem(this.name, this.h)))
                }
            } catch (e) {
                a.a.add("LSERROR", a.f("", e, !0)), a.trace(a.b.__if_dec("bHNwOiBMb2NhbFN0b3JhZ2UgY29sbGVjdGlvbiBmYWlsZWQuLi4="))
            }
            this.i = !0;
            this.h && a.c && (this.m = !0);
            a.a.update(!0);
            a.trace(a.b.__if_dec("bHNwOiBMb2NhbFN0b3JhZ2UgY29sbGVjdGlvbiBjb21wbGV0ZS4uLg=="))
        }
    };
    a._iov_fl_cb = function(c, d) {
        var e = a.F.io_fdp;
        e.i ||
            (e.i = d);
        d && e.V && (clearTimeout(e.V), e.V = void 0);
        "0000" !== c ? (a.trace(a.b.__if_dec("ZmRwOiBBZGRpbmcgYmIgZGF0YSBbIA==") + c + " ]"), a.a.append(c), a.trace(a.b.__if_dec("ZmRwOiBkYXRhIGNvbGxlY3RlZCA=") + d)) : (a.trace(a.b.__if_dec("ZmRwOiBVcGRhdGluZyBibGFja2JveCAtIG5vIGRhdGE=")), a.a.update(d));
        return !0
    };
    a._iov_fl_fn = function(c) {
        var d = c.split(";"),
            e = "",
            f, g;
        a.a.add("JFLEN", d.length.toString());
        a.a.add("JFSTRL", c.length.toString());
        a.a.add("FFHASH", a.H.Ra(c));
        for (c = 0; c < d.length; c++) d[c] && d[c] && " " !== d[c] || (d.splice(c,
            1), c--);
        for (c = 1; c < d.length; c++) f = 1 * Math.random() * c, f = Math.floor(f), f !== c && (g = d[c], d[c] = d[f], d[f] = g);
        for (c = 0; 15 > c; c++) e += d[c] + ";";
        a.a.add("FFONTS", a.H.ma(e))
    };
    a._iov_fl_get_value = function(c) {
        var d, e = "";
        d = a.F.io_fdp;
        "token" === c && a.s && a.ca ? e = d.h : "rip" === c && a.ua && (e = a.ua);
        return e
    };
    a.pa = function() {
        this.V = void 0
    };
    a.pa.prototype = {
        Ja: function() {
            if (e.plugins && (0 < e.plugins.length || e.plugins["Shockwave Flash"])) {
                if (e.plugins["Shockwave Flash 2.0"] || e.plugins["Shockwave Flash"]) {
                    var c = e.plugins["Shockwave Flash 2.0"] ?
                        "Shockwave Flash 2.0" : "Shockwave Flash",
                        f = e.plugins[c].version ? e.plugins[c].version : "",
                        g = "";
                    if (e.plugins[c] && e.plugins[c].description) var m = e.plugins[c].description.split(" "),
                        c = -1 < m[2].indexOf(",") ? "," : ".",
                        g = m[2].split(c),
                        m = "" !== m[3] ? m[3].split("r") : m[4].split("r"),
                        g = g[0] + c + g[1] + c + (0 < m[1] ? m[1] : 0);
                    return [g, f]
                }
            } else if (d.ActiveXObject) try {
                return [(new d.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").split(" ")[1], ""]
            } catch (p) {
                a.f("", p, !0)
            }
            return ["", ""]
        },
        verify: function(c) {
            var d =
                f.getElementById(c);
            d && d.clientHeight && (1 !== d.clientHeight || 1 !== d.clientWidth) ? (a.f("Script content area is hidden", void 0, !0), a.a.add("JSFBLK", d.clientHeight + "X" + d.clientWidth), this.i = !0, a.trace(a.b.__if_dec("ZmRwOiBGbGFzaEJsb2NrIHRyaWdnZXJlZA==")), a.a.update(!0)) : a.da && !this.i && (this.V = setTimeout(function() {
                a._iov_fl_cb("00010008FTIMEOUT00011", !0, c)
            }, 2E3))
        },
        ta: function() {
            return -1 === e.appName.indexOf("Microsoft") || "loaded" === f.readyState || "complete" === f.readyState ? !0 : !1
        },
        Ua: function(c) {
            var d, e, f; -
            1 < c.indexOf(",") && (c = c.replace(/,/g, "."));
            d = a.c._fvbl();
            a.M && a.M.constructor === Array && (d = d.concat(a.M));
            e = d.length;
            for (f = 0; f < e; f++)
                if (c === d[f]) return !0;
            return !1
        },
        Va: function(c) {
            var d, f = a.ga || a.c._kgfffv(),
                g = a.c._ffwl(),
                p, w; - 1 < c.indexOf(",") && (c = c.replace(/,/g, "."));
            a.N && a.N.constructor === Array && (g = g.concat(a.N));
            if (e.plugins)
                for (w = e.plugins.length, d = 0; d < w; d++)(p = e.plugins[d]) && "libflashplayer.so" === p.filename && (f = a.fa || a.c._kgffflv());
            p = c.split(".");
            f = f.split(".");
            w = p.length;
            for (d = 0; d < w; d++) p[d] =
                parseInt(p[d], 10);
            w = f.length;
            for (d = 0; d < w; d++) f[d] = parseInt(f[d], 10);
            if (p[0] > f[0] || p[0] === f[0] && (p[1] > f[1] || p[1] === f[1] && (p[2] > f[2] || p[2] === f[2] && void 0 !== p[3] && p[3] >= f[3]))) return !0;
            d = g.length;
            for (p = 0; p < d; p++)
                if (f = g[p], c === f) return !0;
            return !1
        },
        Qa: function(a, c) {
            var d = a.split("/").pop();
            this.i = this.j = this.m = !1;
            this.url = a;
            this.h = c;
            this.label = d.split(".")[0]
        },
        L: function() {
            var h, k, q, m, p;
            if (this.ta() && a.c) {
                if (-1 < a.last_error.indexOf(" not ready for Flash!") || -1 < d.fp_last_error.indexOf(" not ready for Flash!")) a.last_error =
                    d.fp_last_error = "";
                h = parseFloat(a.ha || a.c._kgfv());
                k = a.c._contentServerPath ? a.b.__if_dec(a.c.s_contentServerHost) + a.b.__if_dec(a.c.s_contentServerPath) : a.b.__if_dec(a.c._contentServerUrl());
                p = a.s ? a.c._token() : "";
                this.Qa(k + a.J, p);
                a.trace(a.b.__if_dec("ZmRwOiBzZXR0aW5nIHVwIEZ4IGhhbmRsZXI="));
                k = this.Ja();
                a.a.add("JFLVR", k[0]);
                a.a.add("JFFVER", k[1]);
                k[1] ? k = k[1] : k[0] ? k = k[0] : k = "";
                if (!k || parseFloat(k) < h || this.Ua(k) || -1 < e.userAgent.toLowerCase().indexOf("firefox") && !this.Va(k)) {
                    try {
                        a.v && (c.fnuhType = c.fnuhType ||
                            typeof a.v, a.ea && ("string" === c.fnuhType ? eval(a.v) : "function" === c.fnuhType && a.v(), a.v = void 0, d.io_flash_needs_update_handler && (d.io_flash_needs_update_handler = void 0)))
                    } catch (w) {
                        a.a.add("FERR0", a.f("io_flash_needs_update_handler", w, !0))
                    }
                    a.trace(a.b.__if_dec("ZmRwOiBGeCBoYW5kbGVyIGV4Y2x1ZGVk"));
                    this.j = this.i = this.m = !0;
                    a.a.update(!0)
                } else try {
                    a.a.update(!0), a.trace(a.b.__if_dec("ZmRwOiBQdWxsaW5nIG9iamVjdCA=") + this.url), q = f.createElement("span"), f.body.appendChild(q), m = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1" id="' +
                        this.label + '" name="' + this.label + '" align="right">', m += '<param name="allowScriptAccess" value="always" />', m += '<param name="movie" value="' + this.url + '" />', m += '<param name="swLiveConnect" value="true" />', m += '<param FlashVars="globalNamespace=' + g + '&partyNamespace=fp" value="true" />', m += '<embed src="' + this.url, m += '" width="1" height="1" name="' + this.label + '" FlashVars="globalNamespace=' + g + '&partyNamespace=fp" swliveconnect="true" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="https://get.adobe.com/flashplayer"',
                        q.innerHTML = m + "/></object>", q.style.position = "absolute", q.style.top = "-1000px", this.m = this.j = !0, this.verify(this.label)
                } catch (v) {
                    a.a.add("FERR1", a.f("fdp.collect", v, !0))
                }
            } else this.ta() ? a.c || a.f("Dyn not ready for Flash!", void 0, !0) : a.f("Env not ready for Flash!", void 0, !0)
        }
    };
    a.oa = function() {
        this.version = e.appVersion.trim();
        this.u = e.appName;
        this.B = void 0;
        this.attributes = [];
        this.Pa();
        "string" === typeof e.oscpu && 0 < e.oscpu.length ? this.K = e.oscpu : (this.K = e.platform, this.Ia());
        if (("string" !== typeof this.u ||
                1 > this.u.length) && this.B) {
            var a = this.B[0].split("/");
            a && (this.u = a[0], this.version = 1 < a.length ? a[1] : "")
        }
        this.Ha()
    };
    a.oa.prototype = {
        Pa: function() {
            var a = e.userAgent.match(/\([^\)]*\)/g),
                c = a.length,
                d, f, g, p, v;
            for (d = 0; a && d < c; d++)
                if (g = a[d].match(/[^;]*;?/g))
                    for (p = g.length, f = 0; g && f < p; f++) 0 < g[f].length && (v = g[f].replace(/[\(\);]/g, "").trim(), this.attributes.push(v));
            this.B = e.userAgent.match(/([\w]+\s )?[^\s\/]*\/[^\s]*/g)
        },
        Ha: function() {
            var a = "MSIE Maxthon Minimo AOL Browser iCab Lunascape".split(" "),
                c = a.length,
                d, e, f, g;
            if (this.attributes)
                for (g = this.attributes.length, d = 0; d < c; d++)
                    for (f = new RegExp("^.*" + a[d] + " ?[^0-9.]*", "g"), e = 0; e < g; e++)
                        if (0 <= this.attributes[e].toUpperCase().search(a[d].toUpperCase())) {
                            this.version = this.attributes[e].replace(f, "").replace(/\s+/g, "");
                            this.version === this.attributes[e] && (this.version = "");
                            0 < d ? (d = new RegExp(this.version + "$", "g"), this.u = this.attributes[e].replace(d, "")) : this.u = "Internet Explorer";
                            return
                        }
            c = "Classilla;Gnuzilla;SeaMonkey;Maxthon;K-Meleon;Flock;Epic;Camino;Firebird;Conkeror;Fennec;Skyfire;MicroB;GranParadiso;Opera Mini;Netscape;Sleipnir;Browser;IceCat;weasel;iCab;Opera;Minimo;Konqueror;Galeon;Lunascape;Thunderbird;BonEcho;Navigator;Epiphany;Minefield;Namoroka;Shiretoko;NetFront;IEMobile;Firefox;Edge;Chrome;Safari;Mobile;Mobile Safari;Trident".split(";");
            f = c.length;
            if (this.B)
                for (g = this.B.length, d = 0; d < f; d++)
                    for (e = 0; e < g; e++)
                        if (a = this.B[e].split("/"))
                            if (this.u || (this.u = a[0], this.version = a[1].replace(";$", "")), 0 <= a[0].toUpperCase().search(c[d].toUpperCase())) {
                                this.u = a[0];
                                this.version = a[1].replace(";$", "");
                                return
                            }
        },
        Ia: function() {
            var a = "Linux;Windows Phone;Android;BSD;Ubuntu;Irix;MIDP;Windows ;Mac OS X;Debian;Mac;Playstation;Wii;Xbox;Win9;BlackBerry;WinNT;iPhone;iPad;OS".split(";"),
                c = a.length,
                d, e, f, g;
            if (this.attributes)
                for (d = this.attributes.length, e = 0; e <
                    c; e++)
                    for (f = 0; f < d; f++)
                        if (0 <= this.attributes[f].toUpperCase().search(a[e].toUpperCase()) && (this.K = this.attributes[f], 0 < e)) return;
            a = "BlackBerry;MIDP;Debian;Ubuntu;BSD;AIX;Irix;Gentoo;Fedora;Red Hat;OS".split(";");
            c = a.length;
            if (d = this.B)
                for (g = d.length, e = 0; e < c; e++)
                    for (f = 0; f < g; f++)
                        if (0 <= d[f].toUpperCase().search(a[e].toUpperCase())) {
                            this.K = d[f].replace("/", " ").replace(/\s+/g, " ");
                            return
                        }
        }
    };
    a.Na = {
        label: "io_sdp",
        i: !1,
        j: !1,
        m: !0,
        La: function() {
            var a = new Date(2E3, 0, 1, 0, 0, 0, 0),
                c = a.toGMTString(),
                c = new Date(c.substring(0,
                    c.lastIndexOf(" ") - 1)),
                d = Math.round((c - a) / 6E4),
                a = new Date(2E3, 6, 1, 0, 0, 0, 0),
                c = a.toGMTString(),
                c = new Date(c.substring(0, c.lastIndexOf(" ") - 1)),
                a = Math.round((c - a) / 6E4);
            return d > a ? d : a
        },
        L: function() {
            this.j = !0;
            try {
                var g, k, p, m, t, w, v = "";
                f.URL ? a.a.add("INTLOC", f.URL.split("?")[0]) : f.documentURI && a.a.add("INTLOC", f.documentURI.split("?")[0]);
                a.a.add("STVER", a.I);
                a.a.add("BBNS", "FP");
                g = a.aa();
                a.X(g) && a.a.add("JSTOKEN", g);
                a.a.add("UAGT", e.userAgent.slice(0, 400));
                a.a.add("TZON", this.La().toString());
                a.a.add("JSTIME",
                    a.g.Ka(new Date));
                k = new a.oa;
                a.a.add("JBRNM", k.u);
                a.a.add("JBRVR", k.version);
                a.a.add("JBROS", k.K);
                a.a.add("JRES", screen.height + "x" + screen.width);
                a.a.add("APVER", e.appVersion);
                a.a.add("APNAM", e.appName);
                a.a.add("OSCPU", e.oscpu);
                a.a.add("NPLAT", e.platform);
                if (e.plugins) {
                    w = e.plugins.length;
                    for (t = 0; t < w; t++) v += e.plugins[t].filename + ";";
                    a.a.add("JPLGNS", v)
                }
                "function" === typeof d.io_trace_handler && a.a.add("TRACE", "1");
                a.a.add("BBOUT", d.fp_bbout_element_id);
                a.a.add("FHAT", c.fnuhType || typeof a.v);
                a.a.add("JREFRR",
                    f.referrer);
                a.a.add("JLANG", e.language || e.Aa);
                a.a.add("ULANG", e.Wa);
                a.a.add("BLANG", e.browserLanguage);
                a.a.add("NLANG", e.language);
                a.a.add("SLANG", e.Aa);
                a.a.add("JCOX", e.cookieEnabled ? "" : "1");
                a.a.add("JENBL", "1");
                p = k.attributes.join("; ");
                m = new RegExp("^.*" + k.K + ";? ?", "g");
                k.attributes && a.a.add("JBRCM", p.replace(m, ""))
            } catch (u) {
                a.a.add("EMSG", a.f("io_sdp:", u, !0))
            }
            this.i = !0
        }
    };
    a.io_ddp = {
        label: "io_ddp",
        i: !1,
        j: !1,
        m: !1,
        L: function() {
            var c, d = a.c,
                f = a.b.__if_dec;
            if (d) {
                this.j = !0;
                try {
                    d._gwHost && a.a.add("JSSRC",
                            f(d._gwHost())), d._ripServerUrl && (a.ua = f(a.c._ripServerUrl())), 1 === a.s ? (d._token && a.a.add("JSTOKEN", d._token()), d._uagt && (c = decodeURIComponent(d._uagt()), e.userAgent !== c && (a.a.add("JDIFF", "1"), a.a.add("SUAGT", c.slice(0, 400))))) : d._token ? a.a.add("FLRTD", d._token()) : a.a.add("FLRTD", "'_token' not present in io_dyn_obj"), d._jsversion && a.a.add("JSVER", d._jsversion()), d.s_svr_ver && a.a.add("SVRVR", d.s_svr_ver), d.s_sub_key && a.a.add("SKEY", d.s_sub_key), d._svr_time && a.a.add("SVRTIME", d._svr_time()), d._smbr &&
                        a.a.add("JSMBR", d._smbr()), d._hacclng && a.a.add("HACCLNG", decodeURIComponent(d._hacclng())), d._haccchr && a.a.add("HACCCHR", decodeURIComponent(d._haccchr())), d._xReqWith && a.a.add("XREQW", decodeURIComponent(d._xReqWith())), d.s_iggy && a.a.add("IGGY", d.s_iggy)
                } catch (g) {
                    a.a.add("EMSG", a.f("io_ddp: error handling dyn data", g, !0))
                }
                this.m = this.i = !0
            }
        },
        _if_ubb: function() {
            1 === a.s && (a.io_ddp && a.io_ddp._CTOKEN && a.a.add("CTOKEN", a.io_ddp._CTOKEN), a.a.update(!0))
        }
    };
    a.S = function(c, d) {
        a.G = a.G || [];
        a.F = a.F || {};
        "string" ===
        typeof c && "object" === typeof d && (a.G.push(c), a.F[c] = d)
    };
    try {
        a.S("io_sdp", a.Na), a.S("io_ddp", a.io_ddp), a.P = new a.qa("fp_temp"), a.S("io_ls", a.P), a.Ga = new a.pa, a.S("io_fdp", a.Ga), a.P.h = a.h = a.aa()
    } catch (p) {
        a.f("io_collect", p, !0)
    }
    d.submitOriginalForm = d.captureClick = function() {};
    a.O = a.O || void 0;
    a.Z = function() {
        var c = !0,
            d, e, f;
        try {
            for (a.a.ka || a.a.update(!0), f = a.G.length, d = 0; d < f; d++)
                if (e = a.F[a.G[d]], "object" === typeof e && (!e.j || e.j && !e.m)) try {
                    e.L()
                } catch (g) {
                    e.j = !1, a.f("domReadyHandler: unable to complete handler setup",
                        g, !0), c = !1
                }
        } catch (p) {
            a.f("domReadyHandler: error in dom ready handler", p, !0)
        }
        return c && a.a.ka
    };
    a.na = 0;
    a.Da = function() {
        var c = !1;
        f.readyState && "loaded" !== f.readyState && "complete" !== f.readyState && "interactive" !== f.readyState || (a.Z() || 30 < a.na ? (a.O && clearInterval(a.O), c = !0) : a.na++);
        return c
    };
    a.za = function(c) {
        var d = /^\d+\.\d+\.\d+$/;
        return d.test(a.I) && d.test(c) && a.I.split(".")[0] === c.split(".")[0] ? !0 : !1
    };
    a.Ea = d._io_ds_cb = function(c) {
        var d, e, g;
        a.c = c;
        a.c._script_is_cached && !1 === a.c._script_is_cached(a.b) ?
            a.s = 1 : a.s = 0;
        a.za(a.c._jsversion()) || a.f("ver mismatch: ( S:" + a.I + ", D:" + a.c._jsversion() + " )", void 0, !0);
        c = a.aa();
        a.P && !a.P.h && (a.P.h = c);
        a.ya && !a.ya.h && (a.ya.h = c);
        try {
            d = f.getElementsByTagName("head")[0], e = f.createElement("script"), e.setAttribute("language", "javascript"), e.setAttribute("type", "text/javascript"), a.c.s_contentServerHost && a.c.s_ctokenScriptPath ? (g = a.b.__if_dec(a.c.s_ctokenScriptPath), g = a.b.s_sub_key ? g.replace("latest", a.I + "/" + a.b.s_sub_key) : g.replace("latest", a.I), e.setAttribute("src",
                a.b.__if_dec(a.c.s_contentServerHost) + g)) : a.c._ctokenScriptUrl ? e.setAttribute("src", a.b.__if_dec(a.c._ctokenScriptUrl())) : a.f("unable to find logo.js url", void 0, !0), d.appendChild(e)
        } catch (p) {
            a.f("", p, !0)
        }
        a.Z()
    };
    a.O || (a.O = setInterval(a.Da, 100));
    f.addEventListener && f.addEventListener("DOMContentLoaded", a.Z, !1);
    (function() {
        a.api = {
            io_bb: {
                add: function(c, d) {
                    return a.a.add(c, d)
                }
            },
            ds_cb: function(c) {
                return a.Ea(c)
            },
            sic: function() {
                return 0 === a.s ? !0 : !1
            },
            logError: function(c, d, e) {
                return a.f(c, d, e)
            },
            last_error: a.fp_last_error
        }
    })()
})();
(function() {
    namespace("Lib");
    Lib.Uploader = function() {
        var b;
        b = function(b, g) {
            var c, a, f;
            c = $(b).closest("@fileinput");
            a = b.files[0];
            f = new FileReader;
            f.onloadend = function(a) {
                return function(a) {
                    c.addClass("uploaded");
                    c.find(".fileinput__hiddenisremove").val("0");
                    return g.attr("disabled", !1)
                }
            }(a);
            return f.readAsDataURL(a)
        };
        return function(d) {
            var g;
            this.$container = d;
            g = this.$container.find("@btnDisabled");
            if (window.File && window.FileList && window.FileReader) this.$container.on("change", "@fileinputFile", function(c) {
                return b(c.target,
                    g)
            });
            else alert("Your browser does not support File API")
        }
    }()
}).call(this);
(function() {
    namespace("Lib");
    Lib.WorkingIndustry = function() {
        function b(b) {
            var g, c;
            this.$container = b;
            c = this;
            g = this.$container.find("@socialStatus");
            c.toggleWorkingIndustry(c.$container, g);
            g.change(function() {
                return c.toggleWorkingIndustry(c.$container, g)
            })
        }
        b.prototype.toggleWorkingIndustry = function(b, g) {
            var c, a;
            this.$container = b;
            c = this.$container.find("@workingIndustry");
            a = this.$container.find("@workingInformation");
            g.find("option:selected").data("working-industry") ? c.show() : c.hide();
            return g.find("option:selected").data("working-information") ?
                a.show() : a.hide()
        };
        return b
    }()
}).call(this);
(function() {
    namespace("Views.Applications.Result");
    Views.Applications.Result.Success = function() {
        return function(b) {
            this.$container = b;
            "undefined" !== typeof dataLayer && null !== dataLayer && dataLayer.push({
                applicationStatus: "accepted"
            })
        }
    }()
}).call(this);
(function() {
    namespace("Views.Applications.Result");
    Views.Applications.Result.Unsuccess = function() {
        return function() {
            "undefined" !== typeof dataLayer && null !== dataLayer && dataLayer.push({
                applicationStatus: "rejected"
            })
        }
    }()
}).call(this);
(function() {
    namespace("Views.Applications.Steps");
    Views.Applications.Steps.Step1 = function() {
        return function(b) {
            var d;
            this.$container = b;
            d = this;
            "undefined" !== typeof dataLayer && null !== dataLayer && dataLayer.push({
                applicationStatus: "step_1"
            });
            this.$container.find("@documentNumber").inputmask({
                mask: "(999 999 999 [9])|(999 999 999 999)",
                greedy: !1
            });
            this.$container.validate({
                rules: {
                    "application[document_number]": {
                        required: !0,
                        exactlength: [9, 12]
                    },
                    "application[date_of_birth]": {
                        required: !0,
                        vidate: !0
                    },
                    "application[gender]": {
                        required: !0
                    }
                }
            });
            this.$container.on("submit", function(b) {
                return d.$container.data("submitted", "1")
            });
            $(window).on("beforeunload", function(b) {
                "1" !== d.$container.data("submitted") && $.ajax({
                    type: "PATCH",
                    url: "/application/steps/1",
                    data: d.$container.serialize()
                })
            })
        }
    }()
}).call(this);
(function() {
    namespace("Views.Applications.Steps");
    Views.Applications.Steps.Step2 = function() {
        return function(b) {
            var d;
            this.$container = b;
            "undefined" !== typeof dataLayer && null !== dataLayer && dataLayer.push({
                applicationStatus: "step_2"
            });
            d = new Lib.Iovation;
            setTimeout(function() {
                d.get_begin_black_box()
            }, 3E3);
            this.$livingCity = this.$container.find("@livingCity");
            this.$livingDistrict = this.$container.find("@livingDistrict");
            this.$livingVillage = this.$container.find("@livingVillage");
            new Lib.RegionSelect(this.$livingCity,
                this.$livingDistrict, this.$livingVillage);
            this.$container.validate({
                rules: {
                    "application[living_city_id]": {
                        required: !0
                    },
                    "application[living_district_id]": {
                        required: !0
                    },
                    "application[living_village_id]": {
                        required: !0
                    },
                    "application[living_street]": {
                        required: !0,
                        maxlength: 250
                    },
                    "application[living_house_number]": {
                        required: !0,
                        maxlength: 50
                    },
                    "application[living_apartment_number]": {
                        maxlength: 50
                    }
                }
            })
        }
    }()
}).call(this);
(function() {
    namespace("Views.Applications.Steps");
    Views.Applications.Steps.Step3 = function() {
        function b(b) {
            var g;
            this.$container = b;
            g = this;
            "undefined" !== typeof dataLayer && null !== dataLayer && dataLayer.push({
                applicationStatus: "step_3"
            });
            this.$companyPhone = this.$container.find("@companyPhone");
            this.$salary = this.$container.find("@currency");
            this.$timeFillingCompanyPhone = this.$container.find("@timeFillingCompanyPhone");
            this.$timeFillingIncome = this.$container.find("@timeFillingIncome");
            this.$timeCompanyPhone =
                Number(this.$timeFillingCompanyPhone.val()) || 0;
            this.$timeSalary = Number(this.$timeFillingIncome.val()) || 0;
            new Lib.WorkingIndustry(this.$container);
            new Lib.BankSelection(this.$container);
            this.$container.validate({
                rules: {
                    "application[social_status_id]": {
                        required: !0
                    },
                    "application[salary]": {
                        required: !0,
                        min_length_salary: [this.$container.find("@currency")]
                    },
                    "application[company_name]": {
                        required: !0,
                        maxlength: 250
                    },
                    "application[company_phone]": {
                        required: !0,
                        maxlength: 50,
                        sameNumbers: !0,
                        dontNumbersConsecutive: !0
                    },
                    "application[working_industry]": {
                        required: !0
                    },
                    "application[moneychose]": {
                        required: !0
                    },
                    "application[scb_province]": {
                        required: !0
                    },
                    "application[scb_city]": {
                        required: !0
                    },
                    "application[bank_id]": {
                        required: !0
                    },
                    "application[bank_location_id]": {
                        required: !0
                    },
                    "application[branch_name]": {
                        required: !0,
                        maxlength: 250
                    },
                    "application[bank_account_number]": {
                        required: !0,
                        maxlength: 50
                    }
                }
            });
            this.$companyPhone.focusin(function() {
                return g.startTimerCompanyPhone()
            });
            this.$companyPhone.focusout(function() {
                g.stopTimerCompanyPhone();
                return g._time_filling_company_phone()
            });
            this.$salary.focusin(function() {
                return g.startTimerSalary()
            });
            this.$salary.focusout(function() {
                g.stopTimerSalary();
                return g._time_filling_income()
            });
            $("@btn").on("click", function() {
                g.$companyPhone.trigger("focusout");
                return g.$salary.trigger("focusout")
            })
        }
        b.prototype.startTimerCompanyPhone = function() {
            var b, g;
            g = this;
            b = this.$timeCompanyPhone;
            return this.$timeintervalCompanyPhone = setInterval(function() {
                b += 1;
                return g.setTimeCompanyPhone(b)
            }, 1E3)
        };
        b.prototype.startTimerSalary =
            function() {
                var b, g;
                g = this;
                b = this.$timeSalary;
                return this.$timeintervalSalary = setInterval(function() {
                    b += 1;
                    return g.setTimeSalary(b)
                }, 1E3)
            };
        b.prototype.stopTimerSalary = function() {
            return clearInterval(this.$timeintervalSalary)
        };
        b.prototype.stopTimerCompanyPhone = function() {
            return clearInterval(this.$timeintervalCompanyPhone)
        };
        b.prototype.setTimeCompanyPhone = function(b) {
            return this.$timeCompanyPhone = b
        };
        b.prototype.setTimeSalary = function(b) {
            return this.$timeSalary = b
        };
        b.prototype._time_filling_company_phone =
            function() {
                return this.$timeFillingCompanyPhone.val(this.$timeCompanyPhone)
            };
        b.prototype._time_filling_income = function() {
            return this.$timeFillingIncome.val(this.$timeSalary)
        };
        return b
    }()
}).call(this);
(function() {
    namespace("Views.Applications.Steps");
    Views.Applications.Steps.Step4 = function() {
        function b(b) {
            var g, c;
            this.$container = b;
            c = this;
            "undefined" !== typeof dataLayer && null !== dataLayer && dataLayer.push({
                applicationStatus: "step_4"
            });
            this.$phoneConfirmation = this.$container.find("@phoneConfirmation");
            this.$checkSmsResult = this.$container.find("@checkSmsResult");
            this.$changePhone = this.$container.find("@minshiOk");
            this.$changePhone.removeClass("hidden");
            this.$PhoneConfirm = new Lib.PhoneConfirmation(this.$phoneConfirmation,
                this.$checkSmsResult);
            this.$vendorSmartfone = this.$container.find("@vendorSmartfone");
            this.$vendorNonSmartfone = this.$container.find("@vendorNonSmartfone");
            this.$collateralAssetModelInput = this.$container.find("@collateralAssetModelInput");
            this.$guarantorPhone = this.$container.find("@guarantorPhone");
            this.$timeFillingGuarantorPhone = this.$container.find("@timeFillingGuarantorPhone");
            this.$time = Number(this.$timeFillingGuarantorPhone.val()) || 0;
            g = this.$container.find("@phoneMobile");
            g.prop("disabled", !0);
            g.focusout(function() {
                var a;
                a = g.val().replace(/[^0-9]/g, "");
                if (10 <= a.length) return g.prop("disabled", !0), $.ajax({
                    url: Routes.application_sms_update_path(),
                    type: "PATCH",
                    data: {
                        mobilePhoneNumber: a
                    },
                    success: function(a, b, d) {
                        return c.$PhoneConfirm.startTimer(150)
                    }
                })
            });
            this.$changePhone.click(function() {
                g.prop("disabled", !1);
                g.focus();
                return c.$changePhone.addClass("hidden")
            });
            this.$container.validate({
                rules: {
                    "application[guarantor_fullname]": {
                        required: !0
                    },
                    "application[referee_type]": {
                        required: !0
                    },
                    "application[guarantor_phone]": {
                        required: !0,
                        sameNumbers: !0,
                        dontNumbersConsecutive: !0
                    },
                    "application[_mobile_phone_confirmation_code]": {
                        required: !0
                    },
                    "application[privacy_policy_acceptance]": {
                        required: !0
                    },
                    invalidHandler: function() {
                        return $("@phoneConfirmationBtn").addClass("has-error")
                    }
                }
            });
            this.$guarantorPhone.focusin(function() {
                return c.startTimer()
            });
            this.$guarantorPhone.focusout(function() {
                c.stopTimer();
                return c._time_filling_guarantor_phone()
            });
            $("@btn").on("click", function() {
                return c.$guarantorPhone.trigger("focusout")
            })
        }
        b.prototype.startTimer =
            function() {
                var b, g;
                g = this;
                b = this.$time;
                return this.$timeinterval = setInterval(function() {
                    b += 1;
                    return g.setTime(b)
                }, 1E3)
            };
        b.prototype.stopTimer = function() {
            return clearInterval(this.$timeinterval)
        };
        b.prototype.setTime = function(b) {
            return this.$time = b
        };
        b.prototype._time_filling_guarantor_phone = function() {
            return this.$timeFillingGuarantorPhone.val(this.$time)
        };
        return b
    }()
}).call(this);
(function() {
    namespace("Views.Clients.Application.Confirmation");
    Views.Clients.Application.Confirmation.Edit = function() {
        return function(b) {
            this.$container = b;
            "undefined" !== typeof dataLayer && null !== dataLayer && dataLayer.push({
                event: "event",
                eventCategory: "Otp",
                eventAction: "otp_sms_popup"
            });
            this.$container.find("@resendSmsLink");
            this.$PhoneConfirm = new Lib.Clients.PhoneConfirmation($("@phoneConfirmation"))
        }
    }()
}).call(this);
(function() {
    namespace("Views.Clients.Application.Disbursement");
    Views.Clients.Application.Disbursement.Edit = function() {
        return function(b) {
            this.$container = b;
            this.$scbProvince = this.$container.find("@scbProvinceField");
            this.$scbCity = this.$container.find("@scbCityField");
            new Lib.ScbSelect(this.$scbProvince, this.$scbCity);
            new Desktop.Lib.Select2(this.$container);
            this.$container.validate({
                rules: {
                    "application[bank_id]": {
                        required: !0
                    },
                    "application[bank_location_id]": {
                        required: !0
                    },
                    "application[branch_name]": {
                        required: !0
                    },
                    "application[bank_account_number]": {
                        required: !0
                    },
                    "application[scb_city_id]": {
                        required: !0
                    }
                }
            })
        }
    }()
}).call(this);
(function() {
    namespace("Views.Clients.Application.Result");
    Views.Clients.Application.Result.Success = function() {
        return function(b) {
            this.$container = b;
            "undefined" !== typeof dataLayer && null !== dataLayer && dataLayer.push({
                event: "event",
                eventCategory: "TY",
                eventAction: "thankyou_page"
            })
        }
    }()
}).call(this);
(function() {
    namespace("Views.Clients.Application.Result");
    Views.Clients.Application.Result.Unsuccess = function() {
        return function(b) {
            this.$container = b;
            "undefined" !== typeof dataLayer && null !== dataLayer && dataLayer.push({
                event: "event",
                eventCategory: "CS",
                eventAction: "cs_sorry_page"
            })
        }
    }()
}).call(this);
(function() {
    namespace("Views.Clients.Applications");
    Views.Clients.Applications.Edit = function() {
        return function(b) {
            var d, g;
            this.$container = b;
            g = this;
            "undefined" !== typeof dataLayer && null !== dataLayer && dataLayer.push({
                event: "event",
                eventCategory: "CS",
                eventAction: "cs_repeat_sales"
            });
            new Lib.Clients.RepeatCalculator(this.$container);
            d = new Lib.Iovation("/clients/application/iovation/update");
            setTimeout(function() {
                d.get_begin_black_box()
            }, 4E3);
            this.$container.on("click", "a@changeDisbursementInformation", function(b) {
                return $.ajax({
                    url: Routes.clients_application_path(),
                    type: "PATCH",
                    dataType: "script",
                    data: {
                        application: {
                            amount: g.$container.find("@amountSlider").val(),
                            term: g.$container.find("@termSlider").val()
                        }
                    }
                })
            });
            this.$container.on("click", "a@changeLink", function(b) {
                b.preventDefault();
                g.$container.find("@changeBlock").addClass("action");
                return g.$container.find("@disbursementInformation").addClass("hide")
            })
        }
    }()
}).call(this);
(function() {
    namespace("Views.Clients.Applications.Loan");
    Views.Clients.Applications.Loan.Active = function() {
        return function(b) {
            "request_sent" === b ? "undefined" !== typeof dataLayer && null !== dataLayer && dataLayer.push({
                event: "event",
                eventCategory: "CS",
                eventAction: "cs_active_app_page"
            }) : "undefined" !== typeof dataLayer && null !== dataLayer && dataLayer.push({
                event: "event",
                eventCategory: "CS",
                eventAction: "cs_active_page"
            })
        }
    }()
}).call(this);
(function() {
    namespace("Views.Clients.Applications.Loan");
    Views.Clients.Applications.Loan.Overdue = function() {
        return function() {
            "undefined" !== typeof dataLayer && null !== dataLayer && dataLayer.push({
                event: "event",
                eventCategory: "CS",
                eventAction: "cs_overdue_page"
            })
        }
    }()
}).call(this);
(function() {
    namespace("Views.Clients.Auth.Sessions");
    Views.Clients.Auth.Sessions.Form = function() {
        return function(b) {
            var d, g, c, a;
            this.$container = b;
            a = this;
            b = Routes.resend_clients_auth_sms_path();
            g = this.$container.find("@phoneMobile");
            d = this.$container.find("@passField");
            c = this.$container.find("@resendSmsLink");
            this.$phoneConfirm = new Lib.Clients.PhoneConfirmation(a.$container, b);
            g.focusout(function() {
                var b, e, p;
                b = g.val().replace(/[^0-9]/g, "");
                p = 0 < Cookies.get("smsTimerInterval");
                e = a.$container.find("@preloader");
                if (8 <= b.length && !p) return e.addClass("visible"), $.ajax({
                    url: Routes.clients_auth_sms_path(),
                    type: "POST",
                    dataType: "json",
                    data: {
                        phone_number: b
                    },
                    complete: function(a, b) {
                        return e.removeClass("visible")
                    },
                    error: function(b, c, d) {
                        a.$container.html(b.responseJSON.html);
                        return a.$container.find("@formAccSubmit").prop("disabled", !0)
                    },
                    success: function(b, e, f) {
                        g.prop("readonly", !0);
                        d.prop("readonly", !1);
                        d.blur();
                        d.focus();
                        a.$container.find("#readonly").val(!1);
                        c.removeClass("disabled");
                        a.$phoneConfirm.startTimer(30);
                        return a.$container.find("@formAccSubmit").prop("disabled", !1)
                    }
                })
            });
            this.$container.find("@phoneAcc").mask("r 00000000999", {
                translation: {
                    r: {
                        pattern: /[0]/,
                        fallback: "0"
                    }
                }
            });
            this.$container.find("@passField").mask("0000");
            this.$container.find("@formAcc").validate({
                errorClass: "form_float__error",
                highlight: function(a, b, c) {
                    $(a).closest(".account_field_container").addClass("form_float__group-error");
                    return $(a).siblings(".form_float__error").remove()
                },
                unhighlight: function(a, b, c) {
                    $(a).closest(".account_field_container").removeClass("form_float__group-error");
                    return $(a).siblings(".form_float__error").remove()
                },
                rules: {
                    "session[phone_number]": {
                        required: !0,
                        exactlength: [10, 11],
                        sameNumbers: !0,
                        dontNumbersConsecutive: !0
                    },
                    "session[password]": {
                        required: !0
                    }
                }
            })
        }
    }()
}).call(this);
(function() {
    namespace("Views.Home");
    Views.Home.Index = function() {
        function b(b) {
            var g, c;
            this.$container = b;
            c = this;
            new Lib.Calculator(this.$container);
            this.$container.find(".scrolltoelem").click(function(a) {
                a.preventDefault();
                a = $(this).data("scrollto");
                return $("html, body").animate({
                    scrollTop: $(a).offset().top
                }, {
                    duration: 500
                })
            });
            g = this.$container.find("@form").validate({
                errorClass: "form_float__error",
                highlight: function(a, b, c) {
                    $(a).closest(".form_float__group").addClass("form_float__group-error");
                    return $(a).siblings(".form_float__error").remove()
                },
                unhighlight: function(a, b, c) {
                    $(a).closest(".form_float__group").removeClass("form_float__group-error");
                    return $(a).siblings(".form_float__error").remove()
                },
                rules: {
                    "application[full_name]": {
                        lettersonly: !0,
                        minWords: 2,
                        required: !0,
                        maxlength: 250
                    },
                    "application[mobile_phone]": {
                        required: !0,
                        exactlength: [10, 11],
                        sameNumbers: !0,
                        dontNumbersConsecutive: !0
                    }
                }
            });
            this.$container.on("ajax:success", "form@form", function(a, b, d, p) {
                if (b.show_modal) return c._showModal(b.html);
                if (b.url) return window.location = b.url;
                if (b.messages &&
                    b.messages.mobile_phone) return a = {
                    "application[mobile_phone]": b.messages.mobile_phone
                }, g.showErrors(a)
            })
        }
        b.prototype._showModal = function(b) {
            $("@modal @modalContent").html(b);
            return $("@modal").modal("show")
        };
        return b
    }()
}).call(this);
(function() {
    namespace("Views.Global.Shop");
    Views.Global.Shop.Index = function() {
        return function(b) {
            this.$container = b;
            console.log("asdasd");
            this.$container.find("@shopercode").inputmask({
                mask: "********",
                showMaskOnHover: !1,
                greedy: !1,
                onBeforePaste: function(b, g) {
                    return b.toUpperCase()
                },
                definitions: {
                    "*": {
                        validator: "[0-9]",
                        cardinality: 1,
                        casing: "upper"
                    }
                }
            });
            this.$container.validate({
                rules: {
                    shopercode: {
                        required: !0
                    }
                }
            })
        }
    }()
}).call(this);
(function() {
    var b;
    $(document).ready(function() {
        return window.Global = new b($(document))
    });
    b = function() {
        function b(d) {
            var c;
            this.$container = d;
            c = this;
            new Lib.DatePicker($(document));
            new Lib.OptionalFields($(document));
            new Lib.JqueryValidation;
            new Lib.PersonalAccountGA;
            $(document).find("input@currency").autoNumeric("init", {
                aSign: "",
                aSep: ".",
                vMin: "0",
                aDec: ",",
                mDec: "0"
            });
            $(document).find("input[data-inputmask]").inputmask({
                showMaskOnHover: !1
            });
            $(document).find("@phone").inputmask({
                mask: "(0 999 999 99 9)|(0 999 999 99 99)",
                showMaskOnHover: !1,
                greedy: !1
            });
            this.$container.find("@modal").on("hidden.bs.modal", function() {
                $(this).removeData("bs.modal");
                return $(this).find("@modalContent").empty()
            });
            this.$container.on("ajax:success", "a[data-modal=true]", function(a, b, d, g) {
                return c._showModal(b)
            });
            this.$container.on("ajax:success", "form@formAcc", function(a, b, c, d) {
                b.url && (window.location = b.url);
                return $(".account_body__btn").attr("disabled", !0)
            });
            this.$container.on("ajax:error", "form@formAcc", function(a, b, d, g) {
                return c.$container.find("@modalAcc").html(b.responseJSON.html)
            });
            this.$container.on("ajax:success", "form@disbursementform", function(a, b, d, g) {
                c.$container.find("@disbursementInformation").removeClass("hide");
                c.$container.find("@changeBlock").removeClass("action");
                c.$container.find("@changeBlock").removeClass("error_block");
                c.$container.find("@disbursementInformation").html(b.html);
                return c.$container.find("@modal").modal("toggle")
            });
            this.$container.on("ajax:error", "form@disbursementform", function(a, b, d, g) {
                return c.$container.find("@disbursementContent").html(b.responseJSON.html)
            });
            $(".personal_account").hover(function() {
                return $(this).find(".drop-menu").stop(!0, !0).delay(200).fadeIn(100)
            }, function() {
                return $(this).find(".drop-menu").stop(!0, !0).delay(200).fadeOut(100)
            })
        }
        b.prototype._showModal = function(b) {
            this.$container.find("@modal @modalContent").html(b);
            return this.$container.find("@modal").modal("show")
        };
        return b
    }()
}).call(this);