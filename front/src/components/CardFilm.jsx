import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button,
} from 'reactstrap';
import './CardFilm.scss';

const CardFilm = (props) => {
  const { name, onTheater } = props;
  return (
    <div>
      <Card className="CardFilm">
        <div className="photo-size">
          <CardImg top width="100%" src="/medias/kiki.jpg" alt="Card image cap" />
        </div>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{onTheater}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardFilm;
