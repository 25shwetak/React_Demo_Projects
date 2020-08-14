import React from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col, Container, Card, CardBody} from 'reactstrap';
import PropTypes from 'prop-types';

const LoginComponent = (props) => {
  let {username, password, setUsername, setPassword, logValues, schema} = props;
  const setUsernameWrapper = (val) => {
    setUsername(val.target.value)
  }

  const setPasswordWrapper = (val) => {
    setPassword(val.target.value)
  }

  return (
    <Container>
      <Row>
        <Col sm={{size: 6, offset: 3}} classname="m-auto">
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="enter your email" value={username} onChange={setUsernameWrapper}/>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="enter your password" value={password} onChange={setPasswordWrapper}/>
                </FormGroup>
              </Form>
              <Button onClick={() => {
                                logValues(); 
                                schema.validate({username: username, password: password}, {abortEarly: false});
                            }}>Login</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginComponent;

LoginComponent.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  logValues: PropTypes.func.isRequired
}

LoginComponent.defaultProps = {

}