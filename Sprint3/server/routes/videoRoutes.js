const express = require('express'); // calls express for express server
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid');


router.get("/", (req, res) => {               // to endpoint for asking all videos
    const videoData = fs.readFileSync('./data/videoData.json');
    const parsedData = JSON.parse(videoData);
    res.json(parsedData);
});


router.get("/:videoId", (req, res) => {        // to endpoint for asking specific videos
    const videoData = fs.readFileSync('./data/videoData.json');
    const parsedData = JSON.parse(videoData);
    const wantedVideo = parsedData.find((video) => video.id === req.params.videoId);
    
    console.log(wantedVideo);

    res.json(wantedVideo);
});

router.post("/", (req, res) => {   // to endpoint for adding a video
    const newVideo ={
        id: uniqid(),
        title: req.body.title,
        author: req.body.author,
        image: req.body.image,
        date: req.body.date,
        views: req.body.views,
        likes: req.body.likes,
        descript: req.body.descript,
    };

    const videoData = fs.readFileSync('./data/videoData.json');  // reads the current video array
    const parsedData = JSON.parse(videoData);                    // adds new data to the current array
    parsedData.push(newVideo);
    fs.writeFileSync('./data/videoData.json', JSON.stringify(parsedData));   // Writes the updated array to the JSON file
    res.send(newVideo);
});

module.exports = router;