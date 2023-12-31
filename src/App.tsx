import { ConfigProvider, theme } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, Register } from "./pages";
import { AddEmployee } from "./pages/add-employee/add-employee";
import { EditEmployee } from "./pages/edit-employee/edit-employee";
import { Employee } from "./pages/employee/employee";
import { Employees } from "./pages/employees/employees";
import { Status } from "./pages/status/status";
import { PATH } from "./route/path";
import { Auth } from "./store/duck/auth/auth";

const router = createBrowserRouter([
  {
    path: PATH.home,
    element: <Employees />,
  },
  {
    path: PATH.register,
    element: <Register />,
  },
  {
    path: PATH.login,
    element: <Login />,
  },
  {
    path: PATH.employeeAdd,
    element: <AddEmployee />,
  },
  {
    path: `${PATH.status}/:status`,
    element: <Status />,
  },
  {
    path: `${PATH.employee}/:id`,
    element: <Employee />,
  },
  {
    path: `${PATH.employeeEdit}/:id`,
    element: <EditEmployee />,
  },
]);

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Auth>
        <RouterProvider router={router} />
      </Auth>
    </ConfigProvider>
  );
}

export default App;
