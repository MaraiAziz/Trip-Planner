import { destinationService } from "../services/destinationService";
import { useTrip } from "../context/TripContext";
import MapView from "./MapView";

export default function AttractionList() {
  const { search } = useTrip();

  const list = search
    ? destinationService.searchDestinations(search)
    : destinationService.getDestinations();

  return (
    <div>
      <h3>Popular Destinations</h3>

      {list.length === 0 && <p>No destinations found!</p>}

      {list.map((destination) => (
        <div
          key={destination.id}
          style={{
            border: "1px solid #ddd",
            padding: "12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <div>
            <b>
              {destination.img} {destination.name}
            </b>

            <p>{destination.desc}</p>

            <small>
              {destination.country} | Rs. {destination.price}
            </small>
          </div>

          <MapView destination={destination.name} />
        </div>
      ))}
    </div>
  );
}
