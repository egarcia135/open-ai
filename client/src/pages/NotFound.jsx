import React from 'react';
import { Linked } from '../assets';

const NotFound = () => {
  return (
    <div class="h-screen w-full flex flex-col justify-center items-center bg-white">
	    <h1 class="text-9xl font-extrabold text-black tracking-widest">404</h1>
	      <div class="bg-black text-white px-2 text-sm rounded rotate-12 absolute">
		      Page Not Found
	      </div>
      
        <a href="/" class="relative inline-block text-medium group">
          <span class="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span class="absolute inset-0 w-full h-full px-4 py-2 rounded-lg bg-gray-50"></span>
            <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span class="relative">Go Home...</span>
          </span>
          <span class="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </a>
    </div>
  )
}

export default NotFound;