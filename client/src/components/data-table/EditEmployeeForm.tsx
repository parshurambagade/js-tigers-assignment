import React, { useState } from "react";
import { Box, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import JoiningDatePicker from "./JoiningDatePicker";
import type { Employee } from "../../types/employee";
import { DEPARTMMENTS, API_ENDPOINT } from "../../constants";

const EditEmployeeForm = ({
  handleClose,
  employee,
}: {
  handleClose: () => void;
  employee: Employee;
}) => {
  const [name, setName] = useState(employee.name);
  const [employeeId] = useState(employee.employeeId);
  const [joiningDate, setJoiningDate] = useState<Date | null>(
    new Date(employee.joiningDate)
  );
  const [department, setDepartment] = useState<keyof typeof DEPARTMMENTS>(
    employee.department as keyof typeof DEPARTMMENTS
  );
  const [designation, setDesignation] = useState(employee.designation);
  console.log(employee);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const updateData = {
        name,
        department,
        designation,
        joiningDate: joiningDate?.toISOString(),
      };

      const response = await fetch(
        `${API_ENDPOINT}/employee/update/${employee.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Employee updated successfully:", data);
        handleClose();
        // You might want to refresh the data table here
      } else {
        const error = await response.json();
        console.error("Error updating employee:", error);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} id="subscription-form">
      <Box
        sx={{
          display: "flex",
          gap: 2,
          my: 2,
          width: "100%",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <InputLabel htmlFor="employeeId">Employee ID</InputLabel>
          <TextField
            required
            id="employeeId"
            name="employeeId"
            value={employeeId}
            type="text"
            disabled
            variant="outlined"
            fullWidth
          />
        </Box>

        <Box sx={{ width: "100%" }}>
          <InputLabel htmlFor="name">Name</InputLabel>
          <TextField
            autoFocus
            required
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            fullWidth
            variant="outlined"
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 2, my: 2 }}>
        <Box sx={{ width: "100%" }}>
          <InputLabel id="department-label">Department</InputLabel>
          <Select
            labelId="department-label"
            id="department"
            value={department}
            defaultValue="IT"
            fullWidth
            onChange={(e) => {
              const newDepartment = e.target.value as keyof typeof DEPARTMMENTS;
              setDepartment(newDepartment);
              setDesignation(DEPARTMMENTS[newDepartment][0]);
            }}
            variant="outlined"
          >
            {Object.keys(DEPARTMMENTS).map((dept) => (
              <MenuItem key={dept} value={dept}>
                {dept}
              </MenuItem>
            ))}
          </Select>
        </Box>

        <Box sx={{ width: "100%" }}>
          <InputLabel id="designation-label">Designation</InputLabel>
          <Select
            labelId="designation-label"
            id="designation"
            value={designation}
            // label="Designation"
            fullWidth
            onChange={(e) => setDesignation(e.target.value)}
            variant="outlined"
          >
            {DEPARTMMENTS?.[department]?.map(
              (designation: string, i: number) => (
                <MenuItem key={i} value={designation}>
                  {designation}
                </MenuItem>
              )
            )}
          </Select>
        </Box>
      </Box>

      <JoiningDatePicker
        joiningDate={joiningDate}
        setJoiningDate={setJoiningDate}
      />
    </form>
  );
};

export default EditEmployeeForm;
