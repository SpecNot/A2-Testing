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

button4 = document.getElementById('main-button4')
button4.style.backgroundColor = localStorage.getItem("code")

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
let otherNames = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Casper", "Cassy", "Cathal", "Cator", "Cavan", "Cayden", "Cayden-Robert", "Cayden-Tiamo", "Ceejay", "Ceilan", "Ceiran", "Ceirin", "Ceiron", "Cejay", "Celik", "Cephas", "Cesar", "Cesare", "Chad", "Chaitanya", "Chang-Ha", "Charles", "Charley", "Charlie", "Charly", "Chase", "Che", "Chester", "Chevy", "Chi", "Chibudom", "Chidera", "Chimsom", "Chin", "Chintu", "Chiqal", "Chiron", "Chris", "Chris-Daniel", "Chrismedi", "Christian", "Christie", "Christoph", "Christopher", "Christopher-Lee", "Christy", "Chu", "Chukwuemeka", "Cian", "Ciann", "Ciar", "Ciaran", "Ciarian", "Cieran", "Cillian", "Cillin", "Cinar", "CJ", "C-Jay", "Clark", "Clarke", "Clayton", "Clement", "Clifford", "Clyde", "Cobain", "Coban", "Coben", "Cobi", "Cobie", "Coby", "Codey", "Codi", "Codie", "Cody", "Cody-Lee", "Coel", "Cohan", "Cohen", "Colby", "Cole", "Colin", "Coll", "Colm", "Colt", "Colton", "Colum", "Colvin", "Comghan", "Conal", "Conall", "Conan", "Conar", "Conghaile", "Conlan", "Conley", "Conli", "Conlin", "Conlly", "Conlon", "Conlyn", "Connal", "Connall", "Connan", "Connar", "Connel", "Connell", "Conner", "Connolly", "Connor", "Connor-David", "Conor", "Conrad", "Cooper", "Copeland", "Coray", "Corben", "Corbin", "Corey", "Corey-James", "Corey-Jay", "Cori", "Corie", "Corin", "Cormac", "Cormack", "Cormak", "Corran", "Corrie", "Cory", "Cosmo", "Coupar", "Craig", "Craig-James", "Crawford", "Creag", "Crispin", "Cristian", "Crombie", "Cruiz", "Cruz", "Cuillin", "Cullen", "Cullin", "Curtis", "Cyrus", "Daanyaal", "Daegan", "Daegyu", "Dafydd", "Dagon", "Dailey", "Daimhin", "Daithi", "Dakota", "Daksh", "Dale", "Dalong", "Dalton", "Damian", "Damien", "Damon", "Dan", "Danar", "Dane", "Danial", "Daniel", "Daniele", "Daniel-James", "Daniels", "Daniil", "Danish", "Daniyal", "Danniel", "Danny", "Dante", "Danyal", "Danyil", "Danys", "Daood", "Dara", "Darach", "Daragh", "Darcy", "D'arcy", "Dareh", "Daren", "Darien", "Darius", "Darl", "Darn", "Darrach", "Darragh", "Darrel", "Darrell", "Darren", "Darrie", "Darrius", "Darroch", "Darryl", "Darryn", "Darwyn", "Daryl", "Daryn", "Daud", "Daumantas", "Davi", "David", "David-Jay", "David-Lee", "Davie", "Davis", "Davy", "Dawid", "Dawson", "Dawud", "Dayem", "Daymian", "Deacon", "Deagan", "Dean", "Deano", "Decklan", "Declain", "Declan", "Declyan", "Declyn", "Dedeniseoluwa", "Deecan", "Deegan", "Deelan", "Deklain-Jaimes", "Del", "Demetrius", "Denis", "Deniss", "Dennan", "Dennin", "Dennis", "Lukasz", "Luke", "Lukmaan", "Luqman", "Lyall", "Lyle", "Lyndsay", "Lysander", "Maanav", "Maaz", "Mac", "Macallum", "Macaulay", "Macauley", "Macaully", "Machlan", "Maciej", "Mack", "Mackenzie", "Mackenzy", "Mackie", "Macsen", "Macy", "Madaki", "Maddison", "Maddox", "Madison", "Madison-Jake", "Madox", "Mael", "Magnus", "Mahan", "Mahdi", "Mahmoud", "Maias", "Maison", "Maisum", "Maitlind", "Majid", "Makensie", "Makenzie", "Makin", "Maksim", "Maksymilian", "Malachai", "Malachi", "Malachy", "Malakai", "Malakhy", "Malcolm", "Malik", "Malikye", "Malo", "Ma'moon", "Manas", "Maneet", "Manmohan", "Manolo", "Manson", "Mantej", "Manuel", "Manus", "Marc", "Marc-Anthony", "Marcel", "Shaurya", "Shaw", "Shawn", "Shawnpaul", "Shay", "Shayaan", "Shayan", "Shaye", "Shayne", "Shazil", "Shea", "Sheafan", "Sheigh", "Shenuk", "Sher", "Shergo", "Sheriff", "Sherwyn", "Shiloh", "Shiraz", "Shreeram", "Shreyas", "Shyam", "Siddhant", "Siddharth", "Sidharth", "Sidney", "Siergiej", "Silas", "Simon", "Sinai", "Skye", "Sofian", "Sohaib", "Sohail", "Soham", "Sohan", "Sol", "Solomon", "Sonneey", "Sonni", "Sonny", "Sorley", "Soul", "Spencer", "Spondon", "Stanislaw", "Stanley", "Stefan", "Stefano", "Stefin", "Stephen", "Stephenjunior", "Steve", "Steven", "Steven-lee", "Stevie", "Stewart", "Stewarty", "Strachan", "Struan", "Stuart", "Su", "Subhaan", "Sudais", "Suheyb", "Suilven", "Sukhi", "Yong", "Yoolgeun", "Yorgos", "Youcef", "Yousif", "Youssef", "Yu", "Yuanyu", "Yuri", "Yusef", "Yusuf", "Yves", "Zaaine", "Zaak", "Zac", "Zach", "Zachariah", "Zacharias", "Zacharie", "Zacharius", "Zachariya", "Zachary", "Zachary-Marc", "Zachery", "Zack", "Zackary", "Zaid", "Zain", "Zaine", "Zaineddine", "Zainedin", "Zak", "Zakaria", "Zakariya"]

const getSent = async () => {
    const response = await fetch('https://vqxs45e0r0.execute-api.us-east-2.amazonaws.com/getSent', {
        mode: 'cors'
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    // console.log(myJson)
    answers = myJson.sentence
}
getSent()

captionBox = document.getElementById("caption")
captionText = document.getElementById("player_answer")

function doodClick() {
    captionBox.style.display = "unset"
    captionBox.style.opacity = "1"
    document.getElementById("player_name").innerHTML = otherNames[Math.floor(Math.random() * otherNames.length)]

    captionText.innerHTML = answers[Math.floor(Math.random() * answers.length)]

}

function doodClickMe() {
    captionBox.style.display = "unset"
    captionBox.style.opacity = "1"
    captionText.innerHTML = localStorage.getItem("answer")
    document.getElementById("player_name").innerHTML = localStorage.getItem("name")

}

function closeMe() {
    captionBox.style.opacity = "0"
    captionBox.style.display = "none"
}