import React, { useState } from "react";

interface FormState {
  name: string;
  email: string;
  password: string;
}

interface FormErrors {
  name: string;
  email: string;
  password: string;
}

const RegistrationForm: React.FC = () => {
  // State for form fields
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    password: "",
  });

  // State for form validation errors
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    password: "",
  });

  // Handler to update form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    let isValid = true;
    const newErrors: FormErrors = {
      name: "",
      email: "",
      password: "",
    };

    // Validate name
    if (formState.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formState.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    // Validate password
    if (formState.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", formState);
      // Reset form
      setFormState({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return (
          <div className="bg-orange-400 h-52 mt-6 p-5 mx-80 rounded-lg text-center">
    <form onSubmit={handleSubmit}>
      <div className="">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div className="mt-3 rounded-md">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="Enter your mail"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div className="mt-3">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button className="mt-3 bg-blue-400 p-2 rounded-md" type="submit">Register</button>
    </form>
    </div>
  );
};

export default RegistrationForm;
