import "../styles/style.css";

const Apples = {
  display: document.querySelector(".display"),
};

document.getElementById("Runner").addEventListener("click", function () {
  Apples.display.innerHTML = "";
});

document.getElementById("Assault").addEventListener("click", function () {
  Apples.display.innerHTML = "";
});

document.getElementById("Support").addEventListener("click", function () {
  Apples.display.innerHTML = "";
});

document.querySelector("#theme").addEventListener("click", function () {
  if (document.body.classList.contains("No-Color")) {
    document.body.classList.add("Color");
    document.body.classList.remove("No-Color");
  } else {
    document.body.classList.add("No-Color");
    document.body.classList.remove("Color");
  }
});

document.getElementById("Support").addEventListener("click", function () {
  const SupportLegends = legends.filter(
    (legends) => legends.classified === "Support"
  );
  SupportLegends.forEach((SupportLegends) => {
    Apples.display.insertAdjacentHTML(
      "afterbegin",
      `<div class="display-card" id="display-card">
     <h2 class="poster-title">${SupportLegends.name}</h2>
     <img class="poster-url" src="${SupportLegends.url}"</img>
     <h3 class="poster-price">$${SupportLegends.classified}</h3>
     </div>`
    );
  });
});

/*document.getElementById("Runner").addEventListener("click", function () {
  const RunnerLegends = legends.filter(
    (legends) => legends.classified === "Runner"
  );
  RunnerLegends.forEach((RunnerLegends) => {
    Apples.display.insertAdjacentHTML(
      "afterbegin",
      `<div class="display-card" id="display-card">
     <h2 class="poster-title">${RunnerLegends.name}</h2>
     <img class="poster-url" src="${RunnerLegends.url}"</img>
     <h3 class="poster-price">$${RunnerLegends.classified}</h3>
     </div>`
    );
  });
});*/

document.getElementById("Assault").addEventListener("click", function () {
  const AssaultLegends = legends.filter(
    (legends) => legends.classified === "Assault"
  );
  AssaultLegends.forEach((AssaultLegends) => {
    Apples.display.insertAdjacentHTML(
      "afterbegin",
      `<div class="card name" id="display-card">
     <h2 class="card">${AssaultLegends.name}</h2>
     <img class="card url" src="${AssaultLegends.url}"</img>
     <h3 class="card classified">${AssaultLegends.classified}</h3>
     </div>`
    );
  });
});

const legends2 = [
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
