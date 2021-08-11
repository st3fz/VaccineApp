import "./TopNavbar.scss";
import { Link } from 'react-router-dom';

function TopNavbar(props) {

    return(
        <>
            <nav className={`navbar py-4 pl-5 pr-5 ${props.sidebar ? 'add-left-margin' : ''}`}>
                <a className="navbar-brand" onClick={props.toggleSidebar}>Vaccine App</a>
                <Link to="/auth">
                    <a className="login">Login</a>
                </Link>
            </nav>
        </>
    )
}

export default TopNavbar;