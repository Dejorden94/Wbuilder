/* <article class="card">
<header class="card__header">
    <h1 class="card__heading">Card 1</h1>
</header>
<div>
    <section class="card__body">
        <p class="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolore itaque
            eius
            non? Recusandae, quisquam .</p>
    </section>
    <footer class="card__footer">
        <button class="card__action">Action</button>
    </footer>
</div>
</article> */

const renderCards = (cardsData) => {
    for (let i = 0; i < cardsData.length; i++) {
        document.querySelector("body").appendChild(makeCard(cardsData[i]))
    }
}

const makeCard = (cardObject) => {
    let article = document.createElement("article");

    article.classList = "card";
    article.appendChild(makeHeader(cardObject.title));
    article.appendChild(makeDiv(cardObject));

    return article;
}

const makeHeader = (title) => {
    let header = document.createElement("header");
    header.classList = "card__header";

    let heading = document.createElement("h1");
    heading.classList = "card__heading";
    heading.innerText = title;
    header.appendChild(heading);

    return header;
}

const makeDiv = (cardObject) => {
    let div = document.createElement("div");

    div.appendChild(makeBody(cardObject.text));
    div.appendChild(makeFooter(cardObject.action))

    return div;
}

const makeFooter = (buttonText) => {
    let footer = document.createElement("footer");
    footer.classList = "card__footer";

    footer.appendChild(makeButton(buttonText));

    return footer;
}

const makeButton = (actionText) => {
    let button = document.createElement("button");
    button.classList = "card__action";

    button.innerText = actionText;

    return button;
}

const makeBody = (text) => {
    let section = document.createElement("section");
    section.classList = "card__body";

    section.appendChild(makeText(text));

    return section;
}

const makeText = (text) => {
    let paragraf = document.createElement("p");
    paragraf.classList = "card__text";
    paragraf.innerText = text;

    return paragraf;
}

const init = () => {
    fetch("https://dejorden94.github.io/Wbuilder/data/cardsStructure.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => renderCards(data))
        .catch(error => console.error('Er is een fout opgetreden:', error));
};

function render(data, parent) {
    let childElement;
    for (let i = 0; i < data.length; i++) {
        childElement = document.createElement(data[i].tag);
        childElement.classList = data[i].classList;
        if (data[i].root === true) {
            parent = document.querySelector("body");
        }
        if (data[i].text !== undefined) {
            childElement.innerText = data[i].text
        }
        if (data[i].children.length > 0) {
            render(data[i].children, childElement)
        }
        parent.appendChild(childElement);
    }
}

init();