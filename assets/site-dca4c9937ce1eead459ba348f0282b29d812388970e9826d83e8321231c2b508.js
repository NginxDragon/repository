function getAnchorPositions(t) {
  return t.map(function (t) {
    return t.getBoundingClientRect().top;
  });
}
function getActiveAnchor(t) {
  return (
    t.filter(function (t) {
      return 100 >= t;
    }).length - 1
  );
}
function getArrayFrom(t) {
  return Array.from(document.querySelectorAll(t));
}
function removeClasses(t, e) {
  t.forEach(function (t) {
    t.classList.remove(e);
  });
}
function setActiveAnchor(t, e) {
  removeClasses(e, "active"),
    e[t] &&
      (e[t].parentElement.setAttribute(
        "data-active",
        e[t].getAttribute("data-value")
      ),
      e[t].classList.add("active"));
}
function setLoggedIn() {
  $(".customers-only").show(),
    $(".noncustomers-only").hide(),
    $(document.body).addClass("loggedin");
}
function setLoggedOut() {
  $(document.body).removeClass("loggedin"),
    $(".customers-only").hide(),
    $(".noncustomers-only").show();
}
function userZoomIntercept() {
  !(function () {
    var t = document.createElement("script");
    (t.type = "text/javascript"),
      (t.async = !0),
      (t.charset = "utf-8"),
      (t.src =
        ("https:" == document.location.protocol ? "https://" : "http://") +
        "cdn5.userzoom.com/files/js/QzU1ODNUMSAg.js?t=uz_til&cuid=D2F2CD3C6DCDE41180C90050569444FB");
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(t, e);
  })();
}
function closeCustomerBanner() {
  var t = document.querySelector(".customers-banner"),
    e = t.getAttribute("data-banner-id");
  $(".customers-banner").addClass("banner-closed"),
    t.setAttribute("aria-hidden", "true"),
    Cookies.set("closed-customer-banner", e, { expires: 365 });
}
function getUrlVars(t) {
  var e = {},
    n = decodeURIComponent(t),
    o = n.substr(1).split("&");
  return (
    o.forEach(function (t) {
      var n = t.split("=");
      e[n[0]] = n[1];
    }),
    e
  );
}
function urlifyTrackingParams() {
  var t = "",
    e = [
      "gclid",
      "utm_source",
      "utm_medium",
      "utm_term",
      "utm_content",
      "utm_campaign",
      "initial_referrer",
      "current_referrer",
    ];
  return (
    e.forEach(function (e) {
      var n = Cookies.get(e);
      n && "" === t ? (t += "?" + e + "=" + n) : n && (t += "&" + e + "=" + n);
    }),
    t
  );
}
function appendUTMs() {
  var t = Array.from(document.querySelectorAll("[data-append-utms]")),
    e = urlifyTrackingParams();
  t.forEach(function (t) {
    t.href += e;
  });
}
$(window).load(function () {
  var t = function () {
    $(".twitter-tweet").remove();
    for (
      var t = document.querySelectorAll(".tweet"), e = 0;
      e < t.length;
      e++
    ) {
      var n = t[e],
        o = n.getAttribute("tweetID");
      twttr.widgets.createTweet(o, n, {
        conversation: "none",
        cards: "hidden",
        linkColor: "#337AB7",
        theme: "light",
      });
    }
  };
  $(".love-slider")
    .on("init reInit breakpoint", t)
    .slick({
      autoplay: !0,
      autoplaySpeed: 6e3,
      arrows: !1,
      dots: !0,
      infinite: !0,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3 } },
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
      ],
    });
}),
  $(document).ready(function () {
    const t = window.circleJsConfig.env;
    $(".quotes-slider-container").each(function () {
      var e = $(this);
      if (!(e.find(".quote").length < 2)) {
        if ("production" === t)
          for (var n = e[0], o = n.children.length; o >= 0; o--)
            n.appendChild(n.children[(Math.random() * o) | 0]);
        e.slick({ autoplay: !0, autoplaySpeed: 6e3, arrows: !1, dots: !0 });
      }
    });
  }),
  $(document).ready(function () {
    $(".card-slider").each(function () {
      var t = $(this);
      t.find(".card-slider--card").length < 2 ||
        t.slick({
          autoplay: !1,
          arrows: !0,
          dots: !0,
          prevArrow: $(".prev-arrow").html(),
          nextArrow: $(".next-arrow").html(),
        });
    });
  }),
  (function () {
    window.addEventListener("load", function () {
      var t = Array.from(
          document.getElementsByClassName("component banner removable")
        ),
        e = function (t) {
          (t.style.height = t.clientHeight + "px"),
            (t.style.transition = "height 600ms"),
            requestAnimationFrame(function () {
              (t.style.height = "0px"),
                setTimeout(function () {
                  t.style.display = "none";
                }, 600);
            });
        };
      t.forEach(function (t) {
        var n = t.getAttribute("data-cookie");
        "true" === localStorage[n] && (t.style.display = "none");
        var o = t.getElementsByClassName("close")[0];
        o.addEventListener("click", function () {
          e(t), n && (localStorage[n] = "true");
        });
      });
    });
  })(),
  (function () {
    window.addEventListener("scroll", function () {
      setActiveAnchor(
        getActiveAnchor(getAnchorPositions(getArrayFrom(".anchor"))),
        getArrayFrom("[data-subnav-item]")
      );
    }),
      window.addEventListener("load", function () {
        setActiveAnchor(
          getActiveAnchor(getAnchorPositions(getArrayFrom(".anchor"))),
          getArrayFrom("[data-subnav-item]")
        );
        var t = document.querySelector(".component.subnav"),
          e = 70;
        if (t && t.classList.contains("dynamic-fixed")) {
          var n = function () {
            var n = document.getElementById("subnav-placeholder");
            (n.style.height = t.clientHeight + "px"),
              n.getBoundingClientRect().top <= e
                ? t.classList.add("js-fixed")
                : t.classList.remove("js-fixed");
          };
          n(), window.addEventListener("scroll", n);
        }
        t &&
          getArrayFrom("[data-subnav-item]").forEach(function (t) {
            t.getAttribute("data-value") ===
              t.parentElement.getAttribute("data-active") &&
              t.classList.add("active");
          });
      });
  })(),
  (function () {
    var t = Array.from(document.querySelectorAll("[data-lity]")),
      e = new CustomEvent("lity-closed"),
      n = !1;
    t.forEach(function (t) {
      if (null === t.getAttribute("data-lity-video")) return -1;
      var o = t.href.split("#")[1],
        a = document.querySelector("#" + o),
        i = a.querySelector("iframe");
      window.addEventListener("lity-closed", function () {
        (i.src = i.src.split("?")[0]), (n = !1);
      }),
        t.addEventListener("click", function () {
          (i.src += "?autoplay=1"), (n = !0);
        }),
        window.addEventListener("keydown", function (t) {
          "Escape" === t.key && n === !0 && window.dispatchEvent(e);
        }),
        window.addEventListener("click", function (t) {
          null !== t.target.getAttribute("data-lity-close") &&
            n === !0 &&
            window.dispatchEvent(e);
        });
    });
  })(),
  (function () {
    function t() {
      (document.querySelector("span[data-name='weeks']").innerHTML = n),
        (document.querySelector("span[data-name='days']").innerHTML = o),
        (document.querySelector("span[data-name='hours']").innerHTML = a),
        (document.querySelector("span[data-name='minutes']").innerHTML = i),
        (document.querySelector("span[data-name='seconds']").innerHTML = r);
    }
    var e = document.querySelector(".countdown-timer");
    if (e) {
      var n,
        o,
        a,
        i,
        r,
        s = e.getAttribute("data-target-date"),
        c = new Date(s),
        l = new Date();
      setInterval(function () {
        (l = new Date()),
          (n = Math.floor((c - l) / 1e3 / 60 / 60 / 24 / 7)),
          (o = Math.floor((c - l) / 1e3 / 60 / 60 / 24) - 7 * n),
          (a = Math.floor((c - l) / 1e3 / 60 / 60) - 24 * (7 * n + o)),
          (i = Math.floor((c - l) / 1e3 / 60) - 60 * (24 * (7 * n + o) + a)),
          (r =
            Math.floor((c - l) / 1e3) - 60 * (60 * (24 * (7 * n + o) + a) + i)),
          t();
      }, 1e3);
    }
  })(),
  (function () {
    "use strict";
    window.addEventListener(
      "load",
      function () {
        function t(t, e) {
          var n = t.getAttribute("data-has-intereacted");
          n || t.setAttribute("data-has-interacted", e);
        }
        for (
          var e = [document.getElementsByClassName("form-input")],
            n = document.getElementsByClassName("custom-validate-on-submit"),
            o = document.querySelectorAll("textarea.auto-resize"),
            a = 0;
          a < e.length;
          a++
        )
          for (var i = 0; i < e[a].length; i++)
            addEvent(e[a][i], "blur", function (e, n) {
              t(n, "true");
            });
        autoResizeTextarea(o),
          Array.prototype.filter.call(n, function (n) {
            n.addEventListener(
              "submit",
              function (o) {
                if (n.checkValidity() === !1)
                  o.preventDefault(),
                    o.stopPropagation(),
                    n.classList.add("submit-attempted");
                else {
                  n.classList.remove("submit-attempted");
                  for (var a = 0; a < e.length; a++)
                    for (var i = 0; i < e[a].length; i++) t(e[a][i], "false");
                }
              },
              !1
            );
          });
      },
      !1
    );
  })(),
  jQuery(document).ready(function (t) {
    t("img[data-default-src]").each(function () {
      var e = t(this).data("default-src");
      t(this).on("error", function () {
        t(this).attr({ src: e });
      });
    });
  });
