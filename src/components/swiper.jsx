import { Card, Row, Col } from 'react-bootstrap';

export default function Cat() {


  return (
    <>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <a href='art'>
            <Card className="rounded shadow acd">
              <Card.Img variant="top" className="rounded shadow" src='./img/art.jpg' />
            </Card>
          </a>
        </Col>

        <Col>
          <a href='nat'>
            <Card className="rounded shadow acd">
              <Card.Img variant="top" className="rounded shadow" src="./img/nat.jpg" />
            </Card>
          </a>
        </Col>

        <Col>
          <a href='fb'>
            <Card className="rounded shadow acd">
              <Card.Img variant="top" className="rounded shadow" src="./img/fb.jpg" />
            </Card>
          </a>
        </Col>
        <Col>
          <a href='ath'>
            <Card className="rounded shadow acd">
              <Card.Img variant="top" className="rounded shadow" src="./img/ath.jpg" />
            </Card></a>
        </Col>

        <Col>
          <a href='hand'>
            <Card className="rounded shadow acd">
              <Card.Img variant="top" className="rounded shadow" src="./img/hand.jpg" />
            </Card></a>
        </Col>

        <Col>
          <a href='pano'>
            <Card className="rounded shadow acd">
              <Card.Img variant="top" className="rounded shadow" src="./img/pano.jpg" />
            </Card>
          </a>
        </Col>


        <Col>
        <a href='hlifeBefore'>
          <Card className="rounded shadow acd">
            <Card.Img variant="top" className="rounded shadow" src="./img/hlife.jpg" />
          </Card>
        </a>
      </Col>

      </Row>



    </>
  )
}