const Url=require('../models/Url');
const shortid=require('shortid');
//url shortener controller
const urlshort=async(req,res)=>{
       const longUrl=req.body.longUrl;
       const shortCode=shortid.generate();
       const shortUrl=`http://localhost:3100/${shortCode}`;

       //save to the database
       const newUrl=new Url({shortCode,longUrl});
       await newUrl.save();
       
        console.log("Url is shortened successfully",newUrl);


        res.render("server",{shortUrl:shortUrl});
};

const getOriginalUrl=async(req,res)=>{
    const shortCode=req.params.shortCode;
    //find the shortid in the database
    const urlRecord=await Url.findOne({shortCode});
    if(urlRecord){
        res.redirect(urlRecord.longUrl);
    }else{
        res.status(404).send("Url not found")
    }
}
module.exports={urlshort,getOriginalUrl};
