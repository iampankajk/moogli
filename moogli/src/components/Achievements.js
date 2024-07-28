import Image from 'next/image';
import React from 'react';

const Achievements = () => {
  const trophies = [1, 2, 3];
  return (
    <div className='bg-white rounded-xl shadow-md p-6 flex flex-col gap-28 h-full'>
      <h2 className='text-lg font-semibold'>Achievements</h2>
      <div className='flex flex-col items-center'>
        <div className='flex items-center justify-center py-2 px-1 bg-[#F2F4FA] rounded-lg '>
          {trophies.map((trophy, index) => (
            <div
              key={index}
              className='w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mx-2'
            >
              <Image
                src='/carbon_trophy_filled.svg'
                alt='Trophy'
                height={16}
                width={16}
              />
            </div>
          ))}
        </div>
        <p className='mt-8 font-semibold text-center'>
          You have no achievements yet
        </p>
        <p className='text-gray-600 text-center'>
          Complete assessment to get achievement
        </p>
      </div>
    </div>
  );
};

export default Achievements;
