import "../styles/style.css";

const DOMSelectors = {
  container: document.querySelectorAll(`#container`),
  container: document.getElementById("container"),
  form: document.getElementById("form"),
};

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
    name: `Bangalore`,
    url: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-bangalore-xl.jpg.adapt.320w.jpg",
    classified: "Assault",
  },
  {
    id: 2,
    name: `Revenant`,
    url: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-revenant-xl.jpg.adapt.320w.jpg",
    classified: "Assault",
  },
  {
    id: 3,
    name: "Wraith",
    url: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-wraith-xl.jpg.adapt.320w.jpg",
    classified: "Runner",
  },
  {
    id: 4,
    name: "Pathfinder",
    url: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-pathfinder-xl.jpg.adapt.320w.jpg",
    classified: "Runner",
  },
  {
    id: 5,
    name: "Octane",
    url: "https://static.wikia.nocookie.net/apex-legends/images/f/fd/Octane.png/revision/latest?cb=20201103232014&path-prefix=pl",
    classified: "Runner",
  },
  {
    id: 6,
    name: "Horizon",
    url: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-horizon-xl.jpg.adapt.320w.jpg",
    classified: "Runner",
  },
  {
    id: 7,
    name: "Bloodhound",
    url: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-bloodhound-xl.jpg.adapt.320w.jpg",
    classified: "Reacon",
  },
  {
    id: 8,
    name: "Loba",
    url: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-loba-xl.jpg.adapt.320w.jpg",
    classified: "Support",
  },
  {
    id: 9,
    name: "Wattson",
    url: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-wattson-xl.jpg.adapt.320w.jpg",
    classified: "Pioneer",
  },
];
