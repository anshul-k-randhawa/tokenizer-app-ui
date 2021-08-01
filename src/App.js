import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/login";
import Home from "./components/home";
import CreateToken from "./components/createToken"
import ValidateToken from "./components/validateToken"
import { Provider } from "react-redux";
import { store, persistor } from "./store/configureStore";
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <Router>
      <PersistGate persistor={persistor}>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/generateToken" exact component={CreateToken} />
          <Route path="/validateToken" exact component={ValidateToken} />
          <Route path="*" exact component={Login} />
        </Switch>
      </PersistGate>
      </Router>
    </Provider>
  );
}

export default App;
