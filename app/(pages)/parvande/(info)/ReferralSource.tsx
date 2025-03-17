import React from 'react';
import { DropDown } from '@/app/components';
import { Heart } from '@/public/icons';
import Image from 'next/image';

const ReferralSource = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-end gap-4">
        <p className="text-lg font-bold text-primary">نحوه آشنایی با خانه پارکینسون</p>
        <Image className="w-8 h-8" alt="Heart Icon" src={Heart} />
      </div>

      {/* Dropdown */}
      <DropDown
        options={['دوست', 'پزشک', 'اینترنت']}
        placeholder="گزینه مورد نظر را انتخاب کنید"
        variant='input-like'
      />
    </div>
  );
};

export default ReferralSource;