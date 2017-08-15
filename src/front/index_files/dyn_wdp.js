/*
 Copyright(c) 2016, iovation, inc. All rights reserved. 
*/
(function q() {
    var b = window || this,
        c = b.io_global_object_name || "IGLOO",
        c = b[c] = b[c] || {},
        d = c.fp = c.fp || {},
        e;
    d.dynMain = q;
    e = {
        s_svr_ver: "1.12.2",
        s_sub_key: "",
        s_iggy: "k49g3t6k1DFb1WCuvTbK32cEptH3vCG1aXUYBDFUoLjhgHs5rK0xAlhGXbR87BtN",
        s_contentServerHost: "aHR0cHM6Ly9kb2N0b3Jkb25nLnZuLw==",
        s_contentServerPath: "aW9qcy9yZXNvdXJjZXMvc3RhdGlj",
        s_ctokenScriptPath: "aW9qcy9sYXRlc3QvbG9nby5qcw==",
        _fvbl: function() {
            var a = {
                x: "25.0.0.171,11.2.202.644"
            };
            a.x = a.x.split(",");
            return a.x
        },
        _ffwl: function() {
            var a = {
                x: "26.0.0.120"
            };
            a.x = a.x.split(",");
            return a.x
        },
        _kgfffv: function() {
            return "26.0.0.126"
        },
        _kgffflv: function() {
            return "26.0.0.126"
        },
        _kgfv: function() {
            return parseFloat("10.0")
        },
        _ripServerUrl: function() {
            return "bXBzbmFyZS5pZXNuYXJlLmNvbQ=="
        },
        _gwHost: function() {
            return "c2VhcHJ3ZHAwOC5pb3ZhdGlvbi51cw=="
        },
        _token: function() {
            return "k7PhBMrz5J1ytpN2WI5Hjzix8VrGdUyUoeFEfCblr6A="
        },
        _uagt: function() {
            return "Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_12_6)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F60.0.3112.90%20Safari%2F537.36"
        },
        _hacclng: function() {
            return "en-US%2Cen%3Bq%3D0.8%2Cvi%3Bq%3D0.6"
        },
        _haccchr: function() {
            return ""
        },
        _jsversion: function() {
            return "4.1.6"
        },
        _svr_time: function() {
            return "2017/08/10 07:11:01"
        },
        _smbr: function() {
            return ""
        },
        _xReqWith: function() {
            return ""
        },
        _isJsVersionCompatible: function(a) {
            return "string" === typeof a
        },
        _contentServerUrl: function() {
            return e.s_contentServerHost + e.s_contentServerPath
        },
        _ctokenScriptUrl: function() {
            return e.s_contentServerHost + e.s_ctokenScriptPath
        },
        _script_is_cached: function(a) {
            var b = !0,
                c, k, m, n, f, p, l, g, h;
            try {
                for (c = a.__if_dec(e.s_contentServerHost), k = c.match(/^(http|https):\/\/([^:\/]+)(:[0-9]+)?(\/.*)$/), m = k[1], n = k[2].replace(/\./g, "\\."), f =
                    "[^\\?]*(\\/)?(dyn_wdp|snare).js[^\\/]*(\\?.*)?$", p = new RegExp("^(" + m + ":){0,1}//" + n + f), f = new RegExp("^" + f), l = document.getElementsByTagName("script"), g = 0; g < l.length; g++)
                    if ((h = l.item(g).src) && (p.test(h) || "/" === h[0] || f.test(h))) {
                        b = !1;
                        break
                    }
            } catch (r) {
                d.api && d.api.logError && d.api.logError("", r)
            }
            return b
        }
    };
    d && d.api && d.api.ds_cb ? d.api.ds_cb(e) : b._io_ds_cb && b._io_ds_cb(e)
})();