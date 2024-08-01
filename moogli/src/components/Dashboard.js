import React from 'react';
import Header from './Header';
import Overview from './Overview';
import CompanyDetails from './CompanyDetails';
import GettingStarted from './GettingStarted';
import ReportingYear from './ReportingYear';
import Achievements from './Achievements';

const Dashboard = () => {
  return (
    <div className='flex-1 p-4'>
      <Header />
      <Overview />
      <div className='grid grid-cols-1 md:grid-cols-[3fr,1.5fr] gap-8 mt-4'>
        <div>
          <CompanyDetails />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-4'>
            <GettingStarted />
            <ReportingYear />
          </div>
        </div>
        <Achievements />
      </div>
    </div>
  );
};

export default Dashboard;
