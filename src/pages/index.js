import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default function IndexPage() {
  return (
    <Layout>
      <section className='bg-cover bg-top bg-no-repeat bg-gray-100'
        style={{ backgroundImage: `url("../images/bg.svg")` }}

      >
        <div className='flex flex-row h-full items-center container mx-auto text-white drop-shadow-md'>
          <div className='w-1/2'>
            <h1 className='text-5xl font-extrabold uppercase'>Get a website that works for you</h1>
            <p className='mt-6 text-xl'>Let me create you a website that looks great, attracts more visitors, and works flawlessly.</p>
            <div className='flex flex-row justify-start gap-4 mt-6'>
              <button>
                <a href="#_" className="relative inline-block text-lg group">
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">View My Work</span>
                  </span>
                  <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
              </button>

              <button>
                <a href="#_" className="relative inline-block text-lg group">
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">Make an Enquiry</span>
                  </span>
                  <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
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
        <div className="px-4 py-12 mx-auto container sm:px-6 md:px-12 ">
          <div className="flex flex-wrap items-center mx-auto ">
            <div className="w-full lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="absolute top-20 rounded-full bg-red-500 left-10 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                  <div className="absolute rounded-full bg-red-400 bottom-2 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="relative">
                    <StaticImage className="object-cover object-center mx-auto" alt="hero" src="../images/support.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">Expert advice at your fingertips</h1>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-500">I want your website to meet its full potential - which is where my 10+ years of application support comes in. I'm always on call to answer any of your technical questions or help with any difficulties you may be experiencing.</p>
              <div className="mt-0 lg:mt-6 max-w-7xl sm:flex sm:gap-4">
                <button>
                  <a href="#_" className="relative inline-block text-lg group">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-red-500"></span>
                      <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                      <span className="relative text-white">Get Support</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                  </a>
                </button>

                <button>
                  <a href="#_" className="relative inline-block text-lg group">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                      <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                      <span className="relative">Make an Enquiry</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="px-4 py-12 mx-auto 2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12">
          <div className="flex flex-wrap items-center mx-auto 2xl:max-w-7xl">
            <div className="flex flex-col items-start mb-16 text-left lg:flex-grow lg:w-1/2 lg:pr-24 md:mb-0">
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">Keep your site up to date, responsive, and secure.</h1>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-400">Don't worry about anything when it comes to your website maintenance and support - I'll handle everything from design to content creation so you have time for the things that matter most in life!</p>
              <p className="mb-8 text-base leading-relaxed text-left text-gray-400">
                Regular maintenance is essential for any website to stay secure. I'll make sure that yours is updated with the latest security patches and checks, so you can rest easy knowing your data is safe.
              </p>
              <div className="mt-0 lg:mt-6 max-w-7xl sm:flex gap-4">
                <button>
                  <a href="#_" className="relative inline-block text-lg group">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-red-500"></span>
                      <span className="absolute left-0 w-96 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                      <span className="relative text-white">View Support Plans</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                  </a>
                </button>

                <button>
                  <a href="#_" className="relative inline-block text-lg group">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                      <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                      <span className="relative">Make an Enquiry</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                  </a>
                </button>
              </div>
            </div>
            <div className="w-full mt-12 lg:w-5/6 lg:max-w-lg xl:mt-0">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="absolute top-0 rounded-full bg-red-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                  <div className="absolute rounded-full bg-red-400 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="relative">
                    <img className="object-cover object-center mx-auto" alt="hero" src="../images/management.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="w-full bg-red-50 mt-10">
        <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-18">
          <div class="flex w-full mx-auto text-left">
            <div class="relative inline-flex items-center mx-auto align-middle">
              <div class="text-center">
                <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                A one-stop shop for all your needs
                </h1>
                <p class="max-w-2xl mx-auto mt-8 text-base leading-relaxed text-gray-500">My service covers a wide range of tasks - from hosting and security to content updates. Whether you need help with a new website or just want someone to check on the status of an old one, I'm here for you..</p>

              </div>
            </div>
          </div>
        </div>
        <div class="text-center pb-4">
            <a href="#" class="text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
            <StaticImage
                        src='../images/logo.svg'
                        class='w-14 dark:hidden'
                    />
                    {/* Logo Dark Theme */}
                    <StaticImage
                        src='../images/logo-white.svg'
                        class='w-14 hidden dark:block'
                    />
            </a>

            <p class="max-w-md mx-auto mt-2 text-gray-500 dark:text-gray-400">Need help deciding?</p>

            <div class="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
                <button class="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 bg-white capitalize transition-colors duration-200 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 mx-1 fill-red-400' viewBox="0 0 640 512"><path d="M416 176C416 78.8 322.9 0 208 0S0 78.8 0 176c0 39.57 15.62 75.96 41.67 105.4c-16.39 32.76-39.23 57.32-39.59 57.68c-2.1 2.205-2.67 5.475-1.441 8.354C1.9 350.3 4.602 352 7.66 352c38.35 0 70.76-11.12 95.74-24.04C134.2 343.1 169.8 352 208 352C322.9 352 416 273.2 416 176zM599.6 443.7C624.8 413.9 640 376.6 640 336C640 238.8 554 160 448 160c-.3145 0-.6191 .041-.9336 .043C447.5 165.3 448 170.6 448 176c0 98.62-79.68 181.2-186.1 202.5C282.7 455.1 357.1 512 448 512c33.69 0 65.32-8.008 92.85-21.98C565.2 502 596.1 512 632.3 512c3.059 0 5.76-1.725 7.02-4.605c1.229-2.879 .6582-6.148-1.441-8.354C637.6 498.7 615.9 475.3 599.6 443.7z"/></svg>

                <span class="mx-1">Let's Discuss</span>
                </button>
            </div>
            </div>
      </section>

    </Layout>

  )
}
