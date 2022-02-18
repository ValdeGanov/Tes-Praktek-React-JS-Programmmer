import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  namaBarang: String,
  hargaBeli: Number,
  hargaJual: Number,
  stock: Number,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
