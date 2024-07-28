import Image from 'next/image';
import React from 'react';

const GettingStarted = () => {
  return (
    <div className='bg-white rounded-xl shadow-md p-4'>
      <div className='flex justify-end'>
        <div className='flex justify-between items-center'>
          <Image src='/share.svg' alt='External Link' height={20} width={20} />
        </div>
      </div>
      <div className='flex flex-col items-center text-center'>
        <Image src='/frame.svg' alt='External Link' height={100} width={100} />
        <h2 className='text-lg font-semibold'>Getting started with Mupi</h2>
        <p className='text-gray-600 mt-2'>
          Rhoncus purus mauris quis suspendisse facilisi maecenas.
        </p>
      </div>
    </div>
  );
};

export default GettingStarted;
