import { type Server } from "http";
import 'dotenv/config';
import app from "./app";

const server: Server = app.listen(process.env.PORT ?? 9090);

export default server;