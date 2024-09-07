import "./header.css";
import { Link } from "react-router-dom";

function Header() {
    return(
        <div className="header"> 
        <ul>
            <a href="/">
            <li>Home</li>
            </a>
            <a href="/about">
            <li>About</li>
            </a>
            <Link to="/contact">
            <li>Contact</li>
            </Link>
        </ul>
        </div>
    )
}

export default Header;