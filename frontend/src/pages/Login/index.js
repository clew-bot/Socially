import React, { useState } from "react";
import validator from "validator";
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
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [values, handleChange] = useForm({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleClick = () => setShow(!show);

  const handleSignUp = async (e) => {
      e.preventDefault();
      setLoading(true);
      const { email, password } = values;
      try {
        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        console.log("that data ", data)
        if (data.loggedIn === false) {
          setError(data.message);
          setShowError(true);
        } else {
          localStorage.setItem("yllaicos1", JSON.stringify(data));
          navigate("/dashboard");
        }
      } catch (err) {
        console.log(err);
      }

  };

  return (
    <Centered>
      <Form onSubmit={handleSignUp}>

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
        <div className={`behind-bg ${showError ? "error-slide" : ""}`}>
        <h2>{error}</h2>
        </div>
      </Form>
    </Centered>
  );
};

export default Login;
