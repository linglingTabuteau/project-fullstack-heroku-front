import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      const { authenticated, history } = this.props;
      if (!authenticated) {
        history.push('/signin');
      }
    }

    componentWillUpdate() {
      const { authenticated, history } = this.props;
      if (!authenticated) {
        history.push('/signin');
      }
    }

    render() {
      console.log('this.props:', { ...this.props });
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.token };
  }

  return connect(mapStateToProps)(Authentication);
}
