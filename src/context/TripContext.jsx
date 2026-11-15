import { createContext, useContext, useState } from "react";

const TripContext = createContext();

export function TripProvider({ children }) {
  const [trips, setTrips] = useState([]);
  const [currentTrip, setCurrentTrip] = useState(null);

  const addTrip = (trip) => {
    setTrips([...trips, trip]);
    setCurrentTrip(trip);
  };

  return (
    <TripContext.Provider
      value={{ trips, currentTrip, setCurrentTrip, addTrip }}
    >
      {children}
    </TripContext.Provider>
  );
}

export function useTrip() {
  return useContext(TripContext);
}
