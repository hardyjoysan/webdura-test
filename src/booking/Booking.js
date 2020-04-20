import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import { connect } from 'react-redux';

import data from "../data";

import StatusText from './components/StatusText';
import StatusBar from './components/StatusBar';
import Avatar from './components/Avatar';
import MetaContent from './components/MetaContent';
import Invoice from './components/Invoice';
import QRtoast from './components/QRtoast';
import ActionButtons from './components/ActionButtons';

localStorage.setItem('bookings', JSON.stringify(data.bookings));

class Booking extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      bookings: [],
      hits: 1,
      viewmore: true
    }
  }

  componentDidMount(){
    this.onUpdateBooking();
  }

  componentDidUpdate(prevProps){
    if (prevProps.status !== this.props.status || prevProps.service_id !== this.props.service_id) {
      this.onUpdateBooking();
    }
  }

  onUpdateBooking = () => {
    let data_bookings = localStorage.bookings ? JSON.parse(localStorage.bookings) : [];
    if(data_bookings.length !== 0){
      let newBooks = data_bookings.filter((book) => book.status === this.props.status && book.service_id === this.props.service_id);
      var paginated = newBooks.slice(0, 5 * this.state.hits);
      var viewmore = newBooks.length > paginated.length ? true : false;
      this.setState({
        bookings: paginated,
        viewmore: viewmore
      });

    }
  }

  onViewMore = async () => {
    var more = this.state.hits + 1;
    await this.setState({
      hits: more
    })
    this.onUpdateBooking();
  }

  render() {
    return(
      <Container className="booking_main" fluid>
        {this.props.status === "ACTIVE" && <QRtoast /> }
        {
          this.state.bookings.map((booking)=>
            <div className="booking_card" key={"book_" + booking._id}>
              <Row>
                <Col xs="4">
                  <StatusText status={booking.status} updated_at={booking.updated_at}/>
                </Col>
                <Col xs="8">
                  <StatusBar status={booking.status} />
                </Col>
              </Row>

              <Row>
                <Col xs="6">
                  <Avatar name={booking.name} place={booking.place} />
                </Col>
                <Col xs="6">
                  <div className="deals">
                    <span>You two had 12 deals before</span>
                  </div>
                </Col>
              </Row>

              {booking.status === "PAYMENT"
                ? <Invoice />
                : <MetaContent status={booking.status} />
              }

              <ActionButtons status={booking.status} book_id={booking._id} updateBooks={this.onUpdateBooking} />

            </div>
          )
        }

        {this.state.viewmore === true
          ? <Button className="view_books" onClick={this.onViewMore}>View More</Button>
          : <span className="the_end">No more service requests</span>
        }

      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.active_status,
    service_id: state.service_id
  }
}

export default connect(mapStateToProps) (Booking);
