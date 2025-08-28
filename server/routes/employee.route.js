import { Router } from "express";
import {
  addEmployee,
  getAllEmployees,
  getSingleEmployee,
  updateEmployee,
} from "../controllers/employee.controller.js";
import {
  validateAddEmployeeData,
  validateUpdateEmployeeData,
} from "../middlewares/employee.middleware.js";

const employeeRouter = Router();

employeeRouter.get("/all", getAllEmployees);
employeeRouter.get("/:id", getSingleEmployee);
employeeRouter.post("/add", validateAddEmployeeData, addEmployee);
employeeRouter.put("/update/:id", validateUpdateEmployeeData, updateEmployee);

export default employeeRouter;
