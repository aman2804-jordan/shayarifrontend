import axios from 'axios';

export const Share = () => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formInputData = Object.fromEntries(formData.entries());

    try {
      const res = await axios.post(
        'http://localhost:5000/api/shayari',
        formInputData,
        { headers: { 'Content-Type': 'application/json' } }
      );
      alert(res.data?.message || 'Shayari submitted successfully!');
      e.target.reset();
    } catch (err) {
      console.error('Submit error:', {
        message: err.message,
        status: err.response?.status,
        data: err.response?.data,
      });
      alert(`Something went wrong. Please try again.\n${err.response?.data?.error || ''}`);
    }
  };

  return (
    // ... your form JSX unchanged ...
    <section className="section-share">
      <h2 className="container-title"> Share Your Shayari </h2>
      <div className="share-wrapper container">
        <form onSubmit={handleFormSubmit}>
          <input name="username" required placeholder="Enter Your Name" autoComplete="off" />
          <input type="email" name="email" required placeholder="Enter Your Email" autoComplete="off" />
          <textarea name="shayari" rows="10" required placeholder="Enter Your Shayari" autoComplete="off" />
          <button type="submit">Share</button>
        </form>
      </div>
    </section>
  );
};