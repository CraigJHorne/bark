class Feature extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          <section class="feature">
              <div class="feature__inner">
                <div class="feature-dog">
                <img class="feature-dog__blob" src="layers/svg/shape-blob.svg" alt="shape">
                <img class="feature-dog__circle" src="layers/svg/shape-circle.svg" alt="shape">
                <img class="feature-dog__image" src="layers/png/dog@2x.png" alt="dog">
              </div>
            </div>
            <div class="feature__inner textc">
              <div class="feature__info">
                <h2>Ornare Vulputate Elit</h2>
                <p class="mt30 mb30 grey">Nullam quis risus eget urna mollis ornare vel eu leo. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <a href="feature.html">
                  <button class="btn">Learn More</button>
                </a>
              </div>
            </div>
          </section>
    `;
  }
}

customElements.define('feature-component', Feature);