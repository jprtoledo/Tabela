let counter = 0

function placePilots(pilot) {
    const imgAndText = document.createElement("div");
    imgAndText.setAttribute("class", "container")

    const img = document.createElement("img");
    img.setAttribute("src", `./img/${pilot.pilot}.png`);
    img.setAttribute("class", "pilotos");

    const points = document.createElement("div")
    points.setAttribute("class", "centeredLeft");
    points.appendChild(document.createTextNode(pilot.points))

    const position = document.createElement("div")
    position.setAttribute("class", "centeredRight");
    position.appendChild(document.createTextNode(positions[counter]))
    counter++

    imgAndText.appendChild(img);
    imgAndText.appendChild(points);
    imgAndText.appendChild(position);

    const element = document.getElementById("tabela");
    element.appendChild(imgAndText);
}

function addSubmit() {
    const input = document.createElement("input")
    const formDiv = document.getElementById("formulario");
    input.setAttribute("type", "submit")
    input.setAttribute("value", "Adicionar pontos")

    formDiv.appendChild(input)
}

function placeForm(pilot) {
    const label = document.createElement("label")
    const br = document.createElement("br")
    const input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("id", `${pilot.pilot}_value`)

    label.appendChild(document.createTextNode(`${pilot.pilot}:`))

    const formDiv = document.getElementById("formulario")
    formDiv.appendChild(label)
    formDiv.appendChild(br)
    formDiv.appendChild(input)
    formDiv.appendChild(br)
}

function addPoints() {
    piltos.forEach(pilot => {
        
    });

    const form = document.getElementById("formulario");
    form.forEach(element => {
        console.log(element)
    });
}

pilots.sort(function(a, b){return b.points - a.points});
pilots.forEach(pilot => {
    placePilots(pilot)
    placeForm(pilot)
});
addSubmit()