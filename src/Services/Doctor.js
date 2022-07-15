import axios from "axios";


const http = axios.create({
    headers: { 'content-type': 'application/json', 'Authorization': '' },
    baseURL: 'http://localhost:2937' //35246 //5000
});

http.interceptors.request.use(config => {
    const token = window.localStorage.getItem('apitoken');
    config.headers['Authorization'] = 'Bearer ' + token;
    return config;
}, error => {
    Promise.reject(error);
});

const addReport = reportObj => {
    return http.post('api/Consultant/SubmitDiagnosisTreatment', reportObj);
}

const getReports = () => {
    return http.get('api/Consultant/GetConsultantReports');
}

let DoctorService = { getReports,addReport };
export default DoctorService;