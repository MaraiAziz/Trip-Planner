export const itineraryService = {
  getTrips() {
    return JSON.parse(localStorage.getItem("trips") || "[]");
  },

  saveTrip(trip) {
    const trips = this.getTrips();

    const newTrip = {
      ...trip,
      id: Date.now()
    };

    trips.push(newTrip);

    localStorage.setItem("trips", JSON.stringify(trips));

    return newTrip;
  },

  deleteTrip(id) {
    const trips = this.getTrips().filter(
      trip => trip.id !== id
    );

    localStorage.setItem("trips", JSON.stringify(trips));
  }
};