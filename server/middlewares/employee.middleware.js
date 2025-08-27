import { validDepartments } from "../constants.js";

export const validateEmployee = (req, res, next) => {
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
