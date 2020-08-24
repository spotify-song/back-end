exports.seed = function (knex) {
  return knex("users").insert([
    {
      token: "anthosdsdsdsdsny",
      user_id: "fsfjfkljsfojf",
      display_name: "new name",
    },
    {
      token: "jimfdfdsfafmy",
      user_id: "fsfjfgr33ssff",
      display_name: "new name for jimmy",
    },
    {
      token: "mdfsdsdsddsdsdo",
      user_id: "fsfeyrioelf",
      display_name: "new name for mos",
    },
    {
      token: "devdsdse343r3in",
      user_id: "fsfjfdfdfuiyioojf",
      display_name: "new name for devin",
    },
  ]);
};
