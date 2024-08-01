import React from 'react';

const ReportingYear = () => {
  return (
    <div className='bg-white rounded-xl shadow-md p-4 flex flex-col gap-4'>
      <h2 className='text-lg font-semibold'>
        Before you get started: Select your Reporting year
      </h2>
      <p className='text-gray-600'>
        The reporting year is a 12-month period for measuring and reporting GHG
        emissions. For example, if reporting for 2023, use data from that year.
      </p>
      <div className='relative w-full'>
        <select className='appearance-none border border-gray-300 rounded-lg p-2 w-full pr-8'>
          <option>Select year</option>
          <option>2023</option>
          <option>2024</option>
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
          <svg
            className='w-4 h-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M19 9l-7 7-7-7'
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ReportingYear;
