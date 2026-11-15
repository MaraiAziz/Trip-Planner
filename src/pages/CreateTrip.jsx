import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateTrip() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("Neelum Valley");
  const [days, setDays] = useState("5");
  const [budget, setBudget] = useState("");
  const [persons, setPersons] = useState("2");

  const handleCreate = (e) => {
    e.preventDefault();
    navigate("/itinerary", { state: { destination, days, budget, persons } });
  };

  return (
    <div
      style={{ padding: "30px", textAlign: "center", fontFamily: "sans-serif" }}
    >
      <h1>Create New Trip ✈️</h1>
      <p>Plan Your Kashmir Trip</p>
      <form
        onSubmit={handleCreate}
        style={{ maxWidth: "350px", margin: "0 auto", textAlign: "left" }}
      >
        <label>Select Destination in Kashmir</label>
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          style={{ padding: "10px", width: "100%", margin: "5px 0 15px 0" }}
        >
          <option>Neelum Valley</option>
          <option>Muzaffarabad</option>
          <option>Rawalakot</option>
          <option>Bagh</option>
          <option>Leepa Valley</option>
          <option>Arang Kel</option>
          <option>Ratti Gali Lake</option>
        </select>

        <label>How Many Days?</label>
        <select
          value={days}
          onChange={(e) => setDays(e.target.value)}
          style={{ padding: "10px", width: "100%", margin: "5px 0 15px 0" }}
        >
          <option value="3">3 Days</option>
          <option value="5">5 Days</option>
          <option value="7">7 Days</option>
        </select>

        <label>Budget (Rs)</label>
        <input
          placeholder="e.g. 80000"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            margin: "5px 0 15px 0",
            display: "block",
          }}
        />

        <label>Number of Persons</label>
        <input
          type="number"
          value={persons}
          onChange={(e) => setPersons(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            margin: "5px 0 15px 0",
            display: "block",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "12px 25px",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            width: "100%",
          }}
        >
          Create Trip
        </button>
      </form>
      <br />
      <button onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
    </div>
  );
}
