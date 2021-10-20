import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Booking from './Pages/Booking/Booking';
import AuthProvider from './Pages/Context/AuthProvider';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Services from './Pages/Services/Services';
import Testimonials from './Pages/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
     <AuthProvider></AuthProvider>
    </div>
  );
}

export default App;
