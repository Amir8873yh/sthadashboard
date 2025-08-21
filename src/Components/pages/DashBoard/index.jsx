import React from "react";
import { adminHomeBreadcrumb } from "@/mockData/admin";
import UsersTable from "@/Components/molecules/UsersTable";
import StandardBreadcrumbs from "@/Components/atoms/StandardBreadcrumbs";

const Dashboard = () => {
  return (
    <div>
      <StandardBreadcrumbs data={adminHomeBreadcrumb} />
      <UsersTable />
    </div>
  );
};

export default Dashboard;
