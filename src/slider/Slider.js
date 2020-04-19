import React from 'react';
import {
  Container, Col, Row, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle
} from 'reactstrap';

const Slider = (props) => {
  return (
    <Container fluid>
      <Card className="slide_card">
        <Row>
        <Col xs="5" className="img_hold">
          <CardImg top width="100%" src="/images/yoga.png" alt="Card image" />
        </Col>
        <Col xs="7">
          <CardBody>
            <CardTitle>Yoga and Pilate Training</CardTitle>
            <CardSubtitle>TRAINING • FITNESS</CardSubtitle>
            <CardText>This yoga and pilate training session is designed for all levels of trainees…</CardText>
            <div className="price_tag">
              <span>For one session</span>
              <h3>$80.00</h3>
            </div>
          </CardBody>
        </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Slider;
