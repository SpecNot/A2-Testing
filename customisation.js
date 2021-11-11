var slideIndex = 1;
showSlides(slideIndex);

let colors = {
  "green":"#7AC74F",
  "red":"#F96161",
  "yellow":"#FFD850",
  "orange":"#FF8C05",
  "blue":"#61C9F9",
  "blue_d":"#5482F9",
  "purple":"#8661C1"

}

document.getElementById("back-button").style.display = "none";

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
  if (slideIndex == 1) {
    document.getElementById("back-button").style.display = "none";

  } else {
    document.getElementById("back-button").style.removeProperty('display')
  }


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

localStorage.setItem("color", "green");


function doodChange(changeTo, ele) {
  // console.log(ele)
  document.getElementById("customDood").src = "./doods/" + changeTo + ".svg";
  buttons = document.getElementsByClassName("color-buttons");
  text = document.getElementById('color-text');

  for (i = 0; i < buttons.length; i++) {
    buttons[i].style.borderColor = "#c7c7c7"
  }
  ele.style.borderColor = "black"

  text.innerHTML = capitalizeFirstLetter(changeTo);
  localStorage.setItem("color", changeTo);
  localStorage.setItem("code", window.getComputedStyle( ele , null).getPropertyValue('background-color'));
  // console.log(window.getComputedStyle( ele , null).getPropertyValue('background-color'))
  // document.getElementById("welcomeDood").src = "./doods/" + changeTo + ".svg";

}

function capitalizeFirstLetter(string) {
  if (string == "blue_d") {
    return "Blue"
  }
  if (string == "blue") {
    return "Light Blue"
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const form = document.getElementById('nameForm');
form.addEventListener('submit', customName);
myName = document.getElementById("customName")

function customName() {

  //   myname
  // console.log(myName.value)
  localStorage.setItem("name", myName.value);
  document.getElementById("welcome").innerHTML = "Welcome " + myName.value

}

function success() {
  if (myName.value == "") {
    document.getElementById('main-button2').disabled = true;
  } else {
    document.getElementById('main-button2').disabled = false;
  }
}

function success2() {
  if (document.getElementById("answer").value == "") {
    document.getElementById('main-button3').disabled = true;
  } else {
    document.getElementById('main-button3').disabled = false;
  }
}
var player_again = document.getElementById('player_again');

function finalSlide(){
  button4 = document.getElementById('main-button4')
  button4.style.backgroundColor = localStorage.getItem("code")
  playerAnswer =  document.getElementById("answer")
  localStorage.setItem("answer", playerAnswer.value)
  playerName = document.getElementById("player_name")
  playerName.innerHTML = localStorage.getItem('name')
  playerAnswerArea = document.getElementById("player_answer")
  playerAnswerArea.innerHTML= playerAnswer.value
  // document.getElementById("lastSlideDood").src = "./doods/" + localStorage.getItem("color") + ".svg";

  answerArea =  document.getElementById("answer_area")
  answerArea.style.borderColor = localStorage.getItem("code")
  // playerName.style.color = localStorage.getItem("color") 
  // some colors dont work well
  // lottie.destroy()
  lottie.destroy('player_again')

  lottie.loadAnimation({
    wrapper: player_again,
    animType: 'svg',
    loop: true,
    path: './animation/' + localStorage.getItem("color") + ".json",
    name:'player_again'
  });
  plusSlides(1)
}


var player_load = document.getElementById('player_load');

function nameSlide(){

  lottie.destroy('player_load')
  var player_loaded = lottie.loadAnimation({
    wrapper: player_load,
    animType: 'svg',
    loop: true,
    path: './animation/' + localStorage.getItem("color") + ".json",
    name:'player_load'
  });

  plusSlides(1)
}