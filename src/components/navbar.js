import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export default function Navbar() {
    return (
        <nav className='border-b-2 border-slate-200 bg-slate-100 dark:bg-slate-800'>
            <div className='flex flex-row justify-between items-center container mx-auto'>
                <Link 
                to='/'
                className='p-2'>
                    <StaticImage
                        src='../images/logo.svg'
                        class='w-14 dark:hidden'
                    />
                    {/* Logo Dark Theme */}
                    <StaticImage
                        src='../images/logo-white.svg'
                        class='w-14 hidden dark:block'
                    />
                </Link>
                <menu className='relative left-0' >
                    <ul className='flex flex-row text-slate-600 dark:text-white text-sm font-semibold'>
                        <li className='text-center grid place-content-center border-r-2 border-l-2 border-slate-200 w-20 md:w-32 h-20'>
                            <Link to='portfolio'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-8 mx-auto fill-slate-700' viewBox="0 0 640 512"><path d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z"/></svg>
                                Services

                            </Link>
                        </li>
                        <li className='text-center grid place-content-center items-center border-r-2 border-slate-200 h-20 w-20 md:w-32'>
                            <Link to='portfolio'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 mx-auto fill-slate-700' viewBox="0 0 512 512"><path d="M320 336c0 8.844-7.156 16-16 16h-96C199.2 352 192 344.8 192 336V288H0v144C0 457.6 22.41 480 48 480h416c25.59 0 48-22.41 48-48V288h-192V336zM464 96H384V48C384 22.41 361.6 0 336 0h-160C150.4 0 128 22.41 128 48V96H48C22.41 96 0 118.4 0 144V256h512V144C512 118.4 489.6 96 464 96zM336 96h-160V48h160V96z"/></svg>
                                Portfolio

                            </Link>
                        </li>
                        <li className='text-center grid place-content-center items-center border-r-2 border-slate-200 h-20 w-20 md:w-32'>
                            <Link to='portfolio'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 mx-auto fill-slate-700' viewBox="0 0 576 512"><path d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM176 128c35.35 0 64 28.65 64 64s-28.65 64-64 64s-64-28.65-64-64S140.7 128 176 128zM272 384h-192C71.16 384 64 376.8 64 368C64 323.8 99.82 288 144 288h64c44.18 0 80 35.82 80 80C288 376.8 280.8 384 272 384zM496 320h-128C359.2 320 352 312.8 352 304S359.2 288 368 288h128C504.8 288 512 295.2 512 304S504.8 320 496 320zM496 256h-128C359.2 256 352 248.8 352 240S359.2 224 368 224h128C504.8 224 512 231.2 512 240S504.8 256 496 256zM496 192h-128C359.2 192 352 184.8 352 176S359.2 160 368 160h128C504.8 160 512 167.2 512 176S504.8 192 496 192z"/></svg>
                                About

                            </Link>
                        </li>
                    </ul>
                </menu>
                <div className='hidden md:block'>
                    <Link href="#_" class="relative  md:inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-slate-800 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 group">
                        <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-500 group-hover:h-full"></span>
                        <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Enquiries</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
