import React, { Component } from 'react';
import {appUser} from '../../Data';

class WelcomeDashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
<<<<<<< Updated upstream
      user: []
=======
      user: this.props.appUser
>>>>>>> Stashed changes
    };
  }

  componentDidMount(){
<<<<<<< Updated upstream
    this.setState({user: appUser[0]});
=======
    this.setState({user:this.props.appUser});
    console.log(this.props.appUser);
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
              <h6>Patient Id : {this.state.user.Id}</h6>
              <h6>Name : {this.state.user.Firstname+ ", "+ this.state.user.Lastname}</h6>
              <h6>Gender : {this.state.user.Gender}</h6>
              <h6>Age : {this.state.user.Age}</h6>
=======
              <h6>Patient Id : {this.props.appUser.id}</h6>
              <h6>Name : {this.props.appUser.firstName+ ", "+ this.props.appUser.lastName}</h6>
              <h6>Gender : {this.props.appUser.gender}</h6>
              <h6>Age : {this.props.appUser.age}</h6>
>>>>>>> Stashed changes
          </div>
        </div>
    );
  }
}

export default WelcomeDashboard;