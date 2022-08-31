import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    creatorId:String,
    creatorName: String,
    title: String,
    message : String,
    tags : [String],
    selectedFile : String,
    likes : {
        type: [String],
        default: []
    },
    createdAt : {
        type: Date,
        //default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;