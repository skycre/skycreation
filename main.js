const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});
ScrollReveal().reveal(".about__container img", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".service__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  delay: 1000,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

ScrollReveal().reveal(".blog__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".blog__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".blog__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".blog__content .blog__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

const instagram = document.querySelector(".instagram__flex");

Array.from(instagram.children).forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  instagram.appendChild(duplicateNode);
});

document.addEventListener('DOMContentLoaded', function() {
  var filterButtons = document.querySelectorAll('.filter-button');
  var filterItems = document.querySelectorAll('.instagram__flex');

  filterButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          var filter = this.getAttribute('data-filter');
          filterItems.forEach(function(item) {
              if (filter === 'all' || item.classList.contains(filter)) {
                  item.style.display = 'flex';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });

  // Show the 'all' category by default
  document.querySelector('.filter-button[data-filter="all"]').click();
});

document.addEventListener('DOMContentLoaded', function() {
  var filterButtons = document.querySelectorAll('.filter-button');
  var filterItems = document.querySelectorAll('.instagram__flex');

  filterButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          var filter = this.getAttribute('data-filter');
          filterItems.forEach(function(item) {
              if (filter === 'all' || item.classList.contains(filter)) {
                  item.style.display = 'flex';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });

  // Show the 'weddings' category by default
  document.querySelector('.filter-button[data-filter="weddings"]').click();

  // Modal functionality
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  var images = document.querySelectorAll('.instagram__flex img');
  
  images.forEach(function(img) {
      img.onclick = function(){
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
      }
  });

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() { 
      modal.style.display = "none";
  }
});


