var player_load = document.getElementById('player_load');
var player_loaded = lottie.loadAnimation({
    wrapper: player_load,
    animType: 'svg',
    loop: true,
    path: './animation/' + localStorage.getItem("color") + ".json",
    name:'player_load'
  });

let welcome = document.getElementById('welcome')
welcome.innerHTML = "Welcome " + localStorage.getItem("name") + "!"