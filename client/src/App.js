import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import cardScreen from './screens/cardScreen';
import registerScreen from './screens/registerScreen';
import loginScreen from './screens/loginScreen';
import restosScreen from './screens/restosScreen';
import Ordersscreen from './screens/Ordersscreen';
import Adminscreen from './screens/Adminscreen';

const isLoggedIn = localStorage.getItem("currentUser");
const isLoggedInFacebook = localStorage.getItem("profileFacebook");
const isLoggedInGoogle = localStorage.getItem("profile");

function App() {

  return (
    <div className="App">
      
      <Navbar/>
      <BrowserRouter>
      <Route path="/" exact component={restosScreen}></Route>
      <Route path='/food/:id' exact component={HomeScreen} />
      <Route path='/card' exact component={cardScreen}/>
      <Route path='/register' exact component={registerScreen} />
      <Route path='/login' exact component={(isLoggedIn || isLoggedInFacebook || isLoggedInGoogle )?  restosScreen : loginScreen}  />
      <Route path='/orders' exact component={Ordersscreen}/>
      <Route path="/admin"component={Adminscreen}></Route>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
