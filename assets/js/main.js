
const showMenu = (navToggle, navId) => {
    const toggle=document.getElementById(navToggle),
          nav=document.getElementById(navId);
    if(toggle && nav){
        toggle.addEventListener("click",()=>
          {
              nav.classList.toggle("show");
          })
    }
     
}
showMenu("nav_toggle","nav_menu");

const navlink = document.querySelectorAll(".nav-link");
function actionlink(){
    navlink.forEach(n => n.classList.remove("active"));
    this.classList.add("active");

    document.getElementById("nav_menu").classList.remove("show");
}
navlink.forEach(n => n.addEventListener("click",actionlink))

const sombre=document.getElementById("icone_nav");
const x=sombre.addEventListener("click",functionsombre);

function functionsombre(){
    if(document.body.style.backgroundColor == "white"){
    document.body.style.backgroundColor = "#15202B";
    document.body.style.color="white";
    }
    else {
    document.body.style.backgroundColor = "white";
    document.body.style.color="black";
    }
}
