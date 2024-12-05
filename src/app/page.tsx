'use client';

import { AppSidebar } from '@/components/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';

import CourseCard from '@/app/container/course-card';
import OverviewCard from '@/app/container/overview-card';
import ProgressLearningCard from '@/app/container/progress-learning-card';

export default function Page() {
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

      <main className='flex-1 p-3 overflow-y-auto'>
        <h1 className='text-2xl font-semibold text-blue-600'>
          Hi Robby, Good Afternoon!
        </h1>
        <p className='text-gray-500'>Lets get started with your work</p>

        <section className='mt-4'>
          <ProgressLearningCard
            language='Spanish B2'
            author='Alejandro Velazquez'
            progress={83}
            onContinue={handleContinue}
          />

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8'>
            {data.map((item, index) => (
              <OverviewCard key={index} title={item.title} count={item.count} />
            ))}
          </div>

          {/* Course Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                image={course.image}
                title={course.title}
                author={course.author}
                time={course.time}
              />
            ))}
          </div>
        </section>
      </main>
    </AppSidebar>
  );
}

const data = [
  { title: 'Course in Progress', count: 56 },
  { title: 'Course completed', count: 36 },
  { title: 'Communities', count: 9 },
];

const courses = [
  {
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    title: 'Swift Courses',
    author: 'Esther Howard',
    time: '5hr',
  },
  {
    image: 'https://via.placeholder.com/100',
    title: 'HTML Course',
    author: 'Brooklyn Simmons',
    time: '2hr',
  },
  {
    image: 'https://via.placeholder.com/100',
    title: 'React Course',
    author: 'Annette Black',
    time: '4hr',
  },
  {
    image: 'https://via.placeholder.com/100',
    title: 'Next Js Course',
    author: 'Albert Flores',
    time: '2hr',
  },
];
