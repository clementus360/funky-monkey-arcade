export default function Pool() {
    return (
        <section id="games" className='flex flex-col sm:grid sm:grid-cols-[1fr_1fr] gap-8 py-16 sm:py-0 sm:pb-24  sm:pr-24 items-center'>

            <div className="relative clip-trapezium">
                <img src="/images/young-woman-playing-billiard.jpg" alt="" className="bg-black w-full object-cover" />
            </div>

            <div className='flex flex-col gap-4 px-8 sm:pl-0'>
                <h2 className='font-title font-bold text-white text-3xl sm:textvw-[40] lineheight-[16]'><span className='text-primary'>DOUBLE THE FUN </span><br />AT OUR POOL TABLES</h2>
                <p className='font-text text-xl sm:textvw-[20] text-text lineheight-[26]'>From intense matches to laid-back rounds with friends, our pool tables cater to diverse preferences and skill levels. So, if you're ready to break into a new level of fun, grab your cue and join us for an unforgettable gaming experience!</p>
            </div>

        </section>
    )
}
