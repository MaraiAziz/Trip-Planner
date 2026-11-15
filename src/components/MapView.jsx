import { mapService } from "../services/mapService";

export default function MapView({ destination }) {
  return (
    <a
      href={mapService.getMapUrl(destination)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button type="button">🗺️ View Map</button>
    </a>
  );
}
