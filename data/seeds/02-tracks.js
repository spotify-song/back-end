exports.seed = function (knex) {
  return knex("tracks").insert([
    {
      danceability: 0.4,
      energy: 2.3,
      key: 3,
      loudness: 2.3,
      mode: 2,
      speechiness: 1.3,
      acousticness: 5.5,
      instrumentalness: 3.2,
      liveness: 6.5,
      tempo: 1.1,
      valence: 1.2,
      duration_ms: 2,
      time_signature: 10
    },
    {
      danceability: 0.2,
      energy: 2.1,
      key: 34,
      loudness: 2.4,
      mode: 2,
      speechiness: 1.3,
      acousticness: 5.5,
      instrumentalness: 3.2,
      liveness: 6.5,
      tempo: 1.1,
      valence: 1.2,
      duration_ms: 2,
      time_signature: 10
    },
    {
      danceability: 0.2,
      energy: 2.1,
      key: 34,
      loudness: 2.4,
      mode: 2,
      speechiness: 1.3,
      acousticness: 5.5,
      instrumentalness: 3.2,
      liveness: 6.5,
      tempo: 1.1,
      valence: 1.2,
      duration_ms: 2,
      time_signature: 10
    },
  ]);
};
