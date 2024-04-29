//require express
const express = require('express');
// if using heroku it will use their port or if in development use 3001
const PORT = process.env.PORT || 3001
// instantiate the server
// assigned express to the app variable so we can chain on methods to the express js server
const app = express;



// now we chain the listen method so our server can "listen" for request
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});