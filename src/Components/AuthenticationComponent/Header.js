import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from "./Login";
import Registration from "./Registration";
import Logout from "./Logout";

const Header = props => {
    const onLogout = () =>{
        props.handleLogout();
    }

        return(
                <div className='text-uppercase'>
                    <nav className="navbar navbar-expand-lg navbar-collapse bg-light navbar-expand{-sm|-md|-lg|-xl} justify-content-between "  >
                        <nav className="navbar navbar-light">
                            <h2>HOSPITAL MANAGEMENT SYSTEM</h2>
                        </nav>
                        <ul className="nav" >
                            {props.isLoggedIn === false &&
                            <li className='nav-item'><Link to={'/'} className="nav-link"> Login </Link></li>
<<<<<<< Updated upstream
                            }
                            <li className='nav-item'><Link to={'/Dashboard'} className="nav-link"> Dashboard </Link></li>
                            <li className='nav-item'><Link to={'/Registration'} className="nav-link">Registration </Link></li>
                            {props.isLoggedIn === true &&
                               <li className='nav-item'><Link to={'/logout'} className="nav-link" onClick={onLogout}> Logout </Link></li>
                            }
                            
                        </ul>
=======
                            <li className='nav-item'><Link to={'/Registration'} className="nav-link">Registration </Link></li>
                        </ul> 
>>>>>>> Stashed changes
                    </nav>
                    </div>
        );
    }
  
  export default Header;
  