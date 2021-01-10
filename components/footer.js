class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          <footer class="footer">
            <div class="footer__logo">
                <img class="logo invert" src="layers/svg/logo.svg" alt="logo">
            </div>
            <div class="footer__navigation">
              <div class="footer-nav">
                <ul class="footer-nav__list">
                  <li class="footer-nav__link"><h5><a href="consectetetur.html">Consectetetur</a></h5></li>
                  <li class="footer-nav__link"><h5><a href="ullamcorper.html">Ullamcorper</a></h5></li>
                  <li class="footer-nav__link"><h5><a href="nullam.html">Nullam</a></h5></li>
                  <li class="footer-nav__link"><h5><a href="inceptos.html">Inceptos</a></h5></li>
                  <li class="footer-nav__link"><h5><a href="bibendum.html">Bibendum</a></h5></li>
                  <li class="footer-nav__link"><h5><a href="consectetetur.html">Consectetetur</a></h5></li>
                  <li class="footer-nav__link"><h5><a href="ullamcorper.html">Ullamcorper</a></h5></li>
                  <li class="footer-nav__link"><h5><a href="nullam.html">Nullam</a></h5></li>
                  <li class="footer-nav__link"><h5><a href="inceptos.html">Inceptos</a></h5></li>
                  <li class="footer-nav__link"><h5><a href="bibendum.html">Bibendum</a></h5></li>
                </ul>
              <div class="footer-nav__social">
                <a class="flex" href="signup.html"><h3 class="orange flex">click here to sign up</h3><img class="footer-social__arrow" src="layers/svg/arrow-forward.svg" alt="arrow"></a>
                <a href="http://www.facebook.com"><img class="footer-social__icon" src="layers/svg/social-fb.svg" alt="facebook"></a>
                <a href="http://www.instagram.com"><img class="footer-social__icon" src="layers/svg/social-insta.svg" alt="instagram"></a>
                <a href="http://www.twitter.com"><img class="footer-social__icon" src="layers/svg/social-tw.svg" alt="twitter"></a>
                <a href="http://www.yotube.com"><img class="footer-social__icon" src="layers/svg/social-yt.svg" alt="youtube"></a>
              </div>
            </div>
            <div class="footer-payment">
          <div>
            <img class="footer-payment__icon" src="layers/svg/payment-paypal.svg" alt="paypal">
            <img class="footer-payment__icon" src="layers/svg/payment-mastercard.svg" alt="mastercard">
            <img class="footer-payment__icon" src="layers/svg/payment-via.svg" alt="visa">
            <img class="footer-payment__icon" src="layers/svg/payment-amex.svg" alt="amex">
            <img class="footer-payment__icon" src="layers/svg/payment-maestro.svg" alt="maestro">
            <img class="footer-payment__icon" src="layers/svg/payment-klarna.svg" alt="klarna">
            <img class="footer-payment__icon" src="layers/svg/payment-apple.svg" alt="apple">
            <img class="footer-payment__icon" src="layers/svg/payment-google.svg" alt="google">
          </div>
        <h5 class="footer-payment__copyright grey">&#169;2019 bark Ltd. All Rights Reserved.</h5>
    </div>
        </footer>
    `;
  }
}

customElements.define('footer-component', Footer);