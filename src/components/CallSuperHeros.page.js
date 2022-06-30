import { useGetSuperHeroesHook } from "../hooks/useGetSuperHeroes";

export const CallSuperHeros = () => {
  const onSuccess = (data) => {
    console.log("On Call Super Heroes Page", data);
  };

  const onError = (error) => {
    console.log("On Error Call Super Heroes Page", error);
  };

  const { data, isLoading, isError, error, refetch } = useGetSuperHeroesHook(
    onSuccess,
    onError,
    false
  );

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      <button onClick={refetch}>Fetch data on Call</button>
      {data?.data.map((heroes) => {
        return <div key={heroes.name}>{heroes.name}</div>;
      })}
    </div>
  );
};
