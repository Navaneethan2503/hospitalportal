import React, { Component } from 'react';
import calendar from '../../Images/calendar.png';
import remove from '../../Images/delete.png';


class AppointmentEdit extends Component {
  render() {
    return (
        <div> 
          <div className='card mx-auto mt-5 text-uppercase' style={{width: "50%"}} >
          <h5 className='p-3'> List of Appointments</h5>
          <table className='table-responsive{-sm|-md|-lg|-xl} '>
            <thead>
              <tr>
                <th>s.no</th>
                <th>Department</th>
                <th>Doctor Name</th>
                <th>Appointment Date</th>
                <th>Change Date</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Neurology</td>
                <td>Navaneethan</td>
                <td>Mar 17 2022</td>
                <td><button type="button" class="btn btn-warning">Edit</button></td>
                <td><button type="button" class="btn btn-danger">Delete</button></td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
    );
  }
}

export default AppointmentEdit ;