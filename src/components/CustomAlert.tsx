import React, { useState } from "react";
import "./customalert.css"; 
import { log } from "console";

interface CustomAlertProps {
  message: string;
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  const formFields = message
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line); 

  return (
    <div className={`custom-alert ${isVisible ? "visible" : "hidden"}`}>
      <h2 className="custom-alert-content">Form Submitted</h2>
      <div className="form-values">
        {formFields.map((field, index) => (
          <p key={index}>{field}</p>
        ))}
      </div>
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default CustomAlert;
