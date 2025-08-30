import React from 'react';

const Testimony = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 p-8 bg-gray-50 rounded-lg shadow-lg">
        {/* Testimonial Image */}
        <div className="flex-shrink-0 md:w-1/3">
          <img
            src="/image.png"
            alt="Jane Doe"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Testimonial Content */}
        <div className="md:w-2/3 text-center md:text-left">
          {/* Star Rating */}
          <div className="flex justify-center md:justify-start mb-4">
            {Array(5).fill(
              <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            )}
          </div>

          {/* Quote */}
          <p className="text-xl italic text-gray-800 mb-6">
            "QUILLJOT HAS TRANSFORMED THE WAY I CREATE CONTENT. IT'S INTUITIVE AND HAS SIGNIFICANTLY BOOSTED MY PRODUCTIVITY!"
          </p>

          {/* Author and Company */}
          <div className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4">
            <div>
              <p className="font-semibold text-gray-900">Jane Doe</p>
              <p className="text-sm text-gray-600">Content Creator, BlogCo</p>
            </div>
            {/* You can replace this with an actual SVG for Webflow logo */}
            <div className="text-gray-500 font-bold text-lg md:ml-auto">
              Webflow
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;