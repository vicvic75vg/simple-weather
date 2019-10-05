var Express = require('express');
var app = Express();
var port = process.env.PORT || 5000;
var fetch = require('node-fetch');
var cors = require('cors');
var config = require('./config');
app.use(cors());

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});


app.get('/api/darkSky', async (req,res) => {
    var placeName = req.query.placeName;
    var darkSkyKey = 'dc1c8f0aea18e3f4b6fa074bf94abaf7';

    var openCageRes = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${placeName}&key=${config.openCage.key}`);
    var openCageData = await openCageRes.json();
    var latLong = openCageData.results[0].geometry;

    var darkSkyRes = await fetch(`https://api.darksky.net/forecast/${config.darkSky.key}/${latLong.lat},${latLong.lng}`);
    var darkSkyData = await darkSkyRes.json();

    res.send(darkSkyData);
    //#TODO: Get arguments from front end and send back here. and then use Axios on front end to get results. :)
});

//Routes