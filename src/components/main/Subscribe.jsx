import { useState } from 'react';
import './Subscribe.css';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Subscribe = () => {
  const [subscribe, setSubscribe] = useState(false);
  const [formData, setFormData] = useState({ email: '' });
  const [error, setError] = useState({ email: '' });

  const validateForm = () => {
    const errors = {};
    let isValid = true;
    if (!formData.email) {
      isValid = false;
      errors.email = 'Please enter your email';
    } else if (!emailRegex.test(formData.email.trim())) {
      isValid = false;
      errors.email = 'Please enter a valid email address';
    }
    setError(errors);
    return isValid;
  };
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, email: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setError({});
      setSubscribe(true);
    }
    console.log(error);
    console.log(subscribe);
  };
  return (
    <section className="subscribe">
      <h3 className="subscribe__title">
        Subscribe to get information, latest news and other interesting events!
      </h3>

      {subscribe ? (
        <div className="subscribe__feedback"> Thank you for your subscription!</div>
      ) : (
        <form action="" className="subscribe__form" onSubmit={handleSubmit}>
          <div className="subscribe__form-content">
            <input
              type="text"
              className="subscribe__email"
              placeholder="Your Email"
              name="email"
              onChange={handleChange}
              // style={error.email && errorInputStyle}
            />
            <button className="subscribe__button">Subscribe</button>
          </div>

          {error.email && <span className="form__subscribe—error">{error.email}</span>}
        </form>
      )}
    </section>
  );
};
export default Subscribe;
