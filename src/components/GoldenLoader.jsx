import "./GoldenLoader.css";

const GoldenLoader = () => {
  return (
    <div className="golden-loader-wrapper">
      <div className="golden-loader">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
      </div>
      <p className="loading-text">Loading Shayari...</p>
    </div>
  );
};

export default GoldenLoader;