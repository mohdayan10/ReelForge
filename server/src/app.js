import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { userRouter } from './routes/user.routes.js';
import { apiErrorHandler } from './utils/ApiError.js';

const app = express();

app.use(cors({
    credentials: true,
}))
app.use(express.json({limit: '3mb'}));
app.use(express.urlencoded({
    extended: true,
    limit: "3mb"
}));
app.use(cookieParser());


app.use('/api/v1/user', userRouter);
app.use(apiErrorHandler);

export { app }
