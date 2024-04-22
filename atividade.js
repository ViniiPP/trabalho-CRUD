let pessoas = [];

function gerarId() {
    return Math.floor(Math.random() * 1000);
}

function cadastrarPessoa(pessoa) {
    pessoa.id = gerarId();
    pessoas.push(pessoa);
}

function atualizarPessoa(id, camposAtualizados) {
    const pessoa = pessoas.find(p => p.id === id);
    if (pessoa) {
        Object.assign(pessoa, camposAtualizados);
    }
}

function deletarPessoa(id) {
    pessoas = pessoas.filter(p => p.id!== id);
}

function listarPessoas() {
    return pessoas;
}

// Exemplo de uso:
cadastrarPessoa({ nome: 'Bernardo', idade: 20, cidade: 'Sarandi' });
cadastrarPessoa({ nome: 'Pedro', idade: 17, cidade: 'Sarandi' });

atualizarPessoa(pessoas[0].id, { idade: 199 });

deletarPessoa(pessoas[1].id);

const resultado = listarPessoas();
console.log(resultado);