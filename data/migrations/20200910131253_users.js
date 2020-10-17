exports.up = function (knex) {
  return knex.schema
    .createTable("user", (table) => {
      table.increments();
      table.string('spot_id',255).notNullable();
      table.string("display_name", 255).notNullable();
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
      table.float("instrumentalness");
      table.float("valence");
      table.float("liveness").notNullable();
      table.float("tempo").notNullable();
      table.integer('duration_ms').notNullable();
      table.integer('time_signature').notNullable();
    })

    .createTable("track_token", (table) => {
      table.increments();
      table.string("access_token", 255).notNullable();
      table.string("token_type", 255).notNullable();
      table.integer("expires_in").notNullable();
      table.string("refresh_token", 255).notNullable();
      table.string("scope", 255).notNullable();
      // table.integer("expires_at").notNullable();
      table.integer("user").notNullable().references('user.id').onDelete('CASCADE').onUpdate('CASCADE');
  
    })
    .createTable("user_playlist", (table) => {
      table.increments();
      table
        .integer("u_id")
        .notNullable()
        .unsigned()
        .references("user.id")
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
    .dropTableIfExists("track_token")
    .dropTableIfExists("tracks")
    .dropTableIfExists("user");
};
