import React, { Component } from 'react';
import AuthService from './AuthService/AuthService';
import withAuth from './AuthService/withAuth';
import  './App.css';
import HomePage from './HomePage/HomePage';

const Auth = new AuthService();
 
class App extends Component {
   
  render() {
    return (
      <div className="App">
      <div className="App-header">
          <HomePage/>
          <button type="button" className="btn btn-info btn-lg" onClick={this.handleLogout.bind(this)}>Logout</button>
      </div>
      </div>
    )
  }
  handleLogout(){
    Auth.logout()
    this.props.history.replace('/login');
  }
}


export default withAuth(App);
