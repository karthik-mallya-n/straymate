import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import { ArrowRight } from 'lucide-react'

import MobileNav from './MobileNav'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import MaxWidthWrapper from '../MaxWidthWrapper'
import { ModeToggle } from '../ModeToggle'


const Navbar = () => {

  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all dark:bg-black'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
        
          <Link
            href='/'
            className='flex z-40 font-semibold'>
              <div className='flex h-14 items-center justify-between gap-5'>
              <Image src="/logo.png" alt="Straymate Logo" width={30} height={30} />
              <span className='text-electric-violet-600 '>StrayMate.</span>
              </div>
              
            
          </Link>

          <MobileNav isAuth={false} />

          <div className='hidden items-center space-x-4 sm:flex'>
          <>
                              <Link
                  href='/home'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                  Home
                </Link>
                <Link
                  href='/categories'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                  Categories
                </Link>

                <Link
                  href='/about'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                    About Us
                </Link>
                <Link
                  href='/blog'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                    Blog
                </Link>

                <ModeToggle/>
                {/* <Button variant="outline" size="icon">
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button> */}
              </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar