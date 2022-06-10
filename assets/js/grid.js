
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
    // contercart.innerHTML = i;
    countercart();
    document.getElementById("btns-counter").className += "d-show";
    addcart.className = "d-none";
}
var contercart = document.getElementById('conter-product');

addbutton();
function addbutton(btncart) {
    const div1 = document.createElement("div");
    const img = document.createElement("img");
    const btn = document.createElement("button");
    const btnadd = document.createElement("button");
    const btnless = document.createElement("button");
    const span = document.createElement("span");
    var product;
    var x = 0, y = 1, counter = 0;
    var items = document.getElementsByClassName("product-item");
    for (var i = 0; i < 8; i++) {
        if (i == btncart.id) {
            img.src = "assets/images/delete.svg";
            img.className = "img-counter";
            btn.className = "bnt-counter";
            btn.style.padding = " 0 .2rem";
            btn.appendChild(img);
            div1.appendChild(btn);
            span.className = "span-counter";
            span.innerHTML = "1";
            contercart.innerHTML = span.innerHTML;
            div1.appendChild(span);
            btnadd.className = "bnt-counter";
            btnadd.innerHTML = "+";
            div1.appendChild(btnadd);
            items[i].appendChild(div1);
            btncart.style.display = "none";
            countercart();
            localStorage.setItem("idproduct" + i, i.toString())

        }
    }
    btn.addEventListener("click", showbtncart);
    function showbtncart() {
        btncart.style.display = "flex";
        div1.removeChild(span);
        div1.style.display = "none";
        countercart();
    }

    btnadd.addEventListener("click", addcart);

    function addcart() {
        btnless.className = "bnt-counter";
        btnless.innerHTML = "-";
        if (!(div1.firstChild.isSameNode(btnless))) {
            div1.replaceChild(btnless, btn);
        }
        y += 1;
        x += 1;
        span.innerHTML = y.toString();
        countercart();
        x++;
    }
    btnless.addEventListener("click", lesscart);
    function lesscart() {
        if (y == 2) {
            div1.replaceChild(btn, btnless);
            countercart();
        }
        y -= 1;
        span.innerHTML = y.toString();
        countercart();
    }

}
function countercart() {
    const nodeList = document.querySelectorAll(".product-item span");
    counter = 0;
    for (var i = 0; i < nodeList.length; i++) {
        counter += eval(nodeList[i].innerHTML);
        // console.log(nodeList[i].innerHTML);
    }
    contercart.innerHTML = counter.toString();
    localStorage.setItem("totalitems", counter.toString());
}

function showcart() {
    localStorage.clear();

    const nodeListcart = document.querySelectorAll(".product-item");
    for (var i = 0; i < nodeListcart.length; i++) {
        // debugger;
        if (nodeListcart[i].children.length > 3) {
            localStorage.setItem("idproduct" + i, i);
            localStorage.setItem("spantext" + i, nodeListcart[i].children[3].childNodes[1].innerHTML);
            // console.log(localStorage.getItem("spantext"+i));
        }
    }
    window.location = "cart.html";
    // loadcart();

}

function loadcart() {
    var sumproduct = 0
    // debugger;
    // console.log("fdfdf");
    // showcart();
    var totalitems = document.getElementById("total-items");
    var cproductcart = document.getElementById("conter-product-cart");
    cproductcart.innerHTML = localStorage.getItem("totalitems");
    for (var i = 0; i < 8; i++) {
        console.log(localStorage.getItem("idproduct" + i), localStorage.getItem("spantext" + i));
        sumproduct += eval(localStorage.getItem("spantext" + i));
    }
    cproductcart.innerHTML = sumproduct.toString();
    totalitems.innerHTML = sumproduct.toString();
    // debugger;
    receivejson();
}



