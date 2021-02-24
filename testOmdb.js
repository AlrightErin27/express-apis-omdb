const axios = require("axios");
require("dotenv").config();
const OMDB_API_KEY = process.env.OMDB_API_KEY;

// axios
//   .get(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}=Star+wars`)
//   .then((results) => {
//     console.log(results.data);
//   });
async function hitOmdb() {
  try {
    const results = await get(
      `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}=Star+wars`
    );
    console.log(results.data);
  } catch (error) {
    console.log("🔥 🔥 🔥", error);
  }
}
hitOmdb();
