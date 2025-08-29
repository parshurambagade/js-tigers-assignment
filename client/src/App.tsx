import Header from "../src/components/layouts/Header";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import EmployeeDataTable from "./components/EmployeeDataTable";

function App() {
  return (
    <>
      <Header />
      <EmployeeDataTable />
    </>
  );
}

export default App;
