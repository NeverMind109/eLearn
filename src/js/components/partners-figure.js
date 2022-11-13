const counter = document.querySelector(".partners__figure");
counter.innerText = "100";

const updateCounter = () => {
  const target = +counter.getAttribute("data-target");
  const c = +counter.innerText;

  const increment = target / 300;

  if (c < target) {
    counter.innerText = `${Math.ceil(c + increment)}`;
    setTimeout(updateCounter, 120);
  } else {
    counter.innerText = target.toLocaleString("en-IN");
  }
};

document.addEventListener("scroll", () => {
  if (window.innerWidth < 1439) {
    counter.innerText = "5000";
  } else if (window.pageYOffset >= 310) {
    updateCounter();
  }
});
