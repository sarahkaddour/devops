import React, { PureComponent, Fragment} from 'react';
import axios from 'axios';
import { Button, Row, Col } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import "bootstrap/dist/css/bootstrap.min.css";
import CreatePlayerDialog from './Dialogs/CreatePlayerDialog';

export default class Players extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
      loggedIn: true,
      players: [],
      selected: null,
      shouldOpenCreatePlayerModal: false,
    }
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.openCreatePlayerDialog = this.openCreatePlayerDialog.bind(this);
    this.deletePlayerRequest = this.deletePlayerRequest.bind(this);
  }

  componentDidMount(){
    this.getPlayersRequest();
  }

  async getPlayersRequest() {
    const getPlayers = {
      method: 'get',
      url: `http://localhost:8000/`,
    };

    return await axios(getPlayers)
    .then((response) => {
       this.getAllPlayers(response.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }
  async deletePlayerRequest() {
    let username = this.state.selected.username;
    const deletePlayers = {
      method: 'delete',
      url: `http://localhost:8000/user/${username}`,
      headers: { 'Content-Type': 'application/json'},
  }
    return await axios(deletePlayers)
    .then((response) => {
      console.log("Player deleted");
      this.handleAfterRequest();
    })
    .catch((err) => {
      console.log(err.message);
    });
  }
  
  getAllPlayers(players){
    this.setState({ players: players });
  }

  handleOnSelect(row){
    this.setState({
      selected: row,
    });
}

  handleAfterRequest(){
    this.getPlayersRequest();
  }

    openCreatePlayerDialog(){
      this.setState({
        shouldOpenCreatePlayerModal: true,
      });
    }

    closeCreatePlayerDialog = () => {
        this.setState({
            shouldOpenCreatePlayerModal: false,
        });
        console.log('create request');
        this.handleAfterRequest();
        console.log('create request');

      }

render(){
  const players = this.state.players;
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

  const { shouldOpenCreatePlayerModal, selected} = this.state;
  const selectRow = {
    mode: 'radio',
    clickToSelect: true,
    onSelect: this.handleOnSelect,
    style: { backgroundColor: '#dc3545' }
  };
  const disabled = !selected;
  return(
    <Fragment>
        {shouldOpenCreatePlayerModal ? <CreatePlayerDialog toggle={this.closeCreatePlayerDialog}/>: null}
        <div className="homepage">
            <h1>Players</h1>
            <BootstrapTable 
                className = 'table'
                keyField='id'
                remote={ true }
                data={ players } 
                columns={ columns }
                striped
                hover
                selectRow={ selectRow }
                deleteRow={ true }
                noDataIndication = 'No players'
            />

            <Row style={{ margin:'5px'}}>
              <Col>
                <Button style={{width: 300}} variant="success" onClick={this.openCreatePlayerDialog}><i className="fa fa-plus" aria-hidden="true"></i> Add a new player </Button>
              </Col>
              <Col>
                <Button style={{width: 300}} variant="danger" disabled={disabled} onClick={this.deletePlayerRequest}><i className="fa fa-trash" aria-hidden="true"></i> Delete a player </Button>
              </Col>
            </Row>
        </div>
    </Fragment>
  );
}
}