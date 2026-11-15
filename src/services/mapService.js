export const mapService = {
  getMapUrl(destination) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination)}`;
  }
};