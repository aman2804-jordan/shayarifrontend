import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const Share = () => {
  const [isPosting, setIsPosting] = useState(false); // ✅ loading state

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isPosting) return; // prevent double click

    setIsPosting(true); // start loading

    const formData = new FormData(e.target);
    const formInputData = Object.fromEntries(formData.entries());

    try {
      const res = await axios.post(
        `${API_URL}/api/shayari`,
        formInputData,
        { headers: { "Content-Type": "application/json" } }
      );

      alert(res.data?.message || "Shayari submitted successfully!");
      e.target.reset();
    } catch (err) {
      console.error("Submit error:", {
        message: err.message,
        status: err.response?.status,
        data: err.response?.data,
      });

      alert(
        `Something went wrong. Please try again.\n${
          err.response?.data?.error || ""
        }`
      );
    } finally {
      setIsPosting(false); // ✅ stop loading (very important)
    }
  };

  return (
    <section className="section-share">
      <h2 className="container-title"> Share Your Shayari </h2>

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

          <textarea
            name="shayari"
            rows="10"
            required
            placeholder="Enter Your Shayari"
            autoComplete="off"
          />

          <button
            type="submit"
            disabled={isPosting}
            style={{
              background: isPosting ? "gold" : "black",
              color: isPosting ? "black" : "white",
              cursor: isPosting ? "not-allowed" : "pointer",
              transition: "0.3s ease",
            }}
          >
            {isPosting ? "Posting..." : "Share"}
          </button>
        </form>
      </div>
    </section>
  );
};