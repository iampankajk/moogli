'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    { label: 'HOME', items: ['Overview'] },
    { label: 'COMPANY', items: ['Details'] },
    { label: 'MEASURE', items: ['Scope 1', 'Scope 2', 'Scope 3'] },
    { label: 'GHG INVENTORY', items: ['Results', 'Reports'] },
    {
      label: 'REDUCTION PLANS',
      items: ['Short term', 'Long term', 'Net Zero'],
    },
  ];

  const icons = {
    Overview: '/dashboard.svg',
    Details: '/skyscraper.svg',
    'Scope 1': '/emission.svg',
    'Scope 2': '/bolt.svg',
    'Scope 3': '/cloud.svg',
    Results: '/line.svg',
    Reports: '/analytics.svg',
    'Short term': '/list.svg',
    'Long term': '/long_term.svg',
    'Net Zero': '/leaf.svg',
  };

  return (
    <div className='relative z-10'>
      {/* Toggle Button for small devices */}
      {!isSidebarOpen && (
        <div className='md:hidden w-full fixed flex justify-end'>
          <button className='p-2' onClick={toggleSidebar}>
            <Image
              src='/close_btn.svg'
              height={24}
              width={24}
              alt='Toggle Button'
            />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed w-56 md:relative md:h-[100vh] inset-y-0 left-0 bg-white shadow-lg transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:w-60 lg:w-64 z-10`}
      >
        {/* Logo */}
        <div className='px-4 pt-4'>
          <div className='flex'>
            <div className='flex items-center gap-2 flex-grow'>
              <Image src='/logo.svg' height={32} width={32} alt='Logo' />
              <div>
                <h1 className='text-xl font-bold'>
                  <Image
                    src='/moogli_text.svg'
                    height={19}
                    width={72}
                    alt='Moogli Text'
                  />
                </h1>
                <p className='text-sm text-gray-700 tracking-widest'>
                  PLATFORM
                </p>
              </div>
            </div>
            <div className='flex items-center'>
              <Image
                src='/close_btn.svg'
                height={24}
                width={24}
                alt='Close Button'
                className='cursor-pointer md:hidden'
                onClick={toggleSidebar}
              />
            </div>
          </div>
        </div>

        {/* Year Report */}
        <div className='px-4 lg:py-2'>
          <div className='flex border p-2 rounded-xl'>
            <div className='flex items-center gap-2 flex-grow'>
              <Image
                src='/report_icon.svg'
                height={32}
                width={32}
                alt='Report Icon'
              />
              <div>
                <h1 className='text-sm font-medium'>20yy</h1>
                <p className='text-xs text-gray-400'>year of report</p>
              </div>
            </div>
            <div className='flex items-center'>
              <Image
                src='/double_arrow.svg'
                height={20}
                width={20}
                alt='Double Arrow'
              />
            </div>
          </div>
        </div>

        {/* Menu Items */}
        {menuItems.map((section, index) => (
          <div key={index} className='px-4' id={section.label}>
            <h3 className='text-xs font-semibold text-gray-500 py-1 px-2'>
              {section.label}
            </h3>
            {section.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className='flex items-center py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer'
              >
                {icons[item] && (
                  <Image
                    className='w-5 h-5 mr-2'
                    src={icons[item]}
                    height={20}
                    width={20}
                    alt={`${item} Icon`}
                  />
                )}
                <span className='text-sm'>{item}</span>
                {(item === 'Scope 1' ||
                  item === 'Scope 2' ||
                  item === 'Scope 3') && (
                  <Image
                    className='w-4 h-4 ml-auto'
                    src='/down_arrow.svg'
                    height={16}
                    width={16}
                    alt='Down Arrow'
                  />
                )}
              </div>
            ))}
          </div>
        ))}

        {/* User Info */}
        <div className='md:pt-2 md:px-4 border-t flex items-center'>
          <div className='w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-semibold'>
            NS
          </div>
          <div className='ml-3'>
            <p className='text-sm font-medium'>Natura Sana</p>
            <p className='text-xs text-gray-500'>naturasana@moogli.io</p>
          </div>
        </div>
      </div>

      {/* Overlay for small devices */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black opacity-50 md:hidden'
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
