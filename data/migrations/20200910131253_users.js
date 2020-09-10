exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments();
      table.string("display_name", 255);
    })

    .createTable("tracks", (table) => {
      table.increments();
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

    .createTable("track_token", (table) => {
      table.increments();
      table.string("access_token", 255);
      table.string("token_type", 255);
      table.integer("expires_in");
      table.string("refresh_token", 255);
      table.string("scope", 255);
      table.integer("expires_at");
      table.string("user", 255);
      table
        .integer("user_id")
        .notNullable()
        .unsigned()
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("top_tracks", (table) => {
      table.increments();
      table.string("track", 255);
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
    .dropTableIfExists("top_tracks")
    .dropTableIfExists("track_token")
    .dropTableIfExists("tracks")
    .dropTableIfExists("users");
};
