exports.seed = function (knex) {
  return knex("user_playlist").insert([
    { u_id: 1, playlist_id: 1 },
    { u_id: 1, playlist_id: 2 },
    { u_id: 2, playlist_id: 3 },
  ]);
};
