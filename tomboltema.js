// bagian navbar
var buttonTema = document.getElementById("tema");
var bagianNavbar =document.getElementById("nav");

// bagian home/section1
var home = document.getElementById("home");
var pembatas = [document.getElementById("pembatas"),document.getElementById("pembatas2")];

// bagian about/section2
var about = document.getElementById("about");
// bagian project/section3
var project = document.getElementById("project");
// bagian contact/section4
var contact = document.getElementById("contact");
// bagian footer
var footer = document.getElementById("footer")

// function untuk background color and text color dark
function dark(){
    buttonTema.classList="bg-light";
    buttonTema.innerHTML="Dark";
    buttonTema.style.color="black";
    bagianNavbar.classList="navbar navbar-expand-lg navbar-dark shadow fixed-top";
    bagianNavbar.style="background-color: black;";
    home.style="background-color:rgb(53, 91, 126);color:white";
    pembatas[0].innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path id="tes"fill="black"fill-opacity="1"d="M0,128L0,128L120,128L120,256L240,256L240,192L360,192L360,288L480,288L480,256L600,256L600,192L720,192L720,160L840,160L840,96L960,96L960,192L1080,192L1080,288L1200,288L1200,32L1320,32L1320,192L1440,192L1440,320L1320,320L1320,320L1200,320L1200,320L1080,320L1080,320L960,320L960,320L840,320L840,320L720,320L720,320L600,320L600,320L480,320L480,320L360,320L360,320L240,320L240,320L120,320L120,320L0,320L0,320Z"></path></svg>';
    about.style="background-color:black;color:white";
    pembatas[1].innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path id="tes"fill="rgb(84, 82, 82)"fill-opacity="1"d="M0,128L0,128L120,128L120,256L240,256L240,192L360,192L360,288L480,288L480,256L600,256L600,192L720,192L720,160L840,160L840,96L960,96L960,192L1080,192L1080,288L1200,288L1200,32L1320,32L1320,192L1440,192L1440,320L1320,320L1320,320L1200,320L1200,320L1080,320L1080,320L960,320L960,320L840,320L840,320L720,320L720,320L600,320L600,320L480,320L480,320L360,320L360,320L240,320L240,320L120,320L120,320L0,320L0,320Z"></path></svg>';
    project.style="background-color:rgb(84, 82, 82);color:white;";
    contact.style="background-color: black;color:white";
    footer.style="background-color: rgb(66, 66, 66)";
}
// function untuk background color dan text color light
function light(){
    buttonTema.classList="bg-dark";
    buttonTema.innerHTML="Light";
    buttonTema.style.color="white" ;
    bagianNavbar.classList="navbar navbar-expand-lg navbar-light shadow fixed-top";;
    bagianNavbar.style="background-color: rgb(237, 223, 213);";
    home.style="background-color:rgb(158, 185, 211);";
    pembatas[0].innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path id="tes"fill="rgb(155,155,155)"fill-opacity="1"d="M0,128L0,128L120,128L120,256L240,256L240,192L360,192L360,288L480,288L480,256L600,256L600,192L720,192L720,160L840,160L840,96L960,96L960,192L1080,192L1080,288L1200,288L1200,32L1320,32L1320,192L1440,192L1440,320L1320,320L1320,320L1200,320L1200,320L1080,320L1080,320L960,320L960,320L840,320L840,320L720,320L720,320L600,320L600,320L480,320L480,320L360,320L360,320L240,320L240,320L120,320L120,320L0,320L0,320Z"></path></svg>';
    about.style="background-color:background-color: rgb(155, 155, 155);color:rgb(54, 54, 54)";
    pembatas[1].innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path id="tes"fill="rgb(202, 202, 202)"fill-opacity="1"d="M0,128L0,128L120,128L120,256L240,256L240,192L360,192L360,288L480,288L480,256L600,256L600,192L720,192L720,160L840,160L840,96L960,96L960,192L1080,192L1080,288L1200,288L1200,32L1320,32L1320,192L1440,192L1440,320L1320,320L1320,320L1200,320L1200,320L1080,320L1080,320L960,320L960,320L840,320L840,320L720,320L720,320L600,320L600,320L480,320L480,320L360,320L360,320L240,320L240,320L120,320L120,320L0,320L0,320Z"></path></svg>';
    project.style="background-color:rgb(202, 202, 202);color:rgb(54, 54, 54);";
    contact.style="background-color: white;color:color:rgb(54, 54, 54);";
    footer.style="background-color: black";
}
// function untuk ketika buttonTema diklik
function tema(){
    if (buttonTema.classList=="bg-dark")dark();
    else if(buttonTema.classList=="bg-light")light();
}