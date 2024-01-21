const Express = require("express");
const routes = Express.Router();
const {
  returnAllAccounts,
  createAccount,
  returnAccountById,
  updateAccount,
  deleteAccount,
} = require("../controllers/accountController");

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Accounts:
 *        type: object
 *        properties:
 *          accountId:
 *            type: integer
 *            description: Account identifier unique
 *            example: 1
 *          iban:
 *            type: string
 *            description: enter iban
 *            example: "ABC123"
 *          bicSwift:
 *            type: string
 *            description: enter bicSwift
 *            example: "DEFG456"
 *          clientId:
 *            type: integer
 *            description: Client identifier unique
 *            example: 23
 */


/**
 * @swagger
 * /api/accounts:
 *  get:
 *    tags:
 *      - Accounts
 *    summary: Retrieve a list of accounts
 *    description: Retrieve a list of accounts from the accounts table
 *    responses:
 *      200:
 *        description: A list of accounts.
 *        content: 
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *                  example: Successfully fetched all accounts!
 *                data:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/schemas/Accounts'
 * 
 *  post:
 *    tags:
 *      - Accounts
 *    summary: Create a new account
 *    description: Create a new account and return the created account.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              iban:
 *                type: string
 *                description: enter iban
 *                example: "IBAN23"
 *              bicSwift:
 *                type: string
 *                description: enter bicSwift
 *                example: "SWIFTG456"
 *              clientId:
 *                type: integer
 *                description: Client identifier unique
 *                example: 20
 *    responses:
 *      201:
 *        description: Successfully created an account.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Accounts'
 * 
 * /api/accounts/{id}:
 *  get:
 *    tags:
 *      - Accounts
 *    summary: Retrieve an account by ID
 *    description: Retrieve an account by its unique ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: ID of the account to retrieve
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: Successfully fetched an account.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Accounts'
 *      404:
 *        description: Account not found.
 * 
 *  patch:
 *    tags:
 *      - Accounts
 *    summary: Update an account by ID
 *    description: Update an account by its unique ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: ID of the account to update
 *        schema:
 *          type: integer
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              iban:
 *                type: string
 *                description: enter iban
 *                example: "ABC123"
 *              bicSwift:
 *                type: string
 *                description: enter bicSwift
 *                example: "DEFG456"
 *              clientId:
 *                type: integer
 *                description: Client identifier unique
 *                example: 23
 *    responses:
 *      200:
 *        description: Successfully updated an account.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Accounts'
 *      404:
 *        description: Account not found.
 * 
 *  delete:
 *    tags:
 *      - Accounts
 *    summary: Delete an account by ID
 *    description: Delete an account by its unique ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: ID of the account to delete
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: Successfully deleted an account.
 *      404:
 *        description: Account not found.
 */

routes.get("/", returnAllAccounts);
routes.get("/:id", returnAccountById);
routes.post("/", createAccount);
routes.patch("/:id", updateAccount);
routes.delete("/:id", deleteAccount);

module.exports = routes;
