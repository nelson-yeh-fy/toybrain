import { connect } from 'react-redux';
import { compose, setDisplayName, lifecycle } from 'recompose';
import { getCFSInfoAsync } from '../../reducers/cfsList';
import CFSListMenuItem from '../CFSListMenuItem';
import SpinnerWhileLoading from '../SpinnerWhileLoading';

const enhancedCFSListMenuItem = compose(
  // setup this HOC's name
  setDisplayName('HOC(CFSListDropDownList)'),

  // use Redux's connect to provide a Redux HoC component
  connect(
    state => ({
      cfsList: state.cfsList,
      isDataNotReady: !Array.isArray(state.cfsList) || state.cfsList.length <= 0,
    }),
    dispatch => ({
      getCFSInfoAsync: () => dispatch(getCFSInfoAsync()),
      onClickLink: (routingType, routingPayload = {}) => dispatch({ type: routingType, payload: routingPayload }),
    }),
  ),

  // use recompose's lifecycle to configure additional lifecycle behaviors into this HoC component
  lifecycle({
    componentDidMount() {
      if (this.props.isDataNotReady) {
        this.props.getCFSInfoAsync();
      }
    },
  }),

  // add an additional recompose's branched HoC component into this HoC component
  SpinnerWhileLoading(props => !props.isDataNotReady),

  // assign pure functional component for recompose to composite a new HoC component
)(CFSListMenuItem);

export default enhancedCFSListMenuItem;
