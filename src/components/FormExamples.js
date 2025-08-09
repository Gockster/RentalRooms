// Example usage of template field labels similar to your pattern:
// t('templates.fieldLabels.contractingAuthorityId')

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// Example 1: Using the exact pattern you mentioned
export function PropertyManagerForm() {
  const { t } = useLanguage();
  
  return (
    <form>
      <div className="form-group">
        <label>
          {t.templates.fieldLabels.contractingAuthorityId}
        </label>
        <input 
          type="text" 
          placeholder={t.templates.fieldLabels.contractingAuthorityId}
        />
      </div>
      
      <div className="form-group">
        <label>
          {t.templates.fieldLabels.propertyId}
        </label>
        <input 
          type="text" 
          placeholder={t.templates.fieldLabels.propertyId}
        />
      </div>
      
      <div className="form-group">
        <label>
          {t.templates.fieldLabels.pricePerNight}
        </label>
        <input 
          type="number" 
          placeholder={t.templates.fieldLabels.pricePerNight}
        />
      </div>
      
      <button type="submit">
        {t.templates.buttons.submit}
      </button>
    </form>
  );
}

// Example 2: User Registration Form
export function UserRegistrationForm() {
  const { t } = useLanguage();
  
  return (
    <form>
      <h2>User Registration</h2>
      
      <div className="form-row">
        <div className="form-group">
          <label>{t.templates.fieldLabels.firstName}</label>
          <input type="text" required />
          <small>{t.templates.messages.required}</small>
        </div>
        
        <div className="form-group">
          <label>{t.templates.fieldLabels.lastName}</label>
          <input type="text" required />
        </div>
      </div>
      
      <div className="form-group">
        <label>{t.templates.fieldLabels.email}</label>
        <input type="email" required />
        <small>{t.templates.messages.invalidEmail}</small>
      </div>
      
      <div className="form-group">
        <label>{t.templates.fieldLabels.password}</label>
        <input type="password" required />
      </div>
      
      <div className="form-group">
        <label>{t.templates.fieldLabels.confirmPassword}</label>
        <input type="password" required />
        <small>{t.templates.messages.passwordMismatch}</small>
      </div>
      
      <div className="form-actions">
        <button type="button">{t.templates.buttons.cancel}</button>
        <button type="submit">{t.templates.buttons.submit}</button>
      </div>
    </form>
  );
}

// Example 3: Contact Form
export function ContactForm() {
  const { t } = useLanguage();
  
  return (
    <form>
      <h2>Contact Us</h2>
      
      <div className="form-group">
        <label>{t.templates.fieldLabels.subject}</label>
        <input type="text" required />
      </div>
      
      <div className="form-group">
        <label>{t.templates.fieldLabels.email}</label>
        <input type="email" required />
      </div>
      
      <div className="form-group">
        <label>{t.templates.fieldLabels.phoneNumber}</label>
        <input type="tel" />
      </div>
      
      <div className="form-group">
        <label>{t.templates.fieldLabels.message}</label>
        <textarea rows="5" required />
      </div>
      
      <button type="submit">
        {t.templates.buttons.submit}
      </button>
    </form>
  );
}

// Example 4: Property Search Form
export function PropertySearchForm() {
  const { t } = useLanguage();
  
  return (
    <form>
      <h2>Search Properties</h2>
      
      <div className="form-row">
        <div className="form-group">
          <label>{t.templates.fieldLabels.location}</label>
          <input type="text" placeholder={t.templates.fieldLabels.location} />
        </div>
        
        <div className="form-group">
          <label>{t.templates.fieldLabels.priceRange}</label>
          <select>
            <option value="">{t.gallery.priceOptions.all}</option>
            <option value="low">{t.gallery.priceOptions.low}</option>
            <option value="mid">{t.gallery.priceOptions.mid}</option>
            <option value="high">{t.gallery.priceOptions.high}</option>
          </select>
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label>{t.templates.fieldLabels.checkIn}</label>
          <input type="date" />
        </div>
        
        <div className="form-group">
          <label>{t.templates.fieldLabels.checkOut}</label>
          <input type="date" />
        </div>
      </div>
      
      <div className="form-group">
        <label>{t.templates.fieldLabels.guests}</label>
        <select>
          <option value="1">1 {t.templates.fieldLabels.guests}</option>
          <option value="2">2 {t.templates.fieldLabels.guests}</option>
          <option value="3">3 {t.templates.fieldLabels.guests}</option>
          <option value="4">4+ {t.templates.fieldLabels.guests}</option>
        </select>
      </div>
      
      <button type="submit">
        {t.templates.buttons.search}
      </button>
    </form>
  );
}

/*
Usage Examples:
================

1. Direct field label access:
   {t.templates.fieldLabels.contractingAuthorityId}
   // English: "Property Manager ID"
   // Greek: "ID Διαχειριστή Ακινήτου"

2. Button labels:
   {t.templates.buttons.submit}
   // English: "Submit"  
   // Greek: "Υποβολή"

3. Validation messages:
   {t.templates.messages.required}
   // English: "This field is required"
   // Greek: "Αυτό το πεδίο είναι υποχρεωτικό"

4. Complex form fields:
   {t.templates.fieldLabels.checkInDate}
   // English: "Check-in Date"
   // Greek: "Ημερομηνία Άφιξης"

5. Address fields:
   {t.templates.fieldLabels.address}
   {t.templates.fieldLabels.city}
   {t.templates.fieldLabels.zipCode}

6. Payment fields:
   {t.templates.fieldLabels.cardNumber}
   {t.templates.fieldLabels.expiryDate}
   {t.templates.fieldLabels.cvv}
*/

export default { PropertyManagerForm, UserRegistrationForm, ContactForm, PropertySearchForm };
