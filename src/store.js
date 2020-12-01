import { configureStore } from '@reduxjs/toolkit';
import mood from './reducers/mood';

export default configureStore( {
  reducer: {
    mood
  }
} );
