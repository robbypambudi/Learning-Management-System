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
    About: <div>About Content</div>,
    'Course Content': <div>Course Content</div>,
    'What’s included': <div>What’s included Content</div>,
    Reviews: <div>Reviews Content</div>,
  };

  return content[activeTab] || null;
};
