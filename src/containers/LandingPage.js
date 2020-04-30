import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PatientDirectory from './PatientDirectory/PatientDirectory';
import WaitingRoom from './WaitingRoom/WaitingRoom';
import Auth from './Auth/Auth';


let url = `${window.location.origin.toString()}`;
console.log("url", url);

class LandingPage extends Component {
    constructor(props) {
        super(props);
    }
    
    
    componentDidMount() {

        this.props.onTryAutoSignup();
    }

    render() {
        return (
            <div>
                {this.props.isAuthenticated ? (
                    <div>

                        <Header />
                        <Switch>
                            <Route path="/patient-directory">
                                <PatientDirectory title="this is a title" />
                            </Route>
                            <Route path="/waiting-room">
                                <WaitingRoom />
                            </Route>
                        </Switch>
                        <Footer version={20200420.12}/> 
                    </div>
                ) : <Auth/> }
            </div>
        );
    }
}

const matchDispatchToState = dispatch => {
    return {
      logout: () => dispatch(actions.logout()),
      onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
  }
  
  const mapStateToProps = state => {
    return {
      isAuthenticated: state.isAuthenticated,
      user: state.user
    }
  }
  
  export default withRouter(connect(mapStateToProps, matchDispatchToState )(LandingPage));
