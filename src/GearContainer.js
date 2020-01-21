import React from 'react';
import Gear from '../src/Gear';
import { Button, Icon, Modal, Table, Image, Header } from 'semantic-ui-react'

export default class GearContainer extends React.Component{
    
state = {
    allGear: [],
    cart: [],
    total: 0
}

componentDidMount() {
    fetch('http://localhost:3000/gears')
    .then(response => response.json())
    .then(data => this.setState({ allGear: data }));
}
 
renderAllGear = () => { return this.state.allGear.map(gear => {
    return  <div class="four wide column"> <Gear  total={this.state.total} gear={gear} addToCart={this.addToCart} renderCart={this.renderCart}/>  </div>
        }) 
    }  

addToCart = (gear) => {
    let cartCopy = [...this.state.cart, gear]
    this.setState({cart: cartCopy})
    this.setState({total: this.state.total += gear.price}) 
    
}

renderCart = () => { return this.state.cart.map(gear =>{

    return   <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={gear.img_url} />
            <Header.Content>
                {gear.name}
                <Header.Subheader>Sz. {gear.size}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>${gear.price}</Table.Cell>
      </Table.Row>
})
}
    
render() {
    console.log(this.state.cart)

    return (
        <div class="ui container">
            <div class="ui equal width grid">
                {this.renderAllGear()}
            </div>
        </div>
        );
     }
}


