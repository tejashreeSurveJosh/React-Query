import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const fetchColor = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

export const PaginationPage = () => {
  const [pageNumber, setpageNumber] = useState(1);
  const { data, isLoading, isError, error } = useQuery(
    ["colors", pageNumber],
    () => fetchColor(pageNumber),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      <div>PaginationPage</div>
      {data?.data.map((color) => (
        <div className="m4">
          <h3>
            {color.id}: {color.name}
          </h3>
        </div>
      ))}
      <button
        onClick={() => setpageNumber((page) => page - 1)}
        disabled={pageNumber === 1}
      >
        Pre
      </button>
      <button
        onClick={() => setpageNumber((page) => page + 1)}
        disabled={pageNumber === 4}
      >
        Next
      </button>
    </>
  );
};
