import Table from "@/Components/atoms/Table";
import React, { useEffect, useState } from "react";
import { userColumns } from "@/mockData/tableHeader";
import userService from "@/services/helper/userService";

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await userService.getUsers();
      setUsers(response?.data?.data?.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  return (
    <div>
      <Table tableHeader={userColumns} data={users} heading="Users List" />
    </div>
  );
};

export default UsersTable;
