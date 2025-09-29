function Services() {
  const services = [
    { icon: "💻", text: "Web development using React and JavaScript" },
    { icon: "🎨", text: "UI/UX design for responsive interfaces" },
    { icon: "⚡", text: "Performance optimization and debugging" },
  ];

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Services</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {services.map((s, i) => (
          <li key={i} style={{ margin: "10px 0" }}>
            <span style={{ fontSize: "20px", marginRight: "10px" }}>{s.icon}</span>{s.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
