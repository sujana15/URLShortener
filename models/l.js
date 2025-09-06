import mongoose from 'mongoose';

const lSchema = new mongoose.Schema({
  links: { type: [{link:{type:String},linktext:{type:String},}], required: true },
  handle: { type: String, required: true, unique: true },
  pic:{type:String}
});

const l = mongoose.models.links || mongoose.model("links", lSchema);
export default l;