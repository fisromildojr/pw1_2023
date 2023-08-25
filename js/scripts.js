const form = document.getElementById("form")
const button = document.getElementById("button")
const range = document.getElementById("range")



button.addEventListener("click", () => {
    loadAlert()
    console.log("Clicou...")
})

range.addEventListener("input", (event) => {
    console.log(event.target.value)
})

function loadAlert() {
    alert("JavaScript carregado")
}

