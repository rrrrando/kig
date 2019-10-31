import data from "./data.js";

const container = document.querySelector(".container");
data.map(item => {
    let child = document.createElement("div");
    child.insertAdjacentHTML(
        "afterbegin",
        `
        <div>
            <div><img src="/assets/img/${item.filename}" alt="" height="" /></div>
            <a class="item-link" href="${item.url}">${item.title}</a>
        </div>`
    );

    container.appendChild(child);
});
