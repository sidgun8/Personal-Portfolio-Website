"use client"
import { Playwrite_AU_SA } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MobileNav } from './MobileNav';
import { ThemeSwitch } from './ThemeSwitcher';

const playwriteFont = Playwrite_AU_SA({});


function Header() {
  const path = usePathname();

  const navLinks = [
    // { name: 'About', link: '/about' },
    { name: 'Skills', link: '/skills' },
    { name: 'Experience', link: '/experience' },
    { name: 'Projects', link: '/projects' },
    { name: 'Contact', link: '/contact' },
  ]

  return (
    <div>
      <header className="fixed w-full top-2 text-primary z-[30]" id='home'>

        <div className="w-[300px] md:w-[500px] h-8 md:h-12 absolute left-1/2 -top-12 md:-top-8 -translate-x-1/2 bg-primary/60 rounded-full blur-3xl"></div>

        <div className="container border border-black/10 mx-auto flex justify-between  items-center md:w-8/12 md:1/2 max-[740px]:w-[100%] max-[740px]:gap-4 max-[370px]:w-[100%] px-2 py-3 md:px-8 md:py-3 rounded-full bg-secondary/20 backdrop-blur-md">
          <div>
            <Link href={"/"} className={`text-xl md:text-2xl font-bold ${playwriteFont.className}`}>Siddharth Srinivasan</Link>
          </div>
          <nav className="space-x-4 hidden md:flex md:items-center">
            {
              navLinks.map(({ name, link }, index) => (
                <Link
                  key={index}
                  href={link}
                  className={`hover:text-accent2 transition duration-300 ${path.includes(link) ? 'underline decoration-dotted' : ''}`}
                >
                  {name}
                </Link>
              ))
            }
            <ThemeSwitch className='scale-110' />
          </nav>

          <div className='flex md:hidden items-center gap-6'>

            <ThemeSwitch className='block md:hidden' />


            <MobileNav />
          </div>

        </div>
      </header>
    </div>
  );
}

export default Header;