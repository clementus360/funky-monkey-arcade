import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed z-50 top-0 w-full flex justify-between bg-dark bg-opacity-80 border-white px-8 sm:px-16 pt-8 pb-4 text-white">
        <img className="vw-[360] sm:vw-[120]" src="./logo.svg" alt="funky monkey arcade" />

        <nav className="flex sm:gap-16 items-center">
            <ul className="hidden text-sm sm:flex gap-8">
                <Link href={"#about"}><li>ABOUT</li></Link>
                <Link href={"#games"}><li>GAMES</li></Link>
            </ul>

            {/* <Link href={"#contact"}>
                <button className="flex items-center text-sm justify-center bg-primary clip-button-a p-2 sm:p-4 gap-4">
                    <img className="vh-[20]" src="./icons/contact.svg" alt="contact us" />
                    CONTACT US
                </button>
            </Link> */}
        </nav>
    </header>
  )
}
