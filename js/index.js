const navRight = document.querySelector(".nav-right");
console.log(navRight);
const list = document.querySelector(".icon");
console.log(list);
list.addEventListener("click", () => {
  console.log(navRight.classList);
  navRight.classList.toggle("active");
});
// Slider
new Glide(".glide", {
  type: "carousel",
  perView: 1,
  gap: 30,
}).mount();

// Count
const countUp = (id, target) => {
  let count = 0;
  const el = document.getElementById(id);
  const interval = setInterval(() => {
    count += Math.ceil(target / 100);
    if (count >= target) {
      el.textContent = target + "+";
      clearInterval(interval);
    } else {
      el.textContent = count + "+";
    }
  }, 50);
};
window.addEventListener("load", () => {
  countUp("cars", 500);
  countUp("clients", 800);
  countUp("locations", 750);
});
//
// const track = document.getElementById('sliderTrack');
//     const cardWidth = 300; // including margin
//     let currentIndex = 0;

//     function moveSlide(direction) {
//       const cards = track.children.length;
//       const maxIndex = cards - 1;
//       currentIndex += direction;
//       if (currentIndex < 0) currentIndex = 0;
//       if (currentIndex > maxIndex) currentIndex = maxIndex;
//       track.style.transform = `translateX(-${currentIndex * (cardWidth + 20)}px)`;
//     }

const track = document.getElementById("logoTrack");
const logos = track.innerHTML;
track.innerHTML += logos;

//
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#checkout-slider", {
    type: "loop",
    perPage: 3,
    gap: "20px",
    pagination: false,
    arrows: true,
    autoplay: true,
    interval: 4000,
    speed: 800,
    breakpoints: {
      1024: { perPage: 3 },
      768: { perPage: 2 },
      480: { perPage: 1 },
    },
  }).mount();
});

// side
function toggleSort() {
  const container = document.querySelector(".sort-container");
  const dropdown = document.getElementById("sortDropdown");
  container.classList.toggle("active");
  dropdown.classList.toggle("active");
}

// Optional: close dropdown if clicking outside
document.addEventListener("click", function (event) {
  const sortWrapper = document.querySelector(".sort-wrapper");
  const isClickInside = sortWrapper.contains(event.target);

  if (!isClickInside) {
    document.querySelector(".sort-container").classList.remove("active");
    document.getElementById("sortDropdown").classList.remove("active");
  }
});

//

const cardsPerPage = 3;

function changePage(page) {
  const buttons = document.querySelectorAll(".pagination button");
  const cards = document.querySelectorAll(".car-card");

  buttons.forEach((btn) => btn.classList.remove("active"));
  buttons[page - 1].classList.add("active");

  const start = (page - 1) * cardsPerPage;
  const end = start + cardsPerPage;

  cards.forEach((card, index) => {
    card.style.display = index >= start && index < end ? "block" : "none";
  });
}

window.addEventListener("DOMContentLoaded", () => changePage(1));

// like
// const favIcon = document.getElementById("fav-icon");
// favIcon.addEventListener("click", () => {
//   favIcon.classList.toggle("active");
// });
