const mongoose =  require('mongoose');

const PodcastSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    videoUrl:{
        type:String,
        required:true
    }
})


const Podcast = mongoose.models.Podcast || mongoose.model('Podcast',PodcastSchema);

module.exports = Podcast