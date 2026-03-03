import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const About = () => {
  return (
    <main className="hero-section">
      <div className="container grid grid-two-cols">

        <div className="hero-content">
          <h1 className="heading-xl">About Page</h1>

          <div className="paragraph">
            <p>Shayari is not just poetry—it's emotion in words, a reflection of the heart’s whispers.</p>
            <p>This website <b>Kalam ae Jazbaaat</b> was born out of late-night musings, scribbled lines on paper, and a desire to connect souls through verses.</p>
            <p>Here, you'll find a collection of love Shayari, dard bhari lines, yaadgaar lamhe, and more—each one penned or curated with honesty and emotion.</p>
            <p>Whether you're in love, heartbroken, or just lost in thought, you'll find words here that speak to you.</p>
            <p>I'm <b>Aishwarya</b>, a lover of Hindi Shayari and Hindi kavita, trying to keep the flame of feelings alive one verse at a time.</p>
            <p><b>"Kalam se khelti hoon, jazbaat ke saath,</b></p>
            <p><b>Mere Har misrey mein chhupa hai aap ka ek raaz."</b></p>
            <p>Thanks for stopping by. Let’s keep the magic of Shayari alive, together.</p>
          </div>

          <a
            href="https://www.instagram.com/kalam_ae_jazbaaat/"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              Start Exploring <HiOutlineArrowLongRight />
            </button>
          </a>
        </div>

        <div className="hero-image">
          <img
            src="/images/kalam profile.jpg"
            alt="Kalam-Ae-Jazbaaat"
            loading="lazy"
            className="banner-image"
          />
        </div>

      </div>
    </main>
  );
};