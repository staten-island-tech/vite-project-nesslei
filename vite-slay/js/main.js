import "../styles/style.css";

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
    url: "",
    color: "",
  },

  {
    id: 2,
    name: `hedgy2`,
    url: "",
  },
  {
    id: 3,
    name: `hedgy3`,
    url: "",
  },
  {
    id: 4,
    name: `hedgy4`,
    url: "",
  },

  {
    id: 5,
    name: `hedgy5`,
    url: "",
  },

  {
    id: 6,
    name: `hedgy6`,
    url: "",
  },

  {
    id: 7,
    name: `hedgy7`,
    url: "",
  },
];
