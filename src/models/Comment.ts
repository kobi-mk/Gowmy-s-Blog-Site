import mongoose, { Document, Schema, Model } from 'mongoose';

// Define the interface representing a Comment document
interface IComment extends Document {
  content: string;
  post: mongoose.Schema.Types.ObjectId;
  author: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
}

// Define the Comment schema
const CommentSchema: Schema<IComment> = new Schema({
  content: { type: String, required: true },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
});

// Create and export the Comment model
const Comment: Model<IComment> = mongoose.model<IComment>('Comment', CommentSchema);
export default Comment;
