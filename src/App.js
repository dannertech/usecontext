import React, {createContext} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Yellow from './components/Yellow';
import Green from './components/Green';
import Blue from './components/Blue';
import Home from './components/Home';

//default value is light

export const AppContext = createContext('light');

//we set the actual value to dark when we pass in another value
function App(){
  return(
    <AppContext.Provider value={'dark'}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/yellow" element={<Yellow />}/>
      <Route path="/blue" element={<Blue />} />
      <Route path="/green" element={<Green />} />
      </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;
