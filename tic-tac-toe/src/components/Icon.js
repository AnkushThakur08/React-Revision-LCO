import React from 'react';
import { FaTimes, FaPen, FaRegCircle } from 'react-icons/fa';

const Icon = ({ name }) => {
  console.log(name);
  //   switch (name) {
  //     case 'circle':
  //       return <FaRegCircle size={28} className="icons" />;
  //     case 'cross':
  //       return <FaTimes size={28} className="icons" />;
  //     default:
  //       return <FaPen size={28} className="icons" />;
  //   }

  return name === 'circle' ? <FaRegCircle size={28} /> : name === 'cross' ? <FaTimes size={28} /> : <FaPen size={28} />;
};

export default Icon;
