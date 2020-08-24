exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments();
      table.string("token", 255).notNullable();
      table.string("user_id", 255).notNullable();
      table.string("display_name", 255).notNullable();
    })
    .createTable("tracks", (table) => {
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
    })
    .createTable("top-tracks", (table) => {
      table.increments();
      table.string("user", 255).notNullable();
      table
        .integer("track_id")
        .notNullable()
        .unsigned()
        .references("tracks.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("user_playlist", (table) => {
      table.increments();
      table
        .integer("u_id")
        .notNullable()
        .unsigned()
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("tracks_id")
        .notNullable()
        .references("tracks.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("user_playlist")
    .dropTableIfExists("top-tracks")
    .dropTableIfExists("tracks")
    .dropTableIfExists("users");
};
