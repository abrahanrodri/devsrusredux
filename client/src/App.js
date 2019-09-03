import React from 'react';
import Navbar from "./Componets/Nav";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Wrapper from "./Componets/Wrapper"
import HomePage from "./Componets/CreateEvent";

function App() {
  return (
<div>
  <Router>
<div>
  <Navbar />
  <Wrapper>
      <Route path ="/" component ={HomePage} />
      <Route path ="/Comments" component ={Comments} />
      <Route path ="/CreateEvent" component ={CreateEvent} />
  </Wrapper>
</div>

  </Router>
</div>
  );
}

export default App;
