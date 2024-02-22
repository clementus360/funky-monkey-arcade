import About from "./About";
import Contact from "./Contact";
import Games from "./Games";
import Pool from "./Pool";
import Popup from "./Popup"

function Hero() {
  return (
    <section className={`relative overflow-hidden flex flex-col sm:grid sm:grid-cols-[1fr_2fr] bg-[url('/images/26293.jpg')] bg-blend-lighten bg-top bg-cover vh-[960] max-h-[600px] lg:max-h-[1024px] pt-32 sm:px-24`}>
      <div className='sm:ptvh-[200] w-max m-auto sm:m-0'>
        <p className='font-text textvw-[64] sm:textvw-[20] text-text'>FUNKY MONKEY ARCADE</p>
        <h1 className='font-title font-bold text-white textvw-[200] sm:textvw-[60] lineheight-[16]'>EVERYTHING <br /><span className='text-primary textvw-[240] sm:textvw-[90]'>YOU LOVE</span><br /> <span className="textvw-[190] sm:textvw-[76]">IN ONE PLACE.</span></h1>
      </div>

      <div>
        <img className='' src="./images/man-with-vr-glasses-experiencing-metaverse.png" alt="virtual reality" />
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className='bg-dark bg-cover w-screen overflow-hidden'>
      <Popup />
      <Hero />
      <About />
      <Games />
      <Pool />
      <Contact />
    </div>
  )
}
