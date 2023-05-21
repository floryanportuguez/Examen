import Image from 'next/image'
import React from 'react';
import Head from 'next/head';
import { aboutMeData } from '../components/data/data'
import { FaLinkedin } from 'react-icons/fa';


const AboutMePage = () => {
  return (

    <main className='flex flex-col items-center'>
      <section className='flex flex-row w-10/12 mt-10 mb-6 items-center'>
        <div className="w-1/3">
          <Image width={180} height={200} aria-label={" image of 1"} alt={" 1"} src={'/img/1.jpeg'} priority={false}
            className='profileImage'
          />
          <h2>
            <li> <a href="https://www.linkedin.com/in/floryan-portuguez-617006277" target="_blank" rel="noopener noreferrer">LinkedIn: <FaLinkedin /></a></li>
          </h2>
        </div>

        <div className='ml-20 w-2/3'>
          <h2 className="">{aboutMeData.title}</h2>
          <p className='text-lg '>{aboutMeData.body}</p>
        </div>

      </section>

    </main>
  )
}
export default AboutMePage;