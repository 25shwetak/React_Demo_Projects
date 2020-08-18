import React from "react";
import projects from "../projects";
import ProjectCard from "../Components/Dashboard/ProjectCard";
import Title from "../Components/Layout/Title";
import {useSelector} from 'react-redux';
import {Row, Col} from "reactstrap";

const DashboardComponent = () => {
  const {userDetails} = useSelector((state) => state.loginDetailsReducer)
  return (
    <>
      <Title userDetails={userDetails} />
      {projects.map((project) => (
        <Row key={project.id} className="mb-3">
          <Col md={{ size:8, offset: 4}}>
            <ProjectCard project={project} />
          </Col>
        </Row>
      ))}
    </>
  );
};

export default DashboardComponent;