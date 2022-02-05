// efeito na main-page

var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  loop: true,
  typeSpeed: 50
});


window.onscroll = function() {
  myStickyFunction();
};



var navbar = document.getElementById("navbar");

var btn = document.querySelectorAll(".btn");

var rowOne = document.querySelector(".row-1");

var menu = document.querySelector(".menu");

var menuIcon = document.querySelector(".menu-icon");

var cancel = document.querySelector(".cancel");

var actualMenu = document.querySelector(".actual-menu");

var menuClicked = false;

var sticky = navbar.offsetTop;

var SobrenosSection = document.querySelector(".Sobrenos__title");

var properSticky = SobrenosSection.offsetTop;

console.log(properSticky);

function myStickyFunction() {
  if (window.pageYOffset >= properSticky) {
    // navbar.classList.add("sticky");
    /*
    rowOne.classList.add("sticky");
    btn.forEach((item, i) => {
      item.classList.add("btn-full");
    });

    */

    menu.classList.remove("none");
    // btn.classList.add("btn-full");
  } else {
    // navbar.classList.remove("sticky");
    /*
    rowOne.classList.remove("sticky");
    btn.forEach((item, i) => {
      item.classList.remove("btn-full");
    });

    */

    menu.classList.add("none");
  }
}



// Hamburger menu
menuIcon.addEventListener("click", function menuHamburguer(e) {
  e.preventDefault();

  menu.classList.remove("none");

  menuIcon.classList.add("none");

  menuClicked = true;

  actualMenu.classList.remove("none");
});

cancel.addEventListener("click", function toggleMenu(e) {
  e.preventDefault();

  menuIcon.classList.remove("none");

  actualMenu.classList.add("none");
});


const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
