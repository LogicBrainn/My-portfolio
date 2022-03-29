var buttonTema = document.getElementById("tema")

function tema(){
   
    if (buttonTema.classList=="bg-dark"){
    buttonTema.classList="bg-light ";
    buttonTema.innerHTML="Dark";
    buttonTema.style.color="black"
    document.getElementById("nav").classList="navbar navbar-expand-lg navbar-dark shadow fixed-top";
    document.getElementById("nav").style="background-color: black;;"
    document.getElementById("home").style="background-color:rgb(53, 91, 126);"
    }
    else if(buttonTema.classList=="bg-light "){
        buttonTema.classList="bg-dark";
        buttonTema.innerHTML="Light";
        buttonTema.style.color="white" ;
        document.getElementById("nav").classList="navbar navbar-expand-lg navbar-light shadow fixed-top";
        document.getElementById("nav").style="background-color: rgb(237, 223, 213);"
        document.getElementById("home").style="background-color:rgb(158, 185, 211);"
        
    }
    

}