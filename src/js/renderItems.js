import { createCartItemElement } from "./cartList.js";
import { shoppingCount } from "./index.js";
import { createItemElement, createTags } from "./productList.js";

const products = document.querySelector("#products");
const shoppingList = document.querySelector("#shoppingList");

export const renderCartItems = (arr) => {
    shoppingList.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        const { id, img, name, price } = arr[i];

        const cartItem = createCartItemElement(id, img, name, price);
        shoppingList.appendChild(cartItem);
    }
};

export const renderItems = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const { img, name, description, price, tags } = arr[i];

        const item = createItemElement(img, name, description, price);
        createTags(item, tags);

        const addToCartBtn = item.querySelector(".addToCart");

        addToCartBtn.addEventListener("click", () => {
            shoppingCount.push(arr[i]);
            renderCartItems(shoppingCount);
        });

        products.appendChild(item);
    }
};
