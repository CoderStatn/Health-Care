import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Booking from './Pages/Booking/Booking';
import AuthProvider from './Pages/Context/AuthProvider';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import Services from './Pages/Services/Services';
import Testimonials from './Pages/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
     <AuthProvider>
        <Router>
          <Header></Header>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <Route path='/about'>
                <About></About>
              </Route>
              <PrivateRoute path='/service'>
                <Services></Services>
              </PrivateRoute>
              <Route path='/testimonial'>
                <Testimonials></Testimonials>
              </Route>
              <PrivateRoute path='/booking'>
                <Booking></Booking>
              </PrivateRoute>
              <Route path='/login'>
                <Login></Login>
              </Route>
              <Route path='/register'>
                <Register></Register>
              </Route>
              <Route path='*'>
                <Pa
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
