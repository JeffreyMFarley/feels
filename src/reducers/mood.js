import { createReducer } from '@reduxjs/toolkit';

export default createReducer(
  {
    activated: 50,
    anger: 0,
    disgust: 0,
    fear: 0,
    happy: 0,
    sad: 0,
    surprise: 0,
    tender: 0
  },
  builder => {
    builder.addDefaultCase(state => { state.happy = 100 })
  }
);
