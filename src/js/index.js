import { gameData } from "./database.js";
import { renderItems } from "./renderItems.js";

export let shoppingCount = [];

export const setShoppingCount = (newValue) => {
    shoppingCount = newValue;
    return shoppingCount;
};

renderItems(gameData, shoppingCount);
