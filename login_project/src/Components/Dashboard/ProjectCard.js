import React from 'react';
import { Row, Col } from 'reactstrap';

const ProjectCard = (props) => {
  let {name, image_url, description} = props.project
  return (
    <div>
      <Row className="mb-3">
        <Col xs="3">
          <img style={{width: "70px"}} src={image_url} className="img-responsive" alt="img"/>
        </Col>
        <Col md={{ size:8, offset: 4}}>
          <h4>Name: {name}</h4>
          <p>Description: {description}</p>
        </Col>
      </Row>
      <hr />
    </div>
  )
}

export default ProjectCard;
