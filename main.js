const fun = document.querySelector("#startFUN");

fun.addEventListener("click", (event) => {
    event.preventDefault();
    Fun();
})

function Fun () {
    const element = document.createElement("input");
        element.type = "image";
        element.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQeNMk5D1PCKCDjfrDBr7eRSNpOqhN4hgcVSLQucj_189QurQRLUKwRstKFdPr3fV-FEgB1kA3VbP8mixJGX43p-LqoHgot6vuypJVi12PJ279TT3r-yCEA30O7ZOJZ-Vy8silIRPORxGGAqSNJelC7sAweiVfEl2_4ede36GutX3VKgqmh-aT_vVmIw/w1200-h630-p-k-no-nu/515x342_4.jpg";
        element.width = 150;
        element.height = 100;
        element.name = "SUBmittt";
        element.value = "Click me pls";
        document.body.appendChild(element);
        element.addEventListener("click", (event) => {
            event.preventDefault();
            Fun();
        })
}