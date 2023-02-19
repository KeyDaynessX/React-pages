import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import "./../Pages/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              type="email"
              name="email"
              placeholder="Your email"
            ></input>
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='sign-up'>How it works</Link>
            <Link to='react-website'>Testimonials</Link>
            <Link to='react-website'>Careers</Link>
            <Link to='react-website'>Investors</Link>
            <Link to='react-website'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='react-website'>Contact</Link>
            <Link to='react-website'>Support</Link>
            <Link to='react-website'>Destinations</Link>
            <Link to='react-website'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='react-website'>Submit Video</Link>
            <Link to='react-website'>Ambassadors</Link>
            <Link to='react-website'>Agency</Link>
            <Link to='react-website'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='react-website'>Instagram</Link>
            <Link to='react-website'>Facebook</Link>
            <Link to='react-website'>Youtube</Link>
            <Link to='react-website'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='react-website' className='social-logo'>
              Zakhar Rud
              <i class="fa-solid fa-fire" />
            </Link>
          </div>
          <small class='website-rights'>Zakhar Rud © 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='react-website'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='react-website'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='react-website'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='react-website'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='react-website'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
