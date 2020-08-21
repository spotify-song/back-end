exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments();
      table.string("username", 255).notNullable();
    })
    .createTable("playlist_info", (table) => {
      table.increments();
      table.string("user_id", 255).notNullable();
      table.float("danceability").notNullable();
      table.float("energy").notNullable();
      table.integer("key").notNullable();
      table.float("loudness").notNullable();
      table.integer("mode").notNullable();
      table.float("speechiness").notNullable();
      table.float("acousticness").notNullable();
      table.string("instrumentalness", 255);
      table.float("liveness").notNullable();
      table.float("tempo").notNullable();
      table.string("type", 255).notNullable();
      table.string("uri", 255).notNullable();
    })
    .createTable("user_playlist", (table) => {
      table.increments();
      table
        .integer("u_id")
        .notNullable()
        .unsigned()
        .notNullable()
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("playlist_id")
        .notNullable()
        .references("playlist_info.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("user_playlist")
    .dropTableIfExists("playlist_info")
    .dropTableIfExists("users");
};
