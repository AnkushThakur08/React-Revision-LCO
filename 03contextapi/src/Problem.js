import React, { useState } from 'react';

const GrandChild = (props) => {
  console.log('CHECK', props);
  return (
    <div>
      <h1>GrandChild</h1>
      <Child brand={props.brand} />
    </div>
  );
};

const Child = (props) => {
  return (
    <div>
      <h1>Child: {props.brand} </h1>
    </div>
  );
};

const App = () => {
  const [brandname] = useState('Amazon');

  return (
    <div>
      <GrandChild brand={brandname} />
    </div>
  );
};

export default App;
