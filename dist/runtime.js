(() => {
    "use strict";
    var r, e = {}, t = {};

    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var i = t[r] = { id: r, loaded: !1, exports: {} };
        return e[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports;
    }

    n.m = e;
    r = [];
    n.O = (e, t, o, i) => {
        if (!t) {
            var a = 1 / 0;
            for (s = 0; s < r.length; s++) {
                for (var [t, o, i] = r[s], c = !0, l = 0; l < t.length; l++) {
                    (!1 & i || a >= i) && Object.keys(n.O).every((r => n.O[r](t[l])))
                        ? t.splice(l--, 1)
                        : (c = !1, i < a && (a = i));
                }
                if (c) {
                    r.splice(s--, 1);
                    var p = o();
                    void 0 !== p && (e = p);
                }
            }
            return e;
        }
        i = i || 0;
        for (var s = r.length; s > 0 && r[s - 1][2] > i; s--) r[s] = r[s - 1];
        r[s] = [t, o, i];
    };

    n.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (r) {
            if ("object" == typeof window) return window;
        }
    }();

    n.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e);

    n.nmd = r => ((r.paths = []), r.children || (r.children = []), r);

    (() => {
        var r;
        n.g.importScripts && (r = n.g.location + "");
        var e = n.g.document;
        if (!r && e && (e.currentScript && (r = e.currentScript.src), !r)) {
            var t = e.getElementsByTagName("script");
            t.length && (r = t[t.length - 1].src);
        }
        if (!r) throw new Error("Automatic publicPath is not supported in this browser");
        r = r.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = r;
    })();

    (() => {
        var r = { 666: 0 };
        n.O.j = e => 0 === r[e];
        var e = (e, t) => {
            var o, i, [a, c, l] = t, p = 0;
            if (a.some((e => 0 !== r[e]))) {
                for (o in c) n.o(c, o) && (n.m[o] = c[o]);
                if (l) var s = l(n);
            }
            for (e && e(t); p < a.length; p++) i = a[p], n.o(r, i) && r[i] && r[i][0](), r[i] = 0;
            return n.O(s);
        };

        var t = self.webpackChunktemplate = self.webpackChunktemplate || [];
        t.forEach(e.bind(null, 0)), t.push = e.bind(null, t.push.bind(t));
    })();
})();
