import { connect } from 'react-redux';
import { compose, setDisplayName, withReducer } from 'recompose';
import CFSList from '../CFSList';

const enhancedCFSList2 = compose(
  // setup this HOC's name
  setDisplayName('HOC(CFSList)'),

  // use Redux's connect to provide a Redux HoC component
  connect(state => ({
    cfsList: state.itemsByCategory.cfsList,
  })),

  // use recompose's withReducer to provide additional props into this HoC component
  withReducer('isVisible', 'toogleVisibility', isVisible => !isVisible, false),

  // assign pure functional component for recompose to composite a new HoC component
)(CFSList);

export default enhancedCFSList2;
