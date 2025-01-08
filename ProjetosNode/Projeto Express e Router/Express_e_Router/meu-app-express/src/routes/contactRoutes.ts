import { Router } from 'express';
import { ContactController } from '../controllers/contactController';

const router = Router();
const contactController = new ContactController();

export function setContactRoutes(app: Router) {
    app.get('/contato', contactController.getContact.bind(contactController));
}