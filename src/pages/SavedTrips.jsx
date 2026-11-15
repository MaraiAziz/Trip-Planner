import { useNavigate } from "react-router-dom";
export default function SavedTrips() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Saved Trips ❤️</h1>
      <p>Abhi koi saved trip nahi hai.</p>
      <button onClick={() => navigate("/dashboard")}>Dashboard pe Wapis</button>
    </div>
  );
}
