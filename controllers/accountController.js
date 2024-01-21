const AsyncHandler = require("express-async-handler");
const Accounts = require("../models/accountModel");

const returnAllAccounts = AsyncHandler(async (req, res) => {
  const accountsList = await Accounts.findAll();

  res.status(200).json({
    description: "All accounts returned successfully",
    data: accountsList,
  });
});

const createAccount = AsyncHandler(async (req, res) => {
  const { iban, bicSwift, clientId } = req.body;

  try {
    const newAccount = await Accounts.create({ iban, bicSwift, clientId });

    res.status(201).json({
      description: "Account created successfully",
      data: newAccount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      description: "Internal Server Error",
      error: error.message,
    });
  }
});

const returnAccountById = AsyncHandler(async (req, res) => {
  const accountId = req.params.id;

  try {
    const account = await Accounts.findByPk(accountId);

    if (!account) {
      res.status(404).json({
        description: `Account with id ${accountId} not found`,
      });
    } else {
      res.status(200).json({
        description: `Account id: ${accountId} data returned successfully!`,
        data: account,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      description: "Internal Server Error",
      error: error.message,
    });
  }
});

const updateAccount = AsyncHandler(async (req, res) => {
  const accountId = req.params.id;

  try {
    const [rowsUpdated] = await Accounts.update(req.body, {
      where: { accountId: accountId },
    });

    if (rowsUpdated === 0) {
      res.status(404).json({
        description: `Account with id ${accountId} not found`,
      });
    } else {
      const account = await Accounts.findByPk(accountId);
      res.status(200).json({
        description: `Account with id ${accountId} updated successfully!`,
        data: account
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      description: "Internal Server Error",
      error: error.message,
    });
  }
});

const deleteAccount = AsyncHandler(async (req, res) => {
  const accountId = req.params.id;

  try {
    const rowsDeleted = await Accounts.destroy({
      where: { accountId: accountId },
    });

    if (rowsDeleted === 0) {
      res.status(404).json({
        description: `Account with id ${accountId} not found`,
      });
    } else {
      res.status(200).json({
        description: `Account with id ${accountId} deleted successfully!`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      description: "Internal Server Error",
      error: error.message,
    });
  }
});

module.exports = {
  returnAllAccounts,
  createAccount,
  returnAccountById,
  updateAccount,
  deleteAccount,
};
