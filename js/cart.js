

let tablee = document.querySelector("#table")
let Noproduct = document.querySelector(".no-product")
let info = document.querySelector(".info")

let sheckOut = document.querySelector(".sheck-out")


let trrr = document.getElementById("trrrr")
function renderincart() {
    let final = JSON.parse(localStorage.getItem("productsINCart"))


    if (final) {
        if (final.length !== 0) {
            Noproduct.style.display = "none"
            tablee.style.display = "block"
            sheckOut.style.display = "block"

            let productIt = final.map((e) => {
                return `
            <tr>
                    <td><i class="fa-regular fa-circle-xmark" onclick="removeItem(${e.id})"></i></td>
                    <td> <img src=${e.img} alt=""></td>
                    <td>${e.name}</td>
                    <td>${e.size}</td>
                    <td>${e.price} L.E</td>
                    <td>
                        <div class="cont">
                            <i class="fa-solid fa-caret-left" onclick="updatecartItem('minus',${e.id})"></i>
                            <h2>${e.NumberOFUNit}</h2>
                            <i class="fa-solid fa-caret-right" onclick="updatecartItem('plus',${e.id})"></i>
                        </div>
                    </td>
                    <td>${(e.price * e.NumberOFUNit).toFixed(2)} L.E</td>
            </tr>
            `
            }).join("")
            trrr.innerHTML = productIt
        } else {
            Noproduct.style.display = "block"
            tablee.style.display = "none"
            sheckOut.style.display = "none"
        }

    }
    else {
        Noproduct.style.display = "block"
        tablee.style.display = "none"
        sheckOut.style.display = "none"
    }
}
renderincart()



function updatecartItem(action, id) {
    let final = JSON.parse(localStorage.getItem("productsINCart"))
    final.map((e) => {
        if (e.id === id) {
            if (action === 'plus') {
                e.NumberOFUNit += 1
            } else if (action === 'minus' & e.NumberOFUNit > 1) {
                e.NumberOFUNit -= 1
            }
        } return {
            ...e,
        }
    })

    localStorage.setItem("productsINCart", JSON.stringify(final))
    renderincart()
    item()
    checkout()
    comp()
}






function removeItem(id) {
    let final = JSON.parse(localStorage.getItem("productsINCart"))

    final = final.filter((e) => e.id !== id)
    trrr.innerHTML = ""
    localStorage.setItem("productsINCart", JSON.stringify(final))
    renderincart()
    item()
    checkout()
    comp()

}


// coupon and check out

let coupon = document.getElementById("coupon")
let getcoupon = document.getElementById("getcoupon")
let subprice = document.getElementById("subprice")
let couponMinus = document.getElementById("couponMinus")
let allpricetocheck = document.getElementById("allpricetocheck")

// console.log(coupon.value);

let coponV = []

function comp() {
    getcoupon.addEventListener("click", (e) => {
        e.preventDefault()
        coponV = coupon.value
        if (coponV === "hany") {
            localStorage.setItem("putvalid", "hany")
            let sheckcopon = localStorage.getItem("putvalid")
            if (sheckcopon) {
                let it = 0
                let todis = JSON.parse(localStorage.getItem("productsINCart"))
                todis.map((e) => {
                    it += ((e.price * e.NumberOFUNit) * 0.7).toFixed(0)
                    coponV = it
                })
            }
        }
        else {
            coponV = 0
        }
        checkout()
    })
}
comp()


function checkout() {

    let price = 0
    let final = JSON.parse(localStorage.getItem("productsINCart"))

    if (final) {
        if (final.length !== 0) {

            final.map((e) => {
                price += e.price * e.NumberOFUNit
            })

            if (localStorage.getItem("putvalid")) {
                subprice.innerHTML = `${price}.LE`
                allpricetocheck.innerHTML = `${(price * (1 - 0.7)).toFixed(0)}.LE`
                couponMinus.innerHTML = `70%_Off`
            } else {
                subprice.innerHTML = `${price}.LE`
                couponMinus.innerHTML = "write coupon"
                allpricetocheck.innerHTML = `${price}LE`

            }
        }
    }
}

checkout()