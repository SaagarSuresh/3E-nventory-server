exports.up = function(knex) {
  return knex.schema
    .createTable('store', (table) => {
        table.uuid('id').primary();
        table.string('name').notNullable();
        table.timestamps(true,true);
    })
    .createTable('truffle', (table) =>{
        table.uuid('id').primary();
        table.string('name').notNullable();
        table.timestamps(true,true);
    })
    .createTable('inventory', (table) =>{
        table.uuid('id').primary();
        table
            .uuid('store_id')
            .references('store.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table
            .uuid('truffle_id')
            .references('truffe.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table
            .integer('minimum_truffles_in_container')
            .unsigned()
            .notNullable()
        table
            .integer('truffles_in_container')
            .unsigned()
            .notNullable()
        table
            .integer('truffles_sold')
            .unsigned()
        table.timestamps(true,true);
    })
    .createTable('notifications', (table) =>{
        table.uuid('id').primary();
        table
            .uuid('inventory_id')
            .references('inventory.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('alert_message').notNullable();
        table.timestamps(true,true);
    });
};


exports.down = function(knex) {
  return knex.schema.dropTable('notifications').dropTable('inventory').dropTable('truffle').dropTable('store');
};
