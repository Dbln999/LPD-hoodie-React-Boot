import React from "react";
import { Container, Col, Row, Carousel } from "react-bootstrap";

export const Main = ({ hoodies }) => {
  return (
    <Container>
        <h1 className={''} id={'mainHeader'}>LPD it’s how make your hoodie search easier</h1>
        <Row>
        <Col md={"7"} className={"d-flex align-items-center"}>
          <p className={"replacement"}>
            LPD replace hoodie search in one place instead of thousand places.
            Find your hoodie in just a 10 minutes and enjoy saved time.
          </p>
        </Col>
        <Col md={"5"} id={"carousel"}>
          <Carousel>
            {hoodies.map((hoodie) => {
              return (
                <Carousel.Item >
                    <img src={hoodie.src} className={'d-block'} id={'carouselItem'} alt=""/>
                    <p className={'text-center my-1'}>{hoodie.title}</p>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};
