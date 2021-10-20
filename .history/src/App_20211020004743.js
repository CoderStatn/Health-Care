import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route>
  <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
      <Header></Header>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
