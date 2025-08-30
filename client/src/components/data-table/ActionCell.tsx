import { IconButton } from "@mui/material";
import type { GridRenderCellParams } from "@mui/x-data-grid";
import type { Employee } from "../../types/employee";
import DeleteIcon from "@mui/icons-material/Delete";
import EditEmployeeDialog from "./EditEmployeeDialog";

interface ActionCellProps {
  row: GridRenderCellParams["row"];
}
const ActionCell = ({ row }: ActionCellProps) => {
  const handleDelete = (id: string) => {
    //TODO: Implement delete functionality here
    console.log("Deleting employee with ID:", id);
  };

  const handleEdit = (employee: Employee) => {
    //TODO: Implement edit functionality here
    console.log("Editing employee:", employee);
  };

  return (
    <>
      <EditEmployeeDialog />
      <IconButton onClick={() => handleDelete(row.id)}>
        <DeleteIcon color="error" />
      </IconButton>
    </>
  );
};

export default ActionCell;
