import React from 'react';
import './Navbar.css';
import '../ButtonLink/ButtonLink';
import searchIconLight from '../../assets/search-w.png';
import searchIconDark from '../../assets/search-b.png';
import toggleLight from '../../assets/night.png';
import toggleDark from '../../assets/day.png';
import ButtonLink from '../ButtonLink/ButtonLink';

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Navbar = ({ theme, setTheme }: NavbarProps) => {
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div className='navbar'>
      <ButtonLink to="/">
        <h1><span className="h1-text">&lt;</span> TeachMeSkills <span className="h1-text">/&gt;</span></h1>
      </ButtonLink>

      <ul>
        <li>
          <ButtonLink to="/courses">Курсы</ButtonLink>
        </li>
        <li>
          <ButtonLink to="/about">О нас</ButtonLink>
        </li>
      </ul>

      <div className="search-box" >
        <input type="text" placeholder="Поиск..." />
        <img src={theme === 'light' ? searchIconLight : searchIconDark} alt="search icon" />
      </div>
      
      <button onClick={() => toggleTheme()} className="toggle-button">
        <img src={theme === 'light' ? toggleLight : toggleDark} alt="toggle icon" className='toggle-icon'/>
      </button>
    </div>
  );
};

export default Navbar;
