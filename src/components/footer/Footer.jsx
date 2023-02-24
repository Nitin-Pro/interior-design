import './footer.css';

const Footer = () => {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>
          Interior Desiginer
          <span>
            <img
              style={{ height: '20vh' }}
              src="../../assets/Images/logp.png"
              alt=""
            />
          </span>
        </h3>

        <p class="footer-links">
          <a href="#" class="link-1">
            Home
          </a>

          <a href="#">Seller</a>

          <a href="#">Pricing</a>

          <a href="#">About</a>

          <a href="#">pages</a>

          <a href="#">Contact</a>
        </p>

        <p class="footer-company-name">Sell Cart Pvt Ltd © 2015</p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>
            <span>444 S. Cedros Ave</span> Solana Beach, California
          </p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
      </div>

      <div class="footer-right">
        <p style={{ color: 'white' }} class="footer-company-about">
          <span>About the company</span>
          The InteriorKarwalo is an Interior Design Company in Bangalore and
          takes on limited Design & Turnkey Interior assignments across India.
          The Studio is a venture of Bangalore’s leading Interior Designer
          Nandita Manwani
        </p>

        <div class="footer-icons">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
