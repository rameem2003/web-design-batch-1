const nav_btn = document.getElementById("nav-btn");
const mobile_menu = document.getElementById("mobile_menu");
const mobile_list = document.getElementById("mobile_list");
const option1 = document.getElementById("option1");
const sub_category_1 = document.getElementById("sub-category-1");
const option2 = document.getElementById("option2");
const sub_category_2 = document.getElementById("sub-category-2");
const navber = document.getElementById("navber");

nav_btn.addEventListener("click", () => {
  mobile_menu.classList.toggle("active");
  //   mobile_list.classList.toggle("opacity-100");
});

option1.addEventListener("click", () => {
  sub_category_1.classList.toggle("active");
  sub_category_1.classList.toggle("h-full");
});
option2.addEventListener("click", () => {
  sub_category_2.classList.toggle("active");
});

const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  effect: "slide",
});

document.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY >= 166) {
    navber.className =
      " duration-300 fixed top-0 left-0 w-full bg-white z-[10000000] navber_animation shadow-lg";
  } else {
    navber.className = "static";
  }
});
