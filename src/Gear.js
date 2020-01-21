import React from 'react';
import { Card, Image, Button, Header, Modal } from 'semantic-ui-react'
// import styled from 'styled-components';
import Cart from '../src/Cart'



export default class Gear extends React.Component {

state = { 
    open: false
 }

show = (dimmer) => () => this.setState({ dimmer, open: true })
close = () => this.setState({ open: false })
  
    
    
render() {

const { open, dimmer } = this.state

return (
    <div>
        <Card className="gear" onClick={this.show('blurring')}>
        <Image src={this.props.gear.img_url} wrapped ui={false} />
        </Card>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>{this.props.gear.name}</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size='medium'
              src={this.props.gear.img_url}
            />
            <Modal.Description>
              <Header>${this.props.gear.price}</Header>
              <p>
              Size: {this.props.gear.size}    
              </p>
              <p>
              {this.props.gear.description}  
              </p>

            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Close
            </Button>
            {/* <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="Add to Cart"
              onClick={console.log(this.props.gear)}>
            </Button> */}
            <Cart gear={this.props.gear}/>
          </Modal.Actions>
        </Modal>

     
    
    
    
    
    
    
    
    </div>
    );
  }
}
  
  