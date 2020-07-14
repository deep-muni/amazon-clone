import React from 'react'
import NavBar from './NavBar'
import Product from './Product'
import banner from '../asset/banner.jpg';
import './Home.css';
import dummy from '../asset/dummy.jpg';

function Home(props) {
    return (
        <div className="home">
            <NavBar/>
            <div className="home__body">
                <img alt="" src={banner} className="home__banner"/>
                <div className="home__row">
                    <Product 
                        id = {"1"}
                        title = {"Dell Inspiron i3583 15.6 HD Touch-Screen Laptop - Intel i3-8145U - 8GB DDR4-128GB SSD - Windows 10"}
                        price = {"900.5"}
                        rating = {5}
                        image = {dummy}
                    />
                    <Product 
                        id = {"1"}
                        title = {"Dell Inspiron i3583 15.6 HD Touch-Screen Laptop - Intel i3-8145U - 8GB DDR4-128GB SSD - Windows 10"}
                        price = {"900.5"}
                        rating = {5}
                        image = {dummy}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id = {"1"}
                        title = {"Dell Inspiron i3583 15.6 HD Touch-Screen Laptop - Intel i3-8145U - 8GB DDR4-128GB SSD - Windows 10"}
                        price = {"900.5"}
                        rating = {5}
                        image = {dummy}
                    />
                    <Product 
                        id = {"1"}
                        title = {"Dell Inspiron i3583 15.6 HD Touch-Screen Laptop - Intel i3-8145U - 8GB DDR4-128GB SSD - Windows 10"}
                        price = {"900.5"}
                        rating = {5}
                        image = {dummy}
                    />
                    <Product 
                        id = {"1"}
                        title = {"Dell Inspiron i3583 15.6 HD Touch-Screen Laptop - Intel i3-8145U - 8GB DDR4-128GB SSD - Windows 10"}
                        price = {"900.5"}
                        rating = {5}
                        image = {dummy}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id = {"1"}
                        title = {"Dell Inspiron i3583 15.6 HD Touch-Screen Laptop - Intel i3-8145U - 8GB DDR4-128GB SSD - Windows 10"}
                        price = {"900.5"}
                        rating = {5}
                        image = {dummy}
                    />
                    <Product 
                        id = {"1"}
                        title = {"Dell Inspiron i3583 15.6 HD Touch-Screen Laptop - Intel i3-8145U - 8GB DDR4-128GB SSD - Windows 10"}
                        price = {"900.5"}
                        rating = {5}
                        image = {dummy}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id = {"1"}
                        title = {"Dell Inspiron i3583 15.6 HD Touch-Screen Laptop - Intel i3-8145U - 8GB DDR4-128GB SSD - Windows 10"}
                        price = {"900.5"}
                        rating = {5}
                        image = {dummy}
                    />
                    <Product 
                        id = {"1"}
                        title = {"Dell Inspiron i3583 15.6 HD Touch-Screen Laptop - Intel i3-8145U - 8GB DDR4-128GB SSD - Windows 10"}
                        price = {"900.5"}
                        rating = {5}
                        image = {dummy}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

