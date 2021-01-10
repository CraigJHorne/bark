class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          <header>
            <a class="logo" href="index.html">
              <img src="layers/svg/logo.svg" alt="logo">
            </a>
            <section class="header__navigation"
              <nav class="header-nav">
                <ul class="header-nav__list mi">
                  <li class="header-nav__link header-nav__link--active"><h4><a href="active.html">Active</a></h4></li>
                  <li class="header-nav__link"><h4><a href="linkone.html">Link One</a></h4></li>
                  <li class="header-nav__link"><h4><a href="linktwo.html">Link Two</a></h4></li>
                  <li class="header-nav__link"><h4><a href="linkthree.html">Link Three</a></h4></li>
                </ul>
                <div class="header-menu di" >
                  <img id="burgerBtn" class="header-menu__icon" src="layers/svg/menu.svg" alt="menu">
                </div>
              </nav>
            </section>
          </header>
    `;
  }
}

customElements.define('header-component', Header);
