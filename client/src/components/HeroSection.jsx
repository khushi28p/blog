import { Bold, Italic, Underline, Strikethrough, List, Code, Type } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-blue-50/50 py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-80 animated-bg-lines"></div>

      <div className="absolute inset-0 z-10">
        <div className="absolute top-[10%] left-[10%] opacity-0 animate-fade-in-float"><Bold className="w-12 h-12 md:w-16 md:h-16 rotate-12" /></div>
        <div className="absolute top-[30%] right-[5%] opacity-0 animate-fade-in-float-delay1"><Italic className="w-12 h-12 md:w-16 md:h-16 -rotate-6" /></div>
        <div className="absolute top-[50%] left-[5%] opacity-0 animate-fade-in-float-delay2"><Underline className="w-12 h-12 md:w-16 md:h-16 rotate-45" /></div>
        <div className="absolute top-[70%] right-[15%] opacity-0 animate-fade-in-float-delay3"><Strikethrough className="w-12 h-12 md:w-16 md:h-16 -rotate-12" /></div>
        <div className="absolute top-[85%] left-[20%] opacity-0 animate-fade-in-float-delay4"><List className="w-12 h-12 md:w-16 md:h-16 rotate-24" /></div>
        <div className="absolute top-[15%] right-[25%] opacity-0 animate-fade-in-float-delay5"><Code className="w-12 h-12 md:w-16 md:h-16 -rotate-8" /></div>
        <div className="absolute top-[40%] left-[25%] opacity-0 animate-fade-in-float-delay6"><Type className="w-12 h-12 md:w-16 md:h-16 rotate-30" /></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Write Your Story, <br className="hidden sm:inline" /> Share Your Voice.
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          From a simple idea to a published masterpiece. Our AI-powered editor and intuitive tools make blogging effortless and fun.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Start Writing for Free
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;