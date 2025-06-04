import React from 'react'

const Stat = () => {
  return (
     <section className='w-full py-12 md:py-24 bg-muted/50'>
            <div className='container mx-auto px-4 md:px-6'>
                <h2 className='text-3xl font-bold tracking-tighter text-center mb-12'>Our Impact in Numbers</h2>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto max-w-6xl'>
                    <div className='text-center'>
                        <h3 className='text-4xl font-bold'>10,000+</h3>
                        <p className='text-muted-foreground'>Users Served</p>
                    </div>
                    <div className='text-center'>
                        <h3 className='text-4xl font-bold'>500+</h3>
                        <p className='text-muted-foreground'>Success Stories</p>
                    </div>
                    <div className='text-center'>
                        <h3 className='text-4xl font-bold'>99%</h3>
                        <p className='text-muted-foreground'>Satisfaction Rate</p>
                    </div>
                    <div className='text-center'>
                        <h3 className='text-4xl font-bold'>24/7</h3>
                        <p className='text-muted-foreground'>Support by AI</p>
                    </div>
                    
                </div>

                
            </div>
        </section>
  )
}

export default Stat