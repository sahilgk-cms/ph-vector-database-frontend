import { NavBarBackgroundColor, BackgroundCardColor, ChartFont, ChartBackgroundColor } from "../config";
import { Container, Row, Col, Card } from 'react-bootstrap';

function Documentation() {
  return (
    <Container fluid className="documentation-page" style={{ 
      backgroundColor: BackgroundCardColor, 
      minHeight: '100vh',
      padding: '2rem 0'
    }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            

            <div className="text-center mb-5">
              <h1 style={{ 
                color: NavBarBackgroundColor, 
                fontFamily: ChartFont,
                fontSize: '2.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}>
                Documentation
              </h1>
              <p style={{ 
                color: '#666', 
                fontSize: '1.1rem',
                fontFamily: ChartFont,
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Comprehensive guide to understanding the data entities and severity classifications used in this application.
              </p>
            </div>

            

            <Card className="mb-4" style={{ 
              backgroundColor: ChartBackgroundColor,
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <Card.Body style={{ padding: '2rem' }}>
                <h2 style={{ 
                  color: NavBarBackgroundColor,
                  fontFamily: ChartFont,
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  borderBottom: `3px solid ${NavBarBackgroundColor}`,
                  paddingBottom: '0.5rem'
                }}>
                  Entity Terminology
                </h2>
                
                <Row>
                  <Col md={6} className="mb-3">
                    <div style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      padding: '1.5rem',
                      borderRadius: '8px',
                      height: '100%',
                      border: '1px solid #e0e0e0'
                    }}>
                      <h5 style={{ 
                        color: NavBarBackgroundColor, 
                        fontWeight: 'bold',
                        marginBottom: '0.8rem',
                        fontFamily: ChartFont
                      }}>
                        🩺 Symptoms
                      </h5>
                      <p style={{ 
                        color: '#333', 
                        marginBottom: 0,
                        lineHeight: '1.6',
                        fontFamily: ChartFont
                      }}>
                        Refers to any symptoms of a disease identified in the text, such as <strong>"fever"</strong>, <strong>"cough"</strong>, etc.
                      </p>
                    </div>
                  </Col>
                  
                  <Col md={6} className="mb-3">
                    <div style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      padding: '1.5rem',
                      borderRadius: '8px',
                      height: '100%',
                      border: '1px solid #e0e0e0'
                    }}>
                      <h5 style={{ 
                        color: NavBarBackgroundColor, 
                        fontWeight: 'bold',
                        marginBottom: '0.8rem',
                        fontFamily: ChartFont
                      }}>
                        🦠 Diseases
                      </h5>
                      <p style={{ 
                        color: '#333', 
                        marginBottom: 0,
                        lineHeight: '1.6',
                        fontFamily: ChartFont
                      }}>
                        Refers to the diseases identified in the text, such as <strong>"malaria"</strong>, <strong>"dengue"</strong>, etc.
                      </p>
                    </div>
                  </Col>
                  
                  <Col md={6} className="mb-3">
                    <div style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      padding: '1.5rem',
                      borderRadius: '8px',
                      height: '100%',
                      border: '1px solid #e0e0e0'
                    }}>
                      <h5 style={{ 
                        color: NavBarBackgroundColor, 
                        fontWeight: 'bold',
                        marginBottom: '0.8rem',
                        fontFamily: ChartFont
                      }}>
                        📍 Locations
                      </h5>
                      <p style={{ 
                        color: '#333', 
                        marginBottom: 0,
                        lineHeight: '1.6',
                        fontFamily: ChartFont
                      }}>
                        Refers to geographic locations, names of cities, states, etc. identified in the text such as <strong>"Lucknow"</strong>, <strong>"Jalandhar"</strong>, etc.
                      </p>
                    </div>
                  </Col>
                  
                  <Col md={6} className="mb-3">
                    <div style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      padding: '1.5rem',
                      borderRadius: '8px',
                      height: '100%',
                      border: '1px solid #e0e0e0'
                    }}>
                      <h5 style={{ 
                        color: NavBarBackgroundColor, 
                        fontWeight: 'bold',
                        marginBottom: '0.8rem',
                        fontFamily: ChartFont
                      }}>
                        📊 Numeric Values
                      </h5>
                      <p style={{ 
                        color: '#333', 
                        marginBottom: 0,
                        lineHeight: '1.6',
                        fontFamily: ChartFont
                      }}>
                        Refers to numeric entities identified in the text which can be numbers, percentages, or qualitative descriptors such as <strong>"increasing"</strong>, <strong>"many"</strong>, etc.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            

            <Card style={{ 
              backgroundColor: ChartBackgroundColor,
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <Card.Body style={{ padding: '2rem' }}>
                <h2 style={{ 
                  color: NavBarBackgroundColor,
                  fontFamily: ChartFont,
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  borderBottom: `3px solid ${NavBarBackgroundColor}`,
                  paddingBottom: '0.5rem'
                }}>
                  News Severity Classification
                </h2>
                
                <div style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  marginBottom: '2rem',
                  border: '1px solid #e0e0e0'
                }}>
                  <p style={{ 
                    color: '#333', 
                    marginBottom: 0,
                    fontSize: '1.05rem',
                    lineHeight: '1.6',
                    fontFamily: ChartFont
                  }}>
                    The severity of each reported article is determined by the <strong>negative sentiment score</strong> of the article as determined by a natural language processing model.
                  </p>
                </div>

                <Row>
                  <Col lg={4} className="mb-3">
                    <div style={{ 
                      backgroundColor: 'rgba(40, 167, 69, 0.1)',
                      padding: '1.5rem',
                      borderRadius: '8px',
                      height: '100%',
                      border: '2px solid #28a745',
                      textAlign: 'center'
                    }}>
                      <div style={{ 
                        backgroundColor: '#28a745',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        display: 'inline-block',
                        marginBottom: '1rem',
                        fontWeight: 'bold',
                        fontFamily: ChartFont
                      }}>
                        Low Severity
                      </div>
                      <p style={{ 
                        color: '#333', 
                        marginBottom: 0,
                        lineHeight: '1.6',
                        fontFamily: ChartFont
                      }}>
                        The article has a relatively <strong>low impact</strong> or urgency.
                      </p>
                    </div>
                  </Col>
                  
                  <Col lg={4} className="mb-3">
                    <div style={{ 
                      backgroundColor: 'rgba(255, 193, 7, 0.1)',
                      padding: '1.5rem',
                      borderRadius: '8px',
                      height: '100%',
                      border: '2px solid #ffc107',
                      textAlign: 'center'
                    }}>
                      <div style={{ 
                        backgroundColor: '#ffc107',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        display: 'inline-block',
                        marginBottom: '1rem',
                        fontWeight: 'bold',
                        fontFamily: ChartFont
                      }}>
                        Moderate Severity
                      </div>
                      <p style={{ 
                        color: '#333', 
                        marginBottom: 0,
                        lineHeight: '1.6',
                        fontFamily: ChartFont
                      }}>
                        The article may have a <strong>significant impact</strong> or moderate urgency.
                      </p>
                    </div>
                  </Col>
                  
                  <Col lg={4} className="mb-3">
                    <div style={{ 
                      backgroundColor: 'rgba(220, 53, 69, 0.1)',
                      padding: '1.5rem',
                      borderRadius: '8px',
                      height: '100%',
                      border: '2px solid #dc3545',
                      textAlign: 'center'
                    }}>
                      <div style={{ 
                        backgroundColor: '#dc3545',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        display: 'inline-block',
                        marginBottom: '1rem',
                        fontWeight: 'bold',
                        fontFamily: ChartFont
                      }}>
                        High Severity
                      </div>
                      <p style={{ 
                        color: '#333', 
                        marginBottom: 0,
                        lineHeight: '1.6',
                        fontFamily: ChartFont
                      }}>
                        The article is <strong>critical</strong> and requires immediate attention or action.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Documentation;