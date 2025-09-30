import express from "express";
const router = express.Router();

// middlewares -----------------------------------------------------------------------------------------
import { garantirAutenticado } from '../middlewares/authMiddleware.js';


// controllers --------------------------------------------------------------------
import { deleteUsuarioController } from "../controllers/UserController.js";
// rotas usadas para deletar --------------------------------------------------------------------------------
router.delete("/deletar", deleteUsuarioController); // Excluir usuário

// rotas usadas para _____ ---------------------------------------------------------------------------------

// rotas usadas para _____ ---------------------------------------------------------------------------------


export default router;
