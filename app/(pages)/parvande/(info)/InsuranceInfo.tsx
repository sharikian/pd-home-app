import React from 'react';
import { DropDown } from '@/app/components';
import { FileProtection } from '@/public/icons';
import Image from 'next/image';

const InsuranceInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-end gap-4">
        <div className="text-lg font-bold text-primary">مشخصات بیمه</div>
        <Image className="w-8 h-8" alt="Insurance Icon" src={FileProtection} />
      </div>

      {/* Dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DropDown
          options={['ندارد', 'بیمه تکمیلی دیگر']}
          placeholder="نوع بیمه تکمیلی"
          variant='input-like'
          title='نوع بیمه تکمیلی'
        />
        <DropDown
          options={['تامین اجتماعی', 'خدمات درمانی']}
          placeholder="نوع بیمه درمان"
          variant='input-like'
          title='نوع بیمه درمان'
        />
      </div>
      <hr className="h-[0.1rem] bg-slate-300 mt-4" />
    </div>
  );
};

export default InsuranceInfo;