import React from 'react';

import './LazyLoadedPart.css';

import UserConsumer from '../contexts/UserContext';

const LazyLoadedPart = () => {
    
    return(
        <UserConsumer>
        {props => {
          return <div className="LazyLoadedPart"><h2>LazyLoadedPart, prop from context: {props.name}</h2></div>
        }}
      </UserConsumer>
    );

};

export default LazyLoadedPart;