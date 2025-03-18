import React from 'react';
import Symptoms from './Symptoms';
import MainReports from './MainReports';
import PainHistory from './PainHistory';
import ConDrugs from './ConDrugs';
import SystemReview from './SystemReview';
import Examinations from './Examinations';

const FirstPage = () => {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8" >
      <Symptoms/>
      <MainReports/>
      <PainHistory/>
      <ConDrugs/>
      <SystemReview/>
      <Examinations/>
    </div>
  );
};

export default FirstPage;