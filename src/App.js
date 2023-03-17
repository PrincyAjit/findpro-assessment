import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FaqDashboard from './pages/js/FaqDashboard';
import ContactUs from './components/js/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace={true} />} />
        <Route path="*" element={<Navigate to="/dashboard" replace={true} />} />
        <Route path="/dashboard" element={<FaqDashboard />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
