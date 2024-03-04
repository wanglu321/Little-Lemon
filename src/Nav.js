import lemonlogo from './assets/lemonlogo.jpg';
import './Nav.css';

function Nav(){
    return(
        <div className="Navbar">
            <img
            src={lemonlogo}
            alt="little lemon logo"
            />
    <ul class="nav">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Homepage</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Menu</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Contact Us</a>
    </li>
    </ul>
    </div>
    )

}
export default Nav;