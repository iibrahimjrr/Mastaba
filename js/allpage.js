let OPenNav = document.querySelector(".action .open")
let nav = document.querySelector(".nav")
let head = document.querySelector("header")




OPenNav.addEventListener("click", (e) => {
    e.preventDefault()
    nav.classList.toggle("active")
})



document.onclick = function (e) {
    if (e.target.id !== "nav" && e.target.id !== "openN") {
        nav.classList.remove("active")
    }
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        nav.classList.remove("active")
        head.style.top = "0"

    } else {
        nav.classList.remove("active")
        head.style.top = "-66.438px"


    }
    prevScrollpos = currentScrollPos;
}

let aha3 = document.querySelector(".shop-icon .number")
let aha4 = document.querySelector(".shop-icon .number2")

function item() {
    let maaa = JSON.parse(localStorage.getItem("productsINCart"))
    if (maaa) {
        if (maaa.length >= 1) {
            let it = 0
            maaa.map((e) => {
                it += e.NumberOFUNit
            })
            aha3.style.display = "block";
            aha4.style.display = "block";
            aha3.innerHTML = it
            aha4.innerHTML = it
        } else {
            aha3.style.display = "none";
            aha4.style.display = "none";
        }
    }
}

item()
