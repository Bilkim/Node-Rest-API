const Sequelize = require("sequelize");
const db = require("../config/config");
const Card = require("./cardModel");

const Account = db.define(
    "accounts",
    {
        accountId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        iban: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        bicSwift: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        clientId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "accounts",
        timestamps: true,
    }
);

// Defining association with restriction
Account.belongsToMany(Card, {
  foreignKey: 'accountId',
  through: 'AccountCard',
  scope: {
    clientId: Sequelize.literal('"accounts"."clientId"'), // Restriction
  },
});

Card.belongsTo(Account, { foreignKey: 'accountId' });

// // Sync models
// Sequelize.sync({ force: true })
//   .then(() => {
//     console.log('Account Table have been created');
//   }).catch((error) => {
//     console.error('Unable to create Account table:', error);
// });

module.exports = Account;