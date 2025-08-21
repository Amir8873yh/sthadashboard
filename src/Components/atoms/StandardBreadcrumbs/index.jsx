import { useNavigate } from "react-router-dom";

const StandardBreadcrumbs = ({ data }) => {
  const navigate = useNavigate();

  return (
    <ul className="text-gray-800 flex items-center text-sm font-medium mb-2 mt-7">
      {data?.map((item, index) =>
        index === data.length - 1 ? (
          <li key={index}>{item.title}</li>
        ) : (
          <li key={index} className="text-gray-500 hover:text-gray-900 cursor-pointer flex items-center" onClick={() => navigate(item?.link)}>
            {item.title}
            <span className="mx-1">/</span>
          </li>
        )
      )}
    </ul>
  );
};

export default StandardBreadcrumbs;
