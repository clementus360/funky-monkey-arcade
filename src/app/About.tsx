export default function About() {
  return (
    <section id="about" className='relative py-16 sm:py-0 sm:pr-24 flex flex-col-reverse sm:grid sm:grid-cols-[3fr_2fr] gap-8 sm:items-center'>
      <div className='relative clip-trapezium'>
        <video className='left-0 w-full sm:h-[40vw] object-cover' src="./videos/InShot_20230814_150812336.mp4" autoPlay muted></video>
      </div>

      <div className='flex px-8 sm:px-0 flex-col gap-4 sm:items-end'>
        <h2 className='font-title font-bold text-white text-4xl sm:textvw-[40] lineheight-[8] sm:lineheight-[16]'>FUNKY MONKEY<br /><span className='text-primary text-7xl sm:textvw-[80]'>ARCADE</span></h2>
        <p className='font-text text-xl sm:textvw-[20] text-text sm:text-end lineheight-[26]'>Experience esports excitement in Rwanda at our cutting-edge facility, welcoming casual and aspiring pro gamers. Join us to be part of redefining Rwanda’s esports scene.</p>
        
        {/* <Link href={"#contact"}>
          <button className="flex items-center justify-center w-max bg-primary clip-button-b py-4 px-4 gap-4 text-white">
            <img className="vh-[20]" src="./icons/contact.svg" alt="contact us" />
            CONTACT US
          </button>
        </Link> */}
      </div>
    </section>
  );
}
