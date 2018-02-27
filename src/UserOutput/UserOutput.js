import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return(
    <div className="useroutput">
      <p>para1: {props.name}</p>
      <p onClick={props.changeName}>para2</p>
    </div>
    );
}

export default UserOutput;
