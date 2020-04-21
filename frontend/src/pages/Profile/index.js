import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiInfo } from 'react-icons/fi';

import './styles.css';

export default function Profile() {
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
                <th>Título do trabalho</th>
                <th>Área</th>
                <th>Orientador</th>
                <th>Aluno</th>
            </thead>

            <tbody>
                <tr>
                    <td>Sem Tema</td>
                    <td>Não sei</td>
                    <td>teste@oi</td>
                    <td>jhon@tu</td>
                    <td>
                        <FiInfo size={20} color="0000ff" />
                    </td>
                </tr>
            </tbody>
        </table>
            
        </div>
    );
}