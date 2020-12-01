import { createAction } from '@reduxjs/toolkit';

export const changeSensation = createAction(
    'SENSATION_CHANGED',
    (sensation, newValue) => ( {
      payload: {
        sensation,
        value: newValue
      }
    } )
)