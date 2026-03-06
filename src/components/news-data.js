import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const Newsdata = () => {
  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
          <Card className="rounded shadow acd">
            <Card.Img
            variant="top"
            className="rounded shadow"
            src="./img/news1.jpg"
            />
          </Card>
      </Col>

      <Col>
          <Card className="rounded shadow acd">
            <Card.Img
              variant="top"
              className="rounded shadow"
              src="./img/news2.jpg"
            />
          </Card>
      </Col>

    </Row>
  );
};

export default Newsdata;
