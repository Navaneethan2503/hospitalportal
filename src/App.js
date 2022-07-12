import './App.css';
import Main from './Components/Main';
import {BrowserRouter as Router} from 'react-router-dom';
import HeaderDashboard from './Components/PatientComponent/HeaderDashboard';
//import HeaderDashboard from './Components/DoctorComponent/HeaderDashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Main />
      </Router>
      
    </div>
  );
}

export default App;
