const Podcast = require("../models/podcastModel")

const createPoadcast = async (req, res) => {
  try {
    const data = await req.body;
    if (!data) {
      return res.status(402).json({ message: "Empty body" });
    }
    const podcastInfo = await new Podcast(data);
    await podcastInfo.save();
    return res.status(201).json({ message: "Podcast Created" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};


const updatePodcast = async (req, res) => {
    try {
      const {id} = await req.params;
      const findPodcastInfo = await Podcast.findById({id});
      if(!findPodcastInfo){
        return res.status(404).json({message:"Blog not exist"})
      }
      const data = await req.body;
      if (!data) {
        return res.status(402).json({ message: "Empty body" });
      }
      await Podcast.findByIdAndUpdate(id,{data})
      return res.status(200).json({ message: "Podcast updated" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Server Error" });
    }
  };


const getPodcasts = async(req,res)=>{
    try {
        const data = await Podcast.findAll({})
        if(!data){
            return res.status(404).json({message:"Not podcast is present"})
        }
        return res.status(200).json({message:data})
        
    } catch (error) {
        return res.status(500).json({message:"Server Error"})
    }
}
  
const getPodcast = async(req,res)=>{
    try {
        const {id} =  await req.params
        const data = await Podcast.findById({id})
        if(!data){
            return res.status(404).json({message:"Not blog is present"})
        }
        return res.status(200).json({message:data})
        
    } catch (error) {
        return res.status(500).json({message:"Server Error"})
    }
}



const deletePodcast = async (req, res) => {
    try {
      const {id} = await req.params;
      const findBlogInfo = await Podcast.findById({id});
      if(!findBlogInfo){
        return res.status(404).json({message:"Blog not exist"})
      }
      const data = await req.body;
      if (!data) {
        return res.status(402).json({ message: "Empty body" });
      }
      await Podcast.findByIdAndDelete(id)
      return res.status(200).json({ message: "Blog Deleted" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Server Error" });
    }
  };



module.exports = {
    createPoadcast,
    updatePodcast,
    deletePodcast,
    getPodcast,
    getPodcasts,
}