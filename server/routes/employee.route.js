import { Router } from "express";
import {
  addEmployee,
  getAllEmployees,
  getSingleEmployee,
} from "../controllers/employee.controller.js";
import { validateEmployee } from "../middlewares/employee.middleware.js";

const employeeRouter = Router();

employeeRouter.get("/all", getAllEmployees);
employeeRouter.get("/:id", getSingleEmployee);
employeeRouter.post("/add", validateEmployee, addEmployee);

export default employeeRouter;
