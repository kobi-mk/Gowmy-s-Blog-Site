import mongoose, { Document, Schema, Model } from 'mongoose';

// Define the interface representing a Post document
interface IPost extends Document {
  title: string;
  content: string;
  author: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

// Define the Post schema
const PostSchema: Schema<IPost> = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
});

// Custom method to format date
PostSchema.methods.formatDate = function () {
  return this.createdAt.toLocaleDateString();
};

// Create and export the Post model
const Post: Model<IPost> = mongoose.model<IPost>('Post', PostSchema);
export default Post;
