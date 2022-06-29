import React, {useState} from 'react';
import PatientService from '../Services/Appointment';

function AddAppointment (props) {
    const [Appointment , setAppointment ] = useState({
        PaitentId: 0,
        PoctorId: 0,
        DepartmentName: '',
        DateOfAppointment: new Date("YYYY-MM-DD")
    });

    const handleAppointmentChange = e => {
        let { name, value, type } = e.target;
        if (type === 'date')
            value = new Date(value);
        setAppointment({ ...Appointment, [name]: value });
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log(Appointment.PaitentId, Appointment.DoctorId, Appointment.DepartmentName, Appointment.DateOfAppointment);
        PatientService.addNewAppointment(Appointment).then(res => {
            alert('Appointment Booked');
        }).catch(res => {  });
    }
    return (
        <div >
        <div className="col-12" >
            <h1 className='p-3 mb-2 bg-dark text-white bolder'>BOOK A APPOINTMENT</h1>
            <form method="post" onSubmit={submitHandler} >
                <div>
                <label for="PaitentId" >Enter Patient Id: </label>
                <input type="number" onChange={handleAppointmentChange} name="PaitentId" id='PaitentId' value={Appointment.PaitentId} placeholder='Enter departmentName'/>
                </div>    
                <div>
                <label for="DoctorId" >Enter Doctor Id:  </label>
                <input type="number" onChange={handleAppointmentChange} name="DoctorId" id='DoctorId' value={Appointment.DoctorId} placeholder='Enter DoctorId' />
                </div>
                <div>
                <label for="DepartmentName" >Enter Department Name: </label>
                <input type="text" onChange={handleAppointmentChange} name="DepartmentName" id='DepartmentName' value={Appointment.DepartmentName} placeholder='Enter departmentName'/>
                </div>
                <div>
                <label for="DateOfAppointment" >Enter Appointment Date : </label>
                <input type="text" onChange={handleAppointmentChange} name="DateOfAppointment" id='DateOfAppointment' value={Appointment.DateOfAppointment} placeholder='Enter Appointment Date'/>
                </div>
                <div>
                <input className='btn btn-primary' type="submit" />
                </div>
            </form>
        </div>
    </div>
    );
}


export default AddAppointment;