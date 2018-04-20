import { schema } from 'normalizr';

export const webAPIUrl_cfsInfo = '/api/cfsInfo/';
export const webAPIUrl_cfsLogs = '/api/cfsLogs/';
export const webAPIUrl_timeEvents = '/api/timeEvents/';
export const cfsLogSchema = new schema.Entity('cfsLog');
