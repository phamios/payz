var $jscomp = {
    scope: {},
    findInternal: function(f, h, v) {
        f instanceof String && (f = String(f));
        for (var z = f.length, m = 0; m < z; m++) {
            var t = f[m];
            if (h.call(v, t, m, f)) return {
                i: m,
                v: t
            }
        }
        return {
            i: -1,
            v: void 0
        }
    }
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(f, h, v) {
    if (v.get || v.set) throw new TypeError("ES3 does not support getters and setters.");
    f != Array.prototype && f != Object.prototype && (f[h] = v.value)
};
$jscomp.getGlobal = function(f) {
    return "undefined" != typeof window && window === f ? f : "undefined" != typeof global ? global : f
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(f, h, v, z) {
    if (h) {
        v = $jscomp.global;
        f = f.split(".");
        for (z = 0; z < f.length - 1; z++) {
            var m = f[z];
            m in v || (v[m] = {});
            v = v[m]
        }
        f = f[f.length - 1];
        z = v[f];
        h = h(z);
        h != z && null != h && $jscomp.defineProperty(v, f, {
            configurable: !0,
            writable: !0,
            value: h
        })
    }
};
$jscomp.polyfill("Array.prototype.find", function(f) {
    return f ? f : function(h, f) {
        return $jscomp.findInternal(this, h, f).v
    }
}, "es6-impl", "es3");
"object" !== typeof JSON2 && "object" === typeof window.JSON && window.JSON.stringify && window.JSON.parse ? JSON2 = window.JSON : function() {
    var f = {};
    (function() {
        function h(f, m) {
            function v(a) {
                if (v[a] !== B) return v[a];
                var b;
                if ("bug-string-char-index" == a) b = !1;
                else if ("json" == a) b = v("json-stringify") && v("json-parse");
                else {
                    var d;
                    if ("json-stringify" == a) {
                        b = m.stringify;
                        var k = "function" == typeof b && Q;
                        if (k) {
                            (d = function() {
                                return 1
                            }).toJSON = d;
                            try {
                                k = "0" === b(0) && "0" === b(new F) && '""' == b(new A) && b(E) === B && b(B) === B && b() === B && "1" ===
                                    b(d) && "[1]" == b([d]) && "[null]" == b([B]) && "null" == b(null) && "[null,null,null]" == b([B, E, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == b({
                                        a: [d, !0, !1, null, "\x00\b\n\f\r\t"]
                                    }) && "1" === b(null, d) && "[\n 1,\n 2\n]" == b([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == b(new R(-864E13)) && '"+275760-09-13T00:00:00.000Z"' == b(new R(864E13)) && '"-000001-01-01T00:00:00.000Z"' == b(new R(-621987552E5)) && '"1969-12-31T23:59:59.999Z"' == b(new R(-1))
                            } catch (h) {
                                k = !1
                            }
                        }
                        b = k
                    }
                    if ("json-parse" == a) {
                        b = m.parse;
                        if ("function" ==
                            typeof b) try {
                            if (0 === b("0") && !b(!1)) {
                                d = b('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                                var O = 5 == d.a.length && 1 === d.a[0];
                                if (O) {
                                    try {
                                        O = !b('"\t"')
                                    } catch (h) {}
                                    if (O) try {
                                        O = 1 !== b("01")
                                    } catch (h) {}
                                    if (O) try {
                                        O = 1 !== b("1.")
                                    } catch (h) {}
                                }
                            }
                        } catch (h) {
                            O = !1
                        }
                        b = O
                    }
                }
                return v[a] = !!b
            }
            f || (f = t.Object());
            m || (m = t.Object());
            var F = f.Number || t.Number,
                A = f.String || t.String,
                D = f.Object || t.Object,
                R = f.Date || t.Date,
                fa = f.SyntaxError || t.SyntaxError,
                ba = f.TypeError || t.TypeError,
                V = f.Math || t.Math,
                S = f.JSON || t.JSON;
            "object" == typeof S && S && (m.stringify =
                S.stringify, m.parse = S.parse);
            var D = D.prototype,
                E = D.toString,
                H, K, B, Q = new R(-0xc782b5b800cec);
            try {
                Q = -109252 == Q.getUTCFullYear() && 0 === Q.getUTCMonth() && 1 === Q.getUTCDate() && 10 == Q.getUTCHours() && 37 == Q.getUTCMinutes() && 6 == Q.getUTCSeconds() && 708 == Q.getUTCMilliseconds()
            } catch (c) {}
            if (!v("json")) {
                var la = v("bug-string-char-index");
                if (!Q) var P = V.floor,
                    ma = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                    T = function(a, b) {
                        return ma[b] + 365 * (a - 1970) + P((a - 1969 + (b = +(1 < b))) / 4) - P((a - 1901 + b) / 100) + P((a - 1601 + b) / 400)
                    };
                (H = D.hasOwnProperty) ||
                (H = function(a) {
                    var b = {},
                        d;
                    (b.__proto__ = null, b.__proto__ = {
                        toString: 1
                    }, b).toString != E ? H = function(a) {
                        var c = this.__proto__;
                        a = a in (this.__proto__ = null, this);
                        this.__proto__ = c;
                        return a
                    } : (d = b.constructor, H = function(a) {
                        var c = (this.constructor || d).prototype;
                        return a in this && !(a in c && this[a] === c[a])
                    });
                    b = null;
                    return H.call(this, a)
                });
                K = function(a, b) {
                    var d = 0,
                        k, h, f;
                    (k = function() {
                        this.valueOf = 0
                    }).prototype.valueOf = 0;
                    h = new k;
                    for (f in h) H.call(h, f) && d++;
                    k = h = null;
                    d ? K = 2 == d ? function(a, c) {
                        var b = {},
                            d = "[object Function]" ==
                            E.call(a),
                            k;
                        for (k in a) d && "prototype" == k || H.call(b, k) || !(b[k] = 1) || !H.call(a, k) || c(k)
                    } : function(a, c) {
                        var b = "[object Function]" == E.call(a),
                            d, k;
                        for (d in a) b && "prototype" == d || !H.call(a, d) || (k = "constructor" === d) || c(d);
                        (k || H.call(a, d = "constructor")) && c(d)
                    } : (h = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "), K = function(a, c) {
                        var b = "[object Function]" == E.call(a),
                            d, k = !b && "function" != typeof a.constructor && z[typeof a.hasOwnProperty] && a.hasOwnProperty ||
                            H;
                        for (d in a) b && "prototype" == d || !k.call(a, d) || c(d);
                        for (b = h.length; d = h[--b]; k.call(a, d) && c(d));
                    });
                    return K(a, b)
                };
                if (!v("json-stringify")) {
                    var r = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        },
                        y = function(a, b) {
                            return ("000000" + (b || 0)).slice(-a)
                        },
                        wa = function(a) {
                            for (var b = '"', d = 0, k = a.length, h = !la || 10 < k, f = h && (la ? a.split("") : a); d < k; d++) {
                                var n = a.charCodeAt(d);
                                switch (n) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        b += r[n];
                                        break;
                                    default:
                                        b = 32 > n ? b + ("\\u00" + y(2, n.toString(16))) : b + (h ? f[d] :
                                            a.charAt(d))
                                }
                            }
                            return b + '"'
                        },
                        p = function(a, b, d, k, h, f, n) {
                            var e, l, m, u, r, q, t, v, x;
                            try {
                                e = b[a]
                            } catch (w) {}
                            if ("object" == typeof e && e)
                                if (l = E.call(e), "[object Date]" != l || H.call(e, "toJSON")) "function" == typeof e.toJSON && ("[object Number]" != l && "[object String]" != l && "[object Array]" != l || H.call(e, "toJSON")) && (e = e.toJSON(a));
                                else if (e > -1 / 0 && e < 1 / 0) {
                                if (T) {
                                    u = P(e / 864E5);
                                    for (l = P(u / 365.2425) + 1970 - 1; T(l + 1, 0) <= u; l++);
                                    for (m = P((u - T(l, 0)) / 30.42); T(l, m + 1) <= u; m++);
                                    u = 1 + u - T(l, m);
                                    r = (e % 864E5 + 864E5) % 864E5;
                                    q = P(r / 36E5) % 24;
                                    t = P(r / 6E4) % 60;
                                    v = P(r / 1E3) % 60;
                                    r %= 1E3
                                } else l = e.getUTCFullYear(), m = e.getUTCMonth(), u = e.getUTCDate(), q = e.getUTCHours(), t = e.getUTCMinutes(), v = e.getUTCSeconds(), r = e.getUTCMilliseconds();
                                e = (0 >= l || 1E4 <= l ? (0 > l ? "-" : "+") + y(6, 0 > l ? -l : l) : y(4, l)) + "-" + y(2, m + 1) + "-" + y(2, u) + "T" + y(2, q) + ":" + y(2, t) + ":" + y(2, v) + "." + y(3, r) + "Z"
                            } else e = null;
                            d && (e = d.call(b, a, e));
                            if (null === e) return "null";
                            l = E.call(e);
                            if ("[object Boolean]" == l) return "" + e;
                            if ("[object Number]" == l) return e > -1 / 0 && e < 1 / 0 ? "" + e : "null";
                            if ("[object String]" == l) return wa("" + e);
                            if ("object" ==
                                typeof e) {
                                for (a = n.length; a--;)
                                    if (n[a] === e) throw ba();
                                n.push(e);
                                x = [];
                                b = f;
                                f += h;
                                if ("[object Array]" == l) {
                                    m = 0;
                                    for (a = e.length; m < a; m++) l = p(m, e, d, k, h, f, n), x.push(l === B ? "null" : l);
                                    a = x.length ? h ? "[\n" + f + x.join(",\n" + f) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                                } else K(k || e, function(a) {
                                    var c = p(a, e, d, k, h, f, n);
                                    c !== B && x.push(wa(a) + ":" + (h ? " " : "") + c)
                                }), a = x.length ? h ? "{\n" + f + x.join(",\n" + f) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}";
                                n.pop();
                                return a
                            }
                        };
                    m.stringify = function(a, b, d) {
                        var k, e, h, n;
                        if (z[typeof b] && b)
                            if ("[object Function]" ==
                                (n = E.call(b))) e = b;
                            else if ("[object Array]" == n) {
                            h = {};
                            for (var l = 0, f = b.length, m; l < f; m = b[l++], (n = E.call(m), "[object String]" == n || "[object Number]" == n) && (h[m] = 1));
                        }
                        if (d)
                            if ("[object Number]" == (n = E.call(d))) {
                                if (0 < (d -= d % 1))
                                    for (k = "", 10 < d && (d = 10); k.length < d; k += " ");
                            } else "[object String]" == n && (k = 10 >= d.length ? d : d.slice(0, 10));
                        return p("", (m = {}, m[""] = a, m), e, h, k, "", [])
                    }
                }
                if (!v("json-parse")) {
                    var ea = A.fromCharCode,
                        x = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "\t",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        },
                        l, C, w = function() {
                            l = C = null;
                            throw fa();
                        },
                        J = function() {
                            for (var a = C, b = a.length, d, k, e, h, n; l < b;) switch (n = a.charCodeAt(l), n) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    l++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return d = la ? a.charAt(l) : a[l], l++, d;
                                case 34:
                                    d = "@";
                                    for (l++; l < b;)
                                        if (n = a.charCodeAt(l), 32 > n) w();
                                        else if (92 == n) switch (n = a.charCodeAt(++l), n) {
                                        case 92:
                                        case 34:
                                        case 47:
                                        case 98:
                                        case 116:
                                        case 110:
                                        case 102:
                                        case 114:
                                            d += x[n];
                                            l++;
                                            break;
                                        case 117:
                                            k = ++l;
                                            for (e = l + 4; l < e; l++) n = a.charCodeAt(l), 48 <= n && 57 >= n || 97 <= n && 102 >= n || 65 <= n && 70 >= n || w();
                                            d += ea("0x" +
                                                a.slice(k, l));
                                            break;
                                        default:
                                            w()
                                    } else {
                                        if (34 == n) break;
                                        n = a.charCodeAt(l);
                                        for (k = l; 32 <= n && 92 != n && 34 != n;) n = a.charCodeAt(++l);
                                        d += a.slice(k, l)
                                    }
                                    if (34 == a.charCodeAt(l)) return l++, d;
                                    w();
                                default:
                                    k = l;
                                    45 == n && (h = !0, n = a.charCodeAt(++l));
                                    if (48 <= n && 57 >= n) {
                                        for (48 == n && (n = a.charCodeAt(l + 1), 48 <= n && 57 >= n) && w(); l < b && (n = a.charCodeAt(l), 48 <= n && 57 >= n); l++);
                                        if (46 == a.charCodeAt(l)) {
                                            for (e = ++l; e < b && (n = a.charCodeAt(e), 48 <= n && 57 >= n); e++);
                                            e == l && w();
                                            l = e
                                        }
                                        n = a.charCodeAt(l);
                                        if (101 == n || 69 == n) {
                                            n = a.charCodeAt(++l);
                                            43 != n && 45 != n || l++;
                                            for (e =
                                                l; e < b && (n = a.charCodeAt(e), 48 <= n && 57 >= n); e++);
                                            e == l && w();
                                            l = e
                                        }
                                        return +a.slice(k, l)
                                    }
                                    h && w();
                                    if ("true" == a.slice(l, l + 4)) return l += 4, !0;
                                    if ("false" == a.slice(l, l + 5)) return l += 5, !1;
                                    if ("null" == a.slice(l, l + 4)) return l += 4, null;
                                    w()
                            }
                            return "$"
                        },
                        e = function(a) {
                            var b, d;
                            "$" == a && w();
                            if ("string" == typeof a) {
                                if ("@" == (la ? a.charAt(0) : a[0])) return a.slice(1);
                                if ("[" == a) {
                                    for (b = [];; d || (d = !0)) {
                                        a = J();
                                        if ("]" == a) break;
                                        d && ("," == a ? (a = J(), "]" == a && w()) : w());
                                        "," == a && w();
                                        b.push(e(a))
                                    }
                                    return b
                                }
                                if ("{" == a) {
                                    for (b = {};; d || (d = !0)) {
                                        a = J();
                                        if ("}" ==
                                            a) break;
                                        d && ("," == a ? (a = J(), "}" == a && w()) : w());
                                        "," != a && "string" == typeof a && "@" == (la ? a.charAt(0) : a[0]) && ":" == J() || w();
                                        b[a.slice(1)] = e(J())
                                    }
                                    return b
                                }
                                w()
                            }
                            return a
                        },
                        q = function(c, b, d) {
                            d = a(c, b, d);
                            d === B ? delete c[b] : c[b] = d
                        },
                        a = function(a, b, d) {
                            var k = a[b],
                                e;
                            if ("object" == typeof k && k)
                                if ("[object Array]" == E.call(k))
                                    for (e = k.length; e--;) q(k, e, d);
                                else K(k, function(a) {
                                    q(k, a, d)
                                });
                            return d.call(a, b, k)
                        };
                    m.parse = function(c, b) {
                        var d, k;
                        l = 0;
                        C = "" + c;
                        d = e(J());
                        "$" != J() && w();
                        l = C = null;
                        return b && "[object Function]" == E.call(b) ? a((k = {}, k[""] = d, k), "", b) : d
                    }
                }
            }
            m.runInContext = h;
            return m
        }
        var v = "function" === typeof define && define.amd,
            z = {
                "function": !0,
                object: !0
            },
            m = z[typeof f] && f && !f.nodeType && f,
            t = z[typeof window] && window || this,
            F = m && z[typeof module] && module && !module.nodeType && "object" == typeof global && global;
        !F || F.global !== F && F.window !== F && F.self !== F || (t = F);
        if (m && !v) h(t, m);
        else {
            var D = t.JSON,
                A = t.JSON3,
                fa = !1,
                V = h(t, t.JSON3 = {
                    noConflict: function() {
                        fa || (fa = !0, t.JSON = D, t.JSON3 = A, D = A = null);
                        return V
                    }
                });
            t.JSON = {
                parse: V.parse,
                stringify: V.stringify
            }
        }
        v &&
            define(function() {
                return V
            })
    }).call(this);
    JSON2 = f
}();
"object" !== typeof _paq && (_paq = []);
"object" !== typeof window.ChinTracker && (window.ChinTracker = function() {
    function f(a) {
        try {
            return l(a)
        } catch (c) {
            return unescape(a)
        }
    }

    function h(a) {
        return "undefined" !== typeof a
    }

    function v(a) {
        return "function" === typeof a
    }

    function z(a) {
        return "object" === typeof a
    }

    function m(a) {
        return "string" === typeof a || a instanceof String
    }

    function t(a) {
        if (!a) return !0;
        var c, b = !0;
        for (c in a) Object.prototype.hasOwnProperty.call(a, c) && (b = !1);
        return b
    }

    function F(a) {
        void 0 !== console && console && console.error && console.error(a)
    }

    function D() {
        var a,
            c, b, d;
        for (a = 0; a < arguments.length; a += 1)
            for (d = arguments[a], b = d.shift(), c = 0; c < C.length; c++)
                if (m(b)) {
                    if (C[c][b]) C[c][b].apply(C[c], d);
                    else throw a = "The method '" + b + '\' was not found in "_paq" variable.  Please have a look at the Piwik tracker documentation: http://developer.piwik.org/api-reference/tracking-javascript', F(a), new TypeError(a);
                    if ("addTracker" === b) break;
                    if ("setTrackerUrl" === b || "setSiteId" === b) break
                } else b.apply(C[c], d)
    }

    function A(a, c, b, d) {
        if (a.addEventListener) return a.addEventListener(c,
            b, d), !0;
        if (a.attachEvent) return a.attachEvent("on" + c, b);
        a["on" + c] = b
    }

    function fa(a, c) {
        var b = "",
            d, k;
        for (d in T) Object.prototype.hasOwnProperty.call(T, d) && (k = T[d][a], v(k) && (k = k(c)) && (b += k));
        return b
    }

    function V(a, c) {
        var b = r.createElement("script");
        b.type = "text/javascript";
        b.src = a;
        b.readyState ? b.onreadystatechange = function() {
            var a = this.readyState;
            if ("loaded" === a || "complete" === a) b.onreadystatechange = null, c()
        } : b.onload = c;
        r.getElementsByTagName("head")[0].appendChild(b)
    }

    function bc() {
        var a = "";
        try {
            a = p.top.document.referrer
        } catch (c) {
            if (p.parent) try {
                a =
                    p.parent.document.referrer
            } catch (b) {
                a = ""
            }
        }
        "" === a && (a = r.referrer);
        return a
    }

    function rb(a) {
        return (a = /^([a-z]+):/.exec(a)) ? a[1] : null
    }

    function qa(a) {
        var c = /^(?:(?:https?|ftp):)\/*(?:[^@]+@)?([^:/#]+)/.exec(a);
        return c ? c[1] : a
    }

    function Ua(a, c) {
        var b = (new RegExp("[\\?&#]" + c + "=([^&#]*)")).exec(a);
        return b ? l(b[1]) : ""
    }

    function cc(a) {
        var c = function(a, b) {
                return a << b | a >>> 32 - b
            },
            b = function(a) {
                var b = "",
                    c, d;
                for (c = 7; 0 <= c; c--) d = a >>> 4 * c & 15, b += d.toString(16);
                return b
            },
            d, k, e = [],
            h = 1732584193,
            l = 4023233417,
            f = 2562383102,
            m =
            271733878,
            p = 3285377520,
            u, r, q, t, v, w = [];
        a = unescape(x(a));
        u = a.length;
        for (d = 0; d < u - 3; d += 4) k = a.charCodeAt(d) << 24 | a.charCodeAt(d + 1) << 16 | a.charCodeAt(d + 2) << 8 | a.charCodeAt(d + 3), w.push(k);
        switch (u & 3) {
            case 0:
                d = 2147483648;
                break;
            case 1:
                d = a.charCodeAt(u - 1) << 24 | 8388608;
                break;
            case 2:
                d = a.charCodeAt(u - 2) << 24 | a.charCodeAt(u - 1) << 16 | 32768;
                break;
            case 3:
                d = a.charCodeAt(u - 3) << 24 | a.charCodeAt(u - 2) << 16 | a.charCodeAt(u - 1) << 8 | 128
        }
        for (w.push(d); 14 !== (w.length & 15);) w.push(0);
        w.push(u >>> 29);
        w.push(u << 3 & 4294967295);
        for (a = 0; a < w.length; a +=
            16) {
            for (d = 0; 16 > d; d++) e[d] = w[a + d];
            for (d = 16; 79 >= d; d++) e[d] = c(e[d - 3] ^ e[d - 8] ^ e[d - 14] ^ e[d - 16], 1);
            k = h;
            u = l;
            r = f;
            q = m;
            t = p;
            for (d = 0; 19 >= d; d++) v = c(k, 5) + (u & r | ~u & q) + t + e[d] + 1518500249 & 4294967295, t = q, q = r, r = c(u, 30), u = k, k = v;
            for (d = 20; 39 >= d; d++) v = c(k, 5) + (u ^ r ^ q) + t + e[d] + 1859775393 & 4294967295, t = q, q = r, r = c(u, 30), u = k, k = v;
            for (d = 40; 59 >= d; d++) v = c(k, 5) + (u & r | u & q | r & q) + t + e[d] + 2400959708 & 4294967295, t = q, q = r, r = c(u, 30), u = k, k = v;
            for (d = 60; 79 >= d; d++) v = c(k, 5) + (u ^ r ^ q) + t + e[d] + 3395469782 & 4294967295, t = q, q = r, r = c(u, 30), u = k, k = v;
            h = h + k & 4294967295;
            l = l + u & 4294967295;
            f = f + r & 4294967295;
            m = m + q & 4294967295;
            p = p + t & 4294967295
        }
        v = b(h) + b(l) + b(f) + b(m) + b(p);
        return v.toLowerCase()
    }

    function dc(a, c, b) {
        a || (a = "");
        c || (c = "");
        if ("translate.googleusercontent.com" === a) "" === b && (b = c), c = Ua(c, "u"), a = qa(c);
        else if ("cc.bingj.com" === a || "webcache.googleusercontent.com" === a || "74.6." === a.slice(0, 5)) c = r.links[0].href, a = qa(c);
        return [a, c, b]
    }

    function R(a) {
        var c = a.length;
        "." === a.charAt(--c) && (a = a.slice(0, c));
        "*." === a.slice(0, 2) && (a = a.slice(1)); - 1 !== a.indexOf("/") && (a = a.substr(0, a.indexOf("/")));
        return a
    }

    function va(a) {
        return a ? !h(a.children) && h(a.childNodes) || h(a.children) ? a.children : [] : []
    }

    function ba(a, c) {
        if (a && a.indexOf) return a.indexOf(c);
        if (!h(a) || null === a || !a.length) return -1;
        var b = a.length;
        if (0 === b) return -1;
        for (var d = 0; d < b;) {
            if (a[d] === c) return d;
            d++
        }
        return -1
    }

    function sb(a, c) {
        a = String(a);
        return 0 === a.lastIndexOf(c, 0)
    }

    function S(a, c) {
        a = String(a);
        return -1 !== a.indexOf(c, a.length - c.length)
    }

    function E(a, c) {
        a = String(a);
        return a.substr(0, a.length - c)
    }

    function H(a) {
        function c(a, b) {
            if (p.getComputedStyle) return r.defaultView.getComputedStyle(a,
                null)[b];
            if (a.currentStyle) return a.currentStyle[b]
        }

        function b(d, e, l, f, n, m, q) {
            var p = d.parentNode,
                t;
            a: {
                for (t = d.parentNode; t;) {
                    if (t === r) {
                        t = !0;
                        break a
                    }
                    t = t.parentNode
                }
                t = !1
            }
            if (!t) return !1;
            if (9 === p.nodeType) return !0;
            if ("0" === c(d, "opacity") || "none" === c(d, "display") || "hidden" === c(d, "visibility")) return !1;
            h(e) && h(l) && h(f) && h(n) && h(m) && h(q) || (e = d.offsetTop, n = d.offsetLeft, f = e + d.offsetHeight, l = n + d.offsetWidth, m = d.offsetWidth, q = d.offsetHeight);
            if (a === d && (0 === q || 0 === m) && "hidden" === c(d, "overflow")) return !1;
            if (p) {
                if ("hidden" ===
                    c(p, "overflow") || "scroll" === c(p, "overflow"))
                    if (n + 1 > p.offsetWidth + p.scrollLeft || n + m - 1 < p.scrollLeft || e + 1 > p.offsetHeight + p.scrollTop || e + q - 1 < p.scrollTop) return !1;
                d.offsetParent === p && (n += p.offsetLeft, e += p.offsetTop);
                return b(p, e, l, f, n, m, q)
            }
            return !0
        }
        return a ? b(a) : !1
    }

    function K(a, c) {
        if (c) return c;
        var b;
        b = String(a); - 1 !== b.indexOf("?") && (b = a.indexOf("?"), a = a.slice(0, b));
        S(a, "piwik.php") ? a = E(a, 9) : S(a, ".php") && (b = a.lastIndexOf("/"), a = a.slice(0, b + 1));
        S(a, "/js/") && (a = E(a, 3));
        return a
    }

    function B(a) {
        var c = /index\.php\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=.*)?$/.exec(r.referrer);
        if (c) {
            if (c[1] !== String(a)) return !1;
            a = c[2];
            var b = c[3];
            (c = c[4]) ? 0 === c.indexOf("&segment=") && (c = c.substr(9)): c = "";
            p.name = "Piwik_Overlay###" + a + "###" + b + "###" + c
        }
        c = p.name.split("###");
        return 4 === c.length && "Piwik_Overlay" === c[0]
    }

    function Q(a, c, b) {
        var d = p.name.split("###"),
            e = d[1],
            h = d[2],
            l = d[3],
            f = K(a, c);
        V(f + "plugins/Overlay/client/client.js?v=1", function() {
            Piwik_Overlay_Client.initialize(f, b, e, h, l)
        })
    }

    function la() {
        var a;
        try {
            a = p.frameElement
        } catch (c) {
            return !0
        }
        if (h(a)) return a && "iframe" === String(a.nodeName).toLowerCase() ?
            !0 : !1;
        try {
            return p.self !== p.top
        } catch (c) {
            return !0
        }
    }

    function P(a, c) {
        function b(a, g, b, c, d, e) {
            if (!ga) {
                var k;
                b && (k = new Date, k.setTime(k.getTime() + b));
                r.cookie = a + "=" + x(g) + (b ? ";expires=" + k.toGMTString() : "") + ";path=" + (c || "/") + (d ? ";domain=" + d : "") + (e ? ";secure" : "")
            }
        }

        function d(a) {
            return ga ? 0 : (a = (new RegExp("(^|;)[ ]*" + a + "=([^;]*)")).exec(r.cookie)) ? l(a[2]) : 0
        }

        function k(a) {
            var g;
            return wb ? (g = /#.*/, a.replace(g, "")) : a
        }

        function O(a, g) {
            var b;
            a = String(a).toLowerCase();
            g = String(g).toLowerCase();
            if (a === g) return !0;
            if ("." === g.slice(0, 1)) {
                if (a === g.slice(1)) return !0;
                b = a.length - g.length;
                if (0 < b && a.slice(b) === g) return !0
            }
            return !1
        }

        function F(a) {
            var g = document.createElement("a");
            0 !== a.indexOf("//") && 0 !== a.indexOf("http") && (0 === a.indexOf("*") && (a = a.substr(1)), 0 === a.indexOf(".") && (a = a.substr(1)), a = "http://" + a);
            g.href = q.toAbsoluteUrl(a);
            return g.pathname ? g.pathname : ""
        }

        function n(a, g) {
            sb(g, "/") || (g = "/" + g);
            sb(a, "/") || (a = "/" + a);
            if ("/" === g || "/*" === g || a === g) return !0;
            g = String(g).toLowerCase();
            a = String(a).toLowerCase();
            if (S(g,
                    "*")) return (g = g.slice(0, -1)) && "/" !== g && a !== g ? 0 === a.indexOf(g) : !0;
            S(a, "/") || (a += "/");
            S(g, "/") || (g += "/");
            return 0 === a.indexOf(g)
        }

        function E(a) {
            var g, b, c;
            for (g = 0; g < Y.length; g++) {
                b = R(Y[g].toLowerCase());
                if (a === b) return !0;
                if ("." === b.slice(0, 1)) {
                    if (a === b.slice(1)) return !0;
                    c = a.length - b.length;
                    if (0 < c && a.slice(c) === b) return !0
                }
            }
            return !1
        }

        function D(a, g) {
            var b = new Image(1, 1);
            b.onload = function() {
                w = 0;
                "function" === typeof g && g()
            };
            a = a.replace("send_image=0", "send_image=1");
            b.src = Z + (0 > Z.indexOf("?") ? "?" : "&") + a
        }

        function J(a,
            g, b) {
            h(b) && null !== b || (b = !0);
            try {
                var c = p.XMLHttpRequest ? new p.XMLHttpRequest : p.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null;
                c.open("POST", Z, !0);
                c.onreadystatechange = function() {
                    4 !== this.readyState || 200 <= this.status && 300 > this.status || !b ? 4 === this.readyState && "function" === typeof g && g() : D(a, g)
                };
                c.setRequestHeader("Content-Type", xb);
                c.send(a)
            } catch (d) {
                b && D(a, g)
            }
        }

        function u(a) {
            a = (new Date).getTime() + a;
            if (!ma || a > ma) ma = a
        }

        function K(a) {
            !ca && da && (ca = setTimeout(function() {
                ca = null;
                Ca || (Ca = !r.hasFocus ||
                    r.hasFocus());
                if (!Ca) K(da);
                else if (!Xa()) {
                    var a = da - ((new Date).getTime() - Da),
                        a = Math.min(da, a);
                    K(a)
                }
            }, a || da))
        }

        function V() {
            Ca = !0;
            Xa() || K()
        }

        function va() {
            ca && (clearTimeout(ca), ca = null)
        }

        function tb() {
            !Ya && da && (Ya = !0, A(p, "focus", V), A(p, "blur", va), K())
        }

        function ub(a) {
            var g = (new Date).getTime();
            Da = g;
            ra && g < ra ? (g = ra - g, setTimeout(a, g), u(g + 50), ra += 50) : (!1 === ra && (ra = g + 800), a())
        }

        function U(a, g, b) {
            !Ea && a && ub(function() {
                "POST" === yb ? J(a, b) : D(a, b);
                u(g)
            });
            Ya ? K() : tb()
        }

        function Ba(a, g) {
            var b;
            b = Ea ? !1 : a && a.length;
            if (b) {
                var c =
                    '{"requests":["?' + a.join('","?') + '"]}';
                ub(function() {
                    J(c, null, !1);
                    u(g)
                })
            }
        }

        function X(a) {
            return zb + a + "." + L + "." + Ab
        }

        function vb() {
            if (ga) return "0";
            if (!h(y.cookieEnabled)) {
                var a = X("testcookie");
                b(a, "1");
                return "1" === d(a) ? "1" : "0"
            }
            return y.cookieEnabled ? "1" : "0"
        }

        function Za() {
            Ab = $a((na || Fa) + (ha || "/")).slice(0, 4)
        }

        function ab() {
            var a = X("cvar"),
                a = d(a);
            return a.length && (a = JSON2.parse(a), z(a)) ? a : {}
        }

        function Bb() {
            var a = Math.round((new Date).getTime() / 1E3),
                g = X("id");
            return (g = d(g)) ? (a = g.split("."), a.unshift("0"),
                xa.length && (a[1] = xa), a) : a = ["1", xa.length ? xa : "0" === vb() ? "" : $a((y.userAgent || "") + (y.platform || "") + JSON2.stringify(aa) + (new Date).getTime() + Math.random()).slice(0, 16), a, 0, a, "", ""]
        }

        function Ga() {
            var a = Bb(),
                g = a[0],
                b = a[1],
                c = a[2],
                d = a[3],
                e = a[4],
                k = a[5];
            h(a[6]) || (a[6] = "");
            return {
                newVisitor: g,
                uuid: b,
                createTs: c,
                visitCount: d,
                currentVisitTs: e,
                lastVisitTs: k,
                lastEcommerceOrderTs: a[6]
            }
        }

        function Cb() {
            var a = (new Date).getTime(),
                g = Ga().createTs;
            return 1E3 * parseInt(g, 10) + bb - a
        }

        function cb(a) {
            if (L) {
                var g = Math.round((new Date).getTime() /
                    1E3);
                h(a) || (a = Ga());
                a = a.uuid + "." + a.createTs + "." + a.visitCount + "." + g + "." + a.lastVisitTs + "." + a.lastEcommerceOrderTs;
                b(X("id"), a, Cb(), ha, na)
            }
        }

        function sa() {
            var a = d(X("ref"));
            if (a.length) try {
                if (a = JSON2.parse(a), z(a)) return a
            } catch (g) {}
            return ["", "", 0, ""]
        }

        function db() {
            var a = ga;
            ga = !1;
            var g = ["id", "ses", "cvar", "ref"],
                c, e;
            for (c = 0; c < g.length; c++) e = X(g[c]), 0 !== d(e) && b(e, "", -86400, ha, na);
            ga = a
        }

        function Db(a) {
            if (a && z(a)) {
                var g = [],
                    b;
                for (b in a) Object.prototype.hasOwnProperty.call(a, b) && g.push(b);
                b = {};
                g.sort();
                var c =
                    g.length,
                    d;
                for (d = 0; d < c; d++) b[g[d]] = a[g[d]];
                return b
            }
        }

        function W(a, g, c, e) {
            function l(a, g) {
                var Va = JSON2.stringify(a);
                return 2 < Va.length ? "&" + g + "=" + x(Va) : ""
            }
            var f, n = new Date,
                m = Math.round(n.getTime() / 1E3),
                p, q, u, w, z = M,
                y = X("ses"),
                F = X("ref"),
                O = X("cvar");
            u = d(y);
            w = sa();
            var C = Ha || Eb,
                A, B;
            ga && db();
            if (Ea) return "";
            y = Ga();
            h(e) || (e = "");
            var D = r.characterSet || r.charset;
            D && "utf-8" !== D.toLowerCase() || (D = null);
            A = w[0];
            B = w[1];
            p = w[2];
            q = w[3];
            if (!u) {
                u = Ia / 1E3;
                if (!y.lastVisitTs || m - y.lastVisitTs > u) y.visitCount++, y.lastVisitTs =
                    y.currentVisitTs;
                if (!eb || !A.length) {
                    for (f in Ja)
                        if (Object.prototype.hasOwnProperty.call(Ja, f) && (A = Ua(C, Ja[f]), A.length)) break;
                    for (f in Ka)
                        if (Object.prototype.hasOwnProperty.call(Ka, f) && (B = Ua(C, Ka[f]), B.length)) break
                }
                u = qa(ya);
                w = q.length ? qa(q) : "";
                !u.length || E(u) || eb && w.length && !E(w) || (q = ya);
                if (q.length || A.length) p = m, w = [A, B, p, k(q.slice(0, 1024))], b(F, JSON2.stringify(w), Fb, ha, na)
            }
            a += "&idsite=" + L + "&rec=1&r=" + String(Math.random()).slice(2, 8) + "&h=" + n.getHours() + "&m=" + n.getMinutes() + "&s=" + n.getSeconds() + "&url=" +
                x(k(C)) + (ya.length ? "&urlref=" + x(k(ya)) : "") + (ta && ta.length ? "&uid=" + x(ta) : "") + "&_id=" + y.uuid + "&_idts=" + y.createTs + "&_idvc=" + y.visitCount + "&_idn=" + y.newVisitor + (A.length ? "&_rcn=" + x(A) : "") + (B.length ? "&_rck=" + x(B) : "") + "&_refts=" + p + "&_viewts=" + y.lastVisitTs + (String(y.lastEcommerceOrderTs).length ? "&_ects=" + y.lastEcommerceOrderTs : "") + (String(q).length ? "&_ref=" + x(k(q.slice(0, 1024))) : "") + (D ? "&cs=" + x(D) : "") + "&send_image=0";
            for (f in aa) Object.prototype.hasOwnProperty.call(aa, f) && (a += "&" + f + "=" + aa[f]);
            n = [];
            if (g)
                for (f in g) Object.prototype.hasOwnProperty.call(g,
                    f) && /^dimension\d+$/.test(f) && (m = f.replace("dimension", ""), n.push(parseInt(m, 10)), n.push(String(m)), a += "&" + f + "=" + g[f], delete g[f]);
            g && t(g) && (g = null);
            for (f in oa) Object.prototype.hasOwnProperty.call(oa, f) && -1 === ba(n, f) && (a += "&dimension" + f + "=" + oa[f]);
            g ? a += "&data=" + x(JSON2.stringify(g)) : ia && (a += "&data=" + x(JSON2.stringify(ia)));
            g = Db(pa);
            n = Db(fb);
            a += l(g, "cvar");
            a += l(n, "e_cvar");
            if (M) {
                a += l(M, "_cvar");
                for (f in z) Object.prototype.hasOwnProperty.call(z, f) && ("" !== M[f][0] && "" !== M[f][1] || delete M[f]);
                Gb && b(O,
                    JSON2.stringify(M), Ia, ha, na)
            }
            Hb && (gb ? a += "&gt_ms=" + gb : ea && ea.timing && ea.timing.requestStart && ea.timing.responseEnd && (a += "&gt_ms=" + (ea.timing.responseEnd - ea.timing.requestStart)));
            y.lastEcommerceOrderTs = h(e) && String(e).length ? e : y.lastEcommerceOrderTs;
            cb(y);
            b(X("ses"), "*", Ia, ha, na);
            a += fa(c);
            hb.length && (a += "&" + hb);
            v(ib) && (a = ib(a));
            return a
        }

        function Ib(a, g, b, c, d, e) {
            var k = "idgoal=0",
                f, l = new Date,
                n = [],
                m, p = String(a).length;
            p && (k += "&ec_id=" + x(a), f = Math.round(l.getTime() / 1E3));
            k += "&revenue=" + g;
            String(b).length &&
                (k += "&ec_st=" + b);
            String(c).length && (k += "&ec_tx=" + c);
            String(d).length && (k += "&ec_sh=" + d);
            String(e).length && (k += "&ec_dt=" + e);
            if (I) {
                for (m in I) Object.prototype.hasOwnProperty.call(I, m) && (h(I[m][1]) || (I[m][1] = ""), h(I[m][2]) || (I[m][2] = ""), h(I[m][3]) && 0 !== String(I[m][3]).length || (I[m][3] = 0), h(I[m][4]) && 0 !== String(I[m][4]).length || (I[m][4] = 1), n.push(I[m]));
                k += "&ec_items=" + x(JSON2.stringify(n))
            }
            k = W(k, ia, "ecommerce", f);
            U(k, G);
            p && (I = {})
        }

        function jb(a, g) {
            var b, c = "(^| )(piwik[_-]" + g;
            if (a)
                for (b = 0; b < a.length; b++) c +=
                    "|" + a[b];
            return new RegExp(c + ")( |$)")
        }

        function za(a) {
            return Z && a && 0 === String(a).indexOf(Z)
        }

        function kb(a) {
            var g = a,
                b;
            for (b = g.parentNode; null !== b && h(b) && !e.isLinkElement(g);) g = b, b = g.parentNode;
            a = g;
            if (e.hasNodeAttribute(a, "href") && h(a.href) && (g = e.getAttributeValueFromNode(a, "href"), !za(g))) {
                var c = a.pathname || F(a.href),
                    g = a.hostname || qa(a.href),
                    d = g.toLowerCase(),
                    g = a.href.replace(g, d);
                if (!/^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):/i.test(g)) {
                    b = a.className;
                    a: {
                        var k, f, l;
                        for (k =
                            0; k < Y.length; k++)
                            if (f = R(Y[k]), l = F(Y[k]), O(d, f) && n(c, l)) {
                                c = !0;
                                break a
                            }
                        c = !1
                    }
                    a = e.hasNodeAttribute(a, "download");
                    za(g) ? b = 0 : (d = jb(Jb, "download"), k = jb(Kb, "link"), f = new RegExp("\\.(" + ja.join("|") + ")([?&#]|$)", "i"), b = k.test(b) ? "link" : a || d.test(b) || f.test(g) ? "download" : c ? 0 : "link");
                    if (b) return {
                        type: b,
                        href: g
                    }
                }
            }
        }

        function Aa(a, g, b, c) {
            if (a = q.buildInteractionRequestParams(a, g, b, c)) return W(a, null, "contentInteraction")
        }

        function Lb(a, g, b, c, d) {
            if (h(a)) {
                if (za(a)) return a;
                var e = q.toAbsoluteUrl(a),
                    e = "redirecturl=" + x(e) +
                    "&",
                    e = e + Aa(g, b, c, d || a);
                a = "&";
                0 > Z.indexOf("?") && (a = "?");
                return Z + a + e
            }
        }

        function lb(a, g) {
            if (!a || !g) return !1;
            var b = q.findTargetNode(a);
            if (q.shouldIgnoreInteraction(b)) return !1;
            var b = q.findTargetNodeNoDefault(a),
                c;
            if (c = b) c = !(b && g && (b.contains ? b.contains(g) : b === g || b.compareDocumentPosition && b.compareDocumentPosition(g) & 16));
            return c ? !1 : !0
        }

        function Mb(a, g, b) {
            if (a) {
                var c = q.findParentContentNode(a);
                if (c && lb(c, a) && (a = q.buildContentBlock(c))) return !a.target && b && (a.target = b), q.buildInteractionRequestParams(g,
                    a.name, a.piece, a.target)
            }
        }

        function Nb(a) {
            if (!ka || !ka.length) return !1;
            var g, b;
            for (g = 0; g < ka.length; g++)
                if ((b = ka[g]) && b.name === a.name && b.piece === a.piece && b.target === a.target) return !0;
            return !1
        }

        function mb(a) {
            if (!a) return !1;
            var g = q.findTargetNode(a);
            if (!g || q.shouldIgnoreInteraction(g)) return !1;
            var b = kb(g);
            if (nb && b && b.type) return !1;
            if (e.isLinkElement(g) && e.hasNodeAttributeWithValue(g, "href")) {
                b = String(e.getAttributeValueFromNode(g, "href"));
                if (0 === b.indexOf("#")) return !1;
                if (za(b)) return !0;
                if (!q.isUrlToCurrentDomain(b)) return !1;
                var c = q.buildContentBlock(a);
                if (!c) return;
                a = c.name;
                var d = c.piece,
                    c = c.target;
                if (!e.hasNodeAttributeWithValue(g, q.CONTENT_TARGET_ATTR) || g.wasContentTargetAttrReplaced) g.wasContentTargetAttrReplaced = !0, c = q.toAbsoluteUrl(b), e.setAnyAttribute(g, q.CONTENT_TARGET_ATTR, c);
                b = Lb(b, "click", a, d, c);
                q.setHrefAttribute(g, b);
                return !0
            }
            return !1
        }

        function Ob(a) {
            return function(b) {
                if (a) {
                    var c = q.findParentContentNode(a),
                        d;
                    b && (d = b.target || b.srcElement);
                    d || (d = a);
                    if (lb(c, d)) {
                        u(G);
                        e.isLinkElement(a) && e.hasNodeAttributeWithValue(a,
                            "href") && e.hasNodeAttributeWithValue(a, q.CONTENT_TARGET_ATTR) && (b = e.getAttributeValueFromNode(a, "href"), !za(b) && a.wasContentTargetAttrReplaced && e.setAnyAttribute(a, q.CONTENT_TARGET_ATTR, ""));
                        b = kb(a);
                        if (La && b && b.type) return b.type;
                        if (mb(c)) return "href";
                        if (c = q.buildContentBlock(c)) return c = Aa("click", c.name, c.piece, c.target), U(c, G), c
                    }
                }
            }
        }

        function Pb(a) {
            if (a && a.length) {
                var b, c;
                for (b = 0; b < a.length; b++)(c = q.findTargetNode(a[b])) && !c.contentInteractionTrackingSetupDone && (c.contentInteractionTrackingSetupDone = !0, A(c, "click", Ob(c)))
            }
        }

        function Qb(a, b) {
            if (!a || !a.length) return [];
            var c, d;
            for (c = 0; c < a.length; c++) Nb(a[c]) ? (a.splice(c, 1), c--) : ka.push(a[c]);
            if (!a || !a.length) return [];
            if (b && b.length)
                for (c = 0; c < b.length; c++) mb(b[c]);
            Pb(b);
            var e = [];
            for (c = 0; c < a.length; c++)(d = W(q.buildImpressionRequestParams(a[c].name, a[c].piece, a[c].target), void 0, "contentImpressions")) && e.push(d);
            return e
        }

        function Ma(a) {
            var b = q.collectContent(a);
            return Qb(b, a)
        }

        function ob(a) {
            if (!a || !a.length) return [];
            var b;
            for (b = 0; b < a.length; b++) q.isNodeVisible(a[b]) ||
                (a.splice(b, 1), b--);
            return a && a.length ? Ma(a) : []
        }

        function Rb(a, b, c) {
            a = q.buildImpressionRequestParams(a, b, c);
            return W(a, null, "contentImpression")
        }

        function Sb(a, b) {
            if (a) {
                var c = q.findParentContentNode(a);
                if (c = q.buildContentBlock(c)) return b || (b = "Unknown"), Aa(b, c.name, c.piece, c.target)
            }
        }

        function Tb(a, b, c, d, e) {
            if (0 === String(a).length || 0 === String(b).length) return !1;
            a = "e_c=" + x(a) + "&e_a=" + x(b) + (h(c) ? "&e_n=" + x(c) : "") + (h(d) ? "&e_v=" + x(d) : "");
            e = W(a, e, "event");
            U(e, G)
        }

        function Ub(a, b, c, d, e) {
            b = b + "=" + x(k(a));
            (a = Mb(e,
                "click", a)) && (b += "&" + a);
            c = W(b, c, "link");
            U(c, d ? 0 : G, d)
        }

        function Vb(a, b) {
            return "" !== a ? a + b.charAt(0).toUpperCase() + b.slice(1) : b
        }

        function N(a) {
            var b, c, d = ["", "webkit", "ms", "moz"],
                e;
            if (!Wb)
                for (c = 0; c < d.length; c++)
                    if (e = d[c], Object.prototype.hasOwnProperty.call(r, Vb(e, "hidden"))) {
                        "prerender" === r[Vb(e, "visibilityState")] && (b = !0);
                        break
                    }
            b ? A(r, e + "visibilitychange", function fc() {
                r.removeEventListener(e + "visibilitychange", fc, !1);
                a()
            }) : a()
        }

        function Na(a) {
            "complete" === r.readyState ? a() : p.addEventListener ? p.addEventListener("load",
                a) : p.attachEvent && p.attachEvent("onload", a)
        }

        function Oa(a) {
            var b = !1;
            (b = r.attachEvent ? "complete" === r.readyState : "loading" !== r.readyState) ? a(): (r.addEventListener ? A(r, "DOMContentLoaded", function Wa() {
                r.removeEventListener("DOMContentLoaded", Wa, !1);
                b || (b = !0, a())
            }) : r.attachEvent && (r.attachEvent("onreadystatechange", function Wa() {
                "complete" === r.readyState && (r.detachEvent("onreadystatechange", Wa), b || (b = !0, a()))
            }), r.documentElement.doScroll && p === p.top && function ec() {
                if (!b) {
                    try {
                        r.documentElement.doScroll("left")
                    } catch (c) {
                        setTimeout(ec,
                            0);
                        return
                    }
                    b = !0;
                    a()
                }
            }()), A(p, "load", function() {
                b || (b = !0, a())
            }, !1))
        }

        function pb(a) {
            var b = kb(a);
            b && b.type && (b.href = f(b.href), Ub(b.href, b.type, void 0, null, a))
        }

        function Pa(a) {
            return function(b) {
                b = b || p.event;
                var c;
                a: {
                    c = b;
                    var d = c.which,
                        e = typeof c.button;d || "undefined" === e || (r.all && !r.addEventListener ? c.button & 1 ? d = 1 : c.button & 2 ? d = 3 : c.button & 4 && (d = 2) : 0 === c.button || "0" === c.button ? d = 1 : c.button & 1 ? d = 2 : c.button & 2 && (d = 3));
                    switch (d) {
                        case 1:
                            c = "left";
                            break a;
                        case 2:
                            c = "middle";
                            break a;
                        case 3:
                            c = "right";
                            break a
                    }
                    c = void 0
                }
                d =
                    b.target || b.srcElement;
                "click" === b.type ? (b = !1, a && "middle" === c && (b = !0), d && !b && pb(d)) : "mousedown" === b.type ? "middle" === c && d ? (Qa = c, Ra = d) : Qa = Ra = null : "mouseup" === b.type ? (c === Qa && d === Ra && pb(d), Qa = Ra = null) : "contextmenu" === b.type && pb(d)
            }
        }

        function Xb(a, b) {
            A(a, "click", Pa(b), !1);
            b && (A(a, "mouseup", Pa(b), !1), A(a, "mousedown", Pa(b), !1), A(a, "contextmenu", Pa(b), !1))
        }

        function Yb(a, b, c) {
            function d() {
                e = !0
            }
            if (ua) return !0;
            ua = !0;
            var e = !1,
                k, f;
            Na(function() {
                function h(a) {
                    setTimeout(function() {
                        ua && (e = !1, c.trackVisibleContentImpressions(),
                            h(a))
                    }, a)
                }

                function l(a) {
                    setTimeout(function() {
                        ua && (e && (e = !1, c.trackVisibleContentImpressions()), l(a))
                    }, a)
                }
                if (a) {
                    k = ["scroll", "resize"];
                    for (f = 0; f < k.length; f++) r.addEventListener ? r.addEventListener(k[f], d) : p.attachEvent("on" + k[f], d);
                    l(100)
                }
                b && 0 < b && (b = parseInt(b, 10), h(b))
            })
        }
        var Sa = {},
            qb = dc(r.domain, p.location.href, bc()),
            Fa = R(qb[0]),
            Eb = f(qb[1]),
            ya = f(qb[2]),
            Zb = !1,
            yb = "GET",
            xb = "application/x-www-form-urlencoded; charset=UTF-8",
            Z = a || "",
            $b = "",
            hb = "",
            L = c || "",
            ta = "",
            xa = "",
            Ha, Ta = "",
            ja = "7z aac apk arc arj asf asx avi azw3 bin csv deb dmg doc docx epub exe flv gif gz gzip hqx ibooks jar jpg jpeg js mobi mp2 mp3 mp4 mpg mpeg mov movie msi msp odb odf odg ods odt ogg ogv pdf phps png ppt pptx qt qtm ra ram rar rpm sea sit tar tbz tbz2 bz bz2 tgz torrent txt wav wma wmv wpd xls xlsx xml z zip".split(" "),
            Y = [Fa],
            ac = [],
            Jb = [],
            Kb = [],
            G = 500,
            da, Xa, wb, ia, Ja = ["pk_campaign", "piwik_campaign", "utm_campaign", "utm_source", "utm_medium"],
            Ka = ["pk_kwd", "piwik_kwd", "utm_term"],
            zb = "_pk_",
            na, ha, ga = !1,
            Ea, Wb, eb, bb = 339552E5,
            Ia = 18E5,
            Fb = 15768E6,
            Hb = !0,
            gb = 0,
            Gb = !1,
            M = !1,
            ib, pa = {},
            fb = {},
            oa = {},
            I = {},
            aa = {},
            ka = [],
            ua = !1,
            ra = !1,
            La = !1,
            nb = !1,
            Ya = !1,
            Ca = la(),
            Da = null,
            ca, Qa, Ra, $a = cc,
            Ab;
        try {
            Ta = r.title
        } catch (Va) {
            Ta = ""
        }
        Xa = function() {
            if (Da + da <= (new Date).getTime()) {
                var a = W("ping=1", null, "ping");
                U(a, G);
                return !0
            }
            return !1
        };
        (function() {
            var a, b, c = {
                pdf: "application/pdf",
                qt: "video/quicktime",
                realp: "audio/x-pn-realaudio-plugin",
                wma: "application/x-mplayer2",
                dir: "application/x-director",
                fla: "application/x-shockwave-flash",
                java: "application/x-java-vm",
                gears: "application/x-googlegears",
                ag: "application/x-silverlight"
            };
            if (!/MSIE/.test(y.userAgent)) {
                if (y.mimeTypes && y.mimeTypes.length)
                    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (b = y.mimeTypes[c[a]], aa[a] = b && b.enabledPlugin ? "1" : "0");
                "unknown" !== typeof navigator.javaEnabled && h(y.javaEnabled) && y.javaEnabled() && (aa.java =
                    "1");
                v(p.GearsFactory) && (aa.gears = "1");
                aa.cookie = vb()
            }
            a = parseInt(wa.width, 10);
            b = parseInt(wa.height, 10);
            aa.res = parseInt(a, 10) + "x" + parseInt(b, 10)
        })();
        Za();
        cb();
        fa("run", function(a, b) {
            var c = null;
            if (m(a) && !h(Sa[a]) && b) {
                if (z(b)) c = b;
                else if (m(b)) try {
                    eval("hookObj =" + b)
                } catch (d) {}
                Sa[a] = c
            }
            return c
        });
        return {
            hook: Sa,
            getHook: function(a) {
                return Sa[a]
            },
            getQuery: function() {
                return e
            },
            getContent: function() {
                return q
            },
            buildContentImpressionRequest: Rb,
            buildContentInteractionRequest: Aa,
            buildContentInteractionRequestNode: Sb,
            buildContentInteractionTrackingRedirectUrl: Lb,
            getContentImpressionsRequestsFromNodes: Ma,
            getCurrentlyVisibleContentImpressionsRequestsIfNotTrackedYet: ob,
            trackCallbackOnLoad: Na,
            trackCallbackOnReady: Oa,
            buildContentImpressionsRequests: Qb,
            wasContentImpressionAlreadyTracked: Nb,
            appendContentInteractionToRequestIfPossible: Mb,
            setupInteractionsTracking: Pb,
            trackContentImpressionClickInteraction: Ob,
            internalIsNodeVisible: H,
            isNodeAuthorizedToTriggerInteraction: lb,
            replaceHrefIfInternalLink: mb,
            getDomains: function() {
                return Y
            },
            getConfigCookiePath: function() {
                return ha
            },
            getConfigDownloadExtensions: function() {
                return ja
            },
            enableTrackOnlyVisibleContent: function(a, b) {
                return Yb(a, b, this)
            },
            clearTrackedContentImpressions: function() {
                ka = []
            },
            getTrackedContentImpressions: function() {
                return ka
            },
            clearEnableTrackOnlyVisibleContent: function() {
                ua = !1
            },
            disableLinkTracking: function() {
                nb = La = !1
            },
            getConfigVisitorCookieTimeout: function() {
                return bb
            },
            removeAllAsyncTrackersButFirst: function() {
                C = [C[0]]
            },
            getRemainingVisitorCookieTimeout: Cb,
            getVisitorId: function() {
                return Ga().uuid
            },
            getVisitorInfo: function() {
                return Bb()
            },
            getAttributionInfo: function() {
                return sa()
            },
            getAttributionCampaignName: function() {
                return sa()[0]
            },
            getAttributionCampaignKeyword: function() {
                return sa()[1]
            },
            getAttributionReferrerTimestamp: function() {
                return sa()[2]
            },
            getAttributionReferrerUrl: function() {
                return sa()[3]
            },
            setTrackerUrl: function(a) {
                Z = a
            },
            getTrackerUrl: function() {
                return Z
            },
            addTracker: function(a, b) {
                if (!b) throw Error("A siteId must be given to add a new tracker");
                h(a) && null !== a || (a = this.getTrackerUrl());
                var c = new P(a, b);
                C.push(c);
                return c
            },
            getSiteId: function() {
                return L
            },
            setSiteId: function(a) {
                L = a;
                cb()
            },
            setUserId: function(a) {
                h(a) && a.length && (ta = a, xa = $a(ta).substr(0, 16))
            },
            getUserId: function() {
                return ta
            },
            setCustomData: function(a, b) {
                z(a) ? ia = a : (ia || (ia = {}), ia[a] = b)
            },
            getCustomData: function() {
                return ia
            },
            setCustomRequestProcessing: function(a) {
                ib = a
            },
            appendToTrackingUrl: function(a) {
                hb = a
            },
            getRequest: function(a) {
                return W(a)
            },
            addPlugin: function(a, b) {
                T[a] = b
            },
            setCustomDimension: function(a, b) {
                a = parseInt(a, 10);
                0 <
                    a && (h(b) || (b = ""), m(b) || (b = String(b)), oa[a] = b)
            },
            getCustomDimension: function(a) {
                a = parseInt(a, 10);
                if (0 < a && Object.prototype.hasOwnProperty.call(oa, a)) return oa[a]
            },
            deleteCustomDimension: function(a) {
                a = parseInt(a, 10);
                0 < a && delete oa[a]
            },
            setCustomVariable: function(a, b, c, d) {
                h(d) || (d = "visit");
                h(b) && (h(c) || (c = ""), 0 < a && (b = m(b) ? b : String(b), c = m(c) ? c : String(c), b = [b.slice(0, 200), c.slice(0, 200)], "visit" === d || 2 === d ? (!1 === M && (M = ab()), M[a] = b) : "page" === d || 3 === d ? pa[a] = b : "event" === d && (fb[a] = b)))
            },
            getCustomVariable: function(a,
                b) {
                var c;
                h(b) || (b = "visit");
                if ("page" === b || 3 === b) c = pa[a];
                else if ("event" === b) c = fb[a];
                else if ("visit" === b || 2 === b) !1 === M && (M = ab()), c = M[a];
                return !h(c) || c && "" === c[0] ? !1 : c
            },
            deleteCustomVariable: function(a, b) {
                this.getCustomVariable(a, b) && this.setCustomVariable(a, "", "", b)
            },
            storeCustomVariablesInCookie: function() {
                Gb = !0
            },
            setLinkTrackingTimer: function(a) {
                G = a
            },
            setDownloadExtensions: function(a) {
                m(a) && (a = a.split("|"));
                ja = a
            },
            addDownloadExtensions: function(a) {
                var b;
                m(a) && (a = a.split("|"));
                for (b = 0; b < a.length; b++) ja.push(a[b])
            },
            removeDownloadExtensions: function(a) {
                var b, c = [];
                m(a) && (a = a.split("|"));
                for (b = 0; b < ja.length; b++) - 1 === ba(a, ja[b]) && c.push(ja[b]);
                ja = c
            },
            setDomains: function(a) {
                Y = m(a) ? [a] : a;
                a = !1;
                var b = 0,
                    c;
                for (b; b < Y.length; b++) {
                    c = String(Y[b]);
                    if (O(Fa, R(c))) {
                        a = !0;
                        break
                    }
                    if ((c = F(c)) && "/" !== c && "/*" !== c) {
                        a = !0;
                        break
                    }
                }
                a || Y.push(Fa)
            },
            setIgnoreClasses: function(a) {
                ac = m(a) ? [a] : a
            },
            setRequestMethod: function(a) {
                yb = a || "GET"
            },
            setRequestContentType: function(a) {
                xb = a || "application/x-www-form-urlencoded; charset=UTF-8"
            },
            setReferrerUrl: function(a) {
                ya =
                    a
            },
            setCustomUrl: function(a) {
                var b = Eb,
                    c;
                rb(a) ? Ha = a : "/" === a.slice(0, 1) ? Ha = rb(b) + "://" + qa(b) + a : (b = k(b), c = b.indexOf("?"), 0 <= c && (b = b.slice(0, c)), c = b.lastIndexOf("/"), c !== b.length - 1 && (b = b.slice(0, c + 1)), Ha = b + a)
            },
            setDocumentTitle: function(a) {
                Ta = a
            },
            setAPIUrl: function(a) {
                $b = a
            },
            setDownloadClasses: function(a) {
                Jb = m(a) ? [a] : a
            },
            setLinkClasses: function(a) {
                Kb = m(a) ? [a] : a
            },
            setCampaignNameKey: function(a) {
                Ja = m(a) ? [a] : a
            },
            setCampaignKeywordKey: function(a) {
                Ka = m(a) ? [a] : a
            },
            discardHashTag: function(a) {
                wb = a
            },
            setCookieNamePrefix: function(a) {
                zb =
                    a;
                M = ab()
            },
            setCookieDomain: function(a) {
                a = R(a);
                var c;
                b("test", "testvalue", 1E4, null, a);
                "testvalue" === d("test") ? (b("test", "", -86400, null, a), c = !0) : c = !1;
                c && (na = a, Za())
            },
            setCookiePath: function(a) {
                ha = a;
                Za()
            },
            setVisitorCookieTimeout: function(a) {
                bb = 1E3 * a
            },
            setSessionCookieTimeout: function(a) {
                Ia = 1E3 * a
            },
            setReferralCookieTimeout: function(a) {
                Fb = 1E3 * a
            },
            setConversionAttributionFirstReferrer: function(a) {
                eb = a
            },
            disableCookies: function() {
                ga = !0;
                aa.cookie = "0";
                L && db()
            },
            deleteCookies: function() {
                db()
            },
            setDoNotTrack: function(a) {
                var b =
                    y.doNotTrack || y.msDoNotTrack;
                (Ea = a && ("yes" === b || "1" === b)) && this.disableCookies()
            },
            addListener: function(a, b) {
                Xb(a, b)
            },
            enableLinkTracking: function(a) {
                nb = !0;
                N(function() {
                    Oa(function() {
                        if (!La) {
                            La = !0;
                            var b, c = jb(ac, "ignore"),
                                d = r.links;
                            if (d)
                                for (b = 0; b < d.length; b++) c.test(d[b].className) || Xb(d[b], a)
                        }
                    })
                })
            },
            enableJSErrorTracking: function() {
                if (!Zb) {
                    Zb = !0;
                    var a = p.onerror;
                    p.onerror = function(b, c, d, e, k) {
                        N(function() {
                            var a = c + ":" + d;
                            e && (a += ":" + e);
                            Tb("JavaScript Errors", a, b)
                        });
                        return a ? a(b, c, d, e, k) : !1
                    }
                }
            },
            disablePerformanceTracking: function() {
                Hb = !1
            },
            setGenerationTimeMs: function(a) {
                gb = parseInt(a, 10)
            },
            enableHeartBeatTimer: function(a) {
                a = Math.max(a, 1);
                da = 1E3 * (a || 15);
                null !== Da && tb()
            },
            disableHeartBeatTimer: function() {
                ca && (clearTimeout(ca), ca = null);
                da = null;
                window.removeEventListener("focus", V);
                window.removeEventListener("blur", va)
            },
            killFrame: function() {
                p.location !== p.top.location && (p.top.location = p.location)
            },
            redirectFile: function(a) {
                "file:" === p.location.protocol && (p.location = a)
            },
            setCountPreRendered: function(a) {
                Wb = a
            },
            trackGoal: function(a, b, c) {
                N(function() {
                    var d =
                        W("idgoal=" + a + (b ? "&revenue=" + b : ""), c, "goal");
                    U(d, G)
                })
            },
            trackLink: function(a, b, c, d) {
                N(function() {
                    Ub(a, b, c, d)
                })
            },
            trackPageView: function(a, b, c) {
                ka = [];
                B(L) ? N(function() {
                    Q(Z, $b, L)
                }) : N(function() {
                    var d = a || Ta,
                        d = d && d.text ? d.text : d;
                    if (!m(d)) {
                        var e = r.getElementsByTagName("title");
                        e && h(e[0]) && (d = e[0].text)
                    }
                    d = W("action_name=" + x(d), b, "log");
                    U(d, G, c)
                })
            },
            trackAllContentImpressions: function() {
                B(L) || N(function() {
                    Oa(function() {
                        var a = q.findContentNodes(),
                            a = Ma(a);
                        Ba(a, G)
                    })
                })
            },
            trackVisibleContentImpressions: function(a,
                b) {
                B(L) || (h(a) || (a = !0), h(b) || (b = 750), Yb(a, b, this), N(function() {
                    Na(function() {
                        var a = q.findContentNodes(),
                            a = ob(a);
                        Ba(a, G)
                    })
                }))
            },
            trackContentImpression: function(a, b, c) {
                !B(L) && a && (b = b || "Unknown", N(function() {
                    var d = Rb(a, b, c);
                    U(d, G)
                }))
            },
            trackContentImpressionsWithinNode: function(a) {
                !B(L) && a && N(function() {
                    ua ? Na(function() {
                        var b = q.findContentNodesWithinNode(a),
                            b = ob(b);
                        Ba(b, G)
                    }) : Oa(function() {
                        var b = q.findContentNodesWithinNode(a),
                            b = Ma(b);
                        Ba(b, G)
                    })
                })
            },
            trackContentInteraction: function(a, b, c, d) {
                !B(L) && a && b &&
                    (c = c || "Unknown", N(function() {
                        var e = Aa(a, b, c, d);
                        U(e, G)
                    }))
            },
            trackContentInteractionNode: function(a, b) {
                !B(L) && a && N(function() {
                    var c = Sb(a, b);
                    U(c, G)
                })
            },
            logAllContentBlocksOnPage: function() {
                var a = q.findContentNodes(),
                    a = q.collectContent(a);
                void 0 !== console && console && console.log && console.log(a)
            },
            trackEvent: function(a, b, c, d, e) {
                N(function() {
                    Tb(a, b, c, d, e)
                })
            },
            trackSiteSearch: function(a, b, c, d) {
                N(function() {
                    var e = W("search=" + x(a) + (b ? "&search_cat=" + x(b) : "") + (h(c) ? "&search_count=" + c : ""), d, "sitesearch");
                    U(e, G)
                })
            },
            setEcommerceView: function(a, b, c, d) {
                h(c) && c.length ? c instanceof Array && (c = JSON2.stringify(c)) : c = "";
                pa[5] = ["_pkc", c];
                h(d) && String(d).length && (pa[2] = ["_pkp", d]);
                if (h(a) && a.length || h(b) && b.length) h(a) && a.length && (pa[3] = ["_pks", a]), h(b) && b.length || (b = ""), pa[4] = ["_pkn", b]
            },
            addEcommerceItem: function(a, b, c, d, e) {
                a.length && (I[a] = [a, b, c, d, e])
            },
            trackEcommerceOrder: function(a, b, c, d, e, k) {
                String(a).length && h(b) && Ib(a, b, c, d, e, k)
            },
            trackEcommerceCartUpdate: function(a) {
                h(a) && Ib("", a, "", "", "", "")
            }
        }
    }
    var ma, T = {},
        r = document,
        y = navigator,
        wa = screen,
        p = window,
        ea = p.performance || p.mozPerformance || p.msPerformance || p.webkitPerformance,
        x = p.encodeURIComponent,
        l = p.decodeURIComponent,
        C = [],
        w, J, e = {
            htmlCollectionToArray: function(a) {
                var c = [],
                    b;
                if (!a || !a.length) return c;
                for (b = 0; b < a.length; b++) c.push(a[b]);
                return c
            },
            find: function(a) {
                if (!document.querySelectorAll || !a) return [];
                a = document.querySelectorAll(a);
                return this.htmlCollectionToArray(a)
            },
            findMultiple: function(a) {
                if (!a || !a.length) return [];
                var c, b, d = [];
                for (c = 0; c < a.length; c++) b = this.find(a[c]),
                    d = d.concat(b);
                return d = this.makeNodesUnique(d)
            },
            findNodesByTagName: function(a, c) {
                if (!a || !c || !a.getElementsByTagName) return [];
                var b = a.getElementsByTagName(c);
                return this.htmlCollectionToArray(b)
            },
            makeNodesUnique: function(a) {
                var c = [].concat(a);
                a.sort(function(a, b) {
                    if (a === b) return 0;
                    var d = ba(c, a),
                        e = ba(c, b);
                    return d === e ? 0 : d > e ? -1 : 1
                });
                if (1 >= a.length) return a;
                var b = 0,
                    d = 0,
                    e = [],
                    f;
                for (f = a[b++]; f;) f === a[b] && (d = e.push(b)), f = a[b++] || null;
                for (; d--;) a.splice(e[d], 1);
                return a
            },
            getAttributeValueFromNode: function(a,
                c) {
                if (this.hasNodeAttribute(a, c)) {
                    if (a && a.getAttribute) return a.getAttribute(c);
                    if (a && a.attributes && "undefined" !== typeof a.attributes[c]) {
                        if (a.attributes[c].value) return a.attributes[c].value;
                        if (a.attributes[c].nodeValue) return a.attributes[c].nodeValue;
                        var b, d = a.attributes;
                        if (d) {
                            for (b = 0; b < d.length; b++)
                                if (d[b].nodeName === c) return d[b].nodeValue;
                            return null
                        }
                    }
                }
            },
            hasNodeAttributeWithValue: function(a, c) {
                return !!this.getAttributeValueFromNode(a, c)
            },
            hasNodeAttribute: function(a, c) {
                return a && a.hasAttribute ?
                    a.hasAttribute(c) : a && a.attributes ? "undefined" !== typeof a.attributes[c] : !1
            },
            hasNodeCssClass: function(a, c) {
                if (a && c && a.className) {
                    var b = "string" === typeof a.className ? a.className.split(" ") : [];
                    if (-1 !== ba(b, c)) return !0
                }
                return !1
            },
            findNodesHavingAttribute: function(a, c, b) {
                b || (b = []);
                if (!a || !c) return b;
                a = va(a);
                if (!a || !a.length) return b;
                var d, e;
                for (d = 0; d < a.length; d++) e = a[d], this.hasNodeAttribute(e, c) && b.push(e), b = this.findNodesHavingAttribute(e, c, b);
                return b
            },
            findFirstNodeHavingAttribute: function(a, c) {
                if (a &&
                    c) {
                    if (this.hasNodeAttribute(a, c)) return a;
                    var b = this.findNodesHavingAttribute(a, c);
                    if (b && b.length) return b[0]
                }
            },
            findFirstNodeHavingAttributeWithValue: function(a, c) {
                if (a && c) {
                    if (this.hasNodeAttributeWithValue(a, c)) return a;
                    var b = this.findNodesHavingAttribute(a, c);
                    if (b && b.length) {
                        var d;
                        for (d = 0; d < b.length; d++)
                            if (this.getAttributeValueFromNode(b[d], c)) return b[d]
                    }
                }
            },
            findNodesHavingCssClass: function(a, c, b) {
                b || (b = []);
                if (!a || !c) return b;
                if (a.getElementsByClassName) return c = a.getElementsByClassName(c), this.htmlCollectionToArray(c);
                a = va(a);
                if (!a || !a.length) return [];
                var d, e;
                for (d = 0; d < a.length; d++) e = a[d], this.hasNodeCssClass(e, c) && b.push(e), b = this.findNodesHavingCssClass(e, c, b);
                return b
            },
            findFirstNodeHavingClass: function(a, c) {
                if (a && c) {
                    if (this.hasNodeCssClass(a, c)) return a;
                    var b = this.findNodesHavingCssClass(a, c);
                    if (b && b.length) return b[0]
                }
            },
            isLinkElement: function(a) {
                if (!a) return !1;
                a = String(a.nodeName).toLowerCase();
                return -1 !== ba(["a", "area"], a)
            },
            setAnyAttribute: function(a, c, b) {
                a && c && (a.setAttribute ? a.setAttribute(c, b) : a[c] = b)
            }
        },
        q = {
            CONTENT_ATTR: "data-track-content",
            CONTENT_CLASS: "piwikTrackContent",
            CONTENT_NAME_ATTR: "data-content-name",
            CONTENT_PIECE_ATTR: "data-content-piece",
            CONTENT_PIECE_CLASS: "piwikContentPiece",
            CONTENT_TARGET_ATTR: "data-content-target",
            CONTENT_TARGET_CLASS: "piwikContentTarget",
            CONTENT_IGNOREINTERACTION_ATTR: "data-content-ignoreinteraction",
            CONTENT_IGNOREINTERACTION_CLASS: "piwikContentIgnoreInteraction",
            location: void 0,
            findContentNodes: function() {
                return e.findMultiple(["." + this.CONTENT_CLASS, "[" + this.CONTENT_ATTR +
                    "]"
                ])
            },
            findContentNodesWithinNode: function(a) {
                if (!a) return [];
                var c = e.findNodesHavingCssClass(a, this.CONTENT_CLASS),
                    b = e.findNodesHavingAttribute(a, this.CONTENT_ATTR);
                if (b && b.length) {
                    var d;
                    for (d = 0; d < b.length; d++) c.push(b[d])
                }
                e.hasNodeAttribute(a, this.CONTENT_ATTR) ? c.push(a) : e.hasNodeCssClass(a, this.CONTENT_CLASS) && c.push(a);
                return c = e.makeNodesUnique(c)
            },
            findParentContentNode: function(a) {
                if (a)
                    for (var c = 0; a && a !== r && a.parentNode;) {
                        if (e.hasNodeAttribute(a, this.CONTENT_ATTR) || e.hasNodeCssClass(a, this.CONTENT_CLASS)) return a;
                        a = a.parentNode;
                        if (1E3 < c) break;
                        c++
                    }
            },
            findPieceNode: function(a) {
                var c;
                (c = e.findFirstNodeHavingAttribute(a, this.CONTENT_PIECE_ATTR)) || (c = e.findFirstNodeHavingClass(a, this.CONTENT_PIECE_CLASS));
                return c ? c : a
            },
            findTargetNodeNoDefault: function(a) {
                if (a) {
                    var c = e.findFirstNodeHavingAttributeWithValue(a, this.CONTENT_TARGET_ATTR);
                    if (c || (c = e.findFirstNodeHavingAttribute(a, this.CONTENT_TARGET_ATTR)) || (c = e.findFirstNodeHavingClass(a, this.CONTENT_TARGET_CLASS))) return c
                }
            },
            findTargetNode: function(a) {
                var c = this.findTargetNodeNoDefault(a);
                return c ? c : a
            },
            findContentName: function(a) {
                if (a) {
                    var c = e.findFirstNodeHavingAttributeWithValue(a, this.CONTENT_NAME_ATTR);
                    if (c) return e.getAttributeValueFromNode(c, this.CONTENT_NAME_ATTR);
                    if (c = this.findContentPiece(a)) return this.removeDomainIfIsInLink(c);
                    if (e.hasNodeAttributeWithValue(a, "title")) return e.getAttributeValueFromNode(a, "title");
                    c = this.findPieceNode(a);
                    if (e.hasNodeAttributeWithValue(c, "title")) return e.getAttributeValueFromNode(c, "title");
                    a = this.findTargetNode(a);
                    if (e.hasNodeAttributeWithValue(a,
                            "title")) return e.getAttributeValueFromNode(a, "title")
                }
            },
            findContentPiece: function(a) {
                if (a) {
                    var c = e.findFirstNodeHavingAttributeWithValue(a, this.CONTENT_PIECE_ATTR);
                    if (c) return e.getAttributeValueFromNode(c, this.CONTENT_PIECE_ATTR);
                    a = this.findPieceNode(a);
                    if (a = this.findMediaUrlInNode(a)) return this.toAbsoluteUrl(a)
                }
            },
            findContentTarget: function(a) {
                if (a) {
                    var c = this.findTargetNode(a);
                    if (e.hasNodeAttributeWithValue(c, this.CONTENT_TARGET_ATTR)) return e.getAttributeValueFromNode(c, this.CONTENT_TARGET_ATTR);
                    if (e.hasNodeAttributeWithValue(c, "href")) return a = e.getAttributeValueFromNode(c, "href"), this.toAbsoluteUrl(a);
                    a = this.findPieceNode(a);
                    if (e.hasNodeAttributeWithValue(a, "href")) return a = e.getAttributeValueFromNode(a, "href"), this.toAbsoluteUrl(a)
                }
            },
            isSameDomain: function(a) {
                if (!a || !a.indexOf) return !1;
                if (0 === a.indexOf(this.getLocation().origin)) return !0;
                a = a.indexOf(this.getLocation().host);
                return 8 >= a && 0 <= a ? !0 : !1
            },
            removeDomainIfIsInLink: function(a) {
                a && a.search && -1 !== a.search(/^https?:\/\/[^/]+/) && this.isSameDomain(a) &&
                    ((a = a.replace(/^.*\/\/[^/]+/, "")) || (a = "/"));
                return a
            },
            findMediaUrlInNode: function(a) {
                if (a) {
                    var c = a.nodeName.toLowerCase();
                    if (-1 !== ba(["img", "embed", "video", "audio"], c) && e.findFirstNodeHavingAttributeWithValue(a, "src")) return a = e.findFirstNodeHavingAttributeWithValue(a, "src"), e.getAttributeValueFromNode(a, "src");
                    if ("object" === c && e.hasNodeAttributeWithValue(a, "data")) return e.getAttributeValueFromNode(a, "data");
                    if ("object" === c) {
                        if ((c = e.findNodesByTagName(a, "param")) && c.length) {
                            var b;
                            for (b = 0; b < c.length; b++)
                                if ("movie" ===
                                    e.getAttributeValueFromNode(c[b], "name") && e.hasNodeAttributeWithValue(c[b], "value")) return e.getAttributeValueFromNode(c[b], "value")
                        }
                        if ((a = e.findNodesByTagName(a, "embed")) && a.length) return this.findMediaUrlInNode(a[0])
                    }
                }
            },
            trim: function(a) {
                return a && String(a) === a ? a.replace(/^\s+|\s+$/g, "") : a
            },
            isOrWasNodeInViewport: function(a) {
                if (!a || !a.getBoundingClientRect || 1 !== a.nodeType) return !0;
                var c = a.getBoundingClientRect(),
                    b = r.documentElement || {},
                    d = 0 > c.top;
                d && a.offsetTop && (d = 0 < a.offsetTop + c.height);
                a = b.clientWidth;
                p.innerWidth && a > p.innerWidth && (a = p.innerWidth);
                b = b.clientHeight;
                p.innerHeight && b > p.innerHeight && (b = p.innerHeight);
                return (0 < c.bottom || d) && 0 < c.right && c.left < a && (c.top < b || d)
            },
            isNodeVisible: function(a) {
                var c = H(a);
                a = this.isOrWasNodeInViewport(a);
                return c && a
            },
            buildInteractionRequestParams: function(a, c, b, d) {
                var e = "";
                a && (e += "c_i=" + x(a));
                c && (e && (e += "&"), e += "c_n=" + x(c));
                b && (e && (e += "&"), e += "c_p=" + x(b));
                d && (e && (e += "&"), e += "c_t=" + x(d));
                return e
            },
            buildImpressionRequestParams: function(a, c, b) {
                a = "c_n=" + x(a) + "&c_p=" +
                    x(c);
                b && (a += "&c_t=" + x(b));
                return a
            },
            buildContentBlock: function(a) {
                if (a) {
                    var c = this.findContentName(a),
                        b = this.findContentPiece(a);
                    a = this.findContentTarget(a);
                    c = this.trim(c);
                    b = this.trim(b);
                    a = this.trim(a);
                    return {
                        name: c || "Unknown",
                        piece: b || "Unknown",
                        target: a || ""
                    }
                }
            },
            collectContent: function(a) {
                if (!a || !a.length) return [];
                var c = [],
                    b, d;
                for (b = 0; b < a.length; b++) d = this.buildContentBlock(a[b]), h(d) && c.push(d);
                return c
            },
            setLocation: function(a) {
                this.location = a
            },
            getLocation: function() {
                var a = this.location || p.location;
                a.origin || (a.origin = a.protocol + "//" + a.hostname + (a.port ? ":" + a.port : ""));
                return a
            },
            toAbsoluteUrl: function(a) {
                return a && String(a) === a || "" === a ? "" === a ? this.getLocation().href : -1 !== a.search(/^\/\//) ? this.getLocation().protocol + a : -1 !== a.search(/:\/\//) ? a : 0 === a.indexOf("#") || 0 === a.indexOf("?") ? this.getLocation().origin + this.getLocation().pathname + a : 0 === a.search("^[a-zA-Z]{2,11}:") ? a : -1 !== a.search(/^\//) ? this.getLocation().origin + a : this.getLocation().origin + this.getLocation().pathname.match(/(.*\/)/)[0] + a :
                    a
            },
            isUrlToCurrentDomain: function(a) {
                a = this.toAbsoluteUrl(a);
                if (!a) return !1;
                var c = this.getLocation().origin;
                return c === a ? !0 : 0 === String(a).indexOf(c) ? ":" === String(a).substr(c.length, 1) ? !1 : !0 : !1
            },
            setHrefAttribute: function(a, c) {
                a && c && e.setAnyAttribute(a, "href", c)
            },
            shouldIgnoreInteraction: function(a) {
                var c = e.hasNodeAttribute(a, this.CONTENT_IGNOREINTERACTION_ATTR);
                a = e.hasNodeCssClass(a, this.CONTENT_IGNOREINTERACTION_CLASS);
                return c || a
            }
        };
    A(p, "beforeunload", function() {
        var a;
        fa("unload");
        if (ma) {
            do a = new Date;
            while (a.getTimeAlias() < ma)
        }
    }, !1);
    Date.prototype.getTimeAlias = Date.prototype.getTime;
    C.push(new P);
    _paq = function(a, c) {
        var b = {},
            d, e;
        for (d = 0; d < c.length; d++) {
            var f = c[d];
            b[f] = 1;
            for (e = 0; e < a.length; e++)
                if (a[e] && a[e][0]) {
                    var h = a[e][0];
                    f === h && (D(a[e]), delete a[e], 1 < b[h] && F("The method " + h + ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Piwik trackers documentation: http://developer.piwik.org/guides/tracking-javascript-guide#multiple-piwik-trackers'),
                        b[h]++)
                }
        }
        return a
    }(_paq, "addTracker disableCookies setTrackerUrl setAPIUrl setCookiePath setCookieDomain setDomains setUserId setSiteId enableLinkTracking".split(" "));
    for (w = 0; w < _paq.length; w++) _paq[w] && D(_paq[w]);
    _paq = new function() {
        return {
            push: D
        }
    };
    J = {
        addPlugin: function(a, c) {
            T[a] = c
        },
        getTracker: function(a, c) {
            h(c) || (c = this.getAsyncTracker().getSiteId());
            h(a) || (a = this.getAsyncTracker().getTrackerUrl());
            return new P(a, c)
        },
        getAsyncTracker: function(a, c) {
            var b;
            C && C[0] && (b = C[0]);
            if (!c && !a) return b;
            h(c) &&
                null !== c || !b || (c = b.getSiteId());
            h(a) && null !== a || !b || (a = b.getTrackerUrl());
            var d = 0;
            for (d; d < C.length; d++)
                if ((b = C[d]) && String(b.getSiteId()) === String(c) && b.getTrackerUrl() === a) return b
        }
    };
    "function" === typeof define && define.amd && define("piwik", [], function() {
        return J
    });
    return J
}());
window && window.piwikAsyncInit && window.piwikAsyncInit();
(function() {
    "undefined" === typeof AnalyticsTracker && (AnalyticsTracker = window.ChinTracker)
})();
"function" !== typeof chintracker_log && (chintracker_log = function(f, h, v, z) {
    function m(f) {
        try {
            if (window["piwik_" + f]) return window["piwik_" + f]
        } catch (h) {}
    }
    var t = window.ChinTracker.getTracker(v, h);
    t.setDocumentTitle(f);
    t.setCustomData(z);
    (f = m("tracker_pause")) && t.setLinkTrackingTimer(f);
    (f = m("download_extensions")) && t.setDownloadExtensions(f);
    (f = m("hosts_alias")) && t.setDomains(f);
    (f = m("ignore_classes")) && t.setIgnoreClasses(f);
    t.trackPageView();
    m("install_tracker") && (piwik_track = function(f, h, m, v) {
        t.setSiteId(h);
        t.setTrackerUrl(m);
        t.trackLink(f, v)
    }, t.enableLinkTracking())
});

