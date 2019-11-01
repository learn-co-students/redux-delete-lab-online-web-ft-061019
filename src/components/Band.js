/*
import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        and ComponentB
      </div>
    );
  }
};

export default Band;


  Bands Component
    ✓ displays bands from Redux store

  Band Component
    ✓ displays the appropriate text on form submission
    ✓ renders an li

  Redux
    ✓ assigns a unique id property when a band is added
4701599f-28bb-44ef-9d27-7b94cc0a4f7b
    ✓ removes the correct band from the store on dispatch

  Band Component with Redux
fc60eeb8-50a0-4c39-b077-9aca83d17a61
    ✓ has a button that dispatches an DELETE_BAND action
465c642a-5dd4-4874-94f9-c66e551cd5cf
    ✓ updates the state of the store to remove the component
*/

import React from 'react';

const Band = ({ band, deleteBand }) => {
  return (
    <div>
      <li>{band.name}<button onClick={() => deleteBand(band.id)}>DELETE</button></li>
    </div>
  );
}

export default Band;