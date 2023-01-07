import pkg from 'express';
const { Router } = pkg;
import { AjouteCategory, AjouteProduit, AfficheCategory, AfficheProduit, AfficheProduitCategory } from '../controllers/Controller.js';

const router = Router();

router.post('/ajouteCategory', AjouteCategory);
router.post('/ajouteProduit', AjouteProduit);
router.get('/afficheCategory', AfficheCategory);
router.get('/afficheProduit', AfficheProduit);
router.get('/afficheCategoryProduit/:id', AfficheProduitCategory);
// router.put('/modifierUser/:id', ModifierUser);
// router.delete('/suprimerEmploye/:id', verifyToken, SuprimerEmployer);
// router.put('/modifierEmploye/:id', verifyToken, ModifierEmploye);
// router.get('/token', RefreshToken);

export default router;