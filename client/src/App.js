import React from "react";
import Navbar from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route path="/" component={HomePage} />
            {/* <Route path="/Comments" component={Comments} />
            <Route path="/CreateEvent" component={CreateEvent} /> */}
          </Wrapper>
        </div>
      </Router>
    </div>
  );
}

export default App;
