import React from "react";
import Navbar from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import HomePage from './Pages/HomePage';
import NoMatch from './Pages/NoMatch';
import CreateEvent from './Pages/CreateEvent';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/create" component={CreateEvent} />
              <Route component={NoMatch} />
            </Switch>


            {/* <Route path="/Comments" component={Comments} />
            <Route path="/CreateEvent" component={CreateEvent} /> */}
          </Wrapper>
        </div>
      </Router>
    </div>
  );
}

export default App;
