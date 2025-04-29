import React from 'react';

const TitleAndHost = ({ title, host, location }) => {
  const [firstName, lastName] = host.name.split(' '); //pour la destructuration du text

  return (
    <div className='titre'>
      <h2>{title}</h2>
      <h3> {location} </h3>
      <div className='host-container'>
      <div className="host-name">
        <span className="first-name">{firstName}</span>
        <span className="last-name">{lastName}</span>
      </div>
      <img src={host.picture} alt={`${firstName} ${lastName}`} className="host-img" />
    </div>
    </div>
  );
};

export default TitleAndHost;
