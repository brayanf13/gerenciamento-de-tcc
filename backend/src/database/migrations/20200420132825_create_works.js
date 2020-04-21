
exports.up = function (knex) {
    return knex.schema.createTable('works', function (table) {
        table.increments('id');
        table.string('titulo').notNullable();
        table.string('area').notNullable();
        table.string('assunto').notNullable();
        table.string('descricao').notNullable();
        table.string('emailAluno').notNullable();
        table.string('emailOrientador').notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('works')
};
