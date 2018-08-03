import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// const CFSLogModel = new Schema({
//   type: { type: Number, default: 1 },
//   text: String,
//   addby: String,
//   addon: { type: Date, default: Date.now },
// });

const cfsInfoModel = new Schema({
  cfsNumber: String,
  cfsType: String,
  cfsStatus: Number,
  cfsDesc: String ,
  addby: String ,
  addon: { type: Date, default: Date.now },
  // cfsLogs: [CFSLogModel],
});
export default mongoose.model('cfsInfo', cfsInfoModel)