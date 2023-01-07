import pkg from 'express';
const { Router } = pkg;
import { AjouteUser, AfficheUser, AfficheUneUser, ModifierUser, DeleteUser } from '../controller.js/UserController.js';

const router = Router();

router.post('/ajouteUser', AjouteUser);
router.get('/afficheUser', AfficheUser);
router.get('/afficheUneUser/:id', AfficheUneUser);
router.put('/modifierUser/:id', ModifierUser);
router.delete('/suprimerUser/:id', DeleteUser);
// router.put('/modifierEmploye/:id', verifyToken, ModifierEmploye);
// router.get('/token', RefreshToken);

export default router;