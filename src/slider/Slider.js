import React, {useState} from 'react';
import {
  Container, Col, Row, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle
} from 'reactstrap';

import data from "../data";

const Slider = (props) => {

  const [services] = useState(data.services);
  const [service, setService] = useState(data.services[0]);

  const pointerClick = (id, e) => {
    services.filter((service) => (service.id === id) ? setService(service) : "")
  }

  const pointers = services.map(svc =>
    <li
      key={svc.id}
      data-uid={svc.id}
      onClick={(e) => pointerClick(svc.id, e)}
      className={svc.id === service.id ? "active" : ""}
    ></li>
  );

  return (
    <Container>
      <Card className="slide_card" key={service.id}>
        <Row>
          <Col xs="5" className="img_hold">
            <CardImg top width="100%" src="/images/yoga.png" alt="Card image" />
          </Col>
          <Col xs="7">
            <CardBody>
              <CardTitle>{service.title}</CardTitle>
              <CardSubtitle>{service.type} • {service.category}</CardSubtitle>
              <CardText>{service.description}</CardText>
              <div className="price_tag">
                <span>For one session</span>
                <h3>${service.price.toFixed(2)}</h3>
              </div>
            </CardBody>
          </Col>
        </Row>
      </Card>
      <ul className="slider_dots">
        {pointers}
      </ul>
    </Container>
  );
};

export default Slider;
