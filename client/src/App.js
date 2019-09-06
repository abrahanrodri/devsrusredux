import React, { Component } from "react";
import Navbar from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import HomePage from "./Pages/HomePage";
import NoMatch from "./Pages/NoMatch";
import Login from "./Pages/Login";
// import CreateEvent from "./Pages/CreateEvent";
import Comments from "./Pages/Comments";

class App extends Component {
  state = {
    User: false
  }
  handleLogin = (val) => {
    this.setState({ User: val })
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Wrapper>
              <Switch>
                {/* <Route exact path="/" component={HomePage} /> */}
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/login" component={Login} render={()=><Login User={this.state.User} handleLogin={this.handleLogin} />} />
                {/* <Route exact path="/create" render={()=><CreateEvent  User={this.state.User} />} /> */}
                <Route exact path="/comments" component={Comments} />
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
}


export default App;
