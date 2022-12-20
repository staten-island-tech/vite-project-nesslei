import "../styles/style.css";

const legends = [
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

const DOMSelectors = {
  display: document.getElementById("display"),
};

document.getElementById("Runner").addEventListener("click", function () {
  DOMSelectors.display.innerHTML = "";
  Runner("Runner"); 
});

document.getElementById("Assault").addEventListener("click", function () {
  DOMSelectors.display.innerHTML = "";
});

document.getElementById("Support").addEventListener("click", function () {
  DOMSelectors.display.innerHTML = "";
});

document.querySelector(".Color").addEventListener("click", function () {
  if (document.body.classList.contains("No-Color")) {
    document.body.classList.add("Color");
    document.body.classList.remove("No-Color");
  }
});

document.querySelector(".No-Color").addEventListener("click", function () {
  if (document.body.classList.contains("Color")) {
    document.body.classList.add("No-Color");
    document.body.classList.remove("Color");
  }
});

function Runner (clicked) {
  const Runnerclass = legends.filter((clicked) => legends.clicked === true);
  runnerclass.forEach((Runnerclass) => {
    DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",
      `<div class="box" id="legends-box">
      <h2 class="legends-name">${legends.name}</h2>
      <img class="legends-url" src="${legends.url}"</img>
      <h3 class="classification">$${legends.classified}</h3>
      </div>`
    );
  });
};


