import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Addservice from "./Components/Addservice/Addservice";
import Book from "./Components/Book/Book";
import Login from "./Components/Login/Login";
import ServiceList from "./Components/ServiceList/ServiceList";
import OrderList from "./Components/OrderList/OrderList";
// import Reviewset from "./Components/Reviewset/Reviewset";
import Review from "./Components/Review/Review";
import Manageorder from "./Components/Manageorder/Manageorder";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";



export const UserContext = createContext();
function App() {
  const [loggedInUser , setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    {/* <p>Email: {loggedInUser.email}</p> */}
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/serviceList">
            <ServiceList />
          </Route>
          <Route path="/manageorder">
            <Manageorder />
          </Route>
         
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/orderlist">
            <OrderList />
          </PrivateRoute>
          <PrivateRoute path="/addservice">
            <Addservice />
          </PrivateRoute>
          <PrivateRoute path="/book/:id">
            <Book />
          </PrivateRoute>
        </Switch>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
