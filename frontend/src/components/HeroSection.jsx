import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import {useNavigate} from 'react-router-dom';

const HeroSection = () => {

    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] 
    bg-cover bg-center h-screen'>
        <img src={assets.marvelLogo} alt="" className='max-h-11 lg:h-11 mt-20'/>
            <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold
            max-w-110'>Guardians <br /> of the Galaxy</h1>

        <div className='flex flex items-center gap-4 text-gray-300'>
            <span>Action | Adventure | Sci-Fi</span>
            <div className='flex items-center gap-1'>
                <CalendarIcon className='w-4 h-4' /> 2025
            </div>
            <div className='flex items-center gap-1'>
                <ClockIcon className='w-4 h-4' /> 2h 10m
            </div>
        </div>
        <p className='max-w-md text-gray-300'>In a post-apocalyptic world where cities ride on wheels
            and consume each other to survive, two people meet in London and try to stop a conspiracy.
        </p>
        <button className='flex items-center gap-1 px-6 py-3 text-sm bg-red-600
        hover:bg-red-700 transition rounded-full font-medium cursor-pointer' 
        onClick={()=>navigate('/movies')}>
            Explore Movies
            <ArrowRight className='w-5 h-5' />
        </button>
    </div>
  )
}

export default HeroSection
