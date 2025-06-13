import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArticleCard from "./ArticleCard";

function ArticleContainer() {
  return (
    <Container className="article-container">
      <Row>
        <Col xs={12} md={6}>
          <ArticleCard severity="High" />
        </Col>
        <Col xs={12} md={6}>
          <ArticleCard severity="Moderate" />
        </Col>
        <Col xs={12} md={6}>
          <ArticleCard severity="Low" />
        </Col>
        <Col xs={12} md={6}>
          <ArticleCard severity="Moderate" />
        </Col>
        <Col xs={12} md={6}>
          <ArticleCard severity="High" />
        </Col>
        <Col xs={12} md={6}>
          <ArticleCard severity="Low" />
        </Col>
      </Row>
    </Container>
  );
}

export default ArticleContainer;
