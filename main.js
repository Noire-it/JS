const imie = document.querySelector("#imie")
const btn = document.querySelector("#btn")
const display = document.querySelector(".display")

btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    const greets = ["Witaj! ","Cześć! ","Hej ","Siema! "];
    const imieVal = imie.value;
    const los = Math.floor(Math.random() * 3);
    const WyLicz = greets[los];
    const newEle = document.createElement("p");
    newEle.addEventListener("click", function(evt) {
        evt.preventDefault();
        this.remove()
    })
    newEle.innerText = WyLicz + imieVal;
    display.appendChild(newEle);
})
