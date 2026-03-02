import { useState, useEffect } from 'react';

export const Shayars = () => {
  const [shayaris, setShayaris] = useState([]);

  const fetchShayari = async () => {
    try {
      const response = await fetch('http://localhost:5000/getAllShayari');
      if (!response.ok) throw new Error('Failed to fetch shayari');
      const data = await response.json();
      const filtered = data.filter(item => item.status !== "PENDING");
      setShayaris(filtered);
    } catch (error) {
      console.error('Error fetching shayari:', error);
    }
  };

  useEffect(() => {
    fetchShayari();
  }, []);

  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are The Famous Shayari's By<br/>The Famous Shayar's . . .
      </h2>
      <div className="gradient-cards">
        {shayaris.map((shayari) => (
          <div className="card" key={shayari._id}>
            <div className="container-card bg-yellow-box">
              <p>{shayari.shayari}</p>
              <p>
                <span className="card-description">By: </span>
                {shayari.username}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
