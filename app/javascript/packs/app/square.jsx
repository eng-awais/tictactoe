import React from 'react';
import ReactDOM from 'react-dom';
import '../../../assets/stylesheets/components/square.scss';

// const props = {
//   onClick: () => 'function',
//   value: 'x'
// };

// { value } = props;

// const Square = (props) => (
const Square = ({ value, onClick }) => (
  <button onClick={onClick} className='tick-toe-box'>
    {value}
  </button>
  );

export default Square;
