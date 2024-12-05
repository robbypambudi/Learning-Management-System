import { Separator } from '@radix-ui/react-separator';
import React from 'react';

import { AppSidebar } from '@/components/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { SidebarTrigger } from '@/components/ui/sidebar';

import SlideCard from '@/app/slides/slide-card';

const SlidesPage: React.FC = () => {
  // Data contoh
  const slidesData = [
    {
      className: 'Class A',
      slides: [
        {
          title: 'Introduction to React',
          description: 'Basics of React and components.',
          fileUrl: 'https://example.com/slide1.pdf',
        },
        {
          title: 'React State Management',
          description: 'Understanding state and props.',
          fileUrl: 'https://example.com/slide2.pdf',
        },
      ],
    },
    {
      className: 'Class B',
      slides: [
        {
          title: 'JavaScript Fundamentals',
          description: 'Learn the basics of JavaScript.',
          fileUrl: 'https://example.com/slide3.pdf',
        },
        {
          title: 'Asynchronous JavaScript',
          description: 'Promises, async/await, and event loop.',
          fileUrl: 'https://example.com/slide4.pdf',
        },
      ],
    },
    {
      className: 'Class C',
      slides: [
        {
          title: 'CSS Grid and Flexbox',
          description: 'Learn modern layout techniques.',
          fileUrl: 'https://example.com/slide5.pdf',
        },
      ],
    },
  ];

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
      <main className='p-6'>
        <div className='w-full'>
          <h1 className='text-3xl font-bold text-gray-800 mb-6'>
            Slides per Class
          </h1>
          {slidesData.map((data, index) => (
            <SlideCard
              key={index}
              className={data.className}
              slides={data.slides}
            />
          ))}
        </div>
      </main>
    </AppSidebar>
  );
};

export default SlidesPage;
