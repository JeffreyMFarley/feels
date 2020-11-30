import { connect } from "react-redux";

function Emotion(props) {
  const _id = 'how-' + props.emotion + '-now';

  return (
    <div>
      <label for={_id}>{props.emotion}</label>
      <input type="range"
             id={_id} name={_id}
             min="0" max="100" value={props.level} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    level: state.mood[ownProps.emotion]
  }
}

export default connect(mapStateToProps)(Emotion);