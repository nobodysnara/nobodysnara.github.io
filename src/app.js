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
      <a
        class="home__instagram"
        href="https://www.instagram.com/nobodysnara/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Nobodys Nara Instagram"
      >
        <img
          class="home__gimbap"
          src="./Images/main/gimbap.png"
          alt="Instagram"
        />
      </a>
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

const moveHand = (event) => {
  const stageRect = stage.getBoundingClientRect();
  const pointerY = event.clientY - stageRect.top;

  stage.style.setProperty("--pointer-y", `${pointerY}px`);
};

home.addEventListener("pointermove", moveHand);
