import React from 'react';

const UserInput = (props) => {
  return(
    <div className="userinput">
      <input type="text" onChange={props.changeName} value={props.name}/>
      <input type="text" onChange={props.changeInput} value={props.name}/>
    </div>
    );
}

export default UserInput;
