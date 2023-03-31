import Nav from './Nav';
import Hamburger from './Hamburger';
import Logo from './Logo';

function Header() {

  return (
    <header className="header_area">
      <div className="main-menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Logo />
          <Hamburger />
          <Nav />
        </nav>
      </div>
    </header>
  );
}

export default Header;