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
                    title: "Cycladic Accommodations",
                    subtitle: "Authentic island living with modern comforts"
                },
                {
                    title: "Cozy Apartments",
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
                    title: "Seaside Mykonos Retreats",
                    subtitle: "Charming rooms just steps from the Aegean waves"
                }
            ],
            description: "Discover comfortable and affordable rooms in prime locations. Your home away from home awaits with modern amenities and exceptional service.",
            searchPlaceholder: "Where would you like to stay?",
            searchButton: "Search Rooms",
            exploreButton: "Explore Rooms",
            features: [
                "Verified Properties",
                "Best Prices",
                "Secure Booking"
            ]
        },
        // Welcome Section
        welcome: {
            title: "WELCOME TO NANA'S ROOMS",
            subtitle: "IN MYKONOS CHORA.",
            description: "We are delighted to host you for unforgettable holidays by the sea,"
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
                    id: "aries-suite",
                    title: "Aries Suite",
                    description: "Elegant suite inspired by the Aries constellation."
                },
                {
                    id: "venus-suite",
                    title: "Venus Suite",
                    description: "Luxurious suite inspired by the goddess of love and beauty."
                } 
            ],
            amenityLabels: {
                "WiFi": "WiFi",
                "Kitchen": "Kitchen",
                "City View": "City View",
                "Air Conditioning": "Air Conditioning",
                "Workspace": "Workspace",
                "Room Service": "Room Service",
                "Business Center": "Business Center",
                "Balcony": "Balcony",
                "Parking": "Parking",
                "Gym Access": "Gym Access",
                "Swimming Pool": "Swimming Pool",
                "Breakfast": "Breakfast"
            },
            availabilityLabels: {
                "Available": "Available",
                "Booked": "Booked",
                "Unavailable": "Unavailable"
            },
            priceLabels: {
                "night": "/night",
                "per": "per",
                "from": "from"
            }
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
                phone: "+30 6955217820",
                address: "Mykonos Chora"
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
            brandName: "Nana's Rooms",
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
                    title: "Καλωσήρθατε στο Nana's Rooms",
                    subtitle: "Αυθεντικά καταλύματα Μυκόνου στην καρδιά της Χώρας"
                },
                {
                    title: "Άνετα & Κομψά",
                    subtitle: "Μοντέρνες ανέσεις με παραδοσιακή κυκλαδίτικη γοητεία"
                },
                {
                    title: "Τέλεια Τοποθεσία",
                    subtitle: "Λίγα βήματα από τη ζωντανή νυχτερινή ζωή της Μυκόνου"
                },
                {
                    title: "Ζεστά Καταφύγια",
                    subtitle: "Το σπίτι σας μακριά από το σπίτι στην όμορφη Μύκονο"
                },
                {
                    title: "Νησιώτικη Ζωή",
                    subtitle: "Βιώστε τη μαγεία της ελληνικής νησιώτικης φιλοξενίας"
                },
                {
                    title: "Αξέχαστες Διαμονές",
                    subtitle: "Δημιουργήστε αναμνήσεις που θα διαρκέσουν για πάντα"
                }
            ],
            description: "Ανακαλύψτε άνετα και προσιτά δωμάτια σε προνομιακές τοποθεσίες. Το σπίτι μακριά από το σπίτι σας περιμένει με μοντέρνες ανέσεις και εξαιρετική εξυπηρέτηση.",
            searchPlaceholder: "Πού θα θέλατε να μείνετε;",
            searchButton: "Αναζήτηση Δωματίων",
            exploreButton: "Εξερεύνηση Δωματίων",
            features: [
                "Επιβεβαιωμένα Ακίνητα",
                "Καλύτερες Τιμές",
                "Ασφαλής Κράτηση"
            ]
        },
        // Welcome Section
        welcome: {
            title: "ΚΑΛΩΣ ΗΛΘΑΤΕ ΣΤΟ NANA'S ROOMS",
            subtitle: "ΣΤΗΝ ΧΩΡΑ ΜΥΚΟΝΟΥ.",
            description: "Χαρά μας να σας φιλοξενήσουμε για αξέχαστες διακοπές στο κοσμοπολίτικο νησί της Μυκόνου."
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
                    id: "aries-suite",
                    title: "Aries Suite",
                    description: "Κομψή σουίτα εμπνευσμένη από τον αστερισμό του Κριού."
                },
                {
                    id: "venus-suite",
                    title: "Venus Suite",
                    description: "Πολυτελής σουίτα εμπνευσμένη από τη θεά του έρωτα και της ομορφιάς."
                }
            ],
            amenityLabels: {    
                "WiFi": "WiFi",
                "Kitchen": "Κουζίνα",
                "City View": "Θέα Πόλης",
                "Air Conditioning": "Κλιματισμός",
                "Workspace": "Χώρος Εργασίας",
                "Room Service": "Room Service",
                "Business Center": "Κέντρο Επιχειρήσεων",
                "Balcony": "Μπαλκόνι",
                "Parking": "Πάρκινγκ",
                "Gym Access": "Πρόσβαση Γυμναστηρίου",
                "Swimming Pool": "Πισίνα",
                "Breakfast": "Πρωινό"
            },
            availabilityLabels: {
                "Available": "Διαθέσιμο",
                "Booked": "Κλειστό",
                "Unavailable": "Μη Διαθέσιμο"
            },
            priceLabels: {
                "night": "/βράδυ",
                "per": "ανά",
                "from": "από"
            }
        },
        // Footer
        footer: {
            brandName: "Nana's Rooms",
            description: "Ο αξιόπιστος συνεργάτης σας για την εύρεση του τέλειου καταλύματος",
            subDescription: "Άνετες διαμονές, προσιτές τιμές.",
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
                phone: "+30 6955217820",
                address: "Μύκονος Χώρα"
            },
            copyright: "© 2025 Nana's Rooms. Όλα τα δικαιώματα διατηρούνται."
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
    // Read from localStorage or default to 'en'
    const getInitialLanguage = () => {
        const stored = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
        return stored || 'en';
    };
    const [currentLanguage, setCurrentLanguage] = useState(getInitialLanguage);

    const switchLanguage = (lang) => {
        setCurrentLanguage(lang);
        if (typeof window !== 'undefined') {
            localStorage.setItem('language', lang);
        }
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
