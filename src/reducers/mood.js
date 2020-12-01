import { changeSensation } from '../actions/sensation'
import { clamp } from '../utils';
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  anger: 0,
  disgust: 0,
  energy: 3,
  fear: 0,
  happy: 0,
  pain: 0,
  sad: 0,
  surprise: 0,
  tender: 0
}

export const moodSlice = createSlice( {
  name: 'mood',
  initialState,
  reducers: {},
  extraReducers: {
    [changeSensation]: ( state, action ) => {
      const { sensation, value } = action.payload;

      if ( sensation in state ) {
        state[sensation] = clamp( value, 0, 5 );
      }
      return state
    }
  }
} );

export default moodSlice.reducer;
