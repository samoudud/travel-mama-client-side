import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './pages/Shared/NavBar/NavBar';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import AuthProvider from './context/AuthProvider';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import MyBooking from './pages/MyBooking/MyBooking';
import ManageBooking from './pages/ManageBooking/ManageBooking';
import AddService from './pages/AddService/AddService';
import AddBooking from './pages/AddBooking/AddBooking';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/mybooking'>
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path='/managebooking'>
              <ManageBooking></ManageBooking>
            </PrivateRoute>
            <PrivateRoute path='/addservice'>
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path='/addbooking'>
              <AddBooking></AddBooking>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
