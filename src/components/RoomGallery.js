import React from "react";

const rooms = [
  {
    id: 1,
    title: "Cozy Studio Apartment",
    image: "/images/room1.jpg",
    description: "Perfect for solo travelers. Close to city center."
  },
  {
    id: 2,
    title: "Luxury Suite with Balcony",
    image: "/images/room2.jpg",
    description: "Spacious and bright. Enjoy the skyline views."
  },
  {
    id: 3,
    title: "Modern 2-Bedroom Loft",
    image: "/images/room3.jpg",
    description: "Great for families or small groups."
  }
];

export default function RoomGallery() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Available Rooms</h1>
      <div style={styles.grid}>
        {rooms.map((room) => (
          <div key={room.id} style={styles.card}>
            <img src={room.image} alt={room.title} style={styles.image} />
            <h2 style={styles.title}>{room.title}</h2>
            <p style={styles.description}>{room.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "sans-serif",
    backgroundColor: "#f7f7f7",
    minHeight: "100vh"
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#333"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px"
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    paddingBottom: "15px"
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover"
  },
  title: {
    margin: "10px 0",
    color: "#444"
  },
  description: {
    color: "#666",
    fontSize: "14px",
    padding: "0 10px"
  }
};
