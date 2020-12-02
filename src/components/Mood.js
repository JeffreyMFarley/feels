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
function Mood( { mood, dispatch } ) {
  const sens = Object.keys( mood )

  return sens.map(
    s => <Slider _id={'mood_' + s} label={s} key={s}
                 onChange={ v => dispatch( changeSensation( s, v ) )}
                 value={mood[s]} />
  );
}

const mapStateToProps = state => ( { mood: state.mood } )

export default connect( mapStateToProps )( Mood );
