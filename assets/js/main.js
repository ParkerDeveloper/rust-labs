// const data = { action: "items" };
// const prodcuts = document.querySelector(".products");
// fetch("https://parkerdev.gamestores.app/files/stores/backend/store.shop.php", {
//   method: "POST",
//   mode: "cors",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     data.items.map((item, index) => {
//       let name = item.name;
//       let img = item.img;
//       let price = item.price;
//       prodcuts.innerHTML += `
//       <div data-productid=${index} class="products__item">
//          <div class="products__item-img-wrapper">
//            <img
//              class="products__item-img"
//              src=${img}
//               alt="product"
//            />
//          </div>
//          <div class="products__item-info">
//            <p class="products__item-name">${name}</p>

//            <div class="products__item-price-wrapper">
//              <p class="products__item-price_now">${price} ₽</p>
//            </div>
//          </div>
//        </div>`;
//     });
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

//document.querySelector("div[ui-view]").style.display="none"
//var newDiv = document.createElement("div");
//
//var target_div = document.querySelector("div[ui-view]");
//target_div.parentNode.insertBefore(newDiv, target_div.nextSibling);
//newDiv.setAttribute("id", "root");

const querySelectors = {
    product: document.querySelector('.products'),
    category: document.querySelector('.categories'),
}

const apiRequestShop = async () => {
    return await new Promise((res) => {
        const request = new XMLHttpRequest();

        request.open('POST', `${window.location.origin}/files/stores/backend/store.shop.php`);
        request.setRequestHeader('Accept',"application/json");
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        request.onload = () => {
            res(JSON.parse(request.response));
            console.log(request.response)
        }

        request.send(JSON.stringify({
            action: "info"}));
    });
}
