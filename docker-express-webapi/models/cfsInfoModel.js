import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const cfsInfoModel = new Schema({
	cfsNumber: { type: String },
  cfsStatus: { type: Number },
  cfsDesc: { type: String },
  addby: { type: String },
  addon: { type: String },
});
export default mongoose.model('cfsInfo', cfsInfoModel)