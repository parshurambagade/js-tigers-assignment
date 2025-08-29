import type { GridRowModel, GridRowsProp } from "@mui/x-data-grid";
import { useCallback, useEffect, useState } from "react";
import { API_ENDPOINT, EMPLOYEE_COLUMNS } from "../constants";

interface Employee {
  _id?: string;
  employeeId: string;
  name: string;
  department: string;
  designation: string;
  joiningDate: string;
}

export default function useEmployeeDataTable() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [pageSize, setPageSize] = useState<number>(25);
  const [page, setPage] = useState<number>(1);
  const [tableRows, setTableRows] = useState<GridRowModel[]>([]);
  const [totalRows, setTotalRows] = useState<number>(0);
  const fetchEmployeeData = useCallback(
    async (page: number, pageSize: number) => {
      try {
        const response = await fetch(
          `${API_ENDPOINT}/employee/all?page=${page}&limit=${pageSize}`
        );
        const data = await response.json();
        setEmployees(data.data);
        setTotalRows(data.total);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    },
    []
  );

  const processRowUpdate = (newRow: GridRowModel) => {
    console.log("Updated Row: ", newRow);
    // TODO: add API call to update employee data in the backend

    const updatedRows = tableRows.map((row) =>
      row.id === newRow.id ? newRow : row
    );
    setTableRows(updatedRows);
    return newRow;
  };

  const onPaginationModelChange = (newModel: {
    page: number;
    pageSize: number;
  }) => {
    setPageSize(newModel.pageSize);
    setPage(newModel.page + 1);
    fetchEmployeeData(newModel.page + 1, newModel.pageSize);
  };

  useEffect(() => {
    fetchEmployeeData(page, pageSize);
  }, [page, pageSize, fetchEmployeeData]);

  useEffect(() => {
    if (employees.length) {
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
      setTableRows(Array.from(rows));
    }
  }, [employees]);

  return {
    employees,
    pageSize,
    page,
    tableRows,
    totalRows,
    processRowUpdate,
    columns: EMPLOYEE_COLUMNS,
    onPaginationModelChange,
  };
}
