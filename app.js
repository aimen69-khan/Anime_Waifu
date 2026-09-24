const SERIES = {
  "One Piece": "#ff6b47",
  Naruto: "#ff9f1c",
  Bleach: "#5b6ee1",
  Frieren: "#7fd9a8",
  "Golden Boy": "#f4c430",
  Dandadan: "#ff2e93",
  "100 Girlfriends": "#ff8fb1",
};

const CHARACTERS = [
  {
    name: "Nami",
    series: "One Piece",
    trait: ["Navigator", "Strategist"],
    line: "Reads the weather and the room equally well.",
    bio: "The Straw Hats' navigator, chasing a childhood dream of mapping the whole world. Sharp with money, sharper with a Clima-Tact in hand.",
    img: "images/nami.jpg",
  },
  {
    name: "Nico Robin",
    series: "One Piece",
    trait: ["Historian", "Devil Fruit user"],
    line: "Turns a library into a weapon.",
    bio: "An archaeologist hunting the true history of the world. Calm under pressure, and able to sprout limbs anywhere with Hana Hana no Mi.",
    img: "./images/robbin.jpg",
  },
  {
    name: "Boa Hancock",
    series: "One Piece",
    trait: ["Empress", "Warlord"],
    line: "Commands an island and a fleet with a glance.",
    bio: "The Pirate Empress of Amazon Lily, known for her pride, her Love-Love Fruit, and her fierce loyalty once it's earned.",
    img: "./images/BoaHancock.jpg",
  },
  {
    name: "Yamato",
    series: "One Piece",
    trait: ["Free spirit", "Brawler"],
    line: "Decided their own name and their own path.",
    bio: "Raised on Onigashima, Yamato rejected the role they were born into and fights with the strength of an Ice-Ice user in training.",
    img: "./images/yamato.jpg",
  },

  {
    name: "Hinata Hyuga",
    series: "Naruto",
    trait: ["Byakugan", "Gentle Fist"],
    line: "Quiet resolve that grows louder each fight.",
    bio: "Once shy and unsure, Hinata trains relentlessly to prove her worth to her clan and to herself, mastering the Hyuga's Gentle Fist style.",
    img: "./images/Hinata.jpg",
  },
  {
    name: "Konan",
    series: "Naruto",
    trait: ["The Paper Angel of Amegakure"],
    line: "Studied under Jiraiya and it shows.",
    bio: "Calm, stoic, and fiercely loyal. Wears a light blue paper flower in her hair and wields huge influence as the Angel guiding the Hidden Rain Village alongside Pain.",
    img: "./images/Konan.jpg",
  },
  {
    name: "Tsunade",
    series: "Naruto",
    trait: ["Fifth Hokage", "Sannin"],
    line: "The village's best healer and its boldest leader.",
    bio: "A legendary Sannin who returned from self-exile to lead the Hidden Leaf, pairing peerless medical jutsu with terrifying physical power.",
    img: "./images/tsunade.jpg",
  },

  {
    name: "Ino Yamanaka",
    series: "Naruto",
    trait: ["Head of Konoha Barrier Team", "Ino-Shika-Cho Member"],
    line: "Konoha's mind-bending sensory master and strategic backbone.",
    bio: "Mind Transfer Jutsu (Shintentenshin no Jutsu), Psycho Mind Transmission, Medical Ninjutsu.",
    img: "./images/ino.jpg",
  },

  {
    name: "Rukia Kuchiki",
    series: "Bleach",
    trait: ["Soul Reaper", "Noble"],
    line: "Started it all with a borrowed sword.",
    bio: "A Soul Reaper of the Kuchiki noble house who handed Ichigo his powers, wielding an ice-type zanpakuto with quiet discipline.",
    img: "./images/RukiaKuchiki.jpg",
  },
  {
    name: "Orihime Inoue",
    series: "Bleach",
    trait: ["Healer", "Shun Shun Rikka"],
    line: "Rejects wounds instead of just closing them.",
    bio: "Gentle and unexpectedly powerful, Orihime's six fairies can reject reality itself to undo injury — one of the rarest gifts in the series.",
    img: "./images/OrihimeInoue.jpg",
  },

  {
    name: "Rangiku Matsumoto",
    series: "Bleach",
    trait: ["Flash Master", "Former captain"],
    line: "Lieutenant of the 10th Division in the Gotei 13 under Captain Toshiro.",
    bio: "Known for a Relaxed, lazy personality that avoids paperwork, contrasting sharply with her serious Captain.",
    img: "./images/rangiku.jpg",
  },

  {
    name: "Yoruichi Shihoin",
    series: "Bleach",
    trait: ["Flash Master", "Former captain"],
    line: "Faster than the eye, twice as sharp-tongued.",
    bio: "A former Soul Reaper captain and head of a noble house, famous for the Flash Step and for training Soul Reapers in secret.",
    img: "./images/YoruichiShihoin.jpg",
  },

  {
    name: "Frieren",
    series: "Frieren",
    trait: ["Elf mage", "Millennia old"],
    line: "Learning to measure life in decades, not centuries.",
    bio: "An elven mage who outlived her whole adventuring party, now journeying slowly to understand the humans she never took the time to know.",
    img: "./images/frieren.jpg",
  },
  {
    name: "Fern",
    series: "Frieren",
    trait: ["Mage apprentice"],
    line: "Raised on magic and quiet devotion.",
    bio: "Orphaned young and trained by Frieren's late companion, Fern is a sharp, disciplined mage who keeps her teacher grounded and on schedule.",
    img: "./images/fern.jpg",
  },

  {
    name: "Chiharu Kurosawa",
    series: "Golden Boy",
    trait: ["Aspiring novelist"],
    line: "Sees the story in everyone she meets.",
    bio: "A determined young writer whose brief crossing of paths with the wandering protagonist leaves both of them changed.",
    img: "./images/ChiharuKurosawa.jpg",
  },
  {
    name: "Mizutai Miki",
    series: "Golden Boy",
    trait: ["Programmer"],
    line: "Underestimated exactly once.",
    bio: "A brilliant, no-nonsense software engineer who reluctantly comes to respect the series' relentlessly earnest hero.",
    img: "./images/MizutaiMiki.jpg",
  },

  {
    name: "Momo Ayase",
    series: "Dandadan",
    trait: ["Psychic power", "Fearless"],
    line: "Dared a ghost to a duel and won.",
    bio: "Bold and quick-tempered, Momo's latent psychic abilities awaken after a night of ghost-hunting gone completely sideways.",
    img: "./images/momo.jpg",
  },
  {
    name: "Aira Shiratori",
    series: "Dandadan",
    trait: ["Model", "Occult fan"],
    line: "Glamorous on camera, obsessed with the paranormal off it.",
    bio: "A rising idol who hides a deep love of urban legends and spirits behind a polished public image.",
    img: "./images/aira.jpg",
  },

  {
    name: "Karane Inda",
    series: "100 Girlfriends",
    trait: ["Energetic", "Loyal"],
    line: "Loud about her feelings, louder about her friends.",
    bio: "One of the many girlfriends orbiting the story's hapless hero, defined by her boundless energy and fierce loyalty to the people she loves.",
    img: "./images/karane.jpg",
  },
  {
    name: "Hakari Hanazono",
    series: "100 Girlfriends",
    trait: ["Composed", "Doting"],
    line: "Plans three steps ahead, always for someone else.",
    bio: "Cool-headed and quietly affectionate, she balances the group's chaos with careful planning and unwavering devotion.",
    img: "./images/Hakari.jpg",
  },
];

