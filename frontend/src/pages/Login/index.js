import React, { useState, useEffect } from "react";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/authSlice";
import {
  Form,
  Container,
  Centered,
  Centered2,
} from "../../styled/login.styled";
import { useForm } from "../../hooks/useForm";
import {
  Input,
  Button,
  FormControl,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const { user, errorMessage, isError, message } = useSelector(
    (state) => state.auth,
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [values, handleChange] = useForm({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  },[user]);

  const handleClick = () => setShow(!show);

  const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);
      const { email, password } = values;
      let vals = { email, password};
      try {
        dispatch(login(vals));
      } catch (err) {
        console.log(err);
      }

  };

  return (
    <Centered>
      <Form onSubmit={handleLogin}>

        <FormControl>
          <h1>Welcome Back!</h1>
          <Container>
            <Input
              id="email"
              className={`${error ? "error" : ""}`}
              onChange={handleChange}
              name="email"
              placeholder="Email"
            ></Input>
          </Container>

          <Container>
            <InputGroup>
              <Input
                id="pw"
                onChange={handleChange}
                name="password"
                placeholder="Password"
                type={show ? "text" : "password"}
              ></Input>
              <InputRightElement width="5.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Container>       
          <Centered2>
            <Button
              size="md"
              type="submit"
              colorScheme="purple"
              variant="solid"
            >
  
              Login
            </Button>
          </Centered2>
        </FormControl>
        <div className={`behind-bg ${isError ? "error-slide" : ""}`}>
        <h2>{errorMessage}</h2>
        </div>
      </Form>
    </Centered>
  );
};

export default Login;
