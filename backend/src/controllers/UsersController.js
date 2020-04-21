const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { email, usuario, senha, funcao } = request.body;

        await connection('users').insert({
            email,
            usuario,
            senha,
            funcao,
        })

        return response.json({ usuario, senha });
    },

    async index(request, response) {
        const users = await connection('users').select('*');

        return response.json({ users });
    }
}