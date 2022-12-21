import "../styles/style.css";
import { legends } from "../js/legends.js"; 

const Apples = {
  display: document.querySelector(".display"),
};

document.querySelector(`.Color`).addEventListener("click", function () {
  if (document.body.classList.contains("No-Color")) {
    document.body.classList.add("Color");
    document.body.classList.remove("No-Color");
  } else {
    document.body.classList.add("No-Color");
    document.body.classList.remove("Color");
  }
});

legends.forEach((legends) => {
  let html = `
  <div class="card">
  <img class="legends-picture" src="${legends.url}">
  <h2 class="class">This is ${legends.classified}</h2>
  </div>
`;
  legends.classified.forEach((classified) => {
    let newEl = `<p class="classified">${classified}</p>`;
    return (html += newEl);
  });
  Apples.display.insertAdjacentHTML("beforeend", html);
});

document.querySelector(".Runner").addEventListener("click", function () {
  Apples.display.innerHTML = "";
  legends
    .filter((legends) => legends.classified.includes("Runner"))
    .forEach((legends) => {
      let html = `
      <div class="card">
      <img class="legends-picture" src="${legends.url}">
      <h2 class="class">This is a ${legends.classified} legend</h2>
      </div>
    `;
      Apples.display.insertAdjacentHTML("beforeend", html);
    });
});

document.querySelector(".cute").addEventListener("click", function () {
 Apples.display.innerHTML = "";
  legends
    .filter((legends) => legends.ten === true)
    .forEach((legends) => {
      let html = `
      <div class="card">
      <img class="legends-picture" src="${legends.url}">
      <h2 class="cute">This ${legends.name} a ${legends.classified}.</h2>
      </div>
    `;
      legends.classified.forEach((classified) => {
        let newEl = `<p class="class">${classified}</p>`;
        return (html += newEl);
      });
      Apples.display.insertAdjacentHTML("beforeend", html);
    });
});
