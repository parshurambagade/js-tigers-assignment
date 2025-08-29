import type { GridColDef } from "@mui/x-data-grid";

export const API_ENDPOINT = "http://localhost:7777/api";

export const PAGINATION_SIZE_OPTIONS = [25, 50, 100];

export const EMPLOYEE_COLUMNS: GridColDef[] = [
  { field: "employeeId", headerName: "ID", width: 200 },
  { field: "name", headerName: "Name", width: 200, editable: true },
  {
    field: "department",
    headerName: "Department",
    width: 200,
    editable: true,
  },
  {
    field: "designation",
    headerName: "Designation",
    width: 200,
    editable: true,
  },
  {
    field: "joiningDate",
    headerName: "Joining Date",
    width: 300,
    editable: true,
  },
];
