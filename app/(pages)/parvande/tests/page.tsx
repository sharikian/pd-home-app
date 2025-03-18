import React from 'react';
import FullDetail from './FullDetail';
import EAT from './EAT';
import ICIQ from './ICIQ';

const TestPage = () => {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8" >
      <EAT/>
      <ICIQ/>
      <FullDetail/>
    </div>
  );
};

export default TestPage;