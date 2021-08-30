exports.up = function (knex) {
  return knex.schema.createTable("movies_theatres", (table) => {
    table.integer("movie_id").unsigned().notNullable();
    table
      .foreign("movie_id")
      .references("movie_id")
      .inTable("movies")
      .onDelete("cascade");
    table.integer("theatre_id").unsigned().notNullable();
    table
      .foreign("theatre_id")
      .references("theatre_id")
      .inTable("theatres")
      .onDelete("cascade");
    table.boolean("is_showing");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("movies_theatres");
};
