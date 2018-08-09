import { createSelector } from 'reselect';

const getVisibleCfsLogs = createSelector(
  state => state.itemsByCategory.CFS_LOG,
  state => state.userPreference.isSystemLogsDisplayed,
  state => state.userPreference.isUserLogsDisplayed,
  state => state.userPreference.isToneLogsDisplayed,
  (CFS_LOG, isSystemLogsDisplayed, isUserLogsDisplayed, isToneLogsDisplayed) => {
    if (isSystemLogsDisplayed === true && isUserLogsDisplayed === true && isToneLogsDisplayed === true) {
      return CFS_LOG;
    }

    let visibleLogs = [];
    if (isSystemLogsDisplayed === true) {
      visibleLogs = visibleLogs.concat(CFS_LOG.filter(t => t.type === 1));
    }

    if (isUserLogsDisplayed === true) {
      visibleLogs = visibleLogs.concat(CFS_LOG.filter(t => t.type === 2));
    }

    if (isToneLogsDisplayed === true) {
      visibleLogs = visibleLogs.concat(CFS_LOG.filter(t => t.type === 4));
    }

    return visibleLogs;
  },
);

export default getVisibleCfsLogs;
