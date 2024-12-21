import { Router } from 'express';
import * as controller from '../controllers/root';

const root = Router();

root.get('/', controller.index)

export default root;