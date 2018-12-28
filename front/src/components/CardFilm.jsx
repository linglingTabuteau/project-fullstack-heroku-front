import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
import './CardFilm.scss';

const  CardFilm= (props) => {
  return (
    <div>
      <Card className="CardFilm">
      <div className="photo-size" >
      <CardImg top width="100%" src="/medias/kiki.jpg" alt="Card image cap" />
      </div>
        <CardBody>
          <CardTitle>kiki</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardFilm;
