import { useState, useEffect } from 'react';
import GoldenLoader from "../components/GoldenLoader";

export const Shayars = () => {
  const [shayaris, setShayaris] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchShayari = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/getAllShayari`);
    if (!response.ok) throw new Error('Failed to fetch shayari');

    const data = await response.json();
    const filtered = data.filter(item => item.status !== "PENDING");
    setShayaris(filtered);

  } catch (error) {
    console.error('Error fetching shayari:', error);
  } finally {
    setLoading(false);   // ✅ VERY IMPORTANT
  }
}; 
  useEffect(() => {
    fetchShayari();
  }, []);

  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are The Famous Shayari's By<br/>The Famous Shayar's...
      </h2>
      <div className="gradient-cards">
  {loading ? (
    <GoldenLoader />
  ) : shayaris.length === 0 ? (
    <p style={{ textAlign: "center" }}>No Shayari Found</p>
  ) : (
    shayaris.map((shayari) => (
      <div className="card" key={shayari._id}>
        <div className="container-card bg-yellow-box">
          <p>{shayari.shayari}</p>
          <p>
            <span className="card-description">By: </span>
            {shayari.username}
          </p>
        </div>
      </div>
    ))
  )}
</div>
    </section>
  );
};
