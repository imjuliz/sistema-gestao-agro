import { cadastrarSe, getUserByEmail, deletarUsuario } from "../models/User.js";

export async function cadastrarSeController(req, res) {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ error: "Preencha todos os campos obrigatórios" });
    }

    // Verifica se email já existe
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: "Email já cadastrado" });
    }

    const user = await cadastrarSe({ nome, email, senha });

    res.status(201).json({ message: "Usuário criado com sucesso", user });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
export async function deleteUsuarioController(req, res) {
  const { id } = req.params;
  try {
    const usuario = await deletarUsuario(Number(id));
    return res.status(200).json({
      message: "Usuário deletado com sucesso", usuario
    });
  } catch (error) {
    if (error.message === "Usuário não encontrado") {
      return res.status(404).json({ error: error.message });
    }
    console.error(error);
    return res.status(500).json({ error: "Erro ao deletar usuário" });
  }
}
