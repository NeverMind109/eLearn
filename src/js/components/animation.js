import AOS from "aos";
AOS.init({
  disable: function () {
    var maxWidth = 1025;
    return window.innerWidth < maxWidth;
  },
});
