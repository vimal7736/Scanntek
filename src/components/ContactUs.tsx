import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactUs.css";
import CustomAlert from "./CustomAlert";
import mapHere from "../images/mapHere.png";
import Form from "./Form";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
const formatFormValues = (values: FormValues): string => {
  const formattedMessage = `
    First Name: ${values.firstName}
    Last Name: ${values.lastName}
    Email: ${values.email}
    Phone: ${values.phone}
    Message: ${values.message}
  `;

  return formattedMessage;
};

const ContactUs: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [showAlert, setShowAlert] = useState(false);
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Partial<FormValues> = {};
    if (!formValues.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!formValues.lastName) {
      newErrors.lastName = "Last name is required";
    }
    if (!formValues.email) {
      newErrors.email = "Email is required";
    }
    if (!formValues.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowAlert(true);
    }
  };

  const mapUrl = `https://maps.sygic.com/#/?map=14,11.532002,75.615034&item=poi:28331398`;

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>

      <div className="contact-info">
        <h3>Any question or remarks? Just write us a message!</h3>
      </div>

      <br />
      <br />

      <div className="contact-form"  style={{  overflow: "hidden" }}>
        <div style={{ display: "flex" }}>
          <div className="address">
            <h3>Our address</h3>
            <h4>connect with us</h4>

            <div className="info">
              <div className="contact-detail">
                <FaPhone style={{ marginRight: "34px" }} /> +91-9072700085
              </div>
              <br />
              <div className="contact-detail">
                <FaEnvelope style={{ marginRight: "34px" }} /> info@canntek.com
              </div>
              <br />
              <div className="contact-detail">
                <FaMapMarkerAlt
                  style={{ marginRight: "34px", width: "24px", height: "" }}
                />{" "}
                2nd-floor, Kedhar Tower Puthiyapalam, Calicut Pin: 673002
              </div>
            </div>
          </div>
          <div>
            <div className="responsive-element" >
              <Form  />
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-container contact-form">
        <a
          href="https://scanntek.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mapHere} alt=""  style={{margin:"-10px" , marginLeft:"-50px"}}/>
        </a>
      </div>


      {showAlert && (
        <CustomAlert
          message={formatFormValues(formValues)}
          onClose={handleCloseAlert} 
        />
      )}
    </div>
  );
};

export default ContactUs;
