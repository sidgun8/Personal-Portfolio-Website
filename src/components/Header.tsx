"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MobileNav } from './MobileNav';
import { ThemeSwitch } from './ThemeSwitcher';


function Header() {
  const path = usePathname();

  const navLinks = [
    // { name: 'About', link: '/about' },
    { name: 'Skills', link: '/skills' },
    { name: 'Experience', link: '/experience' },
    { name: 'Education', link: '/education' },
    { name: 'Research', link: '/research' },
    { name: 'Awards', link: '/awards' },
    { name: 'Projects', link: '/projects' },
    { name: 'Contact', link: '/contact' },
  ]

  return (
    <div>
      <header className="fixed w-full top-2 text-primary z-[30]" id='home'>

        <div className="w-[300px] md:w-[500px] h-8 md:h-12 absolute left-1/2 -top-12 md:-top-8 -translate-x-1/2 bg-brand/25 rounded-full blur-3xl"></div>

        <div className="container border border-brand/20 mx-auto flex justify-between  items-center md:w-8/12 md:1/2 max-[740px]:w-[100%] max-[740px]:gap-4 max-[370px]:w-[100%] px-2 py-3 md:px-8 md:py-3 rounded-full bg-white/85 backdrop-blur-md">
          <div>
            <Link href={"/"} className="text-lg md:text-xl font-semibold tracking-tight">Siddharth Srinivasan</Link>
          </div>
          <nav className="space-x-4 hidden md:flex md:items-center">
            {
              navLinks.map(({ name, link }, index) => (
                <Link
                  key={index}
                  href={link}
                  className={`hover:text-brand transition duration-300 ${path.includes(link) ? 'underline decoration-dotted decoration-brand' : ''}`}
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