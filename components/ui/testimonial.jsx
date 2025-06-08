// import { testimonial } from '@/data/testimonial'
// import React from 'react'
// import { Card, CardContent } from './card'
// import Image from 'next/image'

// const Testimonial = () => {
//   return (
//     <section className='w-full py-12 md:py-24 lg:py-32 bg-background'>
//             <div className='container mx-auto px-4 md:px-6'>
//                 <h2 className='text-3xl font-bold tracking-tighter text-center mb-12'>What Our Users Say </h2>
//                 <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-6xl' >
//                     {testimonial.map((testimonial, index) => {
//                     return (
//                         <Card key={index} className="bg-background">
//                             <CardContent className="pt-6 ">
//                                 <div className='flex flex-col space-y-4'>
//                                     <div className='flex items-center space-x-4'>
//                                         <div className='relative h-12 w-12 flex-shrink-0'>
//                                             <Image
//                                             width={50}
//                                             height={50}
//                                             src={testimonial.image}
//                                             alt={testimonial.author}
//                                             className='rounded-full object-cover border-2 border-primary/20'
//                                             />
//                                         </div>
//                                         <div>
//                                             <p className='font-semibold'>{testimonial.author}</p>
//                                             <p className='text-sm text-muted-foreground'>{testimonial.role}</p>
//                                             <p className='text-sm text-primary'>{testimonial.company}</p>
//                                         </div>
//                                     </div>
//                                     <blockquote>
//                                         <p className='text-muted-foreground italic relative'>
//                                             <span className='text-3xl text-primary absolute -top-4 -left-4'>&quot;</span>
//                                             {testimonial.quote}
//                                             <span className='text-3xl text-primary absolute '>&quot;</span>
//                                         </p>
//                                     </blockquote>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     )
//                 })}</div>
//             </div>
//         </section>
//   )
// }

// export default Testimonial
"use client";

import { testimonial } from "@/data/testimonial";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Testimonial = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const glowHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      className="w-full py-20 bg-background relative"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 md:px-6 relative">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-20">
          What Our Users Say
        </h2>

        {/* 🟡 Glowing vertical line in the center */}
        <div className="absolute top-30 left-1/2 transform -translate-x-1/2 w-1 h-full z-0">
          <motion.div
            className="w-1 bg-gradient-to-b from-primary/30 to-primary rounded-full shadow-md"
            style={{ height: glowHeight }}
          />
        </div>

        {/* 🧱 Timeline content */}
        <div className="relative space-y-20">
          {testimonial.map((t, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeInUp}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className={`flex flex-col md:flex-row items-center justify-between relative z-10 ${
                  isLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-5/12 mx-0 lg:mx-10 xl:mx-20  w-full">
                  <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative h-12 w-12">
                        <Image
                          width={50}
                          height={50}
                          src={t.image}
                          alt={t.author}
                          className="rounded-full object-cover border-2 border-primary/30"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{t.author}</p>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                        <p className="text-sm text-primary">{t.company}</p>
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-muted-foreground italic relative">
                        <span className="text-3xl text-primary absolute -top-4 -left-4">
                          &ldquo;
                        </span>
                        {t.quote}
                        <span className="text-3xl text-primary">&rdquo;</span>
                      </p>
                    </blockquote>
                  </div>
                </div>

                {/* 🔵 Center icon */}
                {/* <div className="w-10 h-10 bg-primary rounded-full border-4 border-background shadow-md z-20" /> */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
