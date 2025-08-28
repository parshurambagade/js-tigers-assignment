import { validDepartments } from "../constants.js";
import Employee from "../models/employee.model.js";
import { generateEmployeeId } from "../utils/employee.util.js";

export const getAllEmployees = async (req, res) => {
  try {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : 25;
    const skip = (page - 1) * limit;
    const employees = await Employee.find().limit(limit).skip(skip);
    res
      .status(200)
      .json({ data: employees, message: "Employees fetched successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error: " + error.message });
  }
};

export const getSingleEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Employee ID is required" });
    }

    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res
      .status(200)
      .json({ data: employee, message: "Employee fetched successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error: " + error.message });
  }
};

export const addEmployee = async (req, res) => {
  try {
    const { name, designation, department, joiningDate } = req.body;

    const employeeId = await generateEmployeeId();

    if (!employeeId) {
      return res.status(500).json({ message: "Error generating employee ID" });
    }

    const newEmployee = new Employee({
      employeeId,
      name,
      designation,
      department,
      joiningDate,
    });

    await newEmployee.save();

    res
      .status(201)
      .json({ data: newEmployee, message: "Employee created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error: " + error.message });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Employee ID is required" });
    }

    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const updates = Object.keys(req.body);

    if (req.body.designation && !req.body.department) {
      if (
        !validDepartments[employee.department].includes(req.body.designation)
      ) {
        return res
          .status(400)
          .json({ error: "Invalid designation for department" });
      }
    }

    if (req.body.department && !req.body.designation) {
      if (req.body.department !== employee.department) {
        return res.status(400).json({
          error: "Designation is required for the selected department",
        });
      }
    }

    updates.forEach((update) => {
      employee[update] = req.body[update];
    });

    await employee.save();

    res
      .status(200)
      .json({ data: employee, message: "Employee updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error: " + error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Employee ID is required" });
    }

    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res
      .status(200)
      .json({ data: employee, message: "Employee deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error: " + error.message });
  }
};
