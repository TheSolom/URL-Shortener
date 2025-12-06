import { Schema, model } from "mongoose";

const urlSchema = new Schema({
  shortenId: { type: String, required: true },
  originalUrl: { type: String, required: true },
  visitCount: { type: Number, default: 0 },
});

export default model("Url", urlSchema);
