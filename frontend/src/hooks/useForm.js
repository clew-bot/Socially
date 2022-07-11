import React, { useState } from 'react'

export const useForm = (initialValues = "") => {
  const [values, setValues] = useState(initialValues); 
  console.log(values)
  const handleInputChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value});
  }

  return [values, handleInputChange]
}