var hostname = window.location.hostname;
if ("bigmua.com" == hostname) {
    var url = window.location.href;
    console.log(url);
    if ("http://bigmua.com/cart/dat-hang-buoc-3" == url) {
        var cart_check = document.getElementById("submit");
        var sum = document.querySelector('.totalfx').getAttribute("value");
        var order_id = new Date().getTime();
        cart_check.addEventListener("click", function(f) {
            ChinTracker.getAsyncTracker();
            _paq.push(["trackEcommerceOrder",
                order_id, sum, sum, 0, 0, !1
            ]);
            _paq.push(["trackPageView"])
        })


    }
    var but = document.querySelector(".product-info-r a.addcart");
    if (but) {
        var url1 = url.split('_');
        var sku_id = url1[url1.length - 1].replace(/\.html.*$/g, "");
        //	console.log(sku_id);
        var sku_price = document.querySelector('.product-info-price span.pricedeal').textContent.trim().replace(/\./g, "").replace(/đ/, "");
        var sku_title = document.querySelector('.product-detail-box1 h1.entry-name').textContent;
        var sku_category = document.querySelector('.bdiv a.last span').textContent;
        //	console.log(sku_price);
        //	console.log(sku_title);
        //	console.log(sku_category);
        but.addEventListener("click", function(f) {
            ChinTracker.getAsyncTracker();
            _paq.push(["addEcommerceItem", sku_id, sku_title, sku_category, sku_price, 1]);
            _paq.push(["trackPageView"])
        });
        _paq.push(["setEcommerceView", sku_id, sku_title, sku_category, sku_price, 1]);
        _paq.push(["trackPageView"])
    }

} else if ("mymall.vn" == hostname) {
    var url = window.location.href;
    if ("https://mymall.vn/cart/payment" == url) {
        var cart_check = document.getElementById("checkingcart"),
            shoppingcart = JSON.parse(localStorage.getItem("spcart"));
        if (shoppingcart && 0 < shoppingcart.length) {
            for (var order_id = document.querySelector("input[name=CartKey]").getAttribute("value"), sum = 0, i = 0; i < shoppingcart.length; i++) cart = shoppingcart[i], sum += cart.price * cart.amount;
            cart_check.addEventListener("click", function(f) {
                ChinTracker.getAsyncTracker();
                _paq.push(["trackEcommerceOrder",
                    order_id, sum, sum, 0, 0, !1
                ]);
                _paq.push(["trackPageView"])
            })
        }
    } else {
        var but = document.querySelector(".add-to-cart-btn");
        if (but) {
            var url1 = url.split("-"),
                sku_id = url1[url1.length - 1].replace(/\.html.*$/g, ""),
                sku_category_e = document.querySelector(".product-tab li label"),
                sku_category = sku_category_e ? sku_category_e.innerText : "UNKNOWN_CATEGORY";
            sku_title_e = document.querySelector(".product-option h1"),
                sku_title = sku_title_e ? sku_title_e.innerText : "UNKNOWN_TITLE",
                sku_price_e = document.getElementById("Price-mymall"),
                sku_price = sku_price_e ? sku_price_e.innerText : "0",
                sku_price = sku_price.replace(/(\.|\,)/g, ""),
                tracker = ChinTracker.getAsyncTracker();
            but.addEventListener("click", function(f) {
                ChinTracker.getAsyncTracker();
                _paq.push(["addEcommerceItem", sku_id, sku_title, sku_category, sku_price, 1]);
                _paq.push(["trackPageView"])
            });
            _paq.push(["setEcommerceView", sku_id, sku_title, sku_category, sku_price, 1]);
            _paq.push(["trackPageView"])
        }
    }
} else if (hostname == "dzogame.com" || hostname == "ktk.playpark.com") {
    //                var tracker = Piwik.getTracker('http://tracker.chinmedia.vn/track.php',21);
    var tracker = ChinTracker.getAsyncTracker();
    var links = document.getElementsByTagName("a");
    var l, href;
    for (var i = 0; i < links.length; i++) {
        l = links[i];
        if (l.hasAttribute('onclick')) {
            href = l.getAttribute('href');
            if (href) {
                l.addEventListener('click', function(evt) {
                    var targ = evt.currentTarget;
                    var mhref = targ.getAttribute('href');
                    tracker.trackLink(mhref, 'link');
                });
            }
        }
    }

}