import express from "express";

import { validateBody } from "../middleware/validator.middleware.js";
import { studentSchema } from "../utils/schemas.js";
import { createStudent } from "../controllers/student.controller.js";
import checker from "../middleware/auth.middleware.js";

const router = express.Router();

// Create a new student
/**
 * @openapi
 * /api/v1/students/register:
 *   post:
 *     summary: Create a new student
 *     tags:
 *       - Students
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: First name of the Student
 *               lastName:
 *                 type: string
 *                 description: Last name of the Student
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email address of the Student
 *               dateOfBirth:
 *                 type: string
 *                 format: date
 *                 example: 2021-10-20
 *                 description: Date of birth of the Student
 *               studentNumber:
 *                 type: string
 *                 description: Unique student number
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - dateOfBirth
 *               - studentNumber
 *     responses:
 *       '200':
 *         description: Student created successfully
 *       '400':
 *         description: Invalid request payload
 *       '401':
 *         description: Unauthorized - User not authenticated
 *       '403':
 *         description: Forbidden - User does not have admin role
 *       '500':
 *         description: Internal server error
 */

router.post("/register", validateBody(studentSchema), checker, createStudent);

export default router;
