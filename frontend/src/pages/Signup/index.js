import React, { useEffect, useState } from "react"
import validator from "validator"
import {
  Form,
  Container,
  Centered,
  Centered2,
  GenderContainer,
  BirthdayContainer,
} from "../../styled/signup.styled"
import { useForm } from "../../hooks/useForm"
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
  FormHelperText,
} from "@chakra-ui/react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { FcBusinesswoman, FcManager } from "react-icons/fc"
import { useSelector } from "react-redux"
import { authSelector } from "../../features/authSlice/authSlice.js"
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [values, handleChange] = useForm({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    day: "1",
    year: "1995",
    month: "01",
    sAnswer: "",
  })
  const [gender, setGender] = useState("male")
  const [securityQuestion, setSecurityQuestion] = useState("")
  const [show, setShow] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [error, setError] = useState(false)
  const [pwError, setPWError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [birthdayError, setBirthdayError] = useState(false)

  const auth = useSelector(authSelector)

  useEffect(() => {
    // if (!auth.user) navigate("/login")
    if (auth.user) navigate("/dashboard");
  }, [auth])

  const handleClick = () => setShow(!show)

  let isError = false

  const validateEmail = (email) => {
    if (validator.isEmail(email)) {
      setEmailError("")
      setError(false)
      return true
    } else {
      return false
    }
  }
  const handleSignUp = async (e) => {
    setLoading(true)
    e.preventDefault()
    if (!validateEmail(values.email)) {
      setEmailError("This field is invalid")
      setError(true)
    }
    if (
      values.password !== values.confirmPassword ||
      values.password.length === 0
    ) {
      setPWError(true)
      isError = true
      console.log(isError)
    }
    if (values.username === "") {
      setNameError(true)
      isError = true
    }
    if (values.month === "month") {
      setBirthdayError(true)
      isError = true
    }
    if (isError === true) {
      setLoading(true)
      return
    }

    let birthday = `${values.year}-${values.month}-${values.day}`
    setLoading(() => !loading)
    const data = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
        username: values.username,
        birthday: birthday,
        sQuestion: securityQuestion,
        sAnswer: values.sAnswer,
        gender: gender,
      }),
    })
    const json = await data.json()
    console.log("Response = ", json)
  }
  return (
    <Centered>
      <Form onSubmit={handleSignUp}>
        <FormControl>
          <h1>Create Account</h1>
          <Container>
            <Input
              className={`${nameError ? "error" : ""}`}
              id="firstName"
              width="300px"
              onChange={handleChange}
              name="username"
              placeholder="Name"
            ></Input>
            <br />
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
                id="confirmPw"
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
              id="gender-select"
              width="110px"
              icon={""}
              className="gender-select"
              onChange={(e) => {
                setGender(e.target.value)
              }}
            >
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
                id="month"
                name="month"
                onChange={handleChange}
                marginLeft=".5rem"
                width="120px"
              >
                <option disabled>Month</option>
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
                id="day"
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
                id="year"
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
              id="sQuestion"
              paddingRight="10px"
              name="sQuestion"
              width="500px"
              onChange={(e) => {
                setSecurityQuestion(e.target.value)
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
            <Input
              onChange={handleChange}
              id="sAnswer"
              name="sAnswer"
              placeholder="Answer"
            ></Input>
          </Container>
          <br />
          {/* {!isError ? (
            <FormHelperText>{emailError}</FormHelperText>
          ) : (
            <FormHelperText>Required</FormHelperText>
          )} */}
          <Centered2>
            <Button
              size="md"
              type="submit"
              colorScheme="purple"
              variant="solid"
            >
              Signup
            </Button>
          </Centered2>
        </FormControl>
        <div className="behind-bg"></div>
      </Form>
    </Centered>
  )
}

export default Signup
