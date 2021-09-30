function submitForm(event) {
    // event.preventDefault();
    let msg = document.getElementById("ipt").value;
    // makeNewCard(msg)
    // document.getElementById("ipt").value = "";

    postSent(msg)

}


const postSent = async (msg) => {
    const response = await fetch('https://vqxs45e0r0.execute-api.us-east-2.amazonaws.com/postSent', {
      method: 'POST',
      body: JSON.stringify({
        "sentence": msg
    }), 
      headers: {
        'Content-Type': 'text/plain',
        // "Accept-Encoding": "gzip, deflate, br"
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson)
    // do something with myJson
  }

