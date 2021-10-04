// getting json data
// fetch("data.json")
//     .then(response => response.json())
//     .then(data => {
//         for(x = 0; x < data.sentence.length; x++){
//             // console.log(data.sentence)
//             makeNewCard(data.sentence[x])
//         }
//     });
let comments = []

function submitForm(event) {
    event.preventDefault();
    // let msg = document.getElementById("ipt").value;
    // makeNewCard(msg)
    // document.getElementById("ipt").value = "";
}

function makeNewCard(message) {
    let location = document.getElementById("cards");
    let div = document.createElement("div")
    let p = document.createElement("p")
    let node = document.createTextNode(message)
    div.className = "card"
    p.appendChild(node);
    div.appendChild(p)
    location.appendChild(div)
}


const getSent = async () => {
    const response = await fetch('https://vqxs45e0r0.execute-api.us-east-2.amazonaws.com/getSent',{mode: 'cors'});
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson

    if(comments.length == 0){
      for(x = 0; x < myJson.sentence.length; x++){
        // console.log(data.sentence)
        makeNewCard(myJson.sentence[x])
    }
      comments = myJson.sentence
    }
    else{

      myArray = myJson.sentence.filter( ( el ) => !comments.includes( el ) );
      if (myArray.length == 0){
        return
      }
      for(x = 0; x < myArray.length; x++){
        // console.log(data.sentence)
        makeNewCard(myArray[x])
    }
    comments = myJson.sentence
      console.log(myArray)
      // console.log("this works")
    }




    // console.log(comments)
    // console.log(myJson.sentence)
  }

  getSent()


  // const postSent = async () => {
  //   const response = await fetch('https://vqxs45e0r0.execute-api.us-east-2.amazonaws.com/postSent', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       "sentence": "The weather is nice today.21321312fuckme"
  //   }), 
  //     headers: {
  //       'Content-Type': 'text/plain',
  //       // "Accept-Encoding": "gzip, deflate, br"
  //     }
  //   });
  //   const myJson = await response.json(); //extract JSON from the http response
  //   console.log(myJson)
  //   // do something with myJson
  // }




  window.setInterval(function() {
    // do stuff
    getSent()
    console.log("refresh")

  }, 10000); // 1000 milliseconds (1 second)