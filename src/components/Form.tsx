import React, { useState, ChangeEvent, FocusEvent } from "react";
import "./Form.css";
import { FaArrowUp, FaClosedCaptioning } from "react-icons/fa";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };


 

  const validateForm = () => {
    const newErrors = { ...errors };

    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone: string) => {
    return /^\d{10}$/.test(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      setIsSubmitted(true);
    }
  };

  const labelStyle = {
    color: "#FF0000", 
  };

  const placeholderStyle = {
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-row">
        <div>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name"
            className="input-field"
          />
          {errors.firstName && (
            <div className="error-message" style={{ color: "red", fontSize: "12px", marginRight: "100px" }}>
              {errors.firstName}
            </div>
          )}
        </div>
        <label className={`label ${formData.firstName && "focused"}`} style={labelStyle}>
          First Name
        </label>

        <div>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name"
            className="input-field"
          />
          {errors.lastName && (
            <div className="error-message" style={{ color: "red", fontSize: "12px", marginRight: "100px" }}>{errors.lastName}</div>
          )}
        </div>
        <label className={`label ${formData.lastName && "focused"}`} style={labelStyle}>
          Last Name
        </label>
      </div>
      <div className="input-row">
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="email-phone-input"
            placeholder="Email"
          />
          {errors.email && <div className="error-message" style={{ color: "red", fontSize: "12px", marginRight: "100px" }}>{errors.email}</div>}
        </div>
        <label className={`label ${formData.email && "focused"}`} style={labelStyle}>
          Email
        </label>
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone number"
            className="email-phone-input"
          />
          {errors.phone && <div className="error-message" style={{ color: "red", fontSize: "12px", marginRight: "100px" }}>{errors.phone}</div>}
        </div>
        <label className={`label ${formData.phone && "focused"}`} style={labelStyle}>
          Phone
        </label>
      </div>
      <div className="input-row">
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="textarea-field"
            placeholder="Enter your message"
            style={placeholderStyle}
          />
          {errors.message && (
            <div className="error-message " style={{ color: "red", fontSize: "12px", marginRight: "100px" }}>{errors.message}</div>
          )}
        </div>

        <label className={`label ${formData.message && "focused"}`} style={labelStyle}>
          Message
        </label>
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
      <div style={{ textAlign: "center",  backgroundColor:"black"  }}>
  {isSubmitted && (
   <div style={{ textAlign: "center", color: "black"  }}>
   {isSubmitted && (
     <div className="success-popup">
       <h2>Api Required</h2>
       <h3 >Entered Information:</h3>
       <ul>
         <li>First Name: {formData.firstName}</li>
         <li>Last Name: {formData.lastName}</li>
         <li>Email: {formData.email}</li>
         <li>Phone: {formData.phone}</li>
         <li>Message: {formData.message}</li>
       </ul>
       <button className="close-button" onClick={() => setIsSubmitted(false)}>
         <FaArrowUp/>
       </button>
     </div>
   )}
 </div>
 
  )}
</div>

    </form>
  );
};

export default Form;
