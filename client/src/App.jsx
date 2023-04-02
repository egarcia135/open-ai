import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { logo } from './assets';
import { logo2 } from './assets';
import { CreatePost, Home, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white
      sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to="/">
          <img src={logo2} alt="logo" className='w-[190px] object-contain'/>
        </Link>

        {/* <Link to="/create-post" className='font-inter font-medium bg-black text-white px-4 py-2 rounded-md'>
          Create
        </Link> */}
        
        <a href="/create-post" class="relative inline-block text-medium group">
          <span class="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span class="absolute inset-0 w-full h-full px-4 py-2 rounded-lg bg-gray-50"></span>
          <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
          <span class="relative">Create</span>
          </span>
          <span class="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </a>

      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/create-post" element={ <CreatePost />}/>

          <Route path="*" element={ <NotFound />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App