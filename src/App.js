import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import UserPage from "./pages/UserPage";

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/user/:userId' component={UserPage} />
      </Switch>
    </div>
  );
};

export default App;
