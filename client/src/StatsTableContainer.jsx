import { connect } from 'react-redux';
import StatsTable from './StatsTable';
import * as selectors from './selectors';
import * as actions from './actions';

const mapStateToProps = (state) => {
  return {
    days: selectors.getEventCounts(state),
  };
};

const mapStateToDispatch = (dispatch) => ({
  changeDay: (day) => dispatch(actions.changeDateAction(day)),
});

export default connect(mapStateToProps, mapStateToDispatch)(StatsTable);
