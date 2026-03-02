import express from 'express'
import { upload } from '../middlewares/multer.js';
import { authUser } from '../middlewares/authMiddleware.js';
import { createNewProperty, getAllAvailableProperties, getOwnerProperties, togglePropertyAvailability } from '../controllers/propertyController.js';

const propertyRouter = express.Router();

propertyRouter.post("/",upload.array('images',4),authUser,createNewProperty)
propertyRouter.get("/",getAllAvailableProperties);
propertyRouter.get("/owner",getOwnerProperties);
propertyRouter.post("/toggle-availabilty",authUser,togglePropertyAvailability)

export default propertyRouter;
