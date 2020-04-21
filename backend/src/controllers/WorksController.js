const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { titulo, area, assunto, descricao, emailAluno, emailOrientador } = request.body;

        const [id] = await connection('works').insert({
            titulo,
            area,
            assunto,
            descricao,
            emailAluno,
            emailOrientador
        })

        return response.json({ id });
    },

    async index(request, response) {
        const works = await connection('works').select('*');

        return response.json({ works });
    },

    async delete(request, response) {
        const { id } = request.params;

        await connection('works').where('id', id).delete();

        return response.status(204).send();
    },

    async update(request, response) {
        const { id } = request.params;
        const { titulo, area, assunto, descricao, emailAluno, emailOrientador } = request.body;

        await connection('works')
        .where({ id: id })
        .update({titulo: titulo, area: area, assunto: assunto, descricao: descricao, emailAluno: emailAluno, emailOrientador: emailOrientador}, [
            id, titulo, area, assunto, descricao, emailAluno, emailOrientador]);

        return response.status(204).send();
    }
}