import "./header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/userContext";

function Header() {

    const data = useContext(userContext);
    console.log(data,"ye hai context");
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
            <Link to="/demo">
            <li>Demo</li>
            </Link>
            <li>{data.loggedInUser}</li>
        </ul>
        </div>
    )
}

export default Header;