import {Link , useNavigate , Route , Routes, Router } from 'react-router-dom';
import {useState} from 'react';
import NavBar from "./AuthenticationComponent/NavBar";
import LoginService from '../Services/Auth';
import Login from './AuthenticationComponent/Login';
import DashboardPatient from './PatientComponent/DashboardPatient';
import AppointmentPatient from './PatientComponent/AppointmentHistory';
import ProfilePatient from './PatientComponent/ProfilePatient';
import BookAppointment from './PatientComponent/BookAppointment';
import AppointmentEdit from './PatientComponent/AppointmentEdit';
import EditAppointment from './PatientComponent/EditAppointment';
import DashboardDoctor from './DoctorComponent/DashboardDoctor';
import ProfileDoctor from './DoctorComponent/ProfileDoctor';
import MyAppointment from './DoctorComponent/MyAppointment';
import ConsultForm from './DoctorComponent/Consult';
import {appUser} from '../Data';

function Main(){
    const [userDetails, setUserDetails] = useState({
        user: appUser,
        isLoggedIn: false
      });

    const nav = useNavigate();

    const handleLogin = credentials => {
        LoginService.doLogin(credentials).then(obj => {
          setUserDetails({ user: obj.data, isLoggedIn: true });
          window.localStorage.setItem('apitoken', obj.data.token);
          alert("Loged In");
          if(userDetails.user.role === "Patient" ){
            nav('/PatientDashboard');
          }
          else{
            nav('/DoctorDashboard');
          }
        }).catch(obj => {
          alert(obj.response.statusText);
        });
      }

    const handleLogout = () => {
        const obj = {
          user: [],
          isLoggedIn: false
        };
        setUserDetails(obj);
        window.localStorage.removeItem('apitoken');
        nav('/');
      }

      //<NavBar role={userDetails.user.role} isLoggedIn={userDetails.isLoggedIn} handleLogout={handleLogout} /> 

    return(
        <div>
           <NavBar role={userDetails.user.role} isLoggedIn={userDetails.isLoggedIn} handleLogout={handleLogout} /> 
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <Routes>
                            <Route exact path='/' element={<Login handleLogin={handleLogin} />} />
                            <Route path='/PatientDashboard' element={<DashboardPatient  />} />
                            <Route path='/Appointment' element={<AppointmentPatient  />} />
                            <Route path='/ProfilePatient' element={<ProfilePatient  />} />
                            <Route path='/bookAppointment' element={<BookAppointment  />} />
                            <Route path='/AppointmentEdit' element={<AppointmentEdit  />} />
                            <Route path='/EditAppointment/:Id' element={<EditAppointment />} />
                            <Route path='/DoctorDashboard' element={<DashboardDoctor  />} />
                            <Route path='/ProfileDoctor' element={<ProfileDoctor  />} />           
                            <Route path='/MyAppointment' element={<MyAppointment />} />                     
                            <Route path='/consult/:Id' element={<ConsultForm  /> } />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main ;