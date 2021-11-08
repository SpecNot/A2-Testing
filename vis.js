var player_1 = document.getElementById('player_1');
var player_2 = document.getElementById('player_2');
var player_me = document.getElementById('player_me');
var player_3 = document.getElementById('player_3');
var player_4 = document.getElementById('player_4');
var player_5= document.getElementById('player_5');
var player_6 = document.getElementById('player_6');
var player_7 = document.getElementById('player_7');


lottie.loadAnimation({
  wrapper: player_1,
  animType: 'svg',
  loop: true,
  path: './animation/green.json',
  name:'player_1',
});

lottie.loadAnimation({
    wrapper: player_2,
    animType: 'svg',
    loop: true,
    path: './animation/purple.json',
    name:'player_2',
  });

lottie.loadAnimation({
    wrapper: player_me,
    animType: 'svg',
    loop: true,
    path: './animation/' + localStorage.getItem("color") + ".json",
    name:'player_me'
  });

  lottie.loadAnimation({
    wrapper: player_3,
    animType: 'svg',
    loop: true,
    path: './animation/purple.json',
    name:'player_3',
  });
  lottie.loadAnimation({
    wrapper: player_4,
    animType: 'svg',
    loop: true,
    path: './animation/purple.json',
    name:'player_4',
  });
  lottie.loadAnimation({
    wrapper: player_5,
    animType: 'svg',
    loop: true,
    path: './animation/purple.json',
    name:'player_5',
  });
  lottie.loadAnimation({
    wrapper: player_6,
    animType: 'svg',
    loop: true,
    path: './animation/purple.json',
    name:'player_6',
  });
  lottie.loadAnimation({
    wrapper: player_7,
    animType: 'svg',
    loop: true,
    path: './animation/purple.json',
    name:'player_7',
  });


  
setTimeout(function () {
    lottie.stop()
  }, 10);
