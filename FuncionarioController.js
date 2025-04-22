import Funcionario from "../model/FuncionarioModel.js";

async function listar(req, res) {
    const respostaBanco = await Funcionario.findAll();
    res.json(respostaBanco);
}

async function selecionar(req, res) {
    const id = req.params.id;
    const respostaBanco = await Funcionario.findByPk(id);
    res.json(respostaBanco);
}

async function inserir(req, res) {
    const respostaBanco = await Funcionario.create(req.body);
    res.json(respostaBanco);
}

async function alterar(req, res) {
    const nomefunctionario = req.body.nomefunctionario;
    const cpf = req.body.cpf;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const nascimento = req.body.nascimento;
    const salario = req.body.salario;
    const contratacao = req.body.contratacao;
    const demissao = req.body.demissao;

    const idfuncionario = req.params.id;

    const respostaBanco = await Funcionario.update(
        { nome, cpf, email, telefone, nascimento, salario, contratacao, demissao, ativo },
        { where: { idfuncionario } });
    res.json(respostaBanco);
}

async function demitir(req, res) {
    const ativo = false;
        await Funcionario.update(
            { ativo },
            { where: { idfuncionario}});
            
        res.json(respostaBanco);
    
        res.send('Funcionario desligado com sucesso.')

}


export default { listar, selecionar, inserir, alterar, demitir };