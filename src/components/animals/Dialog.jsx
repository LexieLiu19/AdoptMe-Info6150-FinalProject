import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import AdoptForm from './AdoptForm';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(\+?1)?[-.\s]?\(?[2-9]\d{2}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

const Dialog = ({ dialogRef }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    address: '',
    telephone: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!formData.name) {
      isValid = false;
      errors.name = 'Please enter your name';
    }

    if (!formData.email) {
      isValid = false;
      errors.email = 'Please enter your email address';
    } else if (!emailRegex.test(formData.email.trim())) {
      isValid = false;
      errors.email = 'please enter a valid email address';
    }

    if (!formData.confirmEmail) {
      isValid = false;
      errors.confirmEmail = 'Please confirm your email address.';
    } else if (formData.confirmEmail.trim() !== formData.email.trim()) {
      isValid = false;
      errors.confirmEmail = 'Email addresses do not match.';
    }

    if (!formData.address.trim()) {
      isValid = false;
      errors.address = 'Please enter your address.';
    }

    if (!formData.telephone) {
      isValid = false;
      errors.telephone = 'Please enter your telephone number.';
    } else if (!phoneRegex.test(formData.telephone)) {
      isValid = false;
      errors.telephone = 'Please enter a valid telephone number.';
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    setErrors({});
  };

  return (
    <dialog ref={dialogRef} className="modal">
      {submitted ? (
        <div className="modal__success">
          <h4 className="modal__success-title">
            <FontAwesomeIcon icon={faPaw} />
            <span>Thank you!</span>
          </h4>
          <p>
            Your application is submitted!
            <br /> 🐶 We&apos;ll contact you as soon as possible🐱
          </p>
          <button onClick={handleClose} className="modal__success-button">
            Close
          </button>
        </div>
      ) : (
        <div>
          <h4 className="modal__title">Adoption Application</h4>
          <p>
            To initiate the adoption process, kindly complete the form. Our team will get in touch
            with you shortly and provide you with the necessary details.
          </p>
          <AdoptForm
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
            validateForm={validateForm}
            onSubmit={handleSubmit}
            onClose={handleClose}
          />
        </div>
      )}
    </dialog>
  );
};
export default Dialog;
