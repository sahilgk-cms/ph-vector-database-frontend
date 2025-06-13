import { Form, Row, Col, Button } from "react-bootstrap";
import { NavBarBackgroundColor, BackgroundCardColor } from "../config";

function ContactUs() {
    return (
        <>
        <div style={{ backgroundColor: BackgroundCardColor, borderRadius: "1%", width: "70%", marginLeft: "auto", marginRight: "auto" }} >
        <div>
            <h1 style={{ color:NavBarBackgroundColor, marginLeft: "1rem" }} >Contact Us</h1>
        </div>

            <Form style={{ marginLeft: "1rem", marginRight: "1rem" }}>
                <Row>
                    <Col>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Name*" />
                    </ Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email*" />
                    </ Form.Group>
                    </Col>
                </ Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Organization*" />
                        </ Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Phone Number*" />
                        </ Form.Group>
                    </Col>
                </Row>


                <Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control as="textarea" placeholder="Message*" rows={3} />
                    </ Form.Group>
                </Row>
            </Form>

            <Button type="submit" className="contact-us-submit-button" style={{ marginLeft: "1rem" }} > Submit </Button>
        </div>
        </>
    );
}

export default ContactUs;