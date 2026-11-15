export const destinationService = {
  getDestinations() {
    return [
      {
        id: 1,
        name: "Neelum Valley",
        country: "Azad Kashmir",
        price: 25000,
        img: "🏞️",
        desc: "Beautiful mountains and rivers"
      },
      {
        id: 2,
        name: "Arang Kel",
        country: "Azad Kashmir",
        price: 30000,
        img: "🌲",
        desc: "Green meadows and mountain views"
      },
      {
        id: 3,
        name: "Ratti Gali Lake",
        country: "Azad Kashmir",
        price: 35000,
        img: "🏔️",
        desc: "Beautiful alpine lake"
      },
      {
        id: 4,
        name: "Banjosa Lake",
        country: "Rawalakot",
        price: 15000,
        img: "🌊",
        desc: "Peaceful lake and green forests"
      },
      {
        id: 5,
        name: "Pir Chinasi",
        country: "Muzaffarabad",
        price: 18000,
        img: "⛰️",
        desc: "Beautiful mountain viewpoint"
      },
      {
        id: 6,
        name: "Toli Pir",
        country: "Rawalakot",
        price: 20000,
        img: "🌄",
        desc: "Green mountain meadows"
      },
      {
        id: 7,
        name: "Sharda",
        country: "Neelum Valley",
        price: 22000,
        img: "🏕️",
        desc: "Historic town and scenic valley"
      },
      {
        id: 8,
        name: "Muzaffarabad",
        country: "Azad Kashmir",
        price: 12000,
        img: "🏙️",
        desc: "Capital city of Azad Kashmir"
      }
    ];
  },

  searchDestinations(q) {
    return this.getDestinations().filter(d =>
      d.name.toLowerCase().includes(q.toLowerCase())
    );
  }
};