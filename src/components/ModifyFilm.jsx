import React, { Component } from 'react';
import {
  Container, Form, FormGroup, Label, Button,
} from 'reactstrap';
import './ModifyFilm.scss';
import { withRouter } from 'react-router';

class ModifyFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      url: '',
      category: '',
      image_url: '',
      video_url: ''
    }
    this.handleModifyFilm = this.handleModifyFilm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleModifyFilm(e) {
    const { history } = this.props;
    e.preventDefault();
    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    };
    fetch(`${process.env.REACT_APP_API}/films`, config)
      .then(res => res.text())
      .then((res) => {
        if (res === 'ok') {
          console.log('history.push:', )
          history.push('/');
          // sert à rafraichir la page: window.location.reload();
        } else {
          console.log('res-front:', res);
        }
      });
  }

  render() {
    const { name, url, category, image_url, video_url } = this.state;
    return (
      <Container className="ModifyFilm">
        <Form onSubmit={this.handleModifyFilm}>
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
            <Button color="primary font2" className="mb-3" onClick={this.handleModifyFilm} >Modify Film</Button>
          </div>
        </Form>
      </Container>
    );
  }
}

export default withRouter(ModifyFilm);