var __dummy = "12345",
  __dummy = "12345";
$(document).ready(function () {
  0 != $(".sample-code-tabs").length &&
    $('.sample-code-tabs a[data-toggle="tab"]').on("click", function () {
      var t = $(this).attr("href");
      $(".orbs-sample-code").scrollTop($(t).position().top + 40);
    });
});
var __dummy = "12345",
  meApiEvent = new CustomEvent("meApiDone");
jQuery(document).ready(function (t) {
  t(".right-links").hide(),
    "true" === Cookies.get("cci-customer")
      ? setLoggedIn()
      : userZoomIntercept();
  var e = document.querySelector(".customers-banner"),
    n = Cookies.get("closed-customer-banner");
  if (e && n) {
    var o = e.getAttribute("data-banner-id");
    o == n &&
      (t(".customers-banner").hide(), e.setAttribute("aria-hidden", "true"));
  }
  jQuery
    .getJSON("/api/v1/me")
    .done(function (e) {
      t(".right-links").show(),
        setLoggedIn(),
        (window.userData = e),
        window.addEventListener("CookiebotOnTagsExecuted", function () {
          Cookies.set("cci-customer", "true", { expires: 3650 }),
            Cookies.set("amplitude-session-id", getSessionId(), {
              expires: 30 * DAYS_PER_MINUTE,
            }),
            analytics.identify(e.analytics_id, null, getIntegrationOptions()),
            window.dispatchEvent(meApiEvent, { detail: { status: "success" } });
        });
    })
    .fail(function () {
      Cookies.set("cci-customer", "false", { expires: 3650 }),
        t(".right-links").show(),
        setLoggedOut();
      var e = Array.from(document.querySelectorAll(".noncustomers-only"));
      e.forEach(function (t) {
        t.classList.contains("removed") || (t.style.display = "block");
      }),
        window.dispatchEvent(meApiEvent, { detail: { status: "failure" } });
    });
}),
  (window.analyticsTrackProps = function (t, e) {
    var n = {
        path: document.location.pathname,
        url: document.location.href,
        referrer: document.referrer,
        title: document.title,
      },
      o = window.userData && window.userData.login;
    if ((o && (n.user = o), t)) {
      var a = $(t).data("analytics-location");
      a && (n.page_location = a);
      var i = $(t).data("analytics-cta-text") || $.trim($(t).text());
      i && (n.cta_text = i);
      var r = $(t).data("analytics-vcs-type");
      r && (n["vcs-type"] = r);
      var s = $(t).data("analytics-vcs-scope");
      s && (n["vcs-scope"] = s);
    }
    if (e) for (var c in e) n[c] = e[c];
    return n;
  }),
  window.addEventListener("load", function () {
    var t = Array.from(document.querySelectorAll("[data-analytics-action]"));
    t.forEach(function (t) {
      t.addEventListener("click", function () {
        var t = this.getAttribute("data-analytics-action");
        t && trackEvent(t, analyticsTrackProps(this));
      });
    });
  }),
  jQuery(document).ready(function (t) {
    var e = t("main [data-analytics-action='signup-clicked']")[0];
    e && trackEvent("signup-impression", analyticsTrackProps(e));
  }),
  jQuery(document).ready(function (t) {
    t(".share-buttons .popout").on("click", function (e) {
      e.preventDefault();
      var n = window.open(t(this).attr("href"), "pop", "width=600, height=450");
      n.opener = null;
    });
  }),
  jQuery(document).ready(function (t) {
    t(".blog.page")
      .find("a[href$='.jpg'], a[href$='.png'], a[href$='.gif']")
      .fluidbox();
  });
