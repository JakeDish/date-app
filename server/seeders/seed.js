const db = require("../config");
const { User } = require("../models");

const userData = require("./userData.json");

db.once("open", async () => {
  await User.deleteMany({});
  const users = await User.create(userData);
  console.log("Users seeded!");
  process.exit(0);
});
