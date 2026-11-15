import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div
      style={{ padding: "40px", textAlign: "center", fontFamily: "sans-serif" }}
    >
      <h1>Welcome To TripPlanner 🎉</h1>

      <button
        onClick={() => navigate("/create-trip")}
        style={{
          padding: "12px 25px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          margin: "10px",
        }}
      >
        + Create New Trip
      </button>
      <br />
      <button
        onClick={() => navigate("/saved-trips")}
        style={{
          padding: "10px 25px",
          background: "orange",
          color: "white",
          border: "none",
          borderRadius: "5px",
          margin: "10px",
        }}
      >
        Saved Trips
      </button>
      <br />
      <button
        onClick={() => navigate("/itinerary")}
        style={{ padding: "10px 25px", margin: "10px" }}
      >
        Itinerary Dekho
      </button>
      <br />
      <button
        onClick={() => navigate("/")}
        style={{ padding: "10px 25px", margin: "10px" }}
      >
        Logout
      </button>
    </div>
  );
}
