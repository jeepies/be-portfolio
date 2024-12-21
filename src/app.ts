import express from 'express';
import routes from './routes';

const app = express();

Object.entries(routes).forEach(([route, handlers]) => {
    if (route === 'root') route = '';
    app.use(`/${route}`, handlers);
});

export default app; 