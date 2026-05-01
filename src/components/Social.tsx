import { socialLinks } from '../app/(constants)/socialLinks';

const SocialMedia = () => {

  return  (
    <div className="fixed md:flex hidden right-2 top-1/2 transform -translate-y-1/2 flex-col items-center gap-6 bg-white border border-brand/30 rounded-full shadow-sm px-2 py-6">
      {socialLinks.map((social, index) => (
        <a href={social.link} target="_blank" rel="noopener noreferrer" className="text-accent1 hover:text-accent2 transition duration-300" key={index}>
          <img src={social.icon} alt="" className='h-8 w-8 grayscale hover:grayscale-0' />
        </a>
      ))}
    </div>
  )
}

export default SocialMedia;
