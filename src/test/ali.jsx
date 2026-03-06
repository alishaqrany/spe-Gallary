import Header from '../components/Header';
import Footer from '../components/footer';
import Carousel from 'react-bootstrap/Carousel';

export default function Ali() {
    return (
        (<>
            <Header />
            <div className='container text-center' style={{ paddingTop: 15}}>
            <div className='container'>
                <h1>
                علي 
                </h1>
            </div>

            <i className="fa-window-close"></i>


            <Carousel >
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="b.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="lo.jpg"
                    alt="Second slide"
                />
        
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />
        
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
        </Carousel>


            </div>
            <Footer />
        </>)
    );
    }

