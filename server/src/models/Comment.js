import mongoose, { Mongoose } from "mongoose";

const commentSchema = new mongoose.Schema({
    blog: {type: mongoose.Schema.Types.ObjectId, ref: 'blogs', required: true},
    name: {type: String, required:true},
    content: {type: String, required: true},
    isApproved: {type: Boolean, default: false},
}, {timestamps: true});

const Comment = mongoose.model('comments', commentSchema);

export default Comment;