import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [display, setDisplay] = useState(false);

  const displayInfo = () => {
    setDisplay(!display)
  }

  return (
    <div className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={displayInfo}>
          {display ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
      </header>
      { display && <p>{info}</p>}
    </div>
  );
};

export default Question;
