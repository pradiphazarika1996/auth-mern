import express, { NextFunction, Response, Request } from 'express';
import logger from './config/logger';
// import createError from 'http-errors';
import { HttpError } from 'http-errors';

const app = express();

app.get('/', (req, res) => {
    // const err = createError(401, 'you are not allow to access this page');
    // return next(err);

    res.send('Welcome to full stack');
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                msg: err.message,
                path: '',
                location: '',
            },
        ],
    });
});

export default app;
