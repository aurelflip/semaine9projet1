function footerAlert() {
    footer = document.querySelector("footer")
    nombre_de_clique = 1
    footer.addEventListener("click", function() {
        alert("clique n° " + nombre_de_clique)
        nombre_de_clique++
    })
}
footerAlert()





function hamburger_menu() {
    nav = document.getElementById("navbarHeader")  //ce qui est entre quote est lappel a la fonction/section dans le html 
    hambuger = document.querySelector("button", ".navbar-toggler")
        // navbar-toggler qui ouvre le navbar 
    hambuger.addEventListener("click", function() {
        nav.classList.toggle("collapse")
    })
}

hamburger_menu()





function text_rouge() {
    edit_carte_button = document.querySelectorAll(".btn-outline-secondary")[0]
    text_carte_prems = document.querySelectorAll(".card-text")[0]
    edit_carte_button.addEventListener("click", function() {
        text_carte_prems.style.color = "red"
    })
}

text_rouge()




function texte_vert() {
    edit_deuxieme_carte_button = document.querySelectorAll(".btn-outline-secondary")[1]

    text_carte_deuxieme = document.querySelectorAll(".card-text")[1]
    i = 1
    edit_deuxieme_carte_button.addEventListener("click", function() {
        i++
        if (i % 2 == 0) {
            text_carte_deuxieme.style.color = "green"
        } else {
            text_carte_deuxieme.style.color = "rgb(33, 37, 41)"
        }
    })
}
texte_vert()




function nuclearPage() {
    navbar = document.querySelector("header")
    bootstrap = document.querySelector("head").querySelector("link")
    
    navbar.addEventListener("dblclick", function() {
        
        if ("dbclick" == false ){
            bootstrap.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css")
        } else {
            bootstrap.setAttribute("href", "#")
        }
    })
}

nuclearPage()