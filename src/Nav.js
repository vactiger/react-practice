import NavItem from './NavItem';

function Nav() {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="mr-auto"></div>
      <ul className="navbar-nav">
        <NavItem />
      </ul>
    </div>
  );
}

export default Nav;