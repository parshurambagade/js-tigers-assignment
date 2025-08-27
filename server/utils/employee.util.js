import Employee from "../models/employee.model.js";

export const generateEmployeeId = async () => {
  try {
    const employeesCount = await Employee.countDocuments();
    const employeeId = `EMP${(employeesCount + 1).toString().padStart(3, "0")}`;
    return employeeId;
  } catch (error) {
    throw new Error("Error generating employee ID");
  }
};
