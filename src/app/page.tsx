"use client"

import VideoCard from '@/components/VideoCard';
import { FileText } from 'lucide-react';

function Hero() {

  return (
    <section className={`hero py-8 md:py-16 text-primary`}>
      <div className="container mx-auto w-[90%] md:w-8/12">
        <div className="hero-content text-center w-full">

          <div>
            <img src="./images/profile.jpg" alt="" className='w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mb-8' />
          </div>

          <p className="text-2xl md:text-4xl font-bold w-[100%] md:leading-snug leading-snug">
            {`Hey there! I'm Siddharth`}
          </p>
          <p>
            your friendly neighborhood software developer with a knack for turning caffeine and code into pure magic.
          </p>
          <p className="text-base md:text-lg mt-4 md:w-[90%]">
            {`I love building web applications that not only look great but also provide a seamless user experience.
            With a background in both front-end and back-end technologies, I'm excited to bring creative ideas to life.`}
          </p>
          <div className="mt-4">
            <a
              href="/resume"
              className='flex items-center gap-2 border rounded-full px-3 py-2 w-fit'
            >
              <FileText strokeWidth={1.75} className="inline-block w-6 h-6" />
              Resume
            </a>
          </div>

          {/* <div className="responsive-iframe rounded-2xl grid grid-cols-1 md:grid-cols-1 w-full items-center justify-center mt-8 mx-auto">
            <VideoCard iframe={
              <iframe width="" height="" src="https://www.youtube.com/embed/4yYZKSw3t44?si=Y1eQJl2FoRIkKGDc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='rounded-xl md:rounded-3xl w-full aspect-video'></iframe>
            }
            />
          </div> */}


        </div>
      </div>

    </section>
  );
}

export default Hero;