import { configDotenv } from "dotenv";

configDotenv();

export const PORT = process.env.PORT || 7777;

export const MONGO_URL = process.env.MONGO_URL;

export const validDepartments = {
  IT: ["Developer", "Senior Developer", "Tech Lead", "QA Engineer"],
  HR: ["HR Executive", "HR Manager", "Recruiter"],
  Sales: ["Sales Executive", "Sales Manager", "Business Development"],
  Marketing: ["Marketing Executive", "Content Strategist", "SEO Specialist"],
  Finance: ["Accountant", "Finance Manager", "Auditor"],
  Operations: [
    "Operations Executive",
    "Operations Manager",
    "Logistics Coordinator",
  ],
};

export const allowedUpdates = [
  "name",
  "department",
  "designation",
  "joiningDate",
];
