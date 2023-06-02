import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  // Implementación del componente de encabezado
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to={'/'}>Reforzamiento</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavLink to={'/'} className={ ({ isActive }) => "nav-link ${ isActive ? 'active' :'' }" }>
                    Home
                </NavLink>
                <NavLink to={'/typescript'} className={ ({ isActive }) => "nav-link ${ isActive ? 'active' :'' }" }>
                    TypeScript
                </NavLink>
                <NavLink to={'/hooks'} className={ ({ isActive }) => "nav-link ${ isActive ? 'active' :'' }" }>
                    Hooks
                </NavLink>
            </ul>
            </div>
        </div>
    
    </nav>
  );
};

export default Header;