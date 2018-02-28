import React from 'react';

const Validation = (props) => {
  let message = 'Text long enough';
  if(props.length < 5){
    message = 'Text too short'
  }

  return(
    <div>
      <p>Output length of input:{props.length}</p>
      <p>{ props.length > 5 ? 'Text long enough' : 'Text too short'}</p>
      <p>{message}</p>
    </div>
  );
}

export default Validation;
