let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    btn.textContent = "Dodaj 10 elementów listy";
    document.body.appendChild(btn);
    btn.style.fontSize = "28px";

    const ul = document.createElement("ul");
    document.body.appendChild(ul);

    btn.addEventListener("click", createLiElements);
}

const createLiElements = () => {
    console.log("create");

    for (let i = 0; i < 10; i++) {

        const li = document.createElement('li');
        li.textContent =

            console.log("for");

    }

}

init();