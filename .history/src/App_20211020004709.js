import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Rou
        </Switch>
      </BrowserRouter>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
