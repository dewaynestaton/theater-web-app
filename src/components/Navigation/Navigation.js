import React from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';

function Navigation() {
    const navBackground = {
        backgroundColor: 'black'
    };
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark container-fluid" style={ navBackground }>
            <a className="navbar-brand" href="/">Encore Cinemas</a>
            <Button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse"
                data-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </Button>

            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-3">
                    <li className="nav-item">
                        <a className="nav-link" href="/movie">Movies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/concession">Food & Drinks</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/store">Stores</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/gift">Gift Cards</a>
                    </li>
                    <li className="nav-item mr-5">
                        <a className="nav-link" href="/reward">Encore Rewards</a>
                    </li>

                    <div>
                        <Button className="btn btn-danger">Become a Member</Button>{' '}
                        <Button className="btn btn-secondary">Sign In</Button>{' '}
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;