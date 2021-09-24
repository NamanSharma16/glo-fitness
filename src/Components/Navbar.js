import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <>
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" id="navbar-brand">glo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active nav-item" aria-current="page" href="/" >Home</a>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle nav-item" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Classes
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Yoga</a></li>
                                    <li><a className="dropdown-item" href="/">Meditation</a></li>
                                    <li><a className="dropdown-item" href="/">Pilates</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active nav-item" href="/">Orders</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-primary" type="submit" id="login">Log In</button>
                            <button className="btn btn-outline-success mx-3" type="submit" id="cart">Cart</button>
                        </form>
                    </div>
                </div>
            </nav>
            
        </>
    )
}
export default Navbar;
