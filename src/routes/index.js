import { Router } from 'express';
import Home from './home';

const routes = Router();

Home(routes);

export default routes;
