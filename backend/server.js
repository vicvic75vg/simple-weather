var Express = require('express');
var app = Express();
var port = process.env.PORT || 5000;
var fetch = require('node-fetch');
var cors = require('cors');

app.use(cors());
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

app.get('/',(req,res) => {
    res.send('Hello :)');
})
app.get('/api/darkSky', async (req,res) => {
    var placeName = req.query.placeName;
    var openCageKey = 'd67bbeff4816460dbfebbdbd8b215216';
    var darkSkyKey = 'dc1c8f0aea18e3f4b6fa074bf94abaf7';

    var openCageRes = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${placeName}&key=${openCageKey}`);
    var openCageData = await openCageRes.json();
    var latLong = openCageData.results[0].geometry;

    var darkSkyRes = await fetch(`https://api.darksky.net/forecast/${darkSkyKey}/${latLong.lat},${latLong.lng}`);
    var darkSkyData = await darkSkyRes.json();

    res.send(darkSkyData);
    //#TODO: Get arguments from front end and send back here. and then use Axios on front end to get results. :)
});
//Routes