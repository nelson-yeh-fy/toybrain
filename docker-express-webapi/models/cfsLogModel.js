import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const cfsLogModel = new Schema({
  type: { type: Number },
  text: { type: String },
  addby: { type: String },
  addon: { type: String },
});
export default mongoose.model('cfsLog', cfsLogModel)