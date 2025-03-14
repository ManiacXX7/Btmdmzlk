

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};


ScrollReveal().reveal(".header__container .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".section__subheader .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .section__subheader", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1500,
});

ScrollReveal().reveal(".about__image-1, .about__image-3", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__image-2", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});