//Get the Element Class name
function getCharacters () {
    fetch('http://localhost:3000/characters')
    .then(response => response.json)
    .then(data => {
        fetchAnimalName(data)
    })
}

function fetchAnimalNames(animals){
    let character = document.getElementById("")

    animals.forEach(animal => {
        let newElements = document.createElement("div")
        newElements.classList = "stars"
        newElements.innerHTML = animal.name
        character.appendChild(newElements)
        newElements.addEventListener("click", function(){
            fetchCharactersImage(animal)
        })
        
    });
}

document.addEventListener('DOMContentLoaded', function(e){
    fetchAnimalNames()
})