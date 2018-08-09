import PropTypes from 'prop-types';

export const CFSListPropType = PropTypes.arrayOf(PropTypes.shape({
  _id: PropTypes.string,
  cfsNumber: PropTypes.string,
  cfsStatus: PropTypes.number,
}));

export const CFSInfoPropType = PropTypes.shape({
  addon: PropTypes.string,
  _id: PropTypes.string,
  cfsType: PropTypes.string,
  cfsNumber: PropTypes.string,
  cfsStatus: PropTypes.number,
  cfsDesc: PropTypes.string,
  addby: PropTypes.string,
});

export const CFSLogPropType = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number,
  type: PropTypes.number,
  text: PropTypes.string,
  addby: PropTypes.string,
  addon: PropTypes.string,
}));

export const RoutingIdPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]);