const grid = document.getElementById("grid");
const filters = document.getElementById("filters");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

function hairShape(color) {
  return `<div class="hair" style="background:
    radial-gradient(circle at 50% 30%, ${color}cc, ${color}55 60%, transparent 61%),
    linear-gradient(160deg, ${color}, ${color}33)"></div>`;
}

function avatarHTML(c, big) {
  const color = SERIES[c.series];
  if (c.img) {
    return `<div class="avatar" style="background:${color}22">
      <img src="${c.img}" alt="${c.name}" loading="lazy"
           onerror="this.remove()">
      ${hairShape(color)}
      ${big ? "" : `<span class="initial">${c.name[0]}</span>`}
    </div>`;
  }
  return `<div class="avatar" style="background:${color}22">
    ${hairShape(color)}
    <div class="face"></div>
    ${big ? "" : `<span class="initial">${c.name[0]}</span>`}
  </div>`;
}

function renderChips() {
  const all = ["All", ...Object.keys(SERIES)];
  filters.innerHTML = all
    .map(
      (s, i) =>
        `<button class="chip ${i === 0 ? "active" : ""}" data-s="${s}" style="${i === 0 ? "" : `background:${SERIES[s] || "#333"}22`}">${s}</button>`,
    )
    .join("");
  filters.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      filters.querySelectorAll(".chip").forEach((c) => {
        c.classList.remove("active");
        c.style.color = "var(--sub)";
        c.style.borderColor = "var(--line)";
      });
      chip.classList.add("active");
      const color = SERIES[chip.dataset.s];
      if (color) {
        chip.style.background = color;
        chip.style.borderColor = color;
        chip.style.color = "#15111e";
      } else {
        chip.style.background = "#fff";
        chip.style.color = "#15111e";
      }
      renderGrid(chip.dataset.s);
    });
  });
}

function renderGrid(filter) {
  const list =
    filter && filter !== "All"
      ? CHARACTERS.filter((c) => c.series === filter)
      : CHARACTERS;
  grid.innerHTML = list
    .map(
      (c, i) => `
    <button class="card" data-i="${CHARACTERS.indexOf(c)}" style="--i:${i}">
      ${avatarHTML(c)}
      <p class="cname">${c.name}</p>
      <span class="cseries" style="color:${SERIES[c.series]}">${c.series}</span>
      <p class="cline">${c.line}</p>
    </button>`,
    )
    .join("");
  grid.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => openModal(CHARACTERS[card.dataset.i]));
  });
}

function openModal(c) {
  modal.innerHTML = `
    <button class="close" aria-label="Close">×</button>
    ${avatarHTML(c, true)}
    <h2>${c.name}</h2>
    <span class="cseries" style="color:${SERIES[c.series]}">${c.series}</span>
    <div style="text-align:center; margin:10px 0;">
      ${c.trait.map((t) => `<span class="trait">${t}</span>`).join("")}
    </div>
    <p>${c.bio}</p>
  `;
  overlay.classList.add("show");
  modal.querySelector(".close").addEventListener("click", closeModal);
}
function closeModal() {
  overlay.style.opacity = "0";
  setTimeout(() => {
    overlay.classList.remove("show");
    overlay.style.opacity = "";
  }, 180);
}
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

renderChips();
renderGrid("All");
