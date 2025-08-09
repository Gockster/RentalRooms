// Room images data for the rental rooms application

export const heroImages = [
    {
        url: "/images/RoomsImages/room-nana-01.jpg",
        title: "Luxury Modern Suites",
        subtitle: "Premium accommodations with stunning city views"
    },
    {
        url: "/images/RoomsImages/room-nana-04.webp",
        title: "Cozy Studio Apartments",
        subtitle: "Perfect for solo travelers and digital nomads"
    },
    {
        url: "/images/RoomsImages/room-nana-05.webp",
        title: "Family-Friendly Spaces",
        subtitle: "Spacious accommodations for groups and families"
    },
    {
        url: "/images/RoomsImages/room-nana-20.jpg",
        title: "Contemporary Living",
        subtitle: "Modern amenities in prime locations"
    },
    {
        url: "/images/RoomsImages/room-nana-23.jpg",
        title: "Executive Rooms",
        subtitle: "Professional stays with business amenities"
    }
];

export const galleryImages = [
    {
        id: 1,
        title: "Deluxe Studio Suite",
        image: "/images/RoomsImages/room-nana-30.jpg",
        description: "Modern studio with panoramic city views and premium amenities.",
        price: "200€/night",
        amenities: ["WiFi", "Kitchen", "City View", "Air Conditioning"],
        rating: 4.9,
        availability: "Available"
    },
    {
        id: 2,
        title: "Executive Business Room",
        image: "/images/RoomsImages/room-nana-31.jpg",
        description: "Perfect for business travelers with workspace and meeting facilities.",
        price: "300€/night",
        amenities: ["WiFi", "Workspace", "Room Service", "Business Center"],
        rating: 4.8,
        availability: "Available"
    }
];

 export const collageImages = [
        { src: "/images/RoomsImages/room-nana-02.jpg", alt: "Deluxe Studio Suite" },
        { src: "/images/RoomsImages/room-nana-03.jpg", alt: "Executive Business Room" },
        { src: "/images/RoomsImages/room-nana-04.webp", alt: "Sea View Room" },
        { src: "/images/RoomsImages/room-nana-05.webp", alt: "Family-Friendly Space" },
        { src: "/images/RoomsImages/room-nana-46.jpg", alt: "Contemporary Living" },
        { src: "/images/RoomsImages/room-nana-08.jpg", alt: "Executive Room" }
    ];


export default {
    heroImages,
    galleryImages,
    collageImages
};
