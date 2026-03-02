import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const [shayaris, setShayaris] = useState([]);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL; // ✅ FIXED

  // 🔐 Protect route
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/admin");
    }
  }, [navigate]);

  // 📥 Fetch pending shayaris
  const fetchPendingShayaris = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/pending-shayari`);
      setShayaris(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchPendingShayaris();
  }, []);

  // ✅ Approve
  const approveShayari = async (id) => {
    try {
      await axios.put(`${API_URL}/api/shayari/approve/${id}`);
      fetchPendingShayaris(); // refresh list
    } catch (err) {
      console.error("Approve error:", err);
    }
  };

  // ❌ Reject
  const rejectShayari = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/shayari/reject/${id}`);
      fetchPendingShayaris(); // refresh list
    } catch (err) {
      console.error("Reject error:", err);
    }
  };

  // 🚪 Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Admin Panel – Pending Shayaris</h2>

        <button
          onClick={handleLogout}
          style={{
            background: "black",
            color: "white",
            border: "1px solid gold",
            padding: "6px 12px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {shayaris.length === 0 ? (
        <p>No pending shayaris 🎉</p>
      ) : (
        shayaris.map((shayari) => (
          <div
            key={shayari._id}
            style={{
              border: "1px solid #ccc",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h4>{shayari.username}</h4>
            <p>{shayari.shayari}</p>

            <button
              onClick={() => approveShayari(shayari._id)}
              style={{ marginRight: "10px" }}
            >
              ✅ Approve
            </button>

            <button onClick={() => rejectShayari(shayari._id)}>
              ❌ Reject
            </button>
          </div>
        ))
      )}
    </div>
  );
}