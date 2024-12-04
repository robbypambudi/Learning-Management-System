'use client';

import {
  Blocks,
  Calendar,
  Command,
  Home,
  Inbox,
  MessageCircleQuestion,
  Settings2,
  Sparkles,
  Trash2,
} from 'lucide-react';
import * as React from 'react';

import { NavCourses } from '@/components/nav-courses';
import { NavFavorites } from '@/components/nav-favorites';
import { NavMain } from '@/components/nav-main';
import { NavSecondary } from '@/components/nav-secondary';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

// This is sample data.
const data = {
  teams: [
    {
      name: 'Acme Inc',
      logo: Command,
      plan: 'Enterprise',
    },
  ],
  navMain: [
    {
      title: 'Ask AI',
      url: '#',
      icon: Sparkles,
    },
    {
      title: 'Home',
      url: '#',
      icon: Home,
      isActive: true,
    },
    {
      title: 'Inbox',
      url: '#',
      icon: Inbox,
      badge: '10',
    },
  ],
  navSecondary: [
    {
      title: 'Calendar',
      url: '#',
      icon: Calendar,
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
    },
    {
      title: 'Templates',
      url: '#',
      icon: Blocks,
    },
    {
      title: 'Trash',
      url: '#',
      icon: Trash2,
    },
    {
      title: 'Help',
      url: '#',
      icon: MessageCircleQuestion,
    },
  ],
  favorites: [
    {
      name: 'Project Management & Task Tracking',
      url: '#',
      emoji: '📊',
    },
    {
      name: 'Family Recipe Collection & Meal Planning',
      url: '#',
      emoji: '🍳',
    },
    {
      name: 'Fitness Tracker & Workout Routines',
      url: '#',
      emoji: '💪',
    },
    {
      name: 'Book Notes & Reading List',
      url: '#',
      emoji: '📚',
    },
    {
      name: 'Sustainable Gardening Tips & Plant Care',
      url: '#',
      emoji: '🌱',
    },
    {
      name: 'Language Learning Progress & Resources',
      url: '#',
      emoji: '🗣️',
    },
    {
      name: 'Home Renovation Ideas & Budget Tracker',
      url: '#',
      emoji: '🏠',
    },
    {
      name: 'Personal Finance & Investment Portfolio',
      url: '#',
      emoji: '💰',
    },
    {
      name: 'Movie & TV Show Watchlist with Reviews',
      url: '#',
      emoji: '🎬',
    },
    {
      name: 'Daily Habit Tracker & Goal Setting',
      url: '#',
      emoji: '✅',
    },
  ],
  // workspaces: [
  //   {
  //     name: 'Personal Life Management',
  //     emoji: '🏠',
  //     pages: [
  //       {
  //         name: 'Daily Journal & Reflection',
  //         url: '#',
  //         emoji: '📔',
  //       },
  //       {
  //         name: 'Health & Wellness Tracker',
  //         url: '#',
  //         emoji: '🍏',
  //       },
  //       {
  //         name: 'Personal Growth & Learning Goals',
  //         url: '#',
  //         emoji: '🌟',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Professional Development',
  //     emoji: '💼',
  //     pages: [
  //       {
  //         name: 'Career Objectives & Milestones',
  //         url: '#',
  //         emoji: '🎯',
  //       },
  //       {
  //         name: 'Skill Acquisition & Training Log',
  //         url: '#',
  //         emoji: '🧠',
  //       },
  //       {
  //         name: 'Networking Contacts & Events',
  //         url: '#',
  //         emoji: '🤝',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Creative Projects',
  //     emoji: '🎨',
  //     pages: [
  //       {
  //         name: 'Writing Ideas & Story Outlines',
  //         url: '#',
  //         emoji: '✍️',
  //       },
  //       {
  //         name: 'Art & Design Portfolio',
  //         url: '#',
  //         emoji: '🖼️',
  //       },
  //       {
  //         name: 'Music Composition & Practice Log',
  //         url: '#',
  //         emoji: '🎵',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Home Management',
  //     emoji: '🏡',
  //     pages: [
  //       {
  //         name: 'Household Budget & Expense Tracking',
  //         url: '#',
  //         emoji: '💰',
  //       },
  //       {
  //         name: 'Home Maintenance Schedule & Tasks',
  //         url: '#',
  //         emoji: '🔧',
  //       },
  //       {
  //         name: 'Family Calendar & Event Planning',
  //         url: '#',
  //         emoji: '📅',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Travel & Adventure',
  //     emoji: '🧳',
  //     pages: [
  //       {
  //         name: 'Trip Planning & Itineraries',
  //         url: '#',
  //         emoji: '🗺️',
  //       },
  //       {
  //         name: 'Travel Bucket List & Inspiration',
  //         url: '#',
  //         emoji: '🌎',
  //       },
  //       {
  //         name: 'Travel Journal & Photo Gallery',
  //         url: '#',
  //         emoji: '📸',
  //       },
  //     ],
  //   },
  // ],

  courses: [
    {
      name: 'Kewirausahaan Berbasis Teknologi',
      emoji: '🚀',
      pages: [
        {
          name: 'Week 1: Introduction to Entrepreneurship',
          emoji: '📚',
        },
        {
          name: 'Week 2: Business Model Canvas',
          emoji: '📊',
        },
        {
          name: 'Week 3: Lean Startup Methodology',
          emoji: '📈',
        },
        {
          name: 'Week 4: Product Development',
          emoji: '🛠️',
        },
        {
          name: 'Week 5: Marketing & Sales',
          emoji: '📈',
        },
        {
          name: 'Week 6: Financial Planning & Forecasting',
          emoji: '💰',
        },
        {
          name: 'Week 7: Legal & Compliance',
          emoji: '📝',
        },
        {
          name: 'Week 8: Pitching & Fundraising',
          emoji: '🎤',
        },
      ],
    },
    {
      name: 'Professional Development',
      emoji: '💼',
      pages: [
        {
          name: 'Career Objectives & Milestones',
          emoji: '🎯',
        },
        {
          name: 'Skill Acquisition & Training Log',
          emoji: '🧠',
        },
        {
          name: 'Networking Contacts & Events',
          emoji: '🤝',
        },
      ],
    },
  ],
};

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className='border-r-0' {...props}>
      <SidebarHeader>
        <Logo />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavFavorites favorites={data.favorites} />
        <NavCourses courses={data.courses} />
        <NavSecondary items={data.navSecondary} className='mt-auto' />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

function Logo() {
  return (
    <div className='flex items-center gap-2 py-4 px-1'>
      <span className='font-bold text-2xl text-blue-500'>Brainmy.</span>
    </div>
  );
}
