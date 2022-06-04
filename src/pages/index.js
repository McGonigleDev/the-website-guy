import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/layout'

export default function IndexPage() {
  return (
    <Layout>
      <section className='bg-cover bg-top bg-no-repeat bg-gray-100'
        style={{ backgroundImage: `url("../images/bg.svg")` }}

      >
        <div className='flex flex-row h-full items-center container mx-auto text-white drop-shadow-md'>
          <div className='w-1/2'>
            <h1 className='text-5xl font-extrabold uppercase'>Get a website that works for you</h1>
            <p className='mt-6 text-xl'>The Website Guy helps you create websites that look great, attract more visitors, and work flawlessly.</p>
            <div className='flex flex-row justify-start gap-6 mt-6'>
              <button>
                <a href="#_" class="relative inline-block text-lg group">
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span class="relative">View My Work</span>
                  </span>
                  <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
              </button>

              <button>
                <a href="#_" class="relative inline-block text-lg group">
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span class="relative">Make an Enquiry</span>
                  </span>
                  <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
              </button>
            </div>
          </div>
          <div className='w-1/2 p-20'>
            <StaticImage
              src='../images/creator.svg'
              className='h-auto w-full'
            />
          </div>
        </div>
      </section>

      {/* Support */}
      <section>
        <div class="px-4 py-12 mx-auto container sm:px-6 md:px-12 lg:py-24">
          <div class="flex flex-wrap items-center mx-auto ">
            <div class="w-full lg:w-1/2 rounded-xl">
              <div>
                <div class="relative w-full max-w-lg">
                  <div class="absolute top-20 rounded-full bg-red-500 left-10 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                  <div class="absolute rounded-full bg-red-400 bottom-2 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div class="relative">
                    <StaticImage class="object-cover object-center mx-auto" alt="hero" src="../images/support.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
              <span class="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Website Support </span>
              <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">Expert advice at your fingertips</h1>
              <p class="mb-8 text-base leading-relaxed text-left text-gray-500">The Website Guy wants your website to meet its full potential - which is where our tech support comes in. Your website guy is always on call to answer any of your technical questions or help with any difficulties you may be experiencing.</p>
              <div class="mt-0 lg:mt-6 max-w-7xl sm:flex">
                <div class="mt-3 rounded-lg sm:mt-0">
                  <button class="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Get bundle</button>
                </div>
                <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                  <button class="items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">See features</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>

  )
}
