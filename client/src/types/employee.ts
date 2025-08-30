export interface Employee {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  _id?: string;
  employeeId: string;
  name: string;
  department: string;
  designation: string;
  joiningDate: string;
}
