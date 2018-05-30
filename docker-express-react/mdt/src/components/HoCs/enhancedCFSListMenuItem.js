import { connect } from 'react-redux';
import { compose, setDisplayName, withReducer, lifecycle } from 'recompose';
import { getCFSInfoListAsync } from '../../reducers/cfsInfoList';
import CFSListMenuItem from '../CFSListMenuItem';
import SpinnerWhileLoading from '../SpinnerWhileLoading';

const enhancedCFSListMenuItem = compose(
  // setup this HOC's name
  setDisplayName('HOC(CFSListDropDownList)'),

  // use Redux's connect to provide a Redux HoC component
  connect(
    state => ({
      cfsInfoList: state.cfsInfoList,
      isDataNotReady: !Array.isArray(state.cfsInfoList) || state.cfsInfoList.length === 1,
    }),
    dispatch => ({
      getCFSInfoListAsync: () => dispatch(getCFSInfoListAsync()),
      onClickLink: (routingType, routingPayload = {}) => dispatch({ type: routingType, payload: routingPayload }),
    }),
  ),

  // use recompose's withReducer to provide additional props into this HoC component
  withReducer('isVisible', 'toogleVisibility', isVisible => !isVisible, false),

  // use recompose's lifecycle to configure additional lifecycle behaviors into this HoC component
  lifecycle({
    componentDidMount() {
      if (this.props.isDataNotReady) {
        this.props.getCFSInfoListAsync();
      }
    },
  }),

  // add an additional recompose's branched HoC component into this HoC component
  SpinnerWhileLoading(props => !props.isDataNotReady),

  // assign pure functional component for recompose to composite a new HoC component
)(CFSListMenuItem);

export default enhancedCFSListMenuItem;
