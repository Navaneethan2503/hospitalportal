import axios from "axios";


const http = axios.create({
    headers: { 'content-type': 'application/json', 'Authorization': '' },
    baseURL: 'http://localhost:35246' //35246 //5000
});

/** 

http.interceptors.request.use(config => {
    const token = window.localStorage.getItem('apitoken');
    config.headers['Authorization'] = 'Bearer ' + token;
    return config;
}, error => {
    Promise.reject(error);
});
*/
//http.interceptors.response.use()

const getAppointment = () => {
    return http.get('api/patient');
}
const updateAppointmentId = id =>{
    return http.get('api/patient/'+id);
}
const removeAppointment = (appointmentId) => {
    return http.delete(`api/patient/${appointmentId}`);
}
const addNewAppointment = appointmentObj => {
    return http.post('api/patient', appointmentObj);
}

let PatientService = { getAppointment, updateAppointmentId, removeAppointment, addNewAppointment };
export default PatientService;