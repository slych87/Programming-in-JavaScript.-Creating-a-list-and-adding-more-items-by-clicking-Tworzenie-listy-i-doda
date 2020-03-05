let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    btn.textContent = "Dodaj 10 elementów listy";
    document.body.appendChild(btn);
    btn.style.fontSize = "28px";

    const btnReset = document.createElement("button");
    btnReset.textContent = "Wyczyść";
    document.body.appendChild(btnReset);
    btnReset.style.fontSize = "28px";

    const ul = document.createElement("ul");
    ul.style.listStyle = "none";
    document.body.appendChild(ul);

    btn.addEventListener("click", createLiElements);
    btnReset.addEventListener("click", cleanList);
}

const createLiElements = () => {
    console.log("create");

    for (let i = 0; i < 10; i++) {

        const li = document.createElement('li');
        li.textContent = `Element nr ${orderElement++}`;
        li.style.fontSize = `${size++}px`;
        document.querySelector('ul').appendChild(li);

    }

}

const cleanList = () => {
    document.querySelector('ul').textContent = "";
};
init();