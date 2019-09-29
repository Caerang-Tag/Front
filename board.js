/**검색기간 toggle*/

function showID(con, I){
    obj = document.getElementById(con);
    img = document.getElementById(I);
    if(obj.style.display == "none"){
        obj.style.display="inline";
        img.src = img.src.replace("Reverse_Triangle.png", "Triangle.png");
}
    else{
        obj.style.display="none";
        img.src = img.src.replace("Triangle.png", "Reverse_Triangle.png");
    }
}




