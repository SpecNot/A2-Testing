// getting json data
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        for(x = 0; x < data.sentence.length; x++){
            // console.log(data.sentence)
            makeNewCard(data.sentence[x])
        }
    });


function submitForm(event) {
    event.preventDefault();
    let msg = document.getElementById("ipt").value;
    makeNewCard(msg)
    document.getElementById("ipt").value = "";
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


