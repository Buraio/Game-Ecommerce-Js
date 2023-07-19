export const createItemElement = (img, name, description, price) => {
    const item = document.createElement("li");
    const descriptionDiv = document.createElement("div");
    const gameImg = document.createElement("img");
    const gameTitle = document.createElement("strong");
    const gameDescription = document.createElement("p");
    const gamePrice = document.createElement("strong");
    const addToCart = document.createElement("button");

    item.classList.add("item");
    descriptionDiv.classList.add("description");
    gameImg.classList.add("game-img");
    gameTitle.classList.add("game-title");
    gameDescription.classList.add("game-description");
    gamePrice.classList.add("game-price");
    addToCart.classList.add("add-to-cart");

    gameImg.src = `./src/img/${img}`;
    gameTitle.innerText = name;
    gameDescription.innerText = description;
    gamePrice.innerText = `R$ ${price.toFixed(2)}`;
    addToCart.innerText = "Adicionar ao carrinho";

    descriptionDiv.appendChild(gameImg);
    descriptionDiv.appendChild(gameTitle);
    descriptionDiv.appendChild(gameDescription);
    descriptionDiv.appendChild(gamePrice);
    descriptionDiv.appendChild(addToCart);
    item.appendChild(descriptionDiv);

    return item;
};

export const createTags = (item, tags) => {
    const tagDiv = document.createElement("div");
    tagDiv.classList.add("tag-div");

    for (let i = 0; i < tags.length; i++) {
        const tag = document.createElement("small");
        tag.classList.add("tag");
        tag.innerText = tags[i];
        tagDiv.appendChild(tag);
    }

    item.querySelector(".description").appendChild(tagDiv);
};
