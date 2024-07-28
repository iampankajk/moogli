import React from 'react';
import './global.css';
import Sidebar from '@/components/Sidebar';

const Home = () => {
  return (
    <div className='flex h-screen bg-gray-100'>
      <Sidebar />
    </div>
  );
};

export default Home;
