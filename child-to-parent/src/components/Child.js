import React from 'react';

const Child = ({ chooseMessage }) => {
  let message = 'MERN interview';
  return (
    <>
      <h1>Child Component</h1>
      <button onClick={() => chooseMessage(message)}>Change Message</button>
    </>
  );
};

export default Child;
