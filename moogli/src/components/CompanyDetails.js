import React from 'react';

const CompanyDetails = () => {
  return (
    <div className='bg-white rounded-xl shadow-md p-4'>
      <h2 className='text-lg font-semibold'>Complete your company details</h2>
      <p className='text-gray-600 mt-2'>
        Lorem ipsum dolor sit amet consectetur. Etiam et risus sollicitudin ut
        sit. Eu eget lacus quam purus. Eu ultrices sapien ut dignissim pulvinar.
        Semper montes felis nulla euismod dui id.
      </p>
      <div className='relative mt-4'>
        <div className='h-2 bg-gray-200 rounded-full'>
          <div
            className='h-2 bg-indigo-600 rounded-full'
            style={{ width: '0%' }}
          ></div>
        </div>
        <span className='absolute right-0 text-indigo-600'>0%</span>
      </div>
      <button className='mt-4 bg-indigo-600 text-white py-2 px-4 rounded-full'>
        Go to Company Details &rarr;
      </button>
    </div>
  );
};

export default CompanyDetails;
