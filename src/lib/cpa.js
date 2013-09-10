var g, aa = aa || {}, l = this, ba = function(a) {
    a = a.split(".");
    for (var b = l, c; c = a.shift(); )
        if (null != b[c])
            b = b[c];
        else
            return null;
    return b
}, ca = function() {
}, da = function(a) {
    a.Sa = function() {
        return a.bb ? a.bb : a.bb = new a
    }
}, m = function(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array)
                return "array";
            if (a instanceof Object)
                return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c)
                return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable &&
            !a.propertyIsEnumerable("splice"))
                return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                return "function"
        } else
            return "null";
    else if ("function" == b && "undefined" == typeof a.call)
        return "object";
    return b
}, n = function(a) {
    return "array" == m(a)
}, ea = function(a) {
    var b = m(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}, p = function(a) {
    return "string" == typeof a
}, fa = function(a) {
    return "number" == typeof a
}, ga = function(a) {
    var b =
    typeof a;
    return "object" == b && null != a || "function" == b
}, s = "closure_uid_" + (1E9 * Math.random() >>> 0), ha = 0, ia = function(a, b, c) {
    return a.call.apply(a.bind, arguments)
}, ja = function(a, b, c) {
    if (!a)
        throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}, t = function(a, b, c) {
    t = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ?
    ia : ja;
    return t.apply(null, arguments)
}, ka = function(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = Array.prototype.slice.call(arguments);
        b.unshift.apply(b, c);
        return a.apply(this, b)
    }
}, la = Date.now || function() {
    return +new Date
}, u = function(a, b) {
    var c = a.split("."), d = l;
    c[0] in d || !d.execScript || d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift()); )
        c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
}, w = function(a, b) {
    function c() {
    }
    c.prototype = b.prototype;
    a.K = b.prototype;
    a.prototype =
    new c
};
Function.prototype.bind = Function.prototype.bind || function(a, b) {
    if (1 < arguments.length) {
        var c = Array.prototype.slice.call(arguments, 1);
        c.unshift(this, a);
        return t.apply(null, c)
    }
    return t(this, a)
};
var x = function(a) {
    Error.captureStackTrace ? Error.captureStackTrace(this, x) : this.stack = Error().stack || "";
    a && (this.message = String(a))
};
w(x, Error);
x.prototype.name = "CustomError";
var ma = function(a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length; )
        d += c.shift() + e.shift();
    return d + c.join("%s")
}, sa = function(a) {
    if (!na.test(a))
        return a;
    -1 != a.indexOf("&") && (a = a.replace(oa, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(pa, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(qa, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(ra, "&quot;"));
    return a
}, oa = /&/g, pa = /</g, qa = />/g, ra = /\"/g, na = /[&<>\"]/;
var ta = function(a, b) {
    b.unshift(a);
    x.call(this, ma.apply(null, b));
    b.shift()
};
w(ta, x);
ta.prototype.name = "AssertionError";
var y = function(a, b, c) {
    if (!a) {
        var d = Array.prototype.slice.call(arguments, 2), e = "Assertion failed";
        if (b)
            var e = e + (": " + b), f = d;
        throw new ta("" + e, f || []);
    }
}, ua = function(a, b) {
    throw new ta("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
};
var z = Array.prototype, va = z.indexOf ? function(a, b, c) {
    y(null != a.length);
    return z.indexOf.call(a, b, c)
} : function(a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (p(a))
        return p(b) && 1 == b.length ? a.indexOf(b, c) : -1;
    for (; c < a.length; c++)
        if (c in a && a[c] === b)
            return c;
    return -1
}, wa = z.forEach ? function(a, b, c) {
    y(null != a.length);
    z.forEach.call(a, b, c)
} : function(a, b, c) {
    for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++)
        f in e && b.call(c, e[f], f, a)
}, xa = z.some ? function(a, b, c) {
    y(null != a.length);
    return z.some.call(a, b, c)
} :
function(a, b, c) {
    for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a))
            return !0;
    return !1
}, za = function(a) {
    var b;
    t: {
        b = ya;
        for (var c = a.length, d = p(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) {
                b = e;
                break t
            }
        b = -1
    }
    return 0 > b ? null : p(a) ? a.charAt(b) : a[b]
}, Aa = function(a, b) {
    var c = va(a, b), d;
    if (d = 0 <= c)
        y(null != a.length), z.splice.call(a, c, 1);
    return d
}, Ba = function(a) {
    return z.concat.apply(z, arguments)
}, Ca = function(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
            c[d] =
            a[d];
        return c
    }
    return []
};
var Da = function(a, b) {
    this.width = a;
    this.height = b
};
Da.prototype.v = function() {
    return new Da(this.width, this.height)
};
Da.prototype.toString = function() {
    return "(" + this.width + " x " + this.height + ")"
};
Da.prototype.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
var Ea = function(a, b, c) {
    for (var d in a)
        b.call(c, a[d], d, a)
}, Fa = function(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = a[d];
    return b
}, Ga = function(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = d;
    return b
}, Ha = function(a, b) {
    var c;
    t: {
        for (c in a)
            if (b.call(void 0, a[c], c, a))
                break t;
        c = void 0
    }
    return c && a[c]
}, Ia = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), Ja = function(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (var f = 0; f < Ia.length; f++)
            c =
            Ia[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var A, Ka, La, Ma, Na = function() {
    return l.navigator ? l.navigator.userAgent : null
};
Ma = La = Ka = A = !1;
var Oa;
if (Oa = Na()) {
    var Pa = l.navigator;
    A = 0 == Oa.lastIndexOf("Opera", 0);
    Ka = !A && (-1 != Oa.indexOf("MSIE") || -1 != Oa.indexOf("Trident"));
    La = !A && -1 != Oa.indexOf("WebKit");
    Ma = !A && !La && !Ka && "Gecko" == Pa.product
}
var Qa = A, B = Ka, C = Ma, D = La, Ra = l.navigator, Sa = -1 != (Ra && Ra.platform || "").indexOf("Mac"), Ta = function() {
    var a = l.document;
    return a ? a.documentMode : void 0
}, Ua;
t: {
    var Va = "", Xa;
    if (Qa && l.opera)
        var Ya = l.opera.version, Va = "function" == typeof Ya ? Ya() : Ya;
    else if (C ? Xa = /rv\:([^\);]+)(\)|;)/ : B ? Xa = /\b(?:MSIE|rv)\s+([^\);]+)(\)|;)/ : D && (Xa = /WebKit\/(\S+)/), Xa)
        var Za = Xa.exec(Na()), Va = Za ? Za[1] : "";
    if (B) {
        var $a = Ta();
        if ($a > parseFloat(Va)) {
            Ua = String($a);
            break t
        }
    }
    Ua = Va
}
var ab = Ua, bb = {}, E = function(a) {
    var b;
    if (!(b = bb[a])) {
        b = 0;
        for (var c = String(ab).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var h = c[f] || "", k = d[f] || "", q = RegExp("(\\d*)(\\D*)", "g"), F = RegExp("(\\d*)(\\D*)", "g");
            do {
                var r = q.exec(h) || ["", "", ""], v = F.exec(k) || ["", "", ""];
                if (0 == r[0].length && 0 == v[0].length)
                    break;
                b = ((0 == r[1].length ? 0 : parseInt(r[1], 10)) < (0 == v[1].length ? 0 : parseInt(v[1], 10)) ? -1 : (0 == r[1].length ?
                0 : parseInt(r[1], 10)) > (0 == v[1].length ? 0 : parseInt(v[1], 10)) ? 1 : 0) || ((0 == r[2].length) < (0 == v[2].length) ? -1 : (0 == r[2].length) > (0 == v[2].length) ? 1 : 0) || (r[2] < v[2] ? -1 : r[2] > v[2] ? 1 : 0)
            } while (0 == b)
        }
        b = bb[a] = 0 <= b
    }
    return b
}, cb = l.document, db = cb && B ? Ta() || ("CSS1Compat" == cb.compatMode ? parseInt(ab, 10) : 5) : void 0;
!C && !B || B && B && 9 <= db || C && E("1.9.1");
B && E("9");
var eb = "StopIteration" in l ? l.StopIteration : Error("StopIteration"), fb = function() {
};
fb.prototype.next = function() {
    throw eb;
};
fb.prototype.Hb = function() {
    return this
};
var G = function(a, b) {
    this.r = {};
    this.b = [];
    var c = arguments.length;
    if (1 < c) {
        if (c % 2)
            throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2)
            this.set(arguments[d], arguments[d + 1])
    } else
        a && this.za(a)
};
g = G.prototype;
g.g = 0;
g.ia = 0;
g.q = function() {
    gb(this);
    for (var a = [], b = 0; b < this.b.length; b++)
        a.push(this.r[this.b[b]]);
    return a
};
g.w = function() {
    gb(this);
    return this.b.concat()
};
g.S = function(a) {
    return H(this.r, a)
};
g.remove = function(a) {
    return H(this.r, a) ? (delete this.r[a], this.g--, this.ia++, this.b.length > 2 * this.g && gb(this), !0) : !1
};
var gb = function(a) {
    if (a.g != a.b.length) {
        for (var b = 0, c = 0; b < a.b.length; ) {
            var d = a.b[b];
            H(a.r, d) && (a.b[c++] = d);
            b++
        }
        a.b.length = c
    }
    if (a.g != a.b.length) {
        for (var e = {}, c = b = 0; b < a.b.length; )
            d = a.b[b], H(e, d) || (a.b[c++] = d, e[d] = 1), b++;
        a.b.length = c
    }
};
g = G.prototype;
g.get = function(a, b) {
    return H(this.r, a) ? this.r[a] : b
};
g.set = function(a, b) {
    H(this.r, a) || (this.g++, this.b.push(a), this.ia++);
    this.r[a] = b
};
g.za = function(a) {
    var b;
    a instanceof G ? (b = a.w(), a = a.q()) : (b = Ga(a), a = Fa(a));
    for (var c = 0; c < b.length; c++)
        this.set(b[c], a[c])
};
g.v = function() {
    return new G(this)
};
g.Hb = function(a) {
    gb(this);
    var b = 0, c = this.b, d = this.r, e = this.ia, f = this, h = new fb;
    h.next = function() {
        for (; ; ) {
            if (e != f.ia)
                throw Error("The map has changed since the iterator was created");
            if (b >= c.length)
                throw eb;
            var h = c[b++];
            return a ? h : d[h]
        }
    };
    return h
};
var H = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
var hb, ib = {id: "hitType",name: "t",valueType: "text",maxLength: void 0,defaultValue: void 0}, jb = {id: "description",name: "cd",valueType: "text",maxLength: 2048,defaultValue: void 0}, kb = {sc: ib,Tb: {id: "anonymizeIp",name: "aip",valueType: "boolean",maxLength: void 0,defaultValue: void 0},Ec: {id: "queueTime",name: "qt",valueType: "integer",maxLength: void 0,defaultValue: void 0},Zb: {id: "cacheBuster",name: "z",valueType: "text",maxLength: void 0,defaultValue: void 0},Jc: {id: "sessionControl",name: "sc",valueType: "text",maxLength: void 0,
        defaultValue: void 0},Bc: {id: "nonInteraction",name: "ni",valueType: "boolean",maxLength: void 0,defaultValue: void 0},ic: jb,Sc: {id: "title",name: "dt",valueType: "text",maxLength: 1500,defaultValue: void 0},jc: {id: "dimension",name: "cd[1-9][0-9]*",valueType: "text",maxLength: 150,defaultValue: void 0},Ac: {id: "metric",name: "cm[1-9][0-9]*",valueType: "integer",maxLength: void 0,defaultValue: void 0},Vb: {id: "appId",name: "aid",valueType: "text",maxLength: 150,defaultValue: void 0},Wb: {id: "appInstallerId",name: "aiid",valueType: "text",
        maxLength: 150,defaultValue: void 0},mc: {id: "eventCategory",name: "ec",valueType: "text",maxLength: 150,defaultValue: void 0},lc: {id: "eventAction",name: "ea",valueType: "text",maxLength: 500,defaultValue: void 0},nc: {id: "eventLabel",name: "el",valueType: "text",maxLength: 500,defaultValue: void 0},oc: {id: "eventValue",name: "ev",valueType: "integer",maxLength: void 0,defaultValue: void 0},Lc: {id: "socialNetwork",name: "sn",valueType: "text",maxLength: 50,defaultValue: void 0},Kc: {id: "socialAction",name: "sa",valueType: "text",
        maxLength: 50,defaultValue: void 0},Mc: {id: "socialTarget",name: "st",valueType: "text",maxLength: 2048,defaultValue: void 0},Vc: {id: "transactionId",name: "ti",valueType: "text",maxLength: 500,defaultValue: void 0},Uc: {id: "transactionAffiliation",name: "ta",valueType: "text",maxLength: 500,defaultValue: void 0},Wc: {id: "transactionRevenue",name: "tr",valueType: "currency",maxLength: void 0,defaultValue: void 0},Xc: {id: "transactionShipping",name: "ts",valueType: "currency",maxLength: void 0,defaultValue: void 0},Yc: {id: "transactionTax",
        name: "tt",valueType: "currency",maxLength: void 0,defaultValue: void 0},gc: {id: "currencyCode",name: "cu",valueType: "text",maxLength: 10,defaultValue: void 0},wc: {id: "itemPrice",name: "ip",valueType: "currency",maxLength: void 0,defaultValue: void 0},xc: {id: "itemQuantity",name: "iq",valueType: "integer",maxLength: void 0,defaultValue: void 0},uc: {id: "itemCode",name: "ic",valueType: "text",maxLength: 500,defaultValue: void 0},vc: {id: "itemName",name: "in",valueType: "text",maxLength: 500,defaultValue: void 0},tc: {id: "itemCategory",
        name: "iv",valueType: "text",maxLength: 500,defaultValue: void 0},ec: {id: "campaignSource",name: "cs",valueType: "text",maxLength: 100,defaultValue: void 0},cc: {id: "campaignMedium",name: "cm",valueType: "text",maxLength: 50,defaultValue: void 0},dc: {id: "campaignName",name: "cn",valueType: "text",maxLength: 100,defaultValue: void 0},bc: {id: "campaignKeyword",name: "ck",valueType: "text",maxLength: 500,defaultValue: void 0},$b: {id: "campaignContent",name: "cc",valueType: "text",maxLength: 500,defaultValue: void 0},ac: {id: "campaignId",
        name: "ci",valueType: "text",maxLength: 100,defaultValue: void 0},rc: {id: "gclid",name: "gclid",valueType: "text",maxLength: void 0,defaultValue: void 0},hc: {id: "dclid",name: "dclid",valueType: "text",maxLength: void 0,defaultValue: void 0},Dc: {id: "pageLoadTime",name: "plt",valueType: "integer",maxLength: void 0,defaultValue: void 0},kc: {id: "dnsTime",name: "dns",valueType: "integer",maxLength: void 0,defaultValue: void 0},Nc: {id: "tcpConnectTime",name: "tcp",valueType: "integer",maxLength: void 0,defaultValue: void 0},Ic: {id: "serverResponseTime",
        name: "srt",valueType: "integer",maxLength: void 0,defaultValue: void 0},Cc: {id: "pageDownloadTime",name: "pdt",valueType: "integer",maxLength: void 0,defaultValue: void 0},Fc: {id: "redirectResponseTime",name: "rrt",valueType: "integer",maxLength: void 0,defaultValue: void 0},Oc: {id: "timingCategory",name: "utc",valueType: "text",maxLength: 150,defaultValue: void 0},Rc: {id: "timingVar",name: "utv",valueType: "text",maxLength: 500,defaultValue: void 0},Qc: {id: "timingValue",name: "utt",valueType: "integer",maxLength: void 0,
        defaultValue: void 0},Pc: {id: "timingLabel",name: "utl",valueType: "text",maxLength: 500,defaultValue: void 0},pc: {id: "exDescription",name: "exd",valueType: "text",maxLength: 150,defaultValue: void 0},qc: {id: "exFatal",name: "exf",valueType: "boolean",maxLength: void 0,defaultValue: "1"}};
