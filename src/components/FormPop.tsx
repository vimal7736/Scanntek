import React from 'react';
import './FormPopup.css';

interface FormPopupProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
  };
  onClose: () => void;
}

const FormPopup: React.FC<FormPopupProps> = ({ formData, onClose }) => {
  return (
    <div className="form-popup">
      <div className="popup-content">
        <h2>Form Submitted</h2>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>Message: {formData.message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default FormPopup;
