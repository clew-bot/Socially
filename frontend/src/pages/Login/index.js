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

  const handleClick = () => setShow(!show);

  let isError = false;


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
        if (data.loggedIn === false) {
          setError(data.error);
        } else {
          localStorage.setItem("yllaicos1", data.id);
          console.log("true")
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
        <div className="behind-bg">
        </div>
      </Form>
    </Centered>
  );
};

export default Login;
