import * as env from 'dotenv'
import { Application } from './framework/Application.js'
import { UsersEndpoint } from './Users/Users-endpoint.js'

env.config();


const app = new Application();
app.routerRegister(new UsersEndpoint());

app.listen(process.env.SRV_PORT, () => {
    console.log("STARTED");
})
