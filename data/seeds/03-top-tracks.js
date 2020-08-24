exports.seed = function (knex) {
  // Deletes ALL existing entries

  return knex("top-tracks").insert([
    { user: "userNum1", track_id: 1 },
    { user: "userNum2", track_id: 2 },
    { user: "userNum3", track_id: 3 },
  ]);
};
