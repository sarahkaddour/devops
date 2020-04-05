import React, { Component } from 'react';
import {Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import axios from 'axios';


export default class UpdatePlayerDialog extends Component {
    constructor(props){
        super(props)
        const { selected } = this.props;
        this.state = {
          username: selected.username,
          firstname: selected.firstname,
          lastname: selected.lastname,
          team: selected.team
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }

      async postRequest(username, firstname, lastname, team) {
        const config = {
          method: 'put',
          url: `http://localhost:8000/user/${username}`,
          headers: { 'Content-Type': 'application/json' },
          data: {
            username: username,
            firstname: firstname,
            lastname: lastname,
            team: team
          },
      }

        return await axios(config)
        .then((response) => {
          if(response.status === 200){
            console.log('card updated');
          } 
        })
        .catch((err) => {
          console.log('error card');
          this.setState({ error: err.message });
        });
      }

      async onSubmit(e){
        e.preventDefault();
        const { username, firstname, lastname, team } = this.state;
        this.postRequest(username, firstname, lastname, team);
        this.props.toggle();
      }
    
      onChange(e){
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    render(){
      const { username, firstname, lastname, team} = this.state;
      const disabled = !username || !firstname || !lastname || !team;

        return(
            <Modal isOpen toggle={this.props.toggle} backdrop={true}>
              <ModalHeader toggle={this.props.toggle}> Update a bank card </ModalHeader>
            
              <ModalBody>
                <Form
                  className="sign-up-form"
                  onSubmit={this.onSubmit}
                >
                  <FormGroup>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <FormControl
                    name="username"
                    id="username"
                    placeholder="johnd75"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="firstname">Firstname</FormLabel>      
                  <FormControl
                    name="firstname"
                    id="firstname"
                    placeholder="John"
                    value={this.state.firstname}
                    onChange={this.onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="lastname">Lastname</FormLabel>      
                  <FormControl
                    name="lastname"
                    id="lastname"
                    placeholder="Doe"
                    value={this.state.lastname}
                    onChange={this.onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="team">Team</FormLabel>
                      <FormControl
                      as="select"
                      id="team"
                      name="team"
                      value={this.state.team}
                      onChange={this.onChange}
                      >
                          <option value="Blue">Blue</option>
                          <option value="Red">Red</option>
                          <option value="Green">Green</option>
                          <option value="Yellow">Yellox</option>
                      </FormControl>
                </FormGroup>
             </Form>
              </ModalBody>
            
              <ModalFooter style={{textAlign: 'center'}}>
                <Button variant="danger" onClick={this.props.toggle}>Cancel</Button>
                <Button variant="success" disabled={disabled} onClick={this.onSubmit}>Save</Button>
              </ModalFooter>
            </Modal>
        );
    }
  };
    
