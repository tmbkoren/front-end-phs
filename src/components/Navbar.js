import logo_default from '../assets/img/logo_default.png';
import { NavLink } from 'react-router-dom';
import LocalizedStrings from 'react-localization';
import navbar_loc from '../assets/localization/navbar_loc';
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const strings = new LocalizedStrings(navbar_loc);
  const [navOpen, setNavOpen] = useState(false);
  const username = useSelector((state) => state.user.username);
  const lang = useSelector((state) => state.lang.lang);
  strings.setLanguage(lang);

  const toggleNav = () => {
    setNavOpen(!navOpen);
    console.log(navOpen);
  };

  return (
    <nav className={`nav  ${navOpen ? 'nav__fullscreen' : ''}`}>
      <div className='nav__logo-container'>
        <NavLink to='/'>
          <img src={logo_default} alt='logo' className='nav__logo-img' />
        </NavLink>
      </div>
      <div className={`nav__links-container  ${navOpen ? 'nav__open' : ''}`}>
        <a
          className={`nav__link nav__toggle ${
            navOpen ? 'nav__toggle--rotate' : ''
          }`}
          onClick={toggleNav}
        >
          <FaBars />
        </a>
        <NavLink
          onClick={() => toggleNav()}
          to='/soundboard'
          className={`nav__link ${navOpen ? 'nav__link--open' : ''}`}
        >
          <h2 className='heading-secondary'>{strings.soundboard}</h2>
        </NavLink>
        <NavLink
          onClick={() => toggleNav()}
          to='/band'
          className={`nav__link ${navOpen ? 'nav__link--open' : ''}`}
        >
          <h2 className='heading-secondary'>{strings.users}</h2>
        </NavLink>
        <NavLink
          onClick={() => toggleNav()}
          to='/news'
          className={`nav__link ${navOpen ? 'nav__link--open' : ''}`}
        >
          <h2 className='heading-secondary'>{strings.news}</h2>
        </NavLink>
        <NavLink
          onClick={() => toggleNav()}
          to='/info'
          className={`nav__link ${navOpen ? 'nav__link--open' : ''}`}
        >
          <h2 className='heading-secondary'>{strings.info}</h2>
        </NavLink>
        <NavLink
          onClick={() => toggleNav()}
          to='/links'
          className={`nav__link ${navOpen ? 'nav__link--open' : ''}`}
        >
          <h2 className='heading-secondary'>{strings.links}</h2>
        </NavLink>
        <NavLink
          onClick={() => toggleNav()}
          to={`${username ? '/account' : '/login'}`}
          className={`nav__link ${navOpen ? 'nav__link--open' : ''}`}
        >
          <h2 className='heading-secondary'>
            {username ? strings.account : strings.login}
          </h2>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
