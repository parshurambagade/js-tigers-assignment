import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { InputLabel } from "@mui/material";

export default function JoiningDatePicker({
  joiningDate,
  setJoiningDate,
}: {
  joiningDate: Date | null;
  setJoiningDate: (date: Date | null) => void;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <InputLabel htmlFor="joiningDate">Joining Date</InputLabel>
      <DatePicker
        name="joiningDate"
        value={joiningDate ? dayjs(joiningDate) : null}
        onChange={(newValue: Dayjs | null) =>
          setJoiningDate(newValue ? newValue.toDate() : null)
        }
      />
    </LocalizationProvider>
  );
}
