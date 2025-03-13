
let product = document.querySelector(".thisPRo")


function showItem() {
    let baskett
    let ite = JSON.parse(localStorage.getItem("productsINCart"))
    let shoosen = JSON.parse(localStorage.getItem("shoosen"))
    if (ite) {
        if (ite.find((e) => e.id === shoosen)) {
            baskett = [ite.find((e) => e.id === shoosen)]
        }
        else {
            baskett = JSON.parse(localStorage.getItem("product-choosen"))
        }
    } else {
        baskett = JSON.parse(localStorage.getItem("product-choosen"))
    }
    baskett.map((e) => {
        product.innerHTML = `
        <div class="info">
            <div class="imgs">
                <img src=${e.img} alt=${e.name}>
            </div>
            <div class="details">
                <h2>${e.name}</h2>
                <h2><del class="del">${e.lastPrice}</del> ${e.price}</h2>
                <select name="" id="size">
                    <option value="smool">S</option>
                    <option value="medium">M</option>
                    <option value="large">L</option>
                    <option value="x-large">x-large</option>
                </select>
                <div class="qtn">
                    <div class="number">
                        <i class="fa-solid fa-caret-left"  onclick="changeNum('minus',${e.id}) "></i>
                        <h1>${e.NumberOFUNit}</h1>
                        <i class="fa-solid fa-caret-right" onclick="changeNum('plus',${e.id}) "></i>
                    </div>
                    <button onclick="addTobBasket(${e.id})"  id="add" >Add To Cart</button>
                </div>
                <h3>product details</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque esse maxime deserunt sint
                    voluptatibus.</p>
            </div>
        </div>    
        `
    })
}
showItem()


let size = document.querySelector("#size")

let sizeV


size.addEventListener("change", (e) => {
    e.preventDefault()
    sizeV = size.value
})




let basket = JSON.parse(localStorage.getItem("productsINCart")) || []

function addTobBasket(id) {

    if (basket.some((e) => e.id === id)) {

        changeNum("plus", id)
    }
    else {
        let item = AllProductsAtsite.find((e) => e.id === id)
        sizeV = size.value

        if (sizeV) {
            basket.push({
                ...item,
                NumberOFUNit: 1,
                size: sizeV
            })
            localStorage.setItem("productsINCart", JSON.stringify(basket))
        }

    }


    showItem()
    item()

}

function changeNum(action, id) {

    if (basket.some((e) => e.id === id)) {
        basket = basket.map((e) => {
            let old = e.NumberOFUNit
            if (e.id === id) {
                if (action === "minus" && old > 1) {
                    old -= 1
                } else if (action === "plus") {
                    old += 1
                }
            } return {
                ...e,
                NumberOFUNit: old
            }
        })
        localStorage.setItem("productsINCart", JSON.stringify(basket))
    }
    else {

        if (action === "plus") {
            sizeV = size.value
            if (sizeV) {
                let item = AllProductsAtsite.find((e) => e.id === id)
                basket.push({
                    ...item,
                    NumberOFUNit: 2,
                    size: sizeV
                })
                console.log("hreeee");
                localStorage.setItem("productsINCart", JSON.stringify(basket))
            }
        }
    }
    showItem()
}


let aha = document.querySelector(".shop-icon .number")
let aha2 = document.querySelector(".shop-icon .number2")



function item() {
    let maa = JSON.parse(localStorage.getItem("productsINCart"))
    if (maa) {
        if (maa.length >= 1) {
            let it = 0
            maa.map((e) => {
                it += e.NumberOFUNit
            })
            aha.style.display = "block";
            aha2.style.display = "block";
            aha.innerHTML = it
            aha2.innerHTML = it
        } else {
            aha.style.display = "none";
            aha2.style.display = "none";
        }
    }
}

item()
