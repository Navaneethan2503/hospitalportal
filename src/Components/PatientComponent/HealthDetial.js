import React, { Component } from 'react';

class HealthDetial extends Component {
  render() {
    return (
        <div>
          <table className='table-responsive{-sm|-md|-lg|-xl} '>
              <thead className='text-uppercase'>
                  <th className='px-5 p-4' style={{letterSpacing:"2px"}} >Health Detials</th>
              </thead>
              <tbody>
                  <tr>
                      <th  scope="col">Problem</th>
                      <th className='px-5'  scope="col">Diagnosis</th>
                      <th className='px-5' scope="col">Treatment</th>
                      <th className='px-5' scope="col">Prescription</th>
                  </tr>
                  <tr>
                      <td>Brainology</td>
                      <td>Nightblindness</td>
                      <td>Drugs</td>
                      <td>paracetomal</td>
                  </tr>
              </tbody>
          </table>
        </div>
    );
  }
}

export default HealthDetial;