const app = document.querySelector("#app");

app.innerHTML = `
  <main class="home" aria-label="Nara Yoon portfolio home">
    <div class="home__stage">
      <img
        class="home__image"
        src="./Images/main/main.png"
        alt="Welcome to Nara's table. A green plate and bright green card on a red background."
      />
      <img
        class="home__hand"
        src="./Images/main/hand.png"
        alt=""
        aria-hidden="true"
      />
      <nav class="home__menu" aria-label="Nara table menu">
        <a class="home__menu-link home__menu-link--artist" href="./artist.html">Artist</a>
        <a class="home__menu-link home__menu-link--designer" href="./designer.html">Designer</a>
        <a class="home__menu-link home__menu-link--content-editor" href="./content-editor.html">Content Editor</a>
        <a class="home__menu-link home__menu-link--project-manager" href="./project-manager.html">Project Manager</a>
        <a class="home__menu-link home__menu-link--community-builder" href="./community-builder.html">Community Builder</a>
      </nav>
    </div>
  </main>
`;

const home = document.querySelector(".home");
const stage = document.querySelector(".home__stage");
const hand = document.querySelector(".home__hand");

const handTip = {
  x: 479 / 1428,
  y: 700 / 1287,
};

const moveHand = (event) => {
  const stageRect = stage.getBoundingClientRect();
  const handRect = hand.getBoundingClientRect();
  const pointerX = event.clientX - stageRect.left;
  const pointerY = event.clientY - stageRect.top;
  const handX = pointerX - handRect.width * handTip.x;
  const handY = pointerY - handRect.height * handTip.y;

  home.style.setProperty("--hand-x", `${handX}px`);
  home.style.setProperty("--hand-y", `${handY}px`);
};

home.addEventListener("pointermove", moveHand);
