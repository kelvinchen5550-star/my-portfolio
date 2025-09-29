function About() {
  return (
    <div className="container" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Kelvin Chen Chen</h1>
      <img 
        src="/headshot.jpg" 
        alt="Kelvin Chen Chen" 
        style={{ width: "150px", height: "150px", borderRadius: "30%", margin: "20px 0" }}
      />
      <p style={{ maxWidth: "600px", margin: "0 auto" }}>
        I am a professional web developer with experience in building React applications,
        creating dynamic user interfaces, and integrating backend services. I have a strong
        interest in full-stack development and delivering efficient, high-quality code. I enjoy
        collaborating on projects and continuously improving my technical skills.
      </p>
      <div style={{ marginTop: "20px" }}>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener" 
          style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", borderRadius: "5px", textDecoration: "none" }}
        >
          Download Resume (PDF)
        </a>
      </div>
    </div>
  );
}

export default About;
