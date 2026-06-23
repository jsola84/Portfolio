document.addEventListener("DOMContentLoaded", function () {
  var elHeader = document.querySelectorAll("header");
  var elMain = document.querySelectorAll("main");
  var elFooter = document.querySelectorAll("footer");

  window.addEventListener("load", function () {
    setTimeout(function () {
      elHeader[0].classList.add("visible");
    }, 30);
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    }, 300);
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  });

  observer.observe(elMain[0]);
  observer.observe(elFooter[0]);
});