var popModal = function (t, e, n) {
    var n = n || {},
      o = document.getElementById("general-modal"),
      a = document.getElementById("modal-bg"),
      i = o.getElementsByTagName("h2")[0],
      r = o.getElementsByTagName("p")[0];
    try {
      n.htmlContent === !0
        ? (o.innerHTML = e)
        : ((i.innerHTML = t), (r.innerHTML = e));
    } catch (s) {
      console.log(
        s,
        "; This is probably because a form has yet to be submitted, or because browser settings are preventing localStorage functionality."
      );
    }
    setTimeout(function () {
      (o.style.display = "block"),
        (a.style.display = "block"),
        setTimeout(function () {
          (o.style.top = "25px"), (a.style.opacity = "1");
        }, 10);
      var t = o.querySelector(".close"),
        e = function () {
          (o.style.display = null),
            (a.style.display = null),
            (o.style.top = null),
            (a.style.opacity = null);
          var t = "",
            e = document.title,
            n = window.location.pathname + window.location.search;
          history.pushState(t, e, n);
        };
      a.addEventListener("click", e), t.addEventListener("click", e);
    }, 10);
  },
  firingModal = function () {
    if (window.location.hash.indexOf("confirm") > -1) {
      var t,
        e = getUrlVars(window.location.hash);
      if ((e.confirm && (t = e.confirm), !modals[t]))
        return Rollbar.error("The selected modal " + t + " does not exist.");
      modals[t].execute && modals[t].execute(),
        popModal(modals[t].header, modals[t].content);
    }
  };
