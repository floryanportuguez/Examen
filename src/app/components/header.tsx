import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type HeaderProps = {
    name: string,
    pages: {
        id: number,
        label: string,
        link: string
    }[]
}

export const Header = ({ name, pages }: HeaderProps) => {
    return (
        <header className='flex flex-col relative bg-linear-557AFF w-full h-48'>
            <div className='flex flex-row justify-between items-center h-full px-6 bg-header z-10 font-bold'>
                <div className='flex items-center'>
                    <Image
                        priority
                        height={150}
                        width={150}
                        className='mr-4'
                        src='/img/Logo.png' 
                        alt='Logo'
                    />
                    <h1 className='text-white uppercase '>{name}</h1>
                </div>
                <nav className='text-right flex flex-row gap-1'>
                    {pages.map((page) => {
                        return (
                            <Link aria-label={page.label}  key={page.id} href={page.link}
                                className='px-6 py-2 min-w-100 hover:bg-purple hover:text-white font-display uppercase tracking-wide sm:bg-transparent bg-white'
                            >
                                {page.label}
                            </Link>
                        )
                    })}
                </nav>
            </div>
            <Image
                priority
                height={350}
                width={2100}
                className='w-full h-48 object-cover object-top absolute mb-6'
                src='/img/7.jpg'
                alt={`Image of ${name}`}
                aria-label={`Image of ${name}`}
            />
        </header>
    )
}
