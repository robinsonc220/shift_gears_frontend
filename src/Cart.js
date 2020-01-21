import React, { Component } from 'react'
import { Button, Icon, Modal, Table, Image, Header } from 'semantic-ui-react'

export default class Cart extends Component {
    state = { 
        open: false,
        cart: []
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
              >
            </Button>
          }
        >
          <Modal.Header>Your Cart</Modal.Header>
          <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        {/* <Table.HeaderCell>Items</Table.HeaderCell>
        <Table.HeaderCell>Prices</Table.HeaderCell> */}
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={this.props.gear.img_url} />
            <Header.Content>
            {this.props.gear.name}
              <Header.Subheader>Sz. {this.props.gear.size}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>${this.props.gear.price}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
          <Modal.Actions>
            <Button icon='check' content='Checkout' onClick={this.close} />
          </Modal.Actions>
        </Modal>
      )
    }
  }
//   <Modal.Content>
//             <p>{this.props.gear.name} ${this.props.gear.price}</p>
//           </Modal.Content>