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