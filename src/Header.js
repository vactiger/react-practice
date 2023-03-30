import logo from './img/logo.png';

function Header() {
  const headerNav = {
    home: 'Home',
    about: 'About',
    services: 'Services',
    portfolio: 'Portfolio',
    pages: 'Pages',
    blog: 'Blog',
    contact: 'Contact',
  };
  return (
    <header className="header_area">
      <div className="main-menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#"><img src={logo} alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mr-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">{headerNav.home} <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">{headerNav.about}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">{headerNav.services}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">{headerNav.portfolio}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">{headerNav.pages}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">{headerNav.blog}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">{headerNav.contact}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;