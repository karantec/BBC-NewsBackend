const mongoose =  require("mongoose");

const breakingNewsSchema =  new mongoose.Schema({
    title:{
        type:String,
        required:true
    }
});

const BreakingNews = mongoose.models.BreakingNews || mongoose.model('BreakingNews',breakingNewsSchema);


module.exports = BreakingNews
