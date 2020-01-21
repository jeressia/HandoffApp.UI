/* eslint-disable max-len */
import React from 'react';


import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Home from '../Components/Home/Home';
import Preview from '../Components/Preview/Preview';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const PublicRoute = ({ component: Component, authed, ...rest}) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/MyHome', state: { from: props.location } }}/>)
  );
  return <Route {...rest} render={(props) => routeChecker(props)}/>;
};

const PrivateRoute = ({ component: Component, authed, ...rest}) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/Home', state: { from: props.location } }}/>)
  );
  return <Route {...rest} render={(props) => routeChecker(props)}/>;
};

class App extends React.Component {
  state = {
    authed: false,
  }

  logMeIn = (e) => {
    // e.preventDefault();
    // const provider = new firebase.auth.GoogleAuthProvider();
    // firebase.auth().signInWithPopup(provider)
    //   .then();
    this.setState({ authed: true });
  }

  logMeOut = () => {
    this.setState({ authed: false });
  }

  componentDidMount() {
    // this.removeListener = firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.setState({ authed: true });
    //   } else {
    //     this.setState({ authed: false });
    //   }
    // });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    // ///checks to see if user is authed on every render as a fix to timing issue
    // const { authed } = this.state;
    // if (authed) {
    //   console.log("yo you are authed in the mount")
    //   userData.checkForUserAcct(firebase.auth().currentUser.uid)
    //   .then((resp) => {
    //     if (resp === 0){
    //       console.log("we are trying to create a new user")
    //       userData.createNewUser(firebase.auth().currentUser.uid)
    //     }
    //   })
    // }
    return (
      <div className="App">
      <BrowserRouter>
        <React.Fragment>
          {/* <MyNavbar authed={this.state.authed} logMeIn={this.logMeIn} logMeOut={this.logMeOut}/> */}
          {/* alternate auth */}
          {/* <MyNavbar authed={authed} /> */}
            <Switch>
              <PublicRoute path='/Home' component={Preview} authed={this.state.authed}/>
              <PrivateRoute path='/MyHome' component={Home} authed={this.state.authed}/>
              {/* <PrivateRoute path='/MyProfile' component={MyProfile} authed={this.state.authed}/>
              // eslint-disable-next-line max-len
              <PublicRoute path='/product/:id' component={SingleProduct} authed={this.state.authed}/>
              <PublicRoute path='/SellerPage/:sellerId' component={SellerPage} authed={this.state.authed}/> */}
              {/* <PublicRoute path='/CreateUser' component={CreateUser} authed={authed}/> */}
              <Redirect from="*" to="/Home"/>
            </Switch>
        </React.Fragment>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;