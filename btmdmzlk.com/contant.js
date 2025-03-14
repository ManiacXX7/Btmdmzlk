const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  
  ScrollReveal().reveal(".service__image img", {
    ...scrollRevealOption,
    origin: "left",
    interval: 500,
  });
  
  ScrollReveal().reveal(".service__content p", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  ScrollReveal().reveal(".header__content .section__description", {
    ...scrollRevealOption,
    delay: 2000,
  });