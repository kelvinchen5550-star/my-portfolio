import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to My Portfolio</h1>
      <p style={{ fontStyle: "italic", margin: "10px 0" }}>
        I create modern, responsive web applications with React.
      </p>
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "20px" }}>
        <Link to="/about" style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", borderRadius: "5px", textDecoration: "none" }}>
          About Me
        </Link>
        <Link to="/projects" style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "#fff", borderRadius: "5px", textDecoration: "none" }}>
          See Projects
        </Link>
      </div>
    </div>
  );
}

export default Home;
