import React, { Component } from 'react';
import {
  Container, Form, FormGroup, Label, Button,
} from 'reactstrap';
import './AddFilm.scss';
import { withRouter } from 'react-router';

class AddFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      url: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddFilm = this.handleAddFilm.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleAddFilm(e) {
    const { history } = this.props;
    e.preventDefault();
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    };
    fetch('http://localhost:5000/api/films', config)
      .then(res => res.text())
      .then((res) => {
        if (res === 'ok') {
          console.log('history:', history);
          history.push('/');
          // sert à rafraichir la page: window.location.reload();
        } else {
          console.log(res);
        }
      });
  }

  render() {
    const { name, url, category } = this.props;
    return (
      <div className="AddFilm">
        <Container className="AddFAQ">
          <Form onSubmit={this.handleAddFilm}>
            <FormGroup>
              <Label for="name">Name</Label>
              <textarea
                onChange={this.handleChange}
                type="text"
                name="name"
                id="name"
                value={name}
              />
            </FormGroup>
            <FormGroup>
              <Label for="url">Url</Label>
              <textarea
                onChange={this.handleChange}
                type="text"
                name="url"
                id="url"
                value={url}
              />
            </FormGroup>
            <FormGroup>
              <Label for="category">Category</Label>
              <textarea
                onChange={this.handleChange}
                type="text"
                name="category"
                id="category"
                value={category}
              />
            </FormGroup>
            <div className="text-center">
              <Button color="primary font2" className="mb-3">Ajouter</Button>
            </div>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(AddFilm);
