import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientRegistration from './components/patientRegistrationForm';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PatientRegistration />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
