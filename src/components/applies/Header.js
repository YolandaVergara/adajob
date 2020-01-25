import React from 'react';


const Header = () => {
    return (
        <header className="header">
            <p className="user-name">Hola <span>Yolanda</span></p>
            <nav className="nav-principal">
                <a href="#!">Cerrar Sesión</a>
            </nav>
        </header>

    );
}

export default Header;