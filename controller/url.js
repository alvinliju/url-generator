const shortId = require('shortid');


const URL = require('../models/url')

async function handlegenerateNewShortURL(req,res){
    const body=req.body;
    if(!body.url) return res.status(400).json({error:"Url is required"})
    const shortID = shortId(8);
    await URL.create({
        shortId:shortID,
        redirectURL:body.url,
        visitedHistory:[],
    });

    return res.status(200).json({id:shortID});
}

module.exports={
    handlegenerateNewShortURL,
}