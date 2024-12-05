'use client';
/* eslint-disable @next/next/no-img-element */
import React from 'react';

type ProgressLearningCardProps = {
  language: string;
  author: string;
  progress: number;
  onContinue: () => void;
};

const ProgressLearningCard = ({
  language,
  author,
  progress,
  onContinue,
}: ProgressLearningCardProps) => {
  return (
    <div className='flex items-center justify-between bg-blue-100 p-4 rounded-lg shadow-md'>
      <div className='flex items-center'>
        {/* Icon Bahasa */}
        <div className='w-12 h-12 flex items-center justify-center bg-white rounded-full shadow'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg'
            alt='Language Icon'
            className='w-8 h-8 rounded-full'
          />
        </div>
        {/* Detail */}
        <div className='ml-4'>
          <h3 className='text-lg font-semibold'>{language}</h3>
          <p className='text-sm text-gray-600'>by {author}</p>
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        {/* Progress */}
        <div className='relative w-16 h-16'>
          <svg className='w-full h-full transform -rotate-90'>
            <circle
              cx='50%'
              cy='50%'
              r='24'
              strokeWidth='4'
              stroke='#e5e7eb'
              fill='transparent'
            />
            <circle
              cx='50%'
              cy='50%'
              r='24'
              strokeWidth='4'
              stroke='#4f46e5'
              fill='transparent'
              strokeDasharray={Math.PI * 2 * 24}
              strokeDashoffset={
                Math.PI * 2 * 24 - (progress / 100) * Math.PI * 2 * 24
              }
            />
          </svg>
          <div className='absolute inset-0 flex items-center justify-center text-sm font-semibold'>
            {progress}%
          </div>
        </div>
        {/* Button Continue */}
        <button
          className='px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800'
          onClick={() => onContinue()}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ProgressLearningCard;
