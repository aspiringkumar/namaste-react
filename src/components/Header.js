import { LOGO_CDN_URL } from "../utils/constant";
//this is how we can import a named export from another file.

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_CDN_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;