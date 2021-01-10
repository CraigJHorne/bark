class Carousel extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          <section class="carousel">
            <div class="carousel__title mb30">
              <img class="offer__paw" src="layers/svg/shape-paw.svg" alt="paw">
              <h3>Our Best Sellers</h3>
            </div>
            <div class="carousel__container">
              <div class="carousel__arrow">
                <img class="carousel__chevron" src="layers/svg/chevron-prev.svg" alt="arrow">
              </div>
              <div class="carousel__products mi">
                <div class="product">
                  <div class="product__square"></div>
                  <img class="product__image" src="layers/png/product1@2x.png" alt="photo">
                  <h4 class="product__blurb"> Natures Menu Dog Food Can Chicken</h4>
                  <div class="product__price"> &#163;22.81</div>
                  <button id="signupBtn" class="btn mt30 mb30">View More</button>
                </div>
                <div class="product">
                  <div class="product__square"></div>
                  <img class="product__image" src="layers/png/product2@2x.png" alt="photo">
                  <h4 class="product__blurb"> Natures Menu Senior Dog Food Pouch Lamb with Chicken</h4>
                  <div class="product__price"> &#163;11.92</div>
                  <button id="signupBtn" class="btn mt30 mb30">View More</button>
                </div>
                <div class="product">
                  <div class="product__square"></div>
                  <img class="product__image" src="layers/png/product3@2x.png" alt="photo">
                  <h4 class="product__blurb"> Real Meaty Dog Treats with Beef</h4>
                  <div class="product__price"> £2.09</div>
                  <button id="signupBtn" class="btn mt30 mb30">View More</button>
                </div>
              </div>
              <div class="carousel__products di">
                <div class="product">
                  <div class="product__square"></div>
                  <img class="product__image" src="layers/png/product1@2x.png" alt="photo">
                  <h4 class="product__blurb"> Natures Menu Dog Food Can Chicken</h4>
                  <div class="product__price"> &#163;22.81</div>
                  <button id="signupBtn" class="btn mt30 mb30">View More</button>
                </div>
              </div>
              <div class="carousel__arrow">
                <img class="carousel__chevron" src="layers/svg/chevron-next.svg" alt="arrow">
              </div>
            </div>
          </section>
    `;
  }
}

customElements.define('carousel-component', Carousel);