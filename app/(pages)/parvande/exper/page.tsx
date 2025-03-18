import React from 'react';
import BMD from './BMD';
import MRI from './MRI';
import BloodTest from './BloodTest';

const ExperPage = () => {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8" >
      <BMD/>
      <MRI/>
      <BloodTest/>
    </div>
  );
};

export default ExperPage;