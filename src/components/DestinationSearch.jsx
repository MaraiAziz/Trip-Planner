import { useTrip } from "../context/TripContext";

export default function DestinationSearch() {
  const { search, setSearch } = useTrip();

  return (
    <input
      type="text"
      placeholder="🔍 Search Murree, Hunza..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        width: "100%",
        padding: "12px",
        marginBottom: "15px",
        borderRadius: "8px",
        border: "1px solid #ccc",
      }}
    />
  );
}
