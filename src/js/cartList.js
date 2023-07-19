import { itemQuantity, setShoppingCount, shoppingCount } from "./index.js";
import { renderCartItems } from "./renderItems.js";

export const createCartItemElement = (id, img, name, price) => {
    const cartItem = document.createElement("li");
    const cartImg = document.createElement("img");
    const cartItemDesc = document.createElement("div");
    const cartName = document.createElement("strong");
    const cartPrice = document.createElement("span");
    const cartRemoveItem = document.createElement("button");

    cartItem.classList.add("cart-item");
    cartImg.classList.add("cart-img");
    cartItemDesc.classList.add("cart-item-desc");
    cartName.classList.add("name-strong");
    cartRemoveItem.classList.add("remove-item");

    cartImg.src = `./src/img/${img}`;
    cartName.innerText = name;
    cartPrice.innerText = `R$ ${price.toFixed(2)}`;
    cartRemoveItem.innerText = "Remover";

    cartItemDesc.appendChild(cartName);
    cartItemDesc.appendChild(cartPrice);
    cartItem.appendChild(cartImg);
    cartItem.appendChild(cartItemDesc);
    cartItem.appendChild(cartRemoveItem);

    cartRemoveItem.addEventListener("click", () => {
        const newShoppingCount = setShoppingCount(
            shoppingCount.filter((value) => value.id !== id)
        );
        itemQuantity.innerHTML = shoppingCount.length;

        renderCartItems(newShoppingCount);
    });

    return cartItem;
};
