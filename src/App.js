import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import ExploreMore from './pages/ExploreMore/ExploreMore';
import Login from './pages/Login/Login/Login';
import Register from './pages/Register/Register';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route path='/explore'>
              <ExploreMore></ExploreMore>
            </Route>
            <Route path='/placeOrder'>
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
