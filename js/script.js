
// start FeatProduts
let featbox = document.getElementById("FeatProduts")
function render() {
    FeatProduts.forEach((e) => {
        featbox.innerHTML += `
        <div class="cart"  onclick="Details(${e.id})" >
                <div class="img" >
                    <img src=${e.img} alt=${e.name}>
                </div>
                <div class="info">
                    <div class="name">
                        <h2>${e.name}</h2>
                    </div>
                    <div class="about">
                        <div class="price">
                            
                            <div class="num"> <del class="del">${e.lastPrice}</del> ${e.price}</div>
                        </div>
                    </div>
                </div>
        </div> 
    `
    })
}
render()


let arrivalpr = document.getElementById("arrival")

function render2() {
    arrivalProducts.forEach((e) => {
        arrivalpr.innerHTML += `
        <div class="cart" onclick="Details(${e.id})" >
            <div class="img">
                <img src=${e.img} alt=${e.name}>
            </div>
            <div class="info">
                <div class="name">
                    <h2>${e.name}</h2>
                </div>
                <div class="about">
                    <div class="price">
                        
                        <div class="num"> <del class="del">${e.lastPrice}</del>  ${e.price}</div>
                    </div>
                </div>
            </div>
        </div> 
        
        `
    })
}
render2()




let basket = []

function Details(id) {

    localStorage.setItem("shoosen", id)

    let item = AllProductsAtsite.find((e) => e.id === id)
    basket.push({
        ...item,
        NumberOFUNit: 1
    })

    localStorage.setItem("product-choosen", JSON.stringify(basket))
    window.location = "shopDetails.html"
}



