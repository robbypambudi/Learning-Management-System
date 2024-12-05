/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface UserProfileProps {
  name: string;
  role: string;
  email: string;
  imageUrl: string;
  involvement: string;
  specialization: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  role,
  email,
  imageUrl,
  involvement,
  specialization,
}) => {
  return (
    <div className='flex items-center justify-between p-6 rounded-lg shadow-md max-w-4xl mx-auto bg-white'>
      {/* Left Section */}
      <div className='flex items-center gap-4'>
        <img
          src={imageUrl}
          alt={`${name}'s profile`}
          className='w-16 h-16 rounded-full object-cover'
        />
        <div>
          <h2 className='text-xl font-semibold'>{name}</h2>
          <span className='bg-blue-200 text-blue-800 text-sm font-medium py-1 px-3 rounded-full'>
            {role}
          </span>
          <p className='text-gray-400 text-sm'>{email}</p>
        </div>
      </div>

      {/* Right Section */}
      <div className='text-right'>
        <p>
          <span className='text-gray-400'>Involvements: </span>
          {involvement}
        </p>
        <p>
          <span className='text-gray-400'>Specialisation: </span>
          {specialization}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
