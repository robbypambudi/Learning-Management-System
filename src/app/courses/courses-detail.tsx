/* eslint-disable @next/next/no-img-element */
import React from 'react';

const CourseDetails: React.FC = () => {
  return (
    <div className='bg-blue-50 p-6 rounded-lg max-w-5xl mx-auto shadow-lg'>
      {/* Header */}
      <div className='flex justify-between items-center'>
        {/* Left Content */}
        <div className='flex-1'>
          <div className='mb-2'>
            <span className='bg-blue-200 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full'>
              Web development
            </span>
          </div>
          <h1 className='text-2xl font-bold text-gray-800 mb-4'>
            Zero to Hero in React Js with Thomas Wayne
          </h1>
          <p className='text-gray-600 mb-6'>
            Dive in and learn React.js from scratch! Learn ReactJS, Hooks,
            Redux, React Routing, Animations, Next.js, and more!
          </p>
          <div className='flex items-center text-gray-500 space-x-4 mb-4'>
            <div className='flex items-center space-x-1'>
              <span>👨‍🎓</span>
              <span>5,123 Students</span>
            </div>
            <div className='flex items-center space-x-1'>
              <span>⏱️</span>
              <span>6 hr</span>
            </div>
            <div className='flex items-center space-x-1'>
              <span>📅</span>
              <span>Last Updated on 11 Oktober, 2023</span>
            </div>
          </div>
          <button className='bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition'>
            Enroll Now
          </button>
        </div>
        {/* Right Content (Image) */}
        <div className='ml-8'>
          <img
            src='/path/to/course-image.png'
            alt='Course'
            className='rounded-lg shadow-md'
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