var lb = function(a) {
    return function() {
        throw a;
    }
}; /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var I = function(a, b) {
    this.ga = [];
    this.hb = b || null;
    this.Ca = null;
    if (Error.captureStackTrace) {
        var c = {stack: ""};
        Error.captureStackTrace(c, I);
        "string" == typeof c.stack && (this.Ca = c.stack.replace(/^[^\n]*\n/, ""))
    }
};
g = I.prototype;
g.m = !1;
g.T = !1;
g.sa = !1;
g.Ja = !1;
g.$a = !1;
g.lb = 0;
g.Ka = function(a, b) {
    this.sa = !1;
    mb(this, a, b)
};
var mb = function(a, b, c) {
    a.m = !0;
    a.ra = c;
    a.T = !b;
    nb(a)
}, pb = function(a) {
    if (a.m) {
        if (!a.$a)
            throw new ob;
        a.$a = !1
    }
};
I.prototype.D = function(a) {
    pb(this);
    qb(a);
    mb(this, !0, a)
};
I.prototype.G = function(a) {
    pb(this);
    qb(a);
    rb(this, a);
    mb(this, !1, a)
};
var rb = function(a, b) {
    a.Ca && (ga(b) && b.stack && /^[^\n]+(\n   [^\n]+)+/.test(b.stack)) && (b.stack = b.stack + "\nDEFERRED OPERATION:\n" + a.Ca)
}, qb = function(a) {
    y(!(a instanceof I), "An execution sequence may not be initiated with a blocking Deferred.")
};
I.prototype.Ib = function(a, b) {
    return J(this, a, null, b)
};
var sb = function(a, b, c) {
    J(a, b, b, c)
}, J = function(a, b, c, d) {
    y(!a.Ja, "Blocking Deferreds can not be re-used");
    a.ga.push([b, c, d]);
    a.m && nb(a);
    return a
}, tb = function(a) {
    var b = new I;
    J(a, b.D, b.G, b);
    return b
}, ub = function(a) {
    return xa(a.ga, function(a) {
        return "function" == m(a[1])
    })
}, nb = function(a) {
    a.ta && (a.m && ub(a)) && (l.clearTimeout(a.ta), delete a.ta);
    a.F && (a.F.lb--, delete a.F);
    for (var b = a.ra, c = !1, d = !1; a.ga.length && !a.sa; ) {
        var e = a.ga.shift(), f = e[0], h = e[1], e = e[2];
        if (f = a.T ? h : f)
            try {
                var k = f.call(e || a.hb, b);
                void 0 !== k &&
                (a.T = a.T && (k == b || k instanceof Error), a.ra = b = k);
                b instanceof I && (d = !0, a.sa = !0)
            } catch (q) {
                b = q, a.T = !0, rb(a, b), ub(a) || (c = !0)
            }
    }
    a.ra = b;
    d && (J(b, t(a.Ka, a, !0), t(a.Ka, a, !1)), b.Ja = !0);
    c && (a.ta = l.setTimeout(lb(b), 0))
}, vb = function(a) {
    var b = new I;
    b.D(a);
    return b
}, xb = function() {
    var a = wb, b = new I;
    b.G(a);
    return b
}, ob = function() {
    x.call(this)
};
w(ob, x);
ob.prototype.message = "Deferred has already fired";
ob.prototype.name = "AlreadyCalledError";
var yb = function(a, b) {
    var c = Array.prototype.slice.call(arguments), d = c.shift();
    if ("undefined" == typeof d)
        throw Error("[goog.string.format] Template required");
    return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, k, q, F, r, v) {
        if ("%" == F)
            return "%";
        var Wa = c.shift();
        if ("undefined" == typeof Wa)
            throw Error("[goog.string.format] Not enough arguments");
        arguments[0] = Wa;
        return K[F].apply(null, arguments)
    })
}, K = {s: function(a, b, c) {
        return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c -
        a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
    },f: function(a, b, c, d, e) {
        d = a.toString();
        isNaN(e) || "" == e || (d = a.toFixed(e));
        var f;
        f = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
        0 <= a && (d = f + d);
        if (isNaN(c) || d.length >= c)
            return d;
        d = isNaN(e) ? Math.abs(a).toString() : Math.abs(a).toFixed(e);
        a = c - d.length - f.length;
        return d = 0 <= b.indexOf("-", 0) ? f + d + Array(a + 1).join(" ") : f + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + d
    },d: function(a, b, c, d, e, f, h, k) {
        return K.f(parseInt(a, 10), b, c, d, 0, f, h, k)
    }};
