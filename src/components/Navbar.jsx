import { Link } from 'react-router-dom';
import styles from './styles/Navbar.module.css'; // Import the new CSS file as a module

function Navbar() {
  return (
    <nav className={`navbar fixed-top navbar-expand-lg ${styles.navbar}`}> {/* Add navbar-expand-lg class */}
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Shop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* Add ms-auto class to align links to the right */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

