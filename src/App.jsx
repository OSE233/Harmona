import { useState } from "react";
import Contact from "./components/Contact";
import Settings from "./components/Settings";

const App=()=> {
  const songs = {
    Happy: [
      {
        title: "Happy - Pharrell Williams",
        link: "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
      },
      {
        title: "Best Day Of My Life - American Authors",
        link: "https://www.youtube.com/watch?v=Y66j_BUCBMY",
      },
    ],

    Sad: [
      {
        title: "SAD! - XXXTentacion",
        link: "https://www.youtube.com/watch?v=pgN-vvVVxMA",
      },
      {
        title: "Lucid Dreams - Juice WRLD",
        link: "https://www.youtube.com/watch?v=mzB1VGEGcSU",
      },
    ],

    Angry: [
      {
        title: "Happier - Marshmello ft. Bastille",
        link: "https://www.youtube.com/watch?v=m7Bc3pLyij0",
      },
      {
        title: "Stronger - Kanye West",
        link: "https://www.youtube.com/watch?v=PsO6ZnUZI0g",
      },
      {
        title: "Numb - Linkin Park",
        link: "https://www.youtube.com/watch?v=kXYiU_JCYtU",
      },
    ],

    Calm: [
      {
        title: "Numb Little Bug - Em Beihold",
        link: "https://www.youtube.com/watch?v=1fwJ8H5wWCU",
      },
      {
        title: "Weightless - Marconi Union",
        link: "https://www.youtube.com/watch?v=UfcAVejslrU",
      },
      {
        title: "Ocean Eyes - Billie Eilish",
        link: "https://www.youtube.com/watch?v=viimfQi_pUw",
      },
    ],
  };

  const [selectedMood, setSelectedMood] = useState("Happy");

 return (
  <div
    style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      padding: "0 40px 40px 40px",
      fontFamily: "Arial",
    }}
  >

    {/* NAVIGATION BAR */}

    <div
      style={{
        height: "65px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        background: "#111111",
        marginLeft: "-40px",
        marginRight: "-40px",
        marginBottom: "25px",
      }}
    >

      <button
        onClick={() => window.location.href = "/"}
        style={{
          background: "none",
          border: "none",
          color: "white",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        🏠 Home
      </button>

      <button
        onClick={() => window.location.href = "/contact"}
        style={{
          background: "none",
          border: "none",
          color: "#aaaaaa",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        Contact
      </button>

      <button
        onClick={() => window.location.href = "/settings"}
        style={{
          background: "none",
          border: "none",
          color: "#aaaaaa",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        Settings
      </button>

    </div>

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
  );
}

export default App