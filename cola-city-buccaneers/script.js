const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const closeLightbox = () => {
  lightbox.hidden = true;
  lightboxImage.src = "";
  document.body.style.overflow = "";
};

document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.dataset.full;
    lightboxImage.alt = item.querySelector("img").alt;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  });
});

lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
});


const storyDetails = {
  "knockeville": {
    date: "OCTOBER 7, 2026 · HISTORY / RIVALRIES",
    title: "Remembering the battles against Knockeville",
    paragraphs: [
      "Rivalries are built on repeated meetings, close finishes, and the memories that stay with a franchise long after the final whistle. Cola City's history includes past battles against Knockeville and appearances in the Cherry Bowl conversation.",
      "As the Buccaneers prepare for the next chapter, those matchups remain part of the team's wider YFL story. More game-by-game details can be added here as the official archive is updated."
    ],
    highlight: "THE RIVALRY IS PART OF THE STORY. THE NEXT CHAPTER IS STILL TO COME."
  },
  "uniforms": {
    date: "SEPTEMBER 29, 2026 · TEAM / UNIFORMS",
    title: "Season 20 uniforms revealed",
    paragraphs: [
      "The Buccaneers unveiled their Season 20 uniforms while keeping the familiar look the franchise has carried since Season 16. The red, black, and white identity remains central to the team's visual presence.",
      "The reveal marks another season of continuity for Cola City: a recognizable uniform, a familiar standard, and a franchise still chasing its next breakthrough."
    ],
    highlight: "SAME COLORS. SAME STANDARD. A NEW SEASON."
  },
  "special-teams": {
    date: "SEPTEMBER 24, 2026 · LEGACY / SPECIAL TEAMS",
    title: "The third phase that defines Cola City",
    paragraphs: [
      "Special teams have become a signature part of the Buccaneers identity. The franchise's award history includes Special Teams Player of the Year honors in Seasons 15, 17, and 19, a run of recognition that helped make the third phase part of Cola City's story.",
      "That reputation was on full display in the Miracle at Cola City, when Deestroying's three onside kicks, two punts downed at the 1-yard line, and a kickoff-return touchdown helped fuel one of the league's most memorable comebacks."
    ],
    highlight: "THREE PHASES OF FOOTBALL. ONE BUCCANEERS MINDSET."
  },
  "mark-julio": {
    date: "SEPTEMBER 9, 2026 · PARTNERSHIP / ANNOUNCEMENT",
    title: "Mark Julio Tequila joins the Buccaneers",
    paragraphs: [
      "Cola City announced an official partnership connecting Mark Julio Tequila with the Buccaneers franchise. The announcement added a new business relationship to the team's off-field story during Season 20.",
      "The partnership was announced as part of the franchise's growing identity around football, community, and culture. Specific activations, products, or game-day promotions have not been detailed in the franchise notes yet, so this page will be updated when more information is confirmed."
    ],
    highlight: "MARK JULIO TEQUILA × COLA CITY BUCCANEERS — OFFICIAL PARTNERSHIP ANNOUNCED."
  }
};

const storyModal = document.querySelector(".story-modal");
if (storyModal) {
  const storyTitle = document.getElementById("story-modal-title");
  const storyDate = document.getElementById("story-modal-date");
  const storyCopy = document.getElementById("story-modal-copy");
  const storyClose = storyModal.querySelector(".story-modal-close");
  let lastStoryTrigger = null;

  function openStory(item) {
    const story = storyDetails[item.dataset.story];
    if (!story) return;
    lastStoryTrigger = item;
    storyDate.textContent = story.date;
    storyTitle.textContent = story.title;
    storyCopy.replaceChildren();
    story.paragraphs.forEach(text => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      storyCopy.appendChild(paragraph);
    });
    const highlight = document.createElement("p");
    highlight.className = "story-highlight";
    highlight.textContent = story.highlight;
    storyCopy.appendChild(highlight);
    storyModal.hidden = false;
    document.body.style.overflow = "hidden";
    storyClose.focus();
  }

  function closeStory() {
    storyModal.hidden = true;
    document.body.style.overflow = "";
    if (lastStoryTrigger) lastStoryTrigger.focus();
  }

  document.querySelectorAll(".news-item[data-story]").forEach(item => {
    item.addEventListener("click", () => openStory(item));
    item.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openStory(item);
      }
    });
  });
  storyClose.addEventListener("click", closeStory);
  storyModal.addEventListener("click", event => {
    if (event.target === storyModal) closeStory();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !storyModal.hidden) closeStory();
  });
}
