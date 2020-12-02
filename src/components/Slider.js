import PropTypes from 'prop-types';
import React from 'react';

export default class Slider extends React.Component {

  // Declare as class field
  // https://medium.com/front-end-weekly/
  // do-i-still-need-to-bind-react-functions-in-2019-6d0fe72f40d7
  changeValue = ev => {
    const v = ev.target.value
    this.props.onChange( Number( v ) )
  }

  render() {
    const { _id, label, value } = this.props;

    return (
      <div>
        <label hmtlfor={_id}>{label}</label>
        <input type="range"
               id={_id} name={_id}
               min="0" max="5"
               value={value}
               onChange={ this.changeValue }/>
      </div>
    );
  }
}

// --------------------------------------------------------------------------
// Meta

Slider.propTypes = {
  _id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number
}

Slider.defaultProps = {
  value: 0
}
