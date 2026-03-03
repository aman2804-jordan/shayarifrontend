import { HiOutlineArrowLongRight } from "react-icons/hi2";


export const HeroSection = () => {
    return (
        <main className="hero-section main">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
        
                <h1 className="heading-xl">
                Explore the World of Shayari's Written By Famous Shayar's.
               </h1>
               <p className="paragraph">
                             Kalam ae jazbaaat Discover the Feelings of Love, Care, Sorrow, Hurts, Lost, Broken, Heartbreaks.It also Relates to The Life, Wisdom, & Personal growth of a Human being.Shayari incorporates wit and humor to lighten up and entertain the Mood!  
                            </p>
                            <a href="/shayars"><button> Start Exploring <HiOutlineArrowLongRight /> </button> </a>
               </div>
               <div className="hero-image">
                            <img src="/images/quirl.png"
                             alt="Kalam-Ae-Jazbaaat"
                             className="banner-image"
                             loading="lazy"
                             />
                             
                        </div>
               </div>
               </main>
    )
}