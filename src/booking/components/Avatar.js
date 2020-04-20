import React from 'react';

const Avatar = (props) => {
  return (
    <div className="avatar">
      <div className="pic">
        <img src="/images/avatar.png" alt="avatar"/>
      </div>
      <div className="txt">
        <p>{props.name}</p>
        <span>{props.place}</span>
      </div>
    </div>
  )
}

export default Avatar;
