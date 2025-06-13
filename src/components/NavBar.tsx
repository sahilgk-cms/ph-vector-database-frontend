import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  NavBarBackgroundColor,
  NavBarSearchButtonColor,
  PHTwitterLink, PHLinkedInLink, PHInstagramLink, PHWebsiteLink,
  SocialMediaIconStyle
} from "../config";
import PHLogo from "./PHLogo";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/twitter.png";
import linkedinIcon from "../assets/linkedin.png";

function NavBar() {
  return (
    <>
      <div className="social-media-header">
        <p className="follow-us-text">Follow Us</p>
        <a href={PHTwitterLink} target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" style={SocialMediaIconStyle} className="social-icon" />
        </a>
        <a href={PHLinkedInLink} target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" style={SocialMediaIconStyle} className="social-icon" />
        </a>
        <a href={PHInstagramLink} target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" style={SocialMediaIconStyle} className="social-icon" />
        </a>
      </div>

      <Navbar expand="lg" className="navbar-main p-0">
        <Container fluid className="p-0 navbar-container">
          <Navbar.Brand href={PHWebsiteLink} className="ms-2 logo-container">
            <PHLogo />
          </Navbar.Brand>

          <div className="navbar-content" style={{ backgroundColor: NavBarBackgroundColor }}>
            <Navbar.Brand href="/" className="ms-2 navbar-title">
              Event Based Surveillance
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-2" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/analysis" className="navbar-item">
                  Analysis
                </Nav.Link>

                <Nav.Link href="/documentation" className="navbar-item">
                  Documentation
                </Nav.Link>

                <Form className="d-flex navbar-search-form">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="navbar-search-input"
                  />
                  <Button
                    type="submit"
                    className="navbar-search-button"
                    style={{ backgroundColor: NavBarSearchButtonColor, borderColor: NavBarSearchButtonColor }}
                  >
                    <i className="bi bi-search"></i>
                  </Button>
                </Form>
              </Nav>

              <Nav className="ms-auto">
                <Nav.Link
                  href="/contact-us"
                  className="contact-us-navbar-item"
                >
                  <i className="bi bi-telephone-outbound" />
                  &nbsp;&nbsp;Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;