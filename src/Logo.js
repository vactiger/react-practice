// import logo from './img/logo.png';
import logo from './img/my-logo.png';

function Logo() {
  return (
    <a className="navbar-brand" href="/"><img src={logo} alt="logo" /></a>
  );
}

export default Logo;