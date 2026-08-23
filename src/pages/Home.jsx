import { useState } from "react";
import Contact from "./Contact";
import Settings from "./Settings";
import { songs } from "../data/Songs";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Heading from "../components/Heading";

const Home=()=> {
  const [selectedMood, setSelectedMood] = useState("Happy");

 return (
    <div>
        
  <div
    style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      padding: "0 40px 40px 40px",
      fontFamily: "Arial",
    }}
  >

    
    {/* HARMONA */}

    <h1

        style={{
          textAlign: "center",
          fontSize: "3rem",
          marginBottom: "30px",
        }}
      >
        🎧 Harmona
      </h1>
   <Heading />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "40px",
          flexWrap: "wrap",
        }}
      >
        {Object.keys(songs).map((mood) => (
          <button
            key={mood}
            onClick={() => setSelectedMood(mood)}
            style={{
              padding: "12px 24px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              background:
                selectedMood === mood ? "#3b82f6" : "#1e293b",
              color: "white",
            }}
          >
            {mood}
          </button>
        ))}
      </div>

      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          display: "grid",
          gap: "20px",
        }}
      >
        {songs[selectedMood].map((song, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "16px",
            }}
          >
            <h2>{song.title}</h2>

            <a
              href={song.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#60a5fa",
                fontSize: "18px",
              }}
            >
              ▶ Play Song
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Home