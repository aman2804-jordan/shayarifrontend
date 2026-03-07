import { useState } from "react";

// Video Preview Component
const VideoPreview = () => {

  const videoId = "AyCPvv00wlY";

  const [hovered, setHovered] = useState(false);

  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const previewSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;

  const openYoutube = () => {
    window.open(`https://youtube.com/shorts/${videoId}`, "_blank");
  };

  return (
    <div
      className="relative w-full max-w-xl cursor-pointer group overflow-hidden rounded-xl shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={openYoutube}
    >
      {!hovered ? (
        <>
          <img
            src={thumbnail}
            alt="Video Thumbnail"
            className="w-full h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 p-4 rounded-full shadow-lg group-hover:scale-110 transition">
              ▶
            </div>
          </div>
        </>
      ) : (
        <iframe
          src={previewSrc}
          title="Video preview"
          className="w-full h-[520px]"
          frameBorder="0"
          allow="autoplay"
        ></iframe>
      )}
    </div>
  );
};


// About Page
export const About = () => {
  return (
    <main className="hero-section">
      <div className="container grid grid-two-cols">

        <div className="hero-content"> <h1 className="heading-xl">About Page</h1> <div className="paragraph"> <p>Shayari is not just poetry—it's emotion in words, a reflection of the heart’s whispers.</p> <p>This website <b>Kalam ae Jazbaaat</b> was born out of late-night musings, scribbled lines on paper, and a desire to connect souls through verses.</p> <p>Here, you'll find a collection of love Shayari, dard bhari lines, yaadgaar lamhe, and more—each one penned or curated with honesty and emotion.</p> <p>Whether you're in love, heartbroken, or just lost in thought, you'll find words here that speak to you.</p> <p>I'm <b>Aishwarya</b>, a lover of Hindi Shayari and Hindi kavita, trying to keep the flame of feelings alive one verse at a time.</p> <p><b>"Kalam se khelti hoon, jazbaat ke saath,</b></p> <p><b>Mere Har misrey mein chhupa hai aap ka ek raaz."</b></p> <p>Thanks for stopping by. Let’s keep the magic of Shayari alive, together.</p> </div> </div>

        <div className="hero-image">
          <VideoPreview />
        </div>

      </div>
    </main>
  );
};