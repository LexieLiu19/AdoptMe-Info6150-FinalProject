import './AdoptForm.css';

import { useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(\+?1)?[-.\s]?\(?[2-9]\d{2}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

const AdoptForm = ({ onSubmit, onClose, setFormData, formData, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const errorInputStyle = { border: '1px solid red' };

  return (
    <form className="modal__form" onSubmit={onSubmit}>
      <div className="modal__form-fields">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          style={errors.name && errorInputStyle}
        />
        {errors.name && <span className="form__error">{errors.name}</span>}
      </div>
      <div className="modal__form-fields">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          style={errors.email && errorInputStyle}
        />
        {errors.email && <span className="form__error">{errors.email}</span>}
      </div>
      <div className="modal__form-fields">
        <label htmlFor="confirmEmail">Confirm Email:</label>
        <input
          type="text"
          name="confirmEmail"
          id="confirmEmail"
          value={formData.confirmEmail}
          onChange={handleChange}
          style={errors.confirmEmail && errorInputStyle}
        />
        {errors.confirmEmail && <span className="form__error">{errors.confirmEmail}</span>}
      </div>
      <div className="modal__form-fields ">
        <label htmlFor="address">Address:</label>
        <textarea
          name="address"
          id="address"
          value={formData.address}
          onChange={handleChange}
          style={errors.address && errorInputStyle}
        />
        {errors.address && <span className="form__error">{errors.address}</span>}
      </div>
      <div className="modal__form-fields">
        <label htmlFor="telephone">Phone Number:</label>
        <input
          type="text"
          name="telephone"
          id="telephone"
          value={formData.telephone}
          onChange={handleChange}
          style={errors.telephone && errorInputStyle}
        />
        {errors.telephone && <span className="form__error">{errors.telephone}</span>}
      </div>

      <div className="modal__form-buttons">
        <button
          className="modal__form-button modal__button-submit"
          type="submit"
          onSubmit={onSubmit}
        >
          Submit
        </button>
        <button className="modal__form-button modal__button-cancel" type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};
export default AdoptForm;
