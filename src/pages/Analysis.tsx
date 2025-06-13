import DiseaseBarChart from "../components/plots/DiseaseBarChart";
import LocationBarChart from "../components/plots/LocationBarChart";
import DiseaseDistributionPieChart from "../components/plots/DiseaseDistributionPieChart";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Analysis(){
    return(
        <>

        <Container>
            <Row>
                <Col>
                    <DiseaseBarChart />
                </Col>
                <Col>
                    <LocationBarChart />
                </Col>
            </Row>
            <Row style={{ marginLeft: "auto", marginRight: "auto", width: "50%" }}>
                <DiseaseDistributionPieChart />
            </Row>
        </Container>
        </>
    );
}

export default Analysis;