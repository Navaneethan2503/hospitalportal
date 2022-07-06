import React, { Component } from 'react';
import {appUser} from '../../Data';

class WelcomeDashboard extends Component {
  constructor(){
    super();
    this.state = {
      user: []
    };
  }

  componentDidMount(){
    this.setState({user: appUser[0]});
  }

  render() {
    console.log(this.state.user);
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
              <h6>Patient Id : {this.state.user.Id}</h6>
              <h6>Name : {this.state.user.Firstname+ ", "+ this.state.user.Lastname}</h6>
              <h6>Gender : {this.state.user.Gender}</h6>
              <h6>Age : {this.state.user.Age}</h6>
          </div>
        </div>
    );
  }
}

export default WelcomeDashboard;