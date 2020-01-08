/*
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      return { ...state, bands: [...state.bands, action.name] }

    default:
      return state;
  }
};
*/


import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
   switch (action.type) {
    case 'ADD_BAND':
      const band = {
        name: action.name,
        id: uuid()
      }
      return { ...state, bands: [...state.bands, band] }
    case 'DELETE_BAND':
      console.log(action.id)
      return {
        ...state,
        bands: state.bands.filter(band => band.id !== action.id)
      }
    default:
      return state;
  }
};
