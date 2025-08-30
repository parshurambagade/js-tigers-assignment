import type { GridColDef } from "@mui/x-data-grid";
import ActionCell from "./components/data-table/ActionCell";
import React from "react";

export const API_ENDPOINT = "http://localhost:7777/api";

export const PAGINATION_SIZE_OPTIONS = [25, 50, 100];

export const DEPARTMMENTS = {
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

export const EMPLOYEE_COLUMNS: GridColDef[] = [
  { field: "employeeId", headerName: "ID", width: 200 },
  { field: "name", headerName: "Name", width: 200 },
  {
    field: "department",
    headerName: "Department",
    width: 200,
  },
  {
    field: "designation",
    headerName: "Designation",
    width: 200,
  },
  {
    field: "joiningDate",
    headerName: "Joining Date",
    width: 300,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 120,
    renderCell: ({ row }) => {
      return React.createElement(ActionCell, { row });
    },
  },
];
