import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signinAuth } from '../actions/signin';


class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: '',
    };
  }

  componentDidMount() {
    const { profile } = this.state;
    const { token } = this.props;
    fetch('http://localhost:5000/api/profile',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.ok) {
          console.log('resokprofile', res);
          return res.json();
        }
        return new Error(res.statusText);
      })
      .then((res) => {
        console.log('resProfile:', res);
        this.setState({ profile: res });
      })
      .catch();
  }

  render() {
    const { user, token } = this.props;
    return (
      <Container>
        <h2>{`Welcome to your profile ${user.name} ${user.lastname}`}</h2>
        <p>{token}</p>
      </Container>
    );
  }
}

const mstp = (state) => {
  console.log('reducers-state:', state);
  return {
    token: state.auth.token,
    user: state.auth.user,
  };
};
const mdtp = dispatch => bindActionCreators({ signinAuth }, dispatch);


export default connect(mstp, mdtp)(withRouter(MyProfile));
