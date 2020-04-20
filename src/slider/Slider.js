import React, {useState, useEffect} from 'react';
import {
  Container, Col, Row, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle
} from 'reactstrap';
import { connect } from 'react-redux';

import data from "../data";

const Slider = (props) => {

  const [services] = useState(data.services);
  const [service, setService] = useState(data.services[0]);

  const pointerClick = (id) => {
    services.filter((service) => (service.id === id) ? setService(service) : "");
    props.onPointerClick(id);
  }

  useEffect(() => {
    props.onPointerClick(service.id);
  })

  const pointers = services.map(svc =>
    <li
      key={svc.id}
      data-uid={svc.id}
      onClick={(e) => pointerClick(svc.id, e)}
      className={svc.id === service.id ? "active" : ""}
    ></li>
  );

  return (
    <Container className="slider_main">
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

const mapStateToProps = (state) => {
  return {
    service_id: state.service_id
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onPointerClick: (id) => {
        const action = {type: "SERVICE_CHANGE", service_id: id};
        dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Slider);
