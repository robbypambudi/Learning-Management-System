'use client';
import React, { useState } from 'react';

type Tab = 'About' | 'Course Content' | 'What’s included' | 'Reviews';

const TabNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('About');

  const tabs: Tab[] = ['About', 'Course Content', 'What’s included', 'Reviews'];

  return (
    <div className='border-b border-gray-200 mt-6'>
      <div className='flex space-x-4'>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-sm font-medium pb-2 ${
              activeTab === tab
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className='mt-4'>
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
};

export default TabNavigation;

type TabContentProps = {
  activeTab: Tab;
};

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  const content = {
    About: (
      <div className='space-y-4 text-gray-700'>
        <h2 className='text-lg font-semibold text-gray-800'>
          About the Course
        </h2>
        <p>
          This React course is a comprehensive guide to mastering React.js from
          the basics to advanced concepts. Whether you are a beginner or an
          experienced developer, this course has everything you need to build
          modern and interactive web applications.
        </p>
        <p>
          You will explore topics like React Hooks, state management with Redux,
          routing with React Router, animations, and integration with Next.js.
          By the end of this course, you will have the confidence and skills to
          create your own professional React applications.
        </p>
        <ul className='list-disc pl-6'>
          <li>Learn React from scratch</li>
          <li>Build real-world projects</li>
          <li>Understand state management with Redux</li>
          <li>Master modern React patterns</li>
        </ul>
      </div>
    ),
    'Course Content': (
      <div className='space-y-4 text-gray-700'>
        <h2 className='text-lg font-semibold text-gray-800'>Course Content</h2>
        <p>This course is divided into the following modules:</p>
        <ul className='list-decimal pl-6 space-y-2'>
          <li>
            <strong>Introduction to React</strong>
            <p className='text-sm'>
              Getting started with React, understanding JSX, and setting up your
              environment.
            </p>
          </li>
          <li>
            <strong>React Basics</strong>
            <p className='text-sm'>
              Components, props, state, and lifecycle methods.
            </p>
          </li>
          <li>
            <strong>Advanced Concepts</strong>
            <p className='text-sm'>Hooks, context API, and custom hooks.</p>
          </li>
          <li>
            <strong>State Management</strong>
            <p className='text-sm'>
              Managing state with Redux and Context API.
            </p>
          </li>
          <li>
            <strong>React Router</strong>
            <p className='text-sm'>
              Implementing navigation and dynamic routing.
            </p>
          </li>
          <li>
            <strong>Animations and Transitions</strong>
            <p className='text-sm'>Adding animations to your React projects.</p>
          </li>
        </ul>
      </div>
    ),
    'What’s included': (
      <div className='space-y-4 text-gray-700'>
        <h2 className='text-lg font-semibold text-gray-800'>What’s Included</h2>
        <ul className='list-disc pl-6 space-y-2'>
          <li>Lifetime access to the course materials</li>
          <li>6+ hours of on-demand video lectures</li>
          <li>Downloadable resources and project files</li>
          <li>Certificate of completion</li>
          <li>Access to an exclusive community of learners</li>
        </ul>
        <p>
          By enrolling in this course, you’ll get everything you need to master
          React and take your web development skills to the next level.
        </p>
      </div>
    ),
    Reviews: (
      <div className='space-y-4 text-gray-700'>
        <h2 className='text-lg font-semibold text-gray-800'>Student Reviews</h2>
        <p>Here’s what our students have to say about the course:</p>
        <div className='space-y-4'>
          <div className='p-4 bg-gray-100 rounded-lg'>
            <p className='font-semibold'>⭐⭐⭐⭐⭐ - Jane Doe</p>
            <p>
              "This course was amazing! The instructor explained everything in
              detail, and I feel confident building my own React applications
              now."
            </p>
          </div>
          <div className='p-4 bg-gray-100 rounded-lg'>
            <p className='font-semibold'>⭐⭐⭐⭐ - John Smith</p>
            <p>
              "Great course with a lot of practical examples. I especially loved
              the section on Redux!"
            </p>
          </div>
          <div className='p-4 bg-gray-100 rounded-lg'>
            <p className='font-semibold'>⭐⭐⭐⭐⭐ - Emily Brown</p>
            <p>
              "The best React course I’ve taken. The projects helped me solidify
              my understanding of the concepts."
            </p>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      {content[activeTab] || (
        <div className='text-gray-500'>No content available for this tab.</div>
      )}
    </div>
  );
};
