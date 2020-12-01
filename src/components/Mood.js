import { connect } from "react-redux";
import Slider from './Slider';

function Mood(props) {
  const sensations = Object.keys(props.mood)

  return sensations.map(
    s => <Slider _id={s} label={s} key={s} value={props.mood[s]} />
  );
}

const mapStateToProps = state => {
  const mood = { ...state.mood }
  return { mood }
}

export default connect(mapStateToProps)(Mood);