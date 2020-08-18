import React from "react";
import { Button, Form, FormGroup, FormFeedback, Label, Input, Row, Col, Container, Card, CardBody} from 'reactstrap';
import PropTypes from 'prop-types';
import { LOGIN_REDUCER } from "../shared/actionConstants";

const LoginComponent = ({validateData, dispatch, passwordError, usernameError, password, username, setUsernameErrorToNull, setPasswordErrorToNull}) => {
  
  /*let {username, password, setUsername, setPassword, 
    validateData, usernameError, passwordError, setUsernameErrorToNull, setPasswordErrorToNull} = props;*/

  const setUsernameWrapper = (val) => {
    //setUsername(val.target.value)
    dispatch({type: LOGIN_REDUCER.SET_USERNAME, value: val.target.value});
  }

  const setPasswordWrapper = (val) => {
    //setPassword(val.target.value)
    dispatch({type: LOGIN_REDUCER.SET_PASSWORD, value: val.target.value});
  }

  return (
    <Container>
      <Row>
        <Col sm={{size: 6, offset: 3}} className="m-auto">
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input 
                        type="email" name="email" 
                        id="exampleEmail" 
                        placeholder="enter your email" 
                        value={username} 
                        onChange={setUsernameWrapper}
                        onFocus={setUsernameErrorToNull}
                        invalid={(usernameError !== null ? true : false)}/>
                  <FormFeedback>{usernameError}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input 
                        type="password" 
                        name="password" 
                        id="examplePassword" 
                        placeholder="enter your password" 
                        value={password} 
                        onChange={setPasswordWrapper}
                        onFocus={setPasswordErrorToNull}
                        invalid={(passwordError !== null) ? true : false}/>
                  <FormFeedback>{passwordError}</FormFeedback>
                </FormGroup>
              </Form>
              <Button onClick={() => {validateData();}}>Login</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginComponent;

LoginComponent.propTypes = {
  validateData: PropTypes.func.isRequired,
  setUsernameErrorToNull: PropTypes.func.isRequired,
  setPasswordErrorToNull: PropTypes.func.isRequired
}

LoginComponent.defaultProps = {

}
