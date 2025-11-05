const nav_btn = document.getElementById("nav-btn");
const mobile_menu = document.getElementById("mobile_menu");
const mobile_list = document.getElementById("mobile_list");
const option1 = document.getElementById("option1");
const sub_category_1 = document.getElementById("sub-category-1");
const option2 = document.getElementById("option2");
const sub_category_2 = document.getElementById("sub-category-2");

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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  effect: "slide",
});
