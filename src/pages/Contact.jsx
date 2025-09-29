import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });
  const navigate = useNavigate();

// Handle input changes in form; dynamically update the corresponding field
function handleChange(e){
  setForm({...form, [e.target.name]: e.target.value});
}

// On submit, save form data to sessionStorage and redirect to Home
function handleSubmit(e){
  e.preventDefault();
  sessionStorage.setItem('contactSubmission', JSON.stringify(form));
  navigate('/');
}

  return (
    <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <h1>Contact Me</h1>

      <div style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "20px", width: "300px", textAlign: "left", marginBottom: "30px" }}>
        <p><strong>Name:</strong> Kelvin Chen Chen</p>
        <p><strong>Email:</strong> kelvinchen5550@mail.com</p>
        <p><strong>Phone:</strong> 647 224 5825</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/kelvin-chen-761211357" target="_blank" rel="noopener noreferrer">Kelvin Chen</a></p>
      </div>

      <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", maxWidth:"400px", width:"100%" }}>
        <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required style={{ margin:"5px 0", padding:"8px" }}/>
        <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required style={{ margin:"5px 0", padding:"8px" }}/>
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" style={{ margin:"5px 0", padding:"8px" }}/>
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required style={{ margin:"5px 0", padding:"8px" }}/>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required style={{ margin:"5px 0", padding:"8px" }}/>
        <button type="submit" style={{ marginTop:"10px", padding:"10px", backgroundColor:"#007bff", color:"#fff", border:"none", borderRadius:"5px" }}>Send</button>
      </form>
    </div>
  );
}

export default Contact;
