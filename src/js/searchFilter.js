import { gameData } from "./database.js";
import { renderItems } from "./renderItems.js";

const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-button");

export const searchFilter = () => {
    searchInput.addEventListener("input", (e) => {
        if (e.target.value === "") {
            renderItems(gameData);
        }
    });

    searchBtn.addEventListener("click", () => {
        const inputValue = searchInput.value;

        const filterArr = gameData.filter((item) => {
            const itemName = item.name.toLowerCase();
            const filterValue = inputValue.toLowerCase();

            if (itemName.match(filterValue)) {
                return item;
            }
        });

        renderItems(filterArr);
    });
};
