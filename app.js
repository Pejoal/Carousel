// Carousel
// img & container width in pixel
slideWidth = document.querySelector("#carousel .carousel-container img").offsetWidth; // index

// Indicators Container
let indicatorsContainer = document.querySelector("#carousel .indicators");

// Slides Container
let container = document.querySelector("#carousel .carousel-container");

// Slides
let slides = document.querySelectorAll("#carousel .carousel-container > *");
slides = Array.from(slides);

// Add Buttons
let i = 0;
slides.forEach(el => {
  let btn = document.createElement("button");
  btn.setAttribute("data-slide", i);
  // btn.id = `btn${i}`;
  indicatorsContainer.appendChild(btn);
  i++;
})

// Buttons
let buttons = document.querySelectorAll("#carousel .indicators > *");
buttons = Array.from(buttons);

// Arrows
let slideRightArrow = document.querySelector("#carousel .arrows .right");
let slideLeftArrow = document.querySelector("#carousel .arrows .left");

buttons.forEach((el) => {
  el.addEventListener("click", (e) => {
    // move slide
    container.style.marginLeft = parseInt(e.target.dataset.slide) * -slideWidth + "px";
    // Remove And Add active class
    removeAndAddActive();
  })
})

removeAndAddActive();
function removeAndAddActive() {
  buttons.forEach((bu) => {
    bu.classList.remove("active");
  })
  buttons.forEach(bu => {
    if (container.style.marginLeft === parseInt(bu.dataset.slide) * -slideWidth + "px") {
      bu.classList.add("active");
    } else if (container.style.marginLeft === "") {
      buttons.at(0).classList.add("active");
    }
  })
}

slideRightArrow.addEventListener("click", () => {
  if (container.style.marginLeft === parseInt(buttons.at(-1).dataset.slide) * -slideWidth + "px") {
    container.style.marginLeft = "0px";
  } else {
    if (container.style.marginLeft === "") {
      container.style.marginLeft = -slideWidth + "px";
    } else {
      container.style.marginLeft = (parseInt(container.style.marginLeft.slice(0, -2)) - slideWidth) + "px";
    }
  }
  removeAndAddActive();
})

// Loop

setInterval(() => {
  slideRightArrow.click();
}, 5000);

// let slideRight = "";
// function autoSlide() {
//   if (document.querySelector("#auto-slide").checked) {
//     slideRight = setInterval(() => {
//       slideRightArrow.click();
//     }, 3500);
//   } else {
//     clearInterval(slideRight);
//   }
// }
// document.querySelector("#auto-slide").addEventListener("change", autoSlide);

// End Loop


slideLeftArrow.addEventListener("click", () => {
  if (container.style.marginLeft === "" || container.style.marginLeft === "0px") {
    container.style.marginLeft = parseInt(buttons.at(-1).dataset.slide) * -slideWidth + "px";
  } else {
    container.style.marginLeft = (parseInt(container.style.marginLeft.slice(0, -2)) + slideWidth) + "px"
  }
  removeAndAddActive();
})

// End Carousel