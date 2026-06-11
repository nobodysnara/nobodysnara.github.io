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
      <p class="home__soon">
        <span>(Still setting the table)</span>
        <span>(More coming soon)</span>
      </p>
      <nav class="home__menu" aria-label="Nara table menu">
        <a class="home__menu-link home__menu-link--artist" href="./artist.html">Artist</a>
        <a class="home__menu-link home__menu-link--designer" href="./designer.html">Designer</a>
        <a class="home__menu-link home__menu-link--content-editor" href="./content-editor.html">Content Editor</a>
        <a class="home__menu-link home__menu-link--project-manager" href="./project-manager.html">Project Manager</a>
        <a class="home__menu-link home__menu-link--community-builder" href="./community-builder.html">Community Builder</a>
      </nav>
    </div>
    <section class="home__mobile-card" aria-label="Nara table menu">
      <img class="home__mobile-logo" src="./Images/NARAYOON.png" alt="Nara Yoon" />
      <p class="home__mobile-intro">
        Hi, I'm Nara.<br />
        I turn ideas into stories,<br />
        stories into experiences,<br />
        and experiences into communities.
      </p>
      <nav class="home__mobile-menu" aria-label="Portfolio navigation">
        <a href="./artist.html">Artist</a>
        <a href="./designer.html">Designer</a>
        <a href="./content-editor.html">Content Editor</a>
        <a href="./project-manager.html">Project Manager</a>
        <a href="./community-builder.html">Community Builder</a>
      </nav>
      <div class="home__mobile-footer">
        <a
          class="home__mobile-instagram"
          href="https://www.instagram.com/nobodysnara/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Nobodys Nara Instagram"
        >
          <img src="./Images/main/gimbap.png" alt="" aria-hidden="true" />
        </a>
      </div>
    </section>
  </main>
`;

const home = document.querySelector(".home");
const stage = document.querySelector(".home__stage");
const instagramLink = document.querySelector(".home__instagram");

const resetHandPosition = () => {
  const stageRect = stage.getBoundingClientRect();

  stage.style.setProperty("--pointer-y", `${stageRect.height * 0.47}px`);
};

const moveHand = (event) => {
  const stageRect = stage.getBoundingClientRect();
  const pointerY = event.clientY - stageRect.top;

  stage.style.setProperty("--pointer-y", `${pointerY}px`);
};

resetHandPosition();
home.addEventListener("pointermove", moveHand);
window.addEventListener("resize", resetHandPosition);

document.addEventListener(
  "click",
  (event) => {
    const rect = instagramLink.getBoundingClientRect();
    const isInsideInstagram =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    if (!isInsideInstagram) {
      return;
    }

    event.preventDefault();
    window.location.href = instagramLink.href;
  },
  true
);
