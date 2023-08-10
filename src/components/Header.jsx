// Logo
import Github from '../assets/icon-github.svg'
import Mentor from '../assets/icon-frontend-mentor.svg'
import Linkedln from '../assets/icon-linkedin.svg'
import Twitter from '../assets/icon-twitter.svg'

function Header() {
    return ( 
<header className="header container">
<nav className="navigation">
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

<div className="content">
    <h1 className='heading-xl'>Nice to meet you!
        I'm <span className='green-line'>Adam Keyes.</span>
    </h1>

    <p className='body-text'>
    Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.
    </p>

    <a href="#footer" className='contact'>Contact Me</a>


</div>

</header>
     );
}

export default Header;