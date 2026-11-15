function Landing({ setPage, onNavigate }) {
  const go = (p) => {
    if (setPage) setPage(p);
    if (onNavigate) onNavigate(p);
  };

  return (
    <div
      style={{ fontFamily: "Arial", background: "#fff", minHeight: "100vh" }}
    >
      {/* Top Navbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 30px",
          background: "#0f3d33",
          color: "white",
        }}
      >
        <b style={{ fontSize: "20px" }}>⛰️ Trip Planner</b>
        <div style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
          <span>Home</span>
          <span>Destinations</span>
          <span>Plans</span>
          <span>About</span>
          <button
            onClick={() => go("login")}
            style={{
              background: "white",
              border: "none",
              padding: "6px 14px",
              borderRadius: "20px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          padding: "40px 30px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, minWidth: "280px" }}>
          <h1
            style={{
              fontSize: "42px",
              lineHeight: "1.1",
              margin: "0 0 15px 0",
              color: "#111",
            }}
          >
            Plan your next
            <br />
            adventure
          </h1>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Discover destinations, create personalized itineraries, manage your
            budget and organize your entire trip in one place.
          </p>
          <button
            onClick={() => go("create")}
            style={{
              background: "#0f3d33",
              color: "white",
              border: "none",
              padding: "12px 22px",
              borderRadius: "25px",
              fontSize: "15px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Start Planning →
          </button>
        </div>

        <div style={{ flex: 1, minWidth: "280px" }}>
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
            alt="Mountains"
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
        </div>
      </div>

      {/* 3 Cards */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          padding: "0 30px 40px 30px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: "180px",
            border: "1px solid #e2e8f0",
            padding: "18px",
            borderRadius: "12px",
          }}
        >
          <div style={{ fontSize: "24px" }}>🗓️</div>
          <b>Build Itineraries</b>
          <p style={{ color: "#666", fontSize: "13px" }}>
            Create day-by-day travel plans easily.
          </p>
        </div>
        <div
          style={{
            flex: 1,
            minWidth: "180px",
            border: "1px solid #e2e8f0",
            padding: "18px",
            borderRadius: "12px",
          }}
        >
          <div style={{ fontSize: "24px" }}>💰</div>
          <b>Manage Budget</b>
          <p style={{ color: "#666", fontSize: "13px" }}>
            Estimate and track your trip expenses.
          </p>
        </div>
        <div
          style={{
            flex: 1,
            minWidth: "180px",
            border: "1px solid #e2e8f0",
            padding: "18px",
            borderRadius: "12px",
          }}
        >
          <div style={{ fontSize: "24px" }}>📍</div>
          <b>Explore Destinations</b>
          <p style={{ color: "#666", fontSize: "13px" }}>
            Find top places, hotels and activities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
