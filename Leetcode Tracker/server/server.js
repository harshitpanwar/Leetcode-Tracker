const app = require("./app")
const {connectDatabase} = require("./config/database");
const cors = require('cors');;
//connect database
connectDatabase();

app.options('*', cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});