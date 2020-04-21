import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <form>
                    <h1>Login</h1>

                    <input
                        placeholder="Usuário"
                    />

                    <input
                        placeholder="Senha"
                    />

                    {/* <button className="button" type="submit">Entrar</button> */}
                    <Link className="button" to="/profile">Entrar</Link>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#000" />
                    Não tenho cadastro
                </Link>
                </form>
            </section>
        </div>
    );
}