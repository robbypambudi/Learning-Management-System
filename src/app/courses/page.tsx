'use client';
import { Separator } from '@radix-ui/react-separator';

import { AppSidebar } from '@/components/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { SidebarTrigger } from '@/components/ui/sidebar';

import ProgressLearningCard from '@/app/container/progress-learning-card';
import ScheduleItem from '@/app/courses/schedule-item';

export default function CoursesPage() {
  const schedules = [
    {
      subject: 'Social Science',
      category: 'Swift Courses',
      time: '13:00 - 15:00',
      day: 'Thursday',
    },
    {
      subject: 'Mathematics',
      category: 'Swift Courses',
      time: '15:00 - 17:00',
      day: 'Thursday',
    },
    {
      subject: 'Art & Creativity',
      category: 'Swift Courses',
      time: '08:00 - 10:00',
      day: 'Friday',
    },
    {
      subject: 'Civic',
      category: 'Swift Courses',
      time: '13:00 - 15:00',
      day: 'Friday',
    },
  ];

  const handleContinue = () => {
    alert('Continue learning!');
  };
  return (
    <AppSidebar>
      <header className='sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background'>
        <div className='flex flex-1 items-center gap-2 px-3'>
          <SidebarTrigger />
          <Separator orientation='vertical' className='mr-2 h-4' />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className='line-clamp-1'>
                  Dashboard
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className='w-full mx-auto p-4'>
        <ProgressLearningCard
          language='Spanish B2'
          author='Alejandro Velazquez'
          progress={83}
          onContinue={handleContinue}
        />
        <h1 className='text-xl font-bold text-gray-800 my-6'>Schedule</h1>
        {schedules.map((schedule, index) => (
          <ScheduleItem
            key={index}
            subject={schedule.subject}
            category={schedule.category}
            time={schedule.time}
            day={schedule.day}
          />
        ))}
      </div>
    </AppSidebar>
  );
}
