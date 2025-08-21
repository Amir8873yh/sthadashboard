import React from "react";
import { adminUserListBreadcrumb } from "@/mockData/admin";
import UsersTable from "@/Components/molecules/UsersTable";
import StandardBreadcrumbs from "@/Components/atoms/StandardBreadcrumbs";

const UsersList = () => {
  return (
    <div>
      <StandardBreadcrumbs data={adminUserListBreadcrumb} />
      <UsersTable />
    </div>
  );
};

export default UsersList;
