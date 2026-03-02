import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const [shayaris, setShayaris] = useState([]);
  const navigate = useNavigate();

  // ✅ Check token on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/admin"); // redirect if not logged in
    }
  }, [navigate]); // <-- dependency array is required

  // ✅ Fetch all pending shayaris
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/pending-shayari")
      .then((res) => setShayaris(res.data))
      .catch((err) => console.error(err));
  }, []);

  const approveShayari = async (id) => {
    await axios.put(`http://localhost:5000/api/shayari/approve/${id}`);
    setShayaris(shayaris.filter((s) => s._id !== id));
  };

  const rejectShayari = async (id) => {
    await axios.delete(`http://localhost:5000/api/shayari/reject/${id}`);
    setShayaris(shayaris.filter((s) => s._id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // clear token
    navigate("/admin"); // redirect to login page
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
            border: "golden",
            padding: "6px 10px",
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
              margin: "10px",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h4>{shayari.username}</h4>
            <p>{shayari.shayari}</p>
            <button onClick={() => approveShayari(shayari._id)}>✅ Approve</button>
            <button onClick={() => rejectShayari(shayari._id)}>❌ Reject</button>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminPage;