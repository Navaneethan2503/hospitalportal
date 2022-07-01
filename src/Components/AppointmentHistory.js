import { useEffect, useState } from 'react';
import PatientService from '../Services/Appointment';
const AppointmentHistory = props => {
    const [appointment, setAppointment] = useState([]);
    useEffect(() => {
        PatientService.getAppointment().then(res => {
            console.log(res.data);
            setAppointment([...res.data]);
        }).catch(err => {
            alert(err.response.statusText);
        });
    }, [appointment.length])
    
    return <div className='row'>
        <div className='col-12'>
            <h2>Appointment History</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Patient Id</th>
                        <th>Doctor Id</th>
                        <th>DepartmentName</th>
                        <th>Date Of Appointment</th>
                    </tr>
                </thead>
                <tbody>
                    {appointment.map(t => <tr key={t.id}>
                        <td>{t.patientId}</td>
                        <td>{t.doctorId}</td>
                        <td>{t.departmentName}</td>
                        <td>{t.dateOfAppointment}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    </div>
}
export default AppointmentHistory;