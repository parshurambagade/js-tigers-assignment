import React, { useState } from "react";
import { Box, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import JoiningDatePicker from "./JoiningDatePicker";
import { Label } from "@mui/icons-material";

const EditEmployeeForm = ({ handleClose }: { handleClose: () => void }) => {
  const [name, setName] = useState("Parshuram Bagade");
  const [employeeId, setEmployeeId] = useState("EMP1001");
  const [joiningDate, setJoiningDate] = useState<Date | null>(null);
  const [department, setDepartment] = useState("IT");
  const [designation, setDesignation] = useState("Engineering");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formJson = Object.fromEntries((formData as any).entries());
    const email = formJson.email;
    console.log(email);
    handleClose();
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
            // label="Department"
            defaultValue="IT"
            fullWidth
            onChange={(e) => setDepartment(e.target.value)}
            variant="outlined"
          >
            <MenuItem value={"HR"}>HR</MenuItem>
            <MenuItem value={"Engineering"}>Engineering</MenuItem>
            <MenuItem value={"Marketing"}>Marketing</MenuItem>
            <MenuItem value={"IT"}>IT</MenuItem>
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
            <MenuItem value={"HR"}>HR</MenuItem>
            <MenuItem value={"Engineering"}>Engineering</MenuItem>
            <MenuItem value={"Marketing"}>Marketing</MenuItem>
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
