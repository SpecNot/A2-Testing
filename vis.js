var player_1 = document.getElementById('player_1');
var player_2 = document.getElementById('player_2');
var player_me = document.getElementById('player_me');
var player_3 = document.getElementById('player_3');
var player_4 = document.getElementById('player_4');
var player_5 = document.getElementById('player_5');
var player_6 = document.getElementById('player_6');
var player_7 = document.getElementById('player_7');

let segments = [
    [0, 175],
    [175, 240],
    [240, 479]
]
let startingValues = [0, 175, 240]
let colours = ["red", "blue", "blue_d", "green", "orange", "purple", "yellow"]
let players = []

players.push(lottie.loadAnimation({
    wrapper: player_1,
    animType: 'svg',
    loop: true,
    path: './animation/' + colours[Math.floor(Math.random() * colours.length)] + '.json',
    name: 'player_1',
}))

players.push(lottie.loadAnimation({
    wrapper: player_2,
    animType: 'svg',
    loop: true,
    path: './animation/' + colours[Math.floor(Math.random() * colours.length)] + '.json',
    name: 'player_2',
}))

players.push(lottie.loadAnimation({
    wrapper: player_me,
    animType: 'svg',
    loop: true,
    path: './animation/' + localStorage.getItem("color") + ".json",
    name: 'player_me'
}))

players.push(lottie.loadAnimation({
    wrapper: player_3,
    animType: 'svg',
    loop: true,
    path: './animation/' + colours[Math.floor(Math.random() * colours.length)] + '.json',
    name: 'player_3',
}))
players.push(lottie.loadAnimation({
    wrapper: player_4,
    animType: 'svg',
    loop: true,
    path: './animation/' + colours[Math.floor(Math.random() * colours.length)] + '.json',
    name: 'player_4',
}))
players.push(lottie.loadAnimation({
    wrapper: player_5,
    animType: 'svg',
    loop: true,
    path: './animation/' + colours[Math.floor(Math.random() * colours.length)] + '.json',
    name: 'player_5',
}))
players.push(lottie.loadAnimation({
    wrapper: player_6,
    animType: 'svg',
    loop: true,
    path: './animation/' + colours[Math.floor(Math.random() * colours.length)] + '.json',
    name: 'player_6',
}))
players.push(lottie.loadAnimation({
    wrapper: player_7,
    animType: 'svg',
    loop: true,
    path: './animation/' + colours[Math.floor(Math.random() * colours.length)] + '.json',
    name: 'player_7',
}))



setTimeout(function () {
    lottie.stop()
}, 100);

setTimeout(function () {
    for (i = 0; i < players.length; i++) {
        players[i].goToAndPlay(Math.floor(Math.random() * 480))
        // console.log('test')

    }
}, 1000);

let answers = []


const getSent = async () => {
    const response = await fetch('https://vqxs45e0r0.execute-api.us-east-2.amazonaws.com/getSent', {
        mode: 'cors'
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson)
    answers = myJson.sentence
}
getSent()

captionBox = document.getElementById("caption")
captionText = document.getElementById("player_answer")

function doodClick() {
    captionBox.style.display = "unset"
    captionBox.style.opacity = "1"
    document.getElementById("player_name").innerHTML = "Anonymous"
    captionText.innerHTML = answers[Math.floor(Math.random() * answers.length)]

}

function doodClickMe() {
    captionBox.style.display = "unset"
    captionBox.style.opacity = "1"
    captionText.innerHTML = localStorage.getItem("answer")
    document.getElementById("player_name").innerHTML = localStorage.getItem("name")

}

function closeMe(){
    captionBox.style.opacity = "0"
    captionBox.style.display = "none"
}