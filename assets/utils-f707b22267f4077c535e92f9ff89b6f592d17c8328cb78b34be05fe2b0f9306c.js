function getQueryParam(t) {
  var e = RegExp("[?&]" + t + "=([^&]*)").exec(window.location.search);
  return e && decodeURIComponent(e[1].replace(/\+/g, " "));
}
!(function () {
  var t = Array.from(document.querySelectorAll("[data-analytics]")),
    e = function (t, n) {
      n(t), t.parentElement && e(t.parentElement, n);
    };
  t.forEach(function (t) {
    t.addEventListener("click", function (n) {
      var r = n.target,
        a = "_blank" === r.target;
      a || n.preventDefault(),
        null !== t.getAttribute("data-analytics-parent") &&
        void 0 !== t.getAttribute("data-analytics-parent")
          ? n.target.getAttribute("data-analytics-child") &&
            trackEvent(
              t.getAttribute("data-analytics"),
              analyticsTrackProps(
                n.target,
                JSON.parse(n.target.getAttribute("data-analytics-child"))
              )
            )
          : trackEvent(
              t.getAttribute("data-analytics"),
              analyticsTrackProps(t)
            );
      var i;
      e(n.target, function (t) {
        t.href && (i = t.href);
      }),
        i && !a && (window.location = i);
    });
  });
})(),
  (window.DAYS_PER_MINUTE = 1 / 24 / 60),
  (window.DAYS_PER_YEAR = 365);
var postAjax = function (t, e, n) {
    var r = new XMLHttpRequest();
    (r.onreadystatechange = function () {
      r.readyState === XMLHttpRequest.DONE && 200 === r.status
        ? n && n(r.response)
        : r.readyState === XMLHttpRequest.DONE &&
          (console.log("there was a problem with the POST request"),
          n && n("error"));
    }),
      r.open("POST", t),
      r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
      r.send(e);
  },
  getSessionId = function () {
    var t = Number(Cookies.get("amplitude-session-id")),
      e =
        Number.isNaN ||
        function (t) {
          return t !== t;
        },
      n = function (t) {
        return !e(t);
      };
    return n(t) ? t : Date.now();
  },
  getIntegrationOptions = function () {
    return { integrations: { Amplitude: { session_id: getSessionId() } } };
  },
  getAnonymousId = function () {
    return window.analytics && analytics.user
      ? analytics.user().anonymousId()
      : -1;
  },
  trackEvent = function (t, e, n) {
    window.analytics &&
      (Cookies.set("amplitude-session-id", getSessionId(), {
        expires: 30 * DAYS_PER_MINUTE,
      }),
      analytics.track(t, e, getIntegrationOptions(), function () {
        n && n();
      }));
  };
!(function () {
  window.onload = function () {
    var t = Array.from(document.querySelectorAll("[data-enterprise-trigger]"));
    getUrlVars(window.location.search).utm_campaign &&
      (getUrlVars(window.location.search).utm_campaign.indexOf("enterprise") >
        -1 && Cookies.set("enterprise_customer", !0, { expires: 3650 }),
      t.forEach(function (t) {
        t.addEventListener("click", function () {
          Cookies.set("enterprise_customer", !0, { expires: 3650 });
        });
      }));
  };
})();
var slugify = function (t) {
  return t
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};
window.isInternalReferrer = function (t) {
  return (
    t.startsWith(window.location.origin) || t.startsWith(window.location.origin)
  );
};
var isInViewport = function (t) {
    var e = t.getBoundingClientRect();
    return (
      e.top >= 0 &&
      e.left >= 0 &&
      e.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      e.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },
  __dummy = "12345";
