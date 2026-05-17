import dotenv from "dotenv";
dotenv.config({ });

import {app} from './app.js';
import { connectDb } from "./db/index.js";

connectDb()
.then(
    () => {
        const server = app.listen(
            process.env.PORT || 8000,
            () => {
                console.log("Server running at port: ",process.env.PORT || "8000")
            }
        );
        server.on('error', error => {
            console.log("error in server.js, error: ", error)
        })
    }
)
.catch(error => {
    console.log("error-2 from server.js, error: ", error)
}) 
