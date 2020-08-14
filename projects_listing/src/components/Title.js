import React from "react";
import "../css/Title.css";
import { Form, FormGroup, Input } from 'reactstrap';

const Title = () => {
  return (
    <div className="top-banner">
      <h1> Discover Projects</h1>
      <p className="text-success"> 91098 public projects to discover</p>
    </div>
  )
}

export default Title;