export default function Footer() {
  return (
    <div className='w-full flex flex-col sm:flex-row items-center justify-between bg-dark bg-opacity-80 border-white px-8 sm:px-16 pt-8 pb-4 text-white mt-16'>
        <p className='text-text'>© All rights reserved – Native Rekord Ltd</p>

        <ul className='flex gap-4'>

            {/* <li><img src="./icons/facebook.svg" alt="facebook" /></li> */}

            <li>
                <a href="https://instagram.com/funkymonkeyarcade?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank"><img className='cursor-pointer' src="./icons/instagram.svg" alt="instagram" /></a>
            </li>

            {/* <li><img src="./icons/linkedin.svg" alt="linkedin" /></li>
            <li><img src="./icons/whatsapp.svg" alt="whatsapp" /></li>
            <li><img src="./icons/x.svg" alt="x" /></li> */}

            <li>
                <a href="https://www.youtube.com/@FunkymonkeyArcade" target="_blank"><img className='cursor-pointer' src="./icons/youtube.svg" alt="youtube" /></a>
            </li>

            <li>
                <a href="https://www.flickr.com/photos/1_st_egamers/" target="_blank"><img className='cursor-pointer' src="./icons/flickr.svg" alt="flickr" /></a>
            </li>

        </ul>
    </div>
  )
}
