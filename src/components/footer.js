import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Footer() {
  return (
    
    <footer class="bg-white dark:bg-gray-800">
        <div class="container px-6 py-8 mx-auto">

            <hr class="my-10 border-gray-200 dark:border-gray-700" />

            <div class="flex flex-col items-center sm:flex-row sm:justify-between">
            <p class="text-sm text-gray-400">© Copyright {new Date().getFullYear()}. All Rights Reserved.</p>

            <div class="flex mt-3 -mx-2 sm:mt-0">
                <a href="#" class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Terms </a>

                <a href="#" class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>

            </div>
            </div>
        </div>
    </footer>
  )
}
