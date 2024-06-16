import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createStudent(req, res) {
  try {
    const { firstName, lastName, email, dateOfBirth, studentNumber } = req.body;

    // Create a new student
    const student = await prisma.student.create({
      data: {
        firstName,
        lastName,
        email,
        dateOfBirth,
        studentNumber,
      },
    });
    return res.status(201).json(student);
  } catch (error) {
    console.error("Error creating student:", error);
    return res.status(500).send("Internal server error");
  }
}
