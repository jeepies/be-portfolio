import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (_request: Request, response: Response) => {
    response.send("hi :3");
})

export default app;