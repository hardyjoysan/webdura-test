import React from 'react';
import { Provider } from 'react-redux';

import Store from './Store';

import Header from './header/Header';
import Toptab from './toptab/Tobtab';
import Slider from './slider/Slider';
import Booking from './booking/Booking';

function App() {
  return (
    <Provider store={Store}>
      <Header/>
      <Toptab/>
      <Slider/>
      <Booking/>
    </Provider>
  );
}

export default App;
