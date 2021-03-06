function addEvent(e, t, n) {
  e.addEventListener
    ? e.addEventListener(
        t,
        function (e) {
          n(e, e.target);
        },
        !1
      )
    : e.attachEvent &&
      e.attachEvent("on" + t, function (e) {
        n(e, e.srcElement);
      });
}
!(function (e, t) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  function n(e) {
    var t = "length" in e && e.length,
      n = J.type(e);
    return "function" === n || J.isWindow(e)
      ? !1
      : 1 === e.nodeType && t
      ? !0
      : "array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e);
  }
  function i(e, t, n) {
    if (J.isFunction(t))
      return J.grep(e, function (e, i) {
        return !!t.call(e, i, e) !== n;
      });
    if (t.nodeType)
      return J.grep(e, function (e) {
        return (e === t) !== n;
      });
    if ("string" == typeof t) {
      if (ae.test(t)) return J.filter(t, e, n);
      t = J.filter(t, e);
    }
    return J.grep(e, function (e) {
      return X.call(t, e) >= 0 !== n;
    });
  }
  function o(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function r(e) {
    var t = (he[e] = {});
    return (
      J.each(e.match(fe) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  function s() {
    Y.removeEventListener("DOMContentLoaded", s, !1),
      e.removeEventListener("load", s, !1),
      J.ready();
  }
  function a() {
    Object.defineProperty((this.cache = {}), 0, {
      get: function () {
        return {};
      },
    }),
      (this.expando = J.expando + a.uid++);
  }
  function l(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(we, "-$1").toLowerCase()),
        (n = e.getAttribute(i)),
        "string" == typeof n)
      ) {
        try {
          n =
            "true" === n
              ? !0
              : "false" === n
              ? !1
              : "null" === n
              ? null
              : +n + "" === n
              ? +n
              : ye.test(n)
              ? J.parseJSON(n)
              : n;
        } catch (o) {}
        be.set(e, t, n);
      } else n = void 0;
    return n;
  }
  function c() {
    return !0;
  }
  function d() {
    return !1;
  }
  function u() {
    try {
      return Y.activeElement;
    } catch (e) {}
  }
  function p(e, t) {
    return J.nodeName(e, "table") &&
      J.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function f(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function h(e) {
    var t = Oe.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function m(e, t) {
    for (var n = 0, i = e.length; i > n; n++)
      ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"));
  }
  function g(e, t) {
    var n, i, o, r, s, a, l, c;
    if (1 === t.nodeType) {
      if (
        ve.hasData(e) &&
        ((r = ve.access(e)), (s = ve.set(t, r)), (c = r.events))
      ) {
        delete s.handle, (s.events = {});
        for (o in c)
          for (n = 0, i = c[o].length; i > n; n++) J.event.add(t, o, c[o][n]);
      }
      be.hasData(e) &&
        ((a = be.access(e)), (l = J.extend({}, a)), be.set(t, l));
    }
  }
  function v(e, t) {
    var n = e.getElementsByTagName
      ? e.getElementsByTagName(t || "*")
      : e.querySelectorAll
      ? e.querySelectorAll(t || "*")
      : [];
    return void 0 === t || (t && J.nodeName(e, t)) ? J.merge([e], n) : n;
  }
  function b(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && Ce.test(e.type)
      ? (t.checked = e.checked)
      : ("input" === n || "textarea" === n) &&
        (t.defaultValue = e.defaultValue);
  }
  function y(t, n) {
    var i,
      o = J(n.createElement(t)).appendTo(n.body),
      r =
        e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0]))
          ? i.display
          : J.css(o[0], "display");
    return o.detach(), r;
  }
  function w(e) {
    var t = Y,
      n = ze[e];
    return (
      n ||
        ((n = y(e, t)),
        ("none" !== n && n) ||
          ((He = (
            He || J("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(t.documentElement)),
          (t = He[0].contentDocument),
          t.write(),
          t.close(),
          (n = y(e, t)),
          He.detach()),
        (ze[e] = n)),
      n
    );
  }
  function x(e, t, n) {
    var i,
      o,
      r,
      s,
      a = e.style;
    return (
      (n = n || Fe(e)),
      n && (s = n.getPropertyValue(t) || n[t]),
      n &&
        ("" !== s || J.contains(e.ownerDocument, e) || (s = J.style(e, t)),
        Be.test(s) &&
          Pe.test(t) &&
          ((i = a.width),
          (o = a.minWidth),
          (r = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = i),
          (a.minWidth = o),
          (a.maxWidth = r))),
      void 0 !== s ? s + "" : s
    );
  }
  function k(e, t) {
    return {
      get: function () {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      },
    };
  }
  function T(e, t) {
    if (t in e) return t;
    for (var n = t[0].toUpperCase() + t.slice(1), i = t, o = Ve.length; o--; )
      if (((t = Ve[o] + n), t in e)) return t;
    return i;
  }
  function C(e, t, n) {
    var i = Ue.exec(t);
    return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t;
  }
  function S(e, t, n, i, o) {
    for (
      var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        s = 0;
      4 > r;
      r += 2
    )
      "margin" === n && (s += J.css(e, n + ke[r], !0, o)),
        i
          ? ("content" === n && (s -= J.css(e, "padding" + ke[r], !0, o)),
            "margin" !== n &&
              (s -= J.css(e, "border" + ke[r] + "Width", !0, o)))
          : ((s += J.css(e, "padding" + ke[r], !0, o)),
            "padding" !== n &&
              (s += J.css(e, "border" + ke[r] + "Width", !0, o)));
    return s;
  }
  function $(e, t, n) {
    var i = !0,
      o = "width" === t ? e.offsetWidth : e.offsetHeight,
      r = Fe(e),
      s = "border-box" === J.css(e, "boxSizing", !1, r);
    if (0 >= o || null == o) {
      if (
        ((o = x(e, t, r)), (0 > o || null == o) && (o = e.style[t]), Be.test(o))
      )
        return o;
      (i = s && (Z.boxSizingReliable() || o === e.style[t])),
        (o = parseFloat(o) || 0);
    }
    return o + S(e, t, n || (s ? "border" : "content"), i, r) + "px";
  }
  function _(e, t) {
    for (var n, i, o, r = [], s = 0, a = e.length; a > s; s++)
      (i = e[s]),
        i.style &&
          ((r[s] = ve.get(i, "olddisplay")),
          (n = i.style.display),
          t
            ? (r[s] || "none" !== n || (i.style.display = ""),
              "" === i.style.display &&
                Te(i) &&
                (r[s] = ve.access(i, "olddisplay", w(i.nodeName))))
            : ((o = Te(i)),
              ("none" === n && o) ||
                ve.set(i, "olddisplay", o ? n : J.css(i, "display"))));
    for (s = 0; a > s; s++)
      (i = e[s]),
        i.style &&
          ((t && "none" !== i.style.display && "" !== i.style.display) ||
            (i.style.display = t ? r[s] || "" : "none"));
    return e;
  }
  function N(e, t, n, i, o) {
    return new N.prototype.init(e, t, n, i, o);
  }
  function E() {
    return (
      setTimeout(function () {
        Ze = void 0;
      }),
      (Ze = J.now())
    );
  }
  function A(e, t) {
    var n,
      i = 0,
      o = { height: e };
    for (t = t ? 1 : 0; 4 > i; i += 2 - t)
      (n = ke[i]), (o["margin" + n] = o["padding" + n] = e);
    return t && (o.opacity = o.width = e), o;
  }
  function D(e, t, n) {
    for (
      var i, o = (nt[t] || []).concat(nt["*"]), r = 0, s = o.length;
      s > r;
      r++
    )
      if ((i = o[r].call(n, t, e))) return i;
  }
  function j(e, t, n) {
    var i,
      o,
      r,
      s,
      a,
      l,
      c,
      d,
      u = this,
      p = {},
      f = e.style,
      h = e.nodeType && Te(e),
      m = ve.get(e, "fxshow");
    n.queue ||
      ((a = J._queueHooks(e, "fx")),
      null == a.unqueued &&
        ((a.unqueued = 0),
        (l = a.empty.fire),
        (a.empty.fire = function () {
          a.unqueued || l();
        })),
      a.unqueued++,
      u.always(function () {
        u.always(function () {
          a.unqueued--, J.queue(e, "fx").length || a.empty.fire();
        });
      })),
      1 === e.nodeType &&
        ("height" in t || "width" in t) &&
        ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
        (c = J.css(e, "display")),
        (d = "none" === c ? ve.get(e, "olddisplay") || w(e.nodeName) : c),
        "inline" === d &&
          "none" === J.css(e, "float") &&
          (f.display = "inline-block")),
      n.overflow &&
        ((f.overflow = "hidden"),
        u.always(function () {
          (f.overflow = n.overflow[0]),
            (f.overflowX = n.overflow[1]),
            (f.overflowY = n.overflow[2]);
        }));
    for (i in t)
      if (((o = t[i]), Ge.exec(o))) {
        if (
          (delete t[i], (r = r || "toggle" === o), o === (h ? "hide" : "show"))
        ) {
          if ("show" !== o || !m || void 0 === m[i]) continue;
          h = !0;
        }
        p[i] = (m && m[i]) || J.style(e, i);
      } else c = void 0;
    if (J.isEmptyObject(p))
      "inline" === ("none" === c ? w(e.nodeName) : c) && (f.display = c);
    else {
      m ? "hidden" in m && (h = m.hidden) : (m = ve.access(e, "fxshow", {})),
        r && (m.hidden = !h),
        h
          ? J(e).show()
          : u.done(function () {
              J(e).hide();
            }),
        u.done(function () {
          var t;
          ve.remove(e, "fxshow");
          for (t in p) J.style(e, t, p[t]);
        });
      for (i in p)
        (s = D(h ? m[i] : 0, i, u)),
          i in m ||
            ((m[i] = s.start),
            h &&
              ((s.end = s.start),
              (s.start = "width" === i || "height" === i ? 1 : 0)));
    }
  }
  function L(e, t) {
    var n, i, o, r, s;
    for (n in e)
      if (
        ((i = J.camelCase(n)),
        (o = t[i]),
        (r = e[n]),
        J.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
        n !== i && ((e[i] = r), delete e[n]),
        (s = J.cssHooks[i]),
        s && "expand" in s)
      ) {
        (r = s.expand(r)), delete e[i];
        for (n in r) n in e || ((e[n] = r[n]), (t[n] = o));
      } else t[i] = o;
  }
  function M(e, t, n) {
    var i,
      o,
      r = 0,
      s = tt.length,
      a = J.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (o) return !1;
        for (
          var t = Ze || E(),
            n = Math.max(0, c.startTime + c.duration - t),
            i = n / c.duration || 0,
            r = 1 - i,
            s = 0,
            l = c.tweens.length;
          l > s;
          s++
        )
          c.tweens[s].run(r);
        return (
          a.notifyWith(e, [c, r, n]),
          1 > r && l ? n : (a.resolveWith(e, [c]), !1)
        );
      },
      c = a.promise({
        elem: e,
        props: J.extend({}, t),
        opts: J.extend(!0, { specialEasing: {} }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Ze || E(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = J.Tween(
            e,
            c.opts,
            t,
            n,
            c.opts.specialEasing[t] || c.opts.easing
          );
          return c.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? c.tweens.length : 0;
          if (o) return this;
          for (o = !0; i > n; n++) c.tweens[n].run(1);
          return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this;
        },
      }),
      d = c.props;
    for (L(d, c.opts.specialEasing); s > r; r++)
      if ((i = tt[r].call(c, e, d, c.opts))) return i;
    return (
      J.map(d, D, c),
      J.isFunction(c.opts.start) && c.opts.start.call(e, c),
      J.fx.timer(J.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always)
    );
  }
  function I(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var i,
        o = 0,
        r = t.toLowerCase().match(fe) || [];
      if (J.isFunction(n))
        for (; (i = r[o++]); )
          "+" === i[0]
            ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function O(e, t, n, i) {
    function o(a) {
      var l;
      return (
        (r[a] = !0),
        J.each(e[a] || [], function (e, a) {
          var c = a(t, n, i);
          return "string" != typeof c || s || r[c]
            ? s
              ? !(l = c)
              : void 0
            : (t.dataTypes.unshift(c), o(c), !1);
        }),
        l
      );
    }
    var r = {},
      s = e === yt;
    return o(t.dataTypes[0]) || (!r["*"] && o("*"));
  }
  function R(e, t) {
    var n,
      i,
      o = J.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
    return i && J.extend(!0, e, i), e;
  }
  function q(e, t, n) {
    for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
      l.shift(),
        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    if (i)
      for (o in a)
        if (a[o] && a[o].test(i)) {
          l.unshift(o);
          break;
        }
    if (l[0] in n) r = l[0];
    else {
      for (o in n) {
        if (!l[0] || e.converters[o + " " + l[0]]) {
          r = o;
          break;
        }
        s || (s = o);
      }
      r = r || s;
    }
    return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0;
  }
  function H(e, t, n, i) {
    var o,
      r,
      s,
      a,
      l,
      c = {},
      d = e.dataTypes.slice();
    if (d[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
    for (r = d.shift(); r; )
      if (
        (e.responseFields[r] && (n[e.responseFields[r]] = t),
        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (l = r),
        (r = d.shift()))
      )
        if ("*" === r) r = l;
        else if ("*" !== l && l !== r) {
          if (((s = c[l + " " + r] || c["* " + r]), !s))
            for (o in c)
              if (
                ((a = o.split(" ")),
                a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]]))
              ) {
                s === !0
                  ? (s = c[o])
                  : c[o] !== !0 && ((r = a[0]), d.unshift(a[1]));
                break;
              }
          if (s !== !0)
            if (s && e["throws"]) t = s(t);
            else
              try {
                t = s(t);
              } catch (u) {
                return {
                  state: "parsererror",
                  error: s ? u : "No conversion from " + l + " to " + r,
                };
              }
        }
    return { state: "success", data: t };
  }
  function z(e, t, n, i) {
    var o;
    if (J.isArray(t))
      J.each(t, function (t, o) {
        n || Ct.test(e)
          ? i(e, o)
          : z(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i);
      });
    else if (n || "object" !== J.type(t)) i(e, t);
    else for (o in t) z(e + "[" + o + "]", t[o], n, i);
  }
  function P(e) {
    return J.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  var B = [],
    F = B.slice,
    W = B.concat,
    U = B.push,
    X = B.indexOf,
    Q = {},
    K = Q.toString,
    V = Q.hasOwnProperty,
    Z = {},
    Y = e.document,
    G = "2.1.4",
    J = function (e, t) {
      return new J.fn.init(e, t);
    },
    ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    te = /^-ms-/,
    ne = /-([\da-z])/gi,
    ie = function (e, t) {
      return t.toUpperCase();
    };
  (J.fn = J.prototype = {
    jquery: G,
    constructor: J,
    selector: "",
    length: 0,
    toArray: function () {
      return F.call(this);
    },
    get: function (e) {
      return null != e
        ? 0 > e
          ? this[e + this.length]
          : this[e]
        : F.call(this);
    },
    pushStack: function (e) {
      var t = J.merge(this.constructor(), e);
      return (t.prevObject = this), (t.context = this.context), t;
    },
    each: function (e, t) {
      return J.each(this, e, t);
    },
    map: function (e) {
      return this.pushStack(
        J.map(this, function (t, n) {
          return e.call(t, n, t);
        })
      );
    },
    slice: function () {
      return this.pushStack(F.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: U,
    sort: B.sort,
    splice: B.splice,
  }),
    (J.extend = J.fn.extend = function () {
      var e,
        t,
        n,
        i,
        o,
        r,
        s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;
      for (
        "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
          "object" == typeof s || J.isFunction(s) || (s = {}),
          a === l && ((s = this), a--);
        l > a;
        a++
      )
        if (null != (e = arguments[a]))
          for (t in e)
            (n = s[t]),
              (i = e[t]),
              s !== i &&
                (c && i && (J.isPlainObject(i) || (o = J.isArray(i)))
                  ? (o
                      ? ((o = !1), (r = n && J.isArray(n) ? n : []))
                      : (r = n && J.isPlainObject(n) ? n : {}),
                    (s[t] = J.extend(c, r, i)))
                  : void 0 !== i && (s[t] = i));
      return s;
    }),
    J.extend({
      expando: "jQuery" + (G + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === J.type(e);
      },
      isArray: Array.isArray,
      isWindow: function (e) {
        return null != e && e === e.window;
      },
      isNumeric: function (e) {
        return !J.isArray(e) && e - parseFloat(e) + 1 >= 0;
      },
      isPlainObject: function (e) {
        return "object" !== J.type(e) || e.nodeType || J.isWindow(e)
          ? !1
          : !e.constructor || V.call(e.constructor.prototype, "isPrototypeOf");
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? Q[K.call(e)] || "object"
          : typeof e;
      },
      globalEval: function (e) {
        var t,
          n = eval;
        (e = J.trim(e)),
          e &&
            (1 === e.indexOf("use strict")
              ? ((t = Y.createElement("script")),
                (t.text = e),
                Y.head.appendChild(t).parentNode.removeChild(t))
              : n(e));
      },
      camelCase: function (e) {
        return e.replace(te, "ms-").replace(ne, ie);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t, i) {
        var o,
          r = 0,
          s = e.length,
          a = n(e);
        if (i) {
          if (a) for (; s > r && ((o = t.apply(e[r], i)), o !== !1); r++);
          else for (r in e) if (((o = t.apply(e[r], i)), o === !1)) break;
        } else if (a)
          for (; s > r && ((o = t.call(e[r], r, e[r])), o !== !1); r++);
        else for (r in e) if (((o = t.call(e[r], r, e[r])), o === !1)) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(ee, "");
      },
      makeArray: function (e, t) {
        var i = t || [];
        return (
          null != e &&
            (n(Object(e))
              ? J.merge(i, "string" == typeof e ? [e] : e)
              : U.call(i, e)),
          i
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : X.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, o = e.length; n > i; i++) e[o++] = t[i];
        return (e.length = o), e;
      },
      grep: function (e, t, n) {
        for (var i, o = [], r = 0, s = e.length, a = !n; s > r; r++)
          (i = !t(e[r], r)), i !== a && o.push(e[r]);
        return o;
      },
      map: function (e, t, i) {
        var o,
          r = 0,
          s = e.length,
          a = n(e),
          l = [];
        if (a) for (; s > r; r++) (o = t(e[r], r, i)), null != o && l.push(o);
        else for (r in e) (o = t(e[r], r, i)), null != o && l.push(o);
        return W.apply([], l);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, i, o;
        return (
          "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
          J.isFunction(e)
            ? ((i = F.call(arguments, 2)),
              (o = function () {
                return e.apply(t || this, i.concat(F.call(arguments)));
              }),
              (o.guid = e.guid = e.guid || J.guid++),
              o)
            : void 0
        );
      },
      now: Date.now,
      support: Z,
    }),
    J.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (e, t) {
        Q["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var oe = (function (e) {
    function t(e, t, n, i) {
      var o, r, s, a, l, c, u, f, h, m;
      if (
        ((t ? t.ownerDocument || t : z) !== j && D(t),
        (t = t || j),
        (n = n || []),
        (a = t.nodeType),
        "string" != typeof e || !e || (1 !== a && 9 !== a && 11 !== a))
      )
        return n;
      if (!i && M) {
        if (11 !== a && (o = be.exec(e)))
          if ((s = o[1])) {
            if (9 === a) {
              if (((r = t.getElementById(s)), !r || !r.parentNode)) return n;
              if (r.id === s) return n.push(r), n;
            } else if (
              t.ownerDocument &&
              (r = t.ownerDocument.getElementById(s)) &&
              q(t, r) &&
              r.id === s
            )
              return n.push(r), n;
          } else {
            if (o[2]) return G.apply(n, t.getElementsByTagName(e)), n;
            if ((s = o[3]) && x.getElementsByClassName)
              return G.apply(n, t.getElementsByClassName(s)), n;
          }
        if (x.qsa && (!I || !I.test(e))) {
          if (
            ((f = u = H),
            (h = t),
            (m = 1 !== a && e),
            1 === a && "object" !== t.nodeName.toLowerCase())
          ) {
            for (
              c = S(e),
                (u = t.getAttribute("id"))
                  ? (f = u.replace(we, "\\$&"))
                  : t.setAttribute("id", f),
                f = "[id='" + f + "'] ",
                l = c.length;
              l--;

            )
              c[l] = f + p(c[l]);
            (h = (ye.test(e) && d(t.parentNode)) || t), (m = c.join(","));
          }
          if (m)
            try {
              return G.apply(n, h.querySelectorAll(m)), n;
            } catch (g) {
            } finally {
              u || t.removeAttribute("id");
            }
        }
      }
      return _(e.replace(le, "$1"), t, n, i);
    }
    function n() {
      function e(n, i) {
        return (
          t.push(n + " ") > k.cacheLength && delete e[t.shift()],
          (e[n + " "] = i)
        );
      }
      var t = [];
      return e;
    }
    function i(e) {
      return (e[H] = !0), e;
    }
    function o(e) {
      var t = j.createElement("div");
      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function r(e, t) {
      for (var n = e.split("|"), i = e.length; i--; ) k.attrHandle[n[i]] = t;
    }
    function s(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function a(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e;
      };
    }
    function l(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function c(e) {
      return i(function (t) {
        return (
          (t = +t),
          i(function (n, i) {
            for (var o, r = e([], n.length, t), s = r.length; s--; )
              n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
          })
        );
      });
    }
    function d(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function u() {}
    function p(e) {
      for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
      return i;
    }
    function f(e, t, n) {
      var i = t.dir,
        o = n && "parentNode" === i,
        r = B++;
      return t.first
        ? function (t, n, r) {
            for (; (t = t[i]); ) if (1 === t.nodeType || o) return e(t, n, r);
          }
        : function (t, n, s) {
            var a,
              l,
              c = [P, r];
            if (s) {
              for (; (t = t[i]); )
                if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || o) {
                  if (
                    ((l = t[H] || (t[H] = {})),
                    (a = l[i]) && a[0] === P && a[1] === r)
                  )
                    return (c[2] = a[2]);
                  if (((l[i] = c), (c[2] = e(t, n, s)))) return !0;
                }
          };
    }
    function h(e) {
      return e.length > 1
        ? function (t, n, i) {
            for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function m(e, n, i) {
      for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
      return i;
    }
    function g(e, t, n, i, o) {
      for (var r, s = [], a = 0, l = e.length, c = null != t; l > a; a++)
        (r = e[a]) && (!n || n(r, i, o)) && (s.push(r), c && t.push(a));
      return s;
    }
    function v(e, t, n, o, r, s) {
      return (
        o && !o[H] && (o = v(o)),
        r && !r[H] && (r = v(r, s)),
        i(function (i, s, a, l) {
          var c,
            d,
            u,
            p = [],
            f = [],
            h = s.length,
            v = i || m(t || "*", a.nodeType ? [a] : a, []),
            b = !e || (!i && t) ? v : g(v, p, e, a, l),
            y = n ? (r || (i ? e : h || o) ? [] : s) : b;
          if ((n && n(b, y, a, l), o))
            for (c = g(y, f), o(c, [], a, l), d = c.length; d--; )
              (u = c[d]) && (y[f[d]] = !(b[f[d]] = u));
          if (i) {
            if (r || e) {
              if (r) {
                for (c = [], d = y.length; d--; )
                  (u = y[d]) && c.push((b[d] = u));
                r(null, (y = []), c, l);
              }
              for (d = y.length; d--; )
                (u = y[d]) &&
                  (c = r ? ee(i, u) : p[d]) > -1 &&
                  (i[c] = !(s[c] = u));
            }
          } else (y = g(y === s ? y.splice(h, y.length) : y)), r ? r(null, s, y, l) : G.apply(s, y);
        })
      );
    }
    function b(e) {
      for (
        var t,
          n,
          i,
          o = e.length,
          r = k.relative[e[0].type],
          s = r || k.relative[" "],
          a = r ? 1 : 0,
          l = f(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          c = f(
            function (e) {
              return ee(t, e) > -1;
            },
            s,
            !0
          ),
          d = [
            function (e, n, i) {
              var o =
                (!r && (i || n !== N)) ||
                ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
              return (t = null), o;
            },
          ];
        o > a;
        a++
      )
        if ((n = k.relative[e[a].type])) d = [f(h(d), n)];
        else {
          if (((n = k.filter[e[a].type].apply(null, e[a].matches)), n[H])) {
            for (i = ++a; o > i && !k.relative[e[i].type]; i++);
            return v(
              a > 1 && h(d),
              a > 1 &&
                p(
                  e
                    .slice(0, a - 1)
                    .concat({ value: " " === e[a - 2].type ? "*" : "" })
                ).replace(le, "$1"),
              n,
              i > a && b(e.slice(a, i)),
              o > i && b((e = e.slice(i))),
              o > i && p(e)
            );
          }
          d.push(n);
        }
      return h(d);
    }
    function y(e, n) {
      var o = n.length > 0,
        r = e.length > 0,
        s = function (i, s, a, l, c) {
          var d,
            u,
            p,
            f = 0,
            h = "0",
            m = i && [],
            v = [],
            b = N,
            y = i || (r && k.find.TAG("*", c)),
            w = (P += null == b ? 1 : Math.random() || 0.1),
            x = y.length;
          for (c && (N = s !== j && s); h !== x && null != (d = y[h]); h++) {
            if (r && d) {
              for (u = 0; (p = e[u++]); )
                if (p(d, s, a)) {
                  l.push(d);
                  break;
                }
              c && (P = w);
            }
            o && ((d = !p && d) && f--, i && m.push(d));
          }
          if (((f += h), o && h !== f)) {
            for (u = 0; (p = n[u++]); ) p(m, v, s, a);
            if (i) {
              if (f > 0) for (; h--; ) m[h] || v[h] || (v[h] = Z.call(l));
              v = g(v);
            }
            G.apply(l, v),
              c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l);
          }
          return c && ((P = w), (N = b)), m;
        };
      return o ? i(s) : s;
    }
    var w,
      x,
      k,
      T,
      C,
      S,
      $,
      _,
      N,
      E,
      A,
      D,
      j,
      L,
      M,
      I,
      O,
      R,
      q,
      H = "sizzle" + 1 * new Date(),
      z = e.document,
      P = 0,
      B = 0,
      F = n(),
      W = n(),
      U = n(),
      X = function (e, t) {
        return e === t && (A = !0), 0;
      },
      Q = 1 << 31,
      K = {}.hasOwnProperty,
      V = [],
      Z = V.pop,
      Y = V.push,
      G = V.push,
      J = V.slice,
      ee = function (e, t) {
        for (var n = 0, i = e.length; i > n; n++) if (e[n] === t) return n;
        return -1;
      },
      te =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ne = "[\\x20\\t\\r\\n\\f]",
      ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      oe = ie.replace("w", "w#"),
      re =
        "\\[" +
        ne +
        "*(" +
        ie +
        ")(?:" +
        ne +
        "*([*^$|!~]?=)" +
        ne +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        oe +
        "))|)" +
        ne +
        "*\\]",
      se =
        ":(" +
        ie +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        re +
        ")*)|.*)\\)|)",
      ae = new RegExp(ne + "+", "g"),
      le = new RegExp(
        "^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$",
        "g"
      ),
      ce = new RegExp("^" + ne + "*," + ne + "*"),
      de = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
      ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
      pe = new RegExp(se),
      fe = new RegExp("^" + oe + "$"),
      he = {
        ID: new RegExp("^#(" + ie + ")"),
        CLASS: new RegExp("^\\.(" + ie + ")"),
        TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + re),
        PSEUDO: new RegExp("^" + se),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ne +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ne +
            "*(?:([+-]|)" +
            ne +
            "*(\\d+)|))" +
            ne +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + te + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ne +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ne +
            "*((?:-\\d)?\\d*)" +
            ne +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      me = /^(?:input|select|textarea|button)$/i,
      ge = /^h\d$/i,
      ve = /^[^{]+\{\s*\[native \w/,
      be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ye = /[+~]/,
      we = /'|\\/g,
      xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
      ke = function (e, t, n) {
        var i = "0x" + t - 65536;
        return i !== i || n
          ? t
          : 0 > i
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      Te = function () {
        D();
      };
    try {
      G.apply((V = J.call(z.childNodes)), z.childNodes),
        V[z.childNodes.length].nodeType;
    } catch (Ce) {
      G = {
        apply: V.length
          ? function (e, t) {
              Y.apply(e, J.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            },
      };
    }
    (x = t.support = {}),
      (C = t.isXML = function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return t ? "HTML" !== t.nodeName : !1;
      }),
      (D = t.setDocument = function (e) {
        var t,
          n,
          i = e ? e.ownerDocument || e : z;
        return i !== j && 9 === i.nodeType && i.documentElement
          ? ((j = i),
            (L = i.documentElement),
            (n = i.defaultView),
            n &&
              n !== n.top &&
              (n.addEventListener
                ? n.addEventListener("unload", Te, !1)
                : n.attachEvent && n.attachEvent("onunload", Te)),
            (M = !C(i)),
            (x.attributes = o(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (x.getElementsByTagName = o(function (e) {
              return (
                e.appendChild(i.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (x.getElementsByClassName = ve.test(i.getElementsByClassName)),
            (x.getById = o(function (e) {
              return (
                (L.appendChild(e).id = H),
                !i.getElementsByName || !i.getElementsByName(H).length
              );
            })),
            x.getById
              ? ((k.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && M) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : [];
                  }
                }),
                (k.filter.ID = function (e) {
                  var t = e.replace(xe, ke);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }))
              : (delete k.find.ID,
                (k.filter.ID = function (e) {
                  var t = e.replace(xe, ke);
                  return function (e) {
                    var n =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                })),
            (k.find.TAG = x.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : x.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }
                  return r;
                }),
            (k.find.CLASS =
              x.getElementsByClassName &&
              function (e, t) {
                return M ? t.getElementsByClassName(e) : void 0;
              }),
            (O = []),
            (I = []),
            (x.qsa = ve.test(i.querySelectorAll)) &&
              (o(function (e) {
                (L.appendChild(e).innerHTML =
                  "<a id='" +
                  H +
                  "'></a><select id='" +
                  H +
                  "-\f]' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    I.push("[*^$]=" + ne + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    I.push("\\[" + ne + "*(?:value|" + te + ")"),
                  e.querySelectorAll("[id~=" + H + "-]").length || I.push("~="),
                  e.querySelectorAll(":checked").length || I.push(":checked"),
                  e.querySelectorAll("a#" + H + "+*").length ||
                    I.push(".#.+[+~]");
              }),
              o(function (e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    I.push("name" + ne + "*[*^$|!~]?="),
                  e.querySelectorAll(":enabled").length ||
                    I.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  I.push(",.*:");
              })),
            (x.matchesSelector = ve.test(
              (R =
                L.matches ||
                L.webkitMatchesSelector ||
                L.mozMatchesSelector ||
                L.oMatchesSelector ||
                L.msMatchesSelector)
            )) &&
              o(function (e) {
                (x.disconnectedMatch = R.call(e, "div")),
                  R.call(e, "[s!='']:x"),
                  O.push("!=", se);
              }),
            (I = I.length && new RegExp(I.join("|"))),
            (O = O.length && new RegExp(O.join("|"))),
            (t = ve.test(L.compareDocumentPosition)),
            (q =
              t || ve.test(L.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      i = t && t.parentNode;
                    return (
                      e === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (X = t
              ? function (e, t) {
                  if (e === t) return (A = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return n
                    ? n
                    : ((n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1),
                      1 & n ||
                      (!x.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e === i || (e.ownerDocument === z && q(z, e))
                          ? -1
                          : t === i || (t.ownerDocument === z && q(z, t))
                          ? 1
                          : E
                          ? ee(E, e) - ee(E, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1);
                }
              : function (e, t) {
                  if (e === t) return (A = !0), 0;
                  var n,
                    o = 0,
                    r = e.parentNode,
                    a = t.parentNode,
                    l = [e],
                    c = [t];
                  if (!r || !a)
                    return e === i
                      ? -1
                      : t === i
                      ? 1
                      : r
                      ? -1
                      : a
                      ? 1
                      : E
                      ? ee(E, e) - ee(E, t)
                      : 0;
                  if (r === a) return s(e, t);
                  for (n = e; (n = n.parentNode); ) l.unshift(n);
                  for (n = t; (n = n.parentNode); ) c.unshift(n);
                  for (; l[o] === c[o]; ) o++;
                  return o
                    ? s(l[o], c[o])
                    : l[o] === z
                    ? -1
                    : c[o] === z
                    ? 1
                    : 0;
                }),
            i)
          : j;
      }),
      (t.matches = function (e, n) {
        return t(e, null, null, n);
      }),
      (t.matchesSelector = function (e, n) {
        if (
          ((e.ownerDocument || e) !== j && D(e),
          (n = n.replace(ue, "='$1']")),
          !(!x.matchesSelector || !M || (O && O.test(n)) || (I && I.test(n))))
        )
          try {
            var i = R.call(e, n);
            if (
              i ||
              x.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return i;
          } catch (o) {}
        return t(n, j, null, [e]).length > 0;
      }),
      (t.contains = function (e, t) {
        return (e.ownerDocument || e) !== j && D(e), q(e, t);
      }),
      (t.attr = function (e, t) {
        (e.ownerDocument || e) !== j && D(e);
        var n = k.attrHandle[t.toLowerCase()],
          i = n && K.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
        return void 0 !== i
          ? i
          : x.attributes || !M
          ? e.getAttribute(t)
          : (i = e.getAttributeNode(t)) && i.specified
          ? i.value
          : null;
      }),
      (t.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (t.uniqueSort = function (e) {
        var t,
          n = [],
          i = 0,
          o = 0;
        if (
          ((A = !x.detectDuplicates),
          (E = !x.sortStable && e.slice(0)),
          e.sort(X),
          A)
        ) {
          for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
          for (; i--; ) e.splice(n[i], 1);
        }
        return (E = null), e;
      }),
      (T = t.getText = function (e) {
        var t,
          n = "",
          i = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += T(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; (t = e[i++]); ) n += T(t);
        return n;
      }),
      (k = t.selectors = {
        cacheLength: 50,
        createPseudo: i,
        match: he,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(xe, ke)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(xe, ke)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || t.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && t.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return he.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    pe.test(n) &&
                    (t = S(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(xe, ke).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = F[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) &&
                F(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, n, i) {
            return function (o) {
              var r = t.attr(o, e);
              return null == r
                ? "!=" === n
                : n
                ? ((r += ""),
                  "=" === n
                    ? r === i
                    : "!=" === n
                    ? r !== i
                    : "^=" === n
                    ? i && 0 === r.indexOf(i)
                    : "*=" === n
                    ? i && r.indexOf(i) > -1
                    : "$=" === n
                    ? i && r.slice(-i.length) === i
                    : "~=" === n
                    ? (" " + r.replace(ae, " ") + " ").indexOf(i) > -1
                    : "|=" === n
                    ? r === i || r.slice(0, i.length + 1) === i + "-"
                    : !1)
                : !0;
            };
          },
          CHILD: function (e, t, n, i, o) {
            var r = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
            return 1 === i && 0 === o
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, l) {
                  var c,
                    d,
                    u,
                    p,
                    f,
                    h,
                    m = r !== s ? "nextSibling" : "previousSibling",
                    g = t.parentNode,
                    v = a && t.nodeName.toLowerCase(),
                    b = !l && !a;
                  if (g) {
                    if (r) {
                      for (; m; ) {
                        for (u = t; (u = u[m]); )
                          if (
                            a
                              ? u.nodeName.toLowerCase() === v
                              : 1 === u.nodeType
                          )
                            return !1;
                        h = m = "only" === e && !h && "nextSibling";
                      }
                      return !0;
                    }
                    if (((h = [s ? g.firstChild : g.lastChild]), s && b)) {
                      for (
                        d = g[H] || (g[H] = {}),
                          c = d[e] || [],
                          f = c[0] === P && c[1],
                          p = c[0] === P && c[2],
                          u = f && g.childNodes[f];
                        (u = (++f && u && u[m]) || (p = f = 0) || h.pop());

                      )
                        if (1 === u.nodeType && ++p && u === t) {
                          d[e] = [P, f, p];
                          break;
                        }
                    } else if (
                      b &&
                      (c = (t[H] || (t[H] = {}))[e]) &&
                      c[0] === P
                    )
                      p = c[1];
                    else
                      for (
                        ;
                        (u = (++f && u && u[m]) || (p = f = 0) || h.pop()) &&
                        ((a
                          ? u.nodeName.toLowerCase() !== v
                          : 1 !== u.nodeType) ||
                          !++p ||
                          (b && ((u[H] || (u[H] = {}))[e] = [P, p]), u !== t));

                      );
                    return (p -= o), p === i || (p % i === 0 && p / i >= 0);
                  }
                };
          },
          PSEUDO: function (e, n) {
            var o,
              r =
                k.pseudos[e] ||
                k.setFilters[e.toLowerCase()] ||
                t.error("unsupported pseudo: " + e);
            return r[H]
              ? r(n)
              : r.length > 1
              ? ((o = [e, e, "", n]),
                k.setFilters.hasOwnProperty(e.toLowerCase())
                  ? i(function (e, t) {
                      for (var i, o = r(e, n), s = o.length; s--; )
                        (i = ee(e, o[s])), (e[i] = !(t[i] = o[s]));
                    })
                  : function (e) {
                      return r(e, 0, o);
                    })
              : r;
          },
        },
        pseudos: {
          not: i(function (e) {
            var t = [],
              n = [],
              o = $(e.replace(le, "$1"));
            return o[H]
              ? i(function (e, t, n, i) {
                  for (var r, s = o(e, null, i, []), a = e.length; a--; )
                    (r = s[a]) && (e[a] = !(t[a] = r));
                })
              : function (e, i, r) {
                  return (t[0] = e), o(t, null, r, n), (t[0] = null), !n.pop();
                };
          }),
          has: i(function (e) {
            return function (n) {
              return t(e, n).length > 0;
            };
          }),
          contains: i(function (e) {
            return (
              (e = e.replace(xe, ke)),
              function (t) {
                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: i(function (e) {
            return (
              fe.test(e || "") || t.error("unsupported lang: " + e),
              (e = e.replace(xe, ke).toLowerCase()),
              function (t) {
                var n;
                do
                  if (
                    (n = M
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()), n === e || 0 === n.indexOf(e + "-")
                    );
                while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === L;
          },
          focus: function (e) {
            return (
              e === j.activeElement &&
              (!j.hasFocus || j.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: function (e) {
            return e.disabled === !1;
          },
          disabled: function (e) {
            return e.disabled === !0;
          },
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, e.selected === !0
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !k.pseudos.empty(e);
          },
          header: function (e) {
            return ge.test(e.nodeName);
          },
          input: function (e) {
            return me.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: c(function () {
            return [0];
          }),
          last: c(function (e, t) {
            return [t - 1];
          }),
          eq: c(function (e, t, n) {
            return [0 > n ? n + t : n];
          }),
          even: c(function (e, t) {
            for (var n = 0; t > n; n += 2) e.push(n);
            return e;
          }),
          odd: c(function (e, t) {
            for (var n = 1; t > n; n += 2) e.push(n);
            return e;
          }),
          lt: c(function (e, t, n) {
            for (var i = 0 > n ? n + t : n; --i >= 0; ) e.push(i);
            return e;
          }),
          gt: c(function (e, t, n) {
            for (var i = 0 > n ? n + t : n; ++i < t; ) e.push(i);
            return e;
          }),
        },
      }),
      (k.pseudos.nth = k.pseudos.eq);
    for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      k.pseudos[w] = a(w);
    for (w in { submit: !0, reset: !0 }) k.pseudos[w] = l(w);
    return (
      (u.prototype = k.filters = k.pseudos),
      (k.setFilters = new u()),
      (S = t.tokenize = function (e, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c,
          d = W[e + " "];
        if (d) return n ? 0 : d.slice(0);
        for (a = e, l = [], c = k.preFilter; a; ) {
          (!i || (o = ce.exec(a))) &&
            (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
            (i = !1),
            (o = de.exec(a)) &&
              ((i = o.shift()),
              r.push({ value: i, type: o[0].replace(le, " ") }),
              (a = a.slice(i.length)));
          for (s in k.filter)
            !(o = he[s].exec(a)) ||
              (c[s] && !(o = c[s](o))) ||
              ((i = o.shift()),
              r.push({ value: i, type: s, matches: o }),
              (a = a.slice(i.length)));
          if (!i) break;
        }
        return n ? a.length : a ? t.error(e) : W(e, l).slice(0);
      }),
      ($ = t.compile = function (e, t) {
        var n,
          i = [],
          o = [],
          r = U[e + " "];
        if (!r) {
          for (t || (t = S(e)), n = t.length; n--; )
            (r = b(t[n])), r[H] ? i.push(r) : o.push(r);
          (r = U(e, y(o, i))), (r.selector = e);
        }
        return r;
      }),
      (_ = t.select = function (e, t, n, i) {
        var o,
          r,
          s,
          a,
          l,
          c = "function" == typeof e && e,
          u = !i && S((e = c.selector || e));
        if (((n = n || []), 1 === u.length)) {
          if (
            ((r = u[0] = u[0].slice(0)),
            r.length > 2 &&
              "ID" === (s = r[0]).type &&
              x.getById &&
              9 === t.nodeType &&
              M &&
              k.relative[r[1].type])
          ) {
            if (
              ((t = (k.find.ID(s.matches[0].replace(xe, ke), t) || [])[0]), !t)
            )
              return n;
            c && (t = t.parentNode), (e = e.slice(r.shift().value.length));
          }
          for (
            o = he.needsContext.test(e) ? 0 : r.length;
            o-- && ((s = r[o]), !k.relative[(a = s.type)]);

          )
            if (
              (l = k.find[a]) &&
              (i = l(
                s.matches[0].replace(xe, ke),
                (ye.test(r[0].type) && d(t.parentNode)) || t
              ))
            ) {
              if ((r.splice(o, 1), (e = i.length && p(r)), !e))
                return G.apply(n, i), n;
              break;
            }
        }
        return (
          (c || $(e, u))(i, t, !M, n, (ye.test(e) && d(t.parentNode)) || t), n
        );
      }),
      (x.sortStable = H.split("").sort(X).join("") === H),
      (x.detectDuplicates = !!A),
      D(),
      (x.sortDetached = o(function (e) {
        return 1 & e.compareDocumentPosition(j.createElement("div"));
      })),
      o(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        r("type|href|height|width", function (e, t, n) {
          return n
            ? void 0
            : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (x.attributes &&
        o(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        r("value", function (e, t, n) {
          return n || "input" !== e.nodeName.toLowerCase()
            ? void 0
            : e.defaultValue;
        }),
      o(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        r(te, function (e, t, n) {
          var i;
          return n
            ? void 0
            : e[t] === !0
            ? t.toLowerCase()
            : (i = e.getAttributeNode(t)) && i.specified
            ? i.value
            : null;
        }),
      t
    );
  })(e);
  (J.find = oe),
    (J.expr = oe.selectors),
    (J.expr[":"] = J.expr.pseudos),
    (J.unique = oe.uniqueSort),
    (J.text = oe.getText),
    (J.isXMLDoc = oe.isXML),
    (J.contains = oe.contains);
  var re = J.expr.match.needsContext,
    se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    ae = /^.[^:#\[\.,]*$/;
  (J.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? J.find.matchesSelector(i, e)
          ? [i]
          : []
        : J.find.matches(
            e,
            J.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    J.fn.extend({
      find: function (e) {
        var t,
          n = this.length,
          i = [],
          o = this;
        if ("string" != typeof e)
          return this.pushStack(
            J(e).filter(function () {
              for (t = 0; n > t; t++) if (J.contains(o[t], this)) return !0;
            })
          );
        for (t = 0; n > t; t++) J.find(e, o[t], i);
        return (
          (i = this.pushStack(n > 1 ? J.unique(i) : i)),
          (i.selector = this.selector ? this.selector + " " + e : e),
          i
        );
      },
      filter: function (e) {
        return this.pushStack(i(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(i(this, e || [], !0));
      },
      is: function (e) {
        return !!i(
          this,
          "string" == typeof e && re.test(e) ? J(e) : e || [],
          !1
        ).length;
      },
    });
  var le,
    ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    de = (J.fn.init = function (e, t) {
      var n, i;
      if (!e) return this;
      if ("string" == typeof e) {
        if (
          ((n =
            "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
              ? [null, e, null]
              : ce.exec(e)),
          !n || (!n[1] && t))
        )
          return !t || t.jquery
            ? (t || le).find(e)
            : this.constructor(t).find(e);
        if (n[1]) {
          if (
            ((t = t instanceof J ? t[0] : t),
            J.merge(
              this,
              J.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Y, !0)
            ),
            se.test(n[1]) && J.isPlainObject(t))
          )
            for (n in t)
              J.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
          return this;
        }
        return (
          (i = Y.getElementById(n[2])),
          i && i.parentNode && ((this.length = 1), (this[0] = i)),
          (this.context = Y),
          (this.selector = e),
          this
        );
      }
      return e.nodeType
        ? ((this.context = this[0] = e), (this.length = 1), this)
        : J.isFunction(e)
        ? "undefined" != typeof le.ready
          ? le.ready(e)
          : e(J)
        : (void 0 !== e.selector &&
            ((this.selector = e.selector), (this.context = e.context)),
          J.makeArray(e, this));
    });
  (de.prototype = J.fn), (le = J(Y));
  var ue = /^(?:parents|prev(?:Until|All))/,
    pe = { children: !0, contents: !0, next: !0, prev: !0 };
  J.extend({
    dir: function (e, t, n) {
      for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (o && J(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    sibling: function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
  }),
    J.fn.extend({
      has: function (e) {
        var t = J(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; n > e; e++) if (J.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        for (
          var n,
            i = 0,
            o = this.length,
            r = [],
            s =
              re.test(e) || "string" != typeof e ? J(e, t || this.context) : 0;
          o > i;
          i++
        )
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? s.index(n) > -1
                : 1 === n.nodeType && J.find.matchesSelector(n, e))
            ) {
              r.push(n);
              break;
            }
        return this.pushStack(r.length > 1 ? J.unique(r) : r);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? X.call(J(e), this[0])
            : X.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(J.unique(J.merge(this.get(), J(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    }),
    J.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return J.dir(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return J.dir(e, "parentNode", n);
        },
        next: function (e) {
          return o(e, "nextSibling");
        },
        prev: function (e) {
          return o(e, "previousSibling");
        },
        nextAll: function (e) {
          return J.dir(e, "nextSibling");
        },
        prevAll: function (e) {
          return J.dir(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return J.dir(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return J.dir(e, "previousSibling", n);
        },
        siblings: function (e) {
          return J.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return J.sibling(e.firstChild);
        },
        contents: function (e) {
          return e.contentDocument || J.merge([], e.childNodes);
        },
      },
      function (e, t) {
        J.fn[e] = function (n, i) {
          var o = J.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (o = J.filter(i, o)),
            this.length > 1 &&
              (pe[e] || J.unique(o), ue.test(e) && o.reverse()),
            this.pushStack(o)
          );
        };
      }
    );
  var fe = /\S+/g,
    he = {};
  (J.Callbacks = function (e) {
    e = "string" == typeof e ? he[e] || r(e) : J.extend({}, e);
    var t,
      n,
      i,
      o,
      s,
      a,
      l = [],
      c = !e.once && [],
      d = function (r) {
        for (
          t = e.memory && r, n = !0, a = o || 0, o = 0, s = l.length, i = !0;
          l && s > a;
          a++
        )
          if (l[a].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
            t = !1;
            break;
          }
        (i = !1),
          l && (c ? c.length && d(c.shift()) : t ? (l = []) : u.disable());
      },
      u = {
        add: function () {
          if (l) {
            var n = l.length;
            !(function r(t) {
              J.each(t, function (t, n) {
                var i = J.type(n);
                "function" === i
                  ? (e.unique && u.has(n)) || l.push(n)
                  : n && n.length && "string" !== i && r(n);
              });
            })(arguments),
              i ? (s = l.length) : t && ((o = n), d(t));
          }
          return this;
        },
        remove: function () {
          return (
            l &&
              J.each(arguments, function (e, t) {
                for (var n; (n = J.inArray(t, l, n)) > -1; )
                  l.splice(n, 1), i && (s >= n && s--, a >= n && a--);
              }),
            this
          );
        },
        has: function (e) {
          return e ? J.inArray(e, l) > -1 : !(!l || !l.length);
        },
        empty: function () {
          return (l = []), (s = 0), this;
        },
        disable: function () {
          return (l = c = t = void 0), this;
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return (c = void 0), t || u.disable(), this;
        },
        locked: function () {
          return !c;
        },
        fireWith: function (e, t) {
          return (
            !l ||
              (n && !c) ||
              ((t = t || []),
              (t = [e, t.slice ? t.slice() : t]),
              i ? c.push(t) : d(t)),
            this
          );
        },
        fire: function () {
          return u.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!n;
        },
      };
    return u;
  }),
    J.extend({
      Deferred: function (e) {
        var t = [
            ["resolve", "done", J.Callbacks("once memory"), "resolved"],
            ["reject", "fail", J.Callbacks("once memory"), "rejected"],
            ["notify", "progress", J.Callbacks("memory")],
          ],
          n = "pending",
          i = {
            state: function () {
              return n;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            then: function () {
              var e = arguments;
              return J.Deferred(function (n) {
                J.each(t, function (t, r) {
                  var s = J.isFunction(e[t]) && e[t];
                  o[r[1]](function () {
                    var e = s && s.apply(this, arguments);
                    e && J.isFunction(e.promise)
                      ? e
                          .promise()
                          .done(n.resolve)
                          .fail(n.reject)
                          .progress(n.notify)
                      : n[r[0] + "With"](
                          this === i ? n.promise() : this,
                          s ? [e] : arguments
                        );
                  });
                }),
                  (e = null);
              }).promise();
            },
            promise: function (e) {
              return null != e ? J.extend(e, i) : i;
            },
          },
          o = {};
        return (
          (i.pipe = i.then),
          J.each(t, function (e, r) {
            var s = r[2],
              a = r[3];
            (i[r[1]] = s.add),
              a &&
                s.add(
                  function () {
                    n = a;
                  },
                  t[1 ^ e][2].disable,
                  t[2][2].lock
                ),
              (o[r[0]] = function () {
                return o[r[0] + "With"](this === o ? i : this, arguments), this;
              }),
              (o[r[0] + "With"] = s.fireWith);
          }),
          i.promise(o),
          e && e.call(o, o),
          o
        );
      },
      when: function (e) {
        var t,
          n,
          i,
          o = 0,
          r = F.call(arguments),
          s = r.length,
          a = 1 !== s || (e && J.isFunction(e.promise)) ? s : 0,
          l = 1 === a ? e : J.Deferred(),
          c = function (e, n, i) {
            return function (o) {
              (n[e] = this),
                (i[e] = arguments.length > 1 ? F.call(arguments) : o),
                i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i);
            };
          };
        if (s > 1)
          for (t = new Array(s), n = new Array(s), i = new Array(s); s > o; o++)
            r[o] && J.isFunction(r[o].promise)
              ? r[o]
                  .promise()
                  .done(c(o, i, r))
                  .fail(l.reject)
                  .progress(c(o, n, t))
              : --a;
        return a || l.resolveWith(i, r), l.promise();
      },
    });
  var me;
  (J.fn.ready = function (e) {
    return J.ready.promise().done(e), this;
  }),
    J.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? J.readyWait++ : J.ready(!0);
      },
      ready: function (e) {
        (e === !0 ? --J.readyWait : J.isReady) ||
          ((J.isReady = !0),
          (e !== !0 && --J.readyWait > 0) ||
            (me.resolveWith(Y, [J]),
            J.fn.triggerHandler &&
              (J(Y).triggerHandler("ready"), J(Y).off("ready"))));
      },
    }),
    (J.ready.promise = function (t) {
      return (
        me ||
          ((me = J.Deferred()),
          "complete" === Y.readyState
            ? setTimeout(J.ready)
            : (Y.addEventListener("DOMContentLoaded", s, !1),
              e.addEventListener("load", s, !1))),
        me.promise(t)
      );
    }),
    J.ready.promise();
  var ge = (J.access = function (e, t, n, i, o, r, s) {
    var a = 0,
      l = e.length,
      c = null == n;
    if ("object" === J.type(n)) {
      o = !0;
      for (a in n) J.access(e, t, a, n[a], !0, r, s);
    } else if (
      void 0 !== i &&
      ((o = !0),
      J.isFunction(i) || (s = !0),
      c &&
        (s
          ? (t.call(e, i), (t = null))
          : ((c = t),
            (t = function (e, t, n) {
              return c.call(J(e), n);
            }))),
      t)
    )
      for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
    return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
  });
  (J.acceptData = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }),
    (a.uid = 1),
    (a.accepts = J.acceptData),
    (a.prototype = {
      key: function (e) {
        if (!a.accepts(e)) return 0;
        var t = {},
          n = e[this.expando];
        if (!n) {
          n = a.uid++;
          try {
            (t[this.expando] = { value: n }), Object.defineProperties(e, t);
          } catch (i) {
            (t[this.expando] = n), J.extend(e, t);
          }
        }
        return this.cache[n] || (this.cache[n] = {}), n;
      },
      set: function (e, t, n) {
        var i,
          o = this.key(e),
          r = this.cache[o];
        if ("string" == typeof t) r[t] = n;
        else if (J.isEmptyObject(r)) J.extend(this.cache[o], t);
        else for (i in t) r[i] = t[i];
        return r;
      },
      get: function (e, t) {
        var n = this.cache[this.key(e)];
        return void 0 === t ? n : n[t];
      },
      access: function (e, t, n) {
        var i;
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? ((i = this.get(e, t)),
            void 0 !== i ? i : this.get(e, J.camelCase(t)))
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i,
          o,
          r = this.key(e),
          s = this.cache[r];
        if (void 0 === t) this.cache[r] = {};
        else {
          J.isArray(t)
            ? (i = t.concat(t.map(J.camelCase)))
            : ((o = J.camelCase(t)),
              t in s
                ? (i = [t, o])
                : ((i = o), (i = i in s ? [i] : i.match(fe) || []))),
            (n = i.length);
          for (; n--; ) delete s[i[n]];
        }
      },
      hasData: function (e) {
        return !J.isEmptyObject(this.cache[e[this.expando]] || {});
      },
      discard: function (e) {
        e[this.expando] && delete this.cache[e[this.expando]];
      },
    });
  var ve = new a(),
    be = new a(),
    ye = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    we = /([A-Z])/g;
  J.extend({
    hasData: function (e) {
      return be.hasData(e) || ve.hasData(e);
    },
    data: function (e, t, n) {
      return be.access(e, t, n);
    },
    removeData: function (e, t) {
      be.remove(e, t);
    },
    _data: function (e, t, n) {
      return ve.access(e, t, n);
    },
    _removeData: function (e, t) {
      ve.remove(e, t);
    },
  }),
    J.fn.extend({
      data: function (e, t) {
        var n,
          i,
          o,
          r = this[0],
          s = r && r.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((o = be.get(r)), 1 === r.nodeType && !ve.get(r, "hasDataAttrs"))
          ) {
            for (n = s.length; n--; )
              s[n] &&
                ((i = s[n].name),
                0 === i.indexOf("data-") &&
                  ((i = J.camelCase(i.slice(5))), l(r, i, o[i])));
            ve.set(r, "hasDataAttrs", !0);
          }
          return o;
        }
        return "object" == typeof e
          ? this.each(function () {
              be.set(this, e);
            })
          : ge(
              this,
              function (t) {
                var n,
                  i = J.camelCase(e);
                if (r && void 0 === t) {
                  if (((n = be.get(r, e)), void 0 !== n)) return n;
                  if (((n = be.get(r, i)), void 0 !== n)) return n;
                  if (((n = l(r, i, void 0)), void 0 !== n)) return n;
                } else
                  this.each(function () {
                    var n = be.get(this, i);
                    be.set(this, i, t),
                      -1 !== e.indexOf("-") &&
                        void 0 !== n &&
                        be.set(this, e, t);
                  });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          be.remove(this, e);
        });
      },
    }),
    J.extend({
      queue: function (e, t, n) {
        var i;
        return e
          ? ((t = (t || "fx") + "queue"),
            (i = ve.get(e, t)),
            n &&
              (!i || J.isArray(n)
                ? (i = ve.access(e, t, J.makeArray(n)))
                : i.push(n)),
            i || [])
          : void 0;
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = J.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = J._queueHooks(e, t),
          s = function () {
            J.dequeue(e, t);
          };
        "inprogress" === o && ((o = n.shift()), i--),
          o &&
            ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(e, s, r)),
          !i && r && r.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          ve.get(e, n) ||
          ve.access(e, n, {
            empty: J.Callbacks("once memory").add(function () {
              ve.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    J.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? J.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = J.queue(this, e, t);
                J._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && J.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          J.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          o = J.Deferred(),
          r = this,
          s = this.length,
          a = function () {
            --i || o.resolveWith(r, [r]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (n = ve.get(r[s], e + "queueHooks")),
            n && n.empty && (i++, n.empty.add(a));
        return a(), o.promise(t);
      },
    });
  var xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ke = ["Top", "Right", "Bottom", "Left"],
    Te = function (e, t) {
      return (
        (e = t || e),
        "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e)
      );
    },
    Ce = /^(?:checkbox|radio)$/i;
  !(function () {
    var e = Y.createDocumentFragment(),
      t = e.appendChild(Y.createElement("div")),
      n = Y.createElement("input");
    n.setAttribute("type", "radio"),
      n.setAttribute("checked", "checked"),
      n.setAttribute("name", "t"),
      t.appendChild(n),
      (Z.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (t.innerHTML = "<textarea>x</textarea>"),
      (Z.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
  })();
  var Se = "undefined";
  Z.focusinBubbles = "onfocusin" in e;
  var $e = /^key/,
    _e = /^(?:mouse|pointer|contextmenu)|click/,
    Ne = /^(?:focusinfocus|focusoutblur)$/,
    Ee = /^([^.]*)(?:\.(.+)|)$/;
  (J.event = {
    global: {},
    add: function (e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        d,
        u,
        p,
        f,
        h,
        m,
        g = ve.get(e);
      if (g)
        for (
          n.handler && ((r = n), (n = r.handler), (o = r.selector)),
            n.guid || (n.guid = J.guid++),
            (l = g.events) || (l = g.events = {}),
            (s = g.handle) ||
              (s = g.handle = function (t) {
                return typeof J !== Se && J.event.triggered !== t.type
                  ? J.event.dispatch.apply(e, arguments)
                  : void 0;
              }),
            t = (t || "").match(fe) || [""],
            c = t.length;
          c--;

        )
          (a = Ee.exec(t[c]) || []),
            (f = m = a[1]),
            (h = (a[2] || "").split(".").sort()),
            f &&
              ((u = J.event.special[f] || {}),
              (f = (o ? u.delegateType : u.bindType) || f),
              (u = J.event.special[f] || {}),
              (d = J.extend(
                {
                  type: f,
                  origType: m,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && J.expr.match.needsContext.test(o),
                  namespace: h.join("."),
                },
                r
              )),
              (p = l[f]) ||
                ((p = l[f] = []),
                (p.delegateCount = 0),
                (u.setup && u.setup.call(e, i, h, s) !== !1) ||
                  (e.addEventListener && e.addEventListener(f, s, !1))),
              u.add &&
                (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)),
              o ? p.splice(p.delegateCount++, 0, d) : p.push(d),
              (J.event.global[f] = !0));
    },
    remove: function (e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        d,
        u,
        p,
        f,
        h,
        m,
        g = ve.hasData(e) && ve.get(e);
      if (g && (l = g.events)) {
        for (t = (t || "").match(fe) || [""], c = t.length; c--; )
          if (
            ((a = Ee.exec(t[c]) || []),
            (f = m = a[1]),
            (h = (a[2] || "").split(".").sort()),
            f)
          ) {
            for (
              u = J.event.special[f] || {},
                f = (i ? u.delegateType : u.bindType) || f,
                p = l[f] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = r = p.length;
              r--;

            )
              (d = p[r]),
                (!o && m !== d.origType) ||
                  (n && n.guid !== d.guid) ||
                  (a && !a.test(d.namespace)) ||
                  (i && i !== d.selector && ("**" !== i || !d.selector)) ||
                  (p.splice(r, 1),
                  d.selector && p.delegateCount--,
                  u.remove && u.remove.call(e, d));
            s &&
              !p.length &&
              ((u.teardown && u.teardown.call(e, h, g.handle) !== !1) ||
                J.removeEvent(e, f, g.handle),
              delete l[f]);
          } else for (f in l) J.event.remove(e, f + t[c], n, i, !0);
        J.isEmptyObject(l) && (delete g.handle, ve.remove(e, "events"));
      }
    },
    trigger: function (t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        d,
        u,
        p = [i || Y],
        f = V.call(t, "type") ? t.type : t,
        h = V.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = a = i = i || Y),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !Ne.test(f + J.event.triggered) &&
          (f.indexOf(".") >= 0 &&
            ((h = f.split(".")), (f = h.shift()), h.sort()),
          (c = f.indexOf(":") < 0 && "on" + f),
          (t = t[J.expando] ? t : new J.Event(f, "object" == typeof t && t)),
          (t.isTrigger = o ? 2 : 3),
          (t.namespace = h.join(".")),
          (t.namespace_re = t.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : J.makeArray(n, [t])),
          (u = J.event.special[f] || {}),
          o || !u.trigger || u.trigger.apply(i, n) !== !1))
      ) {
        if (!o && !u.noBubble && !J.isWindow(i)) {
          for (
            l = u.delegateType || f, Ne.test(l + f) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            p.push(s), (a = s);
          a === (i.ownerDocument || Y) &&
            p.push(a.defaultView || a.parentWindow || e);
        }
        for (r = 0; (s = p[r++]) && !t.isPropagationStopped(); )
          (t.type = r > 1 ? l : u.bindType || f),
            (d = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle")),
            d && d.apply(s, n),
            (d = c && s[c]),
            d &&
              d.apply &&
              J.acceptData(s) &&
              ((t.result = d.apply(s, n)),
              t.result === !1 && t.preventDefault());
        return (
          (t.type = f),
          o ||
            t.isDefaultPrevented() ||
            (u._default && u._default.apply(p.pop(), n) !== !1) ||
            !J.acceptData(i) ||
            (c &&
              J.isFunction(i[f]) &&
              !J.isWindow(i) &&
              ((a = i[c]),
              a && (i[c] = null),
              (J.event.triggered = f),
              i[f](),
              (J.event.triggered = void 0),
              a && (i[c] = a))),
          t.result
        );
      }
    },
    dispatch: function (e) {
      e = J.event.fix(e);
      var t,
        n,
        i,
        o,
        r,
        s = [],
        a = F.call(arguments),
        l = (ve.get(this, "events") || {})[e.type] || [],
        c = J.event.special[e.type] || {};
      if (
        ((a[0] = e),
        (e.delegateTarget = this),
        !c.preDispatch || c.preDispatch.call(this, e) !== !1)
      ) {
        for (
          s = J.event.handlers.call(this, e, l), t = 0;
          (o = s[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = o.elem, n = 0;
            (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();

          )
            (!e.namespace_re || e.namespace_re.test(r.namespace)) &&
              ((e.handleObj = r),
              (e.data = r.data),
              (i = (
                (J.event.special[r.origType] || {}).handle || r.handler
              ).apply(o.elem, a)),
              void 0 !== i &&
                (e.result = i) === !1 &&
                (e.preventDefault(), e.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        o,
        r,
        s = [],
        a = t.delegateCount,
        l = e.target;
      if (a && l.nodeType && (!e.button || "click" !== e.type))
        for (; l !== this; l = l.parentNode || this)
          if (l.disabled !== !0 || "click" !== e.type) {
            for (i = [], n = 0; a > n; n++)
              (r = t[n]),
                (o = r.selector + " "),
                void 0 === i[o] &&
                  (i[o] = r.needsContext
                    ? J(o, this).index(l) >= 0
                    : J.find(o, this, null, [l]).length),
                i[o] && i.push(r);
            i.length && s.push({ elem: l, handlers: i });
          }
      return a < t.length && s.push({ elem: this, handlers: t.slice(a) }), s;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
      " "
    ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
        " "
      ),
      filter: function (e, t) {
        var n,
          i,
          o,
          r = t.button;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((n = e.target.ownerDocument || Y),
            (i = n.documentElement),
            (o = n.body),
            (e.pageX =
              t.clientX +
              ((i && i.scrollLeft) || (o && o.scrollLeft) || 0) -
              ((i && i.clientLeft) || (o && o.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((i && i.scrollTop) || (o && o.scrollTop) || 0) -
              ((i && i.clientTop) || (o && o.clientTop) || 0))),
          e.which ||
            void 0 === r ||
            (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
          e
        );
      },
    },
    fix: function (e) {
      if (e[J.expando]) return e;
      var t,
        n,
        i,
        o = e.type,
        r = e,
        s = this.fixHooks[o];
      for (
        s ||
          (this.fixHooks[o] = s = _e.test(o)
            ? this.mouseHooks
            : $e.test(o)
            ? this.keyHooks
            : {}),
          i = s.props ? this.props.concat(s.props) : this.props,
          e = new J.Event(r),
          t = i.length;
        t--;

      )
        (n = i[t]), (e[n] = r[n]);
      return (
        e.target || (e.target = Y),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        s.filter ? s.filter(e, r) : e
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== u() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === u() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            J.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (e) {
          return J.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function (e, t, n, i) {
      var o = J.extend(new J.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {},
      });
      i ? J.event.trigger(o, null, t) : J.event.dispatch.call(t, o),
        o.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (J.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n, !1);
    }),
    (J.Event = function (e, t) {
      return this instanceof J.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && e.returnValue === !1)
                  ? c
                  : d))
            : (this.type = e),
          t && J.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || J.now()),
          void (this[J.expando] = !0))
        : new J.Event(e, t);
    }),
    (J.Event.prototype = {
      isDefaultPrevented: d,
      isPropagationStopped: d,
      isImmediatePropagationStopped: d,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = c),
          e && e.preventDefault && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = c),
          e && e.stopPropagation && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = c),
          e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    J.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        J.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = this,
              o = e.relatedTarget,
              r = e.handleObj;
            return (
              (!o || (o !== i && !J.contains(i, o))) &&
                ((e.type = r.origType),
                (n = r.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    Z.focusinBubbles ||
      J.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          J.event.simulate(t, e.target, J.event.fix(e), !0);
        };
        J.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this,
              o = ve.access(i, t);
            o || i.addEventListener(e, n, !0), ve.access(i, t, (o || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this,
              o = ve.access(i, t) - 1;
            o
              ? ve.access(i, t, o)
              : (i.removeEventListener(e, n, !0), ve.remove(i, t));
          },
        };
      }),
    J.fn.extend({
      on: function (e, t, n, i, o) {
        var r, s;
        if ("object" == typeof e) {
          "string" != typeof t && ((n = n || t), (t = void 0));
          for (s in e) this.on(s, t, n, e[s], o);
          return this;
        }
        if (
          (null == n && null == i
            ? ((i = t), (n = t = void 0))
            : null == i &&
              ("string" == typeof t
                ? ((i = n), (n = void 0))
                : ((i = n), (n = t), (t = void 0))),
          i === !1)
        )
          i = d;
        else if (!i) return this;
        return (
          1 === o &&
            ((r = i),
            (i = function (e) {
              return J().off(e), r.apply(this, arguments);
            }),
            (i.guid = r.guid || (r.guid = J.guid++))),
          this.each(function () {
            J.event.add(this, e, i, n, t);
          })
        );
      },
      one: function (e, t, n, i) {
        return this.on(e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            J(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this;
        }
        return (
          (t === !1 || "function" == typeof t) && ((n = t), (t = void 0)),
          n === !1 && (n = d),
          this.each(function () {
            J.event.remove(this, e, n, t);
          })
        );
      },
      trigger: function (e, t) {
        return this.each(function () {
          J.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        return n ? J.event.trigger(e, t, n, !0) : void 0;
      },
    });
  var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    De = /<([\w:]+)/,
    je = /<|&#?\w+;/,
    Le = /<(?:script|style|link)/i,
    Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ie = /^$|\/(?:java|ecma)script/i,
    Oe = /^true\/(.*)/,
    Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    qe = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (qe.optgroup = qe.option),
    (qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead),
    (qe.th = qe.td),
    J.extend({
      clone: function (e, t, n) {
        var i,
          o,
          r,
          s,
          a = e.cloneNode(!0),
          l = J.contains(e.ownerDocument, e);
        if (
          !(
            Z.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            J.isXMLDoc(e)
          )
        )
          for (s = v(a), r = v(e), i = 0, o = r.length; o > i; i++)
            b(r[i], s[i]);
        if (t)
          if (n)
            for (r = r || v(e), s = s || v(a), i = 0, o = r.length; o > i; i++)
              g(r[i], s[i]);
          else g(e, a);
        return (
          (s = v(a, "script")), s.length > 0 && m(s, !l && v(e, "script")), a
        );
      },
      buildFragment: function (e, t, n, i) {
        for (
          var o,
            r,
            s,
            a,
            l,
            c,
            d = t.createDocumentFragment(),
            u = [],
            p = 0,
            f = e.length;
          f > p;
          p++
        )
          if (((o = e[p]), o || 0 === o))
            if ("object" === J.type(o)) J.merge(u, o.nodeType ? [o] : o);
            else if (je.test(o)) {
              for (
                r = r || d.appendChild(t.createElement("div")),
                  s = (De.exec(o) || ["", ""])[1].toLowerCase(),
                  a = qe[s] || qe._default,
                  r.innerHTML = a[1] + o.replace(Ae, "<$1></$2>") + a[2],
                  c = a[0];
                c--;

              )
                r = r.lastChild;
              J.merge(u, r.childNodes),
                (r = d.firstChild),
                (r.textContent = "");
            } else u.push(t.createTextNode(o));
        for (d.textContent = "", p = 0; (o = u[p++]); )
          if (
            (!i || -1 === J.inArray(o, i)) &&
            ((l = J.contains(o.ownerDocument, o)),
            (r = v(d.appendChild(o), "script")),
            l && m(r),
            n)
          )
            for (c = 0; (o = r[c++]); ) Ie.test(o.type || "") && n.push(o);
        return d;
      },
      cleanData: function (e) {
        for (
          var t, n, i, o, r = J.event.special, s = 0;
          void 0 !== (n = e[s]);
          s++
        ) {
          if (
            J.acceptData(n) &&
            ((o = n[ve.expando]), o && (t = ve.cache[o]))
          ) {
            if (t.events)
              for (i in t.events)
                r[i] ? J.event.remove(n, i) : J.removeEvent(n, i, t.handle);
            ve.cache[o] && delete ve.cache[o];
          }
          delete be.cache[n[be.expando]];
        }
      },
    }),
    J.fn.extend({
      text: function (e) {
        return ge(
          this,
          function (e) {
            return void 0 === e
              ? J.text(this)
              : this.empty().each(function () {
                  (1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType) &&
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = p(this, e);
            t.appendChild(e);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = p(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      remove: function (e, t) {
        for (
          var n, i = e ? J.filter(e, this) : this, o = 0;
          null != (n = i[o]);
          o++
        )
          t || 1 !== n.nodeType || J.cleanData(v(n)),
            n.parentNode &&
              (t && J.contains(n.ownerDocument, n) && m(v(n, "script")),
              n.parentNode.removeChild(n));
        return this;
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (J.cleanData(v(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null == e ? !1 : e),
          (t = null == t ? e : t),
          this.map(function () {
            return J.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return ge(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Le.test(e) &&
              !qe[(De.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = e.replace(Ae, "<$1></$2>");
              try {
                for (; i > n; n++)
                  (t = this[n] || {}),
                    1 === t.nodeType &&
                      (J.cleanData(v(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (o) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = arguments[0];
        return (
          this.domManip(arguments, function (t) {
            (e = this.parentNode),
              J.cleanData(v(this)),
              e && e.replaceChild(t, this);
          }),
          e && (e.length || e.nodeType) ? this : this.remove()
        );
      },
      detach: function (e) {
        return this.remove(e, !0);
      },
      domManip: function (e, t) {
        e = W.apply([], e);
        var n,
          i,
          o,
          r,
          s,
          a,
          l = 0,
          c = this.length,
          d = this,
          u = c - 1,
          p = e[0],
          m = J.isFunction(p);
        if (m || (c > 1 && "string" == typeof p && !Z.checkClone && Me.test(p)))
          return this.each(function (n) {
            var i = d.eq(n);
            m && (e[0] = p.call(this, n, i.html())), i.domManip(e, t);
          });
        if (
          c &&
          ((n = J.buildFragment(e, this[0].ownerDocument, !1, this)),
          (i = n.firstChild),
          1 === n.childNodes.length && (n = i),
          i)
        ) {
          for (o = J.map(v(n, "script"), f), r = o.length; c > l; l++)
            (s = n),
              l !== u &&
                ((s = J.clone(s, !0, !0)), r && J.merge(o, v(s, "script"))),
              t.call(this[l], s, l);
          if (r)
            for (
              a = o[o.length - 1].ownerDocument, J.map(o, h), l = 0;
              r > l;
              l++
            )
              (s = o[l]),
                Ie.test(s.type || "") &&
                  !ve.access(s, "globalEval") &&
                  J.contains(a, s) &&
                  (s.src
                    ? J._evalUrl && J._evalUrl(s.src)
                    : J.globalEval(s.textContent.replace(Re, "")));
        }
        return this;
      },
    }),
    J.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        J.fn[e] = function (e) {
          for (var n, i = [], o = J(e), r = o.length - 1, s = 0; r >= s; s++)
            (n = s === r ? this : this.clone(!0)),
              J(o[s])[t](n),
              U.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var He,
    ze = {},
    Pe = /^margin/,
    Be = new RegExp("^(" + xe + ")(?!px)[a-z%]+$", "i"),
    Fe = function (t) {
      return t.ownerDocument.defaultView.opener
        ? t.ownerDocument.defaultView.getComputedStyle(t, null)
        : e.getComputedStyle(t, null);
    };
  !(function () {
    function t() {
      (s.style.cssText =
        "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
        (s.innerHTML = ""),
        o.appendChild(r);
      var t = e.getComputedStyle(s, null);
      (n = "1%" !== t.top), (i = "4px" === t.width), o.removeChild(r);
    }
    var n,
      i,
      o = Y.documentElement,
      r = Y.createElement("div"),
      s = Y.createElement("div");
    s.style &&
      ((s.style.backgroundClip = "content-box"),
      (s.cloneNode(!0).style.backgroundClip = ""),
      (Z.clearCloneStyle = "content-box" === s.style.backgroundClip),
      (r.style.cssText =
        "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
      r.appendChild(s),
      e.getComputedStyle &&
        J.extend(Z, {
          pixelPosition: function () {
            return t(), n;
          },
          boxSizingReliable: function () {
            return null == i && t(), i;
          },
          reliableMarginRight: function () {
            var t,
              n = s.appendChild(Y.createElement("div"));
            return (
              (n.style.cssText = s.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (n.style.marginRight = n.style.width = "0"),
              (s.style.width = "1px"),
              o.appendChild(r),
              (t = !parseFloat(e.getComputedStyle(n, null).marginRight)),
              o.removeChild(r),
              s.removeChild(n),
              t
            );
          },
        }));
  })(),
    (J.swap = function (e, t, n, i) {
      var o,
        r,
        s = {};
      for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
      o = n.apply(e, i || []);
      for (r in t) e.style[r] = s[r];
      return o;
    });
  var We = /^(none|table(?!-c[ea]).+)/,
    Ue = new RegExp("^(" + xe + ")(.*)$", "i"),
    Xe = new RegExp("^([+-])=(" + xe + ")", "i"),
    Qe = { position: "absolute", visibility: "hidden", display: "block" },
    Ke = { letterSpacing: "0", fontWeight: "400" },
    Ve = ["Webkit", "O", "Moz", "ms"];
  J.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = x(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
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
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          r,
          s,
          a = J.camelCase(t),
          l = e.style;
        return (
          (t = J.cssProps[a] || (J.cssProps[a] = T(l, a))),
          (s = J.cssHooks[t] || J.cssHooks[a]),
          void 0 === n
            ? s && "get" in s && void 0 !== (o = s.get(e, !1, i))
              ? o
              : l[t]
            : ((r = typeof n),
              "string" === r &&
                (o = Xe.exec(n)) &&
                ((n = (o[1] + 1) * o[2] + parseFloat(J.css(e, t))),
                (r = "number")),
              void (
                null != n &&
                n === n &&
                ("number" !== r || J.cssNumber[a] || (n += "px"),
                Z.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (l[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                  (l[t] = n))
              ))
        );
      }
    },
    css: function (e, t, n, i) {
      var o,
        r,
        s,
        a = J.camelCase(t);
      return (
        (t = J.cssProps[a] || (J.cssProps[a] = T(e.style, a))),
        (s = J.cssHooks[t] || J.cssHooks[a]),
        s && "get" in s && (o = s.get(e, !0, n)),
        void 0 === o && (o = x(e, t, i)),
        "normal" === o && t in Ke && (o = Ke[t]),
        "" === n || n
          ? ((r = parseFloat(o)), n === !0 || J.isNumeric(r) ? r || 0 : o)
          : o
      );
    },
  }),
    J.each(["height", "width"], function (e, t) {
      J.cssHooks[t] = {
        get: function (e, n, i) {
          return n
            ? We.test(J.css(e, "display")) && 0 === e.offsetWidth
              ? J.swap(e, Qe, function () {
                  return $(e, t, i);
                })
              : $(e, t, i)
            : void 0;
        },
        set: function (e, n, i) {
          var o = i && Fe(e);
          return C(
            e,
            n,
            i ? S(e, t, i, "border-box" === J.css(e, "boxSizing", !1, o), o) : 0
          );
        },
      };
    }),
    (J.cssHooks.marginRight = k(Z.reliableMarginRight, function (e, t) {
      return t
        ? J.swap(e, { display: "inline-block" }, x, [e, "marginRight"])
        : void 0;
    })),
    J.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (J.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n];
            4 > i;
            i++
          )
            o[e + ke[i] + t] = r[i] || r[i - 2] || r[0];
          return o;
        },
      }),
        Pe.test(e) || (J.cssHooks[e + t].set = C);
    }),
    J.fn.extend({
      css: function (e, t) {
        return ge(
          this,
          function (e, t, n) {
            var i,
              o,
              r = {},
              s = 0;
            if (J.isArray(t)) {
              for (i = Fe(e), o = t.length; o > s; s++)
                r[t[s]] = J.css(e, t[s], !1, i);
              return r;
            }
            return void 0 !== n ? J.style(e, t, n) : J.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
      show: function () {
        return _(this, !0);
      },
      hide: function () {
        return _(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              Te(this) ? J(this).show() : J(this).hide();
            });
      },
    }),
    (J.Tween = N),
    (N.prototype = {
      constructor: N,
      init: function (e, t, n, i, o, r) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = o || "swing"),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = r || (J.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = N.propHooks[this.prop];
        return e && e.get ? e.get(this) : N.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = N.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t = J.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : N.propHooks._default.set(this),
          this
        );
      },
    }),
    (N.prototype.init.prototype = N.prototype),
    (N.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return null == e.elem[e.prop] ||
            (e.elem.style && null != e.elem.style[e.prop])
            ? ((t = J.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0)
            : e.elem[e.prop];
        },
        set: function (e) {
          J.fx.step[e.prop]
            ? J.fx.step[e.prop](e)
            : e.elem.style &&
              (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop])
            ? J.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }),
    (N.propHooks.scrollTop = N.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      },
    }),
    (J.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
    }),
    (J.fx = N.prototype.init),
    (J.fx.step = {});
  var Ze,
    Ye,
    Ge = /^(?:toggle|show|hide)$/,
    Je = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$", "i"),
    et = /queueHooks$/,
    tt = [j],
    nt = {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t),
            i = n.cur(),
            o = Je.exec(t),
            r = (o && o[3]) || (J.cssNumber[e] ? "" : "px"),
            s =
              (J.cssNumber[e] || ("px" !== r && +i)) &&
              Je.exec(J.css(n.elem, e)),
            a = 1,
            l = 20;
          if (s && s[3] !== r) {
            (r = r || s[3]), (o = o || []), (s = +i || 1);
            do (a = a || ".5"), (s /= a), J.style(n.elem, e, s + r);
            while (a !== (a = n.cur() / i) && 1 !== a && --l);
          }
          return (
            o &&
              ((s = n.start = +s || +i || 0),
              (n.unit = r),
              (n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2])),
            n
          );
        },
      ],
    };
  (J.Animation = J.extend(M, {
    tweener: function (e, t) {
      J.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
      for (var n, i = 0, o = e.length; o > i; i++)
        (n = e[i]), (nt[n] = nt[n] || []), nt[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? tt.unshift(e) : tt.push(e);
    },
  })),
    (J.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? J.extend({}, e)
          : {
              complete: n || (!n && t) || (J.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !J.isFunction(t) && t),
            };
      return (
        (i.duration = J.fx.off
          ? 0
          : "number" == typeof i.duration
          ? i.duration
          : i.duration in J.fx.speeds
          ? J.fx.speeds[i.duration]
          : J.fx.speeds._default),
        (null == i.queue || i.queue === !0) && (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          J.isFunction(i.old) && i.old.call(this),
            i.queue && J.dequeue(this, i.queue);
        }),
        i
      );
    }),
    J.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(Te)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var o = J.isEmptyObject(e),
          r = J.speed(t, n, i),
          s = function () {
            var t = M(this, J.extend({}, e), r);
            (o || ve.get(this, "finish")) && t.stop(!0);
          };
        return (
          (s.finish = s),
          o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
        );
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && e !== !1 && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              o = null != e && e + "queueHooks",
              r = J.timers,
              s = ve.get(this);
            if (o) s[o] && s[o].stop && i(s[o]);
            else for (o in s) s[o] && s[o].stop && et.test(o) && i(s[o]);
            for (o = r.length; o--; )
              r[o].elem !== this ||
                (null != e && r[o].queue !== e) ||
                (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
            (t || !n) && J.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          e !== !1 && (e = e || "fx"),
          this.each(function () {
            var t,
              n = ve.get(this),
              i = n[e + "queue"],
              o = n[e + "queueHooks"],
              r = J.timers,
              s = i ? i.length : 0;
            for (
              n.finish = !0,
                J.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = r.length;
              t--;

            )
              r[t].elem === this &&
                r[t].queue === e &&
                (r[t].anim.stop(!0), r.splice(t, 1));
            for (t = 0; s > t; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    J.each(["toggle", "show", "hide"], function (e, t) {
      var n = J.fn[t];
      J.fn[t] = function (e, i, o) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(A(t, !0), e, i, o);
      };
    }),
    J.each(
      {
        slideDown: A("show"),
        slideUp: A("hide"),
        slideToggle: A("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        J.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (J.timers = []),
    (J.fx.tick = function () {
      var e,
        t = 0,
        n = J.timers;
      for (Ze = J.now(); t < n.length; t++)
        (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
      n.length || J.fx.stop(), (Ze = void 0);
    }),
    (J.fx.timer = function (e) {
      J.timers.push(e), e() ? J.fx.start() : J.timers.pop();
    }),
    (J.fx.interval = 13),
    (J.fx.start = function () {
      Ye || (Ye = setInterval(J.fx.tick, J.fx.interval));
    }),
    (J.fx.stop = function () {
      clearInterval(Ye), (Ye = null);
    }),
    (J.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (J.fn.delay = function (e, t) {
      return (
        (e = J.fx ? J.fx.speeds[e] || e : e),
        (t = t || "fx"),
        this.queue(t, function (t, n) {
          var i = setTimeout(t, e);
          n.stop = function () {
            clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var e = Y.createElement("input"),
        t = Y.createElement("select"),
        n = t.appendChild(Y.createElement("option"));
      (e.type = "checkbox"),
        (Z.checkOn = "" !== e.value),
        (Z.optSelected = n.selected),
        (t.disabled = !0),
        (Z.optDisabled = !n.disabled),
        (e = Y.createElement("input")),
        (e.value = "t"),
        (e.type = "radio"),
        (Z.radioValue = "t" === e.value);
    })();
  var it,
    ot,
    rt = J.expr.attrHandle;
  J.fn.extend({
    attr: function (e, t) {
      return ge(this, J.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        J.removeAttr(this, e);
      });
    },
  }),
    J.extend({
      attr: function (e, t, n) {
        var i,
          o,
          r = e.nodeType;
        return e && 3 !== r && 8 !== r && 2 !== r
          ? typeof e.getAttribute === Se
            ? J.prop(e, t, n)
            : ((1 === r && J.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (i = J.attrHooks[t] || (J.expr.match.bool.test(t) ? ot : it))),
              void 0 === n
                ? i && "get" in i && null !== (o = i.get(e, t))
                  ? o
                  : ((o = J.find.attr(e, t)), null == o ? void 0 : o)
                : null !== n
                ? i && "set" in i && void 0 !== (o = i.set(e, n, t))
                  ? o
                  : (e.setAttribute(t, n + ""), n)
                : void J.removeAttr(e, t))
          : void 0;
      },
      removeAttr: function (e, t) {
        var n,
          i,
          o = 0,
          r = t && t.match(fe);
        if (r && 1 === e.nodeType)
          for (; (n = r[o++]); )
            (i = J.propFix[n] || n),
              J.expr.match.bool.test(n) && (e[i] = !1),
              e.removeAttribute(n);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!Z.radioValue && "radio" === t && J.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
    }),
    (ot = {
      set: function (e, t, n) {
        return t === !1 ? J.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    J.each(J.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = rt[t] || J.find.attr;
      rt[t] = function (e, t, i) {
        var o, r;
        return (
          i ||
            ((r = rt[t]),
            (rt[t] = o),
            (o = null != n(e, t, i) ? t.toLowerCase() : null),
            (rt[t] = r)),
          o
        );
      };
    });
  var st = /^(?:input|select|textarea|button)$/i;
  J.fn.extend({
    prop: function (e, t) {
      return ge(this, J.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[J.propFix[e] || e];
      });
    },
  }),
    J.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (e, t, n) {
        var i,
          o,
          r,
          s = e.nodeType;
        return e && 3 !== s && 8 !== s && 2 !== s
          ? ((r = 1 !== s || !J.isXMLDoc(e)),
            r && ((t = J.propFix[t] || t), (o = J.propHooks[t])),
            void 0 !== n
              ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                ? i
                : (e[t] = n)
              : o && "get" in o && null !== (i = o.get(e, t))
              ? i
              : e[t])
          : void 0;
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href
              ? e.tabIndex
              : -1;
          },
        },
      },
    }),
    Z.optSelected ||
      (J.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
      }),
    J.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        J.propFix[this.toLowerCase()] = this;
      }
    );
  var at = /[\t\r\n\f]/g;
  J.fn.extend({
    addClass: function (e) {
      var t,
        n,
        i,
        o,
        r,
        s,
        a = "string" == typeof e && e,
        l = 0,
        c = this.length;
      if (J.isFunction(e))
        return this.each(function (t) {
          J(this).addClass(e.call(this, t, this.className));
        });
      if (a)
        for (t = (e || "").match(fe) || []; c > l; l++)
          if (
            ((n = this[l]),
            (i =
              1 === n.nodeType &&
              (n.className ? (" " + n.className + " ").replace(at, " ") : " ")))
          ) {
            for (r = 0; (o = t[r++]); )
              i.indexOf(" " + o + " ") < 0 && (i += o + " ");
            (s = J.trim(i)), n.className !== s && (n.className = s);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        i,
        o,
        r,
        s,
        a = 0 === arguments.length || ("string" == typeof e && e),
        l = 0,
        c = this.length;
      if (J.isFunction(e))
        return this.each(function (t) {
          J(this).removeClass(e.call(this, t, this.className));
        });
      if (a)
        for (t = (e || "").match(fe) || []; c > l; l++)
          if (
            ((n = this[l]),
            (i =
              1 === n.nodeType &&
              (n.className ? (" " + n.className + " ").replace(at, " ") : "")))
          ) {
            for (r = 0; (o = t[r++]); )
              for (; i.indexOf(" " + o + " ") >= 0; )
                i = i.replace(" " + o + " ", " ");
            (s = e ? J.trim(i) : ""), n.className !== s && (n.className = s);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : this.each(
            J.isFunction(e)
              ? function (n) {
                  J(this).toggleClass(e.call(this, n, this.className, t), t);
                }
              : function () {
                  if ("string" === n)
                    for (
                      var t, i = 0, o = J(this), r = e.match(fe) || [];
                      (t = r[i++]);

                    )
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                  else
                    (n === Se || "boolean" === n) &&
                      (this.className &&
                        ve.set(this, "__className__", this.className),
                      (this.className =
                        this.className || e === !1
                          ? ""
                          : ve.get(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
        if (
          1 === this[n].nodeType &&
          (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0
        )
          return !0;
      return !1;
    },
  });
  var lt = /\r/g;
  J.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        o = this[0];
      return arguments.length
        ? ((i = J.isFunction(e)),
          this.each(function (n) {
            var o;
            1 === this.nodeType &&
              ((o = i ? e.call(this, n, J(this).val()) : e),
              null == o
                ? (o = "")
                : "number" == typeof o
                ? (o += "")
                : J.isArray(o) &&
                  (o = J.map(o, function (e) {
                    return null == e ? "" : e + "";
                  })),
              (t =
                J.valHooks[this.type] ||
                J.valHooks[this.nodeName.toLowerCase()]),
              (t && "set" in t && void 0 !== t.set(this, o, "value")) ||
                (this.value = o));
          }))
        : o
        ? ((t = J.valHooks[o.type] || J.valHooks[o.nodeName.toLowerCase()]),
          t && "get" in t && void 0 !== (n = t.get(o, "value"))
            ? n
            : ((n = o.value),
              "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n))
        : void 0;
    },
  }),
    J.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = J.find.attr(e, "value");
            return null != t ? t : J.trim(J.text(e));
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                i = e.options,
                o = e.selectedIndex,
                r = "select-one" === e.type || 0 > o,
                s = r ? null : [],
                a = r ? o + 1 : i.length,
                l = 0 > o ? a : r ? o : 0;
              a > l;
              l++
            )
              if (
                ((n = i[l]),
                !(
                  (!n.selected && l !== o) ||
                  (Z.optDisabled
                    ? n.disabled
                    : null !== n.getAttribute("disabled")) ||
                  (n.parentNode.disabled &&
                    J.nodeName(n.parentNode, "optgroup"))
                ))
              ) {
                if (((t = J(n).val()), r)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            for (
              var n, i, o = e.options, r = J.makeArray(t), s = o.length;
              s--;

            )
              (i = o[s]), (i.selected = J.inArray(i.value, r) >= 0) && (n = !0);
            return n || (e.selectedIndex = -1), r;
          },
        },
      },
    }),
    J.each(["radio", "checkbox"], function () {
      (J.valHooks[this] = {
        set: function (e, t) {
          return J.isArray(t)
            ? (e.checked = J.inArray(J(e).val(), t) >= 0)
            : void 0;
        },
      }),
        Z.checkOn ||
          (J.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    J.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, t) {
        J.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    J.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    });
  var ct = J.now(),
    dt = /\?/;
  (J.parseJSON = function (e) {
    return JSON.parse(e + "");
  }),
    (J.parseXML = function (e) {
      var t, n;
      if (!e || "string" != typeof e) return null;
      try {
        (n = new DOMParser()), (t = n.parseFromString(e, "text/xml"));
      } catch (i) {
        t = void 0;
      }
      return (
        (!t || t.getElementsByTagName("parsererror").length) &&
          J.error("Invalid XML: " + e),
        t
      );
    });
  var ut = /#.*$/,
    pt = /([?&])_=[^&]*/,
    ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    mt = /^(?:GET|HEAD)$/,
    gt = /^\/\//,
    vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    bt = {},
    yt = {},
    wt = "*/".concat("*"),
    xt = e.location.href,
    kt = vt.exec(xt.toLowerCase()) || [];
  J.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: xt,
      type: "GET",
      isLocal: ht.test(kt[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": wt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /xml/, html: /html/, json: /json/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": J.parseJSON,
        "text xml": J.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (e, t) {
      return t ? R(R(e, J.ajaxSettings), t) : R(J.ajaxSettings, e);
    },
    ajaxPrefilter: I(bt),
    ajaxTransport: I(yt),
    ajax: function (e, t) {
      function n(e, t, n, s) {
        var l,
          d,
          v,
          b,
          w,
          k = t;
        2 !== y &&
          ((y = 2),
          a && clearTimeout(a),
          (i = void 0),
          (r = s || ""),
          (x.readyState = e > 0 ? 4 : 0),
          (l = (e >= 200 && 300 > e) || 304 === e),
          n && (b = q(u, x, n)),
          (b = H(u, b, x, l)),
          l
            ? (u.ifModified &&
                ((w = x.getResponseHeader("Last-Modified")),
                w && (J.lastModified[o] = w),
                (w = x.getResponseHeader("etag")),
                w && (J.etag[o] = w)),
              204 === e || "HEAD" === u.type
                ? (k = "nocontent")
                : 304 === e
                ? (k = "notmodified")
                : ((k = b.state), (d = b.data), (v = b.error), (l = !v)))
            : ((v = k), (e || !k) && ((k = "error"), 0 > e && (e = 0))),
          (x.status = e),
          (x.statusText = (t || k) + ""),
          l ? h.resolveWith(p, [d, k, x]) : h.rejectWith(p, [x, k, v]),
          x.statusCode(g),
          (g = void 0),
          c && f.trigger(l ? "ajaxSuccess" : "ajaxError", [x, u, l ? d : v]),
          m.fireWith(p, [x, k]),
          c &&
            (f.trigger("ajaxComplete", [x, u]),
            --J.active || J.event.trigger("ajaxStop")));
      }
      "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
      var i,
        o,
        r,
        s,
        a,
        l,
        c,
        d,
        u = J.ajaxSetup({}, t),
        p = u.context || u,
        f = u.context && (p.nodeType || p.jquery) ? J(p) : J.event,
        h = J.Deferred(),
        m = J.Callbacks("once memory"),
        g = u.statusCode || {},
        v = {},
        b = {},
        y = 0,
        w = "canceled",
        x = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (2 === y) {
              if (!s)
                for (s = {}; (t = ft.exec(r)); ) s[t[1].toLowerCase()] = t[2];
              t = s[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return 2 === y ? r : null;
          },
          setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return y || ((e = b[n] = b[n] || e), (v[e] = t)), this;
          },
          overrideMimeType: function (e) {
            return y || (u.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (2 > y) for (t in e) g[t] = [g[t], e[t]];
              else x.always(e[x.status]);
            return this;
          },
          abort: function (e) {
            var t = e || w;
            return i && i.abort(t), n(0, t), this;
          },
        };
      if (
        ((h.promise(x).complete = m.add),
        (x.success = x.done),
        (x.error = x.fail),
        (u.url = ((e || u.url || xt) + "")
          .replace(ut, "")
          .replace(gt, kt[1] + "//")),
        (u.type = t.method || t.type || u.method || u.type),
        (u.dataTypes = J.trim(u.dataType || "*")
          .toLowerCase()
          .match(fe) || [""]),
        null == u.crossDomain &&
          ((l = vt.exec(u.url.toLowerCase())),
          (u.crossDomain = !(
            !l ||
            (l[1] === kt[1] &&
              l[2] === kt[2] &&
              (l[3] || ("http:" === l[1] ? "80" : "443")) ===
                (kt[3] || ("http:" === kt[1] ? "80" : "443")))
          ))),
        u.data &&
          u.processData &&
          "string" != typeof u.data &&
          (u.data = J.param(u.data, u.traditional)),
        O(bt, u, t, x),
        2 === y)
      )
        return x;
      (c = J.event && u.global),
        c && 0 === J.active++ && J.event.trigger("ajaxStart"),
        (u.type = u.type.toUpperCase()),
        (u.hasContent = !mt.test(u.type)),
        (o = u.url),
        u.hasContent ||
          (u.data &&
            ((o = u.url += (dt.test(o) ? "&" : "?") + u.data), delete u.data),
          u.cache === !1 &&
            (u.url = pt.test(o)
              ? o.replace(pt, "$1_=" + ct++)
              : o + (dt.test(o) ? "&" : "?") + "_=" + ct++)),
        u.ifModified &&
          (J.lastModified[o] &&
            x.setRequestHeader("If-Modified-Since", J.lastModified[o]),
          J.etag[o] && x.setRequestHeader("If-None-Match", J.etag[o])),
        ((u.data && u.hasContent && u.contentType !== !1) || t.contentType) &&
          x.setRequestHeader("Content-Type", u.contentType),
        x.setRequestHeader(
          "Accept",
          u.dataTypes[0] && u.accepts[u.dataTypes[0]]
            ? u.accepts[u.dataTypes[0]] +
                ("*" !== u.dataTypes[0] ? ", " + wt + "; q=0.01" : "")
            : u.accepts["*"]
        );
      for (d in u.headers) x.setRequestHeader(d, u.headers[d]);
      if (u.beforeSend && (u.beforeSend.call(p, x, u) === !1 || 2 === y))
        return x.abort();
      w = "abort";
      for (d in { success: 1, error: 1, complete: 1 }) x[d](u[d]);
      if ((i = O(yt, u, t, x))) {
        (x.readyState = 1),
          c && f.trigger("ajaxSend", [x, u]),
          u.async &&
            u.timeout > 0 &&
            (a = setTimeout(function () {
              x.abort("timeout");
            }, u.timeout));
        try {
          (y = 1), i.send(v, n);
        } catch (k) {
          if (!(2 > y)) throw k;
          n(-1, k);
        }
      } else n(-1, "No Transport");
      return x;
    },
    getJSON: function (e, t, n) {
      return J.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return J.get(e, void 0, t, "script");
    },
  }),
    J.each(["get", "post"], function (e, t) {
      J[t] = function (e, n, i, o) {
        return (
          J.isFunction(n) && ((o = o || i), (i = n), (n = void 0)),
          J.ajax({ url: e, type: t, dataType: o, data: n, success: i })
        );
      };
    }),
    (J._evalUrl = function (e) {
      return J.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    J.fn.extend({
      wrapAll: function (e) {
        var t;
        return J.isFunction(e)
          ? this.each(function (t) {
              J(this).wrapAll(e.call(this, t));
            })
          : (this[0] &&
              ((t = J(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this);
      },
      wrapInner: function (e) {
        return this.each(
          J.isFunction(e)
            ? function (t) {
                J(this).wrapInner(e.call(this, t));
              }
            : function () {
                var t = J(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              }
        );
      },
      wrap: function (e) {
        var t = J.isFunction(e);
        return this.each(function (n) {
          J(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            J.nodeName(this, "body") || J(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (J.expr.filters.hidden = function (e) {
      return e.offsetWidth <= 0 && e.offsetHeight <= 0;
    }),
    (J.expr.filters.visible = function (e) {
      return !J.expr.filters.hidden(e);
    });
  var Tt = /%20/g,
    Ct = /\[\]$/,
    St = /\r?\n/g,
    $t = /^(?:submit|button|image|reset|file)$/i,
    _t = /^(?:input|select|textarea|keygen)/i;
  (J.param = function (e, t) {
    var n,
      i = [],
      o = function (e, t) {
        (t = J.isFunction(t) ? t() : null == t ? "" : t),
          (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
      };
    if (
      (void 0 === t && (t = J.ajaxSettings && J.ajaxSettings.traditional),
      J.isArray(e) || (e.jquery && !J.isPlainObject(e)))
    )
      J.each(e, function () {
        o(this.name, this.value);
      });
    else for (n in e) z(n, e[n], t, o);
    return i.join("&").replace(Tt, "+");
  }),
    J.fn.extend({
      serialize: function () {
        return J.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = J.prop(this, "elements");
          return e ? J.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !J(this).is(":disabled") &&
              _t.test(this.nodeName) &&
              !$t.test(e) &&
              (this.checked || !Ce.test(e))
            );
          })
          .map(function (e, t) {
            var n = J(this).val();
            return null == n
              ? null
              : J.isArray(n)
              ? J.map(n, function (e) {
                  return { name: t.name, value: e.replace(St, "\r\n") };
                })
              : { name: t.name, value: n.replace(St, "\r\n") };
          })
          .get();
      },
    }),
    (J.ajaxSettings.xhr = function () {
      try {
        return new XMLHttpRequest();
      } catch (e) {}
    });
  var Nt = 0,
    Et = {},
    At = { 0: 200, 1223: 204 },
    Dt = J.ajaxSettings.xhr();
  e.attachEvent &&
    e.attachEvent("onunload", function () {
      for (var e in Et) Et[e]();
    }),
    (Z.cors = !!Dt && "withCredentials" in Dt),
    (Z.ajax = Dt = !!Dt),
    J.ajaxTransport(function (e) {
      var t;
      return Z.cors || (Dt && !e.crossDomain)
        ? {
            send: function (n, i) {
              var o,
                r = e.xhr(),
                s = ++Nt;
              if (
                (r.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
              )
                for (o in e.xhrFields) r[o] = e.xhrFields[o];
              e.mimeType &&
                r.overrideMimeType &&
                r.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  n["X-Requested-With"] ||
                  (n["X-Requested-With"] = "XMLHttpRequest");
              for (o in n) r.setRequestHeader(o, n[o]);
              (t = function (e) {
                return function () {
                  t &&
                    (delete Et[s],
                    (t = r.onload = r.onerror = null),
                    "abort" === e
                      ? r.abort()
                      : "error" === e
                      ? i(r.status, r.statusText)
                      : i(
                          At[r.status] || r.status,
                          r.statusText,
                          "string" == typeof r.responseText
                            ? { text: r.responseText }
                            : void 0,
                          r.getAllResponseHeaders()
                        ));
                };
              }),
                (r.onload = t()),
                (r.onerror = t("error")),
                (t = Et[s] = t("abort"));
              try {
                r.send((e.hasContent && e.data) || null);
              } catch (a) {
                if (t) throw a;
              }
            },
            abort: function () {
              t && t();
            },
          }
        : void 0;
    }),
    J.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (e) {
          return J.globalEval(e), e;
        },
      },
    }),
    J.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    J.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function (i, o) {
            (t = J("<script>")
              .prop({ async: !0, charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && o("error" === e.type ? 404 : 200, e.type);
                })
              )),
              Y.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
      }
    });
  var jt = [],
    Lt = /(=)\?(?=&|$)|\?\?/;
  J.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = jt.pop() || J.expando + "_" + ct++;
      return (this[e] = !0), e;
    },
  }),
    J.ajaxPrefilter("json jsonp", function (t, n, i) {
      var o,
        r,
        s,
        a =
          t.jsonp !== !1 &&
          (Lt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              !(t.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Lt.test(t.data) &&
              "data");
      return a || "jsonp" === t.dataTypes[0]
        ? ((o = t.jsonpCallback = J.isFunction(t.jsonpCallback)
            ? t.jsonpCallback()
            : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(Lt, "$1" + o))
            : t.jsonp !== !1 &&
              (t.url += (dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
          (t.converters["script json"] = function () {
            return s || J.error(o + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (r = e[o]),
          (e[o] = function () {
            s = arguments;
          }),
          i.always(function () {
            (e[o] = r),
              t[o] && ((t.jsonpCallback = n.jsonpCallback), jt.push(o)),
              s && J.isFunction(r) && r(s[0]),
              (s = r = void 0);
          }),
          "script")
        : void 0;
    }),
    (J.parseHTML = function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && ((n = t), (t = !1)), (t = t || Y);
      var i = se.exec(e),
        o = !n && [];
      return i
        ? [t.createElement(i[1])]
        : ((i = J.buildFragment([e], t, o)),
          o && o.length && J(o).remove(),
          J.merge([], i.childNodes));
    });
  var Mt = J.fn.load;
  (J.fn.load = function (e, t, n) {
    if ("string" != typeof e && Mt) return Mt.apply(this, arguments);
    var i,
      o,
      r,
      s = this,
      a = e.indexOf(" ");
    return (
      a >= 0 && ((i = J.trim(e.slice(a))), (e = e.slice(0, a))),
      J.isFunction(t)
        ? ((n = t), (t = void 0))
        : t && "object" == typeof t && (o = "POST"),
      s.length > 0 &&
        J.ajax({ url: e, type: o, dataType: "html", data: t })
          .done(function (e) {
            (r = arguments),
              s.html(i ? J("<div>").append(J.parseHTML(e)).find(i) : e);
          })
          .complete(
            n &&
              function (e, t) {
                s.each(n, r || [e.responseText, t, e]);
              }
          ),
      this
    );
  }),
    J.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        J.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (J.expr.filters.animated = function (e) {
      return J.grep(J.timers, function (t) {
        return e === t.elem;
      }).length;
    });
  var It = e.document.documentElement;
  (J.offset = {
    setOffset: function (e, t, n) {
      var i,
        o,
        r,
        s,
        a,
        l,
        c,
        d = J.css(e, "position"),
        u = J(e),
        p = {};
      "static" === d && (e.style.position = "relative"),
        (a = u.offset()),
        (r = J.css(e, "top")),
        (l = J.css(e, "left")),
        (c =
          ("absolute" === d || "fixed" === d) && (r + l).indexOf("auto") > -1),
        c
          ? ((i = u.position()), (s = i.top), (o = i.left))
          : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
        J.isFunction(t) && (t = t.call(e, n, a)),
        null != t.top && (p.top = t.top - a.top + s),
        null != t.left && (p.left = t.left - a.left + o),
        "using" in t ? t.using.call(e, p) : u.css(p);
    },
  }),
    J.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                J.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0],
          o = { top: 0, left: 0 },
          r = i && i.ownerDocument;
        return r
          ? ((t = r.documentElement),
            J.contains(t, i)
              ? (typeof i.getBoundingClientRect !== Se &&
                  (o = i.getBoundingClientRect()),
                (n = P(r)),
                {
                  top: o.top + n.pageYOffset - t.clientTop,
                  left: o.left + n.pageXOffset - t.clientLeft,
                })
              : o)
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = this[0],
            i = { top: 0, left: 0 };
          return (
            "fixed" === J.css(n, "position")
              ? (t = n.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                J.nodeName(e[0], "html") || (i = e.offset()),
                (i.top += J.css(e[0], "borderTopWidth", !0)),
                (i.left += J.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - i.top - J.css(n, "marginTop", !0),
              left: t.left - i.left - J.css(n, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent || It;
            e && !J.nodeName(e, "html") && "static" === J.css(e, "position");

          )
            e = e.offsetParent;
          return e || It;
        });
      },
    }),
    J.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (
      t,
      n
    ) {
      var i = "pageYOffset" === n;
      J.fn[t] = function (o) {
        return ge(
          this,
          function (t, o, r) {
            var s = P(t);
            return void 0 === r
              ? s
                ? s[n]
                : t[o]
              : void (s
                  ? s.scrollTo(i ? e.pageXOffset : r, i ? r : e.pageYOffset)
                  : (t[o] = r));
          },
          t,
          o,
          arguments.length,
          null
        );
      };
    }),
    J.each(["top", "left"], function (e, t) {
      J.cssHooks[t] = k(Z.pixelPosition, function (e, n) {
        return n
          ? ((n = x(e, t)), Be.test(n) ? J(e).position()[t] + "px" : n)
          : void 0;
      });
    }),
    J.each({ Height: "height", Width: "width" }, function (e, t) {
      J.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (
        n,
        i
      ) {
        J.fn[i] = function (i, o) {
          var r = arguments.length && (n || "boolean" != typeof i),
            s = n || (i === !0 || o === !0 ? "margin" : "border");
          return ge(
            this,
            function (t, n, i) {
              var o;
              return J.isWindow(t)
                ? t.document.documentElement["client" + e]
                : 9 === t.nodeType
                ? ((o = t.documentElement),
                  Math.max(
                    t.body["scroll" + e],
                    o["scroll" + e],
                    t.body["offset" + e],
                    o["offset" + e],
                    o["client" + e]
                  ))
                : void 0 === i
                ? J.css(t, n, s)
                : J.style(t, n, i, s);
            },
            t,
            r ? i : void 0,
            r,
            null
          );
        };
      });
    }),
    (J.fn.size = function () {
      return this.length;
    }),
    (J.fn.andSelf = J.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return J;
      });
  var Ot = e.jQuery,
    Rt = e.$;
  return (
    (J.noConflict = function (t) {
      return e.$ === J && (e.$ = Rt), t && e.jQuery === J && (e.jQuery = Ot), J;
    }),
    typeof t === Se && (e.jQuery = e.$ = J),
    J
  );
}),
  +(function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var n = e(this),
          o = n.data("bs.alert");
        o || n.data("bs.alert", (o = new i(this))),
          "string" == typeof t && o[t].call(n);
      });
    }
    var n = '[data-dismiss="alert"]',
      i = function (t) {
        e(t).on("click", n, this.close);
      };
    (i.VERSION = "3.3.7"),
      (i.TRANSITION_DURATION = 150),
      (i.prototype.close = function (t) {
        function n() {
          s.detach().trigger("closed.bs.alert").remove();
        }
        var o = e(this),
          r = o.attr("data-target");
        r || ((r = o.attr("href")), (r = r && r.replace(/.*(?=#[^\s]*$)/, "")));
        var s = e("#" === r ? [] : r);
        t && t.preventDefault(),
          s.length || (s = o.closest(".alert")),
          s.trigger((t = e.Event("close.bs.alert"))),
          t.isDefaultPrevented() ||
            (s.removeClass("in"),
            e.support.transition && s.hasClass("fade")
              ? s
                  .one("bsTransitionEnd", n)
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : n());
      });
    var o = e.fn.alert;
    (e.fn.alert = t),
      (e.fn.alert.Constructor = i),
      (e.fn.alert.noConflict = function () {
        return (e.fn.alert = o), this;
      }),
      e(document).on("click.bs.alert.data-api", n, i.prototype.close);
  })(jQuery),
  +(function (e) {
    "use strict";
    function t(t) {
      var n,
        i =
          t.attr("data-target") ||
          ((n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
      return e(i);
    }
    function n(t) {
      return this.each(function () {
        var n = e(this),
          o = n.data("bs.collapse"),
          r = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
        !o && r.toggle && /show|hide/.test(t) && (r.toggle = !1),
          o || n.data("bs.collapse", (o = new i(this, r))),
          "string" == typeof t && o[t]();
      });
    }
    var i = function (t, n) {
      (this.$element = e(t)),
        (this.options = e.extend({}, i.DEFAULTS, n)),
        (this.$trigger = e(
          '[data-toggle="collapse"][href="#' +
            t.id +
            '"],[data-toggle="collapse"][data-target="#' +
            t.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (i.VERSION = "3.3.7"),
      (i.TRANSITION_DURATION = 350),
      (i.DEFAULTS = { toggle: !0 }),
      (i.prototype.dimension = function () {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height";
      }),
      (i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var t,
            o =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              o &&
              o.length &&
              ((t = o.data("bs.collapse")), t && t.transitioning)
            )
          ) {
            var r = e.Event("show.bs.collapse");
            if ((this.$element.trigger(r), !r.isDefaultPrevented())) {
              o &&
                o.length &&
                (n.call(o, "hide"), t || o.data("bs.collapse", null));
              var s = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [s](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var a = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [s](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!e.support.transition) return a.call(this);
              var l = e.camelCase(["scroll", s].join("-"));
              this.$element
                .one("bsTransitionEnd", e.proxy(a, this))
                .emulateTransitionEnd(i.TRANSITION_DURATION)
                [s](this.$element[0][l]);
            }
          }
        }
      }),
      (i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var t = e.Event("hide.bs.collapse");
          if ((this.$element.trigger(t), !t.isDefaultPrevented())) {
            var n = this.dimension();
            this.$element[n](this.$element[n]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var o = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return e.support.transition
              ? void this.$element[n](0)
                  .one("bsTransitionEnd", e.proxy(o, this))
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : o.call(this);
          }
        }
      }),
      (i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (i.prototype.getParent = function () {
        return e(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            e.proxy(function (n, i) {
              var o = e(i);
              this.addAriaAndCollapsedClass(t(o), o);
            }, this)
          )
          .end();
      }),
      (i.prototype.addAriaAndCollapsedClass = function (e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n),
          t.toggleClass("collapsed", !n).attr("aria-expanded", n);
      });
    var o = e.fn.collapse;
    (e.fn.collapse = n),
      (e.fn.collapse.Constructor = i),
      (e.fn.collapse.noConflict = function () {
        return (e.fn.collapse = o), this;
      }),
      e(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (i) {
          var o = e(this);
          o.attr("data-target") || i.preventDefault();
          var r = t(o),
            s = r.data("bs.collapse"),
            a = s ? "toggle" : o.data();
          n.call(r, a);
        }
      );
  })(jQuery),
  +(function (e) {
    "use strict";
    function t(t) {
      var n = t.attr("data-target");
      n ||
        ((n = t.attr("href")),
        (n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")));
      var i = n && e(n);
      return i && i.length ? i : t.parent();
    }
    function n(n) {
      (n && 3 === n.which) ||
        (e(o).remove(),
        e(r).each(function () {
          var i = e(this),
            o = t(i),
            r = { relatedTarget: this };
          o.hasClass("open") &&
            ((n &&
              "click" == n.type &&
              /input|textarea/i.test(n.target.tagName) &&
              e.contains(o[0], n.target)) ||
              (o.trigger((n = e.Event("hide.bs.dropdown", r))),
              n.isDefaultPrevented() ||
                (i.attr("aria-expanded", "false"),
                o
                  .removeClass("open")
                  .trigger(e.Event("hidden.bs.dropdown", r)))));
        }));
    }
    function i(t) {
      return this.each(function () {
        var n = e(this),
          i = n.data("bs.dropdown");
        i || n.data("bs.dropdown", (i = new s(this))),
          "string" == typeof t && i[t].call(n);
      });
    }
    var o = ".dropdown-backdrop",
      r = '[data-toggle="dropdown"]',
      s = function (t) {
        e(t).on("click.bs.dropdown", this.toggle);
      };
    (s.VERSION = "3.3.7"),
      (s.prototype.toggle = function (i) {
        var o = e(this);
        if (!o.is(".disabled, :disabled")) {
          var r = t(o),
            s = r.hasClass("open");
          if ((n(), !s)) {
            "ontouchstart" in document.documentElement &&
              !r.closest(".navbar-nav").length &&
              e(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(e(this))
                .on("click", n);
            var a = { relatedTarget: this };
            if (
              (r.trigger((i = e.Event("show.bs.dropdown", a))),
              i.isDefaultPrevented())
            )
              return;
            o.trigger("focus").attr("aria-expanded", "true"),
              r.toggleClass("open").trigger(e.Event("shown.bs.dropdown", a));
          }
          return !1;
        }
      }),
      (s.prototype.keydown = function (n) {
        if (
          /(38|40|27|32)/.test(n.which) &&
          !/input|textarea/i.test(n.target.tagName)
        ) {
          var i = e(this);
          if (
            (n.preventDefault(),
            n.stopPropagation(),
            !i.is(".disabled, :disabled"))
          ) {
            var o = t(i),
              s = o.hasClass("open");
            if ((!s && 27 != n.which) || (s && 27 == n.which))
              return (
                27 == n.which && o.find(r).trigger("focus"), i.trigger("click")
              );
            var a = " li:not(.disabled):visible a",
              l = o.find(".dropdown-menu" + a);
            if (l.length) {
              var c = l.index(n.target);
              38 == n.which && c > 0 && c--,
                40 == n.which && c < l.length - 1 && c++,
                ~c || (c = 0),
                l.eq(c).trigger("focus");
            }
          }
        }
      });
    var a = e.fn.dropdown;
    (e.fn.dropdown = i),
      (e.fn.dropdown.Constructor = s),
      (e.fn.dropdown.noConflict = function () {
        return (e.fn.dropdown = a), this;
      }),
      e(document)
        .on("click.bs.dropdown.data-api", n)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
          e.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", r, s.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", r, s.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          s.prototype.keydown
        );
  })(jQuery),
  +(function (e) {
    "use strict";
    function t(t, i) {
      return this.each(function () {
        var o = e(this),
          r = o.data("bs.modal"),
          s = e.extend({}, n.DEFAULTS, o.data(), "object" == typeof t && t);
        r || o.data("bs.modal", (r = new n(this, s))),
          "string" == typeof t ? r[t](i) : s.show && r.show(i);
      });
    }
    var n = function (t, n) {
      (this.options = n),
        (this.$body = e(document.body)),
        (this.$element = e(t)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            e.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (n.VERSION = "3.3.7"),
      (n.TRANSITION_DURATION = 300),
      (n.BACKDROP_TRANSITION_DURATION = 150),
      (n.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (n.prototype.toggle = function (e) {
        return this.isShown ? this.hide() : this.show(e);
      }),
      (n.prototype.show = function (t) {
        var i = this,
          o = e.Event("show.bs.modal", { relatedTarget: t });
        this.$element.trigger(o),
          this.isShown ||
            o.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              e.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              i.$element.one("mouseup.dismiss.bs.modal", function (t) {
                e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var o = e.support.transition && i.$element.hasClass("fade");
              i.$element.parent().length || i.$element.appendTo(i.$body),
                i.$element.show().scrollTop(0),
                i.adjustDialog(),
                o && i.$element[0].offsetWidth,
                i.$element.addClass("in"),
                i.enforceFocus();
              var r = e.Event("shown.bs.modal", { relatedTarget: t });
              o
                ? i.$dialog
                    .one("bsTransitionEnd", function () {
                      i.$element.trigger("focus").trigger(r);
                    })
                    .emulateTransitionEnd(n.TRANSITION_DURATION)
                : i.$element.trigger("focus").trigger(r);
            }));
      }),
      (n.prototype.hide = function (t) {
        t && t.preventDefault(),
          (t = e.Event("hide.bs.modal")),
          this.$element.trigger(t),
          this.isShown &&
            !t.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            e(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            e.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", e.proxy(this.hideModal, this))
                  .emulateTransitionEnd(n.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (n.prototype.enforceFocus = function () {
        e(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            e.proxy(function (e) {
              document === e.target ||
                this.$element[0] === e.target ||
                this.$element.has(e.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (n.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              e.proxy(function (e) {
                27 == e.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (n.prototype.resize = function () {
        this.isShown
          ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this))
          : e(window).off("resize.bs.modal");
      }),
      (n.prototype.hideModal = function () {
        var e = this;
        this.$element.hide(),
          this.backdrop(function () {
            e.$body.removeClass("modal-open"),
              e.resetAdjustments(),
              e.resetScrollbar(),
              e.$element.trigger("hidden.bs.modal");
          });
      }),
      (n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (n.prototype.backdrop = function (t) {
        var i = this,
          o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var r = e.support.transition && o;
          if (
            ((this.$backdrop = e(document.createElement("div"))
              .addClass("modal-backdrop " + o)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              e.proxy(function (e) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      e.target === e.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            r && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !t)
          )
            return;
          r
            ? this.$backdrop
                .one("bsTransitionEnd", t)
                .emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION)
            : t();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var s = function () {
            i.removeBackdrop(), t && t();
          };
          e.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", s)
                .emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION)
            : s();
        } else t && t();
      }),
      (n.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (n.prototype.adjustDialog = function () {
        var e =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : "",
        });
      }),
      (n.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (n.prototype.checkScrollbar = function () {
        var e = window.innerWidth;
        if (!e) {
          var t = document.documentElement.getBoundingClientRect();
          e = t.right - Math.abs(t.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < e),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (n.prototype.setScrollbar = function () {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", e + this.scrollbarWidth);
      }),
      (n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (n.prototype.measureScrollbar = function () {
        var e = document.createElement("div");
        (e.className = "modal-scrollbar-measure"), this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t;
      });
    var i = e.fn.modal;
    (e.fn.modal = t),
      (e.fn.modal.Constructor = n),
      (e.fn.modal.noConflict = function () {
        return (e.fn.modal = i), this;
      }),
      e(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (n) {
          var i = e(this),
            o = i.attr("href"),
            r = e(
              i.attr("data-target") || (o && o.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            s = r.data("bs.modal")
              ? "toggle"
              : e.extend({ remote: !/#/.test(o) && o }, r.data(), i.data());
          i.is("a") && n.preventDefault(),
            r.one("show.bs.modal", function (e) {
              e.isDefaultPrevented() ||
                r.one("hidden.bs.modal", function () {
                  i.is(":visible") && i.trigger("focus");
                });
            }),
            t.call(r, s, this);
        }
      );
  })(jQuery),
  +(function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var i = e(this),
          o = i.data("bs.tab");
        o || i.data("bs.tab", (o = new n(this))),
          "string" == typeof t && o[t]();
      });
    }
    var n = function (t) {
      this.element = e(t);
    };
    (n.VERSION = "3.3.7"),
      (n.TRANSITION_DURATION = 150),
      (n.prototype.show = function () {
        var t = this.element,
          n = t.closest("ul:not(.dropdown-menu)"),
          i = t.data("target");
        if (
          (i ||
            ((i = t.attr("href")), (i = i && i.replace(/.*(?=#[^\s]*$)/, ""))),
          !t.parent("li").hasClass("active"))
        ) {
          var o = n.find(".active:last a"),
            r = e.Event("hide.bs.tab", { relatedTarget: t[0] }),
            s = e.Event("show.bs.tab", { relatedTarget: o[0] });
          if (
            (o.trigger(r),
            t.trigger(s),
            !s.isDefaultPrevented() && !r.isDefaultPrevented())
          ) {
            var a = e(i);
            this.activate(t.closest("li"), n),
              this.activate(a, a.parent(), function () {
                o.trigger({ type: "hidden.bs.tab", relatedTarget: t[0] }),
                  t.trigger({ type: "shown.bs.tab", relatedTarget: o[0] });
              });
          }
        }
      }),
      (n.prototype.activate = function (t, i, o) {
        function r() {
          s
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            t
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            a ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"),
            t.parent(".dropdown-menu").length &&
              t
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            o && o();
        }
        var s = i.find("> .active"),
          a =
            o &&
            e.support.transition &&
            ((s.length && s.hasClass("fade")) || !!i.find("> .fade").length);
        s.length && a
          ? s
              .one("bsTransitionEnd", r)
              .emulateTransitionEnd(n.TRANSITION_DURATION)
          : r(),
          s.removeClass("in");
      });
    var i = e.fn.tab;
    (e.fn.tab = t),
      (e.fn.tab.Constructor = n),
      (e.fn.tab.noConflict = function () {
        return (e.fn.tab = i), this;
      });
    var o = function (n) {
      n.preventDefault(), t.call(e(this), "show");
    };
    e(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', o)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', o);
  })(jQuery),
  +(function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var i = e(this),
          o = i.data("bs.tooltip"),
          r = "object" == typeof t && t;
        (!o && /destroy|hide/.test(t)) ||
          (o || i.data("bs.tooltip", (o = new n(this, r))),
          "string" == typeof t && o[t]());
      });
    }
    var n = function (e, t) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", e, t);
    };
    (n.VERSION = "3.3.7"),
      (n.TRANSITION_DURATION = 150),
      (n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (n.prototype.init = function (t, n, i) {
        if (
          ((this.enabled = !0),
          (this.type = t),
          (this.$element = e(n)),
          (this.options = this.getOptions(i)),
          (this.$viewport =
            this.options.viewport &&
            e(
              e.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var o = this.options.trigger.split(" "), r = o.length; r--; ) {
          var s = o[r];
          if ("click" == s)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              e.proxy(this.toggle, this)
            );
          else if ("manual" != s) {
            var a = "hover" == s ? "mouseenter" : "focusin",
              l = "hover" == s ? "mouseleave" : "focusout";
            this.$element.on(
              a + "." + this.type,
              this.options.selector,
              e.proxy(this.enter, this)
            ),
              this.$element.on(
                l + "." + this.type,
                this.options.selector,
                e.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = e.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (n.prototype.getDefaults = function () {
        return n.DEFAULTS;
      }),
      (n.prototype.getOptions = function (t) {
        return (
          (t = e.extend({}, this.getDefaults(), this.$element.data(), t)),
          t.delay &&
            "number" == typeof t.delay &&
            (t.delay = { show: t.delay, hide: t.delay }),
          t
        );
      }),
      (n.prototype.getDelegateOptions = function () {
        var t = {},
          n = this.getDefaults();
        return (
          this._options &&
            e.each(this._options, function (e, i) {
              n[e] != i && (t[e] = i);
            }),
          t
        );
      }),
      (n.prototype.enter = function (t) {
        var n =
          t instanceof this.constructor
            ? t
            : e(t.currentTarget).data("bs." + this.type);
        return (
          n ||
            ((n = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            e(t.currentTarget).data("bs." + this.type, n)),
          t instanceof e.Event &&
            (n.inState["focusin" == t.type ? "focus" : "hover"] = !0),
          n.tip().hasClass("in") || "in" == n.hoverState
            ? void (n.hoverState = "in")
            : (clearTimeout(n.timeout),
              (n.hoverState = "in"),
              n.options.delay && n.options.delay.show
                ? void (n.timeout = setTimeout(function () {
                    "in" == n.hoverState && n.show();
                  }, n.options.delay.show))
                : n.show())
        );
      }),
      (n.prototype.isInStateTrue = function () {
        for (var e in this.inState) if (this.inState[e]) return !0;
        return !1;
      }),
      (n.prototype.leave = function (t) {
        var n =
          t instanceof this.constructor
            ? t
            : e(t.currentTarget).data("bs." + this.type);
        return (
          n ||
            ((n = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            e(t.currentTarget).data("bs." + this.type, n)),
          t instanceof e.Event &&
            (n.inState["focusout" == t.type ? "focus" : "hover"] = !1),
          n.isInStateTrue()
            ? void 0
            : (clearTimeout(n.timeout),
              (n.hoverState = "out"),
              n.options.delay && n.options.delay.hide
                ? void (n.timeout = setTimeout(function () {
                    "out" == n.hoverState && n.hide();
                  }, n.options.delay.hide))
                : n.hide())
        );
      }),
      (n.prototype.show = function () {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(t);
          var i = e.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (t.isDefaultPrevented() || !i) return;
          var o = this,
            r = this.tip(),
            s = this.getUID(this.type);
          this.setContent(),
            r.attr("id", s),
            this.$element.attr("aria-describedby", s),
            this.options.animation && r.addClass("fade");
          var a =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, r[0], this.$element[0])
                : this.options.placement,
            l = /\s?auto?\s?/i,
            c = l.test(a);
          c && (a = a.replace(l, "") || "top"),
            r
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(a)
              .data("bs." + this.type, this),
            this.options.container
              ? r.appendTo(this.options.container)
              : r.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var d = this.getPosition(),
            u = r[0].offsetWidth,
            p = r[0].offsetHeight;
          if (c) {
            var f = a,
              h = this.getPosition(this.$viewport);
            (a =
              "bottom" == a && d.bottom + p > h.bottom
                ? "top"
                : "top" == a && d.top - p < h.top
                ? "bottom"
                : "right" == a && d.right + u > h.width
                ? "left"
                : "left" == a && d.left - u < h.left
                ? "right"
                : a),
              r.removeClass(f).addClass(a);
          }
          var m = this.getCalculatedOffset(a, d, u, p);
          this.applyPlacement(m, a);
          var g = function () {
            var e = o.hoverState;
            o.$element.trigger("shown.bs." + o.type),
              (o.hoverState = null),
              "out" == e && o.leave(o);
          };
          e.support.transition && this.$tip.hasClass("fade")
            ? r
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(n.TRANSITION_DURATION)
            : g();
        }
      }),
      (n.prototype.applyPlacement = function (t, n) {
        var i = this.tip(),
          o = i[0].offsetWidth,
          r = i[0].offsetHeight,
          s = parseInt(i.css("margin-top"), 10),
          a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0),
          isNaN(a) && (a = 0),
          (t.top += s),
          (t.left += a),
          e.offset.setOffset(
            i[0],
            e.extend(
              {
                using: function (e) {
                  i.css({ top: Math.round(e.top), left: Math.round(e.left) });
                },
              },
              t
            ),
            0
          ),
          i.addClass("in");
        var l = i[0].offsetWidth,
          c = i[0].offsetHeight;
        "top" == n && c != r && (t.top = t.top + r - c);
        var d = this.getViewportAdjustedDelta(n, t, l, c);
        d.left ? (t.left += d.left) : (t.top += d.top);
        var u = /top|bottom/.test(n),
          p = u ? 2 * d.left - o + l : 2 * d.top - r + c,
          f = u ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(p, i[0][f], u);
      }),
      (n.prototype.replaceArrow = function (e, t, n) {
        this.arrow()
          .css(n ? "left" : "top", 50 * (1 - e / t) + "%")
          .css(n ? "top" : "left", "");
      }),
      (n.prototype.setContent = function () {
        var e = this.tip(),
          t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t),
          e.removeClass("fade in top bottom left right");
      }),
      (n.prototype.hide = function (t) {
        function i() {
          "in" != o.hoverState && r.detach(),
            o.$element &&
              o.$element
                .removeAttr("aria-describedby")
                .trigger("hidden.bs." + o.type),
            t && t();
        }
        var o = this,
          r = e(this.$tip),
          s = e.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(s),
          s.isDefaultPrevented()
            ? void 0
            : (r.removeClass("in"),
              e.support.transition && r.hasClass("fade")
                ? r
                    .one("bsTransitionEnd", i)
                    .emulateTransitionEnd(n.TRANSITION_DURATION)
                : i(),
              (this.hoverState = null),
              this)
        );
      }),
      (n.prototype.fixTitle = function () {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) &&
          e
            .attr("data-original-title", e.attr("title") || "")
            .attr("title", "");
      }),
      (n.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (n.prototype.getPosition = function (t) {
        t = t || this.$element;
        var n = t[0],
          i = "BODY" == n.tagName,
          o = n.getBoundingClientRect();
        null == o.width &&
          (o = e.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top,
          }));
        var r = window.SVGElement && n instanceof window.SVGElement,
          s = i ? { top: 0, left: 0 } : r ? null : t.offset(),
          a = {
            scroll: i
              ? document.documentElement.scrollTop || document.body.scrollTop
              : t.scrollTop(),
          },
          l = i
            ? { width: e(window).width(), height: e(window).height() }
            : null;
        return e.extend({}, o, a, l, s);
      }),
      (n.prototype.getCalculatedOffset = function (e, t, n, i) {
        return "bottom" == e
          ? { top: t.top + t.height, left: t.left + t.width / 2 - n / 2 }
          : "top" == e
          ? { top: t.top - i, left: t.left + t.width / 2 - n / 2 }
          : "left" == e
          ? { top: t.top + t.height / 2 - i / 2, left: t.left - n }
          : { top: t.top + t.height / 2 - i / 2, left: t.left + t.width };
      }),
      (n.prototype.getViewportAdjustedDelta = function (e, t, n, i) {
        var o = { top: 0, left: 0 };
        if (!this.$viewport) return o;
        var r = (this.options.viewport && this.options.viewport.padding) || 0,
          s = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
          var a = t.top - r - s.scroll,
            l = t.top + r - s.scroll + i;
          a < s.top
            ? (o.top = s.top - a)
            : l > s.top + s.height && (o.top = s.top + s.height - l);
        } else {
          var c = t.left - r,
            d = t.left + r + n;
          c < s.left
            ? (o.left = s.left - c)
            : d > s.right && (o.left = s.left + s.width - d);
        }
        return o;
      }),
      (n.prototype.getTitle = function () {
        var e,
          t = this.$element,
          n = this.options;
        return (e =
          t.attr("data-original-title") ||
          ("function" == typeof n.title ? n.title.call(t[0]) : n.title));
      }),
      (n.prototype.getUID = function (e) {
        do e += ~~(1e6 * Math.random());
        while (document.getElementById(e));
        return e;
      }),
      (n.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = e(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (n.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (n.prototype.enable = function () {
        this.enabled = !0;
      }),
      (n.prototype.disable = function () {
        this.enabled = !1;
      }),
      (n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (n.prototype.toggle = function (t) {
        var n = this;
        t &&
          ((n = e(t.currentTarget).data("bs." + this.type)),
          n ||
            ((n = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            e(t.currentTarget).data("bs." + this.type, n))),
          t
            ? ((n.inState.click = !n.inState.click),
              n.isInStateTrue() ? n.enter(n) : n.leave(n))
            : n.tip().hasClass("in")
            ? n.leave(n)
            : n.enter(n);
      }),
      (n.prototype.destroy = function () {
        var e = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            e.$element.off("." + e.type).removeData("bs." + e.type),
              e.$tip && e.$tip.detach(),
              (e.$tip = null),
              (e.$arrow = null),
              (e.$viewport = null),
              (e.$element = null);
          });
      });
    var i = e.fn.tooltip;
    (e.fn.tooltip = t),
      (e.fn.tooltip.Constructor = n),
      (e.fn.tooltip.noConflict = function () {
        return (e.fn.tooltip = i), this;
      });
  })(jQuery),
  +(function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var i = e(this),
          o = i.data("bs.popover"),
          r = "object" == typeof t && t;
        (!o && /destroy|hide/.test(t)) ||
          (o || i.data("bs.popover", (o = new n(this, r))),
          "string" == typeof t && o[t]());
      });
    }
    var n = function (e, t) {
      this.init("popover", e, t);
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (n.VERSION = "3.3.7"),
      (n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype)),
      (n.prototype.constructor = n),
      (n.prototype.getDefaults = function () {
        return n.DEFAULTS;
      }),
      (n.prototype.setContent = function () {
        var e = this.tip(),
          t = this.getTitle(),
          n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t),
          e
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof n
                  ? "html"
                  : "append"
                : "text"
            ](n),
          e.removeClass("fade top bottom left right in"),
          e.find(".popover-title").html() || e.find(".popover-title").hide();
      }),
      (n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (n.prototype.getContent = function () {
        var e = this.$element,
          t = this.options;
        return (
          e.attr("data-content") ||
          ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
        );
      }),
      (n.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var i = e.fn.popover;
    (e.fn.popover = t),
      (e.fn.popover.Constructor = n),
      (e.fn.popover.noConflict = function () {
        return (e.fn.popover = i), this;
      });
  })(jQuery),
  +(function (e) {
    "use strict";
    function t() {
      var e = document.createElement("bootstrap"),
        t = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var n in t) if (void 0 !== e.style[n]) return { end: t[n] };
      return !1;
    }
    (e.fn.emulateTransitionEnd = function (t) {
      var n = !1,
        i = this;
      e(this).one("bsTransitionEnd", function () {
        n = !0;
      });
      var o = function () {
        n || e(i).trigger(e.support.transition.end);
      };
      return setTimeout(o, t), this;
    }),
      e(function () {
        (e.support.transition = t()),
          e.support.transition &&
            (e.event.special.bsTransitionEnd = {
              bindType: e.support.transition.end,
              delegateType: e.support.transition.end,
              handle: function (t) {
                return e(t.target).is(this)
                  ? t.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery),
  (function (e, t) {
    var n,
      i = e.jQuery || e.Cowboy || (e.Cowboy = {});
    (i.throttle = n = function (e, n, o, r) {
      function s() {
        function i() {
          (l = +new Date()), o.apply(c, u);
        }
        function s() {
          a = t;
        }
        var c = this,
          d = +new Date() - l,
          u = arguments;
        r && !a && i(),
          a && clearTimeout(a),
          r === t && d > e
            ? i()
            : n !== !0 && (a = setTimeout(r ? s : i, r === t ? e - d : e));
      }
      var a,
        l = 0;
      return (
        "boolean" != typeof n && ((r = o), (o = n), (n = t)),
        i.guid && (s.guid = o.guid = o.guid || i.guid++),
        s
      );
    }),
      (i.debounce = function (e, i, o) {
        return o === t ? n(e, i, !1) : n(e, o, i !== !1);
      });
  })(this),
  !(function (e, t, n, i) {
    "use strict";
    function o(t, n) {
      this.element = t;
      var i = {};
      e.each(e(this.element).data(), function (e, t) {
        var n = function (e) {
            return e && e[0].toLowerCase() + e.slice(1);
          },
          o = n(e.replace("fluidbox", ""));
        ("" !== o || null !== o) &&
          ("false" == t ? (t = !1) : "true" == t && (t = !0), (i[o] = t));
      }),
        (this.settings = e.extend({}, a, n, i)),
        (this.settings.viewportFill = Math.max(
          Math.min(parseFloat(this.settings.viewportFill), 1),
          0
        )),
        this.settings.stackIndex < this.settings.stackIndexDelta &&
          (settings.stackIndexDelta = settings.stackIndex),
        (this._name = s),
        this.init();
    }
    var r = e(t),
      s = (e(n), "fluidbox"),
      a = {
        immediateOpen: !1,
        loader: !1,
        maxWidth: 0,
        maxHeight: 0,
        resizeThrottle: 500,
        stackIndex: 1e3,
        stackIndexDelta: 10,
        viewportFill: 0.95,
      },
      l = {},
      c = 0;
    ("undefined" == typeof console || "undefined" === console.warn) &&
      ((console = {}), (console.warn = function () {})),
      e.isFunction(e.throttle) ||
        console.warn(
          "Fluidbox: The jQuery debounce/throttle plugin is not found/loaded. Even though Fluidbox works without it, the window resize event will fire extremely rapidly in browsers, resulting in significant degradation in performance upon viewport resize."
        );
    var d = function () {
        var e,
          t = n.createElement("fakeelement"),
          o = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd",
          };
        for (e in o) if (t.style[e] !== i) return o[e];
      },
      u = d(),
      p = {
        dom: function () {
          var t = e("<div />", {
            class: "fluidbox__wrap",
            css: {
              zIndex: this.settings.stackIndex - this.settings.stackIndexDelta,
            },
          });
          if (
            (e(this.element)
              .addClass("fluidbox--closed")
              .wrapInner(t)
              .find("img")
              .first()
              .css({ opacity: 1 })
              .addClass("fluidbox__thumb")
              .after('<div class="fluidbox__ghost" />'),
            this.settings.loader)
          ) {
            var n = e("<div />", {
              class: "fluidbox__loader",
              css: { zIndex: 2 },
            });
            e(this.element).find(".fluidbox__wrap").append(n);
          }
        },
        prepareFb: function () {
          var t = this,
            n = e(this.element);
          n.trigger("thumbloaddone.fluidbox"),
            p.measure.fbElements.call(this),
            t.bindEvents(),
            n.addClass("fluidbox--ready"),
            t.bindListeners(),
            n.trigger("ready.fluidbox");
        },
        measure: {
          viewport: function () {
            l.viewport = { w: r.width(), h: r.height() };
          },
          fbElements: function () {
            var t = this,
              n = e(this.element),
              i = n.find("img").first(),
              o = n.find(".fluidbox__ghost"),
              r = n.find(".fluidbox__wrap");
            (t.instanceData.thumb = {
              natW: i[0].naturalWidth,
              natH: i[0].naturalHeight,
              w: i.width(),
              h: i.height(),
            }),
              o.css({
                width: i.width(),
                height: i.height(),
                top:
                  i.offset().top -
                  r.offset().top +
                  parseInt(i.css("borderTopWidth")) +
                  parseInt(i.css("paddingTop")),
                left:
                  i.offset().left -
                  r.offset().left +
                  parseInt(i.css("borderLeftWidth")) +
                  parseInt(i.css("paddingLeft")),
              });
          },
        },
        checkURL: function (e) {
          var t = 0;
          return (
            /[\s+]/g.test(e)
              ? (console.warn(
                  "Fluidbox: Fluidbox opening is halted because it has detected characters in your URL string that need to be properly encoded/escaped. Whitespace(s) have to be escaped manually. See RFC3986 documentation."
                ),
                (t = 1))
              : /[\"\'\(\)]/g.test(e) &&
                (console.warn(
                  "Fluidbox: Fluidbox opening will proceed, but it has detected characters in your URL string that need to be properly encoded/escaped. These will be escaped for you. See RFC3986 documentation."
                ),
                (t = 0)),
            t
          );
        },
        formatURL: function (e) {
          return e
            .replace(/"/g, "%22")
            .replace(/'/g, "%27")
            .replace(/\(/g, "%28")
            .replace(/\)/g, "%29");
        },
      };
    e.extend(o.prototype, {
      init: function () {
        var t = this,
          n = e(this.element),
          i = n.find("img").first();
        if (
          (p.measure.viewport(),
          (!t.instanceData || !t.instanceData.initialized) &&
            n.is("a") &&
            1 === n.children().length &&
            (n.children().is("img") ||
              (n.children().is("picture") && 1 === n.find("img").length)) &&
            "none" !== n.css("display") &&
            "none" !== n.children().css("display") &&
            "none" !== n.parents().css("display"))
        ) {
          n.removeClass("fluidbox--destroyed"),
            (t.instanceData = {}),
            (t.instanceData.initialized = !0),
            (t.instanceData.originalNode = n.html()),
            (c += 1),
            (t.instanceData.id = c),
            n.addClass("fluidbox__instance-" + c),
            n.addClass("fluidbox--initialized"),
            p.dom.call(t),
            n.trigger("init.fluidbox");
          var o = new Image();
          i.width() > 0 && i.height() > 0
            ? p.prepareFb.call(t)
            : ((o.onload = function () {
                p.prepareFb.call(t);
              }),
              (o.onerror = function () {
                n.trigger("thumbloadfail.fluidbox");
              }),
              (o.src = i.attr("src")));
        }
      },
      open: function () {
        var t = this,
          n = e(this.element),
          i = n.find("img").first(),
          o = n.find(".fluidbox__ghost"),
          r = n.find(".fluidbox__wrap");
        (t.instanceData.state = 1),
          o.off(u),
          e(".fluidbox--opened").fluidbox("close");
        var s = e("<div />", {
          class: "fluidbox__overlay",
          css: { zIndex: -1 },
        });
        if (
          (r.append(s),
          n.removeClass("fluidbox--closed").addClass("fluidbox--loading"),
          p.checkURL(i.attr("src")))
        )
          return t.close(), !1;
        o.css({
          "background-image": "url(" + p.formatURL(i.attr("src")) + ")",
          opacity: 1,
        }),
          p.measure.fbElements.call(t);
        var a;
        t.settings.immediateOpen
          ? (n
              .addClass("fluidbox--opened fluidbox--loaded")
              .find(".fluidbox__wrap")
              .css({
                zIndex: t.settings.stackIndex + t.settings.stackIndexDelta,
              }),
            n.trigger("openstart.fluidbox"),
            t.compute(),
            i.css({ opacity: 0 }),
            e(".fluidbox__overlay").css({ opacity: 1 }),
            o.one(u, function () {
              n.trigger("openend.fluidbox");
            }),
            (a = new Image()),
            (a.onload = function () {
              if (
                (n.trigger("imageloaddone.fluidbox"),
                1 === t.instanceData.state)
              ) {
                if (
                  ((t.instanceData.thumb.natW = a.naturalWidth),
                  (t.instanceData.thumb.natH = a.naturalHeight),
                  n.removeClass("fluidbox--loading"),
                  p.checkURL(a.src))
                )
                  return t.close({ error: !0 }), !1;
                o.css({
                  "background-image": "url(" + p.formatURL(a.src) + ")",
                }),
                  t.compute();
              }
            }),
            (a.onerror = function () {
              t.close({ error: !0 }),
                n.trigger("imageloadfail.fluidbox"),
                n.trigger("delayedloadfail.fluidbox");
            }),
            (a.src = n.attr("href")))
          : ((a = new Image()),
            (a.onload = function () {
              return (
                n.trigger("imageloaddone.fluidbox"),
                n
                  .removeClass("fluidbox--loading")
                  .addClass("fluidbox--opened fluidbox--loaded")
                  .find(".fluidbox__wrap")
                  .css({
                    zIndex: t.settings.stackIndex + t.settings.stackIndexDelta,
                  }),
                n.trigger("openstart.fluidbox"),
                p.checkURL(a.src)
                  ? (t.close({ error: !0 }), !1)
                  : (o.css({
                      "background-image": "url(" + p.formatURL(a.src) + ")",
                    }),
                    (t.instanceData.thumb.natW = a.naturalWidth),
                    (t.instanceData.thumb.natH = a.naturalHeight),
                    t.compute(),
                    i.css({ opacity: 0 }),
                    e(".fluidbox__overlay").css({ opacity: 1 }),
                    void o.one(u, function () {
                      n.trigger("openend.fluidbox");
                    }))
              );
            }),
            (a.onerror = function () {
              t.close({ error: !0 }), n.trigger("imageloadfail.fluidbox");
            }),
            (a.src = n.attr("href")));
      },
      compute: function () {
        var t = this,
          n = e(this.element),
          i = n.find("img").first(),
          o = n.find(".fluidbox__ghost"),
          s = n.find(".fluidbox__wrap"),
          a = t.instanceData.thumb.natW,
          c = t.instanceData.thumb.natH,
          d = t.instanceData.thumb.w,
          u = t.instanceData.thumb.h,
          p = a / c,
          f = l.viewport.w / l.viewport.h;
        t.settings.maxWidth > 0
          ? ((a = t.settings.maxWidth), (c = a / p))
          : t.settings.maxHeight > 0 &&
            ((c = t.settings.maxHeight), (a = c * p));
        var h, m, g, v, b;
        f > p
          ? ((h =
              c < l.viewport.h ? c : l.viewport.h * t.settings.viewportFill),
            (g = h / u),
            (v = (a * ((u * g) / c)) / d),
            (b = g))
          : ((m =
              a < l.viewport.w ? a : l.viewport.w * t.settings.viewportFill),
            (v = m / d),
            (g = (c * ((d * v) / a)) / u),
            (b = v)),
          t.settings.maxWidth &&
            t.settings.maxHeight &&
            console.warn(
              "Fluidbox: Both maxHeight and maxWidth are specified. You can only specify one. If both are specified, only the maxWidth property will be respected. This will not generate any error, but may cause unexpected sizing behavior."
            );
        var y =
            r.scrollTop() -
            i.offset().top +
            0.5 * (u * (b - 1)) +
            0.5 * (r.height() - u * b),
          w = 0.5 * (d * (b - 1)) + 0.5 * (r.width() - d * b) - i.offset().left,
          x = parseInt(100 * v) / 100 + "," + parseInt(100 * g) / 100;
        o.css({
          transform:
            "translate(" +
            parseInt(100 * w) / 100 +
            "px," +
            parseInt(100 * y) / 100 +
            "px) scale(" +
            x +
            ")",
          top: i.offset().top - s.offset().top,
          left: i.offset().left - s.offset().left,
        }),
          n
            .find(".fluidbox__loader")
            .css({
              transform:
                "translate(" +
                parseInt(100 * w) / 100 +
                "px," +
                parseInt(100 * y) / 100 +
                "px) scale(" +
                x +
                ")",
            }),
          n.trigger("computeend.fluidbox");
      },
      recompute: function () {
        this.compute();
      },
      close: function (t) {
        var n = this,
          o = e(this.element),
          r = o.find("img").first(),
          s = o.find(".fluidbox__ghost"),
          a = o.find(".fluidbox__wrap"),
          l = o.find(".fluidbox__overlay"),
          c = e.extend(null, { error: !1 }, t);
        return null === n.instanceData.state ||
          typeof n.instanceData.state == typeof i ||
          0 === n.instanceData.state
          ? !1
          : ((n.instanceData.state = 0),
            o.trigger("closestart.fluidbox"),
            o
              .removeClass(function (e, t) {
                return (
                  t.match(/(^|\s)fluidbox--(opened|loaded|loading)+/g) || []
                ).join(" ");
              })
              .addClass("fluidbox--closed"),
            s.css({
              transform: "translate(0,0) scale(1,1)",
              top:
                r.offset().top -
                a.offset().top +
                parseInt(r.css("borderTopWidth")) +
                parseInt(r.css("paddingTop")),
              left:
                r.offset().left -
                a.offset().left +
                parseInt(r.css("borderLeftWidth")) +
                parseInt(r.css("paddingLeft")),
            }),
            o.find(".fluidbox__loader").css({ transform: "none" }),
            s.one(u, function () {
              s.css({ opacity: 0 }),
                r.css({ opacity: 1 }),
                l.remove(),
                a.css({
                  zIndex: n.settings.stackIndex - n.settings.stackIndexDelta,
                }),
                o.trigger("closeend.fluidbox");
            }),
            c.error && s.trigger("transitionend"),
            void l.css({ opacity: 0 }));
      },
      bindEvents: function () {
        var t = this,
          n = e(this.element);
        n.on("click.fluidbox", function (e) {
          e.preventDefault(),
            t.instanceData.state && 0 !== t.instanceData.state
              ? t.close()
              : t.open();
        });
      },
      bindListeners: function () {
        var t = this,
          n = e(this.element),
          i = function () {
            p.measure.viewport(),
              p.measure.fbElements.call(t),
              n.hasClass("fluidbox--opened") && t.compute();
          };
        e.isFunction(e.throttle)
          ? r.on(
              "resize.fluidbox" + t.instanceData.id,
              e.throttle(t.settings.resizeThrottle, i)
            )
          : r.on("resize.fluidbox" + t.instanceData.id, i),
          n.on("reposition.fluidbox", function () {
            t.reposition();
          }),
          n.on("recompute.fluidbox, compute.fluidbox", function () {
            t.compute();
          }),
          n.on("destroy.fluidbox", function () {
            t.destroy();
          }),
          n.on("close.fluidbox", function () {
            t.close();
          });
      },
      unbind: function () {
        e(this.element).off(
          "click.fluidbox reposition.fluidbox recompute.fluidbox compute.fluidbox destroy.fluidbox close.fluidbox"
        ),
          r.off("resize.fluidbox" + this.instanceData.id);
      },
      reposition: function () {
        p.measure.fbElements.call(this);
      },
      destroy: function () {
        var t = this.instanceData.originalNode;
        this.unbind(),
          e.data(this.element, "plugin_" + s, null),
          e(this.element)
            .removeClass(function (e, t) {
              return (t.match(/(^|\s)fluidbox[--|__]\S+/g) || []).join(" ");
            })
            .empty()
            .html(t)
            .addClass("fluidbox--destroyed")
            .trigger("destroyed.fluidbox");
      },
      getMetadata: function () {
        return this.instanceData;
      },
    }),
      (e.fn[s] = function (t) {
        var n = arguments;
        if (t === i || "object" == typeof t)
          return this.each(function () {
            e.data(this, "plugin_" + s) ||
              e.data(this, "plugin_" + s, new o(this, t));
          });
        if ("string" == typeof t && "_" !== t[0] && "init" !== t) {
          var r;
          return (
            this.each(function () {
              var i = e.data(this, "plugin_" + s);
              i instanceof o && "function" == typeof i[t]
                ? (r = i[t].apply(i, Array.prototype.slice.call(n, 1)))
                : console.warn(
                    'Fluidbox: The method "' +
                      t +
                      '" used is not defined in Fluidbox. Please make sure you are calling the correct public method.'
                  );
            }),
            r !== i ? r : this
          );
        }
        return this;
      });
  })(jQuery, window, document),
  (function (e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "undefined" != typeof exports
      ? (module.exports = e(require("jquery")))
      : e(jQuery);
  })(function (e) {
    "use strict";
    var t = window.Slick || {};
    (t = (function () {
      function t(t, i) {
        var o,
          r = this;
        (r.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: e(t),
          appendDots: e(t),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
          nextArrow:
            '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (e, t) {
            return (
              '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' +
              (t + 1) +
              "</button>"
            );
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !1,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (r.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          e.extend(r, r.initials),
          (r.activeBreakpoint = null),
          (r.animType = null),
          (r.animProp = null),
          (r.breakpoints = []),
          (r.breakpointSettings = []),
          (r.cssTransitions = !1),
          (r.hidden = "hidden"),
          (r.paused = !1),
          (r.positionProp = null),
          (r.respondTo = null),
          (r.rowCount = 1),
          (r.shouldClick = !0),
          (r.$slider = e(t)),
          (r.$slidesCache = null),
          (r.transformType = null),
          (r.transitionType = null),
          (r.visibilityChange = "visibilitychange"),
          (r.windowWidth = 0),
          (r.windowTimer = null),
          (o = e(t).data("slick") || {}),
          (r.options = e.extend({}, r.defaults, o, i)),
          (r.currentSlide = r.options.initialSlide),
          (r.originalSettings = r.options),
          "undefined" != typeof document.mozHidden
            ? ((r.hidden = "mozHidden"),
              (r.visibilityChange = "mozvisibilitychange"))
            : "undefined" != typeof document.webkitHidden &&
              ((r.hidden = "webkitHidden"),
              (r.visibilityChange = "webkitvisibilitychange")),
          (r.autoPlay = e.proxy(r.autoPlay, r)),
          (r.autoPlayClear = e.proxy(r.autoPlayClear, r)),
          (r.changeSlide = e.proxy(r.changeSlide, r)),
          (r.clickHandler = e.proxy(r.clickHandler, r)),
          (r.selectHandler = e.proxy(r.selectHandler, r)),
          (r.setPosition = e.proxy(r.setPosition, r)),
          (r.swipeHandler = e.proxy(r.swipeHandler, r)),
          (r.dragHandler = e.proxy(r.dragHandler, r)),
          (r.keyHandler = e.proxy(r.keyHandler, r)),
          (r.autoPlayIterator = e.proxy(r.autoPlayIterator, r)),
          (r.instanceUid = n++),
          (r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          r.registerBreakpoints(),
          r.init(!0),
          r.checkResponsive(!0);
      }
      var n = 0;
      return t;
    })()),
      (t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
        var o = this;
        if ("boolean" == typeof n) (i = n), (n = null);
        else if (0 > n || n >= o.slideCount) return !1;
        o.unload(),
          "number" == typeof n
            ? 0 === n && 0 === o.$slides.length
              ? e(t).appendTo(o.$slideTrack)
              : i
              ? e(t).insertBefore(o.$slides.eq(n))
              : e(t).insertAfter(o.$slides.eq(n))
            : i === !0
            ? e(t).prependTo(o.$slideTrack)
            : e(t).appendTo(o.$slideTrack),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          o.$slides.each(function (t, n) {
            e(n).attr("data-slick-index", t);
          }),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
      (t.prototype.animateHeight = function () {
        var e = this;
        if (
          1 === e.options.slidesToShow &&
          e.options.adaptiveHeight === !0 &&
          e.options.vertical === !1
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.animate({ height: t }, e.options.speed);
        }
      }),
      (t.prototype.animateSlide = function (t, n) {
        var i = {},
          o = this;
        o.animateHeight(),
          o.options.rtl === !0 && o.options.vertical === !1 && (t = -t),
          o.transformsEnabled === !1
            ? o.options.vertical === !1
              ? o.$slideTrack.animate(
                  { left: t },
                  o.options.speed,
                  o.options.easing,
                  n
                )
              : o.$slideTrack.animate(
                  { top: t },
                  o.options.speed,
                  o.options.easing,
                  n
                )
            : o.cssTransitions === !1
            ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft),
              e({ animStart: o.currentLeft }).animate(
                { animStart: t },
                {
                  duration: o.options.speed,
                  easing: o.options.easing,
                  step: function (e) {
                    (e = Math.ceil(e)),
                      o.options.vertical === !1
                        ? ((i[o.animType] = "translate(" + e + "px, 0px)"),
                          o.$slideTrack.css(i))
                        : ((i[o.animType] = "translate(0px," + e + "px)"),
                          o.$slideTrack.css(i));
                  },
                  complete: function () {
                    n && n.call();
                  },
                }
              ))
            : (o.applyTransition(),
              (t = Math.ceil(t)),
              o.options.vertical === !1
                ? (i[o.animType] = "translate3d(" + t + "px, 0px, 0px)")
                : (i[o.animType] = "translate3d(0px," + t + "px, 0px)"),
              o.$slideTrack.css(i),
              n &&
                setTimeout(function () {
                  o.disableTransition(), n.call();
                }, o.options.speed));
      }),
      (t.prototype.asNavFor = function (t) {
        var n = this,
          i = n.options.asNavFor;
        i && null !== i && (i = e(i).not(n.$slider)),
          null !== i &&
            "object" == typeof i &&
            i.each(function () {
              var n = e(this).slick("getSlick");
              n.unslicked || n.slideHandler(t, !0);
            });
      }),
      (t.prototype.applyTransition = function (e) {
        var t = this,
          n = {};
        t.options.fade === !1
          ? (n[t.transitionType] =
              t.transformType +
              " " +
              t.options.speed +
              "ms " +
              t.options.cssEase)
          : (n[t.transitionType] =
              "opacity " + t.options.speed + "ms " + t.options.cssEase),
          t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (t.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer),
          e.slideCount > e.options.slidesToShow &&
            e.paused !== !0 &&
            (e.autoPlayTimer = setInterval(
              e.autoPlayIterator,
              e.options.autoplaySpeed
            ));
      }),
      (t.prototype.autoPlayClear = function () {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer);
      }),
      (t.prototype.autoPlayIterator = function () {
        var e = this;
        e.options.infinite === !1
          ? 1 === e.direction
            ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0),
              e.slideHandler(e.currentSlide + e.options.slidesToScroll))
            : (e.currentSlide - 1 === 0 && (e.direction = 1),
              e.slideHandler(e.currentSlide - e.options.slidesToScroll))
          : e.slideHandler(e.currentSlide + e.options.slidesToScroll);
      }),
      (t.prototype.buildArrows = function () {
        var t = this;
        t.options.arrows === !0 &&
          ((t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow")),
          (t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow")),
          t.slideCount > t.options.slidesToShow
            ? (t.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              t.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              t.htmlExpr.test(t.options.prevArrow) &&
                t.$prevArrow.prependTo(t.options.appendArrows),
              t.htmlExpr.test(t.options.nextArrow) &&
                t.$nextArrow.appendTo(t.options.appendArrows),
              t.options.infinite !== !0 &&
                t.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : t.$prevArrow
                .add(t.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (t.prototype.buildDots = function () {
        var t,
          n,
          i = this;
        if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
          for (
            n = '<ul class="' + i.options.dotsClass + '">', t = 0;
            t <= i.getDotCount();
            t += 1
          )
            n += "<li>" + i.options.customPaging.call(this, i, t) + "</li>";
          (n += "</ul>"),
            (i.$dots = e(n).appendTo(i.options.appendDots)),
            i.$dots
              .find("li")
              .first()
              .addClass("slick-active")
              .attr("aria-hidden", "false");
        }
      }),
      (t.prototype.buildOut = function () {
        var t = this;
        (t.$slides = t.$slider
          .children(t.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.$slides.each(function (t, n) {
            e(n)
              .attr("data-slick-index", t)
              .data("originalStyling", e(n).attr("style") || "");
          }),
          t.$slider.addClass("slick-slider"),
          (t.$slideTrack =
            0 === t.slideCount
              ? e('<div class="slick-track"/>').appendTo(t.$slider)
              : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (t.$list = t.$slideTrack
            .wrap('<div aria-live="polite" class="slick-list"/>')
            .parent()),
          t.$slideTrack.css("opacity", 0),
          (t.options.centerMode !== !0 && t.options.swipeToSlide !== !0) ||
            (t.options.slidesToScroll = 1),
          e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
          t.setupInfinite(),
          t.buildArrows(),
          t.buildDots(),
          t.updateDots(),
          t.setSlideClasses(
            "number" == typeof t.currentSlide ? t.currentSlide : 0
          ),
          t.options.draggable === !0 && t.$list.addClass("draggable");
      }),
      (t.prototype.buildRows = function () {
        var e,
          t,
          n,
          i,
          o,
          r,
          s,
          a = this;
        if (
          ((i = document.createDocumentFragment()),
          (r = a.$slider.children()),
          a.options.rows > 1)
        ) {
          for (
            s = a.options.slidesPerRow * a.options.rows,
              o = Math.ceil(r.length / s),
              e = 0;
            o > e;
            e++
          ) {
            var l = document.createElement("div");
            for (t = 0; t < a.options.rows; t++) {
              var c = document.createElement("div");
              for (n = 0; n < a.options.slidesPerRow; n++) {
                var d = e * s + (t * a.options.slidesPerRow + n);
                r.get(d) && c.appendChild(r.get(d));
              }
              l.appendChild(c);
            }
            i.appendChild(l);
          }
          a.$slider.html(i),
            a.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (t.prototype.checkResponsive = function (t, n) {
        var i,
          o,
          r,
          s = this,
          a = !1,
          l = s.$slider.width(),
          c = window.innerWidth || e(window).width();
        if (
          ("window" === s.respondTo
            ? (r = c)
            : "slider" === s.respondTo
            ? (r = l)
            : "min" === s.respondTo && (r = Math.min(c, l)),
          s.options.responsive &&
            s.options.responsive.length &&
            null !== s.options.responsive)
        ) {
          o = null;
          for (i in s.breakpoints)
            s.breakpoints.hasOwnProperty(i) &&
              (s.originalSettings.mobileFirst === !1
                ? r < s.breakpoints[i] && (o = s.breakpoints[i])
                : r > s.breakpoints[i] && (o = s.breakpoints[i]));
          null !== o
            ? null !== s.activeBreakpoint
              ? (o !== s.activeBreakpoint || n) &&
                ((s.activeBreakpoint = o),
                "unslick" === s.breakpointSettings[o]
                  ? s.unslick(o)
                  : ((s.options = e.extend(
                      {},
                      s.originalSettings,
                      s.breakpointSettings[o]
                    )),
                    t === !0 && (s.currentSlide = s.options.initialSlide),
                    s.refresh(t)),
                (a = o))
              : ((s.activeBreakpoint = o),
                "unslick" === s.breakpointSettings[o]
                  ? s.unslick(o)
                  : ((s.options = e.extend(
                      {},
                      s.originalSettings,
                      s.breakpointSettings[o]
                    )),
                    t === !0 && (s.currentSlide = s.options.initialSlide),
                    s.refresh(t)),
                (a = o))
            : null !== s.activeBreakpoint &&
              ((s.activeBreakpoint = null),
              (s.options = s.originalSettings),
              t === !0 && (s.currentSlide = s.options.initialSlide),
              s.refresh(t),
              (a = o)),
            t || a === !1 || s.$slider.trigger("breakpoint", [s, a]);
        }
      }),
      (t.prototype.changeSlide = function (t, n) {
        var i,
          o,
          r,
          s = this,
          a = e(t.target);
        switch (
          (a.is("a") && t.preventDefault(),
          a.is("li") || (a = a.closest("li")),
          (r = s.slideCount % s.options.slidesToScroll !== 0),
          (i = r
            ? 0
            : (s.slideCount - s.currentSlide) % s.options.slidesToScroll),
          t.data.message)
        ) {
          case "previous":
            (o =
              0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i),
              s.slideCount > s.options.slidesToShow &&
                s.slideHandler(s.currentSlide - o, !1, n);
            break;
          case "next":
            (o = 0 === i ? s.options.slidesToScroll : i),
              s.slideCount > s.options.slidesToShow &&
                s.slideHandler(s.currentSlide + o, !1, n);
            break;
          case "index":
            var l =
              0 === t.data.index
                ? 0
                : t.data.index || a.index() * s.options.slidesToScroll;
            s.slideHandler(s.checkNavigable(l), !1, n),
              a.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (t.prototype.checkNavigable = function (e) {
        var t,
          n,
          i = this;
        if (((t = i.getNavigableIndexes()), (n = 0), e > t[t.length - 1]))
          e = t[t.length - 1];
        else
          for (var o in t) {
            if (e < t[o]) {
              e = n;
              break;
            }
            n = t[o];
          }
        return e;
      }),
      (t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots &&
          null !== t.$dots &&
          (e("li", t.$dots).off("click.slick", t.changeSlide),
          t.options.pauseOnDotsHover === !0 &&
            t.options.autoplay === !0 &&
            e("li", t.$dots)
              .off("mouseenter.slick", e.proxy(t.setPaused, t, !0))
              .off("mouseleave.slick", e.proxy(t.setPaused, t, !1))),
          t.options.arrows === !0 &&
            t.slideCount > t.options.slidesToShow &&
            (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
            t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)),
          t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
          t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
          t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
          t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
          t.$list.off("click.slick", t.clickHandler),
          e(document).off(t.visibilityChange, t.visibility),
          t.$list.off("mouseenter.slick", e.proxy(t.setPaused, t, !0)),
          t.$list.off("mouseleave.slick", e.proxy(t.setPaused, t, !1)),
          t.options.accessibility === !0 &&
            t.$list.off("keydown.slick", t.keyHandler),
          t.options.focusOnSelect === !0 &&
            e(t.$slideTrack).children().off("click.slick", t.selectHandler),
          e(window).off(
            "orientationchange.slick.slick-" + t.instanceUid,
            t.orientationChange
          ),
          e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
          e("[draggable!=true]", t.$slideTrack).off(
            "dragstart",
            t.preventDefault
          ),
          e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition),
          e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition);
      }),
      (t.prototype.cleanUpRows = function () {
        var e,
          t = this;
        t.options.rows > 1 &&
          ((e = t.$slides.children().children()),
          e.removeAttr("style"),
          t.$slider.html(e));
      }),
      (t.prototype.clickHandler = function (e) {
        var t = this;
        t.shouldClick === !1 &&
          (e.stopImmediatePropagation(),
          e.stopPropagation(),
          e.preventDefault());
      }),
      (t.prototype.destroy = function (t) {
        var n = this;
        n.autoPlayClear(),
          (n.touchObject = {}),
          n.cleanUpEvents(),
          e(".slick-cloned", n.$slider).detach(),
          n.$dots && n.$dots.remove(),
          n.$prevArrow &&
            n.$prevArrow.length &&
            (n.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
          n.$nextArrow &&
            n.$nextArrow.length &&
            (n.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
          n.$slides &&
            (n.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                e(this).attr("style", e(this).data("originalStyling"));
              }),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.detach(),
            n.$list.detach(),
            n.$slider.append(n.$slides)),
          n.cleanUpRows(),
          n.$slider.removeClass("slick-slider"),
          n.$slider.removeClass("slick-initialized"),
          (n.unslicked = !0),
          t || n.$slider.trigger("destroy", [n]);
      }),
      (t.prototype.disableTransition = function (e) {
        var t = this,
          n = {};
        (n[t.transitionType] = ""),
          t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (t.prototype.fadeSlide = function (e, t) {
        var n = this;
        n.cssTransitions === !1
          ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }),
            n.$slides
              .eq(e)
              .animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
          : (n.applyTransition(e),
            n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
            t &&
              setTimeout(function () {
                n.disableTransition(e), t.call();
              }, n.options.speed));
      }),
      (t.prototype.fadeSlideOut = function (e) {
        var t = this;
        t.cssTransitions === !1
          ? t.$slides
              .eq(e)
              .animate(
                { opacity: 0, zIndex: t.options.zIndex - 2 },
                t.options.speed,
                t.options.easing
              )
          : (t.applyTransition(e),
            t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
      }),
      (t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
        var t = this;
        null !== e &&
          ((t.$slidesCache = t.$slides),
          t.unload(),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slidesCache.filter(e).appendTo(t.$slideTrack),
          t.reinit());
      }),
      (t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
        var e = this;
        return e.currentSlide;
      }),
      (t.prototype.getDotCount = function () {
        var e = this,
          t = 0,
          n = 0,
          i = 0;
        if (e.options.infinite === !0)
          for (; t < e.slideCount; )
            ++i,
              (t = n + e.options.slidesToScroll),
              (n +=
                e.options.slidesToScroll <= e.options.slidesToShow
                  ? e.options.slidesToScroll
                  : e.options.slidesToShow);
        else if (e.options.centerMode === !0) i = e.slideCount;
        else
          for (; t < e.slideCount; )
            ++i,
              (t = n + e.options.slidesToScroll),
              (n +=
                e.options.slidesToScroll <= e.options.slidesToShow
                  ? e.options.slidesToScroll
                  : e.options.slidesToShow);
        return i - 1;
      }),
      (t.prototype.getLeft = function (e) {
        var t,
          n,
          i,
          o = this,
          r = 0;
        return (
          (o.slideOffset = 0),
          (n = o.$slides.first().outerHeight(!0)),
          o.options.infinite === !0
            ? (o.slideCount > o.options.slidesToShow &&
                ((o.slideOffset = o.slideWidth * o.options.slidesToShow * -1),
                (r = n * o.options.slidesToShow * -1)),
              o.slideCount % o.options.slidesToScroll !== 0 &&
                e + o.options.slidesToScroll > o.slideCount &&
                o.slideCount > o.options.slidesToShow &&
                (e > o.slideCount
                  ? ((o.slideOffset =
                      (o.options.slidesToShow - (e - o.slideCount)) *
                      o.slideWidth *
                      -1),
                    (r =
                      (o.options.slidesToShow - (e - o.slideCount)) * n * -1))
                  : ((o.slideOffset =
                      (o.slideCount % o.options.slidesToScroll) *
                      o.slideWidth *
                      -1),
                    (r = (o.slideCount % o.options.slidesToScroll) * n * -1))))
            : e + o.options.slidesToShow > o.slideCount &&
              ((o.slideOffset =
                (e + o.options.slidesToShow - o.slideCount) * o.slideWidth),
              (r = (e + o.options.slidesToShow - o.slideCount) * n)),
          o.slideCount <= o.options.slidesToShow &&
            ((o.slideOffset = 0), (r = 0)),
          o.options.centerMode === !0 && o.options.infinite === !0
            ? (o.slideOffset +=
                o.slideWidth * Math.floor(o.options.slidesToShow / 2) -
                o.slideWidth)
            : o.options.centerMode === !0 &&
              ((o.slideOffset = 0),
              (o.slideOffset +=
                o.slideWidth * Math.floor(o.options.slidesToShow / 2))),
          (t =
            o.options.vertical === !1
              ? e * o.slideWidth * -1 + o.slideOffset
              : e * n * -1 + r),
          o.options.variableWidth === !0 &&
            ((i =
              o.slideCount <= o.options.slidesToShow ||
              o.options.infinite === !1
                ? o.$slideTrack.children(".slick-slide").eq(e)
                : o.$slideTrack
                    .children(".slick-slide")
                    .eq(e + o.options.slidesToShow)),
            (t =
              o.options.rtl === !0
                ? i[0]
                  ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width())
                  : 0
                : i[0]
                ? -1 * i[0].offsetLeft
                : 0),
            o.options.centerMode === !0 &&
              ((i =
                o.slideCount <= o.options.slidesToShow ||
                o.options.infinite === !1
                  ? o.$slideTrack.children(".slick-slide").eq(e)
                  : o.$slideTrack
                      .children(".slick-slide")
                      .eq(e + o.options.slidesToShow + 1)),
              (t =
                o.options.rtl === !0
                  ? i[0]
                    ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width())
                    : 0
                  : i[0]
                  ? -1 * i[0].offsetLeft
                  : 0),
              (t += (o.$list.width() - i.outerWidth()) / 2))),
          t
        );
      }),
      (t.prototype.getOption = t.prototype.slickGetOption = function (e) {
        var t = this;
        return t.options[e];
      }),
      (t.prototype.getNavigableIndexes = function () {
        var e,
          t = this,
          n = 0,
          i = 0,
          o = [];
        for (
          t.options.infinite === !1
            ? (e = t.slideCount)
            : ((n = -1 * t.options.slidesToScroll),
              (i = -1 * t.options.slidesToScroll),
              (e = 2 * t.slideCount));
          e > n;

        )
          o.push(n),
            (n = i + t.options.slidesToScroll),
            (i +=
              t.options.slidesToScroll <= t.options.slidesToShow
                ? t.options.slidesToScroll
                : t.options.slidesToShow);
        return o;
      }),
      (t.prototype.getSlick = function () {
        return this;
      }),
      (t.prototype.getSlideCount = function () {
        var t,
          n,
          i,
          o = this;
        return (
          (i =
            o.options.centerMode === !0
              ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
              : 0),
          o.options.swipeToSlide === !0
            ? (o.$slideTrack.find(".slick-slide").each(function (t, r) {
                return r.offsetLeft - i + e(r).outerWidth() / 2 >
                  -1 * o.swipeLeft
                  ? ((n = r), !1)
                  : void 0;
              }),
              (t =
                Math.abs(e(n).attr("data-slick-index") - o.currentSlide) || 1))
            : o.options.slidesToScroll
        );
      }),
      (t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
        var n = this;
        n.changeSlide({ data: { message: "index", index: parseInt(e) } }, t);
      }),
      (t.prototype.init = function (t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") ||
          (e(n.$slider).addClass("slick-initialized"),
          n.buildRows(),
          n.buildOut(),
          n.setProps(),
          n.startLoad(),
          n.loadSlider(),
          n.initializeEvents(),
          n.updateArrows(),
          n.updateDots()),
          t && n.$slider.trigger("init", [n]),
          n.options.accessibility === !0 && n.initADA();
      }),
      (t.prototype.initArrowEvents = function () {
        var e = this;
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.on(
            "click.slick",
            { message: "previous" },
            e.changeSlide
          ),
          e.$nextArrow.on("click.slick", { message: "next" }, e.changeSlide));
      }),
      (t.prototype.initDotEvents = function () {
        var t = this;
        t.options.dots === !0 &&
          t.slideCount > t.options.slidesToShow &&
          e("li", t.$dots).on(
            "click.slick",
            { message: "index" },
            t.changeSlide
          ),
          t.options.dots === !0 &&
            t.options.pauseOnDotsHover === !0 &&
            t.options.autoplay === !0 &&
            e("li", t.$dots)
              .on("mouseenter.slick", e.proxy(t.setPaused, t, !0))
              .on("mouseleave.slick", e.proxy(t.setPaused, t, !1));
      }),
      (t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(),
          t.initDotEvents(),
          t.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            t.swipeHandler
          ),
          t.$list.on("click.slick", t.clickHandler),
          e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
          t.$list.on("mouseenter.slick", e.proxy(t.setPaused, t, !0)),
          t.$list.on("mouseleave.slick", e.proxy(t.setPaused, t, !1)),
          t.options.accessibility === !0 &&
            t.$list.on("keydown.slick", t.keyHandler),
          t.options.focusOnSelect === !0 &&
            e(t.$slideTrack).children().on("click.slick", t.selectHandler),
          e(window).on(
            "orientationchange.slick.slick-" + t.instanceUid,
            e.proxy(t.orientationChange, t)
          ),
          e(window).on(
            "resize.slick.slick-" + t.instanceUid,
            e.proxy(t.resize, t)
          ),
          e("[draggable!=true]", t.$slideTrack).on(
            "dragstart",
            t.preventDefault
          ),
          e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
          e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition);
      }),
      (t.prototype.initUI = function () {
        var e = this;
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.show(), e.$nextArrow.show()),
          e.options.dots === !0 &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.show(),
          e.options.autoplay === !0 && e.autoPlay();
      }),
      (t.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === e.keyCode && t.options.accessibility === !0
            ? t.changeSlide({ data: { message: "previous" } })
            : 39 === e.keyCode &&
              t.options.accessibility === !0 &&
              t.changeSlide({ data: { message: "next" } }));
      }),
      (t.prototype.lazyLoad = function () {
        function t(t) {
          e("img[data-lazy]", t).each(function () {
            var t = e(this),
              n = e(this).attr("data-lazy"),
              i = document.createElement("img");
            (i.onload = function () {
              t.animate({ opacity: 0 }, 100, function () {
                t.attr("src", n).animate({ opacity: 1 }, 200, function () {
                  t.removeAttr("data-lazy").removeClass("slick-loading");
                });
              });
            }),
              (i.src = n);
          });
        }
        var n,
          i,
          o,
          r,
          s = this;
        s.options.centerMode === !0
          ? s.options.infinite === !0
            ? ((o = s.currentSlide + (s.options.slidesToShow / 2 + 1)),
              (r = o + s.options.slidesToShow + 2))
            : ((o = Math.max(
                0,
                s.currentSlide - (s.options.slidesToShow / 2 + 1)
              )),
              (r = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide))
          : ((o = s.options.infinite
              ? s.options.slidesToShow + s.currentSlide
              : s.currentSlide),
            (r = o + s.options.slidesToShow),
            s.options.fade === !0 && (o > 0 && o--, r <= s.slideCount && r++)),
          (n = s.$slider.find(".slick-slide").slice(o, r)),
          t(n),
          s.slideCount <= s.options.slidesToShow
            ? ((i = s.$slider.find(".slick-slide")), t(i))
            : s.currentSlide >= s.slideCount - s.options.slidesToShow
            ? ((i = s.$slider
                .find(".slick-cloned")
                .slice(0, s.options.slidesToShow)),
              t(i))
            : 0 === s.currentSlide &&
              ((i = s.$slider
                .find(".slick-cloned")
                .slice(-1 * s.options.slidesToShow)),
              t(i));
      }),
      (t.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(),
          e.$slideTrack.css({ opacity: 1 }),
          e.$slider.removeClass("slick-loading"),
          e.initUI(),
          "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
      }),
      (t.prototype.next = t.prototype.slickNext = function () {
        var e = this;
        e.changeSlide({ data: { message: "next" } });
      }),
      (t.prototype.orientationChange = function () {
        var e = this;
        e.checkResponsive(), e.setPosition();
      }),
      (t.prototype.pause = t.prototype.slickPause = function () {
        var e = this;
        e.autoPlayClear(), (e.paused = !0);
      }),
      (t.prototype.play = t.prototype.slickPlay = function () {
        var e = this;
        (e.paused = !1), e.autoPlay();
      }),
      (t.prototype.postSlide = function (e) {
        var t = this;
        t.$slider.trigger("afterChange", [t, e]),
          (t.animating = !1),
          t.setPosition(),
          (t.swipeLeft = null),
          t.options.autoplay === !0 && t.paused === !1 && t.autoPlay(),
          t.options.accessibility === !0 && t.initADA();
      }),
      (t.prototype.prev = t.prototype.slickPrev = function () {
        var e = this;
        e.changeSlide({ data: { message: "previous" } });
      }),
      (t.prototype.preventDefault = function (e) {
        e.preventDefault();
      }),
      (t.prototype.progressiveLazyLoad = function () {
        var t,
          n,
          i = this;
        (t = e("img[data-lazy]", i.$slider).length),
          t > 0 &&
            ((n = e("img[data-lazy]", i.$slider).first()),
            n.attr("src", null),
            n
              .attr("src", n.attr("data-lazy"))
              .removeClass("slick-loading")
              .load(function () {
                n.removeAttr("data-lazy"),
                  i.progressiveLazyLoad(),
                  i.options.adaptiveHeight === !0 && i.setPosition();
              })
              .error(function () {
                n.removeAttr("data-lazy"), i.progressiveLazyLoad();
              }));
      }),
      (t.prototype.refresh = function (t) {
        var n,
          i,
          o = this;
        (i = o.slideCount - o.options.slidesToShow),
          o.options.infinite ||
            (o.slideCount <= o.options.slidesToShow
              ? (o.currentSlide = 0)
              : o.currentSlide > i && (o.currentSlide = i)),
          (n = o.currentSlide),
          o.destroy(!0),
          e.extend(o, o.initials, { currentSlide: n }),
          o.init(),
          t || o.changeSlide({ data: { message: "index", index: n } }, !1);
      }),
      (t.prototype.registerBreakpoints = function () {
        var t,
          n,
          i,
          o = this,
          r = o.options.responsive || null;
        if ("array" === e.type(r) && r.length) {
          o.respondTo = o.options.respondTo || "window";
          for (t in r)
            if (
              ((i = o.breakpoints.length - 1),
              (n = r[t].breakpoint),
              r.hasOwnProperty(t))
            ) {
              for (; i >= 0; )
                o.breakpoints[i] &&
                  o.breakpoints[i] === n &&
                  o.breakpoints.splice(i, 1),
                  i--;
              o.breakpoints.push(n), (o.breakpointSettings[n] = r[t].settings);
            }
          o.breakpoints.sort(function (e, t) {
            return o.options.mobileFirst ? e - t : t - e;
          });
        }
      }),
      (t.prototype.reinit = function () {
        var t = this;
        (t.$slides = t.$slideTrack
          .children(t.options.slide)
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.currentSlide >= t.slideCount &&
            0 !== t.currentSlide &&
            (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
          t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
          t.registerBreakpoints(),
          t.setProps(),
          t.setupInfinite(),
          t.buildArrows(),
          t.updateArrows(),
          t.initArrowEvents(),
          t.buildDots(),
          t.updateDots(),
          t.initDotEvents(),
          t.checkResponsive(!1, !0),
          t.options.focusOnSelect === !0 &&
            e(t.$slideTrack).children().on("click.slick", t.selectHandler),
          t.setSlideClasses(0),
          t.setPosition(),
          t.$slider.trigger("reInit", [t]),
          t.options.autoplay === !0 && t.focusHandler();
      }),
      (t.prototype.resize = function () {
        var t = this;
        e(window).width() !== t.windowWidth &&
          (clearTimeout(t.windowDelay),
          (t.windowDelay = window.setTimeout(function () {
            (t.windowWidth = e(window).width()),
              t.checkResponsive(),
              t.unslicked || t.setPosition();
          }, 50)));
      }),
      (t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
        var i = this;
        return (
          "boolean" == typeof e
            ? ((t = e), (e = t === !0 ? 0 : i.slideCount - 1))
            : (e = t === !0 ? --e : e),
          i.slideCount < 1 || 0 > e || e > i.slideCount - 1
            ? !1
            : (i.unload(),
              n === !0
                ? i.$slideTrack.children().remove()
                : i.$slideTrack.children(this.options.slide).eq(e).remove(),
              (i.$slides = i.$slideTrack.children(this.options.slide)),
              i.$slideTrack.children(this.options.slide).detach(),
              i.$slideTrack.append(i.$slides),
              (i.$slidesCache = i.$slides),
              void i.reinit())
        );
      }),
      (t.prototype.setCSS = function (e) {
        var t,
          n,
          i = this,
          o = {};
        i.options.rtl === !0 && (e = -e),
          (t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
          (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
          (o[i.positionProp] = e),
          i.transformsEnabled === !1
            ? i.$slideTrack.css(o)
            : ((o = {}),
              i.cssTransitions === !1
                ? ((o[i.animType] = "translate(" + t + ", " + n + ")"),
                  i.$slideTrack.css(o))
                : ((o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"),
                  i.$slideTrack.css(o)));
      }),
      (t.prototype.setDimensions = function () {
        var e = this;
        e.options.vertical === !1
          ? e.options.centerMode === !0 &&
            e.$list.css({ padding: "0px " + e.options.centerPadding })
          : (e.$list.height(
              e.$slides.first().outerHeight(!0) * e.options.slidesToShow
            ),
            e.options.centerMode === !0 &&
              e.$list.css({ padding: e.options.centerPadding + " 0px" })),
          (e.listWidth = e.$list.width()),
          (e.listHeight = e.$list.height()),
          e.options.vertical === !1 && e.options.variableWidth === !1
            ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)),
              e.$slideTrack.width(
                Math.ceil(
                  e.slideWidth * e.$slideTrack.children(".slick-slide").length
                )
              ))
            : e.options.variableWidth === !0
            ? e.$slideTrack.width(5e3 * e.slideCount)
            : ((e.slideWidth = Math.ceil(e.listWidth)),
              e.$slideTrack.height(
                Math.ceil(
                  e.$slides.first().outerHeight(!0) *
                    e.$slideTrack.children(".slick-slide").length
                )
              ));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        e.options.variableWidth === !1 &&
          e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
      }),
      (t.prototype.setFade = function () {
        var t,
          n = this;
        n.$slides.each(function (i, o) {
          (t = n.slideWidth * i * -1),
            n.options.rtl === !0
              ? e(o).css({
                  position: "relative",
                  right: t,
                  top: 0,
                  zIndex: n.options.zIndex - 2,
                  opacity: 0,
                })
              : e(o).css({
                  position: "relative",
                  left: t,
                  top: 0,
                  zIndex: n.options.zIndex - 2,
                  opacity: 0,
                });
        }),
          n.$slides
            .eq(n.currentSlide)
            .css({ zIndex: n.options.zIndex - 1, opacity: 1 });
      }),
      (t.prototype.setHeight = function () {
        var e = this;
        if (
          1 === e.options.slidesToShow &&
          e.options.adaptiveHeight === !0 &&
          e.options.vertical === !1
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.css("height", t);
        }
      }),
      (t.prototype.setOption = t.prototype.slickSetOption = function (t, n, i) {
        var o,
          r,
          s = this;
        if ("responsive" === t && "array" === e.type(n))
          for (r in n)
            if ("array" !== e.type(s.options.responsive))
              s.options.responsive = [n[r]];
            else {
              for (o = s.options.responsive.length - 1; o >= 0; )
                s.options.responsive[o].breakpoint === n[r].breakpoint &&
                  s.options.responsive.splice(o, 1),
                  o--;
              s.options.responsive.push(n[r]);
            }
        else s.options[t] = n;
        i === !0 && (s.unload(), s.reinit());
      }),
      (t.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(),
          e.setHeight(),
          e.options.fade === !1
            ? e.setCSS(e.getLeft(e.currentSlide))
            : e.setFade(),
          e.$slider.trigger("setPosition", [e]);
      }),
      (t.prototype.setProps = function () {
        var e = this,
          t = document.body.style;
        (e.positionProp = e.options.vertical === !0 ? "top" : "left"),
          "top" === e.positionProp
            ? e.$slider.addClass("slick-vertical")
            : e.$slider.removeClass("slick-vertical"),
          (void 0 === t.WebkitTransition &&
            void 0 === t.MozTransition &&
            void 0 === t.msTransition) ||
            (e.options.useCSS === !0 && (e.cssTransitions = !0)),
          e.options.fade &&
            ("number" == typeof e.options.zIndex
              ? e.options.zIndex < 3 && (e.options.zIndex = 3)
              : (e.options.zIndex = e.defaults.zIndex)),
          void 0 !== t.OTransform &&
            ((e.animType = "OTransform"),
            (e.transformType = "-o-transform"),
            (e.transitionType = "OTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.MozTransform &&
            ((e.animType = "MozTransform"),
            (e.transformType = "-moz-transform"),
            (e.transitionType = "MozTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.MozPerspective &&
              (e.animType = !1)),
          void 0 !== t.webkitTransform &&
            ((e.animType = "webkitTransform"),
            (e.transformType = "-webkit-transform"),
            (e.transitionType = "webkitTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.msTransform &&
            ((e.animType = "msTransform"),
            (e.transformType = "-ms-transform"),
            (e.transitionType = "msTransition"),
            void 0 === t.msTransform && (e.animType = !1)),
          void 0 !== t.transform &&
            e.animType !== !1 &&
            ((e.animType = "transform"),
            (e.transformType = "transform"),
            (e.transitionType = "transition")),
          (e.transformsEnabled =
            e.options.useTransform && null !== e.animType && e.animType !== !1);
      }),
      (t.prototype.setSlideClasses = function (e) {
        var t,
          n,
          i,
          o,
          r = this;
        (n = r.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
          r.$slides.eq(e).addClass("slick-current"),
          r.options.centerMode === !0
            ? ((t = Math.floor(r.options.slidesToShow / 2)),
              r.options.infinite === !0 &&
                (e >= t && e <= r.slideCount - 1 - t
                  ? r.$slides
                      .slice(e - t, e + t + 1)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")
                  : ((i = r.options.slidesToShow + e),
                    n
                      .slice(i - t + 1, i + t + 2)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")),
                0 === e
                  ? n
                      .eq(n.length - 1 - r.options.slidesToShow)
                      .addClass("slick-center")
                  : e === r.slideCount - 1 &&
                    n.eq(r.options.slidesToShow).addClass("slick-center")),
              r.$slides.eq(e).addClass("slick-center"))
            : e >= 0 && e <= r.slideCount - r.options.slidesToShow
            ? r.$slides
                .slice(e, e + r.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : n.length <= r.options.slidesToShow
            ? n.addClass("slick-active").attr("aria-hidden", "false")
            : ((o = r.slideCount % r.options.slidesToShow),
              (i = r.options.infinite === !0 ? r.options.slidesToShow + e : e),
              r.options.slidesToShow == r.options.slidesToScroll &&
              r.slideCount - e < r.options.slidesToShow
                ? n
                    .slice(i - (r.options.slidesToShow - o), i + o)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : n
                    .slice(i, i + r.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
          "ondemand" === r.options.lazyLoad && r.lazyLoad();
      }),
      (t.prototype.setupInfinite = function () {
        var t,
          n,
          i,
          o = this;
        if (
          (o.options.fade === !0 && (o.options.centerMode = !1),
          o.options.infinite === !0 &&
            o.options.fade === !1 &&
            ((n = null), o.slideCount > o.options.slidesToShow))
        ) {
          for (
            i =
              o.options.centerMode === !0
                ? o.options.slidesToShow + 1
                : o.options.slidesToShow,
              t = o.slideCount;
            t > o.slideCount - i;
            t -= 1
          )
            (n = t - 1),
              e(o.$slides[n])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", n - o.slideCount)
                .prependTo(o.$slideTrack)
                .addClass("slick-cloned");
          for (t = 0; i > t; t += 1)
            (n = t),
              e(o.$slides[n])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", n + o.slideCount)
                .appendTo(o.$slideTrack)
                .addClass("slick-cloned");
          o.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              e(this).attr("id", "");
            });
        }
      }),
      (t.prototype.setPaused = function (e) {
        var t = this;
        t.options.autoplay === !0 &&
          t.options.pauseOnHover === !0 &&
          ((t.paused = e), e ? t.autoPlayClear() : t.autoPlay());
      }),
      (t.prototype.selectHandler = function (t) {
        var n = this,
          i = e(t.target).is(".slick-slide")
            ? e(t.target)
            : e(t.target).parents(".slick-slide"),
          o = parseInt(i.attr("data-slick-index"));
        return (
          o || (o = 0),
          n.slideCount <= n.options.slidesToShow
            ? (n.setSlideClasses(o), void n.asNavFor(o))
            : void n.slideHandler(o)
        );
      }),
      (t.prototype.slideHandler = function (e, t, n) {
        var i,
          o,
          r,
          s,
          a = null,
          l = this;
        return (
          (t = t || !1),
          (l.animating === !0 && l.options.waitForAnimate === !0) ||
          (l.options.fade === !0 && l.currentSlide === e) ||
          l.slideCount <= l.options.slidesToShow
            ? void 0
            : (t === !1 && l.asNavFor(e),
              (i = e),
              (a = l.getLeft(i)),
              (s = l.getLeft(l.currentSlide)),
              (l.currentLeft = null === l.swipeLeft ? s : l.swipeLeft),
              l.options.infinite === !1 &&
              l.options.centerMode === !1 &&
              (0 > e || e > l.getDotCount() * l.options.slidesToScroll)
                ? void (
                    l.options.fade === !1 &&
                    ((i = l.currentSlide),
                    n !== !0
                      ? l.animateSlide(s, function () {
                          l.postSlide(i);
                        })
                      : l.postSlide(i))
                  )
                : l.options.infinite === !1 &&
                  l.options.centerMode === !0 &&
                  (0 > e || e > l.slideCount - l.options.slidesToScroll)
                ? void (
                    l.options.fade === !1 &&
                    ((i = l.currentSlide),
                    n !== !0
                      ? l.animateSlide(s, function () {
                          l.postSlide(i);
                        })
                      : l.postSlide(i))
                  )
                : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer),
                  (o =
                    0 > i
                      ? l.slideCount % l.options.slidesToScroll !== 0
                        ? l.slideCount -
                          (l.slideCount % l.options.slidesToScroll)
                        : l.slideCount + i
                      : i >= l.slideCount
                      ? l.slideCount % l.options.slidesToScroll !== 0
                        ? 0
                        : i - l.slideCount
                      : i),
                  (l.animating = !0),
                  l.$slider.trigger("beforeChange", [l, l.currentSlide, o]),
                  (r = l.currentSlide),
                  (l.currentSlide = o),
                  l.setSlideClasses(l.currentSlide),
                  l.updateDots(),
                  l.updateArrows(),
                  l.options.fade === !0
                    ? (n !== !0
                        ? (l.fadeSlideOut(r),
                          l.fadeSlide(o, function () {
                            l.postSlide(o);
                          }))
                        : l.postSlide(o),
                      void l.animateHeight())
                    : void (n !== !0
                        ? l.animateSlide(a, function () {
                            l.postSlide(o);
                          })
                        : l.postSlide(o))))
        );
      }),
      (t.prototype.startLoad = function () {
        var e = this;
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.hide(), e.$nextArrow.hide()),
          e.options.dots === !0 &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.hide(),
          e.$slider.addClass("slick-loading");
      }),
      (t.prototype.swipeDirection = function () {
        var e,
          t,
          n,
          i,
          o = this;
        return (
          (e = o.touchObject.startX - o.touchObject.curX),
          (t = o.touchObject.startY - o.touchObject.curY),
          (n = Math.atan2(t, e)),
          (i = Math.round((180 * n) / Math.PI)),
          0 > i && (i = 360 - Math.abs(i)),
          45 >= i && i >= 0
            ? o.options.rtl === !1
              ? "left"
              : "right"
            : 360 >= i && i >= 315
            ? o.options.rtl === !1
              ? "left"
              : "right"
            : i >= 135 && 225 >= i
            ? o.options.rtl === !1
              ? "right"
              : "left"
            : o.options.verticalSwiping === !0
            ? i >= 35 && 135 >= i
              ? "left"
              : "right"
            : "vertical"
        );
      }),
      (t.prototype.swipeEnd = function () {
        var e,
          t = this;
        if (
          ((t.dragging = !1),
          (t.shouldClick = !(t.touchObject.swipeLength > 10)),
          void 0 === t.touchObject.curX)
        )
          return !1;
        if (
          (t.touchObject.edgeHit === !0 &&
            t.$slider.trigger("edge", [t, t.swipeDirection()]),
          t.touchObject.swipeLength >= t.touchObject.minSwipe)
        )
          switch (t.swipeDirection()) {
            case "left":
              (e = t.options.swipeToSlide
                ? t.checkNavigable(t.currentSlide + t.getSlideCount())
                : t.currentSlide + t.getSlideCount()),
                t.slideHandler(e),
                (t.currentDirection = 0),
                (t.touchObject = {}),
                t.$slider.trigger("swipe", [t, "left"]);
              break;
            case "right":
              (e = t.options.swipeToSlide
                ? t.checkNavigable(t.currentSlide - t.getSlideCount())
                : t.currentSlide - t.getSlideCount()),
                t.slideHandler(e),
                (t.currentDirection = 1),
                (t.touchObject = {}),
                t.$slider.trigger("swipe", [t, "right"]);
          }
        else
          t.touchObject.startX !== t.touchObject.curX &&
            (t.slideHandler(t.currentSlide), (t.touchObject = {}));
      }),
      (t.prototype.swipeHandler = function (e) {
        var t = this;
        if (
          !(
            t.options.swipe === !1 ||
            ("ontouchend" in document && t.options.swipe === !1) ||
            (t.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))
          )
        )
          switch (
            ((t.touchObject.fingerCount =
              e.originalEvent && void 0 !== e.originalEvent.touches
                ? e.originalEvent.touches.length
                : 1),
            (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
            t.options.verticalSwiping === !0 &&
              (t.touchObject.minSwipe =
                t.listHeight / t.options.touchThreshold),
            e.data.action)
          ) {
            case "start":
              t.swipeStart(e);
              break;
            case "move":
              t.swipeMove(e);
              break;
            case "end":
              t.swipeEnd(e);
          }
      }),
      (t.prototype.swipeMove = function (e) {
        var t,
          n,
          i,
          o,
          r,
          s = this;
        return (
          (r = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
          !s.dragging || (r && 1 !== r.length)
            ? !1
            : ((t = s.getLeft(s.currentSlide)),
              (s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX),
              (s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY),
              (s.touchObject.swipeLength = Math.round(
                Math.sqrt(
                  Math.pow(s.touchObject.curX - s.touchObject.startX, 2)
                )
              )),
              s.options.verticalSwiping === !0 &&
                (s.touchObject.swipeLength = Math.round(
                  Math.sqrt(
                    Math.pow(s.touchObject.curY - s.touchObject.startY, 2)
                  )
                )),
              (n = s.swipeDirection()),
              "vertical" !== n
                ? (void 0 !== e.originalEvent &&
                    s.touchObject.swipeLength > 4 &&
                    e.preventDefault(),
                  (o =
                    (s.options.rtl === !1 ? 1 : -1) *
                    (s.touchObject.curX > s.touchObject.startX ? 1 : -1)),
                  s.options.verticalSwiping === !0 &&
                    (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1),
                  (i = s.touchObject.swipeLength),
                  (s.touchObject.edgeHit = !1),
                  s.options.infinite === !1 &&
                    ((0 === s.currentSlide && "right" === n) ||
                      (s.currentSlide >= s.getDotCount() && "left" === n)) &&
                    ((i = s.touchObject.swipeLength * s.options.edgeFriction),
                    (s.touchObject.edgeHit = !0)),
                  s.options.vertical === !1
                    ? (s.swipeLeft = t + i * o)
                    : (s.swipeLeft =
                        t + i * (s.$list.height() / s.listWidth) * o),
                  s.options.verticalSwiping === !0 && (s.swipeLeft = t + i * o),
                  s.options.fade === !0 || s.options.touchMove === !1
                    ? !1
                    : s.animating === !0
                    ? ((s.swipeLeft = null), !1)
                    : void s.setCSS(s.swipeLeft))
                : void 0)
        );
      }),
      (t.prototype.swipeStart = function (e) {
        var t,
          n = this;
        return 1 !== n.touchObject.fingerCount ||
          n.slideCount <= n.options.slidesToShow
          ? ((n.touchObject = {}), !1)
          : (void 0 !== e.originalEvent &&
              void 0 !== e.originalEvent.touches &&
              (t = e.originalEvent.touches[0]),
            (n.touchObject.startX = n.touchObject.curX =
              void 0 !== t ? t.pageX : e.clientX),
            (n.touchObject.startY = n.touchObject.curY =
              void 0 !== t ? t.pageY : e.clientY),
            void (n.dragging = !0));
      }),
      (t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
        var e = this;
        null !== e.$slidesCache &&
          (e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.appendTo(e.$slideTrack),
          e.reinit());
      }),
      (t.prototype.unload = function () {
        var t = this;
        e(".slick-cloned", t.$slider).remove(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow &&
            t.htmlExpr.test(t.options.prevArrow) &&
            t.$prevArrow.remove(),
          t.$nextArrow &&
            t.htmlExpr.test(t.options.nextArrow) &&
            t.$nextArrow.remove(),
          t.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (t.prototype.unslick = function (e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy();
      }),
      (t.prototype.updateArrows = function () {
        var e,
          t = this;
        (e = Math.floor(t.options.slidesToShow / 2)),
          t.options.arrows === !0 &&
            t.slideCount > t.options.slidesToShow &&
            !t.options.infinite &&
            (t.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            t.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === t.currentSlide
              ? (t.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                t.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : t.currentSlide >= t.slideCount - t.options.slidesToShow &&
                t.options.centerMode === !1
              ? (t.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                t.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : t.currentSlide >= t.slideCount - 1 &&
                t.options.centerMode === !0 &&
                (t.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                t.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
      }),
      (t.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots &&
          (e.$dots
            .find("li")
            .removeClass("slick-active")
            .attr("aria-hidden", "true"),
          e.$dots
            .find("li")
            .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
            .addClass("slick-active")
            .attr("aria-hidden", "false"));
      }),
      (t.prototype.visibility = function () {
        var e = this;
        document[e.hidden]
          ? ((e.paused = !0), e.autoPlayClear())
          : e.options.autoplay === !0 && ((e.paused = !1), e.autoPlay());
      }),
      (t.prototype.initADA = function () {
        var t = this;
        t.$slides
          .add(t.$slideTrack.find(".slick-cloned"))
          .attr({ "aria-hidden": "true", tabindex: "-1" })
          .find("a, input, button, select")
          .attr({ tabindex: "-1" }),
          t.$slideTrack.attr("role", "listbox"),
          t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (n) {
            e(this).attr({
              role: "option",
              "aria-describedby": "slick-slide" + t.instanceUid + n,
            });
          }),
          null !== t.$dots &&
            t.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (n) {
                e(this).attr({
                  role: "presentation",
                  "aria-selected": "false",
                  "aria-controls": "navigation" + t.instanceUid + n,
                  id: "slick-slide" + t.instanceUid + n,
                });
              })
              .first()
              .attr("aria-selected", "true")
              .end()
              .find("button")
              .attr("role", "button")
              .end()
              .closest("div")
              .attr("role", "toolbar"),
          t.activateADA();
      }),
      (t.prototype.activateADA = function () {
        var e = this;
        e.$slideTrack
          .find(".slick-active")
          .attr({ "aria-hidden": "false" })
          .find("a, input, button, select")
          .attr({ tabindex: "0" });
      }),
      (t.prototype.focusHandler = function () {
        var t = this;
        t.$slider.on("focus.slick blur.slick", "*", function (n) {
          n.stopImmediatePropagation();
          var i = e(this);
          setTimeout(function () {
            t.isPlay &&
              (i.is(":focus")
                ? (t.autoPlayClear(), (t.paused = !0))
                : ((t.paused = !1), t.autoPlay()));
          }, 0);
        });
      }),
      (e.fn.slick = function () {
        var e,
          n,
          i = this,
          o = arguments[0],
          r = Array.prototype.slice.call(arguments, 1),
          s = i.length;
        for (e = 0; s > e; e++)
          if (
            ("object" == typeof o || "undefined" == typeof o
              ? (i[e].slick = new t(i[e], o))
              : (n = i[e].slick[o].apply(i[e].slick, r)),
            "undefined" != typeof n)
          )
            return n;
        return i;
      });
  }),
  (function (e) {
    var t = !1;
    if (
      ("function" == typeof define && define.amd && (define(e), (t = !0)),
      "object" == typeof exports && ((module.exports = e()), (t = !0)),
      !t)
    ) {
      var n = window.Cookies,
        i = (window.Cookies = e());
      i.noConflict = function () {
        return (window.Cookies = n), i;
      };
    }
  })(function () {
    function e() {
      for (var e = 0, t = {}; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) t[i] = n[i];
      }
      return t;
    }
    function t(n) {
      function i(t, o, r) {
        var s;
        if ("undefined" != typeof document) {
          if (arguments.length > 1) {
            if (
              ((r = e({ path: "/" }, i.defaults, r)),
              "number" == typeof r.expires)
            ) {
              var a = new Date();
              a.setMilliseconds(a.getMilliseconds() + 864e5 * r.expires),
                (r.expires = a);
            }
            r.expires = r.expires ? r.expires.toUTCString() : "";
            try {
              (s = JSON.stringify(o)), /^[\{\[]/.test(s) && (o = s);
            } catch (l) {}
            (o = n.write
              ? n.write(o, t)
              : encodeURIComponent(String(o)).replace(
                  /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                  decodeURIComponent
                )),
              (t = encodeURIComponent(String(t))),
              (t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)),
              (t = t.replace(/[\(\)]/g, escape));
            var c = "";
            for (var d in r)
              r[d] && ((c += "; " + d), r[d] !== !0 && (c += "=" + r[d]));
            return (document.cookie = t + "=" + o + c);
          }
          t || (s = {});
          for (
            var u = document.cookie ? document.cookie.split("; ") : [],
              p = /(%[0-9A-Z]{2})+/g,
              f = 0;
            f < u.length;
            f++
          ) {
            var h = u[f].split("="),
              m = h.slice(1).join("=");
            '"' === m.charAt(0) && (m = m.slice(1, -1));
            try {
              var g = h[0].replace(p, decodeURIComponent);
              if (
                ((m = n.read
                  ? n.read(m, g)
                  : n(m, g) || m.replace(p, decodeURIComponent)),
                this.json)
              )
                try {
                  m = JSON.parse(m);
                } catch (l) {}
              if (t === g) {
                s = m;
                break;
              }
              t || (s[g] = m);
            } catch (l) {}
          }
          return s;
        }
      }
      return (
        (i.set = i),
        (i.get = function (e) {
          return i.call(i, e);
        }),
        (i.getJSON = function () {
          return i.apply({ json: !0 }, [].slice.call(arguments));
        }),
        (i.defaults = {}),
        (i.remove = function (t, n) {
          i(t, "", e(n, { expires: -1 }));
        }),
        (i.withConverter = t),
        i
      );
    }
    return t(function () {});
  });
var autoResizeTextarea = function (e, t) {
  function n(e) {
    return parseFloat(getComputedStyle(e, null).height.replace("px", ""));
  }
  function i(e) {
    e.autoResizeTextarea.initialHeight ||
      ((e.autoResizeTextarea.initialHeight = n(e)),
      (e.autoResizeTextarea.initialScrollHeight = parseFloat(e.scrollHeight))),
      (e.style.height = e.autoResizeTextarea.initialHeight + "px");
    var t =
      e.autoResizeTextarea.initialHeight +
      e.scrollHeight -
      e.autoResizeTextarea.initialScrollHeight;
    (t = Math.max(t, e.autoResizeTextarea.initialHeight)),
      (e.style.height = Math.min(t, s.maxHeight) + "px");
  }
  function o(e) {
    (e.autoResizeTextarea = {}),
      e.addEventListener("input", function () {
        i(e);
      });
  }
  for (var r = 0; r < e.length; r++) o(e[r]);
  var s = { maxHeight: 1 / 0 };
  for (var a in t) s[a] = t[a];
};
+(function (e) {
  "use strict";
  function t(t) {
    return this.each(function () {
      var i = e(this),
        o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
        r = i.data("bs.validator");
      (r || "destroy" != t) &&
        (r || i.data("bs.validator", (r = new n(this, o))),
        "string" == typeof t && r[t]());
    });
  }
  var n = function (t, i) {
    (this.$element = e(t)),
      (this.options = i),
      (i.errors = e.extend({}, n.DEFAULTS.errors, i.errors));
    for (var o in i.custom)
      if (!i.errors[o])
        throw new Error(
          "Missing default error message for custom validator: " + o
        );
    e.extend(n.VALIDATORS, i.custom),
      this.$element.attr("novalidate", !0),
      this.toggleSubmit(),
      this.$element.on(
        "input.bs.validator change.bs.validator focusout.bs.validator",
        e.proxy(this.validateInput, this)
      ),
      this.$element.on("submit.bs.validator", e.proxy(this.onSubmit, this)),
      this.$element.find("[data-match]").each(function () {
        var t = e(this),
          n = t.data("match");
        e(n).on("input.bs.validator", function () {
          t.val() && t.trigger("input.bs.validator");
        });
      });
  };
  (n.INPUT_SELECTOR = ':input:not([type="submit"], button):enabled:visible'),
    (n.DEFAULTS = {
      delay: 500,
      html: !1,
      disable: !0,
      custom: {},
      errors: { match: "Does not match", minlength: "Not long enough" },
      feedback: { success: "glyphicon-ok", error: "glyphicon-remove" },
    }),
    (n.VALIDATORS = {
      native: function (e) {
        var t = e[0];
        return t.checkValidity ? t.checkValidity() : !0;
      },
      match: function (t) {
        var n = t.data("match");
        return !t.val() || t.val() === e(n).val();
      },
      minlength: function (e) {
        var t = e.data("minlength");
        return !e.val() || e.val().length >= t;
      },
    }),
    (n.prototype.validateInput = function (t) {
      var n = e(t.target),
        i = n.data("bs.validator.errors");
      if (
        (n.is('[type="radio"]') &&
          (n = this.$element.find('input[name="' + n.attr("name") + '"]')),
        this.$element.trigger(
          (t = e.Event("validate.bs.validator", { relatedTarget: n[0] }))
        ),
        !t.isDefaultPrevented())
      ) {
        var o = this;
        this.runValidators(n).done(function (r) {
          n.data("bs.validator.errors", r),
            r.length ? o.showErrors(n) : o.clearErrors(n),
            (i && r.toString() === i.toString()) ||
              ((t = r.length
                ? e.Event("invalid.bs.validator", {
                    relatedTarget: n[0],
                    detail: r,
                  })
                : e.Event("valid.bs.validator", {
                    relatedTarget: n[0],
                    detail: i,
                  })),
              o.$element.trigger(t)),
            o.toggleSubmit(),
            o.$element.trigger(
              e.Event("validated.bs.validator", { relatedTarget: n[0] })
            );
        });
      }
    }),
    (n.prototype.runValidators = function (t) {
      function i(e) {
        return (
          t.data(e + "-error") ||
          t.data("error") ||
          ("native" == e && t[0].validationMessage) ||
          s.errors[e]
        );
      }
      var o = [],
        r = e.Deferred(),
        s = this.options;
      return (
        t.data("bs.validator.deferred") &&
          t.data("bs.validator.deferred").reject(),
        t.data("bs.validator.deferred", r),
        e.each(
          n.VALIDATORS,
          e.proxy(function (e, n) {
            if ((t.data(e) || "native" == e) && !n.call(this, t)) {
              var r = i(e);
              !~o.indexOf(r) && o.push(r);
            }
          }, this)
        ),
        !o.length && t.val() && t.data("remote")
          ? this.defer(t, function () {
              var n = {};
              (n[t.attr("name")] = t.val()),
                e
                  .get(t.data("remote"), n)
                  .fail(function (e, t, n) {
                    o.push(i("remote") || n);
                  })
                  .always(function () {
                    r.resolve(o);
                  });
            })
          : r.resolve(o),
        r.promise()
      );
    }),
    (n.prototype.validate = function () {
      var e = this.options.delay;
      return (
        (this.options.delay = 0),
        this.$element.find(n.INPUT_SELECTOR).trigger("input.bs.validator"),
        (this.options.delay = e),
        this
      );
    }),
    (n.prototype.showErrors = function (t) {
      var n = this.options.html ? "html" : "text";
      this.defer(t, function () {
        var i = t.closest(".form-group"),
          o = i.find(".help-block.with-errors"),
          r = i.find(".form-control-feedback"),
          s = t.data("bs.validator.errors");
        s.length &&
          ((s = e("<ul/>")
            .addClass("list-unstyled")
            .append(
              e.map(s, function (t) {
                return e("<li/>")[n](t);
              })
            )),
          void 0 === o.data("bs.validator.originalContent") &&
            o.data("bs.validator.originalContent", o.html()),
          o.empty().append(s),
          i.addClass("has-error"),
          r.length &&
            r.removeClass(this.options.feedback.success) &&
            r.addClass(this.options.feedback.error) &&
            i.removeClass("has-success"));
      });
    }),
    (n.prototype.clearErrors = function (e) {
      var t = e.closest(".form-group"),
        n = t.find(".help-block.with-errors"),
        i = t.find(".form-control-feedback");
      n.html(n.data("bs.validator.originalContent")),
        t.removeClass("has-error"),
        i.length &&
          i.removeClass(this.options.feedback.error) &&
          i.addClass(this.options.feedback.success) &&
          t.addClass("has-success");
    }),
    (n.prototype.hasErrors = function () {
      function t() {
        return !!(e(this).data("bs.validator.errors") || []).length;
      }
      return !!this.$element.find(n.INPUT_SELECTOR).filter(t).length;
    }),
    (n.prototype.isIncomplete = function () {
      function t() {
        return "checkbox" === this.type
          ? !this.checked
          : "radio" === this.type
          ? !e('[name="' + this.name + '"]:checked').length
          : "" === e.trim(this.value);
      }
      return !!this.$element
        .find(n.INPUT_SELECTOR)
        .filter("[required]")
        .filter(t).length;
    }),
    (n.prototype.onSubmit = function (e) {
      this.validate(),
        (this.isIncomplete() || this.hasErrors()) && e.preventDefault();
    }),
    (n.prototype.toggleSubmit = function () {
      if (this.options.disable) {
        var t = e('button[type="submit"], input[type="submit"]')
          .filter('[form="' + this.$element.attr("id") + '"]')
          .add(
            this.$element.find('input[type="submit"], button[type="submit"]')
          );
        t.toggleClass("disabled", this.isIncomplete() || this.hasErrors());
      }
    }),
    (n.prototype.defer = function (t, n) {
      return (
        (n = e.proxy(n, this)),
        this.options.delay
          ? (window.clearTimeout(t.data("bs.validator.timeout")),
            void t.data(
              "bs.validator.timeout",
              window.setTimeout(n, this.options.delay)
            ))
          : n()
      );
    }),
    (n.prototype.destroy = function () {
      return (
        this.$element
          .removeAttr("novalidate")
          .removeData("bs.validator")
          .off(".bs.validator"),
        this.$element
          .find(n.INPUT_SELECTOR)
          .off(".bs.validator")
          .removeData(["bs.validator.errors", "bs.validator.deferred"])
          .each(function () {
            var t = e(this),
              n = t.data("bs.validator.timeout");
            window.clearTimeout(n) && t.removeData("bs.validator.timeout");
          }),
        this.$element.find(".help-block.with-errors").each(function () {
          var t = e(this),
            n = t.data("bs.validator.originalContent");
          t.removeData("bs.validator.originalContent").html(n);
        }),
        this.$element
          .find('input[type="submit"], button[type="submit"]')
          .removeClass("disabled"),
        this.$element.find(".has-error").removeClass("has-error"),
        this
      );
    });
  var i = e.fn.validator;
  (e.fn.validator = t),
    (e.fn.validator.Constructor = n),
    (e.fn.validator.noConflict = function () {
      return (e.fn.validator = i), this;
    }),
    e(window).on("load", function () {
      e('form[data-toggle="validator"]').each(function () {
        var n = e(this);
        t.call(n, n.data());
      });
    });
})(jQuery),
  !(function (e, t, n) {
    var i,
      o = e.getElementsByTagName(t)[0],
      r = /^http:/.test(e.location) ? "http" : "https";
    e.getElementById(n) ||
      ((i = e.createElement(t)),
      (i.id = n),
      (i.src = r + "://platform.twitter.com/widgets.js"),
      o.parentNode.insertBefore(i, o));
  })(document, "script", "twitter-wjs"),
  !(function (e) {
    var t =
      ("object" == typeof window && window) ||
      ("object" == typeof self && self);
    "undefined" != typeof exports
      ? e(exports)
      : t &&
        ((t.hljs = e({})),
        "function" == typeof define &&
          define.amd &&
          define([], function () {
            return t.hljs;
          }));
  })(function (e) {
    function t(e) {
      return e
        .replace(/&/gm, "&amp;")
        .replace(/</gm, "&lt;")
        .replace(/>/gm, "&gt;");
    }
    function n(e) {
      return e.nodeName.toLowerCase();
    }
    function i(e, t) {
      var n = e && e.exec(t);
      return n && 0 == n.index;
    }
    function o(e) {
      return /^(no-?highlight|plain|text)$/i.test(e);
    }
    function r(e) {
      var t,
        n,
        i,
        r = e.className + " ";
      if (
        ((r += e.parentNode ? e.parentNode.className : ""),
        (n = /\blang(?:uage)?-([\w-]+)\b/i.exec(r)))
      )
        return w(n[1]) ? n[1] : "no-highlight";
      for (r = r.split(/\s+/), t = 0, i = r.length; i > t; t++)
        if (w(r[t]) || o(r[t])) return r[t];
    }
    function s(e, t) {
      var n,
        i = {};
      for (n in e) i[n] = e[n];
      if (t) for (n in t) i[n] = t[n];
      return i;
    }
    function a(e) {
      var t = [];
      return (
        (function i(e, o) {
          for (var r = e.firstChild; r; r = r.nextSibling)
            3 == r.nodeType
              ? (o += r.nodeValue.length)
              : 1 == r.nodeType &&
                (t.push({ event: "start", offset: o, node: r }),
                (o = i(r, o)),
                n(r).match(/br|hr|img|input/) ||
                  t.push({ event: "stop", offset: o, node: r }));
          return o;
        })(e, 0),
        t
      );
    }
    function l(e, i, o) {
      function r() {
        return e.length && i.length
          ? e[0].offset != i[0].offset
            ? e[0].offset < i[0].offset
              ? e
              : i
            : "start" == i[0].event
            ? e
            : i
          : e.length
          ? e
          : i;
      }
      function s(e) {
        function i(e) {
          return " " + e.nodeName + '="' + t(e.value) + '"';
        }
        d +=
          "<" + n(e) + Array.prototype.map.call(e.attributes, i).join("") + ">";
      }
      function a(e) {
        d += "</" + n(e) + ">";
      }
      function l(e) {
        ("start" == e.event ? s : a)(e.node);
      }
      for (var c = 0, d = "", u = []; e.length || i.length; ) {
        var p = r();
        if (
          ((d += t(o.substr(c, p[0].offset - c))), (c = p[0].offset), p == e)
        ) {
          u.reverse().forEach(a);
          do l(p.splice(0, 1)[0]), (p = r());
          while (p == e && p.length && p[0].offset == c);
          u.reverse().forEach(s);
        } else
          "start" == p[0].event ? u.push(p[0].node) : u.pop(),
            l(p.splice(0, 1)[0]);
      }
      return d + t(o.substr(c));
    }
    function c(e) {
      function t(e) {
        return (e && e.source) || e;
      }
      function n(n, i) {
        return new RegExp(t(n), "m" + (e.cI ? "i" : "") + (i ? "g" : ""));
      }
      function i(o, r) {
        if (!o.compiled) {
          if (((o.compiled = !0), (o.k = o.k || o.bK), o.k)) {
            var a = {},
              l = function (t, n) {
                e.cI && (n = n.toLowerCase()),
                  n.split(" ").forEach(function (e) {
                    var n = e.split("|");
                    a[n[0]] = [t, n[1] ? Number(n[1]) : 1];
                  });
              };
            "string" == typeof o.k
              ? l("keyword", o.k)
              : Object.keys(o.k).forEach(function (e) {
                  l(e, o.k[e]);
                }),
              (o.k = a);
          }
          (o.lR = n(o.l || /\w+/, !0)),
            r &&
              (o.bK && (o.b = "\\b(" + o.bK.split(" ").join("|") + ")\\b"),
              o.b || (o.b = /\B|\b/),
              (o.bR = n(o.b)),
              o.e || o.eW || (o.e = /\B|\b/),
              o.e && (o.eR = n(o.e)),
              (o.tE = t(o.e) || ""),
              o.eW && r.tE && (o.tE += (o.e ? "|" : "") + r.tE)),
            o.i && (o.iR = n(o.i)),
            void 0 === o.r && (o.r = 1),
            o.c || (o.c = []);
          var c = [];
          o.c.forEach(function (e) {
            e.v
              ? e.v.forEach(function (t) {
                  c.push(s(e, t));
                })
              : c.push("self" == e ? o : e);
          }),
            (o.c = c),
            o.c.forEach(function (e) {
              i(e, o);
            }),
            o.starts && i(o.starts, r);
          var d = o.c
            .map(function (e) {
              return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b;
            })
            .concat([o.tE, o.i])
            .map(t)
            .filter(Boolean);
          o.t = d.length
            ? n(d.join("|"), !0)
            : {
                exec: function () {
                  return null;
                },
              };
        }
      }
      i(e);
    }
    function d(e, n, o, r) {
      function s(e, t) {
        for (var n = 0; n < t.c.length; n++) if (i(t.c[n].bR, e)) return t.c[n];
      }
      function a(e, t) {
        if (i(e.eR, t)) {
          for (; e.endsParent && e.parent; ) e = e.parent;
          return e;
        }
        return e.eW ? a(e.parent, t) : void 0;
      }
      function l(e, t) {
        return !o && i(t.iR, e);
      }
      function p(e, t) {
        var n = y.cI ? t[0].toLowerCase() : t[0];
        return e.k.hasOwnProperty(n) && e.k[n];
      }
      function f(e, t, n, i) {
        var o = i ? "" : x.classPrefix,
          r = '<span class="' + o,
          s = n ? "" : "</span>";
        return (r += e + '">'), r + t + s;
      }
      function h() {
        if (!C.k) return t(_);
        var e = "",
          n = 0;
        C.lR.lastIndex = 0;
        for (var i = C.lR.exec(_); i; ) {
          e += t(_.substr(n, i.index - n));
          var o = p(C, i);
          o ? ((N += o[1]), (e += f(o[0], t(i[0])))) : (e += t(i[0])),
            (n = C.lR.lastIndex),
            (i = C.lR.exec(_));
        }
        return e + t(_.substr(n));
      }
      function m() {
        var e = "string" == typeof C.sL;
        if (e && !k[C.sL]) return t(_);
        var n = e ? d(C.sL, _, !0, S[C.sL]) : u(_, C.sL.length ? C.sL : void 0);
        return (
          C.r > 0 && (N += n.r),
          e && (S[C.sL] = n.top),
          f(n.language, n.value, !1, !0)
        );
      }
      function g() {
        ($ += void 0 !== C.sL ? m() : h()), (_ = "");
      }
      function v(e) {
        ($ += e.cN ? f(e.cN, "", !0) : ""),
          (C = Object.create(e, { parent: { value: C } }));
      }
      function b(e, t) {
        if (((_ += e), void 0 === t)) return g(), 0;
        var n = s(t, C);
        if (n)
          return (
            n.skip
              ? (_ += t)
              : (n.eB && (_ += t), g(), n.rB || n.eB || (_ = t)),
            v(n, t),
            n.rB ? 0 : t.length
          );
        var i = a(C, t);
        if (i) {
          var o = C;
          o.skip ? (_ += t) : (o.rE || o.eE || (_ += t), g(), o.eE && (_ = t));
          do C.cN && ($ += "</span>"), C.skip || (N += C.r), (C = C.parent);
          while (C != i.parent);
          return i.starts && v(i.starts, ""), o.rE ? 0 : t.length;
        }
        if (l(t, C))
          throw new Error(
            'Illegal lexeme "' +
              t +
              '" for mode "' +
              (C.cN || "<unnamed>") +
              '"'
          );
        return (_ += t), t.length || 1;
      }
      var y = w(e);
      if (!y) throw new Error('Unknown language: "' + e + '"');
      c(y);
      var T,
        C = r || y,
        S = {},
        $ = "";
      for (T = C; T != y; T = T.parent) T.cN && ($ = f(T.cN, "", !0) + $);
      var _ = "",
        N = 0;
      try {
        for (var E, A, D = 0; (C.t.lastIndex = D), (E = C.t.exec(n)), E; )
          (A = b(n.substr(D, E.index - D), E[0])), (D = E.index + A);
        for (b(n.substr(D)), T = C; T.parent; T = T.parent)
          T.cN && ($ += "</span>");
        return { r: N, value: $, language: e, top: C };
      } catch (j) {
        if (-1 != j.message.indexOf("Illegal")) return { r: 0, value: t(n) };
        throw j;
      }
    }
    function u(e, n) {
      n = n || x.languages || Object.keys(k);
      var i = { r: 0, value: t(e) },
        o = i;
      return (
        n.filter(w).forEach(function (t) {
          var n = d(t, e, !1);
          (n.language = t),
            n.r > o.r && (o = n),
            n.r > i.r && ((o = i), (i = n));
        }),
        o.language && (i.second_best = o),
        i
      );
    }
    function p(e) {
      return (
        x.tabReplace &&
          (e = e.replace(/^((<[^>]+>|\t)+)/gm, function (e, t) {
            return t.replace(/\t/g, x.tabReplace);
          })),
        x.useBR && (e = e.replace(/\n/g, "<br>")),
        e
      );
    }
    function f(e, t, n) {
      var i = t ? T[t] : n,
        o = [e.trim()];
      return (
        e.match(/\bhljs\b/) || o.push("hljs"),
        -1 === e.indexOf(i) && o.push(i),
        o.join(" ").trim()
      );
    }
    function h(e) {
      var t = r(e);
      if (!o(t)) {
        var n;
        x.useBR
          ? ((n = document.createElementNS(
              "http://www.w3.org/1999/xhtml",
              "div"
            )),
            (n.innerHTML = e.innerHTML
              .replace(/\n/g, "")
              .replace(/<br[ \/]*>/g, "\n")))
          : (n = e);
        var i = n.textContent,
          s = t ? d(t, i, !0) : u(i),
          c = a(n);
        if (c.length) {
          var h = document.createElementNS(
            "http://www.w3.org/1999/xhtml",
            "div"
          );
          (h.innerHTML = s.value), (s.value = l(c, a(h), i));
        }
        (s.value = p(s.value)),
          (e.innerHTML = s.value),
          (e.className = f(e.className, t, s.language)),
          (e.result = { language: s.language, re: s.r }),
          s.second_best &&
            (e.second_best = {
              language: s.second_best.language,
              re: s.second_best.r,
            });
      }
    }
    function m(e) {
      x = s(x, e);
    }
    function g() {
      if (!g.called) {
        g.called = !0;
        var e = document.querySelectorAll("pre code");
        Array.prototype.forEach.call(e, h);
      }
    }
    function v() {
      addEventListener("DOMContentLoaded", g, !1),
        addEventListener("load", g, !1);
    }
    function b(t, n) {
      var i = (k[t] = n(e));
      i.aliases &&
        i.aliases.forEach(function (e) {
          T[e] = t;
        });
    }
    function y() {
      return Object.keys(k);
    }
    function w(e) {
      return (e = (e || "").toLowerCase()), k[e] || k[T[e]];
    }
    var x = {
        classPrefix: "hljs-",
        tabReplace: null,
        useBR: !1,
        languages: void 0,
      },
      k = {},
      T = {};
    return (
      (e.highlight = d),
      (e.highlightAuto = u),
      (e.fixMarkup = p),
      (e.highlightBlock = h),
      (e.configure = m),
      (e.initHighlighting = g),
      (e.initHighlightingOnLoad = v),
      (e.registerLanguage = b),
      (e.listLanguages = y),
      (e.getLanguage = w),
      (e.inherit = s),
      (e.IR = "[a-zA-Z]\\w*"),
      (e.UIR = "[a-zA-Z_]\\w*"),
      (e.NR = "\\b\\d+(\\.\\d+)?"),
      (e.CNR =
        "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"),
      (e.BNR = "\\b(0b[01]+)"),
      (e.RSR =
        "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~"),
      (e.BE = { b: "\\\\[\\s\\S]", r: 0 }),
      (e.ASM = { cN: "string", b: "'", e: "'", i: "\\n", c: [e.BE] }),
      (e.QSM = { cN: "string", b: '"', e: '"', i: "\\n", c: [e.BE] }),
      (e.PWM = {
        b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/,
      }),
      (e.C = function (t, n, i) {
        var o = e.inherit({ cN: "comment", b: t, e: n, c: [] }, i || {});
        return (
          o.c.push(e.PWM),
          o.c.push({ cN: "doctag", b: "(?:TODO|FIXME|NOTE|BUG|XXX):", r: 0 }),
          o
        );
      }),
      (e.CLCM = e.C("//", "$")),
      (e.CBCM = e.C("/\\*", "\\*/")),
      (e.HCM = e.C("#", "$")),
      (e.NM = { cN: "number", b: e.NR, r: 0 }),
      (e.CNM = { cN: "number", b: e.CNR, r: 0 }),
      (e.BNM = { cN: "number", b: e.BNR, r: 0 }),
      (e.CSSNM = {
        cN: "number",
        b:
          e.NR +
          "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0,
      }),
      (e.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [e.BE, { b: /\[/, e: /\]/, r: 0, c: [e.BE] }],
      }),
      (e.TM = { cN: "title", b: e.IR, r: 0 }),
      (e.UTM = { cN: "title", b: e.UIR, r: 0 }),
      (e.METHOD_GUARD = { b: "\\.\\s*" + e.UIR, r: 0 }),
      e
    );
  }),
  hljs.registerLanguage("xml", function (e) {
    var t = "[A-Za-z0-9\\._:-]+",
      n = {
        eW: !0,
        i: /</,
        r: 0,
        c: [
          { cN: "attr", b: t, r: 0 },
          {
            b: /=\s*/,
            r: 0,
            c: [
              {
                cN: "string",
                endsParent: !0,
                v: [
                  { b: /"/, e: /"/ },
                  { b: /'/, e: /'/ },
                  { b: /[^\s"'=<>`]+/ },
                ],
              },
            ],
          },
        ],
      };
    return {
      aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
      cI: !0,
      c: [
        {
          cN: "meta",
          b: "<!DOCTYPE",
          e: ">",
          r: 10,
          c: [{ b: "\\[", e: "\\]" }],
        },
        e.C("<!--", "-->", { r: 10 }),
        { b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10 },
        {
          b: /<\?(php)?/,
          e: /\?>/,
          sL: "php",
          c: [{ b: "/\\*", e: "\\*/", skip: !0 }],
        },
        {
          cN: "tag",
          b: "<style(?=\\s|>|$)",
          e: ">",
          k: { name: "style" },
          c: [n],
          starts: { e: "</style>", rE: !0, sL: ["css", "xml"] },
        },
        {
          cN: "tag",
          b: "<script(?=\\s|>|$)",
          e: ">",
          k: { name: "script" },
          c: [n],
          starts: {
            e: "</script>",
            rE: !0,
            sL: ["actionscript", "javascript", "handlebars", "xml"],
          },
        },
        {
          cN: "meta",
          v: [
            { b: /<\?xml/, e: /\?>/, r: 10 },
            { b: /<\?\w+/, e: /\?>/ },
          ],
        },
        {
          cN: "tag",
          b: "</?",
          e: "/?>",
          c: [{ cN: "name", b: /[^\/><\s]+/, r: 0 }, n],
        },
      ],
    };
  }),
  hljs.registerLanguage("sql", function (e) {
    var t = e.C("--", "$");
    return {
      cI: !0,
      i: /[<>{}*#]/,
      c: [
        {
          bK:
            "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke",
          e: /;/,
          eW: !0,
          l: /[\w\.]+/,
          k: {
            keyword:
              "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
            literal: "true false null",
            built_in:
              "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void",
          },
          c: [
            { cN: "string", b: "'", e: "'", c: [e.BE, { b: "''" }] },
            { cN: "string", b: '"', e: '"', c: [e.BE, { b: '""' }] },
            { cN: "string", b: "`", e: "`", c: [e.BE] },
            e.CNM,
            e.CBCM,
            t,
          ],
        },
        e.CBCM,
        t,
      ],
    };
  }),
  hljs.registerLanguage("cpp", function (e) {
    var t = { cN: "keyword", b: "\\b[a-z\\d_]*_t\\b" },
      n = {
        cN: "string",
        v: [
          e.inherit(e.QSM, { b: '((u8?|U)|L)?"' }),
          { b: '(u8?|U)?R"', e: '"', c: [e.BE] },
          { b: "'\\\\?.", e: "'", i: "." },
        ],
      },
      i = {
        cN: "number",
        v: [
          { b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)" },
          { b: e.CNR },
        ],
        r: 0,
      },
      o = {
        cN: "meta",
        b: "#",
        e: "$",
        k: {
          "meta-keyword":
            "if else elif endif define undef warning error line pragma ifdef ifndef",
        },
        c: [
          { b: /\\\n/, r: 0 },
          {
            bK: "include",
            e: "$",
            k: { "meta-keyword": "include" },
            c: [
              e.inherit(n, { cN: "meta-string" }),
              { cN: "meta-string", b: "<", e: ">", i: "\\n" },
            ],
          },
          n,
          e.CLCM,
          e.CBCM,
        ],
      },
      r = e.IR + "\\s*\\(",
      s = {
        keyword:
          "int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong",
        built_in:
          "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
        literal: "true false nullptr NULL",
      },
      a = [t, e.CLCM, e.CBCM, i, n];
    return {
      aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
      k: s,
      i: "</",
      c: a.concat([
        o,
        {
          b:
            "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
          e: ">",
          k: s,
          c: ["self", t],
        },
        { b: e.IR + "::", k: s },
        {
          v: [
            { b: /=/, e: /;/ },
            { b: /\(/, e: /\)/ },
            { bK: "new throw return else", e: /;/ },
          ],
          k: s,
          c: a.concat([{ b: /\(/, e: /\)/, c: a.concat(["self"]), r: 0 }]),
          r: 0,
        },
        {
          cN: "function",
          b: "(" + e.IR + "[\\*&\\s]+)+" + r,
          rB: !0,
          e: /[{;=]/,
          eE: !0,
          k: s,
          i: /[^\w\s\*&]/,
          c: [
            { b: r, rB: !0, c: [e.TM], r: 0 },
            {
              cN: "params",
              b: /\(/,
              e: /\)/,
              k: s,
              r: 0,
              c: [e.CLCM, e.CBCM, n, i],
            },
            e.CLCM,
            e.CBCM,
            o,
          ],
        },
      ]),
    };
  }),
  hljs.registerLanguage("cs", function (e) {
    var t = {
        keyword:
          "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",
        literal: "null false true",
      },
      n = e.IR + "(<" + e.IR + ">)?(\\[\\])?";
    return {
      aliases: ["csharp"],
      k: t,
      i: /::/,
      c: [
        e.C("///", "$", {
          rB: !0,
          c: [
            {
              cN: "doctag",
              v: [{ b: "///", r: 0 }, { b: "<!--|-->" }, { b: "</?", e: ">" }],
            },
          ],
        }),
        e.CLCM,
        e.CBCM,
        {
          cN: "meta",
          b: "#",
          e: "$",
          k: {
            "meta-keyword":
              "if else elif endif define undef warning error line region endregion pragma checksum",
          },
        },
        { cN: "string", b: '@"', e: '"', c: [{ b: '""' }] },
        e.ASM,
        e.QSM,
        e.CNM,
        {
          bK: "class interface",
          e: /[{;=]/,
          i: /[^\s:]/,
          c: [e.TM, e.CLCM, e.CBCM],
        },
        {
          bK: "namespace",
          e: /[{;=]/,
          i: /[^\s:]/,
          c: [e.inherit(e.TM, { b: "[a-zA-Z](\\.?\\w)*" }), e.CLCM, e.CBCM],
        },
        { bK: "new return throw await", r: 0 },
        {
          cN: "function",
          b: "(" + n + "\\s+)+" + e.IR + "\\s*\\(",
          rB: !0,
          e: /[{;=]/,
          eE: !0,
          k: t,
          c: [
            { b: e.IR + "\\s*\\(", rB: !0, c: [e.TM], r: 0 },
            {
              cN: "params",
              b: /\(/,
              e: /\)/,
              eB: !0,
              eE: !0,
              k: t,
              r: 0,
              c: [e.ASM, e.QSM, e.CNM, e.CBCM],
            },
            e.CLCM,
            e.CBCM,
          ],
        },
      ],
    };
  }),
  hljs.registerLanguage("http", function () {
    var e = "HTTP/[0-9\\.]+";
    return {
      aliases: ["https"],
      i: "\\S",
      c: [
        { b: "^" + e, e: "$", c: [{ cN: "number", b: "\\b\\d{3}\\b" }] },
        {
          b: "^[A-Z]+ (.*?) " + e + "$",
          rB: !0,
          e: "$",
          c: [
            { cN: "string", b: " ", e: " ", eB: !0, eE: !0 },
            { b: e },
            { cN: "keyword", b: "[A-Z]+" },
          ],
        },
        {
          cN: "attribute",
          b: "^\\w",
          e: ": ",
          eE: !0,
          i: "\\n|\\s|=",
          starts: { e: "$", r: 0 },
        },
        { b: "\\n\\n", starts: { sL: [], eW: !0 } },
      ],
    };
  }),
  hljs.registerLanguage("json", function (e) {
    var t = { literal: "true false null" },
      n = [e.QSM, e.CNM],
      i = { e: ",", eW: !0, eE: !0, c: n, k: t },
      o = {
        b: "{",
        e: "}",
        c: [
          { cN: "attr", b: /"/, e: /"/, c: [e.BE], i: "\\n" },
          e.inherit(i, { b: /:/ }),
        ],
        i: "\\S",
      },
      r = { b: "\\[", e: "\\]", c: [e.inherit(i)], i: "\\S" };
    return n.splice(n.length, 0, o, r), { c: n, k: t, i: "\\S" };
  }),
  hljs.registerLanguage("dockerfile", function (e) {
    return {
      aliases: ["docker"],
      cI: !0,
      k:
        "from maintainer cmd expose add copy entrypoint volume user workdir onbuild run env label",
      c: [
        e.HCM,
        {
          k: "run cmd entrypoint volume add copy workdir onbuild label",
          b: /^ *(onbuild +)?(run|cmd|entrypoint|volume|add|copy|workdir|label) +/,
          starts: { e: /[^\\]\n/, sL: "bash" },
        },
        {
          k: "from maintainer expose env user onbuild",
          b: /^ *(onbuild +)?(from|maintainer|expose|env|user|onbuild) +/,
          e: /[^\\]\n/,
          c: [e.ASM, e.QSM, e.NM, e.HCM],
        },
      ],
    };
  }),
  hljs.registerLanguage("diff", function () {
    return {
      aliases: ["patch"],
      c: [
        {
          cN: "meta",
          r: 10,
          v: [
            { b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/ },
            { b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/ },
            { b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/ },
          ],
        },
        {
          cN: "comment",
          v: [
            { b: /Index: /, e: /$/ },
            { b: /=====/, e: /=====$/ },
            { b: /^\-\-\-/, e: /$/ },
            { b: /^\*{3} /, e: /$/ },
            { b: /^\+\+\+/, e: /$/ },
            { b: /\*{5}/, e: /\*{5}$/ },
          ],
        },
        { cN: "addition", b: "^\\+", e: "$" },
        { cN: "deletion", b: "^\\-", e: "$" },
        { cN: "addition", b: "^\\!", e: "$" },
      ],
    };
  }),
  hljs.registerLanguage("objectivec", function (e) {
    var t = { cN: "built_in", b: "(AV|CA|CF|CG|CI|MK|MP|NS|UI|XC)\\w+" },
      n = {
        keyword:
          "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",
        literal: "false true FALSE TRUE nil YES NO NULL",
        built_in:
          "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once",
      },
      i = /[a-zA-Z@][a-zA-Z0-9_]*/,
      o = "@interface @class @protocol @implementation";
    return {
      aliases: ["mm", "objc", "obj-c"],
      k: n,
      l: i,
      i: "</",
      c: [
        t,
        e.CLCM,
        e.CBCM,
        e.CNM,
        e.QSM,
        {
          cN: "string",
          v: [
            { b: '@"', e: '"', i: "\\n", c: [e.BE] },
            { b: "'", e: "[^\\\\]'", i: "[^\\\\][^']" },
          ],
        },
        {
          cN: "meta",
          b: "#",
          e: "$",
          c: [
            {
              cN: "meta-string",
              v: [
                { b: '"', e: '"' },
                { b: "<", e: ">" },
              ],
            },
          ],
        },
        {
          cN: "class",
          b: "(" + o.split(" ").join("|") + ")\\b",
          e: "({|$)",
          eE: !0,
          k: o,
          l: i,
          c: [e.UTM],
        },
        { b: "\\." + e.UIR, r: 0 },
      ],
    };
  }),
  hljs.registerLanguage("python", function (e) {
    var t = { cN: "meta", b: /^(>>>|\.\.\.) / },
      n = {
        cN: "string",
        c: [e.BE],
        v: [
          { b: /(u|b)?r?'''/, e: /'''/, c: [t], r: 10 },
          { b: /(u|b)?r?"""/, e: /"""/, c: [t], r: 10 },
          { b: /(u|r|ur)'/, e: /'/, r: 10 },
          { b: /(u|r|ur)"/, e: /"/, r: 10 },
          { b: /(b|br)'/, e: /'/ },
          { b: /(b|br)"/, e: /"/ },
          e.ASM,
          e.QSM,
        ],
      },
      i = {
        cN: "number",
        r: 0,
        v: [
          { b: e.BNR + "[lLjJ]?" },
          { b: "\\b(0o[0-7]+)[lLjJ]?" },
          { b: e.CNR + "[lLjJ]?" },
        ],
      },
      o = { cN: "params", b: /\(/, e: /\)/, c: ["self", t, i, n] };
    return {
      aliases: ["py", "gyp"],
      k: {
        keyword:
          "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",
        built_in: "Ellipsis NotImplemented",
      },
      i: /(<\/|->|\?)/,
      c: [
        t,
        i,
        n,
        e.HCM,
        {
          v: [
            { cN: "function", bK: "def", r: 10 },
            { cN: "class", bK: "class" },
          ],
          e: /:/,
          i: /[${=;\n,]/,
          c: [e.UTM, o, { b: /->/, eW: !0, k: "None" }],
        },
        { cN: "meta", b: /^[\t ]*@/, e: /$/ },
        { b: /\b(print|exec)\(/ },
      ],
    };
  }),
  hljs.registerLanguage("bash", function (e) {
    var t = {
        cN: "variable",
        v: [{ b: /\$[\w\d#@][\w\d_]*/ }, { b: /\$\{(.*?)}/ }],
      },
      n = {
        cN: "string",
        b: /"/,
        e: /"/,
        c: [e.BE, t, { cN: "variable", b: /\$\(/, e: /\)/, c: [e.BE] }],
      },
      i = { cN: "string", b: /'/, e: /'/ };
    return {
      aliases: ["sh", "zsh"],
      l: /-?[a-z\.]+/,
      k: {
        keyword: "if then else elif fi for while in do done case esac function",
        literal: "true false",
        built_in:
          "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
        _: "-ne -eq -lt -gt -f -d -e -s -l -a",
      },
      c: [
        { cN: "meta", b: /^#![^\n]+sh\s*$/, r: 10 },
        {
          cN: "function",
          b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
          rB: !0,
          c: [e.inherit(e.TM, { b: /\w[\w\d_]*/ })],
          r: 0,
        },
        e.HCM,
        n,
        i,
        t,
      ],
    };
  }),
  hljs.registerLanguage("coffeescript", function (e) {
    var t = {
        keyword:
          "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
        literal: "true false null undefined yes no on off",
        built_in: "npm require console print module global window document",
      },
      n = "[A-Za-z$_][0-9A-Za-z$_]*",
      i = { cN: "subst", b: /#\{/, e: /}/, k: t },
      o = [
        e.BNM,
        e.inherit(e.CNM, { starts: { e: "(\\s*/)?", r: 0 } }),
        {
          cN: "string",
          v: [
            { b: /'''/, e: /'''/, c: [e.BE] },
            { b: /'/, e: /'/, c: [e.BE] },
            { b: /"""/, e: /"""/, c: [e.BE, i] },
            { b: /"/, e: /"/, c: [e.BE, i] },
          ],
        },
        {
          cN: "regexp",
          v: [
            { b: "///", e: "///", c: [i, e.HCM] },
            { b: "//[gim]*", r: 0 },
            { b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/ },
          ],
        },
        { b: "@" + n },
        { b: "`", e: "`", eB: !0, eE: !0, sL: "javascript" },
      ];
    i.c = o;
    var r = e.inherit(e.TM, { b: n }),
      s = "(\\(.*\\))?\\s*\\B[-=]>",
      a = {
        cN: "params",
        b: "\\([^\\(]",
        rB: !0,
        c: [{ b: /\(/, e: /\)/, k: t, c: ["self"].concat(o) }],
      };
    return {
      aliases: ["coffee", "cson", "iced"],
      k: t,
      i: /\/\*/,
      c: o.concat([
        e.C("###", "###"),
        e.HCM,
        {
          cN: "function",
          b: "^\\s*" + n + "\\s*=\\s*" + s,
          e: "[-=]>",
          rB: !0,
          c: [r, a],
        },
        {
          b: /[:\(,=]\s*/,
          r: 0,
          c: [{ cN: "function", b: s, e: "[-=]>", rB: !0, c: [a] }],
        },
        {
          cN: "class",
          bK: "class",
          e: "$",
          i: /[:="\[\]]/,
          c: [{ bK: "extends", eW: !0, i: /[:="\[\]]/, c: [r] }, r],
        },
        { b: n + ":", e: ":", rB: !0, rE: !0, r: 0 },
      ]),
    };
  }),
  hljs.registerLanguage("ruby", function (e) {
    var t =
        "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
      n = {
        keyword:
          "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
        literal: "true false nil",
      },
      i = { cN: "doctag", b: "@[A-Za-z]+" },
      o = { b: "#<", e: ">" },
      r = [
        e.C("#", "$", { c: [i] }),
        e.C("^\\=begin", "^\\=end", { c: [i], r: 10 }),
        e.C("^__END__", "\\n$"),
      ],
      s = { cN: "subst", b: "#\\{", e: "}", k: n },
      a = {
        cN: "string",
        c: [e.BE, s],
        v: [
          { b: /'/, e: /'/ },
          { b: /"/, e: /"/ },
          { b: /`/, e: /`/ },
          { b: "%[qQwWx]?\\(", e: "\\)" },
          { b: "%[qQwWx]?\\[", e: "\\]" },
          { b: "%[qQwWx]?{", e: "}" },
          { b: "%[qQwWx]?<", e: ">" },
          { b: "%[qQwWx]?/", e: "/" },
          { b: "%[qQwWx]?%", e: "%" },
          { b: "%[qQwWx]?-", e: "-" },
          { b: "%[qQwWx]?\\|", e: "\\|" },
          {
            b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/,
          },
        ],
      },
      l = { cN: "params", b: "\\(", e: "\\)", endsParent: !0, k: n },
      c = [
        a,
        o,
        {
          cN: "class",
          bK: "class module",
          e: "$|;",
          i: /=/,
          c: [
            e.inherit(e.TM, { b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?" }),
            { b: "<\\s*", c: [{ b: "(" + e.IR + "::)?" + e.IR }] },
          ].concat(r),
        },
        {
          cN: "function",
          bK: "def",
          e: "$|;",
          c: [e.inherit(e.TM, { b: t }), l].concat(r),
        },
        { b: e.IR + "::" },
        { cN: "symbol", b: e.UIR + "(\\!|\\?)?:", r: 0 },
        { cN: "symbol", b: ":(?!\\s)", c: [a, { b: t }], r: 0 },
        {
          cN: "number",
          b:
            "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
          r: 0,
        },
        { b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))" },
        { cN: "params", b: /\|/, e: /\|/, k: n },
        {
          b: "(" + e.RSR + ")\\s*",
          c: [
            o,
            {
              cN: "regexp",
              c: [e.BE, s],
              i: /\n/,
              v: [
                { b: "/", e: "/[a-z]*" },
                { b: "%r{", e: "}[a-z]*" },
                { b: "%r\\(", e: "\\)[a-z]*" },
                { b: "%r!", e: "![a-z]*" },
                { b: "%r\\[", e: "\\][a-z]*" },
              ],
            },
          ].concat(r),
          r: 0,
        },
      ].concat(r);
    (s.c = c), (l.c = c);
    var d = "[>?]>",
      u = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
      p = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",
      f = [
        { b: /^\s*=>/, starts: { e: "$", c: c } },
        {
          cN: "meta",
          b: "^(" + d + "|" + u + "|" + p + ")",
          starts: { e: "$", c: c },
        },
      ];
    return {
      aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
      k: n,
      i: /\/\*/,
      c: r.concat(f).concat(c),
    };
  }),
  hljs.registerLanguage("yaml", function (e) {
    var t = { literal: "{ } true false yes no Yes No True False null" },
      n = "^[ \\-]*",
      i = "[a-zA-Z_][\\w\\-]*",
      o = {
        cN: "attr",
        v: [
          { b: n + i + ":" },
          { b: n + '"' + i + '":' },
          { b: n + "'" + i + "':" },
        ],
      },
      r = {
        cN: "template-variable",
        v: [
          { b: "{{", e: "}}" },
          { b: "%{", e: "}" },
        ],
      },
      s = {
        cN: "string",
        r: 0,
        v: [
          { b: /'/, e: /'/ },
          { b: /"/, e: /"/ },
        ],
        c: [e.BE, r],
      };
    return {
      cI: !0,
      aliases: ["yml", "YAML", "yaml"],
      c: [
        o,
        { cN: "meta", b: "^---s*$", r: 10 },
        { cN: "string", b: "[\\|>] *$", rE: !0, c: s.c, e: o.v[0].b },
        { b: "<%[%=-]?", e: "[%-]?%>", sL: "ruby", eB: !0, eE: !0, r: 0 },
        { cN: "type", b: "!!" + e.UIR },
        { cN: "meta", b: "&" + e.UIR + "$" },
        { cN: "meta", b: "\\*" + e.UIR + "$" },
        { cN: "bullet", b: "^ *-", r: 0 },
        s,
        e.HCM,
        e.CNM,
      ],
      k: t,
    };
  }),
  hljs.registerLanguage("css", function (e) {
    var t = "[a-zA-Z-][a-zA-Z0-9_-]*",
      n = {
        b: /[A-Z\_\.\-]+\s*:/,
        rB: !0,
        e: ";",
        eW: !0,
        c: [
          {
            cN: "attribute",
            b: /\S/,
            e: ":",
            eE: !0,
            starts: {
              eW: !0,
              eE: !0,
              c: [
                {
                  b: /[\w-]+\(/,
                  rB: !0,
                  c: [
                    { cN: "built_in", b: /[\w-]+/ },
                    { b: /\(/, e: /\)/, c: [e.ASM, e.QSM] },
                  ],
                },
                e.CSSNM,
                e.QSM,
                e.ASM,
                e.CBCM,
                { cN: "number", b: "#[0-9A-Fa-f]+" },
                { cN: "meta", b: "!important" },
              ],
            },
          },
        ],
      };
    return {
      cI: !0,
      i: /[=\/|'\$]/,
      c: [
        e.CBCM,
        { cN: "selector-id", b: /#[A-Za-z0-9_-]+/ },
        { cN: "selector-class", b: /\.[A-Za-z0-9_-]+/ },
        { cN: "selector-attr", b: /\[/, e: /\]/, i: "$" },
        { cN: "selector-pseudo", b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/ },
        { b: "@(font-face|page)", l: "[a-z-]+", k: "font-face page" },
        {
          b: "@",
          e: "[{;]",
          i: /:/,
          c: [
            { cN: "keyword", b: /\w+/ },
            { b: /\s/, eW: !0, eE: !0, r: 0, c: [e.ASM, e.QSM, e.CSSNM] },
          ],
        },
        { cN: "selector-tag", b: t, r: 0 },
        { b: "{", e: "}", i: /\S/, c: [e.CBCM, n] },
      ],
    };
  }),
  hljs.registerLanguage("perl", function (e) {
    var t =
        "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
      n = { cN: "subst", b: "[$@]\\{", e: "\\}", k: t },
      i = { b: "->{", e: "}" },
      o = {
        v: [
          { b: /\$\d/ },
          { b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/ },
          { b: /[\$%@][^\s\w{]/, r: 0 },
        ],
      },
      r = [e.BE, n, o],
      s = [
        o,
        e.HCM,
        e.C("^\\=\\w", "\\=cut", { eW: !0 }),
        i,
        {
          cN: "string",
          c: r,
          v: [
            { b: "q[qwxr]?\\s*\\(", e: "\\)", r: 5 },
            { b: "q[qwxr]?\\s*\\[", e: "\\]", r: 5 },
            { b: "q[qwxr]?\\s*\\{", e: "\\}", r: 5 },
            { b: "q[qwxr]?\\s*\\|", e: "\\|", r: 5 },
            { b: "q[qwxr]?\\s*\\<", e: "\\>", r: 5 },
            { b: "qw\\s+q", e: "q", r: 5 },
            { b: "'", e: "'", c: [e.BE] },
            { b: '"', e: '"' },
            { b: "`", e: "`", c: [e.BE] },
            { b: "{\\w+}", c: [], r: 0 },
            { b: "-?\\w+\\s*\\=\\>", c: [], r: 0 },
          ],
        },
        {
          cN: "number",
          b:
            "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
          r: 0,
        },
        {
          b:
            "(\\/\\/|" +
            e.RSR +
            "|\\b(split|return|print|reverse|grep)\\b)\\s*",
          k: "split return print reverse grep",
          r: 0,
          c: [
            e.HCM,
            {
              cN: "regexp",
              b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
              r: 10,
            },
            { cN: "regexp", b: "(m|qr)?/", e: "/[a-z]*", c: [e.BE], r: 0 },
          ],
        },
        {
          cN: "function",
          bK: "sub",
          e: "(\\s*\\(.*?\\))?[;{]",
          eE: !0,
          r: 5,
          c: [e.TM],
        },
        { b: "-\\w\\b", r: 0 },
        {
          b: "^__DATA__$",
          e: "^__END__$",
          sL: "mojolicious",
          c: [{ b: "^@@.*", e: "$", cN: "comment" }],
        },
      ];
    return (
      (n.c = s), (i.c = s), { aliases: ["pl", "pm"], l: /[\w\.]+/, k: t, c: s }
    );
  }),
  hljs.registerLanguage("javascript", function (e) {
    return {
      aliases: ["js", "jsx"],
      k: {
        keyword:
          "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
        literal: "true false null undefined NaN Infinity",
        built_in:
          "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise",
      },
      c: [
        { cN: "meta", r: 10, b: /^\s*['"]use (strict|asm)['"]/ },
        { cN: "meta", b: /^#!/, e: /$/ },
        e.ASM,
        e.QSM,
        {
          cN: "string",
          b: "`",
          e: "`",
          c: [e.BE, { cN: "subst", b: "\\$\\{", e: "\\}" }],
        },
        e.CLCM,
        e.CBCM,
        {
          cN: "number",
          v: [
            { b: "\\b(0[bB][01]+)" },
            { b: "\\b(0[oO][0-7]+)" },
            { b: e.CNR },
          ],
          r: 0,
        },
        {
          b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
          k: "return throw case",
          c: [
            e.CLCM,
            e.CBCM,
            e.RM,
            {
              b: /</,
              e: /(\/\w+|\w+\/)>/,
              sL: "xml",
              c: [
                { b: /<\w+\s*\/>/, skip: !0 },
                { b: /<\w+/, e: /(\/\w+|\w+\/)>/, skip: !0, c: ["self"] },
              ],
            },
          ],
          r: 0,
        },
        {
          cN: "function",
          bK: "function",
          e: /\{/,
          eE: !0,
          c: [
            e.inherit(e.TM, { b: /[A-Za-z$_][0-9A-Za-z$_]*/ }),
            {
              cN: "params",
              b: /\(/,
              e: /\)/,
              eB: !0,
              eE: !0,
              c: [e.CLCM, e.CBCM],
            },
          ],
          i: /\[|%/,
        },
        { b: /\$[(.]/ },
        e.METHOD_GUARD,
        {
          cN: "class",
          bK: "class",
          e: /[{;=]/,
          eE: !0,
          i: /[:"\[\]]/,
          c: [{ bK: "extends" }, e.UTM],
        },
        { bK: "constructor", e: /\{/, eE: !0 },
      ],
      i: /#(?!!)/,
    };
  }),
  hljs.registerLanguage("markdown", function () {
    return {
      aliases: ["md", "mkdown", "mkd"],
      c: [
        {
          cN: "section",
          v: [{ b: "^#{1,6}", e: "$" }, { b: "^.+?\\n[=-]{2,}$" }],
        },
        { b: "<", e: ">", sL: "xml", r: 0 },
        { cN: "bullet", b: "^([*+-]|(\\d+\\.))\\s+" },
        { cN: "strong", b: "[*_]{2}.+?[*_]{2}" },
        { cN: "emphasis", v: [{ b: "\\*.+?\\*" }, { b: "_.+?_", r: 0 }] },
        { cN: "quote", b: "^>\\s+", e: "$" },
        {
          cN: "code",
          v: [
            { b: "^```w*s*$", e: "^```s*$" },
            { b: "`.+?`" },
            { b: "^( {4}| )", e: "$", r: 0 },
          ],
        },
        { b: "^[-\\*]{3,}", e: "$" },
        {
          b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
          rB: !0,
          c: [
            { cN: "string", b: "\\[", e: "\\]", eB: !0, rE: !0, r: 0 },
            { cN: "link", b: "\\]\\(", e: "\\)", eB: !0, eE: !0 },
            { cN: "symbol", b: "\\]\\[", e: "\\]", eB: !0, eE: !0 },
          ],
          r: 10,
        },
        {
          b: "^\\[.+\\]:",
          rB: !0,
          c: [
            {
              cN: "symbol",
              b: "\\[",
              e: "\\]:",
              eB: !0,
              eE: !0,
              starts: { cN: "link", e: "$" },
            },
          ],
        },
      ],
    };
  }),
  hljs.registerLanguage("makefile", function (e) {
    var t = { cN: "variable", b: /\$\(/, e: /\)/, c: [e.BE] };
    return {
      aliases: ["mk", "mak"],
      c: [
        e.HCM,
        {
          b: /^\w+\s*\W*=/,
          rB: !0,
          r: 0,
          starts: { e: /\s*\W*=/, eE: !0, starts: { e: /$/, r: 0, c: [t] } },
        },
        { cN: "section", b: /^[\w]+:\s*$/ },
        {
          cN: "meta",
          b: /^\.PHONY:/,
          e: /$/,
          k: { "meta-keyword": ".PHONY" },
          l: /[\.\w]+/,
        },
        { b: /^\t+/, e: /$/, r: 0, c: [e.QSM, t] },
      ],
    };
  }),
  hljs.registerLanguage("java", function (e) {
    var t = e.UIR + "(<" + e.UIR + "(\\s*,\\s*" + e.UIR + ")*>)?",
      n =
        "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports",
      i =
        "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
      o = { cN: "number", b: i, r: 0 };
    return {
      aliases: ["jsp"],
      k: n,
      i: /<\/|#/,
      c: [
        e.C("/\\*\\*", "\\*/", {
          r: 0,
          c: [
            { b: /\w+@/, r: 0 },
            { cN: "doctag", b: "@[A-Za-z]+" },
          ],
        }),
        e.CLCM,
        e.CBCM,
        e.ASM,
        e.QSM,
        {
          cN: "class",
          bK: "class interface",
          e: /[{;=]/,
          eE: !0,
          k: "class interface",
          i: /[:"\[\]]/,
          c: [{ bK: "extends implements" }, e.UTM],
        },
        { bK: "new throw return else", r: 0 },
        {
          cN: "function",
          b: "(" + t + "\\s+)+" + e.UIR + "\\s*\\(",
          rB: !0,
          e: /[{;=]/,
          eE: !0,
          k: n,
          c: [
            { b: e.UIR + "\\s*\\(", rB: !0, r: 0, c: [e.UTM] },
            {
              cN: "params",
              b: /\(/,
              e: /\)/,
              k: n,
              r: 0,
              c: [e.ASM, e.QSM, e.CNM, e.CBCM],
            },
            e.CLCM,
            e.CBCM,
          ],
        },
        o,
        { cN: "meta", b: "@[A-Za-z]+" },
      ],
    };
  }),
  hljs.registerLanguage("php", function (e) {
    var t = { b: "\\$+[a-zA-Z_-\xff][a-zA-Z0-9_-\xff]*" },
      n = { cN: "meta", b: /<\?(php)?|\?>/ },
      i = {
        cN: "string",
        c: [e.BE, n],
        v: [
          { b: 'b"', e: '"' },
          { b: "b'", e: "'" },
          e.inherit(e.ASM, { i: null }),
          e.inherit(e.QSM, { i: null }),
        ],
      },
      o = { v: [e.BNM, e.CNM] };
    return {
      aliases: ["php3", "php4", "php5", "php6"],
      cI: !0,
      k:
        "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
      c: [
        e.HCM,
        e.C("//", "$", { c: [n] }),
        e.C("/\\*", "\\*/", { c: [{ cN: "doctag", b: "@[A-Za-z]+" }] }),
        e.C("__halt_compiler.+?;", !1, {
          eW: !0,
          k: "__halt_compiler",
          l: e.UIR,
        }),
        {
          cN: "string",
          b: /<<<['"]?\w+['"]?$/,
          e: /^\w+;?$/,
          c: [
            e.BE,
            { cN: "subst", v: [{ b: /\$\w+/ }, { b: /\{\$/, e: /\}/ }] },
          ],
        },
        n,
        t,
        { b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ },
        {
          cN: "function",
          bK: "function",
          e: /[;{]/,
          eE: !0,
          i: "\\$|\\[|%",
          c: [
            e.UTM,
            { cN: "params", b: "\\(", e: "\\)", c: ["self", t, e.CBCM, i, o] },
          ],
        },
        {
          cN: "class",
          bK: "class interface",
          e: "{",
          eE: !0,
          i: /[:\(\$"]/,
          c: [{ bK: "extends implements" }, e.UTM],
        },
        { bK: "namespace", e: ";", i: /[\.']/, c: [e.UTM] },
        { bK: "use", e: ";", c: [e.UTM] },
        { b: "=>" },
        i,
        o,
      ],
    };
  }),
  hljs.registerLanguage("clojure", function (e) {
    var t = {
        "builtin-name":
          "def defonce cond apply if-not if-let if not not= = < > <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize",
      },
      n = "a-zA-Z_\\-!.?+*=<>&#'",
      i = "[" + n + "][" + n + "0-9/;:]*",
      o = "[-+]?\\d+(\\.\\d+)?",
      r = { b: i, r: 0 },
      s = { cN: "number", b: o, r: 0 },
      a = e.inherit(e.QSM, { i: null }),
      l = e.C(";", "$", { r: 0 }),
      c = { cN: "literal", b: /\b(true|false|nil)\b/ },
      d = { b: "[\\[\\{]", e: "[\\]\\}]" },
      u = { cN: "comment", b: "\\^" + i },
      p = e.C("\\^\\{", "\\}"),
      f = { cN: "symbol", b: "[:]" + i },
      h = { b: "\\(", e: "\\)" },
      m = { eW: !0, r: 0 },
      g = { k: t, l: i, cN: "name", b: i, starts: m },
      v = [h, a, u, p, l, f, d, s, c, r];
    return (
      (h.c = [e.C("comment", ""), g, m]),
      (m.c = v),
      (d.c = v),
      { aliases: ["clj"], i: /\S/, c: [h, a, u, p, l, f, d, s, c] }
    );
  }),
  hljs.registerLanguage("clojure-repl", function () {
    return {
      c: [
        {
          cN: "meta",
          b: /^([\w.-]+|\s*#_)=>/,
          starts: { e: /$/, sL: "clojure" },
        },
      ],
    };
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (n) {
          return t(e, n);
        })
      : "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = t(e, require("jquery")))
      : (e.lity = t(e, e.jQuery || e.Zepto));
  })("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    function n(e) {
      var t = _();
      return (
        H && e.length
          ? (e.one(H, t.resolve), setTimeout(t.resolve, 500))
          : t.resolve(),
        t.promise()
      );
    }
    function i(e, n, i) {
      if (1 === arguments.length) return t.extend({}, e);
      if ("string" == typeof n) {
        if ("undefined" == typeof i)
          return "undefined" == typeof e[n] ? null : e[n];
        e[n] = i;
      } else t.extend(e, n);
      return this;
    }
    function o(e) {
      for (
        var t,
          n = decodeURI(e.split("#")[0]).split("&"),
          i = {},
          o = 0,
          r = n.length;
        r > o;
        o++
      )
        n[o] && ((t = n[o].split("=")), (i[t[0]] = t[1]));
      return i;
    }
    function r(e, n) {
      return e + (e.indexOf("?") > -1 ? "&" : "?") + t.param(n);
    }
    function s(e, t) {
      var n = e.indexOf("#");
      return -1 === n ? t : (n > 0 && (e = e.substr(n)), t + e);
    }
    function a(e) {
      return t('<span class="lity-error"></span>').append(e);
    }
    function l(e, n) {
      var i =
          (n.opener() && n.opener().data("lity-desc")) ||
          "Image with no description",
        o = t('<img src="' + e + '" alt="' + i + '"/>'),
        r = _(),
        s = function () {
          r.reject(a("Failed loading image"));
        };
      return (
        o
          .on("load", function () {
            return 0 === this.naturalWidth ? s() : void r.resolve(o);
          })
          .on("error", s),
        r.promise()
      );
    }
    function c(e, n) {
      var i, o, r;
      try {
        i = t(e);
      } catch (s) {
        return !1;
      }
      return i.length
        ? ((o = t('<i style="display:none !important"></i>')),
          (r = i.hasClass("lity-hide")),
          n.element().one("lity:remove", function () {
            o.before(i).remove(),
              r &&
                !i.closest(".lity-content").length &&
                i.addClass("lity-hide");
          }),
          i.removeClass("lity-hide").after(o))
        : !1;
    }
    function d(e) {
      var n = I.exec(e);
      return n
        ? h(
            s(
              e,
              r(
                "https://www.youtube" + (n[2] || "") + ".com/embed/" + n[4],
                t.extend({ autoplay: 1 }, o(n[5] || ""))
              )
            )
          )
        : !1;
    }
    function u(e) {
      var n = O.exec(e);
      return n
        ? h(
            s(
              e,
              r(
                "https://player.vimeo.com/video/" + n[3],
                t.extend({ autoplay: 1 }, o(n[4] || ""))
              )
            )
          )
        : !1;
    }
    function p(e) {
      var n = q.exec(e);
      return n
        ? (0 !== e.indexOf("http") && (e = "https:" + e),
          h(
            s(
              e,
              r(
                "https://www.facebook.com/plugins/video.php?href=" + e,
                t.extend({ autoplay: 1 }, o(n[4] || ""))
              )
            )
          ))
        : !1;
    }
    function f(e) {
      var t = R.exec(e);
      return t
        ? h(
            s(
              e,
              r("https://www.google." + t[3] + "/maps?" + t[6], {
                output: t[6].indexOf("layer=c") > 0 ? "svembed" : "embed",
              })
            )
          )
        : !1;
    }
    function h(e) {
      return (
        '<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen allow="autoplay; fullscreen" src="' +
        e +
        '"/></div>'
      );
    }
    function m() {
      return S.documentElement.clientHeight
        ? S.documentElement.clientHeight
        : Math.round($.height());
    }
    function g(e) {
      var t = x();
      t &&
        (27 === e.keyCode && t.options("esc") && t.close(),
        9 === e.keyCode && v(e, t));
    }
    function v(e, t) {
      var n = t.element().find(j),
        i = n.index(S.activeElement);
      e.shiftKey && 0 >= i
        ? (n.get(n.length - 1).focus(), e.preventDefault())
        : e.shiftKey ||
          i !== n.length - 1 ||
          (n.get(0).focus(), e.preventDefault());
    }
    function b() {
      t.each(E, function (e, t) {
        t.resize();
      });
    }
    function y(e) {
      1 === E.unshift(e) &&
        (N.addClass("lity-active"), $.on({ resize: b, keydown: g })),
        t("body > *")
          .not(e.element())
          .addClass("lity-hidden")
          .each(function () {
            var e = t(this);
            void 0 === e.data(D) && e.data(D, e.attr(A) || null);
          })
          .attr(A, "true");
    }
    function w(e) {
      var n;
      e.element().attr(A, "true"),
        1 === E.length &&
          (N.removeClass("lity-active"), $.off({ resize: b, keydown: g })),
        (E = t.grep(E, function (t) {
          return e !== t;
        })),
        (n = E.length ? E[0].element() : t(".lity-hidden")),
        n.removeClass("lity-hidden").each(function () {
          var e = t(this),
            n = e.data(D);
          n ? e.attr(A, n) : e.removeAttr(A), e.removeData(D);
        });
    }
    function x() {
      return 0 === E.length ? null : E[0];
    }
    function k(e, n, i, o) {
      var r,
        s = "inline",
        a = t.extend({}, i);
      return (
        o && a[o]
          ? ((r = a[o](e, n)), (s = o))
          : (t.each(["inline", "iframe"], function (e, t) {
              delete a[t], (a[t] = i[t]);
            }),
            t.each(a, function (t, i) {
              return i
                ? i.test && !i.test(e, n)
                  ? !0
                  : ((r = i(e, n)), !1 !== r ? ((s = t), !1) : void 0)
                : !0;
            })),
        { handler: s, content: r || "" }
      );
    }
    function T(e, o, r, s) {
      function a(e) {
        (d = t(e).css("max-height", m() + "px")),
          c.find(".lity-loader").each(function () {
            var e = t(this);
            n(e).always(function () {
              e.remove();
            });
          }),
          c.removeClass("lity-loading").find(".lity-content").empty().append(d),
          (p = !0),
          d.trigger("lity:ready", [u]);
      }
      var l,
        c,
        d,
        u = this,
        p = !1,
        f = !1;
      (o = t.extend({}, L, o)),
        (c = t(o.template)),
        (u.element = function () {
          return c;
        }),
        (u.opener = function () {
          return r;
        }),
        (u.options = t.proxy(i, u, o)),
        (u.handlers = t.proxy(i, u, o.handlers)),
        (u.resize = function () {
          p &&
            !f &&
            d.css("max-height", m() + "px").trigger("lity:resize", [u]);
        }),
        (u.close = function () {
          if (p && !f) {
            (f = !0), w(u);
            var e = _();
            if (
              s &&
              (S.activeElement === c[0] || t.contains(c[0], S.activeElement))
            )
              try {
                s.focus();
              } catch (i) {}
            return (
              d.trigger("lity:close", [u]),
              c.removeClass("lity-opened").addClass("lity-closed"),
              n(d.add(c)).always(function () {
                d.trigger("lity:remove", [u]),
                  c.remove(),
                  (c = void 0),
                  e.resolve();
              }),
              e.promise()
            );
          }
        }),
        (l = k(e, u, o.handlers, o.handler)),
        c
          .attr(A, "false")
          .addClass("lity-loading lity-opened lity-" + l.handler)
          .appendTo("body")
          .focus()
          .on("click", "[data-lity-close]", function (e) {
            t(e.target).is("[data-lity-close]") && u.close();
          })
          .trigger("lity:open", [u]),
        y(u),
        t.when(l.content).always(a);
    }
    function C(e, n, i) {
      e.preventDefault
        ? (e.preventDefault(),
          (i = t(this)),
          (e = i.data("lity-target") || i.attr("href") || i.attr("src")))
        : (i = t(i));
      var o = new T(
        e,
        t.extend({}, i.data("lity-options") || i.data("lity"), n),
        i,
        S.activeElement
      );
      return e.preventDefault ? void 0 : o;
    }
    var S = e.document,
      $ = t(e),
      _ = t.Deferred,
      N = t("html"),
      E = [],
      A = "aria-hidden",
      D = "lity-" + A,
      j =
        'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])',
      L = {
        esc: !0,
        handler: null,
        handlers: {
          image: l,
          inline: c,
          youtube: d,
          vimeo: u,
          googlemaps: f,
          facebookvideo: p,
          iframe: h,
        },
        template:
          '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>',
      },
      M = /(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i,
      I = /(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i,
      O = /(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/,
      R = /((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i,
      q = /(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i,
      H = (function () {
        var e = S.createElement("div"),
          t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend",
          };
        for (var n in t) if (void 0 !== e.style[n]) return t[n];
        return !1;
      })();
    return (
      (l.test = function (e) {
        return M.test(e);
      }),
      (C.version = "2.4.1"),
      (C.options = t.proxy(i, C, L)),
      (C.handlers = t.proxy(i, C, L.handlers)),
      (C.current = x),
      t(S).on("click.lity", "[data-lity]", C),
      C
    );
  });
var Mailcheck = {
  domainThreshold: 2,
  secondLevelThreshold: 2,
  topLevelThreshold: 2,
  defaultDomains: [
    "msn.com",
    "bellsouth.net",
    "telus.net",
    "comcast.net",
    "optusnet.com.au",
    "earthlink.net",
    "qq.com",
    "sky.com",
    "icloud.com",
    "mac.com",
    "sympatico.ca",
    "googlemail.com",
    "att.net",
    "xtra.co.nz",
    "web.de",
    "cox.net",
    "gmail.com",
    "ymail.com",
    "aim.com",
    "rogers.com",
    "verizon.net",
    "rocketmail.com",
    "google.com",
    "optonline.net",
    "sbcglobal.net",
    "aol.com",
    "me.com",
    "btinternet.com",
    "charter.net",
    "shaw.ca",
  ],
  defaultSecondLevelDomains: [
    "yahoo",
    "hotmail",
    "mail",
    "live",
    "outlook",
    "gmx",
  ],
  defaultTopLevelDomains: [
    "com",
    "com.au",
    "com.tw",
    "ca",
    "co.nz",
    "co.uk",
    "de",
    "fr",
    "it",
    "ru",
    "net",
    "org",
    "edu",
    "gov",
    "jp",
    "nl",
    "kr",
    "se",
    "eu",
    "ie",
    "co.il",
    "us",
    "at",
    "be",
    "dk",
    "hk",
    "es",
    "gr",
    "ch",
    "no",
    "cz",
    "in",
    "net",
    "net.au",
    "info",
    "biz",
    "mil",
    "co.jp",
    "sg",
    "hu",
    "uk",
  ],
  run: function (e) {
    (e.domains = e.domains || Mailcheck.defaultDomains),
      (e.secondLevelDomains =
        e.secondLevelDomains || Mailcheck.defaultSecondLevelDomains),
      (e.topLevelDomains =
        e.topLevelDomains || Mailcheck.defaultTopLevelDomains),
      (e.distanceFunction = e.distanceFunction || Mailcheck.sift3Distance);
    var t = function (e) {
        return e;
      },
      n = e.suggested || t,
      i = e.empty || t,
      o = Mailcheck.suggest(
        Mailcheck.encodeEmail(e.email),
        e.domains,
        e.secondLevelDomains,
        e.topLevelDomains,
        e.distanceFunction
      );
    return o ? n(o) : i();
  },
  suggest: function (e, t, n, i, o) {
    e = e.toLowerCase();
    var r = this.splitEmail(e);
    if (
      n &&
      i &&
      -1 !== n.indexOf(r.secondLevelDomain) &&
      -1 !== i.indexOf(r.topLevelDomain)
    )
      return !1;
    var s = this.findClosestDomain(r.domain, t, o, this.domainThreshold);
    if (s)
      return s == r.domain
        ? !1
        : { address: r.address, domain: s, full: r.address + "@" + s };
    var a = this.findClosestDomain(
        r.secondLevelDomain,
        n,
        o,
        this.secondLevelThreshold
      ),
      l = this.findClosestDomain(
        r.topLevelDomain,
        i,
        o,
        this.topLevelThreshold
      );
    if (r.domain) {
      var s = r.domain,
        c = !1;
      if (
        (a &&
          a != r.secondLevelDomain &&
          ((s = s.replace(r.secondLevelDomain, a)), (c = !0)),
        l &&
          l != r.topLevelDomain &&
          ((s = s.replace(new RegExp(r.topLevelDomain + "$"), l)), (c = !0)),
        1 == c)
      )
        return { address: r.address, domain: s, full: r.address + "@" + s };
    }
    return !1;
  },
  findClosestDomain: function (e, t, n, i) {
    i = i || this.topLevelThreshold;
    var o,
      r = 1 / 0,
      s = null;
    if (!e || !t) return !1;
    n || (n = this.sift3Distance);
    for (var a = 0; a < t.length; a++) {
      if (e === t[a]) return e;
      (o = n(e, t[a])), r > o && ((r = o), (s = t[a]));
    }
    return i >= r && null !== s ? s : !1;
  },
  sift3Distance: function (e, t) {
    if (null == e || 0 === e.length)
      return null == t || 0 === t.length ? 0 : t.length;
    if (null == t || 0 === t.length) return e.length;
    for (
      var n = 0, i = 0, o = 0, r = 0, s = 5;
      n + i < e.length && n + o < t.length;

    ) {
      if (e.charAt(n + i) == t.charAt(n + o)) r++;
      else {
        (i = 0), (o = 0);
        for (var a = 0; s > a; a++) {
          if (n + a < e.length && e.charAt(n + a) == t.charAt(n)) {
            i = a;
            break;
          }
          if (n + a < t.length && e.charAt(n) == t.charAt(n + a)) {
            o = a;
            break;
          }
        }
      }
      n++;
    }
    return (e.length + t.length) / 2 - r;
  },
  splitEmail: function (e) {
    var t = e.trim().split("@");
    if (t.length < 2) return !1;
    for (var n = 0; n < t.length; n++) if ("" === t[n]) return !1;
    var i = t.pop(),
      o = i.split("."),
      r = "",
      s = "";
    if (0 == o.length) return !1;
    if (1 == o.length) s = o[0];
    else {
      r = o[0];
      for (var n = 1; n < o.length; n++) s += o[n] + ".";
      s = s.substring(0, s.length - 1);
    }
    return {
      topLevelDomain: s,
      secondLevelDomain: r,
      domain: i,
      address: t.join("@"),
    };
  },
  encodeEmail: function (e) {
    var t = encodeURI(e);
    return (t = t
      .replace("%20", " ")
      .replace("%25", "%")
      .replace("%5E", "^")
      .replace("%60", "`")
      .replace("%7B", "{")
      .replace("%7C", "|")
      .replace("%7D", "}"));
  },
};
"undefined" != typeof module && module.exports && (module.exports = Mailcheck),
  "function" == typeof define &&
    define.amd &&
    define("mailcheck", [], function () {
      return Mailcheck;
    }),
  "undefined" != typeof window &&
    window.jQuery &&
    !(function (e) {
      e.fn.mailcheck = function (e) {
        var t = this;
        if (e.suggested) {
          var n = e.suggested;
          e.suggested = function (e) {
            n(t, e);
          };
        }
        if (e.empty) {
          var i = e.empty;
          e.empty = function () {
            i.call(null, t);
          };
        }
        (e.email = this.val()), Mailcheck.run(e);
      };
    })(jQuery),
  String.prototype.startsWith ||
    (String.prototype.startsWith = function (e, t) {
      return (t = t || 0), this.substr(t, e.length) === e;
    }),
  String.prototype.endsWith ||
    (String.prototype.endsWith = function (e, t) {
      var n = this.toString();
      ("number" != typeof t ||
        !isFinite(t) ||
        Math.floor(t) !== t ||
        t > n.length) &&
        (t = n.length),
        (t -= e.length);
      var i = n.lastIndexOf(e, t);
      return -1 !== i && i === t;
    }),
  Array.from ||
    (Array.from = (function () {
      var e = Object.prototype.toString,
        t = function (t) {
          return "function" == typeof t || "[object Function]" === e.call(t);
        },
        n = function (e) {
          var t = Number(e);
          return isNaN(t)
            ? 0
            : 0 !== t && isFinite(t)
            ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t))
            : t;
        },
        i = Math.pow(2, 53) - 1,
        o = function (e) {
          var t = n(e);
          return Math.min(Math.max(t, 0), i);
        };
      return function (e) {
        var n = this,
          i = Object(e);
        if (null == e)
          throw new TypeError(
            "Array.from requires an array-like object - not null or undefined"
          );
        var r,
          s = arguments.length > 1 ? arguments[1] : void 0;
        if ("undefined" != typeof s) {
          if (!t(s))
            throw new TypeError(
              "Array.from: when provided, the second argument must be a function"
            );
          arguments.length > 2 && (r = arguments[2]);
        }
        for (
          var a,
            l = o(i.length),
            c = t(n) ? Object(new n(l)) : new Array(l),
            d = 0;
          l > d;

        )
          (a = i[d]),
            s
              ? (c[d] = "undefined" == typeof r ? s(a, d) : s.call(r, a, d))
              : (c[d] = a),
            (d += 1);
        return (c.length = l), c;
      };
    })()),
  Array.prototype.forEach ||
    (Array.prototype.forEach = function (e) {
      var t, n;
      if (null == this) throw new TypeError("this is null or not defined");
      var i = Object(this),
        o = i.length >>> 0;
      if ("function" != typeof e) throw new TypeError(e + " is not a function");
      for (arguments.length > 1 && (t = arguments[1]), n = 0; o > n; ) {
        var r;
        n in i && ((r = i[n]), e.call(t, r, n, i)), n++;
      }
    }),
  (function () {
    function e(e, t) {
      t = t || { bubbles: !1, cancelable: !1, detail: null };
      var n = document.createEvent("CustomEvent");
      return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
    }
    return "function" == typeof window.CustomEvent
      ? !1
      : void (window.CustomEvent = e);
  })();
var __dummy = "12345";
