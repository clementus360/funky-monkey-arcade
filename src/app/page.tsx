import { About } from "./About";
import { Contact } from "./Contact";
import { Games } from "./Games";

function Hero() {
  return (
    <section className={`relative overflow-hidden flex flex-col sm:grid sm:grid-cols-[1fr_2fr] bg-[url('/images/26293.jpg')] bg-blend-lighten bg-top bg-cover vh-[960] max-h-[600px] lg:max-h-[1024px] pt-32 sm:px-24`}>
      <div className='sm:ptvh-[200] m-auto sm:m-0'>
        <p className='font-text textvw-[64] sm:textvw-[20] text-text'>ULTIMATE GAME HUB</p>
        <h1 className='font-title font-bold text-white textvw-[240] sm:textvw-[100] lineheight-[16]'>PLAY.<br /><span className='text-primary'>CONQUER.</span><br />REPEAT.</h1>
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
      <Hero />
      <About />
      <Games />
      <Contact />
      test
    </div>
  )
}
