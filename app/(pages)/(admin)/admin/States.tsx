import React from 'react';
import Box from './components/Box';
import { AccountClock, AccountGroup, AccountHeart } from '@/public/icons';
import Image from 'next/image';

const States = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 sm:p-6">
      {/* Primary Box */}
      <Box variant="primary">
        <div className="flex flex-col items-center gap-3">
          <Image src={AccountClock} alt={'🕘️'}/>
          <h2 className="text-lg sm:text-xl font-semibold">ساعات ویزیت</h2>
          <div className="flex justify-between w-full max-w-xs">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold">220</p>
              <p className="text-sm">تا کنون</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold">45</p>
              <p className="text-sm">این ماه</p>
            </div>
          </div>
        </div>
      </Box>

      {/* Secondary Box */}
      <Box variant="secondary">
        <div className="flex flex-col items-center gap-3">
          <Image src={AccountHeart} alt={'❤️'}/>
          <h2 className="text-lg sm:text-xl font-semibold">میزان رضایت از شما</h2>
          <div className="flex items-center gap-2">
            <p className="text-3xl sm:text-4xl font-bold">5</p>
            <p className="text-base">/5</p>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-300 rounded-full" />
          </div>
        </div>
      </Box>

      {/* White Box */}
      <Box variant="white">
        <div className="flex flex-col items-center gap-3">
          <Image src={AccountGroup} alt={'👪️'}/>
          <h2 className="text-lg sm:text-xl font-semibold">تعداد بیماران ارجاع شده</h2>
          <div className="flex justify-between w-full max-w-xs">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold">105</p>
              <p className="text-sm">تا کنون</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold">32</p>
              <p className="text-sm">این ماه</p>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default States;