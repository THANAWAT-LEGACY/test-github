import React, { Component } from 'react';
import './App.css';
import { Row, Col, Container } from 'react-bootstrap';
import WorkAll from './pages/work-all';
import WorkDev1 from './pages/word-dev-1';
import WorkDev2 from './pages/work-dev-2';

class App extends Component {
  render() {
    return (
      <Container>

        <h2 style={{ textAlign: 'center', marginTop: 10 }}>Test Github</h2>

        <Row className="" style={{ margin: 50 }}>
          <Col>
            <div className="shadow p-3 bg-white rounded">
              <h4 style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>All</h4>

              <WorkAll />
            </div>
          </Col>
        </Row>

        <Row className="mt-1" style={{ height: 300, width: '100%' }}>
          <Col>
            <div className="shadow p-3 mb-5 bg-white rounded">
              <h4 style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>DEV 1</h4>

              <WorkDev1 />
            </div>
          </Col>
          <Col>
            <div className="shadow p-3 mb-5 bg-white rounded">
              <h4 style={{ textAlign: 'center', marginTop: 10, marginBottom: 10 }}>DEV 2</h4>

              <WorkDev2 />

            </div>
          </Col>
        </Row>
      </Container>


    );
  }
}

export default App;
