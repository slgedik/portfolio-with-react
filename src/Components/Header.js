import React from 'react';
import { Link } from 'react-scroll';
export default function Header() {
  return (
    <header className="header">
    <nav class="flex items-center justify-between flex-wrap bg-neutral-800 p-6">
        
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow ml-4">
          
            <Link 
              to="about" 
              smooth={true} 
              duration={1000} 
              className="block mt-4 lg:inline-block lg:mt-0 text-white text-lg hover:text-teal-200 mr-4 cursor-pointer"
            >
              About Me
            </Link>
            <Link 
              to="projects" 
              smooth={true} 
              duration={1000} 
              className="block mt-4 lg:inline-block lg:mt-0 text-white text-lg hover:text-teal-200 mr-4 cursor-pointer"
            >
              Projects
            </Link>
            <Link 
              to="contact" 
              smooth={true} 
              duration={1000} 
              className="block mt-4 lg:inline-block lg:mt-0 text-white text-lg hover:text-teal-200 mr-4 cursor-pointer"
            >
              Contact
            </Link>
            </div>
            <div>
            <a href="/assets/silaGedikCV.pdf" download class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download My Resume</a>
            </div>
        </div>
        </nav>
    </header>
  );
}
