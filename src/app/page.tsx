import React from 'react'
import Image from 'next/image'
import { home } from '../app/components/data/data'

const Home = () => {
  return (
    <main className='flex flex-col items-center'>
      <section className='flex flex-row w-10/12 mt-10 mb-6 items-center'>
        <div className='ml-20 w-2/3'>
          <h2 className='text-center font-bold'>{home.title}</h2>
          <p className='text-lg '>{home.body}</p>
        </div>
        <div className="w-1/3">
        </div>
        <div className="w-1/3">
          <Image width={500} height={600} aria-label={" image of 4"} alt={"4"} src={'/img/4.jpg'} priority={false}

          />
        </div>
      </section>
    </main>
  )
}

export default Home;