import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const cfsLogModel = new Schema({
  cfsId: Schema.Types.ObjectId,
  type: { type: Number, default: 1 },
  text: String,
  addby: String,
  addon: { type: Date, default: Date.now },
});
export default mongoose.model('cfsLog', cfsLogModel)