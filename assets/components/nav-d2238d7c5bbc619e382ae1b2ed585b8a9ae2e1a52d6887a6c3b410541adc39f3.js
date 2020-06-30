!(function () {
  var e = Array.from(document.querySelectorAll("nav li.arrow")),
    t = document.querySelectorAll("button.navbar-toggle")[0],
    n = document.getElementsByTagName("body")[0],
    o = document.getElementById("mobile-navigation");
  e.forEach(function (e) {
    e.addEventListener("click", function () {
      this.classList.contains("collapsed")
        ? this.classList.remove("collapsed")
        : this.classList.add("collapsed");
    });
  });
  var a = function (e) {
    e.preventDefault();
  };
  t &&
    o &&
    t.addEventListener("click", function (e) {
      if (e.target.classList.contains("collapsed")) {
        (n.style.overflow = "hidden"),
          document.addEventListener("touchmove", a, { passive: !1 });
        var t, s;
        o.addEventListener("touchstart", function (e) {
          (t = this.scrollTop), (s = e);
        }),
          o.addEventListener("touchmove", function (e) {
            this.scrollTop = s.touches[0].clientY - e.touches[0].clientY + t;
          });
      } else
        (n.style.overflow = "initial"),
          document.removeEventListener("touchmove", a, { passive: !1 });
    });
})(),
  $(document).ready(function () {
    $(".nav-item").each(function () {
      var e = $(this);
      e.find("a").on("focus", function () {
        e.addClass("submenu-open"), e.attr("aria-expanded", !0);
      }),
        e.on("focusout", function () {
          e.removeClass("submenu-open"), e.attr("aria-expanded", !1);
        });
    });
  });
var __dummy = "12345";
