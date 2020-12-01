import { createReducer } from '@reduxjs/toolkit';

export default createReducer(
  {
    anger: 0,
    disgust: 0,
    energy: 3,
    fear: 0,
    happy: 0,
    pain: 0,
    sad: 0,
    surprise: 0,
    tender: 0
  },
  builder => {
    builder.addDefaultCase(state => { state.energy = 3 })
  }
);
