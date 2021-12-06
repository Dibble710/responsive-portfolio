// Navigation Bar Effects On Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnMoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = ((modalClick) => {
    serviceModals[modalClick].classList.add('active');
})

learnMoreBtns.forEach((learnMoreBtn, i) => {
    learnMoreBtn.addEventListener("click", () => {
        modal(i);
    })
})

modalCloseBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove('active')
        })
    })
})

// video url - https://youtu.be/IJzuN5UGqmo?t=3519