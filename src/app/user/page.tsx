import React from 'react';

import { AppSidebar } from '@/components/app-sidebar';

import UserProfile from '@/app/container/user-profile';
import AboutSection from '@/app/user/about-section';
import ProfileCompletion from '@/app/user/profile-completation';
import SkillsSection from '@/app/user/skills-section';

export default function UserPage() {
  return (
    <AppSidebar>
      <main className='px-4'>
        <UserProfile
          name='Jake Harper'
          role='Student'
          email='jake@gmail.com'
          imageUrl='/path/to/image.png' // Sesuaikan dengan lokasi gambar Anda
          involvement='CBO at Life partners'
          specialization='Bachelor of IT'
        />

        <div className='bg-gray-100 min-h-screen p-6'>
          <nav className='bg-white shadow-md p-4 rounded-lg mb-6'>
            <ul className='flex gap-6'>
              <li className='text-blue-600 font-semibold'>About me</li>
              <li className='text-gray-600'>Enrolled Courses</li>
              <li className='text-gray-600'>Last Courses</li>
              <li className='text-gray-600'>Quiz & Exam</li>
              <li className='text-gray-600'>Attendance</li>
            </ul>
          </nav>
          <div className='space-y-6'>
            <ProfileCompletion />
            <AboutSection />
            <SkillsSection />
          </div>
        </div>
      </main>
    </AppSidebar>
  );
}
