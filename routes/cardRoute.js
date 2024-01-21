const Express = require("express");
const routes = Express.Router();
const {
  returnAllCards,
  createCard,
  returnCardById,
  updateCard,
  deleteCard,
} = require("../controllers/cardController");

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Cards:
 *        type: object
 *        properties:
 *          cardId:
 *            type: integer
 *            description: Card identifier unique
 *            example: 1
 *          cardAlias:
 *            type: string
 *            description: Personalized name of the card
 *            example: "MyCard"
 *          accountId:
 *            type: integer
 *            description: Account identifier to which the card belongs
 *            example: 1
 *          cardType:
 *            type: string
 *            description: Type of card (virtual or physical)
 *            example: "virtual"
 */


/**
 * @swagger
 * /api/cards:
 *  get:
 *    tags:
 *      - Cards
 *    summary: Retrieve a list of cards
 *    description: Retrieve a list of cards from the cards table
 *    responses:
 *      200:
 *        description: A list of cards.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *                  example: Successfully fetched all cards!
 *                data:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/schemas/Cards'
 *
 *  post:
 *    tags:
 *      - Cards
 *    summary: Create a new card
 *    description: Create a new card and return the created card.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              cardAlias:
 *                type: string
 *                description: Personalized name of the card
 *                example: "MyCard"
 *              accountId:
 *                type: integer
 *                description: Account identifier to which the card belongs
 *                example: 1
 *              cardType:
 *                type: string
 *                description: Type of card (virtual or physical)
 *                example: "virtual"
 *    responses:
 *      201:
 *        description: Successfully created a card.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Cards'
 *
 * /api/cards/{id}:
 *  get:
 *    tags:
 *      - Cards
 *    summary: Retrieve a card by ID
 *    description: Retrieve a card by its unique ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: ID of the card to retrieve
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: Successfully fetched a card.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Cards'
 *      404:
 *        description: Card not found.
 *
 *  patch:
 *    tags:
 *      - Cards
 *    summary: Update a card by ID
 *    description: Update a card by its unique ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: ID of the card to update
 *        schema:
 *          type: integer
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *             type: object
 *             properties:
 *               cardAlias:
 *                 type: string
 *                 description: Personalized name of the card
 *                 example: "MyCard"
 *    responses:
 *      200:
 *        description: Successfully updated a card.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Cards'
 *      404:
 *        description: Card not found.
 *
 *  delete:
 *    tags:
 *      - Cards
 *    summary: Delete a card by ID
 *    description: Delete a card by its unique ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: ID of the card to delete
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: Successfully deleted a card.
 *      404:
 *        description: Card not found.
 */


routes.get("/", returnAllCards);
routes.get("/:id", returnCardById);
routes.post("/", createCard);
routes.patch("/:id", updateCard);
routes.delete("/:id", deleteCard);

module.exports = routes;
