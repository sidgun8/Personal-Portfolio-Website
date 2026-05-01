import { socialLinks } from "@/app/(constants)/socialLinks";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full text-center pb-4 pt-4 border-t border-brand/20">
      <div className="w-full flex flex-row items-center justify-center gap-4">
      {
        socialLinks.map((item, index) => (
          <Link href={item.link} className='' key={index}>
            <img src={item.icon} alt="" className='w-8 h-8 grayscale hover:grayscale-0 transition' />
          </Link>
        ))
      }
      </div>
    </footer>
  );
}

export default Footer;