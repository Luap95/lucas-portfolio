function menu(btn){
    if(btn == "abrir"){
        document.getElementById("menu").style.display = "inline";
        document.getElementById("abre-menu").style.display = "none";
        document.getElementById("fecha-menu").style.display = "inline-block";
    }
    else if (btn == "fechar"){
        document.getElementById("menu").style.display = "none";
        document.getElementById("abre-menu").style.display = "inline-block";
        document.getElementById("fecha-menu").style.display = "none";
    }
}