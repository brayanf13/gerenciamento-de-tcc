const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { usuario, senha } = request.body;

        const user = await connection('users')
            .where('usuario', usuario)
            .select('email')
            .first();

            const password = await connection('users')
            .where('senha', senha)
            .first();

            if (!user) {
                return response.status(400).json({ error: 'No user found with this username' });
            } else if (!password) {
                return response.status(400).json({ error: 'Wrong password' });
            }

            return response.json(user);
    }
}