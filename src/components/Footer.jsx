// Logo

import Github from '../assets/icon-github.svg'
import Mentor from '../assets/icon-frontend-mentor.svg'
import Linkedln from '../assets/icon-linkedin.svg'
import Twitter from '../assets/icon-twitter.svg'


function Footer() {
  return (
    <footer id='footer' className="footer">

        <div className="footer container">

        <div className="footer-content">
        <h3 className="heading-xl">Contact</h3>
        <p className="body-text">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>

      <form className="form">
        <div className="form-control">
            <input type="text" placeholder="NAME" />
        </div>

        <div className="form-control">
            <input placeholder="EMAIL" type="text" />
        </div>

        <div className="form-control">
          <textarea placeholder="MESSAGE"></textarea>
        </div>

        <button type='submit' className='contact'>Send Message</button>
      </form>

 
        </div>
        <nav className="navigation container">
    <div className="logo">
        <h3 className="logo-text">
            adamkeyes
        </h3>

    </div>
        <ul className="links">
        <li><a href="#"><img src={Github} alt="" /></a></li>
        <li><a href="#"><img src={Mentor} alt="" /></a></li>
        <li><a href="#"><img src={Linkedln} alt="" /></a></li>
        <li><a href="#"><img src={Twitter} alt="" /></a></li>
        </ul>
</nav>
    </footer>


  );
}

export default Footer;


