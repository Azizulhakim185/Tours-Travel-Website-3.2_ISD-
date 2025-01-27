import React from "react";
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'; // Corrected path

const quick_links = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/tours',
    display: 'Tours',
  },
];

const quick_links2 = [
  {
    path: '/gallery',
    display: 'Gallery',
  },
  {
    path: '/login',
    display: 'Login',
  },
  {
    path: '/register',
    display: 'Register',
  },
];

const Footer = () => {
    const year = new Date().getFullYear
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="Logo" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
                illum laudantium dolorem sed similique vero vitae deserunt
                voluptate, mollitia quos quibusdam, exercitationem autem
                assumenda laboriosam. Quod dolores fuga odio repellat.
              </p>
              <div className="social_links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-github-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className="footer_link-title">Discover</h5>
            <ListGroup className="footer_quick-links">
                {
                    quick_links.map((item,index)=>(
                        <ListGroupItem className="footer_quick-links"> 
                            <Link to={item.path}>{item.display}</Link>
                        </ListGroupItem>
                    ))

                }

            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className="footer_link-title">Quick Links</h5>
            <ListGroup className="footer_quick-links">
                {
                    quick_links.map((item,index)=>(
                        <ListGroupItem className="footer_quick-links"> 
                            <Link to={item.path}>{item.display}</Link>
                        </ListGroupItem>
                    ))

                }

            </ListGroup>

            <h5 className="footer_link-title">Contact</h5>
            <ListGroup className="footer_quick-links">
                
                        <ListGroupItem className="ps-0 border-0 d-flex 
                        align-items-center gap-3"> 
                         <h6 className="mb-0 d-flex align-items-center gap-2">
                            <span>
                            <i class="ri-map-pin-line"></i> 
                            
                            </span>
                            Address:
                         </h6>
                           <p className="mb-0">Sylhet,Bangladesh</p>
                        </ListGroupItem>

                        
                        <ListGroupItem className="ps-0 border-0 d-flex 
                        align-items-center gap-3"> 
                         <h6 className="mb-0 d-flex align-items-center gap-2">
                            <span>
                            <i class="ri-mail-line"></i>
                            
                            </span>
                            Email:
                         </h6>
                           <p className="mb-0">azizulhakimshuvo185@gmail.com</p>
                        </ListGroupItem>

                        <ListGroupItem className="ps-0 border-0 d-flex 
                        align-items-center gap-3"> 
                         <h6 className="mb-0 d-flex align-items-center gap-2">
                            <span>
                            <i class="ri-phone-fill"></i>
                            
                            </span>
                            phone:
                         </h6>
                           <p className="mb-0">123456479</p>
                        </ListGroupItem>
               
            </ListGroup>
          </Col>
          <Col lg='12' className="text-center pt-5">
          <p className="copyright">Copyright{},design and develop by Azizul 
            Hakim Shuvo. All rights and reserved.
          </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
