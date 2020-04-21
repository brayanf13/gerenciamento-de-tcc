import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>

                    <h1>Cadastrar usuário</h1>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#000" />
                    Já tenho cadastro
                    </Link>
                </section>

                <form>
                    <input
                        type="email" placeholder="E-mail"
                    />

                    <input
                        placeholder="Usuário"
                    />

                    <input
                        type="password" placeholder="Senha"
                    />
                    <div className="input-group">
                        <p>
                            Aluno
                        </p>
                        <input type="checkbox" name="funcao" value="Aluno" />
                        <p>
                            Orientador
                        </p>
                        <input type="checkbox" name="funcao" value="Orientador" />
                        <p>
                            Coordenador
                        </p>
                        <input type="checkbox" name="funcao" value="Coordenador" />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}