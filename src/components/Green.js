import React, {useContext} from 'react';
import { AppContext } from '../App';

const Green = () => {
    const Context = useContext(AppContext);
    return(
        <div>
            <h1>{Context}</h1>
            <h1 style={{color: 'green'}}>This is the Green Screen</h1>
        </div>
    )
};

export default Green;