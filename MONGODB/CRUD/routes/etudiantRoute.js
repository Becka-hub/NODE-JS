import pkg from 'express';
const { Router } = pkg;
import { AjouteEtudiant, AfficheTousEtudiant, UpdateEtudiant, DeleteEtudiant,AffichePagination } from '../controllers/EtudiantController.js';

const router = Router();

router.post('/ajouteEtudiant', AjouteEtudiant);
router.get('/afficheTousEtudiant', AfficheTousEtudiant);
router.put('/modifierEtudiant/:id', UpdateEtudiant);
router.delete('/suprimerEtudiant/:id', DeleteEtudiant);
router.get('/affichePagination', AffichePagination);

// router.get('/afficheUneUser/:id', AfficheUneUser);
// router.put('/modifierUser/:id', ModifierUser);
// router.delete('/suprimerEmploye/:id', verifyToken, SuprimerEmployer);

// router.get('/token', RefreshToken);

export default router;