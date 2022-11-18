//import './App.css';
//import { Navbar } from 'react-bootstrap';
import Customer from './pages/customer';
import View from './pages/view';
import Contact from './pages/contact';
import Navbar from './components/shared/navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Customer />} />
       <Route path="/view" element={< View/>} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
