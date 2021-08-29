import './Navbar.scss';
import logo_img from '../../assets/image/logo.png';
import { Link } from 'react-router-dom';

type Props = {
    isSidebarOpen: boolean;
    toggleSidebar: ()=>void;
}

const Navbar : React.FC<Props> = (props) => {
    return(
        <>
            <nav className={`navbar bg-primary ${props.isSidebarOpen ? 'add-left-margin' : ''}`}>
                <img src={logo_img} className="navbar-brand" onClick={props.toggleSidebar}/>
                <Link to="/auth">
                    <a className="login-button">Login</a>
                </Link>
            </nav>
        </>
    )
}

export default Navbar;