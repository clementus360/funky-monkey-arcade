"use client"

import { app } from "@/utils/firebase"
import { getFirestore,setDoc, doc, updateDoc, query, collection, QuerySnapshot, getDocs, DocumentData } from "firebase/firestore";
import { useState, useEffect, useRef } from "react"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface GameCardProps {
  img: string;
  title: string;
}

export function GameCard({img, title}:GameCardProps) {
  return (
    <div className='relative overflow-hidden pb-4'>
        <div className='overflow-x-hidden vw-[400] h-[40vw] sm:vw-[200] sm:h-[20vw]'>
          <img className='relative object-cover h-full z-10' src={img} alt={title} />
        </div>
        
        <div className='absolute w-10/12 h-full top-2 left-2 z-0 bg-primary'></div>
    </div>
  )
}

export function Games() {

  const [videoGames, setVideoGames] = useState<DocumentData[]>()

  const slider = useRef<Slider | null>(null)

  const sliderSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    cssEase: "ease-out",
  };

  function nextSlide() {
    if (slider.current) {
      slider.current.slickNext();
    }
  }

  async function GetVideoGames() {

		const db = getFirestore(app);

		const q = query(collection(db, "video-games"));

		const querySnapshot = await getDocs(q);
		const ItemsData = querySnapshot.docs.map((doc) => doc.data());
     	setVideoGames(ItemsData);

	}

  const loadItems = () => {
		GetVideoGames()
	}

	useEffect(() => {
		loadItems()
	}, [])


  return (
    <section id="games" className='flex flex-col sm:grid sm:grid-cols-[40vw_1fr] gap-8 py-8 sm:py-0  sm:pl-24 sm:my-16 sm:h-[35vw] items-center'>
      <div className='flex flex-col gap-4 px-8 sm:pl-0'>
        <h2 className='font-title font-bold text-white text-3xl sm:textvw-[40] lineheight-[16]'>PLAY THE BEST <span className='text-primary'>GEMS</span><br />AND JOIN EVENTS</h2>
        <p className='font-text text-xl sm:textvw-[20] text-text lineheight-[26]'>Experience esports excitement in Rwanda at our cutting-edge facility, welcoming casual and aspiring pro gamers. Join us to be part of redefining Rwanda’s esports scene.</p>
      </div>

      <div className='flex flex-col w-full overflow-x-hidden'>
        <Slider ref={slider} {...sliderSettings}>
          {videoGames && videoGames.map((videoGamesItem, idx) => (
              <GameCard key={idx} img={videoGamesItem.image} title={videoGamesItem.title} />
          ))}
        </Slider>

        <img onClick={nextSlide} className='cursor-pointer px-24 mt-16 self-end' src="./icons/Arrow.svg" alt="next" />
      </div>

    </section>
  );
}
