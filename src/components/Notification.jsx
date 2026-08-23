import { useState } from "react";

export default function Notifications() {
  const [hasNotification, setHasNotification] = useState(true);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "40px",
        boxSizing: "border-box",
        color: "#171717",
      }}
    >

      {/* TITLE */}

      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginTop: "20px",
          marginBottom: "0",
          color: "#171717",
        }}
      >
        🔔 Notifications
      </h1>


      {/* NO NOTIFICATION */}

      {!hasNotification ? (
        <div
          style={{
            minHeight: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "60px",
              marginBottom: "15px",
            }}
          >
            📭
          </div>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            No new notification
          </h2>

          <p
            style={{
              marginTop: "8px",
              color: "#6b7280",
            }}
          >
            You're all caught up!
          </p>
        </div>

      ) : (

        /* NOTIFICATION */

        <button
          onClick={() => {
            setHasNotification(false);
          }}
          style={{
            width: "100%",
            maxWidth: "700px",
            marginTop: "30px",
            padding: "20px",
            borderRadius: "20px",
            border: "none",
            backgroundColor: "#ffffff",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            textAlign: "left",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          }}
        >
          <span
            style={{
              fontSize: "35px",
            }}
          >
            🔔
          </span>

          <span>
            <span
              style={{
                display: "block",
                fontSize: "18px",
                fontWeight: "bold",
                color: "#171717",
              }}
            >
              New notification
            </span>

            <span
              style={{
                display: "block",
                marginTop: "5px",
                color: "#6b7280",
              }}
            >
              Tap to find out what's new.
            </span>
          </span>
        </button>
      )}


      {/* BACK BUTTON */}

      <button
        onClick={() => window.history.back()}
        style={{
          display: "block",
          width: "100%",
          maxWidth: "700px",
          padding: "16px",
          backgroundColor: "#171717",
          border: "none",
          borderRadius: "15px",
          color: "#ffffff",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "30px",
        }}
      >
        ← Back to Settings
      </button>

    </div>
  );
}