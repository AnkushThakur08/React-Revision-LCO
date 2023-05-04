import React, { useState } from 'react';
import PackageContext from './Context';

const Provider = (props) => {
  const [mission, setMission] = useState({
    missionMotive: 'Destory Applify',
    agentName: 'Ankush Thakur',
    agentNumber: '007',
    accept: 'not Accepted',
  });

  return (
    <PackageContext.Provider
      value={{
        data: mission,
        isMissionAccepted: () => {
          setMission({ ...mission, accept: 'ACCEPTED' });
        },

        isMissionotNAccepted: () => {
          setMission({ ...mission, accept: 'NOT ACCEPTED' });
        },
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};

export default Provider;
