import { supabase } from "../config/supabase.js";
import bcrypt from "bcryptjs";

export async function cadastrarSe({ nome, email, senha }) {
  // hash da senha
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(senha, salt);

  // busca o perfil gerente_fazenda
  const { data: perfilData, error: perfilError } = await supabase
    .from('perfis')
    .select('id')
    .eq('nome', 'gerente_fazenda')
    .maybeSingle();

  if (perfilError) throw perfilError;
  if (!perfilData) throw new Error("Perfil gerente_fazenda não encontrado");

  const perfil_id = perfilData.id;

  // insere usuário
  const { data, error } = await supabase
    .from('usuarios')
    .insert([{ nome, email, senha: hash, perfil_id }])
    .select();

  if (error) throw error;

  return data[0]; // retorna o usuário criado
}

export async function getUserByEmail(email) {
  const { data, error } = await supabase
    .from('usuarios')
    .select('*')
    .eq('email', email)
    .maybeSingle();

  if (error) throw error;
  return data; // pode ser null se não existir
}