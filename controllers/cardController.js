const AsyncHandler = require("express-async-handler");
const Card = require("../models/cardModel");

const returnAllCards = AsyncHandler(async (req, res) => {
  const cardsList = await Card.findAll();

  res.status(200).json({
    description: "All cards returned successfully",
    data: cardsList,
  });
});

const createCard = AsyncHandler(async (req, res) => {
  const { cardAlias, accountId, cardType } = req.body;

  try {
    const newCard = await Card.create({ cardAlias, accountId, cardType });

    res.status(201).json({
      description: "Card created successfully",
      data: newCard,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      description: "Internal Server Error",
      error: error.message,
    });
  }
});

const returnCardById = AsyncHandler(async (req, res) => {
  const cardId = req.params.id;

  try {
    const card = await Card.findByPk(cardId);

    if (!card) {
      res.status(404).json({
        description: `Card with id ${cardId} not found`,
      });
    } else {
      res.status(200).json({
        description: `Card id: ${cardId} data returned successfully!`,
        data: card,
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

const updateCard = AsyncHandler(async (req, res) => {
  const cardId = req.params.id;

  try {
    const [rowsUpdated] = await Card.update({ cardAlias: req.body.cardAlias }, {
      where: { cardId: cardId },
    });

    if (rowsUpdated === 0) {
      res.status(404).json({
        description: `Card with id ${cardId} not found`,
      });
    } else {
      const card = await Card.findByPk(cardId);
      res.status(200).json({
        description: `Card with id ${cardId} updated successfully!`,
        data: card
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

const deleteCard = AsyncHandler(async (req, res) => {
  const cardId = req.params.id;

  try {
    const rowsDeleted = await Card.destroy({
      where: { cardId: cardId },
    });

    if (rowsDeleted === 0) {
      res.status(404).json({
        description: `Card with id ${cardId} not found`,
      });
    } else {
      res.status(200).json({
        description: `Card with id ${cardId} deleted successfully!`,
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
  returnAllCards,
  createCard,
  returnCardById,
  updateCard,
  deleteCard,
};
