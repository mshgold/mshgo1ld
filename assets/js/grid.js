
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

function closemenu() {
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
// showpro();
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


function addcart() {
    var addcart = document.getElementById("add-cart");
    var contercart = document.getElementById('conter-product');
    // debugger;
    var i = contercart.innerHTML;
    i++;
    contercart.innerHTML = i;
    document.getElementById("btns-counter").className += "d-show";
    addcart.className = "d-none";


}
addbutton();
function addbutton(btncart) {
    const div1 = document.createElement("div");
    const img = document.createElement("img");
    const btn = document.createElement("button");
    const btnadd = document.createElement("button");
    const btnless = document.createElement("button");
    var items = document.getElementsByClassName("product-item");
    for (var i = 0; i < 8; i++) {
        if (i == btncart.id) {
            img.src = "assets/images/delete.svg";
            img.className = "img-counter";
            btn.className = "bnt-counter";
            btn.style.padding = " 0 .2rem";
            btn.appendChild(img);
            div1.appendChild(btn);
            const span = document.createElement("span");
            span.className = "span-counter";
            span.innerHTML = "1";
            div1.appendChild(span);
            btnadd.className = "bnt-counter";
            btnadd.innerHTML = "+";
            div1.appendChild(btnadd);
           items[i].appendChild(div1);
            btncart.style.display = "none";
        }
    }
    btn.addEventListener("click", showbtncart);
    function showbtncart() {
        btncart.style.display = "flex";
        div1.style.display = "none";
    }
    btnadd.addEventListener("click", addcart);
    function addcart() {
        // btn.style.display = "none";
        btnless.className="bnt-counter";
        btnless.innerHTML="-";
        // btnless.display.float="left";
        
        
        div1.replaceChild(btnless,btn);
        // div1.removeChild(btnadd);
        // div1.removeChild(span.chi);
        // div1.appendChild(btnless);
        // div1.appendChild(span);
        // div1.appendChild(btnadd);

    }
}