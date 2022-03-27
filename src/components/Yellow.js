import React, {useContext} from 'react';
import { AppContext } from '../App';



const Yellow = () => {
    const Context = useContext(AppContext);
    return(
        <div>
            <h1>{Context}</h1>
            <h1 style={{color: 'yellow'}}>This is the Yellow Screen</h1>
        </div>
    )
};

export default Yellow;