import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/main.css';

export default function BookingForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: '1',
    roomType: '',
    specialRequests: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking form submitted:', formData);
    alert(t.templates.messages.bookingSuccess);
  };

  return (
    <div className="booking-form-container">
      <h2 className="form-title">{t.templates.fieldLabels.contractingAuthorityId} - Booking Form</h2>
      
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">
              {t.templates.fieldLabels.firstName} *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              placeholder={t.templates.fieldLabels.firstName}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">
              {t.templates.fieldLabels.lastName} *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              placeholder={t.templates.fieldLabels.lastName}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">
              {t.templates.fieldLabels.email} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder={t.templates.fieldLabels.email}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phoneNumber">
              {t.templates.fieldLabels.phoneNumber}
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder={t.templates.fieldLabels.phoneNumber}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="checkInDate">
              {t.templates.fieldLabels.checkInDate} *
            </label>
            <input
              type="date"
              id="checkInDate"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="checkOutDate">
              {t.templates.fieldLabels.checkOutDate} *
            </label>
            <input
              type="date"
              id="checkOutDate"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="numberOfGuests">
              {t.templates.fieldLabels.numberOfGuests}
            </label>
            <select
              id="numberOfGuests"
              name="numberOfGuests"
              value={formData.numberOfGuests}
              onChange={handleInputChange}
            >
              <option value="1">1 {t.templates.fieldLabels.guests}</option>
              <option value="2">2 {t.templates.fieldLabels.guests}</option>
              <option value="3">3 {t.templates.fieldLabels.guests}</option>
              <option value="4">4 {t.templates.fieldLabels.guests}</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="roomType">
              {t.templates.fieldLabels.roomType}
            </label>
            <select
              id="roomType"
              name="roomType"
              value={formData.roomType}
              onChange={handleInputChange}
            >
              <option value="">{t.templates.fieldLabels.roomType}</option>
              <option value="studio">Studio</option>
              <option value="deluxe">Deluxe Suite</option>
              <option value="family">Family Room</option>
              <option value="executive">Executive Room</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="specialRequests">
            {t.templates.fieldLabels.specialRequests}
          </label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleInputChange}
            rows="3"
            placeholder={t.templates.fieldLabels.specialRequests}
          />
        </div>

        <div className="form-actions">
          <button type="button" className="btn-secondary">
            {t.templates.buttons.cancel}
          </button>
          <button type="submit" className="btn-primary">
            {t.templates.buttons.book}
          </button>
        </div>
      </form>
    </div>
  );
}
