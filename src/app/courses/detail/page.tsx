'use client';

import React from 'react';

import { AppSidebar } from '@/components/app-sidebar';

import CourseDetails from '@/app/courses/detail/courses-detail';
import TabNavigation from '@/app/courses/detail/tab-navigation';

const App: React.FC = () => {
  return (
    <AppSidebar>
      <main className='px-4 py-2'>
        <CourseDetails />
        <TabNavigation />
      </main>
    </AppSidebar>
  );
};

export default App;
