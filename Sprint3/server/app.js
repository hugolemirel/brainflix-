const express = require('express'); // calls express for express server
const app = express();              // creates an instance of express
const videoRoutes = require ('./routes/videoRoutes');
const cors = require ('cors');

require('dotenv').config();

const port = process.env.PORT;

app.use(cors());          // prevents cors errors
app.use(express.json());  // allows reading json in express
app.use(express.static("files"));
 

app.get('/', (req, res) => {
    res.send('Yes, it works!');
});

app.use("/videos", videoRoutes);

app.listen(port, () => {    // listens port 8080
    console.log(`Server is running on ${port}`);
});