import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Научим программировать и поможем стать ITшником</h1>
      <p>TeachMeSkills - это школа программирования, где мы научим тебя востребованным сегодня знаниям. Все наши программы составлены Senior и Lead разработчиками ведущих IT компаний специально для новичков в IT.</p>
      <h2>Самые востребованные направления в IT</h2>
      <p>
        <Link to="/courses">Смотреть все курсы</Link>
      </p>
    </div>
  );
}

export default Home;
