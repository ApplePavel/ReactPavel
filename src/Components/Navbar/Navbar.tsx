import React from 'react';
import './Navbar.css';
import searchIconLight from '../../assets/search-w.png';
import searchIconDark from '../../assets/search-b.png';
import toggleLight from '../../assets/night.png';
import toggleDark from '../../assets/day.png';

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Navbar = ({ theme, setTheme }: NavbarProps) => {

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <div className='navbar'>
<h1><span className="h1-text">&lt;</span> TeachMeSkills <span className="h1-text">/&gt;</span></h1>

      <ul>
        <li>Курсы</li>
        <li>Цены</li>
        <li>Наши преимущества</li>
        <li>Трудоустройство</li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Поиск..." />
        <img src={theme === 'light' ? searchIconLight : searchIconDark} alt="search icon" />
      </div>

      <img onClick={() => toggleTheme()} src={theme === 'light' ? toggleLight : toggleDark} alt="toggle icon" className='toggle-icon'/>
    </div>
  );
}

export default Navbar;
