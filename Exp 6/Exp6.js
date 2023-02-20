function bg_Color(){
    var div = document.getElementById("box");
    var bgcolor = document.getElementById("bgcolor").value;
    if (bgcolor == document.getElementById("tcolor").value){
        alert("Cannot keep same color")
    }
    else{
        div.style.backgroundColor = bgcolor;
    }
}

function textColor(){
    var div = document.getElementById("box");
    var tcolor = document.getElementById("tcolor").value;
    if (document.getElementById("bgcolor").value == tcolor){
        alert("Cannot keep same color")
    }
    else{
        div.style.color = tcolor;
    }
}

function textSize(){
    var div = document.getElementById("box");
    var tsize = document.getElementById("tsize").value;
    div.style.fontSize = tsize + "px";
}

function boxWidth(){
    var div = document.getElementById("box");
    var width = document.getElementById("width").value;
    div.style.width = width + "px";
}

function boxHeight(){
    var div = document.getElementById("box");
    var height = document.getElementById("height").value;
    div.style.height = height + "px";
}

function opacity_(){
    var div = document.getElementById("box");
    var opacity = document.getElementById("opacity").value;
    div.style.opacity = opacity + "%";
}
