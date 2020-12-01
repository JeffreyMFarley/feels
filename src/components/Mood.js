import { changeSensation } from '../actions/sensation';
import { connect } from 'react-redux';
import React from 'react';
import Slider from './Slider';

/**
* Creates the Mood component
*
* @param {object} props the properties of the component
* @returns {string} the HTML to render
*/
function Mood( props ) {
  const sensations = Object.keys( props.mood )

  return sensations.map(
    s => <Slider _id={s} label={s} key={s}
                 value={props.mood[s]} />
  );
}

const mapStateToProps = state => {
  const mood = { ...state.mood }
  return { mood }
}

export default connect( mapStateToProps )( Mood );
