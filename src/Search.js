import React, { Component } from 'react'
import searchIcon from './search-icon.png'

export default class Search extends Component {
    render() {
        return (
            <div>
                <button style= {{
                                'backgroundImage': 'url('+ searchIcon +')'
                            }} className="menu__search-button">
                </button>
            <form className="menu__search-form hide" method="POST">
                <input className="menu__search-input" placeholder="Type and hit enter"/>
            </form>
            </div>
    
        )
    }
}
