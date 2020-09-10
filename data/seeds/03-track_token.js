exports.seed = function (knex) {
  // Inserts seed entries
  return knex("track_token").insert([
    {
      access_token: "access",
      token_type: "bearer",
      expires_in: 2000,
      refresh_token: "hereistherre",
      scope: "whataboutnow",
      expires_at: 40000,
      user: "thiksisusernow",
      user_id: 1,
    },
  ]);
};
