const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
app.use(express.json())
dotenv.config();//ต้องเรียกใช้.env
// ConnectDB

app.use(cors());
mongoose.connect(process.env.MONGO_DB_URI, {
}).then(() => console.log('Mongo DB connected'))
.catch(err => console.log(err));

//config Route
const toolRoutes = require("./routes/tools");
app.use("/api/",toolRoutes);

const authRoute = require("./routes/auth");
app.use("/api/auth",authRoute);

const dataroomRoute = require("./routes/dataroom_routes");
app.use("/api/dr",dataroomRoute);

const datatoolRoute = require("./routes/datatool_routes");
app.use("/api/dt",datatoolRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));