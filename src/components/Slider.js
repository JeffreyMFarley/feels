import PropTypes from 'prop-types';
import React from 'react';

export default class Slider extends React.Component {

  render() {
    const { _id, label, value } = this.props;

    return (
      <div>
        <label hmtlfor={_id}>{label}</label>
        <input type="range"
               id={_id} name={_id}
               min="0" max="5"
               defaultValue={value} />
      </div>
    );
  }
}

// --------------------------------------------------------------------------
// Meta

Slider.propTypes = {
  _id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number
}

Slider.defaultProps = {
  value: 0
}
