import { Router } from 'express';
import UserControllerMethods from '../controller/user-controller';

const router = new Router();

// get the all users data
router.get('/users', UserControllerMethods.users);
// post the users data
router.post('/user-data', UserControllerMethods.addUsers);
// Update the user data
router.put('/update-user/:id', UserControllerMethods.updateUser);
// delete the user data
router.delete('/delete-user/:id', UserControllerMethods.deleteUser);

export default router;
