import React, { Component } from 'react'
import Search from './Search'


export default class Menu extends Component {
    render() {
        return (
            <div>
                
                    <nav className="menu">
                        <h1 className="menu__logo">Epic Co.</h1>

                        <div className="menu__right">
                            <ul className="menu__list">
                                <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Home</a></li>
                                <li className="menu__list-item"><a className="menu__link" href="#">About</a></li>
                                <li className="menu__list-item"><a className="menu__link" href="#">Login</a></li>
                                <li className="menu__list-item"><a className="menu__link" href="#">Contact</a></li>
                            </ul>
                        <Search/>  
                        </div>
                        </nav>
                
                
            </div>
        )
    }
}
