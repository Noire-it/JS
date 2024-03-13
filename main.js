const all = document.querySelector("#all");
const row = document.querySelector("#row");
const createCinema = document.querySelector(".createCinema");
const seatDisplay = document.querySelector(".seatDisplay");
const reserved = document.querySelector(".reserved");
const buyTickets = document.querySelector(".buyTickets");

let reservedSeats = [];
let ticketCost = Number(20);

createCinema.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (all.value && row.value) {
        let allVal = Number(all.value);
        let rowVal = Number(row.value);
        console.log("Dobrze wprowadzone dane"); 
        let seats = Number(allVal/rowVal);
        console.log(seats);
        for (m=1;m<=seats;m++) {
            let rzad = m;
            for (i=1;i<=rowVal;i++) {
                const btn = document.createElement("button");
                btn.innerHTML = i;
                seatDisplay.appendChild(btn);
                btn.addEventListener('click', function(evt) {
                    evt.preventDefault();
                    reservedSeats.push(`${rzad}-${btn.innerHTML}`);
                    console.log(reservedSeats);
                    btn.innerHTML = "Zajęte";
                    btn.style.color = "#fff";
                    btn.style.backgroundColor = "#f00";
                })
            }
            const br = document.createElement("br");
            seatDisplay.appendChild(br);
        }
        
    } else {
        seatDisplay.innerHTML = "Wprowadz dane";
    }
})
buyTickets.addEventListener('click', function(evt) {
    evt.preventDefault();
    let cena = reservedSeats.length * ticketCost;
    reserved.innerHTML = `cena wynosi: ${cena} PLN. Kartom? Gotufkom?`;
})