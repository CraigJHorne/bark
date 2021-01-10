class Hero extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          <section class="hero">
            <img class="hero__image" src="layers/png/dog-hero@2x.png" alt="dog">
            <div class="hero__info">
            <h1>Vestibulum Fusce Aenean Dolor</h1>
            <button id="signupBtn" class="btn mt30 mb30">Sign Up</button>
          </div>
    `;
  }
}

customElements.define('hero-component', Hero);