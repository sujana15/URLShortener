// models/Url.js
import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema({
  url: { type: String, required: true },
  shorturl: { type: String, required: true, unique: true },
});

const Url = mongoose.models.Url || mongoose.model("Url", UrlSchema);
export default Url;
