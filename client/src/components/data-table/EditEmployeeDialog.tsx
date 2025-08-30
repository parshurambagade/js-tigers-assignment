import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton, InputLabel, MenuItem, Select } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EditEmployeeForm from "./EditEmployeeForm";

export default function EditEmployeeDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton onClick={handleClickOpen}>
        <EditIcon color="primary" />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Employee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Review and modify employee details. Employee ID cannot be changed.
          </DialogContentText>
          <EditEmployeeForm handleClose={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button type="submit" form="subscription-form">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
