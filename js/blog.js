let section = document.querySelector(".section")

function showBlog() {
    bolg.forEach((e) => {
        section.innerHTML += `
        <div class="box">
                    <div class="about">

                        <div class="img">
                            <img src=${e.img} alt="">
                        </div>

                        <div class="info">
                            <h2>${e.h2}</h2>
                            <p>${e.para}</p>
                            <a href="#">${e.read}</a>
                        </div>

                    </div>
                    <h1 class="head">${e.head}</h1>

        </div>
        
        `
    })
}

showBlog()