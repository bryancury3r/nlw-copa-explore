function createCard() {
  return `
        <div class="card">
          <h2>24/11 <span>quinta</span></h2>
          <ul>
            <li>
              <img src="./assets/icon-brazil.svg" alt="Bandeira do Brazil">
              <strong>16:00</strong>
              <img src="./assets/icon-serbia.svg" alt="Bandeira da Serbia">
            </li>

            <li>
              <img src="./assets/icon-brazil.svg" alt="Bandeira do Brazil">
              <strong>08:00</strong>
              <img src="./assets/icon-korea.svg" alt="Bandeira da Serbia">
            </li>
          </ul>
        </div>
  `
}

document.querySelector("#app").innerHTML = `
      <header>
          <img src="./assets/logo.svg" alt="logo">
      </header>
      <main id="cards">
        ${createCard()}
        ${createCard()}

      </main>
`