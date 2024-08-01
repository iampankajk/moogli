import Image from 'next/image';
import React from 'react';

const Overview = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
      {['Total', 'Scope 1', 'Scope 2', 'Scope 3'].map((item, index) => (
        <div className='p-4 bg-white rounded-xl shadow-md ' key={index}>
          <div className='flex justify-between items-center'>
            <h3 className='text-sm font-semibold text-gray-500'>{item}</h3>
            {index === 0 ? (
              <Image
                src='/info_icon.svg'
                height={16}
                width={16}
                alt='Info Icon'
              />
            ) : (
              <Image
                src='/right_arrow.svg'
                height={16}
                width={16}
                alt='Info Icon'
              />
            )}
          </div>
          <div className='text-xl text-gray-700'>-</div>
          <div className='text-sm text-gray-500'>
            {index === 0 ? '$/tCO2e' : 'tCO2e'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Overview;
