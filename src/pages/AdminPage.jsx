import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AdminPage = () => {
  const [shayaris, setShayaris] = useState([]);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  // 🔒 Protect route
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/Admin");
    }
  }, [navigate]);

  // 📥 Fetch Pending Shayari
  const fetchPendingShayari = async () => {
    try {
      const res = await fetch(`${API_URL}/api/pending-shayari`);
      if (!res.ok) throw new Error("Failed to fetch pending shayari");

      const data = await res.json();
      setShayaris(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchPendingShayari();
  }, []);

  // ✅ Approve
  const handleApprove = async (id) => {
    try {
      const res = await fetch(
        `${API_URL}/api/shayari/approve/${id}`,
        { method: "PUT" }
      );

      if (!res.ok) throw new Error("Approve failed");

      fetchPendingShayari(); // refresh list
    } catch (err) {
      console.error("Approve error:", err);
    }
  };

  // ❌ Reject
  const handleReject = async (id) => {
    try {
      const res = await fetch(
        `${API_URL}/api/shayari/reject/${id}`,
        { method: "DELETE" }
      );

      if (!res.ok) throw new Error("Reject failed");

      fetchPendingShayari(); // refresh list
    } catch (err) {
      console.error("Reject error:", err);
    }
  };

  return (
    <section className="section-about container">
      <h2 className="container-title">Pending Shayari</h2>

      {shayaris.length === 0 ? (
        <p>No pending shayari found.</p>
      ) : (
        shayaris.map((item) => (
          <div key={item._id} className="card">
            <div className="container-card bg-yellow-box">
              <p>{item.shayari}</p>
              <p>
                <strong>By:</strong> {item.username}
              </p>

              <div style={{ marginTop: "10px" }}>
                <button
                  onClick={() => handleApprove(item._id)}
                  style={{ marginRight: "10px" }}
                >
                  Approve
                </button>

                <button
                  onClick={() => handleReject(item._id)}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  );
};