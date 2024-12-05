'use client';
import React from 'react';

type ScheduleItemProps = {
  subject: string;
  category: string;
  time: string;
  day: string;
};

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  subject,
  category,
  time,
  day,
}) => {
  return (
    <div className='flex items-center bg-blue-50 rounded-lg shadow-md p-4 mb-4'>
      {/* Initial */}
      <div className='flex items-center justify-center bg-white text-blue-900 font-bold text-3xl w-14 h-14 rounded-lg mr-4'>
        {subject.charAt(0).toUpperCase()}
      </div>
      {/* Details */}
      <div>
        <div className='text-blue-700 font-semibold text-sm mb-1'>
          {category}
        </div>
        <div className='font-bold text-gray-800 text-lg'>{subject}</div>
        <div className='text-gray-500 text-sm'>{`${day} ${time}`}</div>
      </div>
    </div>
  );
};

export default ScheduleItem;
