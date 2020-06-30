var valueChange = new CustomEvent("value-change");
!(function () {
  var e = Array.from(document.getElementsByClassName("radio input"));
  e.forEach(function (e) {
    var t = Array.from(e.getElementsByTagName("input"));
    t.forEach(function (t) {
      t.addEventListener("click", function () {
        var a = t.getAttribute("value");
        e.setAttribute("data-value", a);
      });
    });
  });
})(),
  (function () {
    var e = Array.from(document.getElementsByClassName("checkboxes")),
      t = Array.from(document.getElementsByClassName("other"));
    t.forEach(function (e) {
      e.parentElement
        .getElementsByTagName("span")[0]
        .firstChild.addEventListener("blur", function () {
          (e.value = this.value),
            e.click(),
            this.value.length > 1 ? (e.checked = !0) : (e.checked = !1);
        });
    }),
      e.forEach(function (e) {
        var t = e.getElementsByClassName("real-input")[0],
          a = [];
        e.addEventListener(
          "click",
          function (e) {
            var n = void 0;
            "checkbox" === e.target.type &&
              (a.length > 0
                ? (a.forEach(function (t, a) {
                    e.target.value === t && (n = a);
                  }),
                  void 0 !== n
                    ? (a.splice(n, 1), (n = void 0))
                    : a.push(e.target.value))
                : a.push(e.target.value),
              t.value
                ? (t.value = a.join(", "))
                : t.setAttribute("data-value", a.join(", ")),
              t.dispatchEvent(valueChange));
          },
          !0
        );
      });
  })(),
  (function () {
    var e = Array.from(document.getElementsByClassName("html5-form"));
    e.length > 0 &&
      e.forEach(function (e) {
        Array.from(e.querySelectorAll("[data-error]")).forEach(function (e) {
          var t = function () {
            e.validity.patternMismatch
              ? e.setCustomValidity(e.getAttribute("data-error"))
              : e.setCustomValidity("");
          };
          e.addEventListener("keyup", t), e.addEventListener("blur", t);
        });
      });
  })();
