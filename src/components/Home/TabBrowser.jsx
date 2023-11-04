import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TabBrowser = () => {
  const [tabs, setTabs] = useState([
    { id: 1, title: 'Web Devolopment', content: 'Content for Tab 1' },
    { id: 2, title: 'Digital Marketing', content: 'Content for Tab 2' },
    { id: 3, title: 'Grapics Design', content: 'Content for Tab 3' },
  ]);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-[90%] mx-auto mt-0">
      <div className=" ">
        <ul className='flex  gap-5 text-3xl font-semibold p-10 justify-center '>
          {tabs.map((tab) => <li
              key={tab.id}
              className={`cursor-pointer p-4 ${tab === activeTab ? 'bg-gray-500  text-white rounded' : ''}`}
              onClick={() => handleTabClick(tab)}>{tab.title}</li>
          )}
        </ul>
      </div>
      <div className=" p-4">
        <div className="bg-gray-100 p-4">
          {activeTab.content}
          <Link to='/job/id' className='btn btn-primary ml-5'>Bid now</Link>
        </div>
      </div>
    </div>
  );
};



export default TabBrowser;
