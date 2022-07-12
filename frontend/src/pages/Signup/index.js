import React, { useState } from "react";
import validator from "validator";
import {
  Form,
  Container,
  Centered,
  Centered2,
  GenderContainer,
  BirthdayContainer,
} from "../../styled/signup.styled";
import { useForm } from "../../hooks/useForm";
import { format, compareAsc } from "date-fns";
import {
  Input,
  Button,
  Divider,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  InputRightElement,
  InputGroup,
  Select,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcBusinesswoman, FcManager } from "react-icons/fc";
const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [values, handleChange] = useForm({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    day: "",
    sAnswer: "",
  });
  let isError = false;
  const [gender, setGender] = useState([]);
  const [securityQuestion, setSecurityQuestion] = useState([]);
  const [show, setShow] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState(false);
  const [pwError, setPWError] = useState(false);

  const handleClick = () => setShow(!show);

  const validateEmail = (email) => {
    if (validator.isEmail(email)) {
      console.log("aight");
      isError = false;
      setEmailError("");
      setError(false);
    } else {
      console.log("ffs kid");
      isError = true;
      console.log(isError);
      setEmailError("This field is invalid");
      setError(true);
    }
  };
  const handleSignUp = async (e) => {
    setLoading(true);
    e.preventDefault();
    validateEmail(values.email);
    if (isError) {
      setLoading(false);
      return;
    }
    if (values.password !== values.confirmPassword) {
      setPWError(true);
      setLoading(false);
      return;
    }

    console.log(values);
    let birthday = format(
      new Date(values.year, values.day, values.month),
      "MM/dd/yyyy"
    );
    console.log(birthday);

    setLoading(() => !loading);
    const data = await fetch("/api/auth", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await data.json();
    console.log(json);
  };

  return (
    <Centered>
      <Form onSubmit={handleSignUp}>
        <FormControl>
          <h1>Create Account</h1>
          <Container>
            <Input
              width="300px"
              onChange={handleChange}
              name="fullName"
              placeholder="Name"
            ></Input>
            <br />
            <Input
              className={`${error ? "error" : ""}`}
              onChange={handleChange}
              name="email"
              placeholder="Email"
            ></Input>
          </Container>

          <Container>
            <InputGroup>
              <Input
                onChange={handleChange}
                name="password"
                className={`${pwError ? "error" : ""}`}
                placeholder="Password"
                type={show ? "text" : "password"}
              ></Input>
              <InputRightElement width="5.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <InputGroup>
              <Input
                onChange={handleChange}
                className={`${pwError ? "error" : ""}`}
                name="confirmPassword"
                placeholder="Confirm Password"
                type={show ? "text" : "password"}
              ></Input>
              <InputRightElement width="5.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Container>
          <Divider />

          <Container js="center" width="100px">
            <Select
            width="110px"
            icon={""}
            className="gender-select"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option disabled defaultValue={true}>
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
            <GenderContainer>
              {gender === "Female" ? (
                <FcBusinesswoman size={"2rem"} />
              ) : (
                <FcManager size={"2rem"} />
              )}
            </GenderContainer>
            <BirthdayContainer>
              <Select
              icon={""}
                name="month"
                onChange={handleChange}
                marginLeft=".5rem"
                width="120px"
              >
                <option disabled selected>
                  Month
                </option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </Select>
              <NumberInput
                marginLeft=".5rem"
                size="md"
                maxW={20}
                defaultValue={1}
                max={31}
                onChange={(value) =>
                  handleChange({ target: { name: "day", value } })
                }
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <NumberInput
                marginLeft=".5rem"
                size="md"
                maxW={24}
                defaultValue={1995}
                max={2004}
                min={1904}
                onChange={(value) =>
                  handleChange({ target: { name: "year", value } })
                }
              >
                <NumberInputField onChange={handleChange} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </BirthdayContainer>
          </Container>

          <Divider />
          <br />
          <h2 style={{ paddingLeft: "11px" }}>Security Question:</h2>

          <Container>
            <Select
            paddingRight="10px"
              name="sQuestion"
              width="500px"
              onChange={(e) => {
                setSecurityQuestion(e.target.value);
              }}
            >
              <option defaultValue="Pick a question" disabled>
                Pick a question
              </option>
              <option value="What whas your first pet's name?">
                What was your first pet's name
              </option>
              <option value="What was your favorite childhood cartoon?">
                What was your favorite childhood cartoon
              </option>
              <option value="What is your favorite food?">
                What is your favorite food
              </option>
            </Select>
            <Input name="sAnswer" placeholder="Answer"></Input>
          </Container>
          <br />
          {!isError ? (
            <FormHelperText>{emailError}</FormHelperText>
          ) : (
            <FormHelperText>Required</FormHelperText>
          )}
          <Centered2>
            <Button
              size="md"
              type="submit"
              isLoading={loading}
              colorScheme="purple"
              variant="solid"
            >
              Signup
            </Button>
          </Centered2>
        </FormControl>
      </Form>
    </Centered>
  );
};

export default Signup;
