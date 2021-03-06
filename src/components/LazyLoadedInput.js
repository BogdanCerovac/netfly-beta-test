import React from 'react';
import './LazyLoadedInput.scss';

import UserContext from '../contexts/UserContext';


const LazyLoadedInput = () => {

    console.log("LazyLoadedInput rendered");

    return(
        <UserContext.Consumer>

        {({ counterStartInt, setCounterStartInt }) => (
            <div className="LazyLoadedInput">
                <h2>Here we can change the context from a grandchild</h2>
                <label>
                    Change default counter value ({counterStartInt}):<br />
                    <input type="range" min="0" max="999" style={{ width: "80vw", fontSize: "1.5rem" }} value={counterStartInt} onChange={e  =>  setCounterStartInt( e.target.value )}  />
                </label>
            </div>
        )}
       
        </UserContext.Consumer>
    )
}

export default LazyLoadedInput;