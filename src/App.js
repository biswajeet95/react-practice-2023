import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import axios from "axios";
import BookProject from "./components2/BookProject";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Home from "./Home";
import AnimalFile from "./AnimalFile";
import ImageProject from "./components/ImageProject";
import PrivateRoute from "./Utils/PrivateRoute";
import TablePage from "./tableProject/TablePage";
import PublicRoute from "./Utils/PublicRoute";
import { getToken, removeUserSession, setUserSession } from "./Utils/Common";
import WindowsSize from "./components3/WindowsSize";
import SimpleTodoFile from "./components4/SimpleTodoFile";

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios
      .get(`http://localhost:4000/verifyToken?token=${token}`)
      .then((response) => {
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
      })
      .catch((error) => {
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink activeClassName="active" to="/login">
              Login
            </NavLink>
            <small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/dashboard">
              Dashboard
            </NavLink>
            <small>(Access with token only)</small>
            <NavLink activeClassName="active" to="/animalFile">
              AnimalFile
            </NavLink>

            <NavLink activeClassName="active" to="/imageProject">
              imageProject
            </NavLink>
            <NavLink activeClassName="active" to="/bookProject">
              BookProject
            </NavLink>
            <NavLink activeClassName="active" to="/windowsSize">
              WindowsSize
            </NavLink>
            <NavLink activeClassName="active" to="/simpleTodoFile">
              TodoList
            </NavLink>
            <NavLink activeClassName="active" to="/tablePage">
              Table
            </NavLink>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/animalFile" component={AnimalFile} />
              <Route exact path="/imageProject" component={ImageProject} />
              <Route exact path="/bookProject" component={BookProject} />
              <Route exact path="/windowsSize" component={WindowsSize} />
              <Route exact path="/simpleTodoFile" component={SimpleTodoFile} />
              <Route exact path="/tablePage" component={TablePage} />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
