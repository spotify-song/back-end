exports.seed = function (knex) {
  // Inserts seed entries
  return knex("top_tracks").insert([
    { track: "thisisthetracktoken", track_id: 1 },
    { track: "thisisthetracktoken", track_id: 2 },
    { track: "thisisthetracktoken", track_id: 3 },
  ]);
};
