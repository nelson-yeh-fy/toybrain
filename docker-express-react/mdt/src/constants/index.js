import { schema } from 'normalizr';

export const webAPIUrl_cfsInfo = '/api/cfsInfo/';
export const webAPIUrl_cfsLogs = '/api/cfsLogs/';

export const cfsInfoSchema = new schema.Entity('cfsInfo');
export const cfsLogSchema = new schema.Entity('cfsLog');
