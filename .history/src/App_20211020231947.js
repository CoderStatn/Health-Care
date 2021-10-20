import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Booking from './Pages/Booking/Booking';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Services from './Pages/Services/Services';
import Testimonials from './Pages/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
          <Route path='/service'>
            <Services></Services>
          </Route>
          <Route path='/testimonial'>
            <Testimonials></Testimonials>
          </Route>
          <Route path='/booking'>
            <Booking></Booking>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
