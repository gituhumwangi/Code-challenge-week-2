function getCharacters () {
    fetch('http://localhost:3000/characters')
    .then(response => response.json())
    .then(data => {
    fetchAnimalNames(data)
    })
}

function fetchAnimalNames(characters){
    let getAnimalList = document.getElementById("animal_list")

    characters.forEach(character => {
        let createDiv = document.createElement("div")
        createDiv.classList = "zoo"
        createDiv.innerHTML = character.name
        getAnimalList.appendChild(createDiv)


        createDiv.addEventListener("click", function(){
            exeClick(character)
        })
        
    });
}

function exeClick(character){
    fetch (`http://localhost:3000/characters/${character.id}`)
    .then(response => response.json())
    .then(data => {
        protray(data)
    })
}
function protray(characters) {
    document.querySelector("img").setAttribute("src", characters.image);
    getAnimalList.innerText=characters.name
    getAnimalList.innerText=characters.votes
}

document.addEventListener("DOMContentLoaded", getCharacters())