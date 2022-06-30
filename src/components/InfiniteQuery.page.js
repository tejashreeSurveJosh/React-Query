import axios from "axios";
import { Fragment } from "react";
import { useQuery, useInfiniteQuery } from "react-query";

const fetchColor = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
};

export const InfiniteQuery = () => {
  const { data, isLoading, isError, error, hasNextPage, fetchNextPage } =
    useInfiniteQuery(["colors"], fetchColor, {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length <= 5) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    });

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      <div>
        {data?.pages.map((group, i) => (
          <Fragment key={i}>
            {group?.data.map((color) => (
              <h3 key={color.id}>
                {color.id}: {color.name}
              </h3>
            ))}
          </Fragment>
        ))}
      </div>
      <button disabled={!hasNextPage} onClick={fetchNextPage}>
        Load more..
      </button>
    </>
  );
};
