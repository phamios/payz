/*
 almond 0.2.9 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/almond for details
*/
(function(l) {
    "function" === typeof define && define.amd ? define(["jquery"], l) : "object" === typeof exports ? l(require("jquery")) : l(jQuery)
})(function(l) {
    var k = function() {
            if (l && l.fn && l.fn.select2 && l.fn.select2.amd) var h = l.fn.select2.amd;
            (function() {
                if (!h || !h.requirejs) {
                    h ? f = h : h = {};
                    var e, f, d;
                    (function(c) {
                        function b(a, b) {
                            var g, c, n, d, p, e, f, t, h, q = b && b.split("/"),
                                s = v.map,
                                k = s && s["*"] || {};
                            if (a && "." === a.charAt(0))
                                if (b) {
                                    q = q.slice(0, q.length - 1);
                                    a = a.split("/");
                                    p = a.length - 1;
                                    v.nodeIdCompat && B.test(a[p]) && (a[p] = a[p].replace(B,
                                        ""));
                                    a = q.concat(a);
                                    for (p = 0; p < a.length; p += 1)
                                        if (g = a[p], "." === g) a.splice(p, 1), p -= 1;
                                        else if (".." === g)
                                        if (1 !== p || ".." !== a[2] && ".." !== a[0]) 0 < p && (a.splice(p - 1, 2), p -= 2);
                                        else break;
                                    a = a.join("/")
                                } else 0 === a.indexOf("./") && (a = a.substring(2));
                            if ((q || k) && s) {
                                g = a.split("/");
                                for (p = g.length; 0 < p; p -= 1) {
                                    c = g.slice(0, p).join("/");
                                    if (q)
                                        for (h = q.length; 0 < h; h -= 1)
                                            if (n = s[q.slice(0, h).join("/")])
                                                if (n = n[c]) {
                                                    d = n;
                                                    e = p;
                                                    break
                                                }
                                    if (d) break;
                                    !f && k && k[c] && (f = k[c], t = p)
                                }!d && f && (d = f, e = t);
                                d && (g.splice(0, e, d), a = g.join("/"))
                            }
                            return a
                        }

                        function a(a,
                            b) {
                            return function() {
                                return k.apply(c, C.call(arguments, 0).concat([a, b]))
                            }
                        }

                        function g(a) {
                            return function(g) {
                                return b(g, a)
                            }
                        }

                        function n(a) {
                            return function(b) {
                                u[a] = b
                            }
                        }

                        function p(a) {
                            if (w.call(x, a)) {
                                var b = x[a];
                                delete x[a];
                                A[a] = !0;
                                s.apply(c, b)
                            }
                            if (!w.call(u, a) && !w.call(A, a)) throw Error("No " + a);
                            return u[a]
                        }

                        function t(a) {
                            var b, g = a ? a.indexOf("!") : -1; - 1 < g && (b = a.substring(0, g), a = a.substring(g + 1, a.length));
                            return [b, a]
                        }

                        function h(a) {
                            return function() {
                                return v && v.config && v.config[a] || {}
                            }
                        }
                        var s, k, r, l, u = {},
                            x = {},
                            v = {},
                            A = {},
                            w = Object.prototype.hasOwnProperty,
                            C = [].slice,
                            B = /\.js$/;
                        r = function(a, c) {
                            var n, d = t(a),
                                e = d[0];
                            a = d[1];
                            e && (e = b(e, c), n = p(e));
                            e ? a = n && n.normalize ? n.normalize(a, g(c)) : b(a, c) : (a = b(a, c), d = t(a), e = d[0], a = d[1], e && (n = p(e)));
                            return {
                                f: e ? e + "!" + a : a,
                                n: a,
                                pr: e,
                                p: n
                            }
                        };
                        l = {
                            require: function(b) {
                                return a(b)
                            },
                            exports: function(a) {
                                var b = u[a];
                                return "undefined" !== typeof b ? b : u[a] = {}
                            },
                            module: function(a) {
                                return {
                                    id: a,
                                    uri: "",
                                    exports: u[a],
                                    config: h(a)
                                }
                            }
                        };
                        s = function(b, g, d, e) {
                            var f, t, h, q, m = [];
                            t = typeof d;
                            var s;
                            e = e || b;
                            if ("undefined" ===
                                t || "function" === t) {
                                g = !g.length && d.length ? ["require", "exports", "module"] : g;
                                for (q = 0; q < g.length; q += 1)
                                    if (h = r(g[q], e), t = h.f, "require" === t) m[q] = l.require(b);
                                    else if ("exports" === t) m[q] = l.exports(b), s = !0;
                                else if ("module" === t) f = m[q] = l.module(b);
                                else if (w.call(u, t) || w.call(x, t) || w.call(A, t)) m[q] = p(t);
                                else if (h.p) h.p.load(h.n, a(e, !0), n(t), {}), m[q] = u[t];
                                else throw Error(b + " missing " + t);
                                g = d ? d.apply(u[b], m) : void 0;
                                b && (f && f.exports !== c && f.exports !== u[b] ? u[b] = f.exports : g === c && s || (u[b] = g))
                            } else b && (u[b] = d)
                        };
                        e = f =
                            k = function(a, b, g, n, d) {
                                if ("string" === typeof a) return l[a] ? l[a](b) : p(r(a, b).f);
                                if (!a.splice) {
                                    v = a;
                                    v.deps && k(v.deps, v.callback);
                                    if (!b) return;
                                    b.splice ? (a = b, b = g, g = null) : a = c
                                }
                                b = b || function() {};
                                "function" === typeof g && (g = n, n = d);
                                n ? s(c, a, b, g) : setTimeout(function() {
                                    s(c, a, b, g)
                                }, 4);
                                return k
                            };
                        k.config = function(a) {
                            return k(a)
                        };
                        e._defined = u;
                        d = function(a, b, g) {
                            b.splice || (g = b, b = []);
                            w.call(u, a) || w.call(x, a) || (x[a] = [a, b, g])
                        };
                        d.amd = {
                            jQuery: !0
                        }
                    })();
                    h.requirejs = e;
                    h.require = f;
                    h.define = d
                }
            })();
            h.define("almond", function() {});
            h.define("jquery", [], function() {
                var e = l || $;
                null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page.");
                return e
            });
            h.define("select2/utils", ["jquery"], function(e) {
                function f(b) {
                    b = b.prototype;
                    var a = [],
                        g;
                    for (g in b) "function" === typeof b[g] && "constructor" !== g && a.push(g);
                    return a
                }
                var d = {
                        Extend: function(b, a) {
                            function g() {
                                this.constructor = b
                            }
                            var c = {}.hasOwnProperty,
                                d;
                            for (d in a) c.call(a, d) && (b[d] = a[d]);
                            g.prototype = a.prototype;
                            b.prototype = new g;
                            b.__super__ = a.prototype;
                            return b
                        },
                        Decorate: function(b, a) {
                            function g() {
                                var g = Array.prototype.unshift,
                                    c = b.prototype.constructor;
                                0 < a.prototype.constructor.length && (g.call(arguments, b.prototype.constructor), c = a.prototype.constructor);
                                c.apply(this, arguments)
                            }
                            var c = f(a),
                                d = f(b);
                            a.displayName = b.displayName;
                            g.prototype = new function() {
                                this.constructor = g
                            };
                            for (var e = 0; e < d.length; e++) {
                                var q = d[e];
                                g.prototype[q] = b.prototype[q]
                            }
                            d = function(b) {
                                var c =
                                    function() {};
                                b in g.prototype && (c = g.prototype[b]);
                                var n = a.prototype[b];
                                return function() {
                                    Array.prototype.unshift.call(arguments, c);
                                    return n.apply(this, arguments)
                                }
                            };
                            for (e = 0; e < c.length; e++) q = c[e], g.prototype[q] = d(q);
                            return g
                        }
                    },
                    c = function() {
                        this.listeners = {}
                    };
                c.prototype.on = function(b, a) {
                    this.listeners = this.listeners || {};
                    b in this.listeners ? this.listeners[b].push(a) : this.listeners[b] = [a]
                };
                c.prototype.trigger = function(b) {
                    var a = Array.prototype.slice;
                    this.listeners = this.listeners || {};
                    b in this.listeners &&
                        this.invoke(this.listeners[b], a.call(arguments, 1));
                    "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                };
                c.prototype.invoke = function(b, a) {
                    for (var g = 0, c = b.length; g < c; g++) b[g].apply(this, a)
                };
                d.Observable = c;
                d.generateChars = function(b) {
                    for (var a = "", g = 0; g < b; g++) var c = Math.floor(36 * Math.random()),
                        a = a + c.toString(36);
                    return a
                };
                d.bind = function(b, a) {
                    return function() {
                        b.apply(a, arguments)
                    }
                };
                d._convertData = function(b) {
                    for (var a in b) {
                        var g = a.split("-"),
                            c = b;
                        if (1 !== g.length) {
                            for (var d = 0; d < g.length; d++) {
                                var e =
                                    g[d],
                                    e = e.substring(0, 1).toLowerCase() + e.substring(1);
                                e in c || (c[e] = {});
                                d == g.length - 1 && (c[e] = b[a]);
                                c = c[e]
                            }
                            delete b[a]
                        }
                    }
                    return b
                };
                d.hasScroll = function(b, a) {
                    var g = e(a),
                        c = a.style.overflowX,
                        d = a.style.overflowY;
                    return c !== d || "hidden" !== d && "visible" !== d ? "scroll" === c || "scroll" === d ? !0 : g.innerHeight() < a.scrollHeight || g.innerWidth() < a.scrollWidth : !1
                };
                d.escapeMarkup = function(b) {
                    var a = {
                        "\\": "&#92;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#47;"
                    };
                    return "string" !== typeof b ? b : String(b).replace(/[&<>"'\/\\]/g,
                        function(b) {
                            return a[b]
                        })
                };
                d.appendMany = function(b, a) {
                    if ("1.7" === e.fn.jquery.substr(0, 3)) {
                        var g = e();
                        e.map(a, function(a) {
                            g = g.add(a)
                        });
                        a = g
                    }
                    b.append(a)
                };
                return d
            });
            h.define("select2/results", ["jquery", "./utils"], function(e, f) {
                function d(c, b, a) {
                    this.$element = c;
                    this.data = a;
                    this.options = b;
                    d.__super__.constructor.call(this)
                }
                f.Extend(d, f.Observable);
                d.prototype.render = function() {
                    var c = e('<ul class="select2-results__options" role="tree"></ul>');
                    this.options.get("multiple") && c.attr("aria-multiselectable", "true");
                    return this.$results = c
                };
                d.prototype.clear = function() {
                    this.$results.empty()
                };
                d.prototype.displayMessage = function(c) {
                    var b = this.options.get("escapeMarkup");
                    this.clear();
                    this.hideLoading();
                    var a = e('<li role="treeitem" class="select2-results__option"></li>'),
                        g = this.options.get("translations").get(c.message);
                    a.append(b(g(c.args)));
                    a[0].className += " select2-results__message";
                    this.$results.append(a)
                };
                d.prototype.hideMessages = function() {
                    this.$results.find(".select2-results__message").remove()
                };
                d.prototype.append =
                    function(c) {
                        this.hideLoading();
                        var b = [];
                        if (null == c.results || 0 === c.results.length) 0 === this.$results.children().length && this.trigger("results:message", {
                            message: "noResults"
                        });
                        else {
                            c.results = this.sort(c.results);
                            for (var a = 0; a < c.results.length; a++) {
                                var g = this.option(c.results[a]);
                                b.push(g)
                            }
                            this.$results.append(b)
                        }
                    };
                d.prototype.position = function(c, b) {
                    b.find(".select2-results").append(c)
                };
                d.prototype.sort = function(c) {
                    return this.options.get("sorter")(c)
                };
                d.prototype.setClasses = function() {
                    var c = this;
                    this.data.current(function(b) {
                        var a =
                            e.map(b, function(a) {
                                return a.id.toString()
                            });
                        b = c.$results.find(".select2-results__option[aria-selected]");
                        b.each(function() {
                            var b = e(this),
                                g = e.data(this, "data"),
                                c = "" + g.id;
                            null != g.element && g.element.selected || null == g.element && -1 < e.inArray(c, a) ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false")
                        });
                        var g = b.filter("[aria-selected=true]");
                        0 < g.length ? g.first().trigger("mouseenter") : b.first().trigger("mouseenter")
                    })
                };
                d.prototype.showLoading = function(c) {
                    this.hideLoading();
                    c = {
                        disabled: !0,
                        loading: !0,
                        text: this.options.get("translations").get("searching")(c)
                    };
                    c = this.option(c);
                    c.className += " loading-results";
                    this.$results.prepend(c)
                };
                d.prototype.hideLoading = function() {
                    this.$results.find(".loading-results").remove()
                };
                d.prototype.option = function(c) {
                    var b = document.createElement("li");
                    b.className = "select2-results__option";
                    var a = {
                        role: "treeitem",
                        "aria-selected": "false"
                    };
                    c.disabled && (delete a["aria-selected"], a["aria-disabled"] = "true");
                    null == c.id && delete a["aria-selected"];
                    null != c._resultId && (b.id = c._resultId);
                    c.title && (b.title = c.title);
                    c.children && (a.role = "group", a["aria-label"] = c.text, delete a["aria-selected"]);
                    for (var g in a) b.setAttribute(g, a[g]);
                    if (c.children) {
                        a = e(b);
                        g = document.createElement("strong");
                        g.className = "select2-results__group";
                        e(g);
                        this.template(c, g);
                        for (var d = [], p = 0; p < c.children.length; p++) {
                            var f = this.option(c.children[p]);
                            d.push(f)
                        }
                        p = e("<ul></ul>", {
                            "class": "select2-results__options select2-results__options--nested"
                        });
                        p.append(d);
                        a.append(g);
                        a.append(p)
                    } else this.template(c, b);
                    e.data(b,
                        "data", c);
                    return b
                };
                d.prototype.bind = function(c, b) {
                    var a = this;
                    this.$results.attr("id", c.id + "-results");
                    c.on("results:all", function(b) {
                        a.clear();
                        a.append(b.data);
                        c.isOpen() && a.setClasses()
                    });
                    c.on("results:append", function(b) {
                        a.append(b.data);
                        c.isOpen() && a.setClasses()
                    });
                    c.on("query", function(b) {
                        a.hideMessages();
                        a.showLoading(b)
                    });
                    c.on("select", function() {
                        c.isOpen() && a.setClasses()
                    });
                    c.on("unselect", function() {
                        c.isOpen() && a.setClasses()
                    });
                    c.on("open", function() {
                        a.$results.attr("aria-expanded", "true");
                        a.$results.attr("aria-hidden", "false");
                        a.setClasses();
                        a.ensureHighlightVisible()
                    });
                    c.on("close", function() {
                        a.$results.attr("aria-expanded", "false");
                        a.$results.attr("aria-hidden", "true");
                        a.$results.removeAttr("aria-activedescendant")
                    });
                    c.on("results:toggle", function() {
                        var b = a.getHighlightedResults();
                        0 !== b.length && b.trigger("mouseup")
                    });
                    c.on("results:select", function() {
                        var b = a.getHighlightedResults();
                        if (0 !== b.length) {
                            var c = b.data("data");
                            "true" == b.attr("aria-selected") ? a.trigger("close", {}) : a.trigger("select", {
                                data: c
                            })
                        }
                    });
                    c.on("results:previous", function() {
                        var b = a.getHighlightedResults(),
                            c = a.$results.find("[aria-selected]"),
                            d = c.index(b);
                        if (0 !== d) {
                            d -= 1;
                            0 === b.length && (d = 0);
                            c = c.eq(d);
                            c.trigger("mouseenter");
                            var b = a.$results.offset().top,
                                c = c.offset().top,
                                e = a.$results.scrollTop() + (c - b);
                            0 === d ? a.$results.scrollTop(0) : 0 > c - b && a.$results.scrollTop(e)
                        }
                    });
                    c.on("results:next", function() {
                        var b = a.getHighlightedResults(),
                            c = a.$results.find("[aria-selected]"),
                            b = c.index(b) + 1;
                        if (!(b >= c.length)) {
                            var d = c.eq(b);
                            d.trigger("mouseenter");
                            var c = a.$results.offset().top + a.$results.outerHeight(!1),
                                d = d.offset().top + d.outerHeight(!1),
                                e = a.$results.scrollTop() + d - c;
                            0 === b ? a.$results.scrollTop(0) : d > c && a.$results.scrollTop(e)
                        }
                    });
                    c.on("results:focus", function(a) {
                        a.element.addClass("select2-results__option--highlighted")
                    });
                    c.on("results:message", function(b) {
                        a.displayMessage(b)
                    });
                    if (e.fn.mousewheel) this.$results.on("mousewheel", function(b) {
                        var c = a.$results.scrollTop(),
                            d = a.$results.get(0).scrollHeight - a.$results.scrollTop() + b.deltaY,
                            c = 0 < b.deltaY &&
                            0 >= c - b.deltaY,
                            d = 0 > b.deltaY && d <= a.$results.height();
                        c ? (a.$results.scrollTop(0), b.preventDefault(), b.stopPropagation()) : d && (a.$results.scrollTop(a.$results.get(0).scrollHeight - a.$results.height()), b.preventDefault(), b.stopPropagation())
                    });
                    this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(b) {
                        var c = e(this),
                            d = c.data("data");
                        "true" === c.attr("aria-selected") ? a.options.get("multiple") ? a.trigger("unselect", {
                            originalEvent: b,
                            data: d
                        }) : a.trigger("close", {}) : a.trigger("select", {
                            originalEvent: b,
                            data: d
                        })
                    });
                    this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(b) {
                        b = e(this).data("data");
                        a.getHighlightedResults().removeClass("select2-results__option--highlighted");
                        a.trigger("results:focus", {
                            data: b,
                            element: e(this)
                        })
                    })
                };
                d.prototype.getHighlightedResults = function() {
                    return this.$results.find(".select2-results__option--highlighted")
                };
                d.prototype.destroy = function() {
                    this.$results.remove()
                };
                d.prototype.ensureHighlightVisible = function() {
                    var c = this.getHighlightedResults();
                    if (0 !==
                        c.length) {
                        var b = this.$results.find("[aria-selected]").index(c),
                            a = this.$results.offset().top,
                            g = c.offset().top,
                            d = this.$results.scrollTop() + (g - a),
                            a = g - a,
                            d = d - 2 * c.outerHeight(!1);
                        2 >= b ? this.$results.scrollTop(0) : (a > this.$results.outerHeight() || 0 > a) && this.$results.scrollTop(d)
                    }
                };
                d.prototype.template = function(c, b) {
                    var a = this.options.get("templateResult"),
                        g = this.options.get("escapeMarkup"),
                        a = a(c);
                    null == a ? b.style.display = "none" : "string" === typeof a ? b.innerHTML = g(a) : e(b).append(a)
                };
                return d
            });
            h.define("select2/keys", [], function() {
                return {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46
                }
            });
            h.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(e, f, d) {
                function c(b, a) {
                    this.$element = b;
                    this.options = a;
                    c.__super__.constructor.call(this)
                }
                f.Extend(c, f.Observable);
                c.prototype.render = function() {
                    var b = e('<span class="select2-selection" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"></span>');
                    this._tabindex = 0;
                    null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex"));
                    b.attr("title", this.$element.attr("title"));
                    b.attr("tabindex", this._tabindex);
                    return this.$selection = b
                };
                c.prototype.bind = function(b, a) {
                    var c = this,
                        n = b.id + "-results";
                    this.container = b;
                    this.$selection.on("focus", function(a) {
                        c.trigger("focus", a)
                    });
                    this.$selection.on("blur", function(a) {
                        c._handleBlur(a)
                    });
                    this.$selection.on("keydown",
                        function(a) {
                            c.trigger("keypress", a);
                            a.which === d.SPACE && a.preventDefault()
                        });
                    b.on("results:focus", function(a) {
                        c.$selection.attr("aria-activedescendant", a.data._resultId)
                    });
                    b.on("selection:update", function(a) {
                        c.update(a.data)
                    });
                    b.on("open", function() {
                        c.$selection.attr("aria-expanded", "true");
                        c.$selection.attr("aria-owns", n);
                        c._attachCloseHandler(b)
                    });
                    b.on("close", function() {
                        c.$selection.attr("aria-expanded", "false");
                        c.$selection.removeAttr("aria-activedescendant");
                        c.$selection.removeAttr("aria-owns");
                        c.$selection.focus();
                        c._detachCloseHandler(b)
                    });
                    b.on("enable", function() {
                        c.$selection.attr("tabindex", c._tabindex)
                    });
                    b.on("disable", function() {
                        c.$selection.attr("tabindex", "-1")
                    })
                };
                c.prototype._handleBlur = function(b) {
                    var a = this;
                    window.setTimeout(function() {
                        document.activeElement == a.$selection[0] || e.contains(a.$selection[0], document.activeElement) || a.trigger("blur", b)
                    }, 1)
                };
                c.prototype._attachCloseHandler = function(b) {
                    e(document.body).on("mousedown.select2." + b.id, function(a) {
                        var b = e(a.target).closest(".select2");
                        e(".select2.select2-container--open").each(function() {
                            var a = e(this);
                            this != b[0] && a.data("element").select2("close")
                        })
                    })
                };
                c.prototype._detachCloseHandler = function(b) {
                    e(document.body).off("mousedown.select2." + b.id)
                };
                c.prototype.position = function(b, a) {
                    a.find(".selection").append(b)
                };
                c.prototype.destroy = function() {
                    this._detachCloseHandler(this.container)
                };
                c.prototype.update = function(b) {
                    throw Error("The `update` method must be defined in child classes.");
                };
                return c
            });
            h.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e, f, d, c) {
                function b() {
                    b.__super__.constructor.apply(this, arguments)
                }
                d.Extend(b, f);
                b.prototype.render = function() {
                    var a = b.__super__.render.call(this);
                    a.addClass("select2-selection--single");
                    a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>');
                    return a
                };
                b.prototype.bind = function(a, c) {
                    var d = this;
                    b.__super__.bind.apply(this, arguments);
                    var e = a.id + "-container";
                    this.$selection.find(".select2-selection__rendered").attr("id", e);
                    this.$selection.attr("aria-labelledby", e);
                    this.$selection.on("mousedown", function(a) {
                        1 === a.which && d.trigger("toggle", {
                            originalEvent: a
                        })
                    });
                    this.$selection.on("focus", function(a) {});
                    this.$selection.on("blur", function(a) {});
                    a.on("selection:update", function(a) {
                        d.update(a.data)
                    })
                };
                b.prototype.clear = function() {
                    this.$selection.find(".select2-selection__rendered").empty()
                };
                b.prototype.display = function(a, b) {
                    var c = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(c(a, b))
                };
                b.prototype.selectionContainer = function() {
                    return e("<span></span>")
                };
                b.prototype.update = function(a) {
                    if (0 === a.length) this.clear();
                    else {
                        a = a[0];
                        var b = this.$selection.find(".select2-selection__rendered"),
                            c = this.display(a, b);
                        b.empty().append(c);
                        b.prop("title", a.title || a.text)
                    }
                };
                return b
            });
            h.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(e, f, d) {
                function c(b, a) {
                    c.__super__.constructor.apply(this, arguments)
                }
                d.Extend(c, f);
                c.prototype.render =
                    function() {
                        var b = c.__super__.render.call(this);
                        b.addClass("select2-selection--multiple");
                        b.html('<ul class="select2-selection__rendered"></ul>');
                        return b
                    };
                c.prototype.bind = function(b, a) {
                    var g = this;
                    c.__super__.bind.apply(this, arguments);
                    this.$selection.on("click", function(a) {
                        g.trigger("toggle", {
                            originalEvent: a
                        })
                    });
                    this.$selection.on("click", ".select2-selection__choice__remove", function(a) {
                        if (!g.options.get("disabled")) {
                            var b = e(this).parent().data("data");
                            g.trigger("unselect", {
                                originalEvent: a,
                                data: b
                            })
                        }
                    })
                };
                c.prototype.clear = function() {
                    this.$selection.find(".select2-selection__rendered").empty()
                };
                c.prototype.display = function(b, a) {
                    var c = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(c(b, a))
                };
                c.prototype.selectionContainer = function() {
                    return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                };
                c.prototype.update = function(b) {
                    this.clear();
                    if (0 !== b.length) {
                        for (var a = [], c = 0; c < b.length; c++) {
                            var n = b[c],
                                e = this.selectionContainer(),
                                f = this.display(n, e);
                            e.append(f);
                            e.prop("title", n.title || n.text);
                            e.data("data", n);
                            a.push(e)
                        }
                        b = this.$selection.find(".select2-selection__rendered");
                        d.appendMany(b, a)
                    }
                };
                return c
            });
            h.define("select2/selection/placeholder", ["../utils"], function(e) {
                function f(d, c, b) {
                    this.placeholder = this.normalizePlaceholder(b.get("placeholder"));
                    d.call(this, c, b)
                }
                f.prototype.normalizePlaceholder = function(d, c) {
                    "string" === typeof c && (c = {
                        id: "",
                        text: c
                    });
                    return c
                };
                f.prototype.createPlaceholder = function(d,
                    c) {
                    var b = this.selectionContainer();
                    b.html(this.display(c));
                    b.addClass("select2-selection__placeholder").removeClass("select2-selection__choice");
                    return b
                };
                f.prototype.update = function(d, c) {
                    var b = 1 == c.length && c[0].id != this.placeholder.id;
                    if (1 < c.length || b) return d.call(this, c);
                    this.clear();
                    b = this.createPlaceholder(this.placeholder);
                    this.$selection.find(".select2-selection__rendered").append(b)
                };
                return f
            });
            h.define("select2/selection/allowClear", ["jquery", "../keys"], function(e, f) {
                function d() {}
                d.prototype.bind =
                    function(c, b, a) {
                        var g = this;
                        c.call(this, b, a);
                        null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option.");
                        this.$selection.on("mousedown", ".select2-selection__clear", function(a) {
                            g._handleClear(a)
                        });
                        b.on("keypress", function(a) {
                            g._handleKeyboardClear(a, b)
                        })
                    };
                d.prototype._handleClear = function(c, b) {
                    if (!this.options.get("disabled")) {
                        var a = this.$selection.find(".select2-selection__clear");
                        if (0 !== a.length) {
                            b.stopPropagation();
                            for (var a = a.data("data"), g = 0; g < a.length; g++) {
                                var d = {
                                    data: a[g]
                                };
                                this.trigger("unselect", d);
                                if (d.prevented) return
                            }
                            this.$element.val(this.placeholder.id).trigger("change");
                            this.trigger("toggle", {})
                        }
                    }
                };
                d.prototype._handleKeyboardClear = function(c, b, a) {
                    a.isOpen() || b.which != f.DELETE && b.which != f.BACKSPACE || this._handleClear(b)
                };
                d.prototype.update = function(c, b) {
                    c.call(this, b);
                    if (!(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === b.length)) {
                        var a = e('<span class="select2-selection__clear">&times;</span>');
                        a.data("data", b);
                        this.$selection.find(".select2-selection__rendered").prepend(a)
                    }
                };
                return d
            });
            h.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(e, f, d) {
                function c(b, a, c) {
                    b.call(this, a, c)
                }
                c.prototype.render = function(b) {
                    var a = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></li>');
                    this.$searchContainer = a;
                    this.$search =
                        a.find("input");
                    b = b.call(this);
                    this._transferTabIndex();
                    return b
                };
                c.prototype.bind = function(b, a, c) {
                    var n = this;
                    b.call(this, a, c);
                    a.on("open", function() {
                        n.$search.trigger("focus")
                    });
                    a.on("close", function() {
                        n.$search.val("");
                        n.$search.trigger("focus")
                    });
                    a.on("enable", function() {
                        n.$search.prop("disabled", !1);
                        n._transferTabIndex()
                    });
                    a.on("disable", function() {
                        n.$search.prop("disabled", !0)
                    });
                    a.on("focus", function(a) {
                        n.$search.trigger("focus")
                    });
                    this.$selection.on("focusin", ".select2-search--inline", function(a) {
                        n.trigger("focus",
                            a)
                    });
                    this.$selection.on("focusout", ".select2-search--inline", function(a) {
                        n._handleBlur(a)
                    });
                    this.$selection.on("keydown", ".select2-search--inline", function(a) {
                        a.stopPropagation();
                        n.trigger("keypress", a);
                        n._keyUpPrevented = a.isDefaultPrevented();
                        if (a.which === d.BACKSPACE && "" === n.$search.val()) {
                            var b = n.$searchContainer.prev(".select2-selection__choice");
                            0 < b.length && (b = b.data("data"), n.searchRemoveChoice(b), a.preventDefault())
                        }
                    });
                    var e = (b = document.documentMode) && 11 >= b;
                    this.$selection.on("input.searchcheck",
                        ".select2-search--inline",
                        function(a) {
                            e ? n.$selection.off("input.search input.searchcheck") : n.$selection.off("keyup.search")
                        });
                    this.$selection.on("keyup.search input.search", ".select2-search--inline", function(a) {
                        if (e && "input" === a.type) n.$selection.off("input.search input.searchcheck");
                        else {
                            var b = a.which;
                            b != d.SHIFT && b != d.CTRL && b != d.ALT && b != d.TAB && n.handleSearch(a)
                        }
                    })
                };
                c.prototype._transferTabIndex = function(b) {
                    this.$search.attr("tabindex", this.$selection.attr("tabindex"));
                    this.$selection.attr("tabindex",
                        "-1")
                };
                c.prototype.createPlaceholder = function(b, a) {
                    this.$search.attr("placeholder", a.text)
                };
                c.prototype.update = function(b, a) {
                    var c = this.$search[0] == document.activeElement;
                    this.$search.attr("placeholder", "");
                    b.call(this, a);
                    this.$selection.find(".select2-selection__rendered").append(this.$searchContainer);
                    this.resizeSearch();
                    c && this.$search.focus()
                };
                c.prototype.handleSearch = function() {
                    this.resizeSearch();
                    if (!this._keyUpPrevented) {
                        var b = this.$search.val();
                        this.trigger("query", {
                            term: b
                        })
                    }
                    this._keyUpPrevented = !1
                };
                c.prototype.searchRemoveChoice = function(b, a) {
                    this.trigger("unselect", {
                        data: a
                    });
                    this.trigger("open", {});
                    this.$search.val(a.text + " ")
                };
                c.prototype.resizeSearch = function() {
                    this.$search.css("width", "25px");
                    var b = "",
                        b = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").innerWidth() : .75 * (this.$search.val().length + 1) + "em";
                    this.$search.css("width", b)
                };
                return c
            });
            h.define("select2/selection/eventRelay", ["jquery"], function(e) {
                function f() {}
                f.prototype.bind = function(d,
                    c, b) {
                    var a = this,
                        g = "open opening close closing select selecting unselect unselecting".split(" "),
                        n = ["opening", "closing", "selecting", "unselecting"];
                    d.call(this, c, b);
                    c.on("*", function(b, c) {
                        if (-1 !== e.inArray(b, g)) {
                            c = c || {};
                            var d = e.Event("select2:" + b, {
                                params: c
                            });
                            a.$element.trigger(d); - 1 !== e.inArray(b, n) && (c.prevented = d.isDefaultPrevented())
                        }
                    })
                };
                return f
            });
            h.define("select2/translation", ["jquery", "require"], function(e, f) {
                function d(c) {
                    this.dict = c || {}
                }
                d.prototype.all = function() {
                    return this.dict
                };
                d.prototype.get =
                    function(c) {
                        return this.dict[c]
                    };
                d.prototype.extend = function(c) {
                    this.dict = e.extend({}, c.all(), this.dict)
                };
                d._cache = {};
                d.loadPath = function(c) {
                    if (!(c in d._cache)) {
                        var b = f(c);
                        d._cache[c] = b
                    }
                    return new d(d._cache[c])
                };
                return d
            });
            h.define("select2/diacritics", [], function() {
                return {
                    "\u24b6": "A",
                    "\uff21": "A",
                    "\u00c0": "A",
                    "\u00c1": "A",
                    "\u00c2": "A",
                    "\u1ea6": "A",
                    "\u1ea4": "A",
                    "\u1eaa": "A",
                    "\u1ea8": "A",
                    "\u00c3": "A",
                    "\u0100": "A",
                    "\u0102": "A",
                    "\u1eb0": "A",
                    "\u1eae": "A",
                    "\u1eb4": "A",
                    "\u1eb2": "A",
                    "\u0226": "A",
                    "\u01e0": "A",
                    "\u00c4": "A",
                    "\u01de": "A",
                    "\u1ea2": "A",
                    "\u00c5": "A",
                    "\u01fa": "A",
                    "\u01cd": "A",
                    "\u0200": "A",
                    "\u0202": "A",
                    "\u1ea0": "A",
                    "\u1eac": "A",
                    "\u1eb6": "A",
                    "\u1e00": "A",
                    "\u0104": "A",
                    "\u023a": "A",
                    "\u2c6f": "A",
                    "\ua732": "AA",
                    "\u00c6": "AE",
                    "\u01fc": "AE",
                    "\u01e2": "AE",
                    "\ua734": "AO",
                    "\ua736": "AU",
                    "\ua738": "AV",
                    "\ua73a": "AV",
                    "\ua73c": "AY",
                    "\u24b7": "B",
                    "\uff22": "B",
                    "\u1e02": "B",
                    "\u1e04": "B",
                    "\u1e06": "B",
                    "\u0243": "B",
                    "\u0182": "B",
                    "\u0181": "B",
                    "\u24b8": "C",
                    "\uff23": "C",
                    "\u0106": "C",
                    "\u0108": "C",
                    "\u010a": "C",
                    "\u010c": "C",
                    "\u00c7": "C",
                    "\u1e08": "C",
                    "\u0187": "C",
                    "\u023b": "C",
                    "\ua73e": "C",
                    "\u24b9": "D",
                    "\uff24": "D",
                    "\u1e0a": "D",
                    "\u010e": "D",
                    "\u1e0c": "D",
                    "\u1e10": "D",
                    "\u1e12": "D",
                    "\u1e0e": "D",
                    "\u0110": "D",
                    "\u018b": "D",
                    "\u018a": "D",
                    "\u0189": "D",
                    "\ua779": "D",
                    "\u01f1": "DZ",
                    "\u01c4": "DZ",
                    "\u01f2": "Dz",
                    "\u01c5": "Dz",
                    "\u24ba": "E",
                    "\uff25": "E",
                    "\u00c8": "E",
                    "\u00c9": "E",
                    "\u00ca": "E",
                    "\u1ec0": "E",
                    "\u1ebe": "E",
                    "\u1ec4": "E",
                    "\u1ec2": "E",
                    "\u1ebc": "E",
                    "\u0112": "E",
                    "\u1e14": "E",
                    "\u1e16": "E",
                    "\u0114": "E",
                    "\u0116": "E",
                    "\u00cb": "E",
                    "\u1eba": "E",
                    "\u011a": "E",
                    "\u0204": "E",
                    "\u0206": "E",
                    "\u1eb8": "E",
                    "\u1ec6": "E",
                    "\u0228": "E",
                    "\u1e1c": "E",
                    "\u0118": "E",
                    "\u1e18": "E",
                    "\u1e1a": "E",
                    "\u0190": "E",
                    "\u018e": "E",
                    "\u24bb": "F",
                    "\uff26": "F",
                    "\u1e1e": "F",
                    "\u0191": "F",
                    "\ua77b": "F",
                    "\u24bc": "G",
                    "\uff27": "G",
                    "\u01f4": "G",
                    "\u011c": "G",
                    "\u1e20": "G",
                    "\u011e": "G",
                    "\u0120": "G",
                    "\u01e6": "G",
                    "\u0122": "G",
                    "\u01e4": "G",
                    "\u0193": "G",
                    "\ua7a0": "G",
                    "\ua77d": "G",
                    "\ua77e": "G",
                    "\u24bd": "H",
                    "\uff28": "H",
                    "\u0124": "H",
                    "\u1e22": "H",
                    "\u1e26": "H",
                    "\u021e": "H",
                    "\u1e24": "H",
                    "\u1e28": "H",
                    "\u1e2a": "H",
                    "\u0126": "H",
                    "\u2c67": "H",
                    "\u2c75": "H",
                    "\ua78d": "H",
                    "\u24be": "I",
                    "\uff29": "I",
                    "\u00cc": "I",
                    "\u00cd": "I",
                    "\u00ce": "I",
                    "\u0128": "I",
                    "\u012a": "I",
                    "\u012c": "I",
                    "\u0130": "I",
                    "\u00cf": "I",
                    "\u1e2e": "I",
                    "\u1ec8": "I",
                    "\u01cf": "I",
                    "\u0208": "I",
                    "\u020a": "I",
                    "\u1eca": "I",
                    "\u012e": "I",
                    "\u1e2c": "I",
                    "\u0197": "I",
                    "\u24bf": "J",
                    "\uff2a": "J",
                    "\u0134": "J",
                    "\u0248": "J",
                    "\u24c0": "K",
                    "\uff2b": "K",
                    "\u1e30": "K",
                    "\u01e8": "K",
                    "\u1e32": "K",
                    "\u0136": "K",
                    "\u1e34": "K",
                    "\u0198": "K",
                    "\u2c69": "K",
                    "\ua740": "K",
                    "\ua742": "K",
                    "\ua744": "K",
                    "\ua7a2": "K",
                    "\u24c1": "L",
                    "\uff2c": "L",
                    "\u013f": "L",
                    "\u0139": "L",
                    "\u013d": "L",
                    "\u1e36": "L",
                    "\u1e38": "L",
                    "\u013b": "L",
                    "\u1e3c": "L",
                    "\u1e3a": "L",
                    "\u0141": "L",
                    "\u023d": "L",
                    "\u2c62": "L",
                    "\u2c60": "L",
                    "\ua748": "L",
                    "\ua746": "L",
                    "\ua780": "L",
                    "\u01c7": "LJ",
                    "\u01c8": "Lj",
                    "\u24c2": "M",
                    "\uff2d": "M",
                    "\u1e3e": "M",
                    "\u1e40": "M",
                    "\u1e42": "M",
                    "\u2c6e": "M",
                    "\u019c": "M",
                    "\u24c3": "N",
                    "\uff2e": "N",
                    "\u01f8": "N",
                    "\u0143": "N",
                    "\u00d1": "N",
                    "\u1e44": "N",
                    "\u0147": "N",
                    "\u1e46": "N",
                    "\u0145": "N",
                    "\u1e4a": "N",
                    "\u1e48": "N",
                    "\u0220": "N",
                    "\u019d": "N",
                    "\ua790": "N",
                    "\ua7a4": "N",
                    "\u01ca": "NJ",
                    "\u01cb": "Nj",
                    "\u24c4": "O",
                    "\uff2f": "O",
                    "\u00d2": "O",
                    "\u00d3": "O",
                    "\u00d4": "O",
                    "\u1ed2": "O",
                    "\u1ed0": "O",
                    "\u1ed6": "O",
                    "\u1ed4": "O",
                    "\u00d5": "O",
                    "\u1e4c": "O",
                    "\u022c": "O",
                    "\u1e4e": "O",
                    "\u014c": "O",
                    "\u1e50": "O",
                    "\u1e52": "O",
                    "\u014e": "O",
                    "\u022e": "O",
                    "\u0230": "O",
                    "\u00d6": "O",
                    "\u022a": "O",
                    "\u1ece": "O",
                    "\u0150": "O",
                    "\u01d1": "O",
                    "\u020c": "O",
                    "\u020e": "O",
                    "\u01a0": "O",
                    "\u1edc": "O",
                    "\u1eda": "O",
                    "\u1ee0": "O",
                    "\u1ede": "O",
                    "\u1ee2": "O",
                    "\u1ecc": "O",
                    "\u1ed8": "O",
                    "\u01ea": "O",
                    "\u01ec": "O",
                    "\u00d8": "O",
                    "\u01fe": "O",
                    "\u0186": "O",
                    "\u019f": "O",
                    "\ua74a": "O",
                    "\ua74c": "O",
                    "\u01a2": "OI",
                    "\ua74e": "OO",
                    "\u0222": "OU",
                    "\u24c5": "P",
                    "\uff30": "P",
                    "\u1e54": "P",
                    "\u1e56": "P",
                    "\u01a4": "P",
                    "\u2c63": "P",
                    "\ua750": "P",
                    "\ua752": "P",
                    "\ua754": "P",
                    "\u24c6": "Q",
                    "\uff31": "Q",
                    "\ua756": "Q",
                    "\ua758": "Q",
                    "\u024a": "Q",
                    "\u24c7": "R",
                    "\uff32": "R",
                    "\u0154": "R",
                    "\u1e58": "R",
                    "\u0158": "R",
                    "\u0210": "R",
                    "\u0212": "R",
                    "\u1e5a": "R",
                    "\u1e5c": "R",
                    "\u0156": "R",
                    "\u1e5e": "R",
                    "\u024c": "R",
                    "\u2c64": "R",
                    "\ua75a": "R",
                    "\ua7a6": "R",
                    "\ua782": "R",
                    "\u24c8": "S",
                    "\uff33": "S",
                    "\u1e9e": "S",
                    "\u015a": "S",
                    "\u1e64": "S",
                    "\u015c": "S",
                    "\u1e60": "S",
                    "\u0160": "S",
                    "\u1e66": "S",
                    "\u1e62": "S",
                    "\u1e68": "S",
                    "\u0218": "S",
                    "\u015e": "S",
                    "\u2c7e": "S",
                    "\ua7a8": "S",
                    "\ua784": "S",
                    "\u24c9": "T",
                    "\uff34": "T",
                    "\u1e6a": "T",
                    "\u0164": "T",
                    "\u1e6c": "T",
                    "\u021a": "T",
                    "\u0162": "T",
                    "\u1e70": "T",
                    "\u1e6e": "T",
                    "\u0166": "T",
                    "\u01ac": "T",
                    "\u01ae": "T",
                    "\u023e": "T",
                    "\ua786": "T",
                    "\ua728": "TZ",
                    "\u24ca": "U",
                    "\uff35": "U",
                    "\u00d9": "U",
                    "\u00da": "U",
                    "\u00db": "U",
                    "\u0168": "U",
                    "\u1e78": "U",
                    "\u016a": "U",
                    "\u1e7a": "U",
                    "\u016c": "U",
                    "\u00dc": "U",
                    "\u01db": "U",
                    "\u01d7": "U",
                    "\u01d5": "U",
                    "\u01d9": "U",
                    "\u1ee6": "U",
                    "\u016e": "U",
                    "\u0170": "U",
                    "\u01d3": "U",
                    "\u0214": "U",
                    "\u0216": "U",
                    "\u01af": "U",
                    "\u1eea": "U",
                    "\u1ee8": "U",
                    "\u1eee": "U",
                    "\u1eec": "U",
                    "\u1ef0": "U",
                    "\u1ee4": "U",
                    "\u1e72": "U",
                    "\u0172": "U",
                    "\u1e76": "U",
                    "\u1e74": "U",
                    "\u0244": "U",
                    "\u24cb": "V",
                    "\uff36": "V",
                    "\u1e7c": "V",
                    "\u1e7e": "V",
                    "\u01b2": "V",
                    "\ua75e": "V",
                    "\u0245": "V",
                    "\ua760": "VY",
                    "\u24cc": "W",
                    "\uff37": "W",
                    "\u1e80": "W",
                    "\u1e82": "W",
                    "\u0174": "W",
                    "\u1e86": "W",
                    "\u1e84": "W",
                    "\u1e88": "W",
                    "\u2c72": "W",
                    "\u24cd": "X",
                    "\uff38": "X",
                    "\u1e8a": "X",
                    "\u1e8c": "X",
                    "\u24ce": "Y",
                    "\uff39": "Y",
                    "\u1ef2": "Y",
                    "\u00dd": "Y",
                    "\u0176": "Y",
                    "\u1ef8": "Y",
                    "\u0232": "Y",
                    "\u1e8e": "Y",
                    "\u0178": "Y",
                    "\u1ef6": "Y",
                    "\u1ef4": "Y",
                    "\u01b3": "Y",
                    "\u024e": "Y",
                    "\u1efe": "Y",
                    "\u24cf": "Z",
                    "\uff3a": "Z",
                    "\u0179": "Z",
                    "\u1e90": "Z",
                    "\u017b": "Z",
                    "\u017d": "Z",
                    "\u1e92": "Z",
                    "\u1e94": "Z",
                    "\u01b5": "Z",
                    "\u0224": "Z",
                    "\u2c7f": "Z",
                    "\u2c6b": "Z",
                    "\ua762": "Z",
                    "\u24d0": "a",
                    "\uff41": "a",
                    "\u1e9a": "a",
                    "\u00e0": "a",
                    "\u00e1": "a",
                    "\u00e2": "a",
                    "\u1ea7": "a",
                    "\u1ea5": "a",
                    "\u1eab": "a",
                    "\u1ea9": "a",
                    "\u00e3": "a",
                    "\u0101": "a",
                    "\u0103": "a",
                    "\u1eb1": "a",
                    "\u1eaf": "a",
                    "\u1eb5": "a",
                    "\u1eb3": "a",
                    "\u0227": "a",
                    "\u01e1": "a",
                    "\u00e4": "a",
                    "\u01df": "a",
                    "\u1ea3": "a",
                    "\u00e5": "a",
                    "\u01fb": "a",
                    "\u01ce": "a",
                    "\u0201": "a",
                    "\u0203": "a",
                    "\u1ea1": "a",
                    "\u1ead": "a",
                    "\u1eb7": "a",
                    "\u1e01": "a",
                    "\u0105": "a",
                    "\u2c65": "a",
                    "\u0250": "a",
                    "\ua733": "aa",
                    "\u00e6": "ae",
                    "\u01fd": "ae",
                    "\u01e3": "ae",
                    "\ua735": "ao",
                    "\ua737": "au",
                    "\ua739": "av",
                    "\ua73b": "av",
                    "\ua73d": "ay",
                    "\u24d1": "b",
                    "\uff42": "b",
                    "\u1e03": "b",
                    "\u1e05": "b",
                    "\u1e07": "b",
                    "\u0180": "b",
                    "\u0183": "b",
                    "\u0253": "b",
                    "\u24d2": "c",
                    "\uff43": "c",
                    "\u0107": "c",
                    "\u0109": "c",
                    "\u010b": "c",
                    "\u010d": "c",
                    "\u00e7": "c",
                    "\u1e09": "c",
                    "\u0188": "c",
                    "\u023c": "c",
                    "\ua73f": "c",
                    "\u2184": "c",
                    "\u24d3": "d",
                    "\uff44": "d",
                    "\u1e0b": "d",
                    "\u010f": "d",
                    "\u1e0d": "d",
                    "\u1e11": "d",
                    "\u1e13": "d",
                    "\u1e0f": "d",
                    "\u0111": "d",
                    "\u018c": "d",
                    "\u0256": "d",
                    "\u0257": "d",
                    "\ua77a": "d",
                    "\u01f3": "dz",
                    "\u01c6": "dz",
                    "\u24d4": "e",
                    "\uff45": "e",
                    "\u00e8": "e",
                    "\u00e9": "e",
                    "\u00ea": "e",
                    "\u1ec1": "e",
                    "\u1ebf": "e",
                    "\u1ec5": "e",
                    "\u1ec3": "e",
                    "\u1ebd": "e",
                    "\u0113": "e",
                    "\u1e15": "e",
                    "\u1e17": "e",
                    "\u0115": "e",
                    "\u0117": "e",
                    "\u00eb": "e",
                    "\u1ebb": "e",
                    "\u011b": "e",
                    "\u0205": "e",
                    "\u0207": "e",
                    "\u1eb9": "e",
                    "\u1ec7": "e",
                    "\u0229": "e",
                    "\u1e1d": "e",
                    "\u0119": "e",
                    "\u1e19": "e",
                    "\u1e1b": "e",
                    "\u0247": "e",
                    "\u025b": "e",
                    "\u01dd": "e",
                    "\u24d5": "f",
                    "\uff46": "f",
                    "\u1e1f": "f",
                    "\u0192": "f",
                    "\ua77c": "f",
                    "\u24d6": "g",
                    "\uff47": "g",
                    "\u01f5": "g",
                    "\u011d": "g",
                    "\u1e21": "g",
                    "\u011f": "g",
                    "\u0121": "g",
                    "\u01e7": "g",
                    "\u0123": "g",
                    "\u01e5": "g",
                    "\u0260": "g",
                    "\ua7a1": "g",
                    "\u1d79": "g",
                    "\ua77f": "g",
                    "\u24d7": "h",
                    "\uff48": "h",
                    "\u0125": "h",
                    "\u1e23": "h",
                    "\u1e27": "h",
                    "\u021f": "h",
                    "\u1e25": "h",
                    "\u1e29": "h",
                    "\u1e2b": "h",
                    "\u1e96": "h",
                    "\u0127": "h",
                    "\u2c68": "h",
                    "\u2c76": "h",
                    "\u0265": "h",
                    "\u0195": "hv",
                    "\u24d8": "i",
                    "\uff49": "i",
                    "\u00ec": "i",
                    "\u00ed": "i",
                    "\u00ee": "i",
                    "\u0129": "i",
                    "\u012b": "i",
                    "\u012d": "i",
                    "\u00ef": "i",
                    "\u1e2f": "i",
                    "\u1ec9": "i",
                    "\u01d0": "i",
                    "\u0209": "i",
                    "\u020b": "i",
                    "\u1ecb": "i",
                    "\u012f": "i",
                    "\u1e2d": "i",
                    "\u0268": "i",
                    "\u0131": "i",
                    "\u24d9": "j",
                    "\uff4a": "j",
                    "\u0135": "j",
                    "\u01f0": "j",
                    "\u0249": "j",
                    "\u24da": "k",
                    "\uff4b": "k",
                    "\u1e31": "k",
                    "\u01e9": "k",
                    "\u1e33": "k",
                    "\u0137": "k",
                    "\u1e35": "k",
                    "\u0199": "k",
                    "\u2c6a": "k",
                    "\ua741": "k",
                    "\ua743": "k",
                    "\ua745": "k",
                    "\ua7a3": "k",
                    "\u24db": "l",
                    "\uff4c": "l",
                    "\u0140": "l",
                    "\u013a": "l",
                    "\u013e": "l",
                    "\u1e37": "l",
                    "\u1e39": "l",
                    "\u013c": "l",
                    "\u1e3d": "l",
                    "\u1e3b": "l",
                    "\u017f": "l",
                    "\u0142": "l",
                    "\u019a": "l",
                    "\u026b": "l",
                    "\u2c61": "l",
                    "\ua749": "l",
                    "\ua781": "l",
                    "\ua747": "l",
                    "\u01c9": "lj",
                    "\u24dc": "m",
                    "\uff4d": "m",
                    "\u1e3f": "m",
                    "\u1e41": "m",
                    "\u1e43": "m",
                    "\u0271": "m",
                    "\u026f": "m",
                    "\u24dd": "n",
                    "\uff4e": "n",
                    "\u01f9": "n",
                    "\u0144": "n",
                    "\u00f1": "n",
                    "\u1e45": "n",
                    "\u0148": "n",
                    "\u1e47": "n",
                    "\u0146": "n",
                    "\u1e4b": "n",
                    "\u1e49": "n",
                    "\u019e": "n",
                    "\u0272": "n",
                    "\u0149": "n",
                    "\ua791": "n",
                    "\ua7a5": "n",
                    "\u01cc": "nj",
                    "\u24de": "o",
                    "\uff4f": "o",
                    "\u00f2": "o",
                    "\u00f3": "o",
                    "\u00f4": "o",
                    "\u1ed3": "o",
                    "\u1ed1": "o",
                    "\u1ed7": "o",
                    "\u1ed5": "o",
                    "\u00f5": "o",
                    "\u1e4d": "o",
                    "\u022d": "o",
                    "\u1e4f": "o",
                    "\u014d": "o",
                    "\u1e51": "o",
                    "\u1e53": "o",
                    "\u014f": "o",
                    "\u022f": "o",
                    "\u0231": "o",
                    "\u00f6": "o",
                    "\u022b": "o",
                    "\u1ecf": "o",
                    "\u0151": "o",
                    "\u01d2": "o",
                    "\u020d": "o",
                    "\u020f": "o",
                    "\u01a1": "o",
                    "\u1edd": "o",
                    "\u1edb": "o",
                    "\u1ee1": "o",
                    "\u1edf": "o",
                    "\u1ee3": "o",
                    "\u1ecd": "o",
                    "\u1ed9": "o",
                    "\u01eb": "o",
                    "\u01ed": "o",
                    "\u00f8": "o",
                    "\u01ff": "o",
                    "\u0254": "o",
                    "\ua74b": "o",
                    "\ua74d": "o",
                    "\u0275": "o",
                    "\u01a3": "oi",
                    "\u0223": "ou",
                    "\ua74f": "oo",
                    "\u24df": "p",
                    "\uff50": "p",
                    "\u1e55": "p",
                    "\u1e57": "p",
                    "\u01a5": "p",
                    "\u1d7d": "p",
                    "\ua751": "p",
                    "\ua753": "p",
                    "\ua755": "p",
                    "\u24e0": "q",
                    "\uff51": "q",
                    "\u024b": "q",
                    "\ua757": "q",
                    "\ua759": "q",
                    "\u24e1": "r",
                    "\uff52": "r",
                    "\u0155": "r",
                    "\u1e59": "r",
                    "\u0159": "r",
                    "\u0211": "r",
                    "\u0213": "r",
                    "\u1e5b": "r",
                    "\u1e5d": "r",
                    "\u0157": "r",
                    "\u1e5f": "r",
                    "\u024d": "r",
                    "\u027d": "r",
                    "\ua75b": "r",
                    "\ua7a7": "r",
                    "\ua783": "r",
                    "\u24e2": "s",
                    "\uff53": "s",
                    "\u00df": "s",
                    "\u015b": "s",
                    "\u1e65": "s",
                    "\u015d": "s",
                    "\u1e61": "s",
                    "\u0161": "s",
                    "\u1e67": "s",
                    "\u1e63": "s",
                    "\u1e69": "s",
                    "\u0219": "s",
                    "\u015f": "s",
                    "\u023f": "s",
                    "\ua7a9": "s",
                    "\ua785": "s",
                    "\u1e9b": "s",
                    "\u24e3": "t",
                    "\uff54": "t",
                    "\u1e6b": "t",
                    "\u1e97": "t",
                    "\u0165": "t",
                    "\u1e6d": "t",
                    "\u021b": "t",
                    "\u0163": "t",
                    "\u1e71": "t",
                    "\u1e6f": "t",
                    "\u0167": "t",
                    "\u01ad": "t",
                    "\u0288": "t",
                    "\u2c66": "t",
                    "\ua787": "t",
                    "\ua729": "tz",
                    "\u24e4": "u",
                    "\uff55": "u",
                    "\u00f9": "u",
                    "\u00fa": "u",
                    "\u00fb": "u",
                    "\u0169": "u",
                    "\u1e79": "u",
                    "\u016b": "u",
                    "\u1e7b": "u",
                    "\u016d": "u",
                    "\u00fc": "u",
                    "\u01dc": "u",
                    "\u01d8": "u",
                    "\u01d6": "u",
                    "\u01da": "u",
                    "\u1ee7": "u",
                    "\u016f": "u",
                    "\u0171": "u",
                    "\u01d4": "u",
                    "\u0215": "u",
                    "\u0217": "u",
                    "\u01b0": "u",
                    "\u1eeb": "u",
                    "\u1ee9": "u",
                    "\u1eef": "u",
                    "\u1eed": "u",
                    "\u1ef1": "u",
                    "\u1ee5": "u",
                    "\u1e73": "u",
                    "\u0173": "u",
                    "\u1e77": "u",
                    "\u1e75": "u",
                    "\u0289": "u",
                    "\u24e5": "v",
                    "\uff56": "v",
                    "\u1e7d": "v",
                    "\u1e7f": "v",
                    "\u028b": "v",
                    "\ua75f": "v",
                    "\u028c": "v",
                    "\ua761": "vy",
                    "\u24e6": "w",
                    "\uff57": "w",
                    "\u1e81": "w",
                    "\u1e83": "w",
                    "\u0175": "w",
                    "\u1e87": "w",
                    "\u1e85": "w",
                    "\u1e98": "w",
                    "\u1e89": "w",
                    "\u2c73": "w",
                    "\u24e7": "x",
                    "\uff58": "x",
                    "\u1e8b": "x",
                    "\u1e8d": "x",
                    "\u24e8": "y",
                    "\uff59": "y",
                    "\u1ef3": "y",
                    "\u00fd": "y",
                    "\u0177": "y",
                    "\u1ef9": "y",
                    "\u0233": "y",
                    "\u1e8f": "y",
                    "\u00ff": "y",
                    "\u1ef7": "y",
                    "\u1e99": "y",
                    "\u1ef5": "y",
                    "\u01b4": "y",
                    "\u024f": "y",
                    "\u1eff": "y",
                    "\u24e9": "z",
                    "\uff5a": "z",
                    "\u017a": "z",
                    "\u1e91": "z",
                    "\u017c": "z",
                    "\u017e": "z",
                    "\u1e93": "z",
                    "\u1e95": "z",
                    "\u01b6": "z",
                    "\u0225": "z",
                    "\u0240": "z",
                    "\u2c6c": "z",
                    "\ua763": "z",
                    "\u0386": "\u0391",
                    "\u0388": "\u0395",
                    "\u0389": "\u0397",
                    "\u038a": "\u0399",
                    "\u03aa": "\u0399",
                    "\u038c": "\u039f",
                    "\u038e": "\u03a5",
                    "\u03ab": "\u03a5",
                    "\u038f": "\u03a9",
                    "\u03ac": "\u03b1",
                    "\u03ad": "\u03b5",
                    "\u03ae": "\u03b7",
                    "\u03af": "\u03b9",
                    "\u03ca": "\u03b9",
                    "\u0390": "\u03b9",
                    "\u03cc": "\u03bf",
                    "\u03cd": "\u03c5",
                    "\u03cb": "\u03c5",
                    "\u03b0": "\u03c5",
                    "\u03c9": "\u03c9",
                    "\u03c2": "\u03c3"
                }
            });
            h.define("select2/data/base", ["../utils"], function(e) {
                function f(d, c) {
                    f.__super__.constructor.call(this)
                }
                e.Extend(f, e.Observable);
                f.prototype.current = function(d) {
                    throw Error("The `current` method must be defined in child classes.");
                };
                f.prototype.query = function(d, c) {
                    throw Error("The `query` method must be defined in child classes.");
                };
                f.prototype.bind = function(d,
                    c) {};
                f.prototype.destroy = function() {};
                f.prototype.generateResultId = function(d, c) {
                    var b = d.id + "-result-",
                        b = b + e.generateChars(4);
                    return b = null != c.id ? b + ("-" + c.id.toString()) : b + ("-" + e.generateChars(4))
                };
                return f
            });
            h.define("select2/data/select", ["./base", "../utils", "jquery"], function(e, f, d) {
                function c(b, a) {
                    this.$element = b;
                    this.options = a;
                    c.__super__.constructor.call(this)
                }
                f.Extend(c, e);
                c.prototype.current = function(b) {
                    var a = [],
                        c = this;
                    this.$element.find(":selected").each(function() {
                        var b = d(this),
                            b = c.item(b);
                        a.push(b)
                    });
                    b(a)
                };
                c.prototype.select = function(b) {
                    var a = this;
                    b.selected = !0;
                    d(b.element).is("option") ? (b.element.selected = !0, this.$element.trigger("change")) : this.$element.prop("multiple") ? this.current(function(c) {
                        var n = [];
                        b = [b];
                        b.push.apply(b, c);
                        for (c = 0; c < b.length; c++) {
                            var e = b[c].id; - 1 === d.inArray(e, n) && n.push(e)
                        }
                        a.$element.val(n);
                        a.$element.trigger("change")
                    }) : (this.$element.val(b.id), this.$element.trigger("change"))
                };
                c.prototype.unselect = function(b) {
                    var a = this;
                    this.$element.prop("multiple") && (b.selected = !1, d(b.element).is("option") ? (b.element.selected = !1, this.$element.trigger("change")) : this.current(function(c) {
                        for (var e = [], f = 0; f < c.length; f++) {
                            var h = c[f].id;
                            h !== b.id && -1 === d.inArray(h, e) && e.push(h)
                        }
                        a.$element.val(e);
                        a.$element.trigger("change")
                    }))
                };
                c.prototype.bind = function(b, a) {
                    var c = this;
                    this.container = b;
                    b.on("select", function(a) {
                        c.select(a.data)
                    });
                    b.on("unselect", function(a) {
                        c.unselect(a.data)
                    })
                };
                c.prototype.destroy = function() {
                    this.$element.find("*").each(function() {
                        d.removeData(this, "data")
                    })
                };
                c.prototype.query = function(b, a) {
                    var c = [],
                        e = this;
                    this.$element.children().each(function() {
                        var a = d(this);
                        if (a.is("option") || a.is("optgroup")) a = e.item(a), a = e.matches(b, a), null !== a && c.push(a)
                    });
                    a({
                        results: c
                    })
                };
                c.prototype.addOptions = function(b) {
                    f.appendMany(this.$element, b)
                };
                c.prototype.option = function(b) {
                    var a;
                    b.children ? (a = document.createElement("optgroup"), a.label = b.text) : (a = document.createElement("option"), void 0 !== a.textContent ? a.textContent = b.text : a.innerText = b.text);
                    b.id && (a.value = b.id);
                    b.disabled &&
                        (a.disabled = !0);
                    b.selected && (a.selected = !0);
                    b.title && (a.title = b.title);
                    var c = d(a);
                    b = this._normalizeItem(b);
                    b.element = a;
                    d.data(a, "data", b);
                    return c
                };
                c.prototype.item = function(b) {
                    var a = {},
                        a = d.data(b[0], "data");
                    if (null != a) return a;
                    if (b.is("option")) a = {
                        id: b.val(),
                        text: b.text(),
                        disabled: b.prop("disabled"),
                        selected: b.prop("selected"),
                        title: b.prop("title")
                    };
                    else if (b.is("optgroup")) {
                        for (var a = {
                                text: b.prop("label"),
                                children: [],
                                title: b.prop("title")
                            }, c = b.children("option"), e = [], f = 0; f < c.length; f++) {
                            var h = d(c[f]),
                                h = this.item(h);
                            e.push(h)
                        }
                        a.children = e
                    }
                    a = this._normalizeItem(a);
                    a.element = b[0];
                    d.data(b[0], "data", a);
                    return a
                };
                c.prototype._normalizeItem = function(b) {
                    d.isPlainObject(b) || (b = {
                        id: b,
                        text: b
                    });
                    b = d.extend({}, {
                        text: ""
                    }, b);
                    null != b.id && (b.id = b.id.toString());
                    null != b.text && (b.text = b.text.toString());
                    null == b._resultId && b.id && null != this.container && (b._resultId = this.generateResultId(this.container, b));
                    return d.extend({}, {
                        selected: !1,
                        disabled: !1
                    }, b)
                };
                c.prototype.matches = function(b, a) {
                    return this.options.get("matcher")(b,
                        a)
                };
                return c
            });
            h.define("select2/data/array", ["./select", "../utils", "jquery"], function(e, f, d) {
                function c(b, a) {
                    var d = a.get("data") || [];
                    c.__super__.constructor.call(this, b, a);
                    this.addOptions(this.convertToOptions(d))
                }
                f.Extend(c, e);
                c.prototype.select = function(b) {
                    var a = this.$element.find("option").filter(function(a, c) {
                        return c.value == b.id.toString()
                    });
                    0 === a.length && (a = this.option(b), this.addOptions(a));
                    c.__super__.select.call(this, b)
                };
                c.prototype.convertToOptions = function(b) {
                    function a(a) {
                        return function() {
                            return d(this).val() ==
                                a.id
                        }
                    }
                    for (var c = this, e = this.$element.find("option"), p = e.map(function() {
                            return c.item(d(this)).id
                        }).get(), h = [], q = 0; q < b.length; q++) {
                        var k = this._normalizeItem(b[q]);
                        if (0 <= d.inArray(k.id, p)) {
                            var r = e.filter(a(k)),
                                l = this.item(r),
                                k = d.extend(!0, {}, l, k),
                                k = this.option(k);
                            r.replaceWith(k)
                        } else r = this.option(k), k.children && (k = this.convertToOptions(k.children), f.appendMany(r, k)), h.push(r)
                    }
                    return h
                };
                return c
            });
            h.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(e, f, d) {
                function c(b, a) {
                    this.ajaxOptions =
                        this._applyDefaults(a.get("ajax"));
                    null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults);
                    c.__super__.constructor.call(this, b, a)
                }
                f.Extend(c, e);
                c.prototype._applyDefaults = function(b) {
                    return d.extend({}, {
                        data: function(a) {
                            return d.extend({}, a, {
                                q: a.term
                            })
                        },
                        transport: function(a, b, c) {
                            a = d.ajax(a);
                            a.then(b);
                            a.fail(c);
                            return a
                        }
                    }, b, !0)
                };
                c.prototype.processResults = function(b) {
                    return b
                };
                c.prototype.query = function(b, a) {
                    function c() {
                        var g = f.transport(f, function(c) {
                            c = e.processResults(c,
                                b);
                            e.options.get("debug") && window.console && console.error && (c && c.results && d.isArray(c.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response."));
                            a(c)
                        }, function() {});
                        e._request = g
                    }
                    var e = this;
                    null != this._request && (d.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                    var f = d.extend({
                        type: "GET"
                    }, this.ajaxOptions);
                    "function" === typeof f.url && (f.url = f.url.call(this.$element, b));
                    "function" === typeof f.data && (f.data = f.data.call(this.$element,
                        b));
                    this.ajaxOptions.delay && "" !== b.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(c, this.ajaxOptions.delay)) : c()
                };
                return c
            });
            h.define("select2/data/tags", ["jquery"], function(e) {
                function f(d, c, b) {
                    var a = b.get("tags"),
                        g = b.get("createTag");
                    void 0 !== g && (this.createTag = g);
                    d.call(this, c, b);
                    if (e.isArray(a))
                        for (d = 0; d < a.length; d++) c = this._normalizeItem(a[d]), c = this.option(c), this.$element.append(c)
                }
                f.prototype.query = function(d, c, b) {
                    function a(d, e) {
                        for (var f =
                                d.results, h = 0; h < f.length; h++) {
                            var k = f[h],
                                r = null != k.children && !a({
                                    results: k.children
                                }, !0);
                            if (k.text === c.term || r) {
                                if (e) return !1;
                                d.data = f;
                                b(d);
                                return
                            }
                        }
                        if (e) return !0;
                        h = g.createTag(c);
                        null != h && (k = g.option(h), k.attr("data-select2-tag", !0), g.addOptions([k]), g.insertTag(f, h));
                        d.results = f;
                        b(d)
                    }
                    var g = this;
                    this._removeOldTags();
                    null == c.term || null != c.page ? d.call(this, c, b) : d.call(this, c, a)
                };
                f.prototype.createTag = function(d, c) {
                    var b = e.trim(c.term);
                    return "" === b ? null : {
                        id: b,
                        text: b
                    }
                };
                f.prototype.insertTag = function(d,
                    c, b) {
                    c.unshift(b)
                };
                f.prototype._removeOldTags = function(d) {
                    this.$element.find("option[data-select2-tag]").each(function() {
                        this.selected || e(this).remove()
                    })
                };
                return f
            });
            h.define("select2/data/tokenizer", ["jquery"], function(e) {
                function f(d, c, b) {
                    var a = b.get("tokenizer");
                    void 0 !== a && (this.tokenizer = a);
                    d.call(this, c, b)
                }
                f.prototype.bind = function(d, c, b) {
                    d.call(this, c, b);
                    this.$search = c.dropdown.$search || c.selection.$search || b.find(".select2-search__field")
                };
                f.prototype.query = function(d, c, b) {
                    var a = this;
                    c.term =
                        c.term || "";
                    var g = this.tokenizer(c, this.options, function(b) {
                        a.trigger("select", {
                            data: b
                        })
                    });
                    g.term !== c.term && (this.$search.length && (this.$search.val(g.term), this.$search.focus()), c.term = g.term);
                    d.call(this, c, b)
                };
                f.prototype.tokenizer = function(d, c, b, a) {
                    d = b.get("tokenSeparators") || [];
                    b = c.term;
                    for (var g = 0, n = this.createTag || function(a) {
                            return {
                                id: a.term,
                                text: a.term
                            }
                        }; g < b.length;)
                        if (-1 === e.inArray(b[g], d)) g++;
                        else {
                            var f = b.substr(0, g),
                                f = e.extend({}, c, {
                                    term: f
                                }),
                                f = n(f);
                            null == f ? g++ : (a(f), b = b.substr(g + 1) || "",
                                g = 0)
                        }
                    return {
                        term: b
                    }
                };
                return f
            });
            h.define("select2/data/minimumInputLength", [], function() {
                function e(e, d, c) {
                    this.minimumInputLength = c.get("minimumInputLength");
                    e.call(this, d, c)
                }
                e.prototype.query = function(e, d, c) {
                    d.term = d.term || "";
                    d.term.length < this.minimumInputLength ? this.trigger("results:message", {
                        message: "inputTooShort",
                        args: {
                            minimum: this.minimumInputLength,
                            input: d.term,
                            params: d
                        }
                    }) : e.call(this, d, c)
                };
                return e
            });
            h.define("select2/data/maximumInputLength", [], function() {
                function e(e, d, c) {
                    this.maximumInputLength =
                        c.get("maximumInputLength");
                    e.call(this, d, c)
                }
                e.prototype.query = function(e, d, c) {
                    d.term = d.term || "";
                    0 < this.maximumInputLength && d.term.length > this.maximumInputLength ? this.trigger("results:message", {
                        message: "inputTooLong",
                        args: {
                            maximum: this.maximumInputLength,
                            input: d.term,
                            params: d
                        }
                    }) : e.call(this, d, c)
                };
                return e
            });
            h.define("select2/data/maximumSelectionLength", [], function() {
                function e(e, d, c) {
                    this.maximumSelectionLength = c.get("maximumSelectionLength");
                    e.call(this, d, c)
                }
                e.prototype.query = function(e, d, c) {
                    var b =
                        this;
                    this.current(function(a) {
                        a = null != a ? a.length : 0;
                        0 < b.maximumSelectionLength && a >= b.maximumSelectionLength ? b.trigger("results:message", {
                            message: "maximumSelected",
                            args: {
                                maximum: b.maximumSelectionLength
                            }
                        }) : e.call(b, d, c)
                    })
                };
                return e
            });
            h.define("select2/dropdown", ["jquery", "./utils"], function(e, f) {
                function d(c, b) {
                    this.$element = c;
                    this.options = b;
                    d.__super__.constructor.call(this)
                }
                f.Extend(d, f.Observable);
                d.prototype.render = function() {
                    var c = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                    c.attr("dir", this.options.get("dir"));
                    return this.$dropdown = c
                };
                d.prototype.bind = function() {};
                d.prototype.position = function(c, b) {};
                d.prototype.destroy = function() {
                    this.$dropdown.remove()
                };
                return d
            });
            h.define("select2/dropdown/search", ["jquery", "../utils"], function(e, f) {
                function d() {}
                d.prototype.render = function(c) {
                    c = c.call(this);
                    var b = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                    this.$searchContainer = b;
                    this.$search = b.find("input");
                    c.prepend(b);
                    return c
                };
                d.prototype.bind = function(c, b, a) {
                    var d = this;
                    c.call(this, b, a);
                    this.$search.on("keydown", function(a) {
                        d.trigger("keypress", a);
                        d._keyUpPrevented = a.isDefaultPrevented()
                    });
                    this.$search.on("input", function(a) {
                        e(this).off("keyup")
                    });
                    this.$search.on("keyup input", function(a) {
                        d.handleSearch(a)
                    });
                    b.on("open", function() {
                        d.$search.attr("tabindex", 0);
                        d.$search.focus();
                        window.setTimeout(function() {
                            d.$search.focus()
                        }, 0)
                    });
                    b.on("close", function() {
                        d.$search.attr("tabindex", -1);
                        d.$search.val("")
                    });
                    b.on("results:all", function(a) {
                        if (null == a.query.term || "" === a.query.term) d.showSearch(a) ? d.$searchContainer.removeClass("select2-search--hide") : d.$searchContainer.addClass("select2-search--hide")
                    })
                };
                d.prototype.handleSearch = function(c) {
                    this._keyUpPrevented || (c = this.$search.val(), this.trigger("query", {
                        term: c
                    }));
                    this._keyUpPrevented = !1
                };
                d.prototype.showSearch = function(c, b) {
                    return !0
                };
                return d
            });
            h.define("select2/dropdown/hidePlaceholder", [], function() {
                function e(e, d, c, b) {
                    this.placeholder =
                        this.normalizePlaceholder(c.get("placeholder"));
                    e.call(this, d, c, b)
                }
                e.prototype.append = function(e, d) {
                    d.results = this.removePlaceholder(d.results);
                    e.call(this, d)
                };
                e.prototype.normalizePlaceholder = function(e, d) {
                    "string" === typeof d && (d = {
                        id: "",
                        text: d
                    });
                    return d
                };
                e.prototype.removePlaceholder = function(e, d) {
                    for (var c = d.slice(0), b = d.length - 1; 0 <= b; b--) this.placeholder.id === d[b].id && c.splice(b, 1);
                    return c
                };
                return e
            });
            h.define("select2/dropdown/infiniteScroll", ["jquery"], function(e) {
                function f(d, c, b, a) {
                    this.lastParams = {};
                    d.call(this, c, b, a);
                    this.$loadingMore = this.createLoadingMore();
                    this.loading = !1
                }
                f.prototype.append = function(d, c) {
                    this.$loadingMore.remove();
                    this.loading = !1;
                    d.call(this, c);
                    this.showLoadingMore(c) && this.$results.append(this.$loadingMore)
                };
                f.prototype.bind = function(d, c, b) {
                    var a = this;
                    d.call(this, c, b);
                    c.on("query", function(b) {
                        a.lastParams = b;
                        a.loading = !0
                    });
                    c.on("query:append", function(b) {
                        a.lastParams = b;
                        a.loading = !0
                    });
                    this.$results.on("scroll", function() {
                        var b = e.contains(document.documentElement, a.$loadingMore[0]);
                        if (!a.loading && b) {
                            var b = a.$results.offset().top + a.$results.outerHeight(!1),
                                c = a.$loadingMore.offset().top + a.$loadingMore.outerHeight(!1);
                            b + 50 >= c && a.loadMore()
                        }
                    })
                };
                f.prototype.loadMore = function() {
                    this.loading = !0;
                    var d = e.extend({}, {
                        page: 1
                    }, this.lastParams);
                    d.page++;
                    this.trigger("query:append", d)
                };
                f.prototype.showLoadingMore = function(d, c) {
                    return c.pagination && c.pagination.more
                };
                f.prototype.createLoadingMore = function() {
                    var d = e('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                        c = this.options.get("translations").get("loadingMore");
                    d.html(c(this.lastParams));
                    return d
                };
                return f
            });
            h.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(e, f) {
                function d(c, b, a) {
                    this.$dropdownParent = a.get("dropdownParent") || document.body;
                    c.call(this, b, a)
                }
                d.prototype.bind = function(c, b, a) {
                    var d = this,
                        e = !1;
                    c.call(this, b, a);
                    b.on("open", function() {
                        d._showDropdown();
                        d._attachPositioningHandler(b);
                        e || (e = !0, b.on("results:all", function() {
                            d._positionDropdown();
                            d._resizeDropdown()
                        }), b.on("results:append",
                            function() {
                                d._positionDropdown();
                                d._resizeDropdown()
                            }))
                    });
                    b.on("close", function() {
                        d._hideDropdown();
                        d._detachPositioningHandler(b)
                    });
                    this.$dropdownContainer.on("mousedown", function(a) {
                        a.stopPropagation()
                    })
                };
                d.prototype.destroy = function(c) {
                    c.call(this);
                    this.$dropdownContainer.remove()
                };
                d.prototype.position = function(c, b, a) {
                    b.attr("class", a.attr("class"));
                    b.removeClass("select2");
                    b.addClass("select2-container--open");
                    b.css({
                        position: "absolute",
                        top: -999999
                    });
                    this.$container = a
                };
                d.prototype.render = function(c) {
                    var b =
                        e("<span></span>");
                    c = c.call(this);
                    b.append(c);
                    return this.$dropdownContainer = b
                };
                d.prototype._hideDropdown = function(c) {
                    this.$dropdownContainer.detach()
                };
                d.prototype._attachPositioningHandler = function(c) {
                    var b = this,
                        a = "scroll.select2." + c.id,
                        d = "resize.select2." + c.id;
                    c = "orientationchange.select2." + c.id;
                    var n = this.$container.parents().filter(f.hasScroll);
                    n.each(function() {
                        e(this).data("select2-scroll-position", {
                            x: e(this).scrollLeft(),
                            y: e(this).scrollTop()
                        })
                    });
                    n.on(a, function(a) {
                        a = e(this).data("select2-scroll-position");
                        e(this).scrollTop(a.y)
                    });
                    e(window).on(a + " " + d + " " + c, function(a) {
                        b._positionDropdown();
                        b._resizeDropdown()
                    })
                };
                d.prototype._detachPositioningHandler = function(c) {
                    var b = "scroll.select2." + c.id,
                        a = "resize.select2." + c.id;
                    c = "orientationchange.select2." + c.id;
                    this.$container.parents().filter(f.hasScroll).off(b);
                    e(window).off(b + " " + a + " " + c)
                };
                d.prototype._positionDropdown = function() {
                    var c = e(window),
                        b = this.$dropdown.hasClass("select2-dropdown--above"),
                        a = this.$dropdown.hasClass("select2-dropdown--below"),
                        d = null;
                    this.$container.position();
                    var n = this.$container.offset();
                    n.bottom = n.top + this.$container.outerHeight(!1);
                    var f = this.$container.outerHeight(!1),
                        h, k;
                    h = n.top;
                    k = n.top + f;
                    var f = this.$dropdown.outerHeight(!1),
                        r = c.scrollTop(),
                        l = c.scrollTop() + c.height(),
                        c = r < n.top - f,
                        r = l > n.bottom + f,
                        n = {
                            left: n.left,
                            top: k
                        };
                    b || a || (d = "below");
                    r || !c || b ? !c && r && b && (d = "below") : d = "above";
                    if ("above" == d || b && "below" !== d) n.top = h - f;
                    null != d && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" +
                        d), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + d));
                    this.$dropdownContainer.css(n)
                };
                d.prototype._resizeDropdown = function() {
                    var c = {
                        width: this.$container.outerWidth(!1) + "px"
                    };
                    this.options.get("dropdownAutoWidth") && (c.minWidth = c.width, c.width = "auto");
                    this.$dropdown.css(c)
                };
                d.prototype._showDropdown = function(c) {
                    this.$dropdownContainer.appendTo(this.$dropdownParent);
                    this._positionDropdown();
                    this._resizeDropdown()
                };
                return d
            });
            h.define("select2/dropdown/minimumResultsForSearch", [], function() {
                function e(d) {
                    for (var c = 0, b = 0; b < d.length; b++) {
                        var a = d[b];
                        a.children ? c += e(a.children) : c++
                    }
                    return c
                }

                function f(d, c, b, a) {
                    this.minimumResultsForSearch = b.get("minimumResultsForSearch");
                    0 > this.minimumResultsForSearch && (this.minimumResultsForSearch = Infinity);
                    d.call(this, c, b, a)
                }
                f.prototype.showSearch = function(d, c) {
                    return e(c.data.results) < this.minimumResultsForSearch ? !1 : d.call(this, c)
                };
                return f
            });
            h.define("select2/dropdown/selectOnClose", [], function() {
                function e() {}
                e.prototype.bind = function(e,
                    d, c) {
                    var b = this;
                    e.call(this, d, c);
                    d.on("close", function() {
                        b._handleSelectOnClose()
                    })
                };
                e.prototype._handleSelectOnClose = function() {
                    var e = this.getHighlightedResults();
                    1 > e.length || this.trigger("select", {
                        data: e.data("data")
                    })
                };
                return e
            });
            h.define("select2/dropdown/closeOnSelect", [], function() {
                function e() {}
                e.prototype.bind = function(e, d, c) {
                    var b = this;
                    e.call(this, d, c);
                    d.on("select", function(a) {
                        b._selectTriggered(a)
                    });
                    d.on("unselect", function(a) {
                        b._selectTriggered(a)
                    })
                };
                e.prototype._selectTriggered = function(e,
                    d) {
                    var c = d.originalEvent;
                    c && c.ctrlKey || this.trigger("close", {})
                };
                return e
            });
            h.define("select2/i18n/en", [], function() {
                return {
                    errorLoading: function() {
                        return "The results could not be loaded."
                    },
                    inputTooLong: function(e) {
                        e = e.input.length - e.maximum;
                        var f = "Please delete " + e + " character";
                        1 != e && (f += "s");
                        return f
                    },
                    inputTooShort: function(e) {
                        return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                    },
                    loadingMore: function() {
                        return "Loading more results\u2026"
                    },
                    maximumSelected: function(e) {
                        var f = "You can only select " +
                            e.maximum + " item";
                        1 != e.maximum && (f += "s");
                        return f
                    },
                    noResults: function() {
                        return "No results found"
                    },
                    searching: function() {
                        return "Searching\u2026"
                    }
                }
            });
            h.define("select2/defaults", "jquery require ./results ./selection/single ./selection/multiple ./selection/placeholder ./selection/allowClear ./selection/search ./selection/eventRelay ./utils ./translation ./diacritics ./data/select ./data/array ./data/ajax ./data/tags ./data/tokenizer ./data/minimumInputLength ./data/maximumInputLength ./data/maximumSelectionLength ./dropdown ./dropdown/search ./dropdown/hidePlaceholder ./dropdown/infiniteScroll ./dropdown/attachBody ./dropdown/minimumResultsForSearch ./dropdown/selectOnClose ./dropdown/closeOnSelect ./i18n/en".split(" "),
                function(e, f, d, c, b, a, g, n, h, k, r, l, M, N, O, u, x, v, A, w, C, B, G, H, I, J, K, L, F) {
                    function y() {
                        this.reset()
                    }
                    y.prototype.apply = function(m) {
                        m = e.extend({}, this.defaults, m);
                        if (null == m.dataAdapter) {
                            m.dataAdapter = null != m.ajax ? O : null != m.data ? N : M;
                            0 < m.minimumInputLength && (m.dataAdapter = k.Decorate(m.dataAdapter, v));
                            0 < m.maximumInputLength && (m.dataAdapter = k.Decorate(m.dataAdapter, A));
                            0 < m.maximumSelectionLength && (m.dataAdapter = k.Decorate(m.dataAdapter, w));
                            m.tags && (m.dataAdapter = k.Decorate(m.dataAdapter, u));
                            if (null != m.tokenSeparators ||
                                null != m.tokenizer) m.dataAdapter = k.Decorate(m.dataAdapter, x);
                            if (null != m.query) {
                                var l = f(m.amdBase + "compat/query");
                                m.dataAdapter = k.Decorate(m.dataAdapter, l)
                            }
                            null != m.initSelection && (l = f(m.amdBase + "compat/initSelection"), m.dataAdapter = k.Decorate(m.dataAdapter, l))
                        }
                        null == m.resultsAdapter && (m.resultsAdapter = d, null != m.ajax && (m.resultsAdapter = k.Decorate(m.resultsAdapter, H)), null != m.placeholder && (m.resultsAdapter = k.Decorate(m.resultsAdapter, G)), m.selectOnClose && (m.resultsAdapter = k.Decorate(m.resultsAdapter,
                            K)));
                        if (null == m.dropdownAdapter) {
                            m.multiple ? m.dropdownAdapter = C : (l = k.Decorate(C, B), m.dropdownAdapter = l);
                            0 !== m.minimumResultsForSearch && (m.dropdownAdapter = k.Decorate(m.dropdownAdapter, J));
                            m.closeOnSelect && (m.dropdownAdapter = k.Decorate(m.dropdownAdapter, L));
                            if (null != m.dropdownCssClass || null != m.dropdownCss || null != m.adaptDropdownCssClass) l = f(m.amdBase + "compat/dropdownCss"), m.dropdownAdapter = k.Decorate(m.dropdownAdapter, l);
                            m.dropdownAdapter = k.Decorate(m.dropdownAdapter, I)
                        }
                        if (null == m.selectionAdapter) {
                            m.selectionAdapter =
                                m.multiple ? b : c;
                            null != m.placeholder && (m.selectionAdapter = k.Decorate(m.selectionAdapter, a));
                            m.allowClear && (m.selectionAdapter = k.Decorate(m.selectionAdapter, g));
                            m.multiple && (m.selectionAdapter = k.Decorate(m.selectionAdapter, n));
                            if (null != m.containerCssClass || null != m.containerCss || null != m.adaptContainerCssClass) l = f(m.amdBase + "compat/containerCss"), m.selectionAdapter = k.Decorate(m.selectionAdapter, l);
                            m.selectionAdapter = k.Decorate(m.selectionAdapter, h)
                        }
                        "string" === typeof m.language && (0 < m.language.indexOf("-") ?
                            (l = m.language.split("-")[0], m.language = [m.language, l]) : m.language = [m.language]);
                        if (e.isArray(m.language)) {
                            l = new r;
                            m.language.push("en");
                            for (var s = m.language, D = 0; D < s.length; D++) {
                                var z = s[D],
                                    E = {};
                                try {
                                    E = r.loadPath(z)
                                } catch (y) {
                                    try {
                                        z = this.defaults.amdLanguageBase + z, E = r.loadPath(z)
                                    } catch (F) {
                                        m.debug && window.console && console.warn && console.warn('Select2: The language file for "' + z + '" could not be automatically loaded. A fallback will be used instead.');
                                        continue
                                    }
                                }
                                l.extend(E)
                            }
                            m.translations = l
                        } else l = r.loadPath(this.defaults.amdLanguageBase +
                            "en"), s = new r(m.language), s.extend(l), m.translations = s;
                        return m
                    };
                    y.prototype.reset = function() {
                        function a(b) {
                            return b.replace(/[^\u0000-\u007E]/g, function(a) {
                                return l[a] || a
                            })
                        }

                        function b(c, d) {
                            if ("" === e.trim(c.term)) return d;
                            if (d.children && 0 < d.children.length) {
                                for (var g = e.extend(!0, {}, d), n = d.children.length - 1; 0 <= n; n--) null == b(c, d.children[n]) && g.children.splice(n, 1);
                                return 0 < g.children.length ? g : b(c, g)
                            }
                            g = a(d.text).toUpperCase();
                            n = a(c.term).toUpperCase();
                            return -1 < g.indexOf(n) ? d : null
                        }
                        this.defaults = {
                            amdBase: "./",
                            amdLanguageBase: "./i18n/",
                            closeOnSelect: !0,
                            debug: !1,
                            dropdownAutoWidth: !1,
                            escapeMarkup: k.escapeMarkup,
                            language: F,
                            matcher: b,
                            minimumInputLength: 0,
                            maximumInputLength: 0,
                            maximumSelectionLength: 0,
                            minimumResultsForSearch: 0,
                            selectOnClose: !1,
                            sorter: function(a) {
                                return a
                            },
                            templateResult: function(a) {
                                return a.text
                            },
                            templateSelection: function(a) {
                                return a.text
                            },
                            theme: "default",
                            width: "resolve"
                        }
                    };
                    y.prototype.set = function(a, b) {
                        var c = e.camelCase(a),
                            d = {};
                        d[c] = b;
                        c = k._convertData(d);
                        e.extend(this.defaults, c)
                    };
                    return new y
                });
            h.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(e, f, d, c) {
                function b(a, b) {
                    this.options = a;
                    null != b && this.fromElement(b);
                    this.options = d.apply(this.options);
                    if (b && b.is("input")) {
                        var n = e(this.get("amdBase") + "compat/inputData");
                        this.options.dataAdapter = c.Decorate(this.options.dataAdapter, n)
                    }
                }
                b.prototype.fromElement = function(a) {
                    var b = ["select2"];
                    null == this.options.multiple && (this.options.multiple = a.prop("multiple"));
                    null == this.options.disabled && (this.options.disabled = a.prop("disabled"));
                    null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang")));
                    null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr");
                    a.prop("disabled", this.options.disabled);
                    a.prop("multiple", this.options.multiple);
                    a.data("select2Tags") && (this.options.debug && window.console &&
                        console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0));
                    a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url",
                        a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));
                    var d = {},
                        d = f.fn.jquery && "1." == f.fn.jquery.substr(0, 2) && a[0].dataset ? f.extend(!0, {}, a[0].dataset, a.data()) : a.data();
                    a = f.extend(!0, {}, d);
                    a = c._convertData(a);
                    for (var e in a) - 1 < f.inArray(e, b) || (f.isPlainObject(this.options[e]) ? f.extend(this.options[e], a[e]) : this.options[e] = a[e]);
                    return this
                };
                b.prototype.get = function(a) {
                    return this.options[a]
                };
                b.prototype.set = function(a, b) {
                    this.options[a] = b
                };
                return b
            });
            h.define("select2/core", ["jquery", "./options",
                "./utils", "./keys"
            ], function(e, f, d, c) {
                var b = function(a, c) {
                    null != a.data("select2") && a.data("select2").destroy();
                    this.$element = a;
                    this.id = this._generateId(a);
                    c = c || {};
                    this.options = new f(c, a);
                    b.__super__.constructor.call(this);
                    var d = a.attr("tabindex") || 0;
                    a.data("old-tabindex", d);
                    a.attr("tabindex", "-1");
                    this.dataAdapter = new(this.options.get("dataAdapter"))(a, this.options);
                    d = this.render();
                    this._placeContainer(d);
                    this.selection = new(this.options.get("selectionAdapter"))(a, this.options);
                    this.$selection = this.selection.render();
                    this.selection.position(this.$selection, d);
                    this.dropdown = new(this.options.get("dropdownAdapter"))(a, this.options);
                    this.$dropdown = this.dropdown.render();
                    this.dropdown.position(this.$dropdown, d);
                    this.results = new(this.options.get("resultsAdapter"))(a, this.options, this.dataAdapter);
                    this.$results = this.results.render();
                    this.results.position(this.$results, this.$dropdown);
                    var e = this;
                    this._bindAdapters();
                    this._registerDomEvents();
                    this._registerDataEvents();
                    this._registerSelectionEvents();
                    this._registerDropdownEvents();
                    this._registerResultsEvents();
                    this._registerEvents();
                    this.dataAdapter.current(function(a) {
                        e.trigger("selection:update", {
                            data: a
                        })
                    });
                    a.addClass("select2-hidden-accessible");
                    a.attr("aria-hidden", "true");
                    this._syncAttributes();
                    a.data("select2", this)
                };
                d.Extend(b, d.Observable);
                b.prototype._generateId = function(a) {
                    var b = "",
                        b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + d.generateChars(2) : d.generateChars(4);
                    return "select2-" + b
                };
                b.prototype._placeContainer = function(a) {
                    a.insertAfter(this.$element);
                    var b = this._resolveWidth(this.$element, this.options.get("width"));
                    null != b && a.css("width", b)
                };
                b.prototype._resolveWidth = function(a, b) {
                    var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                    if ("resolve" == b) return c = this._resolveWidth(a, "style"), null != c ? c : this._resolveWidth(a, "element");
                    if ("element" == b) return c = a.outerWidth(!1), 0 >= c ? "auto" : c + "px";
                    if ("style" == b) {
                        var d = a.attr("style");
                        if ("string" !== typeof d) return null;
                        for (var d = d.split(";"), e = 0, f = d.length; e < f; e += 1) {
                            var h = d[e].replace(/\s/g,
                                "").match(c);
                            if (null !== h && 1 <= h.length) return h[1]
                        }
                        return null
                    }
                    return b
                };
                b.prototype._bindAdapters = function() {
                    this.dataAdapter.bind(this, this.$container);
                    this.selection.bind(this, this.$container);
                    this.dropdown.bind(this, this.$container);
                    this.results.bind(this, this.$container)
                };
                b.prototype._registerDomEvents = function() {
                    var a = this;
                    this.$element.on("change.select2", function() {
                        a.dataAdapter.current(function(b) {
                            a.trigger("selection:update", {
                                data: b
                            })
                        })
                    });
                    this._sync = d.bind(this._syncAttributes, this);
                    this.$element[0].attachEvent &&
                        this.$element[0].attachEvent("onpropertychange", this._sync);
                    var b = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    null != b ? (this._observer = new b(function(b) {
                        e.each(b, a._sync)
                    }), this._observer.observe(this.$element[0], {
                        attributes: !0,
                        subtree: !1
                    })) : this.$element[0].addEventListener && this.$element[0].addEventListener("DOMAttrModified", a._sync, !1)
                };
                b.prototype._registerDataEvents = function() {
                    var a = this;
                    this.dataAdapter.on("*", function(b, c) {
                        a.trigger(b, c)
                    })
                };
                b.prototype._registerSelectionEvents =
                    function() {
                        var a = this,
                            b = ["toggle", "focus"];
                        this.selection.on("toggle", function() {
                            a.toggleDropdown()
                        });
                        this.selection.on("focus", function(b) {
                            a.focus(b)
                        });
                        this.selection.on("*", function(c, d) {
                            -1 === e.inArray(c, b) && a.trigger(c, d)
                        })
                    };
                b.prototype._registerDropdownEvents = function() {
                    var a = this;
                    this.dropdown.on("*", function(b, c) {
                        a.trigger(b, c)
                    })
                };
                b.prototype._registerResultsEvents = function() {
                    var a = this;
                    this.results.on("*", function(b, c) {
                        a.trigger(b, c)
                    })
                };
                b.prototype._registerEvents = function() {
                    var a = this;
                    this.on("open",
                        function() {
                            a.$container.addClass("select2-container--open")
                        });
                    this.on("close", function() {
                        a.$container.removeClass("select2-container--open")
                    });
                    this.on("enable", function() {
                        a.$container.removeClass("select2-container--disabled")
                    });
                    this.on("disable", function() {
                        a.$container.addClass("select2-container--disabled")
                    });
                    this.on("blur", function() {
                        a.$container.removeClass("select2-container--focus")
                    });
                    this.on("query", function(b) {
                        a.isOpen() || a.trigger("open", {});
                        this.dataAdapter.query(b, function(c) {
                            a.trigger("results:all", {
                                data: c,
                                query: b
                            })
                        })
                    });
                    this.on("query:append", function(b) {
                        this.dataAdapter.query(b, function(c) {
                            a.trigger("results:append", {
                                data: c,
                                query: b
                            })
                        })
                    });
                    this.on("keypress", function(b) {
                        var d = b.which;
                        if (a.isOpen()) d === c.ESC || d === c.TAB || d === c.UP && b.altKey ? (a.close(), b.preventDefault()) : d === c.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : d === c.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : d === c.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : d === c.DOWN && (a.trigger("results:next", {}), b.preventDefault());
                        else if (d === c.ENTER || d === c.SPACE || d === c.DOWN && b.altKey) a.open(), b.preventDefault()
                    })
                };
                b.prototype._syncAttributes = function() {
                    this.options.set("disabled", this.$element.prop("disabled"));
                    this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                };
                b.prototype.trigger = function(a, c) {
                    var d = b.__super__.trigger,
                        e = {
                            open: "opening",
                            close: "closing",
                            select: "selecting",
                            unselect: "unselecting"
                        };
                    void 0 === c && (c = {});
                    if (a in e) {
                        var f = {
                            prevented: !1,
                            name: a,
                            args: c
                        };
                        d.call(this, e[a], f);
                        if (f.prevented) {
                            c.prevented = !0;
                            return
                        }
                    }
                    d.call(this, a, c)
                };
                b.prototype.toggleDropdown = function() {
                    this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                };
                b.prototype.open = function() {
                    this.isOpen() || this.trigger("query", {})
                };
                b.prototype.close = function() {
                    this.isOpen() && this.trigger("close", {})
                };
                b.prototype.isOpen = function() {
                    return this.$container.hasClass("select2-container--open")
                };
                b.prototype.hasFocus = function() {
                    return this.$container.hasClass("select2-container--focus")
                };
                b.prototype.focus = function(a) {
                    this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                };
                b.prototype.enable = function(a) {
                    this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.');
                    if (null == a || 0 === a.length) a = [!0];
                    this.$element.prop("disabled", !a[0])
                };
                b.prototype.data = function() {
                    this.options.get("debug") &&
                        0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                    var a = [];
                    this.dataAdapter.current(function(b) {
                        a = b
                    });
                    return a
                };
                b.prototype.val = function(a) {
                    this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.');
                    if (null == a ||
                        0 === a.length) return this.$element.val();
                    a = a[0];
                    e.isArray(a) && (a = e.map(a, function(a) {
                        return a.toString()
                    }));
                    this.$element.val(a).trigger("change")
                };
                b.prototype.destroy = function() {
                    this.$container.remove();
                    this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync);
                    null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && this.$element[0].removeEventListener("DOMAttrModified", this._sync, !1);
                    this._sync = null;
                    this.$element.off(".select2");
                    this.$element.attr("tabindex", this.$element.data("old-tabindex"));
                    this.$element.removeClass("select2-hidden-accessible");
                    this.$element.attr("aria-hidden", "false");
                    this.$element.removeData("select2");
                    this.dataAdapter.destroy();
                    this.selection.destroy();
                    this.dropdown.destroy();
                    this.results.destroy();
                    this.results = this.dropdown = this.selection = this.dataAdapter = null
                };
                b.prototype.render = function() {
                    var a = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                    a.attr("dir", this.options.get("dir"));
                    this.$container = a;
                    this.$container.addClass("select2-container--" + this.options.get("theme"));
                    a.data("element", this.$element);
                    return a
                };
                return b
            });
            h.define("jquery.select2", ["jquery", "require", "./select2/core", "./select2/defaults"], function(e, f, d, c) {
                f("jquery.mousewheel");
                if (null == e.fn.select2) {
                    var b = ["open", "close", "destroy"];
                    e.fn.select2 = function(a) {
                        a = a || {};
                        if ("object" === typeof a) return this.each(function() {
                            var b = e.extend({}, a, !0);
                            new d(e(this), b)
                        }), this;
                        if ("string" ===
                            typeof a) {
                            var c;
                            this.each(function() {
                                var b = e(this).data("select2");
                                null == b && window.console && console.error && console.error("The select2('" + a + "') method was called on an element that is not using Select2.");
                                var d = Array.prototype.slice.call(arguments, 1);
                                c = b[a].apply(b, d)
                            });
                            return -1 < e.inArray(a, b) ? this : c
                        }
                        throw Error("Invalid arguments for Select2: " + a);
                    }
                }
                null == e.fn.select2.defaults && (e.fn.select2.defaults = c);
                return d
            });
            h.define("jquery.mousewheel", ["jquery"], function(e) {
                return e
            });
            return {
                define: h.define,
                require: h.require
            }
        }(),
        r = k.require("jquery.select2");
    l.fn.select2.amd = k;
    return r
});
(function() {
    if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var l = jQuery.fn.select2.amd;
    return l.define("select2/i18n/vi", [], function() {
        return {
            inputTooLong: function(k) {
                k = k.input.length - k.maximum;
                var l = "Vui l\u00f2ng nh\u1eadp \u00edt h\u01a1n " + k + " k\u00fd t\u1ef1";
                return 1 != k && (l += "s"), l
            },
            inputTooShort: function(k) {
                return "Vui l\u00f2ng nh\u1eadp nhi\u1ec1u h\u01a1n " + (k.minimum - k.input.length) + ' k\u00fd t\u1ef1"'
            },
            loadingMore: function() {
                return "\u0110ang l\u1ea5y th\u00eam k\u1ebft qu\u1ea3\u2026"
            },
            maximumSelected: function(k) {
                return "Ch\u1ec9 c\u00f3 th\u1ec3 ch\u1ecdn \u0111\u01b0\u1ee3c " + k.maximum + " l\u1ef1a ch\u1ecdn"
            },
            noResults: function() {
                return "Kh\u00f4ng t\u00ecm th\u1ea5y k\u1ebft qu\u1ea3"
            },
            searching: function() {
                return "\u0110ang t\u00ecm\u2026"
            }
        }
    }), {
        define: l.define,
        require: l.require
    }
})();
(function(l, k) {
    "function" === typeof define && define.amd ? define(k) : "object" === typeof exports ? module.exports = k() : l.NProgress = k()
})(this, function() {
    function l(a, b, c) {
        return a < b ? b : a > c ? c : a
    }

    function k(a, b, d) {
        a = "translate3d" === c.positionUsing ? {
            transform: "translate3d(" + 100 * (-1 + a) + "%,0,0)"
        } : "translate" === c.positionUsing ? {
            transform: "translate(" + 100 * (-1 + a) + "%,0)"
        } : {
            "margin-left": 100 * (-1 + a) + "%"
        };
        a.transition = "all " + b + "ms " + d;
        return a
    }

    function r(a, b) {
        return 0 <= ("string" == typeof a ? a : f(a)).indexOf(" " + b + " ")
    }

    function h(a,
        b) {
        var c = f(a),
            d = c + b;
        r(c, b) || (a.className = d.substring(1))
    }

    function e(a, b) {
        var c = f(a);
        r(a, b) && (c = c.replace(" " + b + " ", " "), a.className = c.substring(1, c.length - 1))
    }

    function f(a) {
        return (" " + (a.className || "") + " ").replace(/\s+/gi, " ")
    }
    var d = {
            version: "0.2.0"
        },
        c = d.settings = {
            minimum: .08,
            easing: "ease",
            positionUsing: "",
            speed: 200,
            trickle: !0,
            trickleRate: .02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: "body",
            template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        };
    d.configure = function(a) {
        var b, d;
        for (b in a) d = a[b], void 0 !== d && a.hasOwnProperty(b) && (c[b] = d);
        return this
    };
    d.status = null;
    d.set = function(e) {
        var f = d.isStarted();
        e = l(e, c.minimum, 1);
        d.status = 1 === e ? null : e;
        var h = d.render(!f),
            r = h.querySelector(c.barSelector),
            q = c.speed,
            s = c.easing;
        h.offsetWidth;
        b(function(b) {
            "" === c.positionUsing && (c.positionUsing = d.getPositioningCSS());
            a(r, k(e, q, s));
            1 === e ? (a(h, {
                transition: "none",
                opacity: 1
            }), h.offsetWidth, setTimeout(function() {
                a(h, {
                    transition: "all " + q + "ms linear",
                    opacity: 0
                });
                setTimeout(function() {
                    d.remove();
                    b()
                }, q)
            }, q)) : setTimeout(b, q)
        });
        return this
    };
    d.isStarted = function() {
        return "number" === typeof d.status
    };
    d.start = function() {
        d.status || d.set(0);
        var a = function() {
            setTimeout(function() {
                d.status && (d.trickle(), a())
            }, c.trickleSpeed)
        };
        c.trickle && a();
        return this
    };
    d.done = function(a) {
        return a || d.status ? d.inc(.3 + .5 * Math.random()).set(1) : this
    };
    d.inc = function(a) {
        var b = d.status;
        return b ? ("number" !== typeof a && (a = (1 - b) * l(Math.random() * b, .1, .95)), b = l(b + a, 0, .994), d.set(b)) : d.start()
    };
    d.trickle =
        function() {
            return d.inc(Math.random() * c.trickleRate)
        };
    (function() {
        var a = 0,
            b = 0;
        d.promise = function(c) {
            if (!c || "resolved" === c.state()) return this;
            0 === b && d.start();
            a++;
            b++;
            c.always(function() {
                b--;
                0 === b ? (a = 0, d.done()) : d.set((a - b) / a)
            });
            return this
        }
    })();
    d.render = function(b) {
        if (d.isRendered()) return document.getElementById("nprogress");
        h(document.documentElement, "nprogress-busy");
        var e = document.createElement("div");
        e.id = "nprogress";
        e.innerHTML = c.template;
        var f = e.querySelector(c.barSelector),
            k = b ? "-100" : 100 *
            (-1 + (d.status || 0));
        b = document.querySelector(c.parent);
        a(f, {
            transition: "all 0 linear",
            transform: "translate3d(" + k + "%,0,0)"
        });
        c.showSpinner || (f = e.querySelector(c.spinnerSelector)) && f && f.parentNode && f.parentNode.removeChild(f);
        b != document.body && h(b, "nprogress-custom-parent");
        b.appendChild(e);
        return e
    };
    d.remove = function() {
        e(document.documentElement, "nprogress-busy");
        e(document.querySelector(c.parent), "nprogress-custom-parent");
        var a = document.getElementById("nprogress");
        a && a && a.parentNode && a.parentNode.removeChild(a)
    };
    d.isRendered = function() {
        return !!document.getElementById("nprogress")
    };
    d.getPositioningCSS = function() {
        var a = document.body.style,
            b = "WebkitTransform" in a ? "Webkit" : "MozTransform" in a ? "Moz" : "msTransform" in a ? "ms" : "OTransform" in a ? "O" : "";
        return b + "Perspective" in a ? "translate3d" : b + "Transform" in a ? "translate" : "margin"
    };
    var b = function() {
            function a() {
                var c = b.shift();
                c && c(a)
            }
            var b = [];
            return function(c) {
                b.push(c);
                1 == b.length && a()
            }
        }(),
        a = function() {
            function a(b) {
                return b.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi,
                    function(a, b) {
                        return b.toUpperCase()
                    })
            }

            function b(e) {
                e = a(e);
                var f;
                if (!(f = d[e])) {
                    f = e;
                    a: {
                        var h = document.body.style;
                        if (!(e in h))
                            for (var k = c.length, n = e.charAt(0).toUpperCase() + e.slice(1), l; k--;)
                                if (l = c[k] + n, l in h) {
                                    e = l;
                                    break a
                                }
                    }
                    f = d[f] = e
                }
                return f
            }
            var c = ["Webkit", "O", "Moz", "ms"],
                d = {};
            return function(a, c) {
                var d = arguments,
                    e, f;
                if (2 == d.length)
                    for (e in c) {
                        if (f = c[e], void 0 !== f && c.hasOwnProperty(e)) {
                            var d = a,
                                g = e,
                                g = b(g);
                            d.style[g] = f
                        }
                    } else e = a, g = d[1], d = d[2], g = b(g), e.style[g] = d
            }
        }();
    return d
});
(function() {}).call(this);
(function() {
    namespace("Lib");
    Lib.CloseTab = function() {
        return function(l) {
            var k;
            this.$container = l;
            k = !1;
            this.$container.on("change", function() {
                return k = !0
            });
            this.$container.find('input[type="submit"]').on("click", function() {
                return $(window).off("beforeunload")
            });
            $(window).on("beforeunload", function() {
                if (k) return "Do you really want to close?"
            })
        }
    }()
}).call(this);
(function() {
    var l = function(k, l) {
        return function() {
            return k.apply(l, arguments)
        }
    };
    namespace("Desktop.Lib");
    Desktop.Lib.FloatLabel = function() {
        return function(k) {
            var l, h, e;
            this.$container = k;
            e = this.$container.find("@formFloatGroup");
            l = 0;
            for (h = e.length; l < h; l++) k = e[l], new Desktop.Lib.FloatLabelInput($(k))
        }
    }();
    Desktop.Lib.FloatLabelInput = function() {
        function k(k) {
            var h;
            this.$group = k;
            this._active = l(this._active, this);
            h = this;
            this.$input = this.$group.find("input");
            this.$select = this.$group.find("select");
            0 < this.$input.length &&
                (this._active(this.$input), this.$input.off("focus").on("focus", function() {
                    h.$group.addClass("form_float__group-focused");
                    return h._active($(this))
                }), this.$input.off("blur").on("blur", function() {
                    h.$group.removeClass("form_float__group-focused");
                    return h._active($(this))
                }));
            0 < this.$select.length && (this._active(this.$select), this.$select.on("select2:open", function(e) {
                    return h.$group.addClass("form_float__group-focused")
                }), this.$select.on("select2:close", function(e) {
                    return h.$group.removeClass("form_float__group-focused")
                }),
                this.$select.on("select2:select", function(e) {
                    return h.$group.addClass("form_float__group-active")
                }), this.$select.on("select2:unselect", function(e) {
                    return h.$group.removeClass("form_float__group-active")
                }))
        }
        k.prototype._active = function(k) {
            return 0 < k.val().length ? this.$group.addClass("form_float__group-active") : this.$group.removeClass("form_float__group-active")
        };
        return k
    }()
}).call(this);
(function() {
    namespace("Lib");
    Lib.RegionSelect = function() {
        function l(k, l, h) {
            this.$city = k;
            this.$district = l;
            this.$village = h;
            this.select2Options = {
                language: gon.locale,
                theme: "theme",
                width: "100%"
            };
            this.$city.select2(this.select2Options);
            this.$district.select2(this.select2Options);
            this.$village.select2(this.select2Options);
            this.$city.on("change", function(e) {
                return function(f) {
                    return e._appendDistrict()
                }
            }(this));
            this.$district.on("change", function(e) {
                return function(f) {
                    return e._appendVillage()
                }
            }(this))
        }
        l.prototype.isCitySelected =
            function() {
                return null != this.$city.val() && 0 < this.$city.val().length
            };
        l.prototype.isDistrictSelected = function() {
            return null != this.$district.val() && 0 < this.$district.val().length
        };
        l.prototype._appendDistrict = function() {
            var k, l;
            l = this;
            k = this.$district.find("option:first-child").text();
            this.$district.select2("destroy");
            this.$district.empty();
            this.isCitySelected() && $.ajax({
                url: Routes.autocomplete_districts_path(),
                dataType: "json",
                type: "GET",
                data: {
                    q: {
                        city_id: l.$city.val()
                    }
                },
                success: function(h) {
                    l.$district.append('<option value="">' +
                        k + "</option>");
                    $.each(h.collection, function(e, f) {
                        return l.$district.append('<option value="' + f.id + '">' + f.title + "</option>")
                    });
                    return l.$district.trigger("change")
                }
            });
            return this.$district.select2(merge(l.select2Options, {
                disabled: !this.isCitySelected()
            }))
        };
        l.prototype._appendVillage = function() {
            var k, l;
            l = this;
            k = this.$village.find("option:first-child").text();
            this.$village.select2("destroy");
            this.$village.empty();
            this.isDistrictSelected() && $.ajax({
                url: Routes.autocomplete_villages_path(),
                dataType: "json",
                type: "GET",
                data: {
                    q: {
                        district_id: l.$district.val()
                    }
                },
                success: function(h) {
                    l.$village.append('<option value="">' + k + "</option>");
                    $.each(h.collection, function(e, f) {
                        return l.$village.append('<option value="' + f.id + '">' + f.title + "</option>")
                    });
                    return l.$village.trigger("change")
                }
            });
            return this.$village.select2(merge(l.select2Options, {
                disabled: !this.isDistrictSelected()
            }))
        };
        return l
    }()
}).call(this);
(function() {
    namespace("Lib");
    Lib.ScbSelect = function() {
        function l(k, l) {
            this.$province = k;
            this.$city = l;
            this.select2Options = {
                language: gon.locale,
                theme: "theme",
                width: "100%"
            };
            this.$province.select2(this.select2Options);
            this.$city.select2(this.select2Options);
            this.$province.on("change", function(h) {
                return function(e) {
                    return h._appendCity()
                }
            }(this))
        }
        l.prototype.isProvinceSelected = function() {
            return null != this.$province.val() && 0 < this.$province.val().length
        };
        l.prototype._appendCity = function() {
            var k, l;
            l = this;
            k = this.$city.find("option:first-child").text();
            this.$city.select2("destroy");
            this.$city.empty();
            this.isProvinceSelected() && $.ajax({
                url: Routes.autocomplete_scb_cities_path(),
                dataType: "json",
                type: "GET",
                data: {
                    q: {
                        province_id: l.$province.val()
                    }
                },
                success: function(h) {
                    l.$city.append('<option value="">' + k + "</option>");
                    $.each(h.collection, function(e, f) {
                        return l.$city.append('<option value="' + f.id + '">' + f.title + "</option>")
                    });
                    return l.$city.trigger("change")
                }
            });
            return this.$city.select2(merge(l.select2Options, {
                disabled: !this.isProvinceSelected()
            }))
        };
        return l
    }()
}).call(this);
(function() {
    namespace("Desktop.Lib");
    Desktop.Lib.Select2 = function() {
        return function(l) {
            this.$container = l;
            this.$container.find("@select2").select2({
                theme: "theme",
                width: "100%",
                minimumResultsForSearch: 10
            });
            this.$container.find("@floatSelect2").select2({
                theme: "float",
                width: "100%",
                minimumResultsForSearch: 10
            })
        }
    }()
}).call(this);
(function() {
    var l;
    $(document).ready(function() {
        return window.Application = new l($(document))
    });
    l = function() {
        return function(k) {
            this.$container = k;
            new Desktop.Lib.FloatLabel(this.$container);
            new Desktop.Lib.Select2(this.$container);
            this.$container.on("ajax:beforeSend", function() {
                return NProgress.start()
            });
            this.$container.on("ajax:complete", function() {
                return NProgress.done()
            })
        }
    }()
}).call(this);