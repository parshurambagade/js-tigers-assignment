import { DataGrid } from "@mui/x-data-grid";
import useEmployeeDataTable from "../hooks/useEmployeeDataTable";
import { Container } from "@mui/material";
import { PAGINATION_SIZE_OPTIONS } from "../constants";

export default function EmployeeDataTable() {
  const {
    tableRows,
    columns,
    processRowUpdate,
    page,
    pageSize,
    totalRows,
    onPaginationModelChange,
  } = useEmployeeDataTable();

  return (
    <Container>
      <DataGrid
        rows={tableRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: pageSize,
              page: page - 1,
            },
          },
        }}
        rowCount={totalRows}
        pageSizeOptions={PAGINATION_SIZE_OPTIONS}
        onPaginationModelChange={onPaginationModelChange}
        checkboxSelection
        disableRowSelectionOnClick
        processRowUpdate={processRowUpdate}
        paginationMode="server"
      />
    </Container>
  );
}
