
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const themes = [
  {
    name: "Green",
    color: "#16a34a",
    light: "#dcfce7",
    dark: "#052e16",
  },
  {
    name: "Pink",
    color: "#ec4899",
    light: "#fce7f3",
    dark: "#500724",
  },
  {
    name: "Purple",
    color: "#9333ea",
    light: "#f3e8ff",
    dark: "#2e1065",
  },
  {
    name: "Blue",
    color: "#2563eb",
    light: "#dbeafe",
    dark: "#172554",
  },
  {
    name: "Red",
    color: "#dc2626",
    light: "#fee2e2",
    dark: "#450a0a",
  },
  {
    name: "Black",
    color: "#171717",
    light: "#e5e5e5",
    dark: "#000000",
  },
  {
    name: "Orange",
    color: "#ea580c",
    light: "#ffedd5",
    dark: "#431407",
  },
  {
    name: "Brown",
    color: "#92400e",
    light: "#fef3c7",
    dark: "#451a03",
  },
];

export default function Settings() {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const [showThemes, setShowThemes] = useState(false);

  const backgroundColor = darkMode
    ? selectedTheme.dark
    : selectedTheme.light;

  const textColor = darkMode ? "#ffffff" : "#171717";

  const secondaryText = darkMode
    ? "#d1d5db"
    : "#4b5563";

  const toggleDarkMode = () => {
    setDarkMode((previous) => !previous);
  };

  const chooseTheme = (theme) => {
    setSelectedTheme(theme);
    setShowThemes(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        boxSizing: "border-box",
        backgroundColor: backgroundColor,
        color: textColor,
        transition: "background-color 0.3s ease",
      }}
    >

      {/* TITLE */}

      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginTop: "20px",
          color: selectedTheme.color,
        }}
      >
        ⚙️ Settings
      </h1>

      <p
        style={{
          marginTop: "5px",
          marginBottom: "30px",
          fontSize: "16px",
          color: secondaryText,
        }}
      >
        Tap to customize your world
      </p>


      {/* BUTTON GRID */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(2, minmax(180px, 250px))",
          gap: "15px",
        }}
      >

        {/* DARK / LIGHT */}

        <button
          onClick={toggleDarkMode}
          style={{
            aspectRatio: "1",
            border: "none",
            borderRadius: "20px",
            backgroundColor: selectedTheme.color,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            boxShadow:
              "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <span
            style={{
              fontSize: "32px",
              marginBottom: "10px",
            }}
          >
            {darkMode ? "☀️" : "🌙"}
          </span>

          <span
            style={{
              color: "white",
              fontSize: "17px",
              fontWeight: "bold",
            }}
          >
            {darkMode ? "Light" : "Dark"}
          </span>
        </button>


        {/* NOTIFICATIONS */}

        <button
          onClick={() => navigate("/notification")}
          style={{
            aspectRatio: "1",
            border: "none",
            borderRadius: "20px",
            backgroundColor: selectedTheme.color,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            boxShadow:
              "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <span
            style={{
              fontSize: "32px",
              marginBottom: "10px",
            }}
          >
            🔔
          </span>

          <span
            style={{
              color: "white",
              fontSize: "17px",
              fontWeight: "bold",
            }}
          >
            Alerts
          </span>
        </button>


        {/* THEMES */}

        <button
          onClick={() => setShowThemes(true)}
          style={{
            aspectRatio: "1",
            border: "none",
            borderRadius: "20px",
            backgroundColor: selectedTheme.color,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            boxShadow:
              "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <span
            style={{
              fontSize: "32px",
              marginBottom: "10px",
            }}
          >
            🎨
          </span>

          <span
            style={{
              color: "white",
              fontSize: "17px",
              fontWeight: "bold",
            }}
          >
            Theme
          </span>
        </button>

      </div>


      {/* CURRENT THEME */}

      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        <h2
          style={{
            fontSize: "18px",
            marginBottom: "10px",
            color: textColor,
          }}
        >
          Current theme
        </h2>

        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: selectedTheme.color,
            margin: "0 auto",
          }}
        />

        <p
          style={{
            color: secondaryText,
          }}
        >
          {selectedTheme.name}
        </p>
      </div>


      {/* THEME POPUP */}

      {showThemes && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.55)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >

          <div
            style={{
              width: "min(500px, 90%)",
              padding: "30px",
              borderRadius: "25px",
              backgroundColor: darkMode
                ? "#171717"
                : "#ffffff",
            }}
          >

            <h2
              style={{
                textAlign: "center",
                marginBottom: "25px",
                color: darkMode
                  ? "#ffffff"
                  : "#171717",
              }}
            >
              Choose your color 🎨
            </h2>


            {/* COLORS */}

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(2, 1fr)",
                gap: "12px",
              }}
            >

              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() =>
                    chooseTheme(theme)
                  }
                  style={{
                    border: "none",
                    borderRadius: "15px",
                    padding: "18px",
                    backgroundColor:
                      theme.color,
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  {theme.name}
                </button>
              ))}

            </div>


            {/* CLOSE */}

            <button
              onClick={() =>
                setShowThemes(false)
              }
              style={{
                width: "100%",
                marginTop: "15px",
                padding: "15px",
                border: "none",
                borderRadius: "15px",
                backgroundColor: "#374151",
                color: "white",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

