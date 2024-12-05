import React from 'react';

type Slide = {
  title: string;
  description: string;
  fileUrl: string;
};

type SlideCardProps = {
  className: string;
  slides: Slide[];
};

const SlideCard: React.FC<SlideCardProps> = ({ className, slides }) => {
  return (
    <div className='p-6 bg-white rounded-lg shadow-md mb-6'>
      <h2 className='text-xl font-bold text-gray-800 mb-4'>{className}</h2>
      <ul className='space-y-4'>
        {slides.map((slide, index) => (
          <li key={index} className='flex items-start space-x-4'>
            <div className='flex-1'>
              <h3 className='text-lg font-semibold text-gray-700'>
                {slide.title}
              </h3>
              <p className='text-gray-600'>{slide.description}</p>
            </div>
            <a
              href={slide.fileUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 underline'
            >
              View Slide
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlideCard;
