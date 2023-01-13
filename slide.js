var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  var slides = document.getElementsByClassName("slide");
  slideIndex += n;
  if (slideIndex > slides.length - 4) {
    slideIndex = 0;
  }
  showSlides(slideIndex);
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 4;
  }
  if (n < 1) {
    slideIndex = slides.length - 4;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = slideIndex; i < slideIndex + 4; i++) {
    slides[i % slides.length].style.display = "inline-block";
  }
}

document.getElementById("prevBtn").addEventListener("click", function () {
  plusSlides(-1);
});

document.getElementById("nextBtn").addEventListener("click", function () {
  plusSlides(1);
});

var a = 1;
console.log(a);
