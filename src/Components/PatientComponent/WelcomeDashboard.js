import React, { Component } from 'react';
import {appUser} from '../../Data';

class WelcomeDashboard extends Component {
  constructor(){
    super();
    this.state = {
      user: appUser
    };
  }

  componentDidMount(){
    this.setState({user:appUser});
  }

  render() {
    return (
        <div>
          <table className='table-responsive{-sm|-md|-lg|-xl} text-uppercase'>
              <thead>
                  <tr>
                      <th className='p-3 px-5' style={{letterSpacing:"5px"}} >welcome back!</th>
                  </tr>
              </thead>
          </table>
          <div class="d-flex justify-content-around p-4">
              <h6>Patient Id : {this.state.user.map(m => m.Id)}</h6>
              <h6>Name : {appUser.map(m => m.Firstname)+ ", "+ appUser.map(m => m.Lastname)}</h6>
              <h6>Gender : {appUser.map(m => m.Gender)}</h6>
              <h6>Age : {appUser.map(m => m.Age)}</h6>
          </div>
        </div>
    );
  }
}

export default WelcomeDashboard;