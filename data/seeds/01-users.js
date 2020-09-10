exports.seed = function (knex) {
  // Inserts seed entries
  return knex("users").insert([
    {
      display_name: "new name",
    },
  ]);
};
