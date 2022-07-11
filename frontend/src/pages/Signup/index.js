import React, { useState } from "react";
import {
  Form,
  Select,
  Container,
  Centered,
  Centered2,
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
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

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
  const [gender, setGender] = useState([]);
  const [securityQuestion, setSecurityQuestion] = useState([]);
  const isError = values === "";

  const handleSignUp = async (e) => {
    e.preventDefault();

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
              onChange={handleChange}
              name="email"
              placeholder="Email"
            ></Input>
          </Container>

          <Container>
            <Input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
            ></Input>
            <Input
              onChange={handleChange}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            ></Input>
          </Container>
          <Divider />

          <Container>
            <Select
              onChange={(e) => {
                setGender(e.target.value);
              }}
              width="100px"
            >
              <option defaultValue disabled>
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
            <Divider orientation="vertical" />
            <Select name="month" onChange={handleChange} width="100px">
              <option value="01">Janurary</option>
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
          </Container>

          <Divider />
          <br />
          <h2 style={{ paddingLeft: "11px" }}>Security Question:</h2>

          <Container>
            <Select
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
          <Centered2>
            {" "}
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
