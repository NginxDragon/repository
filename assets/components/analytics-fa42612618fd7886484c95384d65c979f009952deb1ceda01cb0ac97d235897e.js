!(function () {
  var e =
      analyticsPageProperties.categoryOverride ||
      analyticsPageProperties.pageUrlParts.shift(),
    t =
      analyticsPageProperties.nameOverride ||
      analyticsPageProperties.pageUrlParts.pop();
  (t = t || "default"), (e = e || "unknown");
  var i = sessionStorage.optimizelyReferrer;
  sessionStorage.removeItem("optimizelyReferrer");
  var r = i ? { referrer: i } : null;
  Cookies.set("amplitude-session-id", getSessionId(), {
    expires: 30 * DAYS_PER_MINUTE,
  }),
    window.analytics &&
      analytics.page(e, t, r, getIntegrationOptions(), function () {
        window.dispatchEvent(new CustomEvent("page-view-tracked"));
      });
  var n = Cookies.get("analytics-client-id") || Date.now();
  Cookies.set("analytics-client-id", n, {
    expires: 10 * DAYS_PER_YEAR,
    domain: ".circleci.com",
  });
  var a = new CustomEvent("referrer-set"),
    o = document.referrer;
  return 0 === o.length || isInternalReferrer(o)
    ? void window.dispatchEvent(a)
    : (Cookies.set("current_referrer", o, { expires: 3650 }),
      void 0 === Cookies.get("initial_referrer") &&
        Cookies.set("initial_referrer", o, { expires: 3650 }),
      void window.dispatchEvent(a));
})(),
  (function () {
    var e = getQueryParam("gclid");
    if (e) {
      var t = getQueryParam("gclsrc");
      (t && -1 === t.indexOf("aw")) || Cookies.set("gclid", e, { expires: 90 });
    }
    for (
      var i = [
          "utm_source",
          "utm_medium",
          "utm_term",
          "utm_content",
          "utm_campaign",
        ],
        r = 0;
      r < i.length;
      r++
    ) {
      var n = i[r],
        a = getQueryParam(n);
      n && a && Cookies.set(n, a, { expires: 90 });
    }
    appendUTMs();
  })(),
  $(document).ready(function () {
    var e = Cookies.get("gclid");
    e && $("input.form-adwords-id").val(e),
      $("input.form-lead-url").val(document.location.pathname);
    for (
      var t = [
          "utm_source",
          "utm_medium",
          "utm_term",
          "utm_content",
          "utm_campaign",
          "initial_referrer",
          "current_referrer",
        ],
        i = 0;
      i < t.length;
      i++
    ) {
      var r = t[i],
        n = Cookies.get(r);
      if (n) {
        var a = $("input.form-" + r.replace(/_/g, "-"));
        a.val(n);
      }
    }
    var o = Cookies.get("_mkto_trk");
    o && $("input.form-marketo-munchkin").val(o);
  }),
  $("#main").on("submit", "form[data-submit-event]", function () {
    var e = $(this).data("submit-event");
    return trackEvent(e, analyticsTrackProps(this)), !0;
  }),
  (function () {
    if ($("body").hasClass("scroll-tracked")) {
      window.optimizely = window.optimizely || [];
      var e = function () {
        $("[data-section-viewed-event]").each(function () {
          if (
            !$(this).data("section-viewed-event-sent") &&
            isInViewport(this)
          ) {
            var e = $(this).data("section-viewed-event"),
              t = "section_viewed_" + e;
            window.optimizely.push({ type: "event", eventName: t }),
              $(this).data("section-viewed-event-sent", t);
          }
        });
      };
      window.addEventListener("scroll", $.throttle(500, e)),
        $(document).ready(function () {
          e();
        });
    }
  })();
var __dummy = "12345";
