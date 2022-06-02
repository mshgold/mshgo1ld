
var humber = document.getElementById("icon-humber");
function showmenu() {
    var iconclose = document.getElementById("closemenu");
    var iconhumber = document.getElementById("icon-humber");
    var mhumber = document.getElementById("navbar-md");
    if (mhumber.className === "navbar-md d-md-none d-none") {
        mhumber.className += "d-show"
        iconclose.className = "d-show d-md-none"
        iconhumber.className = "d-none"
        console.log(mhumber.className);
    } else {
        mhumber.className = "navbar-md d-md-none d-none"
    }
}

function closemenu(){
    var iconclose = document.getElementById("closemenu");
    var iconhumber = document.getElementById("icon-humber");
    var mhumber = document.getElementById("navbar-md");
    if (mhumber.className === "navbar-md d-md-none d-none d-show") {
        mhumber.className += "d-none"
        iconclose.className = "d-none d-md-none"
        iconhumber.className = "d-show d-md-none"
    } else {
        mhumber.className = "navbar-md d-md-none d-none";
        iconclose.className = "d-none d-md-none"
        iconhumber.className = "d-show d-md-none"
    }
}
showpro();
function showslid2() {
    var slid1 = document.getElementById("slide");
    var dot = document.getElementById("dot1");
    var dot2 = document.getElementById("dot2");
    slid1.style.marginLeft = "-968px";
    dot.style.backgroundColor = "#dcdcdc";
    dot2.style.backgroundColor = "#1b1a17";
}
function showslid1() {
    var slid1 = document.getElementById("slide");
    var dot = document.getElementById("dot1");
    slid1.style.marginLeft = "0px";
    var dot = document.getElementById("dot1");
    dot2.style.backgroundColor = "#dcdcdc";
    dot.style.backgroundColor = "#1b1a17";
}

var addcart = document.getElementById("add-cart");
function addcart() {
    var contercart = document.getElementById('conter-product');
    // debugger;
    var i = contercart.innerHTML;
    i++;
    contercart.innerHTML = i;


}