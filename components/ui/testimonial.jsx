import { testimonial } from '@/data/testimonial'
import React from 'react'
import { Card, CardContent } from './card'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 bg-background'>
            <div className='container mx-auto px-4 md:px-6'>
                <h2 className='text-3xl font-bold tracking-tighter text-center mb-12'>What Our Users Say </h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-6xl' >
                    {testimonial.map((testimonial, index) => {
                    return (
                        <Card key={index} className="bg-background">
                            <CardContent className="pt-6 ">
                                <div className='flex flex-col space-y-4'>
                                    <div className='flex items-center space-x-4'>
                                        <div className='relative h-12 w-12 flex-shrink-0'>
                                            <Image
                                            width={50}
                                            height={50}
                                            src={testimonial.image}
                                            alt={testimonial.author}
                                            className='rounded-full object-cover border-2 border-primary/20'
                                            />
                                        </div>
                                        <div>
                                            <p className='font-semibold'>{testimonial.author}</p>
                                            <p className='text-sm text-muted-foreground'>{testimonial.role}</p>
                                            <p className='text-sm text-primary'>{testimonial.company}</p>
                                        </div>
                                    </div>
                                    <blockquote>
                                        <p className='text-muted-foreground italic relative'>
                                            <span className='text-3xl text-primary absolute -top-4 -left-4'>&quot;</span>
                                            {testimonial.quote}
                                            <span className='text-3xl text-primary absolute '>&quot;</span>
                                        </p>
                                    </blockquote>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}</div>
            </div>
        </section>
  )
}

export default Testimonial