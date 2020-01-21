import React, { Component } from 'react'
import { Button, Icon, Modal, Table, Image, Header } from 'semantic-ui-react'

export default class Cart extends Component {
    state = { 
        open: false
     }
  
    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    
  
    render() {
      const { open } = this.state

      return (
        <Modal
          open={open}
          onOpen={this.open}
          onClose={this.close}
          size='small'
          trigger={
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="Add to Cart"
              onClick={() => this.props.addToCart(this.props.gear) }>

            </Button>
          }
        >
    <Modal.Header>Your Cart</Modal.Header>
    <center>
    <Table basic='very' celled collapsing>
        <Table.Body>
        {this.props.renderCart()}
        <Table.Row>
        <Table.Cell>
          <Header as='h4'>
            <Header.Content>
                Total
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>${this.props.total}</Table.Cell>
      </Table.Row>
        </Table.Body>
    </Table>
    </center>
          <Modal.Actions>
            <Button icon='dollar sign' content='Checkout' onClick={this.close} />
            <Button icon='shop' content='Keep Shopping' onClick={this.close} />
          </Modal.Actions>
    </Modal>
      )
    }
  }
//   <Modal.Content>
//             <p>{this.props.gear.name} ${this.props.gear.price}</p>
//           </Modal.Content>