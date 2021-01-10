class Offer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <section class="offer">
          <div class="offer__inner">
            <img class="offer__paw" src="layers/svg/shape-paw.svg" alt="paw">
            <h2>Spend &#163;40 for Free Delivery!*</h2>
            <p class="mt30 grey">*Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
          </div>
        </section>
    `;
  }
}

customElements.define('offer-component', Offer);