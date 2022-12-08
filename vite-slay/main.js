import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));

const hedgehogs = [
  {
    id: 1,
    name: `hedgy1`,
  },
  {
    id: 2,
    name: `hedgy2`,
  },
  {
    id: 3,
    name: `hedgy3`,
    url: 
  },
  {
    id: 4,
    name: `hedgy4`,
    url: "https://goldenexoticpets.com/wp-content/uploads/2020/06/Buy-Albino-Pygmy-Hedgehog.jpg",
  },
  {
    id: 5,
    name: `hedgy5`,
    url: "https://i.pinimg.com/originals/89/55/a7/8955a71079b6edb4e682eb5d761e4076.jpg",
  },
];
