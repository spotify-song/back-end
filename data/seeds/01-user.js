exports.seed = function (knex) {
  return knex("users").insert([
    { username: "anthony" },
    { username: "jimmy" },
    { username: "mo" },
    { username: "devin" },
  ]);
};
