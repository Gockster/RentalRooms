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
        // Room Details
        roomDetails: {
            aboutProperty: "About This Property",
            suiteSpecifications: "Suite Specifications",
            guests: "Guests",
            bedrooms: "Bedrooms",
            bathrooms: "Bathrooms",
            area: "Area",
            amenities: "Amenities",
            freeWifi: "Free Wi-Fi",
            airConditioning: "Air Conditioning",
            privateBathroom: "Private Bathroom",
            reception24: "24/7 Reception",
            pricingAvailability: "Pricing & Availability",
            bookYourStay: "Book Your Stay",
            propertyArea: "Property Area",
            attractions: "Attractions",
            restaurants: "Restaurants",
            beachesTransportation: "Beaches & Transportation",
            additionalInfo: "Additional Information",
            paymentPolicies: "Payment & Policies",
            contactInformation: "Contact Information",
            upToGuests: "Up to 4 guests",
            twoBedroomsTwo: "2 bedrooms",
            twoBathrooms: "2 bathrooms",
            perNight: "/night",
            priceVaryNote: "Prices may vary depending on season and availability",
            callDirectly: "Call us directly to book your stay or for any inquiries. We speak Greek, English, and Arabic.",
            available24: "Available 24/7",
            readyToBook: "Ready to Book Your Stay?",
            experienceLuxury: "Experience the luxury and comfort of Aries Suite in the heart of Mykonos. Our dedicated team is ready to assist you 24/7 to make your stay unforgettable.",
            callNow: "Call Now",
            available: "Available",
            support24: "24/7 Support",
            location: "Location",
            mykonosTown: "Mykonos Town",
            bookNowCall: "📞 Book Now - Call +30 6955217820",
            // Common room elements
            showMore: "Show More",
            showLess: "Show Less",
            more: "more",
            forBookingCall: "For booking call us on",
            pricing: "Pricing",
            size: "Size",
            roomType: "Room Type",
            bathroom: "Bathroom",
            built: "Built",
            familyRoom: "Family Room",
            privateBathroomWithShower: "1 Private Bathroom with Shower",
            size32: "32 m² size",
            size42: "42 m² size",
            // Facilities section
            facilities: "Facilities",
            entirePlace: "Entire place to yourself",
            freeWiFi: "Free WiFi",
            familyRooms: "Family rooms",
            balcony: "Balcony",
            terrace: "Terrace",
            shower: "Shower",
            bathOrShower: "Bath or Shower",
            frontDesk24: "24-hour Front Desk",
            dailyHousekeeping: "Daily Housekeeping",
            // Property descriptions - Aries
            ariesDescription1: "The entire place is yours. ARIES Suite in Mykonos offers a holiday home with comfortable accommodation featuring 42 m² of space, two bedrooms and two bathrooms.",
            ariesDescription2: "The property features 2 bathrooms with bath or shower, and free toiletries and hair dryer are provided.",
            ariesDescription3: "The reception staff speaks Arabic, Greek and English.",
            ariesDescription4: "Near ARIES Suite you will find popular attractions such as Mykonos Old Port, Mykonos Windmills and Little Venice. Mykonos Airport is 3 km away from the property.",
            // Property descriptions - Venus
            venusSubtitle: "Modern suite located at Petrou Drakopoulu 14, in the heart of Mykonos Town.",
            venusDescription1: "VENUS Suite is located at Petrou Drakopoulu 14 in the center of Mykonos Town, just 300m from Agia Anna Beach. It features a terrace, free WiFi, 24-hour front desk and ATM. The property was built in 1980 and has a balcony.",
            venusDescription2: "The air-conditioned accommodation also features 1 bathroom with shower.",
            venusDescription3: "Near VENUS Suite you will find popular attractions such as Little Venice, Archaeological Museum of Mykonos and Mykonos Old Port. Mykonos Airport is 3 km away from the property.",
            venusDescription4: "This location is especially popular with couples – they rated it 10.0 for a two-person trip.",
            // Property Area section
            whatsNearby: "What's nearby",
            restaurantsCafes: "Restaurants & Cafes",
            nearbyBeaches: "Nearby Beaches",
            nearestAirports: "Nearest Airports",
            distanceDisclaimer: "Approximate shortest walking or driving distances are shown. Actual distances may differ.",
            // Nearby Attractions
            littleVenice: "Little Venice",
            meletopoulouGarden: "Meletopoulou Municipal Garden",
            mykonosWindmills: "Mykonos Windmills",
            archaeologicalMuseum: "Archaeological Museum of Mykonos",
            fabricaSquare: "Fabrica Square",
            tholosTomb: "Tholos Tomb of Mykonos",
            armenistisLighthouse: "Armenistis Lighthouse",
            neolithicSettlement: "Neolithic Settlement of Ftelia Mykonos",
            gyziCastle: "Gyzi Castle",
            stadiumDistrict: "Stadium District",
            // Restaurants & Cafes
            cafeBarRoom101: "Cafe/Bar Room 101",
            cafeBarBoutique: "Cafe/Bar Boutique di Vito",
            cafeBarPaloma: "Cafe/Bar Paloma Bar",
            // Nearby Beaches
            agiaAnnaBeach: "Agia Anna Beach",
            agiosCharalamposBeach: "Agios Charalampos Beach",
            megaliAmmosBeach: "Megali Ammos Beach",
            korfosBeach: "Korfos Beach",
            tourlosBeach: "Tourlos Beach",
            // Nearest Airports
            mykonosAirport: "Mykonos Airport",
            syrosAirport: "Syros Airport",
            naxosAirport: "Naxos State Airport",
            // Amenities section  
            ariesSuiteAmenities: "ARIES Suite Amenities",
            mostPopularAmenities: "Most Popular Amenities",
            freeWiFiAmenity: "Free Wi-Fi",
            reception24Amenity: "24-hour Reception",
            perfectForStay: "Perfect for your stay",
            parking: "Parking",
            noParkingAvailable: "No parking available.",
            internet: "Internet",
            wifiAvailableInfo: "Wi-Fi is available throughout and is not charged.",
            kitchen: "Kitchen",
            diningTable: "Dining table",
            electricKettle: "Electric kettle",
            refrigerator: "Refrigerator",
            bedroom: "Bedroom",
            alarmClock: "Alarm clock",
            bathroom: "Bathroom",
            toiletPaper: "Toilet paper",
            towels: "Towels",
            bathOrShowerAmenity: "Bath or shower",
            privateBathroomAmenity: "Private bathroom",
            freeToiletries: "Free toiletries",
            hairDryer: "Hair dryer",
            livingRoom: "Living Room",
            diningArea: "Dining area",
            sofa: "Sofa",
            seatingArea: "Seating area",
            roomAmenities: "Room Amenities",
            socketNearBed: "Socket near bed",
            heatedClothesRack: "Heated clothes rack",
            clothesDryingRack: "Clothes drying rack",
            woodenOrParquetFlooring: "Wooden or parquet flooring",
            tiledMarbleFlooring: "Tiled/marble flooring",
            privateEntrance: "Private entrance",
            heating: "Heating",
            // Additional Services
            receptionServices: "Reception Services",
            invoiceProvision: "Invoice provision possible",
            luggageStorage: "Luggage storage (extra charge)",
            expressCheckInOut: "Express check-in/out (extra charge)",
            reception24Hours: "24-hour reception",
            cleaningServices: "Cleaning Services",
            dailyHousekeepingExtra: "Daily housekeeping (extra charge)",
            communicationLanguages: "Communication Languages",
            arabic: "Arabic",
            greek: "Greek",
            english: "English",
            // Property Rules section
            propertyRulesPolicies: "Property Rules & Policies",
            checkInOut: "Check-in/Check-out",
            checkInTime: "Check-in",
            checkOutTime: "Check-out",
            checkInHours: "From 3:00 PM to 8:00 PM",
            checkOutHours: "From 8:00 AM to 12:00 PM",
            checkInAdvanceNotice: "You must inform the property in advance about your arrival time.",
            childrenBeds: "Children and Beds",
            childrenPolicies: "Children Policies",
            childrenNotAllowed: "Children are not allowed.",
            cribExtraBedPolicies: "Crib and Extra Bed Policies",
            noCribsExtraBeds: "This property does not have cribs and extra beds available.",
            noAgeRestrictions: "No Age Restrictions",
            noAgeRestrictionsCheckIn: "There are no age restrictions for check-in.",
            propertyPolicies: "Property Policies",
            smokingPolicy: "Smoking Policy",
            smokingNotAllowed: "Smoking is not allowed.",
            parties: "Parties",
            partiesNotAllowed: "Parties or events are not allowed.",
            pets: "Pets",
            petsNotAllowed: "Pets are not allowed."
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
        // Room Details
        roomDetails: {
            aboutProperty: "Σχετικά με το Ακίνητο",
            suiteSpecifications: "Προδιαγραφές Σουίτας",
            guests: "Επισκέπτες",
            bedrooms: "Υπνοδωμάτια",
            bathrooms: "Μπάνια",
            area: "Εμβαδόν",
            amenities: "Παροχές",
            freeWifi: "Δωρεάν Wi-Fi",
            airConditioning: "Κλιματισμός",
            privateBathroom: "Ιδιωτικό Μπάνιο",
            reception24: "Ρεσεψιόν 24/7",
            // Common room elements
            showMore: "Περισσότερα",
            showLess: "Λιγότερα",
            more: "ακόμη",
            forBookingCall: "Για κράτηση καλέστε μας στο",
            pricing: "Τιμές",
            size: "Μέγεθος",
            roomType: "Τύπος Δωματίου",
            bathroom: "Μπάνιο",
            built: "Χτίστηκε",
            familyRoom: "Οικογενειακό Δωμάτιο",
            privateBathroomWithShower: "1 Ιδιωτικό Μπάνιο με Ντους",
            size32: "32 τ.μ. μέγεθος",
            size42: "42 τ.μ. μέγεθος",
            // Facilities section
            facilities: "Παροχές",
            entirePlace: "Όλο το κατάλυμα στη διάθεσή σας",
            freeWiFi: "Δωρεάν Wi-Fi",
            familyRooms: "Οικογενειακά δωμάτια",
            balcony: "Μπαλκόνι",
            terrace: "Βεράντα",
            shower: "Ντους",
            bathOrShower: "Μπανιέρα ή ντους",
            frontDesk24: "24ωρη Ρεσεψιόν",
            dailyHousekeeping: "Καθημερινή υπηρεσία καθαριότητας",
            // Property descriptions - Aries
            ariesDescription1: "Στην καρδιά του προορισμού Μύκονος Χώρα και σε μικρή απόσταση από τα σημεία ενδιαφέροντος Παραλία Αγία Άννα και Αρχαιολογικό Μουσείο Μυκόνου, το ARIES Suite προσφέρει δωρεάν WiFi, κλιματισμό και οικιακές παροχές, όπως ψυγείο και ηλεκτρικό βραστήρα. Αυτό το κατάλυμα προσφέρει πρόσβαση σε βεράντα.",
            ariesDescription2: "Το κατάλυμα έχει επίσης 2 μπάνια με μπανιέρα ή ντους, ενώ διατίθενται δωρεάν προϊόντα μπάνιου και στεγνωτήρας μαλλιών.",
            ariesDescription3: "Οι γλώσσες που μιλάει το προσωπικό στη ρεσεψιόν είναι Αραβικά, Ελληνικά και Αγγλικά.",
            ariesDescription4: "Κοντά στο ARIES Suite θα βρείτε δημοφιλή σημεία ενδιαφέροντος, όπως Παλιό Λιμάνι Μυκόνου, Ανεμόμυλοι Μυκόνου και Μικρή Βενετία. Το αεροδρόμιο Αεροδρόμιο Μυκόνου είναι 3 χλμ μακριά από το κατάλυμα.",
            // Property descriptions - Venus
            venusSubtitle: "Μοντέρνα σουίτα που βρίσκεται στην Πετρου Δρακοπούλου 14, στο κέντρο της Μυκόνου Χώρα.",
            venusDescription1: "Το VENUS Suite βρίσκεται στην Πετρου Δρακοπούλου 14 στο κέντρο της Μυκόνου Χώρα και απέχει μόλις 300μ από την Παραλία Αγία Άννα. Διαθέτει βεράντα, δωρεάν WiFi, 24ωρη ρεσεψιόν και ΑΤΜ. Το κατάλυμα χτίστηκε το 1980 και έχει μπαλκόνι.",
            venusDescription2: "Το κλιματιζόμενο κατάλυμα διαθέτει επίσης 1 μπάνιο με ντους.",
            venusDescription3: "Κοντά στο VENUS Suite θα βρείτε δημοφιλή σημεία ενδιαφέροντος, όπως Μικρή Βενετία, Αρχαιολογικό Μουσείο Μυκόνου και Παλιό Λιμάνι Μυκόνου. Το αεροδρόμιο Αεροδρόμιο Μυκόνου είναι 3 χλμ μακριά από το κατάλυμα.",
            venusDescription4: "Η τοποθεσία αρέσει ιδιαίτερα σε ζευγάρια – τη βαθμολόγησαν με 10,0 για ταξίδι δύο ατόμων.",
            // Property Area section
            whatsNearby: "Τι υπάρχει κοντά",
            restaurantsCafes: "Εστιατόρια & καφέ",
            nearbyBeaches: "Κοντινές παραλίες",
            nearestAirports: "Κοντινότερα αεροδρόμια",
            distanceDisclaimer: "Εμφανίζονται οι κατά προσέγγιση συντομότερες αποστάσεις με τα πόδια ή το αυτοκίνητο. Οι πραγματικές αποστάσεις ενδέχεται να διαφέρουν.",
            // Nearby Attractions
            littleVenice: "Μικρή Βενετία",
            meletopoulouGarden: "Δημοτικός Κήπος του Μελετόπουλου",
            mykonosWindmills: "Ανεμόμυλοι Μυκόνου",
            archaeologicalMuseum: "Αρχαιολογικό Μουσείο Μυκόνου",
            fabricaSquare: "Πλατεία Φάμπρικα",
            tholosTomb: "Θολωτοσ Ταφοσ Μυκονου",
            armenistisLighthouse: "Φάρος Αρμενιστής",
            neolithicSettlement: "Νεολιθικοσ Οικισμοσ Φτελιασ Μυκονου",
            gyziCastle: "Καστρο Γκυζη",
            stadiumDistrict: "Συνοικια Του Σταδιου",
            // Restaurants & Cafes
            cafeBarRoom101: "Καφέ/μπαρRoom 101",
            cafeBarBoutique: "Καφέ/μπαρBoutique di Vito",
            cafeBarPaloma: "Καφέ/μπαρPaloma Bar",
            // Nearby Beaches
            agiaAnnaBeach: "Παραλία Αγία Άννα",
            agiosCharalamposBeach: "Παραλία Άγιος Χαράλαμπος",
            megaliAmmosBeach: "Παραλία Μεγάλη Άμμος",
            korfosBeach: "Παραλία Κόρφος",
            tourlosBeach: "Παραλία Τούρλος",
            // Nearest Airports
            mykonosAirport: "Αεροδρόμιο Μυκόνου",
            syrosAirport: "Αεροδρόμιο Σύρου",
            naxosAirport: "Κρατικός Αερολιμένας Νάξου",
            // Amenities section
            ariesSuiteAmenities: "Παροχές του ARIES Suite",
            mostPopularAmenities: "Οι πιο δημοφιλείς παροχές",
            freeWiFiAmenity: "Δωρεάν Wi-Fi",
            reception24Amenity: "24ωρη Ρεσεψιόν",
            perfectForStay: "Ιδανικά για τη διαμονή σας",
            parking: "Χώρος στάθμευσης",
            noParkingAvailable: "Δεν υπάρχει χώρος στάθμευσης.",
            internet: "Ίντερνετ",
            wifiAvailableInfo: "Wi-Fi διατίθεται σε όλους τους χώρους και δεν χρεώνεται.",
            kitchen: "Κουζίνα",
            diningTable: "Τραπέζι φαγητού",
            electricKettle: "Ηλεκτρικός βραστήρας",
            refrigerator: "Ψυγείο",
            bedroom: "Υπνοδωμάτιο",
            alarmClock: "Ξυπνητήρι",
            bathroom: "Μπάνιο",
            toiletPaper: "Χαρτί υγείας",
            towels: "Πετσέτες",
            bathOrShowerAmenity: "Μπανιέρα ή ντους",
            privateBathroomAmenity: "Ιδιωτικό μπάνιο",
            freeToiletries: "Δωρεάν προϊόντα περιποίησης",
            hairDryer: "Στεγνωτήρας μαλλιών",
            livingRoom: "Σαλόνι",
            diningArea: "Τραπεζαρία",
            sofa: "Καναπές",
            seatingArea: "Καθιστικό",
            roomAmenities: "Παροχές Δωματίου",
            socketNearBed: "Πρίζα κοντά στο κρεβάτι",
            heatedClothesRack: "Θερμαινόμενη κρεμάστρα για ρούχα",
            clothesDryingRack: "Απλώστρα ρούχων",
            woodenOrParquetFlooring: "Ξύλινο ή παρκέ δάπεδο",
            tiledMarbleFlooring: "Δάπεδο με πλακάκια / μάρμαρο",
            privateEntrance: "Ιδιωτική είσοδος",
            heating: "Θέρμανση",
            // Additional Services
            receptionServices: "Υπηρεσίες ρεσεψιόν",
            invoiceProvision: "Δυνατότητα παροχής τιμολογίου",
            luggageStorage: "Χώρος φύλαξης αποσκευών (επιπλέον χρέωση)",
            expressCheckInOut: "Γρήγορο check in/check out (επιπλέον χρέωση)",
            reception24Hours: "24ωρη Ρεσεψιόν",
            cleaningServices: "Υπηρεσίες καθαριότητας",
            dailyHousekeepingExtra: "Καθημερινή υπηρεσία καθαριότητας (επιπλέον χρέωση)",
            communicationLanguages: "Γλώσσες επικοινωνίας",
            arabic: "Αραβικά",
            greek: "Ελληνικά",
            english: "Αγγλικά",
            // Property Rules section
            propertyRulesPolicies: "Κανονισμοί καταλύματος",
            checkInOut: "Check-in/Check-out",
            checkInTime: "Check-in",
            checkOutTime: "Check-out",
            checkInHours: "Από 3:00 μ.μ. έως 8:00 μ.μ.",
            checkOutHours: "Από 8:00 π.μ. έως 12:00 μ.μ.",
            checkInAdvanceNotice: "Θα πρέπει να ενημερώσετε το κατάλυμα εκ των προτέρων τι ώρα θα φτάσετε.",
            childrenBeds: "Παιδιά και κρεβάτια",
            childrenPolicies: "Πολιτικές σχετικά με τα παιδιά",
            childrenNotAllowed: "Δεν επιτρέπονται τα παιδιά.",
            cribExtraBedPolicies: "Πολιτικές για βρεφικές κούνιες και επιπλέον κρεβάτια",
            noCribsExtraBeds: "Αυτό το κατάλυμα δεν διαθέτει βρεφικές κούνιες και επιπλέον κρεβάτια.",
            noAgeRestrictions: "Χωρίς περιορισμό ηλικίας",
            noAgeRestrictionsCheckIn: "Δεν υπάρχουν περιορισμοί ηλικίας για το check-in",
            propertyPolicies: "Πολιτικές καταλύματος",
            smokingPolicy: "Πολιτική καπνίσματος",
            smokingNotAllowed: "Δεν επιτρέπεται το κάπνισμα.",
            parties: "Πάρτι",
            partiesNotAllowed: "Δεν επιτρέπονται τα πάρτι ή/και οι εκδηλώσεις",
            pets: "Κατοικίδια ζώα",
            petsNotAllowed: "Τα κατοικίδια δεν επιτρέπονται."
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
    },
    it: {
        // Navbar
        navbar: {
            brandName: "Nana's Rooms",
            mobile: "📱 Cellulare",
            maps: "🗺️ Mappe",
            language: "🌐 IT",
            selectLang: "Seleziona Lingua",
            callUs: "Chiamaci",
            viewOnMaps: "Visualizza su Google Maps"
        },
        // Hero section
        hero: {
            slides: [
                {
                    title: "Benvenuti al Nana's Rooms",
                    subtitle: "Autentiche sistemazioni di Mykonos nel cuore di Chora"
                },
                {
                    title: "Confortevole & Elegante",
                    subtitle: "Servizi moderni con il fascino tradizionale delle Cicladi"
                },
                {
                    title: "Posizione Perfetta",
                    subtitle: "A pochi passi dalla vivace vita notturna di Mykonos"
                },
                {
                    title: "Rifugi Accoglienti",
                    subtitle: "La tua casa lontano da casa nella bella Mykonos"
                },
                {
                    title: "Vita Isolana",
                    subtitle: "Vivi la magia dell'ospitalità delle isole greche"
                },
                {
                    title: "Soggiorni Indimenticabili",
                    subtitle: "Crea ricordi che dureranno per sempre"
                }
            ],
            description: "Scopri camere confortevoli e convenienti in posizioni privilegiate. La tua casa lontano da casa ti aspetta con servizi moderni e servizio eccezionale.",
            searchPlaceholder: "Dove vorresti soggiornare?",
            searchButton: "Cerca Camere",
            exploreButton: "Esplora Camere",
            features: [
                "Proprietà Verificate",
                "Migliori Prezzi",
                "Prenotazione Sicura"
            ]
        },
        // Welcome Section
        welcome: {
            title: "BENVENUTI AL NANA'S ROOMS",
            subtitle: "A MYKONOS CHORA.",
            description: "Siamo lieti di ospitarvi per vacanze indimenticabili sul cosmopolita isola di Mykonos."
        },
        // Room Gallery
        gallery: {
            heading: "Trova la Tua Camera Perfetta",
            searchPlaceholder: "Cerca camere...",
            priceFilter: "Fascia di Prezzo:",
            priceOptions: {
                all: "Tutti i Prezzi",
                low: "Sotto €100",
                mid: "€100 - €150",
                high: "Sopra €150"
            },
            resultsCount: (count) => `${count} camera${count !== 1 ? 'e' : ''} trovata${count !== 1 ? 'e' : ''}`,
            viewButton: "Visualizza Dettagli",
            bookButton: "Prenota Ora",
            noResults: {
                title: "Nessuna camera trovata",
                subtitle: "Prova a modificare i criteri di ricerca"
            },
            rooms: [
                {
                    id: "aries-suite",
                    title: "Aries Suite",
                    description: "Suite elegante ispirata alla costellazione dell'Ariete."
                },
                {
                    id: "venus-suite",
                    title: "Venus Suite",
                    description: "Suite lussuosa ispirata alla dea dell'amore e della bellezza."
                }
            ]
        },
        // Room Details
        roomDetails: {
            aboutProperty: "Informazioni sulla Proprietà",
            suiteSpecifications: "Specifiche Suite",
            guests: "Ospiti",
            bedrooms: "Camere da Letto",
            bathrooms: "Bagni",
            area: "Area",
            amenities: "Servizi",
            freeWifi: "Wi-Fi Gratuito",
            airConditioning: "Aria Condizionata",
            privateBathroom: "Bagno Privato",
            reception24: "Reception 24/7",
            facilities: "Strutture",
            entirePlace: "Intero posto per te",
            size42: "42 m² di dimensione",
            size32: "32 m² di dimensione",
            dailyHousekeeping: "Servizio di pulizia giornaliero",
            terrace: "Terrazza",
            balcony: "Balcone",
            bathOrShower: "Vasca o doccia",
            frontDesk24: "Reception 24 ore",
            freeWiFi: "Wi-Fi Gratuito",
            familyRooms: "Camere familiari",
            shower: "Doccia",
            pricingAvailability: "Prezzi e Disponibilità",
            bookYourStay: "Prenota il Tuo Soggiorno",
            propertyArea: "Area della Proprietà",
            attractions: "Attrazioni",
            restaurants: "Ristoranti",
            // Common room elements
            showMore: "Mostra di più",
            showLess: "Mostra di meno",
            more: "altro",
            forBookingCall: "Per le prenotazioni chiamateci al",
            pricing: "Prezzi",
            size: "Dimensioni",
            roomType: "Tipo di Camera",
            bathroom: "Bagno",
            built: "Costruito",
            familyRoom: "Camera Familiare",
            privateBathroomWithShower: "1 Bagno Privato con Doccia",
            // Property descriptions - Aries
            ariesDescription1: "L'intero posto è tuo. ARIES Suite a Mykonos offre una casa vacanze con alloggi confortevoli caratterizzati da 42 m² di spazio, due camere da letto e due bagni.",
            ariesDescription2: "La proprietà dispone di 2 bagni con vasca o doccia, e sono forniti asciugacapelli e articoli da toilette gratuiti.",
            ariesDescription3: "Il personale della reception parla arabo, greco e inglese.",
            ariesDescription4: "Vicino ad ARIES Suite troverete attrazioni popolari come il Porto Vecchio di Mykonos, i Mulini a Vento di Mykonos e Piccola Venezia. L'aeroporto di Mykonos si trova a 3 km dalla proprietà.",
            // Property descriptions - Venus
            venusSubtitle: "Suite moderna situata in Petrou Drakopoulu 14, nel cuore di Mykonos Town.",
            venusDescription1: "VENUS Suite si trova in Petrou Drakopoulu 14 nel centro di Mykonos Town, a soli 300m dalla spiaggia di Agia Anna. Dispone di terrazza, WiFi gratuito, reception 24 ore e ATM. La proprietà è stata costruita nel 1980 e ha un balcone.",
            venusDescription2: "L'alloggio climatizzato dispone anche di 1 bagno con doccia.",
            venusDescription3: "Vicino a VENUS Suite troverete attrazioni popolari come Piccola Venezia, Museo Archeologico di Mykonos e Porto Vecchio di Mykonos. L'aeroporto di Mykonos si trova a 3 km dalla proprietà.",
            venusDescription4: "Questa location è particolarmente apprezzata dalle coppie – l'hanno valutata 10,0 per un viaggio di due persone.",
            // Property Area section
            whatsNearby: "Cosa c'è nelle vicinanze",
            restaurantsCafes: "Ristoranti e Caffè",
            nearbyBeaches: "Spiagge Vicine",
            nearestAirports: "Aeroporti più Vicini",
            distanceDisclaimer: "Sono mostrate le distanze più brevi approssimative a piedi o in auto. Le distanze reali potrebbero differire.",
            // Nearby Attractions
            littleVenice: "Piccola Venezia",
            meletopoulouGarden: "Giardino Comunale di Meletopoulos",
            mykonosWindmills: "Mulini a Vento di Mykonos",
            archaeologicalMuseum: "Museo Archeologico di Mykonos",
            fabricaSquare: "Piazza Fabrica",
            tholosTomb: "Tomba Tholos di Mykonos",
            armenistisLighthouse: "Faro di Armenistis",
            neolithicSettlement: "Insediamento Neolitico di Ftelia Mykonos",
            gyziCastle: "Castello Gyzi",
            stadiumDistrict: "Quartiere dello Stadio",
            // Restaurants & Cafes
            cafeBarRoom101: "Caffè/Bar Room 101",
            cafeBarBoutique: "Caffè/Bar Boutique di Vito",
            cafeBarPaloma: "Caffè/Bar Paloma Bar",
            // Nearby Beaches
            agiaAnnaBeach: "Spiaggia di Agia Anna",
            agiosCharalamposBeach: "Spiaggia di Agios Charalampos",
            megaliAmmosBeach: "Spiaggia di Megali Ammos",
            korfosBeach: "Spiaggia di Korfos",
            tourlosBeach: "Spiaggia di Tourlos",
            // Nearest Airports
            mykonosAirport: "Aeroporto di Mykonos",
            syrosAirport: "Aeroporto di Syros",
            naxosAirport: "Aeroporto Statale di Naxos",
            // Amenities section
            ariesSuiteAmenities: "Servizi ARIES Suite",
            mostPopularAmenities: "Servizi Più Popolari",
            freeWiFiAmenity: "Wi-Fi Gratuito",
            reception24Amenity: "Reception 24 ore",
            perfectForStay: "Perfetto per il tuo soggiorno",
            parking: "Parcheggio",
            noParkingAvailable: "Nessun parcheggio disponibile.",
            internet: "Internet",
            wifiAvailableInfo: "Il Wi-Fi è disponibile in tutta la struttura e non viene addebitato.",
            kitchen: "Cucina",
            diningTable: "Tavolo da pranzo",
            electricKettle: "Bollitore elettrico",
            refrigerator: "Frigorifero",
            bedroom: "Camera da letto",
            alarmClock: "Sveglia",
            bathroom: "Bagno",
            toiletPaper: "Carta igienica",
            towels: "Asciugamani",
            bathOrShowerAmenity: "Vasca o doccia",
            privateBathroomAmenity: "Bagno privato",
            freeToiletries: "Articoli da toilette gratuiti",
            hairDryer: "Asciugacapelli",
            livingRoom: "Soggiorno",
            diningArea: "Zona pranzo",
            sofa: "Divano",
            seatingArea: "Area salotto",
            roomAmenities: "Servizi della Camera",
            socketNearBed: "Presa vicino al letto",
            heatedClothesRack: "Stendibiancheria riscaldato",
            clothesDryingRack: "Stendibiancheria",
            woodenOrParquetFlooring: "Pavimento in legno o parquet",
            tiledMarbleFlooring: "Pavimento piastrellato/marmo",
            privateEntrance: "Ingresso privato",
            heating: "Riscaldamento",
            // Additional Services
            receptionServices: "Servizi Reception",
            invoiceProvision: "Possibilità di fattura",
            luggageStorage: "Deposito bagagli (costo aggiuntivo)",
            expressCheckInOut: "Check-in/out express (costo aggiuntivo)",
            reception24Hours: "Reception 24 ore",
            cleaningServices: "Servizi di Pulizia",
            dailyHousekeepingExtra: "Servizio di pulizia giornaliero (costo aggiuntivo)",
            communicationLanguages: "Lingue di Comunicazione",
            arabic: "Arabo",
            greek: "Greco",
            english: "Inglese",
            // Property Rules section
            propertyRulesPolicies: "Regole e Politiche della Struttura",
            checkInOut: "Check-in/Check-out",
            checkInTime: "Check-in",
            checkOutTime: "Check-out",
            checkInHours: "Dalle 15:00 alle 20:00",
            checkOutHours: "Dalle 08:00 alle 12:00",
            checkInAdvanceNotice: "Devi informare la struttura in anticipo del tuo orario di arrivo.",
            childrenBeds: "Bambini e Letti",
            childrenPolicies: "Politiche per i Bambini",
            childrenNotAllowed: "I bambini non sono ammessi.",
            cribExtraBedPolicies: "Politiche per Culle e Letti Extra",
            noCribsExtraBeds: "Questa struttura non dispone di culle e letti extra disponibili.",
            noAgeRestrictions: "Nessuna Restrizione di Età",
            noAgeRestrictionsCheckIn: "Non ci sono restrizioni di età per il check-in.",
            propertyPolicies: "Politiche della Struttura",
            smokingPolicy: "Politica sul Fumo",
            smokingNotAllowed: "Non è permesso fumare.",
            parties: "Feste",
            partiesNotAllowed: "Non sono ammesse feste o eventi.",
            pets: "Animali Domestici",
            petsNotAllowed: "Gli animali domestici non sono ammessi."
        },
        // Footer
        footer: {
            brandName: "Nana's Rooms",
            description: "Il tuo partner fidato per trovare la sistemazione perfetta",
            subDescription: "Soggiorni confortevoli, prezzi convenienti.",
            contactInfo: {
                title: "Informazioni di Contatto",
                email: "info@nanasrooms.com",
                phone: "+30 6955217820",
                address: "Mykonos Chora"
            },
            copyright: "© 2025 Nana's Rooms. Tutti i diritti riservati."
        }
    },
    de: {
        // Navbar
        navbar: {
            brandName: "Nana's Rooms",
            mobile: "📱 Handy",
            maps: "🗺️ Karten",
            language: "🌐 DE",
            selectLang: "Sprache Wählen",
            callUs: "Rufen Sie uns an",
            viewOnMaps: "Auf Google Maps anzeigen"
        },
        // Hero section
        hero: {
            slides: [
                {
                    title: "Willkommen bei Nana's Rooms",
                    subtitle: "Authentische Mykonos-Unterkünfte im Herzen von Chora"
                },
                {
                    title: "Komfortabel & Stilvoll",
                    subtitle: "Moderne Annehmlichkeiten mit traditionellem kykladischen Charme"
                },
                {
                    title: "Perfekte Lage",
                    subtitle: "Nur wenige Schritte von Mykonos' lebhaftem Nachtleben entfernt"
                },
                {
                    title: "Gemütliche Rückzugsorte",
                    subtitle: "Ihr Zuhause fern der Heimat im schönen Mykonos"
                },
                {
                    title: "Inselleben",
                    subtitle: "Erleben Sie die Magie der griechischen Inselhospitalität"
                },
                {
                    title: "Unvergessliche Aufenthalte",
                    subtitle: "Schaffen Sie Erinnerungen, die ein Leben lang halten"
                }
            ],
            description: "Entdecken Sie komfortable und erschwingliche Zimmer in erstklassigen Lagen. Ihr Zuhause fern der Heimat wartet mit modernen Annehmlichkeiten und außergewöhnlichem Service.",
            searchPlaceholder: "Wo möchten Sie übernachten?",
            searchButton: "Zimmer Suchen",
            exploreButton: "Zimmer Erkunden",
            features: [
                "Verifizierte Immobilien",
                "Beste Preise",
                "Sichere Buchung"
            ]
        },
        // Welcome Section
        welcome: {
            title: "WILLKOMMEN BEI NANA'S ROOMS",
            subtitle: "IN MYKONOS CHORA.",
            description: "Wir freuen uns, Sie für unvergessliche Ferien auf der kosmopolitischen Insel Mykonos zu beherbergen."
        },
        // Room Gallery
        gallery: {
            heading: "Finden Sie Ihr Perfektes Zimmer",
            searchPlaceholder: "Zimmer suchen...",
            priceFilter: "Preisbereich:",
            priceOptions: {
                all: "Alle Preise",
                low: "Unter €100",
                mid: "€100 - €150",
                high: "Über €150"
            },
            resultsCount: (count) => `${count} Zimmer gefunden`,
            viewButton: "Details Anzeigen",
            bookButton: "Jetzt Buchen",
            noResults: {
                title: "Keine Zimmer gefunden",
                subtitle: "Versuchen Sie, Ihre Suchkriterien anzupassen"
            },
            rooms: [
                {
                    id: "aries-suite",
                    title: "Aries Suite",
                    description: "Elegante Suite inspiriert vom Sternbild Widder."
                },
                {
                    id: "venus-suite",
                    title: "Venus Suite",
                    description: "Luxuriöse Suite inspiriert von der Göttin der Liebe und Schönheit."
                }
            ]
        },
        // Room Details
        roomDetails: {
            aboutProperty: "Über Diese Unterkunft",
            suiteSpecifications: "Suite-Spezifikationen",
            guests: "Gäste",
            bedrooms: "Schlafzimmer",
            bathrooms: "Badezimmer",
            area: "Fläche",
            amenities: "Ausstattung",
            freeWifi: "Kostenloses WLAN",
            airConditioning: "Klimaanlage",
            privateBathroom: "Privates Badezimmer",
            reception24: "24-Stunden-Rezeption",
            facilities: "Einrichtungen",
            entirePlace: "Ganzer Ort für sich",
            size42: "42 m² Größe",
            size32: "32 m² Größe",
            dailyHousekeeping: "Tägliche Zimmerreinigung",
            terrace: "Terrasse",
            balcony: "Balkon",
            bathOrShower: "Badewanne oder Dusche",
            frontDesk24: "24-Stunden-Rezeption",
            freeWiFi: "Kostenloses WLAN",
            familyRooms: "Familienzimmer",
            shower: "Dusche",
            pricingAvailability: "Preise & Verfügbarkeit",
            bookYourStay: "Buchen Sie Ihren Aufenthalt",
            propertyArea: "Lage der Unterkunft",
            attractions: "Sehenswürdigkeiten",
            restaurants: "Restaurants",
            // Common room elements
            showMore: "Mehr anzeigen",
            showLess: "Weniger anzeigen",
            more: "mehr",
            forBookingCall: "Für Buchungen rufen Sie uns an unter",
            pricing: "Preise",
            size: "Größe",
            roomType: "Zimmertyp",
            bathroom: "Badezimmer",
            built: "Gebaut",
            familyRoom: "Familienzimmer",
            privateBathroomWithShower: "1 Privates Badezimmer mit Dusche",
            // Property descriptions - Aries
            ariesDescription1: "Der ganze Ort gehört Ihnen. ARIES Suite in Mykonos bietet ein Ferienhaus mit komfortabler Unterkunft mit 42 m² Fläche, zwei Schlafzimmern und zwei Badezimmern.",
            ariesDescription2: "Die Unterkunft verfügt über 2 Badezimmer mit Badewanne oder Dusche, und kostenlose Toilettenartikel und Haartrockner sind vorhanden.",
            ariesDescription3: "Das Rezeptionspersonal spricht Arabisch, Griechisch und Englisch.",
            ariesDescription4: "In der Nähe der ARIES Suite finden Sie beliebte Sehenswürdigkeiten wie den Alten Hafen von Mykonos, die Windmühlen von Mykonos und Little Venice. Der Flughafen Mykonos ist 3 km von der Unterkunft entfernt.",
            // Property descriptions - Venus
            venusSubtitle: "Moderne Suite in der Petrou Drakopoulu 14, im Herzen von Mykonos Town.",
            venusDescription1: "VENUS Suite befindet sich in der Petrou Drakopoulu 14 im Zentrum von Mykonos Town, nur 300m vom Strand Agia Anna entfernt. Es verfügt über eine Terrasse, kostenloses WiFi, 24-Stunden-Rezeption und Geldautomat. Die Unterkunft wurde 1980 erbaut und hat einen Balkon.",
            venusDescription2: "Die klimatisierte Unterkunft verfügt auch über 1 Badezimmer mit Dusche.",
            venusDescription3: "In der Nähe der VENUS Suite finden Sie beliebte Sehenswürdigkeiten wie Little Venice, Archäologisches Museum von Mykonos und Alter Hafen von Mykonos. Der Flughafen Mykonos ist 3 km von der Unterkunft entfernt.",
            venusDescription4: "Dieser Ort ist besonders bei Paaren beliebt – sie bewerteten ihn mit 10,0 für eine Reise zu zweit.",
            // Property Area section
            whatsNearby: "Was ist in der Nähe",
            restaurantsCafes: "Restaurants & Cafés",
            nearbyBeaches: "Nahegelegene Strände",
            nearestAirports: "Nächstgelegene Flughäfen",
            distanceDisclaimer: "Es werden ungefähre kürzeste Geh- oder Fahrstrecken angezeigt. Tatsächliche Entfernungen können abweichen.",
            // Nearby Attractions
            littleVenice: "Little Venice",
            meletopoulouGarden: "Meletopoulos Stadtgarten",
            mykonosWindmills: "Mykonos Windmühlen",
            archaeologicalMuseum: "Archäologisches Museum von Mykonos",
            fabricaSquare: "Fabrica-Platz",
            tholosTomb: "Tholos-Grab von Mykonos",
            armenistisLighthouse: "Armenistis-Leuchtturm",
            neolithicSettlement: "Neolithische Siedlung von Ftelia Mykonos",
            gyziCastle: "Gyzi-Schloss",
            stadiumDistrict: "Stadion-Viertel",
            // Restaurants & Cafes
            cafeBarRoom101: "Café/Bar Room 101",
            cafeBarBoutique: "Café/Bar Boutique di Vito",
            cafeBarPaloma: "Café/Bar Paloma Bar",
            // Nearby Beaches
            agiaAnnaBeach: "Agia Anna Strand",
            agiosCharalamposBeach: "Agios Charalampos Strand",
            megaliAmmosBeach: "Megali Ammos Strand",
            korfosBeach: "Korfos Strand",
            tourlosBeach: "Tourlos Strand",
            // Nearest Airports
            mykonosAirport: "Flughafen Mykonos",
            syrosAirport: "Flughafen Syros",
            naxosAirport: "Staatsflughafen Naxos",
            // Amenities section
            ariesSuiteAmenities: "ARIES Suite Ausstattung",
            mostPopularAmenities: "Beliebteste Ausstattungen",
            freeWiFiAmenity: "Kostenloses WLAN",
            reception24Amenity: "24-Stunden-Rezeption",
            perfectForStay: "Perfekt für Ihren Aufenthalt",
            parking: "Parkplatz",
            noParkingAvailable: "Kein Parkplatz verfügbar.",
            internet: "Internet",
            wifiAvailableInfo: "WLAN ist im gesamten Gebäude verfügbar und wird nicht berechnet.",
            kitchen: "Küche",
            diningTable: "Esstisch",
            electricKettle: "Elektrischer Wasserkocher",
            refrigerator: "Kühlschrank",
            bedroom: "Schlafzimmer",
            alarmClock: "Wecker",
            bathroom: "Badezimmer",
            toiletPaper: "Toilettenpapier",
            towels: "Handtücher",
            bathOrShowerAmenity: "Badewanne oder Dusche",
            privateBathroomAmenity: "Privates Badezimmer",
            freeToiletries: "Kostenlose Toilettenartikel",
            hairDryer: "Haartrockner",
            livingRoom: "Wohnzimmer",
            diningArea: "Essbereich",
            sofa: "Sofa",
            seatingArea: "Sitzbereich",
            roomAmenities: "Zimmerausstattung",
            socketNearBed: "Steckdose in Bettnähe",
            heatedClothesRack: "Beheizte Kleiderstange",
            clothesDryingRack: "Wäschetrockner",
            woodenOrParquetFlooring: "Holz- oder Parkettboden",
            tiledMarbleFlooring: "Fliesen-/Marmorboden",
            privateEntrance: "Privater Eingang",
            heating: "Heizung",
            // Additional Services
            receptionServices: "Rezeptionsservice",
            invoiceProvision: "Rechnungsstellung möglich",
            luggageStorage: "Gepäckaufbewahrung (gegen Aufpreis)",
            expressCheckInOut: "Express Check-in/out (gegen Aufpreis)",
            reception24Hours: "24-Stunden-Rezeption",
            cleaningServices: "Reinigungsservice",
            dailyHousekeepingExtra: "Tägliche Zimmerreinigung (gegen Aufpreis)",
            communicationLanguages: "Kommunikationssprachen",
            arabic: "Arabisch",
            greek: "Griechisch",
            english: "Englisch",
            // Property Rules section
            propertyRulesPolicies: "Hausordnung & Richtlinien",
            checkInOut: "Check-in/Check-out",
            checkInTime: "Check-in",
            checkOutTime: "Check-out",
            checkInHours: "Von 15:00 bis 20:00 Uhr",
            checkOutHours: "Von 08:00 bis 12:00 Uhr",
            checkInAdvanceNotice: "Sie müssen die Unterkunft im Voraus über Ihre Ankunftszeit informieren.",
            childrenBeds: "Kinder und Betten",
            childrenPolicies: "Kinderrichtlinien",
            childrenNotAllowed: "Kinder sind nicht erlaubt.",
            cribExtraBedPolicies: "Richtlinien für Kinderbetten und Zusatzbetten",
            noCribsExtraBeds: "Diese Unterkunft verfügt nicht über Kinderbetten und Zusatzbetten.",
            noAgeRestrictions: "Keine Altersbeschränkungen",
            noAgeRestrictionsCheckIn: "Es gibt keine Altersbeschränkungen für den Check-in.",
            propertyPolicies: "Unterkunftsrichtlinien",
            smokingPolicy: "Raucherpolitik",
            smokingNotAllowed: "Rauchen ist nicht gestattet.",
            parties: "Partys",
            partiesNotAllowed: "Partys oder Veranstaltungen sind nicht gestattet.",
            pets: "Haustiere",
            petsNotAllowed: "Haustiere sind nicht erlaubt."
        },
        // Footer
        footer: {
            brandName: "Nana's Rooms",
            description: "Ihr vertrauensvoller Partner bei der Suche nach der perfekten Unterkunft",
            subDescription: "Komfortable Aufenthalte, erschwingliche Preise.",
            contactInfo: {
                title: "Kontakt Information",
                email: "info@nanasrooms.com",
                phone: "+30 6955217820",
                address: "Mykonos Chora"
            },
            copyright: "© 2025 Nana's Rooms. Alle Rechte vorbehalten."
        }
    },
    es: {
        // Navbar
        navbar: {
            brandName: "Nana's Rooms",
            mobile: "📱 Móvil",
            maps: "🗺️ Mapas",
            language: "🌐 ES",
            selectLang: "Seleccionar Idioma",
            callUs: "Llámanos",
            viewOnMaps: "Ver en Google Maps"
        },
        // Hero section
        hero: {
            slides: [
                {
                    title: "Bienvenidos a Nana's Rooms",
                    subtitle: "Auténticos alojamientos de Mykonos en el corazón de Chora"
                },
                {
                    title: "Cómodo y Elegante",
                    subtitle: "Comodidades modernas con encanto tradicional de las Cícladas"
                },
                {
                    title: "Ubicación Perfecta",
                    subtitle: "A pocos pasos de la vibrante vida nocturna de Mykonos"
                },
                {
                    title: "Refugios Acogedores",
                    subtitle: "Tu hogar lejos del hogar en la hermosa Mykonos"
                },
                {
                    title: "Vida Isleña",
                    subtitle: "Experimenta la magia de la hospitalidad de las islas griegas"
                },
                {
                    title: "Estancias Inolvidables",
                    subtitle: "Crea recuerdos que durarán para siempre"
                }
            ],
            description: "Descubre habitaciones cómodas y asequibles en ubicaciones privilegiadas. Tu hogar lejos del hogar te espera con comodidades modernas y servicio excepcional.",
            searchPlaceholder: "¿Dónde te gustaría quedarte?",
            searchButton: "Buscar Habitaciones",
            exploreButton: "Explorar Habitaciones",
            features: [
                "Propiedades Verificadas",
                "Mejores Precios",
                "Reserva Segura"
            ]
        },
        // Welcome Section
        welcome: {
            title: "BIENVENIDOS A NANA'S ROOMS",
            subtitle: "EN MYKONOS CHORA.",
            description: "Nos complace alojarles para unas vacaciones inolvidables en la cosmopolita isla de Mykonos."
        },
        // Room Gallery
        gallery: {
            heading: "Encuentra Tu Habitación Perfecta",
            searchPlaceholder: "Buscar habitaciones...",
            priceFilter: "Rango de Precios:",
            priceOptions: {
                all: "Todos los Precios",
                low: "Menos de €100",
                mid: "€100 - €150",
                high: "Más de €150"
            },
            resultsCount: (count) => `${count} habitación${count !== 1 ? 'es' : ''} encontrada${count !== 1 ? 's' : ''}`,
            viewButton: "Ver Detalles",
            bookButton: "Reservar Ahora",
            noResults: {
                title: "No se encontraron habitaciones",
                subtitle: "Intenta ajustar tus criterios de búsqueda"
            },
            rooms: [
                {
                    id: "aries-suite",
                    title: "Aries Suite",
                    description: "Suite elegante inspirada en la constelación de Aries."
                },
                {
                    id: "venus-suite",
                    title: "Venus Suite",
                    description: "Suite lujosa inspirada en la diosa del amor y la belleza."
                }
            ]
        },
        // Room Details
        roomDetails: {
            aboutProperty: "Acerca de Esta Propiedad",
            suiteSpecifications: "Especificaciones de la Suite",
            guests: "Huéspedes",
            bedrooms: "Habitaciones",
            bathrooms: "Baños",
            area: "Área",
            amenities: "Comodidades",
            freeWifi: "Wi-Fi Gratuito",
            airConditioning: "Aire Acondicionado",
            privateBathroom: "Baño Privado",
            reception24: "Recepción 24/7",
            facilities: "Instalaciones",
            entirePlace: "Todo el lugar para ti",
            size42: "42 m² de tamaño",
            size32: "32 m² de tamaño",
            dailyHousekeeping: "Servicio de limpieza diario",
            terrace: "Terraza",
            balcony: "Balcón",
            bathOrShower: "Bañera o ducha",
            frontDesk24: "Recepción 24 horas",
            freeWiFi: "Wi-Fi Gratuito",
            familyRooms: "Habitaciones familiares",
            shower: "Ducha",
            pricingAvailability: "Precios y Disponibilidad",
            bookYourStay: "Reserva tu Estancia",
            propertyArea: "Área de la Propiedad",
            attractions: "Atracciones",
            restaurants: "Restaurantes",
            // Common room elements
            showMore: "Mostrar más",
            showLess: "Mostrar menos",
            more: "más",
            forBookingCall: "Para reservas llámanos al",
            pricing: "Precios",
            size: "Tamaño",
            roomType: "Tipo de Habitación",
            bathroom: "Baño",
            built: "Construido",
            familyRoom: "Habitación Familiar",
            privateBathroomWithShower: "1 Baño Privado con Ducha",
            // Property descriptions - Aries
            ariesDescription1: "Todo el lugar es tuyo. ARIES Suite en Mykonos ofrece una casa de vacaciones con alojamiento cómodo con 42 m² de espacio, dos habitaciones y dos baños.",
            ariesDescription2: "La propiedad cuenta con 2 baños con bañera o ducha, y se proporcionan secador de pelo y artículos de aseo gratuitos.",
            ariesDescription3: "El personal de recepción habla árabe, griego e inglés.",
            ariesDescription4: "Cerca de ARIES Suite encontrarás atracciones populares como el Puerto Viejo de Mykonos, los Molinos de Viento de Mykonos y Pequeña Venecia. El Aeropuerto de Mykonos está a 3 km de la propiedad.",
            // Property descriptions - Venus
            venusSubtitle: "Suite moderna ubicada en Petrou Drakopoulu 14, en el corazón de Mykonos Town.",
            venusDescription1: "VENUS Suite está ubicada en Petrou Drakopoulu 14 en el centro de Mykonos Town, a solo 300m de la playa Agia Anna. Cuenta con terraza, WiFi gratis, recepción 24 horas y cajero automático. La propiedad fue construida en 1980 y tiene balcón.",
            venusDescription2: "El alojamiento con aire acondicionado también cuenta con 1 baño con ducha.",
            venusDescription3: "Cerca de VENUS Suite encontrarás atracciones populares como Pequeña Venecia, Museo Arqueológico de Mykonos y Puerto Viejo de Mykonos. El Aeropuerto de Mykonos está a 3 km de la propiedad.",
            venusDescription4: "Esta ubicación es especialmente popular entre las parejas: la calificaron con 10,0 para un viaje de dos personas.",
            // Property Area section
            whatsNearby: "Qué hay cerca",
            restaurantsCafes: "Restaurantes y Cafés",
            nearbyBeaches: "Playas Cercanas",
            nearestAirports: "Aeropuertos más Cercanos",
            distanceDisclaimer: "Se muestran las distancias más cortas aproximadas caminando o conduciendo. Las distancias reales pueden diferir.",
            // Nearby Attractions
            littleVenice: "Pequeña Venecia",
            meletopoulouGarden: "Jardín Municipal de Meletopoulos",
            mykonosWindmills: "Molinos de Viento de Mykonos",
            archaeologicalMuseum: "Museo Arqueológico de Mykonos",
            fabricaSquare: "Plaza Fabrica",
            tholosTomb: "Tumba Tholos de Mykonos",
            armenistisLighthouse: "Faro de Armenistis",
            neolithicSettlement: "Asentamiento Neolítico de Ftelia Mykonos",
            gyziCastle: "Castillo de Gyzi",
            stadiumDistrict: "Distrito del Estadio",
            // Restaurants & Cafes
            cafeBarRoom101: "Café/Bar Room 101",
            cafeBarBoutique: "Café/Bar Boutique di Vito",
            cafeBarPaloma: "Café/Bar Paloma Bar",
            // Nearby Beaches
            agiaAnnaBeach: "Playa de Agia Anna",
            agiosCharalamposBeach: "Playa de Agios Charalampos",
            megaliAmmosBeach: "Playa de Megali Ammos",
            korfosBeach: "Playa de Korfos",
            tourlosBeach: "Playa de Tourlos",
            // Nearest Airports
            mykonosAirport: "Aeropuerto de Mykonos",
            syrosAirport: "Aeropuerto de Syros",
            naxosAirport: "Aeropuerto Estatal de Naxos",
            // Amenities section
            ariesSuiteAmenities: "Comodidades ARIES Suite",
            mostPopularAmenities: "Comodidades Más Populares",
            freeWiFiAmenity: "Wi-Fi Gratuito",
            reception24Amenity: "Recepción 24 horas",
            perfectForStay: "Perfecto para tu estancia",
            parking: "Estacionamiento",
            noParkingAvailable: "No hay estacionamiento disponible.",
            internet: "Internet",
            wifiAvailableInfo: "El Wi-Fi está disponible en todas las áreas y no se cobra.",
            kitchen: "Cocina",
            diningTable: "Mesa de comedor",
            electricKettle: "Hervidor eléctrico",
            refrigerator: "Refrigerador",
            bedroom: "Habitación",
            alarmClock: "Despertador",
            bathroom: "Baño",
            toiletPaper: "Papel higiénico",
            towels: "Toallas",
            bathOrShowerAmenity: "Bañera o ducha",
            privateBathroomAmenity: "Baño privado",
            freeToiletries: "Artículos de aseo gratuitos",
            hairDryer: "Secador de pelo",
            livingRoom: "Sala de estar",
            diningArea: "Área de comedor",
            sofa: "Sofá",
            seatingArea: "Área de estar",
            roomAmenities: "Comodidades de la Habitación",
            socketNearBed: "Enchufe cerca de la cama",
            heatedClothesRack: "Perchero calefactado",
            clothesDryingRack: "Tendedero de ropa",
            woodenOrParquetFlooring: "Suelo de madera o parquet",
            tiledMarbleFlooring: "Suelo de azulejos/mármol",
            privateEntrance: "Entrada privada",
            heating: "Calefacción",
            // Additional Services
            receptionServices: "Servicios de Recepción",
            invoiceProvision: "Posibilidad de factura",
            luggageStorage: "Guardaequipajes (cargo extra)",
            expressCheckInOut: "Check-in/out express (cargo extra)",
            reception24Hours: "Recepción 24 horas",
            cleaningServices: "Servicios de Limpieza",
            dailyHousekeepingExtra: "Servicio de limpieza diario (cargo extra)",
            communicationLanguages: "Idiomas de Comunicación",
            arabic: "Árabe",
            greek: "Griego",
            english: "Inglés",
            // Property Rules section
            propertyRulesPolicies: "Reglas y Políticas de la Propiedad",
            checkInOut: "Check-in/Check-out",
            checkInTime: "Check-in",
            checkOutTime: "Check-out",
            checkInHours: "De 15:00 a 20:00",
            checkOutHours: "De 08:00 a 12:00",
            checkInAdvanceNotice: "Debes informar a la propiedad con anticipación sobre tu hora de llegada.",
            childrenBeds: "Niños y Camas",
            childrenPolicies: "Políticas para Niños",
            childrenNotAllowed: "No se permiten niños.",
            cribExtraBedPolicies: "Políticas de Cunas y Camas Extra",
            noCribsExtraBeds: "Esta propiedad no dispone de cunas y camas extra disponibles.",
            noAgeRestrictions: "Sin Restricciones de Edad",
            noAgeRestrictionsCheckIn: "No hay restricciones de edad para el check-in.",
            propertyPolicies: "Políticas de la Propiedad",
            smokingPolicy: "Política de Fumar",
            smokingNotAllowed: "No se permite fumar.",
            parties: "Fiestas",
            partiesNotAllowed: "No se permiten fiestas o eventos.",
            pets: "Mascotas",
            petsNotAllowed: "No se permiten mascotas."
        },
        // Footer
        footer: {
            brandName: "Nana's Rooms",
            description: "Tu socio de confianza para encontrar el alojamiento perfecto",
            subDescription: "Estancias cómodas, precios asequibles.",
            contactInfo: {
                title: "Información de Contacto",
                email: "info@nanasrooms.com",
                phone: "+30 6955217820",
                address: "Mykonos Chora"
            },
            copyright: "© 2025 Nana's Rooms. Todos los derechos reservados."
        }
    },
    ar: {
        // Navbar
        navbar: {
            brandName: "Nana's Rooms",
            mobile: "📱 الهاتف المحمول",
            maps: "🗺️ الخرائط",
            language: "🌐 ع",
            selectLang: "اختيار اللغة",
            callUs: "اتصل بنا",
            viewOnMaps: "عرض على خرائط جوجل"
        },
        // Hero section
        hero: {
            slides: [
                {
                    title: "مرحباً بكم في Nana's Rooms",
                    subtitle: "أماكن إقامة أصيلة في ميكونوس في قلب تشورا"
                },
                {
                    title: "مريح وأنيق",
                    subtitle: "وسائل راحة حديثة مع سحر الكيكلاديين التقليدي"
                },
                {
                    title: "موقع مثالي",
                    subtitle: "على بعد خطوات من الحياة الليلية النابضة بالحياة في ميكونوس"
                },
                {
                    title: "ملاذات مريحة",
                    subtitle: "منزلك بعيداً عن المنزل في ميكونوس الجميلة"
                },
                {
                    title: "الحياة الجزيرة",
                    subtitle: "اختبر سحر الضيافة اليونانية الجزيرة"
                },
                {
                    title: "إقامات لا تُنسى",
                    subtitle: "اصنع ذكريات تدوم إلى الأبد"
                }
            ],
            description: "اكتشف غرف مريحة وبأسعار معقولة في مواقع مميزة. منزلك بعيداً عن المنزل ينتظرك بوسائل الراحة الحديثة والخدمة الاستثنائية.",
            searchPlaceholder: "أين تود أن تقيم؟",
            searchButton: "البحث عن غرف",
            exploreButton: "استكشاف الغرف",
            features: [
                "عقارات موثقة",
                "أفضل الأسعار",
                "حجز آمن"
            ]
        },
        // Welcome Section
        welcome: {
            title: "مرحباً بكم في NANA'S ROOMS",
            subtitle: "في ميكونوس تشورا.",
            description: "يسرنا استضافتكم لقضاء عطلات لا تُنسى في جزيرة ميكونوس الكوزموبوليتانية."
        },
        // Room Gallery
        gallery: {
            heading: "ابحث عن غرفتك المثالية",
            searchPlaceholder: "البحث عن غرف...",
            priceFilter: "نطاق الأسعار:",
            priceOptions: {
                all: "جميع الأسعار",
                low: "أقل من €100",
                mid: "€100 - €150",
                high: "أكثر من €150"
            },
            resultsCount: (count) => `تم العثور على ${count} غرفة`,
            viewButton: "عرض التفاصيل",
            bookButton: "احجز الآن",
            noResults: {
                title: "لم يتم العثور على غرف",
                subtitle: "حاول تعديل معايير البحث"
            },
            rooms: [
                {
                    id: "aries-suite",
                    title: "Aries Suite",
                    description: "جناح أنيق مستوحى من كوكبة الحمل."
                },
                {
                    id: "venus-suite",
                    title: "Venus Suite",
                    description: "جناح فاخر مستوحى من إلهة الحب والجمال."
                }
            ]
        },
        // Room Details
        roomDetails: {
            aboutProperty: "حول هذا العقار",
            suiteSpecifications: "مواصفات الجناح",
            guests: "الضيوف",
            bedrooms: "غرف النوم",
            bathrooms: "الحمامات",
            area: "المساحة",
            amenities: "وسائل الراحة",
            freeWifi: "واي فاي مجاني",
            airConditioning: "تكييف الهواء",
            privateBathroom: "حمام خاص",
            reception24: "استقبال 24/7",
            facilities: "المرافق",
            entirePlace: "المكان كله لك",
            size42: "42 متر مربع",
            size32: "32 متر مربع",
            dailyHousekeeping: "خدمة التنظيف اليومية",
            terrace: "شرفة",
            balcony: "بلكونة",
            bathOrShower: "حوض استحمام أو دش",
            frontDesk24: "مكتب استقبال 24 ساعة",
            freeWiFi: "واي فاي مجاني",
            familyRooms: "غرف عائلية",
            shower: "دش",
            pricingAvailability: "الأسعار والتوافر",
            bookYourStay: "احجز إقامتك",
            propertyArea: "منطقة العقار",
            attractions: "المعالم السياحية",
            restaurants: "المطاعم",
            // Common room elements
            showMore: "عرض المزيد",
            showLess: "عرض أقل",
            more: "المزيد",
            forBookingCall: "للحجز اتصل بنا على",
            pricing: "الأسعار",
            size: "الحجم",
            roomType: "نوع الغرفة",
            bathroom: "حمام",
            built: "بُني",
            familyRoom: "غرفة عائلية",
            privateBathroomWithShower: "حمام خاص واحد مع دش",
            // Property descriptions - Aries
            ariesDescription1: "المكان كله لك. جناح ARIES في ميكونوس يوفر منزل عطلات مع إقامة مريحة تتميز بمساحة 42 متر مربع، غرفتي نوم وحمامين.",
            ariesDescription2: "يتميز العقار بحمامين مع حوض أستحمام أو دش، ويتم توفير مجفف الشعر ولوازم الحمام المجانية.",
            ariesDescription3: "يتحدث موظفو الاستقبال العربية واليونانية والإنجليزية.",
            ariesDescription4: "بالقرب من جناح ARIES ستجد معالم سياحية شهيرة مثل ميناء ميكونوس القديم، طواحين الهواء في ميكونوس وفينيسيا الصغيرة. مطار ميكونوس على بعد 3 كم من العقار.",
            // Property descriptions - Venus
            venusSubtitle: "جناح حديث يقع في بيترو دراكوبولو 14، في قلب مدينة ميكونوس.",
            venusDescription1: "يقع جناح VENUS في بيترو دراكوبولو 14 في وسط مدينة ميكونوس، على بعد 300 متر فقط من شاطئ أجيا آنا. يتميز بشرفة، واي فاي مجاني، مكتب استقبال 24 ساعة وصراف آلي. تم بناء العقار في عام 1980 وله شرفة.",
            venusDescription2: "يحتوي المكان المكيف أيضاً على حمام واحد مع دش.",
            venusDescription3: "بالقرب من جناح VENUS ستجد معالم سياحية شهيرة مثل فينيسيا الصغيرة، متحف ميكونوس الأثري وميناء ميكونوس القديم. مطار ميكونوس على بعد 3 كم من العقار.",
            venusDescription4: "هذا الموقع مشهور بشكل خاص بين الأزواج - قيموه بـ 10.0 لرحلة شخصين.",
            // Property Area section
            whatsNearby: "ما هو قريب",
            restaurantsCafes: "المطاعم والمقاهي",
            nearbyBeaches: "الشواطئ القريبة",
            nearestAirports: "أقرب المطارات",
            distanceDisclaimer: "يتم عرض أقصر المسافات التقريبية سيراً أو بالسيارة. قد تختلف المسافات الفعلية.",
            // Nearby Attractions
            littleVenice: "فينيسيا الصغيرة",
            meletopoulouGarden: "حديقة ميليتوبولوس البلدية",
            mykonosWindmills: "طواحين الهواء في ميكونوس",
            archaeologicalMuseum: "متحف ميكونوس الأثري",
            fabricaSquare: "ساحة فابريكا",
            tholosTomb: "مقبرة ثولوس في ميكونوس",
            armenistisLighthouse: "منارة أرمينيستيس",
            neolithicSettlement: "المستوطنة النيوليتية في فتيليا ميكونوس",
            gyziCastle: "قلعة غيزي",
            stadiumDistrict: "منطقة الملعب",
            // Restaurants & Cafes
            cafeBarRoom101: "مقهى/بار Room 101",
            cafeBarBoutique: "مقهى/بار Boutique di Vito",
            cafeBarPaloma: "مقهى/بار Paloma Bar",
            // Nearby Beaches
            agiaAnnaBeach: "شاطئ أجيا آنا",
            agiosCharalamposBeach: "شاطئ أجيوس خارالامبوس",
            megaliAmmosBeach: "شاطئ ميجالي أموس",
            korfosBeach: "شاطئ كورفوس",
            tourlosBeach: "شاطئ تورلوس",
            // Nearest Airports
            mykonosAirport: "مطار ميكونوس",
            syrosAirport: "مطار سيروس",
            naxosAirport: "مطار ناكسوس الحكومي",
            // Amenities section
            ariesSuiteAmenities: "مرافق جناح ARIES",
            mostPopularAmenities: "المرافق الأكثر شعبية",
            freeWiFiAmenity: "واي فاي مجاني",
            reception24Amenity: "استقبال 24 ساعة",
            perfectForStay: "مثالي لإقامتك",
            parking: "موقف سيارات",
            noParkingAvailable: "لا يوجد موقف سيارات متاح.",
            internet: "الإنترنت",
            wifiAvailableInfo: "الواي فاي متاح في جميع الأنحاء وغير مكلف.",
            kitchen: "المطبخ",
            diningTable: "طاولة الطعام",
            electricKettle: "غلاية كهربائية",
            refrigerator: "ثلاجة",
            bedroom: "غرفة النوم",
            alarmClock: "منبه",
            bathroom: "الحمام",
            toiletPaper: "ورق المرحاض",
            towels: "المناشف",
            bathOrShowerAmenity: "حوض أو دش",
            privateBathroomAmenity: "حمام خاص",
            freeToiletries: "لوازم الحمام المجانية",
            hairDryer: "مجفف الشعر",
            livingRoom: "غرفة المعيشة",
            diningArea: "منطقة الطعام",
            sofa: "أريكة",
            seatingArea: "منطقة الجلوس",
            roomAmenities: "مرافق الغرفة",
            socketNearBed: "مقبس بالقرب من السرير",
            heatedClothesRack: "رف ملابس ساخن",
            clothesDryingRack: "رف تجفيف الملابس",
            woodenOrParquetFlooring: "أرضية خشبية أو باركيه",
            tiledMarbleFlooring: "أرضية بلاط/رخام",
            privateEntrance: "مدخل خاص",
            heating: "تدفئة",
            // Additional Services
            receptionServices: "خدمات الاستقبال",
            invoiceProvision: "إمكانية توفير فاتورة",
            luggageStorage: "تخزين الأمتعة (رسوم إضافية)",
            expressCheckInOut: "تسجيل وصول/مغادرة سريع (رسوم إضافية)",
            reception24Hours: "استقبال 24 ساعة",
            cleaningServices: "خدمات التنظيف",
            dailyHousekeepingExtra: "تنظيف يومي (رسوم إضافية)",
            communicationLanguages: "لغات التواصل",
            arabic: "العربية",
            greek: "اليونانية",
            english: "الإنجليزية",
            // Property Rules section
            propertyRulesPolicies: "قوانين وسياسات العقار",
            checkInOut: "تسجيل الوصول/المغادرة",
            checkInTime: "تسجيل الوصول",
            checkOutTime: "تسجيل المغادرة",
            checkInHours: "من 3:00 مساءً إلى 8:00 مساءً",
            checkOutHours: "من 8:00 صباحاً إلى 12:00 ظهراً",
            checkInAdvanceNotice: "يجب إبلاغ العقار مسبقاً عن وقت وصولك.",
            childrenBeds: "الأطفال والأسرة",
            childrenPolicies: "سياسات الأطفال",
            childrenNotAllowed: "لا يُسمح بالأطفال.",
            cribExtraBedPolicies: "سياسات أسرة الأطفال والأسرة الإضافية",
            noCribsExtraBeds: "هذا العقار لا يوفر أسرة أطفال أو أسرة إضافية.",
            noAgeRestrictions: "بدون قيود عمرية",
            noAgeRestrictionsCheckIn: "لا توجد قيود عمرية لتسجيل الوصول.",
            propertyPolicies: "سياسات العقار",
            smokingPolicy: "سياسة التدخين",
            smokingNotAllowed: "لا يُسمح بالتدخين.",
            parties: "الحفلات",
            partiesNotAllowed: "لا يُسمح بالحفلات أو الفعاليات.",
            pets: "الحيوانات الأليفة",
            petsNotAllowed: "لا يُسمح بالحيوانات الأليفة."
        },
        // Footer
        footer: {
            brandName: "Nana's Rooms",
            description: "شريكك الموثوق في العثور على الإقامة المثالية",
            subDescription: "إقامات مريحة، أسعار معقولة.",
            contactInfo: {
                title: "معلومات الاتصال",
                email: "info@nanasrooms.com",
                phone: "+30 6955217820",
                address: "ميكونوس تشورا"
            },
            copyright: "© 2025 Nana's Rooms. جميع الحقوق محفوظة."
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
