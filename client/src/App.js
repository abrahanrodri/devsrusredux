import React, { Component } from "react";
import Navbar from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import HomePage from './Pages/HomePage';
import NoMatch from './Pages/NoMatch';
import CreateEvent from './Pages/CreateEvent';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import logo from './logo.svg';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

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

          <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         {
           user
             ? <p>Hello, {user.displayName}</p>
             : <p>Please sign in.</p>
         }
         {
           user
             ? <button onClick={signOut}>Sign out</button>
             : <button onClick={signInWithGoogle}>Sign in with Google</button>
         }
       </header>
     </div>
        </Router>
      </div>
      
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
// export default App;
