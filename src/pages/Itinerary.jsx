import { useNavigate, useLocation } from "react-router-dom";

export default function Itinerary() {
  const navigate = useNavigate();
  const location = useLocation();
  const trip = location.state || {
    destination: "Neelum Valley",
    days: "5",
    budget: "8000",
    persons: "2",
  };

  const totalBudget = Number(trip.budget) || 8000;
  const days = Number(trip.days) || 5;
  const persons = Number(trip.persons) || 2;

  // Budget Summary Calculation
  const perDay = Math.round(totalBudget / days);
  const perPerson = Math.round(totalBudget / persons);
  const hotel = Math.round(totalBudget * 0.4);
  const food = Math.round(totalBudget * 0.3);
  const transport = Math.round(totalBudget * 0.2);
  const activities = Math.round(totalBudget * 0.1);

  const mapUrl = `https://maps.google.com/maps?q=${trip.destination}, Kashmir, Pakistan&output=embed`;

  return (
    <div
      style={{
        padding: "30px",
        textAlign: "center",
        fontFamily: "sans-serif",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <h1>Kashmir Trip Itinerary</h1>
      <h2>{trip.destination}</h2>
      <p>
        <b>{days} Days</b> | <b>{persons} Persons</b> | Total Budget: Rs{" "}
        {totalBudget}
      </p>

      {/* MAP VIEW */}
      <div
        style={{
          border: "2px solid #ddd",
          borderRadius: "10px",
          overflow: "hidden",
          margin: "20px 0",
        }}
      >
        <h3 style={{ margin: "10px 0" }}>Map View - {trip.destination}</h3>
        <iframe
          title="Map View"
          src={mapUrl}
          width="100%"
          height="280"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* BUDGET SUMMARY */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "left",
          background: "#f9f9f9",
        }}
      >
        <h3 style={{ textAlign: "center", marginTop: 0 }}>Budget Summary</h3>
        <p>
          Total Budget: <b>Rs {totalBudget}</b>
        </p>
        <p>
          Per Day Cost: <b>Rs {perDay}</b>
        </p>
        <p>
          Per Person Cost: <b>Rs {perPerson}</b>
        </p>
        <hr />
        <p>Hotel / Stay (40%): Rs {hotel}</p>
        <p>Food (30%): Rs {food}</p>
        <p>Transport (20%): Rs {transport}</p>
        <p>Activities / Shopping (10%): Rs {activities}</p>
        <p style={{ color: "green", textAlign: "center" }}>
          <b>Your Kashmir Trip is within Budget!</b>
        </p>
      </div>

      <div
        style={{ textAlign: "left", maxWidth: "500px", margin: "20px auto" }}
      >
        <p>Day 1: Muzaffarabad to {trip.destination}</p>
        <p>Day 2: Explore {trip.destination} - Waterfalls & Viewpoints</p>
        <p>Day 3: Local Food & Shopping in Kashmir</p>
        <p>Day 4: Arang Kel / Sharda Visit</p>
        <p>Day 5: Return to Muzaffarabad</p>
      </div>

      <button
        onClick={() => navigate("/saved-trips")}
        style={{
          padding: "10px 25px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          margin: "10px",
        }}
      >
        Save Trip
      </button>
      <br />
      <button
        onClick={() => navigate("/dashboard")}
        style={{ padding: "10px 25px", margin: "10px" }}
      >
        Back to Dashboard
      </button>
    </div>
  );
}
