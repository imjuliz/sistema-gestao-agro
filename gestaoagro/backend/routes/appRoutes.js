import express from "express";
const router = express.Router();

// middlewares -----------------------------------------------------------------------------------------
import { garantirAutenticado } from '../middlewares/authMiddleware.js';


// controllers --------------------------------------------------------------------
import { deletarUsuarioController } from "../controllers/UserController.js";
// rotas usadas para ______ --------------------------------------------------------------------------------
// rotas usadas para _____ ---------------------------------------------------------------------------------
router.delete('/usuarios/:userId', deletarUsuarioController)
// rotas usadas para _____ ---------------------------------------------------------------------------------


export default router;
