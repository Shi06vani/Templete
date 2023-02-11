import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../component/footer.css"
import image from "../component/images/smalltruk.jpg"
import logo from "../component/images/instagram-logo.webp";
import logo2 from "../component/images/pngimg.png"


export default function Footer() {
    return (
        <div>
            <Container className='topfooter'>
                <div className='footer'>

                    <Row >
                        <Col>
                        <div className='footer_image'>
                          <img src={image} alt="" />
                          </div>
                        </Col>

                        <Col>
                            <h4>Contact Us</h4>
                            <p>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
                            <p>example2020@gmail.com</p>
                            <p>(904) 443-0343</p>
                        </Col>

                        <Col id='mid_footer'>
                            <h4>More</h4>
                            <p>About us</p>
                            <p>Product us</p>
                            <p>Career</p>
                            <p>Contact us</p>
                        </Col>

                        <Col>
                            <h4>Social links </h4>
                            <span className='footer_logo'>
                            <img src={logo} alt="" />
                           
                            </span>
                            <span className='footer_logo2'>
                            <img src={logo2} alt="" />
                            </span>

                           
                            <p>© 2022 Food Truck Example</p>
                        </Col>


                    </Row>

                </div>


            </Container>

        </div>
    )
}
