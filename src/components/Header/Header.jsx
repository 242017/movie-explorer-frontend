import Navigation from '../Navigation/Navigation.jsx';

function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="/" aria-label="Movie Explorer inicio">
        Movie Explorer
      </a>
      <Navigation />
    </header>
  );
}

export default Header;
