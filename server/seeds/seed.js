const sequelize = require("../config/connection");
const { User } = require("../models");

const test = "test";

const userSeedData = require("./userSeedData.json");

const seedDataBase = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- HACKATHON GAME DATABASE SYNCED -----\n");
  const user = await User.bulkCreate(userSeedData);
  console.log("\n----- HACKATHON GAME DATABASE SEEDED -----\n");

  process.exit(0);
};

seedDataBase();
