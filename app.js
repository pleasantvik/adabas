///////////////////////////////////////
// MOBILE NAVIGATION
const navigation = document.querySelector(".navigation");
const toggleBtn = document.querySelector(".btn-mobile-nav");
const mainNav = document.querySelector(".navigation__nav");

///////////////////////////////////////
// MODAL
const modal = document.querySelector(".modal");
const btnsOpenModal = document.querySelector(".open-modal");
const btnCloseModal = document.querySelector(".modal__close");
const overlay = document.querySelector(".overlay");

const toggler = function (e) {
  e.preventDefault();
  navigation.classList.toggle("navigation__nav-open");
};
// MOBILE NAVIGATION
toggleBtn.addEventListener("click", toggler);

mainNav.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link"))
    navigation.classList.remove("nav-open");
});

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  navigation.classList.toggle("navigation__nav-open");
};

btnsOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
