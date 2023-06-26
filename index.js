//Get the Element Class name
function getCharacters () {
    fetch('http://localhost:3000/characters')
    .then(response => response.json())
    .then(data => {
    fetchAnimalNames(data)
    })
}

function fetchAnimalNames(characters){
    let zooAnimals = document.getElementById("wild")

    characters.forEach(characters => {
        let newDiv = document.createElement("div")
        newDiv.classList = "zoo"
        newDiv.innerHTML = characters.name
        zooAnimals.appendChild(newDiv)
        newDiv.addEventListener("click", function(){
            fetchCharactersImage(characters)
        })
        
    });
}

function fetchCharactersImage(characters){
    fetch (`http://localhost:3000/characters/${characters.id}`)
    .then(response => response.json())
    .then(data => {protray(data)})
}
function protray(characters) {
    document.querySelector("#image").setAttribute("src", charaters.image)
    document.querySelector("#name_display").innerText=characters.name
    document.querySelector('#votes').innerText=characters.votes
}

document.addEventListener("DOMContentLoaded", function(event){
    getCharacters()
})