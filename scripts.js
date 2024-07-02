// Filtering
document.addEventListener('DOMContentLoaded', function() {
    var filterButtons = document.querySelectorAll('.filter-button');
    var slides = document.querySelectorAll('.slides');

    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var filter = this.getAttribute('data-filter');
            slides.forEach(function(slide) {
                if (filter === 'all' || slide.classList.contains(filter)) {
                    slide.style.display = 'flex';
                } else {
                    slide.style.display = 'none';
                }
            });
        });
    });

    // Show the first set of slides by default
    slides.forEach(function(slide) {
        if (slide.classList.contains('all')) {
            slide.style.display = 'flex';
        }
    });
});

// Sliders
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.slides');
    slides.forEach(function(slide) {
        let slideItems = slide.querySelectorAll('.slide');
        if (n > slideItems.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slideItems.length}
        for (i = 0; i < slideItems.length; i++) {
            slideItems[i].style.display = "none";
        }
        slideItems[slideIndex-1].style.display = "block";
    });
}
