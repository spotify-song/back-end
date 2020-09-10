exports.seed = function (knex) {
  // Inserts seed entries
  return knex("users").insert([
    {
      user_id: "fsfjfkljsfojf",
      display_name: "new name",
    },
  ]);
};
