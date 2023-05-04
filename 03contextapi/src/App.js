import React from 'react';
import Context from './Context';
import Provider from './Provider';

const Agent = () => {
  return <AgentOne />;
};

const AgentOne = () => {
  return <AgentTwo />;
};

const AgentTwo = () => {
  return <AgentBond />;
};

const AgentBond = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <>
          {console.log(context)}
          <h3>Mission Motive:{context.data.missionMotive} </h3>
          <h3>Agent Name: {context.data.agentName}</h3>
          <h3>Agent Number: {context.data.agentNumber}</h3>
          <h3>Accepted : {context.data.accept}</h3>
          <button onClick={context.isMissionAccepted}>Let's Go</button>
          <button onClick={context.isMissionotNAccepted}> Abort</button>
        </>
      )}
    </Context.Consumer>
  );
};

const App = () => {
  return (
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agent />
      </Provider>
    </div>
  );
};

export default App;
