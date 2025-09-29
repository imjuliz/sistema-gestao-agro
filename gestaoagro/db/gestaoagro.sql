CREATE TABLE IF NOT EXISTS perfis (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) UNIQUE NOT NULL, -- Ex: ADMIN_MATRIZ, GERENTE_FAZENDA, VENDEDOR_LOJA
    descricao TEXT
);

INSERT INTO perfis (nome) VALUES ('gerente_fazenda') ON CONFLICT DO NOTHING;

CREATE TABLE IF NOT EXISTS unidades (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL, -- Nome da fazenda, loja ou matriz
    tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('MATRIZ', 'FAZENDA', 'LOJA')),
    endereco TEXT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL, -- hash da senha
    telefone VARCHAR(20),
    perfil_id INT NOT NULL REFERENCES perfis(id) ON DELETE RESTRICT, -- Tipo de acesso
    unidade_id INT REFERENCES unidades(id) ON DELETE SET NULL,
    status BOOLEAN DEFAULT TRUE, -- TRUE = ativo, FALSE = inativo
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from usuarios;