const env = require("dotenv")
const Application = require('./framework/Application')
const Users = require('./Users-endpoint')

env.config();


const app = new Application();
app.routerRegister(new Users());

app.listen(process.env.SRV_PORT, () => {
    console.log("STARTED");
})
