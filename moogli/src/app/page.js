import React from 'react';
import './global.css';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';

const Home = () => {
  return (
    <div className='flex h-screen bg-gray-100'>
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Home;
