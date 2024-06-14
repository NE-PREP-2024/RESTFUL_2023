import express from "express";

import { validateBody } from "../middleware/validator.middleware.js";
import { loginSchema, userSchema } from "../utils/schemas.js";
import {
  createUserHandler,
  getUserDetails,
  loginUser,
  verifyUser,
} from "../controllers/user.controller.js";
import checker from "../middleware/auth.middleware.js";

const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         make:
 *           type: string
 *         model:
 *           type: string
 *         year:
 *           type: number
 *         owner:
 *           type: string
 *           format: uuid
 */
/**
 * @openapi
 * /api/v1/users:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       '401':
 *         description: Unauthorized - User not authenticated
 *       '403':
 *         description: Forbidden - User does not have admin role
 *       '500':
 *         description: Internal server error
 */

// Create a new user
/**
 * @openapi
 * /api/v1/users/register:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email address of the User
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Password of the User
 *               confirmPassword:
 *                 type: string
 *                 format: password
 *                 description: Password confirmation
 *             required:
 *               - email
 *               - password
 *               - confirmPassword
 *     responses:
 *       '200':
 *         description: User created successfully
 *       '400':
 *         description: Invalid request payload
 *       '401':
 *         description: Unauthorized - User not authenticated
 *       '403':
 *         description: Forbidden - User does not have admin role
 *       '500':
 *         description: Internal server error
 */
router.post("/register", validateBody(userSchema), createUserHandler);

/**
 * @openapi
 * /api/v1/users/login:
 *   post:
 *     summary: User login
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email address of the User
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Password of the User
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: User logged in successfully
 *       '400':
 *         description: Invalid request payload
 *       '401':
 *         description: Unauthorized - User not authenticated
 *       '403':
 *         description: Forbidden - User does not have admin role
 *       '500':
 *         description: Internal server error
 */

router.post("/login", validateBody(loginSchema), loginUser);

/**
 * @openapi
 * /api/v1/users/verify:
 *   post:
 *     summary: User verification
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email address of the User
 *
 *             required:
 *               - email
 *     responses:
 *       '200':
 *         description: User verified successfully
 *       '400':
 *         description: Invalid request payload
 *       '401':
 *         description: Unauthorized - User not authenticated
 *       '403':
 *         description: Forbidden - User does not have admin role
 *       '500':
 *         description: Internal server error
 */
router.post("/verify", verifyUser);

router.get("/account", checker, getUserDetails);

export default router;
