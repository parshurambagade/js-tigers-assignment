import { IconButton } from "@mui/material";
import type { GridRenderCellParams } from "@mui/x-data-grid";
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

  return (
    <>
      <EditEmployeeDialog employee={row} />
      <IconButton onClick={() => handleDelete(row.id)}>
        <DeleteIcon color="error" />
      </IconButton>
    </>
  );
};

export default ActionCell;
