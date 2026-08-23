const Contact = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#422006",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >

      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          color: "#fde68a",
          margin: "0 0 8px 0",
        }}
      >
        🐶 Contact
      </h1>

      <p
        style={{
          color: "#fef3c7",
          marginBottom: "25px",
          fontSize: "16px",
        }}
      >
        We’re listening 👂💛
      </p>


      {/* Call Us */}

      <div
        style={{
          backgroundColor: "#78350f",
          borderRadius: "20px",
          padding: "20px",
          marginBottom: "15px",
          maxWidth: "600px",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            marginBottom: "5px",
          }}
        >
          📞
        </div>

        <h2
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#fde68a",
            margin: "5px 0",
          }}
        >
          Call Us
        </h2>

        <p
          style={{
            color: "#fef3c7",
            margin: 0,
          }}
        >
          +
        </p>
      </div>


      {/* Message */}

      <div
        style={{
          backgroundColor: "#78350f",
          borderRadius: "20px",
          padding: "20px",
          marginBottom: "15px",
          maxWidth: "600px",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            marginBottom: "5px",
          }}
        >
          💬
        </div>

        <h2
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#fde68a",
            margin: "5px 0",
          }}
        >
          Message
        </h2>

        <p
          style={{
            color: "#fef3c7",
            margin: 0,
          }}
        >
          We reply fast 🐕💨
        </p>
      </div>


      {/* Email */}

      <div
        style={{
          backgroundColor: "#78350f",
          borderRadius: "20px",
          padding: "20px",
          marginBottom: "15px",
          maxWidth: "600px",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            marginBottom: "5px",
          }}
        >
          📧
        </div>

        <h2
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#fde68a",
            margin: "5px 0",
          }}
        >
          Email
        </h2>

        <p
          style={{
            color: "#fef3c7",
            margin: 0,
          }}
        >
          semilore.olatunji123@gmail.com
        </p>
      </div>

    </div>
  );
};

export default Contact;