import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button,
} from 'reactstrap';
import './CardFilm.scss';

const CardFilm = (props) => {
  const {
    name, onTheater, imageUrl, url,
  } = props;
  return (
    <div>
      <Card className="CardFilm">
        <div className="photo-size">
          <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
        </div>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{onTheater}</CardText>
          <a href={url} target="_blank" rel="noopener noreferrer"><Button>More info</Button></a>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardFilm;
