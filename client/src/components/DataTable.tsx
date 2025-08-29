import { DataGrid, type GridRowsProp, type GridColDef } from "@mui/x-data-grid";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { API_ENDPOINT } from "../constants";

interface Employee {
  _id?: string;
  employeeId: string;
  name: string;
  department: string;
  designation: string;
  joiningDate: string;
}

export default function RenderComponent() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [pageSize, setPageSize] = useState<number>(25);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    // Fetch employee data from an API or other source
    const fetchData = async () => {
      const response = await fetch(
        API_ENDPOINT + "/employee/all?page=" + page + "&limit=" + pageSize
      );
      const data = await response.json();
      setEmployees(data.data);
    };

    fetchData();
  }, [page, pageSize]);

  const rows: GridRowsProp =
    employees &&
    employees?.map((employee) => ({
      id: employee?._id,
      employeeId: employee.employeeId,
      name: employee.name,
      department: employee.department,
      designation: employee.designation,
      joiningDate: employee.joiningDate,
    }));

  const columns: GridColDef[] = [
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

  return (
    <Container>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: pageSize,
              page: page - 1,
            },
          },
        }}
        pageSizeOptions={[25, 50, 75, 100]}
        onPaginationModelChange={(newModel) => {
          setPageSize(newModel.pageSize);
          setPage(newModel.page + 1);
        }}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Container>
  );
}
