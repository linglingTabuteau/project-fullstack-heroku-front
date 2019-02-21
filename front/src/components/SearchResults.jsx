import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import { dataResults } from '../actions/search';
import { initState } from '../actions/index';

class SearchResults extends Component {
  componentDidMount() {
    const { initState, resultFilms, location } = this.props;
    console.log('location', location);
    initState();
    resultFilms(`http://localhost:5000/api/results${location.search}`);
  }

  render() {
    // const { searchResults } = this.props;
    // console.log('searchResults', searchResults);
    const { searchResults: { results } } = this.props;
    return (
      <div className="Films">
        {
          results.map(item => (
            <button className="showFilm" type="button" key={item.id} onClick={() => this.infoResto(item.id)}>
              <Card className="card-film">
                {/* <CardImg top width="100%" height="175px" src={item.url} alt="Card image cap" /> */}
                <CardBody>
                  <CardTitle className="titleCard">{item.name}</CardTitle>
                  <br />
                  <CardSubtitle>
                    <i className="fa fa-cutlery icon-pers" />
                    {item.on_theater}
                  </CardSubtitle>
                  <br />
                  <CardSubtitle>{item.id}</CardSubtitle>
                </CardBody>
              </Card>
            </button>
          ))
        }
      </div>
    );
  }
}


function mstp(state) {
  return {
    searchResults: state.listFilms,
  };
}

function mdtp(dispatch) {
  return bindActionCreators({
    resultFilms: dataResults, initState,
  },
    dispatch);
}

export default withRouter(
  connect(
    mstp,
    mdtp,
  )(SearchResults),
);
