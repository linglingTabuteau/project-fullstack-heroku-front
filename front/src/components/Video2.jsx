import React from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import './Video2.scss';

const Video2 = () => (
  <div className="Video2">
    <h2>kiki & chihiro</h2>
    {/* <p>second method to add a video</p> */}
    <Row className="video-media">
      <Col xs="12" sm="12" lg="6">
        <iframe
          title="video2" //it needs to add attribute title
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4bG17OYs-GA"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Col>
      <Col className="video-chihiro" xs="12" sm="12" lg="6">
        <iframe
          title="video3"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ByXuk9QqQkk"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Col>

    </Row>
  </div>
);

export default Video2;
