(function() {
    window.hj = window.hj || function() {
        (window.hj.q = window.hj.q || []).push(arguments)
    };
    window._hjSettings = window._hjSettings || {};
    hj.defaults = {
        host: "insights.hotjar.com",
        staticHost: "static.hotjar.com",
        varsHost: "vars.hotjar.com"
    };
    hj.host = _hjSettings.host || hj.defaults.host;
    hj.staticHost = _hjSettings.staticHost || hj.defaults.staticHost;
    hj.varsHost = _hjSettings.varsHost || hj.defaults.varsHost;
    hj.exceptions = function() {
        function m() {
            var d = setInterval(function() {
                if ("undefined" !== typeof StackTrace) clearInterval(d),
                    b = "loaded", a();
                else if ("loading" != b) {
                    b = "loading";
                    var g = document.createElement("script");
                    g.src = f;
                    document.getElementsByTagName("head")[0].appendChild(g)
                }
            }, 10)
        }

        function a(l) {
            l && g.length < d && g.push(l);
            k || (k = !0, l = g.splice(0, 1), q++, q <= d && (c(l[0]), setTimeout(function() {
                k = !1;
                1 <= g.length && a()
            }, p)))
        }

        function c(a) {
            var d = a.exception,
                g = "",
                l = {
                    scriptversion: hj.scriptVersion,
                    module: a.module,
                    message: d.message ? d.message.toString() : "<unknown>",
                    url: location.href,
                    useragent: navigator.userAgent
                };
            StackTrace.fromError(d, {
                offline: !0
            }).then(function(k) {
                var b = a.module;
                hj.hq.each(k, function(a, d) {
                    g += d.source + "\n";
                    b += d.functionName
                });
                l.errorgroup = hj.md5(b, !0);
                l.errormessagegroup = hj.md5(d.message ? d.message.toString().replace(/\s/g, "") : "<unknown>", !0);
                l.stacktrace = g;
                d.cause && (l.cause = d.cause);
                h(l)
            })
        }

        function h(a) {
            var d = "undefined" !== typeof hj.log ? hj.log.debug : function() {},
                g;
            d("Exception occurred", "Exception", a);
            try {
                g = {
                    "http:": 12080,
                    "https:": 12443
                }[location.protocol], hj.hq.ajax({
                    url: "//graylog.hotjar.com:" + g + "/gelf",
                    type: "POST",
                    data: hj.json.stringify(a)
                })
            } catch (l) {
                d("Failed to log exception: " + l, "Exception")
            }
        }
        var l = {},
            f = "https://" + hj.staticHost + "/static/vendor/stacktrace.js/1.0.1/stacktrace-with-polyfills.min.js",
            b = "unloaded",
            g = [],
            d = 10,
            q = 0,
            p = 1E3,
            k = !1;
        l.tryCatch = function(a, d) {
            return function() {
                try {
                    return a.apply(this, arguments)
                } catch (g) {
                    l.log(g, d || "Generic")
                }
            }
        };
        hj.tryCatch = l.tryCatch;
        l.log = function(d, l) {
            var k = {
                module: l || "",
                exception: d
            };
            "loaded" == b ? a(k) : (g.push(k), "unloaded" == b && m())
        };
        l.getQueue = function() {
            return g
        };
        l.getStacktraceJSisLoaded =
            function() {
                return "loaded" == b
            };
        l.testWithStackTrace = function() {
            try {
                "test".push([])
            } catch (a) {
                hj.exceptions.log(a, "exceptions")
            }
        };
        l.testThrottlingWithStackTrace = function() {
            for (var a = 0; 5 > a; a++) l.testWithStackTrace()
        };
        l.testCallbackWrapper = function() {
            setTimeout(hj.tryCatch(l.testWithStackTrace, "Exceptions"), 1E3)
        };
        return l
    }()
})();
try {
    (function(m, a) {
        var c = function(a) {
            return new h(a)
        };
        c.isValidSelector = function(a) {
            try {
                return hj.hq(a), !0
            } catch (f) {
                return !1
            }
        };
        c.isEmptyObject = function(a) {
            return Object.keys(a).length ? !1 : !0
        };
        c.isFunction = function(a) {
            return "function" === typeof a
        };
        c.isWindow = function(a) {
            return a === window
        };
        c.isDocument = function(a) {
            return a === window.document
        };
        c.noop = function() {};
        c.each = function(a, f) {
            var b, g;
            if ("object" === typeof a && "[object Array]" !== Object.prototype.toString.call(a))
                if ((g = a[Object.keys(a)[0]]) && void 0 !==
                    g.nodeName)
                    for (b in a) {
                        if (a.hasOwnProperty(b) && "length" !== b && !1 === f(b, a[b], a)) break
                    } else
                        for (b in a) {
                            if (a.hasOwnProperty(b) && !1 === f(b, a[b], a)) break
                        } else if ("undefined" !== typeof a)
                            for (b = 0; b < a.length && !1 !== f(b, a[b], a); b += 1);
        };
        c.trim = function(a) {
            return "string" === typeof a ? a.replace(/^\s+|\s+$/gm, "") : ""
        };
        c.inArray = function(a, f) {
            var b = f.indexOf(a);
            return "undefined" === typeof b || -1 === b ? !1 : !0
        };
        c.isArray = function(a) {
            return "array" === typeof a
        };
        c.indexOf = function(a, f) {
            if ("object" === typeof f) {
                var b = f.indexOf(a);
                return "undefined" !== typeof b ? b : -1
            }
            return -1
        };
        c.ajax = function(a) {
            var f = new XMLHttpRequest;
            a.type = a.type || "GET";
            f.open(a.type, a.url, !0);
            "POST" === a.type && f.setRequestHeader("Content-Type", (a.contentType ? a.contentType : "application/x-www-form-urlencoded") + "; charset=UTF-8");
            f.onload = function() {
                200 <= f.status && 400 > f.status ? c.isFunction(a.success) && a.success(f.responseText && hj.json.parse(f.responseText), f) : c.isFunction(a.error) && a.error(f)
            };
            f.onerror = function() {
                c.isFunction(a.error) && a.error(f)
            };
            c.isFunction(a.requestAnnotator) &&
                a.requestAnnotator(f);
            "POST" === a.type && a.data ? f.send(a.data) : f.send()
        };
        c.get = function(a, f) {
            var b = new XMLHttpRequest;
            b.open("GET", a, !0);
            b.onload = function() {
                200 <= b.status && 400 > b.status && f && f(b.responseText)
            };
            b.send()
        };
        c.eventHandlers = {};
        c.selector = "";
        var h = function(l) {
            var f;
            c.selector = l;
            if (c.isWindow(l)) this[0] = window, this.length = 1;
            else if (c.isDocument(l)) this[0] = a, this.length = 1;
            else if ("object" === typeof l) this[0] = l, this.length = 1;
            else if ("string" === typeof l && "<" === l.charAt(0) && ">" === l.charAt(l.length -
                    1) && 3 <= l.length) f = a.createElement("div"), f.innerHTML = l, this[0] = f.childNodes[0], this.length = 1;
            else if ("string" === typeof l) {
                if (!isNaN(l.charAt(1)) && ("." === l.charAt(0) || "#" === l.charAt(0))) l = l.charAt(0) + "\\3" + l.charAt(1) + " " + l.slice(2);
                try {
                    f = a.querySelectorAll(l)
                } catch (b) {
                    return this.length = 0, this
                }
                for (l = 0; l < f.length; l += 1) this[l] = f[l];
                this.length = f.length
            }
            return this
        };
        h.prototype.val = function(a) {
            "undefined" !== typeof a && 0 < this.length && (this[0].value = a);
            if (void 0 !== this[0]) return this[0] ? this[0].value : ""
        };
        h.prototype.text = function(a) {
            return void 0 === a ? this[0].textContent : this[0].textContent = a
        };
        h.prototype.each = function(a, f) {
            Array.prototype.forEach.call(this, function(a, g, d) {
                f(g, a, d)
            })
        };
        h.prototype.append = function(l) {
            var f;
            "object" === typeof l ? "body" === c.selector ? a.body.appendChild(l.get(0)) : this[0].appendChild(l.get(0)) : "body" === c.selector ? (f = a.createElement("div"), f.innerHTML = l, a.body.appendChild(f)) : (f = a.createElement("div"), f.innerHTML = l, this[0].appendChild(f))
        };
        h.prototype.hasClass = function(a) {
            return this[0].classList ?
                this[0].classList.contains(a) : RegExp("(^| )" + a + "( |$)", "gi").test(this[0].className)
        };
        h.prototype.addClass = function(a) {
            var f;
            for (f = 0; f < this.length; f += 1) this[f].classList ? this[f].classList.add(a) : this[f].className += " " + a;
            return this
        };
        h.prototype.removeClass = function(a) {
            var f;
            for (f = 0; f < this.length; f += 1) this[f].classList ? this[f].classList.remove(a) : this[f].className = this[f].className.replace(RegExp("(^|\\b)" + a.split(" ").join("|") + "(\\b|$)", "gi"), " ");
            return this
        };
        h.prototype.toggleClass = function(a) {
            var f;
            for (f = 0; f < this.length; f += 1) this[f].classList ? this[f].classList.contains(a) ? this[f].classList.remove(a) : this[f].classList.add(a) : RegExp("(^| )" + a + "( |$)", "gi").test(this[0].className) ? this[f].className = this[f].className.replace(RegExp("(^|\\b)" + a.split(" ").join("|") + "(\\b|$)", "gi"), " ") : this[f].className += " " + a;
            return this
        };
        h.prototype.is = function(a) {
            var f;
            a: {
                f = this[0];
                var b = f.matchesSelector || f.msMatchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector;
                if (b) f = b.call(f, a);
                else {
                    a = f.parentNode.querySelectorAll(a);
                    for (b = a.length; 0 <= b; b -= 1)
                        if (a[b] === f) {
                            f = !0;
                            break a
                        }
                    f = !1
                }
            }
            return f
        };
        h.prototype.remove = function() {
            var a;
            for (a = 0; a < this.length; a += 1) this[a].parentNode.removeChild(this[a])
        };
        h.prototype.click = function(c) {
            var f, b;
            for (f = 0; f < this.length; f += 1) b = a.createEvent("HTMLEvents"), b.initEvent("click", !0, !1), this[f].dispatchEvent(b), c && c()
        };
        h.prototype.trigger = function(c) {
            var f, b = c.split(" "),
                g;
            for (c = 0; c < this.length; c += 1)
                for (f = 0; f < b.length; f += 1) g = a.createEvent("HTMLEvents"),
                    g.initEvent(b[f], !0, !1), this[c].dispatchEvent(g)
        };
        h.prototype.on = function(l, f, b) {
            var g, d = l.split(" "),
                q, h, k, n, r, s;
            if (c.isDocument(this[0]) && "string" === typeof f)
                for (l = 0; l < d.length; l += 1) "string" === typeof f ? ("boolean" === typeof b && !1 === b && (b = function(a) {
                        a.preventDefault();
                        return !1
                    }), q = f + "." + d[l], h = function(d) {
                        if (k = a.querySelectorAll(f)) {
                            n = d.target;
                            for (r = -1; n && -1 === (r = Array.prototype.indexOf.call(k, n));) n = n.parentElement; - 1 < r && b.call(n, d)
                        }
                    }, c.isArray(c.eventHandlers[q]) || (c.eventHandlers[q] = []), c.eventHandlers[q].push(h),
                    a.addEventListener(d[l].split(".")[0], h, !0)) : ("boolean" === typeof f && !1 === f && (f = function(a) {
                    a.preventDefault();
                    return !1
                }), c.isArray(c.eventHandlers.document) || (c.eventHandlers.document = []), c.eventHandlers.document.push(f), this[0].addEventListener(d[l].split(".")[0], f, !1));
            else if (c.isDocument(this[0]))
                for (l = 0; l < d.length; l += 1) "boolean" === typeof f && !1 === f && (f = function(a) {
                        a.preventDefault();
                        return !1
                    }), q = "document." + d[l], c.isArray(c.eventHandlers[q]) || (c.eventHandlers[q] = []), c.eventHandlers[q].push(f),
                    a.addEventListener(d[l].split(".")[0], f, !1);
            else if (c.isWindow(this[0]))
                for (l = 0; l < d.length; l += 1) "boolean" === typeof f && !1 === f && (f = function(a) {
                    a.preventDefault();
                    return !1
                }), q = "window." + d[l], c.isArray(c.eventHandlers[q]) || (c.eventHandlers[q] = []), c.eventHandlers[q].push(f), window.addEventListener(d[l].split(".")[0], f, !1);
            else
                for (g = 0; g < this.length; g += 1)
                    for (l = 0; l < d.length; l += 1) "object" === typeof f ? (s = f, f = function(a) {
                        a.data = s;
                        b.call(this[g], a)
                    }) : "boolean" === typeof f && !1 === f && (f = function(a) {
                        a.preventDefault();
                        return !1
                    }), q = c.selector + "." + d[l], c.isArray(c.eventHandlers[q]) || (c.eventHandlers[q] = []), c.eventHandlers[q].push(f), this[g].addEventListener(d[l].split(".")[0], f, !1);
            return this
        };
        h.prototype.off = function(l, f, b) {
            var g, d, q = l.split(" ");
            for (l = 0; l < this.length; l += 1)
                for (g = 0; g < q.length; g += 1)
                    if (c.isDocument(this[l]) && "string" === typeof f)
                        if ("undefined" === typeof b) {
                            if ("object" === typeof c.eventHandlers[f + "." + q[g]])
                                for (d = 0; d < c.eventHandlers[f + "." + q[g]].length; d += 1) a.removeEventListener(q[g].split(".")[0], c.eventHandlers[f +
                                    "." + q[g]][d], !0)
                        } else a.removeEventListener(q[g].split(".")[0], b, !1);
            else if (c.isDocument(this[l]))
                if ("undefined" === typeof f) {
                    if ("object" === typeof c.eventHandlers["document." + q[g]])
                        for (d = 0; d < c.eventHandlers["document." + q[g]].length; d += 1) a.removeEventListener(q[g].split(".")[0], c.eventHandlers["document." + q[g]][d], !1)
                } else a.removeEventListener(q[g].split(".")[0], f, !1);
            else if (c.isWindow(this[l]))
                if ("undefined" === typeof f) {
                    if ("object" === typeof c.eventHandlers["window." + q[g]])
                        for (d = 0; d < c.eventHandlers["window." +
                                q[g]].length; d += 1) window.removeEventListener(q[g].split(".")[0], c.eventHandlers["window." + q[g]][d], !1)
                } else window.removeEventListener(q[g].split(".")[0], f, !1);
            else if ("undefined" === typeof f) {
                if ("object" === typeof c.eventHandlers[c.selector + "." + q[g]])
                    for (d = 0; d < c.eventHandlers[c.selector + "." + q[g]].length; d += 1) this[l].removeEventListener(q[g].split(".")[0], c.eventHandlers[c.selector + "." + q[g]][d], !1)
            } else this[l].removeEventListener(q[g].split(".")[0], f, !1);
            return this
        };
        h.prototype.scrollTop = function() {
            return window.document.body.scrollTop ||
                window.document.documentElement.scrollTop
        };
        h.prototype.scrollLeft = function() {
            return window.document.body.scrollLeft || window.document.documentElement.scrollLeft
        };
        h.prototype.height = function() {
            var l;
            return c.isWindow(this[0]) ? a.documentElement.clientHeight : 9 === this[0].nodeType ? (l = this[0].documentElement, Math.max(this[0].body.scrollHeight, l.scrollHeight, this[0].body.offsetHeight, l.offsetHeight, l.clientHeight)) : Math.max(this[0].scrollHeight, this[0].offsetHeight)
        };
        h.prototype.width = function() {
            var l;
            return c.isWindow(this[0]) ?
                a.documentElement.clientWidth : 9 === this[0].nodeType ? (l = this[0].documentElement, Math.max(this[0].body.scrollWidth, l.scrollWidth, this[0].body.offsetWidth, l.offsetWidth, l.clientWidth)) : Math.max(this[0].scrollWidth, this[0].offsetWidth)
        };
        h.prototype.outerHeight = function() {
            return this[0].offsetHeight
        };
        h.prototype.offset = function() {
            var a = (this[0] && this[0].ownerDocument).documentElement;
            return {
                top: this[0].getBoundingClientRect().top + window.pageYOffset - a.clientTop,
                left: this[0].getBoundingClientRect().left +
                    window.pageXOffset - a.clientLeft
            }
        };
        h.prototype.attr = function(a, f) {
            var b;
            if (f || "" === f) {
                for (b = 0; b < this.length; b += 1) this[b].setAttribute(a, f);
                return this
            }
            if ("object" === typeof this[0] && null !== this[0].getAttribute(a)) return this[0].getAttribute(a)
        };
        h.prototype.ready = function(l) {
            c.isDocument(this[0]) && ("interactive" === a.readyState || "complete" === a.readyState || "loaded" === a.readyState ? l() : a.addEventListener("DOMContentLoaded", l, !1))
        };
        h.prototype.parent = function() {
            return c(this[0].parentNode)
        };
        h.prototype.get =
            function(a) {
                return this[a]
            };
        h.prototype.show = function() {
            var a;
            for (a = 0; a < this.length; a += 1) this[a].style.display = "";
            return this
        };
        h.prototype.hide = function() {
            var a;
            for (a = 0; a < this.length; a += 1) this[a].style.display = "none";
            return this
        };
        h.prototype.focus = function() {
            var a;
            for (a = 0; a < this.length; a += 1) this[a].focus();
            return this
        };
        h.prototype.blur = function() {
            var a;
            for (a = 0; a < this.length; a += 1) this[a].blur();
            return this
        };
        h.prototype.clone = function() {
            return this[0].cloneNode(!0)
        };
        h.prototype.removeAttr = function(a) {
            var f;
            for (f = 0; f < this.length; f += 1) this[f].removeAttribute(a);
            return this
        };
        h.prototype.find = function(a) {
            var f = c(),
                b;
            try {
                b = this[0].querySelectorAll(a)
            } catch (g) {
                return this.length = 0, this
            }
            for (a = 0; a < b.length; a += 1) f[a] = b[a];
            f.length = b.length;
            return f
        };
        h.prototype.is = function(a) {
            var f, b = !1;
            if (!a || "object" !== typeof this[0]) return !1;
            if ("object" === typeof a) return c(this[0]).get(0) === a.get(0);
            if ("string" === typeof a) {
                if (":visible" === a) return !(0 >= this[0].offsetWidth && 0 >= this[0].offsetHeight);
                if (":hidden" === a) return 0 >=
                    this[0].offsetWidth && 0 >= this[0].offsetHeight;
                if (":checked" === a) return this[0].checked;
                if (-1 < a.indexOf("[")) {
                    if (f = /([A-Za-z]+)\[([A-Za-z-]+)\=([A-Za-z]+)\]/g.exec(a), f.length) return c.each(c(this[0]).get(0).attributes, function(a, d) {
                        d.name === f[2] && d.value === f[3] && (b = !0)
                    }), c(this[0]).get(0).nodeName.toLowerCase() === f[1] && b
                } else return c(this[0]).get(0).nodeName.toLowerCase() === a
            }
        };
        h.prototype.css = function(a, f) {
            var b, g;
            for (g = 0; g < this.length; g += 1)
                if ("object" === typeof a)
                    for (b in a) this[g].style[b] = a[b];
                else if ("number" === typeof f || "string" === typeof f) this[g].style[a] = f;
            else return getComputedStyle(this[g])[a];
            return this
        };
        h.prototype.animate = function(a, f) {
            var b, g = this;
            "undefined" === typeof f && (f = 400);
            for (b = 0; b < g.length; b += 1) c.each(a, function(a, c) {
                function h(a, d) {
                    a.style[d[0].attribute] = d[0].value;
                    d.shift();
                    d.length ? v = setTimeout(function() {
                        h(a, d)
                    }, 10) : clearTimeout(v)
                }
                c = c.toString();
                var k = parseFloat(getComputedStyle(g[b])[a]) || 0,
                    n = getComputedStyle(g[b])[a].replace(/[0-9.-]/g, ""),
                    l = parseFloat(c),
                    s =
                    c.replace(/[0-9.-]/g, ""),
                    n = n || s,
                    m = l - k,
                    s = parseFloat(f / 10),
                    m = m / s,
                    u = [],
                    t, v;
                for (t = 0; t < s; t += 1) k += m, u.push({
                    attribute: a,
                    value: n ? parseInt(k) + n : parseFloat(k).toFixed(1)
                });
                u.pop();
                u.push({
                    attribute: a,
                    value: l + n
                });
                u.length && h(g[b], u)
            });
            return this
        };
        h.prototype.filter = function(h) {
            return Array.prototype.filter.call(a.querySelectorAll(c.selector), function(a, b) {
                h(b, a)
            })
        };
        m.hj = m.hj || {};
        m.hj.hq = m.hj.hq || c
    })(this, document)
} catch (exception$$4) {
    hj.exceptions.log(exception$$4, "hquery")
}
hj.tryCatch(function() {
    if ("undefined" !== typeof window.MutationObserver || "undefined" !== typeof window.WebKitMutationObserver || "undefined" !== typeof window.MozMutationObserver) {
        var m = this.__extends || function(a, d) {
                function g() {
                    this.constructor = a
                }
                for (var k in d) d.hasOwnProperty(k) && (a[k] = d[k]);
                g.prototype = d.prototype;
                a.prototype = new g
            },
            a;
        a = "undefined" !== typeof WebKitMutationObserver ? WebKitMutationObserver : MutationObserver;
        if (void 0 === a) throw console.error("DOM Mutation Observers are required."), console.error("https://developer.mozilla.org/en-US/docs/DOM/MutationObserver"),
            Error("DOM Mutation Observers are required");
        var c = function() {
                function a() {
                    this.nodes = [];
                    this.values = []
                }
                a.prototype.isIndex = function(a) {
                    return +a === a >>> 0
                };
                a.prototype.nodeId = function(d) {
                    var g = d[a.ID_PROP];
                    g || (g = d[a.ID_PROP] = a.nextId_++);
                    return g
                };
                a.prototype.set = function(a, d) {
                    var g = this.nodeId(a);
                    this.nodes[g] = a;
                    this.values[g] = d
                };
                a.prototype.get = function(a) {
                    a = this.nodeId(a);
                    return this.values[a]
                };
                a.prototype.has = function(a) {
                    return this.nodeId(a) in this.nodes
                };
                a.prototype.deleteNode = function(a) {
                    a = this.nodeId(a);
                    delete this.nodes[a];
                    this.values[a] = void 0
                };
                a.prototype.keys = function() {
                    var a = [],
                        d;
                    for (d in this.nodes) this.isIndex(d) && a.push(this.nodes[d]);
                    return a
                };
                a.ID_PROP = "__hj_mutation_summary_node_map_id__";
                a.nextId_ = 1;
                return a
            }(),
            h;
        (function(a) {
            a[a.STAYED_OUT = 0] = "STAYED_OUT";
            a[a.ENTERED = 1] = "ENTERED";
            a[a.STAYED_IN = 2] = "STAYED_IN";
            a[a.REPARENTED = 3] = "REPARENTED";
            a[a.REORDERED = 4] = "REORDERED";
            a[a.EXITED = 5] = "EXITED"
        })(h || (h = {}));
        var l = function() {
                function a(d, g, k, b, f, c, q, h) {
                    "undefined" === typeof g && (g = !1);
                    "undefined" ===
                    typeof k && (k = !1);
                    "undefined" === typeof b && (b = !1);
                    "undefined" === typeof f && (f = null);
                    "undefined" === typeof c && (c = !1);
                    "undefined" === typeof q && (q = null);
                    "undefined" === typeof h && (h = null);
                    this.node = d;
                    this.childList = g;
                    this.attributes = k;
                    this.characterData = b;
                    this.oldParentNode = f;
                    this.added = c;
                    this.attributeOldValues = q;
                    this.characterDataOldValue = h;
                    this.isCaseInsensitive = this.node.nodeType === Node.ELEMENT_NODE && this.node instanceof HTMLElement && this.node.ownerDocument instanceof HTMLDocument
                }
                a.prototype.getAttributeOldValue =
                    function(a) {
                        if (this.attributeOldValues) return this.isCaseInsensitive && (a = a.toLowerCase()), this.attributeOldValues[a]
                    };
                a.prototype.getAttributeNamesMutated = function() {
                    var a = [];
                    if (!this.attributeOldValues) return a;
                    for (var d in this.attributeOldValues) a.push(d);
                    return a
                };
                a.prototype.attributeMutated = function(a, d) {
                    this.attributes = !0;
                    this.attributeOldValues = this.attributeOldValues || {};
                    a in this.attributeOldValues || (this.attributeOldValues[a] = d)
                };
                a.prototype.characterDataMutated = function(a) {
                    this.characterData ||
                        (this.characterData = !0, this.characterDataOldValue = a)
                };
                a.prototype.removedFromParent = function(a) {
                    this.childList = !0;
                    this.added || this.oldParentNode ? this.added = !1 : this.oldParentNode = a
                };
                a.prototype.insertedIntoParent = function() {
                    this.added = this.childList = !0
                };
                a.prototype.getOldParent = function() {
                    if (this.childList) {
                        if (this.oldParentNode) return this.oldParentNode;
                        if (this.added) return null
                    }
                    return this.node.parentNode
                };
                return a
            }(),
            f = function() {
                return function() {
                    this.added = new c;
                    this.removed = new c;
                    this.maybeMoved =
                        new c;
                    this.oldPrevious = new c;
                    this.moved = void 0
                }
            }(),
            b = function(a) {
                function d(g, k) {
                    a.call(this);
                    this.rootNode = g;
                    this.wasReachableCache = this.reachableCache = void 0;
                    this.anyCharacterDataChanged = this.anyAttributesChanged = this.anyParentsChanged = !1;
                    for (var b = 0; b < k.length; b++) {
                        var f = k[b];
                        switch (f.type) {
                            case "childList":
                                this.anyParentsChanged = !0;
                                for (var c = 0; c < f.removedNodes.length; c++) {
                                    var q = f.removedNodes[c];
                                    this.getChange(q).removedFromParent(f.target)
                                }
                                for (c = 0; c < f.addedNodes.length; c++) q = f.addedNodes[c],
                                    this.getChange(q).insertedIntoParent();
                                break;
                            case "attributes":
                                this.anyAttributesChanged = !0;
                                c = this.getChange(f.target);
                                c.attributeMutated(f.attributeName, f.oldValue);
                                break;
                            case "characterData":
                                this.anyCharacterDataChanged = !0, c = this.getChange(f.target), c.characterDataMutated(f.oldValue)
                        }
                    }
                }
                m(d, a);
                d.prototype.getChange = function(a) {
                    var d = this.get(a);
                    d || (d = new l(a), this.set(a, d));
                    return d
                };
                d.prototype.getOldParent = function(a) {
                    var d = this.get(a);
                    return d ? d.getOldParent() : a.parentNode
                };
                d.prototype.getIsReachable =
                    function(a) {
                        if (a === this.rootNode) return !0;
                        if (!a) return !1;
                        this.reachableCache = this.reachableCache || new c;
                        var d = this.reachableCache.get(a);
                        void 0 === d && (d = this.getIsReachable(a.parentNode), this.reachableCache.set(a, d));
                        return d
                    };
                d.prototype.getWasReachable = function(a) {
                    if (a === this.rootNode) return !0;
                    if (!a) return !1;
                    this.wasReachableCache = this.wasReachableCache || new c;
                    var d = this.wasReachableCache.get(a);
                    void 0 === d && (d = this.getWasReachable(this.getOldParent(a)), this.wasReachableCache.set(a, d));
                    return d
                };
                d.prototype.reachabilityChange = function(a) {
                    return this.getIsReachable(a) ? this.getWasReachable(a) ? 2 : 1 : this.getWasReachable(a) ? 5 : 0
                };
                return d
            }(c),
            g = function() {
                function a(d, g, k, f, q) {
                    this.rootNode = d;
                    this.mutations = g;
                    this.selectors = k;
                    this.calcReordered = f;
                    this.calcOldPreviousSibling = q;
                    this.treeChanges = new b(d, g);
                    this.entered = [];
                    this.exited = [];
                    this.stayedIn = new c;
                    this.visited = new c;
                    this.matchCache = this.characterDataOnly = this.childListChangeMap = void 0;
                    this.processMutations()
                }
                a.prototype.processMutations = function() {
                    if (this.treeChanges.anyParentsChanged ||
                        this.treeChanges.anyAttributesChanged)
                        for (var a = this.treeChanges.keys(), d = 0; d < a.length; d++) this.visitNode(a[d], void 0)
                };
                a.prototype.visitNode = function(a, d) {
                    if (!this.visited.has(a)) {
                        this.visited.set(a, !0);
                        var g = this.treeChanges.get(a),
                            k = d;
                        if (g && g.childList || void 0 == k) k = this.treeChanges.reachabilityChange(a);
                        if (0 !== k) {
                            this.matchabilityChange(a);
                            if (1 === k) this.entered.push(a);
                            else if (5 === k) this.exited.push(a), this.ensureHasOldPreviousSiblingIfNeeded(a);
                            else if (2 === k) {
                                var b = 2;
                                g && g.childList && (g.oldParentNode !==
                                    a.parentNode ? (b = 3, this.ensureHasOldPreviousSiblingIfNeeded(a)) : this.calcReordered && this.wasReordered(a) && (b = 4));
                                this.stayedIn.set(a, b)
                            }
                            if (2 !== k)
                                for (g = a.firstChild; g; g = g.nextSibling) this.visitNode(g, k)
                        }
                    }
                };
                a.prototype.ensureHasOldPreviousSiblingIfNeeded = function(a) {
                    if (this.calcOldPreviousSibling) {
                        this.processChildlistChanges();
                        var d = a.parentNode,
                            g = this.treeChanges.get(a);
                        g && g.oldParentNode && (d = g.oldParentNode);
                        (g = this.childListChangeMap.get(d)) || (g = new f, this.childListChangeMap.set(d, g));
                        g.oldPrevious.has(a) ||
                            g.oldPrevious.set(a, a.previousSibling)
                    }
                };
                a.prototype.getChanged = function(a, d, g) {
                    this.selectors = d;
                    this.characterDataOnly = g;
                    for (d = 0; d < this.entered.length; d++) {
                        g = this.entered[d];
                        var k = this.matchabilityChange(g);
                        (1 === k || 2 === k) && a.added.push(g)
                    }
                    var b = this.stayedIn.keys();
                    for (d = 0; d < b.length; d++)
                        if (g = b[d], k = this.matchabilityChange(g), 1 === k) a.added.push(g);
                        else if (5 === k) a.removed.push(g);
                    else if (2 === k && (a.reparented || a.reordered)) k = this.stayedIn.get(g), a.reparented && 3 === k ? a.reparented.push(g) : a.reordered &&
                        4 === k && a.reordered.push(g);
                    for (d = 0; d < this.exited.length; d++) g = this.exited[d], k = this.matchabilityChange(g), (5 === k || 2 === k) && a.removed.push(g)
                };
                a.prototype.getOldParentNode = function(a) {
                    var d = this.treeChanges.get(a);
                    if (d && d.childList) return d.oldParentNode ? d.oldParentNode : null;
                    d = this.treeChanges.reachabilityChange(a);
                    if (0 === d || 1 === d) throw Error("getOldParentNode requested on invalid node.");
                    return a.parentNode
                };
                a.prototype.getOldPreviousSibling = function(a) {
                    var d = a.parentNode,
                        g = this.treeChanges.get(a);
                    g && g.oldParentNode && (d = g.oldParentNode);
                    d = this.childListChangeMap.get(d);
                    if (!d) throw Error("getOldPreviousSibling requested on invalid node.");
                    return d.oldPrevious.get(a)
                };
                a.prototype.getOldAttribute = function(a, d) {
                    var g = this.treeChanges.get(a);
                    if (!g || !g.attributes) throw Error("getOldAttribute requested on invalid node.");
                    g = g.getAttributeOldValue(d);
                    if (void 0 === g) throw Error("getOldAttribute requested for unchanged attribute name.");
                    return g
                };
                a.prototype.attributeChangedNodes = function(a) {
                    if (!this.treeChanges.anyAttributesChanged) return {};
                    var d, g;
                    if (a) {
                        d = {};
                        g = {};
                        for (var k = 0; k < a.length; k++) {
                            var b = a[k];
                            d[b] = !0;
                            g[b.toLowerCase()] = b
                        }
                    }
                    a = {};
                    for (var f = this.treeChanges.keys(), k = 0; k < f.length; k++) {
                        var b = f[k],
                            c = this.treeChanges.get(b);
                        if (c.attributes && !(2 !== this.treeChanges.reachabilityChange(b) || 2 !== this.matchabilityChange(b)))
                            for (var q = b, h = c.getAttributeNamesMutated(), n = 0; n < h.length; n++)
                                if (b = h[n], (!d || d[b] || c.isCaseInsensitive && g[b]) && c.getAttributeOldValue(b) !== q.getAttribute(b)) g && c.isCaseInsensitive && (b = g[b]), a[b] = a[b] || [], a[b].push(q)
                    }
                    return a
                };
                a.prototype.getOldCharacterData = function(a) {
                    a = this.treeChanges.get(a);
                    if (!a || !a.characterData) throw Error("getOldCharacterData requested on invalid node.");
                    return a.characterDataOldValue
                };
                a.prototype.getCharacterDataChanged = function() {
                    if (!this.treeChanges.anyCharacterDataChanged) return [];
                    for (var a = this.treeChanges.keys(), d = [], g = 0; g < a.length; g++) {
                        var k = a[g];
                        if (2 === this.treeChanges.reachabilityChange(k)) {
                            var b = this.treeChanges.get(k);
                            b.characterData && k.textContent != b.characterDataOldValue && d.push(k)
                        }
                    }
                    return d
                };
                a.prototype.computeMatchabilityChange = function(a, d) {
                    this.matchCache || (this.matchCache = []);
                    this.matchCache[a.uid] || (this.matchCache[a.uid] = new c);
                    var g = this.matchCache[a.uid],
                        k = g.get(d);
                    void 0 === k && (k = a.matchabilityChange(d, this.treeChanges.get(d)), g.set(d, k));
                    return k
                };
                a.prototype.matchabilityChange = function(a) {
                    var d = this;
                    if (this.characterDataOnly) switch (a.nodeType) {
                        case Node.COMMENT_NODE:
                        case Node.TEXT_NODE:
                            return 2;
                        default:
                            return 0
                    }
                    if (!this.selectors) return 2;
                    if (a.nodeType !== Node.ELEMENT_NODE) return 0;
                    for (var g = this.selectors.map(function(g) {
                            return d.computeMatchabilityChange(g, a)
                        }), k = 0, b = 0; 2 !== k && b < g.length;) {
                        switch (g[b]) {
                            case 2:
                                k = 2;
                                break;
                            case 1:
                                k = 5 === k ? 2 : 1;
                                break;
                            case 5:
                                k = 1 === k ? 2 : 5
                        }
                        b++
                    }
                    return k
                };
                a.prototype.getChildlistChange = function(a) {
                    var d = this.childListChangeMap.get(a);
                    d || (d = new f, this.childListChangeMap.set(a, d));
                    return d
                };
                a.prototype.processChildlistChanges = function() {
                    if (!this.childListChangeMap) {
                        this.childListChangeMap = new c;
                        for (var a = 0; a < this.mutations.length; a++) {
                            var d = this.mutations[a];
                            if ("childList" == d.type && (2 === this.treeChanges.reachabilityChange(d.target) || this.calcOldPreviousSibling)) {
                                for (var g = this.getChildlistChange(d.target), k = d.previousSibling, b = function(a, d) {
                                        a && !g.oldPrevious.has(a) && !g.added.has(a) && !g.maybeMoved.has(a) && (!d || !g.added.has(d) && !g.maybeMoved.has(d)) && g.oldPrevious.set(a, d)
                                    }, f = 0; f < d.removedNodes.length; f++) {
                                    var q = d.removedNodes[f];
                                    b(q, k);
                                    g.added.has(q) ? g.added.deleteNode(q) : (g.removed.set(q, !0), g.maybeMoved.deleteNode(q));
                                    k = q
                                }
                                b(d.nextSibling, k);
                                for (f = 0; f <
                                    d.addedNodes.length; f++) q = d.addedNodes[f], g.removed.has(q) ? (g.removed.deleteNode(q), g.maybeMoved.set(q, !0)) : g.added.set(q, !0)
                            }
                        }
                    }
                };
                a.prototype.wasReordered = function(a) {
                    function d(a) {
                        if (!a || !f.maybeMoved.has(a)) return !1;
                        var k = f.moved.get(a);
                        if (void 0 !== k) return k;
                        if (q.has(a)) k = !0;
                        else {
                            q.set(a, !0);
                            if (n.has(a)) k = n.get(a);
                            else {
                                for (k = a.previousSibling; k && (f.added.has(k) || d(k));) k = k.previousSibling;
                                n.set(a, k)
                            }
                            k = k !== g(a)
                        }
                        q.has(a) ? (q.deleteNode(a), f.moved.set(a, k)) : k = f.moved.get(a);
                        return k
                    }

                    function g(a) {
                        var k =
                            h.get(a);
                        if (void 0 !== k) return k;
                        for (k = f.oldPrevious.get(a); k && (f.removed.has(k) || d(k));) k = g(k);
                        void 0 === k && (k = a.previousSibling);
                        h.set(a, k);
                        return k
                    }
                    if (!this.treeChanges.anyParentsChanged) return !1;
                    this.processChildlistChanges();
                    var k = a.parentNode,
                        b = this.treeChanges.get(a);
                    b && b.oldParentNode && (k = b.oldParentNode);
                    var f = this.childListChangeMap.get(k);
                    if (!f) return !1;
                    if (f.moved) return f.moved.get(a);
                    f.moved = new c;
                    var q = new c,
                        h = new c,
                        n = new c;
                    f.maybeMoved.keys().forEach(d);
                    return f.moved.get(a)
                };
                return a
            }(),
            d = function() {
                function a(d, g) {
                    var k = this;
                    this.projection = d;
                    this.added = [];
                    this.removed = [];
                    this.reparented = g.all || g.element || g.characterData ? [] : void 0;
                    this.reordered = g.all ? [] : void 0;
                    d.getChanged(this, g.elementFilter, g.characterData);
                    if (g.all || g.attribute || g.attributeList) {
                        var b = d.attributeChangedNodes(g.attribute ? [g.attribute] : g.attributeList);
                        g.attribute ? this.valueChanged = b[g.attribute] || [] : (this.attributeChanged = b, g.attributeList && g.attributeList.forEach(function(a) {
                            k.attributeChanged.hasOwnProperty(a) ||
                                (k.attributeChanged[a] = [])
                        }))
                    }
                    if (g.all || g.characterData) b = d.getCharacterDataChanged(), g.characterData ? this.valueChanged = b : this.characterDataChanged = b;
                    this.reordered && (this.getOldPreviousSibling = d.getOldPreviousSibling.bind(d))
                }
                a.prototype.getOldParentNode = function(a) {
                    return this.projection.getOldParentNode(a)
                };
                a.prototype.getOldAttribute = function(a, d) {
                    return this.projection.getOldAttribute(a, d)
                };
                a.prototype.getOldCharacterData = function(a) {
                    return this.projection.getOldCharacterData(a)
                };
                a.prototype.getOldPreviousSibling =
                    function(a) {
                        return this.projection.getOldPreviousSibling(a)
                    };
                return a
            }(),
            q = /[a-zA-Z_]+/,
            p = /[a-zA-Z0-9_\-]+/,
            k = function() {
                function a() {}
                a.prototype.matches = function(a) {
                    if (null === a) return !1;
                    if (void 0 === this.attrValue) return !0;
                    if (!this.contains) return this.attrValue == a;
                    a = a.split(" ");
                    for (var d = 0; d < a.length; d++)
                        if (this.attrValue === a[d]) return !0;
                    return !1
                };
                a.prototype.toString = function() {
                    return "class" === this.attrName && this.contains ? "." + this.attrValue : "id" === this.attrName && !this.contains ? "#" + this.attrValue :
                        this.contains ? "[" + this.attrName + "~=" + ('"' + this.attrValue.replace(/"/, '\\"') + '"') + "]" : "attrValue" in this ? "[" + this.attrName + "=" + ('"' + this.attrValue.replace(/"/, '\\"') + '"') + "]" : "[" + this.attrName + "]"
                };
                return a
            }(),
            n = function() {
                function a() {
                    this.uid = a.nextUid++;
                    this.qualifiers = []
                }
                Object.defineProperty(a.prototype, "caseInsensitiveTagName", {
                    get: function() {
                        return this.tagName.toUpperCase()
                    },
                    enumerable: !0,
                    configurable: !0
                });
                Object.defineProperty(a.prototype, "selectorString", {
                    get: function() {
                        return this.tagName +
                            this.qualifiers.join("")
                    },
                    enumerable: !0,
                    configurable: !0
                });
                a.prototype.isMatching = function(d) {
                    return d[a.matchesSelector](this.selectorString)
                };
                a.prototype.wasMatching = function(a, d, g) {
                    if (!d || !d.attributes) return g;
                    var k = d.isCaseInsensitive ? this.caseInsensitiveTagName : this.tagName;
                    if ("*" !== k && k !== a.tagName) return !1;
                    for (var k = [], b = !1, f = 0; f < this.qualifiers.length; f++) {
                        var c = this.qualifiers[f],
                            q = d.getAttributeOldValue(c.attrName);
                        k.push(q);
                        b = b || void 0 !== q
                    }
                    if (!b) return g;
                    for (f = 0; f < this.qualifiers.length; f++)
                        if (c =
                            this.qualifiers[f], q = k[f], void 0 === q && (q = a.getAttribute(c.attrName)), !c.matches(q)) return !1;
                    return !0
                };
                a.prototype.matchabilityChange = function(a, d) {
                    var g = this.isMatching(a);
                    return g ? this.wasMatching(a, d, g) ? 2 : 1 : this.wasMatching(a, d, g) ? 5 : 0
                };
                a.parseSelectors = function(d) {
                    function g() {
                        c && (h && (c.qualifiers.push(h), h = void 0), f.push(c));
                        c = new a
                    }

                    function b() {
                        h && c.qualifiers.push(h);
                        h = new k
                    }
                    for (var f = [], c, h, n = /\s/, l, r = 1, s = 0; s < d.length;) {
                        var m = d[s++];
                        switch (r) {
                            case 1:
                                if (m.match(q)) {
                                    g();
                                    c.tagName = m;
                                    r = 2;
                                    break
                                }
                                if ("*" ==
                                    m) {
                                    g();
                                    c.tagName = "*";
                                    r = 3;
                                    break
                                }
                                if ("." == m) {
                                    g();
                                    b();
                                    c.tagName = "*";
                                    h.attrName = "class";
                                    h.contains = !0;
                                    r = 4;
                                    break
                                }
                                if ("#" == m) {
                                    g();
                                    b();
                                    c.tagName = "*";
                                    h.attrName = "id";
                                    r = 4;
                                    break
                                }
                                if ("[" == m) {
                                    g();
                                    b();
                                    c.tagName = "*";
                                    h.attrName = "";
                                    r = 6;
                                    break
                                }
                                if (m.match(n)) break;
                                throw Error("Invalid or unsupported selector syntax.");
                            case 2:
                                if (m.match(p)) {
                                    c.tagName += m;
                                    break
                                }
                                if ("." == m) {
                                    b();
                                    h.attrName = "class";
                                    h.contains = !0;
                                    r = 4;
                                    break
                                }
                                if ("#" == m) {
                                    b();
                                    h.attrName = "id";
                                    r = 4;
                                    break
                                }
                                if ("[" == m) {
                                    b();
                                    h.attrName = "";
                                    r = 6;
                                    break
                                }
                                if (m.match(n)) {
                                    r = 14;
                                    break
                                }
                                if ("," ==
                                    m) {
                                    r = 1;
                                    break
                                }
                                throw Error("Invalid or unsupported selector syntax.");
                            case 3:
                                if ("." == m) {
                                    b();
                                    h.attrName = "class";
                                    h.contains = !0;
                                    r = 4;
                                    break
                                }
                                if ("#" == m) {
                                    b();
                                    h.attrName = "id";
                                    r = 4;
                                    break
                                }
                                if ("[" == m) {
                                    b();
                                    h.attrName = "";
                                    r = 6;
                                    break
                                }
                                if (m.match(n)) {
                                    r = 14;
                                    break
                                }
                                if ("," == m) {
                                    r = 1;
                                    break
                                }
                                throw Error("Invalid or unsupported selector syntax.");
                            case 4:
                                if (m.match(q)) {
                                    h.attrValue = m;
                                    r = 5;
                                    break
                                }
                                throw Error("Invalid or unsupported selector syntax.");
                            case 5:
                                if (m.match(p)) {
                                    h.attrValue += m;
                                    break
                                }
                                if ("." == m) {
                                    b();
                                    h.attrName = "class";
                                    h.contains = !0;
                                    r = 4;
                                    break
                                }
                                if ("#" == m) {
                                    b();
                                    h.attrName = "id";
                                    r = 4;
                                    break
                                }
                                if ("[" == m) {
                                    b();
                                    r = 6;
                                    break
                                }
                                if (m.match(n)) {
                                    r = 14;
                                    break
                                }
                                if ("," == m) {
                                    r = 1;
                                    break
                                }
                                throw Error("Invalid or unsupported selector syntax.");
                            case 6:
                                if (m.match(q)) {
                                    h.attrName = m;
                                    r = 7;
                                    break
                                }
                                if (m.match(n)) break;
                                throw Error("Invalid or unsupported selector syntax.");
                            case 7:
                                if (m.match(p)) {
                                    h.attrName += m;
                                    break
                                }
                                if (m.match(n)) {
                                    r = 8;
                                    break
                                }
                                if ("~" == m) {
                                    h.contains = !0;
                                    r = 9;
                                    break
                                }
                                if ("=" == m) {
                                    h.attrValue = "";
                                    r = 11;
                                    break
                                }
                                if ("]" == m) {
                                    r = 3;
                                    break
                                }
                                throw Error("Invalid or unsupported selector syntax.");
                            case 8:
                                if ("~" == m) {
                                    h.contains = !0;
                                    r = 9;
                                    break
                                }
                                if ("=" == m) {
                                    h.attrValue = "";
                                    r = 11;
                                    break
                                }
                                if ("]" == m) {
                                    r = 3;
                                    break
                                }
                                if (m.match(n)) break;
                                throw Error("Invalid or unsupported selector syntax.");
                            case 9:
                                if ("=" == m) {
                                    h.attrValue = "";
                                    r = 11;
                                    break
                                }
                                throw Error("Invalid or unsupported selector syntax.");
                            case 10:
                                if ("]" == m) {
                                    r = 3;
                                    break
                                }
                                if (m.match(n)) break;
                                throw Error("Invalid or unsupported selector syntax.");
                            case 11:
                                if (m.match(n)) break;
                                if ('"' == m || "'" == m) {
                                    l = m;
                                    r = 13;
                                    break
                                }
                                h.attrValue += m;
                                r = 12;
                                break;
                            case 12:
                                if (m.match(n)) {
                                    r = 10;
                                    break
                                }
                                if ("]" ==
                                    m) {
                                    r = 3;
                                    break
                                }
                                if ("'" == m || '"' == m) throw Error("Invalid or unsupported selector syntax.");
                                h.attrValue += m;
                                break;
                            case 13:
                                if (m == l) {
                                    r = 10;
                                    break
                                }
                                h.attrValue += m;
                                break;
                            case 14:
                                if (m.match(n)) break;
                                if ("," == m) {
                                    r = 1;
                                    break
                                }
                                throw Error("Invalid or unsupported selector syntax.");
                        }
                    }
                    switch (r) {
                        case 1:
                        case 2:
                        case 3:
                        case 5:
                        case 14:
                            g();
                            break;
                        default:
                            throw Error("Invalid or unsupported selector syntax.");
                    }
                    if (!f.length) throw Error("Invalid or unsupported selector syntax.");
                    return f
                };
                a.nextUid = 1;
                a.matchesSelector = function() {
                    var a =
                        document.createElement("div");
                    return "function" === typeof a.webkitMatchesSelector ? "webkitMatchesSelector" : "function" === typeof a.mozMatchesSelector ? "mozMatchesSelector" : "function" === typeof a.msMatchesSelector ? "msMatchesSelector" : "matchesSelector"
                }();
                return a
            }(),
            r = /^([a-zA-Z:_]+[a-zA-Z0-9_\-:\.]*)$/,
            s = function(a) {
                if ("string" != typeof a) throw Error("Invalid request option. attribute must be a non-zero length string.");
                a = a.trim();
                if (!a) throw Error("Invalid request option. attribute must be a non-zero length string.");
                if (!a.match(r)) throw Error("Invalid request option. invalid attribute name: " + a);
                return a
            },
            w = function(a) {
                var d = {};
                a.forEach(function(a) {
                    a.qualifiers.forEach(function(a) {
                        d[a.attrName] = !0
                    })
                });
                return Object.keys(d)
            };
        hj.MutationSummary = function() {
            function k(d) {
                var g = this;
                this.connected = !1;
                this.options = k.validateOptions(d);
                this.observerOptions = k.createObserverOptions(this.options.queries);
                this.root = this.options.rootNode;
                this.callback = this.options.callback;
                this.elementFilter = Array.prototype.concat.apply([],
                    this.options.queries.map(function(a) {
                        return a.elementFilter ? a.elementFilter : []
                    }));
                this.elementFilter.length || (this.elementFilter = void 0);
                this.calcReordered = this.options.queries.some(function(a) {
                    return a.all
                });
                this.queryValidators = [];
                k.createQueryValidator && (this.queryValidators = this.options.queries.map(function(a) {
                    return k.createQueryValidator(g.root, a)
                }));
                this.observer = new a(function(a) {
                    g.observerCallback(a)
                });
                this.reconnect()
            }
            k.createObserverOptions = function(a) {
                function d(a) {
                    if (!g.attributes || k) g.attributes = !0, g.attributeOldValue = !0, a ? (k = k || {}, a.forEach(function(a) {
                        k[a] = !0;
                        k[a.toLowerCase()] = !0
                    })) : k = void 0
                }
                var g = {
                        childList: !0,
                        subtree: !0
                    },
                    k;
                a.forEach(function(a) {
                    a.characterData ? (g.characterData = !0, g.characterDataOldValue = !0) : a.all ? (d(), g.characterData = !0, g.characterDataOldValue = !0) : a.attribute ? d([a.attribute.trim()]) : (a = w(a.elementFilter).concat(a.attributeList || []), a.length && d(a))
                });
                k && (g.attributeFilter = Object.keys(k));
                return g
            };
            k.validateOptions = function(a) {
                for (var d in a)
                    if (!(d in k.optionKeys)) throw Error("Invalid option: " +
                        d);
                if ("function" !== typeof a.callback) throw Error("Invalid options: callback is required and must be a function");
                if (!a.queries || !a.queries.length) throw Error("Invalid options: queries must contain at least one query request object.");
                d = {
                    callback: a.callback,
                    rootNode: a.rootNode || document,
                    observeOwnChanges: !!a.observeOwnChanges,
                    oldPreviousSibling: !!a.oldPreviousSibling,
                    queries: []
                };
                for (var g = 0; g < a.queries.length; g++) {
                    var b = a.queries[g];
                    if (b.all) {
                        if (1 < Object.keys(b).length) throw Error("Invalid request option. all has no options.");
                        d.queries.push({
                            all: !0
                        })
                    } else if ("attribute" in b) {
                        var f = {
                            attribute: s(b.attribute)
                        };
                        f.elementFilter = n.parseSelectors("*[" + f.attribute + "]");
                        if (1 < Object.keys(b).length) throw Error("Invalid request option. attribute has no options.");
                        d.queries.push(f)
                    } else if ("element" in b) {
                        var c = Object.keys(b).length,
                            f = {
                                element: b.element,
                                elementFilter: n.parseSelectors(b.element)
                            };
                        if (b.hasOwnProperty("elementAttributes")) {
                            var h = f,
                                b = b.elementAttributes;
                            if (!b.trim().length) throw Error("Invalid request option: elementAttributes must contain at least one attribute.");
                            for (var q = {}, p = {}, b = b.split(/\s+/), l = 0; l < b.length; l++) {
                                var r = b[l];
                                if (r) {
                                    var r = s(r),
                                        m = r.toLowerCase();
                                    if (q[m]) throw Error("Invalid request option: observing multiple case variations of the same attribute is not supported.");
                                    p[r] = !0;
                                    q[m] = !0
                                }
                            }
                            b = Object.keys(p);
                            h.attributeList = b;
                            c--
                        }
                        if (1 < c) throw Error("Invalid request option. element only allows elementAttributes option.");
                        d.queries.push(f)
                    } else if (b.characterData) {
                        if (1 < Object.keys(b).length) throw Error("Invalid request option. characterData has no options.");
                        d.queries.push({
                            characterData: !0
                        })
                    } else throw Error("Invalid request option. Unknown query request.");
                }
                return d
            };
            k.prototype.createSummaries = function(a) {
                if (!a || !a.length) return [];
                a = new g(this.root, a, this.elementFilter, this.calcReordered, this.options.oldPreviousSibling);
                for (var k = [], b = 0; b < this.options.queries.length; b++) k.push(new d(a, this.options.queries[b]));
                return k
            };
            k.prototype.checkpointQueryValidators = function() {
                this.queryValidators.forEach(function(a) {
                    a && a.recordPreviousState()
                })
            };
            k.prototype.runQueryValidators =
                function(a) {
                    this.queryValidators.forEach(function(d, g) {
                        d && d.validate(a[g])
                    })
                };
            k.prototype.changesToReport = function(a) {
                return a.some(function(a) {
                    return "added removed reordered reparented valueChanged characterDataChanged".split(" ").some(function(d) {
                        return a[d] && a[d].length
                    }) || a.attributeChanged && Object.keys(a.attributeChanged).some(function(d) {
                        return !!a.attributeChanged[d].length
                    }) ? !0 : !1
                })
            };
            k.prototype.observerCallback = function(a) {
                this.options.observeOwnChanges || this.observer.disconnect();
                a = this.createSummaries(a);
                this.runQueryValidators(a);
                this.options.observeOwnChanges && this.checkpointQueryValidators();
                this.changesToReport(a) && this.callback(a);
                !this.options.observeOwnChanges && this.connected && (this.checkpointQueryValidators(), this.observer.observe(this.root, this.observerOptions))
            };
            k.prototype.reconnect = function() {
                if (this.connected) throw Error("Already connected");
                this.observer.observe(this.root, this.observerOptions);
                this.connected = !0;
                this.checkpointQueryValidators()
            };
            k.prototype.takeSummaries = function() {
                if (!this.connected) throw Error("Not connected");
                var a = this.createSummaries(this.observer.takeRecords());
                return this.changesToReport(a) ? a : void 0
            };
            k.prototype.disconnect = function() {
                var a = this.takeSummaries();
                this.observer.disconnect();
                this.connected = !1;
                return a
            };
            k.NodeMap = c;
            k.parseElementFilter = n.parseSelectors;
            k.optionKeys = {
                callback: !0,
                queries: !0,
                rootNode: !0,
                oldPreviousSibling: !0,
                observeOwnChanges: !0
            };
            return k
        }()
    }
}, "mutation-summary")();
hj.tryCatch(function() {
    if ("undefined" !== typeof window.MutationObserver || "undefined" !== typeof window.WebKitMutationObserver || "undefined" !== typeof window.MozMutationObserver) hj.treeMirrorClient = hj.tryCatch(function() {
        function m(a, c, h) {
            var l = this;
            this.target = a;
            this.mirror = c;
            this.nextId = 1;
            this.knownNodes = new hj.MutationSummary.NodeMap;
            c = this.serializeNode(a).id;
            for (var f = [], b = a.firstChild; b; b = b.nextSibling) f.push(this.serializeNode(b, !0));
            this.mirror.initialize(c, f);
            c = [{
                all: !0
            }];
            h && (c = c.concat(h));
            this.mutationSummary =
                new hj.MutationSummary({
                    rootNode: a,
                    callback: hj.tryCatch(function(a) {
                        l.applyChanged(a)
                    }, "TreeMirror"),
                    queries: c
                })
        }
        m.prototype.disconnect = function() {
            this.mutationSummary && (this.mutationSummary.disconnect(), this.mutationSummary = void 0)
        };
        m.prototype.rememberNode = function(a) {
            var c = this.nextId++;
            this.knownNodes.set(a, c);
            return c
        };
        m.prototype.forgetNode = function(a) {
            this.knownNodes.deleteNode(a)
        };
        m.prototype.serializeNode = function(a, c, h) {
            if (null === a) return null;
            var l = this.knownNodes.get(a),
                f = a.parentNode ?
                a.parentNode : null;
            if (void 0 !== l) return {
                id: l
            };
            for (l = {
                    nodeType: a.nodeType,
                    id: this.rememberNode(a)
                }; f && !h;) f.attributes && f.attributes["data-hj-masked"] && (h = !0), f = f.parentNode ? f.parentNode : null;
            switch (l.nodeType) {
                case Node.DOCUMENT_TYPE_NODE:
                    l.name = a.name;
                    l.publicId = a.publicId;
                    l.systemId = a.systemId;
                    break;
                case Node.COMMENT_NODE:
                case Node.TEXT_NODE:
                    l.textContent = "undefined" !== typeof a.parentNode && null != a.parentNode && ("TEXTAREA" === a.parentNode.tagName && !hj.settings.recording_capture_keystrokes || "undefined" !==
                        typeof a.parentNode.attributes && null != a.parentNode.attributes && "undefined" !== typeof a.parentNode.attributes["data-hj-masked"] || h) ? hj.hq.trim(a.textContent).replace(/./g, "*") : a.textContent;
                    break;
                case Node.ELEMENT_NODE:
                    l.tagName = a.tagName;
                    l.attributes = {};
                    for (var b, f = 0; f < a.attributes.length; f++) b = a.attributes[f], e = "INPUT" === a.tagName && "value" === b.name && (!hj.settings.recording_capture_keystrokes || "undefined" !== typeof a.attributes && "undefined" !== typeof a.attributes["data-hj-masked"] || h) ? b.value.replace(/./g,
                        "*") : b.value, l.attributes[b.name] = e;
                    if (c && a.childNodes.length) {
                        l.childNodes = [];
                        for (f = a.firstChild; f; f = f.nextSibling) l.childNodes.push(this.serializeNode(f, !0, h))
                    }
            }
            return l
        };
        m.prototype.serializeAddedAndMoved = function(a, c, h) {
            var l = this;
            a = a.concat(c).concat(h);
            var f = new hj.MutationSummary.NodeMap;
            a.forEach(function(a) {
                var d = a.parentNode,
                    b = f.get(d);
                b || (b = new hj.MutationSummary.NodeMap, f.set(d, b));
                b.set(a, !0)
            });
            var b = [];
            f.keys().forEach(function(a) {
                a = f.get(a);
                for (var d = a.keys(); d.length;) {
                    for (d = d[0]; d.previousSibling &&
                        a.has(d.previousSibling);) d = d.previousSibling;
                    for (; d && a.has(d);) {
                        var c = l.serializeNode(d);
                        c.previousSibling = l.serializeNode(d.previousSibling);
                        c.parentNode = l.serializeNode(d.parentNode);
                        b.push(c);
                        a.deleteNode(d);
                        d = d.nextSibling
                    }
                    d = a.keys()
                }
            });
            return b
        };
        m.prototype.serializeAttributeChanges = function(a) {
            var c = this,
                h = new hj.MutationSummary.NodeMap;
            Object.keys(a).forEach(function(l) {
                a[l].forEach(function(a) {
                    var b = h.get(a);
                    b || (b = c.serializeNode(a), b.attributes = {}, h.set(a, b));
                    a = a.getAttribute(l);
                    a = "string" ===
                        typeof a && a.length ? a.replace(/-?\d+\.\d+%/g, function(a) {
                            return Math.round(parseFloat(a)) + "%"
                        }).replace(/-?\d+\.\d+/g, function(a) {
                            return parseFloat(a).toFixed(1)
                        }) : a;
                    b.attributes[l] = a
                })
            });
            return h.keys().map(function(a) {
                return h.get(a)
            })
        };
        m.prototype.applyChanged = function(a) {
            var c = this;
            a = a[0];
            var h = a.removed.map(function(a) {
                    return c.serializeNode(a)
                }),
                l = this.serializeAddedAndMoved(a.added, a.reparented, a.reordered),
                f = this.serializeAttributeChanges(a.attributeChanged),
                b = a.characterDataChanged.map(function(a) {
                    var d =
                        c.serializeNode(a);
                    d.textContent = a.textContent;
                    return d
                });
            this.mirror.applyChanged(h, l, f, b);
            a.removed.forEach(function(a) {
                c.forgetNode(a)
            })
        };
        return m
    }, "tree-mirror")()
}, "tree-mirror")();
hj.tryCatch(function() {
    var m = null;
    hj.fingerprinter = function(a) {
        this.options = this.extend(a, {
            sortPluginsFor: [/palemoon/i]
        });
        this.nativeForEach = Array.prototype.forEach;
        this.nativeMap = Array.prototype.map
    };
    hj.fingerprinter.prototype = {
        extend: function(a, c) {
            if (null == a) return c;
            for (var h in a) null != a[h] && c[h] !== a[h] && (c[h] = a[h]);
            return c
        },
        log: function(a) {
            window.console && console.log(a)
        },
        get: function() {
            var a = [];
            null === m && (a = this.userAgentKey(a), a = this.languageKey(a), a = this.colorDepthKey(a), a = this.timezoneOffsetKey(a),
                a = this.sessionStorageKey(a), a = this.localStorageKey(a), a = this.indexedDbKey(a), a = this.addBehaviorKey(a), a = this.openDatabaseKey(a), a = this.cpuClassKey(a), a = this.platformKey(a), a = this.doNotTrackKey(a), a = this.pluginsKey(a), a = this.adBlockKey(a), a = this.hasLiedLanguagesKey(a), a = this.hasLiedResolutionKey(a), a = this.hasLiedOsKey(a), a = this.hasLiedBrowserKey(a), m = this.x64hash128(a.join("~~~"), 31));
            return m
        },
        getAsNumber: function() {
            var a, c;
            a = parseInt(this.get().slice(-10), 16);
            c = Math.pow(2, 40);
            return a / c
        },
        compareRatio: function(a,
            c) {
            return this.getAsNumber() * (c ? 100 : 1) <= a
        },
        userAgentKey: function(a) {
            a.push(navigator.userAgent);
            return a
        },
        languageKey: function(a) {
            a.push(navigator.language);
            return a
        },
        colorDepthKey: function(a) {
            a.push(screen.colorDepth);
            return a
        },
        screenResolutionKey: function(a) {
            return this.getScreenResolution(a)
        },
        getScreenResolution: function(a) {
            var c, h;
            c = this.options.detectScreenOrientation ? screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height] : [screen.height, screen.width];
            "undefined" !==
            typeof c && a.push(c);
            screen.availWidth && screen.availHeight && (h = this.options.detectScreenOrientation ? screen.availHeight > screen.availWidth ? [screen.availHeight, screen.availWidth] : [screen.availWidth, screen.availHeight] : [screen.availHeight, screen.availWidth]);
            "undefined" !== typeof h && a.push(h);
            return a
        },
        timezoneOffsetKey: function(a) {
            a.push((new Date(1979, 3, 13)).getTimezoneOffset());
            return a
        },
        sessionStorageKey: function(a) {
            this.hasSessionStorage() && a.push("sessionStorageKey");
            return a
        },
        localStorageKey: function(a) {
            this.hasLocalStorage() &&
                a.push("localStorageKey");
            return a
        },
        indexedDbKey: function(a) {
            this.hasIndexedDB() && a.push("indexedDbKey");
            return a
        },
        addBehaviorKey: function(a) {
            document.body && document.body.addBehavior && a.push("addBehaviorKey");
            return a
        },
        openDatabaseKey: function(a) {
            window.openDatabase && a.push("openDatabase");
            return a
        },
        cpuClassKey: function(a) {
            a.push(this.getNavigatorCpuClass());
            return a
        },
        platformKey: function(a) {
            a.push(this.getNavigatorPlatform());
            return a
        },
        doNotTrackKey: function(a) {
            a.push(this.getDoNotTrack());
            return a
        },
        adBlockKey: function(a) {
            a.push(this.getAdBlock());
            return a
        },
        hasLiedLanguagesKey: function(a) {
            a.push(this.getHasLiedLanguages());
            return a
        },
        hasLiedResolutionKey: function(a) {
            a.push(this.getHasLiedResolution());
            return a
        },
        hasLiedOsKey: function(a) {
            a.push(this.getHasLiedOs());
            return a
        },
        hasLiedBrowserKey: function(a) {
            a.push(this.getHasLiedBrowser());
            return a
        },
        pluginsKey: function(a) {
            this.isIE() || a.push(this.getRegularPluginsString());
            return a
        },
        getRegularPluginsString: function() {
            var a = [],
                c = ["Shockwave Flash"];
            if ("undefined" === typeof navigator.plugins) return "no-plugins";
            for (var h = 0, l = navigator.plugins.length; h < l; h++) 0 > c.indexOf(navigator.plugins[h].name) && a.push(navigator.plugins[h]);
            this.pluginsShouldBeSorted() && (a = a.sort(function(a, b) {
                return a.name > b.name ? 1 : a.name < b.name ? -1 : 0
            }));
            return this.map(a, function(a) {
                var b = this.map(a, function(a) {
                    return [a.type, a.suffixes].join("~")
                }).join(",");
                return [a.name, a.description, b].join("::")
            }, this).join(";")
        },
        pluginsShouldBeSorted: function() {
            for (var a = !1, c = 0, h = this.options.sortPluginsFor.length; c <
                h; c++)
                if (navigator.userAgent.match(this.options.sortPluginsFor[c])) {
                    a = !0;
                    break
                }
            return a
        },
        hasSessionStorage: function() {
            try {
                return !!window.sessionStorage
            } catch (a) {
                return !0
            }
        },
        hasLocalStorage: function() {
            try {
                return !!window.localStorage
            } catch (a) {
                return !0
            }
        },
        hasIndexedDB: function() {
            return !!window.indexedDB
        },
        getNavigatorCpuClass: function() {
            return navigator.cpuClass ? "navigatorCpuClass: " + navigator.cpuClass : "navigatorCpuClass: unknown"
        },
        getNavigatorPlatform: function() {
            return navigator.platform ? "navigatorPlatform: " +
                navigator.platform : "navigatorPlatform: unknown"
        },
        getDoNotTrack: function() {
            return navigator.doNotTrack ? "doNotTrack: " + navigator.doNotTrack : "doNotTrack: unknown"
        },
        getAdBlock: function() {
            var a = document.createElement("div");
            a.setAttribute("id", "ads");
            try {
                return document.body.appendChild(a), document.getElementById("ads") ? !1 : !0
            } catch (c) {
                return !1
            }
        },
        getHasLiedLanguages: function() {
            if ("undefined" !== typeof navigator.languages) try {
                if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
            } catch (a) {
                return !0
            }
            return !1
        },
        getHasLiedResolution: function() {
            return screen.width < screen.availWidth || screen.height < screen.availHeight ? !0 : !1
        },
        getHasLiedOs: function() {
            var a = navigator.userAgent,
                c = navigator.oscpu,
                h = navigator.platform,
                a = 0 <= a.toLowerCase().indexOf("windows phone") ? "Windows Phone" : 0 <= a.toLowerCase().indexOf("win") ? "Windows" : 0 <= a.toLowerCase().indexOf("android") ? "Android" : 0 <= a.toLowerCase().indexOf("linux") ? "Linux" : 0 <= a.toLowerCase().indexOf("iPhone") || 0 <= a.toLowerCase().indexOf("iPad") ? "iOS" : 0 <= a.toLowerCase().indexOf("mac") ?
                "Mac" : "Other";
            return ("ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints) && "Windows Phone" !== a && "Android" !== a && "iOS" !== a && "Other" !== a || "undefined" !== typeof c && (0 <= c.toLowerCase().indexOf("win") && "Windows" !== a && "Windows Phone" !== a || 0 <= c.toLowerCase().indexOf("linux") && "Linux" !== a && "Android" !== a || 0 <= c.toLowerCase().indexOf("mac") && "Mac" !== a && "iOS" !== a || 0 === c.toLowerCase().indexOf("win") && 0 === c.toLowerCase().indexOf("linux") && 0 <= c.toLowerCase().indexOf("mac") && "other" !==
                    a) || 0 <= h.toLowerCase().indexOf("win") && "Windows" !== a && "Windows Phone" !== a || (0 <= h.toLowerCase().indexOf("linux") || 0 <= h.toLowerCase().indexOf("android") || 0 <= h.toLowerCase().indexOf("pike")) && "Linux" !== a && "Android" !== a || (0 <= h.toLowerCase().indexOf("mac") || 0 <= h.toLowerCase().indexOf("ipad") || 0 <= h.toLowerCase().indexOf("ipod") || 0 <= h.toLowerCase().indexOf("iphone")) && "Mac" !== a && "iOS" !== a || 0 === h.toLowerCase().indexOf("win") && 0 === h.toLowerCase().indexOf("linux") && 0 <= h.toLowerCase().indexOf("mac") && "other" !==
                a ? !0 : "undefined" === typeof navigator.plugins && "Windows" !== a && "Windows Phone" !== a ? !0 : !1
        },
        getHasLiedBrowser: function() {
            var a = navigator.userAgent,
                c = navigator.productSub,
                a = 0 <= a.toLowerCase().indexOf("firefox") ? "Firefox" : 0 <= a.toLowerCase().indexOf("opera") || 0 <= a.toLowerCase().indexOf("opr") ? "Opera" : 0 <= a.toLowerCase().indexOf("chrome") ? "Chrome" : 0 <= a.toLowerCase().indexOf("safari") ? "Safari" : 0 <= a.toLowerCase().indexOf("trident") ? "Internet Explorer" : "Other";
            if (("Chrome" === a || "Safari" === a || "Opera" === a) && "20030107" !==
                c) return !0;
            c = eval.toString().length;
            if (37 === c && "Safari" !== a && "Firefox" !== a && "Other" !== a || 39 === c && "Internet Explorer" !== a && "Other" !== a || 33 === c && "Chrome" !== a && "Opera" !== a && "Other" !== a) return !0;
            var h;
            try {
                throw "a";
            } catch (l) {
                try {
                    l.toSource(), h = !0
                } catch (f) {
                    h = !1
                }
            }
            return h && "Firefox" !== a && "Other" !== a ? !0 : !1
        },
        isIE: function() {
            return "Microsoft Internet Explorer" === navigator.appName || "Netscape" === navigator.appName && /Trident/.test(navigator.userAgent) ? !0 : !1
        },
        each: function(a, c, h) {
            if (null !== a)
                if (this.nativeForEach &&
                    a.forEach === this.nativeForEach) a.forEach(c, h);
                else if (a.length === +a.length)
                for (var l = 0, f = a.length; l < f && c.call(h, a[l], l, a) !== {}; l++);
            else
                for (l in a)
                    if (a.hasOwnProperty(l) && c.call(h, a[l], l, a) === {}) break
        },
        map: function(a, c, h) {
            var l = [];
            if (null == a) return l;
            if (this.nativeMap && a.map === this.nativeMap) return a.map(c, h);
            this.each(a, function(a, b, g) {
                l[l.length] = c.call(h, a, b, g)
            });
            return l
        },
        x64Add: function(a, c) {
            a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
            c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
            var h = [0,
                0, 0, 0
            ];
            h[3] += a[3] + c[3];
            h[2] += h[3] >>> 16;
            h[3] &= 65535;
            h[2] += a[2] + c[2];
            h[1] += h[2] >>> 16;
            h[2] &= 65535;
            h[1] += a[1] + c[1];
            h[0] += h[1] >>> 16;
            h[1] &= 65535;
            h[0] += a[0] + c[0];
            h[0] &= 65535;
            return [h[0] << 16 | h[1], h[2] << 16 | h[3]]
        },
        x64Multiply: function(a, c) {
            a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
            c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
            var h = [0, 0, 0, 0];
            h[3] += a[3] * c[3];
            h[2] += h[3] >>> 16;
            h[3] &= 65535;
            h[2] += a[2] * c[3];
            h[1] += h[2] >>> 16;
            h[2] &= 65535;
            h[2] += a[3] * c[2];
            h[1] += h[2] >>> 16;
            h[2] &= 65535;
            h[1] += a[1] * c[3];
            h[0] += h[1] >>> 16;
            h[1] &= 65535;
            h[1] += a[2] * c[2];
            h[0] += h[1] >>> 16;
            h[1] &= 65535;
            h[1] += a[3] * c[1];
            h[0] += h[1] >>> 16;
            h[1] &= 65535;
            h[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
            h[0] &= 65535;
            return [h[0] << 16 | h[1], h[2] << 16 | h[3]]
        },
        x64Rotl: function(a, c) {
            c %= 64;
            if (32 === c) return [a[1], a[0]];
            if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c];
            c -= 32;
            return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c]
        },
        x64LeftShift: function(a, c) {
            c %= 64;
            return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
        },
        x64Xor: function(a, c) {
            return [a[0] ^ c[0], a[1] ^
                c[1]
            ]
        },
        x64Fmix: function(a) {
            a = this.x64Xor(a, [0, a[0] >>> 1]);
            a = this.x64Multiply(a, [4283543511, 3981806797]);
            a = this.x64Xor(a, [0, a[0] >>> 1]);
            a = this.x64Multiply(a, [3301882366, 444984403]);
            return a = this.x64Xor(a, [0, a[0] >>> 1])
        },
        x64hash128: function(a, c) {
            a = a || "";
            c = c || 0;
            for (var h = a.length % 16, l = a.length - h, f = [0, c], b = [0, c], g = [0, 0], d = [0, 0], q = [2277735313, 289559509], p = [1291169091, 658871167], k = 0; k < l; k += 16) g = [a.charCodeAt(k + 4) & 255 | (a.charCodeAt(k + 5) & 255) << 8 | (a.charCodeAt(k + 6) & 255) << 16 | (a.charCodeAt(k + 7) & 255) << 24, a.charCodeAt(k) &
                255 | (a.charCodeAt(k + 1) & 255) << 8 | (a.charCodeAt(k + 2) & 255) << 16 | (a.charCodeAt(k + 3) & 255) << 24
            ], d = [a.charCodeAt(k + 12) & 255 | (a.charCodeAt(k + 13) & 255) << 8 | (a.charCodeAt(k + 14) & 255) << 16 | (a.charCodeAt(k + 15) & 255) << 24, a.charCodeAt(k + 8) & 255 | (a.charCodeAt(k + 9) & 255) << 8 | (a.charCodeAt(k + 10) & 255) << 16 | (a.charCodeAt(k + 11) & 255) << 24], g = this.x64Multiply(g, q), g = this.x64Rotl(g, 31), g = this.x64Multiply(g, p), f = this.x64Xor(f, g), f = this.x64Rotl(f, 27), f = this.x64Add(f, b), f = this.x64Add(this.x64Multiply(f, [0, 5]), [0, 1390208809]), d = this.x64Multiply(d,
                p), d = this.x64Rotl(d, 33), d = this.x64Multiply(d, q), b = this.x64Xor(b, d), b = this.x64Rotl(b, 31), b = this.x64Add(b, f), b = this.x64Add(this.x64Multiply(b, [0, 5]), [0, 944331445]);
            g = [0, 0];
            d = [0, 0];
            switch (h) {
                case 15:
                    d = this.x64Xor(d, this.x64LeftShift([0, a.charCodeAt(k + 14)], 48));
                case 14:
                    d = this.x64Xor(d, this.x64LeftShift([0, a.charCodeAt(k + 13)], 40));
                case 13:
                    d = this.x64Xor(d, this.x64LeftShift([0, a.charCodeAt(k + 12)], 32));
                case 12:
                    d = this.x64Xor(d, this.x64LeftShift([0, a.charCodeAt(k + 11)], 24));
                case 11:
                    d = this.x64Xor(d, this.x64LeftShift([0,
                        a.charCodeAt(k + 10)
                    ], 16));
                case 10:
                    d = this.x64Xor(d, this.x64LeftShift([0, a.charCodeAt(k + 9)], 8));
                case 9:
                    d = this.x64Xor(d, [0, a.charCodeAt(k + 8)]), d = this.x64Multiply(d, p), d = this.x64Rotl(d, 33), d = this.x64Multiply(d, q), b = this.x64Xor(b, d);
                case 8:
                    g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 7)], 56));
                case 7:
                    g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 6)], 48));
                case 6:
                    g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 5)], 40));
                case 5:
                    g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 4)], 32));
                case 4:
                    g =
                        this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 3)], 24));
                case 3:
                    g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 2)], 16));
                case 2:
                    g = this.x64Xor(g, this.x64LeftShift([0, a.charCodeAt(k + 1)], 8));
                case 1:
                    g = this.x64Xor(g, [0, a.charCodeAt(k)]), g = this.x64Multiply(g, q), g = this.x64Rotl(g, 31), g = this.x64Multiply(g, p), f = this.x64Xor(f, g)
            }
            f = this.x64Xor(f, [0, a.length]);
            b = this.x64Xor(b, [0, a.length]);
            f = this.x64Add(f, b);
            b = this.x64Add(b, f);
            f = this.x64Fmix(f);
            b = this.x64Fmix(b);
            f = this.x64Add(f, b);
            b = this.x64Add(b, f);
            return ("00000000" +
                (f[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (f[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (b[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (b[1] >>> 0).toString(16)).slice(-8)
        }
    };
    hj.fingerprinter.VERSION = "0.7.1";
    return hj.fingerprinter
}, "fingerprinter")();
hj.tryCatch(function(m, a, c) {
    hj.deviceDetection = {
        getDevice: c(m, a)
    }
}("categorizr", this, function(m, a) {
    function c() {
        for (var a = h.length; a--;) g["is" + h[a]] = b(h[a].toLowerCase())
    }
    var h = ["Tv", "Desktop", "Tablet", "Mobile"],
        l = function(a) {
            return a.match(/GoogleTV|SmartTV|Internet.TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i) ? "tv" : a.match(/Xbox|PLAYSTATION.3|Wii/i) ? "tv" : a.match(/iPad/i) || a.match(/tablet/i) && !a.match(/RX-34/i) || a.match(/FOLIO/i) ? "tablet" : a.match(/Linux/i) && a.match(/Android/i) && !a.match(/Fennec|mobi|HTC.Magic|HTCX06HT|Nexus.One|SC-02B|fone.945/i) ?
                "tablet" : a.match(/Kindle/i) || a.match(/Mac.OS/i) && a.match(/Silk/i) ? "tablet" : a.match(/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC(.Flyer|\_Flyer)|Sprint.ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos.S7|Dell.Streak.7|Advent.Vega|A101IT|A70BHT|MID7015|Next2|nook/i) || a.match(/MB511/i) && a.match(/RUTEM/i) ? "tablet" : a.match(/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google.Wireless.Transcoder/i) ? "mobile" : a.match(/Opera/i) &&
                a.match(/Windows.NT.5/i) && a.match(/HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i) ? "mobile" : a.match(/Windows.(NT|XP|ME|9)/) && !a.match(/Phone/i) || a.match(/Win(9|.9|NT)/i) ? "desktop" : a.match(/Macintosh|PowerPC/i) && !a.match(/Silk/i) ? "desktop" : a.match(/Linux/i) && a.match(/X11/i) ? "desktop" : a.match(/Solaris|SunOS|BSD/i) ? "desktop" : a.match(/Bot|Crawler|Spider|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|TinEye/i) && !a.match(/Mobile/i) ?
                "desktop" : "mobile"
        },
        f = l(a.navigator ? a.navigator.userAgent : a.request ? a.request.headers["user-agent"] : "No User-Agent Provided"),
        b = function(a) {
            return f === a
        },
        g = function() {
            var a = [].slice.call(arguments, 0);
            2 === a.length && f === a[0] ? (f = a[1], c()) : 1 === a.length && "string" === typeof a[0] && (f = a[0], c());
            return f
        };
    g.is = b;
    g.test = l;
    c();
    return g
}), "device-detection");
hj.tryCatch(function() {
    function m(g, d) {
        var b = g[0],
            p = g[1],
            k = g[2],
            n = g[3],
            b = c(b, p, k, n, d[0], 7, -680876936),
            n = c(n, b, p, k, d[1], 12, -389564586),
            k = c(k, n, b, p, d[2], 17, 606105819),
            p = c(p, k, n, b, d[3], 22, -1044525330),
            b = c(b, p, k, n, d[4], 7, -176418897),
            n = c(n, b, p, k, d[5], 12, 1200080426),
            k = c(k, n, b, p, d[6], 17, -1473231341),
            p = c(p, k, n, b, d[7], 22, -45705983),
            b = c(b, p, k, n, d[8], 7, 1770035416),
            n = c(n, b, p, k, d[9], 12, -1958414417),
            k = c(k, n, b, p, d[10], 17, -42063),
            p = c(p, k, n, b, d[11], 22, -1990404162),
            b = c(b, p, k, n, d[12], 7, 1804603682),
            n = c(n, b, p, k, d[13],
                12, -40341101),
            k = c(k, n, b, p, d[14], 17, -1502002290),
            p = c(p, k, n, b, d[15], 22, 1236535329),
            b = h(b, p, k, n, d[1], 5, -165796510),
            n = h(n, b, p, k, d[6], 9, -1069501632),
            k = h(k, n, b, p, d[11], 14, 643717713),
            p = h(p, k, n, b, d[0], 20, -373897302),
            b = h(b, p, k, n, d[5], 5, -701558691),
            n = h(n, b, p, k, d[10], 9, 38016083),
            k = h(k, n, b, p, d[15], 14, -660478335),
            p = h(p, k, n, b, d[4], 20, -405537848),
            b = h(b, p, k, n, d[9], 5, 568446438),
            n = h(n, b, p, k, d[14], 9, -1019803690),
            k = h(k, n, b, p, d[3], 14, -187363961),
            p = h(p, k, n, b, d[8], 20, 1163531501),
            b = h(b, p, k, n, d[13], 5, -1444681467),
            n = h(n, b,
                p, k, d[2], 9, -51403784),
            k = h(k, n, b, p, d[7], 14, 1735328473),
            p = h(p, k, n, b, d[12], 20, -1926607734),
            b = a(p ^ k ^ n, b, p, d[5], 4, -378558),
            n = a(b ^ p ^ k, n, b, d[8], 11, -2022574463),
            k = a(n ^ b ^ p, k, n, d[11], 16, 1839030562),
            p = a(k ^ n ^ b, p, k, d[14], 23, -35309556),
            b = a(p ^ k ^ n, b, p, d[1], 4, -1530992060),
            n = a(b ^ p ^ k, n, b, d[4], 11, 1272893353),
            k = a(n ^ b ^ p, k, n, d[7], 16, -155497632),
            p = a(k ^ n ^ b, p, k, d[10], 23, -1094730640),
            b = a(p ^ k ^ n, b, p, d[13], 4, 681279174),
            n = a(b ^ p ^ k, n, b, d[0], 11, -358537222),
            k = a(n ^ b ^ p, k, n, d[3], 16, -722521979),
            p = a(k ^ n ^ b, p, k, d[6], 23, 76029189),
            b = a(p ^ k ^
                n, b, p, d[9], 4, -640364487),
            n = a(b ^ p ^ k, n, b, d[12], 11, -421815835),
            k = a(n ^ b ^ p, k, n, d[15], 16, 530742520),
            p = a(k ^ n ^ b, p, k, d[2], 23, -995338651),
            b = l(b, p, k, n, d[0], 6, -198630844),
            n = l(n, b, p, k, d[7], 10, 1126891415),
            k = l(k, n, b, p, d[14], 15, -1416354905),
            p = l(p, k, n, b, d[5], 21, -57434055),
            b = l(b, p, k, n, d[12], 6, 1700485571),
            n = l(n, b, p, k, d[3], 10, -1894986606),
            k = l(k, n, b, p, d[10], 15, -1051523),
            p = l(p, k, n, b, d[1], 21, -2054922799),
            b = l(b, p, k, n, d[8], 6, 1873313359),
            n = l(n, b, p, k, d[15], 10, -30611744),
            k = l(k, n, b, p, d[6], 15, -1560198380),
            p = l(p, k, n, b, d[13], 21,
                1309151649),
            b = l(b, p, k, n, d[4], 6, -145523070),
            n = l(n, b, p, k, d[11], 10, -1120210379),
            k = l(k, n, b, p, d[2], 15, 718787259),
            p = l(p, k, n, b, d[9], 21, -343485551);
        g[0] = f(b, g[0]);
        g[1] = f(p, g[1]);
        g[2] = f(k, g[2]);
        g[3] = f(n, g[3])
    }

    function a(a, d, b, c, k, h) {
        d = f(f(d, a), f(c, h));
        return f(d << k | d >>> 32 - k, b)
    }

    function c(b, d, f, c, k, h, l) {
        return a(d & f | ~d & c, b, d, k, h, l)
    }

    function h(b, d, f, c, k, h, l) {
        return a(d & c | f & ~c, b, d, k, h, l)
    }

    function l(b, d, f, c, k, h, l) {
        return a(f ^ (d | ~c), b, d, k, h, l)
    }

    function f(a, b) {
        return a + b & 4294967295
    }
    if ("undefined" !== typeof hj.scriptLoaded) window.console =
        window.console || {
            warn: function() {}
        }, console.warn("Hotjar Tracking Warning: Multiple Hotjar tracking codes were detected on this page. Tracking will not work as expected."), hj.verifyInstall && hj.notification.show("Hotjar installation invalid.", "It appears you have more than one Hotjar tracking code set up on this page. Hotjar cannot work properly if multiple Hotjar scripts are loaded concurrently. Please make sure you only install the one tracking code provided for this site.", "bad");
    else {
        window.hj =
            window.hj || function() {
                (window.hj.q = window.hj.q || []).push(arguments)
            };
        window.hj.q = window.hj.q || [];
        hj.hostname = hj.host.split(":")[0];
        hj.secure = "https:" == location.protocol;
        hj.port = hj.host.split(":")[1] || (hj.secure ? "443" : "80");
        hj.apiUrlBase = location.protocol + "//" + hj.host + "/api/v1";
        hj.includedInSample = !1;
        hj.isPreview = Boolean(_hjSettings.preview);
        hj.placeholderPolyfill = !1 !== _hjSettings.hjPlaceholderPolyfill;
        hj.settings = {};
        hj.userDeviceType = null;
        hj.optOut = !1;
        hj.windowSize = null;
        hj.scriptVersion = 16041304;
        hj.currentDeferredPageContentId = null;
        hj.locationListener = function() {
            var a = {},
                b = "manual",
                f;
            a.setMode = hj.tryCatch(function(a) {
                b = a;
                f && clearInterval(f);
                "automatic_with_fragments" === b ? f = setInterval(function() {
                    var a = location.origin + location.pathname + location.search + location.hash;
                    hj.currentUrl && hj.currentUrl != a && hj._init.reinit(a)
                }, 200) : "automatic" === b && (f = setInterval(function() {
                    var a = location.origin + location.pathname + location.search;
                    hj.currentUrl && hj.currentUrl.split("#")[0] != a && hj._init.reinit(a)
                }, 200))
            });
            return a
        }();
        var b = "0123456789abcdef".split("");
        hj.md5 = function(a, d) {
            var f = "";
            try {
                var c = a,
                    k = c.length,
                    h = [1732584193, -271733879, -1732584194, 271733878],
                    l;
                for (l = 64; l <= c.length; l += 64) {
                    for (var s = h, w = c.substring(l - 64, l), u = [], t = void 0, t = 0; 64 > t; t += 4) u[t >> 2] = w.charCodeAt(t) + (w.charCodeAt(t + 1) << 8) + (w.charCodeAt(t + 2) << 16) + (w.charCodeAt(t + 3) << 24);
                    m(s, u)
                }
                c = c.substring(l - 64);
                s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (l = 0; l < c.length; l++) s[l >> 2] |= c.charCodeAt(l) << (l % 4 << 3);
                s[l >> 2] |= 128 << (l % 4 << 3);
                if (55 < l) {
                    m(h, s);
                    for (l =
                        0; 16 > l; l++) s[l] = 0
                }
                s[14] = 8 * k;
                m(h, s);
                for (c = 0; c < h.length; c++) {
                    k = h;
                    l = c;
                    for (var v = h[c], s = "", w = 0; 4 > w; w++) s += b[v >> 8 * w + 4 & 15] + b[v >> 8 * w & 15];
                    k[l] = s
                }
                f = h.join("")
            } catch (x) {
                d ? f = "" : hj.exceptions.log(x, "md5")
            }
            return f
        };
        hj.b64EncodeUnicode = function(a) {
            return btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g, function(a, b) {
                return String.fromCharCode("0x" + b)
            }))
        };
        "5d41402abc4b2a76b9719d911017c592" != hj.md5("hello") && (f = function(a, b) {
            var c = (a & 65535) + (b & 65535);
            return (a >> 16) + (b >> 16) + (c >> 16) << 16 | c & 65535
        });
        hj.time = function() {
            var a = {},
                b = (new Date).getTime();
            a.reset = function() {
                b = (new Date).getTime()
            };
            a.getNow = function() {
                return (new Date).getTime() - b
            };
            return a
        }();
        hj.debug = function() {
            return {
                on: function(a) {
                    _hjSettings.hjdebug = !0;
                    a && hj.cookie.set("hjDebug", !0)
                },
                off: function() {
                    _hjSettings.hjdebug = !1;
                    hj.cookie.set("hjDebug", !1)
                },
                emit: function(a, b) {
                    "undefined" !== typeof _hjEmitters && _hjEmitters.includes && _hjEmitters.includes(a) && window.postMessage({
                        data: b,
                        message: "hjDebug",
                        type: a
                    }, "*")
                }
            }
        }();
        hj.url = function() {
            var a = {};
            a.getParameter = hj.tryCatch(function(a) {
                var b,
                    g = [];
                for (a = RegExp("[^?&]?" + a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]") + "=([^&]+)", "g"); b = a.exec(location.search);) g.push(hj.url.tryDecodeURIComponent(b[1]));
                switch (g.length) {
                    case 0:
                        return "";
                    case 1:
                        return g[0];
                    default:
                        return g
                }
            }, "common");
            a.tryDecodeURIComponent = hj.tryCatch(function(a) {
                try {
                    return decodeURIComponent(a)
                } catch (b) {
                    return a
                }
            }, "common");
            a.getUrlFromString = hj.tryCatch(function(a) {
                a = a || window.location.href;
                a.startsWith("http") || (a.startsWith("/") || (a = "/" + a), a = location.protocol + "//" + location.hostname +
                    ("" != location.port ? ":" + location.port : "") + a);
                return a
            }, "common");
            return a
        }();
        hj.cookie = function() {
            var a = {};
            a.get = hj.tryCatch(function(a) {
                return (a = RegExp("(?:^|; )" + a + "=([^;]*)").exec(document.cookie)) ? a[1] : null
            }, "common");
            a.set = hj.tryCatch(function(a, b, g) {
                var k = new Date,
                    c = g || 365;
                a = a + "=" + b + "; path=/; ";
                0 !== g && (k.setTime(k.getTime() + 864E5 * c), a += "expires=" + k.toUTCString());
                document.cookie = a
            }, "common");
            a.add = hj.tryCatch(function(a, b) {
                var g = hj.cookie.get(a),
                    g = g ? g.split(",") : [];
                hj.hq.inArray(b.toString(),
                    g) || (g.push(b), hj.cookie.set(a, g.join(",")))
            }, "common");
            a.find = hj.tryCatch(function(a, b) {
                var g = hj.cookie.get(a),
                    k, g = g ? g.split(",") : [];
                for (k = 0; k < g.length; k++)
                    if (b.toString() === g[k]) return !0;
                return !1
            }, "common");
            return a
        }();
        hj.json = function() {
            var a = {};
            a.parse = hj.tryCatch(function(a) {
                return (JSON.parse || JSON.decode)(a)
            }, "common");
            a.tryParse = function(b, c) {
                var f = !0;
                try {
                    var k = a.parse(b);
                    c && c(k)
                } catch (h) {
                    f = !1
                }
                return f
            };
            a.stringify = hj.tryCatch(function(a, b, g) {
                var k, c, f;
                if (void 0 !== a) return k = Array.prototype.toJSON,
                    delete Array.prototype.toJSON, c = JSON.stringify || JSON.encode, f = '"\u2028"' === c("\u2028") ? function(a, b, k) {
                        return c(a, b, k).replace(/\u2028|\u2029/g, function(a) {
                            return "\\u202" + ("\u2028" === a ? "8" : "9")
                        })
                    } : c, a = f(a, b, g), k && (Array.prototype.toJSON = k), a
            }, "common");
            return a
        }();
        hj.log = function() {
            var a = {},
                b = !1,
                c = "",
                f = {
                    init: "#6600cc",
                    recording: "#c00000",
                    heatmap: "#c00000",
                    forms: "#c00000",
                    tester: "#009900",
                    survey: "#009900",
                    poll: "#009900",
                    events: "#ffc000",
                    event: "#ffc000",
                    property: "#ff33cc",
                    deferredpagecontent: "#7c7c7c",
                    websocket: "#0dc0ff",
                    data: "#009bd2",
                    command: "#0079a4",
                    pagevisit: "#00668a",
                    dataqueue: "#00445c",
                    targeting: "#00ee00",
                    rendering: "#bd00ea"
                };
            a.init = function() {
                "undefined" === typeof window.console && (window.console = {
                    debug: function() {},
                    trace: function() {},
                    log: function() {},
                    info: function() {},
                    warn: function() {},
                    error: function() {}
                })
            };
            a.debug = function(k, h, l) {
                var m = !h ? "#333" : f[h.toLowerCase()] || "#333";
                c != k && b && (console.groupEnd(), b = !1);
                c = k;
                _hjSettings.hjdebug && ("object" === typeof k ? hj.hq.each(k, function(b, k) {
                    a.debug(b +
                        ": " + k, h, null)
                }) : (k = h && "string" === typeof k ? h.toUpperCase() + ": " + k : k, k = "%c" + (new Date).toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1") + ":%c " + k, l ? (b || (console.groupCollapsed(k + ":", "color: #999;", "color: " + m + ";"), b = !0), console.log(l)) : console.log(k, "color: #999;", "color: " + m + ";")))
            };
            a.info = function(a) {
                console.log("%c" + a, "color: #006EFF")
            };
            a.warn = function(a) {
                console.log("%c" + a, "color: #E8910C")
            };
            a.error = function(a) {
                console.error("Hotjar error: " + a)
            };
            return a
        }();
        hj.loader = function() {
            var a = {},
                b = [];
            a.getModules = hj.tryCatch(function() {
                return b
            }, "common");
            a.registerModule = hj.tryCatch(function(a, g, k) {
                b.push({
                    name: a,
                    module: g,
                    nonTracking: "undefined" !== typeof k ? k : !1
                })
            }, "common");
            a.loadScripts = hj.tryCatch(function(a, b) {
                function k(k) {
                    d += 1;
                    hj.log.debug("Script loaded: " + d + " (" + k + ")");
                    d === a.length && hj.tryCatch(b, "URL")()
                }
                var d = 0,
                    g = {},
                    c;
                0 === a.length && hj.tryCatch(b, "URL")();
                for (c = 0; c < a.length; c++) g[c] = document.createElement("script"), g[c].src = a[c], g[c].onload = function(a) {
                    return function() {
                        hj.tryCatch(k,
                            "URL")(g[a].src)
                    }
                }(c), g[c].onreadystatechange = function(a) {
                    return function() {
                        if ("complete" === this.readyState || "loaded" === this.readyState) hj.log.debug(this.readyState + ": " + g[a].src + " (IE onreadystatechange)"), g[a].onreadystatechange = null, k(g[a].src)
                    }
                }(c), document.getElementsByTagName("head")[0].appendChild(g[c])
            }, "common");
            a.loadSettings = hj.tryCatch(function(a) {
                hj.isPreview ? hj.tryCatch(a, "Loader")() : "undefined" !== typeof window.hjSiteSettings ? hj.tryCatch(a, "Loader")(window.hjSiteSettings) : hj.ajax.get(hj.apiUrlBase +
                    "/client/sites/" + hj.settings.site_id, hj.tryCatch(a, "common"))
            }, "common");
            return a
        }();
        hj.targeting = function() {
            var a = {};
            a.ruleMatches = hj.tryCatch(function(a, b) {
                var d, g = [],
                    h = [],
                    l = [];
                for (d = 0; d < a.length; d += 1) "url" === a[d].component && !a[d].negate ? g.push(a[d]) : "url" === a[d].component && a[d].negate ? h.push(a[d]) : "device" === a[d].component && l.push(a[d]);
                return (!g.length || c(g, b)) && (!h.length || !c(h, b)) && f(l)
            }, "common");
            a.onMatch = hj.tryCatch(function(a, g, h) {
                var l, m = [],
                    u = [],
                    t = [],
                    v = [];
                for (l = 0; l < a.length; l += 1) "url" ===
                    a[l].component && !a[l].negate ? m.push(a[l]) : "url" === a[l].component && a[l].negate ? u.push(a[l]) : "device" === a[l].component ? t.push(a[l]) : "trigger" === a[l].component && v.push(a[l]);
                f(t) && (v.length && b(v, hj.tryCatch(g)), a = m.length && c(m, h) || !m.length && !v.length && u.length, h = u.length && c(u, h), a && !h && hj.tryCatch(g, "Targeting")())
            }, "common");
            var b = hj.tryCatch(function(a, b) {
                    var d = 0;
                    for (d; d < a.length; d += 1) hj.event.listen(["trigger:" + a[d].pattern], function() {
                        hj.tryCatch(b)()
                    })
                }, "common"),
                c = hj.tryCatch(function(a, b) {
                    var d =
                        hj.url.tryDecodeURIComponent(b || window.location.href),
                        g, c = !1,
                        f, h;
                    if (0 === a.length) hj.log.debug("No URL rules set.", "targeting"), c = !0;
                    else
                        for (h = 0; h < a.length; h += 1) {
                            f = a[h];
                            f.pattern.length || (f.pattern = "/");
                            "regex" !== f.match_operation && (f.pattern = hj.url.tryDecodeURIComponent(f.pattern));
                            switch (f.match_operation) {
                                case "simple":
                                    g = d.split("#")[0].split("?")[0].replace("http://www.", "").replace("https://www.", "").replace("http://", "").replace("https://", "");
                                    f.pattern = f.pattern.split("#")[0].split("?")[0].replace("http://www.",
                                        "").replace("https://www.", "").replace("http://", "").replace("https://", "");
                                    g = g === f.pattern;
                                    break;
                                case "exact":
                                    g = d === f.pattern;
                                    break;
                                case "starts_with":
                                    g = 0 === d.indexOf(f.pattern);
                                    break;
                                case "ends_with":
                                    g = -1 === d.length - f.pattern.length ? 0 : d.length - f.pattern.length;
                                    g = d.substring(g, d.length) === f.pattern;
                                    break;
                                case "contains":
                                    g = -1 !== d.indexOf(f.pattern);
                                    break;
                                case "regex":
                                    g = RegExp(f.pattern).test(d)
                            }
                            if (g) {
                                hj.log.debug("URL match: " + f.component + "|" + f.match_operation + "|" + f.pattern, "targeting");
                                c = !0;
                                break
                            }
                        }
                    c ||
                        hj.log.debug("No URL match found.", "targeting");
                    return c
                }, "common"),
                f = hj.tryCatch(function(a) {
                    var b = !1,
                        d, g, c;
                    if (0 === a.length || 3 === a.length) hj.log.debug("No specific device rules set.", "targeting"), b = !0;
                    else {
                        g = hj.utils.deviceType();
                        for (c = 0; c < a.length; c += 1) d = a[c].pattern, d === g && (hj.log.debug("Device match: " + d, "targeting"), b = !0)
                    }
                    b || hj.log.debug("No device match found.", "targeting");
                    return b
                }, "common");
            return a
        }();
        hj.utils = function() {
            var a = {};
            a.ieVersion = hj.tryCatch(function(a) {
                a = a || navigator.userAgent;
                return 0 < a.indexOf("MSIE ") ? document.all && !document.compatMode ? 5 : document.all && !window.XMLHttpRequest ? 6 : document.all && !document.querySelector ? 7 : document.all && !document.addEventListener ? 8 : document.all && !window.atob ? 9 : 10 : -1 !== a.indexOf("Trident/") ? 11 : -1 !== a.indexOf("Edge/") ? 12 : "notIE"
            }, "common");
            a.isFirefox = hj.tryCatch(function(a) {
                return -1 < (a || navigator.userAgent).indexOf("Firefox")
            }, "common");
            a.shuffle = hj.tryCatch(function(a) {
                var b, g, k;
                for (b = a.length - 1; 0 < b; b -= 1) g = Math.floor(Math.random() * (b + 1)), k =
                    a[b], a[b] = a[g], a[g] = k;
                return a
            }, "common");
            a.uuid4 = hj.tryCatch(function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
            }, "common");
            a.validateEmail = hj.tryCatch(function(a) {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)
            }, "common");
            a.deviceType = hj.tryCatch(function() {
                hj.userDeviceType || (hj.userDeviceType =
                    hj.deviceDetection.getDevice(), "mobile" === hj.userDeviceType && (hj.userDeviceType = "phone"));
                return hj.userDeviceType
            }, "common");
            return a
        }();
        hj.rendering = function() {
            function a(b, g) {
                hj.tryCatch(g, "Rendering")(b)
            }

            function b(a, g) {
                hj.widgetDelay.set(function() {
                    hj.tryCatch(g, "Rendering")(a)
                }, 1E3 * a.display_delay)
            }

            function c(a, b, g) {
                function d() {
                    hj.tryCatch(b, "Rendering")(a);
                    k.off("mousemove." + g);
                    k.off("mouseout." + g)
                }
                var k = hj.hq(document),
                    f = hj.hq(window),
                    l = [];
                h.push(g);
                k.off("mousemove." + g);
                k.off("mouseout." +
                    g);
                k.on("mousemove." + g, hj.tryCatch(function(a) {
                    l.push({
                        x: a.clientX,
                        y: a.clientY
                    });
                    2 < l.length && (l[1].x === l[2].x && l[1].y === l[2].y ? l.pop() : l.shift())
                }, "Rendering"));
                k.on("mouseout." + g, hj.tryCatch(function(a) {
                    if (!a.relatedTarget || a.relatedTarget !== this && !(this.compareDocumentPosition(a.relatedTarget) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
                        var b = l[1];
                        a = l[0];
                        "undefined" !== typeof b && !(b.y >= a.y) && (a.x === b.x && d(), b = (a.y - b.y) / (a.x - b.x), a = a.y - b * a.x, a = -a / b, 0 < a && a < f.width() && d())
                    }
                }, "Rendering"))
            }

            function f(a, b,
                g) {
                var d = hj.hq(document),
                    k = hj.hq(window);
                k.on("scroll." + g, hj.tryCatch(function() {
                    var c = d.height();
                    0.5 <= (d.scrollTop() + hj.ui.getWindowSize().height) / c && (k.off("scroll." + g), b(a))
                }, "Rendering"))
            }

            function k(a) {
                for (var b in a) {
                    var g;
                    if (a.hasOwnProperty(b))
                        if (g = a[b], "object" === typeof g) g instanceof hj.rendering.TrustedString ? a[b] = g.value : k(g);
                        else if ("string" === typeof g) {
                        var d = a,
                            c = b;
                        g = l.escapeHtml(g);
                        g = g.replace(/(\b(https?):\/\/[-A-Z0-9+&amp;@#\/%?=~_|!:,.;]*[-A-Z0-9+&amp;@#\/%=~_|])/ig, '<a href="$1" target="_blank">$1</a>');
                        g = g.replace(/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a href="http://$2" target="_blank">$2</a>');
                        d[c] = g
                    }
                }
            }
            var h = [],
                l = {},
                m = {};
            l.clearAllAbandonEvents = hj.tryCatch(function() {
                h.forEach(function(a) {
                    hj.log.debug("Removing abandon events for " + a, "rendering");
                    hj.hq(document).off("mousemove." + a);
                    hj.hq(document).off("mouseout." + a)
                });
                h = []
            }, "common");
            l.renderTemplate = hj.tryCatch(function(a, b) {
                var g = m[a];
                g || (g = "var pieces=[],print=function(){pieces.push.apply(pieces,arguments);};with(obj){pieces.push('" + a.replace(/[\r\t\n]/g,
                    " ").replace(/'(?=[^%]*%>)/g, "\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g, "',$1,'").split("<%").join("');").split("%>").join("pieces.push('") + "');}return pieces.join('');", g = new Function("obj", g), m[a] = g);
                k(b);
                return g(b)
            }, "common");
            l.addToDom = hj.tryCatch(function(a, b) {
                hj.hq("#" + a).remove();
                hj.hq("body").append(b);
                return hj.hq("#" + a + ">div")
            }, "common");
            l.TrustedString = function(a) {
                this.value = a
            };
            l.callAccordingToCondition = hj.tryCatch(function(k, h, l) {
                var n = {
                    immediate: a,
                    delay: b,
                    abandon: c,
                    scroll: f
                }[k.display_condition];
                hj.log.debug("Calling active item (" + h + "): " + k.display_condition, "rendering");
                if (n) {
                    var m = !0;
                    "undefined" !== typeof k.targeting_percentage && !hj.isPreview && (m = (new hj.fingerprinter).compareRatio(k.targeting_percentage, !0));
                    m && hj.tryCatch(n, "Rendering")(k, l, h)
                } else throw Error('Unhandled display condition: "' + k.display_condition + '"');
            }, "common");
            l.escapeHtml = function(a) {
                var b = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                };
                a = String(a).replace(/&(?!(amp|lt|gt|quot|#39);)/g,
                    function(a) {
                        return b[a]
                    });
                return a.replace(/[<>"']/g, function(a) {
                    return b[a]
                })
            };
            return l
        }();
        hj.survey = hj.tryCatch(function() {
            return {
                ctrl: void 0,
                data: void 0,
                model: {},
                activeLanguageDirection: "ltr"
            }
        }, "common")();
        hj.ui = function() {
            var a = {};
            a.getWindowSize = hj.tryCatch(function() {
                return {
                    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                }
            }, "common");
            a.getScrollPosition = hj.tryCatch(function() {
                return {
                    left: hj.hq(window).scrollLeft(),
                    top: hj.hq(window).scrollTop()
                }
            }, "common");
            a.getBottomAsPercentage = hj.tryCatch(function() {
                var a = parseInt(1E3 * (hj.hq(window).scrollTop() + hj.ui.getWindowSize().height) / hj.hq(document).height(), 10);
                return Math.min(1E3, a)
            }, "common");
            a.disableScrolling = hj.tryCatch(function(a) {
                var b = hj.ui.getScrollPosition();
                hj.hq(document).on("scroll.hotjarDisable resize.hotjarDisable mousewheel.hotjarDisable DOMMouseScroll.hotjarDisable touchmove.hotjarDisable", hj.tryCatch(function(g) {
                    g.preventDefault();
                    window.scrollTo(b.left,
                        b.top);
                    a && a()
                }, "common"))
            }, "common");
            a.enableScrolling = hj.tryCatch(function() {
                hj.hq(document).off("scroll.hotjarDisable");
                hj.hq(document).off("resize.hotjarDisable");
                hj.hq(document).off("mousewheel.hotjarDisable");
                hj.hq(document).off("DOMMouseScroll.hotjarDisable");
                hj.hq(document).off("touchmove.hotjarDisable")
            }, "common");
            return a
        }();
        hj.dom = function() {
            return {
                getCSSURLs: function() {
                    var a = [],
                        b = document.styleSheets;
                    hj.log.debug("Getting CSS", "dpc", "Starting");
                    b && 0 < b.length && hj.hq.each(b, function(b, d) {
                        d.href &&
                            "" != d.href && (hj.log.debug("Getting CSS", "dpc", d.href), a.push(d.href))
                    });
                    return a
                }
            }
        }();
        hj.html = function() {
            function a(b) {
                b.nodeType === Node.TEXT_NODE && (b.nodeValue = hj.hq.trim(b.nodeValue).replace(/./g, "*")); - 1 !== "text color date datetime datetime-local email month number range search tel time url week".split(" ").indexOf(b.type) && b.setAttribute("value", hj.hq.trim(b.value).replace(/./g, "*"));
                hj.hq.each(b.childNodes, function(d, k) {
                    b.childNodes[d] = a(k)
                });
                return b
            }
            var b = {};
            b.getPageContent = hj.tryCatch(function(b) {
                    var d =
                        document.cloneNode(!0),
                        k = d.querySelectorAll("*[data-hj-masked]"),
                        c = d.querySelectorAll("head iframe"),
                        f = 0 == document.getElementsByTagName("base").length ? location.origin : document.getElementsByTagName("base")[0].href;
                    hj.hq.each(k, function(b, d) {
                        k[b] = a(d)
                    });
                    [].forEach.call(c, function(a) {
                        a.parentNode.removeChild(a)
                    });
                    b && (b = d.querySelectorAll(b), hj.hq.each(b, function(a, b) {
                        b.parentNode.removeChild(b)
                    }));
                    Array.prototype.slice.call(d.getElementsByTagName("img")).forEach(function(a) {
                        var b = "";
                        if ("" === a.src && a.srcset) {
                            if (b =
                                a.srcset.match(/(?:([^"'\s,]+)(\s*(?:\s+\d+[wx]))?(?:,\s*)?)/g)[0]) {
                                var g = b.indexOf(" ");
                                0 < g && (b = b.substring(0, g));
                                b = b.replace(",", "");
                                0 !== b.indexOf("http") && (b = f + b);
                                a.src = b;
                                a.removeAttribute("srcset")
                            }
                        } else a.srcset && a.removeAttribute("srcset")
                    });
                    Array.prototype.slice.call(d.getElementsByTagName("source")).forEach(function(a) {
                        a.attributes.srcset && a.removeAttribute("srcset")
                    });
                    [].forEach.call(d.querySelectorAll("script"), function(a) {
                        a.parentNode.removeChild(a)
                    });
                    return hj.html.getPageDoctype() + d.documentElement.outerHTML
                },
                "common");
            b.getPageDoctype = hj.tryCatch(function() {
                return null === document.doctype ? "" : "<!DOCTYPE " + document.doctype.name + (document.doctype.publicId ? ' PUBLIC "' + document.doctype.publicId + '"' : "") + (!document.doctype.publicId && document.doctype.systemId ? " SYSTEM" : "") + (document.doctype.systemId ? ' "' + document.doctype.systemId + '"' : "") + ">\n"
            }, "common");
            return b
        }();
        hj.features = function() {
            var a = {};
            a.getFeatures = hj.tryCatch(function() {
                return hjSiteSettings.features || []
            }, "hj.features.getFeatures");
            a.haveFeature =
                hj.tryCatch(function(b) {
                    return 0 <= a.getFeatures().indexOf(b)
                }, "hj.features.haveFeature");
            return a
        }()
    }
}, "common")();
hj.tryCatch(function() {
    hj.xcom = hj.tryCatch(function() {
        var m = {},
            a = [],
            c = 1,
            h = location.protocol + "//" + hj.host + "/x",
            l, f = hj.tryCatch(function() {
                if (1 == c) {
                    window.addEventListener ? window.addEventListener("message", b, !1) : window.attachEvent("onmessage", b);
                    c = 2;
                    var a = document.createElement("iframe");
                    a.style.position = "fixed";
                    a.style.top = -100;
                    a.style.left = -100;
                    a.width = 1;
                    a.height = 1;
                    a.id = "_hjXcomProxyFrame";
                    a.src = h;
                    document.body.appendChild(a);
                    l = document.getElementById("_hjXcomProxyFrame")
                }
            }, "data");
        m.send = hj.tryCatch(function(b,
            d) {
            10 == c ? l.contentWindow.postMessage({
                eventId: b,
                data: d
            }, "*") : (a.push({
                eventId: b,
                data: d
            }), f())
        });
        var b = function(b) {
            "knockknock" == b.data.eventId && (c = 10, a.forEach(function(a) {
                m.send(a.eventId, a.data)
            }), a = [])
        };
        return m
    }, "xcom")()
}, "xcom")();
hj.tryCatch(function() {
    var m = new hj.fingerprinter;
    hj.pageVisit = hj.tryCatch(function() {
        var a, c = {},
            h = {},
            l = !1,
            f = !1,
            b = !1;
        c.setup = hj.tryCatch(function(a) {
            var b = hj.ui.getWindowSize();
            l = !1;
            h = {
                window_width: b.width,
                window_height: b.height,
                included_in_sample: hj.includedInSample,
                url: a || document.location.href,
                fingerprint: m.get()
            };
            hj.debug.emit("pageVisit", a || document.location.href);
            c.property = hj.property.create();
            c.property.set("visitInfo", {
                pageVisitKey: c.property.key,
                pageUrl: h.url,
                urlHash: hj.md5(hj.b64EncodeUnicode(h.url)),
                windowWidth: h.window_width,
                windowHeight: h.window_height,
                userAgent: navigator.userAgent,
                siteId: hj.settings.site_id
            });
            hj.eventStream.expectEvents(c.property)
        }, "data");
        c.requirePageVisitId = hj.tryCatch(function() {
            !b && !c.property.get("pageInfo") && (hj.log.debug("Page Visit ID is required. ", "pageVisit"), b = !0, (l || !hj.includedInSample || hj.optOut) && a())
        }, "data");
        c.track = hj.tryCatch(function(b) {
            b && (h.url = b);
            hj.log.debug("Tracking " + h.url, "pageVisit");
            f = !0;
            a()
        }, "data");
        a = hj.tryCatch(function() {
            l = !0;
            if ((b || f) &&
                !hj.isPreview) {
                var a = {};
                Object.keys(h).forEach(function(b) {
                    a[b] = h[b]
                });
                a.insert_page_visit = b;
                a.insert_traffic_log_entry = f;
                hj.log.debug("Sending visit-data request. (Insert Page Visit: " + a.insert_page_visit + " / Insert Traffic Log Entry: " + a.insert_traffic_log_entry + ")", "pageVisit", a);
                var d = c.property;
                hj.ajax.post(hj.apiUrlBase + "/client/sites/" + hj.settings.site_id + "/visit-data?sv=" + (_hjSettings.hjsv || 0), a, hj.tryCatch(function(b) {
                    b.success && (b.user_id && d.set("userId", b.user_id), a.insert_page_visit &&
                        d.set("pageInfo", {
                            pageId: b.page_id,
                            pageVisitId: b.page_visit_id,
                            url: a.url,
                            urlMD5: hj.md5(hj.b64EncodeUnicode(a.url))
                        }))
                }, "data"));
                f = b = !1
            }
        }, "data");
        return c
    }, "data")();
    hj.request = hj.tryCatch(function() {
        var a = {};
        a.saveFeedbackResponse = hj.tryCatch(function(a) {
            var h = hj.widget.feedbackData.id;
            hj.pageVisit.requirePageVisitId();
            hj.pageVisit.property.ready("pageInfo", function(l) {
                a.action = "feedback_widget_response";
                a.page_visit_id = l.get("pageInfo").pageVisitId;
                hj.ajax.post(hj.apiUrlBase + "/client/sites/" + hj.settings.site_id +
                    "/feedback/" + h, a)
            })
        }, "data");
        a.savePollResponse = hj.tryCatch(function(a, h) {
            var l = hj.widget.pollData.id;
            hj.pageVisit.requirePageVisitId();
            hj.pageVisit.property.ready("pageInfo", function(f) {
                a.page_visit_id = f.get("pageInfo").pageVisitId;
                hj.ajax.post(hj.apiUrlBase + "/client/sites/" + hj.settings.site_id + "/polls/" + l, a, function(a) {
                    a.success && a.poll_response_id && hj.tryCatch(h, "Data")(a)
                })
            })
        }, "data");
        a.saveTesterResponse = hj.tryCatch(function(a) {
            var h = hj.widget.testersData.id;
            hj.pageVisit.requirePageVisitId();
            hj.pageVisit.property.ready("pageInfo", function(l) {
                a.page_visit_id = l.get("pageInfo").pageVisitId;
                hj.ajax.post(hj.apiUrlBase + "/client/sites/" + hj.settings.site_id + "/testers/" + h, a)
            })
        }, "data");
        return a
    }, "data")();
    hj.webSocket = hj.tryCatch(function() {
        var a, c, h, l, f, b = {},
            g = !1,
            d = !1,
            q = !1,
            p = void 0,
            k = void 0,
            n = !1,
            r = null,
            s = "";
        b.connect = hj.tryCatch(function() {
            !g && !d && (s = (hj.secure ? "wss://" : "ws://") + h() + "/api/v1/client/ws", l())
        }, "data");
        b.disconnect = hj.tryCatch(function() {
            g && (hj.log.debug("Disconnecting Web Socket.",
                "websocket"), hj.eventStream.flush(), d = g = !1, q = !0, r.close())
        }, "data");
        b.isConnected = hj.tryCatch(function() {
            if (g) {
                if (!k || 6E5 >= (new Date).getTime() - k) return !0;
                sessionStorage.removeItem("_hjRecordingEnabled");
                b.close()
            }
            return !1
        }, "data");
        b.send = hj.tryCatch(function(a) {
            k = (new Date).getTime();
            hj.log.debug("Sending data to Web Socket", "websocket", a);
            r.send(a)
        }, "data");
        b.close = hj.tryCatch(function() {
            hj.log.debug("Closing Web Socket.", "websocket");
            r.close()
        }, "data");
        l = hj.tryCatch(function() {
            q ? (hj.log.debug("Unload event triggered, don't reconnect"), !1 === n && (n = !0, setTimeout(function() {
                n = q = !1
            }, 1E3))) : (d = !0, hj.log.debug("Connecting to Web Socket [" + s + "]", "websocket"), r = new WebSocket(s), r.onopen = a, r.onclose = c, window.addEventListener("beforeunload", hj.tryCatch(b.disconnect, "Data"), !1))
        }, "data");
        f = hj.tryCatch(function() {
            g && (hj.log.debug("Pinging Web Socket.", "websocket"), r.send("ping"))
        }, "data");
        a = hj.tryCatch(function() {
            hj.log.debug("Web Socket opened.", "websocket");
            p = setInterval(f, 3E4);
            g = !0;
            d = !1;
            hj.eventStream.flush()
        }, "data");
        c = hj.tryCatch(function(a) {
            hj.log.debug("Web Socket closed.",
                "websocket");
            a.wasClean || hj.log.warn("Websocket close was unclean: " + a.code);
            g && (clearInterval(p), g = !1)
        }, "data");
        h = hj.tryCatch(function() {
            var a;
            return hj.host === hj.defaults.host ? (a = parseInt(m.get().slice(-10), 16) % 4 + 1, "ws" + a + ".hotjar.com") : hj.host
        }, "data");
        return b
    }, "data")();
    hj.ajax = function() {
        var a = {};
        a.get = hj.tryCatch(function(a, h, l) {
            h = h || hj.hq.noop;
            if ("XDomainRequest" in window && null !== window.XDomainRequest && 10 > hj.utils.ieVersion()) {
                var f = new XDomainRequest;
                f._hjDontCapture = !1 === l;
                f.open("get",
                    a);
                f.onprogress = function() {};
                f.onload = function() {
                    hj.tryCatch(h, "Data")(f.responseText && hj.json.parse(f.responseText))
                };
                f.send()
            } else hj.hq.ajax({
                url: a,
                success: hj.tryCatch(h, "Data"),
                requestAnnotator: function(a) {
                    a._hjDontCapture = !1 === l
                }
            })
        }, "data");
        a.post = hj.tryCatch(function(a, h, l, f) {
            l = l || hj.hq.noop;
            if ("XDomainRequest" in window && null !== window.XDomainRequest && 10 > hj.utils.ieVersion()) {
                var b = new XDomainRequest;
                b._hjDontCapture = !1 === f;
                b.open("post", a);
                b.onprogress = function() {};
                b.onload = function() {
                    hj.tryCatch(l,
                        "Data")(b.responseText && hj.json.parse(b.responseText))
                };
                b.send(hj.json.stringify(h))
            } else l = l || hj.hq.noop, hj.hq.ajax({
                url: a,
                type: "POST",
                data: hj.json.stringify(h),
                contentType: "application/json",
                success: hj.tryCatch(l, "Data"),
                requestAnnotator: hj.tryCatch(function(a) {
                    a._hjDontCapture = !1 === f
                }, "Data")
            })
        }, "data");
        return a
    }();
    hj.eventStream = hj.tryCatch(function() {
        var a, c, h, l, f = {},
            b = [],
            g = "",
            d = "",
            m = {},
            p = void 0;
        f.expectEvents = hj.tryCatch(function(b) {
            d != b.key && (d = b.key, a());
            b.ready("userId", function(a) {
                g = a.get("userId");
                f.flush()
            });
            b.ready("pageInfo", function(a) {
                var b = a.get("pageInfo").pageVisitId;
                m[a.key] = b;
                f.flush()
            })
        }, "data");
        f.expectPageContent = hj.tryCatch(function(a) {
            var d = a.key;
            hj.globals.ready("pageContentId", function() {
                b.push({
                    pageVisitKey: d,
                    report_content: {
                        page_content_id: hj.globals.get("pageContentId"),
                        page_content_md5: hj.globals.get("pageContentMD5")
                    }
                });
                f.flush()
            })
        });
        f.write = hj.tryCatch(function(a, d, g) {
            var c;
            if (hj.isPreview) return f;
            hj.webSocket.connect();
            if ("object" === typeof a) return hj.hq.each(a, function(a,
                b) {
                f.write(a, b, !0)
            }), f;
            c = b.pop();
            g ? c[a] = d : (c[a] = c[a] || [], c[a].push(d));
            b.push(c);
            return f
        }, "data");
        f.flush = hj.tryCatch(function() {
            var b, d;
            p && clearInterval(p);
            if (hj.webSocket.isConnected() && "" != g) {
                b = c();
                d = b.length;
                if (0 < d)
                    for (var h = g + "\n", l = 0; l < d; l++) {
                        var m = hj.json.stringify(b[l]);
                        hj.webSocket.send(h + m)
                    }
                p = setInterval(f.flush, 5E3)
            } else a()
        }, "data");
        a = hj.tryCatch(function() {
            var a = b.length,
                g = {
                    pageVisitKey: d
                };
            (0 == a || b[a - 1] != g) && b.push(g)
        }, "data");
        c = hj.tryCatch(function() {
            var d = b.length,
                g, c = [],
                f = [];
            if (0 ==
                Object.keys(m).length) return f;
            for (var l = 0; l < d; l++) g = b[l], g.pageVisitKey in m ? 1 < Object.keys(g).length && f.push(h(g)) : c.push(g);
            b = c;
            a();
            return f
        }, "data");
        h = hj.tryCatch(function(a) {
            a.page_visit_id = m[a.pageVisitKey];
            a.page_visit_key = a.pageVisitKey;
            delete a.pageVisitKey;
            "object" === typeof a.mutation && (a.mutation = l(a.mutation));
            return a
        }, "data");
        l = hj.tryCatch(function(a) {
            var b, d = "";
            if ("object" === typeof a) return hj.hq.each(a, function(g, c) {
                "object" === typeof c.c && (hj.hq.each(c.c, function(c, f) {
                    "object" === typeof f.attributes &&
                        "string" === typeof f.attributes.style && (f.attributes.style === b && f.id === d && (a[g].c[c] = null), b = f.attributes.style, d = f.id)
                }), a[g].c = a[g].c.filter(function(a) {
                    return a
                }), a[g].c.length || delete a[g].c);
                "undefined" === typeof a[g].a && ("undefined" === typeof a[g].b && "undefined" === typeof a[g].c && "undefined" === typeof a[g].d) && (a[g] = null)
            }), a.filter(function(a) {
                return a
            })
        }, "data");
        return f
    })();
    hj.property = hj.tryCatch(function() {
        var a = {};
        a.create = hj.tryCatch(function(a) {
            var h = {
                    key: hj.utils.uuid4()
                },
                l = {},
                f = {},
                b = ["pageContentId",
                    "userId"
                ];
            h.ready = hj.tryCatch(function(a, b) {
                b = hj.tryCatch(b, "Data");
                f[a] ? (hj.log.debug("Property " + a + " is ready. Calling callback() now.", "property", b), b(h)) : (hj.log.debug("Property " + a + " is not ready. Saving callback().", "property", b), l[a] ? l[a].push({
                    callback: b,
                    executed: !1
                }) : l[a] = [{
                    callback: b,
                    executed: !1
                }])
            }, "data");
            h.set = hj.tryCatch(function(g, d) {
                0 <= b.indexOf(g) && !a && hj.globals.set(g, d);
                hj.log.debug("Setting properties." + g + " to " + d, "property");
                f[g] = d;
                "object" === typeof l[g] && hj.hq.each(l[g], function(a,
                    b) {
                    b.executed || (hj.log.debug("Calling " + g + " callback.", "property"), b.callback(h), b.executed = !0)
                })
            }, "data");
            h.get = hj.tryCatch(function(a) {
                return f[a]
            }, "data");
            return h
        }, "data");
        hj.globals = a.create(!0);
        return a
    }, "data")();
    hj.event = hj.tryCatch(function() {
        var a = {},
            c = [],
            h = {},
            l;
        a.listen = hj.tryCatch(function(a, b) {
            c.unshift({
                eventIds: a,
                callback: hj.tryCatch(b, "Data")
            });
            l()
        }, "data");
        a.signal = hj.tryCatch(function(a, b) {
            "undefined" === typeof b ? hj.log.debug('Event signalled: "' + a + '".', "event") : hj.log.debug('Event signalled: "' +
                a + '". Data: "' + hj.json.stringify(b) + '".', "event");
            h[a] = "undefined" === typeof b ? !0 : b;
            l()
        }, "data");
        l = hj.tryCatch(function() {
            var a, b, g, d;
            for (b in h)
                if (h.hasOwnProperty(b))
                    for (a = c.length - 1; 0 <= a; a -= 1) d = c[a], g = hj.hq.indexOf(b, d.eventIds), -1 !== g && (hj.log.debug('Event triggered: "' + b + '".', "event"), d.callback(h[b]), delete h[b])
        }, "data");
        return a
    }, "data")()
}, "data")();
hj.tryCatch(function() {
    hj.remoteCookieJar = hj.tryCatch(function() {
        function m(a) {
            (a.origin || a.originalEvent.origin) == b && hj.json.tryParse(a.data, function(a) {
                (0, h[a.messageId])(a);
                delete h[a.messageId]
            })
        }

        function a(a, c) {
            var p;
            f || (window.addEventListener ? window.addEventListener("message", m, !1) : window.attachEvent("onmessage", m));
            c && (p = l++, h[p] = c, a.messageId = p);
            a = hj.json.stringify(a);
            window.hjBootstrap.varsLoaded ? g.contentWindow.postMessage(a, b) : hj.event.listen(["varsLoaded"], function() {
                g.contentWindow.postMessage(a,
                    b)
            })
        }
        var c = {},
            h = {},
            l = 0,
            f = !1,
            b = "https://" + hj.varsHost.replace(/:$/, ""),
            g = window.hjBootstrap.varsJar;
        c.get = hj.tryCatch(function(b, g) {
            a({
                action: "_hjGet",
                key: b
            }, function(a) {
                g(a.value)
            })
        });
        c.set = hj.tryCatch(function(b, g, c) {
            a({
                action: "_hjSet",
                key: b,
                value: g,
                expiresDays: c || 365
            })
        });
        return c
    }, "remoteCookieJar")()
}, "remoteCookieJar")();
hj.tryCatch(function() {
    hj.loader.registerModule("IntegrationsModule", function() {
        var m = {};
        hj.integrations = hj.tryCatch(function() {
            var a = {};
            a.optimizely = function() {
                function a(b) {
                    "applied" === b.name && l()
                }

                function h() {
                    var a = [],
                        c, f, k, h, l;
                    b = {};
                    g && "get" in g && (h = g.get("state"), l = g.get("data"), a = h.getActiveExperimentIds(), a.forEach(function(a) {
                        f = l.experiments[a].name || a;
                        c = h.getVariationMap()[a];
                        k = c.name || c.id;
                        b[f] = k
                    }))
                }

                function l() {
                    h();
                    var a = hj,
                        g = [],
                        c;
                    for (c in b) g.push(c + "/" + b[c]);
                    a("tagRecording", g)
                }
                var f = {},
                    b = {},
                    g = window.optimizely;
                f.setup = function() {
                    g = window.optimizely || [];
                    g.push({
                        type: "addListener",
                        filter: {
                            name: "campaignDecided"
                        },
                        handler: a
                    });
                    l()
                };
                return f
            }();
            return a
        }, "integrations")();
        m.run = hj.tryCatch(function() {
            hj.settings.integrations && (hj.settings.integrations.optimizely && hj.settings.integrations.optimizely.tag_recordings) && hj.integrations.optimizely.setup()
        });
        return m
    }(), !1)
}, "integrations")();
hj.tryCatch(function() {
    hj.notification = function() {
        function m() {
            hj.hq("#" + c).removeClass(c + "_active");
            setTimeout(function() {
                hj.hq("#" + c).remove()
            }, 350)
        }
        var a = {},
            c = "_hj-f5b2a1eb-9b07_hotjar_notification",
            h = '                    <style type="text/css">                        #' + c + ", #" + c + ' * {                            font-family: "Open Sans", Helvetica, Arial, sans-serif, Tahoma !important;                        }                                                #' + c + " {                            transition-duration: .3s;                            opacity: 0;                            transform: scale(.9);                        }                                                #" +
            c + "." + c + "_active {                            opacity: 1;                            transform: scale(1);                        }                                                #" + c + " {                                background: #263345;                                border-radius: 2px;                                position: fixed;                                z-index: 2147483646;                                top: 20px;                                left: 20px;                                width: 400px;                                padding: 25px;                                -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.3);                                -moz-box-shadow:    0 2px 4px 0 rgba(0,0,0,.3);                                box-shadow:         0 2px 4px 0 rgba(0,0,0,.3);                        }                                                #" +
            c + " ." + c + "_status {                            float: left;                            margin: 0 20px 0 0;                            border-radius: 50%;                            width: 50px;                            height: 50px;                            -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.3);                            -moz-box-shadow:    0 2px 4px 0 rgba(0,0,0,.3);                            box-shadow:         0 2px 4px 0 rgba(0,0,0,.3);                        }                                                #" +
            c + " ." + c + "_status_good {                            background: url(//<%= hjStaticHost %>/static/client/modules/assets/checkmark@2x.png)                                             no-repeat 52% 53% #3ACC40;                            background-size: 25px 18px;                        }                                                #" + c + " ." + c + "_status_bad {                            background: url(//<%= hjStaticHost %>/static/client/modules/assets/attention@2x.png)                                             no-repeat center center #EA4031;                            background-size: 6px 30px;                        }                                                #" +
            c + " ." + c + "_status {                            float: left;                        }                                                                        #" + c + " ." + c + "_content {                            float: left;                            color: #dedede;                            font-size: 13px;                            width: 78%;                            min-height: 50px;                            vertical-align: middle;                        }                                                #" +
            c + " ." + c + "_title {                            color: white;                            font-size: 16px;                            font-weight: bold;                            margin: 0 0 4px 0;                            display: inline-block                        }                                                ." + c + "_close {                            position: absolute;                            top: 15px;                            right: 15px;                            font-size: 22px;                            color: white;                            cursor: pointer;                            line-height: 11px;                        }                                                _hj-f5b2a1eb-9b07_clear {                            clear: both;                        }                                            </style>",
            l = '                    <div id="' + c + '">                        <div class="' + c + '_close">&times;</div>                        <% if (status) { %>                            <div class="' + c + "_status                             " + c + '_status_<%= status %>"></div>                        <% } %>                        <div class="' + c + '_content">                            <% if (title) { %>                                <span class="' + c + '_title"><%= title %></span>                            <% } %>                            <% if (message) { %>                                <br /><%= message %>                            <% } %>                        </div>                        <div class="_hj-f5b2a1eb-9b07_clear" />                    </div>                ';
        a.show = function(a, b, g) {
            a = hj.rendering.renderTemplate(h + l, {
                title: a,
                message: b,
                status: g || "good",
                hjStaticHost: new hj.rendering.TrustedString(hj.staticHost)
            });
            hj.rendering.addToDom(c, a);
            hj.hq("." + c + "_close").on("click", m);
            setTimeout(function() {
                hj.hq("#" + c).addClass(c + "_active")
            }, 1)
        };
        return a
    }()
}, "notifications")();
hj.tryCatch(function() {
    function m(a, h) {
        var l = /(#|@|&|~|=|>|`|'|:|"|!|;|,|\?|\%|\}|\{|\.|\*|\+|\||\[|\]|\(|\)|\/|\^|\$)/g,
            f = h.ignoreUUIDClasses ? /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/ : {
                test: function() {
                    return !1
                }
            },
            b = hj.tryCatch(function(a) {
                var b = void 0 === a.attr("data-hj-ignore-attributes"),
                    c, f, h, l;
                h = function(a, b) {
                    f = hj.hq(b);
                    for (c = 0; c < f.length; c++)
                        if (f[c] === a[0]) return c;
                    return 0
                };
                if (b) {
                    b = d(a.attr("id"));
                    l = d(a.attr("name"));
                    if (b) return "0:#" + b;
                    if (l) return b = '*[name="' + l + '"]', h(a,
                        b) + ":" + b
                }
                b = g(a);
                return h(a, b) + ":" + b
            }, "common"),
            g = hj.tryCatch(function(a, b) {
                var c = void 0 === a.attr("data-hj-ignore-attributes"),
                    f;
                "undefined" === typeof b && (b = "");
                if (a.is("html")) return "html" + b;
                f = a.get(0).nodeName.toLowerCase().replace(h.disallowedTagNameCharactersRE, "");
                if (c) {
                    if (c = d(a.attr("id"))) return f + "#" + c + b;
                    if ("body" !== f || !h.ignoreBodyClasses)(c = d(a.attr("class"))) && (f += "." + c.split(/[\s\n]+/).join("."))
                }
                return g(a.parent(), ">" + f + b)
            }, "common"),
            d = function(a) {
                var b = [];
                a = hj.hq.trim((a || "").replace(/\s\s+/g,
                    " "));
                if ("undefined" === typeof a || "" === a || -1 < a.indexOf("yui_") || !isNaN(a.charAt(0))) return !1;
                a = a.replace(l, "\\$1");
                a.split(/\s/g).forEach(function(a) {
                    (b.length < h.maxClassesAllowed || 0 === h.maxClassesAllowed) && (!hj.hq.inArray(a, h.ignoreClassList) && !f.test(a) && "" !== a) && b.push(a)
                });
                return b.join(" ")
            };
        return b(a)
    }
    var a = [];
    hj.selector = function(c) {
        var h = [{
            ignoreClassList: [],
            ignoreBodyClasses: !1,
            ignoreUUIDClasses: !1,
            maxClassesAllowed: 0,
            disallowedTagNameCharactersRE: /[^a-zA-Z0-9]/g
        }, {
            ignoreClassList: ["over",
                "hover", "active", "selected", "scrolled"
            ],
            ignoreBodyClasses: !0,
            ignoreUUIDClasses: !0,
            maxClassesAllowed: 5,
            disallowedTagNameCharactersRE: /[^a-zA-Z0-9]/g
        }, {
            ignoreClassList: ["over", "hover", "active", "selected", "scrolled"],
            ignoreBodyClasses: !0,
            ignoreUUIDClasses: !0,
            maxClassesAllowed: 5,
            disallowedTagNameCharactersRE: /[^a-zA-Z0-9-_]/g
        }];
        c = c || 0;
        a[c] || (a[c] = {
            get: function(a) {
                return m(a, h[c])
            }
        });
        return a[c]
    }
})();
hj.tryCatch(function() {
    hj.loader.registerModule("Command", function() {
        function m() {
            l.push = function() {
                var b;
                for (b = 0; b < arguments.length; b += 1) this[this.length] = arguments[b];
                a();
                return this.length
            }
        }

        function a() {
            var g = Array.prototype.slice.call(l.shift()),
                d = h[g[0]],
                c = g.slice(1);
            hj.log.debug("Processing command: " + g.join(", "), "command");
            hj.hq.isFunction(d) ? hj.optOut && !(0 <= b.indexOf(g[0])) ? hj.log.debug('Command "' + g[0] + '" blocked due to opt-out', "command") : hj.tryCatch(d, "command")(c) : hj.log.debug('Unknown command: "' +
                g[0] + '"', "command");
            0 < l.length && hj.tryCatch(a)()
        }
        var c = {},
            h = {},
            l = window.hj.q,
            f = !1,
            b = ["stateChange", "trigger", "ready"];
        h.vpv = function(a) {
            a = a[0];
            !hj.optOut && (hj.includedInSample && a) && (hj.log.debug('Sending virtual page view for URL "' + location.protocol + "//" + location.hostname + a + '"', "command"), hj.pageVisit.track(location.protocol + "//" + location.hostname + a))
        };
        h.stateChange = function(a) {
            a = a ? hj.url.getUrlFromString(a[0]) : window.location.href;
            hj.log.debug('Changing state to URL "' + a + '"', "command");
            hj.currentUrl &&
                hj.currentUrl != a && hj._init.reinit(a)
        };
        h.formSubmitSuccessful = function() {
            hj.forms.cmdFormSubmitSuccessful()
        };
        h.formSubmitFailed = function() {
            hj.forms.cmdFormSubmitFailed()
        };
        h.tagRecording = function(a) {
            a[0] && hj.behaviorData.tagRecording(a[0])
        };
        h.trigger = function(a) {
            a[0] && hj.event.signal("trigger:" + a[0])
        };
        h._xhr = function() {};
        h.ready = function(a) {
            a.forEach(function(a) {
                a()
            })
        };
        c.run = function() {
            hj.command = this
        };
        c.activate = function() {
            f || (f = !0, m(), 0 < l.length && a())
        };
        hj.initialPageVisitSent && c.activate();
        return c
    }(), !0)
}, "command")();
hj.tryCatch(function() {
    hj.loader.registerModule("DeferredPageContentModule", function() {
        function m(a) {
            var c = hj.apiUrlBase + "/sites/" + hj.settings.site_id + "/deferred-page-content/" + a,
                h = hj.url.getParameter("hjDelay"),
                l = h ? h : 1E3;
            hj.ajax.get(c + "/is-empty", function(f) {
                f.is_empty && (hj.log.debug("Deferred page content is empty: " + f.is_empty, "DeferredPageContent"), setTimeout(hj.tryCatch(function() {
                        hj.currentDeferredPageContentId === a && hj.ajax.post(c, {
                            url: location.href,
                            content: hj.html.getPageContent()
                        })
                    }, "dpc"),
                    l))
            })
        }
        return {
            run: function(a) {
                hj.hq.each(hj.settings.deferred_page_contents || [], function(c, h) {
                    hj.targeting.onMatch(h.targeting, function() {
                        hj.currentDeferredPageContentId = h.id;
                        m(h.id);
                        return !1
                    }, a)
                })
            }
        }
    }(), !1)
}, "deferredpagecontent")();
hj.tryCatch(function() {
    hj.loader.registerModule("BehaviorData", function() {
        var m = {},
            a = !1,
            c = !1,
            h, l, f, b;
        h = function() {
            var b, d, f, h, k, l, m, s, w, u, t = {},
                v = 0;
            t.enableRecording = hj.tryCatch(function() {
                a = !0;
                m.listen();
                h.listen();
                l.listen();
                k.listen();
                w.listen();
                u.listen();
                d.listen();
                f.listen()
            }, "behavior-data");
            t.enableHeatmap = hj.tryCatch(function(a) {
                c = !0;
                l.listen();
                k.listen();
                s.listen();
                d.listen();
                v = a || 0
            }, "behavior-data");
            t.disableHeatmap = hj.tryCatch(function() {
                c = !1
            }, "behavior-data");
            b = hj.tryCatch(function() {
                return c ||
                    a
            }, "behavior-data");
            k = hj.tryCatch(function() {
                var d = {},
                    c = !1;
                d.listen = hj.tryCatch(function() {
                    c || (hj.log.debug("Setting up mouse click listeners.", "events"), hj.hq(document).on("mousedown", d.send), c = !0)
                }, "behavior-data");
                d.send = hj.tryCatch(function(d) {
                    if (b()) {
                        var c = hj.selector(v).get(hj.hq(d.target)),
                            f = [],
                            k;
                        "target" in d && ("pageX" in d && "pageY" in d && void 0 !== c) && (k = hj.hq(d.target).offset(), f.left = d.pageX - k.left, f.top = d.pageY - k.top, d = {
                                offset_x: f.left,
                                offset_y: f.top,
                                selector: c
                            }, a && (d.time = hj.time.getNow()),
                            hj.eventStream.write("mouse_click", d, !1).flush())
                    }
                }, "behavior-data");
                return d
            }, "behavior-data")();
            l = hj.tryCatch(function() {
                var d = {},
                    f = !1,
                    k = 0,
                    h = 0,
                    l = !1,
                    m = 0,
                    n = 0,
                    p = null;
                d.listen = hj.tryCatch(function() {
                    f || (hj.log.debug("Setting up mouse move listeners.", "events"), hj.hq(document).on("mousemove", d.update), setInterval(d.send, 100), f = !0)
                }, "behavior-data");
                d.update = hj.tryCatch(function(a) {
                    var b, d;
                    k = a.clientX;
                    h = a.clientY;
                    b = hj.hq(document.elementFromPoint(k, h));
                    if (b[0] && (d = b.offset())) m = a.pageX - parseInt(d.left,
                        10), n = a.pageY - parseInt(d.top, 10), p = hj.selector(v).get(b), l = !0
                }, "behavior-data");
                d.send = hj.tryCatch(function() {
                    b() && l && (a && hj.eventStream.write("mouse_move", {
                        time: hj.time.getNow(),
                        x: k,
                        y: h
                    }), c && hj.eventStream.write("relative_mouse_move", {
                        offset_x: m,
                        offset_y: n,
                        selector: p
                    }), l = !1)
                }, "behavior-data");
                return d
            }, "behavior-data")();
            d = hj.tryCatch(function() {
                var d = {},
                    c = !1;
                d.listen = hj.tryCatch(function() {
                    c || (hj.log.debug("Setting up frame mouse click listeners.", "events"), d.send(), c = !0)
                }, "behavior-data.frameMouseClicks.listen");
                d.send = hj.tryCatch(function() {
                    if (b()) {
                        var d = hj.hq("iframe"),
                            c = !1,
                            f = location.protocol + "//" + hj.hostname + (location.port ? ":" + location.port : ""),
                            k = hj.utils.isFirefox() ? document : window;
                        if (d.length) {
                            var h = function() {
                                "notIE" === hj.utils.ieVersion() && hj.hq(window).focus();
                                c = !1
                            };
                            [].forEach.call(d, function(a) {
                                if (-1 !== a.src.indexOf(f)) hj.hq(a.contentWindow).on("mousedown", function(b) {
                                    l(a, b)
                                });
                                else hj.hq(a).on("mouseover", function() {
                                    c = a
                                });
                                hj.hq(a).on("mouseout", h)
                            });
                            hj.hq(k).on("blur", function() {
                                c && l(c)
                            });
                            var l =
                                function(b, d) {
                                    var c = hj.hq(b),
                                        g = hj.selector(v).get(c),
                                        f = [];
                                    g && (d ? (f.left = d.pageX, f.top = d.pageY) : (f.left = c.width() / 2, f.top = c.height() / 2), c = {
                                        offset_x: f.left,
                                        offset_y: f.top,
                                        selector: g
                                    }, a && (c.time = hj.time.getNow()), hj.eventStream.write("mouse_click", c, !1).flush())
                                }
                        }
                    }
                }, "behavior-data.frameMouseClicks.send");
                return d
            }, "behavior-data.frameMouseClicks")();
            s = hj.tryCatch(function() {
                var a = {},
                    b = !1,
                    d = 0;
                a.listen = hj.tryCatch(function() {
                    b || (hj.log.debug("Setting up scroll reach listeners.", "events"), hj.hq(window).on("scroll resize",
                        a.send), b = !0)
                }, "behavior-data.scrollReach.listen");
                a.send = hj.tryCatch(function() {
                    if (c) {
                        var a = hj.ui.getBottomAsPercentage();
                        a > d && (d = a, hj.eventStream.write("scroll_reach", {
                            max_bottom: d
                        }, !0))
                    }
                }, "behavior-data.scrollReach.send");
                return a
            }, "behavior-data.scrollReach")();
            m = hj.tryCatch(function() {
                var b = {},
                    d = !1,
                    c = !1;
                b.listen = hj.tryCatch(function() {
                    d || (hj.log.debug("Setting up scroll listeners.", "events"), hj.hq(window).on("scroll", b.update), setInterval(b.send, 100), 0 !== hj.ui.getScrollPosition().top && b.update(),
                        d = !0)
                }, "behavior-data.scroll.listen");
                b.update = hj.tryCatch(function() {
                    c = !0
                }, "behavior-data.scroll.update");
                b.send = hj.tryCatch(function() {
                    a && c && (hj.eventStream.write("scroll", {
                        time: hj.time.getNow(),
                        y: hj.ui.getScrollPosition().top
                    }), c = !1)
                }, "behavior-data.scroll.send");
                return b
            }, "behavior-data.scroll")();
            u = hj.tryCatch(function() {
                var b = {},
                    d = !1,
                    c;
                b.listen = hj.tryCatch(function() {
                    d || (hj.log.debug("Setting up screen size change listeners.", "events"), c = hj.ui.getWindowSize(), setInterval(b.checkResize, 1E3),
                        b.checkResize(), d = !0)
                }, "behavior-data.viewportResize.listen");
                b.checkResize = hj.tryCatch(function() {
                    var a = hj.ui.getWindowSize();
                    if (a.width !== c.width || a.height !== c.height) c = a, b.send()
                }, "behavior-data.viewportResize.checkResize");
                b.send = hj.tryCatch(function() {
                    a && hj.eventStream.write("viewport_resize", {
                        time: hj.time.getNow(),
                        w: c.width,
                        h: c.height
                    }).flush()
                }, "behavior-data.viewportResize.send");
                return b
            }, "behavior-data.viewportResize")();
            h = hj.tryCatch(function() {
                var b = {},
                    d = !1,
                    c = !1,
                    g = !1,
                    f = [];
                b.listen = hj.tryCatch(function() {
                    d ||
                        (hj.log.debug("Setting up key press listeners.", "events"), hj.hq(document).on("input", "input", b.update), hj.hq(document).on("blur", "input", b.send), hj.hq(document).on("input", "textarea", b.update), hj.hq(document).on("blur", "textarea", b.send), d = !0)
                }, "behavior-data.keyPress.listen");
                b.update = hj.tryCatch(function(a) {
                    var b = hj.hq(a.target),
                        d = b.val();
                    g |= !1 === hj.settings.recording_capture_keystrokes;
                    g |= b.is("input[type=password]");
                    g |= !isNaN(parseInt(d, 10)) && 12 < d.length;
                    g |= "undefined" !== typeof b.attr("data-hj-masked");
                    for (var k = b[0].parentNode; k && !g;) k.attributes && k.attributes["data-hj-masked"] && (g = !0), k = k.parentNode;
                    f.push({
                        time: hj.time.getNow(),
                        selector: hj.selector().get(b),
                        text: d,
                        type: a.target.type
                    });
                    c = !0
                }, "behavior-data.keyPress.update");
                var k = function() {
                    var a = hj.tryCatch(function() {
                            return Array(17).join("*")
                        }, "Masker.textHandler"),
                        b = hj.tryCatch(function() {
                            return Array(17).join("1")
                        }, "Masker.textHandler"),
                        d = hj.tryCatch(function(a) {
                            return (new Date).toISOString().substring(0, a ? 16 : 10).replace(/\d/g, "1")
                        }, "Masker.getLocalDateStr"),
                        c = hj.tryCatch(function() {
                            return d(!1)
                        }, "Masker.dateHandler"),
                        g = hj.tryCatch(function() {
                            return d(!0)
                        }, "Masker.datetimeHandler"),
                        f = hj.tryCatch(function() {
                            return "11:11"
                        }, "Masker.timeHandler"),
                        k = hj.tryCatch(function() {
                            return "1111-11"
                        }, "Masker.monthHandler"),
                        h = hj.tryCatch(function() {
                            return "1111-W11"
                        }, "Masker.weekHandler"),
                        l = {
                            number: b,
                            date: c,
                            datetime: g,
                            "datetime-local": g,
                            time: f,
                            month: k,
                            week: h
                        };
                    return {
                        getMaskedText: function(b) {
                            return l[b] ? l[b]() : a()
                        }
                    }
                }();
                b.send = hj.tryCatch(function() {
                    if (a && c) {
                        if (g) {
                            var b =
                                f[0];
                            f = [b];
                            f[0].text = k.getMaskedText(b.type)
                        }
                        hj.hq.each(f, function(a, b) {
                            delete b.type
                        });
                        hj.eventStream.write("key_press", f, !0).flush();
                        g = c = !1;
                        f = []
                    }
                }, "behavior-data.keyPress.send");
                return b
            }, "behavior-data.keyPress")();
            w = hj.tryCatch(function() {
                var b = {},
                    d = !1;
                b.listen = hj.tryCatch(function() {
                    d || (hj.log.debug("Setting up select change listeners.", "events"), hj.hq(document).on("change", "select", b.send), d = !0)
                }, "behavior-data.selectChange.listen");
                b.send = hj.tryCatch(function(b) {
                    if (a) {
                        var d = hj.hq(b.target);
                        b = hj.selector().get(d);
                        d = d.val();
                        hj.eventStream.write("select_change", {
                            value: d,
                            selector: b,
                            time: hj.time.getNow()
                        }, !0).flush()
                    }
                }, "behavior-data.selectChange.send");
                return b
            }, "behavior-data")();
            f = hj.tryCatch(function() {
                var b = {},
                    d = !1;
                b.listen = hj.tryCatch(function() {
                    d || (hj.log.debug("Setting up input choice change listeners.", "events"), hj.hq(document).on("change", "input[type=checkbox], input[type=radio]", b.send), d = !0)
                }, "behavior-data.inputChoiceChange.listen");
                b.send = hj.tryCatch(function(b) {
                    if (a) {
                        var d =
                            hj.hq(b.target);
                        b = hj.selector().get(d);
                        d = d.is(":checked");
                        hj.eventStream.write("input_choice_change", {
                            value: d,
                            selector: b,
                            time: hj.time.getNow()
                        }, !0).flush()
                    }
                }, "behavior-data.inputChoiceChange.send");
                return b
            }, "behavior-data.inputChoiceChange")();
            return t
        }();
        l = hj.tryCatch(function() {
            var a = {
                active: !1
            };
            a.setup = hj.tryCatch(function(a) {
                    hj.pageVisit.requirePageVisitId();
                    hj.eventStream.write("heatmap_helo", {
                        heatmap_id: a.id,
                        max_bottom: hj.ui.getBottomAsPercentage()
                    }, !1);
                    h.enableHeatmap(a.selector_version)
                },
                "behavior-data.heatmap.setup");
            return a
        }, "behavior-data.heatmap")();
        f = hj.tryCatch(function() {
            var c = {
                autoTagsToProcess: [],
                tagsToProcess: [],
                active: !1
            };
            c.start = hj.tryCatch(function() {
                var d, f = hj.time.getNow();
                a = !0;
                sessionStorage.setItem("_hjRecordingEnabled", !0);
                hj.pageVisit.requirePageVisitId();
                d = hj.pageVisit.property.get("visitInfo");
                hj.eventStream.write({
                    recording_helo: {
                        playback_version: 3,
                        script_context_id: hj.scriptContextId,
                        start_time: f,
                        page_visit_info: {
                            page_url: d.pageUrl,
                            url_hash: d.urlHash,
                            window_width: d.windowWidth,
                            window_height: d.windowHeight,
                            user_agent: d.userAgent,
                            site_id: d.siteId
                        }
                    }
                }).flush();
                hj.eventStream.expectPageContent(hj.pageVisit.property);
                h.enableRecording();
                c.active = !0;
                c.tagsToProcess.length && (hj.eventStream.write("tag_recording", c.tagsToProcess, !0).flush(), c.tagsToProcess = []);
                c.autoTagsToProcess.length && (hj.eventStream.write("autotag_recording", c.autoTagsToProcess, !0).flush(), c.autoTagsToProcess = []);
                hj.pageVisit.property.ready("pageInfo", function(a) {
                    b || c.initializeTreeMirror(a)
                })
            }, "behavior-data.recording.start");
            c.sendPageContent = function(a, b) {
                a.ready("pageInfo", function(a) {
                    var d = a.get("pageInfo"),
                        c = hj.md5(b);
                    a = [];
                    var g = hj.apiUrlBase + "/sites/" + hj.settings.site_id + "/url-md5/" + d.urlMD5;
                    hj.features.haveFeature("site_assets") && (a = hj.dom.getCSSURLs().map(function(a) {
                        return {
                            url: a,
                            type: "css"
                        }
                    }));
                    hj.ajax.post(g + "/content-md5/" + c, {
                        assets: a,
                        page_id: d.pageId,
                        page_visit_id: d.pageVisitId
                    }, hj.tryCatch(function(a) {
                        a.exists ? (hj.globals.set("pageContentMD5", c), hj.globals.set("pageContentId", a.page_content_id)) : hj.ajax.post(g +
                            "/content", {
                                content: b,
                                content_md5: c,
                                page_id: d.pageId,
                                page_url: d.url
                            }, hj.tryCatch(function(a) {
                                hj.globals.set("pageContentMD5", c);
                                hj.globals.set("pageContentId", a.page_content_id)
                            }, "behavior-data.sendPageContent.setPageContentId"))
                    }, "behavior-data.sendPageContent.getPageContentId"))
                })
            };
            c.initializeTreeMirror = hj.tryCatch(function(a) {
                var f = {};
                if ("undefined" !== typeof window.MutationObserver || "undefined" !== typeof window.WebKitMutationObserver || "undefined" !== typeof window.MozMutationObserver) b = new hj.treeMirrorClient(document, {
                    initialize: function(b, f) {
                        c.sendPageContent(a, hj.json.stringify({
                            docType: hj.html.getPageDoctype(),
                            rootId: b,
                            children: f
                        }))
                    },
                    applyChanged: function(a, b, d, c) {
                        f = {};
                        if (a.length || b.length || d.length || c.length) f.time = hj.time.getNow(), a.length && (f.a = a), b.length && (f.b = b), d.length && (f.c = d), c.length && (f.d = c), hj.debug.emit("mutation", f), hj.eventStream.write("mutation", f, !1)
                    }
                })
            }, "behavior-data.initializeTreeMirror");
            return c
        }, "behavior-data.recording")();
        hj.behaviorData = hj.tryCatch(function() {
            return {
                tagRecording: function(a,
                    b) {
                    a = a || [];
                    var c = [],
                        h, k;
                    for (h = 0; h < a.length; h += 1) k = hj.hq.trim(a[h]), k.length && c.push({
                        name: k,
                        time: hj.time.getNow()
                    });
                    c.length && (f.active ? hj.eventStream.write(b ? "autotag_recording" : "tag_recording", c, !0).flush() : b ? f.autoTagsToProcess = f.autoTagsToProcess.concat(c) : f.tagsToProcess = f.tagsToProcess.concat(c))
                },
                startRecording: function() {
                    hj.notification.show("Recording session", "Hotjar is recording this session.", "good");
                    f.start()
                },
                setupHeatmap: function(a) {
                    hj.notification.show("Collecting Heatmap data", "Hotjar is tracking this session.",
                        "good");
                    l.setup(a)
                }
            }
        }, "behavior-data.behaviorData")();
        m.run = hj.tryCatch(function(b) {
            if (!hj.isPreview && (hj.includedInSample && !(10 > hj.utils.ieVersion())) && (hj.hq.each(hj.hq("[data-hj-ignore-attributes]"), function(a, b) {
                    hj.hq(b).find("*").attr("data-hj-ignore-attributes", "")
                }), hj.hq.each(hj.settings.heatmaps || [], function(a, d) {
                    hj.targeting.onMatch(d.targeting, function() {
                        l.setup(d)
                    }, b)
                }), f.active = !1, hj.settings.record && !(11 > hj.utils.ieVersion()))) {
                var d = !hj.features.haveFeature("always_on_rec_value") ||
                    Math.random() <= hj.settings.rec_value,
                    c = "undefined" === typeof hj.settings.record_targeting_rules || !hj.settings.record_targeting_rules.length;
                a = !!sessionStorage.getItem("_hjRecordingEnabled");
                hj.log.debug("_hjRecordingEnabled is set to " + a, "recordings");
                hj.log.debug("Rec Value sampling at " + hj.settings.rec_value + "; Recording Sampled? " + d);
                if (a || c && d) f.start();
                else if (d) hj.targeting.onMatch(hj.settings.record_targeting_rules, function() {
                    f.start()
                }, b)
            }
        }, "behavior-data.run");
        hj.disableHeatmap = h.disableHeatmap;
        return m
    }(), !1)
}, "behavior-data")();
hj.tryCatch(function() {
    hj.loader.registerModule("UserBehavior", function() {
        var m = {},
            a, c, h;
        hj.userBehavior = hj.tryCatch(function() {
            return {
                send: function(a) {
                    hj.behaviorData.tagRecording([a], !0)
                },
                setupEvents: function() {
                    hj.features.haveFeature("user_behavior") && (a.listen(), c.listen(), h.listen())
                }
            }
        }, "user-behavior.userBehavior")();
        a = function() {
            var a, c;

            function b() {
                k = 0;
                c = a = null
            }

            function g(d) {
                if (!(document.body.clientWidth && d.clientX > document.body.clientWidth || document.body.clientHeight && d.clientY > document.body.clientHeight)) {
                    k++;
                    n && clearInterval(n);
                    n = setTimeout(b, m.time);
                    var g = d.clientY,
                        h = Math.abs(d.clientX - a),
                        g = Math.abs(g - c);
                    Math.sqrt(Math.pow(h, 2) + Math.pow(g, 2)) > m.distance && b();
                    a = d.clientX;
                    c = d.clientY;
                    k === m.clicks && hj.userBehavior.send("rageclick")
                }
            }
            var d = {},
                h = {
                    desktop: {
                        time: 500,
                        distance: 200,
                        clicks: 6
                    },
                    mobile: {
                        time: 500,
                        distance: 200,
                        clicks: 6
                    },
                    tablet: {
                        time: 500,
                        distance: 200,
                        clicks: 6
                    }
                },
                m, k = 0;
            c = a = null;
            var n;
            d.listen = function() {
                m = h[hj.deviceDetection.getDevice()];
                hj.hq(document).on("mousedown.user_behavior_rageclick", g)
            };
            d.disable =
                function() {
                    hj.hq(document).on("mousedown.user_behavior_rageclick")
                };
            return d
        }();
        c = function() {
            function a() {
                h = 0;
                m = !1
            }

            function c() {
                k && clearInterval(k);
                k = setTimeout(a, d.time);
                var b = hj.hq(window).scrollTop(),
                    f = 0 > n - b ? "down" : "up";
                m && f !== m && (h++, h === d.directionChanges && hj.userBehavior.send("wildscroll"));
                m = f;
                n = b
            }
            var b = {},
                g = {
                    desktop: {
                        time: 1E3,
                        directionChanges: 4
                    },
                    mobile: {
                        time: 1E3,
                        directionChanges: 4
                    },
                    tablet: {
                        time: 1E3,
                        directionChanges: 4
                    }
                },
                d, h = 0,
                m = !1,
                k, n = 0;
            b.listen = function() {
                d = g[hj.deviceDetection.getDevice()];
                hj.hq(document).on("scroll.user_behavior_wildscroll", c)
            };
            b.disable = function() {
                hj.hq(document).on("scroll.user_behavior_wildscroll")
            };
            return b
        }();
        h = function() {
            function a() {
                h = 0;
                m.x = !1;
                m.y = !1
            }

            function c(b) {
                b = {
                    x: b.clientX,
                    y: b.clientY
                };
                var f = {
                    x: b.x < n.x ? "left" : b.x === n.x ? m.x : "right",
                    y: b.y < n.y ? "up" : b.y === n.y ? m.y : "down"
                };
                if (m.x && f.x !== m.x || m.y && f.y !== m.y) {
                    var g;
                    var t = b.y;
                    r.x && r.y ? (g = Math.abs(b.x - r.x), t = Math.abs(t - r.y), g = Math.sqrt(Math.pow(g, 2) + Math.pow(t, 2)) <= d.distance) : g = !0;
                    g ? (h++, h === d.directionChanges ?
                        hj.userBehavior.send("madmouse") : (k && clearInterval(k), k = setTimeout(a, d.time))) : a();
                    r = b
                }
                m = f;
                n = b
            }
            var b = {},
                g = {
                    desktop: {
                        time: 100,
                        distance: 200,
                        directionChanges: 5
                    },
                    mobile: {
                        time: 100,
                        distance: 200,
                        directionChanges: 5
                    },
                    tablet: {
                        time: 100,
                        distance: 200,
                        directionChanges: 5
                    }
                },
                d, h = 0,
                m = {
                    x: !1,
                    y: !1
                },
                k, n = {
                    x: 0,
                    y: 0
                },
                r = {
                    x: 0,
                    y: 0
                };
            b.listen = function() {
                d = g[hj.deviceDetection.getDevice()];
                hj.hq(document).on("mousemove.user_behavior_madmouse", c)
            };
            b.disable = function() {
                hj.hq(document).on("scroll.user_behavior_madmouse")
            };
            return b
        }();
        m.run = hj.tryCatch(function(a) {
            hjSiteSettings.record && hj.userBehavior.setupEvents(a)
        }, "user-behavior.run");
        return m
    }(), !1)
}, "user-behavior")();
hj.tryCatch(function() {
    hj.widget = function() {
        var m = {},
            a = "collapsed",
            c = ["ar", "fa", "he"],
            h, l = [],
            f = !1;
        m.ctrl = void 0;
        m.data = void 0;
        m.model = {};
        m.activeLanguageDirection = "ltr";
        m.widgetAttributePrefix = "_hj-f5b2a1eb-9b07";
        m.ctaLinks = {
            feedback: "https://incoming.hotjar.com/signup?utm_source=client&utm_medium=incoming_feedback&utm_campaign=insights",
            polls: "https://www.hotjar.com/?utm_source=client&utm_medium=poll&utm_campaign=insights",
            surveys: "https://www.hotjar.com/?utm_source=client&utm_medium=survey&utm_campaign=insights",
            testers: "https://www.hotjar.com/?utm_source=client&utm_medium=recruiter&utm_campaign=insights"
        };
        m.setActiveWidget = function(a) {
            !m.activeWidget || a.type != m.activeWidget.type || a.id != m.activeWidget.id ? m.removeActiveWidget(function() {
                a.runCallback();
                m.activeWidget = a
            }) : a && (a.runCallback(), m.activeWidget = a)
        };
        m.removeActiveWidget = function(a) {
            a = a || function() {};
            m.activeWidget ? (m.activeWidget.removeCallback(a), delete m.activeWidget) : a()
        };
        m._ = function(a) {
            if (!h) throw Error("No active language has been set yet.");
            return h[a]
        };
        m.emptyMatchingWidgets = function() {
            l = [];
            hj.rendering.clearAllAbandonEvents();
            f = !1
        };
        m.addMatchingWidget = function(a, c, d, h, m) {
            f ? h() : l.push({
                type: a,
                id: c,
                created: d,
                runCallback: h,
                removeCallback: m
            })
        };
        m.runLatestMatchingWidget = function() {
            var a;
            l.forEach(function(c) {
                if (!a || a.created < c.created) a = c
            });
            a ? m.setActiveWidget(a) : m.removeActiveWidget();
            f = !0
        };
        m.setLanguage = hj.tryCatch(function(a) {
            var f = {
                af: {
                    age: "Ouderdom",
                    city: "Stad",
                    close: "Sluit",
                    email: "ePos",
                    female: "Vroulik",
                    full_name: "Volle naam",
                    male: "Manlik",
                    phone_number: "Telefoon nommer",
                    please_type_here: "Tik asb. hier ...",
                    powered_by_hotjar: "aangedryf deur Hotjar",
                    reply: "Antwoort",
                    send: "Stuur",
                    sent: "Gestuur",
                    sign_me_up: "Skryf my in!"
                },
                ar: {
                    age: "\u0627\u0644\u0639\u0645\u0631",
                    change: "\u062a\u063a\u064a\u064a\u0631",
                    city: "\u0627\u0644\u0645\u062f\u064a\u0646\u0629",
                    close: "\u0623\u063a\u0644\u0642",
                    dislike: "\u063a\u064a\u0631 \u0631\u0627\u0636\u064a",
                    email: "\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0623\u0644\u0643\u062a\u0631\u0648\u0646\u064a",
                    feedback: "\u0631\u0623\u064a",
                    female: "\u0627\u0646\u062b\u0649",
                    full_name: "\u0627\u0644\u0623\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644",
                    hate: "\u0633\u064a\u0621",
                    highlight_element: "\u062d\u062f\u062f \u0639\u0646\u0635\u0631 \u0645\u0646 \u0627\u0644\u0635\u0641\u062d\u0629 \u0644\u062a\u062e\u0635\u064a\u0635\u0647 \u0628\u0631\u0623\u064a",
                    include_screenshot: "\u0623\u0631\u0641\u0642 \u0635\u0648\u0631\u0629 \u0627\u0644\u062a\u0642\u0627\u0637 \u0627\u0644\u0634\u0627\u0634\u0629",
                    like: "\u0623\u0639\u062c\u0628\u0646\u064a",
                    love: "\u0623\u062d\u0628\u0628\u062a",
                    male: "\u0630\u0643\u0631",
                    neutral: "\u0639\u0627\u062f\u064a",
                    phone_number: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641",
                    please_type_here: "\u0627\u0644\u0631\u062c\u0627\u0621 \u0627\u0644\u0643\u062a\u0627\u0628\u0629 \u0647\u0646\u0627...",
                    powered_by_hotjar: "\u0628\u0625\u062f\u0627\u0631\u0629 Hotjar",
                    reply: "\u0631\u062f",
                    send: "\u0623\u0631\u0633\u0650\u0644",
                    sent: "\u0623\u064f\u0631\u0633\u0650\u0644\u062a",
                    skip: "\u062a\u062c\u0627\u0648\u0632",
                    sign_me_up: "\u0633\u062c\u0651\u0644\u0646\u064a!",
                    select_the_area: "\u0627\u062e\u062a\u0631 \u0639\u0646\u0635\u0631 \u0645\u0646 \u0627\u0644\u0635\u0641\u062d\u0629",
                    tap_again_to_confirm: "\u0627\u0646\u0642\u0631 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649 \u0644\u0644\u062a\u0623\u0643\u064a\u062f",
                    tell_us_about_your_experience: "\u0623\u062e\u0628\u0631\u0646\u0627 \u0639\u0646 \u062a\u062c\u0631\u0628\u062a\u0643..."
                },
                bg: {
                    age: "\u0412\u044a\u0437\u0440\u0430\u0441\u0442",
                    city: "\u0413\u0440\u0430\u0434",
                    close: "\u0417\u0430\u0442\u0432\u043e\u0440\u0438",
                    email: "E-mail",
                    female: "\u0416\u0435\u043d\u0430",
                    full_name: "\u0418\u043c\u0435 \u0438 \u0444\u0430\u043c\u0438\u043b\u0438\u044f",
                    male: "\u041c\u044a\u0436",
                    phone_number: "\u0422\u0435\u043b\u0435\u0444\u043e\u043d",
                    please_type_here: "\u041c\u043e\u043b\u044f \u043d\u0430\u043f\u0438\u0448\u0435\u0442\u0435 \u0412\u0430\u0448\u0438\u044f \u043e\u0442\u0433\u043e\u0432\u043e\u0440 \u0442\u0443\u043a...",
                    powered_by_hotjar: "\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u043d\u0430 Hotjar",
                    reply: "\u041e\u0442\u0433\u043e\u0432\u043e\u0440",
                    send: "\u0418\u0437\u043f\u0440\u0430\u0442\u0438",
                    sent: "\u0418\u0437\u043f\u0440\u0430\u0442\u0435\u043d\u043e",
                    sign_me_up: "\u0417\u0430\u043f\u0438\u0448\u0438 \u043c\u0435!"
                },
                ca: {
                    age: "Edat",
                    city: "Ciutat",
                    close: "Tanca",
                    email: "E-mail",
                    female: "Dona",
                    full_name: "Nom complet",
                    male: "Home",
                    phone_number: "Tel\u00e8fon",
                    please_type_here: "Introdueix aqu\u00ed...",
                    powered_by_hotjar: "Gr\u00e0cies a Hotjar",
                    reply: "Respondre",
                    send: "Envia",
                    sent: "Enviat",
                    sign_me_up: "Apunta'm-hi!"
                },
                cs: {
                    age: "V\u011bk",
                    change: "Zm\u011bnit",
                    city: "M\u011bsto",
                    close: "Zav\u0159\u00edt",
                    dislike: "Nel\u00edb\u00ed se mi",
                    email: "E-mail",
                    feedback: "Zp\u011btn\u00e1 vazba",
                    female: "\u017dena",
                    full_name: "Cel\u00e9 jm\u00e9no",
                    hate: "Nesn\u00e1\u0161\u00edm",
                    highlight_element: "Zv\u00fdraznit prvek na str\u00e1nce k poskytnut\u00ed konkr\u00e9tn\u00ed zp\u011btn\u00e9 vazby.",
                    include_screenshot: "Zahrnout sn\u00edmek obrazovky",
                    like: "M\u00e1m r\u00e1d",
                    love: "Miluji",
                    male: "Mu\u017e",
                    neutral: "Neutr\u00e1ln\u00ed",
                    phone_number: "Telefon",
                    please_type_here: " Zde pros\u00edm odpov\u011bzte...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "Odpov\u011bd\u011bt",
                    send: "Odeslat",
                    sent: "Odesl\u00e1no",
                    skip: "P\u0159esko\u010dit",
                    sign_me_up: "Zaregistruj m\u011b!",
                    select_the_area: "Vybrat prvky na str\u00e1nce.",
                    tap_again_to_confirm: "Kliknout znova k potvrzen\u00ed.",
                    tell_us_about_your_experience: "\u0158ekn\u011bte n\u00e1m o va\u0161\u00ed zku\u0161enosti..."
                },
                da: {
                    age: "Alder",
                    change: "\u00c6ndre",
                    city: "By",
                    close: "Luk",
                    dislike: "Kan ikke lide",
                    email: "Email",
                    feedback: "Tilbagemelding",
                    female: "Kvinde",
                    full_name: "Navn",
                    hate: "Hader",
                    highlight_element: "V\u00e6lg et element p\u00e5 siden, for at give en specific tilbagemelding",
                    include_screenshot: "Inkluder et sk\u00e6rmbillede",
                    like: "Synes om",
                    love: "Elsker",
                    male: "Mand",
                    neutral: "Neutralt",
                    phone_number: "Telefonnummer",
                    please_type_here: "Skriv venligst her...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "Svar",
                    send: "Sende",
                    sent: "Sendt",
                    skip: "Spring over",
                    sign_me_up: "Deltag!",
                    select_the_area: "V\u00e6lg et element p\u00e5 siden.",
                    tap_again_to_confirm: "Klilk igen for at bekr\u00e6fte.",
                    tell_us_about_your_experience: "Fort\u00e6l os om din oplevelse..."
                },
                de: {
                    age: "Alter",
                    change: "\u00c4ndern",
                    city: "Stadt",
                    close: "Schlie\u00dfen",
                    dislike: "Gef\u00e4llt mir nicht",
                    email: "E-Mail",
                    feedback: "Feedback",
                    female: "Weiblich",
                    full_name: "Name",
                    hate: "Gef\u00e4llt mir gar nicht",
                    highlight_element: "Markiere ein Element auf der Seite, um Feedback zu geben.",
                    include_screenshot: "F\u00fcge einen Screenshot bei.",
                    like: "Gef\u00e4llt mir",
                    love: "Gef\u00e4llt mir sehr",
                    male: "M\u00e4nnlich",
                    neutral: "Neutral",
                    phone_number: "Telefonnummer",
                    please_type_here: "Bitte hier schreiben...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "Antworten",
                    send: "Senden",
                    sent: "Gesendet",
                    skip: "\u00dcberspringen",
                    sign_me_up: "Jetzt anmelden!",
                    select_the_area: "W\u00e4hle ein Element auf der Seite aus.",
                    tap_again_to_confirm: "Nochmal dr\u00fccken zur Best\u00e4tigung.",
                    tell_us_about_your_experience: "Teilen Sie uns Ihre Erfahrungen mit.."
                },
                el: {
                    age: "\u0397\u03bb\u03b9\u03ba\u03af\u03b1",
                    city: "\u03a0\u03cc\u03bb\u03b7",
                    close: "\u039a\u03bb\u03b5\u03af\u03c3\u03b9\u03bc\u03bf",
                    email: "Email",
                    female: "\u0393\u03c5\u03bd\u03b1\u03af\u03ba\u03b1",
                    full_name: "\u039f\u03bd\u03bf\u03bc\u03b1\u03c4\u03b5\u03c0\u03ce\u03bd\u03c5\u03bc\u03bf",
                    male: "\u0386\u03bd\u03b4\u03c1\u03b1\u03c2",
                    phone_number: "\u03a4\u03b7\u03bb\u03ad\u03c6\u03c9\u03bd\u03bf",
                    please_type_here: "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03c0\u03bb\u03b7\u03ba\u03c4\u03c1\u03bf\u03bb\u03bf\u03b3\u03ae\u03c3\u03c4\u03b5 \u03b5\u03b4\u03ce...",
                    powered_by_hotjar: "\u03c5\u03bb\u03bf\u03c0\u03bf\u03b9\u03ae\u03b8\u03b7\u03ba\u03b5 \u03b1\u03c0\u03cc \u03c4\u03bf Hotjar",
                    reply: "\u0391\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7",
                    send: "\u0391\u03c0\u03bf\u03c3\u03c4\u03bf\u03bb\u03ae",
                    sent: "\u03a3\u03c4\u03ac\u03bb\u03b8\u03b7\u03ba\u03b5",
                    sign_me_up: "\u0395\u03b3\u03b3\u03c1\u03b1\u03c6\u03ae!"
                },
                en: {
                    age: "Age",
                    change: "Change",
                    city: "City",
                    close: "Close",
                    dislike: "Dislike",
                    email: "Email",
                    feedback: "Feedback",
                    female: "Female",
                    full_name: "Full name",
                    hate: "Hate",
                    highlight_element: "Highlight an element on the page to give specific feedback.",
                    include_screenshot: "Include a screenshot.",
                    like: "Like",
                    love: "Love",
                    male: "Male",
                    neutral: "Neutral",
                    phone_number: "Phone number",
                    please_type_here: "Please type here...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "Reply",
                    send: "Send",
                    sent: "Sent",
                    skip: "Skip",
                    sign_me_up: "Sign me up!",
                    select_the_area: "Select an element on the page.",
                    tap_again_to_confirm: "Tap again to confirm.",
                    tell_us_about_your_experience: "Tell us about your experience..."
                },
                es: {
                    age: "Edad",
                    change: "Cambiar",
                    city: "Ciudad",
                    close: "Cerrar",
                    dislike: "No me gusta",
                    email: "Email",
                    feedback: "Sugerencias",
                    female: "Mujer",
                    full_name: "Nombre completo",
                    hate: "Lo odio",
                    highlight_element: "Resalte un elemento de la p\u00e1gina para proporcionar informaci\u00f3n espec\u00edfica.",
                    include_screenshot: "Incluye una captura de pantalla.",
                    like: "Me gusta",
                    love: "Lo amo",
                    male: "Hombre",
                    neutral: "Neutral",
                    phone_number: "Tel\u00e9fono",
                    please_type_here: "Por favor, escriba aqu\u00ed...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "Responder",
                    send: "Enviar",
                    sent: "Enviado",
                    skip: "Omitir",
                    sign_me_up: "\u00a1Inscr\u00edbeme!",
                    select_the_area: "Selecciona un elemento de la p\u00e1gina.",
                    tap_again_to_confirm: "Click de nuevo para confirmar.",
                    tell_us_about_your_experience: "Cuentanos tu experiencia..."
                },
                et: {
                    age: "Vanus",
                    change: "Muuda",
                    city: "Linn",
                    close: "Sulge",
                    dislike: "Ei meeldi",
                    email: "Email",
                    feedback: "Feedback",
                    female: "Naine",
                    full_name: "Nimi",
                    hate: "Vihkan",
                    highlight_element: "Too esile m\u00f5ni konkreetne element, mille kohta soovid anda tagasisidet.",
                    include_screenshot: "Saada ekraanit\u00f5mmis.",
                    like: "Meeldib",
                    love: "Armastan",
                    male: "Mees",
                    neutral: "Neutraalne",
                    phone_number: "Tel. nr.",
                    please_type_here: "Palun sisestage siia...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "Vasta",
                    send: "Saada",
                    sent: "Saadetud",
                    skip: "J\u00e4ta vahele",
                    sign_me_up: "Registreeru!",
                    select_the_area: "Vali element lehek\u00fcljel.",
                    tap_again_to_confirm: "Kliki uuesti kinnitamiseks.",
                    tell_us_about_your_experience: "Vertel ons over je ervaring..."
                },
                fa: {
                    age: "\u0633\u0646",
                    change: "\u062a\u063a\u06cc\u06cc\u0631",
                    city: "\u0634\u0647\u0631",
                    close: "\u0628\u0633\u062a\u0646",
                    dislike: "\u0646\u0627\u0631\u0627\u0636\u06cc",
                    email: "\u067e\u0633\u062a \u0627\u0644\u06a9\u062a\u0631\u0648\u0646\u06cc\u06a9",
                    feedback: "\u0646\u0638\u0631\u0633\u0646\u062c\u06cc",
                    female: "\u0632\u0646",
                    full_name: "\u0646\u0627\u0645 \u06a9\u0627\u0645\u0644",
                    hate: "\u062e\u06cc\u0644\u06cc \u0646\u0627\u0631\u0627\u0636\u06cc",
                    highlight_element: "\u0628\u0631\u0627\u06cc \u0646\u0638\u0631\u062f\u0647\u06cc \u06cc\u06a9 \u0628\u062e\u0634 \u0627\u0632 \u0635\u0641\u062d\u0647 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",
                    include_screenshot: "\u06cc\u06a9 \u0639\u06a9\u0633 \u0636\u0645\u06cc\u0645\u0647 \u06a9\u0646\u06cc\u062f",
                    like: "\u0631\u0627\u0636\u06cc",
                    love: "\u062e\u06cc\u0644\u06cc \u0631\u0627\u0636\u06cc",
                    male: "\u0645\u0631\u062f",
                    neutral: "\u0645\u0639\u0645\u0648\u0644\u06cc",
                    phone_number: "\u0634\u0645\u0627\u0631\u0647 \u062a\u0644\u0641\u0646",
                    please_type_here: "\u0644\u0637\u0641\u0627 \u0627\u06cc\u0646\u062c\u0627 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f",
                    powered_by_hotjar: "\u0646\u06cc\u0631\u0648 \u06af\u0631\u0641\u062a\u0647 \u0627\u0632 Hotjar",
                    reply: "\u067e\u0627\u0633\u062e",
                    send: "\u0628\u0641\u0631\u0633\u062a",
                    sent: "\u0641\u0631\u0633\u062a\u0627\u062f\u0647 \u0634\u062f",
                    skip: "\u0631\u062f \u06a9\u0631\u062f\u0646",
                    sign_me_up: "\u062b\u0628\u062a\u200c\u0646\u0627\u0645",
                    select_the_area: "\u06cc\u06a9 \u0628\u062e\u0634 \u0635\u0641\u062d\u0647 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",
                    tap_again_to_confirm: "\u0628\u0631\u0627\u06cc \u062a\u0627\u06cc\u06cc\u062f \u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u0632\u0646\u06cc\u062f",
                    tell_us_about_your_experience: "\u062a\u062c\u0631\u0628\u0647 \u062e\u0648\u062f \u0631\u0627 \u0628\u0627 \u0645\u0627 \u062f\u0631\u0645\u06cc\u0627\u0646 \u0628\u06af\u0630\u0627\u0631\u06cc\u062f"
                },
                fi: {
                    age: "Ik\u00e4",
                    change: "Muuta",
                    city: "Kaupunki",
                    close: "Sulje",
                    dislike: "En pit\u00e4nyt",
                    email: "S\u00e4hk\u00f6posti",
                    feedback: "Palaute",
                    female: "Nainen",
                    full_name: "Koko nimi",
                    hate: "Inhosin",
                    highlight_element: "Korosta tietty\u00e4 elementti\u00e4 antaaksesi palautetta juuri siit\u00e4.",
                    include_screenshot: "Sis\u00e4llyt\u00e4 kuvakaappaus.",
                    like: "Pidin",
                    love: "Rakastin",
                    male: "Mies",
                    neutral: "Neutraali",
                    phone_number: "Puhelinnumero",
                    please_type_here: "Kirjoita t\u00e4h\u00e4n",
                    powered_by_hotjar: "Alustana toimii Hotjar",
                    reply: "Vastaa",
                    send: "L\u00e4het\u00e4",
                    sent: "L\u00e4hetetty",
                    skip: "Ohita",
                    sign_me_up: "Rekister\u00f6i minut!",
                    select_the_area: "Valitse jokin elementti sivulta.",
                    tap_again_to_confirm: "Klikkaa uudelleen varmistaaksesi valinnan.",
                    tell_us_about_your_experience: "Kerro meille kokemuksestasi..."
                },
                fr: {
                    age: "\u00c2ge",
                    change: "Changer",
                    city: "Ville",
                    close: "Fermer",
                    dislike: "N'aime pas",
                    email: "E-mail",
                    feedback: "Votre avis",
                    female: "Femme",
                    full_name: "Nom et pr\u00e9nom",
                    hate: "D\u00e9teste",
                    highlight_element: "S\u00e9lectionnez un \u00e9l\u00e9ment sur la page pour donner un retour sp\u00e9cifique.",
                    include_screenshot: "Ajoutez une capture d'\u00e9cran.",
                    like: "Aime",
                    love: "Adore",
                    male: "Homme",
                    neutral: "Neutre",
                    phone_number: "Num\u00e9ro de t\u00e9l\u00e9phone",
                    please_type_here: "Ecrivez ici",
                    powered_by_hotjar: "Propuls\u00e9 par Hotjar",
                    reply: "R\u00e9pondre",
                    send: "Envoyer",
                    sent: "Envoy\u00e9",
                    skip: "Passer",
                    sign_me_up: "M'inscrire !",
                    select_the_area: "S\u00e9lectionnez un \u00e9l\u00e9ment sur la page.",
                    tap_again_to_confirm: "Appuyez \u00e0 nouveau pour confirmer.",
                    tell_us_about_your_experience: "Racontez votre exp\u00e9rience..."
                },
                he: {
                    age: "\u05d2\u05d9\u05dc",
                    change: "\u05e9\u05e0\u05d4",
                    city: "\u05e2\u05d9\u05e8",
                    close: "\u05e1\u05d2\u05d5\u05e8",
                    dislike: "\u05dc\u05d0 \u05d0\u05d5\u05d4\u05d1",
                    email: "\u05d3\u05d5\u05d0\u05e8 \u05d0\u05dc\u05e7\u05d8\u05e8\u05d5\u05e0\u05d9",
                    feedback: "\u05d7\u05d5\u05d5\u05ea \u05d3\u05e2\u05ea",
                    female: "\u05e0\u05e7\u05d1\u05d4",
                    full_name: "\u05e9\u05dd \u05de\u05dc\u05d0",
                    hate: "\u05e9\u05d5\u05e0\u05d0",
                    highlight_element: "\u05e1\u05de\u05df \u05d1\u05d3\u05e3 \u05d0\u05ea \u05d4\u05d7\u05dc\u05e7 \u05e9\u05e2\u05dc\u05d9\u05d5 \u05ea\u05e8\u05e6\u05d4 \u05dc\u05ea\u05ea \u05d7\u05d5\u05d5\u05ea \u05d3\u05e2\u05ea",
                    include_screenshot: "\u05e6\u05e8\u05e3 \u05e6\u05d9\u05dc\u05d5\u05dd \u05de\u05e1\u05da",
                    like: "\u05de\u05d7\u05d1\u05d1",
                    love: "\u05d0\u05d5\u05d4\u05d1",
                    male: "\u05d6\u05db\u05e8",
                    neutral: "\u05d1\u05e1\u05d3\u05e8",
                    phone_number: "\u05d8\u05dc\u05e4\u05d5\u05df",
                    please_type_here: "\u05d4\u05e7\u05dc\u05d3 \u05db\u05d0\u05df...",
                    powered_by_hotjar: "\u05e4\u05d5\u05e2\u05dc \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea Hotjar",
                    reply: "\u05ea\u05d2\u05d5\u05d1\u05d4",
                    send: "\u05e9\u05dc\u05d7",
                    sent: "\u05e0\u05e9\u05dc\u05d7",
                    skip: "\u05d3\u05dc\u05d2",
                    sign_me_up: "\u05d4\u05e8\u05e9\u05dd \u05e2\u05db\u05e9\u05d9\u05d5!",
                    select_the_area: "\u05d1\u05d7\u05e8 \u05d7\u05dc\u05e7 \u05d1\u05d3\u05e3",
                    tap_again_to_confirm: "\u05dc\u05d7\u05e5 \u05e9\u05d5\u05d1 \u05dc\u05d0\u05d9\u05e9\u05d5\u05e8",
                    tell_us_about_your_experience: "\u05e1\u05e4\u05e8 \u05dc\u05e0\u05d5 \u05e2\u05dc \u05d4\u05d7\u05d5\u05d5\u05d9\u05d4 \u05e9\u05dc\u05da..."
                },
                hr: {
                    age: "Dob",
                    change: "Promijeni",
                    city: "Mjesto",
                    close: "Zatvori",
                    dislike: "Ne svi\u0111a mi se",
                    email: "Email",
                    feedback: "Povratna informacija",
                    female: "\u017densko",
                    full_name: "Ime i prezime",
                    hate: "Izrazito mi se ne svi\u0111a",
                    highlight_element: "Ozna\u010dite element na stranici kako bi ostavili specifi\u010dnu povratnu informaciju.",
                    include_screenshot: "Dodajte snimku zaslona.",
                    like: "Svi\u0111a mi se",
                    love: "Obo\u017eavam",
                    male: "Mu\u0161ko",
                    neutral: "Neutralan/na sam",
                    phone_number: "Telefon",
                    please_type_here: "Pi\u0161ite ovdje",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "Odgovor",
                    send: "Po\u0161alji",
                    sent: "Poslano",
                    skip: "Presko\u010di",
                    sign_me_up: "Prijavi me!",
                    select_the_area: "Ozna\u010dite element na stranici.",
                    tap_again_to_confirm: "Kliknite ponovno za potvrdu.",
                    tell_us_about_your_experience: "Recite nam vi\u0161e o svom iskustvu..."
                },
                hu: {
                    age: "Kor",
                    change: "V\u00e1ltoztat\u00e1s",
                    city: "Telep\u00fcl\u00e9s",
                    close: "Bez\u00e1r\u00e1s",
                    dislike: "Nem kedvelem",
                    email: "E-mail",
                    feedback: "Visszajelz\u00e9s",
                    female: "N\u0151",
                    full_name: "Teljes n\u00e9v",
                    hate: "Ut\u00e1lom",
                    highlight_element: "Jel\u00f6lje ki azt az elemet az oldalon, amir\u0151l visszajelz\u00e9st szeretne k\u00fcldeni.",
                    include_screenshot: "K\u00e9perny\u0151k\u00e9p csatol\u00e1sa.",
                    like: "Kedvelem",
                    love: "Im\u00e1dom",
                    male: "F\u00e9rfi",
                    neutral: "K\u00f6z\u00f6mb\u00f6s",
                    phone_number: "Telefon",
                    please_type_here: "Ide \u00edrhat...",
                    powered_by_hotjar: "k\u00e9sz\u00edtette a Hotjar",
                    reply: "V\u00e1lasz",
                    send: "K\u00fcld\u00e9s",
                    sent: "Elk\u00fcldve",
                    skip: "\u00c1tug\u00e1s",
                    sign_me_up: "Regisztr\u00e1lok!",
                    select_the_area: "Jel\u00f6lj\u00f6n ki egy elemet az oldalon.",
                    tap_again_to_confirm: "Kattintson \u00fajb\u00f3l a meger\u0151s\u00edt\u00e9shez.",
                    tell_us_about_your_experience: "Oszd meg vel\u00fcnk v\u00e9lem\u00e9nyedet..."
                },
                id: {
                    age: "Umur",
                    change: "Ubah",
                    city: "Kota",
                    close: "Tutup",
                    dislike: "Tidak suka",
                    email: "Email",
                    feedback: "Umpan balik",
                    female: "Wanita",
                    full_name: "Nama lengkap",
                    highlight_element: "Sebutkan salah satu elemen dalam laman untuk memberikan umpan balik yang spesifik.",
                    hate: "Benci",
                    include_screenshot: "Tambahkan screenshot.",
                    like: "Suka",
                    love: "Sangat suka",
                    male: "Pria",
                    neutral: "Netral",
                    phone_number: "Nomor telpon",
                    please_type_here: "Silahkan ketik disini...",
                    powered_by_hotjar: "dipersembahkan oleh Hotjar",
                    reply: "Balasan",
                    send: "Kirim",
                    sent: "Terkirim",
                    skip: "Lewai",
                    select_the_area: "Pilih sebuah elemen dalam laman.",
                    sign_me_up: "Daftarkan saya!",
                    tap_again_to_confirm: "Tap lagi untuk mengonfirmasi.",
                    tell_us_about_your_experience: "Sampaikan penilaian Anda..."
                },
                it: {
                    age: "Et\u00e0",
                    change: "Cambia",
                    city: "Citt\u00e0",
                    close: "Chiudi",
                    dislike: "Non mi piace",
                    email: "Email",
                    feedback: "Impressioni",
                    female: "Femmina",
                    full_name: "Nome e cognome",
                    hate: "Odio",
                    highlight_element: "Evidenzia un elemento della pagina su cui vuoi dare una specifica impressione.",
                    include_screenshot: "Allega uno screenshot",
                    like: "Mi piace",
                    love: "Amo",
                    male: "Maschio",
                    neutral: "Indifferente",
                    phone_number: "Telefono",
                    please_type_here: "Scrivi qui...",
                    powered_by_hotjar: "offerto da Hotjar",
                    reply: "Rispondi",
                    send: "Invia",
                    sent: "Inviato",
                    skip: "Salta",
                    select_the_area: "Seleziona un elemento della pagina",
                    sign_me_up: "Iscrivimi!",
                    tap_again_to_confirm: "Clicca ancora per confermare",
                    tell_us_about_your_experience: "Raccontaci la tua esperienza..."
                },
                ja: {
                    age: "\u5e74\u9f62",
                    change: "\u5909\u66f4",
                    city: "\u5e02\u533a\u753a\u6751",
                    close: "\u9589\u3058\u308b",
                    dislike: "\u975e\u5e38\u306b\u60aa\u3044",
                    email: "\u96fb\u5b50\u30e1\u30fc\u30eb",
                    feedback: "\u610f\u898b",
                    female: "\u5973\u6027",
                    full_name: "\u59d3\u540d",
                    hate: "\u60aa\u3044",
                    highlight_element: "\u5177\u4f53\u7684\u306a\u610f\u898b\u3092\u805e\u304b\u305b\u3066\u304f\u3060\u3055\u3044\u3002\u30da\u30fc\u30b8\u4e0a\u90e8\u306e\u8a72\u5f53\u7b87\u6240\u3092\u3001\u5206\u304b\u308b\u3088\u3046\u306b\u30de\u30fc\u30af\u3057\u3066\u304f\u3060\u3055\u3044",
                    include_screenshot: "\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u52a0\u3048\u308b",
                    like: "\u826f\u3044",
                    love: "\u975e\u5e38\u306b\u826f\u3044",
                    male: "\u7537\u6027",
                    neutral: "\u3069\u3061\u3089\u3067\u3082\u306a\u3044",
                    phone_number: "\u96fb\u8a71\u756a\u53f7",
                    please_type_here: "\u3053\u3061\u3089\u306b\u3054\u8a18\u5165\u304f\u3060\u3055\u3044...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "\u8fd4\u4fe1",
                    send: "\u9001\u4fe1",
                    sent: "\u9001\u4fe1\u5b8c\u4e86\u3057\u307e\u3057\u305f",
                    skip: "\u30b9\u30ad\u30c3\u30d7",
                    sign_me_up: "\u767b\u9332\u3057\u307e\u3059",
                    select_the_area: "\u30da\u30fc\u30b8\u306e\u8a72\u5f53\u7b87\u6240\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044",
                    tap_again_to_confirm: "\u78ba\u8a8d\u306e\u305f\u3081\u3001\u3082\u3046\u4e00\u5ea6\u62bc\u3057\u3066\u304f\u3060\u3055\u3044",
                    tell_us_about_your_experience: "\u611f\u60f3\u3092\u805e\u304b\u305b\u3066\u304f\u3060\u3055\u3044"
                },
                ko: {
                    age: "\ub098\uc774",
                    city: "\ub3c4\uc2dc",
                    close: "\ub2eb\uae30",
                    email: "\uc774\uba54\uc77c",
                    female: "\uc5ec\uc790",
                    full_name: "\uc774\ub984",
                    male: "\ub0a8\uc790",
                    phone_number: "\uc804\ud654\ubc88\ud638",
                    please_type_here: "\uc5ec\uae30\uc5d0 \uc785\ub825\ud574\uc8fc\uc138\uc694",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "\ub2f5\ubcc0\ud558\uae30",
                    send: "\ubcf4\ub0b4\uae30",
                    sent: "\ubcf4\ub0c8\uc2b5\ub2c8\ub2e4",
                    sign_me_up: "\ucc38\uc5ec\ud558\uae30!"
                },
                lt: {
                    age: "Am\u017eius",
                    change: "Keisti",
                    city: "Miestas",
                    close: "U\u017edaryti",
                    dislike: "Nepatinka",
                    email: "El. pa\u0161tas",
                    feedback: "Atsiliepimai",
                    female: "Moteris",
                    full_name: "Pilnas vardas",
                    hate: "Neken\u010diu",
                    highlight_element: "I\u0161skirkite element\u0105, kur\u012f norite i\u0161si\u0173sti.",
                    include_screenshot: "Prid\u0117ti ekrano kopij\u0105.",
                    like: "Patinka",
                    love: "Puiku",
                    male: "Vyras",
                    neutral: "Be nuomon\u0117s",
                    phone_number: "Telefonas",
                    please_type_here: "Ra\u0161yti \u010dia...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "Atsakyti",
                    send: "Si\u0173sti",
                    sent: "I\u0161siusta",
                    skip: "Praleisti",
                    sign_me_up: "Registruotis",
                    select_the_area: "Pa\u017eym\u0117kite laukel\u012f puslapyje.",
                    tap_again_to_confirm: "Spauskite dar kart\u0105 patvirtinimui.",
                    tell_us_about_your_experience: "Para\u0161ykite atsiliepim\u0105..."
                },
                lv: {
                    age: "Vecums",
                    change: "Main\u012bt",
                    city: "Pils\u0113ta",
                    close: "Aizv\u0113rt",
                    dislike: "Nepatika",
                    email: "E-pasts",
                    feedback: "Atsauksme",
                    female: "Sieviete",
                    full_name: "Pilns v\u0101rds",
                    hate: "Ien\u012bstu",
                    highlight_element: "Iez\u012bm\u0113 elementu vai vietu, par kuru v\u0113laties sniegt koment\u0101ru.",
                    include_screenshot: "Iek\u013cauj ekr\u0101nuz\u0146\u0113mumu.",
                    like: "Patika",
                    love: "M\u012blu",
                    male: "V\u012brietis",
                    neutral: "Neitr\u0101la",
                    phone_number: "T\u0101lru\u0146a numurs",
                    please_type_here: "L\u016bdzu, ievadiet \u0161eit...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "Atbilde",
                    select_the_area: "Izv\u0113lies elementu lap\u0101.",
                    send: "Nos\u016bt\u012bt",
                    sent: "Nos\u016bt\u012bts",
                    skip: "Izlaist",
                    sign_me_up: "Pierakstiet mani!",
                    tap_again_to_confirm: "Pieskaries v\u0113lreiz, lai apstiprin\u0101tu.",
                    tell_us_about_your_experience: "Past\u0101sti mums par savu pieredzi..."
                },
                mis: {
                    age: "Starost",
                    city: "Grad",
                    close: "Zatvori",
                    email: "Email",
                    female: "\u017densko",
                    full_name: "Ime i prezime",
                    male: "Mu\u0161ko",
                    phone_number: "Telefon",
                    please_type_here: "Pi\u0161ite ovdje...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "Odgovori",
                    send: "Po\u0161alji",
                    sent: "Poslato",
                    sign_me_up: "Prijavi me!"
                },
                nb: {
                    age: "Alder",
                    change: "Endre",
                    city: "Sted",
                    close: "Lukk",
                    dislike: "Liker ikke",
                    email: "E-post",
                    feedback: "Tilbakemelding",
                    female: "Kvinne",
                    full_name: "Navn",
                    hate: "Hater",
                    highlight_element: "Velg et element p\u00e5 siden for \u00e5 gi en konkret tilbakemelding.",
                    include_screenshot: "Inkluder et skjermbilde",
                    like: "Liker",
                    love: "Elsker",
                    male: "Mann",
                    neutral: "N\u00f8ytral",
                    phone_number: "Telefon",
                    please_type_here: "Skriv her...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "Svar",
                    send: "Sende",
                    sent: "Sendt",
                    skip: "Hopp over",
                    sign_me_up: "Delta!",
                    select_the_area: "Velg et element p\u00e5 siden.",
                    tap_again_to_confirm: "Klikk igjen for \u00e5 bekrefte.",
                    tell_us_about_your_experience: "Fortell oss om din opplevelse"
                },
                nl: {
                    age: "Leeftijd",
                    change: "Veranderen",
                    city: "Plaats",
                    close: "Sluiten",
                    dislike: "Matig",
                    email: "E-mailadres",
                    feedback: "Feedback",
                    female: "Vrouw",
                    full_name: "Volledige naam",
                    hate: "Slecht",
                    highlight_element: "Markeer een element op de pagina om specifieke feedback te geven",
                    include_screenshot: "Voeg screenshot toe",
                    like: "Goed",
                    love: "Geweldig",
                    male: "Man",
                    neutral: "Neutraal",
                    phone_number: "Telefoonnummer",
                    please_type_here: "Jouw bericht...",
                    powered_by_hotjar: "ondersteund door Hotjar",
                    reply: "Reageer",
                    send: "Verstuur",
                    sent: "Verstuurd",
                    skip: "Overslaan",
                    sign_me_up: "Schrijf me in!",
                    select_the_area: "Selecteer een element op de pagina.",
                    tap_again_to_confirm: "Klik nogmaals om te bevestigen.",
                    tell_us_about_your_experience: "Vertel ons over uw ervaringen"
                },
                pl: {
                    age: "Wiek",
                    change: "Zmie\u0144",
                    city: "Miasto",
                    close: "Zamknij",
                    dislike: "\u0179le",
                    email: "Email",
                    feedback: "Opinia",
                    female: "Kobieta",
                    full_name: "Imi\u0119 i nazwisko",
                    hate: "Okropnie",
                    highlight_element: "Zaznacz element na stronie, aby go oceni\u0107.",
                    include_screenshot: "Do\u0142\u0105cz zrzut ekranu.",
                    like: "Dobrze",
                    love: "\u015awietnie",
                    male: "M\u0119\u017cczyzna",
                    neutral: "Neutralnie",
                    phone_number: "Numer telefonu",
                    please_type_here: "Wpisz wiadomo\u015b\u0107...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "Odpowiedz",
                    send: "Wy\u015blij",
                    sent: "Wys\u0142ano",
                    skip: "Pomi\u0144",
                    sign_me_up: "Zarejestruj mnie!",
                    select_the_area: "Zaznacz element na stronie.",
                    tap_again_to_confirm: "Kliknij ponownie, aby zatwierdzi\u0107.",
                    tell_us_about_your_experience: "Podziel si\u0119 z nami swoj\u0105 opini\u0105..."
                },
                pt: {
                    age: "Idade",
                    change: "Alterar",
                    city: "Cidade",
                    close: "Fechar",
                    dislike: "N\u00e3o gosto",
                    email: "Email",
                    feedback: "Feedback",
                    female: "Feminino",
                    full_name: "Nome completo",
                    hate: "Odeio",
                    highlight_element: "Realce um elemento na p\u00e1gina para fornecer feedback espec\u00edfico.",
                    include_screenshot: "Inclua um screenshot",
                    like: "Gosto",
                    love: "Adoro",
                    male: "Masculino",
                    neutral: "Neutro",
                    phone_number: "Telem\u00f3vel",
                    please_type_here: "Por favor, escreva aqui ...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "Responder",
                    send: "Enviar",
                    sent: "Enviado",
                    skip: "Ignorar",
                    sign_me_up: "Quero Registar-me!",
                    select_the_area: "Selecione um elemento da p\u00e1gina.",
                    tap_again_to_confirm: "Clique de novo para confirmar.",
                    tell_us_about_your_experience: "Fale-nos da sua experi\u00eancia"
                },
                pt_BR: {
                    age: "Idade",
                    change: "Trocar",
                    city: "Cidade",
                    close: "Fechar",
                    dislike: "N\u00e3o gostei",
                    email: "Email",
                    feedback: "Feedback",
                    female: "Feminino",
                    full_name: "Nome completo",
                    hate: "Odiei",
                    highlight_element: "Destaque um elemento da p\u00e1gina para dar um feedback espec\u00edfico.",
                    include_screenshot: "Incluir uma captura de tela",
                    like: "Gostei",
                    love: "Amei",
                    male: "Masculino",
                    neutral: "Neutra",
                    phone_number: "Telefone",
                    please_type_here: "Por favor, escreva aqui...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "Responder",
                    send: "Enviar",
                    sent: "Enviado",
                    skip: "Pular",
                    sign_me_up: "Inscreva-se!",
                    select_the_area: "Selecione um elemento na p\u00e1gina.",
                    tap_again_to_confirm: "Aperte novamente para confirmar.",
                    tell_us_about_your_experience: "Conte-nos sobre a sua experi\u00eancia..."
                },
                ro: {
                    age: "V\u00e2rsta",
                    change: "Schimb\u0103",
                    city: "Ora\u0219",
                    close: "\u00cenchide",
                    dislike: "Nu-mi place",
                    email: "Email",
                    feedback: "Feedback",
                    female: "Femeie",
                    full_name: "Nume complet",
                    hate: "\u00cel ur\u0103sc",
                    highlight_element: "Eviden\u021biaz\u0103 un element pe pagin\u0103 pentru a oferi feedback specific",
                    include_screenshot: "Include o captur\u0103 de ecran",
                    like: "\u00cemi place",
                    love: "\u00cel iubesc",
                    male: "B\u0103rbat",
                    neutral: "Neutru",
                    phone_number: "Telefon",
                    please_type_here: "Scrie aici...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "R\u0103spunde",
                    send: "Trimite",
                    sent: "Trimis",
                    skip: "Treci peste",
                    sign_me_up: "M\u0103 \u00eenscriu",
                    select_the_area: "Selecteaz\u0103 un element de pe pagin\u0103.",
                    tap_again_to_confirm: "Apas\u0103 din nou pentru confirmare.",
                    tell_us_about_your_experience: "Spune-ne despre experien\u021ba ta..."
                },
                ru: {
                    age: "\u0412\u043e\u0437\u0440\u0430\u0441\u0442",
                    change: "\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",
                    city: "\u0413\u043e\u0440\u043e\u0434",
                    close: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c",
                    dislike: "\u041d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",
                    email: "Email",
                    feedback: "\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c",
                    female: "\u0416\u0435\u043d\u0449\u0438\u043d\u0430",
                    full_name: "\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f",
                    hate: "\u041d\u0435\u043d\u0430\u0432\u0438\u0436\u0443",
                    highlight_element: "\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435, \u0447\u0442\u043e\u0431\u044b \u0434\u0430\u0442\u044c \u043e\u0431\u0440\u0430\u0442\u043d\u0443\u044e \u0441\u0432\u044f\u0437\u044c.",
                    include_screenshot: "\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442.",
                    like: "\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",
                    love: "\u041e\u0431\u043e\u0436\u0430\u044e",
                    male: "\u041c\u0443\u0436\u0447\u0438\u043d\u0430",
                    neutral: "\u041d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u043e",
                    phone_number: "\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",
                    please_type_here: "\u041c\u0435\u0441\u0442\u043e \u0434\u043b\u044f \u0432\u0432\u043e\u0434\u0430...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c",
                    send: "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",
                    sent: "\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e",
                    skip: "\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c",
                    sign_me_up: "\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f!",
                    select_the_area: "\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435.",
                    tap_again_to_confirm: "\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c.",
                    tell_us_about_your_experience: "\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u0432\u0430\u0448\u0438\u0445 \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u044f\u0445..."
                },
                sk: {
                    age: "Vek",
                    change: "Zmeni\u0165",
                    city: "Mesto",
                    close: "Zavrie\u0165",
                    dislike: "Nep\u00e1\u010di",
                    email: "Email",
                    feedback: "Va\u0161 n\u00e1zor",
                    female: "\u017dena",
                    full_name: "Cel\u00e9 meno",
                    hate: "Nezn\u00e1\u0161am",
                    highlight_element: "Zv\u00fdraznite element na str\u00e1nke, ktor\u00fd si prajete ohodnoti\u0165.",
                    include_screenshot: "Vr\u00e1tane screenshotu.",
                    like: "P\u00e1\u010di sa",
                    love: "Milujem",
                    male: "Mu\u017e",
                    neutral: "Neutral",
                    phone_number: "Telef\u00f3nne \u010d\u00edslo",
                    please_type_here: "Za\u010dnite p\u00edsa\u0165 tu",
                    powered_by_hotjar: "powered bz Hotjar",
                    reply: "Odpoveda\u0165",
                    send: "Posla\u0165",
                    sent: "Poslan\u00e9",
                    skip: "Presko\u010di\u0165",
                    sign_me_up: "Vytvori\u0165 konto",
                    select_the_area: "Vyberte element na str\u00e1nke.",
                    tap_again_to_confirm: "Kliknu\u0165 znova k potvrdeniu.",
                    tell_us_about_your_experience: "Nap\u00ed\u0161te n\u00e1m va\u0161u sk\u00fasenos\u0165..."
                },
                sl: {
                    age: "Starost",
                    change: "Spremeni",
                    city: "Kraj",
                    close: "Zapri",
                    dislike: "Ni mi v\u0161e\u010d",
                    email: "Email",
                    feedback: "Povratna informacija",
                    female: "\u017denska",
                    full_name: "Ime in priimek",
                    hate: "Sovra\u017eim",
                    highlight_element: "Ozna\u010di element na strani za specifi\u010dno povratno informacijo",
                    include_screenshot: "Dodaj zaslonsko sliko",
                    like: "V\u0161e\u010d mi je",
                    love: "Obo\u017eujem",
                    male: "Mo\u0161ki",
                    neutral: "Vseeno mi je",
                    phone_number: "Telefon",
                    please_type_here: "Prosimo vnesite tukaj...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "Odgovori",
                    send: "Po\u0161lji",
                    sent: "Poslano",
                    skip: "Presko\u010di",
                    sign_me_up: "Prijavi me!",
                    select_the_area: "Izberi element na strani.",
                    tap_again_to_confirm: "Klikni ponovno za potrditev.",
                    tell_us_about_your_experience: "Deli svoje mnenje z nami..."
                },
                sr: {
                    age: "Starost",
                    change: "Promeni",
                    city: "Grad",
                    close: "Zatvori",
                    dislike: "Ne svi\u0111a mi se",
                    email: "Email",
                    feedback: "Povratna informacija",
                    female: "\u017densko",
                    full_name: "Ime i prezime",
                    hate: "Ba\u0161 mi se ne svi\u0111a",
                    highlight_element: "Ozna\u010dite element na stranici ako \u017eelite da ostavite specifi\u010dnu informaciju",
                    include_screenshot: "Dodajte sliku ekrana",
                    like: "Svi\u0111a mi se",
                    love: "Obo\u017eavam",
                    male: "Mu\u0161ko",
                    neutral: "Svejedno mi je",
                    phone_number: "Telefon",
                    please_type_here: "Pi\u0161ite ovde...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "Odgovori",
                    send: "Po\u0161alji",
                    sent: "Poslato",
                    skip: "Presko\u010di",
                    sign_me_up: "Prijavi me!",
                    select_the_area: "Ozna\u010dite element na stranici.",
                    tap_again_to_confirm: "Kliknite ponovo za potvrdu.",
                    tell_us_about_your_experience: "Podelite va\u0161e mi\u0161ljenje sa nama..."
                },
                sv: {
                    age: "\u00c5lder",
                    change: "\u00c4ndra",
                    city: "Stad",
                    close: "St\u00e4ng",
                    dislike: "Ogillar",
                    email: "Email",
                    feedback: "Feedback",
                    female: "Kvinna",
                    full_name: "Namn",
                    hate: "Hatar",
                    highlight_element: "Markera ett element p\u00e5 sidan f\u00f6r att ge specifik feedback",
                    include_screenshot: "Inkludera en sk\u00e4rmdump",
                    like: "Gillar",
                    love: "\u00c4lskar",
                    male: "Man",
                    neutral: "Neutral",
                    phone_number: "Telefon",
                    please_type_here: "Skriv h\u00e4r...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "Besvara",
                    send: "Skicka",
                    sent: "Skickat",
                    skip: "Hoppa \u00f6ver",
                    sign_me_up: "Registrera mig!",
                    select_the_area: "Markera ett element p\u00e5 sidan.",
                    tap_again_to_confirm: "Clicka igen f\u00f6r att bekr\u00e4fta.",
                    tell_us_about_your_experience: "Ber\u00e4tta om din upplevelse"
                },
                sw: {
                    age: "Umri",
                    change: "Badili",
                    city: "Mji",
                    close: "Funga",
                    dislike: "Sipendi",
                    email: "Barua pepe",
                    feedback: "Mrejesho",
                    female: "Mwanamke",
                    full_name: "Jina kamili",
                    hate: "Naichukia",
                    highlight_element: "Onyesha kipengele kwenye ukurasa kutoa maoni bayana.",
                    include_screenshot: "Ambatanisha Skrinshot.",
                    like: "Naikubali",
                    love: "Naipenda",
                    male: "Mwanaume",
                    neutral: "Sijui",
                    phone_number: "Namba ya simu",
                    please_type_here: "Tafadhali andika hapa...",
                    powered_by_hotjar: "powerered bt Hotjar",
                    reply: "Jibu",
                    send: "Tuma",
                    sent: "Imetumwa",
                    skip: "Ruka",
                    sign_me_up: "Niunganishe!",
                    select_the_area: "Chagua kipengele kwenye ukurasa.",
                    tap_again_to_confirm: "Bofya tena kuthibitisha.",
                    tell_us_about_your_experience: "Tuambie kuhusu uzoefu wako..."
                },
                th: {
                    age: "\u0e2d\u0e32\u0e22\u0e38",
                    change: "\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19",
                    city: "\u0e40\u0e21\u0e37\u0e2d\u0e07",
                    close: "\u0e1b\u0e34\u0e14",
                    dislike: "\u0e44\u0e21\u0e48\u0e0a\u0e2d\u0e1a",
                    email: "\u0e2d\u0e35\u0e40\u0e21\u0e25",
                    feedback: "\u0e1f\u0e35\u0e14\u0e41\u0e1a\u0e47\u0e04",
                    female: "\u0e2b\u0e0d\u0e34\u0e07",
                    full_name: "\u0e0a\u0e37\u0e48\u0e2d-\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25",
                    hate: "\u0e40\u0e01\u0e25\u0e35\u0e22\u0e14",
                    highlight_element: "Highlight an element on the page to give specific feedback.",
                    include_screenshot: "\u0e43\u0e2a\u0e48\u0e20\u0e32\u0e1e\u0e2a\u0e01\u0e23\u0e35\u0e19\u0e0a\u0e47\u0e2d\u0e15",
                    like: "\u0e0a\u0e2d\u0e1a",
                    love: "\u0e23\u0e31\u0e01",
                    male: "\u0e0a\u0e32\u0e22",
                    neutral: "\u0e40\u0e09\u0e22\u0e46",
                    phone_number: "\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c",
                    please_type_here: "\u0e42\u0e1b\u0e23\u0e14\u0e1e\u0e34\u0e21\u0e1e\u0e4c\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48...",
                    powered_by_hotjar: "\u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19\u0e42\u0e14\u0e22 Hotjar",
                    reply: "\u0e15\u0e2d\u0e1a",
                    send: "\u0e2a\u0e48\u0e07",
                    sent: "\u0e2a\u0e48\u0e07",
                    skip: "\u0e02\u0e49\u0e32\u0e21",
                    sign_me_up: "\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19",
                    select_the_area: "\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2d\u0e07\u0e04\u0e4c\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e43\u0e19\u0e40\u0e1e\u0e08",
                    tap_again_to_confirm: "\u0e41\u0e17\u0e47\u0e1a\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19",
                    tell_us_about_your_experience: "\u0e1a\u0e2d\u0e01\u0e40\u0e23\u0e32\u0e16\u0e36\u0e07\u0e1b\u0e23\u0e30\u0e2a\u0e1a\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13"
                },
                tl: {
                    age: "Edad",
                    city: "Lunsod",
                    close: "Isara",
                    email: "E-mail",
                    female: "Babae",
                    full_name: "Buong Pangalan",
                    male: "Lalaki",
                    phone_number: "Telepono",
                    please_type_here: "Dito po magsimulang magsulat...",
                    powered_by_hotjar: "iniabot sa inyo ng Hotjar",
                    reply: "Tumugon",
                    send: "Ipadala",
                    sent: "Naipadala",
                    sign_me_up: "I-rehistro nyo ako!"
                },
                tr: {
                    age: "Ya\u015f",
                    change: "De\u011fi\u015ftir",
                    city: "\u015eehir",
                    close: "Kapat",
                    dislike: "Be\u011fenmedim",
                    email: "E-posta",
                    feedback: "Geri Bildirim",
                    female: "Kad\u0131n",
                    full_name: "\u0130sim",
                    hate: "Hi\u00e7 be\u011fenmedim",
                    highlight_element: "Geri bildirimde bulunmak istedi\u011finiz alan varsa se\u00e7iniz. Herhangi bir yere t\u0131klad\u0131ktan sonra istedi\u011finiz alan\u0131 se\u00e7ili hale getiriniz.",
                    include_screenshot: "Ekran g\u00f6r\u00fcnt\u00fcs\u00fc ekle.",
                    like: "Be\u011fendim",
                    love: "Sevdim",
                    male: "Erkek",
                    neutral: "Bir fikrim yok",
                    phone_number: "Telefon Numaran\u0131z",
                    please_type_here: "Cevab\u0131n\u0131z\u0131 buraya giriniz...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "Cevapla",
                    send: "G\u00f6nder",
                    sent: "G\u00f6nderildi",
                    skip: "Atla",
                    sign_me_up: "Kay\u0131t ol!",
                    select_the_area: "Sayfadaki bir alan\u0131 se\u00e7in.",
                    tap_again_to_confirm: "Onaylamak i\u00e7in tekrar t\u0131klay\u0131n.",
                    tell_us_about_your_experience: "Ya\u015fad\u0131\u011f\u0131n\u0131z deneyimi bizimle payla\u015f\u0131r m\u0131s\u0131n\u0131z?"
                },
                uk: {
                    age: "\u0412\u0456\u043a",
                    city: "\u041c\u0456\u0441\u0442\u043e",
                    close: "\u0417\u0430\u043a\u0440\u0438\u0442\u0438",
                    email: "Email",
                    female: "\u0416\u0456\u043d\u043a\u0430",
                    full_name: "\u041f\u043e\u0432\u043d\u0435 \u0456\u043c'\u044f",
                    male: "\u0427\u043e\u043b\u043e\u0432\u0456\u043a",
                    phone_number: "\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443",
                    please_type_here: "\u041c\u0456\u0441\u0446\u0435 \u0434\u043b\u044f \u0432\u0432\u043e\u0434\u0443...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0441\u0442\u0438",
                    send: "\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438",
                    sent: "\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u043e",
                    sign_me_up: "\u041f\u0456\u0434\u043f\u0438\u0441\u0430\u0442\u0438\u0441\u044f!"
                },
                vi: {
                    age: "Tu\u1ed5i",
                    change: "Thay \u0111\u1ed5i",
                    city: "Th\u00e0nh ph\u1ed1",
                    close: "\u0110\u00f3ng",
                    dislike: "Kh\u00f4ng th\u00edch",
                    email: "Email",
                    feedback: "Ph\u1ea3n h\u1ed3i",
                    female: "N\u1eef",
                    full_name: "T\u00ean \u0111\u1ea7y \u0111\u1ee7",
                    hate: "Gh\u00e9t",
                    highlight_element: "\u0110\u00e1nh d\u1ea5u ph\u1ea7n tr\u00ean website m\u00e0 b\u1ea1n mu\u1ed1n \u0111\u00f3ng g\u00f3p \u00fd ki\u1ebfn",
                    include_screenshot: "Th\u00eam ch\u1ee5p \u1ea3nh m\u00e0n h\u00ecnh",
                    like: "Th\u00edch",
                    love: "R\u1ea5t th\u00edch",
                    male: "Nam",
                    neutral: "Kh\u00f4ng c\u00f3 \u00fd ki\u1ebfn",
                    phone_number: "\u0110i\u1ec7n tho\u1ea1i",
                    please_type_here: "Vui l\u00f2ng nh\u1eadp n\u1ed9i dung t\u1ea1i \u0111\u00e2y...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "Tr\u1ea3 l\u1eddi",
                    send: "G\u1edfi",
                    sent: "\u0110\u00e3 g\u1edfi",
                    skip: "B\u1ecf qua",
                    sign_me_up: "\u0110\u0103ng k\u00fd!",
                    select_the_area: "Ch\u1ecdn m\u1ed9t ph\u1ea7n tr\u00ean website",
                    tap_again_to_confirm: "Ch\u1ea1m l\u1ea7n n\u1eefa \u0111\u1ec3 x\u00e1c nh\u1eadn",
                    tell_us_about_your_experience: "Chia s\u1ebb c\u1ea3m nh\u1eadn c\u1ee7a b\u1ea1n..."
                },
                zh: {
                    age: "\u5e74\u9f84",
                    change: "\u6539\u53d8",
                    city: "\u57ce\u5e02",
                    close: "\u5173\u95ed",
                    dislike: "\u4e0d\u559c\u6b22",
                    email: "\u7535\u5b50\u90ae\u7bb1",
                    feedback: "\u53cd\u9988",
                    female: "\u5973",
                    full_name: "\u59d3\u540d",
                    hate: "\u8ba8\u538c",
                    highlight_element: "\u4e3a\u7ec6\u5316\u53cd\u9988\u5185\u5bb9\uff0c\u8bf7\u9ad8\u4eae\u6807\u6ce8\u76f8\u5173\u9875\u9762\u5143\u7d20\u3002",
                    include_screenshot: "\u5305\u62ec\u622a\u5c4f",
                    like: "\u559c\u6b22",
                    love: "\u5927\u7231",
                    male: "\u7537",
                    neutral: "\u4e2d\u7acb",
                    phone_number: "\u7535\u8bdd",
                    please_type_here: "\u8bf7\u8f93\u5165...",
                    powered_by_hotjar: "\u7531Hotjar\u5448\u73b0",
                    reply: "\u56de\u590d",
                    send: "\u53d1\u9001",
                    sent: "\u5df2fa\u53d1\u9001",
                    skip: "\u8df3\u8fc7",
                    sign_me_up: "\u6211\u8981\u53c2\u52a0!",
                    select_the_area: "\u9009\u62e9\u4e00\u4e2a\u9875\u9762\u5143\u7d20",
                    tap_again_to_confirm: "\u518d\u70b9\u51fb\u4e00\u904d\uff0c\u4ece\u800c\u6700\u7ec8\u786e\u8ba4\u3002",
                    tell_us_about_your_experience: "\u8bf7\u544a\u77e5\u60a8\u7684\u4f53\u9a8c\u3002"
                },
                zh_TW: {
                    age: "\u5e74\u9f61",
                    city: "\u57ce\u5e02",
                    close: "\u95dc\u9589",
                    email: "Email",
                    female: "\u5973",
                    full_name: "\u540d\u7a31",
                    male: "\u7537",
                    phone_number: "\u96fb\u8a71",
                    please_type_here: "\u8acb\u8f38\u5165...",
                    powered_by_hotjar: "powered by Hotjar",
                    reply: "\u56de\u8986",
                    send: "\u9001\u51fa",
                    sent: "\u5df2\u9001\u51fa",
                    sign_me_up: "\u6211\u8981\u53c3\u52a0!"
                }
            };
            if (!(a in f)) throw Error('Invalid language "' + a + '"');
            h = f[a];
            hj.widget.activeLanguageDirection = -1 < c.indexOf(a) ? "rtl" : "ltr"
        }, "common");
        m.applyPhoneClasses =
            hj.tryCatch(function() {
                hj.isPreview || hj.widget.isNarrowScreen() ? hj.widget.ctrl.addClass("_hj-f5b2a1eb-9b07_widget_centered") : hj.widget.ctrl.removeClass("_hj-f5b2a1eb-9b07_widget_centered");
                hj.widget.isShortScreen() ? hj.widget.ctrl.addClass("_hj-f5b2a1eb-9b07_widget_short") : hj.widget.ctrl.removeClass("_hj-f5b2a1eb-9b07_widget_short")
            }, "common");
        m.enterFullScreen = hj.tryCatch(function() {
            var a, c;
            m.isPhoneOrTablet() && (a = hj.hq("body"), a.addClass("_hj-f5b2a1eb-9b07_position_fixed"), 0 === hj.hq("#hotjar-viewport-meta").length &&
                (c = document.createElement("meta"), c.id = "hotjar-viewport-meta", c.name = "viewport", c.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no", document.getElementsByTagName("head")[0].appendChild(c)), a.addClass("_hj-f5b2a1eb-9b07_fullscreen_page"))
        }, "common");
        m.exitFullScreen = hj.tryCatch(function() {
            hj.hq("#hotjar-viewport-meta").remove();
            hj.hq("body").removeClass("_hj-f5b2a1eb-9b07_fullscreen_page").removeClass("_hj-f5b2a1eb-9b07_position_fixed")
        }, "common");
        m.zIndexPositionTop =
            hj.tryCatch(function() {
                var a = hj.hq("*");
                0 === hj.hq("._hj-f5b2a1eb-9b07_lower_zindex").length && hj.hq.each(a, function(a, b) {
                    "2147483647" === b.style.zIndex && hj.hq(b).addClass("_hj-f5b2a1eb-9b07_lower_zindex")
                })
            }, "common");
        m.zIndexPositionReset = hj.tryCatch(function() {
            hj.hq("._hj-f5b2a1eb-9b07_lower_zindex").removeClass("_hj-f5b2a1eb-9b07_lower_zindex")
        }, "common");
        m.isPhoneOrTablet = hj.tryCatch(function() {
                return hj.widget.isVeryNarrowScreen() || "phone" === hj.utils.deviceType() || "tablet" === hj.utils.deviceType()
            },
            "common");
        m.changeState = hj.tryCatch(function(b, c) {
            c = c || b.data.state;
            if ("open" === c || "collapsed" === c) a = c;
            hj.widget.ctrl.removeClass("_hj-f5b2a1eb-9b07_widget_open").removeClass("_hj-f5b2a1eb-9b07_widget_collapsed").removeClass("_hj-f5b2a1eb-9b07_widget_thankyou").removeClass("_hj-f5b2a1eb-9b07_widget_hidden").addClass("_hj-f5b2a1eb-9b07_widget_" + c)
        }, "common");
        m.openWidget = hj.tryCatch(function() {
            var b = hj.isPreview ? 0 : 300;
            hj.widget.ctrl.removeClass("_hj-f5b2a1eb-9b07_widget_collapsed").addClass("_hj-f5b2a1eb-9b07_widget_open").animate({
                    bottom: "0"
                },
                b);
            a = "open"
        }, "common");
        m.collapseWidget = hj.tryCatch(function() {
            var b = hj.isPreview ? 0 : 450;
            hj.widget.ctrl.removeClass("_hj-f5b2a1eb-9b07_widget_open").addClass("_hj-f5b2a1eb-9b07_widget_collapsed").animate({
                bottom: "0"
            }, b);
            a = "collapsed"
        }, "common");
        m.toggleWidget = hj.tryCatch(function() {
            hj.widget.ctrl.hasClass("_hj-f5b2a1eb-9b07_widget_hidden") ? hj.widget.changeState(null, a) : (hj.widget.changeState(null, "hidden"), hj.widget.setMinimized())
        }, "common");
        m.changeColorLuminance = hj.tryCatch(function(a, c) {
            a = String(a).replace(/[^0-9a-f]/gi,
                "");
            6 > a.length && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]);
            c = c || 0;
            var d = "#",
                f, h;
            for (h = 0; 3 > h; h++) f = parseInt(a.substr(2 * h, 2), 16), f = Math.round(Math.min(Math.max(0, f + 255 * c), 255)).toString(16), d += ("00" + f).substr(f.length);
            return d
        }, "common");
        m.disableSubmit = hj.tryCatch(function() {
            hj.widget.ctrl.find("#_hj-f5b2a1eb-9b07_action_submit").addClass("_hj-f5b2a1eb-9b07_btn_disabled")
        }, "common");
        m.dismissWidget = hj.tryCatch(function() {
            hj.widget.setDone();
            hj.widget.ctrl.hide()
        }, "common");
        m.init = hj.tryCatch(function() {
            hj.widget.ctrl.find("._hj-f5b2a1eb-9b07_action_toggle_widget").on("click",
                hj.widget.toggleWidget);
            hj.widget.ctrl.find("._hj-f5b2a1eb-9b07_action_open_widget").on("click", {
                state: "open"
            }, hj.widget.changeState);
            hj.widget.ctrl.find("._hj-f5b2a1eb-9b07_action_dismiss_widget").on("click", hj.widget.dismissWidget)
        }, "common");
        m.enableSubmit = hj.tryCatch(function() {
            hj.widget.ctrl.find("#_hj-f5b2a1eb-9b07_action_submit").removeClass("_hj-f5b2a1eb-9b07_btn_disabled")
        }, "common");
        m.isVeryNarrowScreen = hj.tryCatch(function() {
            return 450 >= hj.hq(window).width()
        }, "common");
        m.isNarrowScreen =
            hj.tryCatch(function() {
                return 768 > hj.hq(window).width()
            }, "common");
        m.isShortScreen = hj.tryCatch(function() {
            return 400 > hj.hq(window).height()
        }, "common");
        m.commonCSS = '                <style type="text/css">                    /*reset css*/                    .<%=p%>_widget, .<%=p%>_widget * {                        line-height: normal;                        font-family: Arial, sans-serif, Tahoma !important;                        text-transform: initial !important;                        letter-spacing: normal !important;                    }                    .<%=p%>_widget, .<%=p%>_widget div {                        height: auto;                    }                    .<%=p%>_widget div,                    .<%=p%>_widget span,                    .<%=p%>_widget p,                    .<%=p%>_widget a,                    .<%=p%>_widget img,                    .<%=p%>_widget strong,                    .<%=p%>_widget form,                    .<%=p%>_widget label {                        border: 0;                        outline: 0;                        font-size: 100%;                        vertical-align: baseline;                        background: transparent;                        margin: 0;                        padding: 0;                        float: none !important;                    }                    .<%=p%>_widget span {color:inherit}                    .<%=p%>_widget ol,                    .<%=p%>_widget ul,                    .<%=p%>_widget li {                        list-style-type:none !important;                        margin: 0 !important;                        padding: 0 !important;                     }                    .<%=p%>_widget li:before,                    .<%=p%>_widget li:after {                        content: none !important;                    }                    .<%=p%>_widget hr {                        display:block;                        height:1px;                        border:0;                        border-top:1px                        solid #ccc;                        margin:1em 0;                        padding:0;                    }                    .<%=p%>_widget input[type=submit],                    .<%=p%>_widget input[type=button],                    .<%=p%>_widget button {                        margin: 0;                        padding:0;                        float: none !important;                    }                    .<%=p%>_widget input,                    .<%=p%>_widget select,                    .<%=p%>_widget a img {                        vertical-align:middle;                    }                    .<%=p%>_widget *:after, .<%=p%>_widget *::before {                        -webkit-box-sizing: initial;                        -moz-box-sizing: initial;                        box-sizing: initial;                    }                    /*generic css*/                    body.<%=p%>_fullscreen_page {                        height: 100% !important;                        width: 100% !important;                    }                                        body.<%=p%>_position_fixed {                        position: fixed;                        -webkit-overflow-scrolling: touch;                    }                                        .<%=p%>_lower_zindex:not(.<%=p%>_widget) {                        z-index: 2147483600 !important;                    }                    .<%=p%>_widget {                        font-size:13px !important;                        position: fixed;                        z-index: 2147483647;                        bottom: -400px;                        right: 100px;                        width: 300px;                        -webkit-border-radius: 5px 5px 0 0;                        -moz-border-radius: 5px 5px 0 0;                        border-radius: 5px 5px 0 0;                        -webkit-transform: translateZ(0) !important;                    }                    .<%=p%>_widget.<%=p%>_position_left {                        right: auto;                        left: 100px;                    }                    .<%=p%>_widget .<%=p%>_rounded_corners {                        -webkit-border-radius: 3px;                        -moz-border-radius: 3px;                        border-radius: 3px;                    }                    .<%=p%>_widget .<%=p%>_shadow {                        -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15);                        -moz-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15);                        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15);                    }                    .<%=p%>_widget .<%=p%>_transition {                        -webkit-transition: all .2s ease-in-out;                        -moz-transition: all .2s ease-in-out;                        -o-transition: all .2s ease-in-out;                        -ms-transition: all .2s ease-in-out;                        transition: all .2s ease-in-out;                    }                    .<%=p%>_widget .<%=p%>_transition_duration_0 {                        -webkit-transition-duration: 0s;                        -moz-transition-duration: 0s;                        -o-transition-duration: 0s;                        -ms-transition-duration: 0s;                        transition-duration: 0s;                    }                    .<%=p%>_widget .<%=p%>_pull_left {                        float: left !important;                    }                    .<%=p%>_widget .<%=p%>_pull_right {                        float: right !important;                    }                    .<%=p%>_widget .<%=p%>_clear_both {clear: both !important;}                    .<%=p%>_widget .<%=p%>_hidden {display: none !important;}                    .<%=p%>_widget .<%=p%>_link_no_underline,                    .<%=p%>_widget .<%=p%>_link_no_underline:hover {                        text-decoration: none !important;                    }                    .<%=p%>_widget .<%=p%>_wordwrap {                        word-break: break-word;                        word-wrap: break-word;                    }                    /*common css*/                    .<%=p%>_widget.<%=p%>_widget_centered {                        right:50%;                        margin-right: -150px;                        left: auto;                    }                    .<%=p%>_widget .<%=p%>_widget_state {display: none;}                                        .<%=p%>_widget .<%=p%>_widget_icon {                        background-repeat: no-repeat;                        width: 16px;                        height: 16px;                        display: -moz-inline-stack;                        display: inline-block !important;                        zoom: 1;                        *display: inline !important;                        vertical-align: top;                    }                    .<%=p%>_widget .<%=p%>_widget_open_close {                        text-align: center;                        position: absolute;                        top: -18px;                        right: 20px;                        width: 40px;                        height: 18px;                        padding-top: 2px;                        cursor: pointer;                        -webkit-border-radius: 5px 5px 0 0;                        -moz-border-radius: 5px 5px 0 0;                        border-radius: 5px 5px 0 0;                    }                    .<%=p%>_widget .<%=p%>_widget_open_close .<%=p%>_widget_icon {                        background-position: -32px 0;                    }                    .<%=p%>_widget .<%=p%>_widget_open_close::before {                        content: "";                        position: absolute;                        left: -4px;                        right: -4px;                        bottom: -8px;                        height: 8px;                    }                    .<%=p%>_widget .<%=p%>_widget_hidden_handle {                        display:none;                        height: 4px;                        cursor:pointer;                        -webkit-border-radius: 5px 5px 0 0;                        -moz-border-radius: 5px 5px 0 0;                        border-radius: 5px 5px 0 0;                    }                                        .<%=p%>_widget .<%=p%>_widget_title {                        font-weight: bold;                        text-align: center;                        padding: 12px !important;                        margin: 0;                        line-height: 17px !important;                        min-height: 17px;                        word-break: break-word;                        word-wrap: break-word;                        cursor: pointer;                    }                    .<%=p%>_widget .<%=p%>_widget_initiator {                        display: none;                        padding: 0 12px 12px 12px;                        text-align: center;                    }                    .<%=p%>_widget .<%=p%>_widget_initiator button {                        padding-left: 20px;                        padding-right: 20px;                    }                                        .<%=p%>_widget .<%=p%>_btn,                    .<%=p%>_widget .<%=p%>_btn_clear,                     .<%=p%>_widget .<%=p%>_btn_primary {                        cursor: pointer;                        text-decoration: none !important;                        font-size: 13px !important;                        font-weight: bold !important;                        padding: 7px 10px !important;                        border: 0 !important;                        outline: 0 !important;                        height: initial !important;                        min-height: initial !important;                        display: -moz-inline-stack;                        display: inline-block;                        *display: inline;                        vertical-align: top;                        width: auto !important;                        min-width: initial !important;                        zoom: 1;                    }                                        .<%=p%>_widget .<%=p%>_btn:after,                    .<%=p%>_widget .<%=p%>_btn_clear:after,                     .<%=p%>_widget .<%=p%>_btn_primary:after {                        content:none !important;                    }                                        .<%=p%>_widget .<%=p%>_btn_primary {                        background: #00C764 !important;                        color: white;                    }                    .<%=p%>_widget .<%=p%>_btn_primary:hover,                    .<%=p%>_widget .<%=p%>_btn_primary:focus,                    .<%=p%>_widget .<%=p%>_btn_primary:active {                        background: #00a251 !important;                    }                    .<%=p%>_widget .<%=p%>_btn_clear {                        background: transparent !important;                        font-weight: normal !important;                        text-decoration: underline !important;                        color: <%= widgetStyle.footerTextColor %> !important;                    }                    .<%=p%>_widget .<%=p%>_btn_clear:hover,                    .<%=p%>_widget .<%=p%>_btn_clear:focus,                    .<%=p%>_widget .<%=p%>_btn_clear:active {                        background: transparent !important;                        color: <%= widgetStyle.footerTextColor %> !important;                    }                    .<%=p%>_widget .<%=p%>_btn_disabled,                    .<%=p%>_widget .<%=p%>_btn_disabled:hover,                    .<%=p%>_widget .<%=p%>_btn_disabled:focus,                    .<%=p%>_widget .<%=p%>_btn_disabled:active {                        cursor: default;                        -webkit-box-shadow: none;                        -moz-box-shadow: none;                        box-shadow: none;                    }                                        /*content*/                    .<%=p%>_widget .<%=p%>_widget_content {padding:0 12px;}                    .<%=p%>_widget .<%=p%>_widget_content_overflow {                        max-height: 280px;                        overflow-y: auto;                        overflow-x: hidden;                    }                    .<%=p%>_widget.<%=p%>_widget_short .<%=p%>_widget_content {                        padding:0 11px 0 12px;                        max-height: 120px;                        overflow-y: auto;                        overflow-x: hidden;                    }                                        /*open ended*/                    .<%=p%>_widget .<%=p%>_widget_content .<%=p%>_input_field {                        font-family: Arial, sans-serif, Tahoma;                        font-size: 14px;                        color: #333 !important;                        padding: 6px !important;                        text-indent: 0 !important;                        height: 30px;                        width: 100%;                        min-width: 100%;                        margin: 0 0 12px 0;                        background: white;                        border: 1px solid <%= widgetStyle.footerBorderColor %> !important;                        -webkit-box-sizing: border-box;                        -moz-box-sizing: border-box;                        box-sizing: border-box;                        outline: none !important;                        max-width: none !important;                        float: none;                    }                    .<%=p%>_widget .<%=p%>_widget_content .<%=p%>_input_field:focus {                        border: 1px solid #00a251;                    }                    .<%=p%>_widget .<%=p%>_widget_content textarea.<%=p%>_input_field {                        resize: none; height: 100px;                    }                                        /*close ended*/                    .<%=p%>_widget .<%=p%>_widget_content .<%=p%>_button_radio_checkbox {                        position: relative;                        min-height: 45px;                        text-align:left !important;                        height:auto !important;                        height: 45px;                        -webkit-box-sizing: border-box;                        -moz-box-sizing: border-box;                        box-sizing: border-box;                    }                    .<%=p%>_widget .<%=p%>_widget_content .<%=p%>_button_radio_checkbox span.<%=p%>_widget_icon {                        -webkit-border-radius: 30px;                        -moz-border-radius: 30px;                        border-radius: 30px;                        border: 2px solid #AAA;                        width: 22px;                        height: 22px;                        display: block;                        position: absolute;                        left: 12px;                        top: 50%;                        margin-top: -14px;                        background-position: -64px -100px;                        -webkit-box-sizing: content-box;                        -moz-box-sizing: content-box;                        box-sizing: content-box;                    }                    .<%=p%>_widget .<%=p%>_widget_content                        .<%=p%>_button_radio_checkbox span.<%=p%>_radio_checkbox_text {                        text-align: left !important;                        padding: 14px 20px 14px 50px;                        position: relative;                        display: block;                        word-break: break-word;                        word-wrap: break-word;                    }                    .<%=p%>_widget .<%=p%>_widget_content .<%=p%>_button_radio_checkbox_full {                        margin-left:-12px;                        margin-right: -12px;                    }                    .<%=p%>_widget .<%=p%>_widget_content                        .<%=p%>_button_radio_checkbox.<%=p%>_button_radio_checkbox_active span {                        border-color: white;                        background-position: -97px 4px;                    }                    .<%=p%>_widget .<%=p%>_widget_content .<%=p%>_button_checkbox span.<%=p%>_widget_icon {                        -webkit-border-radius: 4px;                        -moz-border-radius: 4px;                        border-radius: 4px;                    }                    .<%=p%>_widget .<%=p%>_double_control {                        margin: 0 0 12px 0;                        width: 100%;                    }                    .<%=p%>_widget .<%=p%>_double_control .<%=p%>_double_first {                        min-width:49% !important;                        width:49% !important;                        float:left !important;                        margin-bottom: 0;                    }                    .<%=p%>_widget .<%=p%>_double_control .<%=p%>_double_second {                        min-width:49% !important;                        width:49% !important;                        float:left !important;                        margin-bottom: 0;                        margin-left:2%;                    }                                        /* footer*/                    .<%=p%>_widget .<%=p%>_widget_footer {width: 100%;}                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_left {padding: 21px 0 0 12px; font-size: 11px;}                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_left a,                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_left a:hover,                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_left a:focus,                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_left a:active {                        text-decoration: underline;                    }                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_left span {                        background-position: -16px 0; margin-right: 4px;                    }                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_right {padding: 12px 12px 12px 0;}                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_right button {padding-right: 5px;}                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_right button span {                        background-position: -64px 0;                        margin-left: 8px;                    }                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_right button.<%=p%>_btn_disabled span {                        background-position: -48px 0;                    }                                        /*state: hidden*/                    .<%=p%>_widget.<%=p%>_widget_hidden .<%=p%>_widget_open_close                        .<%=p%>_widget_icon {background-position: 0 0;}                    .<%=p%>_widget.<%=p%>_widget_hidden .<%=p%>_widget_title {display: none;}                    .<%=p%>_widget.<%=p%>_widget_hidden .<%=p%>_widget_hidden_handle {display: block;}                                        /*state: collapsed */                    .<%=p%>_widget.<%=p%>_widget_collapsed .<%=p%>_widget_initiator {display: block;}                                        /*state: open*/                    .<%=p%>_widget.<%=p%>_widget_open .<%=p%>_widget_state_open {display: block;}                                        /*state: thankyou*/                    .<%=p%>_widget.<%=p%>_widget_thankyou .<%=p%>_widget_state_thankyou {display: block;}                    .<%=p%>_widget.<%=p%>_widget_thankyou .<%=p%>_widget_open_close {display: none;}                    .<%=p%>_widget.<%=p%>_widget_thankyou .<%=p%>_widget_title {display: none;}                    .<%=p%>_widget.<%=p%>_widget_thankyou .<%=p%>_widget_footer .<%=p%>_pull_right .<%=p%>_btn span {                        background-position: -80px 0;                    }                    .<%=p%>_widget .<%=p%>_thankyou_message {text-align: center; padding: 20px; margin: 0;}                    .<%=p%>_widget .<%=p%>_thankyou_message button {margin-top: 12px; padding: 7px 20px !important;}                                        /* theme css */                    .<%=p%>_widget {                        background: <%= widgetStyle.primaryColor %> !important;                        color: <%= widgetStyle.fontColor %> !important;                    }                    .<%=p%>_widget a, .<%=p%>_widget a:link, .<%=p%>_widget a:hover, .<%=p%>_widget a:active {                        color: <%= widgetStyle.fontColor %> !important;                    }                    .<%=p%>_widget p {color: <%= widgetStyle.fontColor %> !important;}                    .<%=p%>_widget .<%=p%>_widget_open_close::before {                        background: <%= widgetStyle.primaryColor %> !important;                    }                    .<%=p%>_widget .<%=p%>_widget_icon {                        background-image:                             url(//<%= hjStaticHost %>/static/client/modules/assets/widget_icons_light.png) !important;                    }                    .<%=p%>_widget .<%=p%>_widget_open_close {background: <%= widgetStyle.primaryColor %> !important;}                    .<%=p%>_widget .<%=p%>_widget_hidden_handle {                        background: <%= widgetStyle.primaryColor %> !important;                    }                    .<%=p%>_widget .<%=p%>_btn {                        background: <%= widgetStyle.secondaryColor %> !important;                        color: <%= widgetStyle.fontColor %> !important;                    }                    .<%=p%>_widget .<%=p%>_btn:hover, .<%=p%>_widget .<%=p%>_btn:focus,  .<%=p%>_btn:active {                        background: #666 !important;                    }                                        .<%=p%>_widget .<%=p%>_widget_content .<%=p%>_input_field {                        border: 1px solid <%= widgetStyle.footerBorderColor %> !important;                    }                                        .<%=p%>_widget .<%=p%>_button_radio_checkbox {                        border-bottom: 1px solid <%= widgetStyle.primaryColor %> !important;                        border-top: 1px solid <%= widgetStyle.alternateColor %> !important;                        background: <%= widgetStyle.secondaryColor %> !important;                        cursor: pointer !important;                    }                    .<%=p%>_widget .<%=p%>_button_radio_checkbox_last {border-bottom:0 !important;}                    .<%=p%>_widget .<%=p%>_button_radio_checkbox:hover {                        background: <%= widgetStyle.alternateColor %> !important;                        color: <%= widgetStyle.fontColorNegative %>;                    }                    .<%=p%>_widget .<%=p%>_button_radio_checkbox.<%=p%>_button_radio_checkbox_active,                    .<%=p%>_widget .<%=p%>_button_radio_checkbox.<%=p%>_button_radio_checkbox_active:hover {                        background: <%= widgetStyle.alternateColor %> !important;                        color: white !important;                        cursor: default;                    }                                        .<%=p%>_widget .<%=p%>_switch {                        position: relative;                        display: inline-block;                        width: 46px;                        height: 28px;                        vertical-align: middle;                        margin: -3px 8px 0 0;                    }                                        .<%=p%>_widget.<%=p%>_rtl .<%=p%>_switch {                        margin: -3px 0 0 8px;                    }                                        .<%=p%>_widget .<%=p%>_switch > input {                        cursor: pointer;                        display: block !important;                        width: 46px;                        height: 28px;                        position: absolute;                        left: 0;                        right: 0;                        z-index: 2;                        opacity: 0;                        margin: 0;                    }                                        .<%=p%>_widget .<%=p%>_switch > input + label {                        cursor: pointer;                        position: absolute;                        top: 0;                        left: 0;                        right: 0;                        bottom: 0;                        background: rgba(0,0,0,1);                        border: 2px solid rgba(255,255,255,.3);                        border-radius: 100px;                        -webkit-transition: 400ms all;                           -moz-transition: 400ms all;                                transition: 400ms all;                    }                                        .<%=p%>_widget .<%=p%>_switch > input:checked + label {                        background: rgba(0,0,0,.3);                        border-color: transparent;                        -webkit-transition: 250ms all;                           -moz-transition: 250ms all;                                transition: 250ms all;                    }                                        .<%=p%>_widget .<%=p%>_switch > input + label:before {                        content: "";                        transition: 300ms all;                        position: absolute;                        left: 0;                        top: 0;                        display: block;                        width: 24px;                        height: 24px;                        border-radius: 40px;                        background-color: #ffffff;                        background-position: center center;                        background-repeat: no-repeat;                        background-size: 5px;                        -webkit-box-shadow: 0 0 12px 0 rgba(0,0,0,.06), 0 0 0 0 rgba(0,0,0,.06), 0 6px 10px 0 rgba(0,0,0,.15), 0 0 2px 0 rgba(0,0,0,.07), 0 4px 6px 0 rgba(0,0,0,.06), 0 1px 1px 0 rgba(0,0,0,.11);                        -moz-box-shadow: 0 0 12px 0 rgba(0,0,0,.06), 0 0 0 0 rgba(0,0,0,.06), 0 6px 10px 0 rgba(0,0,0,.15), 0 0 2px 0 rgba(0,0,0,.07), 0 4px 6px 0 rgba(0,0,0,.06), 0 1px 1px 0 rgba(0,0,0,.11);                        box-shadow: 0 0 12px 0 rgba(0,0,0,.06), 0 0 0 0 rgba(0,0,0,.06), 0 6px 10px 0 rgba(0,0,0,.15), 0 0 2px 0 rgba(0,0,0,.07), 0 4px 6px 0 rgba(0,0,0,.06), 0 1px 1px 0 rgba(0,0,0,.11);                    }                                        .<%=p%>_widget .<%=p%>_switch > input + label > span {                        position: absolute;                        z-index: 3;                        color: <%= widgetStyle.accentColor %>;                        background-color: transparent !important;                        border: 0 !important;                        width: 13px !important;                        height: 14px !important;                        left: 6px;                        top: 5px;                        margin: 0 !important;                        opacity: 0;                        font-size: 14px;                        pointer-events: none !important;                        -webkit-transition: 250ms all;                           -moz-transition: 250ms all;                                transition: 250ms all;                    }                                        .<%=p%>_widget .<%=p%>_switch > input:checked + label:before {                        left: 18px;                    }                                        .<%=p%>_widget .<%=p%>_switch > input:checked + label > span {                        left: 24px;                        opacity: 1;                    }                                        .<%=p%>_widget .<%=p%>_switch > input:checked + label > span:after {                        content: initial !important;                    }                                        .<%=p%>_widget .<%=p%>_widget_footer {                        border-top: 1px solid <%= widgetStyle.footerBorderColor %> !important;                    }                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_left,                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_left a,                    .<%=p%>_widget .<%=p%>_widget_footer .<%=p%>_pull_left a:hover {                        color: <%= widgetStyle.footerTextColor %> !important;                    }                    .<%=p%>_widget .<%=p%>_btn_disabled,                    .<%=p%>_widget .<%=p%>_btn_disabled:hover,                    .<%=p%>_widget .<%=p%>_btn_disabled:focus,                    .<%=p%>_widget .<%=p%>_btn_disabled:active {                        color: <%= widgetStyle.primaryColor %> !important;                        background: <%= widgetStyle.secondaryColor %> !important;                    }                                        /*light theme css*/                    .<%=p%>_widget.<%=p%>_skin_light, .<%=p%>_widget.<%=p%>_skin_light .<%=p%>_widget_open_close {                        -webkit-box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.3) !important;                        -moz-box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.3) !important;                        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.3) !important;                    }                    .<%=p%>_widget.<%=p%>_skin_light .<%=p%>_widget_icon {                        background-image:                             url(//<%= hjStaticHost %>/static/client/modules/assets/widget_icons_light.png) !important;                    }                                        /*dark theme css*/                    .<%=p%>_widget.<%=p%>_skin_dark, .<%=p%>_widget.<%=p%>_skin_dark .<%=p%>_widget_open_close {                        -webkit-box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.6) !important;                        -moz-box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.6) !important;                        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.6) !important;                    }                    .<%=p%>_widget.<%=p%>_skin_dark .<%=p%>_widget_icon {                        background-image:                             url(//<%= hjStaticHost %>/static/client/modules/assets/widget_icons_dark.png) !important;                    }                                        /*right-to-left css*/                    .<%=p%>_widget.<%=p%>_rtl, .<%=p%>_widget.<%=p%>_rtl * {direction: rtl !important;}                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_widget_footer .<%=p%>_pull_left {direction: ltr !important;}                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_widget_footer .<%=p%>_pull_right button {padding-right: 10px;}                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_widget_footer .<%=p%>_pull_right button span {margin-left: 0;}                    .<%=p%>_widget.<%=p%>_rtl.<%=p%>_widget_open .<%=p%>_widget_footer .<%=p%>_pull_right button span {                        display: none;                    }                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_widget_content .<%=p%>_button_radio_checkbox {                        text-align:right !important;                    }                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_widget_content .<%=p%>_button_radio_checkbox                        span.<%=p%>_widget_icon {                        left: auto;                        right: 12px;                    }                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_widget_content .<%=p%>_button_radio_checkbox                        span.<%=p%>_radio_checkbox_text {                        text-align:right !important;                        padding: 14px 50px 14px 20px;                    }                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_double_control .<%=p%>_double_first {                        float:right;                        margin-left:2%;}                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_double_control .<%=p%>_double_second {                        float:left;                        margin-left:0;}                </style>';
        return m
    }();
    hj.widgetDelay = function() {
        var m = {},
            a = null;
        m.clear = hj.tryCatch(function() {
            clearTimeout(a);
            a = null
        }, "hj.widgetDelay.clear");
        m.set = hj.tryCatch(function(c, h) {
            m.clear();
            a = setTimeout(c, h)
        }, "hj.widgetDelay.set");
        return m
    }()
}, "widgets")();
hj.tryCatch(function() {
    hj.loader.registerModule("Feedback", function() {
        function m() {
            var a, b = {
                    showMinimizedMessageTimer: function() {}
                },
                g = hj.isPreview ? 0 : 200,
                d = hj.hq("#_hj-f5b2a1eb-9b07_feedback_minimized_message"),
                h = hj.hq("#_hj-f5b2a1eb-9b07_action_submit");
            a = hj.hq("#_hj-f5b2a1eb-9b07_action_skip");
            var l = hj.hq("#_hj-f5b2a1eb-9b07_feedback");
            b.resetDataValues = hj.tryCatch(function() {
                return {
                    comment: null,
                    emotion: null,
                    email: null,
                    page_content: null,
                    selectors: hj.widget.feedbackData.auto_screenshot ? "html" : null,
                    viewport: []
                }
            }, "feedback");
            b.goToState = hj.tryCatch(function(a, c) {
                c = c || 0;
                b.currentState = a;
                0 === c ? l.attr("data-state", a) : setTimeout(function() {
                    l.attr("data-state", a)
                }, c);
                switch (a) {
                    case "minimized":
                        hj.hq("#_hj-f5b2a1eb-9b07_feedback_open").removeClass("fade");
                        hj.widget.zIndexPositionReset();
                        hj.widget.exitFullScreen();
                        b.resetScreenshotState();
                        setTimeout(function() {
                            b.resetWidget()
                        }, c);
                        break;
                    case "emotion":
                        hj.hq("#_hj-f5b2a1eb-9b07_feedback_open").addClass("fade");
                        hj.widget.zIndexPositionTop();
                        b.animateFaces();
                        b.setViewportContent();
                        break;
                    case "comment":
                        (hj.widget.isPhoneOrTablet() || "phone" === hj.widget.feedbackData.previewDevice) && hj.widget.enterFullScreen();
                        hj.hq("#_hj-f5b2a1eb-9b07_feedback_open").addClass("fade");
                        hj.hq("[data-emotion-option]").addClass("emotion_small");
                        !hj.isPreview && "desktop" === hj.utils.deviceType() && hj.hq("#_hj-f5b2a1eb-9b07_emotion_comment").focus();
                        break;
                    case "email":
                        hj.hq("#_hj-f5b2a1eb-9b07_feedback_open").addClass("fade"), b.resetScreenshotState(), h.addClass("_hj-f5b2a1eb-9b07_btn_disabled"),
                            hj.isPreview || hj.hq("#_hj-f5b2a1eb-9b07_email").focus()
                }
            }, "feedback");
            b.submitState = hj.tryCatch(function(a) {
                a = a || b.currentState;
                switch (a) {
                    case "emotion":
                        b.data.emotion = hj.hq("#_hj-f5b2a1eb-9b07_state-1").attr("data-chosen-emotion");
                        b.canSendResponse = !0;
                        b.setViewportContent();
                        b.goToState("comment");
                        break;
                    case "comment":
                        b.data.comment = hj.hq("#_hj-f5b2a1eb-9b07_emotion_comment").val();
                        "" === b.data.comment && (b.data.comment = null);
                        b.setViewportContent();
                        !1 === hj.widget.feedbackData.content.email ? b.endIncomingFeedback(!0) :
                            b.goToState("email");
                        break;
                    case "email":
                        b.validateCurrentState() && (b.data.email = hj.hq('[data-bind="email"]').val(), b.endIncomingFeedback(!0))
                }
            }, "feedback");
            b.skipCurrentState = hj.tryCatch(function() {
                "email" === b.currentState && (b.data.email = null, b.endIncomingFeedback(!0))
            }, "feedback");
            b.validateCurrentState = hj.tryCatch(function() {
                var a = !1,
                    c = hj.hq('[data-bind="comment"]').val(),
                    d = hj.hq('[data-bind="email"]').val();
                switch (b.currentState) {
                    case "comment":
                        c && (a = !0);
                        break;
                    case "email":
                        d && hj.utils.validateEmail(d) &&
                            (a = !0)
                }
                return a
            }, "feedback");
            b.startIncomingFeedback = hj.tryCatch(function() {
                var a = hj.widget.feedbackData.position,
                    c = hj.cookie.get("_hjShownFeedbackMessage"),
                    f = hj.isPreview ? 0 : 2E3;
                b.goToState("minimized");
                if (("bottom_left" === a || "bottom_right" === a) && (!c || hj.isPreview)) d.attr("data-message", "initial"), b.showMinimizedMessageTimer = setTimeout(function() {
                    b.setMinimizedMessageVisibility(!0);
                    hj.isPreview || hj.cookie.set("_hjShownFeedbackMessage", !0, 1)
                }, f)
            }, "feedback");
            b.endIncomingFeedback = hj.tryCatch(function(a) {
                b.canSendResponse &&
                    b.sendFeedbackResponse();
                b.goToState("minimized", g);
                a && b.showThankYouMessage()
            }, "feedback");
            b.sendFeedbackResponse = hj.tryCatch(function() {
                var a;
                a = {
                    response: {
                        emotion: parseInt(b.data.emotion, 10),
                        message: b.data.comment,
                        email: b.data.email
                    }
                };
                null !== b.data.selectors && (a.page_content = b.data.page_content, a.viewport = b.data.viewport, a.selectors = b.data.selectors);
                hj.isPreview || hj.request.saveFeedbackResponse(a)
            }, "feedback");
            b.setViewportContent = hj.tryCatch(function() {
                var a = hj.hq("body").hasClass("_hj-f5b2a1eb-9b07_position_fixed"),
                    c = hj.ui.getScrollPosition(),
                    d = hj.ui.getWindowSize(),
                    f = c.top,
                    c = c.left,
                    g = f + d.height,
                    d = c + d.width;
                if (!a && (b.data.viewport[0] !== f || b.data.viewport[1] !== c || b.data.viewport[2] !== g || b.data.viewport[3] !== d)) b.data.page_content = hj.html.getPageContent("#_hj_feedback_container"), b.data.viewport = [f, c, g, d]
            }, "feedback");
            b.setScreenshotState = hj.tryCatch(function(a) {
                var c = hj.hq("body"),
                    d = hj.hq("#_hj-f5b2a1eb-9b07_toolset_action_select");
                if (!hj.isPreview) switch (l.attr("data-screenshot", a), a) {
                    case "default":
                        b.data.selectors =
                            b.resetDataValues().selectors;
                        l.removeAttr("data-screenshot");
                        d.removeClass("_hj-f5b2a1eb-9b07_toolset_action_active");
                        hj.widget.isPhoneOrTablet() && c.addClass("_hj-f5b2a1eb-9b07_position_fixed");
                        b.cancelElementHighlighting();
                        hj.ui.enableScrolling();
                        break;
                    case "element":
                        b.resetHighlight();
                        b.enableElementHighlighting();
                        hj.ui.enableScrolling();
                        c.removeClass("_hj-f5b2a1eb-9b07_position_fixed");
                        break;
                    case "elementSelected":
                        hj.widget.isPhoneOrTablet() && (b.setViewportContent(), c.addClass("_hj-f5b2a1eb-9b07_position_fixed")), !hj.isPreview && "desktop" === hj.utils.deviceType() && hj.hq("#_hj-f5b2a1eb-9b07_emotion_comment").focus(), b.cancelElementHighlighting(), d.addClass("_hj-f5b2a1eb-9b07_toolset_action_active")
                }
            }, "feedback");
            b.enableElementHighlighting = hj.tryCatch(function() {
                function a(c) {
                    var f = hj.hq(c)[0];
                    d(c) && b.highlightElement(f)
                }

                function c(a, d) {
                    b.data.selectors = [hj.selector().get(d)];
                    b.setScreenshotState("elementSelected");
                    hj.ui.disableScrolling(function() {
                        b.highlightElement(hj.hq(a)[0])
                    })
                }

                function d(a) {
                    return !hj.hq(a).hasClass("_hj-f5b2a1eb-9b07_feedback_selection_ignore")
                }
                var f = 0,
                    g = 0;
                hj.hq("html").attr("data-hotjar-cursor-pointer", "true");
                hj.hq("body *").on("mouseover.feedback", hj.tryCatch(function(b) {
                    b.stopPropagation();
                    a(b.target);
                    "desktop" === hj.utils.deviceType() && (f = b.clientX, g = b.clientY)
                }, "feedback"));
                hj.hq(document).on("scroll.feedback resize.feedback", hj.tryCatch(function() {
                    a(document.elementFromPoint(f, g))
                }, "feedback"));
                setTimeout(function() {
                    hj.hq("body *").on("mousedown.feedback", hj.tryCatch(function(b) {
                        b.stopPropagation();
                        b.preventDefault();
                        d(b.target) &&
                            (a(b.target), c(b.target, hj.hq(this)))
                    }, "feedback"))
                }, 0)
            }, "feedback");
            b.cancelElementHighlighting = hj.tryCatch(function() {
                hj.hq("body *").off("mouseover.feedback mousedown.feedback");
                hj.hq(document).off("scroll.feedback resize.feedback");
                hj.hq("html").removeAttr("data-hotjar-cursor-pointer")
            }, "feedback");
            b.resetHighlight = hj.tryCatch(function() {
                var a = document.getElementById("_hj-f5b2a1eb-9b07_feedback_content_dimmer_top"),
                    b = document.getElementById("_hj-f5b2a1eb-9b07_feedback_content_dimmer_right"),
                    c =
                    document.getElementById("_hj-f5b2a1eb-9b07_feedback_content_dimmer_bottom"),
                    d = document.getElementById("_hj-f5b2a1eb-9b07_feedback_content_dimmer_left"),
                    f = document.getElementById("_hj-f5b2a1eb-9b07_feedback_content_highlighter");
                hj.hq(a).removeAttr("style");
                hj.hq(b).removeAttr("style");
                hj.hq(c).removeAttr("style");
                hj.hq(d).removeAttr("style");
                hj.hq(f).removeAttr("style")
            });
            b.highlightElement = hj.tryCatch(function(a) {
                var b = a.getBoundingClientRect();
                a = b.top;
                var c = b.left,
                    d = b.width,
                    b = b.height,
                    f = document.getElementById("_hj-f5b2a1eb-9b07_feedback_content_dimmer_top"),
                    g = document.getElementById("_hj-f5b2a1eb-9b07_feedback_content_dimmer_right"),
                    h = document.getElementById("_hj-f5b2a1eb-9b07_feedback_content_dimmer_bottom"),
                    l = document.getElementById("_hj-f5b2a1eb-9b07_feedback_content_dimmer_left"),
                    m = document.getElementById("_hj-f5b2a1eb-9b07_feedback_content_highlighter"),
                    p = 8,
                    q = a - p,
                    y = c - 8,
                    z = b + 2 * p,
                    A = d + 16;
                0 > a && (z = b + a + p, p = 0, b += a, q = a = 1);
                f.style.top = "0";
                f.style.right = "0";
                f.style.left = "0";
                f.style.height = Math.max(0, q) + "px";
                g.style.top = q + "px";
                g.style.right = "0";
                g.style.left =
                    y + A + "px";
                g.style.bottom = "0";
                h.style.top = q + z + "px";
                h.style.width = Math.max(0, A) + "px";
                h.style.left = y + "px";
                h.style.bottom = "0";
                l.style.top = q + "px";
                l.style.width = Math.max(0, y) + "px";
                l.style.left = "0";
                l.style.bottom = "0";
                0 > b ? m.style.top = "-400px" : (m.style.top = a - 2 - p + "px", m.style.left = c - 2 - p + "px", m.style.width = d - 4 + 16 + "px", m.style.height = b - 4 + 2 * p + "px")
            }, "feedback");
            b.showThankYouMessage = hj.tryCatch(function() {
                var a = hj.isPreview ? 0 : 500;
                hj.widget.feedbackData.content.thankyou && (d.attr("data-message", "thankyou"), b.setMinimizedMessageVisibility(!0),
                    setTimeout(function() {
                        b.wink()
                    }, a), hj.isPreview || setTimeout(function() {
                        b.setMinimizedMessageVisibility(!1)
                    }, 5E3))
            }, "feedback");
            b.setMinimizedMessageVisibility = hj.tryCatch(function(a) {
                a ? l.attr("data-show-message", "true") : (clearTimeout(b.showMinimizedMessageTimer), l.removeAttr("data-show-message"))
            }, "feedback");
            b.resetWidget = hj.tryCatch(function() {
                b.canSendResponse = !1;
                b.currentState = null;
                b.data = b.resetDataValues();
                hj.widget.enableSubmit();
                hj.widget.ctrl.find("#_hj-f5b2a1eb-9b07_state-1").removeAttr("data-chosen-emotion");
                hj.hq("#_hj-f5b2a1eb-9b07_toolset_action_select").removeClass("_hj-f5b2a1eb-9b07_toolset_action_active");
                hj.hq("[data-emotion-option]").removeClass("fade").removeClass("fadeTransition").removeClass("emotion_small");
                h.addClass("_hj-f5b2a1eb-9b07_btn_disabled");
                hj.widget.ctrl.find('[data-bind="comment"]').val("");
                hj.widget.ctrl.find('[data-bind="email"]').val("");
                hj.hq("body *").off("mouseover.feedback mousedown.feedback");
                hj.hq(document).off("scroll.feedback resize.feedback")
            }, "feedback");
            b.resetScreenshotState =
                hj.tryCatch(function() {
                    l.attr("data-screenshot", "");
                    setTimeout(function() {
                        l.removeAttr("data-screenshot")
                    }, g);
                    hj.hq("html").removeAttr("data-hotjar-cursor-pointer");
                    hj.ui.enableScrolling()
                }, "feedback");
            b.animateFaces = hj.tryCatch(function() {
                var a = hj.hq("[data-emotion-option]");
                a.addClass("fadeTransition");
                setTimeout(function() {
                    a.addClass("fade")
                }, g);
                setTimeout(function() {
                    a.removeClass("fadeTransition")
                }, 4 * g)
            }, "feedback");
            b.wink = hj.tryCatch(function() {
                var a = hj.hq("._hj-f5b2a1eb-9b07_hotjar_buddy");
                a.attr("data-face", "wink");
                setTimeout(function() {
                    a.attr("data-face", "happy")
                }, 800)
            }, "feedback");
            hj.widget.ctrl.find("._hj-f5b2a1eb-9b07_feedback_minimized_message_close").on("click", hj.tryCatch(function(a) {
                a.stopPropagation();
                b.setMinimizedMessageVisibility(!1)
            }, "feedback"));
            hj.widget.ctrl.find("._hj-f5b2a1eb-9b07_hotjar_buddy, ._hj-f5b2a1eb-9b07_feedback_minimized_message, ._hj-f5b2a1eb-9b07_feedback_minimized_label").on("click", hj.tryCatch(function() {
                    b.goToState("emotion");
                    b.setMinimizedMessageVisibility(!1)
                },
                "feedback"));
            hj.widget.ctrl.find("#_hj-f5b2a1eb-9b07_feedback_open_close, #_hj-f5b2a1eb-9b07_feedback_open_close_phone").on("click", hj.tryCatch(function() {
                b.endIncomingFeedback()
            }, "feedback"));
            hj.widget.ctrl.find('[data-bind="emotion"]').on("click", hj.tryCatch(function() {
                var a = hj.hq(this).attr("data-emotion-option");
                hj.hq("#_hj-f5b2a1eb-9b07_state-1").attr("data-chosen-emotion", a);
                b.submitState("emotion")
            }, "feedback"));
            h.on("click", hj.tryCatch(function() {
                hj.hq(this).hasClass("_hj-f5b2a1eb-9b07_btn_disabled") ||
                    b.submitState()
            }, "feedback"));
            a.on("click", hj.tryCatch(function() {
                b.skipCurrentState()
            }, "feedback"));
            hj.widget.ctrl.find('[data-bind="email"]').on("keyup change", hj.tryCatch(function(a) {
                b.validateCurrentState() ? hj.widget.enableSubmit() : hj.widget.disableSubmit();
                13 === a.keyCode && b.submitState()
            }, "feedback"));
            hj.widget.ctrl.find('[data-bind="comment"]').on("keyup change", hj.tryCatch(function() {
                b.validateCurrentState() ? hj.widget.enableSubmit() : hj.widget.disableSubmit()
            }, "feedback"));
            hj.widget.ctrl.find("#_hj-f5b2a1eb-9b07_feedback_content_highlighter, #_hj-f5b2a1eb-9b07_toolset_action_select").on("click",
                hj.tryCatch(function() {
                    b.setScreenshotState("element")
                }, "feedback"));
            hj.widget.ctrl.find("#_hj-f5b2a1eb-9b07_feedback_top_message_select_close span, #_hj-f5b2a1eb-9b07_feedback_content_highlighter_close").on("click", hj.tryCatch(function(a) {
                b.setScreenshotState("default");
                a.stopPropagation()
            }, "feedback"));
            a = hj.widget.feedbackData.activeStepInPreview;
            hj.isPreview && (b.resetWidget(), hj.widget.ctrl.find("._hj-f5b2a1eb-9b07_transition").addClass("_hj-f5b2a1eb-9b07_transition_duration_0"), "initial" === a ||
                !a ? b.startIncomingFeedback() : "thankYou" === a ? b.endIncomingFeedback(!0) : "email" === a && !1 === hj.widget.feedbackData.content.email ? b.goToState("emotion") : b.goToState(a));
            hj.hq(window).on("resize", function() {
                hj.tryCatch(c(), "feedback")
            });
            hj.tryCatch(c(), "feedback");
            hj.isPreview || b.startIncomingFeedback()
        }

        function a() {
            var a = 100 < hj.ui.getWindowSize().height ? Math.round(hj.ui.getWindowSize().height / 2) : 300;
            hj.log.debug("Rendering feedback widget.", "feedback");
            hj.widget.setLanguage(hj.widget.feedbackData.language);
            a = hj.rendering.renderTemplate(l, {
                apiUrlBase: new hj.rendering.TrustedString(hj.apiUrlBase),
                hjStaticHost: new hj.rendering.TrustedString(hj.staticHost),
                hjid: _hjSettings.hjid,
                cta: new hj.rendering.TrustedString(hj.widget.ctaLinks.feedback),
                p: hj.widget.widgetAttributePrefix,
                preview: hj.isPreview || !1,
                feedback: {
                    id: hj.widget.feedbackData.id,
                    content: hj.widget.feedbackData.content,
                    effectiveShowBranding: hj.widget.feedbackData.effective_show_branding,
                    position: hj.widget.feedbackData.position
                },
                widgetStyle: {
                    accentColor: hj.widget.feedbackData.background,
                    accentTextColor: "light" === hj.widget.feedbackData.skin ? "#ffffff" : "#333333",
                    backgroundColor: "#ffffff",
                    darkGrey: "#333333",
                    disabledColor: "#cccccc",
                    selectionColor: "#ffd902",
                    selectionTextColor: "#3c3c3c",
                    middlePositionPixels: a
                }
            });
            hj.widget.ctrl = hj.rendering.addToDom("_hj_feedback_container", a);
            m()
        }

        function c() {
            var a = hj.widget.feedbackData.previewDevice,
                a = a ? a : hj.utils.deviceType(),
                b = "desktop" === a ? "desktop" : "touch";
            hj.widget.ctrl.attr("data-device", a);
            hj.widget.ctrl.attr("data-viewmode", b)
        }
        var h = {},
            l = ['<div id="_hj_feedback_container">',
                hj.widget.commonCSS, '<style type="text/css">                    /*******************                     * GENERIC                    ********************/                    @font-face {                        font-family: "hotjar";                        src: url("//<%= hjStaticHost %>/static/client/modules/assets/font-hotjar_4.eot?mk86i5");                        src: url("//<%= hjStaticHost %>/static/client/modules/assets/font-hotjar_4.eot?mk86i5#iefix") format("embedded-opentype"),                             url("//<%= hjStaticHost %>/static/client/modules/assets/font-hotjar_4.woff2?mk86i5") format("woff2"),                             url("//<%= hjStaticHost %>/static/client/modules/assets/font-hotjar_4.ttf?mk86i5") format("truetype"),                             url("//<%= hjStaticHost %>/static/client/modules/assets/font-hotjar_4.woff?mk86i5") format("woff"),                             url("//<%= hjStaticHost %>/static/client/modules/assets/font-hotjar_4.svg?mk86i5#hotjar") format("svg");                        font-weight: normal;                        font-style: normal;                    }                                        ._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_icon {                        speak: none !important;                        font-style: normal !important;                        font-weight: normal !important;                        font-variant: normal !important;                        text-transform: none !important;                        overflow-wrap: normal !important;                        word-break: normal !important;                        word-wrap: normal !important;                        white-space: nowrap !important;                        line-height: normal !important;                        -webkit-font-smoothing: antialiased !important;                        -moz-osx-font-smoothing: grayscale !important;                    }                                        ._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_icon,                    ._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_icon:before,                    ._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_icon:after,                    ._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_icon *,                    ._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_icon *:before,                    ._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_icon *:after {                        font-family: "hotjar" !important;                        display: inline-block !important;                        direction: ltr !important;                    }                                        ._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_icon:before {                        color: inherit !important;                    }                                        ._hj-f5b2a1eb-9b07_icon-left:before     {content: "\\\\e805";}                    ._hj-f5b2a1eb-9b07_icon-down:before     {content: "\\\\e800";}                    ._hj-f5b2a1eb-9b07_icon-up:before       {content: "\\\\e801";}                    ._hj-f5b2a1eb-9b07_icon-right:before    {content: "\\\\e802";}                    ._hj-f5b2a1eb-9b07_icon-x:before        {content: "\\\\e803";}                    ._hj-f5b2a1eb-9b07_icon-ok:before       {content: "\\\\e804";}                    ._hj-f5b2a1eb-9b07_icon-hotjar:before   {content: "\\\\e806";}                    ._hj-f5b2a1eb-9b07_icon-select-element:before   {content: "\\\\e91a";}                                        /* Faces (emotions) */                    ._hj-f5b2a1eb-9b07_icon_face *:before {                        color: <%= widgetStyle.selectionTextColor %>;                        margin-left: -1.3984375em;                    }                    ._hj-f5b2a1eb-9b07_icon_face .path1:before {                        content: "\\\\e900";                        color: <%= widgetStyle.selectionColor %>;                        margin: 0;                    }                                        ._hj-f5b2a1eb-9b07_icon_face[data-face="angry"] .path2:before {content: "\\\\e901";}                    ._hj-f5b2a1eb-9b07_icon_face[data-face="angry"] .path3:before {content: "\\\\e902";}                    ._hj-f5b2a1eb-9b07_icon_face[data-face="angry"] .path4:before {content: "\\\\e903";}                    ._hj-f5b2a1eb-9b07_icon_face[data-face="angry"] .path5:before {content: "\\\\e904";}                    ._hj-f5b2a1eb-9b07_icon_face[data-face="angry"] .path6:before {content: "\\\\e905";}                                        ._hj-f5b2a1eb-9b07_icon_face[data-face="sad"] .path2:before {content: "\\\\e907";}                    ._hj-f5b2a1eb-9b07_icon_face[data-face="sad"] .path3:before {content: "\\\\e908";}                    ._hj-f5b2a1eb-9b07_icon_face[data-face="sad"] .path4:before {content: "\\\\e909";}                                        ._hj-f5b2a1eb-9b07_icon_face[data-face="neutral"] .path2:before {content: "\\\\e90b";}                    ._hj-f5b2a1eb-9b07_icon_face[data-face="neutral"] .path3:before {content: "\\\\e90c";}                    ._hj-f5b2a1eb-9b07_icon_face[data-face="neutral"] .path4:before {content: "\\\\e90d";}                                        ._hj-f5b2a1eb-9b07_icon_face[data-face="happy"] .path2:before {content: "\\\\e90f";}                    ._hj-f5b2a1eb-9b07_icon_face[data-face="happy"] .path3:before {content: "\\\\e910";}                    ._hj-f5b2a1eb-9b07_icon_face[data-face="happy"] .path4:before {content: "\\\\e911";}                                        ._hj-f5b2a1eb-9b07_icon_face[data-face="love"] .path2:before {content: "\\\\e913";}                    ._hj-f5b2a1eb-9b07_icon_face[data-face="love"] .path3:before {content: "\\\\e914";}                    ._hj-f5b2a1eb-9b07_icon_face[data-face="love"] .path4:before {content: "\\\\e915";}                                        ._hj-f5b2a1eb-9b07_icon_face[data-face="wink"] .path2:before {content: "\\\\e90f";}                    ._hj-f5b2a1eb-9b07_icon_face[data-face="wink"] .path3:before {content: "\\\\e919";}                    ._hj-f5b2a1eb-9b07_icon_face[data-face="wink"] .path4:before {content: "\\\\e911";}                                        ._hj-f5b2a1eb-9b07_icon_face_main *:before{color: <%= widgetStyle.accentTextColor %>}                    ._hj-f5b2a1eb-9b07_icon_face_main .path1:before {color: <%= widgetStyle.accentColor %>}                                        /*******************                     * MAIN CONTAINER                    ********************/                    #_hj-f5b2a1eb-9b07_feedback {                        bottom: 0;                        right: 0;                    }                                        #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget._hj-f5b2a1eb-9b07_rtl {                        direction: ltr !important;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="bottom_left"],                    #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_left"] {                        bottom: 0;                        left: 0;                        right: auto;                    }                                        /*******************                     * MINIMIZED STATE                    ********************/                    #_hj-f5b2a1eb-9b07_feedback #_hj-f5b2a1eb-9b07_feedback_minimized {                        display: none;                        opacity: .96;                        height: 60px;                        position: fixed;                        direction: ltr !important;                    }                                        #_hj-f5b2a1eb-9b07_feedback #_hj-f5b2a1eb-9b07_feedback_minimized:hover {                        opacity: 1;                    }                                        /* BOTTOM LEFT AND BOTTOM RIGHT */                    #_hj-f5b2a1eb-9b07_feedback ._hj-f5b2a1eb-9b07_hotjar_buddy {                        position: absolute;                        right: 0;                        bottom: 0;                        height: 50px;                        width: 52px;                        font-size: 37px;                        cursor: pointer;                    }                                        #_hj-f5b2a1eb-9b07_feedback ._hj-f5b2a1eb-9b07_hotjar_buddy > span {                        position: relative;                        z-index: 2;                    }                                        #_hj-f5b2a1eb-9b07_feedback #_hj-f5b2a1eb-9b07_feedback_minimized ._hj-f5b2a1eb-9b07_hotjar_buddy:after {                        content: "";                        position: absolute;                        z-index: 1;                        top: 17px;                        left: 25px;                        background: rgba(0, 0, 0, .48);                        width: 6px;                        height: 1px;                        -webkit-box-shadow: 0 2px 18px 18px rgba(0, 0, 0, .48);                        -moz-box-shadow: 0 2px 18px 18px rgba(0, 0, 0, .48);                        box-shadow: 0 2px 18px 18px rgba(0, 0, 0, .48);                        -webkit-transition: all .2s ease-in-out;                        -moz-transition: all .2s ease-in-out;                        -o-transition: all .2s ease-in-out;                        -ms-transition: all .2s ease-in-out;                        transition: all .2s ease-in-out;                    }                                        #_hj-f5b2a1eb-9b07_feedback #_hj-f5b2a1eb-9b07_feedback_minimized:hover ._hj-f5b2a1eb-9b07_hotjar_buddy:after {                        -webkit-box-shadow: 0 2px 18px 18px rgba(0, 0, 0, .65);                        -moz-box-shadow: 0 2px 18px 18px rgba(0, 0, 0, .65);                        box-shadow: 0 2px 18px 18px rgba(0, 0, 0, .65);                    }                                        #_hj-f5b2a1eb-9b07_feedback ._hj-f5b2a1eb-9b07_feedback_minimized_message {                        opacity: 0;                        pointer-events: none;                        position: absolute;                        bottom: 11px;                        padding: 12px 15px;                        width: 180px;                        text-align: center;                        font-size: 12px !important;                        cursor: pointer;                        background: <%= widgetStyle.backgroundColor %>;                        -webkit-box-shadow: 0 2px 18px 0 rgba(0,0,0,.3);                        -moz-box-shadow: 0 2px 18px 0 rgba(0,0,0,.3);                        box-shadow: 0 2px 18px 0 rgba(0,0,0,.3);                        -webkit-box-sizing: border-box;                        -moz-box-sizing: border-box;                        box-sizing: border-box;                    }                                        #_hj-f5b2a1eb-9b07_feedback ._hj-f5b2a1eb-9b07_feedback_minimized_message:before {                        content: "";                        width: 1px;                        height: 1px;                        position: absolute;                        bottom: 13px;                        border-top: 6px solid transparent;                        border-bottom: 6px solid transparent;                    }                                        #_hj-f5b2a1eb-9b07_feedback ._hj-f5b2a1eb-9b07_feedback_minimized_message ._hj-f5b2a1eb-9b07_feedback_minimized_message_close {                        opacity: 0;                        position: absolute;                        top: -9px;                        right: -9px;                        width: 21px;                        height: 21px;                        -webkit-border-radius: 50%;                        -moz-border-radius: 50%;                        border-radius: 50%;                        font-size: 11px;                        line-height: 21px !important;                        text-align: center;                        cursor: pointer;                        background-color: <%= widgetStyle.accentColor %>;                        color: <%= widgetStyle.accentTextColor %>;                    }                    #_hj-f5b2a1eb-9b07_feedback #_hj-f5b2a1eb-9b07_feedback_minimized_message:hover ._hj-f5b2a1eb-9b07_feedback_minimized_message_close {                        opacity: 1;                    }                                        #_hj-f5b2a1eb-9b07_feedback ._hj-f5b2a1eb-9b07_feedback_minimized_message span {                        display: none !important;                        color: <%= widgetStyle.darkGrey %> !important;                    }                                        #_hj-f5b2a1eb-9b07_feedback ._hj-f5b2a1eb-9b07_feedback_minimized_message[data-message="initial"] > #_hj-f5b2a1eb-9b07_feedback_minimized_text_initial,                    #_hj-f5b2a1eb-9b07_feedback ._hj-f5b2a1eb-9b07_feedback_minimized_message[data-message="thankyou"] > #_hj-f5b2a1eb-9b07_feedback_minimized_text_thankyou {                        display: block !important;                    }                                        #_hj-f5b2a1eb-9b07_feedback #_hj-f5b2a1eb-9b07_feedback_minimized:hover ._hj-f5b2a1eb-9b07_feedback_minimized_message {                        -webkit-box-shadow: 0 2px 24px 0 rgba(0,0,0,.33);                        -moz-box-shadow: 0 2px 24px 0 rgba(0,0,0,.33);                        box-shadow: 0 2px 24px 0 rgba(0,0,0,.33);                    }                                        /* MIDDLE LEFT + MIDDLE RIGHT */                    #_hj-f5b2a1eb-9b07_feedback ._hj-f5b2a1eb-9b07_feedback_minimized_label {                        position: relative;                        width: 40px;                        padding: 12px 14px 12px 12px;                        background: <%= widgetStyle.accentColor %>;                        cursor: pointer;                        -webkit-transition: -webkit-box-shadow 0.1s ease-in-out;                        -moz-transition: -moz-box-shadow 0.1s ease-in-out;                        -o-transition: -o-box-shadow 0.1s ease-in-out;                        -ms-transition: -ms-box-shadow 0.1s ease-in-out;                        transition: box-shadow 0.1s ease-in-out;                        -webkit-box-sizing: border-box !important;                        -moz-box-sizing: border-box !important;                        box-sizing: border-box !important;                    }                                        #_hj-f5b2a1eb-9b07_feedback ._hj-f5b2a1eb-9b07_feedback_minimized_label:hover {                        -webkit-box-shadow: 0 0 35px 2px rgba(0,0,0,.24);                        -moz-box-shadow: 0 0 35px 2px rgba(0,0,0,.24);                        box-shadow: 0 0 35px 2px rgba(0,0,0,.24);                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_left"] ._hj-f5b2a1eb-9b07_feedback_minimized_label {                        left: -2px;                        border-radius: 0 3px 3px 0;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_left"] ._hj-f5b2a1eb-9b07_feedback_minimized_label:hover {                        left: 0;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_right"] ._hj-f5b2a1eb-9b07_feedback_minimized_label {                        right: -2px;                        border-radius: 3px 0 0 3px;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_right"] ._hj-f5b2a1eb-9b07_feedback_minimized_label:hover {                        right: 0;                    }                                        #_hj-f5b2a1eb-9b07_feedback ._hj-f5b2a1eb-9b07_feedback_minimized_label ._hj-f5b2a1eb-9b07_feedback_minimized_label_text {                        color: <%= widgetStyle.accentTextColor %>;                        display: inline-block !important;                        overflow-wrap: normal !important;                        word-break: normal !important;                        word-wrap: normal !important;                        white-space: nowrap !important;                        filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);                        cursor: pointer;                        -webkit-writing-mode: vertical-lr;                        -moz-writing-mode: vertical-lr;                        -ms-writing-mode: tb-rl;                        -o-writing-mode: vertical-lr;                        writing-mode: vertical-lr;                        -webkit-transform: rotate(180deg);                        -moz-transform: rotate(180deg);                        -ms-transform: rotate(180deg);                        -o-transform: rotate(180deg);                        transform: rotate(180deg);                    }                                        #_hj-f5b2a1eb-9b07_feedback ._hj-f5b2a1eb-9b07_feedback_minimized_label ._hj-f5b2a1eb-9b07_icon_face {                        display: inline-block !important;                        margin: 10px 0 0 -3px;                        font-size: 14px;                    }                                        #_hj-f5b2a1eb-9b07_feedback ._hj-f5b2a1eb-9b07_feedback_minimized_label ._hj-f5b2a1eb-9b07_icon_face .path1:before { color: <%= widgetStyle.accentTextColor %> !important; }                    #_hj-f5b2a1eb-9b07_feedback ._hj-f5b2a1eb-9b07_feedback_minimized_label ._hj-f5b2a1eb-9b07_icon_face .path2:before { color: <%= widgetStyle.accentColor %> !important; }                    #_hj-f5b2a1eb-9b07_feedback ._hj-f5b2a1eb-9b07_feedback_minimized_label ._hj-f5b2a1eb-9b07_icon_face .path3:before { color: <%= widgetStyle.accentColor %> !important; }                    #_hj-f5b2a1eb-9b07_feedback ._hj-f5b2a1eb-9b07_feedback_minimized_label ._hj-f5b2a1eb-9b07_icon_face .path4:before { color: <%= widgetStyle.accentColor %> !important; }                                        #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="bottom_right"] #_hj-f5b2a1eb-9b07_feedback_minimized { bottom: 20px; right: 30px; }                    #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="bottom_right"] ._hj-f5b2a1eb-9b07_feedback_minimized_label {display: none !important;}                    #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="bottom_right"] ._hj-f5b2a1eb-9b07_hotjar_buddy {right: 0;}                    #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="bottom_right"] #_hj-f5b2a1eb-9b07_feedback_open_close,                    #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="bottom_right"] #_hj-f5b2a1eb-9b07_feedback_open { right: 30px; }                                        #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="bottom_left"] #_hj-f5b2a1eb-9b07_feedback_minimized { bottom: 20px; left: 30px; }                    #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="bottom_left"] ._hj-f5b2a1eb-9b07_feedback_minimized_label {display: none !important;}                    #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="bottom_left"] ._hj-f5b2a1eb-9b07_hotjar_buddy {left: 0;}                    #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="bottom_left"] #_hj-f5b2a1eb-9b07_feedback_open_close,                    #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="bottom_left"] #_hj-f5b2a1eb-9b07_feedback_open { left: 37px; }                                        #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="bottom_right"] ._hj-f5b2a1eb-9b07_feedback_minimized_message {right: 62px;}                    #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="bottom_right"] ._hj-f5b2a1eb-9b07_feedback_minimized_message:before,                    #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_right"] ._hj-f5b2a1eb-9b07_feedback_minimized_message:before {right: -7px; border-left: 7px solid white;}                                        #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="bottom_left"] ._hj-f5b2a1eb-9b07_feedback_minimized_message {left: 62px;}                    #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="bottom_left"] ._hj-f5b2a1eb-9b07_feedback_minimized_message:before,                    #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_left"] ._hj-f5b2a1eb-9b07_feedback_minimized_message:before {left: -7px; border-right: 7px solid white;}                                        #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_left"] #_hj-f5b2a1eb-9b07_feedback_open_close,                    #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_right"] #_hj-f5b2a1eb-9b07_feedback_open_close { display: none; }                                        #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_left"] #_hj-f5b2a1eb-9b07_feedback_open_close_phone,                    #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_right"] #_hj-f5b2a1eb-9b07_feedback_open_close_phone { display: block; }                                        #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_left"] #_hj-f5b2a1eb-9b07_feedback_open,                    #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_left"] #_hj-f5b2a1eb-9b07_feedback_open.fade,                    #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_right"] #_hj-f5b2a1eb-9b07_feedback_open,                    #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_right"] #_hj-f5b2a1eb-9b07_feedback_open.fade { bottom: <%= widgetStyle.middlePositionPixels - 100 %>px; }                                        #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_left"] ._hj-f5b2a1eb-9b07_hotjar_buddy,                    #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_right"] ._hj-f5b2a1eb-9b07_hotjar_buddy { display: none !important; }                                        #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_left"] ._hj-f5b2a1eb-9b07_feedback_minimized_message,                    #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_right"] ._hj-f5b2a1eb-9b07_feedback_minimized_message {top: 50%; bottom: auto;}                                        #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_left"] #_hj-f5b2a1eb-9b07_feedback_minimized { bottom: <%= widgetStyle.middlePositionPixels %>px; left: 0; }                    #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_left"] ._hj-f5b2a1eb-9b07_feedback_minimized_message {left: 52px;}                                        #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_right"] #_hj-f5b2a1eb-9b07_feedback_minimized { bottom: <%= widgetStyle.middlePositionPixels %>px; right: 0; }                    #_hj-f5b2a1eb-9b07_feedback[data-minimized-position="middle_right"] ._hj-f5b2a1eb-9b07_feedback_minimized_message {right: 52px;}                                        /************************                     * OPEN STATE                    *************************/                    #_hj-f5b2a1eb-9b07_feedback_open_close {                        opacity: 0;                        pointer-events: none;                        position: fixed;                        z-index: 10;                        bottom: 33px;                        width: 44px;                        height: 37px;                        font-size: 20px;                        text-align: center !important;                        cursor: pointer;                        background-color: <%= widgetStyle.accentColor %> !important;                        color: <%= widgetStyle.accentTextColor %> !important;                        padding-left: 1px;                        -webkit-border-radius: 5px;                        -moz-border-radius: 5px;                        border-radius: 5px;                        -webkit-box-shadow: 0 2px 10px 1px rgba(0,0,0,.18);                        -moz-box-shadow: 0 2px 10px 1px rgba(0,0,0,.18);                        box-shadow: 0 2px 10px 1px rgba(0,0,0,.18);                    }                                        #_hj-f5b2a1eb-9b07_feedback_open_close_phone {                        display: none;                        font-size: 18px;                        text-align: center;                        cursor: pointer;                        background-color: <%= widgetStyle.accentColor %>;                        color: <%= widgetStyle.accentTextColor %>;                        width: 35px;                        height: 34px;                        z-index: 11;                        right: 20px;                        top: -17px;                        position: absolute;                        border-radius: 50%;                        padding-left: 1px;                        padding-bottom: 2px;                    }                                        #_hj-f5b2a1eb-9b07_feedback_open_close span,                    #_hj-f5b2a1eb-9b07_feedback_open_close_phone span {                        line-height: 36px !important;                    }                                        #_hj-f5b2a1eb-9b07_feedback #_hj-f5b2a1eb-9b07_feedback_open {                        opacity: 0;                        pointer-events: none;                        position: absolute;                        z-index: 10;                        width: 320px;                        bottom: 84px;                        right: 30px;                        background: <%= widgetStyle.backgroundColor %>;                        -webkit-box-shadow: 0 6px 100px 0 rgba(0,0,0,.35)!important;                        -moz-box-shadow: 0 6px 100px 0 rgba(0,0,0,.35)!important;                        box-shadow: 0 6px 100px 0 rgba(0,0,0,.35)!important;                    }                                        #_hj-f5b2a1eb-9b07_feedback #_hj-f5b2a1eb-9b07_feedback_open.fade {                        opacity: 1;                        bottom: 92px;                        pointer-events: all;                    }                                        #_hj-f5b2a1eb-9b07_feedback #_hj-f5b2a1eb-9b07_feedback_open [data-state] {                        display: none;                    }                                        /* Widget content (emotion + comment + email) */                    #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_emotion_content {margin-top: 30px; margin-bottom: 50px;}                    #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_emotion_content ._hj-f5b2a1eb-9b07_emotion_option {position: relative; float: left !important; bottom: -50px; opacity: 0; width: 20%; text-align: center; font-size: 26px; cursor: pointer; height: 30px;}                    #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_emotion_content ._hj-f5b2a1eb-9b07_emotion_option.fade {bottom: 0; opacity: 1; font-size: 30px;}                    #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_emotion_content ._hj-f5b2a1eb-9b07_emotion_option.emotion_small {bottom: 0; opacity: 1; font-size: 26px; height: 26px;}                    #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_emotion_content ._hj-f5b2a1eb-9b07_emotion_option.fadeTransition {                        -webkit-transition: all .3s cubic-bezier(0.175, 0.885, 0.320, 1);                        -webkit-transition: all .3s cubic-bezier(0.175, 0.885, 0.320, 1.350);                           -moz-transition: all .3s cubic-bezier(0.175, 0.885, 0.320, 1.350);                             -o-transition: all .3s cubic-bezier(0.175, 0.885, 0.320, 1.350);                                transition: all .3s cubic-bezier(0.175, 0.885, 0.320, 1.350);                    }                    #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_emotion_content [data-emotion-option="1"].fadeTransition {                        -webkit-transition-delay: .1s;                        -moz-transition-delay: .1s;                        -o-transition-delay: .1s;                        -ms-transition-delay: .1s;                        transition-delay: .1s;                    }                    #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_emotion_content [data-emotion-option="2"].fadeTransition {                        -webkit-transition-delay: .175s;                        -moz-transition-delay: .175s;                        -o-transition-delay: .175s;                        -ms-transition-delay: .175s;                        transition-delay: .175s;                    }                    #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_emotion_content [data-emotion-option="3"].fadeTransition {                        -webkit-transition-delay: .250s;                        -moz-transition-delay: .250s;                        -o-transition-delay: .250s;                        -ms-transition-delay: .250s;                        transition-delay: .250s;                    }                    #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_emotion_content [data-emotion-option="4"].fadeTransition {                        -webkit-transition-delay: .325s;                        -moz-transition-delay: .325s;                        -o-transition-delay: .325s;                        -ms-transition-delay: .325s;                        transition-delay: .325s;                    }                                        #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_emotion_content ._hj-f5b2a1eb-9b07_emotion_text {                        position: absolute;                        font-size: 12px;                        color: #999;                        text-align: center;                        padding-left: 6px;                        top: 47px;                        left: 0;                        right: 0;                        opacity: 0;                    }                                        #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_emotion_content:hover ._hj-f5b2a1eb-9b07_emotion_option {opacity: .6}                    #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_emotion_content ._hj-f5b2a1eb-9b07_emotion_option:hover {opacity: 1;}                    #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_emotion_content ._hj-f5b2a1eb-9b07_emotion_option:hover ._hj-f5b2a1eb-9b07_emotion_text {opacity: 1; top: 42px;}                                        #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_emotion_comment_holder {position: relative; display: none;}                    #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_emotion_comment_holder:before {content: ""; width: 1px; height: 1px; position: absolute; left: auto; top: -6px; border-left: 4px solid transparent; border-right: 4px solid transparent; border-bottom: 5px solid rgba(0,0,0,.1);}                    #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion] ._hj-f5b2a1eb-9b07_emotion_comment_holder {display: block;}                    #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion="0"] ._hj-f5b2a1eb-9b07_emotion_comment_holder:before {left: 9.5%;}                    #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion="1"] ._hj-f5b2a1eb-9b07_emotion_comment_holder:before {left: 29.5%;}                    #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion="2"] ._hj-f5b2a1eb-9b07_emotion_comment_holder:before {left: 49.5%;}                    #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion="3"] ._hj-f5b2a1eb-9b07_emotion_comment_holder:before {left: 69.5%;}                    #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion="4"] ._hj-f5b2a1eb-9b07_emotion_comment_holder:before {left: 89.5%;}                                        #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion] [data-emotion-option] .path1:before {color: <%= widgetStyle.disabledColor %>;}                    #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion="0"] [data-emotion-option="0"] .path1:before,                    #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion="1"] [data-emotion-option="1"] .path1:before,                    #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion="2"] [data-emotion-option="2"] .path1:before,                    #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion="3"] [data-emotion-option="3"] .path1:before,                    #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion="4"] [data-emotion-option="4"] .path1:before {color: <%= widgetStyle.selectionColor %>;}                    #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion] ._hj-f5b2a1eb-9b07_emotion_text {display: none !important;}                                        #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_toolset_actions {                        margin: -3px -12px 12px -12px; background: #eaeaeb !important; padding: 10px 20px;                    }                                        #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_toolset_actions > div {                        font-size: 22px; opacity: .75; cursor: pointer; display: inline-block; position: relative;                    }                                        #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_toolset_actions > div._hj-f5b2a1eb-9b07_toolset_action_active {                        color: <%= widgetStyle.accentColor %>; opacity: 1;                    }                                        #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_toolset_actions > div:hover {                        opacity: 1;                    }                                        #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_toolset_actions > div > ._hj-f5b2a1eb-9b07_toolset_tooltip {                        background: black; color: white; font-size: 12px; padding: 8px 12px; border-radius: 3px; position: absolute; left: 40px; top: -4px; width: 195px; opacity: 0; pointer-events: none;                    }                                        #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_toolset_actions > div > ._hj-f5b2a1eb-9b07_toolset_tooltip:before {                        content: "";                        width: 1px;                        height: 1px;                        position: absolute;                        left: -6px;                        top: 10px;                        border-top: 4px solid transparent;                        border-bottom: 4px solid transparent;                        border-right: 5px solid black;                    }                                        #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget._hj-f5b2a1eb-9b07_rtl #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_toolset_actions > div > ._hj-f5b2a1eb-9b07_toolset_tooltip {                        left: auto; right: 40px; top: -4px;                    }                                        #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget._hj-f5b2a1eb-9b07_rtl #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_toolset_actions > div > ._hj-f5b2a1eb-9b07_toolset_tooltip:before {                        left: auto;                        right: -6px;                        border-right: 0;                        border-left: 5px solid black;                    }                                        #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_toolset_actions > div:hover > ._hj-f5b2a1eb-9b07_toolset_tooltip {                        opacity: 1;                    }                                        /* Overlay + dimmers + highlighters */                    #_hj-f5b2a1eb-9b07_feedback ._hj-f5b2a1eb-9b07_feedback_content_dimmer {                        opacity: 0;                        background: black;                        position: fixed;                        z-index: -1;                        -webkit-transition: opacity .2s ease-in-out;                        -moz-transition: opacity .2s ease-in-out;                        -o-transition: opacity .2s ease-in-out;                        -ms-transition: opacity .2s ease-in-out;                        transition: opacity .2s ease-in-out;                    }                                        #_hj-f5b2a1eb-9b07_feedback_content_highlighter {                        display: none;                        border: 4px dashed <%= widgetStyle.selectionColor %>;                        -webkit-border-radius: 3px;                        -moz-border-radius: 3px;                        border-radius: 3px;                        position: fixed;                        z-index: -1;                        -webkit-box-sizing: initial !important;                        -moz-box-sizing: initial !important;                        box-sizing: initial !important;                        -webkit-transition: border .2s linear;                        -moz-transition: border .2s ease-in-out;                        -o-transition: border .2s ease-in-out;                        -ms-transition: border .2s ease-in-out;                        transition: border .2s ease-in-out;                    }                                        #_hj-f5b2a1eb-9b07_feedback_content_highlighter #_hj-f5b2a1eb-9b07_feedback_content_highlighter_close {                        display: none;                        font-size: 12px;                        text-align: center;                        cursor: pointer;                        background-color: <%= widgetStyle.accentColor %>;                        color: <%= widgetStyle.accentTextColor %>;                        z-index: 11;                        right: -12px;                        top: -13px;                        position: absolute;                        border-radius: 50%;                        padding: 5px 7px 3px 7px;                    }                                        /* SCREENSHOT + ELEMENT SELECTION */                    /* Page highlight - ENABLED */                    #_hj-f5b2a1eb-9b07_feedback_page_highlight {                        position: fixed;                        pointer-events: none;                        top: 0;                        right: 0;                        bottom: 0;                        left: 0;                        z-index: 5;                    }                                        #_hj-f5b2a1eb-9b07_feedback_page_highlight > ._hj-f5b2a1eb-9b07_feedback_page_highlight_line {                        opacity: 0;                        position: absolute;                        background: <%= widgetStyle.accentColor %>                    }                    #_hj-f5b2a1eb-9b07_feedback_page_highlight > #_hj-f5b2a1eb-9b07_feedback_page_highlight_line_top {top: 0; left: 0; right: 0; height: 4px;}                    #_hj-f5b2a1eb-9b07_feedback_page_highlight > #_hj-f5b2a1eb-9b07_feedback_page_highlight_line_right {top: 0; bottom: 0; right: 0; width: 4px;}                    #_hj-f5b2a1eb-9b07_feedback_page_highlight > #_hj-f5b2a1eb-9b07_feedback_page_highlight_line_bottom {bottom: 0; left: 0; right: 0; height: 4px;}                    #_hj-f5b2a1eb-9b07_feedback_page_highlight > #_hj-f5b2a1eb-9b07_feedback_page_highlight_line_left {top: 0; left: 0; bottom: 0; width: 4px;}                                        /* Page highlight - TOP MESSAGE */                    #_hj-f5b2a1eb-9b07_feedback_page_highlight > #_hj-f5b2a1eb-9b07_feedback_top_message_select {                        opacity: 0;                        position: fixed;                        top: -4px;                        left: 50%;                        width: 260px;                        margin-left: -130px;                        padding: 23px 0 19px 0;                        text-align: center;                        font-size: 13px;                        -webkit-border-radius: 0 0 10px 10px;                        -moz-border-radius: 0 0 10px 10px;                        border-radius: 0 0 10px 10px;                        background-color: <%= widgetStyle.selectionColor %>;                        color: <%= widgetStyle.selectionTextColor %>;                        -webkit-box-shadow: 0 2px 25px 3px rgba(0,0,0,.3);                        -moz-box-shadow: 0 2px 25px 3px rgba(0,0,0,.3);                        box-shadow: 0 2px 25px 3px rgba(0,0,0,.3);                    }                                        #_hj-f5b2a1eb-9b07_feedback_page_highlight > #_hj-f5b2a1eb-9b07_feedback_top_message_select {                    }                                        #_hj-f5b2a1eb-9b07_feedback_page_highlight > #_hj-f5b2a1eb-9b07_feedback_top_message_select:before,                    #_hj-f5b2a1eb-9b07_feedback_page_highlight > #_hj-f5b2a1eb-9b07_feedback_top_message_select:after {                        content:"";                        display: block;                        width: 55px;                        height: 50px;                        background-color:                        <%= widgetStyle.accentColor %>;                        position: absolute;                        top: 0;                        z-index: -1;                    }                                        #_hj-f5b2a1eb-9b07_feedback_page_highlight > #_hj-f5b2a1eb-9b07_feedback_top_message_select:before {                        left: -9px;                        -webkit-transform: skewX(20deg);                        -moz-transform: skewX(20deg);                        -ms-transform: skewX(20deg);                        transform: skewX(20deg);                    }                                        #_hj-f5b2a1eb-9b07_feedback_page_highlight > #_hj-f5b2a1eb-9b07_feedback_top_message_select:after {                        right: -9px;                        -webkit-transform: skewX(-20deg);                        -moz-transform: skewX(-20deg);                        -ms-transform: skewX(-20deg);                        transform: skewX(-20deg);                    }                                        #_hj-f5b2a1eb-9b07_feedback_page_highlight > #_hj-f5b2a1eb-9b07_feedback_top_message_select #_hj-f5b2a1eb-9b07_feedback_top_message_select_close {                        position: absolute;                        right: 13px;                        top: 21px;                        color: <%= widgetStyle.selectionTextColor %>;                        text-decoration: none;                        cursor: pointer;                        height: 19px;                        width: 19px;                        padding: 3px 0 0 1px;                        border-radius: 50%;                        background: transparent;                        -webkit-box-sizing: border-box !important;                        -moz-box-sizing: border-box !important;                        box-sizing: border-box !important;                    }                                        #_hj-f5b2a1eb-9b07_feedback_page_highlight > #_hj-f5b2a1eb-9b07_feedback_top_message_select #_hj-f5b2a1eb-9b07_feedback_top_message_select_close:hover {                        background: rgba(0,0,0,.2);                    }                                        /************************                     * OLD WIDGETS CSS OVERRIDES                    *************************/                                        [data-hotjar-cursor-pointer],                    [data-hotjar-cursor-pointer] * {cursor: pointer !important;}                                        #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget,                    #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget *,                    #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_widget_content ._hj-f5b2a1eb-9b07_widget_input_field {                        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important;                    }                                        #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget p {                        color: <%= widgetStyle.darkGrey %> !important;                    }                                        #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_btn_primary,                    #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_btn_primary:hover,                    #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_btn_primary:focus,                    #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_btn_primary:active {background: <%= widgetStyle.accentColor %> !important; color: <%= widgetStyle.accentTextColor %> !important; font-weight: normal !important;}                                        #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_btn_clear {color: #aaaaaa !important;}                    #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_btn_clear:hover,                    #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_btn_clear:focus,                    #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_btn_clear:active {color: #666666 !important;}                                        #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_btn_disabled,                    #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_btn_disabled:hover,                    #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_btn_disabled:focus,                    #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_btn_disabled:active {background: <%= widgetStyle.disabledColor %> !important; color: <%= widgetStyle.darkGrey %> !important; }                                        #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_widget_title {padding: 30px !important; cursor: default; font-size: 17px; font-weight: normal; line-height: normal !important;}                    #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_widget_title a {color: inherit !important; text-decoration: underline !important;}                                        #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_widget_content ._hj-f5b2a1eb-9b07_input_field {border: 0 !important; background: #eaeaeb !important; color: #454A55 !important; padding: 12px 20px !important; margin-left: -12px; margin-right: -12px; margin-bottom: 10px; width: 320px; -webkit-box-shadow: none !important; -moz-box-shadow: none !important; box-shadow: none !important;}                    #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_widget_content textarea._hj-f5b2a1eb-9b07_input_field {height: 105px !important; line-height: 18px !important; margin-bottom: 0;}                    #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_widget_content input._hj-f5b2a1eb-9b07_input_field {height: 46px; !important; text-align: center;}                                        #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_widget_footer {border-top: 0!important;}                    #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_widget_footer ._hj-f5b2a1eb-9b07_pull_left {padding: 9px 0 20px 20px; color: <%= widgetStyle.darkGrey %>;}                    #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_widget_footer ._hj-f5b2a1eb-9b07_pull_left a {color: <%= widgetStyle.darkGrey %>;}                    #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_widget_footer ._hj-f5b2a1eb-9b07_pull_left span {color: #f4364c;}                    #_hj-f5b2a1eb-9b07_feedback._hj-f5b2a1eb-9b07_widget ._hj-f5b2a1eb-9b07_widget_footer ._hj-f5b2a1eb-9b07_pull_right {display: none; padding-top: 0; border-top: 0!important;}                                        /************************                     * STATE MODIFICATIONS                    *************************/                    #_hj-f5b2a1eb-9b07_feedback[data-state="minimized"] {width: 80px;}                    #_hj-f5b2a1eb-9b07_feedback[data-state="minimized"] #_hj-f5b2a1eb-9b07_feedback_minimized {display: block;}                    #_hj-f5b2a1eb-9b07_feedback[data-state="minimized"][data-show-message] {width: 280px;}                    #_hj-f5b2a1eb-9b07_feedback[data-state="minimized"][data-show-message] ._hj-f5b2a1eb-9b07_feedback_minimized_message {pointer-events: all; opacity: 1;}                    #_hj-f5b2a1eb-9b07_feedback[data-state="minimized"][data-minimized-position="bottom_right"][data-show-message] ._hj-f5b2a1eb-9b07_feedback_minimized_message    {right: 70px;}                    #_hj-f5b2a1eb-9b07_feedback[data-state="minimized"][data-minimized-position="bottom_left"][data-show-message] ._hj-f5b2a1eb-9b07_feedback_minimized_message     {left: 70px;}                    #_hj-f5b2a1eb-9b07_feedback[data-state="minimized"][data-minimized-position="middle_right"][data-show-message] ._hj-f5b2a1eb-9b07_feedback_minimized_message    {right: 60px;}                    #_hj-f5b2a1eb-9b07_feedback[data-state="minimized"][data-minimized-position="middle_left"][data-show-message] ._hj-f5b2a1eb-9b07_feedback_minimized_message     {left: 60px;}                    #_hj-f5b2a1eb-9b07_feedback[data-state="minimized"] ._hj-f5b2a1eb-9b07_feedback_content_dimmer,                    #_hj-f5b2a1eb-9b07_feedback[data-state="minimized"] #_hj-f5b2a1eb-9b07_feedback_content_highlighter {display: none;}                                        #_hj-f5b2a1eb-9b07_feedback[data-state="emotion"] {width: 320px;}                    #_hj-f5b2a1eb-9b07_feedback[data-state="emotion"] #_hj-f5b2a1eb-9b07_feedback_open_close {opacity: 1; pointer-events: all;}                    #_hj-f5b2a1eb-9b07_feedback[data-state="emotion"] #_hj-f5b2a1eb-9b07_feedback_open [data-state="emotion"] {display: block;}                    #_hj-f5b2a1eb-9b07_feedback[data-state="emotion"] #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_widget_footer ._hj-f5b2a1eb-9b07_pull_left {padding-top: 0;}                    #_hj-f5b2a1eb-9b07_feedback[data-state="emotion"] #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_widget_footer ._hj-f5b2a1eb-9b07_btn_clear {display: none;}                    #_hj-f5b2a1eb-9b07_feedback[data-state="emotion"] #_hj-f5b2a1eb-9b07_state-1 p._hj-f5b2a1eb-9b07_widget_title {padding-top: 40px !important; padding-bottom: 0 !important;}                                        #_hj-f5b2a1eb-9b07_feedback[data-state="comment"] #_hj-f5b2a1eb-9b07_feedback_open_close {opacity: 1; pointer-events: all;}                    #_hj-f5b2a1eb-9b07_feedback[data-state="comment"] #_hj-f5b2a1eb-9b07_feedback_open [data-state="emotion"] {display: block;}                    #_hj-f5b2a1eb-9b07_feedback[data-state="comment"] #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_emotion_content {margin-bottom: 20px;}                    #_hj-f5b2a1eb-9b07_feedback[data-state="comment"] #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_widget_footer ._hj-f5b2a1eb-9b07_pull_right {display: block;}                    #_hj-f5b2a1eb-9b07_feedback[data-state="comment"] #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_widget_footer ._hj-f5b2a1eb-9b07_btn_clear {display: none;}                    #_hj-f5b2a1eb-9b07_feedback[data-state="comment"] #_hj-f5b2a1eb-9b07_state-1 p._hj-f5b2a1eb-9b07_widget_title {display: none;}                                        #_hj-f5b2a1eb-9b07_feedback[data-state="email"] #_hj-f5b2a1eb-9b07_feedback_open [data-state="email"] {display: block;}                    #_hj-f5b2a1eb-9b07_feedback[data-state="email"] #_hj-f5b2a1eb-9b07_feedback_open_close {opacity: 1; pointer-events: all;}                    #_hj-f5b2a1eb-9b07_feedback[data-state="email"] #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_widget_footer ._hj-f5b2a1eb-9b07_pull_left {display: none;}                    #_hj-f5b2a1eb-9b07_feedback[data-state="email"] #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_widget_footer ._hj-f5b2a1eb-9b07_pull_right {display: block;}                                        #_hj-f5b2a1eb-9b07_feedback[data-screenshot] {top: 0; bottom: 0; left: 0; right: 0; width: 100% !important;}                                        #_hj-f5b2a1eb-9b07_feedback[data-screenshot="element"] {pointer-events: none;}                    #_hj-f5b2a1eb-9b07_feedback[data-screenshot="element"] #_hj-f5b2a1eb-9b07_feedback_top_message_select #_hj-f5b2a1eb-9b07_feedback_top_message_select_close {pointer-events: all;}                    #_hj-f5b2a1eb-9b07_feedback[data-screenshot="element"] #_hj-f5b2a1eb-9b07_feedback_open_close {display: none !important;}                    #_hj-f5b2a1eb-9b07_feedback[data-screenshot="element"] #_hj-f5b2a1eb-9b07_feedback_open {display: none !important;}                    #_hj-f5b2a1eb-9b07_feedback[data-screenshot="element"] ._hj-f5b2a1eb-9b07_feedback_content_dimmer {opacity: .45;}                    #_hj-f5b2a1eb-9b07_feedback[data-screenshot="element"] #_hj-f5b2a1eb-9b07_feedback_content_highlighter {display: block;}                    #_hj-f5b2a1eb-9b07_feedback[data-screenshot="element"] #_hj-f5b2a1eb-9b07_feedback_page_highlight > #_hj-f5b2a1eb-9b07_feedback_top_message_select {opacity: 1;}                    #_hj-f5b2a1eb-9b07_feedback[data-screenshot="element"] #_hj-f5b2a1eb-9b07_feedback_page_highlight > ._hj-f5b2a1eb-9b07_feedback_page_highlight_line {opacity: 1;}                    #_hj-f5b2a1eb-9b07_feedback[data-screenshot="element"] #_hj-f5b2a1eb-9b07_feedback_page_highlight > #_hj-f5b2a1eb-9b07_feedback_top_message_select:before,                    #_hj-f5b2a1eb-9b07_feedback[data-screenshot="element"] #_hj-f5b2a1eb-9b07_feedback_page_highlight > #_hj-f5b2a1eb-9b07_feedback_top_message_select:after {background: <%= widgetStyle.selectionColor %> !important;}                    #_hj-f5b2a1eb-9b07_feedback[data-screenshot="element"] #_hj-f5b2a1eb-9b07_feedback_page_highlight > ._hj-f5b2a1eb-9b07_feedback_page_highlight_line {background: <%= widgetStyle.selectionColor %> !important;}                                        #_hj-f5b2a1eb-9b07_feedback[data-screenshot="elementSelected"] ._hj-f5b2a1eb-9b07_feedback_content_dimmer {opacity: .45;}                    #_hj-f5b2a1eb-9b07_feedback[data-screenshot="elementSelected"] #_hj-f5b2a1eb-9b07_feedback_content_highlighter {display: block; pointer-events: all; cursor: pointer; border-style: solid; border-color: <%= widgetStyle.accentColor %> !important;}                    #_hj-f5b2a1eb-9b07_feedback[data-screenshot="elementSelected"] #_hj-f5b2a1eb-9b07_feedback_content_highlighter:before {content: "<%=hj.widget._("change")%>"; position: absolute; background: <%= widgetStyle.accentColor %>; color: <%= widgetStyle.accentTextColor %>; bottom: -32px; right: -4px; padding: 8px 12px; border-radius: 0 0 3px 3px; font-size: 12px;}                    #_hj-f5b2a1eb-9b07_feedback[data-screenshot="elementSelected"] #_hj-f5b2a1eb-9b07_feedback_content_highlighter_close {display: block;}                                        /************************                     * DEVICE ADAPTATIONS                    *************************/                                        #_hj-f5b2a1eb-9b07_feedback[data-device="desktop"] [data-show-for="phone"],                    #_hj-f5b2a1eb-9b07_feedback[data-device="desktop"] [data-show-for="tablet"],                    #_hj-f5b2a1eb-9b07_feedback[data-device="tablet"] [data-show-for="desktop"],                    #_hj-f5b2a1eb-9b07_feedback[data-device="tablet"] [data-show-for="phone"],                    #_hj-f5b2a1eb-9b07_feedback[data-device="phone"] [data-show-for="desktop"],                    #_hj-f5b2a1eb-9b07_feedback[data-device="phone"] [data-show-for="tablet"],                    #_hj-f5b2a1eb-9b07_feedback[data-viewmode="touch"] [data-show-for="desktop"],                    #_hj-f5b2a1eb-9b07_feedback[data-viewmode="desktop"] [data-show-for="touch"] {                        display: none !important;                    }                                        /************************                     * DESKTOP VIEWMODE ADAPTATIONS                     *************************/                                        #_hj-f5b2a1eb-9b07_feedback[data-viewmode="desktop"][data-minimized-position="middle_left"] #_hj-f5b2a1eb-9b07_feedback_minimized { bottom: <%= widgetStyle.middlePositionPixels %>px; left: 0; }                    #_hj-f5b2a1eb-9b07_feedback[data-viewmode="desktop"][data-minimized-position="middle_left"] ._hj-f5b2a1eb-9b07_feedback_minimized_message {left: 52px;}                    #_hj-f5b2a1eb-9b07_feedback[data-viewmode="desktop"][data-minimized-position="middle_left"] #_hj-f5b2a1eb-9b07_feedback_open      { left: 22px; }                    #_hj-f5b2a1eb-9b07_feedback[data-viewmode="desktop"][data-minimized-position="middle_left"] #_hj-f5b2a1eb-9b07_feedback_open.fade { left: 37px; }                                        #_hj-f5b2a1eb-9b07_feedback[data-viewmode="desktop"][data-minimized-position="middle_right"] #_hj-f5b2a1eb-9b07_feedback_minimized { bottom: <%= widgetStyle.middlePositionPixels %>px; right: 0; }                    #_hj-f5b2a1eb-9b07_feedback[data-viewmode="desktop"][data-minimized-position="middle_right"] ._hj-f5b2a1eb-9b07_feedback_minimized_message {right: 52px;}                    #_hj-f5b2a1eb-9b07_feedback[data-viewmode="desktop"][data-minimized-position="middle_right"] #_hj-f5b2a1eb-9b07_feedback_open      { right: 15px; }                    #_hj-f5b2a1eb-9b07_feedback[data-viewmode="desktop"][data-minimized-position="middle_right"] #_hj-f5b2a1eb-9b07_feedback_open.fade { right: 30px; }                                        #_hj-f5b2a1eb-9b07_feedback[data-viewmode="desktop"] #_hj-f5b2a1eb-9b07_feedback_open_close_phone {                        font-size: 15px;                        width: 26px;                        height: 25px;                        top: -13px;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-viewmode="desktop"] #_hj-f5b2a1eb-9b07_feedback_open_close_phone span {                        line-height: 28px !important;                    }                                        /************************                     * TOUCH VIEWMODE ADAPTATIONS (Tablets / Phones)                    *************************/                                        #_hj-f5b2a1eb-9b07_feedback[data-viewmode="touch"][data-state="emotion"],                     #_hj-f5b2a1eb-9b07_feedback[data-viewmode="touch"][data-state="comment"],                     #_hj-f5b2a1eb-9b07_feedback[data-viewmode="touch"][data-state="email"] {                        top: 0;                        bottom: 0;                        left: 0;                        right: 0;                        width: 100%;                        height: 100%;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-viewmode="touch"] ._hj-f5b2a1eb-9b07_feedback_minimized_message ._hj-f5b2a1eb-9b07_feedback_minimized_message_close {                        opacity: 1 !important;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-viewmode="touch"] #_hj-f5b2a1eb-9b07_feedback_open_close {                        display: none;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-viewmode="touch"] #_hj-f5b2a1eb-9b07_feedback_open_close_phone {                        display: block;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-viewmode="touch"] ._hj-f5b2a1eb-9b07_widget_content textarea._hj-f5b2a1eb-9b07_input_field,                     #_hj-f5b2a1eb-9b07_feedback[data-viewmode="touch"] ._hj-f5b2a1eb-9b07_widget_content input._hj-f5b2a1eb-9b07_input_field {                        font-size: 17px !important;                        margin: 0;                        width: 100%;                        border-radius: 4px 4px 0 0;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-viewmode="touch"] ._hj-f5b2a1eb-9b07_widget_content textarea._hj-f5b2a1eb-9b07_input_field {                        line-height: 1.4em !important;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-viewmode="touch"] ._hj-f5b2a1eb-9b07_widget_content input._hj-f5b2a1eb-9b07_input_field {                        line-height: normal !important;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-viewmode="touch"][data-state="comment"] #_hj-f5b2a1eb-9b07_feedback_open,                     #_hj-f5b2a1eb-9b07_feedback[data-viewmode="touch"][data-state="email"] #_hj-f5b2a1eb-9b07_feedback_open {                        top: 0;                        right: 0;                        bottom: 0;                        left: 0;                        margin-left: 0 !important;                        border-radius: 0;                        width: 100%;                        height: 100%;                        overflow: auto;                        -webkit-transition-duration: 0s;                        -moz-transition-duration: 0s;                        transition-duration: 0s;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-viewmode="touch"] #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_toolset_actions {                        margin: -4px 0 0 0; border-radius: 0 0 4px 4px;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-viewmode="touch"][data-state="comment"] ._hj-f5b2a1eb-9b07_widget_title,                    #_hj-f5b2a1eb-9b07_feedback[data-viewmode="touch"][data-state="email"] ._hj-f5b2a1eb-9b07_widget_title {                        display: block !important;                        padding: 35px 50px !important;                        font-size: 18px;                        border-bottom: 1px solid #eaeaeb;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-viewmode="touch"][data-state="comment"] ._hj-f5b2a1eb-9b07_widget_content,                    #_hj-f5b2a1eb-9b07_feedback[data-viewmode="touch"][data-state="email"] ._hj-f5b2a1eb-9b07_widget_content {                        padding: 30px;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-viewmode="touch"][data-state="comment"] #_hj-f5b2a1eb-9b07_feedback_open_close_phone,                     #_hj-f5b2a1eb-9b07_feedback[data-viewmode="touch"][data-state="email"] #_hj-f5b2a1eb-9b07_feedback_open_close_phone {                        top: 10px;                        background: transparent;                        color: <%= widgetStyle.darkGrey %>;                        right: 10px;                        font-size: 22px;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-viewmode="touch"] #_hj-f5b2a1eb-9b07_feedback_page_highlight > #_hj-f5b2a1eb-9b07_feedback_top_message_select #_hj-f5b2a1eb-9b07_feedback_top_message_select_close {                        top: 16px;                        right: 5px;                        height: 27px;                        width: 27px;                        padding: 4px 0 0 2px;                        font-size: 18px;                    }                                        /************************                     * TABLET SPECIFIC                    *************************/                                        #_hj-f5b2a1eb-9b07_feedback[data-device="tablet"] #_hj-f5b2a1eb-9b07_feedback_open {                        bottom: 0;                        left: 50%;                        width: 380px;                        margin-left: -190px;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-device="tablet"][data-state="emotion"] #_hj-f5b2a1eb-9b07_feedback_open {                        bottom: 20px;                    }                    #_hj-f5b2a1eb-9b07_feedback[data-device="tablet"][data-state="comment"] ._hj-f5b2a1eb-9b07_widget_title,                    #_hj-f5b2a1eb-9b07_feedback[data-device="tablet"][data-state="email"] ._hj-f5b2a1eb-9b07_widget_title {                        font-size: 26px;                        padding: 40px 50px !important;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-device="tablet"][data-state="comment"] ._hj-f5b2a1eb-9b07_widget_content,                    #_hj-f5b2a1eb-9b07_feedback[data-device="tablet"][data-state="email"] ._hj-f5b2a1eb-9b07_widget_content {                        padding: 40px 60px;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-device="tablet"][data-state="comment"] #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_emotion_content {                        height: 58px;                        margin-top: 10px;                        margin-bottom: 40px;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-device="tablet"] #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion] [data-emotion-option] {                        height: 38px;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-device="tablet"] #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion] [data-emotion-option] ._hj-f5b2a1eb-9b07_icon_face {                        font-size: 38px;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-device="tablet"] #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion="0"] [data-emotion-option="0"] ._hj-f5b2a1eb-9b07_emotion_text,                    #_hj-f5b2a1eb-9b07_feedback[data-device="tablet"] #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion="1"] [data-emotion-option="1"] ._hj-f5b2a1eb-9b07_emotion_text,                    #_hj-f5b2a1eb-9b07_feedback[data-device="tablet"] #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion="2"] [data-emotion-option="2"] ._hj-f5b2a1eb-9b07_emotion_text,                    #_hj-f5b2a1eb-9b07_feedback[data-device="tablet"] #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion="3"] [data-emotion-option="3"] ._hj-f5b2a1eb-9b07_emotion_text,                    #_hj-f5b2a1eb-9b07_feedback[data-device="tablet"] #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion="4"] [data-emotion-option="4"] ._hj-f5b2a1eb-9b07_emotion_text {                        display: block;                        opacity: 1;                        font-size: 16px;                        top: 55px;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-device="tablet"] #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_emotion_comment_holder:before {                        top: -11px;                        border-left-width: 9px;                        border-right-width: 9px;                        border-bottom-width: 10px;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-device="tablet"] ._hj-f5b2a1eb-9b07_widget_content textarea._hj-f5b2a1eb-9b07_input_field {                        height: 180px !important;                        font-size: 22px !important;                        padding: 20px !important;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-device="tablet"] ._hj-f5b2a1eb-9b07_widget_content input._hj-f5b2a1eb-9b07_input_field {                        height: 80px !important;                        font-size: 22px !important;                        padding: 20px !important;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-device="tablet"] ._hj-f5b2a1eb-9b07_widget_footer ._hj-f5b2a1eb-9b07_pull_left {                        font-size: 14px;                        padding: 22px 0 20px 8%;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-device="tablet"] ._hj-f5b2a1eb-9b07_widget_footer ._hj-f5b2a1eb-9b07_pull_right {                        padding: 0 8% 30px 0;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-device="tablet"] ._hj-f5b2a1eb-9b07_widget_footer ._hj-f5b2a1eb-9b07_pull_right button {                        font-size: 22px !important;                        padding: 14px 28px !important;                    }                                        /************************                     * PHONE SPECIFIC                    *************************/                                        #_hj-f5b2a1eb-9b07_feedback[data-device="phone"] #_hj-f5b2a1eb-9b07_feedback_open {                        bottom: 0;                        left: 20px;                        right: 20px;                        width: auto;                        margin-left: 0;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-device="phone"][data-state="emotion"] #_hj-f5b2a1eb-9b07_feedback_open {                        bottom: 20px;                    }                                        @media (min-width:421px) {                        #_hj-f5b2a1eb-9b07_feedback[data-viewmode="phone"][data-state="emotion"] #_hj-f5b2a1eb-9b07_feedback_open {                            left: 50%;                            width: 300px;                            margin-left: -150px;                        }                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-device="phone"][data-state="comment"] #_hj-f5b2a1eb-9b07_feedback_open ._hj-f5b2a1eb-9b07_emotion_content {                        margin-top: 10px;                        margin-bottom: 50px;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-device="phone"] ._hj-f5b2a1eb-9b07_widget_content textarea._hj-f5b2a1eb-9b07_input_field {                        height: 110px !important;                        padding: 15px !important;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-device="phone"] #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion="0"] [data-emotion-option="0"] ._hj-f5b2a1eb-9b07_emotion_text,                    #_hj-f5b2a1eb-9b07_feedback[data-device="phone"] #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion="1"] [data-emotion-option="1"] ._hj-f5b2a1eb-9b07_emotion_text,                    #_hj-f5b2a1eb-9b07_feedback[data-device="phone"] #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion="2"] [data-emotion-option="2"] ._hj-f5b2a1eb-9b07_emotion_text,                    #_hj-f5b2a1eb-9b07_feedback[data-device="phone"] #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion="3"] [data-emotion-option="3"] ._hj-f5b2a1eb-9b07_emotion_text,                    #_hj-f5b2a1eb-9b07_feedback[data-device="phone"] #_hj-f5b2a1eb-9b07_feedback_open #_hj-f5b2a1eb-9b07_state-1[data-chosen-emotion="4"] [data-emotion-option="4"] ._hj-f5b2a1eb-9b07_emotion_text {                        display: block !important;                        opacity: 1;                        top: 34px;                        line-height: 12px;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-device="phone"] ._hj-f5b2a1eb-9b07_widget_footer ._hj-f5b2a1eb-9b07_pull_left {                        padding: 18px 0 20px 30px;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-device="phone"] ._hj-f5b2a1eb-9b07_widget_footer ._hj-f5b2a1eb-9b07_pull_right {                        padding: 0 30px 30px 0;                    }                                        #_hj-f5b2a1eb-9b07_feedback[data-device="phone"] ._hj-f5b2a1eb-9b07_widget_footer ._hj-f5b2a1eb-9b07_pull_right button {                        font-size: 18px !important;                        padding: 12px 20px !important;                    }                                    </style><div id="_hj-f5b2a1eb-9b07_feedback" class="_hj-f5b2a1eb-9b07_widget _hj-f5b2a1eb-9b07_<%= hj.widget.activeLanguageDirection %>"                      data-state="none"                      data-minimized-position="<%= feedback.position %>">                                        \x3c!-- Minimized State --\x3e                    <div id="_hj-f5b2a1eb-9b07_feedback_minimized">                        <div class="_hj-f5b2a1eb-9b07_feedback_minimized_label">                            <div class="_hj-f5b2a1eb-9b07_feedback_minimized_label_text">                                <%=hj.widget._("feedback")%>                            </div>                            <div class="_hj-f5b2a1eb-9b07_icon _hj-f5b2a1eb-9b07_icon_face" data-face="happy">                                <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>                            </div>                        </div>                        <div class="_hj-f5b2a1eb-9b07_hotjar_buddy _hj-f5b2a1eb-9b07_icon _hj-f5b2a1eb-9b07_icon_face _hj-f5b2a1eb-9b07_icon_face_main" data-face="happy">                            <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>                        </div>                        <div id="_hj-f5b2a1eb-9b07_feedback_minimized_message" class="_hj-f5b2a1eb-9b07_feedback_minimized_message _hj-f5b2a1eb-9b07_transition _hj-f5b2a1eb-9b07_rounded_corners">                            <a class="_hj-f5b2a1eb-9b07_feedback_minimized_message_close _hj-f5b2a1eb-9b07_link_no_underline _hj-f5b2a1eb-9b07_icon _hj-f5b2a1eb-9b07_icon-x _hj-f5b2a1eb-9b07_transition"></a>                            <span id="_hj-f5b2a1eb-9b07_feedback_minimized_text_initial" class="_hj-f5b2a1eb-9b07_wordwrap"><%= feedback.content.initial %></span>                            <span id="_hj-f5b2a1eb-9b07_feedback_minimized_text_thankyou" class="_hj-f5b2a1eb-9b07_wordwrap"><%= feedback.content.thankyou %></span>                        </div>                    </div>                                        \x3c!-- Opened State --\x3e                    <a id="_hj-f5b2a1eb-9b07_feedback_open_close">                        <span class="_hj-f5b2a1eb-9b07_link_no_underline _hj-f5b2a1eb-9b07_icon _hj-f5b2a1eb-9b07_icon-x"></span>                    </a>                    <div id="_hj-f5b2a1eb-9b07_feedback_open" class="_hj-f5b2a1eb-9b07_rounded_corners _hj-f5b2a1eb-9b07_transition">                        <a id="_hj-f5b2a1eb-9b07_feedback_open_close_phone">                            <span class="_hj-f5b2a1eb-9b07_link_no_underline _hj-f5b2a1eb-9b07_icon _hj-f5b2a1eb-9b07_icon-x"></span>                        </a>                        \x3c!-- STEP 1: EMOTION --\x3e                        <div id="_hj-f5b2a1eb-9b07_state-1" data-state="emotion">                            <p class="_hj-f5b2a1eb-9b07_widget_title"><%= feedback.content.emotion %></p>                            <div class="_hj-f5b2a1eb-9b07_widget_content">                                <div class="_hj-f5b2a1eb-9b07_emotion_content">                                    <div class="_hj-f5b2a1eb-9b07_emotion_option" data-bind="emotion" data-emotion-option="0">                                        <div class="_hj-f5b2a1eb-9b07_icon _hj-f5b2a1eb-9b07_icon_face" data-face="angry">                                            <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span>                                        </div>                                        <span class="_hj-f5b2a1eb-9b07_emotion_text _hj-f5b2a1eb-9b07_transition"><%=hj.widget._("hate")%></span>                                    </div>                                    <div class="_hj-f5b2a1eb-9b07_emotion_option" data-bind="emotion" data-emotion-option="1">                                        <div class="_hj-f5b2a1eb-9b07_icon _hj-f5b2a1eb-9b07_icon_face" data-face="sad">                                            <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>                                        </div>                                        <span class="_hj-f5b2a1eb-9b07_emotion_text _hj-f5b2a1eb-9b07_transition"><%=hj.widget._("dislike")%></span>                                    </div>                                    <div class="_hj-f5b2a1eb-9b07_emotion_option" data-bind="emotion" data-emotion-option="2">                                        <div class="_hj-f5b2a1eb-9b07_icon _hj-f5b2a1eb-9b07_icon_face" data-face="neutral">                                            <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>                                        </div>                                        <span class="_hj-f5b2a1eb-9b07_emotion_text _hj-f5b2a1eb-9b07_transition"><%=hj.widget._("neutral")%></span>                                    </div>                                    <div class="_hj-f5b2a1eb-9b07_emotion_option" data-bind="emotion" data-emotion-option="3">                                        <div class="_hj-f5b2a1eb-9b07_icon _hj-f5b2a1eb-9b07_icon_face" data-face="happy">                                            <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>                                        </div>                                        <span class="_hj-f5b2a1eb-9b07_emotion_text _hj-f5b2a1eb-9b07_transition"><%=hj.widget._("like")%></span>                                    </div>                                    <div class="_hj-f5b2a1eb-9b07_emotion_option" data-bind="emotion" data-emotion-option="4">                                        <div class="_hj-f5b2a1eb-9b07_icon _hj-f5b2a1eb-9b07_icon_face" data-face="love">                                            <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>                                        </div>                                        <span class="_hj-f5b2a1eb-9b07_emotion_text _hj-f5b2a1eb-9b07_transition"><%=hj.widget._("love")%></span>                                    </div>                                    <div class="_hj-f5b2a1eb-9b07_clear_both"></div>                                </div>                                                                <div class="_hj-f5b2a1eb-9b07_emotion_comment_holder">                                    <textarea maxlength="1000" class="_hj-f5b2a1eb-9b07_input_field" id="_hj-f5b2a1eb-9b07_emotion_comment" name="_hj-f5b2a1eb-9b07_emotion_comment" placeholder="<%=hj.widget._("tell_us_about_your_experience")%>" rows="3" data-bind="comment"></textarea>                                    <div class="_hj-f5b2a1eb-9b07_toolset_actions">                                        <div id="_hj-f5b2a1eb-9b07_toolset_action_select" class="_hj-f5b2a1eb-9b07_transition">                                            <span class="_hj-f5b2a1eb-9b07_icon _hj-f5b2a1eb-9b07_icon-select-element"></span>                                            <div class="_hj-f5b2a1eb-9b07_toolset_tooltip _hj-f5b2a1eb-9b07_transition"><%=hj.widget._("select_the_area")%></div>                                        </div>                                    </div>                                </div>                                                            </div>                        </div>                                                \x3c!-- STEP 2: EMAIL --\x3e                        <div id="_hj-f5b2a1eb-9b07_state-2" data-state="email">                            <p class="_hj-f5b2a1eb-9b07_widget_title"><%= feedback.content.email %></p>                            <div class="_hj-f5b2a1eb-9b07_widget_content">                                 <input maxlength="255" class="_hj-f5b2a1eb-9b07_input_field" type="email" id="_hj-f5b2a1eb-9b07_email" name="_hj-f5b2a1eb-9b07_email" placeholder="email@domain.com" data-bind="email" />                             </div>                        </div>                                                \x3c!-- FOOTER --\x3e                        <div class="_hj-f5b2a1eb-9b07_widget_footer">                            <% if (feedback.effectiveShowBranding) { %>                                <div id="_hj-f5b2a1eb-9b07_hotjar_branding" class="_hj-f5b2a1eb-9b07_pull_left">                                    <span class="_hj-f5b2a1eb-9b07_link_no_underline _hj-f5b2a1eb-9b07_icon _hj-f5b2a1eb-9b07_icon-hotjar"></span>                                    Not using <a href="<%=cta%>" target="_blank">Hotjar</a> yet?                                </div>                            <% } %>                            <div class="_hj-f5b2a1eb-9b07_pull_right">                                <button type="button" id="_hj-f5b2a1eb-9b07_action_skip" class="_hj-f5b2a1eb-9b07_btn_clear _hj-f5b2a1eb-9b07_rounded_corners _hj-f5b2a1eb-9b07_transition"><%=hj.widget._("skip")%></button>                                <button type="button" id="_hj-f5b2a1eb-9b07_action_submit" class="_hj-f5b2a1eb-9b07_btn_primary _hj-f5b2a1eb-9b07_rounded_corners _hj-f5b2a1eb-9b07_transition _hj-f5b2a1eb-9b07_shadow"><%=hj.widget._("send")%></button>                            </div>                            <div class="_hj-f5b2a1eb-9b07_clear_both"></div>                        </div>                    </div>                                        \x3c!-- PAGE HIGHLIGHTER --\x3e                    <div id="_hj-f5b2a1eb-9b07_feedback_page_highlight" class="_hj-f5b2a1eb-9b07_feedback_selection_ignore">                        <div class="_hj-f5b2a1eb-9b07_feedback_page_highlight_line _hj-f5b2a1eb-9b07_transition" id="_hj-f5b2a1eb-9b07_feedback_page_highlight_line_top"></div>                        <div class="_hj-f5b2a1eb-9b07_feedback_page_highlight_line _hj-f5b2a1eb-9b07_transition" id="_hj-f5b2a1eb-9b07_feedback_page_highlight_line_right"></div>                        <div class="_hj-f5b2a1eb-9b07_feedback_page_highlight_line _hj-f5b2a1eb-9b07_transition" id="_hj-f5b2a1eb-9b07_feedback_page_highlight_line_bottom"></div>                        <div class="_hj-f5b2a1eb-9b07_feedback_page_highlight_line _hj-f5b2a1eb-9b07_transition" id="_hj-f5b2a1eb-9b07_feedback_page_highlight_line_left"></div>                                                <div id="_hj-f5b2a1eb-9b07_feedback_top_message_select">                            <%=hj.widget._("select_the_area")%>                            <a id="_hj-f5b2a1eb-9b07_feedback_top_message_select_close" class="_hj-f5b2a1eb-9b07_feedback_selection_ignore _hj-f5b2a1eb-9b07_transition">                                <span class="_hj-f5b2a1eb-9b07_icon _hj-f5b2a1eb-9b07_icon-x _hj-f5b2a1eb-9b07_feedback_selection_ignore"></span>                            </a>                        </div>                                            </div>                                        \x3c!-- DIMMERS (OVERLAY) + ELEMENT HIGHLIGHTER --\x3e                    <div class="_hj-f5b2a1eb-9b07_feedback_content_dimmer" id="_hj-f5b2a1eb-9b07_feedback_content_dimmer_top" data-show-for="desktop"></div>                    <div class="_hj-f5b2a1eb-9b07_feedback_content_dimmer" id="_hj-f5b2a1eb-9b07_feedback_content_dimmer_right" data-show-for="desktop"></div>                    <div class="_hj-f5b2a1eb-9b07_feedback_content_dimmer" id="_hj-f5b2a1eb-9b07_feedback_content_dimmer_bottom" data-show-for="desktop"></div>                    <div class="_hj-f5b2a1eb-9b07_feedback_content_dimmer" id="_hj-f5b2a1eb-9b07_feedback_content_dimmer_left" data-show-for="desktop"></div>                    <div id="_hj-f5b2a1eb-9b07_feedback_content_highlighter" data-show-for="desktop">                        <a id="_hj-f5b2a1eb-9b07_feedback_content_highlighter_close">                            <span class="_hj-f5b2a1eb-9b07_icon _hj-f5b2a1eb-9b07_icon-x _hj-f5b2a1eb-9b07_feedback_selection_ignore"></span>                        </a>                    </div>                                    </div>'
            ].join("");
        h.run = hj.tryCatch(function(c) {
            11 > hj.utils.ieVersion() || hj.hq.each(hj.settings.feedback_widgets || [], function(b, g) {
                hj.targeting.onMatch(g.targeting, hj.tryCatch(function() {
                    hj.log.debug("Feedback widget #" + g.id + " has matched.", "feedback");
                    hj.widget.data && !(hj.widget.data.id === g.id && "incoming" === hj.widget.data.type) ? hj.log.debug("Another feedback widget is already present.", "feedback") : (g.created_epoch_time -= 31536E4, hj.widget.addMatchingWidget("incoming", g.id, g.created_epoch_time, function() {
                        hj.widget.feedbackData =
                            g;
                        hj.rendering.callAccordingToCondition(hj.widget.feedbackData, "feedback", hj.tryCatch(a, "feedback"))
                    }, h.remove))
                }), c)
            })
        }, "feedback");
        h.remove = hj.tryCatch(function(a) {
            hj.widget.feedbackData ? (0 < hj.hq("#_hj-f5b2a1eb-9b07_feedback").length && hj.hq("#_hj-f5b2a1eb-9b07_feedback").parent().remove(), delete hj.widget.feedbackData, setTimeout(function() {
                a()
            }, 1)) : a()
        });
        hj.isPreview && (window._hjFeedbackReload = hj.tryCatch(function(c) {
            hj.widget.feedbackData = c;
            hj.tryCatch(a, "feedback")()
        }, "feedback"));
        return h
    }(), !0)
}, "feedback")();
hj.tryCatch(function() {
    hj.loader.registerModule("Polls", function() {
        function m() {
            function a() {
                var b = hj.hq("._hj-f5b2a1eb-9b07_button_radio_checkbox_active").length,
                    c = !0,
                    d, f, g;
                if (0 === b) c = !1;
                else
                    for (d = 0; d < b; d += 1)
                        if (f = hj.hq(hj.hq("._hj-f5b2a1eb-9b07_button_radio_checkbox_active")[d]), g = f.find("._hj-f5b2a1eb-9b07_input_field").val(), f.hasClass("_hj-f5b2a1eb-9b07_with_comment") && 0 === g.length) {
                            c = !1;
                            break
                        } return c
            }
            var f;
            hj.widget.currentQuestionIndex = 0;
            hj.widget.submitResponse = hj.tryCatch(function() {
                var a = hj.hq("#_hj-f5b2a1eb-9b07_action_submit"),
                    f, h, k, l, m, p, q;
                if (!a.hasClass("_hj-f5b2a1eb-9b07_btn_disabled")) {
                    a.addClass("_hj-f5b2a1eb-9b07_btn_disabled");
                    f = hj.widget.pollData.content.questions[hj.widget.currentQuestionIndex];
                    h = hj.hq(hj.hq("#_hj-f5b2a1eb-9b07_question_content_" + hj.widget.currentQuestionIndex)[0]);
                    switch (f.type) {
                        case "single-close-ended":
                        case "multiple-close-ended":
                            l = h.find("._hj-f5b2a1eb-9b07_button_radio_checkbox_active").length;
                            for (q = 0; q < l; q += 1) m = hj.hq(h.find("._hj-f5b2a1eb-9b07_button_radio_checkbox_active")[q]), p = m.hasClass("_hj-f5b2a1eb-9b07_with_comment"),
                                a = m.attr("data-value"), k = parseInt(m.attr("data-index"), 10), m = m.find("textarea").val(), b.push({
                                    question: c(f.text),
                                    answer: a,
                                    comment: p && m ? m : null
                                });
                            break;
                        case "net-promoter-score":
                            m = h.find("._hj-f5b2a1eb-9b07_button_score_active");
                            a = m.attr("data-value");
                            k = parseInt(a, 10);
                            if (6 >= k) k = 0;
                            else if (8 >= k) k = 1;
                            else if (10 >= k) k = 2;
                            else throw Error("Got unexpected NPS answer: " + a);
                            b.push({
                                question: c(f.text),
                                answer: a,
                                comment: null
                            });
                            break;
                        case "single-open-ended-multiple-line":
                        case "single-open-ended-single-line":
                            a = h.find("input[name=_hj-f5b2a1eb-9b07_question_" +
                                hj.widget.currentQuestionIndex + "_answer]").val();
                            k = null;
                            void 0 === a && (a = h.find("textarea[name=_hj-f5b2a1eb-9b07_question_" + hj.widget.currentQuestionIndex + "_answer]").val() || "");
                            b.push({
                                question: c(f.text),
                                answer: a,
                                comment: null
                            });
                            break;
                        default:
                            throw Error("Unhandled question type: " + f.type);
                    }
                    a = "undefined" === typeof g[d] ? {
                        action: "create_poll_response",
                        utk: hj.cookie.get("hubspotutk"),
                        response_content: hj.json.stringify({
                            version: 4,
                            answers: b
                        }),
                        poll_index: d
                    } : {
                        action: "update_poll_response",
                        utk: hj.cookie.get("hubspotutk"),
                        response_content: hj.json.stringify({
                            version: 4,
                            answers: b
                        }),
                        poll_response_id: g[d]
                    };
                    b && (hj.isPreview || (hj.request.savePollResponse(a, function(a) {
                        g[a.poll_index] = a.poll_response_id
                    }), hj.widget.setDone()), hj.widget.goToNextQuestion(k))
                }
            }, "polls");
            hj.widget.goToNextQuestion = hj.tryCatch(function(a) {
                var b = hj.widget.pollData.content.questions[hj.widget.currentQuestionIndex],
                    c = hj.hq(hj.hq("#_hj-f5b2a1eb-9b07_question_content_" + hj.widget.currentQuestionIndex)[0]);
                switch (b.type) {
                    case "single-close-ended":
                    case "multiple-close-ended":
                        c.find("._hj-f5b2a1eb-9b07_button_radio_checkbox_active").removeClass("_hj-f5b2a1eb-9b07_button_radio_checkbox_active");
                        c.find("._hj-f5b2a1eb-9b07_with_comment").find("textarea").val("");
                        break;
                    case "net-promoter-score":
                        c.find("._hj-f5b2a1eb-9b07_button_score_active").removeClass("_hj-f5b2a1eb-9b07_button_score_active");
                        break;
                    case "single-open-ended-multiple-line":
                    case "single-open-ended-single-line":
                        c.find("[name=_hj-f5b2a1eb-9b07_question_" + hj.widget.currentQuestionIndex + "_answer]").val("");
                        break;
                    default:
                        throw Error("Unhandled question type: " + b.type);
                }
                if ("thankYou" === b.next) hj.widget.goToQuestion("thankYou");
                else if ("byAnswer" ===
                    b.next) hj.widget.goToQuestion(b.nextByAnswer[a]);
                else if (0 == b.next.indexOf("question:")) hj.widget.goToQuestion(b.next);
                else if ("byOrder" === b.next || "undefined" === typeof b.next) hj.widget.goToQuestion("byOrder");
                else throw Error("Unknown question.next value: " + b.next);
            }, "polls");
            hj.widget.goToQuestion = hj.tryCatch(function(a) {
                switch (a) {
                    case "thankYou":
                        hj.widget.changeState(!1, "thankyou");
                        return;
                    case "byOrder":
                        if (hj.widget.pollData.content.questions.length === hj.widget.currentQuestionIndex + 1) {
                            hj.widget.changeState(!1,
                                "thankyou");
                            return
                        }
                        a = hj.widget.currentQuestionIndex + 1;
                        break;
                    default:
                        a = "string" === typeof a && -1 !== a.indexOf(":") ? parseInt(a.split(":")[1], 10) : a
                }
                hj.widget.ctrl.find("#_hj-f5b2a1eb-9b07_question_text_" + hj.widget.currentQuestionIndex).addClass("_hj-f5b2a1eb-9b07_hidden");
                hj.widget.ctrl.find("#_hj-f5b2a1eb-9b07_question_content_" + hj.widget.currentQuestionIndex).addClass("_hj-f5b2a1eb-9b07_hidden");
                hj.widget.currentQuestionIndex = a;
                hj.widget.ctrl.find("#_hj-f5b2a1eb-9b07_question_text_" + hj.widget.currentQuestionIndex).removeClass("_hj-f5b2a1eb-9b07_hidden");
                hj.widget.ctrl.find("#_hj-f5b2a1eb-9b07_question_content_" + hj.widget.currentQuestionIndex).removeClass("_hj-f5b2a1eb-9b07_hidden");
                hj.widget.disableSubmit()
            }, "polls");
            hj.widget.setDone = hj.tryCatch(function() {
                hj.isPreview || "always" !== hj.widget.pollData.persist_condition && hj.cookie.add("_hjDonePolls", hj.widget.pollData.id)
            }, "polls");
            hj.widget.setMinimized = hj.tryCatch(function() {
                hj.isPreview || hj.cookie.add("_hjMinimizedPolls", hj.widget.pollData.id)
            }, "polls");
            hj.widget.ctrl.find("._hj-f5b2a1eb-9b07_button_radio_checkbox textarea").on("click",
                hj.tryCatch(function(a) {
                    a.stopPropagation()
                }, "polls"));
            hj.widget.ctrl.find("._hj-f5b2a1eb-9b07_button_radio").on("click", hj.tryCatch(function() {
                var b = hj.hq(this),
                    c = b.find("._hj-f5b2a1eb-9b07_input_field");
                hj.hq(hj.hq("#_hj-f5b2a1eb-9b07_question_content_" + hj.widget.currentQuestionIndex)[0]).find("._hj-f5b2a1eb-9b07_button_radio_checkbox").removeClass("_hj-f5b2a1eb-9b07_button_radio_checkbox_active");
                b.addClass("_hj-f5b2a1eb-9b07_button_radio_checkbox_active");
                c.focus();
                setTimeout(function() {
                    a() ? hj.widget.enableSubmit() :
                        hj.widget.disableSubmit()
                }, 0)
            }, "polls"));
            hj.widget.ctrl.find("._hj-f5b2a1eb-9b07_button_checkbox").on("click", hj.tryCatch(function() {
                var b = hj.hq(this),
                    c = b.find("._hj-f5b2a1eb-9b07_input_field");
                b.toggleClass("_hj-f5b2a1eb-9b07_button_radio_checkbox_active");
                c.focus();
                setTimeout(function() {
                    a() ? hj.widget.enableSubmit() : hj.widget.disableSubmit()
                }, 0)
            }, "polls"));
            hj.widget.ctrl.find("._hj-f5b2a1eb-9b07_button_score").on("click", hj.tryCatch(function() {
                var a = hj.hq(this);
                hj.widget.ctrl.find("._hj-f5b2a1eb-9b07_button_score").removeClass("_hj-f5b2a1eb-9b07_button_score_active");
                a.addClass("_hj-f5b2a1eb-9b07_button_score_active");
                hj.widget.enableSubmit()
            }, "polls"));
            hj.widget.ctrl.find("._hj-f5b2a1eb-9b07_input_field").on("keyup", hj.tryCatch(function() {
                var b = hj.widget.ctrl.find("#_hj-f5b2a1eb-9b07_question_content_" + hj.widget.currentQuestionIndex);
                ("single-open-ended-multiple-line" === b.attr("_hj_question_type") || "single-open-ended-single-line" === b.attr("_hj_question_type") ? 0 < hj.hq(this).val().length : a()) ? hj.widget.enableSubmit(): hj.widget.disableSubmit()
            }, "polls"));
            hj.widget.ctrl.find("#_hj-f5b2a1eb-9b07_action_submit").on("click",
                hj.tryCatch(function() {
                    hj.widget.submitResponse()
                }, "polls"));
            hj.hq(window).on("resize", hj.tryCatch(function() {
                hj.widget.applyPhoneClasses()
            }, "polls"));
            hj.widget.applyPhoneClasses();
            f = hj.isPreview && "desktop" === hj.widget.pollData.previewDevice;
            hj.widget.isNarrowScreen() && !f ? hj.widget.collapseWidget() : hj.widget.openWidget();
            !hj.isPreview && hj.cookie.find("_hjMinimizedPolls", hj.widget.pollData.id) && hj.widget.changeState(null, "hidden");
            f = hj.widget.pollData.activeStepInPreview;
            hj.isPreview && f && (hj.widget.goToQuestion(f),
                parseInt(f) && hj.widget.openWidget());
            hj.widget.init()
        }

        function a() {
            b = [];
            d++;
            hj.log.debug("Rendering poll widget.", "poll");
            hj.widget.setLanguage(hj.widget.pollData.language);
            var a = hj.widget.changeColorLuminance(hj.widget.pollData.background, -0.1),
                c = hj.widget.changeColorLuminance(hj.widget.pollData.background, 0.1),
                f = hj.widget.changeColorLuminance(hj.widget.pollData.background, -0.2),
                g = hj.widget.changeColorLuminance(hj.widget.pollData.background, 0.2),
                h = hj.widget.changeColorLuminance(hj.widget.pollData.background, -0.6),
                l = hj.widget.changeColorLuminance(hj.widget.pollData.background, 0.6),
                a = hj.rendering.renderTemplate(q, {
                    apiUrlBase: new hj.rendering.TrustedString(hj.apiUrlBase),
                    hjStaticHost: new hj.rendering.TrustedString(hj.staticHost),
                    hjid: hj.settings.site_id,
                    preview: hj.isPreview || !1,
                    poll: {
                        id: hj.widget.pollData.id,
                        effectiveShowBranding: hj.widget.pollData.effective_show_branding,
                        questions: hj.widget.pollData.content.questions,
                        thankyou: hj.widget.pollData.content.thankyou
                    },
                    widgetStyle: {
                        position: hj.widget.pollData.position,
                        skin: hj.widget.pollData.skin,
                        primaryColor: hj.widget.pollData.background,
                        secondaryColor: "light" === hj.widget.pollData.skin ? a : c,
                        alternateColor: "light" === hj.widget.pollData.skin ? f : g,
                        footerTextColor: "light" === hj.widget.pollData.skin ? h : l,
                        footerBorderColor: "light" === hj.widget.pollData.skin ? f : a,
                        fontColor: "light" === hj.widget.pollData.skin ? "#111" : "#FFF",
                        fontColorNegative: "light" === hj.widget.pollData.skin ? "#FFF" : "#111"
                    },
                    p: hj.widget.widgetAttributePrefix,
                    cta: new hj.rendering.TrustedString(hj.widget.ctaLinks.polls)
                });
            hj.widget.ctrl = hj.rendering.addToDom("_hj_poll_container", a);
            m();
            "once" == hj.widget.pollData.persist_condition && hj.cookie.add("_hjDonePolls", hj.widget.pollData.id)
        }

        function c(a) {
            return hj.hq("<span>" + a + "</span>").text()
        }

        function h(a) {
            hj.hq.each(a.content.questions, function(a, b) {
                b.answers && hj.hq.each(b.answers, function(a, b) {
                    b.index = a
                })
            })
        }

        function l(a) {
            hj.hq.each(a.content.questions, function(a, b) {
                b.randomize_answer_order && hj.utils.shuffle(b.answers)
            })
        }
        var f = {},
            b = [],
            g = [],
            d = 0,
            q = ['<div id="_hj_poll_container">',
                hj.widget.commonCSS, '<style type="text/css">                    /* Multiple question css adaptations */                                        /*comment fields*/                    .<%=p%>_widget .<%=p%>_button_radio_checkbox .<%=p%>_comment_box {                        display: none; margin: 0 20px 0 50px;                    }                    .<%=p%>_widget .<%=p%>_button_radio_checkbox .<%=p%>_comment_box > textarea {                        font-size: 13px !important;                        height: 50px !important;                        max-height: 50px !important;                        min-height: auto !important;                        margin-bottom: 8px !important;                        border: 0 !important;                    }                                        .<%=p%>_widget                         .<%=p%>_button_radio_checkbox.<%=p%>_button_radio_checkbox_active.<%=p%>_with_comment                             span.<%=p%>_widget_icon {                        top: 14px !important; margin-top: 0 !important;                    }                    .<%=p%>_widget .<%=p%>_widget_content                        .<%=p%>_button_radio_checkbox span.<%=p%>_radio_checkbox_text {                        color: <%= widgetStyle.fontColor %> !important;                    }                    .<%=p%>_widget .<%=p%>_widget_content                        .<%=p%>_button_radio_checkbox span.<%=p%>_radio_checkbox_text:hover {                        color: <%= widgetStyle.fontColorNegative %> !important;                    }                    .<%=p%>_widget                         .<%=p%>_button_radio_checkbox.<%=p%>_button_radio_checkbox_active.<%=p%>_with_comment                             span.<%=p%>_radio_checkbox_text {                        padding-bottom: 10px !important;                    }                    .<%=p%>_widget                         .<%=p%>_button_radio_checkbox.<%=p%>_button_radio_checkbox_active.<%=p%>_with_comment                             .<%=p%>_comment_box {                        display: block;                    }                                        /*net promoter score*/                    .<%=p%>_widget .<%=p%>_net_promoter_score > ul {                        margin: 4px 0 0 0 !important; height: 28px;                    }                    .<%=p%>_widget .<%=p%>_net_promoter_score > ul > li.<%=p%>_button_score {                        list-style-type: none !important;                        list-style-image: none !important;                        float: left !important; width: 22px !important;                         padding: 4px 0 5px 0 !important;                        margin: 0 3px 0 0 !important;                        border-radius: 2px;                        text-align: center !important;                        opacity: 0.75 !important;                        clear: none !important;                        cursor:pointer;                        text-indent: 0;                    }                    .<%=p%>_widget .<%=p%>_net_promoter_score > ul > li.<%=p%>_button_score_last {                        margin-right: 0 !important; width: 22px !important; padding-right: 1px !important;                    }                    .<%=p%>_widget .<%=p%>_net_promoter_score .<%=p%>_net_promoter_score_labels {                        padding: 5px 0 12px 0; font-size: 12px;                    }                    .<%=p%>_widget .<%=p%>_net_promoter_score .<%=p%>_net_promoter_score_labels .<%=p%>_pull_left,                    .<%=p%>_widget .<%=p%>_net_promoter_score .<%=p%>_net_promoter_score_labels .<%=p%>_pull_right {                        max-width: 45%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;                        color: <%= widgetStyle.fontColor %> !important;                    }                                        .<%=p%>_widget .<%=p%>_net_promoter_score > ul > li.<%=p%>_button_score {                        border-bottom: 1px solid <%= widgetStyle.primaryColor %> !important;                        border-top: 1px solid <%= widgetStyle.alternateColor %> !important;                        background: <%= widgetStyle.secondaryColor %> !important;                        color: <%= widgetStyle.fontColor %> !important;                    }                    .<%=p%>_widget .<%=p%>_net_promoter_score > ul > li.<%=p%>_button_score:hover {                        background: <%= widgetStyle.alternateColor %> !important;                        color: <%= widgetStyle.fontColorNegative %>;                        opacity: 1 !important;                        color: <%= widgetStyle.fontColorNegative %> !important;                    }                    .<%=p%>_widget .<%=p%>_net_promoter_score > ul                             > li.<%=p%>_button_score.<%=p%>_button_score_active,                     .<%=p%>_widget .<%=p%>_net_promoter_score                         > ul                             > li.<%=p%>_button_score.<%=p%>_button_score_active:hover {                        background: <%= widgetStyle.alternateColor %> !important;                         color: white !important;                         cursor: default;                        opacity: 1 !important;                    }                                        /*right-to-left css*/                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_button_radio_checkbox .<%=p%>_comment_box {                        margin: 0 50px 0 20px !important;                    }                    .<%=p%>_widget.<%=p%>_rtl                     .<%=p%>_button_radio_checkbox.<%=p%>_button_radio_checkbox_active.<%=p%>_with_comment span                    .<%=p%>_radio_checkbox_text {                        padding: 14px 50px 10px 20px !important;                    }                                        .<%=p%>_widget.<%=p%>_rtl .<%=p%>_net_promoter_score > ul > li.<%=p%>_button_score {                        float: right !important;                        margin: 0 0 0 3px !important;                        border-radius: 2px;                        text-align: center !important;                        opacity: 0.75 !important;                        cursor:pointer;                    }                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_net_promoter_score > ul > li.<%=p%>_button_score_last {                        margin-left: 0 !important;                    }                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_net_promoter_score .<%=p%>_net_promoter_score_labels                         .<%=p%>_pull_left {                        float: right !important;                    }                    .<%=p%>_widget.<%=p%>_rtl .<%=p%>_net_promoter_score .<%=p%>_net_promoter_score_labels                         .<%=p%>_pull_right {                        float: left !important;                    }                </style><div id="<%=p%>_poll" class="<%=p%>_widget <%=p%>_<%= hj.widget.activeLanguageDirection %>                         <%=p%>_skin_<%= widgetStyle.skin %> <%=p%>_position_<%= widgetStyle.position %>">                    <a                         class="<%=p%>_widget_open_close <%=p%>_action_toggle_widget"                    ><span class="<%=p%>_widget_icon"></span></a>                    <div class="<%=p%>_widget_hidden_handle <%=p%>_action_toggle_widget"></div>                    <p class="<%=p%>_widget_title <%=p%>_action_open_widget">                        <% for (var q = 0; q < poll.questions.length; q++) { %>                            <span id="<%=p%>_question_text_<%=q%>" class="<%=p%>_question_text <% if (q !== 0) { %>                                <%=p%>_hidden<%                             } %>"><%= poll.questions[q].text %></span>                        <% } %>                    </p>                    <div class="<%=p%>_widget_initiator">                        <button type="button" class="<%=p%>_btn_primary <%=p%>_rounded_corners <%=p%>_transition                             <%=p%>_shadow <%=p%>_action_open_widget"><%=hj.widget._("reply")%></button>                    </div>                    <div class="<%=p%>_widget_state <%=p%>_widget_state_open">                        <% for (var q = 0; q < poll.questions.length; q++) { %>                            <div id="<%=p%>_question_content_<%=q%>" _hj_question_type="<%=poll.questions[q].type%>"                                 class="<%=p%>_question_content <% if (q !== 0) { %><%=p%>_hidden<% } %>">                                <% if (poll.questions[q].type === "single-close-ended") { %>                                    <div class="<%=p%>_widget_content<% if (poll.questions[q].answers.length >= 5) { %>                                        <%=p%>_widget_content_overflow                                    <% } %>">                                        <% for (var i = 0; i < poll.questions[q].answers.length; i++) { %>                                        <div class="<%=p%>_button_radio_checkbox <%=p%>_button_radio_checkbox_full                                             <%=p%>_button_radio<%if (poll.questions[q].answers[i].comments) { %>                                                <%=p%>_with_comment                                            <% } %><%if (i+1 === poll.questions[q].answers.length) { %>                                                <%=p%>_button_radio_checkbox_last                                            <% } %>" data-key="response"                                             data-index="<%= poll.questions[q].answers[i].index %>"                                             data-value="<%= hj.rendering.escapeHtml(poll.questions[q].answers[i].text)                                        %>">                                            <% if (poll.questions[q].answers.length > 1) { %>                                                <span class="<%=p%>_widget_icon"></span>                                                <span class="<%=p%>_radio_checkbox_text">                                                    <%= poll.questions[q].answers[i].text %>                                                </span>                                                <div class="<%=p%>_comment_box">                                                    <textarea maxlength="255"                                                         class="<%=p%>_input_field <%=p%>_rounded_corners"                                                         name="<%=p%>_question_<%=q%>_answer_<%=i%>_comment"                                                         rows="3"                                                         placeholder="<%=hj.widget._("please_type_here")%>">                                                    </textarea>                                                </div>                                            <% } %>                                        </div>                                        <% } %>                                    </div>                                <% } else if (poll.questions[q].type === "multiple-close-ended") { %>                                    <div class="<%=p%>_widget_content<% if (poll.questions[q].answers.length >= 5) { %>                                        <%=p%>_widget_content_overflow<% } %>"                                    >                                        <% for (var i = 0; i < poll.questions[q].answers.length; i++) { %>                                        <div class="<%=p%>_button_radio_checkbox <%=p%>_button_radio_checkbox_full                                             <%=p%>_button_checkbox<%if (poll.questions[q].answers[i].comments) { %>                                                 <%=p%>_with_comment                                            <% } %><%if (i+1 === poll.questions[q].answers.length) { %>                                                 <%=p%>_button_radio_checkbox_last<% } %>"                                             data-key="response" data-index="<%= poll.questions[q].answers[i].index %>"                                            data-value="<%=hj.rendering.escapeHtml(poll.questions[q].answers[i].text)%>                                        ">                                            <% if (poll.questions[q].answers.length > 1) { %>                                                <span class="<%=p%>_widget_icon"></span>                                                <span class="<%=p%>_radio_checkbox_text">                                                    <%= poll.questions[q].answers[i].text %>                                                </span>                                                <div class="<%=p%>_comment_box">                                                    <textarea maxlength="255"                                                         class="<%=p%>_input_field <%=p%>_rounded_corners"                                                         name="<%=p%>_question_<%=q%>_answer_<%=i%>_comment"                                                         rows="3"                                                         placeholder="<%=hj.widget._("please_type_here")%>"></textarea>                                                </div>                                            <% } %>                                        </div>                                        <% } %>                                    </div>                                <% } else if (poll.questions[q].type === "single-open-ended-single-line") { %>                                    <div class="<%=p%>_widget_content">                                        <input maxlength="255" class="<%=p%>_input_field <%=p%>_rounded_corners"                                             type="text"                                             name="<%=p%>_question_<%=q%>_answer"                                             placeholder="<%=hj.widget._("please_type_here")%>" />                                    </div>                                <% } else if (poll.questions[q].type === "single-open-ended-multiple-line") { %>                                    <div class="<%=p%>_widget_content">                                        <textarea maxlength="255" class="<%=p%>_input_field <%=p%>_rounded_corners"                                             name="<%=p%>_question_<%=q%>_answer"                                             rows="3"                                             placeholder="<%=hj.widget._("please_type_here")%>"></textarea>                                    </div>                                <% } else if (poll.questions[q].type === "net-promoter-score") { %>                                    <div class="<%=p%>_widget_content <%=p%>_net_promoter_score">                                        <ul>                                            <% for (var i = 0; i < 11; i++) { %>                                            <li class="<%=p%>_button_score <%if (i === 10) { %>                                                <%=p%>_button_score_last<% } %>"                                             data-key="response" data-value="<%=i%>"><%=i%></li>                                            <% } %>                                        </ul>                                        <div class="<%=p%>_net_promoter_score_labels">                                            <div class="<%=p%>_pull_left"                                            ><%= poll.questions[q].labels[0].text %></div>                                            <div class="<%=p%>_pull_right"                                            ><%= poll.questions[q].labels[1].text %></div>                                            <div class="<%=p%>_clear_both"></div>                                        </div>                                    </div>                                <% } %>                            </div>                        <% } %>                        <div class="<%=p%>_widget_footer">                            <% if (poll.effectiveShowBranding) { %>                                <div class="<%=p%>_pull_left">                                    <span class="<%=p%>_widget_icon"></span>                                    Not using <a href="<%=cta%>" target="_blank">Hotjar</a> yet?                                </div>                            <% } %>                            <div class="<%=p%>_pull_right">                                <button type="button" id="<%=p%>_action_submit"                                     class="<%=p%>_btn_primary <%=p%>_btn_disabled <%=p%>_rounded_corners                                         <%=p%>_transition <%=p%>_shadow"><%=hj.widget._("send")%>                                     <span class="<%=p%>_widget_icon"></span>                                </button>                            </div>                            <div class="<%=p%>_clear_both"></div>                        </div>                    </div>                    <div class="<%=p%>_widget_state <%=p%>_widget_state_thankyou">                        <p class="<%=p%>_thankyou_message">                            <%= poll.thankyou %><br />                            <button type="button" class="<%=p%>_btn_primary <%=p%>_rounded_corners <%=p%>_transition                                 <%=p%>_shadow <%=p%>_action_dismiss_widget"><%=hj.widget._("close")%></button>                        </p>                        <div class="<%=p%>_widget_footer">                            <% if (poll.effectiveShowBranding) { %>                                <div class="<%=p%>_pull_left">                                    <span class="<%=p%>_widget_icon"></span>                                    Not using <a href="<%=cta%>" target="_blank">Hotjar</a> yet?                                </div>                            <% } %>                            <div class="<%=p%>_pull_right">                                <button type="button" class="<%=p%>_btn <%=p%>_btn_disabled <%=p%>_rounded_corners                                     <%=p%>_transition <%=p%>_shadow"><%=hj.widget._("sent")%>                                     <span class="<%=p%>_widget_icon"></span>                                </button>                            </div>                            <div class="<%=p%>_clear_both"></div>                        </div>                    </div>                </div></div>'
            ].join("");
        f.run = hj.tryCatch(function(b) {
            hj.hq.each(hj.settings.polls || [], function(c, d) {
                hj.targeting.onMatch(d.targeting, function() {
                        hj.log.debug("Poll #" + d.id + " has matched.", "poll");
                        hj.cookie.find("_hjDonePolls", d.id) ? hj.log.debug("Poll was already submitted.", "poll") : hj.widget.addMatchingWidget("poll", d.id, d.created_epoch_time, function() {
                            hj.tryCatch(h, "polls")(d);
                            hj.tryCatch(l, "polls")(d);
                            hj.widget.pollData = d;
                            hj.tryCatch(hj.rendering.callAccordingToCondition, "polls")(hj.widget.pollData, "poll", a)
                        }, f.remove)
                    },
                    b)
            })
        }, "polls");
        f.remove = hj.tryCatch(function(a) {
            hj.widget.pollData ? (0 < hj.hq("#_hj_poll_container").length && hj.hq("#_hj_poll_container").parent().remove(), delete hj.widget.pollData, setTimeout(function() {
                a()
            }, 1)) : a()
        });
        hj.isPreview && (window._hjPollReload = hj.tryCatch(function(b) {
            hj.tryCatch(h, "polls")(b);
            hj.tryCatch(l, "polls")(b);
            hj.widget.pollData = b;
            hj.tryCatch(a, "polls")()
        }, "polls"));
        return f
    }(), !0)
}, "polls")();
hj.tryCatch(function() {
    hj.loader.registerModule("Surveys", function() {
        function m() {
            hj.log.debug("-- RENDERING SURVEY INVITE --", "survey");
            var f = hj.rendering.renderTemplate(l, {
                hjHost: new hj.rendering.TrustedString(hj.host),
                survey: {
                    id: hj.survey.data.id,
                    effectiveShowBranding: hj.survey.data.effective_show_branding,
                    title: hj.survey.data.invite.title,
                    description: hj.survey.data.invite.description,
                    button: hj.survey.data.invite.button,
                    close: hj.survey.data.invite.close,
                    url: new hj.rendering.TrustedString(hj.survey.data.public_url)
                },
                p: hj.widget.widgetAttributePrefix,
                cta: new hj.rendering.TrustedString(hj.widget.ctaLinks.surveys)
            });
            hj.survey.ctrl = hj.rendering.addToDom("_hj_survey_invite_container", f);
            setTimeout(hj.tryCatch(function() {
                hj.survey.ctrl.addClass("_hj-f5b2a1eb-9b07_survey_show")
            }, "surveys"), 0);
            hj.survey.ctrl.find("._hj-f5b2a1eb-9b07_survey_close, ._hj-f5b2a1eb-9b07_survey_button, ._hj-f5b2a1eb-9b07_survey_close_link a, #_hj-f5b2a1eb-9b07_survey_invite_overlay").on("click", a);
            hj.hq(window).on("resize", function() {
                hj.tryCatch(c(),
                    "surveys")
            });
            hj.tryCatch(c(), "surveys")
        }

        function a() {
            hj.log.debug("-- CLOSING SURVEY INVITE --", "survey");
            hj.survey.ctrl.hide();
            hj.cookie.add("_hjClosedSurveyInvites", hj.survey.data.id)
        }

        function c() {
            580 > hj.hq(window).width() ? hj.survey.ctrl.addClass("_hj-f5b2a1eb-9b07_survey_full") : hj.survey.ctrl.removeClass("_hj-f5b2a1eb-9b07_survey_full")
        }
        var h = {},
            l = '<style type="text/css">                    /*reset and generic css*/                    div#_hj_survey_invite_container,                    div#_hj_survey_invite_container * {                        line-height: normal;                        font-family: Arial, sans-serif, Tahoma !important;                        text-transform: initial !important;                        height: auto;                    }                    div#<%=p%>_survey .<%=p%>_transition {                        -webkit-transition: all 0.3s ease-in-out;                        -moz-transition: all 0.3s ease-in-out;                        -o-transition: all 0.3s ease-in-out;                        -ms-transition: all 0.3s ease-in-out;                        transition: all 0.3s ease-in-out;                    }                                        /*containers css*/                    div#_hj_survey_invite_container,                     div#_hj_survey_invite_container div,                     #_hj_survey_invite_container span,                     #_hj_survey_invite_container p,                     #_hj_survey_invite_container a,                     #_hj_survey_invite_container img,                     #_hj_survey_invite_container strong,                     #_hj_survey_invite_container form,                     #_hj_survey_invite_container label {                        border: 0;                        outline: 0;                        font-size: 100%;                        vertical-align: baseline;                        background: transparent;                        margin: 0;                        padding: 0;                    }                    div#<%=p%>_survey #<%=p%>_survey_invite_overlay {                        background: black;                        position: fixed;                        top: 0;                        bottom: 0;                        left: 0;                        right: 0;                        opacity: 0;                        z-index: 2147483645;                        filter: alpha(opacity=0);                        -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";                    }                    div#<%=p%>_survey #<%=p%>_survey_invite_container {                        background: white;                        width: 550px;                        position: fixed;                        z-index: 2147483646;                        top: 50%;                        left: 50%;                        margin-top: -210px;                        margin-left: -275px;                        border-radius: 6px;                        -moz-border-radius: 6px;                        -webkit-border-radius: 6px;                        -webkit-box-shadow: 0 5px 13px 0 rgba(0, 0, 0, 0.65) !important;                        -moz-box-shadow: 0 5px 13px 0 rgba(0, 0, 0, 0.65) !important;                        box-shadow: 0 5px 13px 0 rgba(0, 0, 0, 0.65) !important;                        opacity: 0;                        filter: alpha(opacity=0);                        -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";                    }                    /*SHOW classes*/                    div#<%=p%>_survey.<%=p%>_survey_show #<%=p%>_survey_invite_overlay {                        opacity: .8;                        filter: alpha(opacity=80);                        -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";                    }                    div#<%=p%>_survey.<%=p%>_survey_show #<%=p%>_survey_invite_container {                        opacity: 1;                        filter: alpha(opacity=100);                        -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";                        margin-top: -200px;                    }                                        /*content and elements*/                    div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_close {                        background-image:                             url(//<%= hjHost %>/static/client/modules/assets/widget_icons_light.png) !important;                        background-repeat: no-repeat;                        background-position: -120px 0;                        cursor: pointer;                        opacity: .60;                        filter: alpha(opacity=60);                        -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=60)";                        position: absolute;                        right: 10px;                        top: 10px;                        width: 16px;                        height: 16px;                    }                    div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_close:hover {                        opacity: 1;                        filter: alpha(opacity=100);                        -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";                    }                    div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_content {                        padding: 50px 20px;                        text-align: center;                    }                    div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_title {                        padding: 0 20px 20px 20px;                        font-size: 24px;                        color: #333333;                        white-space: pre-wrap;                        word-wrap: break-word;                        overflow-wrap: break-word;                    }                    div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_description {                        padding: 0 30px 40px 30px;                        font-weight: normal;                        font-size: 16px;                        line-height: 25px;                        color: #666666;                        white-space: pre-wrap;                        word-wrap: break-word;                        overflow-wrap: break-word;                    }                    div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_button {                        border-radius: 5px;                         -moz-border-radius: 5px;                        -webkit-border-radius: 5px;                        -webkit-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);                        -moz-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);                        box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);                        cursor: pointer;                        text-decoration: none !important;                        font-size: 18px !important;                        font-weight: bold !important;                        padding: 16px 26px !important;                        border: 0 !important;                        outline: 0 !important;                        height: initial !important;                        min-height: initial !important;                        display: -moz-inline-stack;                        display: inline-block;                        zoom: 1;                        *display: inline;                        vertical-align: top;                        width: auto;                        background: #00C764 !important;                        color: white !important;                        font-family: Tahoma, Arial !important;                        white-space: pre-wrap;                        word-wrap: break-word;                        overflow-wrap: break-word;                    }                     div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_button:hover,                     div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_button:focus,                     div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_button:active {                        background: #00a251 !important;                    }                     div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_close_link {                        text-align: center;                        padding: 20px 0 0 0;                    }                     div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_close_link > a {                        cursor: pointer;                        text-decoration: underline;                        color: #666666;                        font-size: 13px;                    }                                        div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_close_link > a:hover {                        color: #333333;                    }                    div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_powered_by {                        color: #666666;                        position: absolute;                        left: 0;                        bottom: 0;                        margin-bottom: 10px;                        margin-left: 10px;                        font-size: 11px;                    }                    div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_powered_by > span {                        background-image:                             url(//<%= hjHost %>/static/client/modules/assets/widget_icons_light.png) !important;                        background-repeat: no-repeat;                        background-position: -16px 0;                        margin-right: 4px;                        width: 16px;                        height: 16px;                        display: -moz-inline-stack;                        display: inline-block;                        zoom: 1;                        *display: inline;                        vertical-align: middle;                    }                    div#<%=p%>_survey #<%=p%>_survey_invite_container .<%=p%>_survey_powered_by > a {                        color: #666666;                        text-decoration: underline;                    }                                        /*mobile classes*/                    div#<%=p%>_survey.<%=p%>_survey_full * {                        -webkit-transition: none !important;                        -moz-transition: none !important;                        -o-transition: none !important;                        -ms-transition: none !important;                        transition: none !important;                    }                    div#<%=p%>_survey.<%=p%>_survey_full #<%=p%>_survey_invite_container {                        width: auto;                        margin: 0;                        top: 15px;                        left: 15px;                        right: 15px;                    }                    div#<%=p%>_survey.<%=p%>_survey_full #<%=p%>_survey_invite_container .<%=p%>_survey_content {                       padding: 40px 20px 70px 20px;                    }                    div#<%=p%>_survey.<%=p%>_survey_full #<%=p%>_survey_invite_container .<%=p%>_survey_title {                        padding: 0 10px 20px 10px;                        font-size: 20px;                    }                    div#<%=p%>_survey.<%=p%>_survey_full #<%=p%>_survey_invite_container .<%=p%>_survey_description {                        padding: 0 10px 30px 10px;                        font-size: 14px;                    }                    div#<%=p%>_survey.<%=p%>_survey_full #<%=p%>_survey_invite_container .<%=p%>_survey_button {                        font-size: 17px !important;                        font-weight: normal !important;                        padding: 12px 15px !important;                    }                    div#<%=p%>_survey.<%=p%>_survey_full #<%=p%>_survey_invite_container .<%=p%>_survey_powered_by{                        left: 50%;                        margin: 0 0 10px -55px;                    }                </style>                <div id="_hj_survey_invite_container">                    <div id="<%=p%>_survey">                        <div id="<%=p%>_survey_invite_overlay" class="<%=p%>_transition"></div>                        <div id="<%=p%>_survey_invite_container" class="<%=p%>_transition">                            <a class="<%=p%>_survey_close <%=p%>_transition"></a>                            <div class="<%=p%>_survey_content">                                <div class="<%=p%>_survey_title"><%= survey.title %></div>                                <div class="<%=p%>_survey_description"><%= survey.description %></div>                                <a class="<%=p%>_survey_button <%=p%>_transition" href="<%= survey.url %>"                                     target="_blank"><%= survey.button %></a>                                <div class="<%=p%>_survey_close_link">                                    <a class="<%=p%>_transition"><%= survey.close %></a>                                </div>                            </div>                            <% if (survey.effectiveShowBranding) { %>                                <div class="<%=p%>_survey_powered_by">                                    <span class="<%=p%>_widget_icon"></span>                                    Not using <a href="<%=cta%>" target="_blank">Hotjar</a> yet?                                </div>                            <% } %>                        </div>                    </div>                </div>';
        h.run = hj.tryCatch(function(a) {
            hj.hq.each(hj.settings.surveys || [], function(b, c) {
                hj.targeting.onMatch(c.targeting, hj.tryCatch(function() {
                    hj.log.debug("Survey #" + c.id + " has matched.", "survey");
                    hj.cookie.find("_hjClosedSurveyInvites", c.id) ? hj.log.debug("Survey was already viewed.", "survey") : hj.widget.addMatchingWidget("survey", c.id, c.created_epoch_time, function() {
                        hj.survey.data = c;
                        hj.rendering.callAccordingToCondition(hj.survey.data, "survey", m)
                    }, h.remove)
                }, "surveys"), a)
            })
        }, "surveys");
        h.remove = hj.tryCatch(function(a) {
            hj.survey.data ?
                (0 < hj.hq("#_hj_survey_invite_container").length && (hj.survey.ctrl.hide(), hj.hq("#_hj_survey_invite_container").parent().remove()), delete hj.survey.data, setTimeout(function() {
                    a()
                }, 1)) : a()
        });
        return h
    }(), !0)
}, "surveys")();
hj.tryCatch(function() {
    hj.loader.registerModule("Testers", function() {
        function m() {
            function a() {
                var c = !0;
                hj.hq.each(hj.widget.testersData.content.fields, function(a, g) {
                    Boolean(hj.widget.model[g]) || (c = !1)
                });
                return c
            }
            hj.widget.submitResponse = hj.tryCatch(function() {
                a() && (hj.isPreview || (hj.request.saveTesterResponse({
                    action: "testers_widget_response",
                    response: hj.widget.model
                }), hj.widget.setDone()), hj.widget.changeState(!1, "thankyou"))
            }, "testers");
            hj.widget.setDone = hj.tryCatch(function() {
                hj.isPreview || hj.cookie.add("_hjDoneTestersWidgets",
                    hj.widget.testersData.id)
            }, "testers");
            hj.widget.setMinimized = hj.tryCatch(function() {
                hj.isPreview || hj.cookie.add("_hjMinimizedTestersWidgets", hj.widget.testersData.id)
            }, "testers");
            hj.widget.ctrl.find("._hj-f5b2a1eb-9b07_button_radio").on("click", hj.tryCatch(function() {
                var c = hj.hq(this),
                    b = c.attr("data-key"),
                    g = c.attr("data-value");
                hj.widget.model[b] = g;
                a() ? hj.widget.enableSubmit() : hj.widget.disableSubmit();
                hj.widget.ctrl.find("._hj-f5b2a1eb-9b07_button_radio_checkbox").removeClass("_hj-f5b2a1eb-9b07_button_radio_checkbox_active");
                c.addClass("_hj-f5b2a1eb-9b07_button_radio_checkbox_active")
            }, "testers"));
            hj.widget.ctrl.find("[data-bind]").on("keyup change", hj.tryCatch(function() {
                var c = hj.hq(this),
                    b = c.attr("name").split("_hj-f5b2a1eb-9b07_")[1];
                hj.widget.model[b] = c.val();
                a() ? hj.widget.enableSubmit() : hj.widget.disableSubmit()
            }, "testers"));
            hj.widget.ctrl.find("#_hj-f5b2a1eb-9b07_action_submit").on("click", hj.tryCatch(function() {
                hj.widget.submitResponse()
            }, "testers"));
            hj.hq(window).on("resize", hj.tryCatch(function() {
                    hj.widget.applyPhoneClasses()
                },
                "testers"));
            hj.tryCatch(hj.widget.applyPhoneClasses, "testers")();
            hj.tryCatch(hj.widget.collapseWidget, "testers")();
            !hj.isPreview && hj.cookie.find("_hjMinimizedTestersWidgets", hj.widget.testersData.id) && hj.tryCatch(hj.widget.changeState, "testers")(null, "hidden");
            hj.tryCatch(hj.widget.init, "testers")()
        }

        function a() {
            hj.log.debug("-- RENDERING TESTERS WIDGET --");
            hj.widget.setLanguage(hj.widget.testersData.language);
            var a = hj.widget.changeColorLuminance(hj.widget.testersData.background, -0.1),
                c = hj.widget.changeColorLuminance(hj.widget.testersData.background,
                    0.1),
                b = hj.widget.changeColorLuminance(hj.widget.testersData.background, -0.2),
                g = hj.widget.changeColorLuminance(hj.widget.testersData.background, 0.2),
                d = hj.widget.changeColorLuminance(hj.widget.testersData.background, -0.6),
                q = hj.widget.changeColorLuminance(hj.widget.testersData.background, 0.6),
                a = hj.rendering.renderTemplate(h, {
                    apiUrlBase: new hj.rendering.TrustedString(hj.apiUrlBase),
                    hjStaticHost: new hj.rendering.TrustedString(hj.staticHost),
                    hjid: hj.settings.site_id,
                    preview: hj.isPreview || !1,
                    testersWidget: {
                        id: hj.widget.testersData.id,
                        effectiveShowBranding: hj.widget.testersData.effective_show_branding,
                        fields: {
                            name: -1 < hj.widget.testersData.content.fields.indexOf("name"),
                            age: -1 < hj.widget.testersData.content.fields.indexOf("age"),
                            city: -1 < hj.widget.testersData.content.fields.indexOf("city"),
                            email: -1 < hj.widget.testersData.content.fields.indexOf("email"),
                            phone: -1 < hj.widget.testersData.content.fields.indexOf("phone"),
                            sex: -1 < hj.widget.testersData.content.fields.indexOf("sex")
                        },
                        invitation: hj.widget.testersData.content.invitation,
                        description: hj.widget.testersData.content.description,
                        thankyou: hj.widget.testersData.content.thankyou
                    },
                    widgetStyle: {
                        position: hj.widget.testersData.position,
                        skin: hj.widget.testersData.skin,
                        primaryColor: hj.widget.testersData.background,
                        secondaryColor: "light" === hj.widget.testersData.skin ? a : c,
                        alternateColor: "light" === hj.widget.testersData.skin ? b : g,
                        footerTextColor: "light" === hj.widget.testersData.skin ? d : q,
                        footerBorderColor: "light" === hj.widget.testersData.skin ? b : a,
                        fontColor: "light" === hj.widget.testersData.skin ? "#111" : "#FFF",
                        fontColorNegative: "light" === hj.widget.testersData.skin ?
                            "#FFF" : "#111"
                    },
                    p: hj.widget.widgetAttributePrefix,
                    cta: new hj.rendering.TrustedString(hj.widget.ctaLinks.testers)
                });
            hj.widget.ctrl = hj.rendering.addToDom("_hj_testers_container", a);
            m();
            "once" == hj.widget.testersData.persist_condition && hj.cookie.add("_hjDoneTestersWidgets", hj.widget.testersData.id)
        }
        var c = {},
            h = ['<div id="_hj_testers_container">', hj.widget.commonCSS, '<style type="text/css">                    .<%=p%>_widget .<%=p%>_widget_content .<%=p%>_widget_description {                        padding: 0;                        margin: 0 0 12px 0;                        text-align: center;                    }                    .<%=p%>_widget .<%=p%>_widget_content .<%=p%>_input_field {margin-bottom: 6px;}                     .<%=p%>_widget .<%=p%>_widget_content .<%=p%>_double_control {margin-bottom: 6px;}                     .<%=p%>_widget .<%=p%>_widget_content .<%=p%>_double_control .<%=p%>_input_field  {                        margin-bottom: 0;                    }                 </style><div id="<%=p%>_testers" class="<%=p%>_widget <%=p%>_<%= hj.widget.activeLanguageDirection %>                     <%=p%>_skin_<%= widgetStyle.skin %> <%=p%>_position_<%= widgetStyle.position %>">                    <a class="<%=p%>_widget_open_close <%=p%>_action_toggle_widget"                    ><span class="<%=p%>_widget_icon"></span></a>                    <div class="<%=p%>_widget_hidden_handle <%=p%>_action_toggle_widget"></div>                    <p class="<%=p%>_widget_title <%=p%>_action_open_widget"><%= testersWidget.invitation %></p>                    <div class="<%=p%>_widget_initiator">                        <button type="button" class="<%=p%>_btn_primary <%=p%>_rounded_corners <%=p%>_transition                             <%=p%>_shadow <%=p%>_action_open_widget">                            <%= hj.widget._("sign_me_up")%>                        </button>                    </div>                    <div class="<%=p%>_widget_state <%=p%>_widget_state_open">                        <div class="<%=p%>_widget_content <%=p%>_widget_content_overflow">                            <p class="<%=p%>_widget_description"><%= testersWidget.description %></p>                                                        <% if (testersWidget.fields.name) { %>                                <input type="text" name="<%=p%>_name" class="<%=p%>_input_field <%=p%>_rounded_corners"                                    placeholder="<%= hj.widget._("full_name")%>" data-bind />                            <% } %>                            <div <% if (testersWidget.fields.age && testersWidget.fields.city) { %>                                class="<%=p%>_double_control"                            <% } %>>                                 <% if (testersWidget.fields.age) { %>                                    <input type="text" name="<%=p%>_age"                                         class="<%=p%>_input_field <%=p%>_rounded_corners                                         <%=p%>_double_first" placeholder="<%= hj.widget._("age")%>" data-bind />                                <% } %>                                <% if (testersWidget.fields.city) { %>                                    <input type="text" name="<%=p%>_city"                                         class="<%=p%>_input_field <%=p%>_rounded_corners                                         <%=p%>_double_second" placeholder="<%= hj.widget._("city")%>" data-bind />                                <% } %>                                <div class="<%=p%>_clear_both"></div>                            </div>                            <% if (testersWidget.fields.email) { %>                                <input type="text" name="<%=p%>_email"                                     class="<%=p%>_input_field <%=p%>_rounded_corners"                                     placeholder="<%= hj.widget._("email")%>" data-bind />                            <% } %>                            <% if (testersWidget.fields.phone) { %>                                <input type="text" name="<%=p%>_phone"                                     class="<%=p%>_input_field <%=p%>_rounded_corners"                                     placeholder="<%= hj.widget._("phone_number")%>" data-bind />                            <% } %>                            <% if (testersWidget.fields.sex) { %>                                <div class="<%=p%>_double_control">                                     <div class="<%=p%>_button_radio <%=p%>_button_radio_checkbox <%=p%>_rounded_corners                                        <%=p%>_double_first" data-key="sex" data-value="male">                                            <span class="<%=p%>_widget_icon"></span>                                            <span class="<%=p%>_radio_checkbox_text"><%= hj.widget._("male")%></span>                                    </div>                                    <div class="<%=p%>_button_radio <%=p%>_button_radio_checkbox <%=p%>_rounded_corners                                        <%=p%>_double_second" data-key="sex" data-value="female">                                            <span class="<%=p%>_widget_icon"></span>                                            <span class="<%=p%>_radio_checkbox_text"><%= hj.widget._("female")%></span>                                    </div>                                    <div class="<%=p%>_clear_both"></div>                                </div>                            <% } %>                        </div>                        <div class="<%=p%>_widget_footer">                            <% if (testersWidget.effectiveShowBranding) { %>                                <div class="<%=p%>_pull_left">                                    <span class="<%=p%>_widget_icon"></span>                                    Not using <a href="<%=cta%>" target="_blank">Hotjar</a> yet?                                </div>                            <% } %>                            <div class="<%=p%>_pull_right">                                <button type="button" id="<%=p%>_action_submit"                                     class="<%=p%>_btn_primary <%=p%>_btn_disabled                                     <%=p%>_rounded_corners <%=p%>_transition <%=p%>_shadow"><%= hj.widget._("send")%>                                     <span class="<%=p%>_widget_icon"></span>                                </button>                            </div>                            <div class="<%=p%>_clear_both"></div>                        </div>                    </div>                    <div class="<%=p%>_widget_state <%=p%>_widget_state_thankyou">                        <p class="<%=p%>_thankyou_message">                            <%= testersWidget.thankyou %><br />                            <button type="button" class="<%=p%>_btn_primary <%=p%>_rounded_corners <%=p%>_transition                                 <%=p%>_shadow <%=p%>_action_dismiss_widget"><%= hj.widget._("close")%>                            </button>                        </p>                        <div class="<%=p%>_widget_footer">                            <% if (testersWidget.effectiveShowBranding) { %>                                <div class="<%=p%>_pull_left">                                    <span class="<%=p%>_widget_icon"></span>                                    Not using <a href="<%=cta%>" target="_blank">Hotjar</a> yet?                                </div>                            <% } %>                            <div class="<%=p%>_pull_right">                                <button type="button" class="<%=p%>_btn <%=p%>_btn_disabled <%=p%>_rounded_corners                                     <%=p%>_transition <%=p%>_shadow"><%= hj.widget._("sent")%>                                     <span class="<%=p%>_widget_icon"></span>                                </button>                            </div>                            <div class="<%=p%>_clear_both"></div>                        </div>                    </div>                </div></div>'].join("");
        c.run = hj.tryCatch(function(h) {
                hj.hq.each(hj.settings.testers_widgets || [], function(f, b) {
                    hj.targeting.onMatch(b.targeting, function() {
                        hj.log.debug("Tester #" + b.id + " has matched.", "tester");
                        hj.cookie.find("_hjDoneTestersWidgets", b.id) ? hj.log.debug("Tester was already submitted.", "tester") : hj.widget.addMatchingWidget("tester", b.id, b.created_epoch_time, function() {
                            hj.widget.testersData = b;
                            hj.tryCatch(hj.rendering.callAccordingToCondition, "testers")(hj.widget.testersData, "testersWidget", a)
                        }, c.remove)
                    }, h)
                })
            },
            "testers");
        c.remove = hj.tryCatch(function(a) {
            hj.widget.testersData ? (0 < hj.hq("#_hj_testers_container").length && (hj.widget.ctrl.hide(), hj.hq("#_hj_testers_container").parent().remove()), delete hj.widget.testersData, setTimeout(function() {
                a()
            }, 1)) : a()
        });
        hj.isPreview && (window._hjTestersWidgetReload = function(c) {
            hj.widget.testersData = c;
            a()
        });
        return c
    }(), !0)
}, "testers")();
hj.tryCatch(function() {
    hj.loader.registerModule("Forms", function() {
        var m = null,
            a = {},
            c = null,
            h = [],
            l = hj.tryCatch(function(a, b, c, d) {
                var g, h, k;
                hj.hq.each(m.field_info, function(l, m) {
                    h = -1 !== b.indexOf("*") || -1 !== b.indexOf(m.field_type);
                    k = -1 !== c.indexOf(m.field_type);
                    h && !k && (g = f(m), g.on(a, function() {
                        d(this, m)
                    }))
                })
            }, "forms"),
            f = hj.tryCatch(function(a) {
                var b, c;
                if ("id" === m.selector_type) b = hj.hq("form[id='" + m.selector + "']");
                else if ("css" === m.selector_type) c = parseInt(m.selector.split(":", 1)), b = m.selector.slice(c.toString().length +
                    1), b = hj.hq(hj.hq(b)[c]);
                else throw Error("Invalid selector_type: " + m.selector_type);
                return b.find("*[" + a.match_attribute + "='" + a.match_value.replace(/'/g, "\\'") + "']")
            }, "forms"),
            b = hj.tryCatch(function(a) {
                var b = sessionStorage.getItem("_hjForm"),
                    c = b ? hj.json.parse(b).id : 0;
                hj.hq.each(hj.settings.forms || [], function(b, c) {
                    if (hj.targeting.ruleMatches(c.targeting, a)) return m = c, hj.log.debug("Setting active form to form[id=" + m.id + "]", "forms"), !1
                });
                !m && c && hj.hq.each(hj.settings.forms || [], function(a, b) {
                    if (b.id ==
                        c) return m = b, hj.log.debug("Setting active form to form[id=" + m.id + "]", "forms"), !1
                })
            }, "forms"),
            g = hj.tryCatch(function(a, b) {
                var c, d;
                if ("id" === b) return 0 < hj.hq("form[id='" + a + "']").length;
                if ("css" === b) return d = a.split(":", 1), c = a.slice(d.length + 1), hj.hq(c).length > parseInt(d);
                throw Error("Invalid selector_type: " + m.selector_type);
            }, "forms"),
            d = hj.tryCatch(function(a) {
                    hj.log.debug("Saving forms using manual tracking: " + hj.json.stringify(a), "forms");
                    sessionStorage.setItem("_hjFormsManualTracking", hj.json.stringify(a))
                },
                "forms"),
            q = hj.tryCatch(function() {
                var a = hj.json.parse(sessionStorage.getItem("_hjFormsManualTracking")) || [];
                a.length && hj.log.debug("Getting forms using manual tracking: " + hj.json.stringify(a), "forms");
                return a
            }, "forms"),
            p = hj.tryCatch(function(a) {
                hj.hq.inArray(a.id, h) || (h.push(a.id), hj.log.debug("Form using manual tracking added: form[id=" + a.id + "]", "forms"), d(h))
            }, "forms"),
            k = hj.tryCatch(function() {
                    hj.log.debug("Saving active form: form[id=" + m.id + "]", "forms");
                    sessionStorage.setItem("_hjForm", hj.json.stringify(m))
                },
                "forms"),
            n = hj.tryCatch(function() {
                return Boolean(sessionStorage.getItem("_hjForm"))
            }, "forms"),
            r = hj.tryCatch(function() {
                var a = sessionStorage.getItem("_hjForm"),
                    b;
                sessionStorage.removeItem("_hjForm");
                a = hj.json.parse(a);
                b = !g(a.selector, a.selector_type) && hj.targeting.ruleMatches(a.targeting, document.referrer);
                s(a, b, !0)
            }, "forms"),
            s = hj.tryCatch(function(a, b, c) {
                c || p(m);
                if (!c || !hj.hq.inArray(a.id, h)) hj.eventStream.write({
                    form_id: a.id,
                    form_event: b ? "form_submit_successful" : "form_submit_failed"
                }).flush()
            }, "forms"),
            w = hj.tryCatch(function() {
                c = new Date
            }, "forms"),
            u = hj.tryCatch(function(a, b) {
                c && (hj.eventStream.write({
                    form_id: m.id,
                    form_field_event: {
                        form_field_id: b.id,
                        interaction_time: new Date - c,
                        content_hash: hj.md5(hj.hq(a).val())
                    }
                }).flush(), c = null)
            }, "forms"),
            t = hj.tryCatch(function(a, b) {
                hj.eventStream.write({
                    form_id: m.id,
                    form_field_event: {
                        form_field_id: b.id,
                        interaction_time: null,
                        content_hash: hj.md5(hj.hq(a).val())
                    }
                }).flush()
            }, "forms"),
            v = hj.tryCatch(function(a, b) {
                var c = f(b),
                    d = [],
                    g;
                for (g = 0; g < c.length; g += 1) d.push(hj.md5(c[g].checked ?
                    c[g].value : ""));
                hj.eventStream.write({
                    form_id: m.id,
                    form_field_event: {
                        form_field_id: b.id,
                        interaction_time: null,
                        content_hash: d.join(",")
                    }
                }).flush()
            }, "forms"),
            x = hj.tryCatch(function(a, b) {
                var c = a.toString().split("."),
                    d = b.toString().split("."),
                    f = Math.max(c.length, d.length),
                    g, h, k;
                for (k = 0; k < f && !(g = parseInt(c[k] || 0), h = parseInt(d[k] || 0), g > h); k += 1)
                    if (g < h) return !1;
                return !0
            }, "forms"),
            B = hj.tryCatch(function() {
                var a = "undefined" !== typeof window.jQuery,
                    b, c;
                c = !1;
                if ("id" === m.selector_type) a ? (b = window.jQuery("form[id='" +
                    m.selector + "']:eq(0)"), c = 0 < b.length) : (b = document.getElementById(m.selector), c = Boolean(b));
                else if ("css" === m.selector_type) b = parseInt(m.selector.split(":", 1)), c = m.selector.slice(b.toString().length + 1), a ? (b = window.jQuery(c + ":eq(" + b + ")"), c = 0 < b.length) : (b = hj.hq(c)[b], c = Boolean(b));
                else throw Error("Invalid selector_type: " + m.selector_type);
                if (c)
                    if (a)
                        if (function(a) {
                                function b(c, d, f) {
                                    var h = d.split(/\s+/);
                                    c.each(function() {
                                        for (var b = 0; h.length > b; ++b) {
                                            var c = a.trim(h[b]).match(/[^\.]+/i)[0];
                                            var d = a(this),
                                                k = c,
                                                c = f,
                                                d = g ? d.data("events") : a._data(d[0]).events,
                                                k = d[k];
                                            g ? c ? d.live.unshift(d.live.pop()) : k.unshift(k.pop()) : (d = c ? k.splice(k.delegateCount - 1, 1)[0] : k.pop(), k.splice(c ? 0 : k.delegateCount || 0, 0, d))
                                        }
                                    })
                                }

                                function c(d) {
                                    a.fn[d + "First"] = function() {
                                        var c = a.makeArray(arguments).shift();
                                        return c && (a.fn[d].apply(this, arguments), b(this, c)), this
                                    }
                                }
                                var d = a.fn.jquery.split("."),
                                    f = parseInt(d[0]),
                                    d = parseInt(d[1]),
                                    g = 1 > f || 1 == f && 7 > d;
                                c("bind");
                                c("one");
                                a.fn.delegateFirst = function() {
                                    var c = a.makeArray(arguments),
                                        d = c[1];
                                    return d &&
                                        (c.splice(0, 2), a.fn.delegate.apply(this, arguments), b(this, d, !0)), this
                                };
                                a.fn.liveFirst = function() {
                                    var b = a.makeArray(arguments);
                                    return b.unshift(this.selector), a.fn.delegateFirst.apply(a(document), b), this
                                };
                                g || (a.fn.onFirst = function(c, d) {
                                    var f = a(this),
                                        g = "string" == typeof d;
                                    if (a.fn.on.apply(f, arguments), "object" == typeof c)
                                        for (type in c) c.hasOwnProperty(type) && b(f, type, g);
                                    else "string" == typeof c && b(f, c, g);
                                    return f
                                })
                            }(jQuery), x(window.jQuery.fn.jquery, "1.7")) b.onFirst("submit", k);
                        else x(window.jQuery.fn.jquery,
                            "1.3") && b.liveFirst("submit", k);
                else hj.hq(b).on("submit", k);
                else hj.log.debug('Could not find form with selector "' + m.selector + '".', "forms")
            }, "forms");
        hj.forms = hj.tryCatch(function() {
            return {
                cmdFormSubmitSuccessful: function() {
                    null !== m && s(m, !0, !1)
                },
                cmdFormSubmitFailed: function() {
                    null !== m && s(m, !1, !1)
                }
            }
        }, "forms")();
        a.run = hj.tryCatch(function(a) {
            var c = n();
            if (hj.includedInSample && (b(a), m || c)) h = q(), hj.pageVisit.requirePageVisitId(), hj.eventStream.expectEvents(hj.pageVisit.property), hj.eventStream.write({
                form_id: m.id,
                form_event: "form_helo"
            }).flush(), c ? r() : m && (l("focus", ["*"], ["checkbox", "radio"], w), l("blur", ["*"], ["checkbox", "radio"], u), l("change", ["checkbox"], [], v), l("focus", ["radio"], [], t), B())
        }, "forms");
        return a
    }())
}, "forms")();
hj.tryCatch(function() {
    "undefined" === typeof hj.scriptLoaded && (hj._init = hj.tryCatch(function() {
        var m = {
            _determineIncludedInSample: function() {
                var a = new hj.fingerprinter,
                    c = hj.url.getParameter("hjIncludeInSample"),
                    h = hj.cookie.get("_hjIncludedInSample");
                if (h) hj.includedInSample = "1" === h, hj.log.debug("User is included in sample", "init");
                else switch (c) {
                    case "0":
                        hj.includedInSample = !1;
                        hj.log.debug("You have set includedInSample to false.", "init");
                        break;
                    case "1":
                        hj.includedInSample = !0;
                        hj.cookie.set("_hjIncludedInSample",
                            hj.includedInSample ? "1" : "0", 0);
                        hj.log.debug("You have set includedInSample to true.", "init");
                        break;
                    default:
                        hj.includedInSample = a.compareRatio(hj.settings.r || 1), hj.includedInSample && hj.cookie.set("_hjIncludedInSample", "1", 0), hj.log.debug("Included in sample: " + hj.includedInSample, "init", {
                            r: hj.settings.r,
                            fingerprintValue: a.getAsNumber()
                        })
                }
            },
            _verifyInstallation: function() {
                var a = hj.url.getParameter("hjVerifyInstall"),
                    c;
                try {
                    c = sessionStorage.getItem("hjVerifyInstall")
                } catch (h) {}
                if (a || c) {
                    hj.verifyInstall =
                        parseInt(a || c);
                    try {
                        sessionStorage.setItem("hjVerifyInstall", a || c)
                    } catch (l) {}
                    hj.includedInSample || hj.pageVisit.track();
                    hj.verifyInstall === hjSiteSettings.site_id ? (hj.notification.show("Hotjar installation verified.", "The Hotjar tracking code has been properly installed on this page. Browse your site in this window if you wish to verify installation on any other pages.", "good"), hj.xcom.send("scriptActive", [])) : hj.notification.show("Hotjar installation invalid.", "The tracking code you are trying to verify does not match the one installed on this page. Please make sure you install the correct tracking code provided for this site.",
                        "bad")
                }
            }
        };
        m._browserIsSupported = hj.tryCatch(function() {
            return 9 > hj.utils.ieVersion() ? (hj.log.debug("IE < 9 is not supported.", "init"), "1" === hj.url.getParameter("hjVerifyInstallation") && hj.notification.show("Hotjar installation cannot be verified.", "Sorry \u2013 your browser is not supported.", "bad"), !1) : !0
        }, "init");
        m._checkDebug = hj.tryCatch(function() {
            var a = hj.url.getParameter("hjDebug");
            if ("" !== a)
                if (!0 == a) hj.debug.on(!0);
                else hj.debug.off();
            if ("true" == hj.cookie.get("hjDebug")) hj.debug.on(!1)
        }, "init");
        m._canUseCookies = hj.tryCatch(function() {
            if (!navigator.cookieEnabled || !("cookie" in document)) return !1;
            if (0 < document.cookie.length) return !0;
            document.cookie = "_hjCookieTest";
            return -1 < document.cookie.indexOf("_hjCookieTest") ? (document.cookie = "_hjCookieTest; expires=Thu, 01 Jan 1970 00:00:01 GMT;", !0) : !1
        }, "init");
        m._canUseLocalStorage = hj.tryCatch(function() {
            try {
                localStorage.setItem("_hjLocalStorageTest", 1), localStorage.removeItem("_hjLocalStorageTest")
            } catch (a) {
                return !1
            }
            return !0
        }, "init");
        m._canUseSessionStorage =
            hj.tryCatch(function() {
                try {
                    sessionStorage.setItem("_hjSessionStorageTest", 1), sessionStorage.removeItem("_hjSessionStorageTest")
                } catch (a) {
                    return !1
                }
                return !0
            }, "init");
        m._canRun = hj.tryCatch(function() {
            return -1 !== navigator.userAgent.indexOf("Hotjar") ? !1 : !m._canUseCookies() ? (hj.log.debug("Cookies are not enabled"), !1) : !m._canUseLocalStorage() ? (hj.log.debug("localStorage is not available", "init"), !1) : !m._canUseSessionStorage() ? (hj.log.debug("sessionStorage is not available", "init"), !1) : !0
        }, "init");
        m._configureStateChangeListenMode =
            function() {
                var a = "manual";
                hj.settings && hj.settings.state_change_listen_mode && (a = hj.settings.state_change_listen_mode);
                hj.locationListener.setMode(a)
            };
        m.run = hj.tryCatch(function(a) {
            hj.currentUrl = a;
            hj.scriptLoaded = !0;
            m._browserIsSupported() && (m._checkDebug(), m._canRun() ? hj.remoteCookieJar.get("_hjOptOut", function(c) {
                m._run(a, c)
            }) : hj._init._verifyInstallation())
        }, "init");
        m._run = hj.tryCatch(function(a, c) {
            if ("true" === c || "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack) hj.log.debug("Visitor has opted out of tracking.",
                "init"), hj.optOut = !0;
            hj.loader.loadSettings(function(c) {
                hj.settings = c || {};
                hj.log.debug("Site settings", "init", hj.settings);
                m._determineIncludedInSample();
                m._configureStateChangeListenMode();
                c = [];
                10 > hj.utils.ieVersion() && hj.placeholderPolyfill && c.push("https://" + hj.staticHost + "/static/vendor/placeholders/3.0.2/placeholders.min.js");
                hj.loader.loadScripts(c, hj.tryCatch(function() {
                    m._runPage(a);
                    m._verifyInstallation();
                    hj.command.activate();
                    "1" === hj.url.getParameter("hjIncludeInSample") && hj.notification.show("Hotjar tracking active.",
                        "Hotjar tracking is active for your session.", "good")
                }, "init.run"))
            })
        }, "init");
        m.reinit = hj.tryCatch(function(a) {
            hj.currentUrl = a;
            hj.widgetDelay.clear();
            hj.disableHeatmap();
            hj.widget.emptyMatchingWidgets();
            m._runPage(a)
        }, "init");
        m._runPage = hj.tryCatch(function(a) {
                hj.pageVisit.setup(a);
                hj.hq.each(hj.loader.getModules(), function(c, h) {
                    if (!hj.optOut || h.nonTracking) hj.log.debug("Running module " + h.name, "init"), h.module.run(a)
                });
                hj.widget.runLatestMatchingWidget();
                hj.includedInSample && !hj.optOut && hj.pageVisit.track(a)
            },
            "init");
        return m
    }, "init")(), hj.hq(document).ready(function() {
        hj.log.debug("Document is ready. Initializing...", "init");
        hj.scriptContextId = hj.utils.uuid4();
        hj._init.run(location.href)
    }))
}, "init")();