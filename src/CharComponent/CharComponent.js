import React from 'react';
import './CharComponent.css';

const Char = (props) => {
  return(
    <div className="char">
      <p onClick={props.remove}>{props.letter}</p>
    </div>
  );
}

export default Char
