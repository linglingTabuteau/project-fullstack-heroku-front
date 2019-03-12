import React from 'react';
import {
  Route,
  withRouter,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRouteAdmin = ({ component: Component, user, token, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      console.log('1privateRoute-props:', props);
      console.log('2privateRoute-...rest:', { ...rest });
      if (token !== '' && user.email === 'lingling.tabuteau@gmail.com'){
       return(
        <Component {...props} />
       );
      } else {
        return(
          <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location }
          }}
        />
        );
      }}}
  />
);

const mstp = state => {
  console.log('privateRoute-state:', state);
  return ({
    token: state.auth.token,
    user: state.auth.user,
  });
}

export default connect(mstp)(PrivateRouteAdmin);