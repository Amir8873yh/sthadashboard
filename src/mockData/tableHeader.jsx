export const userColumns = [
  {
    header: "ID",
    accessor: (_row, rowIndex) => rowIndex + 1,
  },
  { header: "Name", accessor: "userName" },
  { header: "Email", accessor: "email" },
  { header: "Mobile No.", accessor: "mobile" },
  {
    header: "Role",
    accessor: (row) => <span className="capitalize">{row.role}</span>,
  },
  {
    header: "Status",
    accessor: (row) => (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${row.isActive ? " text-green-700" : " text-red-700"}`}>{row.isActive ? "Active" : "Inactive"}</span>
    ),
  },
  // {
  //   header: "Actions",
  //   accessor: (row) => (
  //     <div className="flex space-x-2">
  //       <button onClick={() => onView(row)} className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600">
  //         View
  //       </button>
  //       <button onClick={() => onEdit(row)} className="px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600">
  //         Edit
  //       </button>
  //       <button onClick={() => onDelete(row)} className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600">
  //         Delete
  //       </button>
  //     </div>
  //   ),
  // },
];
