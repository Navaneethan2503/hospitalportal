import React, { Component } from 'react';

class ProfilePatient extends Component {
<<<<<<< Updated upstream
  render() {
    return (
        <div>
          <h2>Profile Detials Component</h2>
        </div>
    );
=======
  constructor(props){
    super(props);
    this.state = {
      user : this.props.loggedUser
    };
  }

  render() {
    console.log(this.state.user);
    return(
      <div className='card mx-auto mt-5' style={{width: "75%"}}>
          <h2>Profile Details </h2>
          <table>
            <thead>
              <th>Name </th>
              <th>Age </th>
              <th>Phone Number</th>
              <th>Email</th>
            </thead>
            <tbody>
              <td>{this.state.user.firstName}</td>
              <td>{this.state.user.age}</td>
              <td>{this.state.user.phonenumber}</td>
              <td>{this.state.user.email}</td>
            </tbody>
          </table>
      </div>
  );
>>>>>>> Stashed changes
  }
}

export default ProfilePatient ;