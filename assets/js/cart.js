function receivejson() {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject('Microsoft.XMLHTTP')
    }
    request.open('Get', 'products.json')
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            // debugger;
            var itemj = JSON.parse(request.responseText);
            console.log(itemj);
            for(var i=0; i<8; i++)
            {
                console.log(localStorage.getItem("idproduct"+i),itemj[i].id);
                if (itemj[i].id == localStorage.getItem("idproduct"+i)) {
                    var product1 = document.querySelector(".main-cart")
                    console.log(product1);
                    product1.innerHTML += `
                    <div class="product-items d-flex">
                    <div>
                      <img class="" src=${itemj[i].src} alt="">
                    </div>
                     <div class="title-product-items">
                       <h3>${itemj[i].name}</h3>
                       <p>109.95$</p>
                     </div>
                        <span class="span-counter">1</span>
                      <div>
                      <button class="bnt-counter btn-cartless">-</button>
                      <button class="bnt-counter">+</button>
                      </div>
                      </div>
                      `;
                      
              
                }
        }     
    }
}
request.send();

}
// receivejson();