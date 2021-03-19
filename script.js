const products = [
  { title: "branden shoe", price: 300, photo: "<img src='img/products/1.png'>" },
  { title: "branden tees", price: 120, photo: "<img src='img/products/2.png'>" },
  { title: "branden shoe", price: 130, photo: "<img src='img/products/3.png'>" },
  { title: "branden shoe", price: 200, photo: "<img src='img/products/4.png'>" },
  { title: "ems women bag", price: 250, photo: "<img src='img/products/5.png'>" },
  { title: "branden cargos", price: 320, photo: "<img src='img/products/6.png'>" },
];

const renderProductsItem = (title, price, photo) => {
  return `<div class="products-item">${photo}<h3>${title}</h3><p>${price}$<button class="products-button" type="button">Buy Now</button></p></div>`;
};

const renderProductsList = (list) => {
  let productsList = list.map((item) => renderProductsItem(item.title, item.price, item.photo));
  document.querySelector(".products-list").innerHTML = productsList;
};

renderProductsList(products);
