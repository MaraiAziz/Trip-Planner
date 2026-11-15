import { useState } from "react";

function App() {
  const [page, setPage] = useState("landing");

  const menu = [
    { id: "landing", label: "✈️ Landing" },
    { id: "home", label: "🏠 My Trips" },
    { id: "explore", label: "🔍 Explore" },
    { id: "create", label: "➕ Create Trip" },
    { id: "budget", label: "💰 Budget" },
    { id: "map", label: "🗺️ Map" },
    { id: "itinerary", label: "📅 Itinerary" },
    { id: "saved", label: "❤️ Saved Trips" },
    { id: "notifications", label: "🔔 Notifications" },
    { id: "profile", label: "👤 My Profile" },
  ];

  const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #e2e8f0",
    marginBottom: "14px",
    boxSizing: "border-box",
    fontSize: "14px",
  };
  const labelStyle = { fontWeight: 600, fontSize: "13px", margin: "0 0 6px" };

  // ===== PAGE 1 - LANDING - FIGMA WALA =====
  if (page === "landing") {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#fff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Top Navbar */}
        <div
          style={{
            background: "#0F3D33",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 40px",
          }}
        >
          <div style={{ fontSize: "19px", fontWeight: "bold" }}>
            ⛰️ Trip Planner
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              fontSize: "14px",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                borderBottom: "2px solid white",
                paddingBottom: "2px",
              }}
            >
              Home
            </span>
            <span
              onClick={() => setPage("explore")}
              style={{ cursor: "pointer" }}
            >
              Destinations
            </span>
            <span onClick={() => setPage("home")} style={{ cursor: "pointer" }}>
              Plans
            </span>
            <span style={{ cursor: "pointer" }}>About</span>
            <button
              onClick={() => setPage("login")}
              style={{
                background: "white",
                color: "#0F3D33",
                border: "none",
                padding: "7px 18px",
                borderRadius: "20px",
                fontWeight: "bold",
                cursor: "pointer",
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
            gap: "40px",
            padding: "45px 40px 20px 40px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1", minWidth: "300px" }}>
            <h1
              style={{
                fontSize: "48px",
                lineHeight: "1.05",
                margin: "0",
                fontWeight: "800",
                color: "#111",
              }}
            >
              Plan your next
              <br />
              adventure
            </h1>
            <p
              style={{
                color: "#5A6C7D",
                fontSize: "15px",
                lineHeight: "1.7",
                marginTop: "16px",
                maxWidth: "440px",
              }}
            >
              Discover destinations, create personalized itineraries, manage
              your budget and organize your entire trip in one place.
            </p>
            <button
              onClick={() => setPage("create")}
              style={{
                background: "#0F3D33",
                color: "white",
                border: "none",
                padding: "13px 26px",
                borderRadius: "25px",
                fontSize: "15px",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: "18px",
              }}
            >
              Start Planning →
            </button>
          </div>
          <div style={{ flex: "1", minWidth: "300px" }}>
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000"
              alt="Mountain"
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                borderRadius: "18px",
              }}
            />
          </div>
        </div>

        {/* 3 Cards */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            padding: "25px 40px 50px 40px",
            flexWrap: "wrap",
          }}
        >
          <div
            onClick={() => setPage("create")}
            style={{
              flex: "1",
              minWidth: "200px",
              border: "1px solid #E8EDF2",
              borderRadius: "14px",
              padding: "20px",
              cursor: "pointer",
            }}
          >
            <div style={{ fontSize: "22px" }}>🗓️</div>
            <h3 style={{ margin: "12px 0 6px 0" }}>Build Itineraries</h3>
            <p
              style={{
                color: "#6B7A8A",
                fontSize: "13px",
                lineHeight: "1.5",
                margin: "0",
              }}
            >
              Create day-by-day travel plans with activities, stays and
              transport.
            </p>
          </div>
          <div
            onClick={() => setPage("budget")}
            style={{
              flex: "1",
              minWidth: "200px",
              border: "1px solid #E8EDF2",
              borderRadius: "14px",
              padding: "20px",
              cursor: "pointer",
            }}
          >
            <div style={{ fontSize: "22px" }}>💰</div>
            <h3 style={{ margin: "12px 0 6px 0" }}>Manage Budget</h3>
            <p
              style={{
                color: "#6B7A8A",
                fontSize: "13px",
                lineHeight: "1.5",
                margin: "0",
              }}
            >
              Estimate costs, track spending and stay within your budget.
            </p>
          </div>
          <div
            onClick={() => setPage("explore")}
            style={{
              flex: "1",
              minWidth: "200px",
              border: "1px solid #E8EDF2",
              borderRadius: "14px",
              padding: "20px",
              cursor: "pointer",
            }}
          >
            <div style={{ fontSize: "22px" }}>📍</div>
            <h3 style={{ margin: "12px 0 6px 0" }}>Explore Destinations</h3>
            <p
              style={{
                color: "#6B7A8A",
                fontSize: "13px",
                lineHeight: "1.5",
                margin: "0",
              }}
            >
              Discover top destinations, hotels and must-see attractions.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ===== PAGE 2 - SIGNUP / CREATE ACCOUNT =====
  if (page === "signup") {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f4c4a",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "18px",
            padding: "30px",
            width: "340px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "50px" }}>✨</div>
          <h2 style={{ margin: "10px 0 4px" }}>Create Account</h2>
          <p style={{ color: "#64748b", fontSize: "13px" }}>
            Join Trip Planner - It is Free!
          </p>
          <input placeholder="Full Name - Maria" style={inputStyle} />
          <input
            placeholder="Email - maria.trip@gmail.com"
            style={inputStyle}
          />
          <input type="password" placeholder="Password" style={inputStyle} />
          <button
            onClick={() => setPage("home")}
            style={{
              width: "100%",
              background: "#0f4c4a",
              color: "white",
              padding: "13px",
              border: "none",
              borderRadius: "12px",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Create Account →
          </button>
          <p style={{ fontSize: "12px", color: "#64748b", marginTop: "12px" }}>
            Already have an account?{" "}
            <b
              onClick={() => setPage("login")}
              style={{ color: "#0f766e", cursor: "pointer" }}
            >
              Sign In
            </b>{" "}
            •{" "}
            <b
              onClick={() => setPage("landing")}
              style={{ color: "#0f766e", cursor: "pointer" }}
            >
              Back
            </b>
          </p>
        </div>
      </div>
    );
  }

  // LOGIN PAGE - Will open after Logout
  if (page === "login") {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f4c4a",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "18px",
            padding: "30px",
            width: "340px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "50px" }}>🏔️</div>
          <h2 style={{ margin: "10px 0 4px" }}>Welcome Back, Maria! 👋</h2>
          <p style={{ color: "#64748b", fontSize: "13px" }}>
            Login again to Trip Planner
          </p>
          <input
            placeholder="maria.trip@gmail.com"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #e2e8f0",
              marginBottom: "12px",
              boxSizing: "border-box",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #e2e8f0",
              marginBottom: "16px",
              boxSizing: "border-box",
            }}
          />
          <button
            onClick={() => setPage("home")}
            style={{
              width: "100%",
              background: "#0f4c4a",
              color: "white",
              padding: "13px",
              border: "none",
              borderRadius: "12px",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Login →
          </button>
          <p style={{ fontSize: "12px", color: "#64748b", marginTop: "12px" }}>
            Forgot Password? <b style={{ color: "#0f766e" }}>Reset</b> •{" "}
            <b
              onClick={() => setPage("landing")}
              style={{ color: "#0f766e", cursor: "pointer" }}
            >
              Back to Home
            </b>{" "}
            •{" "}
            <b
              onClick={() => setPage("signup")}
              style={{ color: "#0f766e", cursor: "pointer" }}
            >
              Create Account
            </b>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        background: "#f4f6f8",
      }}
    >
      {/* SIDEBAR */}
      <div
        style={{
          width: "250px",
          minWidth: "250px",
          background: "#0f4c4a",
          color: "white",
          padding: "22px 16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{ fontSize: "22px", fontWeight: 800, marginBottom: "20px" }}
        >
          🏔️ Trip Planner
        </div>
        {menu.map((m) => (
          <div
            key={m.id}
            onClick={() => setPage(m.id)}
            style={{
              padding: "11px 12px",
              borderRadius: "10px",
              cursor: "pointer",
              marginBottom: "4px",
              background: page === m.id ? "white" : "transparent",
              color: page === m.id ? "#0f4c4a" : "white",
              fontWeight: page === m.id ? 700 : 400,
            }}
          >
            {m.label}
          </div>
        ))}
        {/* LOGOUT */}
        <div
          style={{
            marginTop: "auto",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              background: "rgba(255,255,255,0.15)",
              padding: "10px",
              borderRadius: "12px",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                background: "white",
                color: "#0f4c4a",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
              }}
            >
              M
            </div>
            <div>
              <div style={{ fontSize: "13px", fontWeight: 700 }}>Maria</div>
              <div style={{ fontSize: "11px", opacity: 0.8 }}>
                Gold Traveler ⭐
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              if (window.confirm("Do you want to logout?")) setPage("login");
            }}
            style={{
              padding: "11px 12px",
              borderRadius: "10px",
              cursor: "pointer",
              background: "#ef4444",
              color: "white",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            🚪 Logout
          </div>
        </div>
      </div>

      <div style={{ flex: 1, padding: "20px 26px", minWidth: 0 }}>
        <div
          style={{
            background: "white",
            padding: "12px 16px",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <span style={{ color: "#64748b" }}>🔍 Search destinations...</span>
          <span>🔔 👤</span>
        </div>

        {page === "home" && (
          <div>
            <h2>Welcome back, Maria! 👋</h2>
            <div
              style={{
                background: "#0f4c4a",
                color: "white",
                borderRadius: "14px",
                padding: "24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <div>
                <h3 style={{ margin: 0 }}>Your Next Trip: Murree</h3>
                <p>20 Dec - 25 Dec • 5 Days</p>
                <button
                  onClick={() => setPage("itinerary")}
                  style={{
                    background: "white",
                    color: "#0f4c4a",
                    border: "none",
                    padding: "10px 18px",
                    borderRadius: "8px",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  View Itinerary →
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
                alt="Murree"
                style={{
                  width: "180px",
                  height: "110px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </div>
          </div>
        )}

        {page === "explore" && (
          <div>
            <h2>Explore Destinations</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              {[
                {
                  n: "Murree",
                  img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
                  p: "PKR 25,000",
                },
                {
                  n: "Hunza",
                  img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
                  p: "PKR 45,000",
                },
                {
                  n: "Swat",
                  img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
                  p: "PKR 30,000",
                },
                {
                  n: "Kashmir",
                  img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
                  p: "PKR 35,000",
                },
              ].map((d) => (
                <div
                  key={d.n}
                  style={{
                    background: "white",
                    borderRadius: "14px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={d.img}
                    alt={d.n}
                    style={{
                      width: "100%",
                      height: "170px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div style={{ padding: "14px" }}>
                    <b>{d.n}</b>
                    <p
                      style={{
                        color: "#0f766e",
                        fontWeight: 700,
                        margin: "4px 0 0",
                      }}
                    >
                      {d.p}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === "create" && (
          <div>
            <h2 style={{ margin: "0 0 4px" }}>Create New Trip ✈️</h2>
            <p style={{ color: "#64748b", margin: "0 0 16px" }}>
              Plan your next adventure in minutes.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <div
                style={{
                  flex: 1.6,
                  background: "white",
                  borderRadius: "16px",
                  padding: "22px",
                }}
              >
                <p style={labelStyle}>Trip Name</p>
                <input defaultValue="Hunza Valley Trip" style={inputStyle} />
                <p style={labelStyle}>Destination</p>
                <input defaultValue="Hunza, Pakistan" style={inputStyle} />
                <div style={{ display: "flex", gap: "12px" }}>
                  <div style={{ flex: 1 }}>
                    <p style={labelStyle}>Start Date</p>
                    <input
                      type="date"
                      defaultValue="2026-04-12"
                      style={inputStyle}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={labelStyle}>End Date</p>
                    <input
                      type="date"
                      defaultValue="2026-04-16"
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <div style={{ flex: 1 }}>
                    <p style={labelStyle}>Travelers</p>
                    <input defaultValue="2 Travelers" style={inputStyle} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={labelStyle}>Total Budget</p>
                    <input defaultValue="PKR 100,000" style={inputStyle} />
                  </div>
                </div>
                <p style={labelStyle}>Trip Type</p>
                <div
                  style={{ display: "flex", gap: "8px", marginBottom: "16px" }}
                >
                  {["🏔️ Adventure", "🏖️ Relax", "🏰 Culture", "👨‍👩‍👧 Family"].map(
                    (t) => (
                      <span
                        key={t}
                        style={{
                          padding: "8px 12px",
                          borderRadius: "20px",
                          border: "1px solid #0f766e",
                          background:
                            t === "🏔️ Adventure" ? "#0f766e" : "white",
                          color: t === "🏔️ Adventure" ? "white" : "#0f766e",
                          fontSize: "12px",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        {t}
                      </span>
                    ),
                  )}
                </div>
                <button
                  onClick={() => setPage("itinerary")}
                  style={{
                    width: "100%",
                    background: "#0f4c4a",
                    color: "white",
                    padding: "14px",
                    border: "none",
                    borderRadius: "12px",
                    fontWeight: 800,
                    fontSize: "15px",
                    cursor: "pointer",
                  }}
                >
                  Create Trip →
                </button>
              </div>
              <div
                style={{
                  flex: 1,
                  background: "linear-gradient(180deg,#0f4c4a,#14b8a6)",
                  color: "white",
                  borderRadius: "16px",
                  padding: "22px",
                  height: "fit-content",
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
                  alt="Hunza"
                  style={{
                    width: "100%",
                    height: "140px",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
                <h3 style={{ margin: "10px 0 6px" }}>Hunza Valley</h3>
                <p style={{ margin: 0, opacity: 0.9, fontSize: "13px" }}>
                  12 Apr - 16 Apr 2026 • 5 Days
                </p>
                <p
                  style={{
                    margin: "14px 0 0",
                    fontSize: "13px",
                    background: "rgba(255,255,255,0.2)",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  ✨ Best time to visit Hunza is April. Weather is perfect!
                </p>
              </div>
            </div>
          </div>
        )}

        {page === "budget" && (
          <div>
            <h2 style={{ margin: "0 0 4px" }}>Budget & Expenses</h2>
            <p style={{ color: "#64748b", margin: "0 0 16px" }}>
              Track your trip expenses.
            </p>
            <div
              style={{
                background: "white",
                borderRadius: "14px",
                padding: "22px",
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  <tr>
                    <td style={{ width: "170px", verticalAlign: "top" }}>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#64748b",
                          margin: 0,
                        }}
                      >
                        Total Budget
                      </p>
                      <h3 style={{ margin: "2px 0 12px" }}>PKR 100,000</h3>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#64748b",
                          margin: 0,
                        }}
                      >
                        Total Spent
                      </p>
                      <h3 style={{ margin: "2px 0 12px" }}>PKR 72,500</h3>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#64748b",
                          margin: 0,
                        }}
                      >
                        Remaining
                      </p>
                      <h3 style={{ margin: "2px 0 0", color: "#0f766e" }}>
                        PKR 27,500
                      </h3>
                    </td>
                    <td
                      style={{
                        width: "180px",
                        textAlign: "center",
                        verticalAlign: "top",
                      }}
                    >
                      <svg width="150" height="150" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="38"
                          fill="none"
                          stroke="#eeeeee"
                          strokeWidth="16"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="38"
                          fill="none"
                          stroke="#0f766e"
                          strokeWidth="16"
                          strokeDasharray="71.6 167.2"
                          strokeDashoffset="59.7"
                          transform="rotate(-90 50 50)"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="38"
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="16"
                          strokeDasharray="95.5 143.3"
                          strokeDashoffset="-11.9"
                          transform="rotate(-90 50 50)"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="38"
                          fill="none"
                          stroke="#ec4899"
                          strokeWidth="16"
                          strokeDasharray="35.8 203"
                          strokeDashoffset="-107.4"
                          transform="rotate(-90 50 50)"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="38"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="16"
                          strokeDasharray="35.8 203"
                          strokeDashoffset="-143.2"
                          transform="rotate(-90 50 50)"
                        />
                        <text
                          x="50"
                          y="44"
                          textAnchor="middle"
                          fontSize="7"
                          fill="#64748b"
                        >
                          PKR
                        </text>
                        <text
                          x="50"
                          y="55"
                          textAnchor="middle"
                          fontSize="9"
                          fontWeight="bold"
                        >
                          72,500
                        </text>
                        <text
                          x="50"
                          y="64"
                          textAnchor="middle"
                          fontSize="7"
                          fill="#64748b"
                        >
                          Spent
                        </text>
                      </svg>
                    </td>
                    <td style={{ paddingLeft: "20px", verticalAlign: "top" }}>
                      <p>
                        🟢 Transport <b style={{ float: "right" }}>30%</b>
                      </p>
                      <p>
                        🟠 Accommodation <b style={{ float: "right" }}>40%</b>
                      </p>
                      <p>
                        🩷 Food <b style={{ float: "right" }}>15%</b>
                      </p>
                      <p>
                        🔵 Activities <b style={{ float: "right" }}>15%</b>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {page === "map" && (
          <div>
            <h2 style={{ margin: "0 0 4px" }}>Trip Map 🗺️ - Real Map</h2>
            <p style={{ color: "#64748b", margin: "0 0 16px" }}>
              Hunza Valley • Zoom to explore, this is a real map.
            </p>
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "14px",
              }}
            >
              <iframe
                title="Hunza Real Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=74.45%2C36.20%2C74.95%2C36.55&layer=mapnik&marker=36.3164%2C74.6943"
                style={{
                  width: "100%",
                  height: "420px",
                  border: "0",
                  borderRadius: "12px",
                }}
              />
              <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
                <div
                  style={{
                    flex: 1,
                    background: "#f0fdfa",
                    borderRadius: "12px",
                    padding: "12px",
                  }}
                >
                  <b>📍 Karimabad</b>
                  <p
                    style={{
                      margin: "4px 0 0",
                      fontSize: "12px",
                      color: "#64748b",
                    }}
                  >
                    Main Bazaar, Hunza
                  </p>
                </div>
                <div
                  style={{
                    flex: 1,
                    background: "#fffbeb",
                    borderRadius: "12px",
                    padding: "12px",
                  }}
                >
                  <b>🏰 Baltit Fort</b>
                  <p
                    style={{
                      margin: "4px 0 0",
                      fontSize: "12px",
                      color: "#64748b",
                    }}
                  >
                    800 years old fort
                  </p>
                </div>
                <div
                  style={{
                    flex: 1,
                    background: "#fdf2f8",
                    borderRadius: "12px",
                    padding: "12px",
                  }}
                >
                  <b>🚣 Attabad Lake</b>
                  <p
                    style={{
                      margin: "4px 0 0",
                      fontSize: "12px",
                      color: "#64748b",
                    }}
                  >
                    Boating point
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {page === "itinerary" && (
          <div>
            <div
              style={{
                background: "linear-gradient(135deg,#0f4c4a,#14b8a6)",
                color: "white",
                borderRadius: "18px",
                padding: "24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <span
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    padding: "5px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: 700,
                  }}
                >
                  ✈️ UPCOMING TRIP
                </span>
                <h2 style={{ margin: "12px 0 4px", fontSize: "26px" }}>
                  Hunza Valley Trip 🏔️
                </h2>
                <p style={{ margin: 0, opacity: 0.9 }}>
                  12 Apr - 16 Apr 2026 • 5 Days • 2 Travelers
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
                alt="Hunza"
                style={{
                  width: "110px",
                  height: "110px",
                  objectFit: "cover",
                  borderRadius: "14px",
                }}
              />
            </div>
            {[
              {
                d: "Day 1 • Arrival & Explore",
                t: "9:00 AM - 6:00 PM",
                x: "Arrive in Hunza, Karimabad Bazaar, Sunset at Eagle's Nest.",
                img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
                c: "#0f766e",
              },
              {
                d: "Day 2 • Sightseeing",
                t: "8:00 AM - 7:00 PM",
                x: "Altit Fort, Baltit Fort, Eagle's Nest Viewpoint.",
                img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
                c: "#f59e0b",
              },
              {
                d: "Day 3 • Nature & Adventure",
                t: "8:00 AM - 6:00 PM",
                x: "Attabad Lake, Boating, Passu Cones.",
                img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
                c: "#ec4899",
              },
              {
                d: "Day 4 • Culture & Food",
                t: "10:00 AM - 8:00 PM",
                x: "Local food, Shopping, Music night.",
                img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
                c: "#3b82f6",
              },
              {
                d: "Day 5 • Departure",
                t: "10:00 AM",
                x: "Check-out, Back to Islamabad ❤️",
                img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
                c: "#8b5cf6",
              },
            ].map((it) => (
              <div
                key={it.d}
                style={{ display: "flex", gap: "14px", marginTop: "12px" }}
              >
                <img
                  src={it.img}
                  alt={it.d}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    flexShrink: 0,
                  }}
                />
                <div
                  style={{
                    flex: 1,
                    background: "white",
                    borderRadius: "14px",
                    padding: "16px",
                    borderLeft: `4px solid ${it.c}`,
                  }}
                >
                  <b>{it.d}</b>
                  <p
                    style={{
                      margin: "4px 0",
                      color: "#0f766e",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    ⏰ {it.t}
                  </p>
                  <p style={{ margin: 0, color: "#64748b", fontSize: "13px" }}>
                    {it.x}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {page === "saved" && (
          <div>
            <h2 style={{ margin: "0 0 4px" }}>❤️ Saved Trips</h2>
            <p style={{ color: "#64748b", margin: "0 0 16px" }}>
              Trips you have saved
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              {[
                {
                  n: "Hunza Valley",
                  p: "PKR 45,000",
                  img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
                },
                {
                  n: "Kashmir",
                  p: "PKR 35,000",
                  img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
                },
                {
                  n: "Murree",
                  p: "PKR 25,000",
                  img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
                },
                {
                  n: "Swat",
                  p: "PKR 30,000",
                  img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
                },
              ].map((d) => (
                <div
                  key={d.n}
                  style={{
                    background: "white",
                    borderRadius: "14px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={d.img}
                    alt={d.n}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ padding: "14px" }}>
                    <b>{d.n} ❤️</b>
                    <p
                      style={{
                        color: "#0f766e",
                        fontWeight: 700,
                        margin: "4px 0 0",
                      }}
                    >
                      {d.p}
                    </p>
                    <button
                      onClick={() => setPage("itinerary")}
                      style={{
                        marginTop: "10px",
                        background: "#0f4c4a",
                        color: "white",
                        border: "none",
                        padding: "8px 14px",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                    >
                      View Trip →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === "profile" && (
          <div>
            <div
              style={{
                background: "linear-gradient(135deg,#0f4c4a,#14b8a6)",
                color: "white",
                borderRadius: "18px",
                padding: "24px",
                display: "flex",
                gap: "18px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  background: "white",
                  color: "#0f4c4a",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "38px",
                  fontWeight: 800,
                }}
              >
                M
              </div>
              <div>
                <h2 style={{ margin: 0 }}>Maria ✨</h2>
                <p style={{ margin: "4px 0", opacity: 0.9 }}>
                  maria.trip@gmail.com • Azad Kashmir
                </p>
                <span
                  style={{
                    background: "white",
                    color: "#0f4c4a",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: 700,
                  }}
                >
                  ⭐ Gold Traveler
                </span>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                gap: "12px",
                marginTop: "14px",
              }}
            >
              {[
                { n: "12", l: "Trips Done", e: "✈️" },
                { n: "5", l: "Upcoming", e: "📅" },
                { n: "PKR 4.2L", l: "Total Spent", e: "💰" },
                { n: "48", l: "Places", e: "📍" },
              ].map((s) => (
                <div
                  key={s.l}
                  style={{
                    background: "white",
                    borderRadius: "14px",
                    padding: "16px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "26px" }}>{s.e}</div>
                  <h3 style={{ margin: "6px 0 2px" }}>{s.n}</h3>
                  <p style={{ margin: 0, color: "#64748b", fontSize: "12px" }}>
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
            <div
              style={{
                background: "white",
                borderRadius: "14px",
                padding: "18px",
                marginTop: "14px",
              }}
            >
              <h3 style={{ margin: "0 0 10px" }}>🏆 My Achievements</h3>
              <p>🥇 Explorer Badge • 10 Trips Completed</p>
              <p>📸 Photo Star • 200+ Photos</p>
              <p>💰 Budget Master • Saved 20%</p>
              <div
                style={{
                  background: "#e2e8f0",
                  height: "8px",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    width: "75%",
                    height: "100%",
                    background: "#0f766e",
                    borderRadius: "10px",
                  }}
                ></div>
              </div>
              <p style={{ fontSize: "12px", color: "#64748b" }}>
                75% to Platinum Traveler ⭐
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
