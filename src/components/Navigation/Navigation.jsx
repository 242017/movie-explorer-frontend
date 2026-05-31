import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation" aria-label="Principal">
      <NavLink className={({ isActive }) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`} to="/">
        Inicio
      </NavLink>
      <NavLink className={({ isActive }) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`} to="/movies">
        Peliculas
      </NavLink>
    </nav>
  );
}

export default Navigation;
