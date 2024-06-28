import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Navbar/Home';
import About from './components/Navbar/About';
import Register from './components/Forms/Register';
import Login from './components/Forms/Login';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer.js/Footer';
import ACInstallationForm from './components/Forms/ACInstallationForm';
import ACInstallationDetails from './components/Dashboard/ACInstallationDeatails';
import Sidebar from './components/Dashboard/Sidebar';

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow  md:ml-64">
      {/* <Navbar/> */}
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/register" element={<Register />} />
         <Route path='/login'  element={<Login/>}/>
         <Route path="/dashboard" element={<Dashboard/>} />
         {/* <Route path="/contact" element={<Contact />} /> */}
         <Route path='/register-installation' element={<ACInstallationForm /> }/>
         <Route path='/installation-details' element={<ACInstallationDetails />} />
        </Routes>
        <Footer />
        </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
