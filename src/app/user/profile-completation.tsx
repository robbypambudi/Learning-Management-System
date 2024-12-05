import React from 'react';

const ProfileCompletion: React.FC = () => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md'>
      <h3 className='text-blue-600 font-semibold text-lg'>
        Complete your Profile
      </h3>
      <div className='mt-4'>
        <div className='w-full bg-gray-200 rounded-full h-2'>
          <div
            className='bg-blue-600 h-2 rounded-full'
            style={{ width: '33%' }}
          ></div>
        </div>
        <p className='mt-2 text-gray-500 text-sm'>
          Please complete your profile (1/3)
        </p>
      </div>
    </div>
  );
};

export default ProfileCompletion;
