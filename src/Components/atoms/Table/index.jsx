const Table = ({ tableHeader, data, heading = "" }) => {
  return (
    <div>
      <p className="text-2xl font-bold bg-gradient-to-t from-[oklch(0.65_0.07_212.19)] to-gray-600 bg-clip-text text-transparent mt-5 mb-3">{heading}</p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-white uppercase bg-gradient-to-l from-[oklch(0.65_0.07_212.19)] to-gray-600 h-16">
            <tr>
              {tableHeader.map((col, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className=" odd:bg-white odd:dark:bg-gray-100 even:bg-gray-50 even:dark:bg-gray-300 border-t dark:border-gray-500 border-gray-200">
                {tableHeader.map((col, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 font-medium text-black whitespace-nowrap ">
                    {typeof col.accessor === "function" ? col.accessor(row, rowIndex) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
