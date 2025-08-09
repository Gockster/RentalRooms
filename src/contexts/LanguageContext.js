import React, { createContext, useContext, useState } from 'react';

// Create the Language Context
const LanguageContext = createContext();

// Language texts for all components
const translations = {
  en: {
    // Navbar
    navbar: {
      brandName: "Nana's Rooms",
      mobile: "📱 Mobile",
      maps: "🗺️ Maps",
      language: "🌐 EN",
      selectLang: "Select Language",
      callUs: "Call us",
      viewOnMaps: "View on Google Maps"
    },
    // Hero section
    hero: {
      slides: [
        {
          title: "Luxury Modern Suites",
          subtitle: "Premium accommodations with stunning city views"
        },
        {
          title: "Cozy Studio Apartments",
          subtitle: "Perfect for solo travelers and digital nomads"
        },
        {
          title: "Family-Friendly Spaces",
          subtitle: "Spacious accommodations for groups and families"
        },
        {
          title: "Contemporary Living",
          subtitle: "Modern amenities in prime locations"
        },
        {
          title: "Executive Rooms",
          subtitle: "Professional stays with business amenities"
        }
      ],
      description: "Discover comfortable and affordable rooms in prime locations. Your home away from home awaits with modern amenities and exceptional service.",
      searchPlaceholder: "Where would you like to stay?",
      searchButton: "Search Rooms",
      features: [
        "Verified Properties",
        "Best Prices",
        "Secure Booking"
      ]
    },
    // Room Gallery
    gallery: {
      heading: "Find Your Perfect Room",
      searchPlaceholder: "Search rooms...",
      priceFilter: "Price Range:",
      priceOptions: {
        all: "All Prices",
        low: "Under $100",
        mid: "$100 - $150",
        high: "Over $150"
      },
      resultsCount: (count) => `${count} room${count !== 1 ? 's' : ''} found`,
      viewButton: "View Details",
      bookButton: "Book Now",
      noResults: {
        title: "No rooms found",
        subtitle: "Try adjusting your search criteria"
      },
      rooms: [
        {
          title: "Deluxe Studio Suite",
          description: "Modern studio with panoramic city views and premium amenities."
        },
        {
          title: "Executive Business Room",
          description: "Perfect for business travelers with workspace and meeting facilities."
        },
        {
          title: "Family Comfort Suite",
          description: "Spacious family room with separate living area and kitchen."
        },
        {
          title: "Premium Luxury Suite",
          description: "Ultimate luxury experience with premium furnishings and services."
        },
        {
          title: "Urban Loft Style",
          description: "Industrial chic design with modern comforts in downtown location."
        },
        {
          title: "Cozy Minimalist Room",
          description: "Clean, minimalist design perfect for extended stays."
        }
      ]
    },
    // Footer
    footer: {
      brandName: "Nana's Rooms",
      description: "Your trusted partner in finding the perfect accommodation. Comfortable stays, affordable prices.",
      quickLinks: {
        title: "Quick Links",
        home: "Home",
        rooms: "Rooms",
        about: "About Us",
        contact: "Contact"
      },
      support: {
        title: "Support",
        helpCenter: "Help Center",
        safety: "Safety",
        cancellation: "Cancellation",
        terms: "Terms & Conditions"
      },
      contactInfo: {
        title: "Contact Info",
        email: "info@nanasrooms.com",
        phone: "+30 123 456 7890",
        address: "123 Main St, Athens"
      },
      copyright: "© 2025 Nana's Rooms. All rights reserved."
    },
    // Templates and Form Field Labels
    templates: {
      fieldLabels: {
        // User/Guest Information
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        phoneNumber: "Phone Number",
        nationality: "Nationality",
        dateOfBirth: "Date of Birth",
        
        // Booking Information
        checkInDate: "Check-in Date",
        checkOutDate: "Check-out Date",
        numberOfGuests: "Number of Guests",
        roomType: "Room Type",
        specialRequests: "Special Requests",
        
        // Address Information
        address: "Street Address",
        city: "City",
        state: "State/Province",
        zipCode: "ZIP/Postal Code",
        country: "Country",
        
        // Payment Information
        cardNumber: "Card Number",
        expiryDate: "Expiry Date",
        cvv: "CVV",
        cardholderName: "Cardholder Name",
        billingAddress: "Billing Address",
        
        // Property Management
        contractingAuthorityId: "Property Manager ID",
        propertyId: "Property ID",
        roomId: "Room ID",
        amenities: "Amenities",
        pricePerNight: "Price per Night",
        availability: "Availability",
        
        // Search & Filter
        location: "Location",
        priceRange: "Price Range",
        checkIn: "Check-in",
        checkOut: "Check-out",
        guests: "Guests",
        
        // Contact Form
        subject: "Subject",
        message: "Message",
        contactReason: "Reason for Contact",
        
        // User Account
        username: "Username",
        password: "Password",
        confirmPassword: "Confirm Password",
        currentPassword: "Current Password",
        newPassword: "New Password"
      },
      buttons: {
        submit: "Submit",
        cancel: "Cancel",
        save: "Save",
        delete: "Delete",
        edit: "Edit",
        search: "Search",
        book: "Book Now",
        reserve: "Reserve",
        confirm: "Confirm",
        reset: "Reset",
        back: "Back",
        next: "Next",
        finish: "Finish"
      },
      messages: {
        required: "This field is required",
        invalidEmail: "Please enter a valid email address",
        invalidPhone: "Please enter a valid phone number",
        passwordMismatch: "Passwords do not match",
        bookingSuccess: "Booking confirmed successfully!",
        bookingError: "Booking failed. Please try again.",
        updateSuccess: "Information updated successfully",
        deleteConfirm: "Are you sure you want to delete this item?"
      }
    }
  },
  gr: {
    // Navbar
    navbar: {
      brandName: "Δωμάτια της Νάνας",
      mobile: "📱 Κινητό",
      maps: "🗺️ Χάρτες",
      language: "🌐 ΕΛ",
      selectLang: "Επιλογή Γλώσσας",
      callUs: "Καλέστε μας",
      viewOnMaps: "Προβολή στο Google Maps"
    },
    // Hero section
    hero: {
      slides: [
        {
          title: "Πολυτελείς Μοντέρνες Σουίτες",
          subtitle: "Premium καταλύματα με εκπληκτική θέα στην πόλη"
        },
        {
          title: "Άνετα Studio Διαμερίσματα",
          subtitle: "Ιδανικά για μοναχικούς ταξιδιώτες και ψηφιακούς νομάδες"
        },
        {
          title: "Οικογενειακοί Χώροι",
          subtitle: "Ευρύχωροι χώροι για ομάδες και οικογένειες"
        },
        {
          title: "Σύγχρονη Διαβίωση",
          subtitle: "Μοντέρνες ανέσεις σε προνομιακές τοποθεσίες"
        },
        {
          title: "Executive Δωμάτια",
          subtitle: "Επαγγελματικές διαμονές με επιχειρηματικές ανέσεις"
        }
      ],
      description: "Ανακαλύψτε άνετα και προσιτά δωμάτια σε προνομιακές τοποθεσίες. Το σπίτι μακριά από το σπίτι σας περιμένει με μοντέρνες ανέσεις και εξαιρετική εξυπηρέτηση.",
      searchPlaceholder: "Πού θα θέλατε να μείνετε;",
      searchButton: "Αναζήτηση Δωματίων",
      features: [
        "Επιβεβαιωμένα Ακίνητα",
        "Καλύτερες Τιμές",
        "Ασφαλής Κράτηση"
      ]
    },
    // Room Gallery
    gallery: {
      heading: "Βρείτε το Τέλειο Δωμάτιό σας",
      searchPlaceholder: "Αναζήτηση δωματίων...",
      priceFilter: "Εύρος Τιμών:",
      priceOptions: {
        all: "Όλες οι Τιμές",
        low: "Κάτω από $100",
        mid: "$100 - $150",
        high: "Πάνω από $150"
      },
      resultsCount: (count) => `Βρέθηκαν ${count} δωμάτι${count !== 1 ? 'α' : 'ο'}`,
      viewButton: "Προβολή Λεπτομερειών",
      bookButton: "Κράτηση Τώρα",
      noResults: {
        title: "Δεν βρέθηκαν δωμάτια",
        subtitle: "Δοκιμάστε να προσαρμόσετε τα κριτήρια αναζήτησης"
      },
      rooms: [
        {
          title: "Deluxe Studio Σουίτα",
          description: "Μοντέρνο studio με πανοραμική θέα στην πόλη και premium ανέσεις."
        },
        {
          title: "Executive Business Δωμάτιο",
          description: "Ιδανικό για επαγγελματίες ταξιδιώτες με χώρο εργασίας και εγκαταστάσεις συναντήσεων."
        },
        {
          title: "Οικογενειακή Comfort Σουίτα",
          description: "Ευρύχωρο οικογενειακό δωμάτιο με ξεχωριστό σαλόνι και κουζίνα."
        },
        {
          title: "Premium Πολυτελής Σουίτα",
          description: "Απόλυτη εμπειρία πολυτέλειας με premium έπιπλα και υπηρεσίες."
        },
        {
          title: "Αστικό Loft Στυλ",
          description: "Βιομηχανικό chic design με μοντέρνες ανέσεις σε κεντρική τοποθεσία."
        },
        {
          title: "Άνετο Minimalist Δωμάτιο",
          description: "Καθαρό, μινιμαλιστικό design ιδανικό για μακροχρόνιες διαμονές."
        }
      ]
    },
    // Footer
    footer: {
      brandName: "Δωμάτια της Νάνας",
      description: "Ο αξιόπιστος συνεργάτης σας για την εύρεση του τέλειου καταλύματος. Άνετες διαμονές, προσιτές τιμές.",
      quickLinks: {
        title: "Γρήγοροι Σύνδεσμοι",
        home: "Αρχική",
        rooms: "Δωμάτια",
        about: "Σχετικά με εμάς",
        contact: "Επικοινωνία"
      },
      support: {
        title: "Υποστήριξη",
        helpCenter: "Κέντρο Βοήθειας",
        safety: "Ασφάλεια",
        cancellation: "Ακύρωση",
        terms: "Όροι & Προϋποθέσεις"
      },
      contactInfo: {
        title: "Στοιχεία Επικοινωνίας",
        email: "info@nanasrooms.com",
        phone: "+30 123 456 7890",
        address: "123 Κεντρική, Αθήνα"
      },
      copyright: "© 2025 Δωμάτια της Νάνας. Όλα τα δικαιώματα διατηρούνται."
    },
    // Templates and Form Field Labels
    templates: {
      fieldLabels: {
        // User/Guest Information
        firstName: "Όνομα",
        lastName: "Επώνυμο",
        email: "Διεύθυνση Email",
        phoneNumber: "Αριθμός Τηλεφώνου",
        nationality: "Εθνικότητα",
        dateOfBirth: "Ημερομηνία Γέννησης",
        
        // Booking Information
        checkInDate: "Ημερομηνία Άφιξης",
        checkOutDate: "Ημερομηνία Αναχώρησης",
        numberOfGuests: "Αριθμός Επισκεπτών",
        roomType: "Τύπος Δωματίου",
        specialRequests: "Ειδικές Απαιτήσεις",
        
        // Address Information
        address: "Διεύθυνση",
        city: "Πόλη",
        state: "Περιφέρεια/Νομός",
        zipCode: "Ταχυδρομικός Κώδικας",
        country: "Χώρα",
        
        // Payment Information
        cardNumber: "Αριθμός Κάρτας",
        expiryDate: "Ημερομηνία Λήξης",
        cvv: "CVV",
        cardholderName: "Όνομα Κατόχου Κάρτας",
        billingAddress: "Διεύθυνση Χρέωσης",
        
        // Property Management
        contractingAuthorityId: "ID Διαχειριστή Ακινήτου",
        propertyId: "ID Ακινήτου",
        roomId: "ID Δωματίου",
        amenities: "Παροχές",
        pricePerNight: "Τιμή ανά Διανυκτέρευση",
        availability: "Διαθεσιμότητα",
        
        // Search & Filter
        location: "Τοποθεσία",
        priceRange: "Εύρος Τιμών",
        checkIn: "Άφιξη",
        checkOut: "Αναχώρηση",
        guests: "Επισκέπτες",
        
        // Contact Form
        subject: "Θέμα",
        message: "Μήνυμα",
        contactReason: "Λόγος Επικοινωνίας",
        
        // User Account
        username: "Όνομα Χρήστη",
        password: "Κωδικός Πρόσβασης",
        confirmPassword: "Επιβεβαίωση Κωδικού",
        currentPassword: "Τρέχων Κωδικός",
        newPassword: "Νέος Κωδικός"
      },
      buttons: {
        submit: "Υποβολή",
        cancel: "Ακύρωση",
        save: "Αποθήκευση",
        delete: "Διαγραφή",
        edit: "Επεξεργασία",
        search: "Αναζήτηση",
        book: "Κράτηση Τώρα",
        reserve: "Κράτηση",
        confirm: "Επιβεβαίωση",
        reset: "Επαναφορά",
        back: "Πίσω",
        next: "Επόμενο",
        finish: "Ολοκλήρωση"
      },
      messages: {
        required: "Αυτό το πεδίο είναι υποχρεωτικό",
        invalidEmail: "Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email",
        invalidPhone: "Παρακαλώ εισάγετε έναν έγκυρο αριθμό τηλεφώνου",
        passwordMismatch: "Οι κωδικοί δεν ταιριάζουν",
        bookingSuccess: "Η κράτηση επιβεβαιώθηκε με επιτυχία!",
        bookingError: "Η κράτηση απέτυχε. Παρακαλώ δοκιμάστε ξανά.",
        updateSuccess: "Οι πληροφορίες ενημερώθηκαν με επιτυχία",
        deleteConfirm: "Είστε σίγουροι ότι θέλετε να διαγράψετε αυτό το στοιχείο;"
      }
    }
  }
};

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const switchLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  const t = translations[currentLanguage];

  return (
    <LanguageContext.Provider value={{ currentLanguage, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
