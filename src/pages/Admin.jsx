import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Admin = () => {
  const navigate = useNavigate(); // ✅ initialize navigate

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/AdminPage");
    }
  }, [navigate]);


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
       //
      // Handle invalid response
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        alert("❌ " + (errData.message || "Login failed"));
        return;
      }

      const result = await res.json();
      console.log("✅ Login success:", result);

      // Save token and redirect
      localStorage.setItem("token", result.token);
      navigate("/AdminPage"); // ✅ navigate after login

    } catch (err) {
      console.error("🔥 Login error caught:", err);
      alert("Something went wrong: " + err.message);
    }
  };

  return (
    <section className="section-share">
      <h2 className="container-title">Partner Hub</h2>
      <div className="share-wrapper container">
        <form onSubmit={handleFormSubmit}>
          <input
            name="username"
            required
            placeholder="Enter Your Name"
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Enter Your Email"
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Enter Your Password"
            autoComplete="off"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
};