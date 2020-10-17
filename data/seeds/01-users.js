exports.seed = function (knex) {
  // Inserts seed entries
  return knex("user").insert([
    {
      display_name: "Anthony",
      spot_id: 'hdhdhdhdhdhdhddhhddh'
    },
  ]);
};
