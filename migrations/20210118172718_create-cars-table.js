
exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
        tbl.increments();
        tbl.text("model").notNullable();
        tbl.text("make").notNullable();
        tbl.integer("mileage").notNullable();
        tbl.integer("VIN").notNullable();
        tbl.text("transmission");
        tbl.text("title-status");
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
