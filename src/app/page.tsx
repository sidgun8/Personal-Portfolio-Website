import CommunityHighlights from '@/components/CommunityHighlights';
import FeaturedAppearances from '@/components/FeaturedAppearances';
import { FileText } from 'lucide-react';

function Hero() {

  return (
    <section className={`hero py-8 md:py-16 text-primary`}>
      <div className="container mx-auto w-[90%] md:w-8/12">
        <div className="hero-content text-center w-full">

          <div>
            <img src="./images/profile.jpg" alt="" className='w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mb-8' />
          </div>

          <p className="text-2xl md:text-4xl font-semibold w-[100%] md:leading-snug leading-snug">
            {`Siddharth Srinivasan`}
          </p>
          <p className="text-base md:text-lg font-medium text-brand mt-1">
            Industrial AI | Optimization | Infrastructure
          </p>
          <p className="mt-2">
            I build Industrial AI, optimization workflows, and reliable infra with a rapid prototyping FDE mindset.
          </p>
          <p className="text-base md:text-lg mt-4 md:w-[90%]">
            {`My core stack includes ASPEN Plus, DWSIM, Python, AWS, and Palantir Foundry.
            I run NDY (Not Done Yet) where I turn ideas into fast, practical systems that can move from concept to deployment quickly.`}
          </p>
          <div className="mt-4 text-sm md:text-base">
            <a href="https://www.notdoneyet.in/" target="_blank" rel="noopener noreferrer" className="underline decoration-brand underline-offset-4">
              notdoneyet.in
            </a>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-sm md:text-base">
            <a href="https://github.com/sidgun8" target="_blank" rel="noopener noreferrer" className="underline decoration-brand underline-offset-4">
              GitHub
            </a>
            <a href="https://medium.com/@WellSidWrites" target="_blank" rel="noopener noreferrer" className="underline decoration-brand underline-offset-4">
              Medium
            </a>
            <a href="https://www.youtube.com/@SidGun08" target="_blank" rel="noopener noreferrer" className="underline decoration-brand underline-offset-4">
              YouTube
            </a>
            <a href="https://www.google.com/maps/contrib/105841133264984381037/reviews/@17.713815,-42.7454139,3z/data=!3m1!4b1!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="underline decoration-brand underline-offset-4">
              Google Reviews
            </a>
          </div>
          <div className="mt-4">
            <a
              href="/resume"
              className='flex items-center gap-2 border border-brand/40 rounded-full px-3 py-2 w-fit hover:bg-brand hover:text-white transition'
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

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedAppearances />
      <CommunityHighlights />
    </>
  );
}