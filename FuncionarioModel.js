import { DataTypes } from "sequelize";
import banco from "../banco.js";

//mapeamento da model Autor
export default banco.define(
    'funcionario',
    {
        // Model attributes are defined here
        idfuncionario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nomefunctionario: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING(15),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        telefone: {
            type: DataTypes.STRING(15),
            allowNull: true
        },
        nascimento: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        salario: {
            type: DataTypes.DECIMAL(11,2),
            allowNull: false
        },
        contratacao: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        demissao: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        ativo: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        token: {
            type: DataTypes.STRING(100),
            allowNull: true
        }
    }
);