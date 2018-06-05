import { connect } from 'react-redux';
import { compose, setDisplayName, lifecycle } from 'recompose';
import { getCFSListAsync } from '../../reducers/cfsList';
import Header from '../Header';
import SpinnerWhileLoading from '../SpinnerWhileLoading';

const enhancedHeader = compose(
  // setup this HOC's name
  setDisplayName('HOC(CFSListDropDownList)'),

  // use Redux's connect to provide a Redux HoC component
  connect(
    state => ({
      cfsList: state.cfsList,
      routingId: state.location.payload.id,
      isDataNotReady: !Array.isArray(state.cfsList) || state.cfsList.length === 1,
    }),
    dispatch => ({
      getCFSListAsync: () => dispatch(getCFSListAsync()),
      onClick: () => dispatch({ type: 'USER', payload: { id: 5 } }),
      onClickLink: (routingType, routingPayload = {}) => dispatch({ type: routingType, payload: routingPayload }),
    }),
  ),

  // use recompose's lifecycle to configure additional lifecycle behaviors into this HoC component
  lifecycle({
    componentDidMount() {
      if (this.props.isDataNotReady) {
        this.props.getCFSListAsync();
      }
    },
  }),

  // add an additional recompose's branched HoC component into this HoC component
  SpinnerWhileLoading(props => !props.isDataNotReady),

  // assign pure functional component for recompose to composite a new HoC component
)(Header);

export default enhancedHeader;
