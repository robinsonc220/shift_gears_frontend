import React from 'react';
import Gear from '../src/Gear';

export default class GearContainer extends React.Component{
    
state = {
    allGear: [],
    cart: []
}

componentDidMount() {
    fetch('http://localhost:3000/gears')
    .then(response => response.json())
    .then(data => this.setState({ allGear: data }));
}
 
renderAllGear = () => { return this.state.allGear.map(gear => {
    return  <div class="four wide column"> <Gear  gear={gear} addToCart={this.addToCart}/>  </div>
        })
       
    }  
addToCart = (gear) => {
    let cartCopy = [...this.state.cart.push(gear)]
    this.setState({
    cart: cartCopy
    }) 
    console.log(this.state.cart)
}
    
render() {

    return (
        <div class="ui container">
            <div class="ui equal width grid">
                {this.renderAllGear()}
            </div>
        </div>
        );
     }
}


