import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [message, setMessage] = useState('Ankush');

  const chooseMessage = (message) => {
    setMessage(message);
  };

  return (
    <>
      <h1>PARENT Component</h1>
      <input type="text" name="input" value={message} onChange={(e) => setMessage(e.target.value)} />
      <h1>{message}</h1>
      <Child chooseMessage={chooseMessage} />
    </>
  );
};

export default Parent;