K.i = K.d;
K.u = K.d;
var zb = function(a) {
    if ("function" == typeof a.q)
        return a.q();
    if (p(a))
        return a.split("");
    if (ea(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d]);
        return b
    }
    return Fa(a)
}, Ab = function(a, b, c) {
    if ("function" == typeof a.forEach)
        a.forEach(b, c);
    else if (ea(a) || p(a))
        wa(a, b, c);
    else {
        var d;
        if ("function" == typeof a.w)
            d = a.w();
        else if ("function" != typeof a.q)
            if (ea(a) || p(a)) {
                d = [];
                for (var e = a.length, f = 0; f < e; f++)
                    d.push(f)
            } else
                d = Ga(a);
        else
            d = void 0;
        for (var e = zb(a), f = e.length, h = 0; h < f; h++)
            b.call(c, e[h], d && d[h], a)
    }
};
var L = function(a) {
    this.O = new G;
    y(!(arguments.length % 2), "Uneven number of arguments.");
    this.za(arguments)
};
L.prototype.set = function(a, b) {
    this.O.set(a.name, {key: a,value: b})
};
L.prototype.remove = function(a) {
    this.O.remove(a.name)
};
L.prototype.get = function(a) {
    a = this.O.get(a.name, null);
    return null === a ? null : a.value
};
L.prototype.za = function(a) {
    for (var b = 0; b < a.length; b += 2)
        this.set(a[b], a[b + 1])
};
var Bb = function(a, b) {
    wa(a.O.q(), function(a) {
        b(a.key, a.value)
    })
};
L.prototype.v = function() {
    var a = new L;
    a.O = this.O.v();
    return a
};
L.prototype.toString = function() {
    var a = [];
    Bb(this, function(b, c) {
        a.push([b.name, c].join("="))
    });
    return yb("{%s}", a.join(", "))
};
var Cb = function(a) {
    this.Fb = a
};
Cb.prototype.send = function(a, b) {
    this.Fb.push({pb: a,qb: b});
    return vb()
};
var Db = {id: "apiVersion",name: "v",valueType: "text",maxLength: void 0,defaultValue: void 0}, Eb = {id: "appName",name: "an",valueType: "text",maxLength: 100,defaultValue: void 0}, Fb = {id: "appVersion",name: "av",valueType: "text",maxLength: 100,defaultValue: void 0}, Gb = {id: "clientId",name: "cid",valueType: "text",maxLength: void 0,defaultValue: void 0}, Hb = {id: "language",name: "ul",valueType: "text",maxLength: 20,defaultValue: void 0}, Ib = {id: "libVersion",name: "_v",valueType: "text",maxLength: void 0,defaultValue: void 0}, Jb = {id: "screenColors",
    name: "sd",valueType: "text",maxLength: 20,defaultValue: void 0}, Kb = {id: "screenResolution",name: "sr",valueType: "text",maxLength: 20,defaultValue: void 0}, Lb = {id: "trackingId",name: "tid",valueType: "text",maxLength: void 0,defaultValue: void 0}, Mb = {id: "viewportSize",name: "vp",valueType: "text",maxLength: 20,defaultValue: void 0}, Nb = {Ub: Db,Xb: Eb,Yb: Fb,fc: Gb,yc: Hb,zc: Ib,Gc: Jb,Hc: Kb,Tc: Lb,Zc: Mb}, Pb = function(a) {
    if (!p(a))
        return a;
    var b = Ob(a, kb);
    if (ga(b))
        return b;
    b = Ob(a, Nb);
    if (ga(b))
        return b;
    b = /^dimension(\d+)$/.exec(a);
    if (null !== b)
        return {id: a,name: "cd" + b[1],valueType: "text",maxLength: 150,defaultValue: void 0};
    b = /^metric(\d+)$/.exec(a);
    if (null !== b)
        return {id: a,name: "cm" + b[1],valueType: "integer",maxLength: void 0,defaultValue: void 0};
    throw Error(a + " is not a valid parameter name.");
}, Ob = function(a, b) {
    var c = Ha(b, function(b) {
        return b.id == a && "metric" != a && "dimension" != a
    });
    return ga(c) ? c : null
};
var M = function(a) {
    this.R = a;
    this.Za = new L
};
g = M.prototype;
g.set = function(a, b) {
    var c = Pb(a);
    this.Za.set(c, b)
};
g.send = function(a, b) {
    var c = this.Za.v();
    b && Ea(b, function(a, b) {
        null != a && c.set(Pb(b), a)
    }, this);
    return this.R.send(a, c)
};
g.Lb = function(a) {
    var b = {description: a};
    this.set(jb, a);
    return this.send("appview", b)
};
g.Mb = function(a, b, c, d) {
    fa(d) && y(0 <= d);
    return this.send("event", {eventCategory: a,eventAction: b,eventLabel: c,eventValue: d})
};
g.Ob = function(a, b, c) {
    return this.send("social", {socialNetwork: a,socialAction: b,socialTarget: c})
};
g.Nb = function(a, b) {
    return this.send("exception", {exDescription: a,exFatal: b})
};
var N = function(a, b, c, d, e, f) {
    this.kb = a;
    this.ib = b;
    this.jb = c;
    this.n = d;
    this.M = [];
    this.L = {enabled: new Cb(this.M),disabled: f};
    this.R = this.L.enabled;
    J(tb(this.n.l), ka(this.nb, e), this.mb, this)
};
da(N);
g = N.prototype;
g.nb = function(a, b) {
    y(null !== this.M, "Channel setup already completed.");
    y(b == this.n);
    this.L.enabled = a(this.n);
    Qb(this);
    wa(this.M, function(a) {
        this.send(a.pb, a.qb)
    }, this);
    this.M = null;
    Rb(this.n, t(this.tb, this))
};
g.mb = function() {
    y(null !== this.M, "Channel setup already completed.");
    this.L.enabled = Sb.Sa();
    this.R = this.L.disabled;
    this.M = null
};
g.send = function(a, b) {
    return this.R.send(a, b)
};
g.Kb = function(a) {
    var b = new M(this);
    b.set(Ib, this.kb);
    b.set(Db, 1);
    b.set(Eb, this.ib);
    b.set(Fb, this.jb);
    b.set(Lb, a);
    a = window.navigator.language;
    b.set(Hb, a);
    a = screen.colorDepth + "-bit";
    b.set(Jb, a);
    a = [screen.width, screen.height].join("x");
    b.set(Kb, a);
    a = window.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    a = new Da(a.clientWidth, a.clientHeight);
    a = [a.width, a.height].join("x");
    b.set(Mb, a);
    return b
};
g.Jb = function() {
    return tb(this.n.l)
};
var Qb = function(a) {
    a.R = a.n.Ta() ? a.L.enabled : a.L.disabled
};
N.prototype.tb = function(a) {
    switch (a) {
        case "analytics.tracking-permitted":
            Qb(this)
    }
};
var O = function(a) {
    this.B = a;
    this.Ia = 100;
    this.ua = ca;
    this.l = new I;
    this.ea = this.qa = null;
    Tb(this)
}, Tb = function(a) {
    J(a.B.get("analytics.tracking-permitted"), function(a) {
        this.ea = void 0 !== a ? a : !0;
        this.Xa()
    }, a.Ya, a);
    J(Ub(a), a.Xa, a.Ya, a)
};
O.prototype.Ya = function(a) {
    this.l.G(a)
};
O.prototype.Xa = function() {
    null === this.ea || null === this.qa || this.l.D(this)
};
var Rb = function(a, b) {
    y(a.l.m);
    y(a.ua == ca);
    a.ua = b
};
O.prototype.Qb = function(a) {
    y(this.l.m);
    sb(this.B.set("analytics.tracking-permitted", a), function() {
        this.ea = a;
        this.ua("analytics.tracking-permitted")
    }, this)
};
O.prototype.Ta = function() {
    y(this.l.m);
    var a;
    if (a = this.ea)
        a = l._gaUserPrefs, a = !(a && a.ioo && a.ioo());
    return a
};
O.prototype.Pb = function(a) {
    y(this.l.m);
    this.Ia = a
};
var Vb = function(a) {
    y(a.l.m);
    y(null !== a.Rb);
    return a.qa
}, Ub = function(a) {
    var b = new I;
    J(a.B.get("analytics.user-id"), function(a) {
        if (!a) {
            a = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
            for (var d = 0, e = a.length; d < e; d++)
                switch (a[d]) {
                    case "x":
                        a[d] = Math.floor(16 * Math.random()).toString(16);
                        break;
                    case "y":
                        a[d] = (Math.floor(4 * Math.random()) + 8).toString(16)
                }
            a = a.join("");
            this.B.set("analytics.user-id", a)
        }
        this.qa = a;
        b.D()
    }, function() {
        b.G()
    }, a);
    return b
};
var Wb = function(a, b) {
    this.n = a;
    this.C = b
};
Wb.prototype.send = function(a, b) {
    b.set(Gb, Vb(this.n));
    return this.C.send(a, b)
};
var Xb = function(a, b) {
    this.B = a;
    this.Qa = b || ""
};
Xb.prototype.get = function(a) {
    var b = new I, c = this.Qa + "." + a;
    this.B.get(c, function(a) {
        var e = chrome.runtime.lastError;
        e ? b.G(e) : b.D(a[c])
    });
    return b
};
Xb.prototype.set = function(a, b) {
    var c = new I, d = {};
    d[this.Qa + "." + a] = b;
    this.B.set(d, function() {
        var a = chrome.runtime.lastError;
        a ? c.G(a) : c.D()
    });
    return c
};
var Sb = function() {
};
da(Sb);
Sb.prototype.send = function() {
    return vb()
};
var Yb = function(a) {
    this.C = a
};
Yb.prototype.send = function(a, b) {
    Zb(b);
    $b(b);
    return this.C.send(a, b)
};
var Zb = function(a) {
    Bb(a, function(b, c) {
        void 0 !== b.maxLength && ("text" == b.valueType && 0 < b.maxLength && c.length > b.maxLength) && a.set(b, c.substring(0, b.maxLength))
    })
}, $b = function(a) {
    Bb(a, function(b, c) {
        void 0 !== b.defaultValue && c == b.defaultValue && a.remove(b)
    })
};
var wb = {status: "device-offline",na: void 0}, ac = {status: "rate-limited",na: void 0}, bc = {status: "sampled-out",na: void 0}, cc = {status: "sent",na: void 0};
var dc = function(a, b) {
    this.ub = a;
    this.C = b
};
dc.prototype.send = function(a, b) {
    var c;
    c = this.ub;
    var d = c.Pa(), e = Math.floor((d - c.Oa) * c.rb);
    0 < e && (c.X = Math.min(c.X + e, c.sb), c.Oa = d);
    1 > c.X ? c = !1 : (c.X -= 1, c = !0);
    return c || "item" == a || "transaction" == a ? this.C.send(a, b) : vb(ac)
};
var ec = function() {
    y(!0);
    y(!0);
    y(!0);
    this.X = 60;
    this.sb = 500;
    this.rb = 5E-4;
    this.Pa = function() {
        return (new Date).getTime()
    };
    this.Oa = this.Pa()
};
var fc = function(a, b) {
    this.n = a;
    this.C = b
};
fc.prototype.send = function(a, b) {
    var c = b.get(Gb), c = parseInt(c.split("-")[1], 16), d = this.n;
    y(d.l.m);
    return c < 655.36 * d.Ia ? this.C.send(a, b) : vb(bc)
};
var gc = "closure_listenable_" + (1E6 * Math.random() | 0), hc = function(a) {
    return !(!a || !a[gc])
}, ic = 0;
var jc = function() {
};
jc.prototype.Aa = !1;
jc.prototype.ka = function() {
    this.Aa || (this.Aa = !0, this.j())
};
jc.prototype.j = function() {
    if (this.fb)
        for (; this.fb.length; )
            this.fb.shift()()
};
var P = function(a, b) {
    this.type = a;
    this.currentTarget = this.target = b
};
g = P.prototype;
g.j = function() {
};
g.ka = function() {
};
g.I = !1;
g.defaultPrevented = !1;
g.La = !0;
g.preventDefault = function() {
    this.defaultPrevented = !0;
    this.La = !1
};
var kc = function(a) {
    kc[" "](a);
    return a
};
kc[" "] = ca;
var lc = !B || B && 9 <= db, mc = B && !E("9"), nc = !D || E("528"), oc = C && E("1.9b") || B && E("8") || Qa && E("9.5") || D && E("528"), pc = C && !E("8") || B && !E("9");
var qc = function(a, b) {
    if (a) {
        var c = this.type = a.type;
        P.call(this, c);
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (C) {
                var e;
                t: {
                    try {
                        kc(d.nodeName);
                        e = !0;
                        break t
                    } catch (f) {
                    }
                    e = !1
                }
                e || (d = null)
            }
        } else
            "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = D || void 0 !== a.offsetX ? a.offsetX : a.layerX;
        this.offsetY = D || void 0 !== a.offsetY ? a.offsetY : a.layerY;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ?
        a.clientY : a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.Cb = Sa ? a.metaKey : a.ctrlKey;
        this.state = a.state;
        this.Wa = a;
        a.defaultPrevented && this.preventDefault();
        delete this.I
    }
};
w(qc, P);
g = qc.prototype;
g.target = null;
g.relatedTarget = null;
g.offsetX = 0;
g.offsetY = 0;
g.clientX = 0;
g.clientY = 0;
g.screenX = 0;
g.screenY = 0;
g.button = 0;
g.keyCode = 0;
g.charCode = 0;
g.ctrlKey = !1;
g.altKey = !1;
g.shiftKey = !1;
g.metaKey = !1;
g.Cb = !1;
g.Wa = null;
g.preventDefault = function() {
    qc.K.preventDefault.call(this);
    var a = this.Wa;
    if (a.preventDefault)
        a.preventDefault();
    else if (a.returnValue = !1, mc)
        try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                a.keyCode = -1
        } catch (b) {
        }
};
g.j = function() {
};
var rc = function(a, b, c, d, e) {
    this.H = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.ja = e;
    this.key = ++ic;
    this.removed = this.ha = !1
}, sc = function(a) {
    a.removed = !0;
    a.H = null;
    a.proxy = null;
    a.src = null;
    a.ja = null
};
var Q = function(a) {
    this.src = a;
    this.h = {};
    this.W = 0
};
Q.prototype.add = function(a, b, c, d, e) {
    var f = this.h[a];
    f || (f = this.h[a] = [], this.W++);
    var h = tc(f, b, d, e);
    -1 < h ? (a = f[h], c || (a.ha = !1)) : (a = new rc(b, this.src, a, !!d, e), a.ha = c, f.push(a));
    return a
};
Q.prototype.remove = function(a, b, c, d) {
    if (!(a in this.h))
        return !1;
    var e = this.h[a];
    b = tc(e, b, c, d);
    return -1 < b ? (sc(e[b]), y(null != e.length), z.splice.call(e, b, 1), 0 == e.length && (delete this.h[a], this.W--), !0) : !1
};
var uc = function(a, b) {
    var c = b.type;
    if (!(c in a.h))
        return !1;
    var d = Aa(a.h[c], b);
    d && (sc(b), 0 == a.h[c].length && (delete a.h[c], a.W--));
    return d
};
Q.prototype.removeAll = function(a) {
    var b = 0, c;
    for (c in this.h)
        if (!a || c == a) {
            for (var d = this.h[c], e = 0; e < d.length; e++)
                ++b, sc(d[e]);
            delete this.h[c];
            this.W--
        }
    return b
};
Q.prototype.U = function(a, b, c, d) {
    a = this.h[a];
    var e = -1;
    a && (e = tc(a, b, c, d));
    return -1 < e ? a[e] : null
};
var tc = function(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.removed && f.H == b && f.capture == !!c && f.ja == d)
            return e
    }
    return -1
};
var vc = {}, wc = {}, R = {}, xc = function(a, b, c, d, e) {
    if (n(b)) {
        for (var f = 0; f < b.length; f++)
            xc(a, b[f], c, d, e);
        return null
    }
    c = yc(c);
    return hc(a) ? a.V(b, c, d, e) : zc(a, b, c, !1, d, e)
}, zc = function(a, b, c, d, e, f) {
    if (!b)
        throw Error("Invalid event type");
    var h = !!e, k = a[s] || (a[s] = ++ha), q = wc[k];
    q || (wc[k] = q = new Q(a));
    c = q.add(b, c, d, e, f);
    if (c.proxy)
        return c;
    d = Ac();
    c.proxy = d;
    d.src = a;
    d.H = c;
    a.addEventListener ? a.addEventListener(b, d, h) : a.attachEvent(b in R ? R[b] : R[b] = "on" + b, d);
    return vc[c.key] = c
}, Ac = function() {
    var a = Bc, b = lc ? function(c) {
        return a.call(b.src,
        b.H, c)
    } : function(c) {
        c = a.call(b.src, b.H, c);
        if (!c)
            return c
    };
    return b
}, Cc = function(a, b, c, d, e) {
    if (n(b)) {
        for (var f = 0; f < b.length; f++)
            Cc(a, b[f], c, d, e);
        return null
    }
    c = yc(c);
    return hc(a) ? a.ma(b, c, d, e) : zc(a, b, c, !0, d, e)
}, Dc = function(a, b, c, d, e) {
    if (n(b))
        for (var f = 0; f < b.length; f++)
            Dc(a, b[f], c, d, e);
    else
        c = yc(c), hc(a) ? a.Ba(b, c, d, e) : a && (d = !!d, (a = Ec(a)) && (b = a.U(b, c, d, e)) && Fc(b))
}, Fc = function(a) {
    if (fa(a) || !a || a.removed)
        return !1;
    var b = a.src;
    if (hc(b))
        return uc(b.p, a);
    var c = a.type, d = a.proxy;
    b.removeEventListener ? b.removeEventListener(c,
    d, a.capture) : b.detachEvent && b.detachEvent(c in R ? R[c] : R[c] = "on" + c, d);
    (c = Ec(b)) ? (uc(c, a), 0 == c.W && (c.src = null, delete wc[b[s] || (b[s] = ++ha)])) : sc(a);
    delete vc[a.key];
    return !0
}, Hc = function(a, b, c, d) {
    var e = 1;
    if (a = Ec(a))
        if (b = a.h[b])
            for (b = Ca(b), a = 0; a < b.length; a++) {
                var f = b[a];
                f && (f.capture == c && !f.removed) && (e &= !1 !== Gc(f, d))
            }
    return Boolean(e)
}, Gc = function(a, b) {
    var c = a.H, d = a.ja || a.src;
    a.ha && Fc(a);
    return c.call(d, b)
}, Bc = function(a, b) {
    if (a.removed)
        return !0;
    if (!lc) {
        var c = b || ba("window.event"), d = new qc(c, this), e =
        !0;
        if (!(0 > c.keyCode || void 0 != c.returnValue)) {
            t: {
                var f = !1;
                if (0 == c.keyCode)
                    try {
                        c.keyCode = -1;
                        break t
                    } catch (h) {
                        f = !0
                    }
                if (f || void 0 == c.returnValue)
                    c.returnValue = !0
            }
            c = [];
            for (f = d.currentTarget; f; f = f.parentNode)
                c.push(f);
            for (var f = a.type, k = c.length - 1; !d.I && 0 <= k; k--)
                d.currentTarget = c[k], e &= Hc(c[k], f, !0, d);
            for (k = 0; !d.I && k < c.length; k++)
                d.currentTarget = c[k], e &= Hc(c[k], f, !1, d)
        }
        return e
    }
    return Gc(a, new qc(b, this))
}, Ec = function(a) {
    return a[s] ? wc[a[s] || (a[s] = ++ha)] || null : null
}, Ic = "__closure_events_fn_" + (1E9 * Math.random() >>>
0), yc = function(a) {
    y(a, "Listener can not be null.");
    if ("function" == m(a))
        return a;
    y(a.handleEvent, "An object listener must have handleEvent method.");
    return a[Ic] || (a[Ic] = function(b) {
        return a.handleEvent(b)
    })
};
var S = function() {
    this.p = new Q(this);
    this.wb = this
};
w(S, jc);
S.prototype[gc] = !0;
g = S.prototype;
g.xa = null;
g.addEventListener = function(a, b, c, d) {
    xc(this, a, b, c, d)
};
g.removeEventListener = function(a, b, c, d) {
    Dc(this, a, b, c, d)
};
g.dispatchEvent = function(a) {
    Jc(this);
    var b, c = this.xa;
    if (c) {
        b = [];
        for (var d = 1; c; c = c.xa)
            b.push(c), y(1E3 > ++d, "infinite loop")
    }
    c = this.wb;
    d = a.type || a;
    if (p(a))
        a = new P(a, c);
    else if (a instanceof P)
        a.target = a.target || c;
    else {
        var e = a;
        a = new P(d, c);
        Ja(a, e)
    }
    var e = !0, f;
    if (b)
        for (var h = b.length - 1; !a.I && 0 <= h; h--)
            f = a.currentTarget = b[h], e = Kc(f, d, !0, a) && e;
    a.I || (f = a.currentTarget = c, e = Kc(f, d, !0, a) && e, a.I || (e = Kc(f, d, !1, a) && e));
    if (b)
        for (h = 0; !a.I && h < b.length; h++)
            f = a.currentTarget = b[h], e = Kc(f, d, !1, a) && e;
    return e
};
g.j = function() {
    S.K.j.call(this);
    this.p && this.p.removeAll(void 0);
    this.xa = null
};
g.V = function(a, b, c, d) {
    Jc(this);
    return this.p.add(a, b, !1, c, d)
};
g.ma = function(a, b, c, d) {
    return this.p.add(a, b, !0, c, d)
};
g.Ba = function(a, b, c, d) {
    return this.p.remove(a, b, c, d)
};
var Kc = function(a, b, c, d) {
    b = a.p.h[b];
    if (!b)
        return !0;
    b = Ca(b);
    for (var e = !0, f = 0; f < b.length; ++f) {
        var h = b[f];
        if (h && !h.removed && h.capture == c) {
            var k = h.H, q = h.ja || h.src;
            h.ha && uc(a.p, h);
            e = !1 !== k.call(q, d) && e
        }
    }
    return e && !1 != d.La
};
S.prototype.U = function(a, b, c, d) {
    return this.p.U(a, b, c, d)
};
var Jc = function(a) {
    y(a.p, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
};
var Mc = function(a) {
    return Lc(a || arguments.callee.caller, [])
}, Lc = function(a, b) {
    var c = [];
    if (0 <= va(b, a))
        c.push("[...circular reference...]");
    else if (a && 50 > b.length) {
        c.push(Nc(a) + "(");
        for (var d = a.arguments, e = 0; e < d.length; e++) {
            0 < e && c.push(", ");
            var f;
            f = d[e];
            switch (typeof f) {
                case "object":
                    f = f ? "object" : "null";
                    break;
                case "string":
                    break;
                case "number":
                    f = String(f);
                    break;
                case "boolean":
                    f = f ? "true" : "false";
                    break;
                case "function":
                    f = (f = Nc(f)) ? f : "[fn]";
                    break;
                default:
                    f = typeof f
            }
            40 < f.length && (f = f.substr(0, 40) + "...");
            c.push(f)
        }
        b.push(a);
        c.push(")\n");
        try {
            c.push(Lc(a.caller, b))
        } catch (h) {
            c.push("[exception trying to get caller]\n")
        }
    } else
        a ? c.push("[...long stack...]") : c.push("[end]");
    return c.join("")
}, Nc = function(a) {
    if (Oc[a])
        return Oc[a];
    a = String(a);
    if (!Oc[a]) {
        var b = /function ([^\(]+)/.exec(a);
        Oc[a] = b ? b[1] : "[Anonymous]"
    }
    return Oc[a]
}, Oc = {};
var T = function(a, b, c, d, e) {
    this.reset(a, b, c, d, e)
};
T.prototype.Ab = 0;
T.prototype.Va = null;
T.prototype.Ua = null;
var Pc = 0;
T.prototype.reset = function(a, b, c, d, e) {
    this.Ab = "number" == typeof e ? e : Pc++;
    d || la();
    this.Y = a;
    this.zb = b;
    delete this.Va;
    delete this.Ua
};
T.prototype.ab = function(a) {
    this.Y = a
};
T.prototype.getMessage = function() {
    return this.zb
};
var U = function(a) {
    this.Eb = a
};
U.prototype.F = null;
U.prototype.Y = null;
U.prototype.Da = null;
U.prototype.cb = null;
var Qc = function(a, b) {
    this.name = a;
    this.value = b
};
Qc.prototype.toString = function() {
    return this.name
};
var Rc = new Qc("SEVERE", 1E3), Sc = new Qc("WARNING", 900), Tc = new Qc("CONFIG", 700), Uc = new Qc("FINE", 500);
U.prototype.getParent = function() {
    return this.F
};
U.prototype.getChildren = function() {
    this.Da || (this.Da = {});
    return this.Da
};
U.prototype.ab = function(a) {
    this.Y = a
};
var Vc = function(a) {
    if (a.Y)
        return a.Y;
    if (a.F)
        return Vc(a.F);
    ua("Root logger has no level set.");
    return null
};
U.prototype.log = function(a, b, c) {
    if (a.value >= Vc(this).value)
        for (a = this.Gb(a, b, c), b = "log:" + a.getMessage(), l.console && (l.console.timeStamp ? l.console.timeStamp(b) : l.console.markTimeline && l.console.markTimeline(b)), l.msWriteProfilerMark && l.msWriteProfilerMark(b), b = this; b; ) {
            c = b;
            var d = a;
            if (c.cb)
                for (var e = 0, f = void 0; f = c.cb[e]; e++)
                    f(d);
            b = b.getParent()
        }
};
U.prototype.Gb = function(a, b, c) {
    var d = new T(a, String(b), this.Eb);
    if (c) {
        d.Va = c;
        var e;
        var f = arguments.callee.caller;
        try {
            var h;
            var k = ba("window.location.href");
            if (p(c))
                h = {message: c,name: "Unknown error",lineNumber: "Not available",fileName: k,stack: "Not available"};
            else {
                var q, F, r = !1;
                try {
                    q = c.lineNumber || c.Sb || "Not available"
                } catch (v) {
                    q = "Not available", r = !0
                }
                try {
                    F = c.fileName || c.filename || c.sourceURL || l.$googDebugFname || k
                } catch (Wa) {
                    F = "Not available", r = !0
                }
                h = !r && c.lineNumber && c.fileName && c.stack && c.message && c.name ?
                c : {message: c.message || "Not available",name: c.name || "UnknownError",lineNumber: q,fileName: F,stack: c.stack || "Not available"}
            }
            e = "Message: " + sa(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + sa(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + sa(Mc(f) + "-> ")
        } catch (vd) {
            e = "Exception trying to expose exception! You win, we lose. " + vd
        }
        d.Ua = e
    }
    return d
};
var Wc = {}, Xc = null, Yc = function(a) {
    Xc || (Xc = new U(""), Wc[""] = Xc, Xc.ab(Tc));
    var b;
    if (!(b = Wc[a])) {
        b = new U(a);
        var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Yc(a.substr(0, c));
        c.getChildren()[d] = b;
        b.F = c;
        Wc[a] = b
    }
    return b
};
var V = function(a, b) {
    a && a.log(Uc, b, void 0)
};
var Zc = function(a, b) {
    S.call(this);
    this.la = a || 1;
    this.N = b || l;
    this.va = t(this.yb, this);
    this.wa = la()
};
w(Zc, S);
g = Zc.prototype;
g.enabled = !1;
g.e = null;
g.yb = function() {
    if (this.enabled) {
        var a = la() - this.wa;
        0 < a && a < 0.8 * this.la ? this.e = this.N.setTimeout(this.va, this.la - a) : (this.e && (this.N.clearTimeout(this.e), this.e = null), this.dispatchEvent("tick"), this.enabled && (this.e = this.N.setTimeout(this.va, this.la), this.wa = la()))
    }
};
g.start = function() {
    this.enabled = !0;
    this.e || (this.e = this.N.setTimeout(this.va, this.la), this.wa = la())
};
g.stop = function() {
    this.enabled = !1;
    this.e && (this.N.clearTimeout(this.e), this.e = null)
};
g.j = function() {
    Zc.K.j.call(this);
    this.stop();
    delete this.N
};
var $c = function(a, b, c) {
    if ("function" == m(a))
        c && (a = t(a, c));
    else if (a && "function" == typeof a.handleEvent)
        a = t(a.handleEvent, a);
    else
        throw Error("Invalid listener argument");
    return 2147483647 < b ? -1 : l.setTimeout(a, b || 0)
};
var ad = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), bd = D, cd = function(a, b) {
    if (bd) {
        bd = !1;
        var c = l.location;
        if (c) {
            var d = c.href;
            if (d && (d = (d = cd(3, d)) && decodeURIComponent(d)) && d != c.hostname)
                throw bd = !0, Error();
        }
    }
    return b.match(ad)[a] || null
};
var dd = function() {
};
dd.prototype.da = null;
var ed, fd = function() {
};
w(fd, dd);
var hd = function(a) {
    return (a = gd(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}, id = function(a) {
    var b = {};
    gd(a) && (b[0] = !0, b[1] = !0);
    return b
}, gd = function(a) {
    if (!a.eb && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                return new ActiveXObject(d), a.eb = d
            } catch (e) {
            }
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.eb
};
ed = new fd;
var W = function(a) {
    S.call(this);
    this.headers = new G;
    this.J = a || null;
    this.t = !1;
    this.$ = this.a = null;
    this.P = this.Ea = this.aa = "";
    this.A = this.oa = this.Z = this.pa = !1;
    this.Q = 0;
    this.ba = null;
    this.Fa = "";
    this.ca = this.gb = !1
};
w(W, S);
var jd = W.prototype, kd = Yc("goog.net.XhrIo");
jd.k = kd;
var ld = /^https?$/i, md = ["POST", "PUT"], nd = [], od = function(a, b, c) {
    var d = new W;
    nd.push(d);
    b && d.V("complete", b);
    d.ma("ready", d.Bb);
    d.send(a, "POST", c, void 0)
};
W.prototype.Bb = function() {
    this.ka();
    Aa(nd, this)
};
W.prototype.send = function(a, b, c, d) {
    if (this.a)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + this.aa + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.aa = a;
    this.P = "";
    this.Ea = b;
    this.pa = !1;
    this.t = !0;
    this.a = this.J ? hd(this.J) : hd(ed);
    this.$ = this.J ? this.J.da || (this.J.da = id(this.J)) : ed.da || (ed.da = id(ed));
    this.a.onreadystatechange = t(this.Ga, this);
    try {
        V(this.k, X(this, "Opening Xhr")), this.oa = !0, this.a.open(b, a, !0), this.oa = !1
    } catch (e) {
        V(this.k, X(this, "Error opening Xhr: " + e.message));
        pd(this,
        e);
        return
    }
    a = c || "";
    var f = this.headers.v();
    d && Ab(d, function(a, b) {
        f.set(b, a)
    });
    d = za(f.w());
    c = l.FormData && a instanceof l.FormData;
    !(0 <= va(md, b)) || (d || c) || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    Ab(f, function(a, b) {
        this.a.setRequestHeader(b, a)
    }, this);
    this.Fa && (this.a.responseType = this.Fa);
    "withCredentials" in this.a && (this.a.withCredentials = this.gb);
    try {
        qd(this), 0 < this.Q && (this.ca = B && E(9) && fa(this.a.timeout) && void 0 !== this.a.ontimeout, V(this.k, X(this, "Will abort after " + this.Q +
        "ms if incomplete, xhr2 " + this.ca)), this.ca ? (this.a.timeout = this.Q, this.a.ontimeout = t(this.Ha, this)) : this.ba = $c(this.Ha, this.Q, this)), V(this.k, X(this, "Sending request")), this.Z = !0, this.a.send(a), this.Z = !1
    } catch (h) {
        V(this.k, X(this, "Send error: " + h.message)), pd(this, h)
    }
};
var ya = function(a) {
    return "content-type" == a.toLowerCase()
};
W.prototype.Ha = function() {
    "undefined" != typeof aa && this.a && (this.P = "Timed out after " + this.Q + "ms, aborting", V(this.k, X(this, this.P)), this.dispatchEvent("timeout"), this.abort(8))
};
var pd = function(a, b) {
    a.t = !1;
    a.a && (a.A = !0, a.a.abort(), a.A = !1);
    a.P = b;
    rd(a);
    sd(a)
}, rd = function(a) {
    a.pa || (a.pa = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
};
W.prototype.abort = function() {
    this.a && this.t && (V(this.k, X(this, "Aborting")), this.t = !1, this.A = !0, this.a.abort(), this.A = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), sd(this))
};
W.prototype.j = function() {
    this.a && (this.t && (this.t = !1, this.A = !0, this.a.abort(), this.A = !1), sd(this, !0));
    W.K.j.call(this)
};
W.prototype.Ga = function() {
    this.Aa || (this.oa || this.Z || this.A ? td(this) : this.xb())
};
W.prototype.xb = function() {
    td(this)
};
var td = function(a) {
    if (a.t && "undefined" != typeof aa)
        if (a.$[1] && 4 == ud(a) && 2 == wd(a))
            V(a.k, X(a, "Local request error detected and ignored"));
        else if (a.Z && 4 == ud(a))
            $c(a.Ga, 0, a);
        else if (a.dispatchEvent("readystatechange"), 4 == ud(a)) {
            V(a.k, X(a, "Request complete"));
            a.t = !1;
            try {
                var b = wd(a), c, d;
                t: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        d = !0;
                        break t;
                    default:
                        d = !1
                }
                if (!(c = d)) {
                    var e;
                    if (e = 0 === b) {
                        var f = cd(1, String(a.aa));
                        if (!f && self.location)
                            var h = self.location.protocol, f = h.substr(0,
                            h.length - 1);
                        e = !ld.test(f ? f.toLowerCase() : "")
                    }
                    c = e
                }
                if (c)
                    a.dispatchEvent("complete"), a.dispatchEvent("success");
                else {
                    var k;
                    try {
                        k = 2 < ud(a) ? a.a.statusText : ""
                    } catch (q) {
                        V(a.k, "Can not get status: " + q.message), k = ""
                    }
                    a.P = k + " [" + wd(a) + "]";
                    rd(a)
                }
            }finally {
                sd(a)
            }
        }
}, sd = function(a, b) {
    if (a.a) {
        qd(a);
        var c = a.a, d = a.$[0] ? ca : null;
        a.a = null;
        a.$ = null;
        b || a.dispatchEvent("ready");
        try {
            c.onreadystatechange = d
        } catch (e) {
            (c = a.k) && c.log(Rc, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
        }
    }
}, qd = function(a) {
    a.a &&
    a.ca && (a.a.ontimeout = null);
    fa(a.ba) && (l.clearTimeout(a.ba), a.ba = null)
}, ud = function(a) {
    return a.a ? a.a.readyState : 0
}, wd = function(a) {
    try {
        return 2 < ud(a) ? a.a.status : -1
    } catch (b) {
        return (a = a.k) && a.log(Sc, "Can not get status: " + b.message, void 0), -1
    }
}, X = function(a, b) {
    return b + " [" + a.Ea + " " + a.aa + " " + wd(a) + "]"
};
var xd = function(a, b, c) {
    this.o = a || null;
    this.Db = !!c
}, Z = function(a) {
    if (!a.c && (a.c = new G, a.g = 0, a.o))
        for (var b = a.o.split("&"), c = 0; c < b.length; c++) {
            var d = b[c].indexOf("="), e = null, f = null;
            0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
            e = decodeURIComponent(e.replace(/\+/g, " "));
            e = Y(a, e);
            a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
        }
};
g = xd.prototype;
g.c = null;
g.g = null;
g.add = function(a, b) {
    Z(this);
    this.o = null;
    a = Y(this, a);
    var c = this.c.get(a);
    c || this.c.set(a, c = []);
    c.push(b);
    this.g++;
    return this
};
g.remove = function(a) {
    Z(this);
    a = Y(this, a);
    return this.c.S(a) ? (this.o = null, this.g -= this.c.get(a).length, this.c.remove(a)) : !1
};
g.S = function(a) {
    Z(this);
    a = Y(this, a);
    return this.c.S(a)
};
g.w = function() {
    Z(this);
    for (var a = this.c.q(), b = this.c.w(), c = [], d = 0; d < b.length; d++)
        for (var e = a[d], f = 0; f < e.length; f++)
            c.push(b[d]);
    return c
};
g.q = function(a) {
    Z(this);
    var b = [];
    if (a)
        this.S(a) && (b = Ba(b, this.c.get(Y(this, a))));
    else {
        a = this.c.q();
        for (var c = 0; c < a.length; c++)
            b = Ba(b, a[c])
    }
    return b
};
g.set = function(a, b) {
    Z(this);
    this.o = null;
    a = Y(this, a);
    this.S(a) && (this.g -= this.c.get(a).length);
    this.c.set(a, [b]);
    this.g++;
    return this
};
g.get = function(a, b) {
    var c = a ? this.q(a) : [];
    return 0 < c.length ? String(c[0]) : b
};
g.toString = function() {
    if (this.o)
        return this.o;
    if (!this.c)
        return "";
    for (var a = [], b = this.c.w(), c = 0; c < b.length; c++)
        for (var d = b[c], e = encodeURIComponent(String(d)), d = this.q(d), f = 0; f < d.length; f++) {
            var h = e;
            "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
            a.push(h)
        }
    return this.o = a.join("&")
};
g.v = function() {
    var a = new xd;
    a.o = this.o;
    this.c && (a.c = this.c.v(), a.g = this.g);
    return a
};
var Y = function(a, b) {
    var c = String(b);
    a.Db && (c = c.toLowerCase());
    return c
};
var yd = function(a, b) {
    this.vb = a;
    this.Ra = b
};
yd.prototype.send = function(a, b) {
    if (nc && !navigator.onLine)
        return xb();
    var c = new I, d = zd(a, b);
    d.length > this.Ra ? c.G({status: "payload-too-big",na: yb("Encoded hit length == %s, but should be <= %s.", d.length, this.Ra)}) : od(this.vb, function() {
        c.D(cc)
    }, d);
    return c
};
var zd = function(a, b) {
    var c = new xd;
    c.add(ib.name, a);
    Bb(b, function(a, b) {
        c.add(a.name, b.toString())
    });
    return c.toString()
};
var Ad = function(a) {
    this.ya = a;
    this.b = {}
};
w(Ad, jc);
var Bd = [];
g = Ad.prototype;
g.V = function(a, b, c, d, e) {
    n(b) || (Bd[0] = b, b = Bd);
    for (var f = 0; f < b.length; f++) {
        var h = xc(a, b[f], c || this, d || !1, e || this.ya || this);
        if (!h)
            break;
        this.b[h.key] = h
    }
    return this
};
g.ma = function(a, b, c, d, e) {
    if (n(b))
        for (var f = 0; f < b.length; f++)
            this.ma(a, b[f], c, d, e);
    else
        a = Cc(a, b, c || this, d, e || this.ya || this), this.b[a.key] = a;
    return this
};
g.Ba = function(a, b, c, d, e) {
    if (n(b))
        for (var f = 0; f < b.length; f++)
            this.Ba(a, b[f], c, d, e);
    else
        e = e || this.ya || this, c = yc(c || this), d = !!d, b = hc(a) ? a.U(b, c, d, e) : a ? (a = Ec(a)) ? a.U(b, c, d, e) : null : null, b && (Fc(b), delete this.b[b.key]);
    return this
};
g.removeAll = function() {
    Ea(this.b, Fc);
    this.b = {}
};
g.j = function() {
    Ad.K.j.call(this);
    this.removeAll()
};
g.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
};
var $anonym = function() {
    S.call(this);
    this.fa = new Ad(this);
    nc && (oc ? this.fa.V(pc ? document.body : window, ["online", "offline"], this.Ma) : (this.Na = nc ? navigator.onLine : !0, this.e = new Zc(250), this.fa.V(this.e, "tick", this.ob), this.e.start()))
};
w($anonym, S);
$anonym.prototype.ob = function() {
    var a = nc ? navigator.onLine : !0;
    a != this.Na && (this.Na = a, this.Ma())
};
$anonym.prototype.Ma = function() {
    this.dispatchEvent((nc ? navigator.onLine : 1) ? "online" : "offline")
};
$anonym.prototype.j = function() {
    $.K.j.call(this);
    this.fa.ka();
    this.fa = null;
    this.e && (this.e.ka(), this.e = null)
};
var Cd = new G, Dd = function(a) {
    if (!hb) {
        new $anonym;
        var b = new Yb(new yd("https://www.google-analytics.com/collect", 8192)), c = new ec;
        hb = new Wb(a, new fc(a, new dc(c, b)))
    }
    return hb
};
u("goog.async.Deferred", I);
u("goog.async.Deferred.prototype.addCallback", I.prototype.Ib);
u("analytics.getService", function(a) {
    var b = Cd.get(a, null);
    if (null === b) {
        var b = chrome.runtime.getManifest().version, c;
        c = new Xb(chrome.storage.local, "google-analytics");
        y(null !== c);
        c = new O(c);
        b = new N("ca1", a, b, c, Dd, Sb.Sa());
        Cd.set(a, b)
    }
    return b
});
u("analytics.internal.ServiceChannel", N);
u("analytics.internal.ServiceChannel.prototype.getTracker", N.prototype.Kb);
u("analytics.internal.ServiceChannel.prototype.getConfig", N.prototype.Jb);
u("analytics.internal.ServiceSettings", O);
u("analytics.internal.ServiceSettings.prototype.setTrackingPermitted", O.prototype.Qb);
u("analytics.internal.ServiceSettings.prototype.isTrackingPermitted", O.prototype.Ta);
u("analytics.internal.ServiceSettings.prototype.setSampleRate", O.prototype.Pb);
u("analytics.internal.ServiceTracker", M);
u("analytics.internal.ServiceTracker.prototype.send", M.prototype.send);
u("analytics.internal.ServiceTracker.prototype.sendAppView", M.prototype.Lb);
u("analytics.internal.ServiceTracker.prototype.sendEvent", M.prototype.Mb);
u("analytics.internal.ServiceTracker.prototype.sendSocial", M.prototype.Ob);
u("analytics.internal.ServiceTracker.prototype.sendException", M.prototype.Nb);
u("analytics.HitTypes.APPVIEW", "appview");
u("analytics.HitTypes.EVENT", "event");
u("analytics.HitTypes.SOCIAL", "social");
u("analytics.HitTypes.TRANSACTION", "transaction");
u("analytics.HitTypes.ITEM", "item");
u("analytics.HitTypes.TIMING", "timing");
u("analytics.HitTypes.EXCEPTION", "exception");
Ea(kb, function(a) {
    var b = a.id.replace(/[A-Z]/, "_$&").toUpperCase();
    u("analytics.Parameters." + b, a)
});
