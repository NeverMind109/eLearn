import AOS from "aos";
AOS.init({
  once: true,
  disable: function () {
    var maxWidth = 1025;
    return window.innerWidth < maxWidth;
  },
});
