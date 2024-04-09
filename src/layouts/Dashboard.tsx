import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      {" "}
      <div>Authorized Dashboard</div>
      <Outlet />
    </>
  );
};

export default Dashboard;
