import { connect } from "react-redux";
import Emotion from './Emotion';

function Mood(props) {
  return props.emotions.map(emotion => <Emotion key={emotion} emotion={emotion} />);
}

const mapStateToProps = state => {
  return {
    emotions: Object.keys(state.mood)
  }
}

export default connect(mapStateToProps)(Mood);