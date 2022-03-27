import React, {createContext} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Yellow from './components/Yellow';
import Green from './components/Green';
import Blue from './components/Blue';

//default value is lighht

const AppContext = createContext('light');

//we set the actual value to dark when we pass in another value
const App = () => {
  return(
    <AppContext.Provider value={'dark'}>
    <BrowserRouter>
    <Routes>
      <Route path="/yellow" component={<Yellow />}/>
      <Route path="/blue" component={<Blue />} />
      <Route path="/green" component={<Green />} />
    </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;
