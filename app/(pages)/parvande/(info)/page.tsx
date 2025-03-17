import React from 'react';
import PersonalInfo from './PersonalInfo';
import InsuranceInfo from './InsuranceInfo';
import MedicalHistory from './MedicalHistory';
import RehabHistory from './RehabHistory';
import ReferralSource from './ReferralSource';

const ProfilePage = () => {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8" >
      <PersonalInfo />
      <InsuranceInfo />
      <MedicalHistory />
      <RehabHistory />
      <ReferralSource />
    </div>
  );
};

export default ProfilePage;