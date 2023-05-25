import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import './Header.css';

function Header() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("user")) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        setLogin(false);
        AuthServices.logout();
        console.log("La sesión se ha cerrado.");
        navigate("/");
    };

    const renderLoggedOutButtons = () => {
        <>
            <button onClick={() => navigate("/signup")}>Crear Cuenta</button>
            <button onClick={() => navigate("/login")}>Iniciar Sesión</button>
        </>
    }

    const renderLoggedInButtons = () => {
        <>
            <button onClick={() => navigate("/profile")}>
                <AccountBoxIcon />
            </button>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </>
    }

    const renderLoggedInLinks = () => {
        <>
            <Link className="header_link" to="/directory">Directorio</Link>
            <Link className="header_link" to="/mindbot">MindBot</Link>
            <Link className="header_link" to="/tools">Herramientas</Link>
            <Link className="header_link" to="/bloc">MindBlog</Link>
            <Link className="header_link" to="/about">Acerca de</Link>
            <Link className="header_link" to="/contact">Contacto</Link>
        </>
    }

    const renderLoggedOutLinks = () => {
        <>
            <Link className="header_link" to="/directory">Directorio</Link>
            <Link className="header_link" to="/tools">Herramientas</Link>
            <Link className="header_link" to="/blog">MindBlog</Link>
            <Link className="header_link" to="/about">Acerca de</Link>
            <Link className="header_link" to="/contact">Contacto</Link>
        </>
    }


    return (
        <header className="me_header">
            <div className="header">
                <nav className="header_container">
                    <div className="header_logo">
                        MindEase
                    </div>
                    <div className="header_links">
                        {!isLoggedIn ? renderLoggedOutLinks() : renderLoggedInLinks()}
                    </div>
                    <div className="header_buttons">
                        {!isLoggedIn ? renderLoggedOutButtons() : renderLoggedInButtons()}
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header