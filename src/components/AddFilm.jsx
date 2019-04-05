import React, { Component } from 'react';
import {
  Container, Form, FormGroup, Label, Button,
} from 'reactstrap';
import './AddFilm.scss';
import { withRouter } from 'react-router';

class AddFilm extends Component {
  constructor(props) {
    super(props);
    // attention, nom des clés dans le stage doivent respondent aux noms dans la basedonnée
    this.state = {
      name: '',
      url: '',
      category: '',
      image_url: '',
      video_url: '',
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
    fetch(`${'https://project-fullstack-heroku-back.herokuapp.com/api'}/films`, config)
      .then(res => res.text())
      .then((res) => {
        if (res === 'ok') {
          history.push('/');
          // sert à rafraichir la page: window.location.reload();
        } else {
          console.log('res-front:', res);
        }
      });
  }

  render() {
    const { name, url, category, image_url, video_url} = this.state;
    return (
      <Container className="AddFilm">
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
          <FormGroup>
            <Label for="category">image_url</Label>
            <textarea
              onChange={this.handleChange}
              type="text"
              name="image_url"
              id="image_url"
              value={image_url}
            />
          </FormGroup>
          <FormGroup>
            <Label for="category">image_url</Label>
            <textarea
              onChange={this.handleChange}
              type="text"
              name="video_url"
              id="video_url"
              value={video_url}
            />
          </FormGroup>
          <div className="text-center">
            <Button color="primary font2" className="mb-3">Ajouter</Button>
          </div>
        </Form>
      </Container>
    );
  }
}

export default withRouter(AddFilm);
