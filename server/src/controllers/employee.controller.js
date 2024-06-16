// create a employee
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function createEmployee(req, res) {
  try {
    const {
      firstName,
      lastName,
      nationalId,
      telephone,
      email,
      departmentId,
      position,
      laptopId,
    } = req.body;

    const employee = await prisma.employee.create({
      data: {
        firstName,
        lastName,
        nationalId,
        telephone,
        email,
        departmentId,
        position,
        laptopId,
      },
    });

    return res.status(201).json(employee);
  } catch (error) {
    console.error("Error creating employee:", error);
    return res.status(500).send("Internal server error");
  }
}
export async function createDepartment(req, res) {
  try {
    const { name } = req.body;

    const department = await prisma.department.create({
      data: {
        name,
      },
    });

    return res.status(201).json(department);
  } catch (error) {
    console.error("Error creating department:", error);
    return res.status(500).send("Internal server error");
  }
}
export async function getDepartments(req, res) {
  try {
    const department = await prisma.department.findMany();

    return res.status(200).json(department);
  } catch (error) {
    console.error("Error creating department:", error);
    return res.status(500).send("Internal server error");
  }
}
export async function getLaptops(req, res) {
  try {
    const laptop = await prisma.laptop.findMany();

    return res.status(200).json(laptop);
  } catch (error) {
    console.error("Error creating laptop:", error);
    return res.status(500).send("Internal server error");
  }
}
export async function createLaptop(req, res) {
  try {
    const { laptopManufacturer, laptopModel, serialNumber } = req.body;

    const laptop = await prisma.laptop.create({
      data: {
        laptopManufacturer,
        laptopModel,
        serialNumber,
      },
    });

    return res.status(201).json(laptop);
  } catch (error) {
    console.error("Error creating laptop:", error);
    return res.status(500).send("Internal server error");
  }
}
// Get all employees
// Backend logic for getting all employees
export async function getAllEmployees(req, res) {
  try {
    const { page = 1, limit = 10, last_page } = req.query;

    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);

    if (pageNumber < 1) {
      return res
        .status(400)
        .json({ error: "Page value should not be less than 1" });
    }

    const totalCount = await prisma.employee.count();
    const totalPage = Math.ceil(totalCount / limitNumber);
    const startIndex = (pageNumber - 1) * limitNumber;

    let employeesData = await prisma.employee.findMany({
      take: limitNumber,
      skip: startIndex,
      orderBy: { id: "desc" },
      include: { department: true, laptop: true },
    });

    return res.status(200).json({
      totalCount,
      totalPage,
      currentPage: pageNumber,
      employeesData,
    });
  } catch (error) {
    console.error("Error fetching employees:", error);
    return res.status(500).send("Internal server error");
  }
}
