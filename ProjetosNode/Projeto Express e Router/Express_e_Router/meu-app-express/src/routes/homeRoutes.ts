import { Router } from 'express';
import { HomeController } from '../controllers/homeController';

const router = Router();
const homeController = new HomeController();

export function setHomeRoutes(app: Router) {
    app.get('/', homeController.getHome.bind(homeController));
}