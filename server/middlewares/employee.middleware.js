import { allowedUpdates, validDepartments } from "../constants.js";

export const validateAddEmployeeData = (req, res, next) => {
  const { name, designation, department, joiningDate } = req.body;

  if (!name || !designation || !department || !joiningDate) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (name.length < 3 || name.length > 50) {
    return res
      .status(400)
      .json({ error: "Name must be between 3 and 50 characters long" });
  }

  if (joiningDate < new Date("2000-01-01") || joiningDate > new Date()) {
    return res.status(400).json({ error: "Invalid joining date" });
  }

  if (!validDepartments[department]) {
    return res.status(400).json({ error: "Invalid department" });
  }

  if (!validDepartments[department].includes(designation)) {
    return res
      .status(400)
      .json({ error: "Invalid designation for department" });
  }

  next();
};

export const validateUpdateEmployeeData = (req, res, next) => {
  const { name, designation, department, joiningDate } = req.body;

  const updates = Object.keys(req.body);

  if (updates.length === 0) {
    return res.status(400).json({ error: "No valid fields to update" });
  }

  const isValidOperation = updates.every((field) =>
    allowedUpdates.includes(field)
  );

  if (!isValidOperation) {
    return res.status(400).json({
      error:
        "Invalid update fields! You can only update the following fields: " +
        allowedUpdates.join(", "),
    });
  }

  if (name && (name.length < 3 || name.length > 50)) {
    return res
      .status(400)
      .json({ error: "Name must be between 3 and 50 characters long" });
  }

  if (joiningDate) {
    const joinDate = new Date(joiningDate);
    if (joinDate < new Date("2000-01-01") || joinDate > new Date()) {
      return res.status(400).json({ error: "Invalid joining date" });
    }
  }

  if (department && !validDepartments[department]) {
    return res.status(400).json({ error: "Invalid department" });
  }

  if (designation && department) {
    if (!validDepartments[department].includes(designation)) {
      return res
        .status(400)
        .json({ error: "Invalid designation for department" });
    }
  }

  next();
};
