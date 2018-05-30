import PropTypes from 'prop-types';

export const CFSPropType = {
  cfsInfoList: PropTypes.arrayOf(PropTypes.shape({
    addon: PropTypes.string,
    _id: PropTypes.string,
    cfsNumber: PropTypes.string,
    cfsStatus: PropTypes.number,
    cfsDesc: PropTypes.string,
    addby: PropTypes.string,
  })).isRequired,
};

export const CFSLogPropType = {
  cfsLogArticles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.number,
    text: PropTypes.string,
    addby: PropTypes.string,
    addon: PropTypes.string,
  })).isRequired,
};
