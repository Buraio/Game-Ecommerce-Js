import { createCartItemElement } from "./cartList.js";
import { itemQuantity, shoppingCount, totalPriceElement } from "./index.js";
import { createItemElement, createTags } from "./productList.js";

const products = document.querySelector("#products");
const shoppingList = document.querySelector("#shoppingList");

export const renderCartItems = (arr) => {
    shoppingList.innerHTML = "";
    let totalPrice = 0;

    for (let i = 0; i < arr.length; i++) {
        const { id, img, name, price } = arr[i];

        totalPrice += price;

        const cartItem = createCartItemElement(id, img, name, price);
        shoppingList.appendChild(cartItem);
    }

    totalPriceElement.innerHTML = `R$ ${totalPrice.toFixed(2)}`;
};

export const renderItems = (arr) => {
    products.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        const { img, name, description, price, tags } = arr[i];

        const item = createItemElement(img, name, description, price);
        createTags(item, tags);

        const addToCartBtn = item.querySelector(".addToCart");

        addToCartBtn.addEventListener("click", () => {
            const validateSameItem = shoppingCount.find((item) => {
                if (item.id == arr[i].id) {
                    return item;
                }
            });

            if (!validateSameItem) {
                shoppingCount.push(arr[i]);
            }

            itemQuantity.innerHTML = shoppingCount.length;
            renderCartItems(shoppingCount);
        });

        products.appendChild(item);
    }
};
