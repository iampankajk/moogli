import React from 'react';
import './global.css';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import StepWizard from '@/components/StepWizard/StepWizard';

const Home = () => {
  return (
    <div className='flex h-screen bg-gray-100'>
      <StepWizard />
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Home;
