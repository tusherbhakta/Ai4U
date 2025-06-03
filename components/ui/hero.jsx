import Link from 'next/link'
import React from 'react'
import { Button } from './button'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section className='w-full pt-36 md:pt-48 pb-10'>
            <div className='space-y-6 text-center' >
                <div className='space-y-6 mx-auto '>
                    <h1 className=' text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold custom-gradient-title'>AI For Your Career
                        <br />
                        Make You Professional
                    </h1>
                    <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>Advance your career with personalized guidence, interview prep, and AI-powered tools for job success.</p>
                </div>
                <div className='flex justify-center space-x-4'>
                    <Link href={'/dashboard'}>
                        <Button size='lg' className="px-8">Get Started</Button>
                    </Link>
                    <Link href={'/dashboard'}>
                        <Button size='lg' className="px-8" variant="outline">Get Started</Button>
                    </Link>
                </div>
                <div>
                    <div>
                        <Image
                            src={'/banner.png'} width={1280} height={720} alt='Banner AI4U' className='rounded-lg shadow-2xl border mx-auto' priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection