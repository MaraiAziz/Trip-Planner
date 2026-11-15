export default function ItineraryDay({ day, destination }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>
        Day {day} - {destination}
      </h3>

      <p>09:00 AM - Breakfast</p>
      <p>11:00 AM - Sightseeing</p>
      <p>02:00 PM - Lunch</p>
      <p>06:00 PM - Free Time</p>
    </div>
  );
}
