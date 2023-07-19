import { gameData } from "./database.js";
import { tagList } from "./index.js";
import { renderItems } from "./renderItems.js";

const categoryBtn = document.querySelector(".category-btn");
const categorySelect = document.querySelector(".tag-list");

export const createCategory = (tagName) => {
    const categoryItem = document.createElement("option");

    categoryItem.classList.add("category");
    categoryItem.textContent = tagName;
    categoryItem.value = tagName;

    categorySelect.appendChild(categoryItem);

    categorySelect.addEventListener("change", (e) => {
        const selectValue = e.target.value;

        const filteredGameData = gameData.filter((item) => {
            const getItemTag = item.tags.find((tag) => tag === selectValue);

            if (getItemTag) {
                return item;
            }
        });

        if (filteredGameData.length === 0) {
            renderItems(gameData);
        } else {
            renderItems(filteredGameData);
        }
    });
};

export const categoryFilter = () => {
    for (let tag of tagList) {
        createCategory(tag);
    }

    categoryBtn.addEventListener("click", () => {
        categorySelect.classList.toggle("hidden");
    });
};
