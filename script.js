var slideIndex = 1;
showSlides(slideIndex);
var mainSlides = document.getElementsByClassName("slideshow-container");
var mainbutton = document.getElementsByClassName("button-wide");
var intro = document.getElementsByClassName("intro");

mainSlides[0].style.display = "none";
mainbutton[0].style.display = "none";

function plusSlides(n) {
  if (slideIndex == 5) {
    console.log("test")
    window.location.href = './home.html';

    return
  }
  showSlides(slideIndex += n);

}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");



  if (slideIndex == 5) {
    document.getElementById("main-button").innerHTML = 'I Love This Name! Let’s Start!'
  } else {
    document.getElementById("main-button").innerHTML = 'Continue'
  }

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";


}



var svgContainer = document.getElementById('svgContainer');
var lottie_load = document.getElementById('lottie_load');

var lottie_loaded = bodymovin.loadAnimation({
  wrapper: lottie_load,
  animType: 'svg',
  loop: true,
  path: './animation/loading.json',
});


var svgTest = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  path: './doodanimation.json',
});


function testF() {
  console.log("clicked")
}


setTimeout(function () {
  intro[0].style.display = "none";
  mainSlides[0].style.display = "block";
  mainbutton[0].style.display = "block";



}, 1000);