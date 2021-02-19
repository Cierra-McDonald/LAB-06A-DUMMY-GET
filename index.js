//one can find this copy and pasty on the internet...but YOU should write it out first...

const { app } = require('./app.js');

const port = 3000; 

//defining an endpoint on the '/' path. this is our "home" route.

app.listen(port, () => { 
    //the fist argument is the port we want the server on, the second in a callback
    console.log(`Example app listening at http://localhost:${port}`);
});





