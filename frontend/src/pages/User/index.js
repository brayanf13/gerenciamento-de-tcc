import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiInfo } from 'react-icons/fi';

import './styles.css';

export default function User() {
    return (
            <div className="profile-container">
        <header>
            <Link className="back-link" to="/profile">
                <p>Início</p>
            </Link>
            <Link className="back-link">
                <p>Gerar Ata</p>
            </Link>
            <Link className="back-link" to="/user">
                <p>Gerenciar Usuários</p>
            </Link>
        </header>

        <table border="1">
            <thead>
                <th>E-mail</th>
                <th>Usuário</th>
                <th>Senha</th>
                <th>Função</th>
            </thead>

            <tbody>
                <tr>
                    <td>teste@teste</td>
                    <td>eumesmo</td>
                    <td>password</td>
                    <td>Aluno</td>
                    <td>
                        <FiInfo size={20} color="0000ff" />
                    </td>
                </tr>
            </tbody>
        </table>
            
        </div>
    );
}