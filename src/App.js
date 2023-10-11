import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import MyWorks from './components/works/MyWorks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/home/Home';

function App() {
  return (

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/my-works' element={<MyWorks/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      
      <Footer/>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
