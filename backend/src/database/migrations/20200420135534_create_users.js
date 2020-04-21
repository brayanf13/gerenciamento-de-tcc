
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id');
        table.string('email').notNullable();
        table.string('usuario').notNullable();
        table.string('senha').notNullable();
        table.string('funcao').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
