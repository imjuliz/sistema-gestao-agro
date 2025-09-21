import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

import authRotas from './routes/authRotas.js';
import appRoutes from './routes/appRoutes.js';

// 1. Carrega variáveis de ambiente PRIMEIRO
dotenv.config();

// 2. Cria cliente do Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Erro: SUPABASE_URL ou SUPABASE_ANON_KEY não estão definidos.');
  process.exit(1);
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// 3. Configuração básica do Express
const app = express();
const porta = process.env.PORT || 8080;

// 4. Middlewares essenciais
try {
  // CORS
  app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
  }));

  // Parser de JSON
  app.use(express.json());

  // Sessão
  app.use(session({
    secret: process.env.SESSION_SECRET || 'uma_chave_secreta',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, sameSite: 'lax', httpOnly: true }
  }));

  console.log("Configuração inicial carregada com sucesso.");

} catch (err) {
  console.error('Erro na configuração inicial:', err);
  process.exit(1);
}

// 5. Rotas
app.use('/auth', authRotas);
app.use('/', appRoutes);

app.get('/health', (req, res) => res.status(200).json({ status: 'online' }));

app.use('/uploads', express.static(path.resolve('uploads')));

// 6. Tratamento de erros robusto
process.on('unhandledRejection', (reason, promise) => {
  console.error('Rejeição não tratada em:', promise, 'motivo:', reason);
});

process.on('uncaughtException', (err) => {
  console.error('Exceção não capturada:', err);
  process.exit(1);
});

// 7. Inicialização do servidor com verificação
const server = app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
}).on('error', (err) => {
  console.error('Erro ao iniciar:', err);
});

// 8. Encerramento elegante
process.on('SIGTERM', () => {
  server.close(() => console.log('Servidor encerrado'));
});
