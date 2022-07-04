import React, { Component } from 'react';
import WelcomeDashboard from './WelcomeDashboard';
import HealthDetial from './HealthDetial';

class DashboardPatient extends Component {
  render() {
    return (
        <div className='justify-content-center'>
            <div className='card mx-auto mt-5' style={{width: "75%"}}>
                <WelcomeDashboard />
                <HealthDetial />
            </div>          
        </div>
    );
  }
}

export default DashboardPatient;