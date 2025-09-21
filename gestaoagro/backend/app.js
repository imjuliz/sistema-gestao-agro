import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import pgSession from 'connect-pg-simple';

import authRotas from './routes/authRotas.js';
import appRoutes from './routes/appRoutes.js';

dotenv.config();

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());

app.use(session({
  store: new pgSession({
    conString: process.env.DATABASE_URL, // seu Supabase PostgreSQL
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true, sameSite: 'lax', httpOnly: true }
}));


// Rotas
app.use('/auth', authRotas);
app.use('/', appRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Backend online!' });
});

app.get('/health', (req, res) => res.status(200).json({ status: 'online' }));

app.use('/uploads', express.static(path.resolve('uploads')));

export default app;  // aqui exporta o app puro, sem serverless
