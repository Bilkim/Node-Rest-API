const Sequelize = require("sequelize");
const db = require("../config/config");
const Account = require("./accountModel");

const Card = db.define(
  "cards",
  {
    cardId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    cardAlias: {
      type: Sequelize.STRING,

    },
    accountId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    cardType: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "cards",
    timestamps: true,
  }
);

// // Sync models
// Sequelize.sync({ force: true })
//   .then(() => {
//     console.log('Card Table have been created');
//   }).catch((error) => {
//     console.error('Unable to create Card table:', error);
// });

module.exports = Card;
