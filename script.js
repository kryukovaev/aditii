// const products = [
//   { title: "branden shoe", price: 300, photo: "<img src='img/products/1.png'>" },
//   { title: "branden tees", price: 120, photo: "<img src='img/products/2.png'>" },
//   { title: "branden shoe", price: 130, photo: "<img src='img/products/3.png'>" },
//   { title: "branden shoe", price: 200, photo: "<img src='img/products/4.png'>" },
//   { title: "ems women bag", price: 250, photo: "<img src='img/products/5.png'>" },
//   { title: "branden cargos", price: 320, photo: "<img src='img/products/6.png'>" },
// ];
// const DEFAULT_PRODUCT = {
//   title: "Default",
//   price: 999,
//   photo: 999,
// };

// const renderProductsItem = ({ title, price, photo } = DEFAULT_PRODUCT) => {
//   return `<div class="products-item">${photo}<h3>${title}</h3><p>${price}$<button class="products-button" type="button">Buy Now</button></p></div>`;
// };

// const renderProductsList = (list = []) => {
//   let productsList = list.map((item) => renderProductsItem(item)).join("");
//   document.querySelector(".products-list").innerHTML = productsList;
// };

// renderProductsList(products);

class ProductsList {
  constructor() {
    this.products = [];
  }
  fetchProducts() {
    this.products = [
      { title: "branden shoe", price: 300, photo: "<img src='img/products/1.png'>" },
      { title: "branden tees", price: 120, photo: "<img src='img/products/2.png'>" },
      { title: "branden shoe", price: 130, photo: "<img src='img/products/3.png'>" },
      { title: "branden shoe", price: 200, photo: "<img src='img/products/4.png'>" },
      { title: "ems women bag", price: 250, photo: "<img src='img/products/5.png'>" },
      { title: "branden cargos", price: 320, photo: "<img src='img/products/6.png'>" },
    ];
  }

  render() {
    let listHtml = "";
    this.products.forEach(({ title, price, photo }) => {
      const product = new ProductsItem(title, price, photo);
      listHtml += product.render();
    });
    document.querySelector(".products-list").innerHTML = listHtml;
  }
}

class ProductsItem {
  constructor(title, price, photo) {
    this.title = title;
    this.price = price;
    this.photo = photo;
  }

  render() {
    return `<div class="products-item">${this.photo}<h3>${this.title}</h3><p>${this.price}$<button class="products-button" type="button">Buy Now</button></p></div>`;
  }
}

class Cart {
  constructor() {
    this.items = [];
  }

  push(CartItem) {
    this.items.push();
  }
}

class CartItem {
  constructor(product) {
    this.product = product;
  }
}

const cart = new Cart();
const addToCard = (product) => cart;

const productsList = new ProductsList();
productsList.fetchProducts();
productsList.render(".products-list");

const fetch = (method, url) => {
  let xhr;

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTp");
  }

  xhr.onereadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const images = JSON.parse(xhr.responseText);
      console.log(images, images);
    }
  };

  xhr.open(method, url);
  xhr.setRequestHeader("x-custom", "my custom header");
  xhr.timeout = 15000;
  xhr.send();
};

const URL = "https://";
fetch("GET", URL);