window.addEventListener("load", firingModal),
  window.addEventListener("hashchange", firingModal),
  jQuery(document).ready(function (t) {
    if (t("body").hasClass("error-login-taken")) {
      var e,
        n,
        o = getUrlVars(window.location.search);
      "gh" === o.vcs
        ? ((e = "GitHub"), (n = "Bitbucket"))
        : "bb" === o.vcs && ((e = "Bitbucket"), (n = "GitHub")),
        t(".username").text(o.username),
        t(".vcs").text(e),
        t(".other-vcs").text(n),
        t(".login-button." + o.vcs).hide();
    }
  }),
  (function () {
    var t = document.getElementById("contact-nav-button"),
      e = document.getElementById("contact-nav-footer"),
      n = 0;
    t &&
      t.addEventListener("click", function () {
        0 === n
          ? ((e.style.display = "block"),
            setTimeout(function () {
              e.style.height = "160px";
            }, 10),
            (n = 1))
          : 1 === n &&
            ((e.style.height = "0px"),
            setTimeout(function () {
              e.style.display = "none";
            }, 600),
            (n = 0));
      });
  })(),
  appendUTMs(),
  (function () {
    jQuery(document).ready(function (t) {
      var e = Array.from(document.getElementsByClassName("html5-form"));
      e.length > 0 &&
        e.forEach(function () {
          var t = document.getElementsByClassName("work-email")[0];
          t &&
            t.addEventListener("blur", function () {
              var t = this.value.toLowerCase();
              t.endsWith("yahoo.com") ||
              t.endsWith("yahoo.fr") ||
              t.endsWith("live.com") ||
              t.endsWith("outlook.com") ||
              t.endsWith("gmail.com") ||
              t.endsWith("msn.com") ||
              t.endsWith("hotmail.com") ||
              t.endsWith("comcast.net") ||
              t.endsWith("aol.com") ||
              t.endsWith("safetymail.info")
                ? (this.setCustomValidity(
                    "Please enter your work email address."
                  ),
                  (this.validity.valid = !1))
                : (this.setCustomValidity(""), (this.validity.valid = !0));
            });
        }),
        t(document).on("submit", ".html5-form", function (e) {
          var n = t(this)[0],
            o = n.getAttribute("action"),
            a = n.getAttribute("data-modal"),
            i = n.getAttribute("data-redirect");
          e.preventDefault(), (data = t(n).serialize());
          var r = function (t, e) {
            var n = e || document,
              o = n.querySelectorAll(t)[0];
            return o ? o.value : void 0;
          };
          (localStorage.userInfo = JSON.stringify({
            first_name: r("[name=first_name]", n),
            last_name: r("[name=last_name]", n),
            company: r("[name=company]", n),
            email: r("[name=email]", n),
          })),
            o &&
              postAjax(o, data, function (t) {
                "error" === t
                  ? (window.location = "#confirm=error")
                  : a
                  ? (n.reset(), (window.location = "#confirm=" + a))
                  : i && (window.location = i);
              });
        });
    });
  })(),
  $(document).ready(function () {
    var t = $(
      '<div class="text-black-light">Did you mean <a href="" class="blue-link"></a>?</div>'
    );
    $('input.mailcheck[type="email"]').on("blur", function () {
      var e = $(this);
      e.popover("destroy"),
        e.mailcheck({
          suggested: function (n, o) {
            var a = t.clone();
            a
              .find("a")
              .text(o.full)
              .on("click", function (t) {
                t.preventDefault(), e.val(o.full), e.trigger("blur");
              }),
              e
                .popover({
                  content: a,
                  placement: function () {
                    return $(window).width() < 768 ? "top" : "auto left";
                  },
                  html: !0,
                  trigger: "manual",
                })
                .popover("show");
          },
          empty: function () {
            e.popover("destroy");
          },
        });
    });
  }),
  $(document).ready(function () {
    $(".auto-slick").slick({
      autoplay: !0,
      autoplaySpeed: 6e3,
      arrows: !1,
      dots: !0,
    });
  }),
  $(document).ready(function () {
    $(".outgoing-links a").each(function () {
      this.host != location.host &&
        ($(this).attr("target", "_blank"),
        $(this).attr("rel", "noreferrer noopener"));
    });
  }),
  (function () {
    var t = document.querySelector("body"),
      e = "nav-hide",
      n = 20,
      o = 0,
      a = function () {
        var a = window.pageYOffset,
          i = a - o;
        return (
          console.log(i),
          150 > a
            ? void (t.classList.contains(e) && t.classList.remove(e))
            : (i > n && !t.classList.contains(e)
                ? t.classList.add(e)
                : -n > i && t.classList.contains(e) && t.classList.remove(e),
              void (o = a))
        );
      };
    window.addEventListener("scroll", $.throttle(250, a));
  })(),
  window.addEventListener("load", function () {
    var t = getUrlVars(window.location.search);
    if (t.expand) {
      var e = "#collapsable-";
      e += t.expand;
      var n = document.querySelector(e);
      $(n).collapse("show");
    }
  });
