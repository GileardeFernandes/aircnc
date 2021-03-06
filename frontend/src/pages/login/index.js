import React, { useState, Fragment } from 'react';
import api from '../../services/api';
import FormWrapper from '../FormWrapper';

export default function Login({ history }) {

    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/sessions', { email: email });
        const { _id } = response.data;

        localStorage.setItem('user', _id);

        history.push('./dashboard');
    }
    return (
        <FormWrapper className="login-form">
            <p>
                Ofereça <strong>Spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
           </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email" >E-mail*</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    placeholder="Seu melhor E-mail" >
                </input>

                <button className="btn" type="submit">Entrar</button>
            </form>
        </FormWrapper>
    )
} 