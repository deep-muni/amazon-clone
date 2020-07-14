import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../asset/logo.png';

function NavBar(props) {
    return (
        <nav className="navbar">
            <Link to={'/'}>
                <img src={logo} alt="" className="navbar__logo"/>
            </Link>
            <div className="navbar__search">
                <input type="text" className="navbar__searchBar"/>
                <SearchIcon className="navbar__searchIcon" 
                    style={{fontSize: "32px", width: "40px"}}/>
            </div>
            <div className="navbar__nav">
                <Link className="navbar__link" to={'/login'}>
                    <div className="navbar__linkContainer">
                        <span className="navbar__line1">Hello Deep</span>
                        <span className="navbar__line2">Sign In</span>
                    </div> 
                </Link>
                <Link className="navbar__link"> 
                    <div className="navbar__linkContainer">
                        <span className="navbar__line1">Returns</span>
                        <span className="navbar__line2">& Orders</span>
                    </div> 
                </Link>
                <Link className="navbar__link"> 
                    <div className="navbar__linkContainer">
                        <span className="navbar__line1">Your</span>
                        <span className="navbar__line2">Prime</span>
                    </div> 
                </Link>
                <Link className="navbar__link" to={'/checkout'}>
                    <div className="navbar__shoppingBasker">
                        <ShoppingCartIcon className="navbar__basket"
                            style={{fontSize: "32px", width: "50px"}}/>
                        <span className="navbar__count">0</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar