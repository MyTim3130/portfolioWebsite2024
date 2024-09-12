import React from 'react';

const Testaments = ({ isBackgroundWhite }) => {
  return (
    <main className={`pl-5 pt-32 md:ml-24 ${isBackgroundWhite ? 'text-black' : 'text-white'}`} style={{ transition: 'color 0.5s ease' }}>
      <h2 className='text-5xl font-medium'>
        TAKE IT FROM <p className={`${isBackgroundWhite ? 'text-red-500' : 'text-[#FF4848]'}`}>OTHERS</p>
      </h2>
      <div className='mt-10 flex gap-5'>
        <img className='h-10' src="/quote.svg" alt="missing quote" />
        <div className='flex flex-col gap-3'>
          <p className='w-4/6 md:text-xl'>Tim is incredibly knowledgeable and responsive, making the entire development process smooth and stress-free.</p>
          <p>-COMPANY NAME</p>
        </div>
      </div>

      <div className='mt-10 flex gap-5'>
        <img className='h-10' src="/quote.svg" alt="missing quote" />
        <div className='flex flex-col gap-3'>
          <p className='w-4/6 md:text-xl'>Working with Tim was a seamless experience; they turned my vision into a beautiful and functional website.</p>
          <p>-COMPANY NAME</p>
        </div>
      </div>
    </main>
  );
};

export default Testaments;
