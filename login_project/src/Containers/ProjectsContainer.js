import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getProjects } from '../actions/projectsActions';
import ProjectCard from "../Components/Dashboard/ProjectCard";

let ProjectsContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getProjects()) }, []);

  let result = useSelector(state => state.projectsReducer);
  const { projects } = result;

  let arr = [];
  for( let i=0; i<projects.length; i+=2){
    arr.push(<ProjectCard project={projects[i]}/>);
  }
  return (arr);
};
export default ProjectsContainer;