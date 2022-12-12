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
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS23kXPcP0PHe9pr9H6qW59vMT3P8G8fzRJ4g&usqp=CAU",
    color: 
  },
  {
    id: 2,
    name: `hedgy2`,
    url: "https://i.pinimg.com/736x/98/ba/48/98ba48c230f378e064a02ec15c3b7227.jpg",
  },
  {
    id: 3,
    name: `hedgy3`,
    url: "https://i.pinimg.com/originals/87/a9/65/87a9655bf12a64432d0d0bca90dd2887.jpg",
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

  {
    id: 6,
    name: `hedgy6`,
    url: "https://nypost.com/wp-content/uploads/sites/2/2021/05/hedgehog.jpg?quality=75&strip=all&w=1024",
  },

  {
    id: 7,
    name: `hedgy7`,
    url: "",
  },
];
