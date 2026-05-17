import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    credentials: true,
}))
app.use(express.json);
app.use(express.urlencoded({
    extended: true,
    limit: "3mb"
}));
app.use(cookieParser());



export { app }