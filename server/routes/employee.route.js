import { Router } from "express";
import {
  addEmployee,
  deleteEmployee,
  getEmployees,
  getSingleEmployee,
  updateEmployee,
} from "../controllers/employee.controller.js";
import {
  validateAddEmployeeData,
  validateUpdateEmployeeData,
} from "../middlewares/employee.middleware.js";

const employeeRouter = Router();

employeeRouter.get("/all", getEmployees);
employeeRouter.get("/:id", getSingleEmployee);
employeeRouter.post("/add", validateAddEmployeeData, addEmployee);
employeeRouter.put("/update/:id", validateUpdateEmployeeData, updateEmployee);
employeeRouter.delete("/delete/:id", deleteEmployee);

export default employeeRouter;
