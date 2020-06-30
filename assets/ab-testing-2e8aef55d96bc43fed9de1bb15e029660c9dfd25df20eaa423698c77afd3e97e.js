!(function () {
  var t = Array.from(document.querySelectorAll("[data-optimizely]"));
  (window.optimizely = window.optimizely || []),
    t.forEach(function (t) {
      t.addEventListener("click", function () {
        window.optimizely.push({
          type: "event",
          eventName: "button-clicked",
          tags: {
            target: t.getAttribute("data-optimizely"),
            page: window.location.pathname,
          },
        });
      });
    });
})(),
  $(document).ready(function () {
    $("form[data-optimizely-submit-event]").submit(function () {
      return (
        (window.optimizely = window.optimizely || []),
        window.optimizely.push({
          type: "event",
          eventName: $(this).data("optimizely-submit-event"),
        }),
        !0
      );
    });
  });
var __dummy = "12345";
