exports.seed = function (knex) {
  // Inserts seed entries
  return knex("user_playlist").insert([
    { u_id: 1, tracks_id: 1 },
    { u_id: 1, tracks_id: 2 },
    { u_id: 1, tracks_id: 3 },
  ]);
};
