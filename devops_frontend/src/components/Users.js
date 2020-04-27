import React, { PureComponent, Fragment} from 'react';
import axios from 'axios';
import { Button, Row, Col } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import "bootstrap/dist/css/bootstrap.min.css";
import CreateUserDialog from './CreateUserDialog';

export default class Users extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
      loggedIn: true,
      users: [],
      selected: null,
      shouldOpenCreateUserModal: false,
    }
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.openCreateUserDialog = this.openCreateUserDialog.bind(this);
    this.deleteUserRequest = this.deleteUserRequest.bind(this);
  }

  componentDidMount(){
    this.getUsersRequest();
  }

  async getUsersRequest() {
    const getUsers = {
      method: 'get',
      url: `http://localhost:8000/`,
    };

    return await axios(getUsers)
    .then((response) => {
       this.getAllUsers(response.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }
  async deleteUserRequest() {
    let username = this.state.selected.username;
    const deleteUsers = {
      method: 'delete',
      url: `http://localhost:8000/user/${username}`,
      headers: { 'Content-Type': 'application/json'},
  }
    return await axios(deleteUsers)
    .then((response) => {
      console.log("User deleted");
      this.handleAfterRequest();
    })
    .catch((err) => {
      console.log(err.message);
    });
  }
  
  getAllUsers(users){
    this.setState({ users: users });
  }

  handleOnSelect(row){
    this.setState({
      selected: row,
    });
}

  handleAfterRequest(){
    this.getUsersRequest();
  }

    openCreateUserDialog(){
      this.setState({
        shouldOpenCreateUserModal: true,
      });
    }

    closeCreateUserDialog = () => {
        this.setState({
            shouldOpenCreateUserModal: false,
        });
        this.handleAfterRequest();
      }

render(){
  const users = this.state.users;
  const columns = [{
    dataField: 'username',
    text: 'Username'
  }, {
    dataField: 'firstname',
    text: 'Firstname'
  }, {
    dataField: 'lastname',
    text: 'Lastname'
  }, {
    dataField: 'team',
    text: 'Team'
  }];

  const { shouldOpenCreateUserModal, selected} = this.state;
  const selectRow = {
    mode: 'radio',
    clickToSelect: true,
    onSelect: this.handleOnSelect,
    style: { backgroundColor: '#94B2C9' }
  };
  const disabled = !selected;
  return(
    <Fragment>
        {shouldOpenCreateUserModal ? <CreateUserDialog toggle={this.closeCreateUserDialog}/>: null}
        <div className="homepage">
            <h1>Users Manager</h1>
            <BootstrapTable 
                className = 'table'
                id='table'
                keyField='id'
                remote={ true }
                data={ users } 
                columns={ columns }
                striped
                hover
                selectRow={ selectRow }
                deleteRow={ true }
                noDataIndication = 'No users'
            />

            <Row style={{ margin:'5px'}}>
              <Col>
                <Button style={{width: 300}} variant="submit" className ="add" onClick={this.openCreateUserDialog}><i className="fa fa-plus"></i> Add a user </Button>
              </Col>
              <Col>
                <Button style={{width: 300}} variant="submit" className ="delete" disabled={disabled} onClick={this.deleteUserRequest}><i className="fa fa-trash"></i> Delete a user </Button>
              </Col>
            </Row>
        </div>
    </Fragment>
  );
}
}