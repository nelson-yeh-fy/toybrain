import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const cfsLogModel = new Schema({
  type: { type: Number, default: 1 },
  text: { type: String },
  addby: { type: String },
  addon: { type: Date, default: Date.now },
});
export default mongoose.model('cfsLog', cfsLogModel)