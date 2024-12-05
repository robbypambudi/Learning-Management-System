'use client';

import {
  Bell,
  Blocks,
  Calendar,
  Command,
  Home,
  Inbox,
  MessageCircleQuestion,
  Paperclip,
  Settings2,
  Sparkles,
  Trash2,
} from 'lucide-react';
import * as React from 'react';

import { NavCourses } from '@/components/nav-courses';
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
      url: '/ask-ai',
      icon: Sparkles,
    },
    {
      title: 'Home',
      url: '/',
      icon: Home,
      isActive: true,
    },
    {
      title: 'Inbox',
      url: '/inbox',
      icon: Inbox,
      badge: '10',
    },
    {
      title: 'Courses',
      url: '/courses',
      icon: Blocks,
      badge: 'New',
    },
    {
      title: 'Slides',
      url: '/slides',
      icon: Paperclip,
    },
    {
      title: 'Remainders',
      url: '/remainders',
      icon: Bell,
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
