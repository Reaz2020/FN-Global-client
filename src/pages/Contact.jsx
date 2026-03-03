import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
  };

  const cardStyle = {
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "20px",
    background: "#fff",
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
  };

  const labelStyle = {
    display: "block",
    fontSize: "14px",
    fontWeight: 600,
    marginBottom: "6px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #d1d5db",
    borderRadius: "10px",
    outline: "none",
    fontSize: "14px",
  };

  const linkStyle = {
    color: "#1a73e8",
    fontWeight: 600,
    textDecoration: "none",
  };

  const smallText = { margin: "6px 0 0", color: "#6b7280", fontSize: "14px" };

  return (
    <div style={{ padding: "40px 20px", maxWidth: "1100px", margin: "0 auto" }}>
    <h1 style={{ margin: 0 }}>Contact Us</h1>
    <p style={{ marginTop: "10px", color: "#4b5563" }}>
      If you have any questions, send us a message or reach out to one of our offices.
    </p>
  
    <div
      style={{
        display: "flex",
        gap: "40px",
        marginTop: "28px",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      {/* LEFT SIDE - FORM */}
      <div style={{ flex: "1 1 420px" }}>
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "14px",
            padding: "24px",
            background: "#fff",
            boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: "18px" }}>
            Send Us a Message
          </h2>
  
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "14px" }}>
              <label style={{ fontWeight: 600, fontSize: "14px" }}>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "10px",
                  marginTop: "6px",
                }}
              />
            </div>
  
            <div style={{ marginBottom: "14px" }}>
              <label style={{ fontWeight: 600, fontSize: "14px" }}>Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "10px",
                  marginTop: "6px",
                }}
              />
            </div>
  
            <div style={{ marginBottom: "14px" }}>
              <label style={{ fontWeight: 600, fontSize: "14px" }}>Message</label>
              <textarea
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "10px",
                  marginTop: "6px",
                  resize: "vertical",
                }}
              />
            </div>
  
            <button
              type="submit"
              style={{
                padding: "10px 18px",
                borderRadius: "10px",
                border: "none",
                background: "#111827",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
  
            <p style={{ marginTop: "14px", color: "#6b7280", fontSize: "13px" }}>
              We usually reply within 24 hours.
            </p>
          </form>
        </div>
      </div>
  
      {/* RIGHT SIDE */}
      <div style={{ flex: "1 1 420px" }}>
        {/* Offices */}
        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "14px",
            padding: "24px",
            background: "#fff",
            boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Our Offices</h2>
  
          {[
            {
              title: "London Office",
              address: "158 Franchis Road, E10 6PP, London, UK",
              phone: "+44 20 7946 0958",
              map: "https://www.google.com/maps?q=158+Franchis+Road+E10+6PP+London",
            },
            {
              title: "Stockholm Office",
              address: "26 Sibeliusgången, 164 77 Stockholm, Sweden",
              phone: "+46 8 525 123 45",
              map: "https://www.google.com/maps?q=26+Sibeliusgången+16477+Stockholm",
            },
            {
              title: "Dhaka Office",
              address: "House 12, Road 7, Dhanmondi, Dhaka 1209, Bangladesh",
              phone: "+880 17 1234 5678",
              map: "https://www.google.com/maps?q=House+12+Road+7+Dhanmondi+Dhaka+1209",
            },
          ].map((office, index) => (
            <div
              key={index}
              style={{
                marginTop: "18px",
                paddingTop: "18px",
                borderTop: index !== 0 ? "1px solid #f3f4f6" : "none",
              }}
            >
              <h3 style={{ margin: 0 }}>{office.title}</h3>
              <p style={{ margin: "6px 0" }}>{office.address}</p>
              <p style={{ margin: "4px 0", color: "#6b7280" }}>
                Phone: {office.phone}
              </p>
              <a
                href={office.map}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563eb", fontWeight: 600 }}
              >
                View on Google Maps
              </a>
            </div>
          ))}
        </div>
  
        {/* Social */}
        <div
          style={{
            marginTop: "20px",
            border: "1px solid #e5e7eb",
            borderRadius: "14px",
            padding: "24px",
            background: "#fff",
            boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Connect With Us</h2>
  
          <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <a href="skype:live:example?chat" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#2563eb", fontWeight: 600 }}>
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" width="22" alt="Skype" />
              live:example
            </a>
  
            <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#2563eb", fontWeight: 600 }}>
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="22" alt="Facebook" />
              facebook.com/example
            </a>
  
            <a href="https://linkedin.com/company/example" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#2563eb", fontWeight: 600 }}>
              <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" width="22" alt="LinkedIn" />
              linkedin.com/company/example
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Contact;