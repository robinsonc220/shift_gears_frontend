import React from 'react';
import Gear from '../src/Gear';

export default class GearContainer extends React.Component{
    
state = {
    allGear: []
}

componentDidMount() {
    fetch('http://localhost:3000/gears')
    .then(response => response.json())
    .then(data => this.setState({ allGear: data }));
}
 
renderAllGear = () => { return this.state.allGear.map(gear => {
    return  <div class="three wide column"> <Gear  gear={gear}/> </div>
        })
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


