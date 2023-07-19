import { categoryFilter } from "./categoryFilter.js";
import { gameData } from "./database.js";
import { renderItems } from "./renderItems.js";
import { searchFilter } from "./searchFilter.js";

export const itemQuantity = document.querySelector(".number");
export const totalPriceElement = document.querySelector(".value");

export let shoppingCount = [];

export const setShoppingCount = (newValue) => {
    shoppingCount = newValue;
    return shoppingCount;
};

renderItems(gameData);
categoryFilter();
searchFilter();
