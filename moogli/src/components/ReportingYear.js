import React from 'react';

const ReportingYear = () => {
  return (
    <div className='bg-white rounded-xl shadow-md p-4'>
      <h2 className='text-lg font-semibold'>
        Before you get started: Select your Reporting year
      </h2>
      <p className='text-gray-600 mt-2'>
        The reporting year is a 12-month period for measuring and reporting GHG
        emissions. For example, if reporting for 2023, use data from that year.
      </p>
      <select className='mt-4 border border-gray-300 rounded-lg p-2 w-full'>
        <option>Select year</option>
        <option>2023</option>
        <option>2024</option>
      </select>
    </div>
  );
};

export default ReportingYear;
