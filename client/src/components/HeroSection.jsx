import { Bold, Italic, Underline, Strikethrough, List, Code, Type } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-80 animated-bg-lines"></div>

      <div className="absolute inset-0 z-20">
        <div className="absolute top-[10%] left-[10%] opacity-0 animate-fade-in-float"><Bold className="w-12 h-12 md:w-16 md:h-16 rotate-12 text-foreground" /></div>
        <div className="absolute top-[30%] right-[5%] opacity-0 animate-fade-in-float-delay1"><Italic className="w-12 h-12 md:w-16 md:h-16 -rotate-6 text-foreground" /></div>
        <div className="absolute top-[50%] left-[5%] opacity-0 animate-fade-in-float-delay2"><Underline className="w-12 h-12 md:w-16 md:h-16 rotate-45 text-foreground" /></div>
        <div className="absolute top-[70%] right-[15%] opacity-0 animate-fade-in-float-delay3"><Strikethrough className="w-12 h-12 md:w-16 md:h-16 -rotate-12 text-foreground" /></div>
        <div className="absolute top-[85%] left-[20%] opacity-0 animate-fade-in-float-delay4"><List className="w-12 h-12 md:w-16 md:h-16 rotate-24 text-foreground" /></div>
        <div className="absolute top-[15%] right-[25%] opacity-0 animate-fade-in-float-delay5"><Code className="w-12 h-12 md:w-16 md:h-16 -rotate-8 text-foreground" /></div>
        <div className="absolute top-[40%] left-[25%] opacity-0 animate-fade-in-float-delay6"><Type className="w-12 h-12 md:w-16 md:h-16 rotate-30 text-foreground" /></div>
      </div>

      <div className="relative z-30 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center max-w-7xl mx-auto">
        <div className='inline-flex items-center justify-center gap-2 px-6 py-1.5 mb-8 border border-primary-40 bg-primary/10 rounded-full text-sm text-primary'>
          <img src="/ai.png" alt="ai icon" className='w-5' />
          <p>New: AI feature integrated</p>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
          Write Your Story, <br className="hidden sm:inline" /> Share Your Voice.
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          From a simple idea to a published masterpiece. Our AI-powered editor and intuitive tools make blogging effortless and fun.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors duration-200"
          >
            Start Writing for Free
          </a>
          <a
            href="/dashboard"
            className="w-full sm:w-auto px-8 py-3 border border-border text-base font-medium rounded-md text-foreground bg-background hover:bg-secondary transition-colors duration-200"
          >
            Explore
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;